import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart/cart';
import { OrderService } from '../../services/order-service/order-service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, CurrencyPipe],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  private cartService = inject(CartService);
  private orderService = inject(OrderService);
  private router = inject(Router);

  billingData = {
    name: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    townCity: '',
    phoneNumber: '',
    emailAddress: '',
    saveInfo: false,
    paymentMethod: 'cash',
    couponCode: ''
  };

  isSubmitting = false;
  orderError = '';

  get products() {
    return this.cartService.items();
  }

  get subTotal(): number {
    return this.cartService.summary().subtotal;
  }

  get shipping(): number {
    return this.cartService.summary().deliveryFee;
  }

  get total(): number {
    return this.cartService.summary().total;
  }

  placeOrder(): void {
    if (this.isSubmitting) return;
    this.isSubmitting = true;
    this.orderError = '';

    const orderData = {
      customerName: this.billingData.name,
      customerPhone: this.billingData.phoneNumber,
      customerAddress: `${this.billingData.streetAddress}, ${this.billingData.apartment}, ${this.billingData.townCity}`,
      affiliateCommissionPct: 0,
    };

    this.orderService.createOrder(orderData).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        this.cartService.clearCart();
        console.log('Order placed:', res);
        // Navigate to a success page or orders page
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.isSubmitting = false;
        this.orderError = 'Failed to place order. Please try again.';
        console.error('Order failed:', err);
      }
    });
  }
}