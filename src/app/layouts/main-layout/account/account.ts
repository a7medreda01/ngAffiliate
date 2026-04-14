import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './account.html',
  styleUrl: './account.css',
})
export class Account {
  activeSection: string = 'profile';

  profileData = {
    firstName: 'Md',
    lastName: 'Rimel',
    email: 'rimel1111@gmail.com',
    address: 'Kingston, 5236, United State',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  };

  addressData = {
    streetAddress: '',
    apartment: '',
    city: ''
  };

  cardNumber: string = '';
  cardHolder: string = '';
  expiry: string = '';
  cvv: string = '';
  cardType: string = 'Card';
  cardIcon: string = '';
  isFlipped: boolean = false;

  savedCards: any[] = [];

  orders = [
    {
      id: 12345,
      date: 'March 25, 2026',
      items: [
        { name: 'Cake', quantity: 2, price: 20 },
        { name: 'Cookie', quantity: 5, price: 5 }
      ],
      status: 'Delivered'
    },
    {
      id: 67890,
      date: 'March 27, 2026',
      items: [
        { name: 'Book', quantity: 1, price: 50 }
      ],
      status: 'Pending'
    }
  ];

  cancelledOrders = [
    {
      id: 55555,
      date: 'March 29, 2026',
      items: [
        { name: 'Headset', quantity: 1, price: 80 }
      ],
      status: 'Cancelled'
    }
  ];

  setSection(section: string) {
    this.activeSection = section;
  }

  getTotal(order: any): number {
    return order.items.reduce((sum: number, item: any) => sum + item.quantity * item.price, 0);
  }

  getStatusClass(status: string) {
    switch (status) {
      case 'Delivered':
        return 'bg-success';
      case 'Pending':
        return 'bg-warning text-dark';
      case 'Shipped':
        return 'bg-info text-dark';
      case 'Cancelled':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  }

  onCardNumber(event: any) {
    let value = event.target.value.replace(/\D/g, '');
    value = value.match(/.{1,4}/g)?.join(' ') || '';
    this.cardNumber = value;

    const firstDigit = value.replace(/\s/g, '')[0];
    if (firstDigit === '4') {
      this.cardType = 'Visa';
      this.cardIcon = 'https://img.icons8.com/color/48/visa.png';
    } else if (firstDigit === '5') {
      this.cardType = 'MasterCard';
      this.cardIcon = 'https://img.icons8.com/color/48/mastercard-logo.png';
    } else {
      this.cardType = 'Card';
      this.cardIcon = '';
    }
  }

  onExpiryInput(event: any) {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    this.expiry = value;
  }

  addCard() {
    if (!this.cardNumber || !this.cardHolder || !this.expiry) return;

    this.savedCards.push({
      type: this.cardType,
      cardIcon: this.cardIcon,
      last4: this.cardNumber.replace(/\s/g, '').slice(-4)
    });

    this.cardNumber = '';
    this.cardHolder = '';
    this.expiry = '';
    this.cvv = '';
    this.cardType = 'Card';
    this.cardIcon = '';
  }

  deleteCard(index: number) {
    this.savedCards.splice(index, 1);
  }

  getCardColor(type: string): string {
    switch (type) {
      case 'Visa':
        return 'linear-gradient(135deg, #0e376d, #4285f4)';
      case 'MasterCard':
        return 'linear-gradient(135deg, #ff5f6d, #ffc371)';
      default:
        return 'linear-gradient(135deg, #2f2d2e, #8c8c8c)';
    }
  }
}
