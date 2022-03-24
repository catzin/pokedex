import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListadoPokemonComponent } from "./components/listado-pokemon/listado-pokemon.component";


const routes : Routes = [

    {
        path:'',
        children:[
            {
                path:'listado',
                component:ListadoPokemonComponent
            }
        ]
    }

];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PokemonsRoutingModule{}