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
  stock?: number;
  category?: string; // أضفنا ? هنا لأنها ناقصة في الداتا الحالية
  categoryId?: number;
  categoryName?: string;
  brandName?: string;
  typeName?: string;
  merchantName?: string;
  quantity?: number;
  sizes?: string[];
  color?: string;
  createdAt?: Date;
  isActive?: boolean;
  status?: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  createdAt?: Date;
  count?: number; // اختياري - ممكن نحسبه في الفرونت
}

export interface FilterOptions {
  categories: string[];
  minPrice: number;
  maxPrice: number;
  sortBy: 'popular' | 'price-low' | 'price-high' | 'newest';
  search?: string;
}

export type SortOption = FilterOptions['sortBy'];
