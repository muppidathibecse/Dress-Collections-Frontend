import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../icons/star/star';
import { Heart } from '../icons/heart/heart';
import { HeartRed } from '../icons/heart-red/heart-red';

@Component({
  selector: 'app-men',
  standalone: true,
  imports: [Navbar, StarComponent, CommonModule, Heart, HeartRed],
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
    {
      src: 'assets/mens/M6.webp',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 1,
      like: false,
    },
    {
      src: 'assets/mens/M7.jpg',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 2,
      like: false,
    },
    {
      src: 'assets/mens/M8.webp',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 3,
      like: false,
    },
    {
      src: 'assets/mens/M9.jpg',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 4,
      like: false,
    },
    {
      src: 'assets/mens/M10.webp',
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
