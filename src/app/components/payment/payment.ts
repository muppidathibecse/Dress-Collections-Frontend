import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(public router: Router) {}

  MoveBack() {
    this.router.navigate(['/bags']);
  }
}
