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
var Hello2Component = (function () {
    function Hello2Component() {
        this.strings = {
            first: 'first string',
            second: 'second string'
        };
    }
    Hello2Component = __decorate([
        core_1.Component({
            selector: 'hello2',
            templateUrl: 'app/hello2/hello2.component.html',
            styleUrls: ['app/hello2/hello2.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], Hello2Component);
    return Hello2Component;
}());
exports.Hello2Component = Hello2Component;
//# sourceMappingURL=hello2.component.js.map