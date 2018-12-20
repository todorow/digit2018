export class Problem {
  id: string;
   url: string;
   name: string;
   description: string;
   hidenData: string;
   location: Location;
   status: boolean;
   donorsId: Array<number>;
   detectorId: number;
   itemsNeeded: Array<string>;


  constructor() {

  }

  get Id(): string {
    return this.id;
  }

  set Id(value: string) {
    this.id = value;
  }

  get Url(): string {
    return this.url;
  }

  set Url(value: string) {
    this.url = value;
  }

  get Name(): string {
    return this.name;
  }

  set Name(value: string) {
    this.name = value;
  }

  get Description(): string {
    return this.description;
  }

  set Description(value: string) {
    this.description = value;
  }

  get HidenData(): string {
    return this.hidenData;
  }

  set HidenData(value: string) {
    this.hidenData = value;
  }

  get Location(): Location {
    return this.location;
  }

  set Location(value: Location) {
    this.location = value;
  }

  get Status(): boolean {
    return this.status;
  }

  set Status(value: boolean) {
    this.status = value;
  }

  get DonorsId(): Array<number> {
    return this.donorsId;
  }

  set DonorsId(value: Array<number>) {
    this.donorsId = value;
  }

  get DetectorId(): number {
    return this.detectorId;
  }

  set DetectorId(value: number) {
    this.detectorId = value;
  }

  get ItemsNeeded(): Array<string> {
    return this.itemsNeeded;
  }

  set ItemsNeeded(value: Array<string>) {
    this.itemsNeeded = value;
  }
}
