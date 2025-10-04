import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { PortfolioComponent } from '../../home/components/portfolio/portfolio.component';
import { dataDefaultPage } from '../constants/dataDefaultPage';
import { interval } from 'rxjs';

@Component({
  selector: 'pop-default-page',
  standalone: true,
  styleUrl: './default_page.container.scss',
  imports: [MatButtonModule, CommonModule, PortfolioComponent],
  templateUrl: './default_page.container.html',
})
export class DefaultPageComponent {
  slug: string = '';  // Aquí almacenamos el slug de la ruta
  specialData: any; // Aquí almacenarás la información especial
  allData = dataDefaultPage

  constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug') || '';
      this.fetchSpecialData(this.slug)
    });


  }

  fetchSpecialData(slug: string): void {
    this.allData.forEach(selected => {
      if (selected.slug == slug) {
        this.specialData = selected
      }
      else {

      }
    });
  }
}
