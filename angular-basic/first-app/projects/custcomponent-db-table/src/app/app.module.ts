import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableDataComponent } from './table-data/table-data.component';
import { ItemInfoComponent } from './item-info/item-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TableDataComponent,
    ItemInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
