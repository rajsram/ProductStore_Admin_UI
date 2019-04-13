import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule,
    // RouterModule.forRoot(new Routes = [
    //   {

    //   }], { useHash: true })
    ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
