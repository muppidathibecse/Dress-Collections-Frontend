import { Component } from '@angular/core';
import { MenData } from '../../interfaces/mendata';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post {
  mendata: MenData = {
    img_src: 'assets/mens/M1.avif',
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
  }
}
