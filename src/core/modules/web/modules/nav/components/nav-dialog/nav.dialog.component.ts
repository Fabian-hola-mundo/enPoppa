import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { dataDefaultPage } from '../../../default_page/constants/dataDefaultPage';
import { whatsApplink } from '../../../../constants/whatsAppLink';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'pop-hamburger',
  standalone: true,
  template: `
    <nav class="hamburger">
      <div>
        <div class="hamburger__image" mat-dialog-close routerLink="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/enpoppa2024.appspot.com/o/enpoppaLogo-min.png?alt=media&token=4697fa73-68bc-4ba9-ae12-c7ea3b582409"
            alt="Logo de opietch"
          />
        </div>
        <mat-divider> </mat-divider>
        <ul class="hamburguer__items">
          <li class="none">
            <button
              mat-button
              class="home"
              color="primary"
              [routerLink]="['/']"
              mat-dialog-close
            >
            Inicio
            </button>
          </li>
          <li *ngFor="let page of allpages">
            <button
              mat-button
              color="primary"
              [routerLink]="[page.slug + '/']"
              routerLinkActive="router-link-active"
              class="contact"
              mat-dialog-close
            >
              {{ page.label }}
            </button>
          </li>
        </ul>
      </div>
      <div class="hamburger__footer">
        <div class="hamburger__footer--container"></div>
      </div>
    </nav>
  `,
  styleUrls: ['./nav.dialog.component.scss'],
  imports: [
    MatDividerModule,
    MatListModule,
    MatIconModule,
    CommonModule,
    MatDialogModule,
    RouterModule,
    MatButtonModule,
  ],
})
export class NavDialogComponent {
  whatsApplink: string = whatsApplink;
  allpages = dataDefaultPage;
  constructor(
    public dialogRef: MatDialogRef<NavDialogComponent>,
    public _bottomSheet: MatBottomSheet
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }

  onClickOpenContact() {
    window.open(this.whatsApplink, '_blank');
    this.dialogRef.close();
  }
}
