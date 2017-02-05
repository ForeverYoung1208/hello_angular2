import { Component } from '@angular/core';
import { Phrase } from './phrase'

@Component({
  selector: 'hello2',
  templateUrl: 'app/hello2/hello2.component.html',
  styleUrls: ['app/hello2/hello2.component.css']
})
export class Hello2Component  { 
	strings = {
		first: 'first string',
		second: 'second string'
	}; 


}
