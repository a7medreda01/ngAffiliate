import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartItem, CartSummary, CartResponse } from '../../models/cart-item';
import { Product } from '../../models/product';
import { environment } from '../../shared/environment/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.baseUrl}cart`;

  // State
  private readonly _items = signal<CartItem[]>([]);
  private readonly _summary = signal<CartSummary>({
    subtotal: 0,
    discount: 0,
    deliveryFee: 0,
    total: 0,
    itemCount: 0
  });
  private readonly _loading = signal(false);

  // Readonly
  readonly items = this._items.asReadonly();
  readonly summary = this._summary.asReadonly();
  readonly loading = this._loading.asReadonly();

  constructor() {
    this.loadCart();
  }

  async loadCart(): Promise<void> {
    this._loading.set(true);
    try {
      const response = await firstValueFrom(
        this.http.get<CartResponse>(this.apiUrl, { withCredentials: true })
      );
      this._items.set(response.items);
      this._summary.set(response.summary);
    } catch (error) {
      console.error('Failed to load cart:', error);
    } finally {
      this._loading.set(false);
    }
  }

  async addToCart(product: Product, quantity: number = 1): Promise<void> {
    this._loading.set(true);
    try {
      const response = await firstValueFrom(
        this.http.post<CartResponse>(
          this.apiUrl,
          { productId: product.id, quantity },
          { withCredentials: true }
        )
      );
      this._items.set(response.items);
      this._summary.set(response.summary);
    } catch (error) {
      console.error('Failed to add to cart:', error);
      throw error;
    } finally {
      this._loading.set(false);
    }
  }

  async updateQuantity(productId: number, quantity: number): Promise<void> {
    if (quantity <= 0) {
      await this.removeFromCart(productId);
      return;
    }

    this._loading.set(true);
    try {
      const response = await firstValueFrom(
        this.http.put<CartResponse>(
          `${this.apiUrl}/${productId}`,
          { quantity },
          { withCredentials: true }
        )
      );
      this._items.set(response.items);
      this._summary.set(response.summary);
    } catch (error) {
      console.error('Failed to update quantity:', error);
    } finally {
      this._loading.set(false);
    }
  }

  async removeFromCart(productId: number): Promise<void> {
    this._loading.set(true);
    try {
      const response = await firstValueFrom(
        this.http.delete<CartResponse>(
          `${this.apiUrl}/${productId}`,
          { withCredentials: true }
        )
      );
      this._items.set(response.items);
      this._summary.set(response.summary);
    } catch (error) {
      console.error('Failed to remove from cart:', error);
    } finally {
      this._loading.set(false);
    }
  }

  async applyCoupon(code: string): Promise<boolean> {
    try {
      const result = await firstValueFrom(
        this.http.post<boolean>(
          `${this.apiUrl}/coupon`,
          { code },
          { withCredentials: true }
        )
      );
      if (result) {
        await this.loadCart();
      }
      return result;
    } catch (error) {
      console.error('Failed to apply coupon:', error);
      return false;
    }
  }

  async clearCart(): Promise<void> {
    this._loading.set(true);
    try {
      await firstValueFrom(
        this.http.delete(this.apiUrl, { withCredentials: true })
      );
      this._items.set([]);
      this._summary.set({
        subtotal: 0,
        discount: 0,
        deliveryFee: 0,
        total: 0,
        itemCount: 0
      });
    } catch (error) {
      console.error('Failed to clear cart:', error);
    } finally {
      this._loading.set(false);
    }
  }
}
