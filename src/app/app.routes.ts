import { Route } from '@angular/router';
import { MantenimientoComponent } from '../../core/modules/web/modules/mantenimiento/components/mantenimiento/mantenimiento.component';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'mantenimiento' },
  {
    path: 'home',
    loadChildren: () =>
      import('../../core/modules/web/routes/lib.routes').then((m) => m.webLayOutRoute),
    title: 'En Poppa',
  },
  { path: 'mantenimiento', pathMatch: 'full', component: MantenimientoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];
