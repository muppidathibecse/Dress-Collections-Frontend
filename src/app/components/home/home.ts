import { ChangeDetectorRef, Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  brands: string[] = [
    'assets/brands/Adidas.jpg',
    'assets/brands/A.webp',
    'assets/brands/Puma.jpg',
    'assets/brands/Nb.jpg',
    'assets/brands/Hm.jpg',
    'assets/brands/Nike.jpg',
  ];
  images = [
    { src: 'testassets/Red.jpg', detail: '1 Summer is On' },
    { src: 'testassets/Blue.webp', detail: '2 Cool Blue' },
    { src: 'testassets/Red.jpg', detail: '3 Summer is On' },
    { src: 'testassets/Blue.webp', detail: '4 Cool Blue' },
    { src: 'testassets/Red.jpg', detail: '5 Summer is On' },
    { src: 'testassets/Blue.webp', detail: '6 Cool Blue' },
    { src: 'testassets/Red.jpg', detail: '7 Summer is On' },
    { src: 'testassets/Blue.webp', detail: '8 Cool Blue' },
  ];

  currentIndex: number = 0;
  currentValue: number = 0;

  constructor(private cdr: ChangeDetectorRef) {
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
    }, 2000);
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
}
