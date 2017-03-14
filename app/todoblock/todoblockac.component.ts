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


  private subscribeToCable(){
    this.listItemsService.subscribeToChanges( (data:any)=> {

      switch (data.action){
        case "show": {
          data.todos.forEach( (item:any)=>{
            let newItem:TodoItem = {
              id: item.id,
              caption: item.caption,
              isDone: item.isDone,
              duration: item.duration
            }
            this.items.push(newItem)
          } )
          
          break;
        }
      }
    } )    
  }

  private getAllItems():void {
    this.listItemsService.getItems( (items:Array<TodoItem>) =>{ this.items = items } );

  }


  ngOnInit(){
    this.getAllItems();
    this.subscribeToCable();

  }

  refreshItems(){

  }

  removeItem( item:TodoItem){
  }


  updateItem (item: TodoItem){

  }



}
