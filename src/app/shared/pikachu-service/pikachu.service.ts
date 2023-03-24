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


  onFileSelected(event: Event) {
    const inputNode1: any = document.querySelector('#file'); // to jest ten input do którego dodano plik
    const inputNode2: any = event.target; // to też jest ten input do którego dodano plik

    const file1 = inputNode1.files[0];
    const file2 = inputNode2.files[0];
  }


}
