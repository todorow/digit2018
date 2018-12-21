import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Problem} from "../../../model/Problem";

@Component({
  selector: 'app-problem-info',
  templateUrl: './problem-info.component.html',
  styleUrls: ['./problem-info.component.css']
})
export class ProblemInfoComponent implements OnInit {
@Input() problem:Problem=null;
  @Output() someEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }
onClick():void{
  this.someEvent.emit(this.problem);
}
}
