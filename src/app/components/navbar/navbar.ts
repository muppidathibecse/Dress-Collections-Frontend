import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BagBlack } from '../icons/bag-black/bag-black';
import { BagOutline } from '../icons/bag-outline/bag-outline';
import { CommonModule } from '@angular/common';
import { HeartBlack } from '../icons/heart-black/heart-black';
import { HeartOutline } from '../icons/heart-outline/heart-outline';
import { ProfileBlack } from '../icons/profile-black/profile-black';
import { ProfileOutline } from '../icons/profile-outline/profile-outline';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    BagBlack,
    BagOutline,
    CommonModule,
    HeartBlack,
    HeartOutline,
    ProfileBlack,
    ProfileOutline,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMenuOpen = false;

  toggleMenu() {     
    this.isMenuOpen = !this.isMenuOpen;
  }
}                               
