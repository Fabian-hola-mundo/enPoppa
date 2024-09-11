import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NavComponent } from "../../nav/container/nav.container";

@Component({
  selector: 'pop-lay',
  standalone: true,
  styleUrl: './layout.container.scss',
  imports: [
    RouterModule,
    MatIconModule,
    NavComponent
],
  template: `
  <pop-nav/>
  <router-outlet></router-outlet>
  `,
})
export class LayoutComponent {

}
