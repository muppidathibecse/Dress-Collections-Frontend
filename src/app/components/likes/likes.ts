import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { CommonModule } from '@angular/common';
import { Remove } from '../icons/remove/remove';
import { Bag } from '../icons/bag/bag';
import { HttpClient } from '@angular/common/http';
import { MenData } from '../interfaces/mendata';
import { Men } from '../men/men';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-likes',
  standalone: true,
  imports: [Navbar, CommonModule, Bag],
  templateUrl: './likes.html',
  styleUrl: './likes.css',
})
export class Likes implements OnInit {
  constructor(public cdr: ChangeDetectorRef) {}

  MenLikesData: MenData[] = [];
  WomenLikesData: MenData[] = [];
  KidsLikesData: MenData[] = [];
  CompleteData: MenData[] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    forkJoin({
      men: this.http.get('http://localhost:3000/men'),
      women: this.http.get('http://localhost:3000/women'),
      kids: this.http.get('http://localhost:3000/kids'),
    }).subscribe((res: any) => {
      this.MenLikesData = res.men.filter((d: any) => d.isLike);
      this.WomenLikesData = res.women.filter((d: any) => d.isLike);
      this.KidsLikesData = res.kids.filter((d: any) => d.isLike);

      this.MergeAll();
      console.log(this.CompleteData.length);
    });
  }
  MergeAll() {
    this.CompleteData = [...this.KidsLikesData, ...this.MenLikesData, ...this.WomenLikesData];
    this.cdr.detectChanges();
    console.log(' Complete Data:', this.CompleteData);
    this.cdr.detectChanges();
  }

  Remove(men: MenData) {
    console.log('Data', men);
    console.log('ID', men._id);
  }
}
