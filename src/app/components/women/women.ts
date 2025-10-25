import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { StarComponent } from '../icons/star/star';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-women',
  imports: [Navbar, StarComponent, CommonModule],
  templateUrl: './women.html',
  styleUrl: './women.css',
})
export class Women {
  //https://www.linenclub.com/men-wear/men/top-wear/shirts?srsltid=AfmBOopTVDxRWt5ZR-Wmw8Puz860U9TYJx0oRkfP7Z1Hiclk_dtngOdl
  MenDetails = [
    {
      src: 'assets/womens/W1.jpg',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 1,
    },
    {
      src: 'assets/womens/W2.avif',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 2,
    },
    {
      src: 'assets/womens/W3.jpg',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 3,
    },
    {
      src: 'assets/womens/W4.avif',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 4,
    },
    {
      src: 'assets/womens/W5.avif',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 5,
    },
    {
      src: 'assets/womens/W6.jpg',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 1,
    },
    {
      src: 'assets/womens/W7.jpg',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 2,
    },
    {
      src: 'assets/womens/W8.avif',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 3,
    },
    {
      src: 'assets/womens/W9.jpg',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 4,
    },
    {
      src: 'assets/womens/W10.avif',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 5,
    },
  ];
}
