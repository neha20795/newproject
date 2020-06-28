import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginleftComponent } from './pages/loginleft/loginleft.component';
import { LoginrightComponent } from './pages/loginright/loginright.component';
import { EmployeeregistrationComponent } from './pages/employeeregistration/employeeregistration.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginleftComponent,
    LoginrightComponent,
    EmployeeregistrationComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
