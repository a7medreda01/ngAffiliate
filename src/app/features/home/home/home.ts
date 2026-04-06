import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product-service';
import { Product } from '../../../models/product-model';
import { FourProduct } from '../../../shared/components/four-product/four-product';
import { Hero } from './hero/hero';
import { Cartcollection } from './cartcollection/cartcollection';
import { Cardreview } from './cardreview/cardreview';
import { Dressstyle } from './dressstyle/dressstyle';

@Component({
  selector: 'app-home',
  imports: [ Hero,Cartcollection,Cardreview,FourProduct,Dressstyle],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
constructor(private productService:ProductService){
  this.products=this.productService.products
}
products!:Product[];

}
