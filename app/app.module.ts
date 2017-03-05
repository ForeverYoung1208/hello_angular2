import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'


import { AppComponent }  from './app.component';

import { TodoMenuComponent }  from './todomenu/todomenu.component';
import { Hello2Component }  from './hello2/hello2.component';
import { TodoBlockComponent }  from './todoblock/todoblock.component';
import { TodoBlockRemoteComponent }  from './todoblock/todoblockremote.component';
import { TodoItemComponent }  from './todoitem/todoitem.component';
import { NewItemFormComponent }  from './newitemform/newitemform.component';
import { TodoListService, TodoListLocalService, TodoListRemoteService } from './shared/todolist.service'
import { WebSocketService } from './shared/websocket.service'



@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  RouterModule.forRoot([  
                    {path: "todo-frontend", component: TodoBlockComponent},
                    {path: "todo-backend", component: TodoBlockRemoteComponent},
                    {path: "", component: Hello2Component }
                  ]),
                  HttpModule
                ],
  declarations: [ AppComponent, 
                  TodoMenuComponent,
                  Hello2Component, 
                  TodoBlockComponent,
                  TodoBlockRemoteComponent,
                  TodoItemComponent,
                  NewItemFormComponent
                ],
  providers:  [ TodoListLocalService, 
                TodoListRemoteService,
                WebSocketService
              ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
