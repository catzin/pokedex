import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { pokeResult } from 'src/app/interfaces/pokeResult.interface'
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-listado-pokemon',
  templateUrl: './listado-pokemon.component.html',
  styleUrls: ['./listado-pokemon.component.css']
})
export class ListadoPokemonComponent implements OnInit {

  pokemonData : Pokemon[] = [];
  pokeResult !: pokeResult;
  isMobile : boolean = false;
  isDesktop : boolean = true;
  limit : number = 6;
  offset : number = 0;
  page  : number = 0;


  constructor(private pokemons: PokemonService, private breakPointObserver:BreakpointObserver) { }

  ngOnInit(): void {

    this.next();
    //this.pokemonData = this.pokemons.get();
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


  next():void{
  
    this.pokemonData = [];
    this.pokemons.getPokemons(this.limit,this.offset).subscribe(r => {
      r.results.forEach( (p , i) => {
        this.pokemons.getPokemon(p.url).subscribe( rp =>  this.pokemonData.push(rp) );
      })
    } );
    this.offset = this.offset + 6;
    this.page++;

  }

  prev():void{

    if(this.page > 1){

      this.pokemonData = [];
      this.offset = this.offset - 6;

      this.pokemons.getPokemons(this.limit,this.offset).subscribe(r => {
        r.results.forEach( (p , i) => {
          this.pokemons.getPokemon(p.url).subscribe( rp =>  this.pokemonData.push(rp) );
        })
      } );

      this.page--;

    }
    
  }



}
