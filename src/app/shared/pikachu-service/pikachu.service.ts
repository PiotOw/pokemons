import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class PikachuService {

	getHeightInPickachus(number) {
		return (number/4);
	}
	getWeightInPikachus(number) {
		return (number/60);
	}

	constructor() {
	}
}
