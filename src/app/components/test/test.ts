import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [Card],
  templateUrl: './test.html',
  styleUrls: ['./test.css'],
})
export class Test {}
