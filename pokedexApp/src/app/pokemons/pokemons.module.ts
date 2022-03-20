import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';


@NgModule({
  declarations: [PokemonCardComponent],
  imports: [
    CommonModule,
    HttpClientModule
    
  ],
  exports:[
    PokemonCardComponent,
    
  ]
})
export class PokemonsModule { }
