import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- 1. Das hier importieren
import { AuthService } from '../../shared/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [FormsModule] // <-- 2. Das Modul hier in der Komponente registrieren!
})
export class Login {
  login_error = false;

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
