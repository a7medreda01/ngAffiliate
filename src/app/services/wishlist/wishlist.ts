import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../shared/environment/environment.prod';

@Injectable({ providedIn: 'root' })
export class WishlistService {
  private http = inject(HttpClient);
  private api  = environment.baseUrl;

  // Signal عشان أي component يعرف عدد الـ Wishlist فوراً
  wishlistCount = signal<number>(0);
  wishlistIds   = signal<Set<number>>(new Set());

  getWishlist() {
    return this.http.get<any>(`${this.api}/api/Wishlist`);
  }

  addToWishlist(productId: number) {
    return this.http.post<any>(`${this.api}/api/Wishlist`, { productId });
  }

  removeFromWishlist(productId: number) {
    return this.http.delete<any>(`${this.api}/api/Wishlist/${productId}`);
  }

  // toggle - لو موجود اشيله، لو مش موجود ضيفه
  toggleWishlist(productId: number) {
    const ids = this.wishlistIds();
    if (ids.has(productId)) {
      return this.removeFromWishlist(productId);
    } else {
      return this.addToWishlist(productId);
    }
  }

  // بعد ما تجيب الـ Wishlist حدّث الـ signals
  updateSignals(items: any[]) {
    const ids = new Set<number>(items.map(i => i.productId || i.id));
    this.wishlistIds.set(ids);
    this.wishlistCount.set(ids.size);
  }

  isInWishlist(productId: number): boolean {
    return this.wishlistIds().has(productId);
  }
}