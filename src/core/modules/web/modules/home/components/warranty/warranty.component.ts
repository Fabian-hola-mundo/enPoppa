import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { text } from 'stream/consumers';

@Component({
  selector: 'pop-warranty',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  styleUrl: './warranty.component.scss',
  templateUrl: './warranty.component.html'
})
export class WarrantyComponent{

  items = [
    {
      icon: 'workspace_premium',
      text: 'CALIDAD'
    },
    {
      icon: 'update',
      text: 'CUMPLIMIENTO'
    },
    {
      icon: 'verified_user',
      text: 'GARANTÍA'
    },
  ]

}
