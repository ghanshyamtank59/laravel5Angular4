import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotRoute } from './forgot-routing.module';
import { ForgotComponent } from './forgot.component';

@NgModule({
  imports: [
    CommonModule,
    ForgotRoute
  ],
  declarations: [
  	ForgotComponent
  ]
})
export class ForgotModule { }
