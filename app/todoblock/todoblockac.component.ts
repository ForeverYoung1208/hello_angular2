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
  user:string;
  channelUser:string;
  constructor(
    public listItemsService: TodoListACService
  ) { }


  private subscribeToCable( subscriber:string ){
    this.listItemsService.subscribeToChanges( this.channelUser, (data:any)=> {

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

        case "remove": {
          data.todos.forEach( (itemToRemove:any)=>{
            let i = this.items.findIndex( (item)=>{ 
              if (item.id == itemToRemove.id ) {
                return true 
              }
            } )
            this.items.splice(i,1)
          } )
          break;
        }

        case "update": {
          data.todos.forEach( (itemToUpdate:any)=>{
            let i = this.items.findIndex( (item)=>{ 
              if (item.id == itemToUpdate.id ) {
                return true 
              }
            } )
            this.items[i].caption = itemToUpdate.caption
            this.items[i].isDone = itemToUpdate.isDone
            this.items[i].duration = itemToUpdate.duration 
          } )
          break;
        }

      }
    } )    
  }

  private getAllItems():void {
    this.listItemsService.getItems( (items:Array<TodoItem>) =>{ this.items = items } );

  }

  setUser(){
    if (this.user || this.user.length>0){
      this.channelUser = this.user;
      this.getAllItems();
      this.subscribeToCable( this.channelUser );

    }
  }


  ngOnInit(){
  }

  refreshItems(){

  }

  removeItem( item:TodoItem){
  }


  updateItem (item: TodoItem){

  }



}
