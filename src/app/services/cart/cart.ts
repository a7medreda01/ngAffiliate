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
  private readonly cartIdKey = 'ngAffiliate.cart.id';
  private readonly storageKey = 'ngAffiliate.cart.v1';

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

  private getLocalCartId(): number | null {
    const raw = localStorage.getItem(this.cartIdKey);
    if (!raw) return null;
    const id = Number(raw);
    return Number.isFinite(id) && id > 0 ? id : null;
  }

  private setLocalCartId(id: number | null): void {
    if (id && id > 0) localStorage.setItem(this.cartIdKey, String(id));
    else localStorage.removeItem(this.cartIdKey);
  }

  private async ensureCartId(): Promise<number> {
    const existing = this.getLocalCartId();
    if (existing) return existing;
    const created = await firstValueFrom(this.http.post<any>(this.apiUrl, {}));
    const newId = Number(created?.id);
    if (!newId) throw new Error('Failed to create cart');
    this.setLocalCartId(newId);
    return newId;
  }

  private mapApiCartToItems(cart: any): CartItem[] {
    const items = Array.isArray(cart?.items) ? cart.items : [];
    return items.map((it: any) => {
      const unitPrice = Number(it?.product?.price ?? it?.unitPrice ?? 0);
      const qty = Math.max(1, Number(it?.quantity ?? 1));
      const imageFile = it?.product?.imageUrl;
      const image = imageFile
        ? `${environment.baseUrl.replace(/\/api\/?$/, '')}/images/products/${imageFile}`
        : 'assets/images/placeholder.png';
      return {
        id: Number(it?.id ?? 0) || undefined,
        productId: Number(it?.productId ?? it?.product?.id ?? 0),
        productName: String(it?.product?.name ?? `Product #${it?.productId ?? ''}`),
        description: String(it?.product?.description ?? ''),
        price: unitPrice,
        image,
        quantity: qty,
        total: unitPrice * qty
      } satisfies CartItem;
    });
  }

  private calcSummary(items: CartItem[]): CartSummary {
    const subtotal = items.reduce((sum, it) => sum + it.price * it.quantity, 0);
    const discount = 0;
    const deliveryFee = subtotal > 0 ? 15 : 0;
    const total = Math.max(0, subtotal - discount + deliveryFee);
    const itemCount = items.reduce((sum, it) => sum + it.quantity, 0);
    return { subtotal, discount, deliveryFee, total, itemCount };
  }

  private persist(items: CartItem[]): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(items));
    } catch {
      // ignore storage failures (private mode, quota, etc.)
    }
  }

  private loadFromStorage(): CartItem[] {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) return [];
      const parsed = JSON.parse(raw) as CartItem[];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  private setLocal(items: CartItem[]): void {
    const normalized = items.map((it) => ({
      ...it,
      quantity: Math.max(1, it.quantity),
      total: it.price * Math.max(1, it.quantity)
    }));
    this._items.set(normalized);
    this._summary.set(this.calcSummary(normalized));
    this.persist(normalized);
  }

  async loadCart(): Promise<void> {
    this._loading.set(true);
    try {
      const cartId = await this.ensureCartId();
      const response = await firstValueFrom(
        this.http.get<any>(`${this.apiUrl}/${cartId}`)
      );
      this.setLocal(this.mapApiCartToItems(response));
    } catch (error) {
      // Offline/demo fallback
      const items = this.loadFromStorage();
      this.setLocal(items);
    } finally {
      this._loading.set(false);
    }
  }

  async addToCart(product: Product, quantity: number = 1): Promise<void> {
    this._loading.set(true);
    try {
      const cartId = await this.ensureCartId();
      await firstValueFrom(
        this.http.post(
          `${this.apiUrl}/${cartId}/items`,
          { productId: product.id, quantity }
        )
      );
      await this.loadCart();
    } catch (error) {
      const items = [...this._items()];
      const existing = items.find((x) => x.productId === product.id);
      if (existing) {
        existing.quantity += quantity;
        existing.total = existing.price * existing.quantity;
      } else {
        const price = product.price ?? 0;
        items.push({
          productId: product.id,
          productName: product.name,
          description: product.description ?? '',
          price,
          image: product.image ?? product.images?.[0] ?? 'assets/images/placeholder.png',
          quantity: Math.max(1, quantity),
          total: price * Math.max(1, quantity)
        });
      }
      this.setLocal(items);
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
      const cartId = await this.ensureCartId();
      const item = this._items().find((x) => x.productId === productId && !!x.id);
      if (!item?.id) throw new Error('Item id not found');
      await firstValueFrom(
        this.http.put(
          `${this.apiUrl}/${cartId}/items/${item.id}`,
          { quantity }
        )
      );
      await this.loadCart();
    } catch (error) {
      const items = [...this._items()];
      const it = items.find((x) => x.productId === productId);
      if (it) {
        it.quantity = Math.max(1, quantity);
        it.total = it.price * it.quantity;
        this.setLocal(items);
      }
    } finally {
      this._loading.set(false);
    }
  }

  async removeFromCart(productId: number): Promise<void> {
    this._loading.set(true);
    try {
      const cartId = await this.ensureCartId();
      const item = this._items().find((x) => x.productId === productId && !!x.id);
      if (!item?.id) throw new Error('Item id not found');
      await firstValueFrom(
        this.http.delete(
          `${this.apiUrl}/${cartId}/items/${item.id}`
        )
      );
      await this.loadCart();
    } catch (error) {
      const items = this._items().filter((x) => x.productId !== productId);
      this.setLocal(items);
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
      // Simple offline demo coupon
      const normalized = (code ?? '').trim().toUpperCase();
      if (normalized !== 'SAVE10') return false;
      const current = this._items();
      const summary = this.calcSummary(current);
      const discount = Math.round(summary.subtotal * 0.1);
      const total = Math.max(0, summary.subtotal - discount + summary.deliveryFee);
      this._summary.set({ ...summary, discount, total });
      return true;
    }
  }

  async clearCart(): Promise<void> {
    this._loading.set(true);
    try {
      const cartId = await this.ensureCartId();
      await firstValueFrom(
        this.http.delete(`${this.apiUrl}/${cartId}`)
      );
      this.setLocalCartId(null);
      this.setLocal([]);
    } catch (error) {
      this.setLocal([]);
    } finally {
      this._loading.set(false);
    }
  }
}
