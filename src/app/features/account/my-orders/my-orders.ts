import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OrderService } from '../../../services/order-service/order-service';
import {  RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  imports: [CommonModule,RouterModule],
  templateUrl: './my-orders.html',
  styleUrl: './my-orders.css',
})
export class MyOrders {
 orders = [
    {
      id: 101,
      date: '2026-04-01',
      status: 'Delivered',
      items: [
        { name: 'Apple iPhone 15', quantity: 1 },
        { name: 'AirPods Pro', quantity: 2 }
      ]
    },
    {
      id: 102,
      date: '2026-03-28',
      status: 'Pending',
      items: [
        { name: 'Samsung Galaxy S23', quantity: 1 },
        { name: 'Samsung Charger', quantity: 1 }
      ]
    },
    {
      id: 103,
      date: '2026-03-25',
      status: 'Shipped',
      items: [
        { name: 'MacBook Pro 16"', quantity: 1 },
        { name: 'USB-C Hub', quantity: 1 }
      ]
    },
    {
      id: 104,
      date: '2026-03-20',
      status: 'Delivered',
      items: [
        { name: 'Sony WH-1000XM5', quantity: 1 },
        { name: 'Laptop Stand', quantity: 1 }
      ]
    }
  ];

  getTotal(order: any): number {
    // مثال: كل item = $100 (تقدر تغير الحساب حسب السعر الحقيقي)
    return order.items.reduce((total: number, item: any) => total + (item.quantity * 100), 0);
  }

  getStatusClass(status: string): string {
    switch(status) {
      case 'Delivered': return 'bg-success text-white';
      case 'Pending': return 'bg-warning text-dark';
      case 'Shipped': return 'bg-info text-white';
      default: return 'bg-secondary text-white';
    }
  }
}