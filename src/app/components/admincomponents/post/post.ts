import { Component, inject } from '@angular/core';
import { MenData } from '../../interfaces/mendata';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post {
  http = inject(HttpClient);
  mendata: MenData = {
    id: '',
    img_src: 'assets/kids/K5.webp',
    isLike: false,
    brand_name: '',
    details: '',
    old_rs: '',
    new_rs: '',
    offer: '',
    stars: '',
  };
  Add() {
    console.log(this.mendata);
    this.http.post(`http://localhost:3000/men`, this.mendata).subscribe({
      next: (res) => {
        alert('Success');
      },
      error: (error) => {
        alert('Error' + error);
      },
    });
    this.mendata = {
      id: '',
      img_src: 'assets/mens/M1.avif',
      isLike: false,
      brand_name: '',
      details: '',
      old_rs: '',
      new_rs: '',
      offer: '',
      stars: '',
    };
  }
  WomenAdd() {
    console.log(this.mendata);
    this.http.post(`http://localhost:3000/women`, this.mendata).subscribe({
      next: (res) => {
        alert('Success');
      },
      error: (error) => {
        alert('Error' + error);
      },
    });
    this.mendata = {
      id: '',
      img_src: 'assets/mens/M1.avif',
      isLike: false,
      brand_name: '',
      details: '',
      old_rs: '',
      new_rs: '',
      offer: '',
      stars: '',
    };
  }
  KidsAdd() {
    console.log(this.mendata);
    this.http.post(`http://localhost:3000/kids`, this.mendata).subscribe({
      next: (res) => {
        alert('Success');
      },
      error: (error) => {
        alert('Error' + error);
      },
    });
    this.mendata = {
      id: '',
      img_src: 'assets/kids/K5.webp',
      isLike: false,
      brand_name: '',
      details: '',
      old_rs: '',
      new_rs: '',
      offer: '',
      stars: '',
    };
  }
}
