import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../address/address';
import { Upimethods } from '../upimethods/upimethods';
import { Coupon } from '../coupon/coupon';
import { Viewdetails } from '../viewdetails/viewdetails';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule, Address, Coupon, Viewdetails, Upimethods],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
})
export class Payment {
  bagTotal: number = 0;
  saveTotal: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {
    // Read and log query params
    this.route.queryParams.subscribe((params) => {
      this.bagTotal = +params['bagTotal'] || 0;
      this.saveTotal = +params['saveTotal'] || 0;
      console.log('Bag Total:', this.bagTotal);
      console.log('Save Total:', this.saveTotal);
    });
  }

  MoveBack() {
    this.router.navigate(['/bags']);
  }
}
