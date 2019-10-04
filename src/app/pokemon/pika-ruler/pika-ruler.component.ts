import {Component, Input, OnInit} from '@angular/core';
import {PikachuService} from "../../shared/pikachu-service/pikachu.service";
import {Pokemon} from "../../../models";

@Component({
	selector: 'pok-pika-ruler',
	templateUrl: './pika-ruler.component.html',
	styleUrls: ['./pika-ruler.component.scss']
})
export class PikaRulerComponent implements OnInit {

	@Input() pokemon: Pokemon;

	pikaHeightRound: number;

	pikachusHeight: number;

	cutoff: number;


	constructor(public pikachuService: PikachuService) {
	}

	ngOnInit() {

		this.pikachusHeight = 400 / this.pikachuService.getPikachusByHeight(this.pokemon.height);

		if(this.pikachusHeight > 200) {
			this.pikachusHeight = 200;
		}

		this.pikaHeightRound = Math.floor(this.pikachuService.getPikachusByHeight(this.pokemon.height));

		this.cutoff = 100 - (this.pikachuService.getPikachusByHeight(this.pokemon.height) - this.pikaHeightRound) *100;

		console.log(this.cutoff);

		document.getElementById("first").style.clipPath = "inset(" + this.cutoff + "% 0 0 0)"
	}

}
