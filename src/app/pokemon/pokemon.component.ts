import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../models";
import {PikachuService} from "../shared/pikachu-service/pikachu.service";

@Component({
	selector: 'pok-pokemon',
	templateUrl: './pokemon.component.html',
	styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

	url: string;

	pikaHeightRound: number;

	pikachusHeight: number;

	cutoff: number;


	@Input() pokemon: Pokemon;
	// private i: number;
	constructor( public pikachuService: PikachuService) {
	}

	ngOnInit() {
		this.url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +this.pokemon.id+ ".png";

		this.pikachusHeight = 400 / this.pikachuService.getPikachusByHeight(this.pokemon.height);

		if(this.pikachusHeight > 200) {
			this.pikachusHeight = 200;
		}

		this.pikaHeightRound = Math.floor(this.pikachuService.getPikachusByHeight(this.pokemon.height));

		this.cutoff = 100 - (this.pikachuService.getPikachusByHeight(this.pokemon.height) - this.pikaHeightRound) *100;

		console.log(this.cutoff);

		document.getElementById("first").style.clipPath = "inset(" + this.cutoff + "% 0 0 0)"
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
