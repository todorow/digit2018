import {User} from './user';
import {Problem} from './Problem';
import {Event} from './Event';

export class Detector extends User {
  private problemsId: Array<number>;
  private eventsId: Array<number>;

  public constructor(id: number, name: string, lastName: string) {
    super(id, name, lastName);
    this.problemsId = [];
    this.eventsId = [];
  }

  public setProblemId(problemId: Problem) {
    this.problemsId.push(problemId.id);
  }


}
