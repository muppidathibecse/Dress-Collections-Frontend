import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { RightArrow } from '../icons/right-arrow/right-arrow';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [Navbar, RightArrow],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {}
