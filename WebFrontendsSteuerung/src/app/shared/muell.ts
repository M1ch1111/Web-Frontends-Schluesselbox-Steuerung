import { Injectable, inject, signal } from '@angular/core';
import { MqttService } from './mqtt';

@Injectable({
  providedIn: 'root'
})
export class MuellService {
  private mqtt = inject(MqttService);

  upcomingMuell = signal<{ datumStr: string; art: string; istHeute: boolean }[]>([]);

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

  sendeMuell(muellArt: string) {
    this.mqtt.publish('schluesselbox/muell', muellArt);
  }
}
