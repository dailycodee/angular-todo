import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './PL/login-page/login-page.component';
import { ToDoMainPageComponent } from './PL/to-do-main-page/to-do-main-page.component';
import { RegistrationFormComponent } from './PL/registration-form/registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ToDoMainPageComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
