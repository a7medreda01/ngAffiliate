import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth';

// ─── Guard 1: للصفحات المحمية ──────────────────────────
// لو مش logged in → يروح login
export const authGuard: CanActivateFn = () => {
  const auth   = inject(AuthService);
  const router = inject(Router);

  if (auth.isLoggedIn()) return true;

  return router.createUrlTree(['/login']);
};

// ─── Guard 2: لصفحات Login و Register ─────────────────
// لو logged in → يروح home ومتدخلش login تاني
export const guestGuard: CanActivateFn = () => {
  const auth   = inject(AuthService);
  const router = inject(Router);

  if (!auth.isLoggedIn()) return true;

  return router.createUrlTree(['/home']);
};