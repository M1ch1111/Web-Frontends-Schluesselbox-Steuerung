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

  tuerOffen = false;
  boxStatus = 'Warte auf Daten...';
  schluesselPlaetze: string[] = ['leer', 'leer', 'leer', 'leer', 'leer'];

  ngOnInit() {
    this.mqtt.connect('192.168.178.54');

    this.mqtt.messages.subscribe((data) => {
      this.verarbeiteNachricht(data.topic, data.message);
    });

    setTimeout(() => {
      this.frageStatusAb();
    }, 1500);
  }

  frageStatusAb() {
    console.log('Sende Status-Anfrage an den ESP32...');
    this.mqtt.publish('schluesselbox/anfrage', 'status_bitte');
  }

  verarbeiteNachricht(topic: string, message: string) {
    if (topic === 'schluesselbox/status') {
      this.boxStatus = message;
    }
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

  // --- NEU: LIVE WETTER FÜR SOEST ---
  async ladeLiveWetter() {
    try {
      // Koordinaten für Soest (Merowingerweg Umgebung)
      const url = 'https://api.open-meteo.com/v1/forecast?latitude=51.5719&longitude=8.1094&current=temperature_2m,weather_code';
      const response = await fetch(url);
      const data = await response.json();

      // Temperatur runden
      const temp = Math.round(data.current.temperature_2m);
      const code = data.current.weather_code;

      // Wetter-Code (WMO) in saubere LCD-Texte übersetzen
      let wetterText = 'Unbekannt';
      if (code === 0) wetterText = 'Sonnig';
      else if (code === 1 || code === 2 || code === 3) wetterText = 'Bewoelkt';
      else if (code >= 45 && code <= 48) wetterText = 'Nebel';
      else if (code >= 51 && code <= 67) wetterText = 'Regen';
      else if (code >= 71 && code <= 77) wetterText = 'Schnee';
      else if (code >= 95) wetterText = 'Gewitter';

      const finalString = `${wetterText} ${temp}C`;

      console.log('Live Wetter für Soest abgerufen:', finalString);
      this.sendeWetter(finalString);

    } catch (error) {
      console.error('Fehler beim Wetter-Abruf', error);
      alert('Konnte Wetter nicht abrufen.');
    }
  }

  // --- NEU: MÜLLKALENDER FÜR MEROWINGERWEG ---
  ermittleLiveMuell() {
    // Das heutige Datum im Format YYYY-MM-DD
    const heute = new Date().toISOString().split('T')[0];

    // DEIN KALENDER: Hier trägst du einfach die echten Daten für Soest ein!
    // Format: 'JAHR-MONAT-TAG': 'LCD Text' (Achte auf Umlaute!)
    const muellKalender: { [datum: string]: string } = {
      '2026-06-19': 'Restmuell',
      '2026-06-25': 'Gelber Sack',
      '2026-06-26': 'Papiertonne',
      '2026-07-03': 'Bio-Tonne'
    };

    // Prüfen, ob für heute ein Müll-Eintrag existiert
    const heutigerMuell = muellKalender[heute];

    if (heutigerMuell) {
      console.log('Heute wird abgeholt:', heutigerMuell);
      this.sendeMuell(heutigerMuell);
    } else {
      console.log('Heute muss kein Müll raus.');
      this.sendeMuell('Kein Muell');
    }
  }

  async logout() {
    await this.auth.logout();
    this.router.navigate(['/login']);
  }
}
