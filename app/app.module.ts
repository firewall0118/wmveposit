import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { HeroFormComponent } from './hero-form.component';

import { ClickMeComponent }   from './click-me.component';
import { LoopbackComponent }   from './loop-back.component';
import { LittleTourComponent }   from './little-tour.component';

import { KeyUpComponent_v1}   from './keyup.components';
import { KeyUpComponent_v2}   from './keyup.components';
import { KeyUpComponent_v3}   from './keyup.components';
import { KeyUpComponent_v4}   from './keyup.components';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeroFormComponent, ClickMeComponent, KeyUpComponent_v1, KeyUpComponent_v2, KeyUpComponent_v3, KeyUpComponent_v4, LoopbackComponent, LittleTourComponent ],
  bootstrap:    [ AppComponent, ClickMeComponent, KeyUpComponent_v1, KeyUpComponent_v2, KeyUpComponent_v3, KeyUpComponent_v4, LoopbackComponent, LittleTourComponent ]
})

export class AppModule { }
