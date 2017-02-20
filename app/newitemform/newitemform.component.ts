import { Component, Output, EventEmitter } from '@angular/core';
import { TodoItem } from './../shared/todoitem';
import { TodoListService } from './../shared/todolist.service'


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

	constructor( private todoListService:TodoListService ){	}

	@Output() newItemEvent = new EventEmitter()

	onNewItem(){
		this.newItemEvent.emit( Object.assign({}, this.newItem ) );
	}

	
	onAddItem(){
		this.todoListService.addItem( Object.assign({}, this.newItem) )
	};


}

