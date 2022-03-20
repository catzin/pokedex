import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-profile',
  templateUrl: './sidenav-profile.component.html',
  styleUrls: ['./sidenav-profile.component.css']
})
export class SidenavProfileComponent implements OnInit {


  user : string = "ASHK123";
  level: number = 1;
  legend : string = "Work hard on your test";


  constructor() { }

  ngOnInit(): void {
  }

}
