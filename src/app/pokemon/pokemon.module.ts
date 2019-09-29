import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonComponent} from './pokemon.component';
import {StatCardModule} from "../shared/stat-card/stat-card.module";
import {TypeEmblemModule} from "../shared/type-emblem/type-emblem.module";


@NgModule({
	declarations: [PokemonComponent],
	imports: [
		CommonModule,
		StatCardModule,
		TypeEmblemModule
	],
	exports: [PokemonComponent]
})
export class PokemonModule {
}
