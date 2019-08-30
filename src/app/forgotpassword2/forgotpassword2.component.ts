import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword2',
  templateUrl: './forgotpassword2.component.html',
  styleUrls: ['./forgotpassword2.component.css']
})
export class Forgotpassword2Component implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }
  forgot1(data)
  {//console.log(data)
   
    this.http.post('/tenant/forgotpassword',data).subscribe(res=>
      {
        alert(res['message'])
       if(res['message']=="user found")
       {
        this.router.navigate(['/enterotp2'])
       }else
       {alert('email not found')
        this.router.navigate(['/forgotpassword2'])
       }
      })
      if(data.email==0)
      {
        alert('enter ur registered mail')
      }}
      
}
