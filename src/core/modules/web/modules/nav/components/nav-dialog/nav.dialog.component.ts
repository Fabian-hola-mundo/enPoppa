import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialogRef } from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

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
        <mat-nav-list class="hamburger__menu">
   <!--        <mat-list-item routerLink="/" mat-dialog-close (click)="closeDialog()"
            ><mat-icon color="primary">home</mat-icon> Home</mat-list-item
          >
          <mat-list-item mat-dialog-close
            ><mat-icon color="primary"> integration_instructions </mat-icon
            >Portafolio</mat-list-item
          > -->
          <mat-list-item mat-dialog-close (click)="onClickOpenContact()"
            ><mat-icon color="primary"> call</mat-icon>Háblanos de tus
            ideas</mat-list-item
          >
        </mat-nav-list>
      </div>
      <div class="hamburger__footer">
        <div class="hamburger__footer--container">
        </div>
      </div>
    </nav>
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
