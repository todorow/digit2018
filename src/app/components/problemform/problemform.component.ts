import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import {MarkerLocationServiceService} from "../../service/markerLocationService/marker-location-service.service";

@Component({
  selector: 'app-problemform',
  templateUrl: './problemform.component.html',
  styleUrls: ['./problemform.component.css']
})
export class ProblemformComponent implements OnInit {
 // @Input locationCoordinates:string="none";
  currentLocation:string;

  constructor(private route: ActivatedRoute, private location: Location,private markerLocationService: MarkerLocationServiceService) { }

  ngOnInit() {
    this.getCurrentLocation()
  }
  getCurrentLocation(): void{
    this.currentLocation = this.markerLocationService.getCurrentLocation();
  }


}
