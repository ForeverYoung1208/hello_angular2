import { Component, OnInit } from '@angular/core';
import { TodoItem } from './../shared/todoitem';
// import { TodoListService, TodoListRemoteService } from './../shared/todolist.service'
import { ChannelWebsocketService } from './../shared/websocket.service'


@Component({
	moduleId: module.id,
  selector: 'todoblockws',
  templateUrl: 'todoblockws.component.html',
  styleUrls: ['todoblockws.component.css']	
})

export class TodoBlockWSComponent implements OnInit{
	items: Array<TodoItem>;
	constructor( public listItemsService: ChannelWebsocketService) {

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
