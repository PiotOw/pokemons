import {NgModule} from '@angular/core';
import {
	MatIconModule
} from '@angular/material';

import {MatGridListModule} from '@angular/material/grid-list';

const modules = [
	MatIconModule,
	MatGridListModule,
]


@NgModule({
	declarations: [],
	imports: [
		...modules
	],
	exports: [
		...modules
	]

})
export class PokemonMaterialModule {
}
