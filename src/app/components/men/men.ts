import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-men',
  imports: [Navbar, CommonModule],
  templateUrl: './men.html',
  styleUrl: './men.css',
})
export class Men {
  MenDetails = [
    { brand: 'NETPLAY', name: 'Men Regular Fit Shirt', rs: 1700, oldrs: 2000, off: 45, rev: 4 },
    {
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt hgfhgfd effd',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      rev: 4,
    },
    { brand: 'NETPLAY', name: 'Men ', rs: 1700, oldrs: 2000, off: 45, rev: 4 },
    { brand: 'NETPLAY', name: 'Men Regular Fit Shirt', rs: 1700, oldrs: 2000, off: 45, rev: 4 },
    { brand: 'NETPLAY', name: 'Men Regular Fit Shirt', rs: 17, oldrs: 200, off: 45, rev: 4 },
    { brand: 'NETPLAY', name: 'Men Regular Fit Shirt', rs: 1700, oldrs: 2000, off: 45, rev: 4 },
    { brand: 'NETPLAY', name: 'Men Regular Fit Shirt', rs: 17, oldrs: 200, off: 45, rev: 4 },
    { brand: 'NETPLAY', name: 'Men Regular Fit Shirt', rs: 1700, oldrs: 2000, off: 45, rev: 4 },
    { brand: 'NETPLAY', name: 'Men Regular Fit Shirt', rs: 17, oldrs: 200, off: 45, rev: 4 },
    { brand: 'NETPLAY', name: 'Men Regular Fit Shirt', rs: 1700, oldrs: 2000, off: 45, rev: 4 },
    { brand: 'NETPLAY', name: 'Men Regular Fit Shirt', rs: 17, oldrs: 200, off: 45, rev: 4 },
    { brand: 'NETPLAY', name: 'Men Regular Fit Shirt', rs: 1700, oldrs: 2000, off: 45, rev: 4 },
    { brand: 'NETPLAY', name: 'Men Regular Fit Shirt', rs: 17, oldrs: 200, off: 45, rev: 4 },
    { brand: 'NETPLAY', name: 'Men Regular Fit Shirt', rs: 1700, oldrs: 2000, off: 45, rev: 4 },
    { brand: 'NETPLAY', name: 'Men Regular Fit Shirt', rs: 17, oldrs: 200, off: 45, rev: 4 },
  ];
}
