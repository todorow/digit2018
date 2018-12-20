import {Component, OnInit} from '@angular/core';
import {myEvent} from "../myEvent";
import {EVENTS} from '../mock-events';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  constructor() {
  }

  addEvent = new myEvent();

  /*onFileChanged(event) {
   console.log(event);
    // const file = event.target.files[0]
  }*/

  addNewEvent(event: myEvent): void {
    event.id = EVENTS.length + 1;
    EVENTS.push(event);

    for (const item of EVENTS) {
      console.log(item);
    }
  }

  ///pocetok



  /////kraj
  ngOnInit() {
  }

}
