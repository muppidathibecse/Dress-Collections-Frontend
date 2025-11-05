import { Component } from '@angular/core';
import { Profiles } from '../profiles/profiles';
import { Orders } from '../orders/orders';
import { Categories } from '../categories/categories';
import { Dp } from '../../dp/dp';
import { Navbar } from '../navbar/navbar';
import { Confirmorders } from '../confirmorders/confirmorders';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [Profiles, Orders, Categories, Dp, Navbar, Confirmorders],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {}
