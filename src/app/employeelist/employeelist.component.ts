import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  data : any[] = [
   


  ]
  constructor(private d : CommentsService) { }

  ngOnInit(): void {

    this.d.getComments().subscribe(y=> {
      this.data =y;
    })
  }

  

}
