import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPokemonComponent } from './pokemons/components/listado-pokemon/listado-pokemon.component';

const routes: Routes = [
  {

   path:'',
   //loadChildren: () => import('./pokemons/pokemons.module').then(m => m.PokemonsModule)
   component:ListadoPokemonComponent
   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
