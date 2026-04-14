
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product-service';
import { CategoryService } from '../../../services/category/category-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-catalog.html',
  styleUrl: './product-catalog.css'
})
export class ProductCatalog {
  products: any[] = [];
  filteredProducts: any[] = [];
  allMerchantProducts: any[] = [];

  categories: any[] = [];
  selectedCategory: string = 'All Products';
  searchTerm: string = '';

  merchantId: number = 1;

  sidebarItems = [
    'Overview',
    'Transactions',
    'Inventory',
    'Customers',
    'Settings'
  ];

  activeSidebarItem = 'Inventory';

  showAddForm = false;
  selectedFile: File | null = null;

  newProduct: any = {
    name: '',
    categoryId: null,
    description: '',
    price: 0,
    stock: 0,
    merchantId: 1,
    platformCommissionPct: 10
  };

  showEditForm = false;
  editingProductId: number | null = null;

  editProductData: any = {
    name: '',
    categoryId: null,
    description: '',
    price: 0,
    stock: 0,
    merchantId: 1,
    platformCommissionPct: 10,
    status: 1,
    imageUrl: ''
  };

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
     private router: Router
  ) {}

  ngOnInit() {
    this.getCategories();
    this.getMerchantProducts();
  }

  getMerchantProducts() {
    this.productService.getProductsByMerchant(this.merchantId).subscribe({
      next: (res: any) => {
        const data = res.data || res;
        console.log('Merchant products:', data);
        this.allMerchantProducts = data;
        this.products = data;
        this.filteredProducts = data;
      },
      error: (err: any) => {
        console.log('Merchant products error:', err);
      }
    });
  }

  getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (res: any) => {
        const apiCategories = res.data || res;
        console.log('Categories:', apiCategories);
        this.categories = [{ id: 0, name: 'All Products' }, ...apiCategories];
      },
      error: (err: any) => {
        console.log('Categories error:', err);
      }
    });
  }

getImageUrl(product: any): string {
  // الـ API بترجع images array مش imageUrl
  const url = product.images?.[0] || product.imageUrl;
  if (!url) return 'assets/images/products/p1.png';
  return url; // الـ URL جاي كامل من الـ API
}
  selectCategory(category: any) {
    this.selectedCategory = category.name;

    if (category.id === 0) {
      this.products = [...this.allMerchantProducts];
      this.onSearch();
      return;
    }

    this.products = this.allMerchantProducts.filter(
      (product: any) => product.categoryName === category.name
    );

    this.onSearch();
  }

  onSearch() {
    this.filteredProducts = this.products.filter((product: any) =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  setActiveSidebarItem(item: string) {
    this.activeSidebarItem = item;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }
  goToEditProduct(id: number): void {
  this.router.navigate(['/merchant/edit-product', id]);
}
goToAddProduct(): void {
  this.router.navigate(['/merchant/add-product']);
}
  }
