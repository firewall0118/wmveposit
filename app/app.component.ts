import { Component } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My favourite hero: {{myHero.name}}</h2>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name }}
      </li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p> 
    `
})
export class AppComponent {
	heroes = [
  	new Hero(1, 'Windstorm'),
  	new Hero(13, 'Bombasto'),
  	new Hero(23, 'Magneta'), 
  	new Hero(56, 'Tornado'),
	];

  myHero = this.heroes[0];
	title = 'Tour of Heroes';
}