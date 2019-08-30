import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enterotp',
  templateUrl: './enterotp.component.html',
  styleUrls: ['./enterotp.component.css']
})
export class EnterotpComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }
  verify(data)
  {
    
    this.http.post('owner/verifyotp',data).subscribe(res=>{
      alert(res['message'])
      if(res['message']=="verifiedOTP")
      {
       this.router.navigate(['/resetpassword'])
      }else
      {
       this.router.navigate(['/verifyotp'])
      }
    })
     
       
  }
}
