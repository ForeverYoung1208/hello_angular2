import { MyConfig } from './../shared/myconfig'
import { Component, OnInit } from '@angular/core';
import { TodoItem } from './../shared/todoitem';
import { TodoListWSService } from './../shared/todolist.service'
import { WebSocketService } from './../shared/websocket.service'


@Component({
  moduleId: module.id,
  selector: 'todoblockws',
  templateUrl: 'todoblockws.component.html',
  styleUrls: ['todoblockws.component.css']  
})

export class TodoBlockWSComponent implements OnInit{
  items: Array<TodoItem> = [];
  constructor( public listItemsService: TodoListWSService, private webSocketService: WebSocketService) {
    this.webSocketService.start( MyConfig.apiProtocolWS+MyConfig.apiAddress+MyConfig.cableSuffix );
  //  this.listItemsService.subscribed.subscribe( ( data:boolean ) => {
  //    if( data ){
  //      this.getAllItems();
  //    }
  //  } );     

  this.listItemsService.subscribed.subscribe();

  }

  private getAllItems():void {
    this.listItemsService.getItems();
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
