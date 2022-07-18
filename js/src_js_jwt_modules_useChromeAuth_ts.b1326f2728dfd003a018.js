"use strict";
(self["webpackChunkinsights_chrome"] = self["webpackChunkinsights_chrome"] || []).push([["src_js_jwt_modules_useChromeAuth_ts"],{

/***/ "./src/js/jwt/modules/useChromeAuth.ts":
/*!*********************************************!*\
  !*** ./src/js/jwt/modules/useChromeAuth.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initChromeAuth": () => (/* binding */ initChromeAuth),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _insights_offline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../insights/offline */ "./src/js/jwt/insights/offline.ts");
/* harmony import */ var _jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jwt */ "./src/js/jwt/jwt.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/js/jwt/constants.ts");




const TIMER_STR = '[JWT][jwt.js] Auth time';
function bouncer() {
    if (!_jwt__WEBPACK_IMPORTED_MODULE_1__.isAuthenticated()) {
        js_cookie__WEBPACK_IMPORTED_MODULE_2__.default.remove(_constants__WEBPACK_IMPORTED_MODULE_3__.options.cookieName);
        _jwt__WEBPACK_IMPORTED_MODULE_1__.login();
    }
    console.timeEnd(TIMER_STR); // eslint-disable-line no-console
}
const initChromeAuth = () => {
    console.time(TIMER_STR); // eslint-disable-line no-console
    const options = {
        ..._constants__WEBPACK_IMPORTED_MODULE_3__.options,
    };
    (0,_insights_offline__WEBPACK_IMPORTED_MODULE_0__.wipePostbackParamsThatAreNotForUs)();
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_2__.default.get(options.cookieName);
    const refreshToken = localStorage.getItem('cs_jwt_refresh');
    // If we find an existing token, use it
    // so that we dont auth even when a valid token is present
    // otherwise its quick, but we bounce around and get a new token
    // on every page load
    if (token && token.length > 10 && refreshToken && refreshToken.length > 10) {
        options.refreshToken = refreshToken;
        options.token = token;
    }
    const promise = _jwt__WEBPACK_IMPORTED_MODULE_1__.init(options).then(bouncer);
    return {
        initPromise: promise,
    };
};
const useChromeAuth = () => {
    const options = {
        ..._constants__WEBPACK_IMPORTED_MODULE_3__.options,
    };
    return {
        getOfflineToken: () => (0,_insights_offline__WEBPACK_IMPORTED_MODULE_0__.getOfflineToken)(options.realm, options.clientId),
        ..._jwt__WEBPACK_IMPORTED_MODULE_1__,
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useChromeAuth);


/***/ })

}]);