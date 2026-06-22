import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth';
import { MqttService } from '../shared/mqtt';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnInit {
  private auth = inject(AuthService);
  private router = inject(Router);
  private mqtt = inject(MqttService);
  private cdr = inject(ChangeDetectorRef);

  isConnected = false;
  tuerOffen = false;
  boxStatus = 'Suche nach Schlüsselbox...';
  schluesselPlaetze: string[] = ['leer', 'leer', 'leer', 'leer', 'leer'];

  mqttLogs: { zeit: string, topic: string, message: string }[] = [];
  upcomingMuell: { datumStr: string, art: string, istHeute: boolean }[] = [];

  ngOnInit() {
    this.mqtt.connect('192.168.178.50');

    this.mqtt.messages.subscribe((data) => {
      this.isConnected = true;
      this.verarbeiteNachricht(data.topic, data.message);
    });

    setTimeout(() => {
      this.frageStatusAb();
      this.ermittleLiveMuell();

      setTimeout(() => {
        if (!this.isConnected) {
          this.boxStatus = 'Box ist offline (Kein Strom / Kein WLAN)';
          this.cdr.detectChanges();
        }
      }, 3000);

    }, 1500);
  }

  frageStatusAb() {
    this.mqtt.publish('schluesselbox/anfrage', 'status_bitte');
  }

  verarbeiteNachricht(topic: string, message: string) {
    const jetzt = new Date();
    const zeitString = jetzt.toLocaleTimeString('de-DE');
    this.mqttLogs.unshift({ zeit: zeitString, topic: topic, message: message });

    if (this.mqttLogs.length > 50) this.mqttLogs.pop();

    if (topic === 'schluesselbox/status') this.boxStatus = message;
    else if (topic === 'schluesselbox/tuer') {
      this.tuerOffen = (message.toLowerCase() === 'offen' || message === 'true' || message === '1');
    }
    else if (topic.includes('erkannt')) {
      const platzNummer = this.extrahierePlatzNummer(topic);
      if (platzNummer >= 0 && platzNummer < 5) this.schluesselPlaetze[platzNummer] = message;
    }
    else if (topic.includes('entfernt')) {
      const platzNummer = this.extrahierePlatzNummer(topic);
      if (platzNummer >= 0 && platzNummer < 5) this.schluesselPlaetze[platzNummer] = 'leer';
    }
    this.cdr.detectChanges();
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

      this.sendeWetter(`${wetterText} ${temp}C`);
    } catch (error) {
      console.error('Fehler beim Wetter-Abruf', error);
    }
  }

  async ermittleLiveMuell() {
    try {
      // Dateien im 'public' Ordner von Angular sind direkt über den Root-Pfad '/' erreichbar.
      const filePath = '/muell_merowingerweg.ics';

      const response = await fetch(filePath);

      if (!response.ok) {
        console.error(`❌ Datei nicht gefunden: ${filePath} (HTTP Status: ${response.status})`);
        return;
      }

      const text = await response.text();

      // Sicherheitscheck: Verhindert, dass eine Angular 404-HTML-Seite geparst wird.
      if (!text.includes('BEGIN:VEVENT')) {
        console.error('❌ Die geladene Datei ist keine gültige ICS-Datei. Inhalt:', text.substring(0, 100));
        return;
      }

      console.log(`✅ Kalender erfolgreich geladen von: ${filePath}`);
      const icsData = text;

      // Zeitrahmen berechnen: Heute 00:00 Uhr bis in 7 Tagen 23:59 Uhr
      const heute = new Date();
      heute.setHours(0, 0, 0, 0);

      const in7Tagen = new Date(heute);
      in7Tagen.setDate(heute.getDate() + 7);
      in7Tagen.setHours(23, 59, 59, 999);

      const heuteStr = heute.getFullYear().toString() +
        (heute.getMonth() + 1).toString().padStart(2, '0') +
        heute.getDate().toString().padStart(2, '0');

      let heutigerMuell = 'Kein Muell';
      let tempList: { date: Date, datumStr: string, art: string, istHeute: boolean }[] = [];

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
      this.upcomingMuell = tempList;

      console.log('Müll für HEUTE ermittelt:', heutigerMuell);
      this.sendeMuell(heutigerMuell);

      this.cdr.detectChanges();

    } catch (error) {
      console.error('Fehler beim Verarbeiten des Müllkalenders:', error);
    }
  }

  async logout() {
    await this.auth.logout();
    this.router.navigate(['/login']);
  }
}
