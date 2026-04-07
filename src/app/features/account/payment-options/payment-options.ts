import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-options.html',
  styleUrls: ['./payment-options.css'], // كان styleUrl خطأ
})
export class PaymentOptions {
 balance: number = 1200; // رصيد افتراضي
  depositAmount: number = 0;
  depositMethod: string = 'PayPal'; // افتراضي
  transactions= [
    { id: 1, date: '2026-04-01', type: 'Deposit', method: 'PayPal', amount: 500 },
    { id: 2, date: '2026-03-28', type: 'Deposit', method: 'Credit Card', amount: 200 },
    { id: 3, date: '2026-03-25', type: 'Deposit', method: 'PayPal', amount: 300 }
  ];

  addDeposit() {
    if(this.depositAmount <= 0) return;
    this.balance += this.depositAmount;
    const newTransaction = {
      id: this.transactions.length + 1,
      date: new Date().toISOString().split('T')[0],
      type: 'Deposit',
      method: this.depositMethod,
      amount: this.depositAmount
    };
    this.transactions.unshift(newTransaction);
    this.depositAmount = 0;
  }
}