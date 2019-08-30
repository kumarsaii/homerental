import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router ) { }

  ngOnInit() {
  }
  forgot(data)
  {//console.log(data)
   
    this.http.post('/owner/forgotpassword',data).subscribe(res=>
      {
        alert(res['message'])
       if(res['message']=="user found")
       {
        this.router.navigate(['/enterotp'])
       }else
       {alert('email not found')
        this.router.navigate(['/forgotpassword'])
       }
      })
      if(data.email==0)
      {
        alert('enter ur registered mail')
      }
      
  }
}
