import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    education: this.fb.array([ ])
  });

  constructor(private fb: FormBuilder) { }

  neweducation(): FormGroup {
    return this.fb.group({
      uni: '',
      passingYear: '',
    })
  }

  get education() {
    return this.profileForm.get('education') as FormArray;
  }

 

  Addeducation()
  {
    
    this.education.push(this.neweducation())

  }

  removedu(index) {
    this.education.removeAt(index);
  }
   

  saveInfomration()
  {

    console.log(this.profileForm.value);
  }



  ngOnInit(): void {

    this.education.push(this.neweducation())

  }

}
