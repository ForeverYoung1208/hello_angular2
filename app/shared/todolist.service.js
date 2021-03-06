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
var websocket_service_1 = require('./websocket.service');
var http_1 = require('@angular/http');
var todolistdata_1 = require('./todolistdata');
var todoitem_1 = require('./todoitem');
var myconfig_1 = require('./myconfig');
var TodoListLocalService = (function () {
    function TodoListLocalService() {
        this.items = todolistdata_1.todoListData;
    }
    TodoListLocalService.prototype.getListData = function () {
        return this.items;
    };
    TodoListLocalService.prototype.addItem = function (newItem) {
        newItem.id = this.nextItemId();
        this.items.push(newItem);
    };
    ;
    TodoListLocalService.prototype.nextItemId = function () {
        var nextItemId = 1;
        if (this.items.length > 0) {
            nextItemId = Math.max.apply(null, this.items.map(function (a) { return a.id; })) + 1;
        }
        ;
        return nextItemId;
    };
    TodoListLocalService.prototype.addEmptyItem = function () {
        var newItem = new todoitem_1.TodoItem(this.nextItemId(), 'write caption here', false, 1);
        console.log('new item in service: ' + newItem);
    };
    TodoListLocalService.prototype.removeItemById = function (id) {
        var i = this.items.findIndex(function (item) { return item.id == id; });
        this.items.splice(i, 1);
    };
    TodoListLocalService.prototype.getItemById = function (id) {
        var t = this.items.find(function (item) { return item.id == id; });
        return t;
    };
    TodoListLocalService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TodoListLocalService);
    return TodoListLocalService;
}());
exports.TodoListLocalService = TodoListLocalService;
var TodoListRemoteService = (function () {
    function TodoListRemoteService(http) {
        this.http = http;
        this.items = [];
        this.apiUrl = myconfig_1.MyConfig.apiUrl;
    }
    ;
    TodoListRemoteService.prototype.updateListData = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        this.http.get(this.apiUrl + '/todos').subscribe(function (result) {
            _this.items = result.json();
            if (callback) {
                callback();
            }
            ;
        }, function (error) { return console.log(error.statusText); });
    };
    TodoListRemoteService.prototype.getListData = function () {
        return this.items;
    };
    TodoListRemoteService.prototype.addItem = function (newItem, callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        this.http.post(this.apiUrl + '/todos', newItem).subscribe(function (result) {
            _this.updateListData(callback);
            console.log(result.statusText);
        }, function (error) { return console.log(error.statusText); });
    };
    ;
    TodoListRemoteService.prototype.removeItemById = function (id, callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        this.http.delete(this.apiUrl + '/todos/' + id).subscribe(function (result) {
            _this.updateListData(callback);
            console.log(result.statusText);
        }, function (error) { return console.log(error.statusText); });
    };
    ;
    TodoListRemoteService.prototype.updateItem = function (item) {
        return this.http.put(this.apiUrl + '/todos/' + item.id, item);
    };
    TodoListRemoteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TodoListRemoteService);
    return TodoListRemoteService;
}());
exports.TodoListRemoteService = TodoListRemoteService;
var TodoListWSService = (function (_super) {
    __extends(TodoListWSService, _super);
    function TodoListWSService(webSocketService) {
        _super.call(this, webSocketService);
        this.identifier = {
            channel: 'TodosChannel'
        };
    }
    TodoListWSService.prototype.getItems = function () {
        this.sendToAction({}, 'index');
    };
    TodoListWSService.prototype.addItem = function (newItem, callback) {
        if (callback === void 0) { callback = null; }
        this.sendToAction(newItem, 'create');
    };
    ;
    TodoListWSService.prototype.removeItemById = function (id, callback) {
        if (callback === void 0) { callback = null; }
    };
    ;
    TodoListWSService.prototype.updateItem = function (item) {
        this.sendToAction(item, 'update');
    };
    TodoListWSService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [websocket_service_1.WebSocketService])
    ], TodoListWSService);
    return TodoListWSService;
}(websocket_service_1.ChannelWebsocketService));
exports.TodoListWSService = TodoListWSService;
var TodoListACService = (function () {
    function TodoListACService(http) {
        this.http = http;
        this.apiUrl = myconfig_1.MyConfig.apiUrl;
        this.cableUrl = myconfig_1.MyConfig.cableAddress;
        this.channel = myconfig_1.MyConfig.channel;
        this.ActionCable = require('actioncable');
        this.cable = this.ActionCable.createConsumer(this.cableUrl);
    }
    TodoListACService.prototype.subscribeToChanges = function (channelUser, callback, channel) {
        var _this = this;
        if (channel === void 0) { channel = this.channel; }
        var params = new http_1.URLSearchParams();
        params.set('channelUser', channelUser);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, search: params, withCredentials: true });
        this.http.get(this.apiUrl + '/subscribe_to_ws', options).subscribe(function (result) {
            console.log('result');
            console.log(result);
            _this.subscription = _this.cable.subscriptions.create({
                'channel': channel,
                'channelUser': channelUser
            }, {
                received: function (data) {
                    callback(data);
                }
            });
        }, function (error) {
            console.log('error');
            console.log(error);
        });
        // this.subscription = this.cable.subscriptions.create(
        //   {
        //     'channel': channel,
        //     'channelUser': channelUser
        //   },
        //   {
        //     received: (data:any) => {
        //       callback( data );
        //     }
        //   }
        // )
    };
    TodoListACService.prototype.getItems = function (callback) {
        this.http.get(this.apiUrl + '/todos').subscribe(function (result) {
            var items = result.json();
            if (callback) {
                callback(items);
            }
            ;
        }, function (error) { return console.log(error.statusText); });
    };
    TodoListACService.prototype.addItem = function (newItem, callback) {
        if (callback === void 0) { callback = null; }
    };
    ;
    TodoListACService.prototype.removeItemById = function (id, callback) {
        if (callback === void 0) { callback = null; }
    };
    ;
    TodoListACService.prototype.updateItem = function (item) {
    };
    TodoListACService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TodoListACService);
    return TodoListACService;
}());
exports.TodoListACService = TodoListACService;
//# sourceMappingURL=todolist.service.js.map