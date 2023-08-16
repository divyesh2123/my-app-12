import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomvalidationService } from '../customvalidation.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  
  submitted = false;

  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
    password: ['', Validators.compose([Validators.required,
       this.customValidator.patternValidator()])],
    confirmPassword: ['', [Validators.required]],
  },

  {
    validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
  }
  
  
  );

  constructor(
    private fb: UntypedFormBuilder,
    private customValidator: CustomvalidationService

  ) { 

    
  }

  get registerFormControl() {
    return this.profileForm.controls;
  }

  onSubmit()
  {
    this.submitted = true;
    if (this.profileForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.profileForm.value);
    }
  }

  ngOnInit(): void {
  }

}
