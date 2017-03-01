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
var MenuItem = (function () {
    function MenuItem(id, name, onClick) {
        this.id = id;
        this.name = name;
        this.onClick = onClick;
    }
    return MenuItem;
}());
var TodoMenuComponent = (function () {
    function TodoMenuComponent() {
        this.menu = [];
        this.menu.push(new MenuItem(1, ' Алерт1 ', function (m) { alert(m.name); }));
        this.menu.push(new MenuItem(2, ' Алерт2 ', function (m) { alert(m.name); }));
        this.menu.push(new MenuItem(3, ' Алерт3 ', function (m) { alert(m.name); }));
    }
    TodoMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todomenu',
            templateUrl: 'todomenu.component.html',
            styleUrls: ['todomenu.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TodoMenuComponent);
    return TodoMenuComponent;
}());
exports.TodoMenuComponent = TodoMenuComponent;
//# sourceMappingURL=todomenu.component.js.map