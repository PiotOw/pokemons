import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponse, Type} from "../../../models";
import {Globals} from "../../globals";

@Injectable({
	providedIn: 'root'
})
export class TypeService {

	constructor( private http: HttpClient) {
	}

	getTypes(): Observable<ApiResponse<Type[]>> {
		return this.http.get<ApiResponse<Type[]>>(`${Globals.BASE_API_URL}/type`)
	}
}
