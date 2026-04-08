import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Product, Category, FilterOptions } from '../../models/product';
import { environment } from '../../shared/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private readonly http: HttpClient) {}
  private readonly apiUrl = `${environment.baseUrl}products`;
  private readonly categoriesUrl = `${environment.baseUrl}categories`;
  private readonly apiOrigin = environment.baseUrl.replace(/\/api\/?$/, '');

  private products: Product[] = [
    {
      id: 1,
      name: 'Gradient Graphic T-shirt',
      description: 'Size: Large, Color: White',
      price: 145,
      originalPrice: 180,
      discount: 20,
      image: 'assets/images/tshirt-1.jpg',
      rating: 3.5,
      reviewsCount: 250,
      category: 'tshirts'
    },
    {
      id: 2,
      name: 'Polo with Tipping Details',
      description: 'Size: Medium, Color: Pink',
      price: 180,
      rating: 4.5,
      reviewsCount: 450,
      category: 'shirts',
      image: 'assets/images/polo-1.jpg'
    },
    {
      id: 3,
      name: 'Black Striped T-shirt',
      description: 'Size: Large, Color: Black',
      price: 120,
      originalPrice: 150,
      discount: 20,
      image: 'assets/images/tshirt-2.jpg',
      rating: 5.0,
      reviewsCount: 250,
      category: 'tshirts'
    },
    {
      id: 4,
      name: 'Skinny Fit Jeans',
      description: 'Size: Large, Color: Blue',
      price: 240,
      originalPrice: 260,
      discount: 10,
      image: 'assets/images/jeans-1.jpg',
      rating: 3.5,
      reviewsCount: 450,
      category: 'jeans'
    },
    {
      id: 5,
      name: 'Checkered Shirt',
      description: 'Size: Medium, Color: Red',
      price: 180,
      rating: 4.5,
      reviewsCount: 450,
      category: 'shirts',
      image: 'assets/images/shirt-1.jpg'
    },
    {
      id: 6,
      name: 'Sleeve Striped T-shirt',
      description: 'Size: Small, Color: Orange',
      price: 130,
      originalPrice: 160,
      discount: 20,
      image: 'assets/images/tshirt-3.jpg',
      rating: 4.5,
      reviewsCount: 250,
      category: 'tshirts'
    },
    {
      id: 7,
      name: 'Vertical Striped Shirt',
      description: 'Size: Large, Color: Green',
      price: 212,
      originalPrice: 232,
      discount: 10,
      image: 'assets/images/shirt-2.jpg',
      rating: 5.0,
      reviewsCount: 450,
      category: 'shirts'
    },
    {
      id: 8,
      name: 'Courage Graphic T-shirt',
      description: 'Size: Medium, Color: Orange',
      price: 145,
      rating: 4.0,
      reviewsCount: 320,
      category: 'tshirts',
      image: 'assets/images/tshirt-4.jpg'
    },
    {
      id: 9,
      name: 'Loose Fit Bermuda Shorts',
      description: 'Size: Large, Color: Blue',
      price: 80,
      rating: 3.0,
      reviewsCount: 150,
      category: 'shorts',
      image: 'assets/images/shorts-1.jpg'
    }
  ];

  private categories: Category[] = [
    { id: 'tshirts', name: 'T-shirts', count: 150 },
    { id: 'shorts', name: 'Shorts', count: 45 },
    { id: 'shirts', name: 'Shirts', count: 120 },
    { id: 'hoodie', name: 'Hoodie', count: 89 },
    { id: 'jeans', name: 'Jeans', count: 67 }
  ];

  getProducts(filters?: FilterOptions): Observable<Product[]> {
    let params = new HttpParams();
    if (filters?.minPrice != null) params = params.set('minPrice', filters.minPrice);
    if (filters?.maxPrice != null) params = params.set('maxPrice', filters.maxPrice);

    return this.http.get<any[]>(this.apiUrl, { params }).pipe(
      map((res) => {
        let mapped = res.map((p) => this.mapApiProduct(p));
        if (filters?.categories?.length) {
          mapped = mapped.filter((x) => !!x.category && filters.categories.includes(x.category));
        }
        if (filters) {
          switch (filters.sortBy) {
            case 'price-low':
              mapped.sort((a, b) => a.price - b.price);
              break;
            case 'price-high':
              mapped.sort((a, b) => b.price - a.price);
              break;
            case 'popular':
              mapped.sort((a, b) => (b.reviewsCount ?? 0) - (a.reviewsCount ?? 0));
              break;
          }
        }
        return mapped;
      }),
      catchError(() => {
        // fallback local if API unavailable
        return of(this.filterLocalProducts(filters));
      })
    );
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<any[]>(this.categoriesUrl).pipe(
      map((res) => {
        const mapped = res.map((c) => ({
          id: String(c.slug || this.slugify(c.name || 'category')),
          name: c.name || 'Category',
          count: 0
        } satisfies Category));
        this.categories = mapped;
        return mapped;
      }),
      catchError(() => of(this.categories))
    );
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id));
  }

  private slugify(value: string): string {
    return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  private mapApiProduct(p: any): Product {
    const imageUrl = p.imageUrl ? `${this.apiOrigin}/images/products/${p.imageUrl}` : 'assets/images/placeholder.png';
    const categorySlug = this.slugify(String(p.categoryName || ''));
    return {
      id: p.id,
      name: p.name ?? 'Product',
      description: p.description ?? '',
      price: Number(p.price ?? 0),
      image: imageUrl,
      rating: 4,
      reviewsCount: 0,
      stockQuantity: Number(p.stock ?? 0),
      quantity: 1,
      brandName: p.merchantName ?? '',
      category: categorySlug,
      isActive: String(p.status ?? '').toLowerCase() === 'active'
    };
  }

  private filterLocalProducts(filters?: FilterOptions): Product[] {
    let filtered = [...this.products];
    if (!filters) return filtered;
    if (filters.categories.length > 0) {
      filtered = filtered.filter(p => !!p.category && filters.categories.includes(p.category));
    }
    filtered = filtered.filter(p => p.price >= filters.minPrice && p.price <= filters.maxPrice);
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'popular':
        filtered.sort((a, b) => (b.reviewsCount ?? 0) - (a.reviewsCount ?? 0));
        break;
    }
    return filtered;
  }
}
