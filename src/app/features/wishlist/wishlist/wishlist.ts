import { Component, inject, OnInit } from '@angular/core';
import { Items } from '../items/items';
import { JustForYou } from '../just-for-you/just-for-you';
import { CommonModule } from '@angular/common';
import { WishlistService, WishlistItem } from '../../../services/wishlist/wishlist.service';

@Component({
  selector: 'app-wishlist',
  imports: [Items, JustForYou, CommonModule],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist implements OnInit {
  private wishlistService = inject(WishlistService);

  products: any[] = [];
  loading = false;
  error = '';

  ngOnInit(): void {
    this.loadWishlist();
  }

  loadWishlist(): void {
    this.loading = true;
    this.error = '';
    this.wishlistService.getWishlist().subscribe({
      next: (items: WishlistItem[]) => {
        this.products = items.map(item => ({
          id: item.productId,
          name: item.name,
          price: item.price,
          oldPrice: undefined,
          rating: item.rating ?? 0,
          image: item.imageUrl ?? 'assets/images/products/placeholder.png',
          sale: undefined
        }));
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load wishlist:', err);
        this.error = 'Failed to load wishlist';
        this.loading = false;
        // Fallback to empty array
        this.products = [];
      }
    });
  }

  removeFromWishlist(productId: number): void {
    this.wishlistService.removeFromWishlist(productId).subscribe({
      next: () => {
        this.products = this.products.filter(p => p.id !== productId);
      },
      error: (err) => console.error('Failed to remove from wishlist:', err)
    });
  }
}
