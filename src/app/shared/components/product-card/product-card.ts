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
      const full = Math.floor(this.product.rating || 0);
      const hasHalf = (this.product.rating || 0) % 1 >= 0.5;
      const empty = 5 - full - (hasHalf ? 1 : 0);

      this.fullStars = Array(full);
      this.halfStar = hasHalf;
      this.emptyStars = Array(empty);
    }
  }
}