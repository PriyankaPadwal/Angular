import { DatabindingComponent } from './databinding/databinding.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DbRandomComponent } from './db-random/db-random.component';


@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    DbRandomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
