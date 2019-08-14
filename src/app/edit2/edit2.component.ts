import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { DbreadviewhousesService } from '../dbreadviewhouses.service';

@Component({
  selector: 'app-edit2',
  templateUrl: './edit2.component.html',
  styleUrls: ['./edit2.component.css']
})
export class Edit2Component implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    
  }
  edit2(data)
  {
    console.log(data)
this.http.post('/tenant/edit2',data).subscribe(res=>
  {
    alert(res["message"])
  })
  }
  

}
