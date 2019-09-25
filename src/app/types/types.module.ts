import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypesRoutingModule} from './types-routing.module';
import {TypesComponent} from './types.component';
import {TypeEmblemComponent} from "../shared/type-emblem/type-emblem.component";


@NgModule({
	declarations: [
		TypesComponent,
		TypeEmblemComponent
	],
	imports: [
		CommonModule,
		TypesRoutingModule,
	],
	bootstrap: [TypesComponent],
	exports: [
		TypesComponent,
		TypeEmblemComponent
	]
})
export class TypesModule {
}
