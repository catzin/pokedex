import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { pokeResult } from 'src/app/interfaces/pokeResult.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
 
  url : string = 'https://pokeapi.co/api/v2/pokemon';
 

  constructor(private http: HttpClient) { }

  getPokemon(urlPokemon : string):Observable<Pokemon>{
    return this.http.get<Pokemon>(urlPokemon);
   
  }

  getPokemons(limit : number , end : number):Observable<pokeResult>{

    return this.http.get<pokeResult>(this.url+`?limit=${limit}&offset=${end}`);

  }



  



 
}
