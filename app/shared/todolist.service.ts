import { todoListData } from './todolistdata'
import { TodoItem } from './todoitem'


export class TodoListService {
	todoList: TodoItem[] = todoListData;

	getListData(): TodoItem[] {
		return this.todoList;

	}

}