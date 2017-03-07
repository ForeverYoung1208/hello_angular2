"use strict";
var MyConfig = (function () {
    function MyConfig() {
    }
    MyConfig.apiProtocolWS = 'ws:';
    MyConfig.apiAddress = '//192.168.0.128:3000';
    MyConfig.cableSuffix = '/cable';
    MyConfig.apiUrl = 'http://' + MyConfig.apiAddress;
    return MyConfig;
}());
exports.MyConfig = MyConfig;
//# sourceMappingURL=myconfig.js.map