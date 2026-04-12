import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../shared/environment/environment';
import { Order, OrderStatus } from '../../models/order';

<<<<<<< HEAD
@Injectable({ providedIn: 'root' })
export class OrderService {
  private readonly base = `${environment.baseUrl}Orders`;

  constructor(private http: HttpClient) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createOrder(order: any): Observable<any> {
    return this.http.post<any>(this.base, order);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.base);
  }

  getOrderById(id: string | number): Observable<Order> {
    return this.http.get<Order>(`${this.base}/${id}`);
  }

  getOrdersByAffiliate(affiliateId: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.base}/affiliate/${affiliateId}`);
  }

  updateOrderStatus(orderId: string | number, status: OrderStatus | number): Observable<Order> {
    return this.http.put<Order>(`${this.base}/${orderId}/status`, status);
  }

  cancelOrder(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
=======
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
>>>>>>> 0a46da4048b0f3ffac5edf89007655a5df6acc70
  }
}