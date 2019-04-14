import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  MatMenuModule,
  MatIconModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProductsComponent } from './product/products/products.component';
import { LoginComponent } from './user/login/login.component';

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      { path: 'user', loadChildren: './user/user.module#UserModule' },
      { path: 'product', loadChildren: './product/product.module#ProductModule'},
      { path: 'report', loadChildren: './report/report.module#ReportModule'}
    ], { useHash: true })
  ],
  declarations: [AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
