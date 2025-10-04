import { Route } from '@angular/router';
import { MantenimientoComponent } from '../core/modules/web/modules/mantenimiento/components/mantenimiento/mantenimiento.component';

export const routes: Route[] = [
  {
    path: 'eliminar',
    loadChildren: () =>
      import('../core/modules/web/routes/lib.routes').then((m) => m.webLayOutRoute),
    title: 'En Popa',
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  /* { path: '', pathMatch: 'full', component: MantenimientoComponent }, */
];
