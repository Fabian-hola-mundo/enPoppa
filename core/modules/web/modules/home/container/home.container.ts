import { Component} from '@angular/core';
import { AboveTheFoldComponent } from "../components/above-the-fold/above.the.fold.component";

@Component({
  selector: 'pop-home',
  standalone: true,
  styleUrl: './home.container.scss',
  imports: [
    AboveTheFoldComponent
],
  template: `
  <pop-above-the-fold/>
  `,
})
export class HomeComponent{

}
