import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Home } from './features/home/home/home';
import { Login } from './features/auth/login/login';
import { affiliateGuard, authGuard, guestGuard, merchantGuard } from './guards/auth-guard';
import { Register } from './features/auth/register/register';
import { NotFound } from './features/not-found/not-found';
import { Product } from './features/product/product/product';
import { Account } from './features/account/account/account';
import { EditProfile } from './features/account/edit-profile/edit-profile';
import { PaymentOptions } from './features/account/payment-options/payment-options';
import { MyOrders } from './features/account/my-orders/my-orders';
import { Wishlist } from './features/wishlist/wishlist/wishlist';
import { Checkout } from './features/checkout/checkout';
import { OrderDetails } from './features/account/my-orders/order-details/order-details';
import { CartComponent } from './pages/cart/cart';

export const routes: Routes = [
  // ─── Guest Only ───────────────────────────────
  { path: 'login', component: Login, canActivate: [guestGuard] },
  { path: 'register', component: Register, canActivate: [guestGuard] },

  // ─── Affiliate Only ───────────────────────────
  {
    path: 'affiliate',
    canActivate: [affiliateGuard],
    children: [
      {
        path: 'home',
        component: MainLayout,
        children: [
          { path: '', component: Home },
        ]
      },
      { path: 'product/:id', component: Product },
      { path: 'cart', component: CartComponent },
      { path: 'wishlist', component: Wishlist },
      { path: 'checkout', component: Checkout },
      {
        path: 'account',
        component: Account,
        children: [
          { path: '', redirectTo: 'edit', pathMatch: 'full' },
          { path: 'edit', component: EditProfile },
          { path: 'payment', component: PaymentOptions },
          { path: 'my-orders', component: MyOrders },
          { path: 'order-details/:id', component: OrderDetails }
        ]
      },
    ]
  },

  // ─── Merchant Only ────────────────────────────
  {
  path: 'merchant',
  canActivate: [merchantGuard],
  children: [
    {
      path: 'home',
      component: MainLayout,
      children: [{ path: '', component: Home }]
    },
    {
      path: 'account',
      component: Account,
      children: [
        { path: '', redirectTo: 'edit', pathMatch: 'full' },
        { path: 'edit', component: EditProfile }, 
      ]
    },
  ]
},

  // ─── Fallback ─────────────────────────────────
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFound }
];

