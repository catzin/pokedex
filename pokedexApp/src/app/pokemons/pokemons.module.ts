import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { ListadoPokemonComponent } from './components/listado-pokemon/listado-pokemon.component';
import { PokemonsRoutingModule } from './pokemons-routing.module';


@NgModule({
  declarations: [PokemonCardComponent, ListadoPokemonComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PokemonsRoutingModule
    
  ],
  exports:[
    PokemonCardComponent,
    
  ]
})
export class PokemonsModule { }
