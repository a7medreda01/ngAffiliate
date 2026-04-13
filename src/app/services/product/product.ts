import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../shared/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http    = inject(HttpClient);
  private baseUrl = environment.baseUrl;

  getProducts(filters?: {
    search?:     string;
    type?:       string;
    minPrice?:   number;
    maxPrice?:   number;
    categoryId?: number;
    pageNumber?: number;
    pageSize?:   number;
    sortBy?:     string;
  }): Observable<any[]> {
    let params = new HttpParams();
    if (filters?.search)     params = params.set('Search',     filters.search);
    if (filters?.type)       params = params.set('Type',       filters.type);
    if (filters?.minPrice)   params = params.set('MinPrice',   filters.minPrice);
    if (filters?.maxPrice)   params = params.set('MaxPrice',   filters.maxPrice);
    if (filters?.categoryId) params = params.set('CategoryId', filters.categoryId);
    if (filters?.pageNumber) params = params.set('PageNumber', filters.pageNumber);
    if (filters?.pageSize)   params = params.set('PageSize',   filters.pageSize);

    return this.http.get<any[]>(`${this.baseUrl}products`, { params });
  }

  getTopProducts(): Observable<any[]> {
    return this.getProducts({ type: 'top' });
  }

  getNewArrivals(): Observable<any[]> {
    return this.getProducts({ type: 'new' });
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}products/${id}`);
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}categories`);
  }
}