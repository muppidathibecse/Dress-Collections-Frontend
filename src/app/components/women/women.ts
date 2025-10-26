import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { StarComponent } from '../icons/star/star';
import { CommonModule } from '@angular/common';
import { Heart } from "../icons/heart/heart";
import { HeartRed } from "../icons/heart-red/heart-red";

@Component({
  selector: 'app-women',
  imports: [Navbar, StarComponent, CommonModule, Heart, HeartRed],
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
      like: false,
    },
    {
      src: 'assets/womens/W2.avif',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 2,
      like: false,
    },
    {
      src: 'assets/womens/W3.jpg',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 3,
      like: false,
    },
    {
      src: 'assets/womens/W4.avif',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 4,
      like: false,
    },
    {
      src: 'assets/womens/W5.avif',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 5,
      like: false,
    },
    {
      src: 'assets/womens/W6.jpg',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 1,
      like: false,
    },
    {
      src: 'assets/womens/W7.jpg',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 2,
      like: false,
    },
    {
      src: 'assets/womens/W8.avif',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 3,
      like: false,
    },
    {
      src: 'assets/womens/W9.jpg',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 4,
      like: false,
    },
    {
      src: 'assets/womens/W10.avif',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 5,
      like: false,
    },
  ];

  ChangeLike(men: any) {
    men.like = !men.like;
    console.log(men.like);
  }
}
