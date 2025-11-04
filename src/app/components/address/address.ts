import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-address',
  imports: [CommonModule],
  templateUrl: './address.html',
  styleUrl: './address.css',
})
export class Address {
  isAOpen = true;

  addresses = [
    { text: '1/345, Whitefield, Bangalore City, Karnataka - 123 456.' },
    { text: '4/145, Green Street, Bangalore City, Karnataka - 123 456.' },
  ];

  selectedAddress: number | null = null;

  toggleAOptions() {
    this.isAOpen = !this.isAOpen;
  }

  selectAddress(index: number) {
    this.selectedAddress = index; 
  }
}
