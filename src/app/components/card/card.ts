import { Component } from '@angular/core';
import { MenData } from '../interfaces/mendata';
import { Heart } from '../icons/heart/heart';
import { StarComponent } from '../icons/star/star';
import { HeartRed } from '../icons/heart-red/heart-red';

@Component({
  selector: 'app-card',
  imports: [HeartRed, StarComponent],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  men!: MenData;
}
