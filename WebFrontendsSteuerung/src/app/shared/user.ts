import { Injectable } from '@angular/core';

/** Profil eines registrierten Nutzers */
export interface UserProfile {
  username: string;            // Muss dem MQTT-Namen (ESP32 RFID) entsprechen
  password: string;            // Klartext für MVP (kein Backend)
  isAdmin: boolean;            // Kann andere Nutzer verwalten
  automationDevices: string[]; // entity_ids die bei Ankunft eingeschaltet werden
  climatePreferences?: Record<string, number>; // Wunschtemperaturen pro Heizkörper
}

const STORAGE_KEY = 'schluesselbox_users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: UserProfile[] = [];

  constructor() {
    this.loadFromStorage();

    // Beim allerersten Start: Default-Admin anlegen
    if (this.users.length === 0) {
      this.users.push({
        username: 'admin',
        password: 'admin',
        isAdmin: true,
        automationDevices: [],
        climatePreferences: {}
      });
      this.saveToStorage();
    }
  }

  // ── CRUD ────────────────────────────────────────

  /** Gibt alle registrierten Nutzer zurück */
  getUsers(): UserProfile[] {
    return [...this.users];
  }

  /** Findet einen Nutzer anhand des Namens */
  getUserByName(username: string): UserProfile | undefined {
    return this.users.find(u => u.username.toLowerCase() === username.toLowerCase());
  }

  /** Prüft Login-Daten und gibt den User zurück wenn erfolgreich */
  authenticate(username: string, password: string): UserProfile | null {
    const user = this.users.find(
      u => u.username.toLowerCase() === username.toLowerCase() && u.password === password
    );
    return user ?? null;
  }

  /** Fügt einen neuen Nutzer hinzu */
  addUser(username: string, password: string, isAdmin: boolean = false): boolean {
    // Prüfen ob Username schon existiert
    if (this.getUserByName(username)) {
      return false;
    }

    this.users.push({
      username: username.trim(),
      password: password,
      isAdmin: isAdmin,
      automationDevices: [],
      climatePreferences: {}
    });
    this.saveToStorage();
    return true;
  }

  /** Entfernt einen Nutzer (der feste 'admin' kann nicht gelöscht werden) */
  removeUser(username: string): boolean {
    if (username.toLowerCase() === 'admin') {
      return false; // Fester Admin-Nutzer darf nicht gelöscht werden
    }
    const index = this.users.findIndex(
      u => u.username.toLowerCase() === username.toLowerCase()
    );
    if (index === -1) return false;

    this.users.splice(index, 1);
    this.saveToStorage();
    return true;
  }

  // ── Automatisierungs-Geräte ─────────────────────

  /** Gibt die Automatisierungs-Geräte eines Nutzers zurück */
  getAutomationDevices(username: string): string[] {
    const user = this.getUserByName(username);
    return user ? [...user.automationDevices] : [];
  }

  /** Setzt die komplette Geräteliste für einen Nutzer */
  setAutomationDevices(username: string, entityIds: string[]): void {
    const user = this.getUserByName(username);
    if (user) {
      user.automationDevices = [...entityIds];
      this.saveToStorage();
    }
  }

  /** Toggelt ein einzelnes Gerät in der Automatisierungsliste */
  toggleAutomationDevice(username: string, entityId: string): boolean {
    const user = this.getUserByName(username);
    if (!user) return false;

    const index = user.automationDevices.indexOf(entityId);
    if (index === -1) {
      user.automationDevices.push(entityId);
    } else {
      user.automationDevices.splice(index, 1);
    }
    this.saveToStorage();
    return index === -1; // true = wurde hinzugefügt, false = wurde entfernt
  }

  /** Prüft ob ein Gerät in der Automatisierungsliste eines Nutzers ist */
  isDeviceInAutomation(username: string, entityId: string): boolean {
    const user = this.getUserByName(username);
    return user ? user.automationDevices.includes(entityId) : false;
  }

  // ── Heizungs-Präferenzen ────────────────────────

  /** Prüft, ob jemand anders diese Heizung bereits in der Routine hat */
  getClimateOwner(entityId: string): string | null {
    for (const user of this.users) {
      if (user.automationDevices.includes(entityId)) {
        return user.username;
      }
    }
    return null;
  }

  /** Gibt die Wunschtemperatur eines Nutzers für ein Gerät zurück */
  getClimatePreference(username: string, entityId: string): number | null {
    const user = this.getUserByName(username);
    if (!user || !user.climatePreferences) return null;
    return user.climatePreferences[entityId] ?? null;
  }

  /** Setzt die Wunschtemperatur eines Nutzers für ein Gerät */
  setClimatePreference(username: string, entityId: string, temp: number): void {
    const user = this.getUserByName(username);
    if (user) {
      if (!user.climatePreferences) {
        user.climatePreferences = {};
      }
      user.climatePreferences[entityId] = temp;
      this.saveToStorage();
    }
  }

  // ── Persistenz ──────────────────────────────────

  private loadFromStorage(): void {
    try {
      if (typeof localStorage !== 'undefined') {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          this.users = JSON.parse(stored);
        }
      }
    } catch (error) {
      console.error('Fehler beim Laden der Nutzerdaten:', error);
      this.users = [];
    }
  }

  private saveToStorage(): void {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.users));
      }
    } catch (error) {
      console.error('Fehler beim Speichern der Nutzerdaten:', error);
    }
  }
}
