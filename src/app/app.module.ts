import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  imports: [BrowserModule, FormsModule,
    // RouterModule.forRoot(new Routes = [
    //   {

    //   }], { useHash: true })
    ],
  declarations: [AppComponent, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
