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
var myconfig_1 = require('./../shared/myconfig');
var core_1 = require('@angular/core');
var todolist_service_1 = require('./../shared/todolist.service');
var websocket_service_1 = require('./../shared/websocket.service');
var TodoBlockWSComponent = (function () {
    function TodoBlockWSComponent(listItemsService, webSocketService) {
        var _this = this;
        this.listItemsService = listItemsService;
        this.webSocketService = webSocketService;
        this.items = [];
        this.webSocketService.start(myconfig_1.MyConfig.apiProtocolWS + myconfig_1.MyConfig.apiAddress + myconfig_1.MyConfig.cableSuffix);
        this.listItemsService.subscribed.subscribe(function (data) {
            if (data) {
                _this.getAllItems();
            }
        });
    }
    TodoBlockWSComponent.prototype.getAllItems = function () {
        this.listItemsService.send({ action: 'index' });
    };
    TodoBlockWSComponent.prototype.ngOnInit = function () {
    };
    TodoBlockWSComponent.prototype.refreshItems = function () {
    };
    TodoBlockWSComponent.prototype.removeItem = function (item) {
    };
    TodoBlockWSComponent.prototype.updateItem = function (item) {
    };
    TodoBlockWSComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todoblockws',
            templateUrl: 'todoblockws.component.html',
            styleUrls: ['todoblockws.component.css']
        }), 
        __metadata('design:paramtypes', [todolist_service_1.TodoListWSService, websocket_service_1.WebSocketService])
    ], TodoBlockWSComponent);
    return TodoBlockWSComponent;
}());
exports.TodoBlockWSComponent = TodoBlockWSComponent;
//# sourceMappingURL=todoblockws.component.js.map