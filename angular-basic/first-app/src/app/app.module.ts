import { FirstModule } from './first/first.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DatabindingComponent } from './databinding/databinding.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    DataBindingComponent,
    DatabindingComponent
  ],
  imports: [
    BrowserModule,
    FirstModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
