import {EventEmitter, Injectable, Output} from '@angular/core';
import {Problem} from "../../../model/Problem";
import {CircleLocation} from "../../../model/circle-location";


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
getAllProblems():Problem[]{
  return this.problems;

  }
  getProblemById(id:string){
    for(let problem of this.problems){
      if(problem.id===id){
        return problem;
      }
      return null;
    }
  }
  getOnlyId():CircleLocation[]{
    let myList:CircleLocation[]=[];
    for(let problem of this.problems){
      let list:string[]=problem.id.split(',');
      myList.push(new CircleLocation(list[0],list[1]));
    }
    return myList;
  }
}




