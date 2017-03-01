import { Component } from '@angular/core';

class MenuItem{
	constructor( 
		public id: number, 
		public name: string,
		public onClick: ( m:MenuItem )=>void
	){}
}

@Component({
	moduleId: module.id,
	selector: 'todomenu',
  templateUrl: 'todomenu.component.html',
  styleUrls: ['todomenu.component.css']	  
})
export class TodoMenuComponent  { 
	menu:Array<MenuItem> = [];
	constructor(){

		this.menu.push( 
			new MenuItem( 1, ' Алерт1 ',	(m:MenuItem) =>{ alert( m.name )} )
		)
		this.menu.push(
			new MenuItem( 2, ' Алерт2 ',	(m:MenuItem) =>{ alert( m.name )} 	)
		)
		this.menu.push(
			new MenuItem( 3, ' Алерт3 ',	(m:MenuItem) =>{ alert( m.name )} 	)
		)
	}
 
}


