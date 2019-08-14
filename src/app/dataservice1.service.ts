import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Dataservice1Service {

  constructor( ) { }
  d:any;
  m:any;
  o:any;
  l:any;
 
 //owner to tenant//
//   receivefromowner(c)
//  {
//    this.d=c;
//  }
//  sendtotenant()
//  {
//    return this.d; 
//   }

  // responce from tenant//
  responcetoservice(n)
  {
    this.m=n;
  }
    responcetoowner()
    {
      return this.m
    }
//responce from owner acceptance//
acceptanceorrejection(l)
{
 this.o=l;
 console.log(this.o)
}
 finaldesion()
 {
   return this.o
 }


}
