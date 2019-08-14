import { Component, OnInit } from '@angular/core';
import { DbreadviewhousesService } from '../dbreadviewhouses.service';

@Component({
  selector: 'app-ownermessage',
  templateUrl: './ownermessage.component.html',
  styleUrls: ['./ownermessage.component.css']
})
export class OwnermessageComponent implements OnInit {
s:any[]=[];
  constructor(private ds:DbreadviewhousesService) { }

  ngOnInit () {

    this.ds.messageofowner2().subscribe(data=>
      {
        this.s=data['message'];
        //console.log(this.e)
      })
  }

}
