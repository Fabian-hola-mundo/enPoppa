import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '../modules/layout/container/layout.container';
import { HomeComponent } from '../modules/home/container/home.container';
import { DefaultPageComponent } from '../modules/default_page/container/default_page.container';

export const webLayOutRoute: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
      },
      { path: '', redirectTo: '', pathMatch: 'full' },
      {
        path: 'test',
        component: DefaultPageComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(webLayOutRoute)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
