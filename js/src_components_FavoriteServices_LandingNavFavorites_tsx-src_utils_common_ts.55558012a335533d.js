"use strict";
(self["webpackChunkinsights_chrome"] = self["webpackChunkinsights_chrome"] || []).push([["src_components_FavoriteServices_LandingNavFavorites_tsx-src_utils_common_ts"],{

/***/ "./src/components/FavoriteServices/LandingNavFavorites.scss":
/*!******************************************************************!*\
  !*** ./src/components/FavoriteServices/LandingNavFavorites.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/FavoriteServices/LandingNavFavorites.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/FavoriteServices/LandingNavFavorites.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Card */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Card/@patternfly/react-core/dist/dynamic/components/Card");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Flex */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Flex/@patternfly/react-core/dist/dynamic/layouts/Flex");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Gallery */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Gallery/@patternfly/react-core/dist/dynamic/layouts/Gallery");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_layouts_Gallery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Icon */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Icon/@patternfly/react-core/dist/dynamic/components/Icon?9be4");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Pagination */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Pagination/@patternfly/react-core/dist/dynamic/components/Pagination?c4e0");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Pagination__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Pagination__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Text */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Text/@patternfly/react-core/dist/dynamic/components/Text");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_star_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/star-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/star-icon/@patternfly/react-icons/dist/dynamic/icons/star-icon");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_star_icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_dynamic_icons_star_icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?dc4e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_useFavoritedServices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useFavoritedServices */ "./src/hooks/useFavoritedServices.ts");
/* harmony import */ var _FavoriteServices_EmptyState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../FavoriteServices/EmptyState */ "./src/components/FavoriteServices/EmptyState.tsx");
/* harmony import */ var _hooks_useBundle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/useBundle */ "./src/hooks/useBundle.ts");
/* harmony import */ var _LandingNavFavorites_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LandingNavFavorites.scss */ "./src/components/FavoriteServices/LandingNavFavorites.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_12__);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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













var LandingNavFavorites = function() {
    var favoritedServices = (0,_hooks_useFavoritedServices__WEBPACK_IMPORTED_MODULE_8__["default"])();
    var _useState = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(1), 2), page = _useState[0], setPage = _useState[1];
    var _React_useState = _sliced_to_array(react__WEBPACK_IMPORTED_MODULE_7___default().useState(4), 2), perPage = _React_useState[0], setPerPage = _React_useState[1];
    var onSetPage = function(_event, newPage) {
        setPage(newPage);
    };
    var onPerPageSelect = function(_event, newPerPage, newPage) {
        setPerPage(newPerPage);
        setPage(newPage);
    };
    var getBundle = function(href) {
        return _hooks_useBundle__WEBPACK_IMPORTED_MODULE_10__.bundleMapping[href.split("/")[1]];
    };
    var buildFavorites = function() {
        return favoritedServices.slice((page - 1) * perPage, page * perPage).map(function(favorite, index) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_patternfly_react_core_dist_dynamic_layouts_Gallery__WEBPACK_IMPORTED_MODULE_2__.GalleryItem, {
                key: index
            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Link, {
                to: favorite.pathname,
                className: "chr-c-favorite-service__tile"
            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_0__.Card, {
                isClickable: true
            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
                selectableActions: {
                    selectableActionId: "id",
                    selectableActionAriaLabelledby: "clickable-card"
                },
                className: "pf-v5-u-pb-0"
            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_0__.CardTitle, {
                className: "pf-v5-u-text-align-center pf-v5-u-active-color-100 pf-v5-u-font-size-sm"
            }, favorite.name)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
                className: "pf-v5-u-text-align-center pf-v5-u-color-100 pf-v5-u-font-size-xs"
            }, getBundle(favorite.pathname)))));
        });
    };
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement((react__WEBPACK_IMPORTED_MODULE_7___default().Fragment), null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_1__.Flex, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_5__.TextContent, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_5__.Text, {
        component: _patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_5__.TextVariants.h2,
        className: "pf-v5-u-display-inline pf-v5-u-pr-lg"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_patternfly_react_core_dist_dynamic_components_Icon__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        className: "pf-v5-u-mr-sm",
        status: "warning"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_patternfly_react_icons_dist_dynamic_icons_star_icon__WEBPACK_IMPORTED_MODULE_6__.StarIcon, null)), "My favorite services"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_5__.Text, {
        component: _patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_5__.TextVariants.p,
        className: "pf-v5-u-display-inline"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Link, {
        to: "/allservices"
    }, "View all services")))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
        align: {
            default: "alignRight"
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_patternfly_react_core_dist_dynamic_components_Pagination__WEBPACK_IMPORTED_MODULE_4__.Pagination, {
        isCompact: true,
        variant: "top",
        itemCount: favoritedServices.length,
        page: page,
        perPage: perPage,
        onPerPageSelect: onPerPageSelect,
        onSetPage: onSetPage,
        widgetId: "favorites-cards-pagination",
        className: "chr-c-pagination-landing-favorites"
    }))), favoritedServices.length === 0 ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_FavoriteServices_EmptyState__WEBPACK_IMPORTED_MODULE_9__["default"], null) : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement((react__WEBPACK_IMPORTED_MODULE_7___default().Fragment), null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_patternfly_react_core_dist_dynamic_layouts_Gallery__WEBPACK_IMPORTED_MODULE_2__.Gallery, {
        className: "pf-v5-u-pt-md",
        hasGutter: true
    }, buildFavorites())));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingNavFavorites);


/***/ }),

/***/ "./src/hooks/useBundle.ts":
/*!********************************!*\
  !*** ./src/hooks/useBundle.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bundleMapping: () => (/* binding */ bundleMapping),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getUrl: () => (/* binding */ getUrl),
/* harmony export */   isAnsible: () => (/* binding */ isAnsible)
/* harmony export */ });
var isAnsible = function(sections) {
    return sections.includes("ansible") && sections.includes("insights") ? 1 : 0;
};
function getUrl(type) {
    if ([
        "/",
        "/beta",
        "/beta/",
        "/preview",
        "/preview/"
    ].includes(window.location.pathname)) {
        return "landing";
    }
    var sections = window.location.pathname.split("/");
    if ([
        "beta",
        "preview"
    ].includes(sections[1])) {
        return type === "bundle" ? sections[2] : sections[3 + isAnsible(sections)];
    }
    return type === "bundle" ? sections[1] : sections[2 + isAnsible(sections)];
}
var bundleMapping = {
    "application-services": "Application and Data Services",
    openshift: "OpenShift",
    ansible: "Ansible Automation Platform",
    insights: "Red Hat Insights",
    edge: "Edge management",
    settings: "Settings",
    landing: "Home",
    allservices: "Home",
    iam: "Identity & Access Management",
    internal: "Internal",
    quay: "Quay.io"
};
var useBundle = function() {
    var bundleId = getUrl("bundle");
    return {
        bundleId: bundleId,
        bundleTitle: bundleMapping[bundleId] || bundleId
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useBundle);


/***/ }),

/***/ "./src/utils/common.ts":
/*!*****************************!*\
  !*** ./src/utils/common.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BLOCK_CLEAR_GATEWAY_ERROR: () => (/* binding */ BLOCK_CLEAR_GATEWAY_ERROR),
/* harmony export */   DEFAULT_SSO_ROUTES: () => (/* binding */ DEFAULT_SSO_ROUTES),
/* harmony export */   ITLess: () => (/* binding */ ITLess),
/* harmony export */   ITLessCognito: () => (/* binding */ ITLessCognito),
/* harmony export */   ITLessKeycloak: () => (/* binding */ ITLessKeycloak),
/* harmony export */   LOGIN_SCOPES_STORAGE_KEY: () => (/* binding */ LOGIN_SCOPES_STORAGE_KEY),
/* harmony export */   chromeServiceStaticPathname: () => (/* binding */ chromeServiceStaticPathname),
/* harmony export */   chunkLoadErrorRefreshKey: () => (/* binding */ chunkLoadErrorRefreshKey),
/* harmony export */   createReduxListener: () => (/* binding */ createReduxListener),
/* harmony export */   deleteLocalStorageItems: () => (/* binding */ deleteLocalStorageItems),
/* harmony export */   findNavLeafPath: () => (/* binding */ findNavLeafPath),
/* harmony export */   generateRoutesList: () => (/* binding */ generateRoutesList),
/* harmony export */   getChromeStaticPathname: () => (/* binding */ getChromeStaticPathname),
/* harmony export */   getEnv: () => (/* binding */ getEnv),
/* harmony export */   getEnvDetails: () => (/* binding */ getEnvDetails),
/* harmony export */   getRouterBasename: () => (/* binding */ getRouterBasename),
/* harmony export */   getSection: () => (/* binding */ getSection),
/* harmony export */   getWindow: () => (/* binding */ getWindow),
/* harmony export */   highlightItems: () => (/* binding */ highlightItems),
/* harmony export */   isBeta: () => (/* binding */ isBeta),
/* harmony export */   isExpandableNav: () => (/* binding */ isExpandableNav),
/* harmony export */   isGlobalFilterAllowed: () => (/* binding */ isGlobalFilterAllowed),
/* harmony export */   isProd: () => (/* binding */ isProd),
/* harmony export */   isValidAccountNumber: () => (/* binding */ isValidAccountNumber),
/* harmony export */   lastActive: () => (/* binding */ lastActive),
/* harmony export */   levelArray: () => (/* binding */ levelArray),
/* harmony export */   loadFedModules: () => (/* binding */ loadFedModules),
/* harmony export */   noop: () => (/* binding */ noop),
/* harmony export */   pageAllowsUnentitled: () => (/* binding */ pageAllowsUnentitled),
/* harmony export */   pageRequiresAuthentication: () => (/* binding */ pageRequiresAuthentication),
/* harmony export */   trustarcScriptSetup: () => (/* binding */ trustarcScriptSetup),
/* harmony export */   updateDocumentTitle: () => (/* binding */ updateDocumentTitle)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/flatMap */ "./node_modules/lodash/flatMap.js");
/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_flatMap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useBundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useBundle */ "./src/hooks/useBundle.ts");
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
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




var DEFAULT_SSO_ROUTES = {
    prod: {
        url: [
            "access.redhat.com",
            "prod.foo.redhat.com",
            "cloud.redhat.com",
            "console.redhat.com",
            "us.console.redhat.com"
        ],
        sso: "https://sso.redhat.com/auth",
        portal: "https://access.redhat.com"
    },
    qa: {
        url: [
            "qa.foo.redhat.com",
            "qa.cloud.redhat.com",
            "qa.console.redhat.com"
        ],
        sso: "https://sso.qa.redhat.com/auth",
        portal: "https://access.qa.redhat.com"
    },
    ci: {
        url: [
            "ci.foo.redhat.com",
            "ci.cloud.redhat.com",
            "ci.console.redhat.com"
        ],
        sso: "https://sso.qa.redhat.com/auth",
        portal: "https://access.qa.redhat.com"
    },
    qaprodauth: {
        url: [
            "qaprodauth.foo.redhat.com",
            "qaprodauth.cloud.redhat.com",
            "qaprodauth.console.redhat.com"
        ],
        sso: "https://sso.redhat.com/auth",
        portal: "https://access.redhat.com"
    },
    stage: {
        url: [
            "stage.foo.redhat.com",
            "cloud.stage.redhat.com",
            "console.stage.redhat.com",
            "fetest.stage.redhat.com",
            "us.console.stage.redhat.com"
        ],
        sso: "https://sso.stage.redhat.com/auth",
        portal: "https://access.stage.redhat.com"
    },
    frh: {
        url: [
            "console.stage.openshiftusgov.com"
        ],
        sso: "https://ocm-ra-stage-domain.auth-fips.us-gov-west-1.amazoncognito.com/login",
        portal: "https://console.stage.openshiftusgov.com"
    },
    frhStage: {
        url: [
            "console.stage.openshiftusgov.com"
        ],
        sso: "https://ocm-ra-stage-domain.auth-fips.us-gov-west-1.amazoncognito.com/login",
        portal: "https://console.stage.openshiftusgov.com"
    },
    ephem: {
        url: [
            "ephem.outsrights.cc"
        ],
        sso: "https://keycloak-fips-test.apps.fips-key.2vn8.p1.openshiftapps.com",
        portal: "https://ephem.outsrights.cc/"
    },
    int: {
        url: [
            "console.int.openshiftusgov.com"
        ],
        sso: "https://sso.int.openshiftusgov.com/",
        portal: "https://console.int.openshiftusgov.com/"
    },
    scr: {
        url: [
            "console01.stage.openshiftusgov.com"
        ],
        sso: "https://sso01.stage.openshiftusgov.com/",
        portal: "https://console01.stage.openshiftusgov.com"
    },
    dev: {
        url: [
            "dev.foo.redhat.com",
            "console.dev.redhat.com",
            "us.console.dev.redhat.com"
        ],
        sso: "https://sso.redhat.com/auth",
        portal: "https://access.redhat.com"
    }
};
var LOGIN_SCOPES_STORAGE_KEY = "@chrome/login-scopes";
var chunkLoadErrorRefreshKey = "ChunkLoadErrorRefreshed";
var BLOCK_CLEAR_GATEWAY_ERROR = "BLOCK_CLEAR_GATEWAY_ERROR";
function getWindow() {
    return window;
}
function isValidAccountNumber(num) {
    if (!num) return false;
    if (num === -1) return false;
    if (num === "-1") return false;
    return Number.isInteger(Number(num));
}
function getSection() {
    var sections = getWindow().location.pathname.split("/");
    if (sections[1] === "beta") {
        return sections[2] || "";
    }
    return sections[1];
}
function pageAllowsUnentitled() {
    var pathname = getWindow().location.pathname;
    if (pathname === "/" || pathname === "/beta" || pathname === "/beta/" || pathname === "/preview" || pathname === "/preview/" || pathname.indexOf("/openshift") === 0 || pathname.indexOf("/beta/openshift") === 0 || pathname.indexOf("/preview/openshift") === 0 || pathname.indexOf("/security") === 0 || pathname.indexOf("/beta/security") === 0 || pathname.indexOf("/preview/security") === 0 || pathname.indexOf("/application-services") === 0 || pathname.indexOf("/beta/application-services") === 0 || pathname.indexOf("/preview/application-services") === 0 || pathname.indexOf("/hac") === 0 || pathname.indexOf("/beta/hac") === 0 || pathname.indexOf("/preview/hac") === 0 || pathname.indexOf("/ansible/ansible-dashboard/trial") === 0 || pathname.indexOf("/beta/ansible/ansible-dashboard/trial") === 0 || pathname.indexOf("/preview/ansible/ansible-dashboard/trial") === 0 || // allow tenants with no account numbers: RHCLOUD-21396
    pathname.match(/\/connect\//)) {
        return true;
    }
    return false;
}
function pageRequiresAuthentication() {
    var section = getSection();
    if (section === "insights" || section === "cost-management" || section === "apps" || section === "ansible" || section === "migrations" || section === "subscriptions" || section === "openshift" || section === "settings" || section === "user-preferences" || section === "internal" || section === "application-services") {
        return true;
    }
    return false;
}
/**
 * Creates a redux listener that watches the state on given path (e.g. chrome.appNav) and calls
 * the given function when the state on the given path changes.
 *
 * The function is called with two parameters: current state value on the path, store reference
 */ function createReduxListener(store, path, fn) {
    var previous = undefined;
    return function() {
        var state = store.getState();
        var current = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(state, path);
        if (current !== previous) {
            previous = current;
            fn(current, store);
        }
    };
}
function deleteLocalStorageItems(keys) {
    keys.map(function(key) {
        return localStorage.removeItem(key);
    });
}
function lastActive(searchString, fallback) {
    return Object.keys(localStorage).reduce(function(acc, curr) {
        if (curr.includes(searchString)) {
            try {
                var accDate;
                try {
                    var _JSON_parse;
                    var localStorageDate = localStorage.getItem(acc);
                    accDate = localStorageDate ? new Date((_JSON_parse = JSON.parse(localStorageDate)) === null || _JSON_parse === void 0 ? void 0 : _JSON_parse.expires) : new Date();
                } catch (e) {
                    accDate = new Date();
                }
                var currObj = JSON.parse(localStorage.getItem(curr) || "");
                return accDate >= new Date(currObj.expires) ? acc : curr;
            } catch (e) {
                return acc;
            }
        }
        return acc;
    }, fallback);
}
function getEnv() {
    var _Object_entries_find;
    return ((_Object_entries_find = Object.entries(DEFAULT_SSO_ROUTES).find(function(param) {
        var _param = _sliced_to_array(param, 2), url = _param[1].url;
        return url.includes(location.hostname);
    })) === null || _Object_entries_find === void 0 ? void 0 : _Object_entries_find[0]) || "qa";
}
function getEnvDetails() {
    var _Object_entries_find;
    return (_Object_entries_find = Object.entries(DEFAULT_SSO_ROUTES).find(function(param) {
        var _param = _sliced_to_array(param, 2), url = _param[1].url;
        return url.includes(location.hostname);
    })) === null || _Object_entries_find === void 0 ? void 0 : _Object_entries_find[1];
}
function isProd() {
    return location.host === "cloud.redhat.com" || location.host === "console.redhat.com" || location.host.includes("prod.foo.redhat.com");
}
function isBeta(pathname) {
    var previewFragment = (pathname !== null && pathname !== void 0 ? pathname : window.location.pathname).split("/")[1];
    return [
        "beta",
        "preview"
    ].includes(previewFragment);
}
function getRouterBasename(pathname) {
    var previewFragment = (pathname !== null && pathname !== void 0 ? pathname : window.location.pathname).split("/")[1];
    return isBeta(pathname) ? "/".concat(previewFragment) : "/";
}
function ITLess() {
    return getEnv() === "frh" || getEnv() === "frhStage" || getEnv() === "ephem" || getEnv() === "int" || getEnv() === "scr";
}
function ITLessCognito() {
    return getEnv() === "frh" || getEnv() === "frhStage";
}
function ITLessKeycloak() {
    return getEnv() === "ephem" || getEnv() === "int" || getEnv() === "scr";
}
function updateDocumentTitle(title) {
    var noSuffix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var titleSuffix = "| ".concat((0,_hooks_useBundle__WEBPACK_IMPORTED_MODULE_3__["default"])().bundleTitle);
    if (typeof title === "undefined") {
        return;
    }
    if (typeof title === "string") {
        document.title = title.includes(titleSuffix) || noSuffix ? title : "".concat(title, " ").concat(titleSuffix);
    } else {
        console.warn("Title is not a string. Got ".concat(typeof title === "undefined" ? "undefined" : _type_of(title), " instead."));
    }
}
var activateChild = function(hrefMatch, childRoutes) {
    var hasActiveChild = false;
    var routes = childRoutes.map(function(item) {
        // If expandable traverse children again
        if (item.expandable) {
            var nestedResult = activateChild(hrefMatch, item.routes || []);
            // mark active if nested child is active
            if (nestedResult.active) {
                hasActiveChild = true;
            }
            return _object_spread_props(_object_spread({}, item), {
                active: nestedResult.active,
                routes: nestedResult.routes
            });
        }
        var active = item.href === hrefMatch;
        if (active) {
            hasActiveChild = true;
        }
        return _object_spread_props(_object_spread({}, item), {
            active: active
        });
    });
    return {
        active: hasActiveChild,
        routes: routes
    };
};
function mutateSchema(hrefMatch, navItems) {
    return navItems.map(function(item) {
        var href = item.href, routes = item.routes, _$navItems = item.navItems;
        if (!href && _$navItems) {
            return _object_spread_props(_object_spread({}, item), {
                navItems: mutateSchema(hrefMatch, _$navItems)
            });
        }
        if (!href && routes) {
            return _object_spread({}, item, activateChild(hrefMatch, routes));
        }
        if (href) {
            return _object_spread_props(_object_spread({}, item), {
                active: item.href === hrefMatch
            });
        }
        return item;
    });
}
var highlightItems = function(pathname, navItems, sortedLinks) {
    var _matchedLink;
    var cleanPathname = pathname.replace(/\/$/, "");
    var segmentsCount = cleanPathname.split("/").length + 1;
    var matchedLink = sortedLinks.find(function(href) {
        var segmentedHref = href.replace(/\/$/, "").split("/").slice(0, segmentsCount).join("/");
        return cleanPathname.includes(segmentedHref);
    });
    return mutateSchema(((_matchedLink = matchedLink) === null || _matchedLink === void 0 ? void 0 : _matchedLink.replace(/\/$/, "")) || "", navItems);
};
var levelArray = function(navItems) {
    return lodash_flatMap__WEBPACK_IMPORTED_MODULE_1___default()(navItems, function(param) {
        var href = param.href, routes = param.routes, _$navItems = param.navItems;
        if (!href && _$navItems) {
            return levelArray(_$navItems);
        }
        if (!href && routes) {
            return levelArray(routes);
        }
        if (href) {
            return [
                href
            ];
        }
        return [];
    });
};
// eslint-disable-next-line @typescript-eslint/no-empty-function
function noop() {}
var trustarcScriptSetup = function() {
    var trustarcScript = document.createElement("script");
    trustarcScript.id = "trustarc";
    if (location.host === "console.redhat.com") {
        trustarcScript.src = "//static.redhat.com/libs/redhat/marketing/latest/trustarc/trustarc.js";
    } else {
        trustarcScript.src = "//static.redhat.com/libs/redhat/marketing/latest/trustarc/trustarc.stage.js";
    }
    document.body.appendChild(trustarcScript);
};
var CHROME_SERVICE_BASE = "/api/chrome-service/v1";
var chromeServiceStaticPathname = {
    beta: {
        stage: "/static/beta/stage",
        prod: "/static/beta/prod",
        itless: "/static/beta/itless"
    },
    stable: {
        stage: "/static/stable/stage",
        prod: "/static/stable/prod",
        itless: "/static/stable/itless"
    }
};
function getChromeStaticPathname(type) {
    var stableEnv = isBeta() ? "beta" : "stable";
    var prodEnv = isProd() ? "prod" : ITLess() ? "itless" : "stage";
    return "".concat(CHROME_SERVICE_BASE).concat(chromeServiceStaticPathname[stableEnv][prodEnv], "/").concat(type);
}
function getChromeDynamicPaths() {
    return "".concat(isBeta() ? "/beta" : "", "/apps/chrome/operator-generated/fed-modules.json");
}
var fedModulesheaders = {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0"
};
// FIXME: Remove once qaprodauth is dealt with
// can't use /beta because it will ge redirected by Akamai to /preview and we don't have any assets there\\
// Always use stable
var loadCSCFedModules = function() {
    return axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat(window.location.origin, "/config/chrome/fed-modules.json?ts=").concat(Date.now()), {
        headers: fedModulesheaders
    });
};
var loadFedModules = function() {
    var _ref = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            return [
                2,
                Promise.all([
                    axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat(getChromeStaticPathname("modules"), "/fed-modules.json"), {
                        headers: fedModulesheaders
                    }).catch(loadCSCFedModules),
                    axios__WEBPACK_IMPORTED_MODULE_2___default().get(getChromeDynamicPaths()).catch(function() {
                        return {
                            data: {}
                        };
                    })
                ]).then(function(param) {
                    var _param = _sliced_to_array(param, 2), staticConfig = _param[0], feoConfig = _param[1];
                    var _feoConfig_data, _feoConfig;
                    if ((_feoConfig = feoConfig) === null || _feoConfig === void 0 ? void 0 : (_feoConfig_data = _feoConfig.data) === null || _feoConfig_data === void 0 ? void 0 : _feoConfig_data.chrome) {
                        var _feoConfig_data1, _feoConfig1;
                        staticConfig.data.chrome = (_feoConfig1 = feoConfig) === null || _feoConfig1 === void 0 ? void 0 : (_feoConfig_data1 = _feoConfig1.data) === null || _feoConfig_data1 === void 0 ? void 0 : _feoConfig_data1.chrome;
                    }
                    return staticConfig;
                })
            ];
        });
    });
    return function loadFedModules() {
        return _ref.apply(this, arguments);
    };
}();
var generateRoutesList = function(modules) {
    return Object.entries(modules).reduce(function(acc, param) {
        var _param = _sliced_to_array(param, 2), scope = _param[0], _param_ = _param[1], dynamic = _param_.dynamic, manifestLocation = _param_.manifestLocation, _param__modules = _param_.modules, _$modules = _param__modules === void 0 ? [] : _param__modules;
        return _to_consumable_array(acc).concat(_to_consumable_array(_$modules.map(function(param) {
            var module = param.module, routes = param.routes;
            return /**Clean up this map function */ routes.map(function(route) {
                return {
                    scope: scope,
                    module: module,
                    path: typeof route === "string" ? route : route.pathname,
                    manifestLocation: manifestLocation,
                    dynamic: typeof dynamic === "boolean" ? dynamic : typeof route === "string" ? true : route.dynamic,
                    exact: typeof route === "string" ? false : route.exact,
                    props: typeof route === "object" ? route.props : undefined
                };
            });
        }).flat()));
    }, []).sort(function(a, b) {
        return a.path.length < b.path.length ? 1 : -1;
    });
};
var isGlobalFilterAllowed = function() {
    if ((0,_hooks_useBundle__WEBPACK_IMPORTED_MODULE_3__.getUrl)("bundle") === "insights") {
        return true;
    }
    return (0,_hooks_useBundle__WEBPACK_IMPORTED_MODULE_3__.getUrl)("bundle") === "ansible" && [
        "inventory",
        "drift",
        "advisor"
    ].includes((0,_hooks_useBundle__WEBPACK_IMPORTED_MODULE_3__.getUrl)("app"));
};
function isExpandableNav(item) {
    return !!item.expandable;
}
function isActiveLeaf(item) {
    var _item, _item1;
    return typeof ((_item = item) === null || _item === void 0 ? void 0 : _item.href) === "string" && ((_item1 = item) === null || _item1 === void 0 ? void 0 : _item1.active) === true;
}
function findNavLeafPath(navItems) {
    var matcher = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : isActiveLeaf;
    var leaf;
    // store the parent nodes
    var leafPath = [];
    var index = 0;
    while(leaf === undefined && index < navItems.length){
        var _item;
        var item = navItems[index];
        index += 1;
        if (item && isExpandableNav(item)) {
            var _ref = findNavLeafPath(item.routes, matcher) || {}, activeItem = _ref.activeItem, _$navItems = _ref.navItems;
            if (activeItem) {
                var // append parent nodes of an active item
                _leafPath;
                leaf = activeItem;
                (_leafPath = leafPath).push.apply(_leafPath, [
                    item
                ].concat(_to_consumable_array(_$navItems)));
            }
        } else if (matcher(item) && ((_item = item) === null || _item === void 0 ? void 0 : _item.href)) {
            leaf = item;
        }
    }
    return {
        activeItem: leaf,
        navItems: leafPath
    };
}


/***/ })

}]);