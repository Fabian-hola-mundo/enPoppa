import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'pop-digital',
  standalone: true,
  styleUrl: './digital.component.scss',
  imports: [MatButtonModule, CommonModule],
  templateUrl: './digital.component.html'
})
export class DigitalComponent{

  images = [
    'https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649',
    'https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649',
    'https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649',
  ]

}
