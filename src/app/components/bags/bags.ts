import { Component, ElementRef, ViewChild } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { DownArrow } from '../icons/down-arrow/down-arrow';
import { Heart } from '../icons/heart/heart';
import { HeartRed } from '../icons/heart-red/heart-red';
import { Truck } from '../icons/truck/truck';
import { Remove } from '../icons/remove/remove';
import { CommonModule } from '@angular/common';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-bags',
  standalone: true,
  imports: [CommonModule, Navbar, DownArrow, Truck, Remove, Heart, HeartRed],
  templateUrl: './bags.html',
  styleUrl: './bags.css',
})
export class Bags {
  BagDetails = [
    {
      src: 'assets/kids/K1.jpg',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      like: false,
      size: 'M',
      qty: 4,
      delivery: '10 Nov',
    },
    {
      src: 'assets/kids/K1.jpg',
      brand: 'NETPLAY',
      name: 'Men Regular Fit Shirt',
      rs: 1700,
      oldrs: 2000,
      off: 45,
      like: false,
      size: 'XL',
      qty: 1,
      delivery: '10 Nov',
    },
  ];
  ChangeLike(bag: any) {
    bag.like = !bag.like;
    console.log(bag.like);
  }

  @ViewChild('orderDetails') orderDetails!: ElementRef;

  scrollToOrderDetails() {
    if (this.orderDetails) {
      this.orderDetails.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn('Order Details not found in the view yet!');
    }
  }

  showPopup = false;
  qty: number = 0;
  size: string = '';
  sizes: string[] = ['S', 'M', 'L', 'XL'];
  openPopup(a: number, b: string) {
    this.showPopup = true;
    this.qty = a;
    this.size = b;
    console.log('Qty: ', this.qty, 'Size: ', this.size);
  }

  closePopup(event: Event) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('bg-opacity-40') || target.tagName === 'BUTTON') {
      this.showPopup = false;
    }
  }
  Incre() {
    this.qty++;
  }
  Decre() {
    this.qty--;
  }
}
