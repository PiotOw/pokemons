import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatsComponent} from './stats.component';
import {StatCardModule} from "../../shared/stat-card/stat-card.module";


@NgModule({
	declarations: [StatsComponent],
	imports: [
		CommonModule,
		StatCardModule
	],
	exports: [
		StatsComponent
	]
})
export class StatsModule {
}
