import { Component } from '@angular/core';

@Component({
  selector: 'hello2',
  moduleId: module.id,
  templateUrl: 'hello2.html',
})
export class Hello2Component  { 
	strings = {
		first: 'first string',
		second: 'second string'
	}; 
}
