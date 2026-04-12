import { Injectable, signal } from '@angular/core';
import { CartItem, CartSummary } from '../../models/cart-item';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly STORAGE_KEY = 'cart_items';
  private readonly DELIVERY_FEE = 15;
  private readonly COUPON_CODES: Record<string, number> = {
    'SAVE20': 20,
    'SAVE10': 10,
    'WELCOME': 15
  };
  private appliedDiscount = 0;

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
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const items: CartItem[] = JSON.parse(stored);
        this._items.set(items);
        this.recalculateSummary();
      }
    } catch {
      console.warn('Failed to load cart from localStorage');
    }
  }

  private saveToStorage(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this._items()));
    } catch {
      console.warn('Failed to save cart to localStorage');
    }
  }

  private recalculateSummary(): void {
    const items = this._items();
    const subtotal = items.reduce((sum, item) => sum + item.total, 0);
    const discount = subtotal * (this.appliedDiscount / 100);
    const deliveryFee = items.length > 0 ? this.DELIVERY_FEE : 0;
    const total = subtotal - discount + deliveryFee;

    this._summary.set({
      subtotal: Math.round(subtotal * 100) / 100,
      discount: Math.round(discount * 100) / 100,
      deliveryFee,
      total: Math.round(total * 100) / 100,
      itemCount: items.reduce((count, item) => count + item.quantity, 0)
    });
  }

  async addToCart(product: Product, quantity: number = 1): Promise<void> {
    this._loading.set(true);
    try {
      const items = [...this._items()];
      const existing = items.find(i => i.productId === product.id);

      if (existing) {
        existing.quantity += quantity;
        existing.total = existing.price * existing.quantity;
      } else {
        items.push({
          productId: product.id,
          productName: product.name,
          description: product.description,
          price: product.price,
          image: product.image ?? product.images?.[0] ?? '',
          quantity,
          total: product.price * quantity
        });
      }

      this._items.set(items);
      this.recalculateSummary();
      this.saveToStorage();
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
      const items = this._items().map(item =>
        item.productId === productId
          ? { ...item, quantity, total: item.price * quantity }
          : item
      );
      this._items.set(items);
      this.recalculateSummary();
      this.saveToStorage();
    } finally {
      this._loading.set(false);
    }
  }

  async removeFromCart(productId: number): Promise<void> {
    this._loading.set(true);
    try {
      const items = this._items().filter(item => item.productId !== productId);
      this._items.set(items);
      this.recalculateSummary();
      this.saveToStorage();
    } finally {
      this._loading.set(false);
    }
  }

  async applyCoupon(code: string): Promise<boolean> {
    const discount = this.COUPON_CODES[code.toUpperCase()];
    if (discount) {
      this.appliedDiscount = discount;
      this.recalculateSummary();
      return true;
    }
    return false;
  }

  async clearCart(): Promise<void> {
    this._loading.set(true);
    try {
      this._items.set([]);
      this.appliedDiscount = 0;
      this._summary.set({
        subtotal: 0,
        discount: 0,
        deliveryFee: 0,
        total: 0,
        itemCount: 0
      });
      this.saveToStorage();
    } finally {
      this._loading.set(false);
    }
  }
}
