import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

  constructor() { }

  firstname = new FormControl('');

  lastname = new FormControl('');

  fullname = new FormControl('');

  ngOnInit(): void {
  }

  displayInfo()
  {
    this.fullname.setValue(this.firstname.value + " " + this.lastname.value);
  }

}
