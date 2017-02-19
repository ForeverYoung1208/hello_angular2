import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from './../shared/todoitem';

@Component({
	moduleId: module.id,
  selector: 'todoitem',
  templateUrl: 'todoitem.component.html',
  styleUrls: ['todoitem.component.css']	
})
export class TodoItemComponent{
	@Input() todoItem: TodoItem;

	@Output() deleteItemEvent = new EventEmitter()

	onDelete() {
		this.deleteItemEvent.emit(this.todoItem)
	}


}