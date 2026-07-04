import { Injectable, inject, signal } from '@angular/core';
import { UserService, UserProfile } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userService = inject(UserService);

  /** Der aktuell eingeloggte Nutzer (null = nicht eingeloggt) */
  currentUser = signal<UserProfile | null>(null);

  constructor() { }

  isLoggedIn(): boolean {
    return this.currentUser() !== null;
  }

  /** Gibt den Nutzernamen des aktuell eingeloggten Users zurück */
  getCurrentUsername(): string {
    return this.currentUser()?.username ?? '';
  }

  /** Prüft ob der aktuelle User Admin-Rechte hat */
  isAdmin(): boolean {
    return this.currentUser()?.isAdmin ?? false;
  }

  /** Login gegen die UserService-Nutzerliste */
  async login(username: string, password: string): Promise<boolean> {
    const user = this.userService.authenticate(username, password);

    if (user) {
      this.currentUser.set(user);
      return true;
    } else {
      return false;
    }
  }

  async logout(): Promise<void> {
    this.currentUser.set(null);
  }
}
