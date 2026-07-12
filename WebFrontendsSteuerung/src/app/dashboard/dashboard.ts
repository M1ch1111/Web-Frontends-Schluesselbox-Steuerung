import { Component, OnInit, OnDestroy, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { UpperCasePipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../shared/auth';
import { MqttService } from '../shared/mqtt';
import { HomeAssistantService, HaEntity } from '../shared/homeassistant';
import { UserService } from '../shared/user';
import { WetterService } from '../shared/wetter';
import { MuellService } from '../shared/muell';
import { AdminPanel, UserAddedEvent } from '../admin-panel/admin-panel';
import { MqttTopicPipe } from '../shared/mqtt-topic.pipe';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
  imports: [UpperCasePipe, DatePipe, AdminPanel, MqttTopicPipe, FormsModule]
})
export class Dashboard implements OnInit, OnDestroy {
  auth = inject(AuthService);
  private router = inject(Router);
  private mqtt = inject(MqttService);
  ha = inject(HomeAssistantService);
  userService = inject(UserService);
  wetter = inject(WetterService);
  muell = inject(MuellService);

  private heartbeatInterval: any;
  private timeoutTimer: any;

  isConnected = signal(false);
  tuerOffen = signal(false);
  boxStatus = signal('Suche nach Schlüsselbox...');
  schluesselPlaetze = signal<string[]>(['leer', 'leer', 'leer']);

  mqttLogs = signal<{ zeit: Date; topic: string; message: string }[]>([]);

  mqttIp = signal('Rasp5Uni.local');
  mqttUser = signal('admin');
  mqttPass = signal('admin');
  settingsOpen = signal(false);
  haEntities = signal<HaEntity[]>([]);
  haGrouped = computed(() => this.ha.groupByDomain(this.haEntities()));
  haConnected = signal(false);
  haLoading = signal(false);
  haError = signal<string | null>(null);
  haSettingsOpen = signal(false);
  adminPanelOpen = signal(false);
  userMessage = signal<string | null>(null);

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      const savedIp = localStorage.getItem('schluesselbox_mqtt_ip');
      if (savedIp) {
        this.mqttIp.set(savedIp);
      }
      const savedUser = localStorage.getItem('schluesselbox_mqtt_user');
      if (savedUser) {
        this.mqttUser.set(savedUser);
      }
      const savedPass = localStorage.getItem('schluesselbox_mqtt_pass');
      if (savedPass) {
        this.mqttPass.set(savedPass);
      }
    }

    this.mqtt.connect(this.mqttIp(), this.mqttUser(), this.mqttPass());

    this.mqtt.messages.subscribe((data) => {
      this.resetTimeout();
      this.isConnected.set(true);
      this.verarbeiteNachricht(data.topic, data.message);
    });

    setTimeout(() => {
      this.frageStatusAb();
      this.startHeartbeat();
      this.muell.ermittleLiveMuell();
      this.wetter.ladeLiveWetter();
    }, 1500);
    if (this.ha.isConfigured()) {
      this.ladeSmartHomeGeraete();
    }
  }

  toggleSettings() {
    this.settingsOpen.update(open => !open);
  }

  saveSettings(newIp: string, newUser: string, newPass: string) {
    const trimmed = newIp.trim();
    if (trimmed) {
      this.mqttIp.set(trimmed);
      this.mqttUser.set(newUser.trim());
      this.mqttPass.set(newPass.trim());
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('schluesselbox_mqtt_ip', this.mqttIp());
        localStorage.setItem('schluesselbox_mqtt_user', this.mqttUser());
        localStorage.setItem('schluesselbox_mqtt_pass', this.mqttPass());
      }
      this.isConnected.set(false);
      this.boxStatus.set('Verbindung wird neu aufgebaut...');
      this.mqtt.connect(this.mqttIp(), this.mqttUser(), this.mqttPass());

      setTimeout(() => {
        this.frageStatusAb();
      }, 1500);
    }
    this.settingsOpen.set(false);
  }

  frageStatusAb() {
    this.mqtt.publish('schluesselbox/anfrage', 'status_bitte');
  }

  startHeartbeat() {
    if (this.heartbeatInterval) clearInterval(this.heartbeatInterval);
    this.heartbeatInterval = setInterval(() => {
      this.frageStatusAb();
    }, 10000);

    this.resetTimeout();
  }

  resetTimeout() {
    if (this.timeoutTimer) clearTimeout(this.timeoutTimer);
    this.timeoutTimer = setTimeout(() => {
      this.isConnected.set(false);
      this.boxStatus.set('Box ist offline');
    }, 15000);
  }

  ngOnDestroy() {
    if (this.heartbeatInterval) clearInterval(this.heartbeatInterval);
    if (this.timeoutTimer) clearTimeout(this.timeoutTimer);
  }

  verarbeiteNachricht(topic: string, message: string) {
    const jetzt = new Date();

    this.mqttLogs.update(logs => {
      const newLogs = [{ zeit: jetzt, topic: topic, message: message }, ...logs];
      if (newLogs.length > 50) newLogs.pop();
      return newLogs;
    });

    if (topic === 'schluesselbox/status') {
      this.boxStatus.set(message);
    } else if (topic === 'schluesselbox/tuer') {
      this.tuerOffen.set(message.toLowerCase() === 'offen' || message === 'true' || message === '1');
    } else if (topic.includes('erkannt')) {
      const platzNummer = this.extrahierePlatzNummer(topic);
      if (platzNummer >= 0 && platzNummer < 5) {
        this.schluesselPlaetze.update(plaetze => {
          const copy = [...plaetze];
          copy[platzNummer] = message;
          return copy;
        });
        this.fuehreAutomatisierungAus(message);
      }
    } else if (topic.includes('entfernt')) {
      const platzNummer = this.extrahierePlatzNummer(topic);
      if (platzNummer >= 0 && platzNummer < 5) {
        const personName = this.schluesselPlaetze()[platzNummer];
        
        this.schluesselPlaetze.update(plaetze => {
          const copy = [...plaetze];
          copy[platzNummer] = 'leer';
          return copy;
        });

        if (personName && personName !== 'leer') {
          this.stoppeAutomatisierung(personName);
        }
      }
    }
  }

  private extrahierePlatzNummer(topic: string): number {
    const teile = topic.split('/');
    if (teile.length < 2) return -1;
    const platzString = teile[1];
    const nummer = parseInt(platzString.replace('platz_', ''), 10);
    return nummer - 1;
  }



  async logout() {
    await this.auth.logout();
    this.router.navigate(['/login']);
  }

  toggleHaSettings() {
    this.haSettingsOpen.update(open => !open);
  }

  saveHaSettings(url: string, token: string, room: string) {
    const trimmedUrl = url.trim();
    const trimmedToken = token.trim();
    const trimmedRoom = room.trim();
    if (trimmedUrl && trimmedToken) {
      this.ha.saveConfig(trimmedUrl, trimmedToken, trimmedRoom);
      this.haSettingsOpen.set(false);
      this.ladeSmartHomeGeraete(true);
    }
  }

  async ladeSmartHomeGeraete(showLoadingIndicator: boolean = true) {
    if (!this.ha.isConfigured()) {
      this.haError.set('Bitte zuerst Home Assistant konfigurieren.');
      return;
    }

    if (showLoadingIndicator) {
      this.haLoading.set(true);
    }
    this.haError.set(null);

    try {
      const entities = await this.ha.getStates();
      this.haEntities.set(entities);
      this.haConnected.set(true);
      console.log(`✅ ${entities.length} Smart Home Geräte geladen`);
    } catch (error) {
      console.error('Fehler beim Laden der Smart Home Geräte:', error);
      this.haConnected.set(false);
      this.haError.set(error instanceof Error ? error.message : 'Verbindung fehlgeschlagen');
    } finally {
      if (showLoadingIndicator) {
        this.haLoading.set(false);
      }
    }
  }

  async toggleGeraet(entity: HaEntity) {
    try {
      await this.ha.toggleEntity(entity);
      await this.ladeSmartHomeGeraete(false);
    } catch (error) {
      console.error('Fehler beim Schalten:', error);
      this.haError.set(error instanceof Error ? error.message : 'Schaltvorgang fehlgeschlagen');
    }
  }

  getEntityName(entity: HaEntity): string {
    return entity.attributes.friendly_name ?? entity.entity_id;
  }

  getEntityValue(entity: HaEntity): string {
    const domain = this.ha.getDomain(entity.entity_id);
    if (domain === 'sensor') {
      const unit = entity.attributes.unit_of_measurement ?? '';
      return `${entity.state} ${unit}`.trim();
    }
    if (domain === 'climate') {
      const unit = entity.attributes.unit_of_measurement ?? '°C';
      return `${entity.state} ${unit}`.trim();
    }
    return entity.state === 'on' ? 'An' : entity.state === 'off' ? 'Aus' : entity.state;
  }

  isToggleable(entity: HaEntity): boolean {
    const domain = this.ha.getDomain(entity.entity_id);
    return domain === 'light' || domain === 'switch' || domain === 'input_boolean';
  }

  getEntityType(entity: HaEntity): 'aktor' | 'sensor' | 'climate' {
    const domain = this.ha.getDomain(entity.entity_id);
    if (domain === 'climate') return 'climate';
    return (domain === 'light' || domain === 'switch' || domain === 'input_boolean') ? 'aktor' : 'sensor';
  }

  hasAktoren(): boolean {
    return this.haEntities().some(e => this.getEntityType(e) === 'aktor');
  }

  hasSensoren(): boolean {
    return this.haEntities().some(e => this.getEntityType(e) === 'sensor');
  }

  hasClimate(): boolean {
    return this.haEntities().some(e => this.getEntityType(e) === 'climate');
  }

  getEntitiesByType(type: 'aktor' | 'sensor' | 'climate'): HaEntity[] {
    return this.haEntities().filter(e => this.getEntityType(e) === type);
  }

  getClimateCurrentTemp(entity: HaEntity): string {
    return entity.attributes['current_temperature'] != null ? String(entity.attributes['current_temperature']) : '--';
  }

  getClimateTargetTemp(entity: HaEntity): number {
    return (entity.attributes['temperature'] as number | undefined) ?? 20;
  }

  getClimateMinTemp(entity: HaEntity): number {
    return (entity.attributes['min_temp'] as number | undefined) ?? 15;
  }

  getClimateMaxTemp(entity: HaEntity): number {
    return (entity.attributes['max_temp'] as number | undefined) ?? 30;
  }

  getClimateOwner(entityId: string): string | null {
    return this.userService.getClimateOwner(entityId);
  }

  isClimateLockedForMe(entityId: string): boolean {
    const owner = this.getClimateOwner(entityId);
    return owner !== null && owner !== this.auth.getCurrentUsername();
  }

  getBaseTemperature(entityId: string): number {
    return this.ha.getBaseTemperature(entityId);
  }

  async setBaseTemperature(entityId: string, event: Event) {
    const input = event.target as HTMLInputElement;
    const temp = parseFloat(input.value);
    this.ha.setBaseTemperature(entityId, temp);
    const owner = this.getClimateOwner(entityId);
    let ownerCheckedIn = false;
    if (owner && this.schluesselPlaetze().includes(owner)) {
      ownerCheckedIn = true;
    }

    if (!ownerCheckedIn) {
      try {
        await this.ha.setClimateTemperature(entityId, temp);
        setTimeout(() => this.ladeSmartHomeGeraete(false), 1000);
      } catch (error) {
        console.error('Fehler beim Setzen der Basis-Temp:', error);
      }
    }
  }

  getClimatePreference(entityId: string): number {
    const username = this.auth.getCurrentUsername();
    const pref = this.userService.getClimatePreference(username, entityId);
    if (pref !== null) return pref;
    const entity = this.haEntities().find(e => e.entity_id === entityId);
    if (entity) {
      return this.getClimateTargetTemp(entity);
    }
    return 20; 
  }

  async setClimatePreference(entityId: string, event: Event) {
    const username = this.auth.getCurrentUsername();
    const input = event.target as HTMLInputElement;
    const temp = parseFloat(input.value);
    this.userService.setClimatePreference(username, entityId, temp);
    if (this.schluesselPlaetze().includes(username)) {
      try {
        await this.ha.setClimateTemperature(entityId, temp);
        setTimeout(() => this.ladeSmartHomeGeraete(false), 1000);
      } catch (error) {
        console.error('Fehler beim Setzen der Wunsch-Temp:', error);
      }
    }
  }

  async fuehreAutomatisierungAus(personName: string) {
    if (!this.ha.isConfigured() || !this.haConnected()) return;

    const user = this.userService.getUserByName(personName);
    if (!user || user.automationDevices.length === 0) {
      console.log(`ℹ️ Kein Automatisierungsprofil für "${personName}" gefunden.`);
      return;
    }

    console.log(`🏠 Automatisierung für "${personName}" wird ausgeführt...`);
    let eingeschaltet = 0;

    for (const entityId of user.automationDevices) {
      const entity = this.haEntities().find(e => e.entity_id === entityId);
      if (!entity) continue;

      const domain = this.ha.getDomain(entityId);

      if (domain === 'climate') {
        const prefTemp = this.userService.getClimatePreference(personName, entityId);
        if (prefTemp !== null) {
          try {
            await this.ha.setClimateTemperature(entityId, prefTemp);
            eingeschaltet++; 
          } catch (error) {
            console.error(`❌ Fehler beim Setzen der Wunschtemperatur für ${entityId}:`, error);
          }
        }
      } else {
        if (entity.state === 'off') {
          try {
            await this.ha.callService(domain, 'turn_on', entityId);
            eingeschaltet++;
          } catch (error) {
            console.error(`❌ Fehler beim Einschalten von ${entityId}:`, error);
          }
        }
      }
    }
    if (eingeschaltet > 0) {
      await this.ladeSmartHomeGeraete(false);
      console.log(`✅ Automatisierung für "${personName}": ${eingeschaltet} Gerät(e) eingeschaltet`);
    } else {
      console.log(`ℹ️ Automatisierung für "${personName}": Alle Geräte waren bereits an.`);
    }
  }

  async stoppeAutomatisierung(personName: string) {
    if (!this.ha.isConfigured() || !this.haConnected()) return;

    const user = this.userService.getUserByName(personName);
    if (!user || user.automationDevices.length === 0) {
      console.log(`ℹ️ Kein Automatisierungsprofil zum Ausschalten für "${personName}" gefunden.`);
      return;
    }

    console.log(`🏠 Automatisierung (Ausschalten) für "${personName}" wird ausgeführt...`);
    let ausgeschaltet = 0;
    const aktuellEingecheckt = this.schluesselPlaetze().filter(name => name !== 'leer' && name !== personName);
    const benoetigteGeraete = new Set<string>();
    for (const andereName of aktuellEingecheckt) {
      const andererUser = this.userService.getUserByName(andereName);
      if (andererUser) {
        for (const dev of andererUser.automationDevices) {
          benoetigteGeraete.add(dev);
        }
      }
    }

    for (const entityId of user.automationDevices) {
      if (benoetigteGeraete.has(entityId)) {
        console.log(`ℹ️ Gerät ${entityId} bleibt unangetastet, da es noch von einem anderen Nutzer benötigt wird.`);
        continue;
      }
      const entity = this.haEntities().find(e => e.entity_id === entityId);
      if (!entity) continue;

      const domain = this.ha.getDomain(entityId);

      if (domain === 'climate') {
        const baseTemp = this.ha.getBaseTemperature(entityId);
        try {
          await this.ha.setClimateTemperature(entityId, baseTemp);
          ausgeschaltet++; 
        } catch (error) {
          console.error(`❌ Fehler beim Setzen der Basis-Temperatur für ${entityId}:`, error);
        }
      } else {
        if (entity.state !== 'off') {
          try {
            await this.ha.callService(domain, 'turn_off', entityId);
            ausgeschaltet++;
          } catch (error) {
            console.error(`❌ Fehler beim Ausschalten von ${entityId}:`, error);
          }
        }
      }
    }
    if (ausgeschaltet > 0) {
      await this.ladeSmartHomeGeraete(false);
      console.log(`✅ Automatisierung für "${personName}": ${ausgeschaltet} Gerät(e) ausgeschaltet`);
    } else {
      console.log(`ℹ️ Automatisierung für "${personName}": Keine Geräte ausgeschaltet (waren bereits aus oder werden noch benötigt).`);
    }
  }

  toggleAutomationDevice(entityId: string) {
    const username = this.auth.getCurrentUsername();
    if (!username) return;
    this.userService.toggleAutomationDevice(username, entityId);
  }

  isInAutomation(entityId: string): boolean {
    const username = this.auth.getCurrentUsername();
    if (!username) return false;
    return this.userService.isDeviceInAutomation(username, entityId);
  }

  toggleAdminPanel() {
    this.adminPanelOpen.update(open => !open);
    this.userMessage.set(null);
  }

  onUserAdded(event: UserAddedEvent): void {
    const success = this.userService.addUser(event.username, event.password, event.isAdmin);
    this.userMessage.set(
      success
        ? `✅ Nutzer "${event.username}" wurde angelegt.`
        : `⚠️ Nutzer "${event.username}" existiert bereits.`
    );
  }

  onUserDeleted(username: string): void {
    if (username.toLowerCase() === this.auth.getCurrentUsername().toLowerCase()) {
      this.userMessage.set('⚠️ Du kannst deinen eigenen Account nicht löschen.');
      return;
    }
    const success = this.userService.removeUser(username);
    if (success) {
      this.userMessage.set(`✅ Nutzer "${username}" wurde gelöscht.`);
    }
  }
}
