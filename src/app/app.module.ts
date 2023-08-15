import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ButtonComponent } from './button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { UserValidationComponent } from './user-validation/user-validation.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { LoginComponent } from './login/login.component';
import { RegiComponent } from './regi/regi.component';
import { ResumeComponent } from './resume/resume.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { HeaderComponent } from './header/header.component';
import { Login1Component } from './login1/login1.component';
import { BasiccheckComponent } from './basiccheck/basiccheck.component';
import { AdvancecheckComponent } from './advancecheck/advancecheck.component';
import { FinalcheckComponent } from './finalcheck/finalcheck.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    UserEditorComponent,
    ProductDisplayComponent,
    UserValidationComponent,
    MyprofileComponent,
    LoginComponent,
    RegiComponent,
    ResumeComponent,
    EmployeeComponent,
    EmployeelistComponent,
    HeaderComponent,
    Login1Component,
    BasiccheckComponent,
    AdvancecheckComponent,
    FinalcheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
