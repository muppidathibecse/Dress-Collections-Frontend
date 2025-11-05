import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-coupon',
  imports: [CommonModule],
  templateUrl: './coupon.html',
  styleUrl: './coupon.css',
})
export class Coupon {
  CouponDetails = [
    {
      img: 'assets/logos/SBI.jpg',
      details: 'Get 15% Offer. Instant Discoutss of up to Rs.1000. Using SBI Prime Cards.',
    },
    {
      img: 'assets/logos/UBI.png',
      details: 'Get 15% Offer. Instant Discout of up to Rs.1000. Using UBIIIII Prime Cards.',
    },
    {
      img: 'assets/logos/HDFC.png',
      details: 'Get 15% Offer. Instant Discout of up to Rs.1000. Using HDFC Primeee Cards.',
    },
  ];
  isCOpen = false;
  selectedCoupon: number | null = null;
  toggleCOptions() {
    this.isCOpen = !this.isCOpen;
  }
  selectCoupon(index: number) {
    this.selectedCoupon = index;
  }
}
