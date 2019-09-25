import {Component, OnInit} from '@angular/core';
import {TypeIconService} from "../type-icon/type-icon.service";

@Component({
  selector: 'app-type-emblem',
  templateUrl: './type-emblem.component.html',
  styleUrls: ['./type-emblem.component.scss']
})
export class TypeEmblemComponent implements OnInit {


	type: string;


	constructor(public typeIconService: TypeIconService) {
	}

	ngOnInit() {
		this.type = 'water';
		console.log(this.typeIconService.getIconByType(this.type));
	}
}