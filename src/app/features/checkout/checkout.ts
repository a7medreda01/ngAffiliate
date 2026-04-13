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

  // ─── جيب المنتجات من الـ CartService مباشرة ───
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
    // لو الكارت فاضي روّح للكارت
    this.cartService.loadCart();
  }

  get total(): number {
    return this.summary().total - this.discountAmount;
  }

  // ─── Apply Coupon ───
  applyCoupon(): void {
    if (!this.billingData.couponCode.trim()) return;

    this.couponMessage = '';

    const body = {
      code:       this.billingData.couponCode,
      orderTotal: this.summary().subtotal
    };

    this.http.post<any>(`${this.baseUrl}/Coupon/apply`, body).subscribe({
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

  // ─── Place Order ───
  placeOrder(): void {
    if (!this.billingData.name || !this.billingData.streetAddress ||
        !this.billingData.townCity || !this.billingData.phoneNumber) {
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }

    this.isLoadingOrder = true;
    this.errorMessage   = '';

    const orderBody = {
      affiliateId:            1,
      customerName:           this.billingData.name,
      customerPhone:          this.billingData.phoneNumber,
      customerAddress:        `${this.billingData.streetAddress}, ${this.billingData.apartment}, ${this.billingData.townCity}`.trim(),
      totalPrice:             this.total,
      affiliateCommissionPct: 5
    };

    this.http.post<any>(`${this.baseUrl}/Orders`, orderBody).subscribe({
      next: () => {
        this.isLoadingOrder = false;
        this.successMessage = 'Order placed successfully!';
        this.cartService.clearCart();
        setTimeout(() => this.router.navigate(['/account/my-orders']), 2000);
      },
      error: () => {
        this.isLoadingOrder = false;
        this.errorMessage   = 'Failed to place order. Please try again.';
      }
    });
  }
}