import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { NavDialogComponent } from '../components/nav-dialog/nav.dialog.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { dataDefaultPage } from '../../default_page/constants/dataDefaultPage';
import { whatsApplink } from '../../../constants/whatsAppLink';

@Component({
  selector: 'pop-nav',
  standalone: true,
  styleUrl: './nav.container.scss',
  template: `
    <nav
      class="nav"
      [ngClass]="{ 'hide-nav': !isScrollingUp, 'down-nav': isScrolledHalfway, 'landing-mode': !slug}"
    >
      <div class="nav__container">
        <img
          routerLink="/home"
          class="nav__container--img"
          src="../../../../../../assets/logo.svg"
          alt="Logo En Poppa"
        />
        <ul class="nav__container--actions">
          <li *ngFor="let item of allpages">
            <button
              mat-button
              color="primary"
              [routerLink]="[ item.slug +'/']" routerLinkActive="router-link-active"
              class="contact"
            >
              {{item.label}}
            </button>
          </li>
          <li>
            <button
              #menuTrigger
              (click)="openDialog()"
              mat-icon-button
              class="hamburguer"
              color="primary"
            >
              <mat-icon>menu</mat-icon>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  `,
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule],
})
export class NavComponent {
  allpages = dataDefaultPage
  slug: string = '';
  whatsApplink: string = whatsApplink;
  lastScrollPosition = 0;
  isScrolledHalfway: boolean = false;
  isScrollingUp = true;
  constructor(
    public dialog: MatDialog,
    public route: ActivatedRoute,
    public dialogRrss: MatDialog,
    private router: Router
  ) {
  }
  openDialog() {
    const dc = new MatDialogConfig();
    dc.autoFocus = true;
    dc.height = '90dvh';
    dc.width = '70%';
    dc.position = {
      left: '16px',
    };
    this.dialog.open(NavDialogComponent, dc);
  }

  ngOnInit(): void {
    // Escuchar eventos de navegación para actualizar el slug
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateSlug();
        window.scrollTo(0, 1);
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 5);
      });

    // Inicialmente obtener el slug al cargar el componente
    this.updateSlug();
  }

  updateSlug() {
    // Recorrer las rutas hijas hasta llegar a la que tiene el parámetro 'slug'
    let currentRoute = this.route;
    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
    }

    currentRoute.paramMap.subscribe(params => {
      this.slug = params.get('slug') || '';
    });
  }

  getRoute() {
    // Acceder al parámetro 'slug' de la URL
    this.slug = this.route.snapshot.paramMap.get('slug') || '';
  }

  contact() {
    window.open(this.whatsApplink, '_blank');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.pageYOffset;
    this.isScrollingUp = currentScrollPosition < this.lastScrollPosition;
    this.lastScrollPosition = currentScrollPosition;
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight ||
      0;
    const documentHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight || 0;

    if (scrollPosition > documentHeight / 3 - windowHeight) {
      this.isScrolledHalfway = true;
    } else {
      this.isScrolledHalfway = false;
    }
  }

  /*   goToImpresion(page){
    this.getService.establecerDatos(service)
    this.router.navigate(['servicios/'+service.slug])
    this._bottomSheet.dismiss()
  } */
}
