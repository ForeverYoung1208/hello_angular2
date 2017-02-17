import { Component, Input, Output } from '@angular/core';
import { TodoItem } from './../shared/todoitem';
import { todoListData } from './../shared/todolistdata';
import { TodoListService } from './../shared/todolist.service'


@Component({
	moduleId: module.id,
  selector: 'todoblock',
  templateUrl: 'todoblock.component.html',
  styleUrls: ['todoblock.component.css']	
})
export class TodoBlockComponent {

	items: Array<TodoItem> = todoListData;

	additem(newItem: TodoItem):number {
		this.items.push(newItem);
		return this.items.length;
	};

	nextItemId():number {
		let nextItemId:number = 1
		if (this.items.length>0) {
			nextItemId = Math.max.apply( null, this.items.map( a => a.id ) ) + 1
		};
		return nextItemId;
	}


	addEmptyItem( event:any ){
		let newItem = new TodoItem(this.nextItemId() , 'write caption here', false, 1);
		console.log(newItem);
		
		console.log( this.additem(newItem) );

	}

	removeItemById( id: number ):number {
		let i:number = this.items.findIndex( item => item.id == id)
		this.items.splice(i, 1);

		return this.items.length;
	}
}
