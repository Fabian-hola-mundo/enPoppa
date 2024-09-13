import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'pop-above-the-fold',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatRippleModule, RouterModule],
  templateUrl: './above.the.fold.component.html',
  styleUrl: './above.the.fold.component copy.scss',
})
export class AboveTheFoldComponent {


}
