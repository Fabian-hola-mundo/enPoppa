import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { dataDefaultPage } from '../../../default_page/constants/dataDefaultPage';

@Component({
  selector: 'pop-pages',
  standalone: true,
  imports: [RouterModule,
    CommonModule,
    MatButtonModule
  ],
  template: `
        <li *ngFor="let item of allPages">
            <button
              mat-button
              color="primary"
              [routerLink]="[ item.slug +'/']" routerLinkActive="router-link-active"
              class="contact"
            >
              {{item.label}}
            </button>
          </li>
  `,
  styleUrl: './pages.component.scss'
})
export class PagesComponent {

  allPages = dataDefaultPage

}
