import { Component, Output, EventEmitter } from '@angular/core';
import { TodoItem } from './../shared/todoitem';
import { TodoListWSService } from './../shared/todolist.service'


@Component({
	moduleId: module.id,
  selector: 'wsform',
  templateUrl: 'wsform.component.html',
  styleUrls: ['newitemform.component.css']	
})
export class WSFormComponent{
	newItem:TodoItem = 	{
												id: 0,
												caption:'testteeeequick-ws',
												duration:1,
												isDone:false
											};;

	constructor( private todoListWSService:TodoListWSService ){	}
	
	@Output() listRefreshEvent = new EventEmitter()

	onAddItem(){

		this.todoListWSService.addItem( Object.assign({}, this.newItem),() => { this.listRefreshEvent.emit() })
		
	};


}

