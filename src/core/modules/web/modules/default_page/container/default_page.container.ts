import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'pop-default-page',
  standalone: true,
  styleUrl: './default_page.container.scss',
  imports: [MatButtonModule, CommonModule],
  templateUrl: './default_page.container.html'
})
export class DefaultPageComponent{


}
