import { ChangeDetectorRef, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { DownArrow } from '../icons/down-arrow/down-arrow';
import { Truck } from '../icons/truck/truck';
import { Remove } from '../icons/remove/remove';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BagData } from './bagdata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bags',
  standalone: true,
  imports: [CommonModule, Navbar, DownArrow, Truck, Remove],
  templateUrl: './bags.html',
  styleUrl: './bags.css',
})
export class Bags {
  constructor(public cdr: ChangeDetectorRef, public router: Router) {}

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
  _id: string = '';
  sizes: string[] = ['S', 'M', 'L', 'XL'];
  openPopup(_id: string, a: number, b: string) {
    this.showPopup = true;
    this.qty = a;
    this.size = b;
    this._id = _id;
    console.log('Qty: ', this.qty, 'Size: ', this.size);
  }
  ChangeSize(curr: string) {
    this.size = curr;
  }
  Update(size: string) {
    console.log('ID:', this._id);
    console.log('Changed to:', size);
    console.log('Changed to:', this.qty);

    // You can set multiple fields here
    const updateData = {
      size: size, // dynamic value from user
      qty: this.qty, // example: you can also make this dynamic if needed
    };

    this.http.put(`http://localhost:3000/bags/${this._id}`, updateData).subscribe({
      next: (res) => {
        console.log('Updated:', res);
        this.GetAllItems(); // refresh list after update
      },
      error: (err) => {
        console.error('Error updating bag:', err);
      },
    });
  }

  closePopup() {
    this.showPopup = false;
  }
  Incre() {
    this.qty++;
  }
  Decre() {
    this.qty--;
  }

  //backend
  http = inject(HttpClient);
  AllData: BagData[] = [];
  bagTotal: number = 0;
  saveTotal: number = 0;
  ngOnInit(): void {
    this.GetAllItems();
    this.cdr.detectChanges();
  }
  GetAllItems() {
    this.http.get('http://localhost:3000/bags').subscribe((res: any) => {
      console.log(res);
      this.AllData = res.map((data: any) => ({
        _id: data._id,
        img_src: data.img_src,
        isLike: data.isLike,
        brand_name: data.brand_name,
        details: data.details,
        old_rs: Number(data.old_rs),
        new_rs: Number(data.new_rs),
        offer: data.offer,
        stars: data.stars,
        size: data.size,
        qty: data.qty,
        delivery: data.delivery,
      }));

      this.bagTotal = this.AllData.reduce((sum, item) => sum + item.new_rs, 0);
      this.saveTotal = this.AllData.reduce((sum, item) => sum + item.old_rs, 0);
      this.cdr.detectChanges();
    });
    console.log('Bag Data:', this.AllData);

    this.cdr.detectChanges();
  }

  Remove(re: BagData) {
    console.log('REMOVEID:', re._id);
    this.http.delete(`http://localhost:3000/bags/${re._id}`).subscribe((res) => {
      console.log('Deleted:', res);
      alert('Success');
      this.GetAllItems();
      this.cdr.detectChanges();
    });
  }
  MovePay() {
    this.router.navigate(['/payment']);
  }
}
