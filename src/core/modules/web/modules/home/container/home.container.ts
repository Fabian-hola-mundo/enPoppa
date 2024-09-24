import { Component } from '@angular/core';
import { AboveTheFoldComponent } from '../components/above-the-fold/above.the.fold.component';
import { UsComponent } from '../components/us/us.component';
import { StoryComponent } from '../components/story/story.component';
import { CtaComponent } from '../components/cta/cta.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';
import { WarrantyComponent } from '../components/warranty/warranty.component';
import { DigitalComponent } from "../components/digital/digital.component";

@Component({
  selector: 'pop-home',
  standalone: true,
  styleUrl: './home.container.scss',
  imports: [
    AboveTheFoldComponent,
    UsComponent,
    StoryComponent,
    CtaComponent,
    PortfolioComponent,
    WarrantyComponent,
    DigitalComponent
],
  template: `
    <pop-above-the-fold />
    <pop-us />
    <pop-story />
    <div>
      <pop-warranty />
      <pop-cta />
    </div>
    <pop-digital/>
    <pop-portfolio />
  `,
})
export class HomeComponent {}
