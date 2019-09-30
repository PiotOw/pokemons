import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../models";
import {mockPokemon} from "../../mocks/mock-pokemon";

@Component({
	selector: 'pok-pokemons',
	templateUrl: './pokemons.component.html',
	styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {


	pokemon: Pokemon = mockPokemon;

	constructor() {
	}

	ngOnInit() {
	}

}
