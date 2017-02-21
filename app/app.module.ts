import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';

import { TodoMenuComponent }  from './todomenu/todomenu.component';

import { Hello2Component }  from './hello2/hello2.component';
import { TodoBlockComponent }  from './todoblock/todoblock.component';
import { TodoItemComponent }  from './todoitem/todoitem.component';
import { NewItemFormComponent }  from './newitemform/newitemform.component';
import { TodoListService } from './shared/todolist.service'



@NgModule({
  imports:      [ BrowserModule,
								  FormsModule
								],
  declarations: [ AppComponent, 
                  TodoMenuComponent,
  								Hello2Component, 
  								TodoBlockComponent,
  								TodoItemComponent,
  								NewItemFormComponent
  							],
  providers: [ TodoListService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
