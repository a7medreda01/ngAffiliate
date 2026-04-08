import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, CurrencyPipe],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
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

  products: any[] = [
    {
      id: 1,
      name: 'LCD Monitor',
      price: 650,
      quantity: 1,
      image: 'assets/images/products/p1.png'
    },
    {
      id: 2,
      name: 'H1 Gamepad',
      price: 1100,
      quantity: 1,
      image: 'assets/images/products/p2.png'
    }
  ];

  get subTotal(): number {
    return this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  get shipping(): number {
    return 0;
  }

  get total(): number {
    return this.subTotal + this.shipping;
  }
}