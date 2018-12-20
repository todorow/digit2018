import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import {MarkerLocationServiceService} from "../../service/markerLocationService/marker-location-service.service";
import {myEvent} from "../events/myEvent";
import {Problem} from "../../../model/Problem";

@Component({
  selector: 'app-problemform',
  templateUrl: './problemform.component.html',
  styleUrls: ['./problemform.component.css']
})
export class ProblemformComponent implements OnInit {
 // @Input locationCoordinates:string="none";
  currentLocation:string;
  currentProblem: Problem = new Problem();
  selectedFile : File = null;
  urlToFile:string;
  listItems:string;




  constructor(private route: ActivatedRoute, private location: Location,private markerLocationService: MarkerLocationServiceService) { }

  ngOnInit() {
    this.getCurrentLocation()
  }
  getCurrentLocation(): void{
    this.currentLocation = this.markerLocationService.getCurrentLocation();
  }
  onFileChanged(event) {
    this.selectedFile = <File>event.target.files[0];
    this.urlToFile='assets/events/'+this.selectedFile.name;
  }
  onAddProblemClicked():void{

  }


}
