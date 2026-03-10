import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsMenuModel } from '../../../core/models/items-menu.model';
import { MenuService } from '../../../core/services/menu.service';
import { StorageService } from '../../../core/services/storage.service';
import { Router } from '@angular/router';
import { AccountModel } from '../../../core/models/account.model';
import { goToPage } from '../../helpers/navigation.helper';
import { DataAppService } from '../../../core/services/data-app.service';

@Component({
  selector: 'app-menu',
  imports: [ CommonModule ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  itemsMenu: ItemsMenuModel[] = [];
  account: AccountModel | undefined;

  constructor(
    private storageService: StorageService,
    private menuService: MenuService,
    private router: Router,
    private dataAppService: DataAppService
  ) {}

  ngOnInit() {
    this.getAccountObservable();
    
    let storageItems = this.storageService.readStorage('itemsMenu');

    if (!storageItems) {
      this.menuService.getMenu().subscribe((respMenus) => {
        this.itemsMenu = respMenus.data;

        this.storageService.saveStorage('itemsMenu', this.itemsMenu);
      });
    } else {
      this.itemsMenu = storageItems;
    }

    let account = this.storageService.readStorage('user');
    if (account) {
      this.dataAppService.setIsUser(account);
    }
  }

  getAccountObservable() {
    this.dataAppService.getIsUser().subscribe((user) => {
      this.account = user;
    });
  }

  logout() {
    console.log("Logout");
    this.storageService.clearStorage();
    this.router.navigate(['/usuarios/inicio-sesion']);
  }

  redirect(namePage: string, link: string) {
    this.dataAppService.setIsNamePage(namePage);
    goToPage(this.router, link);
  }
}
