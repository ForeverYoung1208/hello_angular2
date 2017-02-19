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
var TodoItemComponent = (function () {
    function TodoItemComponent() {
        this.deleteItemEvent = new core_1.EventEmitter();
    }
    TodoItemComponent.prototype.onDelete = function () {
        this.deleteItemEvent.emit(this.todoItem);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', todoitem_1.TodoItem)
    ], TodoItemComponent.prototype, "todoItem", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TodoItemComponent.prototype, "deleteItemEvent", void 0);
    TodoItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todoitem',
            templateUrl: 'todoitem.component.html',
            styleUrls: ['todoitem.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TodoItemComponent);
    return TodoItemComponent;
}());
exports.TodoItemComponent = TodoItemComponent;
//# sourceMappingURL=todoitem.component.js.map