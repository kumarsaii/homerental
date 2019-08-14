import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DbreadviewhousesService } from '../dbreadviewhouses.service';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {

  constructor(private ds:DbreadviewhousesService,private http:HttpClient) { }
x:any[]=[];
objecttoupdate;
b:boolean=true;
  ngOnInit() {
    this.ds.readdata4().subscribe(data=>
      {
        this.x=data['message']
        console.log(this.x)
      })
  }

  updateData(i)
  {
    this.objecttoupdate=i;
    console.log(this.objecttoupdate);
    this.b=false;
  }
  savedata(data)
  {
    console.log(data)
    this.b=true;
    this.http.put('/tenant/modifytenant2',data).subscribe(res=>
      {
        if(res["message"]='success')
        {
          alert('successfully updated')
        }
      })
  }
}
