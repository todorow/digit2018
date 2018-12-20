import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info-side',
  templateUrl: './info-side.component.html',
  styleUrls: ['./info-side.component.css']
})
export class InfoSideComponent implements OnInit {
  faCoffee = faMapMarkedAlt;
  @Output() someEvent = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }


}
