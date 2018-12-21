import { Component, OnInit } from '@angular/core';
import { Story } from "../../../model/Story";
import { STORIES } from "../../../model/mock/mock-stories";

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  stories: STORIES;
  constructor() { }

  ngOnInit() {
  }

}
