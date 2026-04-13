import { Injectable, inject, signal } from '@angular/core';
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

  wishlistCount = signal<number>(0);
  wishlistIds   = signal<Set<number>>(new Set());

  getWishlist(): Observable<WishlistItem[]> {
    return this.http.get<WishlistItem[]>(`${this.baseUrl}Wishlist`);
  }

  addToWishlist(productId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}Wishlist`, { productId });
  }

  removeFromWishlist(productId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}Wishlist/${productId}`);
  }

    updateSignals(items: any[]): void {
    const ids = new Set<number>(items.map(i => i.productId || i.id));
    this.wishlistIds.set(ids);
    this.wishlistCount.set(ids.size);
  }

  isInWishlist(productId: number): boolean {
    return this.wishlistIds().has(productId);
  }
}

