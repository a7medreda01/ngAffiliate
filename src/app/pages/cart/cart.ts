import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
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

  checkout(): void {
    console.log('Checkout...');
  }
}
