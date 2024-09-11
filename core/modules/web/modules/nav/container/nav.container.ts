import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NavDialogComponent } from '../components/nav-dialog/nav.dialog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pop-nav',
  standalone: true,
  styleUrl: './nav.container.scss',
  template: `
<nav class="nav" [ngClass]="{'hide-nav': !isScrollingUp}">
  <div class="nav__container">
    <img routerLink="/" class="nav__container--img" src="https://firebasestorage.googleapis.com/v0/b/enpoppa2024.appspot.com/o/enpoppaLogo-min.png?alt=media&token=4697fa73-68bc-4ba9-ae12-c7ea3b582409" alt="Logo En Poppa">
    <ul class="nav__container--actions">
      <li><button mat-button routerLink="./" class="inicio">
          hola</button></li>
      <li><button mat-raised-button color="primary" class="contact" (click)="contact()">
          hola 2</button></li>
      <li>
        <button #menuTrigger (click)="openDialog()" mat-icon-button class="hamburguer" color="primary">
          <mat-icon >menu</mat-icon>
        </button>
      </li>
    </ul>
  </div>
</nav>
  `,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class NavComponent {
  whatsApplink: string = '//wa.me/573187349299';
  lastScrollPosition = 0;
  isScrollingUp = true;
  constructor(
    public dialog: MatDialog,
    public route: ActivatedRoute,
    public dialogRrss: MatDialog,
  ) {

  }
  openDialog() {
    const dc = new MatDialogConfig();
      dc.autoFocus = true;
      dc.height = '90vh';
      dc.width = '70%';
      dc.position = {
        left: '16px',
      }
      dc.minHeight = '95vh'
      this.dialog.open(NavDialogComponent, dc);
  }

  contact() {
    window.open( this.whatsApplink, '_blank')
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.pageYOffset;
    this.isScrollingUp = currentScrollPosition < this.lastScrollPosition;
    this.lastScrollPosition = currentScrollPosition;
  }

}
