export class CircleLocation {
  lat:number;
  lgn:number;
  public constructor(lat:string,lgn:string){
    this.lat=Number(lat);
    this.lgn=Number(lgn);
  }

}
