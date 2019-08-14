import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbreadviewhousesService } from 'src/app/dbreadviewhouses.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit1',
  templateUrl: './edit1.component.html',
  styleUrls: ['./edit1.component.css']
})
export class Edit1Component implements OnInit {

  constructor(private ds:DbreadviewhousesService,private http:HttpClient) { }
x:any[]=[];
objecttoupdate;
b:boolean=true;
  ngOnInit() {
    this.ds.readdata3().subscribe(data=>
      {
         if(data['message']==='unauthorized access'){
           alert(data['message'])
         }
         else{

         this.x=data['message']
       // console.log(data)
        }
        
      })
  }
  updateData(i)
  {
    this.objecttoupdate=i;
  //  console.log(this.objecttoupdate);
    this.b=false;
  }
  savedata(data)
  {
   // console.log(data)
    this.b=true;
    this.http.put('/owner/modifyownerprofile',data).subscribe(res=>
      {
        if(res["message"]='success')
        {
          alert('successfully updated')
        }
      })
  }

}
