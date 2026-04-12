import { Component, signal, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../services/order-service/order-service';
import { Order, OrderStatus } from '../../models/order';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './orders.html',
  styleUrls: ['./orders.css']
})
export class OrdersComponent implements OnInit {
  private readonly orderService = inject(OrderService);

  readonly allOrders = signal<Order[]>([]);
  readonly loading = signal(false);
  readonly searchQuery = signal('');
  readonly activeStatus = signal<OrderStatus | 'all'>('all');
  readonly openMenuId = signal<string | null>(null);

  readonly statusTabs: Array<{ label: string; value: OrderStatus | 'all' }> = [
    { label: 'All Orders', value: 'all' },
    { label: 'Pending',    value: 'pending' },
    { label: 'Processing', value: 'processing' },
    { label: 'Shipped',    value: 'shipped' },
    { label: 'Delivered',  value: 'delivered' },
    { label: 'Cancelled',  value: 'cancelled' },
    { label: 'Refunded',   value: 'refunded' },
  ];

  readonly filteredOrders = computed(() => {
    let orders = this.allOrders();
    if (this.activeStatus() !== 'all') {
      orders = orders.filter(o => o.status === this.activeStatus());
    }
    const q = this.searchQuery().toLowerCase();
    if (q) {
      orders = orders.filter(o =>
        o.orderNumber.toLowerCase().includes(q) ||
        o.customer.name.toLowerCase().includes(q) ||
        o.customer.email.toLowerCase().includes(q)
      );
    }
    return orders;
  });

  readonly totalRevenue = computed(() =>
    this.allOrders().reduce((sum, o) => sum + o.total, 0)
  );

  readonly activeOrdersCount = computed(() =>
    this.allOrders().filter(o => o.status === 'pending' || o.status === 'processing' || o.status === 'shipped').length
  );

  readonly averageOrderValue = computed(() => {
    const orders = this.allOrders();
    return orders.length ? this.totalRevenue() / orders.length : 0;
  });

  ngOnInit(): void {
    this.loading.set(true);
    this.orderService.getOrders().subscribe({
      next: orders => { this.allOrders.set(orders); this.loading.set(false); },
      error: ()     => this.loading.set(false)
    });
  }

  toggleMenu(orderId: string): void {
    this.openMenuId.set(this.openMenuId() === orderId ? null : orderId);
  }

  closeMenu(): void {
    this.openMenuId.set(null);
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  }
}