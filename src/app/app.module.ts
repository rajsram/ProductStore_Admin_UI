import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatMenuModule, MatIconModule,MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProductsComponent } from './product/products/products.component';
import { LoginComponent } from './user/login/login.component';

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
    // RouterModule.forRoot(new Routes = [
    //   {

    //   }], { useHash: true })
  ],
  declarations: [AppComponent,
    HeaderComponent,
    LoginComponent,
    ProductsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
