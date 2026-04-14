import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product-service';
import { Product } from '../../../models/product';
import { FourProduct } from '../../../shared/components/four-product/four-product';
import { Hero } from '../components/hero/hero';
import { Cartcollection } from '../components/cartcollection/cartcollection';
import { Cardreview } from '../components/cardreview/cardreview';
import { Dressstyle } from '../components/dressstyle/dressstyle';

@Component({
  selector: 'app-home',
  imports: [Hero, Cartcollection, Cardreview, FourProduct,Cardreview, Dressstyle],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  topProducts: any[] = [];
  newProducts: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadTopProducts();
    this.loadNewArrivals();
  }

  loadTopProducts(): void {
    this.productService.getProducts({ type: 'top' }).subscribe({
      next: (res: any) => {
        this.topProducts = this.mapProducts(res);
      },
      error: (err) => console.error('Error loading top products:', err)
    });
  }

  loadNewArrivals(): void {
    this.productService.getProducts({ type: 'new' }).subscribe({
      next: (res: any) => {
        this.newProducts = this.mapProducts(res);
      },
      error: (err) => console.error('Error loading new arrivals:', err)
    });
  }

  // نحول الـ response للشكل اللي بيتوقعه product-card
  mapProducts(products: any[]): any[] {
    return products.map(p => ({
      ...p,
      imageUrl: p.images?.[0] ?? 'assets/placeholder.png',
      oldPrice: p.oldPrice ?? null,
      rating: p.reviews?.length
        ? p.reviews.reduce((sum: number, r: any) => sum + r.rating, 0) / p.reviews.length
        : 0
    }));
  }
}
