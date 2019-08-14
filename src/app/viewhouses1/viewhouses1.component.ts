import { Component, OnInit } from '@angular/core';
import { Dataservice1Service } from '../dataservice1.service';
import { DbreadviewhousesService } from '../dbreadviewhouses.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewhouses1',
  templateUrl: './viewhouses1.component.html',
  styleUrls: ['./viewhouses1.component.css']
})
export class Viewhouses1Component implements OnInit {

  constructor(private ds:DbreadviewhousesService,private http:HttpClient) { }
  data:any[]=[];
  ngOnInit() {
    
    this.ds.readdata1().subscribe(data=>
      {
        this.data=data['message'];
        console.log(data)
      })
     
  }
  delete(x)
  {
    console.log(x);
    this.http.delete(`/owner/delete/${x}`).subscribe(res=>
      {
        alert(['document deleted'])
        this.data=res['data']
      })
  }
 
}
