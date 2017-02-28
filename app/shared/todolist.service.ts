import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { todoListData, todoListData2 } from './todolistdata';
import { TodoItem } from './todoitem';



export interface TodoListService{
	items:Array<TodoItem>;
	getListData( )		:Array<TodoItem>;
	addItem( newItem	:TodoItem ):any;
	getItemById( id:number ): TodoItem;
	nextItemId( )			:number;
	addEmptyItem( )		:any;
	removeItemById( id:number ):any;
}

@Injectable()
export class TodoListLocalService implements TodoListService {
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
	getItemById( id:number ): TodoItem {
		let t: TodoItem = this.items.find( item => item.id == id) 
		return t
	}
}



@Injectable()
export class TodoListRemoteService implements TodoListService {
	items: TodoItem[] = [];
	apiUrl:string = 'http://192.168.0.128:3000';

	constructor( public http:Http ){ };

	updateListData( updateFunction:Function = null){
		this.http.get(this.apiUrl+'/todos').subscribe(
			result => { 
									this.items = result.json()
									if ( updateFunction ) { updateFunction() };
								},
			error => console.log( error.statusText )
		)
	}

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
	getItemById( id:number ): TodoItem {
		let t: TodoItem = this.items.find( item => item.id == id) 
		return t
	}	
}