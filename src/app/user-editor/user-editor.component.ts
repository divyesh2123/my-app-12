import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

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

  userEd = new UntypedFormGroup({
    title: new UntypedFormControl(''),
    name: new UntypedFormControl(''),
    isterms: new UntypedFormControl(true),
    gender: new UntypedFormControl(''),
    username: new UntypedFormControl(''),
    email: new UntypedFormControl(''),
    hobbies : new UntypedFormArray( this.hobbies.map((value)=> {

      return new UntypedFormControl()
    })),
    address: new UntypedFormGroup({
      street: new UntypedFormControl(''),
      city: new UntypedFormControl(''),
      suite: new UntypedFormControl(''),
      zipcode: new UntypedFormControl(''),

      geo: new UntypedFormGroup({
        lat: new UntypedFormControl(''),
        lng: new UntypedFormControl('')
        
        
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
