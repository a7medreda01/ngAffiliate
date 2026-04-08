import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Home } from './features/home/home/home';
import { Login } from './features/auth/login/login';
import { authGuard, guestGuard } from './guards/auth-guard';
import { Register } from './features/auth/register/register';
import { NotFound } from './features/not-found/not-found';
import { Product } from './features/product/product/product';
import { Account } from './features/account/account/account';
import { EditProfile } from './features/account/edit-profile/edit-profile';
import { PaymentOptions } from './features/account/payment-options/payment-options';
import { MyOrders } from './features/account/my-orders/my-orders';
import { Wishlist } from './features/wishlist/wishlist/wishlist';
import { Checkout } from './features/checkout/checkout';
export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: 'home', component: Home, canActivate: [authGuard] },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  { path: 'product/:id', component: Product },
  { path: 'login', component: Login, canActivate: [guestGuard] },
  { path: 'register', component: Register, canActivate: [guestGuard] },
  {
    path: 'account',
    component: Account,
    children: [
      { path: '', redirectTo: 'edit', pathMatch: 'full' },
      { path: 'edit', component: EditProfile },
      { path: 'payment', component: PaymentOptions },
      { path: 'my-orders', component: MyOrders },
    ]
  },
  { path: 'wishlist', component: Wishlist },
  { path: 'checkout', component: Checkout },
  { path: 'account', component: Account },
  { path: '**', component: NotFound }

];

