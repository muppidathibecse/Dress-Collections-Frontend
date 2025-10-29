import { Component } from '@angular/core';
import { Profiles } from '../profiles/profiles';
import { Orders } from '../orders/orders';
import { Categories } from '../categories/categories';
import { Dp } from '../../dp/dp';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [Profiles, Orders, Categories, Dp],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {}
