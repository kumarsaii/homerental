import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DbreadviewhousesService } from '../dbreadviewhouses.service';

@Component({
  selector: 'app-paymentshistory1',
  templateUrl: './paymentshistory1.component.html',
  styleUrls: ['./paymentshistory1.component.css']
})
export class Paymentshistory1Component implements OnInit {

  constructor(private ds:DbreadviewhousesService,private http:HttpClient) { }
 data:any[]=[];
  ngOnInit() {

    this.ds.readdata2().subscribe(data=>
      {
        this.data=data['message'];
        //console.log(data)
      })
  }
  delete(x)
  {
    //console.log(x)
    this.http.delete(`/owner/deletehistory/${x}`).subscribe(res=>
      {
        alert(res['message'])
        this.data=res['data']
      })
  }
  

}
