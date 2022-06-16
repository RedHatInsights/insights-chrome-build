(self["webpackChunkinsights_chrome"] = self["webpackChunkinsights_chrome"] || []).push([["src_js_jwt_insights_offline_ts-src_js_jwt_jwt_ts"],{

/***/ "./src/js/App/FeatureFlags/FeatureFlagsProvider.js":
/*!*********************************************************!*\
  !*** ./src/js/App/FeatureFlags/FeatureFlagsProvider.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UNLEASH_ERROR_KEY": () => (/* binding */ UNLEASH_ERROR_KEY),
/* harmony export */   "unleashClient": () => (/* binding */ unleashClient),
/* harmony export */   "getFeatureFlagsError": () => (/* binding */ getFeatureFlagsError),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @unleash/proxy-client-react */ "webpack/sharing/consume/default/@unleash/proxy-client-react/@unleash/proxy-client-react");
/* harmony import */ var _unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_2__);



var config = {
  url: "".concat(document.location.origin, "/api/featureflags/v0"),
  clientKey: 'proxy-123',
  appName: 'web',
  headerName: 'X-Unleash-Auth',
  refreshInterval: 60000,
  metrcisInterval: 120000
};
var UNLEASH_ERROR_KEY = 'chrome:feature-flags:error';
/**
 * Clear error localstorage flag before initialization
 */

localStorage.setItem(UNLEASH_ERROR_KEY, false);
var unleashClient = new _unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_2__.UnleashClient(config);
var getFeatureFlagsError = function getFeatureFlagsError() {
  return localStorage.getItem(UNLEASH_ERROR_KEY) === 'true';
};
unleashClient.on('error', function () {
  localStorage.setItem(UNLEASH_ERROR_KEY, true);
});

var FeatureFlagsProvider = function FeatureFlagsProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_2___default()), {
    unleashClient: unleashClient
  }, children);
};

FeatureFlagsProvider.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeatureFlagsProvider);

/***/ }),

/***/ "./src/js/consts.js":
/*!**************************!*\
  !*** ./src/js/consts.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HYDRA_ENDPOINT": () => (/* binding */ HYDRA_ENDPOINT),
/* harmony export */   "REQUESTS_COUNT": () => (/* binding */ REQUESTS_COUNT),
/* harmony export */   "REQUESTS_DATA": () => (/* binding */ REQUESTS_DATA),
/* harmony export */   "ACTIVE_ACCOUNT_SWITCH_NOTIFICATION": () => (/* binding */ ACTIVE_ACCOUNT_SWITCH_NOTIFICATION),
/* harmony export */   "ACCOUNT_REQUEST_TIMEOUT": () => (/* binding */ ACCOUNT_REQUEST_TIMEOUT),
/* harmony export */   "CROSS_ACCESS_ACCOUNT_NUMBER": () => (/* binding */ CROSS_ACCESS_ACCOUNT_NUMBER),
/* harmony export */   "ACTIVE_REMOTE_REQUEST": () => (/* binding */ ACTIVE_REMOTE_REQUEST),
/* harmony export */   "CROSS_ACCESS_ORG_ID": () => (/* binding */ CROSS_ACCESS_ORG_ID),
/* harmony export */   "visibilityFunctions": () => (/* binding */ visibilityFunctions),
/* harmony export */   "isVisible": () => (/* binding */ isVisible),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_interceptors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/interceptors */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/esm/interceptors/interceptors.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _App_FeatureFlags_FeatureFlagsProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./App/FeatureFlags/FeatureFlagsProvider */ "./src/js/App/FeatureFlags/FeatureFlagsProvider.js");




var _excluded = ["url", "method", "accessor", "matcher"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var obj = {
  noAuthParam: 'noauth',
  offlineToken: '2402500adeacc30eb5c5a8a5e2e0ec1f'
};
var HYDRA_ENDPOINT = '/hydra/rest/se/sessions';
/**
 * Keys for storing acess reqeusts data
 */

var REQUESTS_COUNT = 'chrome:cross-account-requests:pending:count';
var REQUESTS_DATA = 'chrome:cross-account-requests:pending:data';
var ACTIVE_ACCOUNT_SWITCH_NOTIFICATION = 'chrome:cross-account-requests:active-notification';
var ACCOUNT_REQUEST_TIMEOUT = 'chrome:cross-account-requests:request-timeout';
var CROSS_ACCESS_ACCOUNT_NUMBER = 'cross_access_account_number';
var ACTIVE_REMOTE_REQUEST = 'chrome/active-remote-request';
var CROSS_ACCESS_ORG_ID = 'cross_access_org_id';
var matcherMapper = {
  isEmpty: (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()),
  isNotEmpty: function isNotEmpty(value) {
    return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(value);
  }
};
/**
 * returns true/false if value matches required criteria. If invalid or no matcher is provided it returns the original value.
 * @param {any} value variable to be matched with matcher function
 * @param {string} matcher id of matcher
 */

var matchValue = function matchValue(value, matcher) {
  var match = matcherMapper[matcher];
  return typeof match === 'function' ? match(value) : value;
};
/**
 * Check if is permitted to see navigation link
 * @param {array} permissions array checked user permissions
 * @param {every|some} require type of permissions requirement
 * @returns {boolean}
 */


var checkPermissions = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
    var permissions,
        require,
        userPermissions,
        _args = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            permissions = _args.length > 0 && _args[0] !== undefined ? _args[0] : [];
            require = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'every';
            _context.next = 4;
            return insights.chrome.getUserPermissions();

          case 4:
            userPermissions = _context.sent;
            return _context.abrupt("return", userPermissions && permissions[require](function (item) {
              return userPermissions.find(function (_ref2) {
                var permission = _ref2.permission;
                return permission === item;
              });
            }));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkPermissions() {
    return _ref.apply(this, arguments);
  };
}();

var visibilityFunctions = {
  isOrgAdmin: function () {
    var _isOrgAdmin = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2() {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return insights.chrome.auth.getUser();

            case 2:
              data = _context2.sent;
              _context2.prev = 3;
              return _context2.abrupt("return", data.identity.user.is_org_admin);

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](3);
              return _context2.abrupt("return", false);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 7]]);
    }));

    function isOrgAdmin() {
      return _isOrgAdmin.apply(this, arguments);
    }

    return isOrgAdmin;
  }(),
  isActive: function () {
    var _isActive = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3() {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return insights.chrome.auth.getUser();

            case 2:
              data = _context3.sent;
              _context3.prev = 3;
              return _context3.abrupt("return", data.identity.user.is_active);

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](3);
              return _context3.abrupt("return", false);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[3, 7]]);
    }));

    function isActive() {
      return _isActive.apply(this, arguments);
    }

    return isActive;
  }(),
  isInternal: function () {
    var _isInternal = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee4() {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return insights.chrome.auth.getUser();

            case 2:
              data = _context4.sent;
              _context4.prev = 3;
              return _context4.abrupt("return", data.identity.user.is_internal);

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](3);
              return _context4.abrupt("return", false);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[3, 7]]);
    }));

    function isInternal() {
      return _isInternal.apply(this, arguments);
    }

    return isInternal;
  }(),
  isEntitled: function () {
    var _isEntitled = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee5(appName) {
      var data, _ref3, entitlements;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return insights.chrome.auth.getUser();

            case 2:
              data = _context5.sent;
              _ref3 = data || {}, entitlements = _ref3.entitlements;
              return _context5.abrupt("return", data.entitlements && appName ? Boolean(entitlements[appName] && entitlements[appName].is_entitled) : // eslint-disable-next-line camelcase
              Object.entries(entitlements || {}).reduce(function (acc, _ref4) {
                var _ref5 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_ref4, 2),
                    key = _ref5[0],
                    is_entitled = _ref5[1].is_entitled;

                return _objectSpread(_objectSpread({}, acc), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, key, is_entitled));
              }, {}));

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function isEntitled(_x) {
      return _isEntitled.apply(this, arguments);
    }

    return isEntitled;
  }(),
  isProd: function isProd() {
    return insights.chrome.isProd;
  },
  isBeta: function isBeta() {
    return insights.chrome.isBeta();
  },
  isHidden: function isHidden() {
    return true;
  },
  withEmail: function () {
    var _withEmail = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee6() {
      var data,
          _ref6,
          user,
          _len,
          toHave,
          _key,
          _args6 = arguments;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return insights.chrome.auth.getUser();

            case 2:
              data = _context6.sent;
              _ref6 = data || {}, user = _ref6.identity.user;

              for (_len = _args6.length, toHave = new Array(_len), _key = 0; _key < _len; _key++) {
                toHave[_key] = _args6[_key];
              }

              return _context6.abrupt("return", toHave === null || toHave === void 0 ? void 0 : toHave.some(function (item) {
                var _user$email;

                return user === null || user === void 0 ? void 0 : (_user$email = user.email) === null || _user$email === void 0 ? void 0 : _user$email.includes(item);
              }));

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function withEmail() {
      return _withEmail.apply(this, arguments);
    }

    return withEmail;
  }(),
  loosePermissions: function loosePermissions(permissions) {
    return checkPermissions(permissions, 'some');
  },
  hasPermissions: checkPermissions,
  hasLocalStorage: function hasLocalStorage(key, value) {
    return localStorage.get(key) === value;
  },
  hasCookie: function hasCookie(cookieKey, cookieValue) {
    return js_cookie__WEBPACK_IMPORTED_MODULE_7__.default.get(cookieKey) === cookieValue;
  },
  apiRequest: function () {
    var _apiRequest = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee7(_ref7) {
      var url, _ref7$method, method, accessor, matcher, options, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              url = _ref7.url, _ref7$method = _ref7.method, method = _ref7$method === void 0 ? 'GET' : _ref7$method, accessor = _ref7.accessor, matcher = _ref7.matcher, options = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(_ref7, _excluded);
              _context7.next = 3;
              return insights.chrome.auth.getUser();

            case 3:
              data = _context7.sent;

              if (!data.identity.account_number) {
                _context7.next = 8;
                break;
              }

              return _context7.abrupt("return", (0,_redhat_cloud_services_frontend_components_utilities_interceptors__WEBPACK_IMPORTED_MODULE_9__.default)(_objectSpread({
                url: url,
                method: method
              }, options)).then(function (response) {
                return matchValue(accessor ? lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(response || {}, accessor) : response, matcher);
              }).catch(function () {
                console.log('Unable to retrieve visibility result', {
                  visibilityMethod: 'apiRequest',
                  method: method,
                  url: url
                });
                return false;
              }));

            case 8:
              console.log('Unable to call API, no account number');
              return _context7.abrupt("return", false);

            case 10:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    function apiRequest(_x2) {
      return _apiRequest.apply(this, arguments);
    }

    return apiRequest;
  }(),
  featureFlag: function featureFlag(flagName, expectedValue) {
    return (0,_App_FeatureFlags_FeatureFlagsProvider__WEBPACK_IMPORTED_MODULE_8__.getFeatureFlagsError)() !== true && _App_FeatureFlags_FeatureFlagsProvider__WEBPACK_IMPORTED_MODULE_8__.unleashClient.isEnabled(flagName) === expectedValue;
  }
};
var isVisible = function isVisible(limitedApps, app, visibility) {
  if (limitedApps && limitedApps.includes(app)) {
    if (visibility instanceof Object) {
      return Boolean(visibility[app]);
    }

    return visibility;
  }

  return true;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.freeze(obj));

/***/ }),

/***/ "./src/js/jwt/insights/ssoUrl.js":
/*!***************************************!*\
  !*** ./src/js/jwt/insights/ssoUrl.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('');

/***/ }),

/***/ "./src/js/jwt/Priv.ts":
/*!****************************!*\
  !*** ./src/js/jwt/Priv.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var keycloak_js_1 = __importDefault(__webpack_require__(/*! keycloak-js */ "./node_modules/keycloak-js/dist/keycloak.mjs"));
var Priv = (function () {
    function Priv() {
        this._cookie;
        this._keycloak = {};
    }
    Priv.prototype.setCookie = function (cookie) {
        this.cookie = cookie;
    };
    Priv.prototype.setKeycloak = function (options, onTokenExpired, onAuthSuccess, onAuthRefreshSuccess) {
        this._keycloak = new keycloak_js_1.default(options);
        this._keycloak.onTokenExpired = onTokenExpired;
        this._keycloak.onAuthSuccess = onAuthSuccess;
        this._keycloak.onAuthRefreshSuccess = onAuthRefreshSuccess;
    };
    Priv.prototype.initializeKeycloak = function (options) {
        var _a;
        (_a = this._keycloak) === null || _a === void 0 ? void 0 : _a.init(options);
    };
    Priv.prototype.setToken = function (token) {
        this._keycloak.authenticated = true;
        this._keycloak.token = token;
    };
    Priv.prototype.initialize = function (options) {
        return this._keycloak.init(options);
    };
    Priv.prototype.setTokenParsed = function (tokenParsed) {
        this._keycloak.tokenParsed = tokenParsed;
    };
    Priv.prototype.getTokenParsed = function () {
        return this._keycloak.tokenParsed;
    };
    Priv.prototype.getToken = function () {
        return this._keycloak.token;
    };
    Priv.prototype.getRefershToken = function () {
        return this._keycloak.refreshToken;
    };
    Priv.prototype.login = function (options) {
        return this._keycloak.login(options);
    };
    Priv.prototype.clearToken = function () {
        this._keycloak.clearToken();
    };
    Priv.prototype.getCookie = function () {
        return this.cookie;
    };
    Priv.prototype.logout = function (options) {
        return this._keycloak.logout(options);
    };
    Priv.prototype.getAuthenticated = function () {
        return this._keycloak.authenticated;
    };
    Priv.prototype.updateToken = function () {
        return this._keycloak.updateToken(5);
    };
    return Priv;
}());
exports.default = Priv;


/***/ }),

/***/ "./src/js/jwt/constants.ts":
/*!*********************************!*\
  !*** ./src/js/jwt/constants.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.offlineToken = exports.noAuthParam = exports.options = exports.DEFAULT_ROUTES = void 0;
exports.DEFAULT_ROUTES = {
    prod: {
        url: ['access.redhat.com', 'prod.foo.redhat.com', 'cloud.redhat.com', 'console.redhat.com'],
        sso: 'https://sso.redhat.com/auth',
        portal: 'https://access.redhat.com',
    },
    qa: {
        url: ['qa.foo.redhat.com', 'qa.cloud.redhat.com', 'qa.console.redhat.com'],
        sso: 'https://sso.qa.redhat.com/auth',
        portal: 'https://access.qa.redhat.com',
    },
    ci: {
        url: ['ci.foo.redhat.com', 'ci.cloud.redhat.com', 'ci.console.redhat.com'],
        sso: 'https://sso.qa.redhat.com/auth',
        portal: 'https://access.qa.redhat.com',
    },
    qaprodauth: {
        url: ['qaprodauth.foo.redhat.com', 'qaprodauth.cloud.redhat.com', 'qaprodauth.console.redhat.com'],
        sso: 'https://sso.redhat.com/auth',
        portal: 'https://access.redhat.com',
    },
    stage: {
        url: ['stage.foo.redhat.com', 'cloud.stage.redhat.com', 'console.stage.redhat.com', 'fetest.stage.redhat.com'],
        sso: 'https://sso.stage.redhat.com/auth',
        portal: 'https://access.stage.redhat.com',
    },
    gov: {
        url: ['gov.cloud.redhat.com', 'gov.console.redhat.com'],
        sso: 'https://sso.redhat.com/auth',
        portal: 'https://access.redhat.com',
    },
    govStage: {
        url: ['gov.cloud.stage.redhat.com', 'gov.console.stage.redhat.com'],
        sso: 'https://sso.stage.redhat.com/auth',
        portal: 'https://access.redhat.com',
    },
    dev: {
        url: ['console.dev.redhat.com'],
        sso: 'https://sso.redhat.com/auth',
        portal: 'https://access.redhat.com',
    },
};
exports.options = {
    realm: 'redhat-external',
    clientId: 'cloud-services',
    cookieName: 'cs_jwt',
};
exports.noAuthParam = 'noauth';
exports.offlineToken = '2402500adeacc30eb5c5a8a5e2e0ec1f';


/***/ }),

/***/ "./src/js/jwt/insights/entitlements.ts":
/*!*********************************************!*\
  !*** ./src/js/jwt/insights/entitlements.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));
var entitlements_client_1 = __webpack_require__(/*! @redhat-cloud-services/entitlements-client */ "./node_modules/@redhat-cloud-services/entitlements-client/dist/index.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./src/js/utils.ts");
var cache_1 = __webpack_require__(/*! ../../utils/cache */ "./src/js/utils/cache.ts");
var BASE_PATH = '/api/entitlements/v1';
exports.default = (function (cachePrefix) {
    var cache = (0, cache_1.bootstrapCache)(BASE_PATH, "".concat(cachePrefix, "-entitlements"));
    var instance = axios_1.default.create({ adapter: cache.adapter });
    instance.interceptors.response.use(function (response) {
        if (response && response.request && response.request.fromCache !== true) {
            var last_1 = (0, utils_1.lastActive)('/api/entitlements/v1/services', 'fallback');
            var keys = Object.keys(localStorage).filter(function (key) { return key.endsWith('/api/entitlements/v1/services') && key !== last_1; });
            (0, utils_1.deleteLocalStorageItems)(keys);
        }
        return response.data || response;
    });
    return new entitlements_client_1.ServicesApi(undefined, BASE_PATH, instance);
});


/***/ }),

/***/ "./src/js/jwt/insights/offline.ts":
/*!****************************************!*\
  !*** ./src/js/jwt/insights/offline.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseHashString = exports.getPostDataObject = exports.getPostbackUrl = exports.getWindow = exports.getOfflineToken = exports.wipePostbackParamsThatAreNotForUs = void 0;
var consts_1 = __importDefault(__webpack_require__(/*! ../../consts */ "./src/js/consts.js"));
var constants_1 = __webpack_require__(/*! ../constants */ "./src/js/jwt/constants.ts");
var url_1 = __importDefault(__webpack_require__(/*! ./url */ "./src/js/jwt/insights/url.ts"));
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));
var priv = {};
function wipePostbackParamsThatAreNotForUs() {
    if (getWindow().location.href.indexOf(consts_1.default.offlineToken) !== -1) {
        var _a = getWindow().location, hash = _a.hash, search = _a.search, origin_1 = _a.origin, pathname = _a.pathname;
        var noAuthParam = new URLSearchParams(search).get(consts_1.default.noAuthParam);
        priv.postbackUrl = "".concat(origin_1).concat(pathname, "?").concat(consts_1.default.noAuthParam, "=").concat(noAuthParam).concat(hash);
        getWindow().location.hash = '';
        var url = new URL(getWindow().location.href);
        url.searchParams.delete(consts_1.default.noAuthParam);
        getWindow().history.pushState('offlinePostback', '', url.toString());
    }
}
exports.wipePostbackParamsThatAreNotForUs = wipePostbackParamsThatAreNotForUs;
function getOfflineToken(realm, clientId) {
    return __awaiter(this, void 0, void 0, function () {
        var postbackUrl, ssoUrl, tokenURL, params;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    postbackUrl = getPostbackUrl();
                    if (priv.response) {
                        return [2, Promise.resolve(priv.response)];
                    }
                    if (!postbackUrl) {
                        return [2, Promise.reject('not available')];
                    }
                    return [4, (0, url_1.default)(constants_1.DEFAULT_ROUTES)];
                case 1:
                    ssoUrl = _a.sent();
                    tokenURL = "".concat(ssoUrl, "/realms/").concat(realm, "/protocol/openid-connect/token");
                    params = parseHashString(postbackUrl);
                    return [2, axios_1.default
                            .post(tokenURL, getPostDataString(getPostDataObject(postbackUrl, clientId, params.code)), {
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        })
                            .then(function (response) {
                            priv.response = response;
                            return response;
                        })];
            }
        });
    });
}
exports.getOfflineToken = getOfflineToken;
function getWindow() {
    return window;
}
exports.getWindow = getWindow;
function getPostbackUrl() {
    var ret = priv.postbackUrl;
    delete priv.postbackUrl;
    return ret;
}
exports.getPostbackUrl = getPostbackUrl;
function getPostDataObject(url, clientId, code) {
    return {
        code: code,
        grant_type: 'authorization_code',
        client_id: clientId,
        redirect_uri: encodeURIComponent(url.split('#')[0]),
    };
}
exports.getPostDataObject = getPostDataObject;
function parseHashString(str) {
    return str
        .split('#')[1]
        .split('&')
        .reduce(function (result, item) {
        var parts = item.split('=');
        result[parts[0]] = parts[1];
        return result;
    }, {});
}
exports.parseHashString = parseHashString;
function getPostDataString(obj) {
    return Object.entries(obj)
        .map(function (entry) {
        return "".concat(entry[0], "=").concat(entry[1]);
    })
        .join('&');
}


/***/ }),

/***/ "./src/js/jwt/insights/url.ts":
/*!************************************!*\
  !*** ./src/js/jwt/insights/url.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var logger_1 = __importDefault(__webpack_require__(/*! ../logger */ "./src/js/jwt/logger.ts"));
var log = (0, logger_1.default)('insights/url.js');
var ssoUrl = Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ./ssoUrl */ "./src/js/jwt/insights/ssoUrl.js")); }).then(function (sso) { return sso.default; });
exports.default = (function (env) { return __awaiter(void 0, void 0, void 0, function () {
    var ssoEnv;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, ssoUrl];
            case 1:
                if (_a.sent()) {
                    log('Using dynamic SSO_URL found! ' + ssoUrl);
                    return [2, ssoUrl];
                }
                ssoEnv = Object.entries(env).find(function (_a) {
                    var url = _a[1].url;
                    return url.includes(location.hostname);
                });
                if (ssoEnv) {
                    log("SSO Url: ".concat(ssoEnv === null || ssoEnv === void 0 ? void 0 : ssoEnv[1].sso));
                    log("Current env: ".concat(ssoEnv === null || ssoEnv === void 0 ? void 0 : ssoEnv[0]));
                    return [2, ssoEnv === null || ssoEnv === void 0 ? void 0 : ssoEnv[1].sso];
                }
                else {
                    log('SSO url: not found, defaulting to qa');
                    log('Current env: not found, defaultint to qa');
                    return [2, 'https://sso.qa.redhat.com/auth'];
                }
                return [2];
        }
    });
}); });


/***/ }),

/***/ "./src/js/jwt/insights/user.ts":
/*!*************************************!*\
  !*** ./src/js/jwt/insights/user.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tryBounceIfUnentitled = exports.buildUser = void 0;
var utils_1 = __webpack_require__(/*! ../../utils */ "./src/js/utils.ts");
var entitlements_1 = __importDefault(__webpack_require__(/*! ./entitlements */ "./src/js/jwt/insights/entitlements.ts"));
var logger_1 = __importDefault(__webpack_require__(/*! ../logger */ "./src/js/jwt/logger.ts"));
var log = (0, logger_1.default)('insights/user.js');
var pathMapper = {
    'cost-management': 'cost_management',
    insights: 'insights',
    openshift: 'openshift',
    migrations: 'migrations',
    ansible: 'ansible',
    subscriptions: 'subscriptions',
    settings: 'settings',
    'user-preferences': 'user_preferences',
    internal: 'internal',
};
var unentitledPathMapper = function (section, service) {
    return ({
        ansible: "".concat(document.baseURI).concat((0, utils_1.isBeta)() ? 'beta/' : '', "ansible/ansible-dashboard/trial"),
    }[section] || "".concat(document.baseURI, "?not_entitled=").concat(service));
};
function getWindow() {
    return window;
}
function buildUser(token) {
    var user = token
        ? {
            identity: __assign(__assign({ account_number: token.account_number, type: token.type }, (token.idp && { idp: token.idp })), { user: {
                    username: token.username,
                    email: token.email,
                    first_name: token.first_name,
                    last_name: token.last_name,
                    is_active: token.is_active,
                    is_org_admin: token.is_org_admin,
                    is_internal: token.is_internal,
                    locale: token.locale,
                }, internal: {
                    org_id: token.org_id,
                    account_id: token.account_id,
                } }),
        }
        : null;
    return user;
}
exports.buildUser = buildUser;
function tryBounceIfUnentitled(data, section) {
    var _a;
    if (section !== 'insights' &&
        section !== 'openshift' &&
        section !== 'cost-management' &&
        section !== 'migrations' &&
        section !== 'ansible' &&
        section !== 'subscriptions' &&
        section !== 'settings' &&
        section !== 'user-preferences' &&
        section !== 'internal') {
        return;
    }
    var service = pathMapper[section];
    var redirectAddress = unentitledPathMapper(section, service);
    if (data === true) {
        getWindow().location.replace(redirectAddress);
    }
    if (section && typeof data === 'object') {
        if ((_a = data === null || data === void 0 ? void 0 : data[service]) === null || _a === void 0 ? void 0 : _a.is_entitled) {
            log("Entitled to: ".concat(service));
        }
        else {
            log("Not entitled to: ".concat(service));
            getWindow().location.replace(redirectAddress);
        }
    }
}
exports.tryBounceIfUnentitled = tryBounceIfUnentitled;
exports.default = (function (token) { return __awaiter(void 0, void 0, void 0, function () {
    var user, pathName, data, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                user = buildUser(token);
                pathName = getWindow().location.pathname.split('/');
                pathName.shift();
                if (pathName[0] === 'beta') {
                    pathName.shift();
                }
                if ((pathName === null || pathName === void 0 ? void 0 : pathName[1]) === 'subscriptions' || (pathName === null || pathName === void 0 ? void 0 : pathName[1]) === 'cost-management') {
                    pathName.shift();
                }
                if (!user) return [3, 7];
                log("Account Number: ".concat(user.identity.account_number));
                data = void 0;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                if (!user.identity.account_number) return [3, 3];
                return [4, (0, entitlements_1.default)(token.jti).servicesGet()];
            case 2:
                data = _b.sent();
                return [3, 4];
            case 3:
                console.log('Cannot call entitlements API, no account number');
                _b.label = 4;
            case 4: return [3, 6];
            case 5:
                _a = _b.sent();
                return [3, 6];
            case 6:
                if ((0, utils_1.pageAllowsUnentitled)()) {
                    return [2, __assign(__assign({}, user), { entitlements: data || {} })];
                }
                if (!(0, utils_1.isValidAccountNumber)(user.identity.account_number)) {
                    tryBounceIfUnentitled(true, pathName[0]);
                    return [2];
                }
                tryBounceIfUnentitled(data, pathName[0]);
                return [2, __assign(__assign({}, user), { entitlements: data })];
            case 7:
                log('User not ready');
                _b.label = 8;
            case 8: return [2];
        }
    });
}); });


/***/ }),

/***/ "./src/js/jwt/jwt.ts":
/*!***************************!*\
  !*** ./src/js/jwt/jwt.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUrl = exports.getEncodedToken = exports.setCookieWrapper = exports.setCookie = exports.getCookieExpires = exports.updateToken = exports.expiredToken = exports.isAuthenticated = exports.getUserInfo = exports.logoutAllTabs = exports.logout = exports.login = exports.initError = exports.initSuccess = exports.isExistingValid = exports.init = exports.doOffline = exports.decodeToken = exports.GLOBAL_FILTER_KEY = void 0;
var keycloak_js_1 = __importDefault(__webpack_require__(/*! keycloak-js */ "./node_modules/keycloak-js/dist/keycloak.mjs"));
var broadcast_channel_1 = __webpack_require__(/*! broadcast-channel */ "./node_modules/broadcast-channel/dist/lib/index.es5.js");
var js_cookie_1 = __importDefault(__webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.js"));
var utils_1 = __webpack_require__(/*! ../utils */ "./src/js/utils.ts");
var Sentry = __importStar(__webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/browser/esm/index.js"));
var logger_1 = __importDefault(__webpack_require__(/*! ./logger */ "./src/js/jwt/logger.ts"));
var url_1 = __importDefault(__webpack_require__(/*! ./insights/url */ "./src/js/jwt/insights/url.ts"));
var user_1 = __importDefault(__webpack_require__(/*! ./insights/user */ "./src/js/jwt/insights/user.ts"));
var urijs_1 = __importDefault(__webpack_require__(/*! urijs */ "./node_modules/urijs/src/URI.js"));
var constants_1 = __webpack_require__(/*! ./constants */ "./src/js/jwt/constants.ts");
var Priv_1 = __importDefault(__webpack_require__(/*! ./Priv */ "./src/js/jwt/Priv.ts"));
exports.GLOBAL_FILTER_KEY = 'chrome:global-filter';
var log = (0, logger_1.default)('jwt.js');
var DEFAULT_COOKIE_NAME = 'cs_jwt';
var priv = new Priv_1.default();
var authChannel = new broadcast_channel_1.BroadcastChannel('auth');
authChannel.onmessage = function (e) {
    if (e && e.data && e.data.type) {
        log("BroadcastChannel, Received event : ".concat(e.data.type));
        switch (e.data.type) {
            case 'logout':
                return logout();
            case 'login':
                return login();
            case 'refresh':
                return updateToken();
        }
    }
};
function decodeToken(str) {
    str = str.split('.')[1];
    str = str.replace('/-/g', '+');
    str = str.replace('/_/g', '/');
    switch (str.length % 4) {
        case 0:
            break;
        case 2:
            str += '==';
            break;
        case 3:
            str += '=';
            break;
        default:
            throw 'Invalid token';
    }
    str = (str + '===').slice(0, str.length + (str.length % 4));
    str = str.replace(/-/g, '+').replace(/_/g, '/');
    str = decodeURIComponent(escape(atob(str)));
    var res = JSON.parse(str);
    return res;
}
exports.decodeToken = decodeToken;
var doOffline = function (key, val) {
    var url = (0, urijs_1.default)(window.location.href);
    url.removeSearch(key);
    url.addSearch(key, val);
    Promise.resolve((0, url_1.default)(constants_1.DEFAULT_ROUTES)).then(function (ssoUrl) { return __awaiter(void 0, void 0, void 0, function () {
        var options, kc;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    options = __assign(__assign({}, constants_1.options), { promiseType: 'native', redirectUri: url.toString(), url: ssoUrl });
                    kc = new keycloak_js_1.default(options);
                    return [4, kc.init(options)];
                case 1:
                    _a.sent();
                    kc.login({
                        scope: 'offline_access',
                    });
                    return [2];
            }
        });
    }); });
};
exports.doOffline = doOffline;
var init = function (options) {
    log('Initializing');
    var cookieName = options.cookieName ? options.cookieName : DEFAULT_COOKIE_NAME;
    priv.setCookie({ cookieName: cookieName });
    return Promise.resolve((0, url_1.default)(options.routes ? options.routes : constants_1.DEFAULT_ROUTES)).then(function (ssoUrl) {
        options.url = ssoUrl;
        options.clientId = 'cloud-services';
        options.realm = 'redhat-external';
        options.promiseType = 'native';
        options.onLoad = 'check-sso';
        options.checkLoginIframe = false;
        var isBeta = window.location.pathname.split('/')[1] === 'beta' ? '/beta' : '';
        options.silentCheckSsoRedirectUri = "https://".concat(window.location.host).concat(isBeta, "/apps/chrome/silent-check-sso.html");
        if (window.localStorage && window.localStorage.getItem('chrome:jwt:shortSession') === 'true') {
            options.realm = 'short-session';
        }
        priv.setKeycloak(options, updateToken, loginAllTabs, refreshTokens);
        if (options.token) {
            if (isExistingValid(options.token)) {
                priv.initializeKeycloak(options);
                priv.setToken(options.token);
                return Promise.resolve();
            }
            else {
                delete options.token;
            }
        }
        return priv.initialize(options).then(initSuccess).catch(initError);
    });
};
exports.init = init;
function isExistingValid(token) {
    log('Checking validity of existing JWT');
    try {
        if (!token) {
            return false;
        }
        var parsed = decodeToken(token);
        if (!parsed.exp) {
            return false;
        }
        var now = Date.now().toString().substr(0, 10);
        var exp = parsed.exp - parseInt(now);
        log("Token expires in ".concat(exp));
        if (exp > 90) {
            priv.setTokenParsed(parsed);
            return true;
        }
        else {
            if (exp > 0) {
                log('token is expiring in < 90 seconds');
            }
            else {
                log('token is expired');
            }
            return false;
        }
    }
    catch (e) {
        log(e);
        return false;
    }
}
exports.isExistingValid = isExistingValid;
function initSuccess() {
    log('JWT Initialized');
    setCookie(priv.getToken());
    setRefresh(priv.getRefershToken());
}
exports.initSuccess = initSuccess;
function initError() {
    log('JWT init error');
    logout();
}
exports.initError = initError;
function login() {
    log('Logging in');
    js_cookie_1.default.set('cs_loggedOut', 'false');
    return priv.login({ redirectUri: location.href });
}
exports.login = login;
function logout(bounce) {
    var _a;
    log('Logging out');
    priv.clearToken();
    var cookieName = (_a = priv.getCookie()) === null || _a === void 0 ? void 0 : _a.cookieName;
    if (cookieName) {
        js_cookie_1.default.remove(cookieName);
    }
    js_cookie_1.default.remove('cs_demo');
    var isBeta = window.location.pathname.split('/')[1] === 'beta' ? '/beta' : '';
    var keys = Object.keys(localStorage).filter(function (key) {
        return key.endsWith('/api/entitlements/v1/services') ||
            key.endsWith('/chrome') ||
            key.endsWith('/chrome-store') ||
            key.startsWith('kc-callback') ||
            key.startsWith(exports.GLOBAL_FILTER_KEY);
    });
    (0, utils_1.deleteLocalStorageItems)(keys);
    if (bounce) {
        var eightSeconds = new Date(new Date().getTime() + 8 * 1000);
        js_cookie_1.default.set('cs_loggedOut', 'true', {
            expires: eightSeconds,
        });
        priv.logout({
            redirectUri: "https://".concat(window.location.host).concat(isBeta),
        });
    }
}
exports.logout = logout;
var logoutAllTabs = function (bounce) {
    authChannel.postMessage({ type: 'logout' });
    logout(bounce);
};
exports.logoutAllTabs = logoutAllTabs;
function loginAllTabs() {
    authChannel.postMessage({ type: 'login' });
}
var getUserInfo = function () {
    log('Getting User Information');
    var jwtCookie = js_cookie_1.default.get(DEFAULT_COOKIE_NAME);
    if (jwtCookie && isExistingValid(jwtCookie) && isExistingValid(priv.getToken())) {
        return (0, user_1.default)(priv.getTokenParsed());
    }
    return updateToken()
        .then(function () {
        log('Successfully updated token');
        return (0, user_1.default)(priv.getTokenParsed());
    })
        .catch(function () {
        if ((0, utils_1.pageRequiresAuthentication)()) {
            log('Trying to log in user to refresh token');
            return login();
        }
    });
};
exports.getUserInfo = getUserInfo;
var isAuthenticated = function () {
    log("User Ready: ".concat(priv.getAuthenticated()));
    return priv.getAuthenticated();
};
exports.isAuthenticated = isAuthenticated;
var expiredToken = function () {
    log('Token has expired, trying to log out');
    logout();
};
exports.expiredToken = expiredToken;
function refreshTokens() {
    setCookie(priv.getToken());
    authChannel.postMessage({ type: 'refresh' });
}
function updateToken() {
    var _a;
    return Promise.resolve((_a = priv === null || priv === void 0 ? void 0 : priv.updateToken) === null || _a === void 0 ? void 0 : _a.call(priv))
        .then(function (refreshed) {
        setCookie(priv.getToken());
        log('Attempting to update token');
        if (refreshed) {
            log('Token was successfully refreshed');
        }
        else {
            log('Token is still valid, not updating');
        }
    })
        .catch(function (err) {
        log(err);
        Sentry.captureException(err);
        log('Token updated failed, trying to reauth');
        login();
    });
}
exports.updateToken = updateToken;
function getCookieExpires(exp) {
    var date = new Date(0);
    date.setUTCSeconds(exp);
    return date.toUTCString();
}
exports.getCookieExpires = getCookieExpires;
function setCookie(token) {
    var _a;
    log('Setting the cs_jwt cookie');
    if (token && token.length > 10) {
        var cookieName = (_a = priv.getCookie()) === null || _a === void 0 ? void 0 : _a.cookieName;
        if (cookieName) {
            setCookieWrapper("".concat(cookieName, "=").concat(token, ";") + "path=/;" + "secure=true;" + "expires=".concat(getCookieExpires(decodeToken(token).exp)));
        }
    }
}
exports.setCookie = setCookie;
function setRefresh(refreshToken) {
    log('Setting the refresh token');
    if (refreshToken) {
        js_cookie_1.default.set('cs_jwt_refresh', refreshToken, { secure: true });
    }
}
function setCookieWrapper(str) {
    window.document.cookie = str;
}
exports.setCookieWrapper = setCookieWrapper;
var getEncodedToken = function () {
    log('Trying to get the encoded token');
    if (!isExistingValid(priv.getToken())) {
        log('Failed to get encoded token, trying to update');
        updateToken();
    }
    return priv.getToken();
};
exports.getEncodedToken = getEncodedToken;
var getUrl = function () {
    return (0, url_1.default)(constants_1.DEFAULT_ROUTES);
};
exports.getUrl = getUrl;


/***/ }),

/***/ "./src/js/jwt/logger.ts":
/*!******************************!*\
  !*** ./src/js/jwt/logger.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = (function (fileName) {
    return function (msg) {
        if (window.console) {
            if (window.localStorage && window.localStorage.getItem('chrome:jwt:debug')) {
                window.console.log("[JWT][".concat(fileName, "] ").concat(msg));
            }
        }
    };
});


/***/ }),

/***/ "./src/js/utils.ts":
/*!*************************!*\
  !*** ./src/js/utils.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.levelArray = exports.highlightItems = exports.updateDocumentTitle = exports.isFedRamp = exports.isBeta = exports.isProd = exports.getEnvDetails = exports.getEnv = exports.getUrl = exports.isAnsible = exports.lastActive = exports.deleteLocalStorageItems = exports.createReduxListener = exports.pageRequiresAuthentication = exports.pageAllowsUnentitled = exports.getSection = exports.isValidAccountNumber = exports.getWindow = void 0;
var get_1 = __importDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));
var constants_1 = __webpack_require__(/*! ./jwt/constants */ "./src/js/jwt/constants.ts");
var flatMap_1 = __importDefault(__webpack_require__(/*! lodash/flatMap */ "./node_modules/lodash/flatMap.js"));
function getWindow() {
    return window;
}
exports.getWindow = getWindow;
function isValidAccountNumber(num) {
    if (!num)
        return false;
    if (num === -1)
        return false;
    if (num === '-1')
        return false;
    return Number.isInteger(Number(num));
}
exports.isValidAccountNumber = isValidAccountNumber;
function getSection() {
    var sections = getWindow().location.pathname.split('/');
    if (sections[1] === 'beta') {
        return sections[2] || '';
    }
    return sections[1];
}
exports.getSection = getSection;
function pageAllowsUnentitled() {
    var pathname = getWindow().location.pathname;
    if (pathname === '/' ||
        pathname === '/beta' ||
        pathname === '/beta/' ||
        pathname.indexOf('/openshift') === 0 ||
        pathname.indexOf('/beta/openshift') === 0 ||
        pathname.indexOf('/security') === 0 ||
        pathname.indexOf('/beta/security') === 0 ||
        pathname.indexOf('/application-services') === 0 ||
        pathname.indexOf('/beta/application-services') === 0 ||
        pathname.indexOf('/hac') === 0 ||
        pathname.indexOf('/beta/hac') === 0 ||
        pathname.indexOf('/ansible/ansible-dashboard/trial') === 0 ||
        pathname.indexOf('/beta/ansible/ansible-dashboard/trial') === 0) {
        return true;
    }
    return false;
}
exports.pageAllowsUnentitled = pageAllowsUnentitled;
function pageRequiresAuthentication() {
    var section = getSection();
    if (section === 'insights' ||
        section === 'cost-management' ||
        section === 'apps' ||
        section === 'ansible' ||
        section === 'migrations' ||
        section === 'subscriptions' ||
        section === 'openshift' ||
        section === 'settings' ||
        section === 'user-preferences' ||
        section === 'internal' ||
        section === 'application-services') {
        return true;
    }
    return false;
}
exports.pageRequiresAuthentication = pageRequiresAuthentication;
function createReduxListener(store, path, fn) {
    var previous = undefined;
    return function () {
        var state = store.getState();
        var current = (0, get_1.default)(state, path);
        if (current !== previous) {
            previous = current;
            fn(current, store);
        }
    };
}
exports.createReduxListener = createReduxListener;
function deleteLocalStorageItems(keys) {
    keys.map(function (key) { return localStorage.removeItem(key); });
}
exports.deleteLocalStorageItems = deleteLocalStorageItems;
function lastActive(searchString, fallback) {
    return Object.keys(localStorage).reduce(function (acc, curr) {
        var _a;
        if (curr.includes(searchString)) {
            try {
                var accDate = void 0;
                try {
                    var localStorageDate = localStorage.getItem(acc);
                    accDate = localStorageDate ? new Date((_a = JSON.parse(localStorageDate)) === null || _a === void 0 ? void 0 : _a.expires) : new Date();
                }
                catch (_b) {
                    accDate = new Date();
                }
                var currObj = JSON.parse(localStorage.getItem(curr) || '');
                return accDate >= new Date(currObj.expires) ? acc : curr;
            }
            catch (e) {
                return acc;
            }
        }
        return acc;
    }, fallback);
}
exports.lastActive = lastActive;
var isAnsible = function (sections) { return (sections.includes('ansible') && sections.includes('insights') ? 1 : 0); };
exports.isAnsible = isAnsible;
function getUrl(type) {
    if (window.location.pathname === '/beta/' || window.location.pathname === '/') {
        return 'landing';
    }
    var sections = window.location.pathname.split('/');
    if (sections[1] === 'beta') {
        return type === 'bundle' ? sections[2] : sections[3 + (0, exports.isAnsible)(sections)];
    }
    return type === 'bundle' ? sections[1] : sections[2 + (0, exports.isAnsible)(sections)];
}
exports.getUrl = getUrl;
function getEnv() {
    var _a;
    return ((_a = Object.entries(constants_1.DEFAULT_ROUTES).find(function (_a) {
        var url = _a[1].url;
        return url.includes(location.hostname);
    })) === null || _a === void 0 ? void 0 : _a[0]) || 'qa';
}
exports.getEnv = getEnv;
function getEnvDetails() {
    var _a;
    return (_a = Object.entries(constants_1.DEFAULT_ROUTES).find(function (_a) {
        var url = _a[1].url;
        return url.includes(location.hostname);
    })) === null || _a === void 0 ? void 0 : _a[1];
}
exports.getEnvDetails = getEnvDetails;
function isProd() {
    return location.host === 'cloud.redhat.com' || location.host === 'console.redhat.com' || location.host.includes('prod.foo.redhat.com');
}
exports.isProd = isProd;
function isBeta() {
    return window.location.pathname.split('/')[1] === 'beta' ? true : false;
}
exports.isBeta = isBeta;
function isFedRamp() {
    return getEnv() === 'gov';
}
exports.isFedRamp = isFedRamp;
function updateDocumentTitle(title, noSuffix) {
    if (noSuffix === void 0) { noSuffix = false; }
    var titleSuffix = '| console.redhat.com';
    if (typeof title === 'undefined') {
        return;
    }
    if (typeof title === 'string') {
        document.title = title.includes(titleSuffix) || noSuffix ? title : "".concat(title, " ").concat(titleSuffix);
    }
    else {
        console.warn("Title is not a string. Got ".concat(typeof title, " instead."));
    }
}
exports.updateDocumentTitle = updateDocumentTitle;
var activateChild = function (hrefMatch, childRoutes) {
    var hasActiveChild = false;
    var routes = childRoutes.map(function (item) {
        var active = item.href === hrefMatch;
        if (active) {
            hasActiveChild = true;
        }
        return __assign(__assign({}, item), { active: active });
    });
    return {
        active: hasActiveChild,
        routes: routes,
    };
};
function mutateSchema(hrefMatch, navItems) {
    return navItems.map(function (item) {
        var href = item.href, routes = item.routes, navItems = item.navItems;
        if (!href && navItems) {
            return __assign(__assign({}, item), { navItems: mutateSchema(hrefMatch, navItems) });
        }
        if (!href && routes) {
            return __assign(__assign({}, item), activateChild(hrefMatch, routes));
        }
        if (href) {
            return __assign(__assign({}, item), { active: item.href === hrefMatch });
        }
        return item;
    });
}
var highlightItems = function (pathname, navItems, sortedLinks) {
    var cleanPathname = pathname.replace(/\/$/, '');
    var segmentsCount = cleanPathname.split('/').length + 1;
    var matchedLink = sortedLinks.find(function (href) {
        var segmentedHref = href.replace(/\/$/, '').split('/').slice(0, segmentsCount).join('/');
        return cleanPathname.includes(segmentedHref);
    });
    return mutateSchema((matchedLink === null || matchedLink === void 0 ? void 0 : matchedLink.replace(/\/$/, '')) || '', navItems);
};
exports.highlightItems = highlightItems;
var levelArray = function (navItems) {
    return (0, flatMap_1.default)(navItems, function (_a) {
        var href = _a.href, routes = _a.routes, navItems = _a.navItems;
        if (!href && navItems) {
            return (0, exports.levelArray)(navItems);
        }
        if (!href && routes) {
            return (0, exports.levelArray)(routes);
        }
        if (href) {
            return [href];
        }
        return [];
    });
};
exports.levelArray = levelArray;


/***/ }),

/***/ "./src/js/utils/cache.ts":
/*!*******************************!*\
  !*** ./src/js/utils/cache.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CacheAdapter = exports.bootstrapCache = exports.createCacheStore = void 0;
var axios_cache_adapter_1 = __webpack_require__(/*! axios-cache-adapter */ "./node_modules/axios-cache-adapter/dist/cache.js");
var localforage_1 = __importDefault(__webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js"));
var utils_1 = __webpack_require__(/*! ../utils */ "./src/js/utils.ts");
var createCacheStore = function (endpoint, cacheKey) {
    var name = (0, utils_1.lastActive)(endpoint, cacheKey);
    return localforage_1.default.createInstance({
        driver: [localforage_1.default.LOCALSTORAGE],
        name: typeof name === 'string' ? name === null || name === void 0 ? void 0 : name.split('/')[0] : name.expires.split('/')[0],
    });
};
exports.createCacheStore = createCacheStore;
function bootstrapCache(endpoint, cacheKey) {
    var store = (0, exports.createCacheStore)(endpoint, cacheKey);
    return (0, axios_cache_adapter_1.setupCache)({
        store: store,
        maxAge: 10 * 60 * 1000,
    });
}
exports.bootstrapCache = bootstrapCache;
var store;
var envSwap = function () {
    var currentEnv = window.insights.chrome.isBeta() ? 'beta' : 'non-beta';
    var prevEnv = localStorage.getItem('chrome:prevEnv');
    if (prevEnv && currentEnv !== prevEnv) {
        (0, utils_1.deleteLocalStorageItems)(Object.keys(localStorage).filter(function (item) { return item.endsWith('/chrome-store'); }));
    }
    localStorage.setItem('chrome:prevEnv', currentEnv);
};
var CacheAdapter = (function () {
    function CacheAdapter(endpoint, cacheKey, maxAge) {
        if (maxAge === void 0) { maxAge = 10 * 60 * 1000; }
        this.maxAge = maxAge;
        this.expires = new Date().getTime() + this.maxAge;
        envSwap();
        if (!store) {
            var name_1 = (0, utils_1.lastActive)(endpoint, cacheKey);
            var cached = void 0;
            var cacheId = typeof name_1 === 'string' ? name_1 : name_1.expires;
            try {
                cached = JSON.parse(localStorage.getItem(cacheId) || '');
            }
            catch (e) {
                cached = localStorage.getItem(cacheId);
            }
            this.name = cacheId;
            this.endpoint = endpoint;
            this.cacheKey = cacheKey;
            store = (0, exports.createCacheStore)(endpoint, cacheKey);
            if (new Date(parseInt(cached === null || cached === void 0 ? void 0 : cached.expires, 10)) >= new Date()) {
                this.setCache(parseInt(cached === null || cached === void 0 ? void 0 : cached.expires, 10), cached === null || cached === void 0 ? void 0 : cached.data);
            }
            else {
                var cacheTime = new Date().getTime() + this.maxAge;
                this.setCache(cacheTime, {});
            }
        }
    }
    CacheAdapter.prototype.setCache = function (expires, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.expires = expires;
                        if (!this.endpoint) return [3, 2];
                        return [4, store.setItem(this.endpoint, {
                                data: data,
                                expires: expires,
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    CacheAdapter.prototype.invalidateStore = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cacheTime;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(new Date(this.expires) <= new Date())) return [3, 3];
                        (0, utils_1.deleteLocalStorageItems)(Object.keys(localStorage).filter(function (item) { return item.endsWith('/chrome'); }));
                        return [4, localforage_1.default.dropInstance()];
                    case 1:
                        _a.sent();
                        if (!(this.endpoint && this.cacheKey)) return [3, 3];
                        store = (0, exports.createCacheStore)(this.endpoint, this.cacheKey);
                        cacheTime = new Date().getTime() + this.maxAge;
                        return [4, this.setCache(cacheTime, {})];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    CacheAdapter.prototype.setItem = function (key, data) {
        return __awaiter(this, void 0, void 0, function () {
            var cachedData;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, this.invalidateStore()];
                    case 1:
                        _b.sent();
                        if (!this.endpoint) return [3, 4];
                        return [4, store.getItem(this.endpoint)];
                    case 2:
                        cachedData = _b.sent();
                        if (cachedData != null) {
                            cachedData.data = __assign(__assign({}, cachedData === null || cachedData === void 0 ? void 0 : cachedData.data), (_a = {}, _a[key] = data, _a));
                        }
                        return [4, store.setItem(this.endpoint, cachedData)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    CacheAdapter.prototype.getItem = function (key) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var cachedData;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, this.invalidateStore()];
                    case 1:
                        _b.sent();
                        if (!this.endpoint) return [3, 3];
                        return [4, store.getItem(this.endpoint)];
                    case 2:
                        cachedData = _b.sent();
                        return [2, (_a = cachedData === null || cachedData === void 0 ? void 0 : cachedData.data) === null || _a === void 0 ? void 0 : _a[key]];
                    case 3: return [2, Promise.resolve()];
                }
            });
        });
    };
    return CacheAdapter;
}());
exports.CacheAdapter = CacheAdapter;


/***/ }),

/***/ "?61e0":
/*!***************************!*\
  !*** ./node.js (ignored) ***!
  \***************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);