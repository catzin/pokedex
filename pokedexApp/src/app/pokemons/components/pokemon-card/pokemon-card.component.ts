import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  
    //console.log(this.dataPokemon.name , this.dataPokemon.types, this.dataPokemon.sprites.other?.dream_world.front_default);
  @Input() cardPokemon !: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

}
