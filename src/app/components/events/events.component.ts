import {Component, OnInit} from '@angular/core';
import {myEvent} from "./myEvent";
import {EVENTS} from './mock-events';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events = EVENTS;
  selectedEvent: myEvent;
  isSelected = false;
  form: FormGroup;

  constructor() {
  }


  ngOnInit() {
  }

  onSelected(event: myEvent): void {
    this.selectedEvent = event;
  }

  changeSelected(): boolean {
    return !this.isSelected;
  }


}
