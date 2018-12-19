import {Marker} from "./marker";

export class Location {
  lat: number;
  lng: number;
  viewport?: Object;
  zoom: number;
  address_level_1?: string;
  address_level_2?: string;
  address_country?: string;
  address_zip?: string;
  address_state?: string;
  problemId?: number;
  marker?: Marker;

  public constructor(lat: number, lng: number, zoom: number = null) {
    this.lat = lat;
    this.lng = lng;
    this.zoom = zoom;

  }
}
