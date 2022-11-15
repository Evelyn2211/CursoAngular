import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { frutaComponent } from './fruta.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, frutaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
