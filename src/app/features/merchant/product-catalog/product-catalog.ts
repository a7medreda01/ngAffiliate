// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-product-catalog',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './product-catalog.html',
//   styleUrl: './product-catalog.css'
// })
// export class ProductCatalog {
//   categories: string[] = ['All Products', 'Electronics', 'Apparel', 'Home & Living', 'Essentials'];
//   selectedCategory: string = 'All Products';
//   searchTerm: string = '';

//   products = [
//     {
//       id: 1,
//       name: 'Wireless Headphones',
//       price: 299,
//       category: 'Electronics',
//       stock: 42,
//       status: 'In Stock',
//       image: 'assets/images/products/p1.png'
//     },
//     {
//       id: 2,
//       name: 'Smart Watch',
//       price: 185.5,
//       category: 'Electronics',
//       stock: 3,
//       status: 'Low Stock',
//       image: 'assets/images/products/p2.png'
//     },
//     {
//       id: 3,
//       name: 'Canvas Bag',
//       price: 45,
//       category: 'Apparel',
//       stock: 128,
//       status: 'In Stock',
//       image: 'assets/images/products/p3.png'
//     },
//     {
//       id: 4,
//       name: 'Running Shoes',
//       price: 120,
//       category: 'Apparel',
//       stock: 0,
//       status: 'Out of Stock',
//       image: 'assets/images/products/p4.png'
//     },
//     {
//       id: 5,
//       name: 'Table Lamp',
//       price: 89.99,
//       category: 'Home & Living',
//       stock: 14,
//       status: 'In Stock',
//       image: 'assets/images/products/p5.png'
//     },
//     {
//       id: 6,
//       name: 'Water Bottle',
//       price: 32,
//       category: 'Essentials',
//       stock: 210,
//       status: 'In Stock',
//       image: 'assets/images/products/p6.png'
//     }
//   ];

//   get filteredProducts() {
//     return this.products.filter(product => {
//       const matchesCategory =
//         this.selectedCategory === 'All Products' ||
//         product.category === this.selectedCategory;

//       const matchesSearch =
//         product.name.toLowerCase().includes(this.searchTerm.toLowerCase());

//       return matchesCategory && matchesSearch;
//     });
//   }

//   selectCategory(category: string) {
//     this.selectedCategory = category;
//   }
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product-service';
import { CategoryService } from '../../../services/category/category-service';

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
    private categoryService: CategoryService
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

  getImageUrl(imageUrl: string) {
    if (!imageUrl) return 'assets/images/products/p1.png';

    return imageUrl.replace(
      'https://localhost:44394',
      'https://localhost:7110'
    );
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

  addProduct() {
    if (!this.selectedFile) {
      alert('Please select an image');
      return;
    }

    const formData = new FormData();
    formData.append('Name', this.newProduct.name);
    formData.append('CategoryId', String(this.newProduct.categoryId));
    formData.append('Description', this.newProduct.description);
    formData.append('Price', String(this.newProduct.price));
    formData.append('Stock', String(this.newProduct.stock));
    formData.append('Image', this.selectedFile);
    formData.append('MerchantId', String(this.newProduct.merchantId));
    formData.append('PlatformCommissionPct', String(this.newProduct.platformCommissionPct));

    this.productService.addProduct(formData).subscribe({
      next: (res: any) => {
        console.log('Product added:', res);

        this.showAddForm = false;
        this.showEditForm = false;
        this.selectedFile = null;

        this.newProduct = {
          name: '',
          categoryId: null,
          description: '',
          price: 0,
          stock: 0,
          merchantId: 1,
          platformCommissionPct: 10
        };

        this.getMerchantProducts();
      },
      error: (err: any) => {
        console.log('Add product error:', err);
      }
    });
  }

  openEditForm(product: any) {
    this.showEditForm = true;
    this.showAddForm = false;

    this.editingProductId = product.id;

    const selectedCategory = this.categories.find(
      (c: any) => c.name === product.categoryName
    );

    this.editProductData = {
      name: product.name,
      categoryId: selectedCategory ? selectedCategory.id : null,
      description: product.description || '',
      price: product.price,
      stock: product.stock,
      merchantId: this.merchantId,
      platformCommissionPct: product.platformCommissionPct || 10,
      status: product.status === 'Active' ? 1 : product.status,
      image: product.imageUrl || ''
    };
  }

  updateProduct() {
    console.log('update button clicked');

    if (!this.editingProductId) return;

    const body = {
      name: this.editProductData.name,
      categoryId: Number(this.editProductData.categoryId),
      description: this.editProductData.description,
      price: Number(this.editProductData.price),
      stock: Number(this.editProductData.stock),
      image: this.editProductData.image,
      merchantId: Number(this.editProductData.merchantId),
      platformCommissionPct: Number(this.editProductData.platformCommissionPct),
      status: Number(this.editProductData.status)
    };
    
    this.productService.updateProduct(this.editingProductId, body).subscribe({
      next: (res: any) => {
        console.log('Updated successfully', res);

        this.showEditForm = false;
        this.editingProductId = null;

        this.editProductData = {
          name: '',
          categoryId: null,
          description: '',
          price: 0,
          stock: 0,
          merchantId: 1,
          platformCommissionPct: 10,
          status: 1,
          image: ''
        };

        this.getMerchantProducts();
      },
      error: (err: any) => {
        console.log('Update error', err);
      }
    });
  }
}