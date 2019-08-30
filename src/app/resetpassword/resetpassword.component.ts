import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }
  resetpassword(data)
  {
    this.http.put('/owner/resetpassword',data).subscribe(res=>
      {
        alert(res['message'])
        if(res['message']=="password changed")
        {
          this.router.navigate(['/login'])
        }
      })
  }
}
