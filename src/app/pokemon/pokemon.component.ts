import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../models";
import {PikachuService} from "../shared/pikachu-service/pikachu.service";

@Component({
	selector: 'pok-pokemon',
	templateUrl: './pokemon.component.html',
	styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

	@Input() pokemon: Pokemon;

	constructor( public pikachuService: PikachuService) {
	}

	ngOnInit() {
	}
}
