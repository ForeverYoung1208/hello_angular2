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
    TodoBlockACComponent.prototype.getAllItems = function () {
    };
    TodoBlockACComponent.prototype.ngOnInit = function () {
        this.listItemsService.subscribe();
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