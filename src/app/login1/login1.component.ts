import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {

  constructor(private fb: UntypedFormBuilder) { }

  loginform = this.fb.group({

    userName : [],
    password: []

  })

  @Output() login = new EventEmitter<string>();

  ngOnInit(): void {
  }

  submit()
 {

  this.login.emit(this.loginform.get('userName').value);
 }

}
