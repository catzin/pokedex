import { Component, OnInit } from '@angular/core';
import { Pokemon } from './interfaces/pokemon.interface';
import { PokemonService } from './pokemons/services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokedexApp';
  pokemonData : Pokemon[] = [];
  constructor(private pokemons: PokemonService) { }

  ngOnInit(): void {

    this.pokemons.getAllPokemons();
    this.pokemonData = this.pokemons.get();

  }


}
