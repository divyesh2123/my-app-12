import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() emp: any;

  @Input() myindex:any;

  constructor() { }

  ngOnInit(): void {

    console.log(this.myindex);
  }

}
