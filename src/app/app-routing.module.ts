import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoroselComponent } from './corosel/corosel.component';
import { AdmincomponentComponent } from './adminmodule/admincomponent/admincomponent.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/corosel',
    pathMatch: 'full'
  },
  {
    path: "corosel",
    component: CoroselComponent
  },
  {
    path: "admin",
    component: AdmincomponentComponent
  },
  {
    path: "adminprofile",
    component: AdminprofileComponent
  },
  // { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
