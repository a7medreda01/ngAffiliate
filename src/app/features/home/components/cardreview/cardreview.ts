import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../../services/product/product-service';

@Component({
  selector: 'app-cardreview',
  imports: [CommonModule,Cardreview],
  templateUrl: './cardreview.html',
  styleUrl: './cardreview.css',
})

@Component({
  selector: 'app-cardreview',
  templateUrl: './cardreview.component.html',
  styleUrls: ['./cardreview.component.css']
})
export class Cardreview implements OnInit {
  reviews: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (res: any) => {
        this.reviews = res.flatMap((p: any) =>
          p.reviews.map((r: any) => ({
            ...r,
            productName: p.name,
            reviewerName: p.merchantName
          }))
        );
      },
      error: (err) => console.error(err)
    });
  }

  getStars(rating: number): number[] {
    return Array(5).fill(0);
  }
}