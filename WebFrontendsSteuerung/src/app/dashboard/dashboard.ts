import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {
  private auth = inject(AuthService);
  private router = inject(Router);

  async logout() {
    await this.auth.logout();
    this.router.navigate(['/login']); // Zurück zum Anmeldefenster werfen
  }
}
