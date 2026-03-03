import { Component } from '@angular/core';


// Components
import { HeaderComponent } from '../../shared/components/header/header.component';
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';



@Component({
  selector: 'app-dashboard',
  imports: [
    HeaderComponent,
    MenuComponent,
    FooterComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
