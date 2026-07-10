import { Component, OnInit, OnDestroy, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { UpperCasePipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../shared/auth';
import { MqttService } from '../shared/mqtt';
import { HomeAssistantService, HaEntity } from '../shared/homeassistant';
import { UserService } from '../shared/user';
import { AdminPanel, UserAddedEvent } from '../admin-panel/admin-panel';
import { MqttTopicPipe } from '../shared/mqtt-topic.pipe';
import { SlotStatusDirective } from '../shared/slot-status.directive';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
  imports: [UpperCasePipe, DatePipe, AdminPanel, MqttTopicPipe, SlotStatusDirective, FormsModule]
})
export class Dashboard implements OnInit, OnDestroy {
  auth = inject(AuthService);
  private router = inject(Router);
  private mqtt = inject(MqttService);
  ha = inject(HomeAssistantService);
  userService = inject(UserService);

  private heartbeatInterval: any;
  private timeoutTimer: any;

  isConnected = signal(false);
  tuerOffen = signal(false);
  boxStatus = signal('Suche nach Schlüsselbox...');
  schluesselPlaetze = signal<string[]>(['leer', 'leer', 'leer']);

  mqttLogs = signal<{ zeit: Date; topic: string; message: string }[]>([]);
  upcomingMuell = signal<{ datumStr: string; art: string; istHeute: boolean }[]>([]);

  mqttIp = signal('Rasp5Uni.local');
  mqttUser = signal('admin');
  mqttPass = signal('admin');
  settingsOpen = signal(false);
  wetterInfo = signal('Keine Daten (Bitte laden)');
  weatherCode = signal<number | null>(null);
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
      this.ermittleLiveMuell();
      this.ladeLiveWetter();
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

  sendeWetter(wetter: string) {
    this.mqtt.publish('schluesselbox/wetter', wetter);
  }

  sendeMuell(muellArt: string) {
    this.mqtt.publish('schluesselbox/muell', muellArt);
  }

  async ladeLiveWetter() {
    try {
      const url = 'https://api.open-meteo.com/v1/forecast?latitude=51.5719&longitude=8.1094&current=temperature_2m,weather_code';
      const response = await fetch(url);
      const data = await response.json();
      const temp = Math.round(data.current.temperature_2m);
      const code = data.current.weather_code;

      let wetterText = 'Unbekannt';
      if (code === 0) wetterText = 'Sonnig';
      else if (code === 1 || code === 2 || code === 3) wetterText = 'Bewoelkt';
      else if (code >= 45 && code <= 48) wetterText = 'Nebel';
      else if (code >= 51 && code <= 67) wetterText = 'Regen';
      else if (code >= 71 && code <= 77) wetterText = 'Schnee';
      else if (code >= 95) wetterText = 'Gewitter';

      this.wetterInfo.set(`${wetterText} ${temp}°C`);
      this.weatherCode.set(code);
      this.sendeWetter(`${wetterText} ${temp}C`);
    } catch (error) {
      console.error('Fehler beim Wetter-Abruf', error);
      this.wetterInfo.set('Fehler beim Laden');
    }
  }

  async ermittleLiveMuell() {
    try {
      const filePath = '/muell_merowingerweg.ics';
      const response = await fetch(filePath);

      if (!response.ok) {
        console.error(`❌ Datei nicht gefunden: ${filePath} (HTTP Status: ${response.status})`);
        return;
      }

      const text = await response.text();

      if (!text.includes('BEGIN:VEVENT')) {
        console.error('❌ Die geladene Datei ist keine gültige ICS-Datei. Inhalt:', text.substring(0, 100));
        return;
      }

      console.log(`✅ Kalender erfolgreich geladen von: ${filePath}`);
      const icsData = text;

      const heute = new Date();
      heute.setHours(0, 0, 0, 0);

      const in7Tagen = new Date(heute);
      in7Tagen.setDate(heute.getDate() + 7);
      in7Tagen.setHours(23, 59, 59, 999);

      const heuteStr = heute.getFullYear().toString() +
        (heute.getMonth() + 1).toString().padStart(2, '0') +
        heute.getDate().toString().padStart(2, '0');

      let heutigerMuell = 'Kein Muell';
      let tempList: { date: Date; datumStr: string; art: string; istHeute: boolean }[] = [];

      const lines = icsData.split(/\r?\n/);
      let inEvent = false;
      let eventDate = '';
      let eventSummary = '';

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        if (line === 'BEGIN:VEVENT') {
          inEvent = true;
          eventDate = '';
          eventSummary = '';
        } else if (line === 'END:VEVENT') {
          inEvent = false;

          if (eventDate && eventSummary) {
            eventSummary = eventSummary
              .replace(" 14-taeglich", "")
              .replace(" 4-woechentl.", "")
              .replace(" 14 mal taeglich", "")
              .trim();

            const year = parseInt(eventDate.substring(0, 4), 10);
            const month = parseInt(eventDate.substring(4, 6), 10) - 1;
            const day = parseInt(eventDate.substring(6, 8), 10);
            const eDate = new Date(year, month, day);

            if (eDate >= heute && eDate <= in7Tagen) {
              const isHeute = eventDate === heuteStr || eventDate.startsWith(heuteStr);
              if (isHeute) {
                heutigerMuell = eventSummary;
              }

              const wochentage = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
              const wochentag = wochentage[eDate.getDay()];
              const artMitWochentag = `${eventSummary} (${wochentag})`;

              const datumFormatiert = `${day.toString().padStart(2, '0')}.${(month + 1).toString().padStart(2, '0')}.${year}`;
              const existiertSchon = tempList.find(t => t.datumStr === datumFormatiert && t.art === artMitWochentag);

              if (!existiertSchon) {
                tempList.push({
                  date: eDate,
                  datumStr: datumFormatiert,
                  art: artMitWochentag,
                  istHeute: isHeute
                });
              }
            }
          }
        } else if (inEvent) {
          if (line.startsWith('DTSTART')) {
            const index = line.indexOf(':');
            if (index > -1) eventDate = line.substring(index + 1, index + 9);
          } else if (line.startsWith('SUMMARY')) {
            const index = line.indexOf(':');
            if (index > -1) {
              eventSummary = line.substring(index + 1).trim();
              eventSummary = eventSummary.replace(/ü/g, 'ue').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/Ü/g, 'Ue').replace(/Ä/g, 'Ae').replace(/Ö/g, 'Oe');
            }
          }
        }
      }

      tempList.sort((a, b) => a.date.getTime() - b.date.getTime());
      this.upcomingMuell.set(tempList);

      console.log('Müll für HEUTE ermittelt:', heutigerMuell);
      this.sendeMuell(heutigerMuell);
    } catch (error) {
      console.error('Fehler beim Verarbeiten des Müllkalenders:', error);
    }
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

  /** Gibt den Gerätetyp zurück: 'aktor', 'sensor' oder 'climate' */
  getEntityType(entity: HaEntity): 'aktor' | 'sensor' | 'climate' {
    const domain = this.ha.getDomain(entity.entity_id);
    if (domain === 'climate') return 'climate';
    return (domain === 'light' || domain === 'switch' || domain === 'input_boolean') ? 'aktor' : 'sensor';
  }

  /** Prüft ob es Aktoren in der Geräteliste gibt */
  hasAktoren(): boolean {
    return this.haEntities().some(e => this.getEntityType(e) === 'aktor');
  }

  /** Prüft ob es Sensoren in der Geräteliste gibt */
  hasSensoren(): boolean {
    return this.haEntities().some(e => this.getEntityType(e) === 'sensor');
  }

  /** Prüft ob es Heizungen in der Geräteliste gibt */
  hasClimate(): boolean {
    return this.haEntities().some(e => this.getEntityType(e) === 'climate');
  }

  /** Filtert Entitäten nach Typ */
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
    return 20; // Default
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

  /** Führt die SmartHome-Automatisierung für einen erkannten Nutzer aus */
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
            eingeschaltet++; // Zählt hier als "Aktion ausgeführt"
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

  /** Stoppt die SmartHome-Automatisierung für einen entfernten Nutzer, beachtet dabei andere Nutzer */
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
          ausgeschaltet++; // Zählt hier als "Aktion ausgeführt"
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

  /** Toggelt ein Gerät in der Automatisierungsliste des aktuellen Users */
  toggleAutomationDevice(entityId: string) {
    const username = this.auth.getCurrentUsername();
    if (!username) return;
    this.userService.toggleAutomationDevice(username, entityId);
  }

  /** Prüft ob ein Gerät in der Automatisierungsliste des aktuellen Users ist */
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
