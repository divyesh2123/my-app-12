import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-validation',
  templateUrl: './user-validation.component.html',
  styleUrls: ['./user-validation.component.css']
})
export class UserValidationComponent implements OnInit {

  isValid : boolean = true;
  profileForm = this.fb.group({
    firstName: ['',[Validators.required,Validators.maxLength(15),Validators.email,Validators.pattern('^[a-z][A-Z]')]],

    lastName: ['',Validators.required],
    address: this.fb.group({
      street: ['',Validators.required],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  constructor(private fb: FormBuilder) { }

  get f() {return this.profileForm.controls};

  get fsubcontrols() {

    return this.profileForm.get('address') as FormGroup

  }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.isValid = this.profileForm.valid;
   
  }

}
