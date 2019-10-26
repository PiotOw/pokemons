import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../../models";

@Component({
	selector: 'pok-pokemon-emblem',
	templateUrl: './pokemon-emblem.component.html',
	styleUrls: ['./pokemon-emblem.component.scss']
})
export class PokemonEmblemComponent implements OnInit {

	url: string;

	@Input() pokemon: Pokemon;

	constructor() {
	}

	ngOnInit() {

		this.url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +this.pokemon.id+ ".png";

	}

}
