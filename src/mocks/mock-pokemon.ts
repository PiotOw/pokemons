import {
	Ability,
	DamageRelation,
	DamageRelationType,
	DamageType,
	Effect,
	Language,
	Pokemon, PokemonName,
	Stat,
	StatType,
	Type
} from "../models";


export const language1: Language = {
	id: 1,
	name: 'english'
};


export const effect1: Effect[] = [
	{
		effect: 'effect1 does something great',
		language: language1,
		short_effect: 'does great'
	}
];


export const effect2: Effect[] = [
	{
		effect: 'effect2 does something stupid',
		language: language1,
		short_effect: 'does stupid'
	}
];

export const ABIILITIES: Ability[] = [
	{
		effect_entries: effect1,
		id: 1,
		name: 'great effect'
	},
	{
		effect_entries: effect2,
		id: 2,
		name: 'stupid effect'
	}
];


export const STATTYPES: StatType[] = [
	{
		name: "speed"
	},
	{
		name: "special-attack"
	},
	{
		name: "hp"
	},
	{
		name: "attack"
	},
	{
		name: "special-defense"
	},
	{
		name: "defense"
	},
	{
		name: "accuracy"
	},
	{
		name: "evasion"
	}
];

export const STATS: Stat[] = [
	{
		base_stat: 15,
		stat: STATTYPES[0]
	},
	{
		base_stat: 35,
		stat: STATTYPES[1]
	},
	{
		base_stat: 55,
		stat: STATTYPES[2]
	},
	{
		base_stat: 75,
		stat: STATTYPES[3]
	},
	{
		base_stat: 95,
		stat: STATTYPES[4]
	},
	{
		base_stat: 105,
		stat: STATTYPES[5]
	},
	{
		base_stat: 125,
		stat: STATTYPES[6]
	},
	{
		base_stat: 145,
		stat: STATTYPES[7]
	},
];




export const DAMAGETYPES: DamageType[] = [
	{
		name: "status",
		id: 1
	},
	{
		name: "physical",
		id: 2
	},
	{
		name: "special",
		id: 3
	}
];

export const DAMAGERELATIONTYPES: DamageRelationType[] = [
	{
		name: "ghost"
	},
	{
		name: "electric"
	},
	{
		name: "bug"
	},
	{
		name: "grass"
	},
	{
		name: "rock"
	},
	{
		name: "steel"
	},
	{
		name: "fire"
	},
]

export const damageRelations: DamageRelation = {
	double_damage_from: [DAMAGERELATIONTYPES[1]],
	double_damage_to: [DAMAGERELATIONTYPES[2]],
	half_damage_from: [DAMAGERELATIONTYPES[3]],
	half_damage_to: [DAMAGERELATIONTYPES[4]],
	no_damage_from: [DAMAGERELATIONTYPES[5]],
	no_damage_to: [DAMAGERELATIONTYPES[6]]
};

export const pokemon1: PokemonName = {
	name: "charmander"
};


export const TYPES: Type[] = [
	{
		damage_relations: damageRelations,
		id: 1,
		move_damage_class: DAMAGETYPES[1],
		name: "normal",
		pokemon: [pokemon1]
	},
	{
		damage_relations: damageRelations,
		id: 2,
		move_damage_class: DAMAGETYPES[1],
		name: "fighting",
		pokemon: [pokemon1]
	},
	{
		damage_relations: damageRelations,
		id: 3,
		move_damage_class: DAMAGETYPES[0],
		name: "flying",
		pokemon: [pokemon1]
	},
	{
		damage_relations: damageRelations,
		id: 4,
		move_damage_class: DAMAGETYPES[2],
		name: "poison",
		pokemon: [pokemon1]
	},
	{
		damage_relations: damageRelations,
		id: 5,
		move_damage_class: DAMAGETYPES[0],
		name: "ground",
		pokemon: [pokemon1]
	},
	{
		damage_relations: damageRelations,
		id: 6,
		move_damage_class: DAMAGETYPES[2],
		name: "rock",
		pokemon: [pokemon1]
	},
	{
		damage_relations: damageRelations,
		id: 7,
		move_damage_class: DAMAGETYPES[1],
		name: "bug",
		pokemon: [pokemon1]
	}
];





export const mockPokemon: Pokemon =
	{
		abilities: ABIILITIES,
		base_experience: 64,
		height: 31,
		id: 25,
		weight: 30,
		name: 'Pikachu',
		stats: STATS,
		types: [TYPES[2], TYPES[0]]
	};





