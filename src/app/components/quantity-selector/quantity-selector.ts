import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quantity-selector',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="quantity-selector">
      <button
        class="btn-decrease"
        (click)="decrease()"
        [disabled]="quantity() <= 1">−</button>
      <span class="quantity">{{ quantity() }}</span>
      <button
        class="btn-increase"
        (click)="increase()">+</button>
    </div>
  `,
  styleUrls: ['./quantity-selector.css']
})
export class QuantitySelectorComponent {
  readonly quantity = input.required<number>();
  readonly quantityChange = output<number>();

  decrease(): void {
    if (this.quantity() > 1) {
      this.quantityChange.emit(this.quantity() - 1);
    }
  }

  increase(): void {
    this.quantityChange.emit(this.quantity() + 1);
  }
}
