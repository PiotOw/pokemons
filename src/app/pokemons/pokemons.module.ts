import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsComponent } from './pokemons.component';
import { PokemonListElementComponent } from './pokemon-list-element/pokemon-list-element.component';


@NgModule({
  declarations: [PokemonsComponent, PokemonListElementComponent],
  imports: [
    CommonModule,
    PokemonsRoutingModule
  ]
})
export class PokemonsModule { }
