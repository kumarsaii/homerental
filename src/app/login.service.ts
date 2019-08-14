import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //to check login start of owner
  isloggedin:boolean=false;
  loggedUser;
  

  constructor(private http:HttpClient) { }
  dologin(data):Observable <any>
  {
    return this.http.post<any>('owner/login',data)
  }
  dologin1(data):Observable <any>
  {
    return this.http.post<any>('tenant/login2',data)
  }
  loggedInUser(user){
    this.loggedUser=user[0];
  }
  sendLoggedUser(){
    return this.loggedUser;
  }
  loggedInUser1(user){
    this.loggedUser=user[0];
  }
  sendLoggedUser1(){
    return this.loggedUser;
  }
  
}


