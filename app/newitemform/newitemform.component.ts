import { Component } from '@angular/core';
//import { Form } from '@angular/form';

@Component({
	moduleId: module.id,
  selector: 'newitemform',
  templateUrl: 'newitemform.component.html',
  styleUrls: ['newitemform.component.css']	
})
export class NewItemFormComponent{
	newCaption:string = 'test';

	submit(){
		alert(this.newCaption)
	}


}

