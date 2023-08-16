import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent implements OnInit {

  closeResult='';
  accountlist : any[] = [];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

    this.accountlist.push({ accountName: "test", accountId: "121"});
     this.accountlist.push({ accountName: "test", accountId: "122"});
      this.accountlist.push({ accountName: "test", accountId: "123"});
       this.accountlist.push({ accountName: "test", accountId: "124"});
        this.accountlist.push({ accountName: "test", accountId: "125"});
  }

  private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

  open(content) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}
}




