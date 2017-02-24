import { Component, OnInit } from '@angular/core';
import { TodoItem } from './../shared/todoitem';
import { TodoBlockComponent } from './todoblock.component';
import { TodoListService, TodoListLocalService, TodoListRemoteService } from './../shared/todolist.service'


@Component({
	moduleId: module.id,
  selector: 'todoblockremote',
  templateUrl: 'todoblockremote.component.html',
  styleUrls: ['todoblockremote.component.css']	
})

export class TodoBlockRemoteComponent extends TodoBlockComponent implements OnInit{
	constructor( public listItemsService: TodoListRemoteService) {
		super( listItemsService )

	}

}
