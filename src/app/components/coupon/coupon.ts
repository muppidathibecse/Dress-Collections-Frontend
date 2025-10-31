import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-coupon',
  imports: [CommonModule],
  templateUrl: './coupon.html',
  styleUrl: './coupon.css',
})
export class Coupon {
  isCOpen = false;

  toggleCOptions() {
    this.isCOpen = !this.isCOpen;
  }
}
