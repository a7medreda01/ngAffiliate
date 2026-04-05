import { Injectable } from '@angular/core';
import { environment } from '../../shared/environment/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../../models/product-model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
products: Product[] = [
  {
    id: 1,
    name: 'Apple iPhone 14',
    description: 'Latest Apple iPhone with advanced camera',
    details: '6.1-inch display, A15 Bionic chip, dual-camera system, iOS 16',
    price: 999,
    oldPrice: 1099,
    sale: 10,
    stockQuantity: 50,
    images: [
      'assets/images/products/p1.png',
      'assets/images/products/p2.png',
    ],
    reviews: [
      { id: 1, userName: 'Ali', comment: 'Amazing phone!', rating: 5, createdAt: new Date('2026-01-05') },
      { id: 2, userName: 'Sara', comment: 'Worth the price', rating: 4, createdAt: new Date('2026-02-10') }
    ],
    rating: 4.5,
    quantity: 1,
    brandName: 'Apple',
    typeName: 'Smartphone'
  },
  {
    id: 2,
    name: 'Samsung Galaxy S23',
    description: 'Flagship Samsung phone with top features',
    details: '6.2-inch display, Snapdragon 8 Gen 2, triple-camera system, Android 13',
    price: 899,
    oldPrice: 999,
    sale: 10,
    stockQuantity: 40,
    images: [
      'assets/images/products/p3.png',
      'assets/images/products/p2.png',
    ],
    reviews: [
      { id: 3, userName: 'Hassan', comment: 'Excellent display', rating: 5, createdAt: new Date('2026-03-12') },
      { id: 4, userName: 'Nour', comment: 'Battery could be better', rating: 4, createdAt: new Date('2026-03-15') }
    ],
    rating: 4.3,
    quantity: 1,
    brandName: 'Samsung',
    typeName: 'Smartphone'
  },
  {
    id: 3,
    name: 'Sony WH-1000XM5',
    description: 'Industry-leading noise-canceling headphones',
    details: 'Over-ear, wireless, 30-hour battery, Adaptive Sound Control.Our advanced noise cancelling gets even better.Multi Noise Sensor technology.With four microphones on each earcup, this is our biggest ever step forward in noise cancelling. Ambient sound is captured even more accurately for a dramatic reduction in high frequency noise. Thanks to Auto NC Optimizer, noise cancelling performance is always and automatically optimised based on wearing conditions and external environmental factors such as atmospheric pressure.',
    price: 399,
    oldPrice: 449,
    sale: 11,
    stockQuantity: 30,
    images: [
      'assets/images/products/p4.png',
      'assets/images/products/p2.png',
    ],
    reviews: [
      { id: 5, userName: 'Mona', comment: 'Best noise cancellation!', rating: 5, createdAt: new Date('2026-02-20') },
      { id: 5, userName: 'Ahmed', comment: 'Best Sound Mood! and buttary good to all days in week', rating: 4.5, createdAt: new Date('2026-02-21') }
    ],
    rating: 4.8,
    quantity: 1,
    brandName: 'Sony',
    typeName: 'Headphones'
  },
  {
    id: 4,
    name: 'Dell XPS 13',
    description: 'Powerful ultrabook for professionals',
    details: '13.4-inch display, Intel i7, 16GB RAM, 512GB SSD, Windows 11',
    price: 1299,
    oldPrice: 1399,
    sale: 7,
    stockQuantity: 20,
    images: [
      'assets/images/products/p5.png',
      'assets/images/products/p2.png',
    ],
    reviews: [
      { id: 6, userName: 'Omar', comment: 'Lightweight and fast', rating: 5, createdAt: new Date('2026-03-01') },
      { id: 7, userName: 'Layla', comment: 'Amazing build quality', rating: 5, createdAt: new Date('2026-03-05') }
    ],
    rating: 4.7,
    quantity: 1,
    brandName: 'Dell',
    typeName: 'Laptop'
  },
  {
    id: 5,
    name: 'Canon EOS R6',
    description: 'Professional mirrorless camera',
    details: '20MP full-frame sensor, 4K video, 12 fps continuous shooting',
    price: 2499,
    oldPrice: 2699,
    sale: 8,
    stockQuantity: 10,
    images: [
      'assets/images/products/p6.png',
      'assets/images/products/p2.png',
    ],
    reviews: [
      { id: 8, userName: 'Youssef', comment: 'Excellent image quality', rating: 5, createdAt: new Date('2026-01-25') }
    ],
    rating: 4.9,
    quantity: 1,
    brandName: 'Canon',
    typeName: 'Camera'
  }
];

}
