import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpAppService } from './http.service';
import { map, Observable } from 'rxjs';
import { ItemsMenuModel } from '../models/items-menu.model';
import { ApiResponse } from '../models/api-response.model';
import { LoginRequestModel } from '../models/request/login-request.model';
import { LoginResponseModel } from '../models/response/login-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpApp: HttpAppService
  ) {}

  login(request: LoginRequestModel) {
    return this.httpApp.post<ApiResponse<LoginResponseModel>>('/login-user', request);
  }

}
