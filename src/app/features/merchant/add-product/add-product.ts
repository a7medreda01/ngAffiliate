import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../shared/environment/environment';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct implements OnInit {

  private api = environment.baseUrl;

  isSaving   = false;
  successMsg = '';
  errorMsg   = '';

  categories: any[] = [];

  product = {
    name:                 '',
    description:          '',
    details:              '',
    price:                0,
    stock:                0,
    categoryId:           0,
    merchantId:           1,
    platformCommissionPct: 5,
  };

  newImages:   File[]   = [];
  previewUrls: string[] = [];
  selectedMainImage     = '';

  constructor(
    private router: Router,
    private http:   HttpClient
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.http.get<any[]>(`${this.api}categories`).subscribe({
      next: (res) => this.categories = res,
      error: () => console.error('Failed to load categories')
    });
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

  selectMainImage(url: string): void {
    this.selectedMainImage = url;
  }

  removeImage(index: number): void {
    const removed = this.previewUrls[index];
    this.newImages.splice(index, 1);
    this.previewUrls.splice(index, 1);
    if (this.selectedMainImage === removed) {
      this.selectedMainImage = this.previewUrls[0] ?? '';
    }
  }

  get totalImages(): number {
    return this.previewUrls.length;
  }

  saveProduct(): void {
    if (!this.product.name || !this.product.price || !this.product.categoryId) {
      this.errorMsg = 'Please fill in all required fields.';
      return;
    }

    this.isSaving  = true;
    this.errorMsg  = '';
    this.successMsg = '';

    const formData = new FormData();
    formData.append('Name',                  this.product.name);
    formData.append('Description',           this.product.description);
    formData.append('Details',               this.product.details);
    formData.append('Price',                 this.product.price.toString());
    formData.append('Stock',                 this.product.stock.toString());
    formData.append('CategoryId',            this.product.categoryId.toString());
    formData.append('MerchantId',            this.product.merchantId.toString());
    formData.append('PlatformCommissionPct', this.product.platformCommissionPct.toString());

    this.newImages.forEach(file => {
      formData.append('Images', file);
    });

    this.http.post(`${this.api}products`, formData, { responseType: 'text' }).subscribe({
      next: () => {
        this.isSaving   = false;
        this.successMsg = 'Product added successfully!';
        setTimeout(() => this.router.navigate(['/merchant/home']), 1500);
      },
      error: (err) => {
        this.isSaving  = false;
        this.errorMsg  = 'Failed to add product.';
        console.error(err);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/merchant/home']);
  }
}