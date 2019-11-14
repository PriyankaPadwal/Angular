import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PricingNavComponent } from './pricing-nav/pricing-nav.component';
import { PricingHeaderComponent } from './pricing-header/pricing-header.component';
import { PricingCardComponent } from './pricing-card/pricing-card.component';
import { PricingContainerComponent } from './pricing-container/pricing-container.component';
import { PricingFooterComponent } from './pricing-footer/pricing-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PricingNavComponent,
    PricingHeaderComponent,
    PricingCardComponent,
    PricingContainerComponent,
    PricingFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
