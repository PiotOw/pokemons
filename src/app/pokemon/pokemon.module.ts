import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonComponent} from './pokemon.component';
import {StatCardModule} from "../shared/stat-card/stat-card.module";
import {TypeEmblemModule} from "../shared/type-emblem/type-emblem.module";
import {OverviewModule} from "./overview/overview.module";
import {StatsComponent} from "./stats/stats.component";


@NgModule({
	declarations: [PokemonComponent],
	imports: [
		CommonModule,
		StatCardModule,
		TypeEmblemModule,
		OverviewModule,
	],
	exports: [PokemonComponent]
})
export class PokemonModule {
}
