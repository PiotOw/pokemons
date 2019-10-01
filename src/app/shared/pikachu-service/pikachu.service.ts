import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class PikachuService {

	getPikachusByHeight(number) {
		return (number/4);
	}
	getPikachusByWeight(number) {
		return (number/60);
	}

	constructor() {
	}
}
