import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoute } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoute
  ],
  declarations: [
  	LoginComponent
  ]
})
export class LoginModule { }
