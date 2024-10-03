import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'pop-portfolio',
  standalone: true,
  styleUrl: './portfolio.component.scss',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent{

  portfolioImages = [
    'https://firebasestorage.googleapis.com/v0/b/enpoppa2024.appspot.com/o/portfolio%2Ffotos%2FIMG_20210330_091343-min.jpg?alt=media&token=e4aae4fc-61ff-488a-ae46-17fa28c81498',
    'https://firebasestorage.googleapis.com/v0/b/enpoppa2024.appspot.com/o/portfolio%2Ffotos%2FIMG_20240823_081256-min.jpg?alt=media&token=fc6e99b2-c755-4f50-9672-4460a5132eda',
    'https://firebasestorage.googleapis.com/v0/b/enpoppa2024.appspot.com/o/portfolio%2Ffotos%2FIMG_20240731_105446-min.jpg?alt=media&token=39a218a5-f299-44e5-bdee-f7d9750c85da',
    'https://firebasestorage.googleapis.com/v0/b/enpoppa2024.appspot.com/o/portfolio%2Ffotos%2FIMG_20240213_000303-min.jpg?alt=media&token=fe72750b-3ff9-4ae0-8e20-1a1ed242eaec',
    'https://firebasestorage.googleapis.com/v0/b/enpoppa2024.appspot.com/o/portfolio%2Ffotos%2FIMG_20231130_122126-min.jpg?alt=media&token=59a04628-917d-49f9-a832-6c0e573d1a2e',
    'https://firebasestorage.googleapis.com/v0/b/enpoppa2024.appspot.com/o/portfolio%2Ffotos%2FIMG_20230816_170020-min.jpg?alt=media&token=02d00fab-925b-49b3-a56d-3594b84598a2',
  ]

}
