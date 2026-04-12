import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../shared/environment/environment';
import { Order, OrderStatus } from '../../models/order';

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
  }
}
