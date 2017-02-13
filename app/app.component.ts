import { Component } from '@angular/core';

class TodoItem {
	id: number;
	caption: string;
	isDone: boolean;
	duration: number;
}


@Component({
  selector: 'my-app',
  templateUrl: 'app/main.html',
})
export class AppComponent  { 
	name = 'Todo list'; 
}


