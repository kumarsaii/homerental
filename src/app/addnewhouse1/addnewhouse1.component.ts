import { Component, OnInit } from '@angular/core';
import { Dataservice1Service } from '../dataservice1.service';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-addnewhouse1',
  templateUrl: './addnewhouse1.component.html',
  styleUrls: ['./addnewhouse1.component.css']
})
export class Addnewhouse1Component implements OnInit {

  constructor(private ds:Dataservice1Service,private http:HttpClient, private ls:LoginService) { }
 email;
 loggedUser;
  ngOnInit() {
    this.loggedUser=this.ls.sendLoggedUser()
    this.email=this.loggedUser.email
   // console.log(this.email)
   
  }
  l:any;
 b:any[]=[];
 sendtoservice(x)
 {
  // console.log(x)
   this.b.push(x)
  //  this.ds.receivefromowner(this.b)
   this.http.post('/owner/savedetails3',x).subscribe(res=>
    {
      alert(res['message'])
    })
 }
 
 
}
