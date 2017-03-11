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
var ACFormComponent = (function () {
    function ACFormComponent() {
        this.newItem = {
            id: 0,
            caption: 'testteeeequick-Action Cable',
            duration: 1,
            isDone: false
        };
        this.listRefreshEvent = new core_1.EventEmitter();
    }
    ;
    ACFormComponent.prototype.onAddItem = function () {
    };
    ;
    ACFormComponent.prototype.onUpdate = function () {
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ACFormComponent.prototype, "listRefreshEvent", void 0);
    ACFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'acform',
            templateUrl: 'acform.component.html',
            styleUrls: ['newitemform.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ACFormComponent);
    return ACFormComponent;
}());
exports.ACFormComponent = ACFormComponent;
//# sourceMappingURL=acform.component.js.map