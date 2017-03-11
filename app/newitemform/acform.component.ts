import { Component, Output, EventEmitter } from '@angular/core';
import { TodoItem } from './../shared/todoitem';
import { TodoListACService } from './../shared/todolist.service'


@Component({
	moduleId: module.id,
  selector: 'acform',
  templateUrl: 'acform.component.html',
  styleUrls: ['newitemform.component.css']	
})
export class ACFormComponent{
	newItem:TodoItem = 	{
												id: 0,
												caption:'testteeeequick-Action Cable',
												duration:1,
												isDone:false
											};;

	constructor(){	}
	
	@Output() listRefreshEvent = new EventEmitter()

	onAddItem(){
		
	};

	onUpdate(){
	}


}

