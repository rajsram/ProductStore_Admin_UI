import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  MatMenuModule,
  MatIconModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';

import { SharedModule } from './../shared/shared.module'

import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: ProductsComponent }]),
    MatMenuModule,
    MatInputModule,
    MatIconModule,
    MatTableModule
  ]
})
export class ProductModule { }
