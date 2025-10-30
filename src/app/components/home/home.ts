import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { CommonModule } from '@angular/common';
import { HomeStarter } from '../home-starter/home-starter';
import { HomeBrands } from '../home-brands/home-brands';
import { HomeOffers } from '../home-offers/home-offers';
import { HomeExplores } from '../home-explores/home-explores';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, CommonModule, HomeStarter, HomeBrands, HomeOffers, HomeExplores],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
