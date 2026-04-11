// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// // import { Product } from '../../models/product-model';
// // import { Observable } from 'rxjs/internal/Observable';

// import { Observable, of } from 'rxjs'; // استخدم of لعمل Mock للبيانات
// import { Product } from '../../models/product';


// @Injectable({
//   providedIn: 'root',
// })
// export class ProductService {
//   constructor(private http: HttpClient) {}


//   // getProducts() :Observable<any>{
//   //   return this.http.get(`${environment.baseUrl}products`)
//   // }


//   // تعريف المصفوفة كـ Product[] يضمن لك أن البيانات مطابقة للـ Model
//   products: Product[] = [
//     {
//       id: 1,
//       name: 'Apple iPhone 14',
//       description: 'Latest Apple iPhone with advanced camera',
//       details: '6.1-inch display, A15 Bionic chip, dual-camera system, iOS 16',
//       price: 999,
//       oldPrice: 1099,
//       sale: 10,
//       stockQuantity: 50,
//       images: [
//         'assets/images/products/p1.png',
//         'assets/images/products/p2.png',
//       ],
//       reviews: [
//         { id: 1, userName: 'Ali', comment: 'Amazing phone!', rating: 5, createdAt: new Date('2026-01-05') },
//         { id: 2, userName: 'Sara', comment: 'Worth the price', rating: 4, createdAt: new Date('2026-02-10') }
//       ],
//       rating: 4.5,
//       quantity: 1,
//       brandName: 'Apple',
//       typeName: 'Smartphone'
//     },
//     {
//       id: 2,
//       name: 'Samsung Galaxy S23',
//       description: 'Flagship Samsung phone with top features',
//       details: '6.2-inch display, Snapdragon 8 Gen 2, triple-camera system, Android 13',
//       price: 899,
//       oldPrice: 999,
//       sale: 10,
//       stockQuantity: 40,
//       images: [
//         'assets/images/products/p3.png',
//         'assets/images/products/p2.png',
//       ],
//       reviews: [
//         { id: 3, userName: 'Hassan', comment: 'Excellent display', rating: 5, createdAt: new Date('2026-03-12') },
//         { id: 4, userName: 'Nour', comment: 'Battery could be better', rating: 4, createdAt: new Date('2026-03-15') }
//       ],
//       rating: 4.3,
//       quantity: 1,
//       brandName: 'Samsung',
//       typeName: 'Smartphone'
//     },
//     {
//       id: 3,
//       name: 'Sony WH-1000XM5',
//       description: 'Industry-leading noise-canceling headphones',
//       details: 'Over-ear, wireless, 30-hour battery, Adaptive Sound Control...',
//       price: 399,
//       oldPrice: 449,
//       sale: 11,
//       stockQuantity: 30,
//       images: [
//         'assets/images/products/p4.png',
//         'assets/images/products/p2.png',
//       ],
//       reviews: [
//         { id: 5, userName: 'Mona', comment: 'Best noise cancellation!', rating: 5, createdAt: new Date('2026-02-20') },
//         { id: 6, userName: 'Ahmed', comment: 'Best Sound Mood!', rating: 4.5, createdAt: new Date('2026-02-21') }
//       ],
//       rating: 4.8,
//       quantity: 1,
//       brandName: 'Sony',
//       typeName: 'Headphones'
//     },
//     // يمكنك إضافة بقية المنتجات هنا بنفس النمط
//   ];

//   // دالة لجلب المنتجات لاستخدامها في الـ Components
//   getProducts(): Observable<Product[]> {
//     return of(this.products);
//   }

//   // دالة لجلب منتج واحد بالـ ID
//   getProductById(id: number): Observable<Product | undefined> {
//     return of(this.products.find(p => p.id === id));
//   }
// }




import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../../models/product';
import { environment } from '../../shared/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  products!: Product[];

 getProducts(type?: string): Observable<any[]> {
    let params = new HttpParams();
    if (type) params = params.set('Type', type);
    return this.http.get<any[]>(`${environment.baseUrl}products`, { params });
  }

  // ✅ جيب منتج بالـ ID من الـ API
  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}products/${id}`);
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.baseUrl}categories`);
  }
}