import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }
 change1(x)
 {
   //console.log(x)

  ///form validation
   if(x.email==0)
   {
     alert("Email is required")
   }
   else if(x.password==0)
   {
     alert("password is required")
   }


   else{
  
  this.http.post("tenant/registerdetails",x).subscribe(res=>
    {
      alert(res['message'])
    })

    //this.router.navigate(['/login2'])
    
  }
 }
}
