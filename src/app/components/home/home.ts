import { Component } from '@angular/core';
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
  images: string[] = [
    'assets/brands/Adidas.jpg',
    'assets/brands/A.webp',
    'assets/brands/Puma.jpg',
    'assets/brands/Nb.jpg',
    'assets/brands/Hm.jpg',
    'assets/brands/Nike.jpg',
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
