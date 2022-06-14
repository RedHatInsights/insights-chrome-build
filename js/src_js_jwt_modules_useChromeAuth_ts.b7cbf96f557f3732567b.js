"use strict";
(self["webpackChunkinsights_chrome"] = self["webpackChunkinsights_chrome"] || []).push([["src_js_jwt_modules_useChromeAuth_ts"],{

/***/ "./src/js/jwt/modules/useChromeAuth.ts":
/*!*********************************************!*\
  !*** ./src/js/jwt/modules/useChromeAuth.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initChromeAuth = void 0;
var offline_1 = __webpack_require__(/*! ../insights/offline */ "./src/js/jwt/insights/offline.ts");
var jwt = __importStar(__webpack_require__(/*! ../jwt */ "./src/js/jwt/jwt.ts"));
var js_cookie_1 = __importDefault(__webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.js"));
var constants_1 = __webpack_require__(/*! ../constants */ "./src/js/jwt/constants.ts");
var TIMER_STR = '[JWT][jwt.js] Auth time';
function bouncer() {
    if (!jwt.isAuthenticated()) {
        js_cookie_1.default.remove(constants_1.options.cookieName);
        jwt.login();
    }
    console.timeEnd(TIMER_STR);
}
var initChromeAuth = function () {
    console.time(TIMER_STR);
    var options = __assign({}, constants_1.options);
    (0, offline_1.wipePostbackParamsThatAreNotForUs)();
    var token = js_cookie_1.default.get(options.cookieName);
    var refreshToken = js_cookie_1.default.get('cs_jwt_refresh');
    if (token && token.length > 10 && refreshToken && refreshToken.length > 10) {
        options.refreshToken = refreshToken;
        options.token = token;
    }
    var promise = jwt.init(options).then(bouncer);
    return {
        initPromise: promise,
    };
};
exports.initChromeAuth = initChromeAuth;
var useChromeAuth = function () {
    var options = __assign({}, constants_1.options);
    return __assign({ getOfflineToken: function () { return (0, offline_1.getOfflineToken)(options.realm, options.clientId); } }, jwt);
};
exports.default = useChromeAuth;


/***/ })

}]);