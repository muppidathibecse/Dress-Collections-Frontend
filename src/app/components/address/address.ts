import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-address',
  imports: [CommonModule],
  templateUrl: './address.html',
  styleUrl: './address.css',
})
export class Address {
  isAOpen = false;

  toggleAOptions() {
    this.isAOpen = !this.isAOpen;
  }
}
