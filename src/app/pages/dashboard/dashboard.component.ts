import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../core/services/events.service';
import { EventsResponse } from '../../core/models/response/events-response.model';
import { DataAppService } from '../../core/services/data-app.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  allEvents: EventsResponse[] | undefined;

  constructor(
    private eventsService: EventsService,
    private dataAppService: DataAppService
  ) {}

  ngOnInit(): void {

    this.dataAppService.getIsUser().subscribe((user) => {
      // TODO: Se tiene que validar la cuenta y validar si tiene acceso a añadir evento

    });

    this.eventsService.getAllEvents().subscribe((events) => {

      this.allEvents = events.data;
    })
  }
}
