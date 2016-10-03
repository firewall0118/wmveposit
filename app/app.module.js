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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var hero_form_component_1 = require('./hero-form.component');
var click_me_component_1 = require('./click-me.component');
var loop_back_component_1 = require('./loop-back.component');
var little_tour_component_1 = require('./little-tour.component');
var keyup_components_1 = require('./keyup.components');
var keyup_components_2 = require('./keyup.components');
var keyup_components_3 = require('./keyup.components');
var keyup_components_4 = require('./keyup.components');
var AppModule = (function () {
  function AppModule() {
  }
  AppModule = __decorate([
  core_1.NgModule({
    imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
    declarations: [app_component_1.AppComponent, hero_form_component_1.HeroFormComponent, click_me_component_1.ClickMeComponent, keyup_components_1.KeyUpComponent_v1, keyup_components_2.KeyUpComponent_v2, keyup_components_3.KeyUpComponent_v3, keyup_components_4.KeyUpComponent_v4, loop_back_component_1.LoopbackComponent, little_tour_component_1.LittleTourComponent],
    bootstrap: [app_component_1.AppComponent, click_me_component_1.ClickMeComponent, keyup_components_1.KeyUpComponent_v1, keyup_components_2.KeyUpComponent_v2, keyup_components_3.KeyUpComponent_v3, keyup_components_4.KeyUpComponent_v4, loop_back_component_1.LoopbackComponent, little_tour_component_1.LittleTourComponent]
  }), 
  __metadata('design:paramtypes', [])
  ], AppModule);
  return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map