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
    <click-me>click</click-me><br><br>
    <span>Key-Up1:</span><key-up1></key-up1><br>
    <span>Key-Up2:</span><key-up2></key-up2><br>
    <span>Key-Up3:</span><key-up3></key-up3><br>
    <span>Key-Up4:</span><key-up4></key-up4><br>
    <span>loop-back:</span><loop-back></loop-back><br>
    <span>little-tour:</span><little-tour></little-tour>
    <hero-form></hero-form>
    `
})
export class AppComponent {
	heroes = [
  	new Hero(1, 'Windstorm', '', ''),
  	new Hero(13, 'Bombasto', '', ''),
  	new Hero(23, 'Magneta', '', ''), 
  	new Hero(56, 'Tornado', '', ''),
	];
  myHero = this.heroes[0];
	title = 'Tour of Heroes';
}