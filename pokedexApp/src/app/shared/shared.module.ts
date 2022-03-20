import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavProfileComponent } from './components/sidenav-profile/sidenav-profile.component';



@NgModule({
  declarations: [SidenavComponent, SidenavProfileComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SidenavComponent
  ]
})
export class SharedModule { }
