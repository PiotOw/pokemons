import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
	{path: '', loadChildren: './types/types.module#TypesModule'},
	{path: 'pokemons', loadChildren: './pokemons/pokemons.module#PokemonsModule'},
	{path: 'pokemon/:id', loadChildren: './pokemon/pokemon.module#PokemonModule'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
