import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { Hello2Component }  from './hello2/hello2.component';
import { TodoBlockComponent }  from './todoblock/todoblock.component';

@NgModule({
  imports:      [ BrowserModule,
								  FormsModule
								],
  declarations: [ AppComponent, 
  								Hello2Component, 
  								TodoBlockComponent
  							],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
