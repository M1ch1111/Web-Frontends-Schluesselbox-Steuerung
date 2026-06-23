import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../shared/auth';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrls: ['./not-found.css']
})
export class NotFound {
  private auth = inject(AuthService);

  getRedirectRoute(): string {
    return this.auth.isLoggedIn() ? '/dashboard' : '/login';
  }

  getButtonText(): string {
    return this.auth.isLoggedIn() ? 'Zurück zum Dashboard' : 'Zurück zum Login';
  }
}
