"use strict";
var todolistdata_1 = require('./todolistdata');
var todoitem_1 = require('./todoitem');
;
var TodoListService = (function () {
    function TodoListService() {
        this.items = todolistdata_1.todoListData;
    }
    TodoListService.prototype.getListData = function () {
        return this.items;
    };
    TodoListService.prototype.addItem = function (newItem) {
        newItem.id = this.nextItemId();
        this.items.push(newItem);
    };
    ;
    TodoListService.prototype.nextItemId = function () {
        var nextItemId = 1;
        if (this.items.length > 0) {
            nextItemId = Math.max.apply(null, this.items.map(function (a) { return a.id; })) + 1;
        }
        ;
        return nextItemId;
    };
    TodoListService.prototype.addEmptyItem = function () {
        var newItem = new todoitem_1.TodoItem(this.nextItemId(), 'write caption here', false, 1);
        console.log('new item in service: ' + newItem);
    };
    TodoListService.prototype.removeItemById = function (id) {
        var i = this.items.findIndex(function (item) { return item.id == id; });
        this.items.splice(i, 1);
    };
    return TodoListService;
}());
exports.TodoListService = TodoListService;
//# sourceMappingURL=todolist.service.js.map