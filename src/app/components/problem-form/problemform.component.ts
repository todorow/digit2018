import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import {MarkerLocationService} from "../../service/marker-location-service/marker-location.service";
import {Problem} from "../../../model/Problem";
import {ProblemService} from "../../service/problem-service/problem.service";

@Component({
  selector: 'app-problemform',
  templateUrl: './problemform.component.html',
  styleUrls: ['./problemform.component.css']
})
export class ProblemformComponent implements OnInit {
  @Output() someEvent = new EventEmitter();
  currentLocation:string;
  currentProblem: Problem = new Problem();
  selectedFile : File = null;
  urlToFile:string;
  listItems:string;





  constructor(private route: ActivatedRoute, private location: Location, private markerLocationService: MarkerLocationService, private problemService: ProblemService) { }

  ngOnInit() {

  }
  getCurrentLocation(): void{
    this.currentLocation = this.markerLocationService.getCurrentLocation();
  }
  onFileChanged(event) {
    this.selectedFile = <File>event.target.files[0];
    this.urlToFile='~/DIGIT/src/assets/events/'+this.selectedFile.name;
  }
  onAddProblemClicked():void{
    this.getCurrentLocation();
    this.currentProblem.id=this.currentLocation;
    let lista=this.currentLocation.split(",");

    this.currentProblem.itemsNeeded=this.listItems.split(',');
    this.currentProblem.pictureUrl="http://cdn.akc.org/content/article-body-image/housetrain_adult_dog_hero.jpg";
    this.currentProblem.status=-1;
    this.problemService.addNewProblem(this.currentProblem);
    console.log(this.currentProblem);
    this.someEvent.emit(this.currentProblem);
    // this.onSaveProblem();


  }
 /* onSaveProblem():EventEmitter{
    return new EventEmitter();

  }*/

}
