import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword2',
  templateUrl: './resetpassword2.component.html',
  styleUrls: ['./resetpassword2.component.css']
})
export class Resetpassword2Component implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }
  resetpassword2(data)
  {
    this.http.put('/tenant/resetpassword',data).subscribe(res=>
      {
        alert(res['message'])
        if(res['message']=="password changed")
        {
          this.router.navigate(['/login2'])
        }
      })
  }
}
