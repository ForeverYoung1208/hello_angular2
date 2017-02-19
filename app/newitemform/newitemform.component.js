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
var NewItemFormComponent = (function () {
    function NewItemFormComponent() {
        this.newItem = {
            id: 0,
            caption: 'testteeeeq',
            duration: 3,
            isDone: false
        };
        this.newItemEvent = new core_1.EventEmitter();
    }
    NewItemFormComponent.prototype.onNewItem = function () {
        this.newItemEvent.emit(Object.assign({}, this.newItem));
    };
    NewItemFormComponent.prototype.onAddItem = function () {
        var a = new todolist_service_1.TodoListService();
        a.addItem(Object.assign({}, this.newItem));
    };
    ;
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewItemFormComponent.prototype, "newItemEvent", void 0);
    NewItemFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'newitemform',
            templateUrl: 'newitemform.component.html',
            styleUrls: ['newitemform.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], NewItemFormComponent);
    return NewItemFormComponent;
}());
exports.NewItemFormComponent = NewItemFormComponent;
//# sourceMappingURL=newitemform.component.js.map