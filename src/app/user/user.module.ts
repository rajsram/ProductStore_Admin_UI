import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  MatMenuModule,
  MatIconModule,
  MatInputModule,
} from '@angular/material';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent], 
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent }]),
    MatInputModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class UserModule { }
