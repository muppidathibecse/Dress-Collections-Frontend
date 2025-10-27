import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [Navbar],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {}
