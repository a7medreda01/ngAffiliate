import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../shared/environment/environment.prod';

@Injectable({ providedIn: 'root' })
export class WishlistService {
  private http = inject(HttpClient);
  private api  = environment.baseUrl;

  wishlistCount = signal<number>(0);
  wishlistIds   = signal<Set<number>>(new Set());

  getWishlist() {
  return this.http.get<any[]>(`${this.api}Wishlist`);
}

 addToWishlist(productId: number) {
  return this.http.post(
    `${this.api}Wishlist`,
    { productId },
    { responseType: 'text' } // ← ضيف
  );
}

  removeFromWishlist(productId: number) {
  return this.http.delete(
    `${this.api}Wishlist/${productId}`,
    { responseType: 'text' } // ← ضيف
  );
}

  toggleWishlist(productId: number) {
    if (this.wishlistIds().has(productId)) {
      return this.removeFromWishlist(productId);
    } else {
      return this.addToWishlist(productId);
    }
  }

  updateSignals(items: any[]) {
    const ids = new Set<number>(items.map(i => i.productId || i.id));
    this.wishlistIds.set(ids);
    this.wishlistCount.set(ids.size);
  }

  isInWishlist(productId: number): boolean {
    return this.wishlistIds().has(productId);
  }
}