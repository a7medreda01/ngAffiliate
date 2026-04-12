<<<<<<< HEAD
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product, Category, FilterOptions } from '../../models/product';
import { environment } from '../../shared/environment/environment';
=======
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable, of } from 'rxjs';
// import { Product, Category, FilterOptions } from '../../models/product';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {

//   private products: Product[] = [
//     {
//       id: 1,
//       name: 'Gradient Graphic T-shirt',
//       description: 'Size: Large, Color: White',
//       price: 145,
//       originalPrice: 180,
//       discount: 20,
//       image: 'assets/images/tshirt-1.jpg',
//       rating: 3.5,
//       reviewsCount: 250,
//       category: 'tshirts'
//     },
//     {
//       id: 2,
//       name: 'Polo with Tipping Details',
//       description: 'Size: Medium, Color: Pink',
//       price: 180,
//       rating: 4.5,
//       reviewsCount: 450,
//       category: 'shirts',
//       image: 'assets/images/polo-1.jpg'
//     },
//     {
//       id: 3,
//       name: 'Black Striped T-shirt',
//       description: 'Size: Large, Color: Black',
//       price: 120,
//       originalPrice: 150,
//       discount: 20,
//       image: 'assets/images/tshirt-2.jpg',
//       rating: 5.0,
//       reviewsCount: 250,
//       category: 'tshirts'
//     },
//     {
//       id: 4,
//       name: 'Skinny Fit Jeans',
//       description: 'Size: Large, Color: Blue',
//       price: 240,
//       originalPrice: 260,
//       discount: 10,
//       image: 'assets/images/jeans-1.jpg',
//       rating: 3.5,
//       reviewsCount: 450,
//       category: 'jeans'
//     },
//     {
//       id: 5,
//       name: 'Checkered Shirt',
//       description: 'Size: Medium, Color: Red',
//       price: 180,
//       rating: 4.5,
//       reviewsCount: 450,
//       category: 'shirts',
//       image: 'assets/images/shirt-1.jpg'
//     },
//     {
//       id: 6,
//       name: 'Sleeve Striped T-shirt',
//       description: 'Size: Small, Color: Orange',
//       price: 130,
//       originalPrice: 160,
//       discount: 20,
//       image: 'assets/images/tshirt-3.jpg',
//       rating: 4.5,
//       reviewsCount: 250,
//       category: 'tshirts'
//     },
//     {
//       id: 7,
//       name: 'Vertical Striped Shirt',
//       description: 'Size: Large, Color: Green',
//       price: 212,
//       originalPrice: 232,
//       discount: 10,
//       image: 'assets/images/shirt-2.jpg',
//       rating: 5.0,
//       reviewsCount: 450,
//       category: 'shirts'
//     },
//     {
//       id: 8,
//       name: 'Courage Graphic T-shirt',
//       description: 'Size: Medium, Color: Orange',
//       price: 145,
//       rating: 4.0,
//       reviewsCount: 320,
//       category: 'tshirts',
//       image: 'assets/images/tshirt-4.jpg'
//     },
//     {
//       id: 9,
//       name: 'Loose Fit Bermuda Shorts',
//       description: 'Size: Large, Color: Blue',
//       price: 80,
//       rating: 3.0,
//       reviewsCount: 150,
//       category: 'shorts',
//       image: 'assets/images/shorts-1.jpg'
//     }
//   ];

//   private categories: Category[] = [
//     { id: 'tshirts', name: 'T-shirts', count: 150 },
//     { id: 'shorts', name: 'Shorts', count: 45 },
//     { id: 'shirts', name: 'Shirts', count: 120 },
//     { id: 'hoodie', name: 'Hoodie', count: 89 },
//     { id: 'jeans', name: 'Jeans', count: 67 }
//   ];

//   getProducts(filters?: FilterOptions): Observable<Product[]> {
//     let filtered = [...this.products];

//     if (filters) {
//       if (filters.categories.length > 0) {
//         filtered = filtered.filter(p => !!p.category && filters.categories.includes(p.category));
//       }
//       filtered = filtered.filter(p =>
//         p.price >= filters.minPrice && p.price <= filters.maxPrice
//       );

//       // Sorting
//       switch (filters.sortBy) {
//         case 'price-low':
//           filtered.sort((a, b) => a.price - b.price);
//           break;
//         case 'price-high':
//           filtered.sort((a, b) => b.price - a.price);
//           break;
//         case 'popular':
//           filtered.sort((a, b) => (b.reviewsCount ?? 0) - (a.reviewsCount ?? 0));
//           break;
//       }
//     }

//     return of(filtered);
//   }

//   getCategories(): Observable<Category[]> {
//     return of(this.categories);
//   }

//   getProductById(id: number): Observable<Product | undefined> {
//     return of(this.products.find(p => p.id === id));
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../shared/environment/environment.prod';
>>>>>>> 0a46da4048b0f3ffac5edf89007655a5df6acc70

@Injectable({
  providedIn: 'root'
})
export class ProductService {
<<<<<<< HEAD
  private http = inject(HttpClient);
  private baseUrl = environment.baseUrl;

  getProducts(filters?: FilterOptions): Observable<Product[]> {
    let params = new HttpParams();

    if (filters) {
      if (filters.search) {
        params = params.set('Search', filters.search);
      }
      if (filters.minPrice > 0) {
        params = params.set('MinPrice', filters.minPrice.toString());
      }
      if (filters.maxPrice < 99999) {
        params = params.set('MaxPrice', filters.maxPrice.toString());
      }
    }

    return this.http.get<any[]>(`${this.baseUrl}products`, { params }).pipe(
      map(items => this.mapProducts(items, filters))
    );
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.http.get<any>(`${this.baseUrl}products/${id}`).pipe(
      map(item => this.mapProduct(item))
    );
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}categories`);
  }

  getProductsByCategory(categoryId: number, filters?: FilterOptions): Observable<Product[]> {
    let params = new HttpParams();

    if (filters) {
      if (filters.search) {
        params = params.set('Search', filters.search);
      }
      if (filters.minPrice > 0) {
        params = params.set('MinPrice', filters.minPrice.toString());
      }
      if (filters.maxPrice < 99999) {
        params = params.set('MaxPrice', filters.maxPrice.toString());
      }
    }

    return this.http.get<any[]>(`${this.baseUrl}products/category/${categoryId}`, { params }).pipe(
      map(items => this.mapProducts(items, filters))
    );
  }

  /** Map backend ProductDto → frontend Product */
  private mapProduct(item: any): Product {
    return {
      id: item.id,
      name: item.name,
      description: item.description ?? '',
      details: item.details ?? '',
      price: item.price,
      rating: item.reviews?.length
        ? item.reviews.reduce((sum: number, r: any) => sum + r.rating, 0) / item.reviews.length
        : 0,
      reviewsCount: item.reviews?.length ?? 0,
      reviews: item.reviews ?? [],
      image: item.images?.[0] ?? '',
      images: item.images ?? [],
      stock: item.stock,
      stockQuantity: item.stock,
      categoryId: item.categoryId,
      categoryName: item.categoryName,
      category: item.categoryName,
      merchantName: item.merchantName,
      status: item.status,
      createdAt: item.createdAt,
    };
  }

  /** Map array + apply client-side sorting */
  private mapProducts(items: any[], filters?: FilterOptions): Product[] {
    let products = items.map(item => this.mapProduct(item));

    // Client-side sorting
    if (filters?.sortBy) {
      switch (filters.sortBy) {
        case 'price-low':
          products.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          products.sort((a, b) => b.price - a.price);
          break;
        case 'popular':
          products.sort((a, b) => (b.reviewsCount ?? 0) - (a.reviewsCount ?? 0));
          break;
        case 'newest':
          products.sort((a, b) => {
            const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
            const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
            return dateB - dateA;
          });
          break;
      }
    }

    return products;
=======

  private api = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getProducts(filters?: {
    search?:     string;
    type?:       string;
    minPrice?:   number;
    maxPrice?:   number;
    categoryId?: number;
    pageNumber?: number;
    pageSize?:   number;
  }): Observable<any[]> {
    let params = new HttpParams();
    if (filters?.search)     params = params.set('Search',     filters.search);
    if (filters?.type)       params = params.set('Type',       filters.type);
    if (filters?.minPrice)   params = params.set('MinPrice',   filters.minPrice);
    if (filters?.maxPrice)   params = params.set('MaxPrice',   filters.maxPrice);
    if (filters?.categoryId) params = params.set('CategoryId', filters.categoryId);
    if (filters?.pageNumber) params = params.set('PageNumber', filters.pageNumber);
    if (filters?.pageSize)   params = params.set('PageSize',   filters.pageSize);

    return this.http.get<any[]>(`${this.api}/api/products`, { params });
  }

  getTopProducts(): Observable<any[]> {
    return this.getProducts({ type: 'top' });
  }

  getNewArrivals(): Observable<any[]> {
    return this.getProducts({ type: 'new' });
>>>>>>> 0a46da4048b0f3ffac5edf89007655a5df6acc70
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.api}/api/products/${id}`);
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/api/categories`);
  }
}