import { Injectable } from '@angular/core';

export interface UserProfile {
  username: string;            
  password: string;            
  isAdmin: boolean;            
  automationDevices: string[]; 
  climatePreferences?: Record<string, number>; 
}

const STORAGE_KEY = 'schluesselbox_users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: UserProfile[] = [];

  constructor() {
    this.loadFromStorage();
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

  getUsers(): UserProfile[] {
    return [...this.users];
  }

  getUserByName(username: string): UserProfile | undefined {
    return this.users.find(u => u.username.toLowerCase() === username.toLowerCase());
  }

  authenticate(username: string, password: string): UserProfile | null {
    const user = this.users.find(
      u => u.username.toLowerCase() === username.toLowerCase() && u.password === password
    );
    return user ?? null;
  }

  addUser(username: string, password: string, isAdmin: boolean = false): boolean {
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

  removeUser(username: string): boolean {
    if (username.toLowerCase() === 'admin') {
      return false; 
    }
    const index = this.users.findIndex(
      u => u.username.toLowerCase() === username.toLowerCase()
    );
    if (index === -1) return false;

    this.users.splice(index, 1);
    this.saveToStorage();
    return true;
  }

  getAutomationDevices(username: string): string[] {
    const user = this.getUserByName(username);
    return user ? [...user.automationDevices] : [];
  }

  setAutomationDevices(username: string, entityIds: string[]): void {
    const user = this.getUserByName(username);
    if (user) {
      user.automationDevices = [...entityIds];
      this.saveToStorage();
    }
  }

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
    return index === -1; 
  }

  isDeviceInAutomation(username: string, entityId: string): boolean {
    const user = this.getUserByName(username);
    return user ? user.automationDevices.includes(entityId) : false;
  }

  getClimateOwner(entityId: string): string | null {
    for (const user of this.users) {
      if (user.automationDevices.includes(entityId)) {
        return user.username;
      }
    }
    return null;
  }

  getClimatePreference(username: string, entityId: string): number | null {
    const user = this.getUserByName(username);
    if (!user || !user.climatePreferences) return null;
    return user.climatePreferences[entityId] ?? null;
  }

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
