import { Routes, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Login } from './auth/login/login';
import { Dashboard } from './dashboard/dashboard';
import { AuthService } from './shared/auth';

// Der funktionale Route Guard
export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true; // Zugriff erlaubt
  } else {
    return router.parseUrl('/login'); // Zurück zum Login
  }
};

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' } // Wildcard fängt Fehler ab
];
