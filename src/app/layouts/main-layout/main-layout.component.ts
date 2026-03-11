import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


// Componets
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { AccountModel } from '../../core/models/account.model';
import { DataAppService } from '../../core/services/data-app.service';
import { EventsComponent } from '../../shared/components/events/events.component';


@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,

    // Componets
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    EventsComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit {
  account: AccountModel | undefined;

  constructor(
    private dataAppService: DataAppService
  ) {}

  ngOnInit(): void {
    this.dataAppService.getIsUser().subscribe((user) => {
      this.account = user;
    });
  }
}