import { Injectable } from '@angular/core'
import { todoListData } from './todolistdata'
import { TodoItem } from './todoitem'

@Injectable()
export class TodoListService {
	items: TodoItem[] = todoListData;

	getListData(): TodoItem[] {
		return this.items;
	}


	addItem(newItem: TodoItem) {
		newItem.id = this.nextItemId();
		this.items.push(newItem);
	};

	nextItemId():number {
		let nextItemId:number = 1
		if (this.items.length>0) {
			nextItemId = Math.max.apply( null, this.items.map( a => a.id ) ) + 1
		};
		return nextItemId;
	}


	addEmptyItem(){
		let newItem = new TodoItem(this.nextItemId() , 'write caption here', false, 1);

		console.log( 'new item in service: ' + newItem);
		
	}

	removeItemById( id: number ){
		let i:number = this.items.findIndex( item => item.id == id)
		this.items.splice(i, 1);
	}




}