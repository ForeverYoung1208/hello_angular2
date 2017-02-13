import { Component } from '@angular/core';

export class TodoItem{
	constructor (caption:string, isDone:boolean, duration:number){
		this.caption = caption;
		this.isDone = isDone;
		this.duration = duration;
	}

	private _caption: string;
	get caption(): string {
		return this._caption;
	};
	set caption(newCaption:string) {
		if (newCaption) {
			this._caption = newCaption;
		} else {
			console.log("Error: caption can't be empty")
		}

	};

	isDone: boolean;
	duration: number;

}