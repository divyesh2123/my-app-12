import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: [''],
    password: ['']
   
  });

  isInValid = false;

  errorMessage = '';

  constructor( private fb: FormBuilder,
    private loginService : LoginService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    

    this.loginService.loginInfo(this.loginForm.value).
    subscribe((y)=> {

      console.log(y);

      this.isInValid = false;

    },
    (error:HttpErrorResponse) => {
      
      this.isInValid = true;
      this.errorMessage = "Invalid userName and password";
  }
    
    
    )

  

 

  }

}
