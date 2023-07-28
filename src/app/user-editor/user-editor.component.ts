import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.css']
})
export class UserEditorComponent implements OnInit {

  titles: string[] =["Mr","MRS","MISS","MS"];

  hobbies: string[]= ["circket","music","book"];

  titlesData: any[] = [
    {
      Id : 1,
      title: "MR"
    },
    {
      Id: 2,
      title : "MRS"
    },
    {
      Id:3,
      title: "MISS"
    },
    {
      Id:4,
      title:"MS"
    }

  ]

  userEd = new FormGroup({
    title: new FormControl(''),
    name: new FormControl(''),
    isterms: new FormControl(true),
    gender: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    hobbies : new FormArray( this.hobbies.map((value)=> {

      return new FormControl()
    })),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      suite: new FormControl(''),
      zipcode: new FormControl(''),

      geo: new FormGroup({
        lat: new FormControl(''),
        lng: new FormControl('')
        
        
      })

    })
  });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log(this.userEd.value);
  }

}
