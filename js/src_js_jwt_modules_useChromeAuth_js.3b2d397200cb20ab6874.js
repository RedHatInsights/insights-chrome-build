"use strict";
(self["webpackChunkinsights_chrome"] = self["webpackChunkinsights_chrome"] || []).push([["src_js_jwt_modules_useChromeAuth_js"],{

/***/ "./src/js/jwt/modules/useChromeAuth.js":
/*!*********************************************!*\
  !*** ./src/js/jwt/modules/useChromeAuth.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initChromeAuth": () => (/* binding */ initChromeAuth),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _insights_offline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../insights/offline */ "./src/js/jwt/insights/offline.js");
/* harmony import */ var _jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jwt */ "./src/js/jwt/jwt.ts");
/* harmony import */ var _jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jwt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/js/jwt/constants.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var TIMER_STR = '[JWT][jwt.js] Auth time';

function bouncer() {
  if (!_jwt__WEBPACK_IMPORTED_MODULE_2__.isAuthenticated()) {
    js_cookie__WEBPACK_IMPORTED_MODULE_3__.default.remove(_constants__WEBPACK_IMPORTED_MODULE_4__.options.cookieName);
    _jwt__WEBPACK_IMPORTED_MODULE_2__.login();
  }

  console.timeEnd(TIMER_STR); // eslint-disable-line no-console
}

var initChromeAuth = function initChromeAuth() {
  console.time(TIMER_STR); // eslint-disable-line no-console

  var options = _objectSpread({}, _constants__WEBPACK_IMPORTED_MODULE_4__.options);

  (0,_insights_offline__WEBPACK_IMPORTED_MODULE_1__.wipePostbackParamsThatAreNotForUs)();
  var token = js_cookie__WEBPACK_IMPORTED_MODULE_3__.default.get(options.cookieName);
  var refreshToken = js_cookie__WEBPACK_IMPORTED_MODULE_3__.default.get('cs_jwt_refresh'); // If we find an existing token, use it
  // so that we dont auth even when a valid token is present
  // otherwise its quick, but we bounce around and get a new token
  // on every page load

  if (token && token.length > 10 && refreshToken && refreshToken.length > 10) {
    options.refreshToken = refreshToken;
    options.token = token;
  }

  var promise = _jwt__WEBPACK_IMPORTED_MODULE_2__.init(options).then(bouncer);
  return {
    initPromise: promise
  };
};

var useChromeAuth = function useChromeAuth() {
  var options = _objectSpread({}, _constants__WEBPACK_IMPORTED_MODULE_4__.options);

  return _objectSpread({
    getOfflineToken: function getOfflineToken() {
      return (0,_insights_offline__WEBPACK_IMPORTED_MODULE_1__.getOfflineToken)(options.realm, options.clientId);
    }
  }, _jwt__WEBPACK_IMPORTED_MODULE_2__);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useChromeAuth);

/***/ })

}]);