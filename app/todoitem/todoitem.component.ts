import { Component, Input, Output, EventEmitter} from '@angular/core';
import { TodoItem } from './../shared/todoitem';

@Component({
	moduleId: module.id,
  selector: 'todoitem',
  templateUrl: 'todoitem.component.html',
  styleUrls: ['todoitem.component.css']	
})
export class TodoItemComponent {
	@Input() todoItem: TodoItem;
	@Output() deleteItemEvent = new EventEmitter()
	@Output() updateItemEvent = new EventEmitter()
	isChanged: boolean = false;

	onChange(){
		this.isChanged = true;
	}

	onDelete() {
		this.deleteItemEvent.emit(this.todoItem)
	}

	onUpdate() {
		this.updateItemEvent.emit(this.todoItem);
		this.isChanged = false;
	}


}