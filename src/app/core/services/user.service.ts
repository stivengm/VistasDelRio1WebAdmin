import { Injectable } from '@angular/core';
import { HttpAppService } from './http.service';
import { ApiResponse } from '../models/api-response.model';
import { UsersResponseModel } from '../models/response/users-response.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(
        private httpApp: HttpAppService
    ) {}

    getAllUsers() {
        return this.httpApp.get<ApiResponse<UsersResponseModel[]>>('/all-users');
    }
}