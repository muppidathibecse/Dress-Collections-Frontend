import { Component } from '@angular/core';
import { Profiles } from '../profiles/profiles';
import { Orders } from '../orders/orders';
import { Categories } from '../categories/categories';
import { Dp } from '../../dp/dp';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [Profiles, Orders, Categories, Dp, Navbar],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {}
