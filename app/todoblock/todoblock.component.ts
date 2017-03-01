import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from './../shared/todoitem';
import { TodoListService, TodoListLocalService } from './../shared/todolist.service'


@Component({
	moduleId: module.id,
  selector: 'todoblock',
  templateUrl: 'todoblock.component.html',
  styleUrls: ['todoblock.component.css']	
})
export class TodoBlockComponent implements OnInit{

	items: Array<TodoItem>;

	constructor( public listItemsService: TodoListLocalService) {
		this.items = [];
	}

	ngOnInit(){
		this.items = this.listItemsService.getListData();
	}

	addItem(newItem: TodoItem){
		this.listItemsService.addItem( newItem )
	};

	addEmptyItem(){
		let newItem = new TodoItem( 0, 'write caption here', false, 1);
		this.listItemsService.addItem( newItem )
	}

	removeItem( item: TodoItem ){
		this.listItemsService.removeItemById(item.id);
		console.log ('delete: ' + item)
	}


}
