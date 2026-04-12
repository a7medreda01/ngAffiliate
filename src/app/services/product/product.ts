import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product, Category, FilterOptions } from '../../models/product';
import { environment } from '../../shared/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
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
  }
}
