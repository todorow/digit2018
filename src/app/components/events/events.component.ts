import {Component, OnInit} from '@angular/core';
import {Event} from './Event';
import {EVENTS} from './mock-events';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events = EVENTS;
  selectedEvent: Event;
  isSelected = false;
  form: FormGroup;

  constructor() {
  }

  /* constructor(private formBuilder: FormBuilder) {
     this.form = this.formBuilder.group({imeNaPole: ['', Validators.required ] } );
   }*/

  ngOnInit() {
  }

  onSelected(event: Event): void {
    this.selectedEvent = event;
  }

  changeSelected(): boolean {
    return !this.isSelected;
  }

  /*
    gerValue() {
      const inputValue = this.form.value;
      console.log(inputValue.imeNaPole);
    }
  */
}
