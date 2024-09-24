import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'pop-story',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './story.component.scss',
  templateUrl: './story.component.html'
})
export class StoryComponent{
  @ViewChild('carousel') carousel!: ElementRef;
  logoinit = 'https://firebasestorage.googleapis.com/v0/b/'
  logos = [
    'https://firebasestorage.googleapis.com/v0/b/enpoppa2024.appspot.com/o/logos%2FGroup-1-min.png?alt=media&token=f197617f-576b-4d38-a9aa-e75e7f6a55c5',
    'https://firebasestorage.googleapis.com/v0/b/enpoppa2024.appspot.com/o/logos%2FGroup-2-min.png?alt=media&token=87e374a9-33f9-4826-8793-e14e230933a1',
    'https://firebasestorage.googleapis.com/v0/b/enpoppa2024.appspot.com/o/logos%2FGroup-3-min.png?alt=media&token=2de09cf4-ba62-4826-9b62-6570335a4221',
    'https://firebasestorage.googleapis.com/v0/b/enpoppa2024.appspot.com/o/logos%2FGroup-4-min.png?alt=media&token=d7e48ac4-4d7a-45d1-92ae-8efb310d6599',
    'https://firebasestorage.googleapis.com/v0/b/enpoppa2024.appspot.com/o/logos%2FGroup-5-min.png?alt=media&token=a3b34bd4-dc12-4d1f-8a52-36e1824c1cc8',
    'https://firebasestorage.googleapis.com/v0/b/enpoppa2024.appspot.com/o/logos%2FGroup-6-min.png?alt=media&token=c419b907-568c-43bc-9650-48595869a18a',
    'https://firebasestorage.googleapis.com/v0/b/enpoppa2024.appspot.com/o/logos%2FGroup-7-min.png?alt=media&token=9f855fba-5af2-4d90-9e9d-9221de1a218f',
    'https://firebasestorage.googleapis.com/v0/b/enpoppa2024.appspot.com/o/logos%2FGroup-min.png?alt=media&token=7fe3f45a-e67e-47a6-8309-c84e103517f6',
  ]

  storys = [
    {
      number: 84,
      string: 'Años'
    },
    {
      number: 84,
      string: 'Premios'
    },
    {
      number: 212,
      string: 'Proyectos'
    },
    {
      number: 178,
      string: 'Clientes'
    },
  ]

}
