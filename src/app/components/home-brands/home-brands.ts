import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-brands',
  imports: [CommonModule],
  templateUrl: './home-brands.html',
  styleUrl: './home-brands.css',
})
export class HomeBrands {
  brands: string[] = [
    'assets/brands/Adidas.jpg',
    'assets/brands/A.webp',
    'assets/brands/Puma.jpg',
    'assets/brands/Nb.jpg',
    'assets/brands/Hm.jpg',
    'assets/brands/Nike.jpg',
  ];
}
