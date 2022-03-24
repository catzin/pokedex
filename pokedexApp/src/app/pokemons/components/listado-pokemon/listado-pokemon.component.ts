import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-listado-pokemon',
  templateUrl: './listado-pokemon.component.html',
  styleUrls: ['./listado-pokemon.component.css']
})
export class ListadoPokemonComponent implements OnInit {

  pokemonData : Pokemon[] = [];
  isMobile : boolean = false;
  isDesktop : boolean = true;

  constructor(private pokemons: PokemonService, private breakPointObserver:BreakpointObserver) { }

  ngOnInit(): void {

    this.pokemons.getAllPokemons();
    this.pokemonData = this.pokemons.get();

    this.breakPointObserver.observe(['(min-width: 768px)'])
      .subscribe((state : BreakpointState) =>{

        if(state.matches){
         
          this.isMobile = false;
          this.isDesktop = true;
         
        }
        else{
          //console.log('Es mobile');
          this.isMobile = true;
          this.isDesktop = false;
         
        }

      });
  }

}
