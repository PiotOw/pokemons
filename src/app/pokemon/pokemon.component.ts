import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../models";

@Component({
	selector: 'pok-pokemon',
	templateUrl: './pokemon.component.html',
	styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

	url: string;

	@Input() pokemon: Pokemon;
	constructor() {
	}

	ngOnInit() {
		this.url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +this.pokemon.id+ ".png"
	}

}
