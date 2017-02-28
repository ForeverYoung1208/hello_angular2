import { Component, OnInit } from '@angular/core';
import { TodoItem } from './../shared/todoitem';
import { TodoListService, TodoListRemoteService } from './../shared/todolist.service'


@Component({
	moduleId: module.id,
  selector: 'todoblockremote',
  templateUrl: 'todoblockremote.component.html',
  styleUrls: ['todoblockremote.component.css']	
})

export class TodoBlockRemoteComponent implements OnInit{
	items: Array<TodoItem>;
	constructor( public listItemsService: TodoListRemoteService) {

	}

	ngOnInit(){
		this.listItemsService.updateListData( () => {this.items = this.listItemsService.getListData() });
	}


}
