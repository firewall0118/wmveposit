import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero }}
      </li>
    </ul>
    `
})
export class AppComponent {
  title: string;
  myHero: string;
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  
  constructor(){
	  this.myHero = this.heroes[0];
	  this.title = 'Tour of Heroes';
  }
}
