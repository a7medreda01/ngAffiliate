import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-four-product',
  imports: [ProductCard,CommonModule],
  templateUrl: './four-product.html',
  styleUrl: './four-product.css',
})
export class FourProduct {
@Input() products:any;

}
