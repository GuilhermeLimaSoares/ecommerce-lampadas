import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {MainAreaComponent} from '../app/main-area/main-area.component';
import { SingUpComponent } from './../app/header/icon-buttons/button-login/sing-up/sing-up.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const APP_ROUTES: Routes = [
  // {path: '', component: AppComponent},
  {path: '', component: MainAreaComponent},
  {path: 'cadastro', component: SingUpComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
