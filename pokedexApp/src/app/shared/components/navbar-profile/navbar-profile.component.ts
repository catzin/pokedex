import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-profile',
  templateUrl: './navbar-profile.component.html',
  styleUrls: ['./navbar-profile.component.css']
})
export class NavbarProfileComponent implements OnInit {

  user : string = "ASHK123";
  level: number = 1;
  legend : string = "Work hard on your test";

  constructor() { }

  ngOnInit(): void {
  }

}
