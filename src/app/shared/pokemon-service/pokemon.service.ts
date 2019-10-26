import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pokemon} from "../../../models";
import {Observable} from "rxjs";
import {Globals} from "../../globals";

@Injectable({
	providedIn: 'root'
})
export class PokemonService {

	constructor(private http: HttpClient) {
	}

	getById(id: number): Observable<Pokemon> {
		return this.http.get<Pokemon>(`${Globals.BASE_API_URL}/pokemon/${id}`);
	}
}
