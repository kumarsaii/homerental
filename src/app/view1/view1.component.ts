import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  b:boolean=false;
  objecttomodify:object
  edit1(data)
  {
    this.objecttomodify=data;
    console.log(this.objecttomodify)
    this.b=true
  }







}
