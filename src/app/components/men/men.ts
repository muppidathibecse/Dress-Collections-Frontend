import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../icons/star/star';

@Component({
  selector: 'app-men',
  imports: [Navbar, StarComponent, CommonModule],
  templateUrl: './men.html',
  styleUrl: './men.css',
})
export class Men {
  MenDetails = [
    {
      src: 'assets/mens/M1.avif',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 1,
    },
    {
      src: 'assets/mens/M2.webp',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 2,
    },
    {
      src: 'assets/mens/M3.webp',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 3,
    },
    {
      src: 'assets/mens/M4.avif',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 4,
    },
    {
      src: 'assets/mens/M5.webp',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 5,
    },
    {
      src: 'assets/mens/M6.webp',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 1,
    },
    {
      src: 'assets/mens/M7.jpg',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 2,
    },
    {
      src: 'assets/mens/M8.webp',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 3,
    },
    {
      src: 'assets/mens/M9.jpg',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 4,
    },
    {
      src: 'assets/mens/M10.webp',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 5,
    },
  ];
}
