import {Component, Input, OnInit} from '@angular/core';
import {StatIconService} from "../stat-icon-service/stat-icon.service";
import {Stat} from "../../../models";

@Component({
	selector: 'pok-stat-card',
	templateUrl: './stat-card.component.html',
	styleUrls: ['./stat-card.component.scss']
})
export class StatCardComponent implements OnInit {


	@Input() stat: Stat;

	constructor(public statIconService: StatIconService) {
	}

	ngOnInit() {
	}

}
