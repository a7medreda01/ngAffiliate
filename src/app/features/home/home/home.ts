import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product';
import { Product } from '../../../models/product';
import { FourProduct } from '../../../shared/components/four-product/four-product';
import { Hero } from '../components/hero/hero';
import { Cartcollection } from '../components/cartcollection/cartcollection';
import { Cardreview } from '../components/cardreview/cardreview';
import { Dressstyle } from '../components/dressstyle/dressstyle';

@Component({
  selector: 'app-home',
  imports: [ Hero,Cartcollection,Cardreview,FourProduct,Dressstyle],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {
products : any;

constructor(private productService:ProductService){
  this.getProducts()
}


getProducts(){
  this.productService.getProducts().subscribe({
    next:(res:any)=>{
      this.products=res
      console.log(this.products)
    },
    error:(error:any)=>console.log(error)
  })
}

}
