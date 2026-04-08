import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart/cart';
import { QuantitySelectorComponent } from '../../components/quantity-selector/quantity-selector';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    QuantitySelectorComponent
  ],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class CartComponent {
  private readonly cartService = inject(CartService);

  readonly couponCode = signal('');
  readonly couponApplied = signal(false);
  readonly couponError = signal(false);

  readonly items = this.cartService.items;
  readonly summary = this.cartService.summary;
  readonly loading = this.cartService.loading;

  async updateQty(id: number, qty: number): Promise<void> {
    await this.cartService.updateQuantity(id, qty);
  }

  async remove(id: number): Promise<void> {
    await this.cartService.removeFromCart(id);
  }

  async applyCoupon(): Promise<void> {
    this.couponError.set(false);
    const success = await this.cartService.applyCoupon(this.couponCode());
    if (success) {
      this.couponApplied.set(true);
    } else {
      this.couponError.set(true);
    }
  }

  onCouponInput(e: Event): void {
    const value = (e.target as HTMLInputElement | null)?.value ?? '';
    this.couponCode.set(value);
  }

  checkout(): void {
    console.log('Checkout...');
  }

  async clearCart(): Promise<void> {
    await this.cartService.clearCart();
  }

  trackByProductId = (_: number, item: CartItem) => item.productId;
}
