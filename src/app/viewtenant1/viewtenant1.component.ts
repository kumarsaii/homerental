import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { Dataservice1Service } from '../dataservice1.service';
import { Observable } from 'rxjs';
import { DbreadviewhousesService } from '../dbreadviewhouses.service';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-viewtenant1',
  templateUrl: './viewtenant1.component.html',
  styleUrls: ['./viewtenant1.component.css']
})
export class Viewtenant1Component implements OnInit {

  constructor(private ds:Dataservice1Service,private d:DbreadviewhousesService,private http:HttpClient,private ls:LoginService) { }
  data:any[];
 u:any;
resmail;
ownerdetails;
  ngOnInit() {
 //this.m=this.ds.responcetoowner()
 this.d.readdata8().subscribe(data=>
  {
    this.data=data['message'];
    console.log(this.data)
  })
  }

  //repsonce from owner//
  // senddata(x)
  // {
  //   this.c=!this.c
  //   this.u=x
  //   console.log(this.u)
  //   this.ds.acceptanceorrejection(this.u)
  

  // }

  sendownermsg(z,x)
  { 
    console.log(x,z)
  ///this.tenantemail=email
  
  this.resmail=this.ls.sendLoggedUser1()
      this.resmail.responce=z;
  this.resmail.tenantemail=x;
    
   delete this.resmail._id;
    console.log(this.resmail);

  
    this.http.post("/owner/responceofowner",this.resmail).subscribe(res=>
      {
        alert(res['message'])
      })
  }

}
