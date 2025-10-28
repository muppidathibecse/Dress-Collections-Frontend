import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../icons/star/star';
import { Heart } from '../icons/heart/heart';
import { HeartRed } from '../icons/heart-red/heart-red';
import { HttpClient } from '@angular/common/http';
import { MenData } from '../interfaces/mendata';

@Component({
  selector: 'app-men',
  standalone: true,
  imports: [Navbar, StarComponent, CommonModule, Heart, HeartRed],
  templateUrl: './men.html',
  styleUrl: './men.css',
})
export class Men {
  constructor(public cdr: ChangeDetectorRef) {}
  http = inject(HttpClient);
  AllData: MenData[] = [];
  ngOnInit(): void {
    this.GetAllItems();
  }
  GetAllItems() {
    this.http.get('http://localhost:3000/men').subscribe((res: any) => {
      console.log(res);
      this.AllData = res.map((data: any) => ({
        id: data._id,
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
    this.http.patch(`http://localhost:3000/men/${id}`, {}).subscribe((res) => {
      console.log('Toggled successfully', res);
      this.GetAllItems();
      this.cdr.detectChanges();
    });
  }
}
