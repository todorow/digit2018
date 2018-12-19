import {Directive, Input} from '@angular/core';
import {AgmCircle, CircleManager} from "@agm/core";

@Directive({
  selector: '[appMyAgmCircle]'
})
export class MyAgmCircleDirective extends AgmCircle {
  @Input() problemId: number = -1;

  constructor(_manager: CircleManager) {
    super(_manager);
  }

}
