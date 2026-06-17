import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
// Importiere den AuthService aus deinem shared-Ordner
import { AuthService } from '../../shared/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  login_error = false;

  // Dependency Injection für Service und Router
  private auth = inject(AuthService);
  private router = inject(Router);

  async onSubmit(email: string, pass: string) {
    // Prüft die Daten (unser Dummy-Login aus dem AuthService)
    const success = await this.auth.login(email, pass);

    if (success) {
      this.login_error = false;
      this.router.navigate(['/dashboard']); // Weiterleitung bei Erfolg
    } else {
      this.login_error = true; // Zeigt die rote Fehlermeldung im HTML
    }
  }
}
