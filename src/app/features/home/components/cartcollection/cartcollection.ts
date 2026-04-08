import { Component, Input } from '@angular/core';
import { FourProduct } from '../../../../shared/components/four-product/four-product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cartcollection',
  imports: [FourProduct,CommonModule],
  templateUrl: './cartcollection.html',
  styleUrl: './cartcollection.css',
})
export class Cartcollection {
  @Input() products:any;
constructor(){
  console.log(this.products)
}
}
