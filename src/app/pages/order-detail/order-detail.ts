import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../services/order-service/order-service';
import { Order, OrderStatus } from '../../models/order';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './order-detail.html',
  styleUrl: './order-detail.css',
})
export class OrderDetailComponent implements OnInit {
  private readonly route  = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly orderService = inject(OrderService);

  readonly order   = signal<Order | null>(null);
  readonly loading = signal(true);
  readonly error   = signal<string | null>(null);
  readonly updating = signal(false);
  readonly showStatusMenu = signal(false);

  readonly statusOptions: OrderStatus[] = [
    'pending', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded'
  ];

  readonly timeline: Array<{ status: OrderStatus; label: string }> = [
    { status: 'pending',    label: 'Order Placed' },
    { status: 'processing', label: 'Processing'   },
    { status: 'shipped',    label: 'Shipped'       },
    { status: 'delivered',  label: 'Delivered'     },
  ];

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.orderService.getOrderById(id).subscribe({
      next: order => {
        this.order.set(order);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load order. Please try again.');
        this.loading.set(false);
      }
    });
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  }

  getSubtotal(): number {
    const o = this.order();
    if (!o) return 0;
    return o.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  }

  getTimelineIndex(status: OrderStatus): number {
    const order = ['pending', 'processing', 'shipped', 'delivered'];
    return order.indexOf(status);
  }

  isTimelineStepDone(step: OrderStatus): boolean {
    const order = this.order();
    if (!order) return false;
    if (order.status === 'cancelled' || order.status === 'refunded') return false;
    return this.getTimelineIndex(order.status) >= this.getTimelineIndex(step);
  }

  updateStatus(status: OrderStatus): void {
    const order = this.order();
    if (!order) return;
    this.updating.set(true);
    this.showStatusMenu.set(false);
    this.orderService.updateOrderStatus(order.id, status).subscribe({
      next: updated => {
        this.order.set(updated);
        this.updating.set(false);
      },
      error: () => this.updating.set(false)
    });
  }

  goBack(): void {
    this.router.navigate(['/orders']);
  }

  toggleStatusMenu(): void {
    this.showStatusMenu.set(!this.showStatusMenu());
  }

  closeStatusMenu(): void {
    this.showStatusMenu.set(false);
  }
}
