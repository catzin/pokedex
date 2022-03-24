
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'pokedexApp';
  isMobile : boolean = false;
  isDesktop : boolean = true;

  constructor(private breakObserver : BreakpointObserver) { 

    this.breakObserver.observe(['(min-width: 768px)']).subscribe(
      (state : BreakpointState) =>{

        if(state.matches){

          this.isMobile = false;
          this.isDesktop = true;

        }
        else{

          this.isMobile = true;
          this.isDesktop = false;

        }
      }
    )
  }

  ngOnInit(): void {

   



  }


}
