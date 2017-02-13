import { Component } from '@angular/core';
import { TodoItem } from './todoitem/todoitem.component';

@Component({
	moduleId: module.id,
  selector: 'todoblock',
  templateUrl: 'todoblock.component.html',
  styleUrls: ['todoblock.component.css']	
})
export class TodoBlockComponent {
	items: TodoItem[];
	additem(newItem: TodoItem):number {
		this.items.push(newItem);
		return this.items.length;
	};
	removeItemById( id: number ):number {

		return this.items.length;
	}
}
