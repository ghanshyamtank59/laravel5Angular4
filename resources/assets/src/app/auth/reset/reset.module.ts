import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetRoute } from './reset-routing.module';
import { ResetComponent } from './reset.component';

@NgModule({
  imports: [
    CommonModule,
  	ResetRoute
  ],
  declarations: [
  	ResetComponent
  ]
})
export class ResetModule { }
