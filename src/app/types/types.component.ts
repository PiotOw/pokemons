import {Component, OnInit} from '@angular/core';
import {TYPES} from "../../mocks/mock_types";

@Component({
	selector: 'pok-types',
	templateUrl: './types.component.html',
	styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {

	types = TYPES;

	breakpoint: number;
	widthClass: string;
	// breakpoints: string;

	constructor() {
	}

	// ngOnInit() {
	// 	this.breakpoint = Math.floor(window.innerWidth / 220);
	// 	if(this.breakpoint > 5) {
	// 		this.breakpoint = 5;
	// 	}
	// 	this.breakpoints = this.breakpoint * 220 + "px";
	// 	console.log(this.breakpoint);
	// }
	//
	// onClickTest(index: number) {
	// 	console.log(this.types[index]);
	// }
	//
	// onResize(event) {
	// 	this.breakpoint = Math.floor(event.target.innerWidth / 220);
	// 	if(this.breakpoint > 5) {
	// 		this.breakpoint = 5;
	// 	}
	// 	this.breakpoints = this.breakpoint * 220 + "px";
	// 	console.log(this.breakpoint);
	// 	console.log(this.breakpoints);
	// }
	//
	ngOnInit() {
		this.breakpoint = Math.floor(window.innerWidth / 210);
		if(this.breakpoint > 5) {
			this.breakpoint = 5;
		}
		else if(this.breakpoint == 0){
			this.breakpoint = 1;
		}
		this.widthClass = "type-emblem-container-" + this.breakpoint;
		console.log(this.widthClass);
	}

	onClickTest(index: number) {
		console.log(this.types[index]);
	}

	onResize(event) {
		this.breakpoint = Math.floor(window.innerWidth / 210);
		if(this.breakpoint > 5) {
			this.breakpoint = 5;
		}
		else if(this.breakpoint == 0){
			this.breakpoint = 1;
		}
		this.widthClass = "type-emblem-container-" + this.breakpoint;
		console.log(this.widthClass);
	}


}
