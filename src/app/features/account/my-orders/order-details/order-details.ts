import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OrderService } from '../../../../services/order-service/order-service';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './order-details.html',
  styleUrl: './order-details.css',
})
export class OrderDetails implements OnInit {
  private route        = inject(ActivatedRoute);
  private orderService = inject(OrderService);

  order:     any  = null;
  isLoading        = false;
  errorMsg         = '';

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadOrder(id);
  }

  loadOrder(id: number): void {
    this.isLoading = true;
    this.orderService.getOrderById(id).subscribe({
      next: (res) => {
        this.order     = res;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMsg  = err.error?.message || 'Failed to load order';
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