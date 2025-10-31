import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-viewdetails',
  imports: [CommonModule],
  templateUrl: './viewdetails.html',
  styleUrl: './viewdetails.css',
})
export class Viewdetails {
  isVOpen = false;

  toggleVOptions() {
    this.isVOpen = !this.isVOpen;
  }
}
