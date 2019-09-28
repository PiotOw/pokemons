import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypesRoutingModule} from './types-routing.module';
import {TypesComponent} from './types.component';
import {TypeEmblemModule} from '../shared/type-emblem/type-emblem.module';
import {PokemonMaterialModule} from "../pokemon-material.module";


@NgModule({
	declarations: [
		TypesComponent,
	],
	imports: [
		CommonModule,
		TypesRoutingModule,
		TypeEmblemModule,
		PokemonMaterialModule,
	],
	bootstrap: [TypesComponent],
	exports: [
		TypesComponent,
	]
})
export class TypesModule {
}
