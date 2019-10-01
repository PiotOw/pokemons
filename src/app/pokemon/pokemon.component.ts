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

	checkMultipleDamageTypes() {
		if(this.pokemon.types.length == 1 || this.pokemon.types[0].move_damage_class == this.pokemon.types[1].move_damage_class) {
			return false;
		}
		else {
			return true;
		}
	}
}
