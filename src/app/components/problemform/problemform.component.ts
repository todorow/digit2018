import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-problemform',
  templateUrl: './problemform.component.html',
  styleUrls: ['./problemform.component.css']
})
export class ProblemformComponent implements OnInit {
@Input locationCoordinates:string;


  constructor() { }

  ngOnInit() {
  }

}
