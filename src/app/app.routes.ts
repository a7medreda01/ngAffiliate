import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Home } from './features/home/home/home';
import { Login } from './features/auth/login/login';
import { authGuard, guestGuard } from './guards/auth-guard';
import { Register } from './features/auth/register/register';
import { NotFound } from './features/not-found/not-found';
export const routes: Routes = [
  {
  path: '',
  component: MainLayout,
  children: [
    { path: 'home', component: Home, canActivate: [authGuard] },
    { path: '',     redirectTo: 'home', pathMatch: 'full' }
  ]
},
{ path: 'login',    component: Login,    canActivate: [guestGuard] },
{ path: 'register', component: Register, canActivate: [guestGuard] },
{ path: '**', component: NotFound }

];

