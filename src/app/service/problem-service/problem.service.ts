import {Injectable} from '@angular/core';
import {Problem} from "../../../model/Problem";
import {CircleLocation} from "../../../model/circle-location";
import {PROBLEMS} from "../../../model/mock/mock-problems";


@Injectable({
  providedIn: 'root'
})
export class ProblemService {

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
    let strings :string[]=[];
    for (let a of PROBLEMS) {
      strings = a.id.split(",");
      let mock:string = parseFloat(strings[0]).toFixed(2)+","+parseFloat(strings[1])
        .toFixed(2);
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

}




