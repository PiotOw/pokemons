import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../../models";
import {PikachuService} from "../../shared/pikachu-service/pikachu.service";

@Component({
	selector: 'pok-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

	url: string;

	@Input() pokemon: Pokemon;

	constructor(public pikachuService: PikachuService) {
	}

	ngOnInit() {

		this.url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +this.pokemon.id+ ".png";

	}

}
