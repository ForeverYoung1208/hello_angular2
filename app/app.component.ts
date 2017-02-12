import { Component } from '@angular/core';

class TodoItem {
	id: number;
	caption: string;
	isDone: boolean;
	duration: number;
}

class Todos {
	items: TodoItem[];
	additem(newItem: TodoItem):number {
		this.items.push(newItem);
		return this.items.length;
	};
	removeItemById( id: number ):number {

		return this.items.length;
	}
}


@Component({
  selector: 'my-app',
  templateUrl: 'app/main.html',
})
export class AppComponent  { 
	name = 'Todo list'; 
	todolist = new Todos();
}


