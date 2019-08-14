import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbreadviewhousesService {

  constructor(private http:HttpClient) { }
  readdata1():Observable<any[]>
  {
      return this.http.get<any[]>('owner/viewhouses1');
  }
  readdata2():Observable<any[]>
  {
      return this.http.get<any[]>('owner/viewhouses2');
  }

  readdata3():Observable<any[]>
  {
      return this.http.get<any[]>('owner/viewprofile1');
  }
  readdata4():Observable<any[]>
  {
    return this.http.get<any[]>('tenant/viewprofile2');
  }
  readdata5():Observable<any[]>
  {
    return this.http.get<any[]>('tenant/paymenthistory2');
  }
  readdata6():Observable<any[]>
  {
    return this.http.get<any[]>('tenant/tenantpayments');
  }
  readdata7():Observable<any[]>
  {
    return this.http.get<any[]>('tenant/searchnewhouses');
  }

  readdata8():Observable<any[]>
  {
    return this.http.get<any[]>('owner/responcefromowner ');
  }
  adminownerregcollection():Observable<any[]>
  {
    return this.http.get<any[]>('admin/ownerregisterddetails ');
  }
  admintenantregcollection():Observable<any[]>
  {
    return this.http.get<any[]>('admin/tenantregisterddetails ');
  }
  
  messageofowner2():Observable<any[]>
  {
    return this.http.get<any[]>('tenant/messageofowner ');
  }
  
    
  admin():Observable<any[]>
  {
    return this.http.get<any[]>('admin/registration ');
  }
    
  admin2():Observable<any[]>
  {
    return this.http.get<any[]>('admin/registration2 ');
  }
  
  

}
