"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_1 = require('./hero');
var AppComponent = (function () {
  function AppComponent() {
    this.heroes = [
    new hero_1.Hero(1, 'Windstorm', '', ''),
    new hero_1.Hero(13, 'Bombasto', '', ''),
    new hero_1.Hero(23, 'Magneta', '', ''),
    new hero_1.Hero(56, 'Tornado', '', ''),
    ];
    this.myHero = this.heroes[0];
    this.title = 'Tour of Heroes';
  }
  AppComponent = __decorate([
    core_1.Component({
      emplate: "\n    <h1>{{title}}</h1>\n    <h2>My favourite hero: {{myHero.name}}</h2>\n    <ul>\n      <li *ngFor=\"let hero of heroes\">\n        {{ hero.name }}\n      </li>\n    </ul>\n    <p *ngIf=\"heroes.length > 3\">There are many heroes!</p>\n    <click-me>click</click-me><br><br>\n    <span>Key-Up1:</span><key-up1></key-up1><br>\n    <span>Key-Up2:</span><key-up2></key-up2><br>\n    <span>Key-Up3:</span><key-up3></key-up3><br>\n    <span>Key-Up4:</span><key-up4></key-up4><br>\n    <span>loop-back:</span><loop-back></loop-back><br>\n    <span>little-tour:</span><little-tour></little-tour>\n    <hero-form></hero-form>\n    "
    }), 
    __metadata('design:paramtypes', [])
  ], AppComponent);
  return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map