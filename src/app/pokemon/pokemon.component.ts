import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Pokemon} from "../../models";
import {PikachuService} from "../shared/pikachu-service/pikachu.service";
import {PokemonService} from "../shared/pokemon-service/pokemon.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Component({
	selector: 'pok-pokemon',
	templateUrl: './pokemon.component.html',
	styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit, OnDestroy {

	pokemon: Pokemon;
	pokemonId: number;

	private unsubscribe$ = new Subject<void>();

	constructor(private pokemonService: PokemonService,
				private route: ActivatedRoute) {
	}

	ngOnInit(): void {
		this.pokemonId = this.route.snapshot.params.id;
		this.getPokemon();
	}

	ngOnDestroy(): void {
		this.unsubscribe$.next();
	}

	private getPokemon(): void {
		this.pokemonService.getById(this.pokemonId)
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe(pokemon => {
				console.log(pokemon);
				this.pokemon = pokemon;
			});
	}

}
