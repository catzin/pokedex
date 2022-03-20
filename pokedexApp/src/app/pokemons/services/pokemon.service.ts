import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
 
  url : string = 'https://pokeapi.co/api/v2/pokemon/';
  dataPokemon : Pokemon[] = [];

  constructor(private http: HttpClient) { }

  getPokemon(idPokemon : string):Observable<Pokemon>{
    return this.http.get<Pokemon>(this.url+idPokemon);
   
  }

  getAllPokemons():any{

    for(let i = 0; i < 20; i++){
      this.getPokemon((i+1).toString()).subscribe( pk => this.dataPokemon.push(pk) )
    }
  }

  get(){
    return this.dataPokemon;
  }

  



 
}
