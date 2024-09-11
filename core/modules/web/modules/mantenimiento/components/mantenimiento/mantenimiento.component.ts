import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-mantenimiento',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './mantenimiento.component.html',
  styleUrl: './mantenimiento.component.scss'
})
export class MantenimientoComponent {
  whatsApplink: string = '//wa.me/573187349299';

  contact() {
    window.open( this.whatsApplink, '_blank')
  }
}
