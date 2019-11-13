import { FirstSampleComponent } from './../first-sample/first-sample.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';





@NgModule({
  declarations: [FirstSampleComponent],
  imports: [
    CommonModule
  ],
  exports:[FirstSampleComponent]
})
export class FirstModule { }
