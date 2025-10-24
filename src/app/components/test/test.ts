import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.html',
  styleUrls: ['./test.css'],
})
export class Test {
  images: string[] = [
    './assets/logos/Logo.jpg',
    './assets/pictures/Fashion.jpg',
    './assets/logos/Logo.jpg',
    './assets/pictures/Fashion.jpg',
    './assets/logos/Logo.jpg',
    './assets/pictures/Fashion.jpg',
  ];


  getTransform(index: number) {
    if (index === this.currentIndex) return 'translateX(0%)';
    // if (this.direction === 'next')
    //   return index < this.currentIndex ? 'translateX(-100%)' : 'translateX(100%)';
    // if (this.direction === 'prev')
    //   return index > this.currentIndex ? 'translateX(100%)' : 'translateX(-100%)';
    else return 'translateX(100%)';
  }

   images1 = [
    { src: 'testassets/Red.jpg', detail: 'Summer is On' },
    { src: 'testassets/Blue.webp', detail: 'Cool Blue' },
  ];

  currentIndex: number = 0;
  direction: 'next' | 'prev' = 'next'; // to know slide direction

  prev() {
    this.direction = 'prev';
    this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
  }

  next() {
    this.direction = 'next';
    this.currentIndex = this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
  }
}
