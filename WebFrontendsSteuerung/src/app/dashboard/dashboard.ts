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

  // WICHTIG: Hiermit zwingen wir Angular später zum Aktualisieren des Bildschirms!
  private cdr = inject(ChangeDetectorRef);

  // Status-Variablen für das HTML
  tuerOffen = false;
  boxStatus = 'Warte auf Daten...';
  // NEU: Statt true/false speichern wir jetzt Text (die Namen)
  schluesselPlaetze: string[] = ['leer', 'leer', 'leer', 'leer', 'leer'];

  ngOnInit() {
    // 1. Mit dem Raspberry Pi verbinden
    // ⚠️ WICHTIG: Ändere diese IP zu der deines Raspberry Pis!
    this.mqtt.connect('192.168.178.54');

    // 2. Auf eingehende Nachrichten hören
    this.mqtt.messages.subscribe((data) => {
      this.verarbeiteNachricht(data.topic, data.message);
    });

    // 3. NEU: Nach kurzer Wartezeit (damit die Verbindung sicher steht) den ESP32 aktiv fragen!
    setTimeout(() => {
      this.frageStatusAb();
    }, 1500);
  }

  // NEU: Funktion, die eine Anfrage an den ESP32 schickt
  frageStatusAb() {
    console.log('Sende Status-Anfrage an den ESP32...');
    this.mqtt.publish('schluesselbox/anfrage', 'status_bitte');
  }

  verarbeiteNachricht(topic: string, message: string) {
    // Diese Zeile zeigt uns in der F12-Konsole, ob die Daten wirklich HIER ankommen
    console.log(`📡 DASHBOARD EMPFÄNGT: ${topic} -> ${message}`);

    if (topic === 'schluesselbox/status') {
      this.boxStatus = message;
    }
    else if (topic === 'schluesselbox/tuer') {
      this.tuerOffen = (message.toLowerCase() === 'offen' || message === 'true' || message === '1');
    }
    else if (topic.includes('erkannt')) {
      const platzNummer = this.extrahierePlatzNummer(topic);
      // NEU: Wir speichern direkt den empfangenen Namen (z.B. "Papa")
      if (platzNummer >= 0 && platzNummer < 5) this.schluesselPlaetze[platzNummer] = message;
    }
    else if (topic.includes('entfernt')) {
      const platzNummer = this.extrahierePlatzNummer(topic);
      // NEU: Wir setzen den Platz wieder auf den Text "leer"
      if (platzNummer >= 0 && platzNummer < 5) this.schluesselPlaetze[platzNummer] = 'leer';
    }

    // DER HOLZHAMMER: Zwingt die Webseite, sich sofort neu zu zeichnen!
    this.cdr.detectChanges();
  }

  // Hilfsfunktion: Holt die '1' aus 'schluesselbox/platz_1/erkannt'
  private extrahierePlatzNummer(topic: string): number {
    const teile = topic.split('/');
    if (teile.length < 2) return -1;
    const platzString = teile[1]; // 'platz_1'
    const nummer = parseInt(platzString.replace('platz_', ''), 10);
    return nummer - 1; // Array startet bei 0, also -1
  }

  // Befehle an den ESP32 senden
  sendeWetter(wetter: string) {
    this.mqtt.publish('schluesselbox/wetter', wetter);
  }

  sendeMuell(muellArt: string) {
    this.mqtt.publish('schluesselbox/muell', muellArt);
  }

  async logout() {
    await this.auth.logout();
    this.router.navigate(['/login']);
  }
}
