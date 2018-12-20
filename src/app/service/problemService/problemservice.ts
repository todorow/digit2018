import {Injectable} from '@angular/core';
import {Problem} from "../../../model/Problem";
import {CircleLocation} from "../../../model/circle-location";


@Injectable({
  providedIn: 'root'
})
export class Problemservice {

  problems: Problem[] = [];

  constructor() {
  }

  addNewProblem(problem: Problem): void {
    this.problems.push(problem);
  }

  getAllProblems(): Problem[] {
    return this.problems;

  }

  getProblemById(id: string) {
    for (let problem of this.problems) {
      if (problem.id === id) {
        return problem;
      }
      return null;
    }
  }

  getOnlyId(): CircleLocation[] {
    let myList: CircleLocation[] = [];
    for (let problem of this.problems) {
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




