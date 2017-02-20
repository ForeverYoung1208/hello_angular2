"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todolistdata_1 = require('./todolistdata');
var todoitem_1 = require('./todoitem');
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
    TodoListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TodoListService);
    return TodoListService;
}());
exports.TodoListService = TodoListService;
//# sourceMappingURL=todolist.service.js.map