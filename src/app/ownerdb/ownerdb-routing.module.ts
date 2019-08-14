import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Profile1Component } from './profile1/profile1.component';
import { Edit1Component } from '../profile1/edit1/edit1.component';
import { View1Component } from '../view1/view1.component';
import { Viewhouses1Component } from '../viewhouses1/viewhouses1.component';
import { Viewtenant1Component } from '../viewtenant1/viewtenant1.component';
import { Payments1Component } from '../payments1/payments1.component';
import { Paymentshistory1Component } from '../paymentshistory1/paymentshistory1.component';
import { Logout1Component } from '../logout1/logout1.component';
import { Addnewhouse1Component } from '../addnewhouse1/addnewhouse1.component';



const routes: Routes = [{path:"profile1",
                          component:Profile1Component},
                        {path:"edit1",
                         component:Edit1Component},
                         {path:"view1",
                          component:View1Component},
                          {path:"viewhouses1",
                           component:Viewhouses1Component},
                        {path:"viewtenant1",
                         component:Viewtenant1Component},
                         {path:"payments1",
                         component:Payments1Component},
                         {path:"paymentshistory1",
                        component:Paymentshistory1Component},
                        {path:"logout1",
                         component:Logout1Component},
                         {path:"addnewhouse1",
                          component:Addnewhouse1Component }

                        
                                
                                
                                
                                                   ]
                         
                            
                         
                         
                       

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerdbRoutingModule { }
