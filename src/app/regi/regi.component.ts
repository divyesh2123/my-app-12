import { Component, OnInit, ViewChild } from '@angular/core';
import { contact } from '../login-response';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-regi',
  templateUrl: './regi.component.html',
  styleUrls: ['./regi.component.css']
})
export class RegiComponent implements OnInit {

  title = 'Template driven forms';
 
  @ViewChild('contactForm',null) contactForm: NgForm;

  contact:contact;

  constructor() { }

  ngOnInit(): void {
    this.contact = { 
      firstname:"",
      lastname:"",
      gender:"male",
      isToc:true,
      email:"",
    };
  }

}
