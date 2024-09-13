import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'pop-us',
  standalone: true,
  styleUrl: './us.component.scss',
  templateUrl: './us.component.html',
  imports: [CommonModule]
})
export class UsComponent{

  charts = [
    {
      progress: 84,
      title: 'Proyectos ejecutados',
      description: 'Our customer base is always growing, because the result of our work brings money'
    },
    {
      progress: 84,
      title: 'Click-Through Rate',
      description: 'Our customer base is always growing, because the result of our work brings money'
    },
    {
      progress: 84,
      title: 'Returning Customers',
      description: 'Our customer base is always growing, because the result of our work brings money'
    },
  ]

}
