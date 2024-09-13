import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'pop-down-bar',
  standalone: true,
  template: `
    <div class="bar-container" [ngClass]="{ 'hide-nav': isScrollingUp }">
      <div class="bar-container__bar">
        <div class="hola bar-container__bar--text">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/enpoppa2024.appspot.com/o/logos%2FWhatsapp2.svg?alt=media&token=1193eeb9-baec-4fac-a41b-3ebec89f4628"
            alt=""
          />
          <p>¡Contáctanos por WhatsApp!</p>
        </div>
        <button (click)="onClickOpenContact()" mat-raised-button class="bar-container__bar--button">Enviar Mensaje</button>
      </div>
    </div>
  `,
  styleUrls: ['./down.bar.component.scss'],
  imports: [MatIconModule, CommonModule, MatButtonModule],
})
export class DownBarComponent {
  whatsApplink: string = '//wa.me/573187349299';
  lastScrollPosition = 0;
  isScrollingUp = true;
  onClickOpenContact() {
    window.open(this.whatsApplink, '_blank');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.pageYOffset;
    this.isScrollingUp = currentScrollPosition < this.lastScrollPosition;
    this.lastScrollPosition = currentScrollPosition;
  }
}
