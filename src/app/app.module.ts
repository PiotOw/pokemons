import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PokemonMaterialModule} from "./pokemon-material.module";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		PokemonMaterialModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
