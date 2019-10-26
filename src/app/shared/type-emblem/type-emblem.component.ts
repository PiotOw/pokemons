import {Component, Input, OnInit} from '@angular/core';
import {TypeIconService} from "../type-icon-service/type-icon.service";
import {PokemonType} from "../../../models";

@Component({
	selector: 'pok-type-emblem',
	templateUrl: './type-emblem.component.html',
	styleUrls: ['./type-emblem.component.scss']
})
export class TypeEmblemComponent implements OnInit {


	@Input() types: PokemonType[];
	@Input() active: boolean;

	constructor(public typeIconService: TypeIconService) {
	}

	ngOnInit() {
	}

}