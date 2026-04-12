import { CommonModule } from "@angular/common";
import { Component, Input, NgModule, OnChanges, SimpleChanges } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-card',
  imports: [CommonModule,RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard implements OnChanges {
  @Input() product: any;

  fullStars: number[] = [];
  halfStar: boolean = false;
  emptyStars: number[] = [];

  ngOnChanges(changes: SimpleChanges) {
  if (changes['product'] && this.product) {

    // ✅ الصورة من الـ images array
    this.product.imageUrl = this.product.images?.[0] ?? '';

    // ✅ احسب الـ rating من الـ reviews
    const avg = this.product.reviews?.length
      ? this.product.reviews.reduce((sum: number, r: any) => sum + r.rating, 0) 
        / this.product.reviews.length
      : 0;

    const full    = Math.floor(avg);
    const hasHalf = avg % 1 >= 0.5;
    const empty   = 5 - full - (hasHalf ? 1 : 0);

    this.fullStars  = Array(full);
    this.halfStar   = hasHalf;
    this.emptyStars = Array(Math.max(0, empty));
  }
}
}