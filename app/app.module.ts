import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Hello2Component }  from './hello2/hello2.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, Hello2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
