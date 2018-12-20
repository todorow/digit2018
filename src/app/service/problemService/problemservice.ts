import {Injectable} from '@angular/core';
import {Problem} from "../../../model/Problem";


@Injectable({
  providedIn: 'root'
})
export class Problemservice {
  problems:Problem[]=[];
  constructor() {
  }
addNewProblem(problem:Problem):void{
    this.problems.push(problem);
}




}
