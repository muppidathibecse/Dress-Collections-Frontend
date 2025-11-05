import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-viewdetails',
  imports: [CommonModule],
  templateUrl: './viewdetails.html',
  styleUrl: './viewdetails.css',
})
export class Viewdetails {
  @Input() bagTotal: number = 0;
  @Input() saveTotal: number = 0;

  ngOnChanges() {
    console.log('Viewdetails received - Bag Total:', this.bagTotal);
    console.log('Viewdetails received - Save Total:', this.saveTotal);
  }
  isVOpen = false;

  toggleVOptions() {
    this.isVOpen = !this.isVOpen;
  }
}
