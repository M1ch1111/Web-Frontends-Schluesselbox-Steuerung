import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private is_logged_in: boolean = false;

  constructor() { }

  isLoggedIn(): boolean {
    return this.is_logged_in;
  }

  // Dummy Login für das MVP
  async login(username: string, password: string): Promise<boolean> {
    if (username === 'admin' && password === 'admin') {
      this.is_logged_in = true;
      return true;
    } else {
      return false;
    }
  }

  async logout(): Promise<void> {
    this.is_logged_in = false;
  }
}
