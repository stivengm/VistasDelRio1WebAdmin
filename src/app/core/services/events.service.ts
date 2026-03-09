import { Injectable } from '@angular/core';
import { HttpAppService } from './http.service';
import { ApiResponse } from '../models/api-response.model';
import { EventsResponse } from '../models/response/events-response.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

    constructor(
        private httpApp: HttpAppService
    ) {}

    getAllEvents() {
        return this.httpApp.get<ApiResponse<EventsResponse[]>>('/get-events');
    }
}