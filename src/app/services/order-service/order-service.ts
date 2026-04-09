import { Injectable } from '@angular/core';
import { environment } from '../../shared/environment/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface OrderItem {
  productId:   number;
  productName: string;
  price:       number;
  quantity:    number;
}

export interface Order {
  id:                     number;
  totalPrice:             number;
  affiliateCommissionPct: number;
  status:                 string;
  createdAt:              string;
  items:                  OrderItem[]; // ← أضف دي
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  // ─── GET /api/Orders ───────────────────────────────
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.baseUrl}Orders`);
  }

  // ─── GET /api/Orders/{id} ──────────────────────────
  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(`${environment.baseUrl}Orders/${id}`);
  }

  // ─── POST /api/Orders ──────────────────────────────
  createOrder(order: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}Orders`, order);
  }

  // ─── PUT /api/Orders/{id}/status ───────────────────
  cancelOrder(orderId: number): Observable<any> {
    return this.http.put(`${environment.baseUrl}Orders/${orderId}/status`, { status: 'Cancelled' });
  }
}