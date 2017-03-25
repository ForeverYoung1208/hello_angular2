"use strict";
var MyConfig = (function () {
    function MyConfig() {
    }
    MyConfig.apiProtocolWS = 'ws:';
    MyConfig.apiAddress = '//192.168.0.128:3000';
    //	static apiAddress:string = '//192.168.99.51:3000';
    //  static apiAddress:string = '//192.168.0.240:3000';
    MyConfig.cableSuffix = '/cable';
    MyConfig.cableAddress = MyConfig.apiProtocolWS + MyConfig.apiAddress + MyConfig.cableSuffix;
    MyConfig.apiUrl = 'http:' + MyConfig.apiAddress;
    MyConfig.channel = 'TodosChannel';
    return MyConfig;
}());
exports.MyConfig = MyConfig;
//# sourceMappingURL=myconfig.js.map