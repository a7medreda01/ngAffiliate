import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-options',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment-options.html',
  styleUrls: ['./payment-options.css'],
})
export class PaymentOptions implements OnInit {
  affiliateId: number = 1;
  balance: number = 0;
  depositAmount: number = 0;
  depositMethod: string = 'PayPal';
  isLoading: boolean = false;
  errorMessage: string = '';

  transactions: any[] = [];

  private baseUrl = 'https://localhost:44394/api/Affiliate';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadBalance();
    this.loadCommissions();
  }

  loadBalance(): void {
    this.http.get<any>(`${this.baseUrl}/${this.affiliateId}/balance`)
      .subscribe({
        next: (data) => {
          this.balance = data.balance;
        },
        error: () => {
          this.errorMessage = 'Failed to load balance.';
        }
      });
  }

  loadCommissions(): void {
    this.isLoading = true;
    this.http.get<any[]>(`${this.baseUrl}/${this.affiliateId}/commissions`)
      .subscribe({
        next: (data) => {
          this.transactions = data.map(c => ({
            id: c.id,
            date: c.createdAt.split('T')[0],
            type: 'Commission',
            method: '—',
            amount: c.affiliateAmount,
            status: c.status
          }));
          this.isLoading = false;
        },
        error: () => {
          this.errorMessage = 'Failed to load transactions.';
          this.isLoading = false;
        }
      });
  }

  addDeposit(): void {
    if (this.depositAmount <= 0) return;

    // مؤقتاً locally لحد ما الـ backend يعمل endpoint
    this.balance += this.depositAmount;
    this.transactions.unshift({
      id: this.transactions.length + 1,
      date: new Date().toISOString().split('T')[0],
      type: 'Deposit',
      method: this.depositMethod,
      amount: this.depositAmount,
      status: 'Pending'
    });
    this.depositAmount = 0;
  }
}