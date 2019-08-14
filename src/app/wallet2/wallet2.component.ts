import { Component, OnInit } from '@angular/core';
import { DbreadviewhousesService } from '../dbreadviewhouses.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wallet2',
  templateUrl: './wallet2.component.html',
  styleUrls: ['./wallet2.component.css']
})
export class Wallet2Component implements OnInit {

  constructor(private ds:DbreadviewhousesService,private http:HttpClient) { }
x:any[]=[];
  ngOnInit() {
    this.ds.readdata5().subscribe(data=>
      {
        this.x=data['message']
      })
  }
  deletehistory2(x)
  {
    console.log(x)
    this.http.delete(`/tenant/deletehisory/${x}`).subscribe(res=>
      {
        alert(res['message'])
        this.x=res['data']
      })
  }

}
