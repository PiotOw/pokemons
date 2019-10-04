import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PikaRulerComponent} from './pika-ruler.component';
import {PokemonMaterialModule} from "../../pokemon-material.module";


@NgModule({
	declarations: [PikaRulerComponent],
	imports: [
		CommonModule,
		PokemonMaterialModule
	],
	exports: [PikaRulerComponent]
})
export class PikaRulerModule {
}
