import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Login2Component } from '../vendor/login2/login2.component';
import { Register2Component } from '../vendor/register2/register2.component';
import { Profile2Component } from '../login/profile2/profile2.component';
import { View2Component } from '../view2/view2.component';
import { Edit2Component } from '../edit2/edit2.component';
import { Payments2Component } from '../payments2/payments2.component';
import { Logout2Component } from '../logout2/logout2.component';
import { Wallet2Component } from '../wallet2/wallet2.component';
import { Searchnewhouse2Component } from '../searchnewhouse2/searchnewhouse2.component';

const routes: Routes = [{path:"login2",
                        component:Login2Component},
                         {path:'register2',
                          component:Register2Component},
                     
                        
                          
                           ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantRoutingModule { }
