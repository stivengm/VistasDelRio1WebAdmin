import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsMenuModel } from '../../../core/models/items-menu.model';
import { MenuService } from '../../../core/services/menu.service';
import { StorageService } from '../../../core/services/storage.service';

@Component({
  selector: 'app-menu',
  imports: [ CommonModule ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  itemsMenu: ItemsMenuModel[] = [];

  constructor(
    private storageService: StorageService,
    private menuService: MenuService
  ) {}

  ngOnInit() {
    let storageItems = this.storageService.readStorage('itemsMenu');

    if (!storageItems) {
      this.menuService.getMenu().subscribe((respMenus) => {
        this.itemsMenu = respMenus.data;

        this.storageService.saveStorage('itemsMenu', this.itemsMenu);
      });
    } else {
      this.itemsMenu = storageItems;
    }

  }
}
