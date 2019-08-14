import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoroselComponent } from './corosel/corosel.component';
import { OwnerModule } from './owner/owner.module';
import { TenantModule } from './tenant/tenant.module';
import { AboutusModule } from './aboutus/aboutus.module';
import { ProfileComponent } from './login/profile/profile.component';
import { Profile2Component } from './login/profile2/profile2.component';
import { Login2Component } from './vendor/login2/login2.component';
import { Register2Component } from './vendor/register2/register2.component';
import { Pofile2Component } from './vendor/pofile2/pofile2.component';

import { Edit1Component } from './profile1/edit1/edit1.component';
import { View1Component } from './view1/view1.component';
import { Viewhouses1Component } from './viewhouses1/viewhouses1.component';
import { Viewtenant1Component } from './viewtenant1/viewtenant1.component';
import { Payments1Component } from './payments1/payments1.component';
import { Paymentshistory1Component } from './paymentshistory1/paymentshistory1.component';
import { Logout1Component } from './logout1/logout1.component';
import { Addnewhouse1Component } from './addnewhouse1/addnewhouse1.component';
import { View2Component } from './view2/view2.component';
import { Edit2Component } from './edit2/edit2.component';
import { Payments2Component } from './payments2/payments2.component';
import { Logout2Component } from './logout2/logout2.component';
import { Wallet2Component } from './wallet2/wallet2.component';
import { Searchnewhouse2Component } from './searchnewhouse2/searchnewhouse2.component';
import { NotificationComponent } from './notification/notification.component';

import { AdminModule } from './admin/admin.module';
import { AdmincomponentComponent } from './adminmodule/admincomponent/admincomponent.component';
import { searchpipe } from './search.pipe';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { OwnermessageComponent } from './ownermessage/ownermessage.component';
import { AuthorizationserviceService } from './authorizationservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoroselComponent,
    ProfileComponent,
    Profile2Component,
    Login2Component,
    Register2Component,
    Pofile2Component,
   
    Edit1Component,
   
    View1Component,
   
    Viewhouses1Component,
   
    Viewtenant1Component,
   
    Payments1Component,
   
    Paymentshistory1Component,
   
    Logout1Component,
   
    Addnewhouse1Component,
   
    View2Component,
   
    Edit2Component,
   
    Payments2Component,
   
    Logout2Component,
   
    Wallet2Component,
   
    Searchnewhouse2Component,
   
    NotificationComponent,
   
    
   
    AdmincomponentComponent,
   
    searchpipe,
   
    AdminprofileComponent,
   
    PagenotfoundComponent,
   
    OwnermessageComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwnerModule,
    TenantModule,
    AboutusModule,
    FormsModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthorizationserviceService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
