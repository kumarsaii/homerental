import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantdbRoutingModule } from './tenantdb-routing.module';
import { FindPipe } from './find.pipe';

@NgModule({
  declarations: [FindPipe],
  imports: [
    CommonModule,
    TenantdbRoutingModule
  ]
})
export class TenantdbModule { }
