import {Component} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'pokemons';

	onScroll(event) {
		if (window.scrollY < 200) {
			document.getElementById("icon").style.height = 300 - window.scrollY + "px";
			document.getElementById("icon").style.left = "calc(50% - " + (300 - window.scrollY) / 2 + "px)";
			document.getElementById("part-1").style.right = "calc(50% + " + (300 - window.scrollY) / 2 + "px)";
			document.getElementById("part-2").style.left = "calc(50% + " + (300 - window.scrollY) / 2 + "px)";
			document.getElementById("nav-bar").style.height = (300 - window.scrollY) * 2 / 3 + "px";
			document.getElementById("nav-bar").style.fontSize = (300 - window.scrollY) / 4 + "px";
		}
	}
}