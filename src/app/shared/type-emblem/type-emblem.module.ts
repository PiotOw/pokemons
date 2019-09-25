import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypeEmblemComponent} from "./type-emblem.component";
import {PokemonMaterialModule} from "../../pokemon-material.module";



@NgModule({
	declarations: [TypeEmblemComponent],
	imports: [
		CommonModule,
		PokemonMaterialModule
	],
	exports: [TypeEmblemComponent]
})
export class TypeEmblemModule {
}
