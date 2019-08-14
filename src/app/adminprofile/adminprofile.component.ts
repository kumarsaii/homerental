import { Component, OnInit } from '@angular/core';
import { DbreadviewhousesService } from '../dbreadviewhouses.service';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {

  constructor(private ds:DbreadviewhousesService) { }
data:any[]=[];
x:any[]=[];
  ngOnInit() {
     
    this.ds.admin().subscribe(data=>
      {
        this.data=data['message'];
        //console.log(this.e)
      })


    this.ds.admin2().subscribe(data=>
      {
        this.x=data['message'];
        //console.log(this.e)
      })
  }

}
