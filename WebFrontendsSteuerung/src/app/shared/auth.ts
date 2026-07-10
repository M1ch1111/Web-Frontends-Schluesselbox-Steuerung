import { Injectable, inject, signal } from '@angular/core';
import { UserService, UserProfile } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userService = inject(UserService);

  currentUser = signal<UserProfile | null>(null);

  constructor() { }

  isLoggedIn(): boolean {
    return this.currentUser() !== null;
  }

  getCurrentUsername(): string {
    return this.currentUser()?.username ?? '';
  }

  isAdmin(): boolean {
    return this.currentUser()?.isAdmin ?? false;
  }

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
