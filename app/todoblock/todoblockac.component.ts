import { MyConfig } from './../shared/myconfig'
import { Component, OnInit } from '@angular/core';
import { TodoItem } from './../shared/todoitem';


@Component({
  moduleId: module.id,
  selector: 'todoblockac',
  templateUrl: 'todoblockac.component.html',
  styleUrls: ['todoblockac.component.css']  
})

export class TodoBlockACComponent implements OnInit{
  items: Array<TodoItem> = [];
  constructor() {  }

  private getAllItems():void {
  }


  ngOnInit(){

  }

  refreshItems(){
  }

  removeItem( item:TodoItem){
  }


  updateItem (item: TodoItem){

  }



}
