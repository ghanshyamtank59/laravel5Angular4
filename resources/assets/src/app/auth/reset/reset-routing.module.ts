import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { ResetComponent } from './reset.component';

export const ResetRoutes: Routes = [
  { path: '', component: ResetComponent }
];

export const ResetRoute: ModuleWithProviders = RouterModule.forChild(ResetRoutes);
