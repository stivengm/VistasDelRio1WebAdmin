import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


// Componets
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';


@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,

    // Componets
    MenuComponent,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {}