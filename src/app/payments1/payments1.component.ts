import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-payments1',
  templateUrl: './payments1.component.html',
  styleUrls: ['./payments1.component.css']
})
export class Payments1Component implements OnInit {

  constructor(private http:HttpClient,private ls:LoginService) { }
email;
loggedUser;
  ngOnInit() {this.loggedUser=this.ls.sendLoggedUser()
    this.email=this.loggedUser.email
    //console.log(this.email)
  }
  payments(data)
  {
    //console.log(data)
    this.http.post('/owner/savedetails4',data).subscribe(res=>
      {
        alert(res['message'])
      })
  }
}
