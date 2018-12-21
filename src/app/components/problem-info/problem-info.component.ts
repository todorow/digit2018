import {Component, Input, OnInit} from '@angular/core';
import {Problem} from "../../../model/Problem";

@Component({
  selector: 'app-problem-info',
  templateUrl: './problem-info.component.html',
  styleUrls: ['./problem-info.component.css']
})
export class ProblemInfoComponent implements OnInit {
@Input() problem:Problem=null;
  constructor() { }

  ngOnInit() {

  }

}
