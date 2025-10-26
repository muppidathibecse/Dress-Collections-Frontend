import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Heart } from '../icons/heart/heart';
import { HeartRed } from '../icons/heart-red/heart-red';
import { StarComponent } from '../icons/star/star';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kids',
  imports: [Navbar, Heart, HeartRed, StarComponent, CommonModule],
  templateUrl: './kids.html',
  styleUrl: './kids.css',
})
export class Kids {
  //https://www.linenclub.com/men-wear/men/top-wear/shirts?srsltid=AfmBOopTVDxRWt5ZR-Wmw8Puz860U9TYJx0oRkfP7Z1Hiclk_dtngOdl
  MenDetails = [
    {
      src: 'assets/kids/K1.jpg',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 1,
      like: false,
    },
    {
      src: 'assets/kids/K2.webp',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 2,
      like: false,
    },
    {
      src: 'assets/kids/K3.webp',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 3,
      like: false,
    },
    {
      src: 'assets/kids/K4.webp',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 4,
      like: false,
    },
    {
      src: 'assets/kids/K5.webp',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 5,
      like: false,
    },
    {
      src: 'assets/kids/K6.webp',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 1,
      like: false,
    },
    {
      src: 'assets/kids/K7.avif',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 2,
      like: false,
    },
    {
      src: 'assets/kids/K8.webp',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 3,
      like: false,
    },
    {
      src: 'assets/kids/K9.jpg',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 4,
      like: false,
    },
    {
      src: 'assets/kids/K10.webp',
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
