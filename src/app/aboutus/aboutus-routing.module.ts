import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutuscomComponent } from './aboutuscom/aboutuscom.component';

const routes: Routes = [{path:"aboutuscom",
                        component:AboutuscomComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutusRoutingModule { }
