import {Component, OnInit} from '@angular/core';
import {STATS} from "../../mocks/mock_stats";

@Component({
	selector: 'pok-pokemon',
	templateUrl: './pokemon.component.html',
	styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

	stats = STATS;

	type: string[] = ['water', 'ghost'];

	constructor() {
	}

	ngOnInit() {
	}

}
