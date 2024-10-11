"use strict";
(self["webpackChunkinsights_chrome"] = self["webpackChunkinsights_chrome"] || []).push([["src_components_FavoriteServices_LandingNavFavorites_tsx"],{

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
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Icon */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Icon/@patternfly/react-core/dist/dynamic/components/Icon?6d41");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Pagination */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Pagination/@patternfly/react-core/dist/dynamic/components/Pagination?30cf");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Pagination__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Pagination__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Text */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Text/@patternfly/react-core/dist/dynamic/components/Text");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_star_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/star-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/star-icon/@patternfly/react-icons/dist/dynamic/icons/star-icon");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_star_icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_dynamic_icons_star_icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?1a75");
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
        return _hooks_useBundle__WEBPACK_IMPORTED_MODULE_10__.bundleMapping[href.split('/')[1]];
    };
    var buildFavorites = function() {
        return favoritedServices.slice((page - 1) * perPage, page * perPage).map(function(favorite, index) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_patternfly_react_core_dist_dynamic_layouts_Gallery__WEBPACK_IMPORTED_MODULE_2__.GalleryItem, {
                key: index
            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Link, {
                to: favorite.pathname,
                className: "chr-c-favorite-service__tile"
            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_0__.Card, {
                className: "chr-c-card-landing-fav",
                isClickable: true
            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
                selectableActions: {
                    selectableActionId: 'id',
                    selectableActionAriaLabelledby: 'clickable-card'
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
            default: 'alignRight'
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


/***/ })

}]);