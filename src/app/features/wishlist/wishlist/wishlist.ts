import { Component, inject, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Items } from '../items/items';
import { JustForYou } from '../just-for-you/just-for-you';
import { CommonModule } from '@angular/common';
import { WishlistService, WishlistItem } from '../../../services/wishlist/wishlist.service';

@Component({
  selector: 'app-wishlist',
  imports: [Items, JustForYou, CommonModule],
=======
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { WishlistService } from '../../../services/wishlist/wishlist';
import { JustForYou } from '../just-for-you/just-for-you';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterLink, JustForYou],
>>>>>>> 0a46da4048b0f3ffac5edf89007655a5df6acc70
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist implements OnInit {
  private wishlistService = inject(WishlistService);
<<<<<<< HEAD

  products: any[] = [];
  loading = false;
  error = '';
=======
  private router          = inject(Router);

  products:  any[] = [];
  isLoading        = false;
  errorMsg         = '';
  successMsg       = '';
>>>>>>> 0a46da4048b0f3ffac5edf89007655a5df6acc70

  ngOnInit(): void {
    this.loadWishlist();
  }

  loadWishlist(): void {
<<<<<<< HEAD
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
=======
    this.isLoading = true;
    this.errorMsg  = '';

    this.wishlistService.getWishlist().subscribe({
      next: (res) => {
        // الـ API بترجع array فيها imageUrl مباشرة
        this.products = (Array.isArray(res) ? res : []).map(p => ({
          ...p,
          imageUrl: p.imageUrl || p.images?.[0] || 'assets/images/placeholder.png'
        }));
        this.wishlistService.updateSignals(this.products);
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMsg  = err.error?.message || 'Failed to load wishlist';
        this.isLoading = false;
>>>>>>> 0a46da4048b0f3ffac5edf89007655a5df6acc70
      }
    });
  }

  removeFromWishlist(productId: number): void {
<<<<<<< HEAD
    this.wishlistService.removeFromWishlist(productId).subscribe({
      next: () => {
        this.products = this.products.filter(p => p.id !== productId);
      },
      error: (err) => console.error('Failed to remove from wishlist:', err)
    });
  }
}
=======
    this.errorMsg   = '';
    this.successMsg = '';

    this.wishlistService.removeFromWishlist(productId).subscribe({
      next: () => {
        this.products = this.products.filter(
          p => (p.productId || p.id) !== productId
        );
        this.wishlistService.updateSignals(this.products);
        this.successMsg = 'Item removed successfully';
        setTimeout(() => this.successMsg = '', 3000);
      },
      error: (err) => {
        this.errorMsg = err.error?.message || 'Failed to remove item';
      }
    });
  }

  moveAllToBag(): void {
    this.router.navigate(['/affiliate/cart']);
  }

  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i + 1);
  }
}
>>>>>>> 0a46da4048b0f3ffac5edf89007655a5df6acc70
