import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { StarComponent } from '../icons/star/star';
import { CommonModule } from '@angular/common';
import { Heart } from '../icons/heart/heart';
import { HeartRed } from '../icons/heart-red/heart-red';
import { HttpClient } from '@angular/common/http';
import { MenData } from '../interfaces/mendata';
import { BagSmallOutline } from '../icons/bag-small-outline/bag-small-outline';

@Component({
  selector: 'app-women',
  imports: [Navbar, StarComponent, CommonModule, Heart, HeartRed, BagSmallOutline],
  templateUrl: './women.html',
  styleUrl: './women.css',
})
export class Women {
  //https://www.linenclub.com/men-wear/men/top-wear/shirts?srsltid=AfmBOopTVDxRWt5ZR-Wmw8Puz860U9TYJx0oRkfP7Z1Hiclk_dtngOdl
  constructor(public cdr: ChangeDetectorRef) {}
  http = inject(HttpClient);
  AllData: MenData[] = [];
  ngOnInit(): void {
    this.GetAllItems();
  }
  GetAllItems() {
    this.http.get('http://localhost:3000/women').subscribe((res: any) => {
      console.log(res);
      this.AllData = res.map((data: any) => ({
        _id: data._id,
        img_src: data.img_src,
        isLike: data.isLike,
        brand_name: data.brand_name,
        details: data.details,
        old_rs: data.old_rs,
        new_rs: data.new_rs,
        offer: data.offer,
        stars: data.stars,
      }));
      this.cdr.detectChanges();
    });
    console.log('All Data:', this.AllData);
    this.cdr.detectChanges();
  }
  ChangeLike(id: string) {
    console.log(id);
    this.http.patch(`http://localhost:3000/women/${id}`, {}).subscribe((res) => {
      console.log('Toggled successfully', res);
      this.GetAllItems();
      this.cdr.detectChanges();
    });
  }
  AddToBag(men: MenData) {
    const BagData = {
      img_src: men.img_src,
      isLike: men.isLike,
      brand_name: men.brand_name,
      details: men.details,
      old_rs: men.old_rs,
      new_rs: men.new_rs,
      offer: men.offer,
      stars: men.stars,
      size: 'L',
      qty: 1,
      delivery: '10 Nov',
    };
    console.log(BagData);
    this.http.post(`http://localhost:3000/bags`, BagData).subscribe({
      next: (res) => {
        alert('Success');
      },
      error: (error) => {
        alert('Error' + error);
      },
    });
  }
}
