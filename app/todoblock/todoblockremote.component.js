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
var TodoBlockRemoteComponent = (function () {
    function TodoBlockRemoteComponent(listItemsService) {
        this.listItemsService = listItemsService;
    }
    TodoBlockRemoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listItemsService.updateListData(function () { _this.items = _this.listItemsService.getListData(); });
    };
    TodoBlockRemoteComponent.prototype.refreshItems = function () {
        this.items = this.listItemsService.getListData();
    };
    TodoBlockRemoteComponent.prototype.removeItem = function (item) {
        var _this = this;
        this.listItemsService.removeItemById(item.id, function () { _this.items = _this.listItemsService.getListData(); });
    };
    TodoBlockRemoteComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todoblockremote',
            templateUrl: 'todoblockremote.component.html',
            styleUrls: ['todoblockremote.component.css']
        }), 
        __metadata('design:paramtypes', [todolist_service_1.TodoListRemoteService])
    ], TodoBlockRemoteComponent);
    return TodoBlockRemoteComponent;
}());
exports.TodoBlockRemoteComponent = TodoBlockRemoteComponent;
//# sourceMappingURL=todoblockremote.component.js.map