import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product/product';
import { Product } from '../../../models/product';
import { NgModel } from '@angular/forms';
import { ProductFaqs } from '../../../shared/components/product-faqs/product-faqs';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule,NgClass,ProductFaqs],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  product!: Product;
  specsText = '';
  specsArray: string[] = [];
  constructor(private route: ActivatedRoute, private service: ProductService) {   }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getProductById(id).subscribe({
      next: (p) => {
        if (p) {
          this.product = p;
          this.specsText = this.product.details ?? '';
          this.specsArray = this.specsText.split('.').filter(x => x.trim() !== '');

          //rating
          const full = Math.floor(this.product.rating);
          const hasHalf = this.product.rating % 1 >= 0.5;
          const empty = 5 - full - (hasHalf ? 1 : 0);

          this.fullStars = Array(full);
          this.halfStar = hasHalf;
          this.emptyStars = Array(empty);
        }
      },
      error: (err) => console.error(err)
    });

  }
  getFullStars(rating: number): number[] {
  return Array(Math.floor(rating)).fill(0);
}

  // GetProduct() {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.service.getProductById(id).subscribe({
  //     next: (res) => {
  //       this.product = res;
  //       console.log(this.product)
  //           this.specsText = this.product.details
  //   this.specsArray = this.specsText.split('.').filter(x => x.trim() !== '');
  //   console.log("specsArray")
  //   console.log(this.specsArray)
  //     },
  //     error: (err) => console.error(err)
  //   });
  // }


  //calculate rating of product
  fullStars: number[] = [];
  halfStar: boolean = false;
  emptyStars: number[] = [];



  //design
  selectedImage: string = '';
  selectedColor: string = '';
  selectedSize: string = '';

  colors = ['bg-dark', 'bg-danger'];
  sizes = ['Small', 'Meidum', 'Large', 'X-Large'];

  selectImage(img: string) {
    this.selectedImage = img;
  }

  increase() {
    this.product.quantity = (this.product.quantity ?? 1) + 1;
  }

  decrease() {
    if ((this.product.quantity ?? 1) > 1) {
      this.product.quantity = (this.product.quantity ?? 1) - 1;
    }
  }


}
