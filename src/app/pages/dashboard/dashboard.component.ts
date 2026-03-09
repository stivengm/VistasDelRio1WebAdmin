import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../core/services/events.service';
import { EventsResponse } from '../../core/models/response/events-response.model';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  allEvents: EventsResponse[] | undefined;

  constructor(
    private eventsService: EventsService
  ) {}

  ngOnInit(): void {
    this.eventsService.getAllEvents().subscribe((events) => {

      this.allEvents = events.data;
    })
  }
}
