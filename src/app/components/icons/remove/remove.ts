import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-remove',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button [ngClass]="customClass" class="remove-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m14.74 9-.346 9m-4.788 0L9.26 9
                 m9.968-3.21c.342.052.682.107 1.022.166
                 m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077
                 H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79
                 m14.456 0a48.108 48.108 0 0 0-3.478-.397
                 m-12 .562c.34-.059.68-.114 1.022-.165
                 m0 0a48.11 48.11 0 0 1 3.478-.397
                 m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201
                 a51.964 51.964 0 0 0-3.32 0
                 c-1.18.037-2.09 1.022-2.09 2.201v.916
                 m7.5 0a48.667 48.667 0 0 0-7.5 0"
        />
      </svg>
    </button>
  `,
  styles: [
    `
      .remove-btn {
        background: none;
        border: none;
        cursor: pointer;
        padding: 4px;
        transition: transform 0.2s ease;
      }
      .remove-btn:hover {
        transform: scale(1.1);
      }
      .icon {
        width: 24px;
        height: 24px;
      }
    `,
  ],
})
export class Remove {
  @Input() customClass: any; // accepts ngClass input
}
