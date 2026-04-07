import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-price-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './price-filter.html',  // ✅ استخدم ده
  styleUrls: ['./price-filter.css']
})
export class PriceFilterComponent {
  readonly min = input<number>(0);
  readonly max = input<number>(500);
  readonly value = input.required<{ min: number; max: number }>();
  readonly valueChange = output<{ min: number; max: number }>();

  updateMin(event: Event): void {
    const val = +(event.target as HTMLInputElement).value;
    this.valueChange.emit({ ...this.value(), min: Math.min(val, this.value().max) });
  }

  updateMax(event: Event): void {
    const val = +(event.target as HTMLInputElement).value;
    this.valueChange.emit({ ...this.value(), max: Math.max(val, this.value().min) });
  }
}
