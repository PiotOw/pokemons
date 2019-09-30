import {Component, Input, OnInit} from '@angular/core';
import {TypeIconService} from "../type-icon-service/type-icon.service";
import {Type} from "../../../models";

@Component({
	selector: 'pok-type-emblem',
	templateUrl: './type-emblem.component.html',
	styleUrls: ['./type-emblem.component.scss']
})
export class TypeEmblemComponent implements OnInit {


	@Input() type: Type[];
	@Input() active: boolean;

	constructor(public typeIconService: TypeIconService,) {
	}

	ngOnInit() {
		// console.log(this.typeIconService.getIconByType(this.type));
	}

}