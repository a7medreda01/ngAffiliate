import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../shared/environment/environment';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.css',
})
export class EditProduct implements OnInit {

  private api = environment.baseUrl;
  productId!: number;

  isLoading    = false;
  isSaving     = false;
  isDeleting   = false;
  showDeleteModal = false;
  successMsg   = '';
  errorMsg     = '';

  categories: any[] = [];

  product = {
    name:        '',
    description: '',
    details:     '',
    price:       0,
    stock:       0,
    categoryId:  0,
    status:      'Active',
  };

  // الصور الموجودة على السيرفر
  existingImages: string[] = [];
  // الصور اللي اتحذفت (عشان نبعتها للـ backend)
  removedImageUrls: string[] = [];
  // الصور الجديدة اللي المستخدم اختارها
  newImages:     File[]   = [];
  previewUrls:   string[] = [];
  selectedMainImage: string = '';

  constructor(
    private route:  ActivatedRoute,
    private router: Router,
    private http:   HttpClient
  ) {}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadProduct();
    this.loadCategories();
  }

  loadProduct(): void {
    this.isLoading = true;
    this.http.get<any>(`${this.api}products/${this.productId}`).subscribe({
      next: (res) => {
        this.product = {
          name:        res.name,
          description: res.description,
          details:     res.details,
          price:       res.price,
          stock:       res.stock,
          categoryId:  res.categoryId,
          status:      res.status,
        };
        this.existingImages    = res.images ?? [];
        this.selectedMainImage = this.existingImages[0] ?? '';
        this.isLoading         = false;
      },
      error: () => {
        this.errorMsg  = 'Failed to load product';
        this.isLoading = false;
      }
    });
  }

  loadCategories(): void {
    this.http.get<any[]>(`${this.api}categories`).subscribe({
      next: (res) => this.categories = res,
      error: () => console.error('Failed to load categories')
    });
  }

  selectMainImage(img: string): void {
    this.selectedMainImage = img;
  }

  // ✅ حذف صورة موجودة - بيضيفها لـ removedImageUrls عشان تتبعت للـ backend
  removeExistingImage(index: number): void {
    const removed = this.existingImages[index];
    this.removedImageUrls.push(removed);
    this.existingImages.splice(index, 1);

    if (this.selectedMainImage === removed) {
      this.selectedMainImage = this.existingImages[0] ?? this.previewUrls[0] ?? '';
    }
  }

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;

    Array.from(input.files).forEach(file => {
      this.newImages.push(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        const url = e.target?.result as string;
        this.previewUrls.push(url);
        if (!this.selectedMainImage) {
          this.selectedMainImage = url;
        }
      };
      reader.readAsDataURL(file);
    });

    input.value = '';
  }

  removeNewImage(index: number): void {
    const removedUrl = this.previewUrls[index];
    this.newImages.splice(index, 1);
    this.previewUrls.splice(index, 1);

    if (this.selectedMainImage === removedUrl) {
      this.selectedMainImage = this.existingImages[0] ?? this.previewUrls[0] ?? '';
    }
  }

  get totalImages(): number {
    return this.existingImages.length + this.previewUrls.length;
  }

  saveChanges(): void {
    if (!this.product.name || !this.product.price) {
      this.errorMsg = 'Please fill in all required fields.';
      return;
    }

    this.isSaving = true;
    this.errorMsg = '';
    this.successMsg = '';

    const formData = new FormData();
    formData.append('Name',                  this.product.name);
    formData.append('Description',           this.product.description);
    formData.append('Details',               this.product.details);
    formData.append('Price',                 this.product.price.toString());
    formData.append('Stock',                 this.product.stock.toString());
    formData.append('CategoryId',            this.product.categoryId.toString());
    formData.append('Status',                this.product.status);
    formData.append('MerchantId',            '1');
    formData.append('PlatformCommissionPct', '5');

    // ✅ بعت الصور المتبقية عشان الـ backend يعرف يمسح اللي اتشالت
    this.existingImages.forEach(url => {
      formData.append('ExistingImageUrls', url);
    });

    // ✅ الصور الجديدة
    this.newImages.forEach(file => {
      formData.append('Images', file);
    });

    this.http.put(`${this.api}products/${this.productId}`, formData,
      { responseType: 'text' }
    ).subscribe({
      next: () => {
        this.isSaving   = false;
        this.successMsg = 'Product updated successfully!';
        this.removedImageUrls = [];
        setTimeout(() => this.successMsg = '', 3000);
      },
      error: (err) => {
        this.isSaving = false;
        this.errorMsg = 'Failed to save changes.';
        console.error(err);
      }
    });
  }

  // ✅ حذف المنتج بالكامل
  confirmDelete(): void {
    this.showDeleteModal = true;
  }

  cancelDelete(): void {
    this.showDeleteModal = false;
  }

  deleteProduct(): void {
    this.isDeleting = true;
    this.http.delete(`${this.api}products/${this.productId}`).subscribe({
      next: () => {
        this.isDeleting = false;
        this.router.navigate(['/merchant/home']);
      },
      error: (err) => {
        this.isDeleting    = false;
        this.showDeleteModal = false;
        this.errorMsg      = 'Failed to delete product.';
        console.error(err);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/merchant/home']);
  }
}