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
var todoitem_1 = require('./../shared/todoitem');
var todolistdata_1 = require('./../shared/todolistdata');
//import { TodoListService } from './../shared/todolist.service'
var TodoBlockComponent = (function () {
    function TodoBlockComponent() {
        this.items = todolistdata_1.todoListData;
    }
    TodoBlockComponent.prototype.additem = function (newItem) {
        this.items.push(newItem);
        return this.items.length;
    };
    ;
    TodoBlockComponent.prototype.nextItemId = function () {
        var nextItemId = 1;
        if (this.items.length > 0) {
            nextItemId = Math.max.apply(null, this.items.map(function (a) { return a.id; })) + 1;
        }
        ;
        return nextItemId;
    };
    TodoBlockComponent.prototype.addEmptyItem = function (event) {
        var newItem = new todoitem_1.TodoItem(this.nextItemId(), 'write caption here', false, 1);
        console.log(newItem);
        console.log(this.additem(newItem));
    };
    TodoBlockComponent.prototype.removeItemById = function (id) {
        var i = this.items.findIndex(function (item) { return item.id == id; });
        this.items.splice(i, 1);
        return this.items.length;
    };
    TodoBlockComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todoblock',
            templateUrl: 'todoblock.component.html',
            styleUrls: ['todoblock.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TodoBlockComponent);
    return TodoBlockComponent;
}());
exports.TodoBlockComponent = TodoBlockComponent;
//# sourceMappingURL=todoblock.component.js.map