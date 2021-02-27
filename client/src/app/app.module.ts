import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './PL/login-page/login-page.component';
import { ToDoMainPageComponent } from './PL/to-do-main-page/to-do-main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ToDoMainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
