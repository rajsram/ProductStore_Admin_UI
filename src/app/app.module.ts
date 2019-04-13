import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatMenuModule, MatIconModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
    // RouterModule.forRoot(new Routes = [
    //   {

    //   }], { useHash: true })
  ],
  declarations: [AppComponent, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
