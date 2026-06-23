import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { UpperCasePipe, DatePipe } from '@angular/common';
import { AuthService } from '../shared/auth';
import { MqttService } from '../shared/mqtt';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
  imports: [UpperCasePipe, DatePipe]
})
export class Dashboard implements OnInit {
  private auth = inject(AuthService);
  private router = inject(Router);
  private mqtt = inject(MqttService);

  isConnected = signal(false);
  tuerOffen = signal(false);
  boxStatus = signal('Suche nach Schlüsselbox...');
  schluesselPlaetze = signal<string[]>(['leer', 'leer', 'leer', 'leer', 'leer']);

  mqttLogs = signal<{ zeit: Date; topic: string; message: string }[]>([]);
  upcomingMuell = signal<{ datumStr: string; art: string; istHeute: boolean }[]>([]);

  mqttIp = signal('192.168.178.50');
  settingsOpen = signal(false);
  wetterInfo = signal('Keine Daten (Bitte laden)');
  weatherCode = signal<number | null>(null);

  ngOnInit() {
    const savedIp = localStorage.getItem('schluesselbox_mqtt_ip');
    if (savedIp) {
      this.mqttIp.set(savedIp);
    }

    this.mqtt.connect(this.mqttIp());

    this.mqtt.messages.subscribe((data) => {
      this.isConnected.set(true);
      this.verarbeiteNachricht(data.topic, data.message);
    });

    setTimeout(() => {
      this.frageStatusAb();
      this.ermittleLiveMuell();

      setTimeout(() => {
        if (!this.isConnected()) {
          this.boxStatus.set('Box ist offline (Kein Strom / Kein WLAN)');
        }
      }, 3000);

    }, 1500);
  }

  toggleSettings() {
    this.settingsOpen.update(open => !open);
  }

  saveSettings(newIp: string) {
    const trimmed = newIp.trim();
    if (trimmed) {
      this.mqttIp.set(trimmed);
      localStorage.setItem('schluesselbox_mqtt_ip', this.mqttIp());
      this.isConnected.set(false);
      this.boxStatus.set('Verbindung wird neu aufgebaut...');
      this.mqtt.connect(this.mqttIp());

      setTimeout(() => {
        this.frageStatusAb();
      }, 1500);
    }
    this.settingsOpen.set(false);
  }

  frageStatusAb() {
    this.mqtt.publish('schluesselbox/anfrage', 'status_bitte');
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
      }
    } else if (topic.includes('entfernt')) {
      const platzNummer = this.extrahierePlatzNummer(topic);
      if (platzNummer >= 0 && platzNummer < 5) {
        this.schluesselPlaetze.update(plaetze => {
          const copy = [...plaetze];
          copy[platzNummer] = 'leer';
          return copy;
        });
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
            const year = parseInt(eventDate.substring(0, 4), 10);
            const month = parseInt(eventDate.substring(4, 6), 10) - 1;
            const day = parseInt(eventDate.substring(6, 8), 10);
            const eDate = new Date(year, month, day);

            if (eDate >= heute && eDate <= in7Tagen) {
              const isHeute = eventDate === heuteStr || eventDate.startsWith(heuteStr);
              if (isHeute) {
                heutigerMuell = eventSummary;
              }

              const datumFormatiert = `${day.toString().padStart(2, '0')}.${(month + 1).toString().padStart(2, '0')}.${year}`;
              const existiertSchon = tempList.find(t => t.datumStr === datumFormatiert && t.art === eventSummary);

              if (!existiertSchon) {
                tempList.push({
                  date: eDate,
                  datumStr: datumFormatiert,
                  art: eventSummary,
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
}
