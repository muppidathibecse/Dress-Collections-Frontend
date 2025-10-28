import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { MenData } from '../../interfaces/mendata';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get.html',
  styleUrl: './get.css',
})
export class Get implements OnInit {
  http = inject(HttpClient);
  AllData: MenData[] = [];
  ngOnInit(): void {
    this.GetAllItems();
  }
  GetAllItems() {
    this.http.get('http://localhost:3000/men').subscribe((res: any) => {
      console.log(res);
      this.AllData = res.map((data: any) => ({
        img_src: data.img_src,
        isLike: data.isLike,
        brand_name: data.brand_name,
        details: data.details,
        old_rs: data.old_rs,
        new_rs: data.new_rs,
        offer: data.offer,
        stars: data.stars,
      }));
    });
    console.log('All Data:', this.AllData);
  }
}
