import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonsRoutingModule} from './pokemons-routing.module';
import {PokemonsComponent} from './pokemons.component';
import {PokemonListElementComponent} from './pokemon-list-element/pokemon-list-element.component';
import {PokemonModule} from "../pokemon/pokemon.module";


@NgModule({
	declarations: [PokemonsComponent, PokemonListElementComponent],
	imports: [
		CommonModule,
		PokemonsRoutingModule,
		PokemonModule
	]
})
export class PokemonsModule {
}
