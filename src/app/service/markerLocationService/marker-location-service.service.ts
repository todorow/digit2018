import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarkerLocationServiceService {
  location: string;
  constructor() {

  }

  setCurrentLocation(location:string){
    this.location=location;
  }
  getCurrentLocation():string{
    return this.location;
  }
}
