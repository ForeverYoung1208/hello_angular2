export class TodoItem{
	constructor (
		public id:number, 
		private _caption:string, 
		public isDone:boolean, 
		public duration:number){
	}

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