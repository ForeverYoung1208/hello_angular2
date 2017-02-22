"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var todoblock_component_1 = require('./todoblock.component');
var todolist_service_1 = require('./../shared/todolist.service');
var TodoBlockRemoteComponent = (function (_super) {
    __extends(TodoBlockRemoteComponent, _super);
    function TodoBlockRemoteComponent(listItemsService) {
        _super.call(this, listItemsService);
        this.listItemsService = listItemsService;
        this.items = [];
    }
    TodoBlockRemoteComponent.prototype.ngOnInit = function () {
        this.items = this.listItemsService.getListData();
    };
    TodoBlockRemoteComponent.prototype.addItem = function (newItem) {
        this.listItemsService.addItem(newItem);
    };
    ;
    TodoBlockRemoteComponent.prototype.addEmptyItem = function () {
        var newItem = new todoitem_1.TodoItem(0, 'write caption here', false, 1);
        this.listItemsService.addItem(newItem);
    };
    TodoBlockRemoteComponent.prototype.removeItem = function (item) {
        this.listItemsService.removeItemById(item.id);
        console.log('delete: ' + item);
    };
    TodoBlockRemoteComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todoblock',
            templateUrl: 'todoblock.component.html',
            styleUrls: ['todoblock.component.css']
        }), 
        __metadata('design:paramtypes', [todolist_service_1.TodoListRemoteService])
    ], TodoBlockRemoteComponent);
    return TodoBlockRemoteComponent;
}(todoblock_component_1.TodoBlockComponent));
exports.TodoBlockRemoteComponent = TodoBlockRemoteComponent;
//# sourceMappingURL=todoblockremote.component.js.map