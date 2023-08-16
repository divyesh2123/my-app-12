import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

  constructor() { }

  firstname = new UntypedFormControl('');

  lastname = new UntypedFormControl('');

  fullname = new UntypedFormControl('');

  ngOnInit(): void {
  }

  displayInfo()
  {
    this.fullname.
    setValue(this.firstname.value + " " 
    + this.lastname.value);

   
  }

}
