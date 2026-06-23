import { Injectable, NgZone, inject } from '@angular/core';
// Wir importieren das ganze Paket einfach als "mqttPkg"
import * as mqttPkg from 'mqtt';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MqttService {
  private client!: mqttPkg.MqttClient;

  public messages: Subject<{ topic: string; message: string }> = new Subject();

  // WICHTIG: Wir holen uns den Angular "Radar" (NgZone)
  private zone = inject(NgZone);

  constructor() { }

  connect(brokerIp: string) {
    if (this.client) {
      this.disconnect();
    }

    const brokerUrl = `ws://${brokerIp}:9001`;
    console.log('Verbinde mit MQTT Broker:', brokerUrl);

    // --- DER VITE-TRICK ---
    const mqtt = (mqttPkg as any).default || mqttPkg;

    this.client = mqtt.connect(brokerUrl);
    // -----------------------

    this.client.on('connect', () => {
      console.log('Erfolgreich mit MQTT Broker verbunden!');

      this.client.subscribe('schluesselbox/status');
      this.client.subscribe('schluesselbox/tuer');
      this.client.subscribe('schluesselbox/+/erkannt');
      this.client.subscribe('schluesselbox/+/entfernt');
    });

    this.client.on('message', (topic: string, message: any) => {
      // WICHTIG: Wir führen das Weiterleiten der Nachricht INNERHALB der Angular Zone aus.
      // Das zwingt das Dashboard dazu, das HTML sofort neu zu zeichnen!
      this.zone.run(() => {
        this.messages.next({ topic, message: message.toString() });
      });
    });

    this.client.on('error', (error: any) => {
      console.error('MQTT Fehler:', error);
    });
  }

  disconnect() {
    if (this.client) {
      console.log('Verbindung zum MQTT Broker wird getrennt.');
      try {
        this.client.end(true);
      } catch (err) {
        console.error('Fehler beim Trennen von MQTT:', err);
      }
    }
  }

  // Funktion zum Senden an den ESP32
  publish(topic: string, message: string) {
    if (this.client && this.client.connected) {
      this.client.publish(topic, message);
      console.log(`Gesendet -> Topic: ${topic}, Nachricht: ${message}`);
    } else {
      console.warn('Nicht gesendet. MQTT ist nicht verbunden.');
    }
  }
}
