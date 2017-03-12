import { MyConfig } from './../shared/myconfig'
import { Component, OnInit } from '@angular/core';
import { TodoItem } from './../shared/todoitem';
import { TodoListACService } from './../shared/todolist.service'


@Component({
  moduleId: module.id,
  selector: 'todoblockac',
  templateUrl: 'todoblockac.component.html',
  styleUrls: ['todoblockac.component.css']  
})

export class TodoBlockACComponent implements OnInit{
  items: Array<TodoItem> = [];
  constructor(
    public listItemsService: TodoListACService
  ) {


  }

  private getAllItems():void {

  }


  ngOnInit(){
    this.listItemsService.subscribe()

  }

  refreshItems(){
  }

  removeItem( item:TodoItem){
  }


  updateItem (item: TodoItem){

  }



}
