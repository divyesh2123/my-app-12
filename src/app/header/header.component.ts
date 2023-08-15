import { Component, OnInit, ViewChild } from '@angular/core';
import { Login1Component } from '../login1/login1.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild(Login1Component)
  private loginComponet: Login1Component;

  userName = "";
  password = "";
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    this.password = this.loginComponet.loginform.get('password').value;

  }

  onLogin(user: string) {
    this.userName =user;
    this.password = this.loginComponet.loginform.get('password').value;

    }

}
