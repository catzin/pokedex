import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavProfileComponent } from './components/sidenav-profile/sidenav-profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarProfileComponent } from './components/navbar-profile/navbar-profile.component';



@NgModule({
  declarations: [SidenavComponent, SidenavProfileComponent, NavbarComponent, NavbarProfileComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SidenavComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
