import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../services/cart/cart';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, CurrencyPipe],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout implements OnInit {
  private cartService = inject(CartService);
  private http        = inject(HttpClient);
  private router      = inject(Router);

  private baseUrl = 'https://localhost:5220/api';

  readonly items   = this.cartService.items;
  readonly summary = this.cartService.summary;
  readonly loading = this.cartService.loading;

  isLoadingOrder  = false;
  errorMessage    = '';
  successMessage  = '';
  couponMessage   = '';
  couponApplied   = false;
  discountAmount  = 0;

  billingData = {
    name:          '',
    companyName:   '',
    streetAddress: '',
    apartment:     '',
    townCity:      '',
    phoneNumber:   '',
    emailAddress:  '',
    saveInfo:      false,
    paymentMethod: 'cash',
    couponCode:    ''
  };

  ngOnInit(): void {
    // this.cartService.loadCart();
  }

  get total(): number {
    return this.summary().total - this.discountAmount;
  }

  applyCoupon(): void {
    if (!this.billingData.couponCode.trim()) return;
    this.couponMessage = '';

    this.http.post<any>(`${this.baseUrl}/Coupon/apply`, {
      code:       this.billingData.couponCode,
      orderTotal: this.summary().subtotal
    }).subscribe({
      next: (res) => {
        this.couponApplied  = true;
        this.discountAmount = res.discountAmount;
        this.couponMessage  = res.message || 'Coupon applied!';
      },
      error: (err) => {
        this.couponApplied  = false;
        this.discountAmount = 0;
        this.couponMessage  = err.error?.message || 'Invalid coupon code';
      }
    });
  }

  placeOrder(): void {
    if (!this.billingData.name || !this.billingData.streetAddress ||
        !this.billingData.townCity || !this.billingData.phoneNumber) {
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }

    this.isLoadingOrder = true;
    this.errorMessage   = '';

    this.http.post<any>(`${this.baseUrl}/Orders`, {
      affiliateId:            1,
      customerName:           this.billingData.name,
      customerPhone:          this.billingData.phoneNumber,
      customerAddress:        `${this.billingData.streetAddress}, ${this.billingData.apartment}, ${this.billingData.townCity}`.trim(),
      totalPrice:             this.total,
      affiliateCommissionPct: 5
    }).subscribe({
      next: () => {
        this.isLoadingOrder = false;
        this.successMessage = 'Order placed successfully!';
        this.cartService.clearCart();
        setTimeout(() => this.router.navigate(['/affiliate/account/my-orders']), 2000);
      },
      error: () => {
        this.isLoadingOrder = false;
        this.errorMessage   = 'Failed to place order. Please try again.';
      }
    });
  }
}