import { Component, Output, EventEmitter } from '@angular/core';
import { TodoItem } from './../shared/todoitem';
import { TodoListService, TodoListLocalService, TodoListRemoteService } from './../shared/todolist.service'


@Component({
	moduleId: module.id,
  selector: 'newitemform',
  templateUrl: 'newitemform.component.html',
  styleUrls: ['newitemform.component.css']	
})
export class NewItemFormComponent{
	newItem:TodoItem = 	{
												id: 0,
												caption:'testteeeeq',
												duration:3,
												isDone:false
											};;

	constructor( private todoListService:TodoListLocalService, private todoListRemoteService:TodoListRemoteService  ){	}

	@Output() listRefreshEvent = new EventEmitter()
	
	onAddItem(){

		this.todoListRemoteService.addItem( Object.assign({}, this.newItem), () => { this.listRefreshEvent.emit() } )
		
	};


}

