import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../shared/environment/environment';

export interface WishlistItem {
  id: number;
  productId: number;
  name: string;
  price: number;
  imageUrl?: string;
  rating?: number;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private http = inject(HttpClient);
  private baseUrl = environment.baseUrl;

  getWishlist(): Observable<WishlistItem[]> {
    return this.http.get<WishlistItem[]>(`${this.baseUrl}Wishlist`);
  }

  addToWishlist(productId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}Wishlist`, { productId });
  }

  removeFromWishlist(productId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}Wishlist/${productId}`);
  }
}
