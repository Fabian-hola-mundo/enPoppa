import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NavComponent } from "../../nav/container/nav.container";
import { DownBarComponent } from '../../nav/components/down-bar/down.bar.component';

@Component({
  selector: 'pop-lay',
  standalone: true,
  styleUrl: './layout.container.scss',
  imports: [
    RouterModule,
    MatIconModule,
    NavComponent,
    DownBarComponent
],
  template: `
  <pop-nav/>
  <router-outlet></router-outlet>
  <pop-down-bar></pop-down-bar>
  `,
})
export class LayoutComponent {

}
