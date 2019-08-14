import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile2',
  templateUrl: './profile2.component.html',
  styleUrls: ['./profile2.component.css']
})
export class Profile2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

  }

  logout2(){
    localStorage.removeItem("idToken")
    this.router.navigate(['/corosel'])
  }
}
