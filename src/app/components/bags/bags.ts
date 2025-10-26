import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { DownArrow } from '../icons/down-arrow/down-arrow';
import { Truck } from '../icons/truck/truck';
import { Remove } from "../icons/remove/remove";

@Component({
  selector: 'app-bags',
  standalone: true,
  imports: [Navbar, DownArrow, Truck, Remove],
  templateUrl: './bags.html',
  styleUrl: './bags.css'
})
export class Bags {

}
