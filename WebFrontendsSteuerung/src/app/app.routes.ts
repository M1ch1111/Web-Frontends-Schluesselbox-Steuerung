import { Routes, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Login } from './auth/login/login';
import { Dashboard } from './dashboard/dashboard';
import { NotFound } from './not-found/not-found';
import { AuthService } from './shared/auth';
export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true; 
  } else {
    return router.parseUrl('/login'); 
  }
};

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
  { path: '404', component: NotFound },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: NotFound } 
];
