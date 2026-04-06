import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Home } from './features/home/home/home';
import { Product } from './features/product/product/product';
import { Wishlist } from './layouts/main-layout/wishlist/wishlist';
import { Account } from './layouts/main-layout/account/account';
import { Checkout } from './layouts/main-layout/checkout/checkout';
export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home }
    ]
  },
  { path: 'product/:id', component: Product}, { path: 'wishlist', component: Wishlist}, { path: 'checkout', component: Checkout},
];
