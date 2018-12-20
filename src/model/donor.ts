import {User} from './user';
import {Problem} from './Problem';


export class Donor extends User {
 /* private problemsId: Array<number>;
  private eventsId: Array<number>;*/

  public constructor(id: number, name: string, lastName: string) {
    super(id, name, lastName);
    // this.problemsId = [];
  }


/*
  public setProblemId(problemId: Problem) {
    this.problemsId.push(problemId.id);
  }
*/


}
