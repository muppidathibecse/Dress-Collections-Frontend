import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-upimethods',
  imports: [CommonModule, FormsModule],
  templateUrl: './upimethods.html',
  styleUrl: './upimethods.css',
})
export class Upimethods {
  constructor(public router: Router) {}
  paymentMethods = [
    { img: 'assets/logos/G.png', name: 'GPay', value: 'gpay' },
    { img: 'assets/logos/P.png', name: 'PhonePe', value: 'phonepe' },
    { img: 'assets/logos/PT.png', name: 'Paytm', value: 'paytm' },
    { img: 'assets/logos/C.png', name: 'Cash on Delivery', value: 'cash' },
  ];

  selectedPayment: string = '';

  isOpen = false;
  showSuccess = false;
  toggleOptions() {
    this.isOpen = !this.isOpen;
  }

  confirmOrder() {
    this.showSuccess = true;

    setTimeout(() => {
      this.showSuccess = false;
      this.router.navigate(['/profile']);
    }, 3000);
  }
}
