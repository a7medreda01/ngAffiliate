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

      <!-- Breadcrumb -->
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a routerLink="/">Home</a>
        <span class="sep">›</span>
        <span class="current">Casual</span>
      </nav>

      <div class="layout">

        <!-- ══════════════ SIDEBAR ══════════════ -->
        <aside class="sidebar" [class.open]="sidebarOpen()">
          <div class="sidebar-inner">

            <div class="sidebar-header">
              <span class="sidebar-title">Filters</span>
              <button class="icon-btn" (click)="sidebarOpen.set(false)" aria-label="Close filters">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <!-- ── Categories ── -->
            <div class="filter-block">
              <button class="filter-block__head" (click)="toggleSection('categories')">
                <span>Categories</span>
                <svg class="chevron" [class.rotated]="openSections().includes('categories')"
                     width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>

              @if (openSections().includes('categories')) {
                <ul class="filter-block__body category-list">
                  @for (cat of categories(); track cat.id) {
                    <li>
                      <label
                        class="cat-item"
                        [class.active]="selectedCategories().includes(cat.slug)"
                        (click)="toggleCategory(cat.slug)">
                        <span class="cat-name">{{ cat.name }}</span>
                        <svg class="cat-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2">
                          <polyline points="9 18 15 12 9 6"/>
                        </svg>
                      </label>
                    </li>
                  }
                </ul>
              }
            </div>

            <div class="divider"></div>

            <!-- ── Price ── -->
            <div class="filter-block">
              <button class="filter-block__head" (click)="toggleSection('price')">
                <span>Price</span>
                <svg class="chevron" [class.rotated]="openSections().includes('price')"
                     width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>

              @if (openSections().includes('price')) {
                <div class="filter-block__body">
                  <app-price-filter
                    [min]="0"
                    [max]="500"
                    [value]="priceRange()"
                    (valueChange)="updatePriceRange($event)">
                  </app-price-filter>
                </div>
              }
            </div>

            <button class="btn-apply" (click)="applyFilters()">Apply Filter</button>

          </div>
        </aside>

        <!-- Sidebar backdrop (mobile) -->
        @if (sidebarOpen()) {
          <div class="sidebar-backdrop" (click)="sidebarOpen.set(false)"></div>
        }

        <!-- ══════════════ MAIN ══════════════ -->
        <main class="main">

          <!-- Header row -->
          <div class="main-header">
            <div class="main-header__left">
              <h1 class="page-title">Casual</h1>
              <span class="results-count">
                Showing {{ rangeStart() }}–{{ rangeEnd() }} of {{ totalCount() }} Products
              </span>
            </div>
            <div class="main-header__right">
              <span class="sort-label">Sort by:</span>
              <div class="sort-select-wrap">
                <select [value]="sortBy()" (change)="onSortChange($event)" class="sort-select">
                  <option value="popular">Most Popular</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <svg class="select-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </div>

              <!-- Filter toggle (mobile) -->
              <button class="filter-toggle-btn" (click)="sidebarOpen.set(true)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="4" y1="6" x2="20" y2="6"/>
                  <line x1="4" y1="12" x2="20" y2="12"/>
                  <line x1="4" y1="18" x2="20" y2="18"/>
                </svg>
                Filters
              </button>
            </div>
          </div>

          <!-- Loading -->
          @if (loading()) {
            <div class="loading-grid">
              @for (i of [1,2,3,4,5,6,7,8,9]; track i) {
                <div class="skeleton-card">
                  <div class="skeleton-img"></div>
                  <div class="skeleton-line" style="width:70%"></div>
                  <div class="skeleton-line" style="width:40%"></div>
                </div>
              }
            </div>
          } @else {
            <!-- Grid -->
            <div class="products-grid">
              @for (product of products(); track product.id) {
                <app-product-card
                  [product]="product"
                  (addToCart)="addToCart($event)">
                </app-product-card>
              } @empty {
                <div class="empty-state">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.5">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                  <p>No products found</p>
                  <button class="btn-reset" (click)="resetFilters()">Reset Filters</button>
                </div>
              }
            </div>
          }

          <!-- Pagination -->
          @if (totalPages() > 1) {
            <div class="pagination">
              <button
                class="pg-btn pg-nav"
                [disabled]="currentPage() === 1"
                (click)="goToPage(currentPage() - 1)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
                Previous
              </button>

              <div class="pg-numbers">
                @for (page of visiblePages(); track page) {
                  @if (page === -1) {
                    <span class="pg-ellipsis">...</span>
                  } @else {
                    <button
                      class="pg-btn"
                      [class.active]="page === currentPage()"
                      (click)="goToPage(page)">
                      {{ page }}
                    </button>
                  }
                }
              </div>

              <button
                class="pg-btn pg-nav"
                [disabled]="currentPage() === totalPages()"
                (click)="goToPage(currentPage() + 1)">
                Next
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
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

  // UI state
  readonly sidebarOpen = signal(false);
  readonly openSections = signal<string[]>(['categories', 'price']);

  // Filters
  readonly selectedCategories = signal<string[]>([]);
  readonly priceRange = signal({ min: 0, max: 500 });
  readonly sortBy = signal<SortOption>('popular');
  readonly currentPage = signal(1);
  readonly pageSize = 9;

  // Data
  readonly products = signal<Product[]>([]);
  readonly totalCount = signal(0);
  readonly totalPages = signal(0);
  readonly categories = signal<Category[]>([]);
  readonly loading = signal(false);

  readonly visiblePages = computed(() => {
    const total = this.totalPages();
    const current = this.currentPage();
    const pages: number[] = [];

    if (total <= 7) {
      for (let i = 1; i <= total; i++) pages.push(i);
    } else {
      pages.push(1);
      if (current > 3) pages.push(-1);
      const start = Math.max(2, current - 1);
      const end = Math.min(total - 1, current + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (current < total - 2) pages.push(-1);
      pages.push(total);
    }
    return pages;
  });

  readonly rangeStart = computed(() => (this.currentPage() - 1) * this.pageSize + 1);
  readonly rangeEnd = computed(() => Math.min(this.currentPage() * this.pageSize, this.totalCount()));

  constructor() {
    this.productService.getCategories().subscribe(cats => this.categories.set(cats));
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
    this.productService.getProducts(filters).subscribe({
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

  toggleSection(key: string): void {
    this.openSections.update(s =>
      s.includes(key) ? s.filter(k => k !== key) : [...s, key]
    );
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
    this.sidebarOpen.set(false);
    this.loadProducts();
  }

  resetFilters(): void {
    this.selectedCategories.set([]);
    this.priceRange.set({ min: 0, max: 500 });
    this.currentPage.set(1);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
