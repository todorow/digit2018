import {Injectable} from '@angular/core';
import {Problem} from "../../../model/Problem";
import {CircleLocation} from "../../../model/circle-location";
import {PROBLEMS} from "../../../model/mock/mock-problems";


@Injectable({
  providedIn: 'root'
})
export class Problemservice {

  problems: Problem[] = PROBLEMS;
  constructor() {
  }

  addNewProblem(problem: Problem): void {
    PROBLEMS.push(problem);
  }

  getAllProblems(): Problem[] {
    return this.problems;

  }

  getProblemById(id: any):any {
    console.log(id);
    console.log(PROBLEMS);
    let lista :string[]=[];
    for (let a of PROBLEMS) {
      console.log(a.id);
      lista=a.id.split(",");
      let mock:string=parseFloat(lista[0]).toFixed(2)+","+parseFloat(lista[1]).toFixed(2);
      if (mock == id) {

        return a;
      }

    }
    return null;
  }

  getOnlyId(): CircleLocation[] {
    let myList: CircleLocation[] = [];
    for (let problem of PROBLEMS) {
      let list: string[] = problem.id.split(',');
      myList.push(new CircleLocation(list[0], list[1]));
    }
    return myList;
  }

  /*let pr:{ category: string; description: string; id: string; itemsNeeded: string[]; pictureUrl: string; privacy: boolean; status: number }={ "category": "Човек",
    "description": "Трајче за оваа зима нема доволно дрва, на трајче му се потребни уште 3 кубика дрва.↵број за контакт 072 552-***",
    "id": "41.98883,21.42164",
    "itemsNeeded": ["3 кубика дрва"],
    "pictureUrl": "assets/events/1200px-Stray_dogs_crosswalk.jpg",
    "privacy": true,
    "status": -1*/
// }

}




