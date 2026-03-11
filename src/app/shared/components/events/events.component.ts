import { Component, OnInit } from '@angular/core';
import { EventsResponse } from '../../../core/models/response/events-response.model';
import { DataAppService } from '../../../core/services/data-app.service';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
  allEvents: EventsResponse[] | undefined;
  
  constructor(
    private dataAppService: DataAppService
  ) {}

  ngOnInit() {
    this.dataAppService.getIsEvents().subscribe((events) => {
      this.allEvents = events;
    });

    let events = this.dataAppService.getCurrentIsEvents();
    console.log(events);
  }
}
