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
var Rx_1 = require('rxjs/Rx');
var WebSocketService = (function () {
    function WebSocketService() {
        this.url = 'http://192.168.0.128:3000';
        //  apiUrl:string = 'http://192.168.99.51:3000';
        this.message = new Rx_1.Subject();
        this.opened = new Rx_1.Subject();
    }
    WebSocketService.prototype.close = function () {
        this.socket.unsubscribe();
        this.ws.complete();
    };
    WebSocketService.prototype.sendMessage = function (message) {
        this.ws.next(message);
    };
    WebSocketService.prototype.start = function (url) {
        var _this = this;
        var self = this;
        this.url = url;
        this.ws = Rx_1.Observable.webSocket(this.url);
        this.socket = this.ws.subscribe({
            next: function (data) {
                if (data['type'] == 'welcome') {
                    self.opened.next(true);
                }
                _this.message.next(data);
            },
            error: function () {
                self.opened.next(false);
                _this.message.next({ type: 'closed' });
                self.socket.unsubscribe();
                setTimeout(function () {
                    self.start(self.url);
                }, 1000);
            },
            complete: function () {
                _this.message.next({ type: 'closed' });
            }
        });
    };
    WebSocketService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], WebSocketService);
    return WebSocketService;
}());
exports.WebSocketService = WebSocketService;
var ChannelWebsocketService = (function () {
    function ChannelWebsocketService(websocketService) {
        this.websocketService = websocketService;
        this.observableData = new Rx_1.Subject();
        this.identifier = {};
        this.subscribed = new Rx_1.Subject();
        this.observeOpened();
        this.observeMessage();
    }
    ChannelWebsocketService.encodeIdentifier = function (identifier) {
        return JSON.parse(identifier);
    };
    ChannelWebsocketService.getDataString = function (parameters) {
        var first = true, result = '';
        for (var key in parameters) {
            if (first) {
                first = false;
                result += "\"" + key + "\":\"" + parameters[key] + "\"";
            }
            else {
                result += ", \"" + key + "\":\"" + parameters[key] + "\"";
            }
        }
        return "{ " + result + " }";
    };
    ChannelWebsocketService.prototype.getSubscribeString = function () {
        this.identifierStr = ChannelWebsocketService.getDataString(this.identifier);
        return JSON.stringify({
            command: 'subscribe',
            identifier: this.identifierStr
        });
    };
    ;
    ChannelWebsocketService.prototype.isThisChannel = function (data) {
        if (data['identifier']) {
            var identifier = ChannelWebsocketService.encodeIdentifier(data['identifier']);
            if (JSON.stringify(identifier) === JSON.stringify(this.identifier)) {
                return true;
            }
        }
        return false;
    };
    ChannelWebsocketService.prototype.observeMessage = function () {
        var _this = this;
        var self = this;
        this.websocketService.message.subscribe(function (data) {
            if (self.isThisChannel(data)) {
                if (data['type'] && data['type'] == 'confirm_subscription') {
                    _this.subscribed.next(true);
                }
                else if (data['message']) {
                    _this.observableData.next(data['message']);
                }
            }
        });
    };
    ChannelWebsocketService.prototype.observeOpened = function () {
        var self = this;
        this.websocketService.opened.subscribe(function (data) {
            self.socketStarted = data;
            if (data) {
                self.subscribe();
            }
        });
    };
    ChannelWebsocketService.prototype.subscribe = function () {
        this.websocketService.sendMessage(this.getSubscribeString());
    };
    ChannelWebsocketService.prototype.send = function (data) {
        this.websocketService.sendMessage(JSON.stringify({
            command: 'message',
            identifier: this.identifierStr,
            data: ChannelWebsocketService.getDataString(data)
        }));
    };
    ChannelWebsocketService.prototype.unsubscribe = function () {
        this.websocketService.sendMessage(JSON.stringify({
            command: 'unsubscribe',
            identifier: this.identifierStr }));
        this.subscribed.next(false);
    };
    ChannelWebsocketService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [WebSocketService])
    ], ChannelWebsocketService);
    return ChannelWebsocketService;
}());
exports.ChannelWebsocketService = ChannelWebsocketService;
//# sourceMappingURL=websocket.service.js.map