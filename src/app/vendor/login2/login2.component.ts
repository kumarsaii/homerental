import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  constructor(private router:Router,private http:HttpClient,private ds:LoginService) { }

  ngOnInit() {
  }
  login4(data)
  {
    console.log(data)
    this.http.post('tenant/login2',data).subscribe(res=>
      {
        console.log(res)
        if(res['message']==='invalid username')
        {
          alert('invalid user name')
          
          this.router.navigate(['/login2'])
        }
        if(res['message']==='invalid password')
        {
          alert('invalid password')
          this.router.navigate(['/login2'])
        }
        if(res['message']==='success')
        {
          alert('successfully loged')
          alert(res['message']);
          localStorage.setItem('idToken',res['token']);
          this.ds.loggedInUser(res['data'])
          this.ds.isloggedin=true;
          this.router.navigate(['/profile2'])
        }
      })
    



  }
}
