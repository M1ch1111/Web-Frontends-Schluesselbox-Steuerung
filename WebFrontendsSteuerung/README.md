# 🔑 Schlüsselbox-Steuerung (Web-Frontend)

Dieses Projekt ist das Angular-basierte Web-Frontend für eine smarte Schlüsselbox-Steuerung (IoT-Projekt). Es ermöglicht die Überwachung und Verwaltung von Schlüsseln, die an einem ESP32-Mikrocontroller mit RFID-Lesern hängen, sowie die Steuerung von Smart Home Geräten (Home Assistant) und die Anzeige von Live-Wetter- sowie Müllabfuhrdaten.

## 🚀 Architektur & Technologien

Das Projekt wurde als moderne **Single Page Application (SPA)** umgesetzt und nutzt folgende Technologien:

*   **Angular 19** (Standalone Components, Signals für State-Management)
*   **TypeScript** für Typsicherheit
*   **Bootstrap 5 / CSS Grid & Flexbox** für ein responsives Design
*   **MQTT über WebSockets** (`mqtt` npm package) für Echtzeit-Kommunikation mit der Hardware
*   **REST APIs** für die Anbindung von Home Assistant, OpenMeteo (Wetter) und iCal-Parsern (Müllabfuhr)

## 🛠️ Installation & Start

Um das Projekt lokal auszuführen, wird Node.js benötigt.

1.  **Abhängigkeiten installieren:**
    ```bash
    npm install
    ```

2.  **Entwicklungsserver starten:**
    ```bash
    ng serve
    ```
3.  Öffne den Browser unter `http://localhost:4200/`.

## 📦 Features

*   **Echtzeit-Synchronisation (MQTT):** Sobald ein Schlüssel aus der Box entnommen wird oder die Tür geöffnet wird, aktualisiert sich das Dashboard in Echtzeit (Pub/Sub Pattern).
*   **Sicherheit:** Login-System mit Session-Speicherung im `localStorage` sowie konfigurierbare MQTT-Zugangsdaten (Standard: admin/admin).
*   **Smart Home Integration:** Steuerung von Lampen, Steckdosen und Heizungen über die lokale Home Assistant REST API.
*   **Responsive Glassmorphism-UI:** Modernes, halbtransparentes Design, das sowohl auf dem Smartphone als auch auf dem Desktop perfekt funktioniert.

## 👥 Autoren
Entwickelt im Rahmen einer Hochschul-Abgabe.
Github Repository: [https://github.com/M1ch1111/Web-Frontends-Schluesselbox-Steuerung](https://github.com/M1ch1111/Web-Frontends-Schluesselbox-Steuerung)
