import {Component, Input, NgZone, OnInit, ViewChild} from '@angular/core';
import {AgmCircle, AgmMap, MapsAPILoader} from '@agm/core';
import {GoogleMapsAPIWrapper} from '@agm/core/services';
import {Location} from "../../../model/location";
import {Problem} from "../../../model/Problem";
import {Problemservice} from "../../service/problemService/problemservice";
import {MarkerLocationServiceService} from "../../service/markerLocationService/marker-location-service.service";
import {CircleLocation} from "../../../model/circle-location";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  @Input() problem: Problem = null;
  isActive: boolean=true;
  markerLocation: string="41.98883,21.42164";
  problemsLocations: Array<CircleLocation>=[];

  constructor( private route: ActivatedRoute,public mapsApiLoader: MapsAPILoader,
              private zone: NgZone,
              private wrapper: GoogleMapsAPIWrapper, private problemServce: Problemservice,private markerLocationService: MarkerLocationServiceService) {
    this.mapsApiLoader = mapsApiLoader;
    this.zone = zone;
    this.wrapper = wrapper;

        this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
    });


  }

  geocoder: any;
  circleRadius: number = 100;
  // problemsLocations: Array<CircleLocation>=[];
  checkStatus():any{
    const id = +this.route.snapshot.paramMap.get('index');
    console.log(id);
    if(id==1){
      this.isActive=false;
    }
  }

  public location: Location = {
    lat: 41.98883,
    lng: 21.42164,
    marker: {
      lat: 41.98883,
      lng: 21.42164,
      draggable: true
    },
    zoom: 15
  };

  @ViewChild(AgmMap) map: AgmMap;
  @ViewChild(AgmCircle) circle: AgmCircle;

  // currentLocation=this.location.marker.lat+","+this.location.marker.lng;
  ngOnInit() {
    this.location.marker.draggable = true;
    this.markerLocation="41.98883,21.42164";
    this.markerLocationService.setCurrentLocation(this.markerLocation);
    this.problemsLocations = this.problemServce.getOnlyId();
    this.checkStatus();
    console.log(this.problemsLocations);

  }

  onClick(property:any){
    this.isActive=false;
  }
  onRefresh(property:any){
    this.problemsLocations=this.problemServce.getOnlyId();
    this.isActive=true;
    console.log(property);
  }

  onPrint(property: any) {
    console.log(property);

  }



  markerDragEnd(m: any, $event: any) {

    this.location.marker.lat = m.coords.lat;
    this.location.marker.lng = m.coords.lng;
    this.markerLocation=m.coords.lat+","+m.coords.lng;
    console.log(this.markerLocation);
    this.markerLocationService.setCurrentLocation(this.markerLocation);
    this.findAddressByCoordinates();
  }

  findAddressByCoordinates() {
    this.geocoder.geocode({
      'location': {
        lat: this.location.marker.lat,
        lng: this.location.marker.lng
      }
    }, (results, status) => {
      this.decomposeAddressComponents(results);
    })
  }

  decomposeAddressComponents(addressArray) {
    if (addressArray.length == 0) return false;
    let address = addressArray[0].address_components;

    for (let element of address) {
      if (element.length == 0 && !element['types']) continue

      if (element['types'].indexOf('street_number') > -1) {
        this.location.address_level_1 = element['long_name'];
        continue;
      }
      if (element['types'].indexOf('route') > -1) {
        this.location.address_level_1 += ', ' + element['long_name'];
        continue;
      }
      if (element['types'].indexOf('locality') > -1) {
        this.location.address_level_2 = element['long_name'];
        continue;
      }
      if (element['types'].indexOf('administrative_area_level_1') > -1) {
        this.location.address_state = element['long_name'];
        continue;
      }
      if (element['types'].indexOf('country') > -1) {
        this.location.address_country = element['long_name'];
        continue;
      }
      if (element['types'].indexOf('postal_code') > -1) {
        this.location.address_zip = element['long_name'];
        continue;
      }
    }
  }

}

declare var google: any;

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

