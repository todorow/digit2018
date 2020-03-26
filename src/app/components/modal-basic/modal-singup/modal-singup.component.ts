import { Component, OnInit } from '@angular/core';
import {faEnvelope, faLock} from "@fortawesome/free-solid-svg-icons";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-singup',
  templateUrl: './modal-singup.component.html',
  styleUrls: ['./modal-singup.component.css']
})
export class ModalSingupComponent implements OnInit {
  closeResult: string;
  email = faEnvelope;
  pass = faLock;
  modal: NgbModal;


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


  ngOnInit(){

  }


}
