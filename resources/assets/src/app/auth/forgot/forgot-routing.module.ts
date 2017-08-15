import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { ForgotComponent } from './forgot.component';

export const ForgotRoutes: Routes = [
  { path: '', component: ForgotComponent }
];

export const ForgotRoute: ModuleWithProviders = RouterModule.forChild(ForgotRoutes);
