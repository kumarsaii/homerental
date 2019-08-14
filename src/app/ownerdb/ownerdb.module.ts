import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerdbRoutingModule } from './ownerdb-routing.module';
import { Profile1Component } from './profile1/profile1.component';

import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [Profile1Component],
  imports: [
    CommonModule,
    OwnerdbRoutingModule,
    FormsModule
  ]
})
export class OwnerdbModule { }
