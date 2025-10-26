import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { CommonModule } from '@angular/common';
import { Remove } from '../icons/remove/remove';
import { Bag } from '../icons/bag/bag';

@Component({
  selector: 'app-likes',
  standalone: true,
  imports: [Navbar, CommonModule, Remove, Bag],
  templateUrl: './likes.html',
  styleUrl: './likes.css',
})
export class Likes {
  MenDetails = [
    {
      src: 'assets/mens/M1.avif',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 1,
      like: false,
    },
    {
      src: 'assets/mens/M2.webp',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 2,
      like: false,
    },
    {
      src: 'assets/mens/M3.webp',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 3,
      like: false,
    },
    {
      src: 'assets/mens/M4.avif',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 4,
      like: false,
    },
    {
      src: 'assets/mens/M5.webp',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 5,
      like: false,
    },
  ];
}
