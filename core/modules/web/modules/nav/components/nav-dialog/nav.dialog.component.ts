import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialogRef } from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'opi-hamburger',
  standalone: true,
  template: `
    <section class="hamburger">
      <div>
        <div class="hamburger__image" mat-dialog-close routerLink="/">
          <img
            src="../../../../../assets/layout/logo.png"
            alt="Logo de opietch"
          />
        </div>
        <mat-divider> </mat-divider>
        <mat-nav-list class="hamburger__menu">
          <mat-list-item routerLink="/" mat-dialog-close (click)="closeDialog()"
            ><mat-icon color="primary">home</mat-icon> Home</mat-list-item
          >
          <mat-list-item mat-dialog-close
            ><mat-icon color="primary"> integration_instructions </mat-icon
            >Portafolio</mat-list-item
          >
          <mat-list-item mat-dialog-close (click)="onClickOpenContact()"
            ><mat-icon color="primary"> call</mat-icon>Háblanos de tus
            ideas</mat-list-item
          >
        </mat-nav-list>
      </div>
      <div class="hamburger__footer">
        <div class="hamburger__footer--container">
          <img
            src="../../../../../assets/layout/world.png"
            alt="Ilustración de un mundo 'Tecnológico flotando"
          />
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./nav.dialog.component.scss'],
  imports: [
    MatDividerModule,
    MatListModule,
    MatIconModule
  ]
})
export class NavDialogComponent {
  whatsApplink: string = '//wa.me/573187349299';

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
