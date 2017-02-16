"use strict";
var todolistdata_1 = require('./todolistdata');
var TodoListService = (function () {
    function TodoListService() {
        this.todoList = todolistdata_1.todoListData;
    }
    TodoListService.prototype.getListData = function () {
        return this.todoList;
    };
    return TodoListService;
}());
exports.TodoListService = TodoListService;
//# sourceMappingURL=todolist.service.js.map