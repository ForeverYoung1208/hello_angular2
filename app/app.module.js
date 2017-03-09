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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var todomenu_component_1 = require('./todomenu/todomenu.component');
var hello2_component_1 = require('./hello2/hello2.component');
var todoblock_component_1 = require('./todoblock/todoblock.component');
var todoblockremote_component_1 = require('./todoblock/todoblockremote.component');
var todoblockws_component_1 = require('./todoblock/todoblockws.component');
var todoblockac_component_1 = require('./todoblock/todoblockac.component');
var wsform_component_1 = require('./newitemform/wsform.component');
var acform_component_1 = require('./newitemform/acform.component');
var todoitem_component_1 = require('./todoitem/todoitem.component');
var newitemform_component_1 = require('./newitemform/newitemform.component');
var todolist_service_1 = require('./shared/todolist.service');
var websocket_service_1 = require('./shared/websocket.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: "todo-frontend", component: todoblock_component_1.TodoBlockComponent },
                    { path: "todo-backend", component: todoblockremote_component_1.TodoBlockRemoteComponent },
                    { path: "todo-ws", component: todoblockws_component_1.TodoBlockWSComponent },
                    { path: "todo-ac", component: todoblockac_component_1.TodoBlockACComponent },
                    { path: "", component: hello2_component_1.Hello2Component }
                ]),
                http_1.HttpModule
            ],
            declarations: [app_component_1.AppComponent,
                todomenu_component_1.TodoMenuComponent,
                hello2_component_1.Hello2Component,
                todoblock_component_1.TodoBlockComponent,
                todoblockremote_component_1.TodoBlockRemoteComponent,
                todoblockws_component_1.TodoBlockWSComponent,
                todoblockac_component_1.TodoBlockACComponent,
                wsform_component_1.WSFormComponent,
                acform_component_1.ACFormComponent,
                todoitem_component_1.TodoItemComponent,
                newitemform_component_1.NewItemFormComponent
            ],
            providers: [todolist_service_1.TodoListLocalService,
                todolist_service_1.TodoListRemoteService,
                todolist_service_1.TodoListWSService,
                todolist_service_1.TodoListACService,
                websocket_service_1.WebSocketService,
                websocket_service_1.ChannelWebsocketService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map