import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Problem} from "../../../../model/Problem";


@Component({
  selector: 'app-modal-add-problem',
  templateUrl: './modal-add-problem.component.html',
  styleUrls: ['./modal-add-problem.component.css']
})
export class ModalAddProblemComponent implements OnInit {
  closeResult: string;
  @Input() problem:Problem=null;
  constructor(private modalService: NgbModal) {}

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }


  }


  ngOnInit() {

  }

}
