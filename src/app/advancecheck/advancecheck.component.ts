import { Component, OnInit } from '@angular/core';
import { ApprovalService } from '../approval.service';

@Component({
  selector: 'app-advancecheck',
  templateUrl: './advancecheck.component.html',
  styleUrls: ['./advancecheck.component.css']
})
export class AdvancecheckComponent implements OnInit {

  constructor(private appService:ApprovalService) { }
  message ="";
  ngOnInit(): void {

    this.appService.currentApprovalStageMessage.
    subscribe(msg => this.message = msg);
  }

}
