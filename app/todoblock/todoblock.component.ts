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


	// addItem(newItem: TodoItem):number {
	// 	newItem.id = this.nextItemId();
	// 	this.items.push(newItem);
	// 	return this.items.length;
	// };

	// nextItemId():number {
	// 	let nextItemId:number = 1
	// 	if (this.items.length>0) {
	// 		nextItemId = Math.max.apply( null, this.items.map( a => a.id ) ) + 1
	// 	};
	// 	return nextItemId;
	// }


	// addEmptyItem( event:any ){
	// 	let newItem = new TodoItem(this.nextItemId() , 'write caption here', false, 1);
	// 	console.log(newItem);
		
	// 	console.log( this.addItem(newItem) );

	// }

	// removeItemById( id: number ):number {
	// 	let i:number = this.items.findIndex( item => item.id == id)
	// 	this.items.splice(i, 1);
	// 	return this.items.length;
	// }
}
