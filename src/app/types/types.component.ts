import {Component, OnInit} from '@angular/core';
import {TYPES} from "../../mocks/mock_types";
import {TypeService} from "../shared/type-service/type.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {PokemonType, Type} from "../../models";

@Component({
	selector: 'pok-types',
	templateUrl: './types.component.html',
	styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {

	pokemonTypes: PokemonType[];
	breakpoint: number;
	widthClass: string;

	private unsubscribe$ = new Subject<void>();


	constructor(private typeService: TypeService) {
	}

	ngOnInit() {
		this.breakpoint = Math.floor(window.innerWidth / 210);
		if(this.breakpoint > 5) {
			this.breakpoint = 5;
		}
		else if(this.breakpoint == 0){
			this.breakpoint = 1;
		}
		this.getTypes();
	}

	onClickTest(index: number): void {
	}

	onResize(event): void {
		this.breakpoint = Math.floor(window.innerWidth / 210);
		if(this.breakpoint > 5) {
			this.breakpoint = 5;
		}
		else if(this.breakpoint == 0){
			this.breakpoint = 1;
		}
		this.widthClass = "types-emblem-container-" + this.breakpoint;
		console.log(this.widthClass);
	}

	getTypes(): void {
		this.typeService.getTypes()
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe(response => {
				this.pokemonTypes = response.results.map(type => PokemonType.fromType(type));
			})
	}
}
