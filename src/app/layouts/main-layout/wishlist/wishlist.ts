import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCard } from '../../../shared/components/product-card/product-card';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist {
  products: any[] = [
    {
      id: 1,
      name: 'Gucci duffle bag',
      price: 960,
      oldPrice: 1160,
      rating: 4.5,
      images: ['assets/images/products/p1.png']
    },
    {
      id: 2,
      name: 'RGB liquid CPU Cooler',
      price: 1960,
      oldPrice: 2200,
      rating: 4.2,
      images: ['assets/images/products/p2.png']
    },
    {
      id: 3,
      name: 'GP11 Shooter USB Gamepad',
      price: 550,
      oldPrice: 700,
      rating: 4.7,
      images: ['assets/images/products/p3.png']
    },
    {
      id: 4,
      name: 'Quilted Satin Jacket',
      price: 750,
      oldPrice: 900,
      rating: 4.1,
      images: ['assets/images/products/p4.png']
    }
  ];

  justForYouProducts: any[] = [
    {
      id: 5,
      name: 'ASUS FHD Gaming Laptop',
      price: 960,
      oldPrice: 1160,
      rating: 4.8,
      images: ['assets/images/products/p5.png']
    },
    {
      id: 6,
      name: 'IPS LCD Gaming Monitor',
      price: 1160,
      oldPrice: 1400,
      rating: 4.6,
      images: ['assets/images/products/p6.png']
    },
    {
      id: 7,
      name: 'HAVIT HV-G92 Gamepad',
      price: 560,
      oldPrice: 700,
      rating: 4.4,
      images: ['assets/images/products/p7.png']
    },
    {
      id: 8,
      name: 'AK-900 Wired Keyboard',
      price: 200,
      oldPrice: 260,
      rating: 4.3,
      images: ['assets/images/products/p8.png']
    }
  ];
}