import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router,private ds:LoginService) { }

  ngOnInit() {
  }
  
  login(data)
  {
    
    this.http.post('/owner/loginowner',data).subscribe(res=>
      {
       // console.log(res)
        if(res['message']==='invalid username')
        {
          alert('invalid user name')
          this.router.navigate(['/login'])
        }
        if(res['message']==='invalid password')
        {
          alert('invalid password')
          this.router.navigate(['/login'])

        }
        if(res['message']==='success')
        {
          alert(res['message']);
          localStorage.setItem('idToken',res['token']);
          this.ds.isloggedin=true;
         
         
          this.ds.loggedInUser1(res['data'])
         /* alert('successfully loged')*/
          this.router.navigate(['profile1'])
        }
      })
    



  }
    
   
  
  
  
}
