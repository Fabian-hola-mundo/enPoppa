import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { whatsApplink } from '../../../../constants/whatsAppLink';

@Component({
  selector: 'pop-footer',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  whatsApplink: string = whatsApplink;
  contact() {
    window.open(this.whatsApplink, '_blank');
  }

  rrss() {
    window.open('https://www.facebook.com/Enpopa.co', '_blank');
  }

  mailTo() {
    window.open('mailto:hola@enpopa.co', '_blank');
  }
}
