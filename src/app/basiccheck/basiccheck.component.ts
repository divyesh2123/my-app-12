import { Component, OnInit } from '@angular/core';
import { ApprovalService } from '../approval.service';

@Component({
  selector: 'app-basiccheck',
  templateUrl: './basiccheck.component.html',
  styleUrls: ['./basiccheck.component.css']
})
export class BasiccheckComponent implements OnInit {

  message:string="";
 approvalText:string="";
  constructor(private appService:ApprovalService) { }

  ngOnInit() {
    this.appService.currentApprovalStageMessage.subscribe(msg => this.message = msg);
    
    }

    submit()
 {
 console.log(this.approvalText)
 this.appService.updateApprovalMessage('this is the changed')
 }

  

}
