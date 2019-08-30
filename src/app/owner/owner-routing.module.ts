import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegiterComponent } from './regiter/regiter.component';
import { ProfileComponent } from '../login/profile/profile.component';
import { Profile1Component } from '../ownerdb/profile1/profile1.component';
import { NotificationComponent } from '../notification/notification.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';

 const routes: Routes = [{
//    path: '',
//    redirectTo: '/login',
//    pathMatch: 'full'}
 
  path: "login",
  component: LoginComponent
},
{
  path: "regiter",
  component: RegiterComponent
},
{
  path: "profile1",
  component: Profile1Component
},{
  path: "forgotpassword",
  component: ForgotpasswordComponent
},
{
  path: "notification",
  component: NotificationComponent
 },// { path: '**', component: PagenotfoundComponent }
];






@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
