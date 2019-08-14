import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-regiter',
  templateUrl: './regiter.component.html',
  styleUrls: ['./regiter.component.css']
})
export class RegiterComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  change(data)
  {
    if(data.email==0)
    {
      alert("email is required")
    }
    else if(data.password==0)
    {
      alert("password is required")
    }

    else
    {
       
    this.http.post('/owner/savedetails',data).subscribe(res=>
      {
        alert(res["message"])
      })
    }
    
    
  }
}