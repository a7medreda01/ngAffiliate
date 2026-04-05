import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Home } from './features/home/home/home';
import { Product } from './features/product/product/product';
export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home }
    ]
  },
  { path: 'product/:id', component: Product },
];
