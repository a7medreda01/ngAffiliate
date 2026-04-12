import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductDetails } from '../product-details/product-details';
import { RelatedItem, } from '../related-item/related-item';
import { FourProduct } from '../../../shared/components/four-product/four-product';
import { ProductService } from '../../../services/product/product';


@Component({
  selector: 'app-product',
  imports: [RouterLink,ProductDetails,FourProduct],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
products:any;

constructor(private productservice:ProductService){ 
  
  // this.products = this.productservice.products;
}


}
