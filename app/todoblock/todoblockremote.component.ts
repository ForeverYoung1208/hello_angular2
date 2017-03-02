import { Component, OnInit } from '@angular/core';
import { TodoItem } from './../shared/todoitem';
import { TodoListService, TodoListRemoteService } from './../shared/todolist.service'


@Component({
	moduleId: module.id,
  selector: 'todoblockremote',
  templateUrl: 'todoblockremote.component.html',
  styleUrls: ['todoblockremote.component.css']	
})

export class TodoBlockRemoteComponent implements OnInit{
	items: Array<TodoItem>;
	constructor( public listItemsService: TodoListRemoteService) {

	}

	ngOnInit(){
		this.listItemsService.updateListData( () => {this.items = this.listItemsService.getListData() });
	}

	refreshItems(){
		this.items = this.listItemsService.getListData()
	}

	removeItem( item:TodoItem){
		this.listItemsService.removeItemById( item.id, () => {this.items = this.listItemsService.getListData() } )
	}


	updateItem (item: TodoItem) {
		this.listItemsService.updateItem( item ).subscribe(
			result => { 
									this.refreshItems();
									console.log( result.statusText ) 
								},
			error => console.log( error.statusText ) 
		)
	}



}
