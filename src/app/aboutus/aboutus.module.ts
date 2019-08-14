import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { AboutuscomComponent } from './aboutuscom/aboutuscom.component';

@NgModule({
  declarations: [AboutuscomComponent],
  imports: [
    CommonModule,
    AboutusRoutingModule
  ]
})
export class AboutusModule { }
