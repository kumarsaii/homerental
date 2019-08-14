import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from'@angular/forms';
import { OwnerRoutingModule } from './owner-routing.module';
import { LoginComponent } from './login/login.component';
import { RegiterComponent } from './regiter/regiter.component';

import { OwnerdbModule } from '../ownerdb/ownerdb.module';

@NgModule({
  declarations: [LoginComponent, RegiterComponent],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    FormsModule,
    OwnerdbModule
  ]
})
export class OwnerModule { }
