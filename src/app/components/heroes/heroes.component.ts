import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {USERS} from "../../../model/mock/mock-users";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  users = USERS;
  constructor() { }

  ngOnInit() {
  }

}
