import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpAppService } from './http.service';
import { map, Observable } from 'rxjs';
import { ItemsMenuModel } from '../models/items-menu.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private http: HttpClient,
    private httpApp: HttpAppService
  ) {}

  getMenu() {
    return this.httpApp.get<ApiResponse<ItemsMenuModel[]>>('/getItemsMenu')
  }

}
