import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'pop-digital',
  standalone: true,
  styleUrl: './digital.component.scss',
  imports: [MatButtonModule, CommonModule],
  templateUrl: './digital.component.html'
})
export class DigitalComponent{

  images = [
    'https://firebasestorage.googleapis.com/v0/b/enpoppa2024.appspot.com/o/digital%2Fdigital%201.png?alt=media&token=48958ef2-46a4-4ef7-bdba-eab0d9e8130d',
    'https://firebasestorage.googleapis.com/v0/b/enpoppa2024.appspot.com/o/digital%2Fdigital%202.png?alt=media&token=b3fc48a2-9910-4bb2-9e26-40dd6e0308d1',
    'https://firebasestorage.googleapis.com/v0/b/enpoppa2024.appspot.com/o/digital%2Fdigital%203.png?alt=media&token=33dda9b5-7424-4fad-aa97-d9a60031d956',
  ]

}
