import {Component, OnInit} from '@angular/core';
import {TYPES} from "./mock_types";

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {

	types = TYPES;

	constructor() {
	}

	ngOnInit() {
	}

	onClickTest(index: number) {
		console.log(this.types[index]);
	}

}
