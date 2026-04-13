import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { WishlistService } from '../../../services/wishlist/wishlist';
import { JustForYou } from '../just-for-you/just-for-you';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterLink, JustForYou],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist implements OnInit {
  private wishlistService = inject(WishlistService);
  private router          = inject(Router);

  products:  any[] = [];
  isLoading        = false;
  errorMsg         = '';
  successMsg       = '';

  ngOnInit(): void {
    this.loadWishlist();
  }

  loadWishlist(): void {
    this.isLoading = true;
    this.errorMsg  = '';

    this.wishlistService.getWishlist().subscribe({
      next: (res) => {
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
      }
    });
  }

  removeFromWishlist(productId: number): void {
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