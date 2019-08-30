import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enterotp2',
  templateUrl: './enterotp2.component.html',
  styleUrls: ['./enterotp2.component.css']
})
export class Enterotp2Component implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }
  verify1(data)
  {
    
    this.http.post('tenant/verifyotp',data).subscribe(res=>{
      alert(res['message'])
      if(res['message']=="verifiedOTP")
      {
       this.router.navigate(['/resetpassword2'])
      }else
      {
       this.router.navigate(['/enterotp2'])
      }
    })
     
       
  }
}
