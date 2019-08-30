import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Profile2Component } from '../login/profile2/profile2.component';
import { View2Component } from '../view2/view2.component';
import { Edit2Component } from '../edit2/edit2.component';
import { Payments2Component } from '../payments2/payments2.component';
import { Logout2Component } from '../logout2/logout2.component';
import { Wallet2Component } from '../wallet2/wallet2.component';
import { Searchnewhouse2Component } from '../searchnewhouse2/searchnewhouse2.component';
import { OwnermessageComponent } from '../ownermessage/ownermessage.component';
import { Forgotpassword2Component } from '../forgotpassword2/forgotpassword2.component';
import { Enterotp2Component } from '../enterotp2/enterotp2.component';
import { Resetpassword2Component } from '../resetpassword2/resetpassword2.component';

const routes: Routes = [
  {
    path: "profile2",
    component: Profile2Component
  }, {
    path: "view2",
    component: View2Component
  },
  {
    path: "edit2",
    component: Edit2Component
  }, {
    path: "payments2",
    component: Payments2Component
  },
  {
    path: "logout2",
    component: Logout2Component
  }, {
    path: "wallet2",
    component: Wallet2Component
  },
  {
    path: "searchnewhouse2",
    component: Searchnewhouse2Component
  },
  {
    path: "ownermessage",
    component: OwnermessageComponent
  },
  {
    path:"forgotpassword2",
    component:Forgotpassword2Component
  },
{
  path:"enterotp2",
  component:Enterotp2Component
},
{
  path:"resetpassword2",
  component:Resetpassword2Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantdbRoutingModule { }
