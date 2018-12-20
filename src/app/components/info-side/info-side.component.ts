import {Component, OnInit} from '@angular/core';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info-side',
  templateUrl: './info-side.component.html',
  styleUrls: ['./info-side.component.css']
})
export class InfoSideComponent implements OnInit {
  faCoffee = faMapMarkedAlt;
  constructor() {
  }

  ngOnInit() {
  }


}
