import { Component } from '@angular/core';

@Component({
  selector: 'app-home-offers',
  imports: [],
  templateUrl: './home-offers.html',
  styleUrl: './home-offers.css',
})
export class HomeOffers {
  copyCode(code: string) {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        alert('Copied: ' + code);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  }
}
