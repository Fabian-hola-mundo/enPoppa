import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { whatsApplink } from '../../../../constants/whatsAppLink';

@Component({
  selector: 'pop-cta',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatButtonModule],
  styleUrl: './cta.component.scss',
  templateUrl: './cta.component.html'
})
export class CtaComponent{
  whatsApplink = whatsApplink;
  contact() {
    window.open( this.whatsApplink, '_blank')
  }

  items = [
    {
      icon: 'workspace_premium',
      text: 'CALIDAD'
    },
    {
      icon: 'pace',
      text: 'CUMPLIMIENTO'
    },
    {
      icon: 'verified_user',
      text: 'GARANTÍA'
    },
  ]

}
