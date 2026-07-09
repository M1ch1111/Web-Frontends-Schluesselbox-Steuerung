# Disclaimer: KI-Unterstuetzung
Teile dieses Projekts (insbesondere Code-Strukturierung, Styling und Dokumentation) wurden unterstuetzend mit Hilfe von Kuenstlicher Intelligenz generiert.

---

# Schluesselbox-Steuerung (Web-Frontend)

Dieses Projekt ist das Angular-basierte Web-Frontend fuer eine smarte Schluesselbox-Steuerung. Es ermoeglicht die Ueberwachung und Verwaltung von Schluesseln, die an einem ESP32-Mikrocontroller mit RFID-Lesern haengen, sowie die Steuerung von Smart Home Geraeten (Home Assistant) und die Anzeige von Live-Wetter- sowie Muellabfuhrdaten.

## Architektur & Technologien

Das Projekt wurde als Single Page Application (SPA) umgesetzt und nutzt folgende Technologien:

* Angular 19 (Standalone Components, Signals)
* TypeScript
* Bootstrap 5 / CSS Grid & Flexbox
* MQTT ueber WebSockets zur Kommunikation mit der Hardware
* REST APIs (Home Assistant, OpenMeteo, iCal-Parser)

## Installation & Start

1. Abhaengigkeiten installieren:
   npm install

2. Entwicklungsserver starten:
   ng serve

3. Browser oeffnen: http://localhost:4200/

## Autoren
Entwickelt im Rahmen einer Hochschul-Abgabe.
Github Repository: https://github.com/M1ch1111/Web-Frontends-Schluesselbox-Steuerung
