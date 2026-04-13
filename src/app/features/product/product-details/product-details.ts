import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product/product-service';
import { Product } from '../../../models/product';
import { ProductFaqs } from '../../../shared/components/product-faqs/product-faqs';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../shared/environment/environment';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, NgClass, ProductFaqs, FormsModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  product: any = null;
  specsText = '';
  specsArray: string[] = [];
  isLoading = false;
  errorMsg = '';
  quantity = 1;

  fullStars: number[] = [];
  halfStar = false;
  emptyStars: number[] = [];

  selectedImage = '';
  selectedColor = '';
  selectedSize = '';
  colors = ['bg-dark', 'bg-danger'];
  sizes = ['Small', 'Medium', 'Large', 'X-Large'];

  showReviewForm = false;
  reviewRating = 0;
  reviewComment = '';
  reviewLoading = false;
  reviewSuccess = '';
  reviewError = '';
  hoveredStar = 0;

  cartLoading = false;
  wishlistLoading = false;
  cartSuccess = '';
  cartError = '';
  wishlistSuccess = '';

  private affiliateId = 1;
  private cartId = 1;

  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadProduct(id);
  }

  loadProduct(id: number): void {
    this.isLoading = true;
    this.service.getProductById(id).subscribe({
      next: (res) => {
        if (!res) {
          this.errorMsg = 'Product not found';
          this.isLoading = false;
          return;
        }

        this.product = res;
        this.specsText = res.details ?? '';
        this.specsArray = this.specsText
          .split('.')
          .filter((x: string) => x.trim() !== '');

        const avg = res.reviews?.length
          ? res.reviews.reduce((sum: number, r: any) => sum + r.rating, 0) / res.reviews.length
          : 0;

        const hasHalf = avg % 1 >= 0.5;
        const empty = 5 - Math.floor(avg) - (hasHalf ? 1 : 0);

        this.fullStars = Array(Math.floor(avg)).fill(0);
        this.halfStar = hasHalf;
        this.emptyStars = Array(Math.max(0, empty)).fill(0);

        this.selectedImage = res.images?.[0] ?? '';
        this.isLoading = false;
      },
      error: () => {
        this.errorMsg = 'Failed to load product';
        this.isLoading = false;
      }
    });
  }

  getFullStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  selectImage(img: string): void {
    this.selectedImage = img;
  }

  increase(): void {
    this.quantity++;
  }

  decrease(): void {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart(): void {
    this.cartLoading = true;
    this.cartError = '';
    this.cartSuccess = '';

    this.http.post(`${environment.baseUrl}Cart/${this.cartId}/items`, {
      productId: this.product.id,
      quantity: this.quantity
    }).subscribe({
      next: () => {
        this.cartSuccess = 'Added to cart!';
        this.cartLoading = false;
        setTimeout(() => this.cartSuccess = '', 3000);
      },
      error: () => {
        this.cartError = 'Failed to add to cart';
        this.cartLoading = false;
      }
    });
  }

  addToWishlist(): void {
    this.wishlistLoading = true;
    this.wishlistSuccess = '';

    this.http.post(`${environment.baseUrl}Wishlist`, {
      productId: this.product.id
    }, { responseType: 'text' }).subscribe({
      next: () => {
        this.wishlistLoading = false;
        this.wishlistSuccess = 'Added to wishlist!';
        setTimeout(() => this.wishlistSuccess = '', 3000);
      },
      error: () => {
        this.wishlistLoading = false;
      }
    });
  }

  setRating(star: number): void {
    this.reviewRating = star;
  }

  setHovered(star: number): void {
    this.hoveredStar = star;
  }

  clearHover(): void {
    this.hoveredStar = 0;
  }

  submitReview(): void {
    if (!this.reviewRating || !this.reviewComment.trim()) {
      this.reviewError = 'Please add rating and comment';
      return;
    }

    this.reviewLoading = true;
    this.reviewError = '';
    this.reviewSuccess = '';

    this.http.post(`${environment.baseUrl}ProductReview`, {
      productId: this.product.id,
      affiliateId: this.affiliateId,
      comment: this.reviewComment,
      rating: this.reviewRating,
      createdAt: new Date().toISOString()
    }).subscribe({
      next: () => {
        this.reviewSuccess = 'Review added successfully!';
        this.reviewLoading = false;
        this.showReviewForm = false;
        this.reviewComment = '';
        this.reviewRating = 0;
        this.loadProduct(this.product.id);
      },
      error: () => {
        this.reviewError = 'Failed to submit review';
        this.reviewLoading = false;
      }
    });
  }
}