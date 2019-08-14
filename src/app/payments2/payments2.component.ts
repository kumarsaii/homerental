import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-payments2',
  templateUrl: './payments2.component.html',
  styleUrls: ['./payments2.component.css']
})
export class Payments2Component implements OnInit {

  constructor(private http:HttpClient, private ls:LoginService) { }
  loggedUser;
  email;
  ngOnInit() {
    this.loggedUser=this.ls.sendLoggedUser()
    this.email=this.loggedUser.email
    console.log(this.email)
  }
  payments2(data)
  {
    console.log(data)
  this.http.post('/tenant/savedetails1',data).subscribe(res=>
    {
      alert(res['message'])
    })
  }
}
