import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewComponent} from './overview.component';
import {PikaRulerModule} from "../pika-ruler/pika-ruler.module";
import {TypeEmblemModule} from "../../shared/type-emblem/type-emblem.module";


@NgModule({
	declarations: [OverviewComponent],
	imports: [
		CommonModule,
		PikaRulerModule,
		TypeEmblemModule
	],
	exports: [
		OverviewComponent
	]
})
export class OverviewModule {
}
