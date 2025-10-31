import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-upimethods',
  imports: [CommonModule, FormsModule],
  templateUrl: './upimethods.html',
  styleUrl: './upimethods.css',
})
export class Upimethods {
  selectedPayment: string = '';
  isOpen = false;

  toggleOptions() {
    this.isOpen = !this.isOpen;
  }
}
