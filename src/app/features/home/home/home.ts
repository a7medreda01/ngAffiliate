import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product-service';
import { Product } from '../../../models/product';
import { FourProduct } from '../../../shared/components/four-product/four-product';

@Component({
  selector: 'app-home',
  imports: [FourProduct],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
constructor(private productService:ProductService){
  this.products=this.productService.products
}
products!:Product[];

}
