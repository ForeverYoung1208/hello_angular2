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
var todolist_service_1 = require('./../shared/todolist.service');
var TodoBlockComponent = (function () {
    function TodoBlockComponent(listItemsService) {
        this.listItemsService = listItemsService;
        this.items = [];
    }
    TodoBlockComponent.prototype.ngOnInit = function () {
        this.items = this.listItemsService.getListData();
    };
    TodoBlockComponent.prototype.addItem = function (newItem) {
        this.listItemsService.addItem(newItem);
    };
    ;
    TodoBlockComponent.prototype.addEmptyItem = function () {
        var newItem = new todoitem_1.TodoItem(0, 'write caption here', false, 1);
        this.listItemsService.addItem(newItem);
    };
    TodoBlockComponent.prototype.removeItem = function (item) {
        this.listItemsService.removeItemById(item.id);
        console.log('delete: ' + item);
    };
    TodoBlockComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todoblock',
            templateUrl: 'todoblock.component.html',
            styleUrls: ['todoblock.component.css']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof todolist_service_1.TodoListService !== 'undefined' && todolist_service_1.TodoListService) === 'function' && _a) || Object])
    ], TodoBlockComponent);
    return TodoBlockComponent;
    var _a;
}());
exports.TodoBlockComponent = TodoBlockComponent;
//# sourceMappingURL=todoblock.component.js.map