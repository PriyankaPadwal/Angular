import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustCompComponent } from './cust-comp/cust-comp.component';
import { ApPkComponent } from './cust-comp/ap-pk.component';
import { ApMnComponent } from './cust-comp/ap-mn.component';

@NgModule({
  declarations: [
    AppComponent,
    CustCompComponent,
    ApPkComponent,
    ApMnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
