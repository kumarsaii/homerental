import { Component, OnInit } from '@angular/core';
import { DbreadviewhousesService } from 'src/app/dbreadviewhouses.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admincomponent',
  templateUrl: './admincomponent.component.html',
  styleUrls: ['./admincomponent.component.css']
})
export class AdmincomponentComponent implements OnInit {

  constructor(private ds:DbreadviewhousesService,private http:HttpClient,private router:Router,) { }
data:any;
data1:any;
  ngOnInit() {
    
    

  }
  
  adminlogin(data)
  
  {
    console.log(data)
    if(data.email!=="admin")
    {
      alert("enter valid  email")
    }
    else if(data.password!=="123")
    {
      alert("enter valid password")
    }
   else{
      this.router.navigate(['/adminprofile'])


      //this.http.post('/admin/adminlogin',data).subscribe(res=>
       // {
         // alert(res['message'])
      //  })
    }
   
  }
}
