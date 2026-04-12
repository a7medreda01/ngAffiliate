import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order-service/order-service';
import {  RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  imports: [CommonModule,RouterModule],
  templateUrl: './my-orders.html',
  styleUrl: './my-orders.css',
})
export class MyOrders implements OnInit { 
 private orderService = inject(OrderService);

  orders:    any[] = [];
  isLoading        = false;
  errorMsg         = '';

  ngOnInit(): void {
    this.loadOrders();
  }

 loadOrders(): void {
  this.isLoading = true;
  this.orderService.getOrders().subscribe({
    next: (res) => {
      this.orders    = res; // ← الـ response مصفوفة مباشرة مش داخل data
      this.isLoading = false;
    },
    error: (err) => {
      this.errorMsg  = err.error?.message || 'Failed to load orders';
      this.isLoading = false;
    }
  });
}

  getStatusClass(status: string): string {
    switch (status?.toLowerCase()) {
      case 'delivered': return 'bg-success text-white';
      case 'pending':   return 'bg-warning text-dark';
      case 'shipped':   return 'bg-info text-white';
      case 'cancelled': return 'bg-danger text-white';
      default:          return 'bg-secondary text-white';
    }
  }
}