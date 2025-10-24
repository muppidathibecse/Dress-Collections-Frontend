import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  imports: [CommonModule],
  templateUrl: './start.html',
  styleUrl: './start.css',
})
export class Start {
  images: string[] = [
    './assets/fashions/F1.jpg',
    './assets/fashions/F2.jpg',
    './assets/fashions/F3.jpg',
    './assets/fashions/F4.jpg',
    './assets/fashions/F5.jpg',
  ];

  currentIndex: number = 0;
  currentValue: number = 0;

  constructor(private cdr: ChangeDetectorRef, private router: Router) {
    setInterval(() => {
      if (this.currentValue === this.images.length) {
        this.currentValue = 0;
        this.currentIndex = this.currentValue;
      } else {
        this.currentIndex = this.currentValue;
      }
      this.currentValue++;
      //console.log('Value:', this.currentIndex);
      this.cdr.detectChanges();
    }, 1000);
  }

  Next() {
    if (this.currentIndex === this.images.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = this.currentIndex + 1;
    }
  }

  Prev() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.images.length - 1;
    } else {
      this.currentIndex = this.currentIndex - 1;
    }
  }

  GoToHome() {
    this.router.navigate(['/home']);
  }
}
