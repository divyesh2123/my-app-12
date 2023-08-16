import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

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

  constructor(private fb: UntypedFormBuilder) { }

  neweducation(): UntypedFormGroup {
    return this.fb.group({
      uni: '',
      passingYear: '',
    })
  }

  get education() {
    return this.profileForm.get('education') as UntypedFormArray;
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
