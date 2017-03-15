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
var todolist_service_1 = require('./../shared/todolist.service');
var TodoBlockACComponent = (function () {
    function TodoBlockACComponent(listItemsService) {
        this.listItemsService = listItemsService;
        this.items = [];
    }
    TodoBlockACComponent.prototype.findItemById = function (id) {
        return;
    };
    TodoBlockACComponent.prototype.subscribeToCable = function () {
        var _this = this;
        this.listItemsService.subscribeToChanges(function (data) {
            switch (data.action) {
                case "show": {
                    data.todos.forEach(function (item) {
                        var newItem = {
                            id: item.id,
                            caption: item.caption,
                            isDone: item.isDone,
                            duration: item.duration
                        };
                        _this.items.push(newItem);
                    });
                    break;
                }
                case "remove": {
                    data.todos.forEach(function (itemToRemove) {
                        var i = _this.items.findIndex(function (item) {
                            if (item.id == itemToRemove.id) {
                                return true;
                            }
                        });
                        _this.items.splice(i, 1);
                    });
                    break;
                }
                case "uptade": {
                    data.todos.forEach(function (itemToUpdate) {
                        var i = _this.items.findIndex(function (item) {
                            if (item.id == itemToUpdate.id) {
                                return true;
                            }
                        });
                        _this.items[i].caption = itemToUpdate.caption;
                        _this.items[i].isDone = itemToUpdate.isDone;
                        _this.items[i].duration = itemToUpdate.duration;
                    });
                    break;
                }
            }
        });
    };
    TodoBlockACComponent.prototype.getAllItems = function () {
        var _this = this;
        this.listItemsService.getItems(function (items) { _this.items = items; });
    };
    TodoBlockACComponent.prototype.ngOnInit = function () {
        this.getAllItems();
        this.subscribeToCable();
    };
    TodoBlockACComponent.prototype.refreshItems = function () {
    };
    TodoBlockACComponent.prototype.removeItem = function (item) {
    };
    TodoBlockACComponent.prototype.updateItem = function (item) {
    };
    TodoBlockACComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todoblockac',
            templateUrl: 'todoblockac.component.html',
            styleUrls: ['todoblockac.component.css']
        }), 
        __metadata('design:paramtypes', [todolist_service_1.TodoListACService])
    ], TodoBlockACComponent);
    return TodoBlockACComponent;
}());
exports.TodoBlockACComponent = TodoBlockACComponent;
//# sourceMappingURL=todoblockac.component.js.map