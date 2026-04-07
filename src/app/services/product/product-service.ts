import { Injectable } from '@angular/core';
import { environment } from '../../shared/environment/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product-model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() :Observable<any>{
    return this.http.get(`${environment.baseUrl}products`)
  }

}
