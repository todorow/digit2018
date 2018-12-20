import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import {MarkerLocationServiceService} from "../../service/markerLocationService/marker-location-service.service";
import {Problem} from "../../../model/Problem";
import {Problemservice} from "../../service/problemService/problemservice";

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





  constructor(private route: ActivatedRoute, private location: Location,private markerLocationService: MarkerLocationServiceService, private problemService: Problemservice) { }

  ngOnInit() {

  }
  getCurrentLocation(): void{
    this.currentLocation = this.markerLocationService.getCurrentLocation();
  }
  onFileChanged(event) {
    this.selectedFile = <File>event.target.files[0];
    this.urlToFile='assets/events/'+this.selectedFile.name;
  }
  onAddProblemClicked():void{
    this.getCurrentLocation();
    this.currentProblem.id=this.currentLocation;
    this.currentProblem.itemsNeeded=this.listItems.split(',');
    this.currentProblem.pictureUrl=this.urlToFile;
    this.currentProblem.status=-1;
    this.problemService.addNewProblem(this.currentProblem);
    console.log(this.currentProblem);
    this.someEvent.emit();
    // this.onSaveProblem();


  }
 /* onSaveProblem():EventEmitter{
    return new EventEmitter();

  }*/

}
