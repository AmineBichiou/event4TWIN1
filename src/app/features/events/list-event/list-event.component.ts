import { Component, OnInit } from '@angular/core';
import { AppEvent, DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {

  events: AppEvent[] = [];
  searchItem: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.events = this.dataService.getEvents();
  }

  likeEvent(event: AppEvent): void {
    event.nbrlikes += 1;
  }

  ticketEvent(event: AppEvent): void {
    if (event.nbplaces > 0) {
      event.nbplaces -= 1;
    }
  }

  isExpired(event: AppEvent): boolean {
    return new Date(event.date) < new Date();
  }

  filter(): AppEvent[] {
    const query = this.searchItem.toLowerCase();
    return this.events.filter(e =>
      e.titre.toLowerCase().includes(query) ||
      e.description.toLowerCase().includes(query) ||
      e.lieu.toLowerCase().includes(query)
    );
  }
}
