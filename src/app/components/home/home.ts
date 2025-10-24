import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.StartMoving();
  }

  brands: string[] = [
    'assets/brands/Adidas.jpg',
    'assets/brands/A.webp',
    'assets/brands/Puma.jpg',
    'assets/brands/Nb.jpg',
    'assets/brands/Hm.jpg',
    'assets/brands/Nike.jpg',
  ];
  images = [
    {
      src: 'assets/explores/E1.jpg',
      brandsrc: 'assets/brands/Adidas.jpg',
      detail: '1 Summer is On',
    },
    { src: 'assets/explores/E2.jpg', brandsrc: 'assets/brands/As.png', detail: '2 Cool Blue' },
    { src: 'assets/explores/E3.jpg', brandsrc: 'assets/brands/Puma.jpg', detail: '3 Summer is On' },
    { src: 'assets/explores/E4.jpg', brandsrc: 'assets/brands/Nike.jpg', detail: '4 Cool Blue' },
  ];

  currentIndex: number = 0;
  currentValue: number = 0;

  StartMoving() {
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
}
