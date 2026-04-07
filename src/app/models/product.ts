export interface Review {
  id: number;
  userName: string;
  comment: string;
  rating: number;
  createdAt: Date;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  // جعلنا الخصائص دي اختيارية لتناسب تنوع المنتجات عندك
  details?: string;
  oldPrice?: number;
  originalPrice?: number;
  sale?: number;
  discount?: number;
  image?: string;
  images?: string[];
  rating: number;
  reviews?: Review[];
  reviewsCount?: number;
  stockQuantity?: number;
  category?: string; // أضفنا ? هنا لأنها ناقصة في الداتا الحالية
  brandName?: string;
  typeName?: string;
  quantity?: number;
  sizes?: string[];
  color?: string;
  createdAt?: Date;
  isActive?: boolean;
}

export interface Category {
  id: string;
  name: string;
  count: number;
}

export interface FilterOptions {
  categories: string[];
  minPrice: number;
  maxPrice: number;
  sortBy: 'popular' | 'price-low' | 'price-high' | 'newest';
}

export type SortOption = FilterOptions['sortBy'];
