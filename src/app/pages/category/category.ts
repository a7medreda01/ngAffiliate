import { Component, signal, computed, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product/product';
import { CartService } from '../../services/cart/cart';
import { ProductCardComponent } from '../../components/product-card/product-card';
import { PriceFilterComponent } from '../../components/price-filter/price-filter';
import { Product, Category, FilterOptions, SortOption } from '../../models/product';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    ProductCardComponent,
    PriceFilterComponent
  ],
  template: `
    <div class="category-page">
      @if (loading()) {
        <div class="loading-overlay">
          <div class="spinner"></div>
        </div>
      }

      <nav class="breadcrumb">
        <a routerLink="/">Home</a>
        <span>›</span>
        <span class="current">Casual</span>
      </nav>

      <div class="layout">
        <!-- Sidebar -->
        <aside class="sidebar">
          <div class="filter-header">
            <i class="bi bi-sliders"></i>
            <span>Filters</span>
          </div>

          <!-- Categories -->
          <div class="filter-section">
            <h4>Categories</h4>
            <ul>
              @for (cat of categories(); track cat.id) {
                <li>
                  <label class="cat-row">
                    <input
                      type="checkbox"
                      [checked]="selectedCategories().includes(cat.id)"
                      (change)="toggleCategory(cat.id)" />
                    <span class="name">{{ cat.name }}</span>
                    <span class="count">{{ cat.count }}</span>
                  </label>
                </li>
              }
            </ul>
          </div>

          <!-- Price -->
          <app-price-filter
            [min]="0"
            [max]="500"
            [value]="priceRange()"
            (valueChange)="updatePriceRange($event)">
          </app-price-filter>

          <div class="filter-actions">
            <button class="btn-apply" (click)="applyFilters()">Apply Filter</button>
            <button class="btn-clear" type="button" (click)="clearFilters()">Clear</button>
          </div>
        </aside>

        <!-- Main -->
        <main class="main">
          <div class="header">
            <h1>Casual</h1>
            <div class="toolbar">
              <span>Showing {{ products().length }} of {{ totalCount() }}</span>
              <!-- Figma request: filter by category + price only (hide sort UI) -->
            </div>
          </div>

          <div class="grid">
            @for (product of products(); track product.id) {
              <app-product-card
                [product]="product"
                (addToCart)="addToCart($event)">
              </app-product-card>
            } @empty {
              <p class="empty">No products found</p>
            }
          </div>

          @if (totalPages() > 1) {
            <div class="pagination">
              <button
                [disabled]="currentPage() === 1"
                (click)="goToPage(currentPage() - 1)">
                <i class="bi bi-arrow-left"></i> Previous
              </button>

              <div class="pages">
                @for (page of visiblePages(); track page) {
                  @if (page === -1) {
                    <span>...</span>
                  } @else {
                    <button
                      [class.active]="page === currentPage()"
                      (click)="goToPage(page)">
                      {{ page }}
                    </button>
                  }
                }
              </div>

              <button
                [disabled]="currentPage() === totalPages()"
                (click)="goToPage(currentPage() + 1)">
                Next <i class="bi bi-arrow-right"></i>
              </button>
            </div>
          }
        </main>
      </div>
    </div>
  `,
  styleUrls: ['./category.css']
})
export class CategoryComponent {
  private readonly productService = inject(ProductService);
  private readonly cartService = inject(CartService);

  // State
  readonly selectedCategories = signal<string[]>([]);
  readonly priceRange = signal({ min: 0, max: 500 });
  readonly sortBy = signal<SortOption>('popular');
  readonly currentPage = signal(1);
  readonly pageSize = 9;

  // Data
  readonly products = signal<Product[]>([]);
  readonly totalCount = signal(0);
  readonly totalPages = signal(0);

  // From Service
  readonly categories = signal<Category[]>([]);
  readonly loading = signal(false);

  readonly visiblePages = computed(() => {
    const total = this.totalPages();
    const pages: number[] = [];
    for (let i = 1; i <= Math.min(5, total); i++) pages.push(i);
    if (total > 5) {
      pages.push(-1);
      pages.push(total);
    }
    return pages;
  });

  constructor() {
    this.productService.getCategories().subscribe((cats) => this.categories.set(cats));
    effect(() => this.loadProducts(), { allowSignalWrites: true });
  }

  private loadProducts(): void {
    const filters: FilterOptions = {
      categories: this.selectedCategories(),
      minPrice: this.priceRange().min,
      maxPrice: this.priceRange().max,
      sortBy: this.sortBy()
    };

    this.loading.set(true);
    this.productService.getProducts(filters)
      .subscribe({
        next: (res: Product[]) => {
          this.totalCount.set(res.length);
          this.totalPages.set(Math.max(1, Math.ceil(res.length / this.pageSize)));
          const start = (this.currentPage() - 1) * this.pageSize;
          this.products.set(res.slice(start, start + this.pageSize));
          this.loading.set(false);
        },
        error: (err) => {
          console.error('Failed to load products:', err);
          this.loading.set(false);
        }
      });
  }

  toggleCategory(slug: string): void {
    this.selectedCategories.update(cats =>
      cats.includes(slug) ? cats.filter(c => c !== slug) : [...cats, slug]
    );
    this.currentPage.set(1);
  }

  updatePriceRange(range: { min: number; max: number }): void {
    this.priceRange.set(range);
  }

  onSortChange(e: Event): void {
    this.sortBy.set((e.target as HTMLSelectElement).value as SortOption);
    this.currentPage.set(1);
  }

  applyFilters(): void {
    this.currentPage.set(1);
    this.loadProducts();
  }

  clearFilters(): void {
    this.selectedCategories.set([]);
    this.priceRange.set({ min: 0, max: 500 });
    this.currentPage.set(1);
    this.loadProducts();
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }

  async addToCart(product: Product): Promise<void> {
    try {
      await this.cartService.addToCart(product);
    } catch (error) {
      console.error('Failed to add to cart:', error);
    }
  }
}
