import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WebSocketService, ChannelWebsocketService } from './websocket.service'


import { Http, Response, Headers } from '@angular/http';
import { todoListData, todoListData2 } from './todolistdata';
import { TodoItem } from './todoitem';
import { MyConfig } from './myconfig'


export interface TodoListService{
  getListData( )    :Array<TodoItem>;
  addItem( newItem  :TodoItem ):any;
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
  apiUrl:string = MyConfig.apiUrl;

  constructor( public http:Http ){ };
  updateListData( callback:Function = null){
    this.http.get(this.apiUrl+'/todos').subscribe(
      result => { 
                  this.items = result.json()
                  if ( callback ) { callback() };
                },
      error => console.log( error.statusText )
    )
  }

  getListData(): TodoItem[] {
    return this.items;
  }

  addItem(newItem: TodoItem, callback:Function = null ) {
    this.http.post(this.apiUrl+'/todos', newItem).subscribe(
      result => { 
                  this.updateListData( callback )
                  console.log( result.statusText ) 
                },
      error => console.log( error.statusText )      
    );
  };

  removeItemById( id: number, callback:Function = null ){
    this.http.delete( this.apiUrl+'/todos/'+id).subscribe(
      result => { 
                  this.updateListData( callback )
                  console.log( result.statusText ) 
                },
      error => console.log( error.statusText )      
    );
  };

  updateItem( item:TodoItem ):Observable<Response> {
    return this.http.put( this.apiUrl+'/todos/'+item.id, item )
  }
}







@Injectable()
export class TodoListWSService extends ChannelWebsocketService{

  constructor(webSocketService: WebSocketService ) {
    super( webSocketService );
    this.identifier = {
      channel: 'TodosChannel'
    };
  }  


  getItems(){
    this.sendToAction({}, 'index');
  }

  addItem(newItem: TodoItem, callback:Function = null ) {
    this.sendToAction(newItem, 'create');
  };

  removeItemById( id: number, callback:Function = null ){
  };

  updateItem( item:TodoItem ) {
    this.sendToAction(item, 'update');
  }
}










@Injectable()
export class TodoListACService{
  private url:string = MyConfig.apiUrl+MyConfig.cableSuffix;
  private channel:string = MyConfig.channel;
  private cable:any;
  private subscription:any;
  ActionCable = require('actioncable')

  constructor( ) 
  { 
      console.log( 'constructor ' + this.url)
      this.cable = this.ActionCable.createConsumer(this.url)

  }  


  subscribe(url:string = this.url, channel:string = this.channel){
    console.log( 'subscribe ' + url)

    this.subscription = this.cable.subscriptions.create(channel, {
      received: (data:any) => {
        console.log('!!!!got!!!! ' + data)
      }
    })
  }


  getItems(){
    console.log( 'Get items')

  }

  addItem(newItem: TodoItem, callback:Function = null ) {

  };

  removeItemById( id: number, callback:Function = null ){
  };

  updateItem( item:TodoItem ) {
  }


}