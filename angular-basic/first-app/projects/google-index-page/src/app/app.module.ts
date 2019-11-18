import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoogleNavComponent } from './google-nav/google-nav.component';
import { GoogleContainerComponent } from './google-container/google-container.component';
import { GoogleFooterComponent } from './google-footer/google-footer.component';
import { GoogleHeaderComponent } from './google-header/google-header.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleNavComponent,
    GoogleContainerComponent,
    GoogleFooterComponent,
    GoogleHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
