import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { nextTick } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationserviceService implements HttpInterceptor {

 
  constructor() { }
  intercept(req:HttpRequest<any>,next:HttpHandler):
      Observable<HttpEvent<any>>
      {
        //read token from local storage
        const idToken=localStorage.getItem("idToken")
        //if token is found ,it adds it header of request object
        console.log(idToken)
        if(idToken)
        {
          
          const cloned=req.clone({
            headers:req.headers.set("Authorization","Bearer "+idToken)
          })
          //and then forward the request object cloned with token
          return next.handle(cloned)
        }
        else
        {
          //if token is not found forward yhe same req.object
          return next.handle(req)
        }
      }
}



