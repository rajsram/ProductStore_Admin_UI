import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  MatMenuModule,
  MatIconModule,
  MatInputModule,
} from '@angular/material';

import { SharedModule } from './../shared/shared.module'

import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [LoginComponent, UsersComponent], 
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'users', component: UsersComponent }
      ]),
    MatInputModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class UserModule { }
