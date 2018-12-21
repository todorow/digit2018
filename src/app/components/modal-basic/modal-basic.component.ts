import {Component, OnInit} from '@angular/core';
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {USERS} from "../../../model/mock/mock-users";
import {User} from "../../../model/user";

@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.component.html',
  styleUrls: ['./modal-basic.component.css']
})
export class ModalBasicComponent implements OnInit {
  closeResult: string;
  email = faEnvelope;
  pass = faLock;
  newUser = new User();


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
  public daliNajaven(): boolean {
      // let flag = true;
      // while(flag){
      //   if()
      // }
    return true;
  }

  ngOnInit(){

  }

}
