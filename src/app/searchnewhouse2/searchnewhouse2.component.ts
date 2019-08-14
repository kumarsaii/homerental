import { Component, OnInit } from '@angular/core';
import { Dataservice1Service } from '../dataservice1.service';
import { DbreadviewhousesService } from '../dbreadviewhouses.service';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-searchnewhouse2',
  templateUrl: './searchnewhouse2.component.html',
  styleUrls: ['./searchnewhouse2.component.css']
})
export class Searchnewhouse2Component implements OnInit {

  constructor(private ds:Dataservice1Service,private db:DbreadviewhousesService, private ls:LoginService,private http:HttpClient) { }

  S:any[]=[];
  g:any;
  loggedUser;
  searchterm:any;
  ngOnInit() {
    // this.e=this.ds.sendtotenant();
   
    
    this.db.readdata7().subscribe(data=>
      {
        this.S=data['message'];
        //console.log(this.e)
      })
   
    //this.g=this.ds.finaldesion()
    //console.log(this.g)


    //msg from owner
    // this.db.messageofowner2().subscribe(data=>
    //   {
    //     this.S=data["message"];
    //     console.log(data)
    //   })
    
  

  }
  b:any
  c:boolean=true
  senddata(x,owneremail)
  {
    this.c=!this.c
 //this.b=x;
 console.log(x);
    this.loggedUser=this.ls.sendLoggedUser()
    this.loggedUser.response=x;
    this.loggedUser.owneremail=owneremail;
    console.log(this.loggedUser);

    this.http.post("/tenant/responcefromtenant",this.loggedUser).subscribe(res=>
      {
        alert(res['message'])
      })


 this.ds.responcetoservice(this.b)

  }
  
 



}
