import { Injectable, inject, signal } from '@angular/core';
import { MqttService } from './mqtt';

@Injectable({
  providedIn: 'root'
})
export class WetterService {
  private mqtt = inject(MqttService);

  wetterInfo = signal('Keine Daten (Bitte laden)');
  weatherCode = signal<number | null>(null);

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
      this.mqtt.publish('schluesselbox/wetter', `${wetterText} ${temp}C`);
    } catch (error) {
      console.error('Fehler beim Wetter-Abruf', error);
      this.wetterInfo.set('Fehler beim Laden');
    }
  }

  sendeWetter(wetter: string) {
    this.mqtt.publish('schluesselbox/wetter', wetter);
  }
}
