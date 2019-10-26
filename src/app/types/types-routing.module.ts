import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TypesComponent} from "./types.component";
import {PokemonsComponent} from "../pokemons/pokemons.component";



const routes: Routes = [
	{path: '', component: TypesComponent},
	// {path: 'pokemons/:types', component: PokemonsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypesRoutingModule { }
