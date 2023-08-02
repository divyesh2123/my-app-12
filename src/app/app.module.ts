import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ButtonComponent } from './button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { UserValidationComponent } from './user-validation/user-validation.component';
import { MyprofileComponent } from './myprofile/myprofile.component';

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
    MyprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
