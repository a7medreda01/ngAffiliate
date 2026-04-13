import { Component, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-price-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './price-filter.html',
  templateUrl: './price-filter.html',  // ✅ استخدم ده
  styleUrls: ['./price-filter.css']
})
export class PriceFilterComponent {
  readonly min = input<number>(0);
  readonly max = input<number>(500);
  readonly value = input.required<{ min: number; max: number }>();
  readonly valueChange = output<{ min: number; max: number }>();

  /** Left offset % of the colored fill bar */
  readonly fillLeft = computed(() => {
    const range = this.max() - this.min();
    return range > 0 ? ((this.value().min - this.min()) / range) * 100 : 0;
  });

  /** Width % of the colored fill bar */
  readonly fillWidth = computed(() => {
    const range = this.max() - this.min();
    return range > 0 ? ((this.value().max - this.value().min) / range) * 100 : 100;
  });

  updateMin(event: Event): void {
  const val = +(event.target as HTMLInputElement).value;
  const clamped = Math.min(val, this.value().max - 1);
  this.valueChange.emit({ ...this.value(), min: clamped });
}

updateMax(event: Event): void {
  const val = +(event.target as HTMLInputElement).value;
  const clamped = Math.max(val, this.value().min + 1);
  this.valueChange.emit({ ...this.value(), max: clamped });
}
}

