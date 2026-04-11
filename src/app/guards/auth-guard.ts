// auth-guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth';

// لو مش logged in → login
export const authGuard: CanActivateFn = () => {
  const auth   = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn()) return true;
  return router.createUrlTree(['/login']);
};

// لو logged in → وجّهه لصفحته
export const guestGuard: CanActivateFn = () => {
  const auth   = inject(AuthService);
  const router = inject(Router);
  if (!auth.isLoggedIn()) return true;
  const role = auth.getRole();
  if (role === 'Merchant')  return router.createUrlTree(['/merchant/home']);
  if (role === 'Affiliate') return router.createUrlTree(['/affiliate/home']);
  return router.createUrlTree(['/login']);
};

// Affiliate فقط
export const affiliateGuard: CanActivateFn = () => {
  const auth   = inject(AuthService);
  const router = inject(Router);
  if (!auth.isLoggedIn()) return router.createUrlTree(['/login']);
  if (auth.isAffiliate()) return true;
  // لو Merchant وجّهه لصفحته
  return router.createUrlTree(['/merchant/home']);
};

// Merchant فقط
export const merchantGuard: CanActivateFn = () => {
  const auth   = inject(AuthService);
  const router = inject(Router);
  if (!auth.isLoggedIn()) return router.createUrlTree(['/login']);
  if (auth.isMerchant()) return true;
  // لو Affiliate وجّهه لصفحته
  return router.createUrlTree(['/affiliate/home']);
};