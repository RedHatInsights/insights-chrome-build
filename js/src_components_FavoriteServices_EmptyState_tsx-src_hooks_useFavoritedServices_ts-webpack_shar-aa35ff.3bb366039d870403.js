"use strict";
(self["webpackChunkinsights_chrome"] = self["webpackChunkinsights_chrome"] || []).push([["src_components_FavoriteServices_EmptyState_tsx-src_hooks_useFavoritedServices_ts-webpack_shar-aa35ff"],{

/***/ "./src/components/FavoriteServices/EmptyState.scss":
/*!*********************************************************!*\
  !*** ./src/components/FavoriteServices/EmptyState.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/analytics/SegmentContext.ts":
/*!*****************************************!*\
  !*** ./src/analytics/SegmentContext.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?1a75");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SegmentContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    ready: false,
    analytics: undefined
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SegmentContext);


/***/ }),

/***/ "./src/analytics/useSegment.ts":
/*!*************************************!*\
  !*** ./src/analytics/useSegment.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSegment: () => (/* binding */ useSegment)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?1a75");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "webpack/sharing/consume/default/react-intl/react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locales_Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locales/Messages */ "./src/locales/Messages.ts");
/* harmony import */ var _SegmentContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SegmentContext */ "./src/analytics/SegmentContext.ts");




function useSegment() {
    var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
    var ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_SegmentContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
    if (!ctx) {
        throw new Error("".concat(intl.formatMessage(_locales_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].segmentError)));
    }
    return ctx;
}


/***/ }),

/***/ "./src/components/AllServices/allServicesLinks.ts":
/*!********************************************************!*\
  !*** ./src/components/AllServices/allServicesLinks.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAllServicesGroup: () => (/* binding */ isAllServicesGroup),
/* harmony export */   isAllServicesLink: () => (/* binding */ isAllServicesLink)
/* harmony export */ });
var isAllServicesGroup = function(item) {
    return (item === null || item === void 0 ? void 0 : item.isGroup) === true;
};
function isAllServicesLink(item) {
    return !!(item === null || item === void 0 ? void 0 : item.href);
}


/***/ }),

/***/ "./src/components/AppFilter/useAppFilter.ts":
/*!**************************************************!*\
  !*** ./src/components/AppFilter/useAppFilter.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   itLessBundles: () => (/* binding */ itLessBundles),
/* harmony export */   requiredBundles: () => (/* binding */ requiredBundles)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?1a75");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/common */ "./src/utils/common.ts");
/* harmony import */ var _utils_isNavItemVisible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/isNavItemVisible */ "./src/utils/isNavItemVisible.ts");
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jotai */ "./node_modules/jotai/esm/react.mjs");
/* harmony import */ var _state_atoms_chromeModuleAtom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/atoms/chromeModuleAtom */ "./src/state/atoms/chromeModuleAtom.ts");
/* harmony import */ var _state_atoms_navigationAtom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state/atoms/navigationAtom */ "./src/state/atoms/navigationAtom.ts");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}







var requiredBundles = [
    'application-services',
    'openshift',
    'insights',
    'edge',
    'ansible',
    'settings',
    'iam',
    'quay',
    'subscriptions'
];
var itLessBundles = [
    'openshift',
    'insights',
    'settings',
    'iam'
];
var bundlesOrder = [
    'application-services',
    'openshift',
    'rhel',
    'edge',
    'ansible',
    'settings',
    'cost-management',
    'subscriptions',
    'iam',
    'quay'
];
function findModuleByLink(href) {
    var modules = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        modules: []
    }).modules;
    var routes = (modules || []).flatMap(function(param) {
        var routes = param.routes;
        return routes.map(function(route) {
            return typeof route === 'string' ? route : route.pathname;
        });
    }).sort(function(a, b) {
        return a.length < b.length ? 1 : -1;
    });
    return routes.find(function(route) {
        return href.includes(route);
    }) || '';
}
function getBundleLink(_param, modules) {
    var title = _param.title, isExternal = _param.isExternal, href = _param.href, routes = _param.routes, expandable = _param.expandable, rest = _object_without_properties(_param, [
        "title",
        "isExternal",
        "href",
        "routes",
        "expandable"
    ]);
    var costLinks = [];
    var subscriptionsLinks = [];
    var url = href;
    var appId = rest.appId;
    if (expandable) {
        routes === null || routes === void 0 ? void 0 : routes.forEach(function(_param) {
            var href = _param.href, title = _param.title, rest = _object_without_properties(_param, [
                "href",
                "title"
            ]);
            if ((href === null || href === void 0 ? void 0 : href.includes('/openshift/cost-management')) && rest.filterable !== false) {
                costLinks.push(_object_spread_props(_object_spread({}, rest), {
                    isFedramp: false,
                    href: href,
                    title: title
                }));
            }
            if (rest.filterable !== false && ((href === null || href === void 0 ? void 0 : href.includes('/insights/subscriptions')) || (href === null || href === void 0 ? void 0 : href.includes('/openshift/subscriptions')))) {
                subscriptionsLinks.push(_object_spread_props(_object_spread({}, rest), {
                    href: href,
                    title: title
                }));
            }
            if (!url && (href === null || href === void 0 ? void 0 : href.match(/^\//))) {
                var moduleRoute = isExternal ? '' : findModuleByLink(href, modules[rest.appId]);
                var truncatedRoute = href.split('/').slice(0, 3).join('/');
                url = isExternal ? href : moduleRoute.length > truncatedRoute.length ? moduleRoute : truncatedRoute;
                appId = rest.appId ? rest.appId : appId;
            }
        });
    }
    return _object_spread_props(_object_spread({}, rest), {
        appId: appId,
        isExternal: isExternal,
        title: title,
        href: url,
        costLinks: costLinks,
        subscriptionsLinks: subscriptionsLinks
    });
}
var isDuplicate = function(items, href) {
    return !!items.find(function(item) {
        return item.href === href;
    });
};
var useAppFilter = function() {
    var _useState = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        isLoaded: false,
        isLoading: false,
        isOpen: false,
        filterValue: '',
        data: {
            'cost-management': {
                id: 'cost-management',
                title: 'Cost Management',
                links: []
            },
            subscriptions: {
                id: 'subscriptions',
                title: 'Subscriptions',
                links: []
            }
        }
    }), 2), state = _useState[0], setState = _useState[1];
    var existingSchemas = (0,jotai__WEBPACK_IMPORTED_MODULE_6__.useAtomValue)(_state_atoms_navigationAtom__WEBPACK_IMPORTED_MODULE_5__.navigationAtom);
    var modules = (0,jotai__WEBPACK_IMPORTED_MODULE_6__.useAtomValue)(_state_atoms_chromeModuleAtom__WEBPACK_IMPORTED_MODULE_4__.chromeModulesAtom);
    var handleBundleData = function() {
        var _ref = _async_to_generator(function(param) {
            var _param_data, id, navItems, title, links, bundleLinks, extraLinks, promises;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _param_data = param.data, id = _param_data.id, navItems = _param_data.navItems, title = _param_data.title;
                        links = (navItems === null || navItems === void 0 ? void 0 : navItems.reduce(function(acc, curr) {
                            if (curr.groupId && curr.navItems) {
                                return _to_consumable_array(acc).concat(_to_consumable_array(curr.navItems.map(function(_param) {
                                    var groupId = _param.groupId, navItems = _param.navItems, rest = _object_without_properties(_param, [
                                        "groupId",
                                        "navItems"
                                    ]);
                                    return groupId ? navItems || [] : rest;
                                })));
                            }
                            return _to_consumable_array(acc).concat([
                                curr
                            ]);
                        }, []).flat().map(function(link) {
                            return getBundleLink(link, modules || {});
                        }).filter(function(param) {
                            var filterable = param.filterable;
                            return filterable !== false;
                        })) || [];
                        bundleLinks = [];
                        extraLinks = {
                            cost: [],
                            subs: []
                        };
                        promises = links.map(function() {
                            var _ref = _async_to_generator(function(_param) {
                                var costLinks, subscriptionsLinks, rest, nextIndex, link;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            costLinks = _param.costLinks, subscriptionsLinks = _param.subscriptionsLinks, rest = _object_without_properties(_param, [
                                                "costLinks",
                                                "subscriptionsLinks"
                                            ]);
                                            nextIndex = bundleLinks.length;
                                            if (!(costLinks.length > 0)) return [
                                                3,
                                                2
                                            ];
                                            return [
                                                4,
                                                costLinks.filter(_utils_isNavItemVisible__WEBPACK_IMPORTED_MODULE_3__.evaluateVisibility)
                                            ];
                                        case 1:
                                            extraLinks.cost = _state.sent();
                                            _state.label = 2;
                                        case 2:
                                            if (!(subscriptionsLinks.length > 0)) return [
                                                3,
                                                4
                                            ];
                                            return [
                                                4,
                                                subscriptionsLinks.filter(_utils_isNavItemVisible__WEBPACK_IMPORTED_MODULE_3__.evaluateVisibility)
                                            ];
                                        case 3:
                                            extraLinks.subs = _state.sent();
                                            _state.label = 4;
                                        case 4:
                                            if (rest.filterable !== true && (subscriptionsLinks.length > 0 || costLinks.length > 0)) {
                                                return [
                                                    2
                                                ];
                                            }
                                            /**
       * We have to create a placeholder for the link item, in order to preserver the links order
       */ bundleLinks.push(_object_spread_props(_object_spread({}, rest), {
                                                isHidden: true
                                            }));
                                            return [
                                                4,
                                                (0,_utils_isNavItemVisible__WEBPACK_IMPORTED_MODULE_3__.evaluateVisibility)(rest)
                                            ];
                                        case 5:
                                            link = _state.sent();
                                            bundleLinks[nextIndex] = link;
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                            return function(_param) {
                                return _ref.apply(this, arguments);
                            };
                        }());
                        return [
                            4,
                            Promise.all(promises)
                        ];
                    case 1:
                        _state.sent();
                        setState(function(prev) {
                            var _obj;
                            return _object_spread_props(_object_spread({}, prev), {
                                isLoaded: true,
                                data: _object_spread_props(_object_spread({}, prev.data), (_obj = {}, _define_property(_obj, id, {
                                    id: id,
                                    title: title,
                                    links: bundleLinks
                                }), _define_property(_obj, 'cost-management', _object_spread_props(_object_spread({}, prev.data['cost-management']), {
                                    links: _to_consumable_array(prev.data['cost-management'].links).concat(_to_consumable_array(extraLinks.cost.filter(function(item) {
                                        return !isDuplicate(prev.data['cost-management'].links, item.href);
                                    })))
                                })), _define_property(_obj, "subscriptions", _object_spread_props(_object_spread({}, prev.data.subscriptions), {
                                    links: _to_consumable_array(prev.data.subscriptions.links).concat(_to_consumable_array(extraLinks.subs.filter(function(item) {
                                        return !isDuplicate(prev.data.subscriptions.links, item.href);
                                    })))
                                })), _obj))
                            });
                        });
                        return [
                            2
                        ];
                }
            });
        });
        return function handleBundleData(_) {
            return _ref.apply(this, arguments);
        };
    }();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {
        if (state.isOpen && !state.isLoading && !state.isLoaded) {
            setState(function(prev) {
                return _object_spread_props(_object_spread({}, prev), {
                    isLoading: true
                });
            });
            var bundles = requiredBundles.filter(function(app) {
                return !Object.keys(existingSchemas).includes(app);
            });
            bundles.map(function(fragment) {
                return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat((0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.getChromeStaticPathname)('navigation'), "/").concat(fragment, "-navigation.json?ts=").concat(Date.now()))// fallback static CSC for EE env
                .catch(function() {
                    return axios__WEBPACK_IMPORTED_MODULE_0___default().get("$/config/chrome/".concat(fragment, "-navigation.json?ts=").concat(Date.now()));
                }).then(handleBundleData).then(function() {
                    return Object.values(existingSchemas).map(function(data) {
                        return handleBundleData({
                            data: data
                        });
                    });
                }).catch(function(err) {
                    console.error('Unable to load appfilter bundle', err, fragment);
                });
            });
        }
    }, [
        state.isOpen
    ]);
    var setIsOpen = function(isOpen) {
        setState(function(prev) {
            return _object_spread_props(_object_spread({}, prev), {
                isOpen: isOpen
            });
        });
    };
    var setFilterValue = function() {
        var filterValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
        setState(function(prev) {
            return _object_spread_props(_object_spread({}, prev), {
                filterValue: filterValue
            });
        });
    };
    var filterApps = function(data) {
        var filterValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
        return Object.entries(data).reduce(function(acc, _param) {
            var _$_param = _sliced_to_array(_param, 2), key = _$_param[0], links = _$_param[1].links, rest = _object_without_properties(_param[1], [
                "links"
            ]);
            var _rest_title;
            if (rest === null || rest === void 0 ? void 0 : (_rest_title = rest.title) === null || _rest_title === void 0 ? void 0 : _rest_title.toLowerCase().includes(filterValue.toLowerCase())) {
                return _object_spread_props(_object_spread({}, acc), _define_property({}, key, _object_spread_props(_object_spread({}, rest), {
                    links: links
                })));
            }
            return _object_spread_props(_object_spread({}, acc), _define_property({}, key, _object_spread_props(_object_spread({}, rest), {
                links: links.filter(function(param) {
                    var title = param.title, isHidden = param.isHidden;
                    return !isHidden && (title === null || title === void 0 ? void 0 : title.toLowerCase().includes(filterValue.toLowerCase()));
                })
            })));
        }, {});
    };
    var filteredApps = filterApps(state.data, state.filterValue);
    return _object_spread_props(_object_spread({}, state), {
        setIsOpen: setIsOpen,
        setFilterValue: setFilterValue,
        filteredApps: bundlesOrder.map(function(app) {
            return filteredApps[app];
        }).filter(function(app) {
            return typeof app !== 'undefined';
        }).filter(function(param) {
            var links = param.links;
            return links.length > 0;
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAppFilter);


/***/ }),

/***/ "./src/components/ChromeLink/ChromeLink.tsx":
/*!**************************************************!*\
  !*** ./src/components/ChromeLink/ChromeLink.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?1a75");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scalprum_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scalprum/core */ "webpack/sharing/consume/default/@scalprum/core/@scalprum/core");
/* harmony import */ var _scalprum_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scalprum_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navigation_navContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Navigation/navContext */ "./src/components/Navigation/navContext.ts");
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jotai */ "./node_modules/jotai/esm/react.mjs");
/* harmony import */ var _state_atoms_activeModuleAtom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/atoms/activeModuleAtom */ "./src/state/atoms/activeModuleAtom.ts");
/* harmony import */ var _state_atoms_chromeModuleAtom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state/atoms/chromeModuleAtom */ "./src/state/atoms/chromeModuleAtom.ts");
/* harmony import */ var _state_atoms_activeAppAtom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../state/atoms/activeAppAtom */ "./src/state/atoms/activeAppAtom.ts");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}








var LinkWrapper = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function(_param) {
    var _param_href = _param.href, href = _param_href === void 0 ? '' : _param_href, isBeta = _param.isBeta, onLinkClick = _param.onLinkClick, className = _param.className, currAppId = _param.currAppId, appId = _param.appId, children = _param.children, tabIndex = _param.tabIndex, props = _object_without_properties(_param, [
        "href",
        "isBeta",
        "onLinkClick",
        "className",
        "currAppId",
        "appId",
        "children",
        "tabIndex"
    ]);
    var linkRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    var moduleRoutes = (0,jotai__WEBPACK_IMPORTED_MODULE_7__.useAtomValue)(_state_atoms_chromeModuleAtom__WEBPACK_IMPORTED_MODULE_5__.moduleRoutesAtom);
    var triggerNavListener = (0,jotai__WEBPACK_IMPORTED_MODULE_7__.useSetAtom)(_state_atoms_activeAppAtom__WEBPACK_IMPORTED_MODULE_6__.triggerNavListenersAtom);
    var moduleEntry = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function() {
        return moduleRoutes === null || moduleRoutes === void 0 ? void 0 : moduleRoutes.find(function(route) {
            return href === null || href === void 0 ? void 0 : href.includes(route.path);
        });
    }, [
        href,
        appId
    ]);
    var preloadTimeout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    var actionId = href.split('/').slice(2).join('/');
    if (actionId.includes('/')) {
        actionId = actionId.split('/').pop();
    }
    if (currAppId !== appId && href.split('/').length === 3) {
        actionId = '/';
    }
    /**
     * If the sub nav item points to application root
     * eg. /openshift/cost-management we don't want to send "/cost-management" but "/"
     * We are not in app sub route but in app root
     */ var domEvent = {
        href: href,
        id: actionId,
        navId: actionId,
        /**
       * @deprecated
       * Remove once nav overhaul is in all environments
       */ type: 'click'
    };
    var onClick = function(event) {
        if (event.ctrlKey || event.shiftKey) {
            return false;
        }
        if (onLinkClick && isBeta) {
            if (!onLinkClick(event, href)) {
                return false;
            }
        }
        /**
       * Add reference to the DOM link element
       */ domEvent.target = linkRef.current;
        triggerNavListener({
            navId: actionId,
            domEvent: domEvent
        });
    };
    // turns /settings/rbac/roles -> settings_rbac_roles
    var quickStartHighlightId = href.split('/').slice(href.startsWith('/') ? 1 : 0).join('_');
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, _object_spread_props(_object_spread({}, props), {
        onMouseEnter: function() {
            if (moduleEntry) {
                preloadTimeout.current = setTimeout(function() {
                    (0,_scalprum_core__WEBPACK_IMPORTED_MODULE_2__.preloadModule)(moduleEntry === null || moduleEntry === void 0 ? void 0 : moduleEntry.scope, moduleEntry === null || moduleEntry === void 0 ? void 0 : moduleEntry.module);
                }, 250);
            }
        },
        onMouseLeave: function() {
            if (preloadTimeout.current) {
                clearTimeout(preloadTimeout.current);
            }
        },
        tabIndex: tabIndex,
        ref: linkRef,
        "data-testid": "router-link",
        onClick: onClick,
        to: href,
        className: className,
        "data-quickstart-id": quickStartHighlightId
    }), children);
});
LinkWrapper.displayName = 'MemoizedLinkWrapper';
var basepath = document.baseURI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var cleanRefreshLinkProps = function(_param) {
    var active = _param.active, onClick = _param.onClick, appId = _param.appId, currAppId = _param.currAppId, rest = _object_without_properties(_param, [
        "active",
        "onClick",
        "appId",
        "currAppId"
    ]);
    return rest;
};
var RefreshLink = function(props) {
    var _cleanRefreshLinkProps = cleanRefreshLinkProps(props), href = _cleanRefreshLinkProps.href, isExternal = _cleanRefreshLinkProps.isExternal, onLinkClick = _cleanRefreshLinkProps.onLinkClick, isBeta = _cleanRefreshLinkProps.isBeta, rest = _object_without_properties(_cleanRefreshLinkProps, [
        "href",
        "isExternal",
        "onLinkClick",
        "isBeta"
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", _object_spread(_object_spread_props(_object_spread({
        "data-testid": "native-link",
        href: isExternal ? href : "".concat(basepath).concat(href.replace(/^\//, ''))
    }, isExternal ? {
        rel: 'noreferrer noopener',
        target: '_blank'
    } : {}), {
        onClick: function(event) {
            if (onLinkClick && isBeta && !isExternal) {
                if (!onLinkClick(event, href)) {
                    return false;
                }
            }
        }
    }), rest));
};
var ChromeLink = function(_param) {
    var appId = _param.appId, children = _param.children, rest = _object_without_properties(_param, [
        "appId",
        "children"
    ]);
    var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Navigation_navContext__WEBPACK_IMPORTED_MODULE_3__["default"]), onLinkClick = _useContext.onLinkClick, isNavOpen = _useContext.isNavOpen, inPageLayout = _useContext.inPageLayout;
    var currAppId = (0,jotai__WEBPACK_IMPORTED_MODULE_7__.useAtomValue)(_state_atoms_activeModuleAtom__WEBPACK_IMPORTED_MODULE_4__.activeModuleAtom);
    var LinkComponent = !rest.isExternal ? LinkWrapper : RefreshLink;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LinkComponent, _object_spread(_object_spread_props(_object_spread({}, inPageLayout && !isNavOpen ? {
        tabIndex: -1
    } : {}), {
        onLinkClick: onLinkClick,
        appId: appId,
        currAppId: currAppId
    }), rest), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChromeLink);


/***/ }),

/***/ "./src/components/ChromeLink/index.ts":
/*!********************************************!*\
  !*** ./src/components/ChromeLink/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _ChromeLink__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _ChromeLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChromeLink */ "./src/components/ChromeLink/ChromeLink.tsx");



/***/ }),

/***/ "./src/components/FavoriteServices/EmptyState.tsx":
/*!********************************************************!*\
  !*** ./src/components/FavoriteServices/EmptyState.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button?7990");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Flex */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Flex/@patternfly/react-core/dist/dynamic/layouts/Flex");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Stack */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Stack/@patternfly/react-core/dist/dynamic/layouts/Stack");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Text */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Text/@patternfly/react-core/dist/dynamic/components/Text");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?1a75");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ChromeLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ChromeLink */ "./src/components/ChromeLink/index.ts");
/* harmony import */ var _EmptyState_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EmptyState.scss */ "./src/components/FavoriteServices/EmptyState.scss");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}







var EmptyState = function() {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        className: "pf-v5-u-justify-content-center pf-v5-u-align-items-stretch"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        className: "pf-v5-u-justify-content-center"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_2__.StackItem, {
        className: "pf-v5-u-text-align-center"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement("img", {
        src: "https://console.redhat.com/apps/frontend-assets/favoritedservices/favoriting-emptystate.svg",
        alt: "favoriting image"
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_2__.StackItem, {
        className: "pf-v5-u-text-align-center"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_3__.TextContent, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_3__.Text, {
        component: "h3",
        className: "pf-v5-m-center"
    }, "No favorited services"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_3__.Text, {
        component: "small",
        className: "pf-v5-u-mt-sm"
    }, "Add a service to your favorites to get started here."))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_2__.StackItem, {
        className: "pf-v5-u-text-align-center pf-v5-u-mt-md"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_0__.Button, {
        variant: "primary",
        alt: "View all services",
        component: function(props) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_ChromeLink__WEBPACK_IMPORTED_MODULE_5__["default"], _object_spread_props(_object_spread({}, props), {
                href: "/allservices"
            }));
        }
    }, "View all services")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmptyState);


/***/ }),

/***/ "./src/components/FeatureFlags/unleashClient.ts":
/*!******************************************************!*\
  !*** ./src/components/FeatureFlags/unleashClient.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UNLEASH_ERROR_KEY: () => (/* binding */ UNLEASH_ERROR_KEY),
/* harmony export */   getFeatureFlagsError: () => (/* binding */ getFeatureFlagsError),
/* harmony export */   getUnleashClient: () => (/* binding */ getUnleashClient),
/* harmony export */   setUnleashClient: () => (/* binding */ setUnleashClient),
/* harmony export */   unleashClientExists: () => (/* binding */ unleashClientExists)
/* harmony export */ });
var unleashClient;
var UNLEASH_ERROR_KEY = 'chrome:feature-flags:error';
/**
 * Clear error localstorage flag before initialization
 */ localStorage.setItem(UNLEASH_ERROR_KEY, 'false');
var getFeatureFlagsError = function() {
    return localStorage.getItem(UNLEASH_ERROR_KEY) === 'true';
};
function getUnleashClient() {
    if (!unleashClient) {
        throw new Error('UnleashClient not initialized!');
    }
    return unleashClient;
}
function setUnleashClient(client) {
    unleashClient = client;
}
function unleashClientExists() {
    return !!unleashClient;
}


/***/ }),

/***/ "./src/components/Navigation/navContext.ts":
/*!*************************************************!*\
  !*** ./src/components/Navigation/navContext.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?1a75");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var NavContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavContext);


/***/ }),

/***/ "./src/hooks/useAllLinks.ts":
/*!**********************************!*\
  !*** ./src/hooks/useAllLinks.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?1a75");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_fetchNavigationFiles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/fetchNavigationFiles */ "./src/utils/fetchNavigationFiles.ts");
/* harmony import */ var _utils_isNavItemVisible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/isNavItemVisible */ "./src/utils/isNavItemVisible.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.ts");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}




var getFirstChildRoute = function() {
    var routes = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var firstLeaf = routes.find(function(item) {
        return !item.expandable && item.href;
    });
    if (firstLeaf) {
        return firstLeaf;
    }
    var childRoute;
    var nestedItems = firstLeaf ? [] : routes.filter(function(item) {
        return item.expandable;
    });
    // make sure to find first deeply nested item
    nestedItems.every(function(item) {
        childRoute = getFirstChildRoute(item.routes);
        return !childRoute;
    });
    return childRoute;
};
var handleBundleResponse = function(bundle) {
    var _bundle_navItems;
    var flatLinks = bundle === null || bundle === void 0 ? void 0 : (_bundle_navItems = bundle.navItems) === null || _bundle_navItems === void 0 ? void 0 : _bundle_navItems.reduce(function(acc, _param) {
        var navItems = _param.navItems, routes = _param.routes, expandable = _param.expandable, rest = _object_without_properties(_param, [
            "navItems",
            "routes",
            "expandable"
        ]);
        // item is a group
        if (navItems) {
            var _acc;
            (_acc = acc).push.apply(_acc, _to_consumable_array(handleBundleResponse(_object_spread_props(_object_spread({}, rest), {
                navItems: navItems
            })).links));
            return acc;
        }
        if (typeof expandable !== 'undefined' && typeof routes !== 'undefined' && typeof rest.id !== 'undefined') {
            var childRoute = getFirstChildRoute(routes);
            if (childRoute) {
                var _acc1;
                var expandableLink = _object_spread_props(_object_spread({}, childRoute), {
                    title: rest.title,
                    description: rest.description,
                    id: rest.id
                });
                (_acc1 = acc).push.apply(_acc1, _to_consumable_array(routes).concat([
                    expandableLink
                ]));
            // return acc;
            }
        }
        // item is an expandable section
        if (typeof expandable !== 'undefined' && typeof routes !== 'undefined') {
            var // console.log('rest:', { ...rest, routes });
            _acc2;
            (_acc2 = acc).push.apply(_acc2, _to_consumable_array(handleBundleResponse(_object_spread_props(_object_spread({}, rest), {
                navItems: routes
            })).links));
            return acc;
        }
        // regular NavItem
        acc.push(rest);
        return acc;
    }, []);
    var bundleFirstLink = getFirstChildRoute(bundle.navItems);
    if (bundleFirstLink && bundle.id) {
        var bundleLink = _object_spread_props(_object_spread({}, bundleFirstLink), {
            title: bundle.title,
            id: bundle.id,
            description: bundle.description
        });
        flatLinks.push(bundleLink);
    }
    return {
        id: bundle.id,
        title: bundle.title,
        links: (flatLinks || []).flat()
    };
};
var getNavLinks = function(navItems) {
    var links = [];
    navItems.forEach(function(item) {
        if ((0,_utils_common__WEBPACK_IMPORTED_MODULE_3__.isExpandableNav)(item)) {
            links.concat(getNavLinks(item.routes));
        } else if (item.groupId && item.navItems) {
            links.concat(getNavLinks(item.navItems));
        } else {
            links.push(item);
        }
    });
    return links;
};
var fetchNavigation = function() {
    var _ref = _async_to_generator(function() {
        var bundlesNavigation, parsedBundles, allLinks;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_utils_fetchNavigationFiles__WEBPACK_IMPORTED_MODULE_1__["default"])().then(function(data) {
                            return data.map(handleBundleResponse);
                        })
                    ];
                case 1:
                    bundlesNavigation = _state.sent();
                    return [
                        4,
                        Promise.all(bundlesNavigation.map(function() {
                            var _ref = _async_to_generator(function(bundleNav) {
                                var _tmp, _tmp1;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            _tmp = [
                                                _object_spread({}, bundleNav)
                                            ];
                                            _tmp1 = {};
                                            return [
                                                4,
                                                Promise.all(bundleNav.links.map(_utils_isNavItemVisible__WEBPACK_IMPORTED_MODULE_2__.evaluateVisibility))
                                            ];
                                        case 1:
                                            return [
                                                2,
                                                _object_spread_props.apply(void 0, _tmp.concat([
                                                    (_tmp1.links = _state.sent().filter(function(param) {
                                                        var isHidden = param.isHidden;
                                                        return !isHidden;
                                                    }), _tmp1)
                                                ]))
                                            ];
                                    }
                                });
                            });
                            return function(bundleNav) {
                                return _ref.apply(this, arguments);
                            };
                        }()))
                    ];
                case 2:
                    parsedBundles = _state.sent();
                    allLinks = parsedBundles.map(function(param) {
                        var links = param.links;
                        return getNavLinks(links);
                    }).flat();
                    return [
                        2,
                        allLinks
                    ];
            }
        });
    });
    return function fetchNavigation() {
        return _ref.apply(this, arguments);
    };
}();
var useAllLinks = function() {
    var _useState = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), 2), allLinks = _useState[0], setAllLinks = _useState[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
        fetchNavigation().then(setAllLinks);
    }, []);
    return allLinks;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAllLinks);


/***/ }),

/***/ "./src/hooks/useAllServices.ts":
/*!*************************************!*\
  !*** ./src/hooks/useAllServices.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?1a75");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AllServices_allServicesLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AllServices/allServicesLinks */ "./src/components/AllServices/allServicesLinks.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.ts");
/* harmony import */ var _utils_isNavItemVisible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/isNavItemVisible */ "./src/utils/isNavItemVisible.ts");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function _ts_values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}





var allServicesFetchCache = {};
var matchStrings = function() {
    var value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '', searchTerm = arguments.length > 1 ? arguments[1] : void 0;
    // convert strings to lowercase and remove any white spaces
    return value.toLocaleLowerCase().replace(/\s/gm, '').includes(searchTerm.toLocaleLowerCase().replace(/\s/gm, ''));
};
// remove links that do not include the search term
var filterAllServicesLinks = function(links, filterValue) {
    return links.reduce(function(acc, link) {
        // groups have links nested, we have to filter them as well
        if ((0,_components_AllServices_allServicesLinks__WEBPACK_IMPORTED_MODULE_2__.isAllServicesGroup)(link)) {
            if (matchStrings(link.title, filterValue)) {
                return _to_consumable_array(acc).concat([
                    link
                ]);
            }
            var groupLinks = filterAllServicesLinks(link.links, filterValue);
            // replace group links with filtered results
            var newGroup = _object_spread_props(_object_spread({}, link), {
                links: groupLinks
            });
            // do not include empty group to result
            return _to_consumable_array(acc).concat(_to_consumable_array(groupLinks.length > 0 ? [
                newGroup
            ] : []));
        }
        // include leaf link only if it matches
        if (matchStrings(link.title, filterValue)) {
            return _to_consumable_array(acc).concat([
                link
            ]);
        }
        return acc;
    }, []);
};
// remove sections that do not include any relevant items or their title does not match the search term
var filterAllServicesSections = function(allServicesLinks, filterValue) {
    return allServicesLinks.reduce(function(acc, section) {
        // if a section title matches, include in results
        if (matchStrings(section.title, filterValue)) {
            return _to_consumable_array(acc).concat([
                section
            ]);
        }
        // filter section links
        var sectionLinks = filterAllServicesLinks(section.links, filterValue);
        // include section only if internal links match the term
        if (sectionLinks.length > 0) {
            return _to_consumable_array(acc).concat([
                _object_spread_props(_object_spread({}, section), {
                    links: sectionLinks
                })
            ]);
        }
        return acc;
    }, []);
};
var evaluateLinksVisibility = function() {
    var _ref = _async_to_generator(function(sections) {
        var que, groupQue, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    que = [];
                    sections.forEach(function(section) {
                        var newLinksQue = section.links.map(function() {
                            var _ref = _async_to_generator(function(link) {
                                var nestedLinksQue, links;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            if (!(0,_components_AllServices_allServicesLinks__WEBPACK_IMPORTED_MODULE_2__.isAllServicesGroup)(link)) return [
                                                3,
                                                3
                                            ];
                                            return [
                                                4,
                                                link.links.map(_utils_isNavItemVisible__WEBPACK_IMPORTED_MODULE_4__.evaluateVisibility)
                                            ];
                                        case 1:
                                            nestedLinksQue = _state.sent();
                                            return [
                                                4,
                                                Promise.all(nestedLinksQue)
                                            ];
                                        case 2:
                                            links = _state.sent();
                                            return [
                                                2,
                                                _object_spread_props(_object_spread({}, link), {
                                                    links: links
                                                })
                                            ];
                                        case 3:
                                            if ((0,_components_AllServices_allServicesLinks__WEBPACK_IMPORTED_MODULE_2__.isAllServicesLink)(link)) {
                                                return [
                                                    2,
                                                    (0,_utils_isNavItemVisible__WEBPACK_IMPORTED_MODULE_4__.evaluateVisibility)(link)
                                                ];
                                            }
                                            _state.label = 4;
                                        case 4:
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                            return function(link) {
                                return _ref.apply(this, arguments);
                            };
                        }());
                        que.push(_object_spread_props(_object_spread({}, section), {
                            linksQue: newLinksQue
                        }));
                    });
                    return [
                        4,
                        Promise.all(que)
                    ];
                case 1:
                    groupQue = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        7,
                        8,
                        9
                    ]);
                    _loop = function() {
                        var section, _section_linksQue, links;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    section = _step.value;
                                    return [
                                        4,
                                        Promise.all((_section_linksQue = section.linksQue) !== null && _section_linksQue !== void 0 ? _section_linksQue : [])
                                    ];
                                case 1:
                                    links = _state.sent();
                                    section.links = [];
                                    links.forEach(function(link) {
                                        if (((0,_components_AllServices_allServicesLinks__WEBPACK_IMPORTED_MODULE_2__.isAllServicesGroup)(link) || (0,_components_AllServices_allServicesLinks__WEBPACK_IMPORTED_MODULE_2__.isAllServicesLink)(link)) && !link.isHidden) {
                                            if ((0,_components_AllServices_allServicesLinks__WEBPACK_IMPORTED_MODULE_2__.isAllServicesGroup)(link)) {
                                                section.links.push(_object_spread_props(_object_spread({}, link), {
                                                    links: link.links.filter(function(item) {
                                                        return !item.isHidden;
                                                    })
                                                }));
                                            } else {
                                                section.links.push(link);
                                            }
                                        }
                                    });
                                    delete section.linksQue;
                                    return [
                                        2
                                    ];
                            }
                        });
                    };
                    _iterator = groupQue[Symbol.iterator]();
                    _state.label = 3;
                case 3:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        6
                    ];
                    return [
                        5,
                        _ts_values(_loop())
                    ];
                case 4:
                    _state.sent();
                    _state.label = 5;
                case 5:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        3
                    ];
                case 6:
                    return [
                        3,
                        9
                    ];
                case 7:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        9
                    ];
                case 8:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 9:
                    return [
                        2,
                        groupQue
                    ];
            }
        });
    });
    return function evaluateLinksVisibility(sections) {
        return _ref.apply(this, arguments);
    };
}();
var useAllServices = function() {
    var _useState = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        ready: false,
        error: false,
        availableSections: []
    }), 2), _useState_ = _useState[0], ready = _useState_.ready, error = _useState_.error, availableSections = _useState_.availableSections, setState = _useState[1];
    var isMounted = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    var _useState1 = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), 2), filterValue = _useState1[0], setFilterValue = _useState1[1];
    var fetchSections = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(/*#__PURE__*/ _async_to_generator(function() {
        var query, request, response;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    query = "".concat((0,_utils_common__WEBPACK_IMPORTED_MODULE_3__.getChromeStaticPathname)('services'), "/services-generated.json");
                    request = allServicesFetchCache[query];
                    if (!request) {
                        request = axios__WEBPACK_IMPORTED_MODULE_0___default().get(query);
                        allServicesFetchCache[query] = request;
                    }
                    return [
                        4,
                        request
                    ];
                case 1:
                    response = _state.sent();
                    // clear the cache
                    delete allServicesFetchCache[query];
                    return [
                        2,
                        evaluateLinksVisibility(response.data)
                    ];
            }
        });
    }), []);
    var setNavigation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(/*#__PURE__*/ _async_to_generator(function() {
        var sections, availableSections;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        fetchSections()
                    ];
                case 1:
                    sections = _state.sent();
                    if (isMounted.current) {
                        availableSections = sections.filter(function(param) {
                            var links = param.links;
                            if ((links === null || links === void 0 ? void 0 : links.length) === 0) {
                                return false;
                            }
                            return links.filter(function(item) {
                                return (0,_components_AllServices_allServicesLinks__WEBPACK_IMPORTED_MODULE_2__.isAllServicesLink)(item) || (0,_components_AllServices_allServicesLinks__WEBPACK_IMPORTED_MODULE_2__.isAllServicesGroup)(item) && item.links.length !== 0;
                            }).flat().length !== 0;
                        });
                        setState(function(prev) {
                            return _object_spread_props(_object_spread({}, prev), {
                                availableSections: availableSections,
                                ready: true
                            });
                        });
                    }
                    return [
                        2
                    ];
            }
        });
    }), [
        fetchSections
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {
        isMounted.current = true;
        setNavigation();
        return function() {
            isMounted.current = false;
        };
    }, [
        setNavigation
    ]);
    var linkSections = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {
        return filterAllServicesSections(availableSections, filterValue);
    }, [
        ready,
        filterValue
    ]);
    return {
        linkSections: linkSections,
        error: error,
        ready: ready,
        availableSections: availableSections,
        filterValue: filterValue,
        setFilterValue: setFilterValue
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAllServices);


/***/ }),

/***/ "./src/hooks/useFavoritePagesWrapper.ts":
/*!**********************************************!*\
  !*** ./src/hooks/useFavoritePagesWrapper.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _redhat_cloud_services_chrome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redhat-cloud-services/chrome */ "webpack/sharing/consume/default/@redhat-cloud-services/chrome/@redhat-cloud-services/chrome");
/* harmony import */ var _redhat_cloud_services_chrome__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_chrome__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _analytics_useSegment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../analytics/useSegment */ "./src/analytics/useSegment.ts");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


var FAVORITE_PAGE_EVENT = 'page-favorite';
var UNFAVORITE_PAGE_EVENT = 'page-unfavorite';
var useFavoritePagesWrapper = function() {
    var _useFavoritePages = (0,_redhat_cloud_services_chrome__WEBPACK_IMPORTED_MODULE_0__.useFavoritePages)(), favoritePage = _useFavoritePages.favoritePage, unfavoritePage = _useFavoritePages.unfavoritePage, rest = _object_without_properties(_useFavoritePages, [
        "favoritePage",
        "unfavoritePage"
    ]);
    var _useSegment = (0,_analytics_useSegment__WEBPACK_IMPORTED_MODULE_1__.useSegment)(), ready = _useSegment.ready, analytics = _useSegment.analytics;
    var favoritePageInternal = function(pathname) {
        if (ready && analytics) {
            analytics.track(FAVORITE_PAGE_EVENT, {
                pathname: pathname
            });
        }
        return favoritePage(pathname);
    };
    var unfavoritePageInternal = function(pathname) {
        if (ready && analytics) {
            analytics.track(UNFAVORITE_PAGE_EVENT, {
                pathname: pathname
            });
        }
        return unfavoritePage(pathname);
    };
    return _object_spread_props(_object_spread({}, rest), {
        favoritePage: favoritePageInternal,
        unfavoritePage: unfavoritePageInternal
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFavoritePagesWrapper);


/***/ }),

/***/ "./src/hooks/useFavoritedServices.ts":
/*!*******************************************!*\
  !*** ./src/hooks/useFavoritedServices.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useAllServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useAllServices */ "./src/hooks/useAllServices.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?1a75");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_fetchNavigationFiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/fetchNavigationFiles */ "./src/utils/fetchNavigationFiles.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.ts");
/* harmony import */ var _useFavoritePagesWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useFavoritePagesWrapper */ "./src/hooks/useFavoritePagesWrapper.ts");
/* harmony import */ var _components_AllServices_allServicesLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AllServices/allServicesLinks */ "./src/components/AllServices/allServicesLinks.ts");
/* harmony import */ var _useAllLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useAllLinks */ "./src/hooks/useAllLinks.ts");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}







var useFavoritedServices = function() {
    var favoritePages = (0,_useFavoritePagesWrapper__WEBPACK_IMPORTED_MODULE_4__["default"])().favoritePages;
    var availableSections = (0,_useAllServices__WEBPACK_IMPORTED_MODULE_0__["default"])().availableSections;
    var allLinks = (0,_useAllLinks__WEBPACK_IMPORTED_MODULE_6__["default"])();
    var _useState = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), bundles = _useState[0], setBundles = _useState[1];
    var fakeBundle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {
        // escape early if we have no services
        if (availableSections.length === 0) {
            return [];
        }
        // map services links to nav links
        return availableSections.reduce(function(acc, curr) {
            var // no need to recreate the reduce array
            _acc;
            var fakeNavItems = curr.links.filter(_components_AllServices_allServicesLinks__WEBPACK_IMPORTED_MODULE_5__.isAllServicesLink);
            (_acc = acc).push.apply(_acc, _to_consumable_array(fakeNavItems));
            return acc;
        }, []);
    }, [
        availableSections
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {
        (0,_utils_fetchNavigationFiles__WEBPACK_IMPORTED_MODULE_2__["default"])().then(function(data) {
            return setBundles(data);
        }).catch(function(error) {
            console.error('Unable to fetch favorite services', error);
        });
    }, []);
    var linksWithFragments = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {
        var internalLinks = _to_consumable_array(allLinks);
        // push items with unique hrefs from our fake bundle for leaf creation
        fakeBundle.forEach(function(item) {
            if (!internalLinks.some(function(link) {
                return link.href === item.href;
            })) {
                internalLinks.push(item);
            }
        });
        return internalLinks.map(function(link) {
            var linkLeaf;
            // use every to exit early if match was found
            _to_consumable_array(bundles).concat([
                fakeBundle || []
            ]).every(function(bundle) {
                var leaf = (0,_utils_common__WEBPACK_IMPORTED_MODULE_3__.findNavLeafPath)((0,_utils_fetchNavigationFiles__WEBPACK_IMPORTED_MODULE_2__.extractNavItemGroups)(bundle), function(item) {
                    return (item === null || item === void 0 ? void 0 : item.href) === link.href;
                });
                if (leaf.activeItem) {
                    linkLeaf = leaf;
                    return false;
                }
                return true;
            });
            return _object_spread_props(_object_spread({}, link), {
                linkLeaf: linkLeaf
            });
        });
    }, [
        allLinks,
        bundles,
        fakeBundle
    ]);
    // extract human friendly data from the all services data set
    var favoriteServices = favoritePages.reduce(function(acc, curr) {
        var service = linksWithFragments.find(function(service) {
            var _service_href;
            return !service.isExternal && ((_service_href = service.href) === null || _service_href === void 0 ? void 0 : _service_href.startsWith(curr.pathname));
        });
        // only pick favorite link if it is favorite and application exists in our all services registry
        if (curr.favorite && service) {
            var _service_linkLeaf;
            // construct title from fragments
            var title = _to_consumable_array((((_service_linkLeaf = service.linkLeaf) === null || _service_linkLeaf === void 0 ? void 0 : _service_linkLeaf.navItems) || []).map(function(param) {
                var title = param.title;
                return title || '';
            })).concat([
                service.title
            ]).join(' | ');
            return _to_consumable_array(acc).concat([
                {
                    name: title,
                    pathname: curr.pathname,
                    description: service.description,
                    icon: service.icon
                }
            ]);
        }
        return acc;
    }, []);
    return favoriteServices;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFavoritedServices);


/***/ }),

/***/ "./src/locales/Messages.ts":
/*!*********************************!*\
  !*** ./src/locales/Messages.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "webpack/sharing/consume/default/react-intl/react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable max-len */ 
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
    activationTitle: {
        id: 'activationTitle',
        description: 'Thank you for submitting your activation request',
        defaultMessage: 'Thank you for submitting your activation request'
    },
    activationDescription: {
        id: 'activationDescription',
        description: 'Red Hat will be in touch within 1 business day to confirm your subscription benefits are ready to be activated.',
        defaultMessage: 'Red Hat will be in touch within 1 business day to confirm your subscription benefits are ready to be activated.'
    },
    segmentError: {
        id: 'segmentError',
        description: 'Context used outside of its Provider!',
        defaultMessage: 'Context used outside of its Provider!'
    },
    changesComing: {
        id: 'changesComing',
        description: 'Changes are coming to cloud.redhat.com on July 29.',
        defaultMessage: 'Changes are coming to cloud.redhat.com on July 29.'
    },
    learnMore: {
        id: 'learnMore',
        description: 'Learn more on our blog.',
        defaultMessage: 'Learn more on our blog.'
    },
    viewChanged: {
        id: 'viewChanged',
        description: 'View has changed',
        defaultMessage: 'View has changed'
    },
    viewAsCustomer: {
        id: 'viewAsCustomer',
        description: 'You are now viewing console.redhat.com as a customer, and will be interacting with real customer data.',
        defaultMessage: 'You are now viewing console.redhat.com as a customer, and will be interacting with real customer data.'
    },
    newRequestReview: {
        id: 'newRequestReview',
        description: 'You have a new access request that needs your review',
        defaultMessage: 'You have a new access request that needs your review'
    },
    noLongerHaveAccess: {
        id: 'noLongerHaveAccess',
        description: "You no longer have access to account {accountId}.",
        defaultMessage: "You no longer have access to account {accountId}."
    },
    somethingWentWrong: {
        id: 'somethingWentWrong',
        description: 'Something went wrong',
        defaultMessage: 'Something went wrong'
    },
    globalRuntimeErrorId: {
        id: 'globalRuntimeErrorId',
        description: 'Global runtime error Id',
        defaultMessage: 'Sentry error ID: {errorId}'
    },
    problemProcessingRequest: {
        id: 'problemProcessingRequest',
        description: 'There was a problem processing the request. Try reloading the page. If the problem persists, contact',
        defaultMessage: 'There was a problem processing the request. Try reloading the page. If the problem persists, contact'
    },
    redHatSupport: {
        id: 'redHatSupport',
        description: 'Red Hat support',
        defaultMessage: 'Red Hat support'
    },
    checkOur: {
        id: 'checkOur',
        description: 'or check our',
        defaultMessage: 'or check our'
    },
    statusPage: {
        id: 'statusPage',
        description: 'Status page',
        defaultMessage: 'Status page'
    },
    knownOutages: {
        id: 'knownOutages',
        description: 'for known outages.',
        defaultMessage: 'for known outages.'
    },
    returnToHomepage: {
        id: 'returnToHomepage',
        description: 'Return to home page',
        defaultMessage: 'Return to home page'
    },
    shareYourFeedback: {
        id: 'shareYourFeedback',
        description: 'Share your feedback with us!',
        defaultMessage: 'Share your feedback with us!'
    },
    enterFeedback: {
        id: 'enterFeedback',
        description: 'Enter your feedback',
        defaultMessage: 'Enter your feedback'
    },
    researchOpportunities: {
        id: 'researchOpportunities',
        description: 'Yes, I would like to hear about research opportunities',
        defaultMessage: 'Yes, I would like to hear about research opportunities'
    },
    learnAboutResearchOpportunities: {
        id: 'learnAboutResearchOpportunities',
        description: 'Learn about opportunities to share your feedback with our User Research Team.',
        defaultMessage: 'Learn about opportunities to share your feedback with our User Research Team.'
    },
    weNeverSharePersonalInformation: {
        id: 'weNeverSharePersonalInformation',
        description: 'We never share your personal information, and you can opt out at any time.',
        defaultMessage: 'We never share your personal information, and you can opt out at any time.'
    },
    email: {
        id: 'email',
        description: 'Email',
        defaultMessage: 'Email'
    },
    submitFeedback: {
        id: 'submitFeedback',
        description: 'Submit feedback',
        defaultMessage: 'Submit feedback'
    },
    cancel: {
        id: 'cancel',
        description: 'Cancel',
        defaultMessage: 'Cancel'
    },
    feedback: {
        id: 'feedback',
        description: 'Feedback',
        defaultMessage: 'Feedback'
    },
    tellAboutExperience: {
        id: 'tellAboutExperience',
        description: 'Tell us about your experience',
        defaultMessage: 'Tell us about your experience'
    },
    helpUsImproveHCC: {
        id: 'helpUsImproveHCC',
        description: 'Help us improve the Red Hat Hybrid Cloud Console.',
        defaultMessage: 'Help us improve the Red Hat Hybrid Cloud Console.'
    },
    shareFeedback: {
        id: 'shareFeedback',
        description: 'Share feedback',
        defaultMessage: 'Share feedback'
    },
    howIsConsoleExperience: {
        id: 'howIsConsoleExperience',
        description: 'What has your console experience been like so far?',
        defaultMessage: 'What has your console experience been like so far?'
    },
    reportBug: {
        id: 'reportBug',
        description: 'Report a bug',
        defaultMessage: 'Report a bug'
    },
    describeBug: {
        id: 'describeBug',
        description: 'Describe the bug you encountered. For urgent issues, open a support case instead.',
        defaultMessage: 'Describe the bug you encountered. For urgent issues, open a support case instead.'
    },
    openSupportCase: {
        id: 'openSupportCase',
        description: 'Open a support case ',
        defaultMessage: 'Open a support case '
    },
    getSupport: {
        id: 'getSupport',
        description: 'Get help from Red Hat support.',
        defaultMessage: 'Get help from Red Hat support.'
    },
    submitOnlyInStageProd: {
        id: 'submitOnlyInStageProd',
        description: 'Submitting feedback only works in prod and stage',
        defaultMessage: 'Submitting feedback only works in prod and stage'
    },
    feedbackSent: {
        id: 'feedbackSent',
        description: 'Feedback Sent',
        defaultMessage: 'Feedback Sent'
    },
    thankYouForFeedback: {
        id: 'thankYouForFeedback',
        description: 'Thank you, we appreciate your feedback.',
        defaultMessage: 'Thank you, we appreciate your feedback.'
    },
    close: {
        id: 'close',
        description: 'Close',
        defaultMessage: 'Close'
    },
    showMore: {
        id: 'showMore',
        description: 'Show more',
        defaultMessage: 'Show more'
    },
    clearFilters: {
        id: 'clearFilters',
        description: 'Clear filters',
        defaultMessage: 'Clear filters'
    },
    noInventoryPermissions: {
        id: 'noInventoryPermissions',
        description: 'You do not have the required inventory permissions to perform this action',
        defaultMessage: 'You do not have the required inventory permissions to perform this action'
    },
    globalFilterNotApplicable: {
        id: 'globalFilterNotApplicable',
        description: 'Global filter is not applicable for this page',
        defaultMessage: 'Global filter is not applicable for this page'
    },
    filterResults: {
        id: 'filterResults',
        description: 'Filter results',
        defaultMessage: 'Filter results'
    },
    selectTagsOrSIDs: {
        id: 'selectTagsOrSIDs',
        description: 'Select one or more tags/SAP IDs (SID)',
        defaultMessage: 'Select one or more tags/SAP IDs (SID)'
    },
    name: {
        id: 'name',
        description: 'Name',
        defaultMessage: 'Name'
    },
    value: {
        id: 'value',
        description: 'Value',
        defaultMessage: 'Value'
    },
    tagSources: {
        id: 'tagSources',
        description: 'Tag sources',
        defaultMessage: 'Tag sources'
    },
    tagsFilter: {
        id: 'tagsFilter',
        description: 'Tags filter',
        defaultMessage: 'Tags filter'
    },
    filterTags: {
        id: 'filterTags',
        description: 'Filter tags',
        defaultMessage: 'Filter tags'
    },
    SIDsFilter: {
        id: 'SIDsFilter',
        description: 'SIDs Filter',
        defaultMessage: 'SIDs Filter'
    },
    filterSAPIDs: {
        id: 'filterSAPIDs',
        description: 'Filter SAP IDs',
        defaultMessage: 'Filter SAP IDs'
    },
    findAppOrService: {
        id: 'findAppOrService',
        description: 'Find a service',
        defaultMessage: 'Find a service'
    },
    noMatchingAppsFound: {
        id: 'noMatchingAppsFound',
        description: 'No matching applications or services found.',
        defaultMessage: 'No matching applications or services found.'
    },
    tryChangingSearch: {
        id: 'tryChangingSearch',
        description: 'This filter criteria matches no applications or services. Try changing your input filter.',
        defaultMessage: 'This filter criteria matches no applications or services. Try changing your input filter.'
    },
    personalAccount: {
        id: 'personalAccount',
        description: 'Personal account',
        defaultMessage: 'Personal account'
    },
    noResults: {
        id: 'noResults',
        description: 'No results',
        defaultMessage: 'No results'
    },
    searchAccount: {
        id: 'searchAccount',
        description: 'Search account',
        defaultMessage: 'Search account'
    },
    login: {
        id: 'login',
        description: 'Log in',
        defaultMessage: 'Log in'
    },
    stopUsing: {
        id: 'stopUsing',
        description: 'Stop using',
        defaultMessage: 'Stop using'
    },
    use: {
        id: 'use',
        description: 'Use',
        defaultMessage: 'Use'
    },
    betaRelease: {
        id: 'betaRelease',
        description: 'the preview release',
        defaultMessage: 'the preview release'
    },
    supportOptions: {
        id: 'supportOptions',
        description: 'Support options',
        defaultMessage: 'Support options'
    },
    apiDocumentation: {
        id: 'apiDocumentation',
        description: 'API documentation',
        defaultMessage: 'API documentation'
    },
    insightsRhelDocumentation: {
        id: 'insightsRhelDocumentation',
        description: 'Insights for RHEL Documentation',
        defaultMessage: 'Insights for RHEL Documentation'
    },
    demoMode: {
        id: 'demoMode',
        description: 'Demo mode',
        defaultMessage: 'Demo mode'
    },
    globalLearningResourcesPage: {
        id: 'globalLearningResourcesPage',
        description: 'All learning resources',
        defaultMessage: 'Global learning resources page'
    },
    loggedOut: {
        id: 'loggedOut',
        description: 'You have successfully logged out.',
        defaultMessage: 'You have successfully logged out.'
    },
    useAccountNumber: {
        id: 'useAccountNumber',
        description: "Use this number when contacting Red Hat for support. If you've never had a subscription in your account, you may not see an account number here.",
        defaultMessage: "Use this number when contacting Red Hat for support. If you've never had a subscription in your account, you may not see an account number here."
    },
    accountNumber: {
        id: 'accountNumber',
        description: 'Account number:',
        defaultMessage: 'Account number:'
    },
    orgId: {
        id: 'orgId',
        description: 'Org ID:',
        defaultMessage: 'Org ID:'
    },
    orgAdministrator: {
        id: 'orgAdministrator',
        description: 'Org. Administrator',
        defaultMessage: 'Org. Administrator'
    },
    internalUser: {
        id: 'internalUser',
        description: 'Internal user',
        defaultMessage: 'Internal user'
    },
    myProfile: {
        id: 'myProfile',
        description: 'My profile',
        defaultMessage: 'My profile'
    },
    myUserAccess: {
        id: 'myUserAccess',
        description: 'My User Access',
        defaultMessage: 'My User Access'
    },
    userPreferences: {
        id: 'userPreferences',
        description: 'User Preferences',
        defaultMessage: 'User Preferences'
    },
    internal: {
        id: 'internal',
        description: 'Internal',
        defaultMessage: 'Internal'
    },
    logout: {
        id: 'logout',
        description: 'Log out',
        defaultMessage: 'Log out'
    },
    home: {
        id: 'home',
        description: 'Home',
        defaultMessage: 'Home'
    },
    viewingAsAccount: {
        id: 'viewingAsAccount',
        description: 'Viewing as Account {selectedAccountNumber}',
        defaultMessage: 'Viewing as Account {selectedAccountNumber}'
    },
    viewRequest: {
        id: 'viewRequest',
        description: 'View request',
        defaultMessage: 'View request'
    },
    username: {
        id: 'username',
        description: 'Username:',
        defaultMessage: 'Username:'
    },
    authFailure: {
        id: 'authFailure',
        description: 'Authorization failure',
        defaultMessage: 'Authorization failure'
    },
    accessRestricted: {
        id: 'accessRestricted',
        description: 'Access to this page is reserved for third party IDP token from users on authorized accounts.',
        defaultMessage: 'Access to this page is reserved for third party IDP token from users on authorized accounts.'
    },
    tryUsingDifferentAccount: {
        id: 'tryUsingDifferentAccount',
        description: 'Try using different account',
        defaultMessage: 'Try using different account'
    },
    quickStarts: {
        id: 'quickStarts',
        description: 'Quick starts',
        defaultMessage: 'Quick starts'
    },
    learnHowTo: {
        id: 'learnHowTo',
        description: 'Learn how to create, import, and run applications with step-by-step instructions and tasks.',
        defaultMessage: 'Learn how to create, import, and run applications with step-by-step instructions and tasks.'
    },
    unableToLoadQuickstartsContent: {
        id: 'unableToLoadQuickstartsContent',
        description: 'Unable to load the quickstarts content.',
        defaultMessage: 'Unable to load the quickstarts content.'
    },
    thereWillBeACatalgPage: {
        id: 'thereWillBeACatalgPage',
        description: 'There will be a catalog page for {bundle} bundle',
        defaultMessage: 'There will be a catalog page for {bundle} bundle'
    },
    tryThisFeatureInBeta: {
        id: 'tryThisFeatureInBeta',
        description: 'Try this feature in our Preview Environment on console.redhat.com/preview. The Preview Environment allows you to interact with new features in an active development space. Because preview pre-release software is still being developed, you may encounter bugs or flaws in availability, stability, data, or performance.',
        defaultMessage: 'Try this feature in our Preview Environment on console.redhat.com/preview. The Preview Environment allows you to interact with new features in an active development space. Because preview pre-release software is still being developed, you may encounter bugs or flaws in availability, stability, data, or performance.'
    },
    afterBetaUse: {
        id: 'afterBetaUse',
        description: 'After you use a feature in preview, you’ll stay in the Preview Environment until you manually exit the preview release. Leave the Preview Environment any time by clicking on the settings (gear) icon or preview icon in the top toolbar.',
        defaultMessage: 'After you use a feature in preview, you’ll stay in the Preview Environment until you manually exit the preview release. Leave the Preview Environment any time by clicking on the settings (gear) icon or preview icon in the top toolbar.'
    },
    useFeatureInBeta: {
        id: 'useFeatureInBeta',
        description: 'Use feature in preview',
        defaultMessage: 'Use feature in preview'
    },
    learnMoreABoutBeta: {
        id: 'learnMoreABoutBeta',
        description: 'Learn more about Preview Environment',
        defaultMessage: 'Learn more about Preview Environment'
    },
    permissionErrorDescription: {
        id: 'permissionErrorDescription',
        defaultMessage: 'Contact your organization administrator(s) for more information or visit <MuaLink>My User Access</MuaLink> to learn more about your permissions.'
    },
    permissionErrorDetail: {
        id: 'permissionErrorDetail',
        defaultMessage: 'Detail: {message}.'
    },
    filterByTags: {
        id: 'filterByTags',
        description: 'Placeholder to indicate ',
        defaultMessage: 'Filter by tags'
    },
    filterByTagsPopoverHeader: {
        id: 'filterByTagsPopoverHeader',
        description: 'Popover Header',
        defaultMessage: 'Tags'
    },
    filterByTagsPopoverCCGLink: {
        id: 'filterByTagsPopoverCCGLink',
        description: 'Client Configuration Guide link',
        defaultMessage: 'Client Configuration Guide'
    },
    filterByTagsPopoverSatelliteLink: {
        id: 'filterByTagsPopoverSatelliteLink',
        description: 'Installing the Satellite inventory upload plugin link',
        defaultMessage: 'imported'
    },
    filterByTagsPopoverContent1: {
        id: 'filterByTagsPopoverContent1',
        description: 'Popover Help Content',
        defaultMessage: 'Tagging can be used to classify further and organize your hosts shown within the Insights inventory. If connected to a Satellite, tags from that Satellite can be'
    },
    filterByTagsPopoverContent2: {
        id: 'filterByTagsPopoverContent2',
        description: 'Popover Help Content',
        defaultMessage: '. Additionally, you can define your own tags via the Insights-Client configuration. Please see our'
    },
    filterByTagsPopoverContent3: {
        id: 'filterByTagsPopoverContent3',
        description: 'Popover Help Content',
        defaultMessage: 'for more details. Please note that Workload tags are automatically added by the Insights service.'
    },
    reportABug: {
        id: 'reportABug',
        description: 'Report a bug',
        defaultMessage: 'Report a bug'
    },
    describeReportBug: {
        id: 'describeReportBug',
        description: 'Describe the bug you encountered. Include where it is located and what action caused it. If this issue is urgent or blocking your workflow, ',
        defaultMessage: 'Describe the bug you encountered. Include where it is located and what action caused it. If this issue is urgent or blocking your workflow, '
    },
    describeBugUrgentCases: {
        id: 'describeBugUrgentCases',
        description: 'Describe the bug you encountered. For urgent issues, open a support case instead.',
        defaultMessage: 'Describe the bug you encountered. For urgent issues, open a support case instead.'
    },
    addDescription: {
        id: 'addDescription',
        description: 'Add description',
        defaultMessage: 'Add description'
    },
    back: {
        id: 'back',
        description: 'Back',
        defaultMessage: 'Back'
    },
    informRedhatDirection: {
        id: 'informRedhatDirection',
        description: 'Inform the direction of Red Hat',
        defaultMessage: 'Inform the direction of Red Hat'
    },
    informDirectionDescription: {
        id: 'informDirectionDescription',
        description: 'By participating in feedback sessions, usability tests, and interviews with our ',
        defaultMessage: 'By participating in feedback sessions, usability tests, and interviews with our '
    },
    userResearchTeam: {
        id: 'userResearchTeam',
        description: 'User Research Team',
        defaultMessage: 'User Research Team'
    },
    directInfluence: {
        id: 'directInfluence',
        description: ', your feedback will directly influence the future of Red Hat’s products. Opt in below to hear about future research opportunities via email.',
        defaultMessage: ', your feedback will directly influence the future of Red Hat’s products. Opt in below to hear about future research opportunities via email.'
    },
    bugReported: {
        id: 'bugReported',
        description: 'Bug Reported',
        defaultMessage: 'Bug Reported'
    },
    teamWillReviewBug: {
        id: 'teamWillReviewBug',
        description: 'We appreciate your feedback and our team will review your report shortly',
        defaultMessage: 'We appreciate your feedback and our team will review your report shortly'
    },
    responseSent: {
        id: 'responseSent',
        description: 'Response sent',
        defaultMessage: 'Response sent'
    },
    thankYouForInterest: {
        id: 'thankYouForInterest',
        description: 'Thank you for your interest in user research. You have been added to our mailing list.',
        defaultMessage: 'Thank you for your interest in user research. You have been added to our mailing list.'
    },
    joinMailingList: {
        id: 'joinMailingList',
        description: 'Join mailing list',
        defaultMessage: 'Join mailing list'
    }
}));


/***/ }),

/***/ "./src/state/atoms/activeAppAtom.ts":
/*!******************************************!*\
  !*** ./src/state/atoms/activeAppAtom.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activeAppAtom: () => (/* binding */ activeAppAtom),
/* harmony export */   activeNavListenersAtom: () => (/* binding */ activeNavListenersAtom),
/* harmony export */   addNavListenerAtom: () => (/* binding */ addNavListenerAtom),
/* harmony export */   deleteNavListenerAtom: () => (/* binding */ deleteNavListenerAtom),
/* harmony export */   triggerNavListenersAtom: () => (/* binding */ triggerNavListenersAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jotai */ "./node_modules/jotai/esm/vanilla.mjs");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}

var activeAppAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(undefined);
var activeNavListenersAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({});
var addNavListenerAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(null, function(_get, set, navListener) {
    var listenerId = Date.now();
    set(activeNavListenersAtom, function(prev) {
        return _object_spread_props(_object_spread({}, prev), _define_property({}, listenerId, navListener));
    });
    return listenerId;
});
var deleteNavListenerAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(null, function(get, set, id) {
    set(activeNavListenersAtom, function(prev) {
        return _object_spread_props(_object_spread({}, prev), _define_property({}, id, undefined));
    });
});
var triggerNavListenersAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(null, function(get, _set, event) {
    var activeNavListeners = get(activeNavListenersAtom);
    Object.values(activeNavListeners).forEach(function(el) {
        el === null || el === void 0 ? void 0 : el(event);
    });
});


/***/ }),

/***/ "./src/state/atoms/activeModuleAtom.ts":
/*!*********************************************!*\
  !*** ./src/state/atoms/activeModuleAtom.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activeModuleAtom: () => (/* binding */ activeModuleAtom),
/* harmony export */   activeModuleDefinitionReadAtom: () => (/* binding */ activeModuleDefinitionReadAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jotai */ "./node_modules/jotai/esm/vanilla.mjs");
/* harmony import */ var _chromeModuleAtom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chromeModuleAtom */ "./src/state/atoms/chromeModuleAtom.ts");


var activeModuleAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(undefined);
var activeModuleDefinitionReadAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(function(get) {
    var activeModuleId = get(activeModuleAtom);
    var chromeModules = get(_chromeModuleAtom__WEBPACK_IMPORTED_MODULE_0__.chromeModulesAtom);
    return activeModuleId ? chromeModules === null || chromeModules === void 0 ? void 0 : chromeModules[activeModuleId] : undefined;
});


/***/ }),

/***/ "./src/state/atoms/chromeModuleAtom.ts":
/*!*********************************************!*\
  !*** ./src/state/atoms/chromeModuleAtom.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chromeModulesAtom: () => (/* binding */ chromeModulesAtom),
/* harmony export */   loadModulesSchemaWriteAtom: () => (/* binding */ loadModulesSchemaWriteAtom),
/* harmony export */   moduleRoutesAtom: () => (/* binding */ moduleRoutesAtom),
/* harmony export */   onRegisterModuleWriteAtom: () => (/* binding */ onRegisterModuleWriteAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jotai */ "./node_modules/jotai/esm/vanilla.mjs");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/common */ "./src/utils/common.ts");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}


var chromeModulesAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)({});
var moduleRoutesAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)([]);
var onRegisterModuleWriteAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(null, function(get, set, payload) {
    var modules = get(chromeModulesAtom);
    var isModuleLoaded = modules === null || modules === void 0 ? void 0 : modules[payload.module];
    if (!isModuleLoaded && typeof payload.manifestLocation === 'string') {
        set(chromeModulesAtom, _object_spread_props(_object_spread({}, modules), _define_property({}, payload.module, {
            manifestLocation: payload.manifestLocation
        })));
    }
});
var loadModulesSchemaWriteAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(null, function(get, set, schema) {
    var moduleRoutes = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.generateRoutesList)(schema);
    set(moduleRoutesAtom, moduleRoutes);
    set(chromeModulesAtom, schema);
});


/***/ }),

/***/ "./src/state/atoms/navigationAtom.ts":
/*!*******************************************!*\
  !*** ./src/state/atoms/navigationAtom.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDynamicSegmentItemsAtom: () => (/* binding */ getDynamicSegmentItemsAtom),
/* harmony export */   getNavigationSegmentAtom: () => (/* binding */ getNavigationSegmentAtom),
/* harmony export */   navigationAtom: () => (/* binding */ navigationAtom),
/* harmony export */   setNavigationSegmentAtom: () => (/* binding */ setNavigationSegmentAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jotai */ "./node_modules/jotai/esm/vanilla.mjs");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/common */ "./src/utils/common.ts");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}


function isNavigation(nav) {
    return !Array.isArray(nav);
}
var navigationAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)({});
var setNavigationSegmentAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(null, function(_get, set, param) {
    var segment = param.segment, schema = param.schema, pathname = param.pathname, shouldMerge = param.shouldMerge;
    set(navigationAtom, function(prev) {
        var mergedSchema = shouldMerge || !prev[segment] ? schema : prev[segment];
        if (isNavigation(mergedSchema)) {
            var sortedLinks = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.levelArray)(mergedSchema.navItems).sort(function(a, b) {
                return a.length < b.length ? 1 : -1;
            });
            return _object_spread_props(_object_spread({}, prev), _define_property({}, segment, _object_spread_props(_object_spread({}, mergedSchema), {
                navItems: pathname ? (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.highlightItems)(pathname, mergedSchema.navItems, sortedLinks) : mergedSchema.navItems,
                sortedLinks: sortedLinks
            })));
        }
        return prev;
    });
});
var getNavigationSegmentAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(null, function(get, _set, segment) {
    var navigation = get(navigationAtom);
    return navigation[segment];
});
var getDynamicSegmentItemsAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(null, function(get, _set, segment, dynamicNav) {
    var _nav_navItems;
    var navigation = get(navigationAtom);
    var nav = navigation[segment];
    return nav === null || nav === void 0 ? void 0 : (_nav_navItems = nav.navItems) === null || _nav_navItems === void 0 ? void 0 : _nav_navItems.filter(function(item) {
        return item.dynamicNav === dynamicNav;
    });
});


/***/ }),

/***/ "./src/utils/VisibilitySingleton.ts":
/*!******************************************!*\
  !*** ./src/utils/VisibilitySingleton.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getVisibilityFunctions: () => (/* binding */ getVisibilityFunctions),
/* harmony export */   initializeVisibilityFunctions: () => (/* binding */ initializeVisibilityFunctions),
/* harmony export */   updateVisibilityFunctionsBeta: () => (/* binding */ updateVisibilityFunctionsBeta),
/* harmony export */   visibilityFunctionsExist: () => (/* binding */ visibilityFunctionsExist)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/utils/common.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scalprum_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @scalprum/core */ "webpack/sharing/consume/default/@scalprum/core/@scalprum/core");
/* harmony import */ var _scalprum_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scalprum_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_FeatureFlags_unleashClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/FeatureFlags/unleashClient */ "./src/components/FeatureFlags/unleashClient.ts");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}







var matcherMapper = {
    isEmpty: (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()),
    isNotEmpty: function(value) {
        return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(value);
    }
};
var matchValue = function(value, matcher) {
    var match = matcherMapper[matcher];
    return typeof match === 'function' ? match(value) : value;
};
var getValue = function() {
    var response = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, accessor = arguments.length > 1 ? arguments[1] : void 0;
    return lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(response || {}, accessor) || lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(response || {}, "data.".concat(accessor));
};
var initialize = function(param) {
    var getUserPermissions = param.getUserPermissions, getUser = param.getUser, getToken = param.getToken, isPreview = param.isPreview;
    /**
   * Check if is permitted to see navigation link
   * @param {array} permissions array checked user permissions
   * @param {every|some} require type of permissions requirement
   * @returns {boolean}
   */ var checkPermissions = function() {
        var _ref = _async_to_generator(function() {
            var permissions, require, userPermissions;
            var _arguments = arguments;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        permissions = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : [], require = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : 'every';
                        return [
                            4,
                            getUserPermissions()
                        ];
                    case 1:
                        userPermissions = _state.sent();
                        return [
                            2,
                            userPermissions && permissions[require](function(item) {
                                return userPermissions.find(function(param) {
                                    var permission = param.permission;
                                    return permission === item;
                                });
                            })
                        ];
                }
            });
        });
        return function checkPermissions() {
            return _ref.apply(this, arguments);
        };
    }();
    var visibilityFunctions = {
        isOrgAdmin: /*#__PURE__*/ _async_to_generator(function() {
            var data, _data_identity_user;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            getUser()
                        ];
                    case 1:
                        data = _state.sent();
                        try {
                            ;
                            return [
                                2,
                                !!(data === null || data === void 0 ? void 0 : (_data_identity_user = data.identity.user) === null || _data_identity_user === void 0 ? void 0 : _data_identity_user.is_org_admin)
                            ];
                        } catch (e) {
                            return [
                                2,
                                false
                            ];
                        }
                        return [
                            2
                        ];
                }
            });
        }),
        isActive: /*#__PURE__*/ _async_to_generator(function() {
            var data, _data_identity_user;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            getUser()
                        ];
                    case 1:
                        data = _state.sent();
                        try {
                            ;
                            return [
                                2,
                                !!(data === null || data === void 0 ? void 0 : (_data_identity_user = data.identity.user) === null || _data_identity_user === void 0 ? void 0 : _data_identity_user.is_active)
                            ];
                        } catch (e) {
                            return [
                                2,
                                false
                            ];
                        }
                        return [
                            2
                        ];
                }
            });
        }),
        isInternal: /*#__PURE__*/ _async_to_generator(function() {
            var data, _data_identity_user;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            getUser()
                        ];
                    case 1:
                        data = _state.sent();
                        try {
                            ;
                            return [
                                2,
                                !!(data === null || data === void 0 ? void 0 : (_data_identity_user = data.identity.user) === null || _data_identity_user === void 0 ? void 0 : _data_identity_user.is_internal)
                            ];
                        } catch (e) {
                            return [
                                2,
                                false
                            ];
                        }
                        return [
                            2
                        ];
                }
            });
        }),
        isEntitled: function() {
            var _ref = _async_to_generator(function(appName) {
                var data, baseEntitlements, entitlements;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                getUser()
                            ];
                        case 1:
                            data = _state.sent();
                            baseEntitlements = {};
                            entitlements = (data || {
                                entitlements: baseEntitlements
                            }).entitlements;
                            return [
                                2,
                                (data === null || data === void 0 ? void 0 : data.entitlements) && appName ? Boolean(entitlements[appName] && entitlements[appName].is_entitled) : Object.entries(entitlements || {}).reduce(function(acc, param) {
                                    var _param = _sliced_to_array(param, 2), key = _param[0], is_entitled = _param[1].is_entitled;
                                    return _object_spread_props(_object_spread({}, acc), _define_property({}, key, is_entitled));
                                }, {})
                            ];
                    }
                });
            });
            return function(appName) {
                return _ref.apply(this, arguments);
            };
        }(),
        isProd: function() {
            return (0,_common__WEBPACK_IMPORTED_MODULE_0__.isProd)();
        },
        /**
     * @deprecated Should use feature flags instead
     * @returns {boolean}
     */ isBeta: function() {
            return isPreview;
        },
        isHidden: function() {
            return true;
        },
        withEmail: /*#__PURE__*/ _async_to_generator(function() {
            var _len, toHave, _key, data, _ref, user;
            var _arguments = arguments;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        for(_len = _arguments.length, toHave = new Array(_len), _key = 0; _key < _len; _key++){
                            toHave[_key] = _arguments[_key];
                        }
                        return [
                            4,
                            getUser()
                        ];
                    case 1:
                        data = _state.sent();
                        _ref = data || {
                            identity: {}
                        }, user = _ref.identity.user;
                        return [
                            2,
                            toHave === null || toHave === void 0 ? void 0 : toHave.some(function(item) {
                                var _user_email;
                                return user === null || user === void 0 ? void 0 : (_user_email = user.email) === null || _user_email === void 0 ? void 0 : _user_email.includes(item);
                            })
                        ];
                }
            });
        }),
        loosePermissions: function(permissions) {
            return checkPermissions(permissions, 'some');
        },
        hasPermissions: checkPermissions,
        hasLocalStorage: function(key, value) {
            return localStorage.get(key) === value;
        },
        hasCookie: function(cookieKey, cookieValue) {
            return js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get(cookieKey) === cookieValue;
        },
        apiRequest: function() {
            var _ref = _async_to_generator(function(_param) {
                var url, _param_method, method, accessor, matcher, options, data, token;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            url = _param.url, _param_method = _param.method, method = _param_method === void 0 ? 'GET' : _param_method, accessor = _param.accessor, matcher = _param.matcher, options = _object_without_properties(_param, [
                                "url",
                                "method",
                                "accessor",
                                "matcher"
                            ]);
                            return [
                                4,
                                getUser()
                            ];
                        case 1:
                            data = _state.sent();
                            return [
                                4,
                                getToken()
                            ];
                        case 2:
                            token = _state.sent();
                            // this will log a bunch of 403s if the account number isn't present
                            if (data === null || data === void 0 ? void 0 : data.identity.org_id) {
                                return [
                                    2,
                                    axios__WEBPACK_IMPORTED_MODULE_2___default()(_object_spread_props(_object_spread({
                                        url: url,
                                        method: method
                                    }, options), {
                                        headers: _object_spread({
                                            Authorization: "Bearer ".concat(token)
                                        }, options.headers)
                                    })).then(function(response) {
                                        return matchValue(accessor ? getValue(response, accessor) : response, matcher);
                                    }).catch(function() {
                                        console.log('Unable to retrieve visibility result', {
                                            visibilityMethod: 'apiRequest',
                                            method: method,
                                            url: url
                                        });
                                        return false;
                                    })
                                ];
                            } else {
                                console.log('Unable to call API, no account number');
                                return [
                                    2,
                                    false
                                ];
                            }
                            return [
                                2
                            ];
                    }
                });
            });
            return function(_param) {
                return _ref.apply(this, arguments);
            };
        }(),
        featureFlag: function(flagName, expectedValue) {
            var _getUnleashClient;
            return (0,_components_FeatureFlags_unleashClient__WEBPACK_IMPORTED_MODULE_6__.getFeatureFlagsError)() !== true && ((_getUnleashClient = (0,_components_FeatureFlags_unleashClient__WEBPACK_IMPORTED_MODULE_6__.getUnleashClient)()) === null || _getUnleashClient === void 0 ? void 0 : _getUnleashClient.isEnabled(flagName)) === expectedValue;
        }
    };
    // in order to properly distribute the module, it has be added to the webpack share scope to avoid reference issues if these functions are called from chrome shared modules
    (0,_scalprum_core__WEBPACK_IMPORTED_MODULE_5__.initSharedScope)();
    var scope = (0,_scalprum_core__WEBPACK_IMPORTED_MODULE_5__.getSharedScope)();
    scope['@chrome/visibilityFunctions'] = {
        '*': {
            loaded: 1,
            get: function() {
                return visibilityFunctions;
            }
        }
    };
};
var getVisibilityFunctions = function() {
    var visibilityFunctions = (0,_scalprum_core__WEBPACK_IMPORTED_MODULE_5__.getSharedScope)()['@chrome/visibilityFunctions'];
    if (!visibilityFunctions) {
        throw new Error('Visibility functions were not initialized! Call the initialized function first.');
    }
    return visibilityFunctions['*'].get();
};
var visibilityFunctionsExist = function() {
    return !!(0,_scalprum_core__WEBPACK_IMPORTED_MODULE_5__.getSharedScope)()['@chrome/visibilityFunctions'];
};
var updateVisibilityFunctionsBeta = function(isPreview) {
    var visibilityFunctions = getVisibilityFunctions();
    visibilityFunctions.isBeta = function() {
        return isPreview;
    };
};
var initializeVisibilityFunctions = initialize;


/***/ }),

/***/ "./src/utils/fetchNavigationFiles.ts":
/*!*******************************************!*\
  !*** ./src/utils/fetchNavigationFiles.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   extractNavItemGroups: () => (/* binding */ extractNavItemGroups),
/* harmony export */   isBundleNavigation: () => (/* binding */ isBundleNavigation),
/* harmony export */   isNavItems: () => (/* binding */ isNavItems)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AppFilter_useAppFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppFilter/useAppFilter */ "./src/components/AppFilter/useAppFilter.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./src/utils/common.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}



function isBundleNavigation(item) {
    return typeof item !== 'undefined';
}
function isNavItems(navigation) {
    return Array.isArray(navigation.navItems);
}
function isGroup(item) {
    return typeof item.groupId === 'string';
}
function extractNavItemGroups(activeNavigation) {
    var _flat, _this;
    return ((_this = isNavItems(activeNavigation) ? activeNavigation.navItems.map(function(item) {
        return isGroup(item) ? item.navItems : item;
    }) : activeNavigation) === null || _this === void 0 ? void 0 : (_flat = _this.flat) === null || _flat === void 0 ? void 0 : _flat.call(_this)) || [];
}
var CACHE_TIMEOUT = 5 * 60000; // 5 minutes cache window
// use simple memory cache to not fetch the data ll the time
var filesCache = {
    expires: Date.now() + CACHE_TIMEOUT,
    data: [],
    ready: false,
    existingRequest: undefined
};
var fetchNavigationFiles = function() {
    var _ref = _async_to_generator(function() {
        var bundles;
        return _ts_generator(this, function(_state) {
            bundles = (0,_common__WEBPACK_IMPORTED_MODULE_2__.ITLess)() ? _components_AppFilter_useAppFilter__WEBPACK_IMPORTED_MODULE_1__.itLessBundles : _components_AppFilter_useAppFilter__WEBPACK_IMPORTED_MODULE_1__.requiredBundles;
            if (filesCache.ready && filesCache.expires > Date.now()) {
                return [
                    2,
                    filesCache.data
                ];
            }
            // do not fire multiple requests at the same time
            if (filesCache.existingRequest) {
                return [
                    2,
                    filesCache.existingRequest
                ];
            }
            filesCache.existingRequest = Promise.all(bundles.map(function(fragment) {
                return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat((0,_common__WEBPACK_IMPORTED_MODULE_2__.getChromeStaticPathname)('navigation'), "/").concat(fragment, "-navigation.json?ts=").concat(Date.now())).catch(function() {
                    return axios__WEBPACK_IMPORTED_MODULE_0___default().get("/config/chrome/".concat(fragment, "-navigation.json?ts=").concat(Date.now()));
                }).then(function(response) {
                    return response.data;
                }).catch(function(err) {
                    console.error('Unable to load bundle navigation', err, fragment);
                    return [];
                });
            })).then(function(data) {
                return data.filter(isBundleNavigation);
            }).then(function(data) {
                filesCache.data = data;
                filesCache.ready = true;
                filesCache.expires = Date.now() + CACHE_TIMEOUT;
                filesCache.existingRequest = undefined;
                return data;
            });
            return [
                2,
                filesCache.existingRequest
            ];
        });
    });
    return function fetchNavigationFiles() {
        return _ref.apply(this, arguments);
    };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchNavigationFiles);


/***/ }),

/***/ "./src/utils/isNavItemVisible.ts":
/*!***************************************!*\
  !*** ./src/utils/isNavItemVisible.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluateVisibility: () => (/* binding */ evaluateVisibility),
/* harmony export */   isNavItemVisible: () => (/* binding */ isNavItemVisible)
/* harmony export */ });
/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/flatMap */ "./node_modules/lodash/flatMap.js");
/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_flatMap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VisibilitySingleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VisibilitySingleton */ "./src/utils/VisibilitySingleton.ts");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}


var visibilityHandler = function() {
    var _ref = _async_to_generator(function(param) {
        var method, args, _visibilityFunctions_method, _visibilityFunctions_method1, visibilityFunctions;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    method = param.method, args = param.args;
                    visibilityFunctions = (0,_VisibilitySingleton__WEBPACK_IMPORTED_MODULE_1__.getVisibilityFunctions)();
                    return [
                        4,
                        (_visibilityFunctions_method1 = visibilityFunctions[method]) === null || _visibilityFunctions_method1 === void 0 ? void 0 : (_visibilityFunctions_method = _visibilityFunctions_method1).call.apply(_visibilityFunctions_method, [
                            visibilityFunctions
                        ].concat(_to_consumable_array(args || [])))
                    ];
                case 1:
                    // (null, undefined, true) !== false
                    return [
                        2,
                        _state.sent() !== false
                    ];
            }
        });
    });
    return function visibilityHandler(_) {
        return _ref.apply(this, arguments);
    };
}();
var isNavItemVisible = function(permissions) {
    return Promise.all(lodash_flatMap__WEBPACK_IMPORTED_MODULE_0___default()(Array.isArray(permissions) ? permissions : [
        permissions
    ], visibilityHandler)).then(function(visibility) {
        return visibility.every(Boolean);
    });
};
var evaluateVisibility = function() {
    var _ref = _async_to_generator(function(navItem) {
        var result, visible;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    /**
   * Skip evaluation for hidden items
   */ if (navItem.isHidden === true) {
                        return [
                            2,
                            navItem
                        ];
                    }
                    result = _object_spread_props(_object_spread({}, navItem), {
                        isHidden: false
                    });
                    if (!(typeof result.permissions !== 'undefined')) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        isNavItemVisible(result.permissions)
                    ];
                case 1:
                    visible = _state.sent();
                    /**
     * Hide item visibility check failed
     */ if (!visible) {
                        return [
                            2,
                            _object_spread_props(_object_spread({}, result), {
                                isHidden: true
                            })
                        ];
                    }
                    _state.label = 2;
                case 2:
                    if (!(typeof result.groupId !== 'undefined')) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        Promise.all(result.navItems.map(evaluateVisibility))
                    ];
                case 3:
                    /**
     * Evalute group items
     */ result.navItems = _state.sent();
                    _state.label = 4;
                case 4:
                    if (!(result.expandable === true)) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        Promise.all(result.routes.map(evaluateVisibility))
                    ];
                case 5:
                    /**
     * Evaluate sub routes
     */ result.routes = _state.sent();
                    _state.label = 6;
                case 6:
                    return [
                        2,
                        result
                    ];
            }
        });
    });
    return function evaluateVisibility(navItem) {
        return _ref.apply(this, arguments);
    };
}();


/***/ })

}]);