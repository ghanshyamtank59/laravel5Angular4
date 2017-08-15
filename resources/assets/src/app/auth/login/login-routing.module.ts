import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { LoginComponent } from './login.component';

export const LoginRoutes: Routes = [
  { path: '', component: LoginComponent }
];

export const LoginRoute: ModuleWithProviders = RouterModule.forChild(LoginRoutes);
