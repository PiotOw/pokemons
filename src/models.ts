export class Pokemon {
	abilities: Ability[];
	base_experience: number;
	height: number;
	id: number;
	weight: number;
	name: string;
	stats: Stat[];
	types: Type[];
}

export class Ability {
	effect_entries: Effect[];
	id: number;
	name: string;
}

export class Effect {
	effect: string;
	language: Language;
	short_effect: string;
}

export class DamageRelation {
	double_damage_from: DamageRelationType[];
	double_damage_to: DamageRelationType[];
	half_damage_from: DamageRelationType[];
	half_damage_to: DamageRelationType[];
	no_damage_from: DamageRelationType[];
	no_damage_to: DamageRelationType[];
}

export class DamageRelationType {
	name: string;
}

export class Type {
	damage_relations: DamageRelation;
	id: number;
	move_damage_class: DamageType;
	name: string;
	pokemon: PokemonName[];
}

export class PokemonName {
	name: string;
}

export class DamageType {
	name: string;
	id: number;
}

export class Species {
	evolution_chain: EvolutionChain;
	growth_rate: GrowthRate;
	id: number;
	name: string;
	varieties: Pokemon[];
}

export class EvolutionChain {
	chain: Evolution;
	id: number;
}

export class Language {
	id: number;
	name: string;
}

export class Stat {
	base_stat: number;
	stat: StatType;
}

export class StatType {
	name: string;
}

export class GrowthRate {
	name: string;
	id: number;
}

export class Evolution {
	evolves_to: Evolution[];
	species: Species;
}