import {Component, Input, OnInit} from '@angular/core';
import {TypeIconService} from "../type-icon/type-icon.service";

@Component({
  selector: 'pok-type-emblem',
  templateUrl: './type-emblem.component.html',
  styleUrls: ['./type-emblem.component.scss']
})
export class TypeEmblemComponent implements OnInit {


	@Input() type: string[];
	constructor(public typeIconService: TypeIconService,) {
	}

	ngOnInit() {
		// console.log(this.typeIconService.getIconByType(this.type));
	}

}