import {Component, OnInit} from '@angular/core';
import {Event} from '../Event';
import {EVENTS} from '../mock-events';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  constructor() {
  }

  addEvent = new Event();

  addNewEvent(event: Event): void {
    event.id = EVENTS.length + 1;
    EVENTS.push(event);

    for (const item of EVENTS) {
      console.log(item);
    }
  }

  ngOnInit() {
  }

}
