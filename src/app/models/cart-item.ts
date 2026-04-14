import { Product } from './product';


export interface Coupon {
  code: string;
  discountPercent: number;
}

export interface CartItem {
  id?: number;
  productId: number;
  productName: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  total: number;
}

export interface CartSummary {
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  itemCount: number;
}

export interface CartResponse {
  items: CartItem[];
  summary: CartSummary;
}
