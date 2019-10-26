import {Component, Input, OnInit} from '@angular/core';
import {Species} from "../../../models";

@Component({
	selector: 'pok-evolutions',
	templateUrl: './evolutions.component.html',
	styleUrls: ['./evolutions.component.scss']
})
export class EvolutionsComponent implements OnInit {

	@Input() species: Species;

	constructor() {
	}

	ngOnInit() {
	}

}
