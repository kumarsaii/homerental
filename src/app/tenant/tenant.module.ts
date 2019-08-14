import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from'@angular/forms';
import { TenantRoutingModule } from './tenant-routing.module';
import { from } from 'rxjs';
import { TenantdbModule } from '../tenantdb/tenantdb.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TenantRoutingModule,
    FormsModule,
    TenantdbModule
  ]
})
export class TenantModule { }
