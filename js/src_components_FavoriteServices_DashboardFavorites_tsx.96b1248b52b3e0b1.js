"use strict";
(self["webpackChunkinsights_chrome"] = self["webpackChunkinsights_chrome"] || []).push([["src_components_FavoriteServices_DashboardFavorites_tsx"],{

/***/ "./src/components/FavoriteServices/DashboardFavorites.scss":
/*!*****************************************************************!*\
  !*** ./src/components/FavoriteServices/DashboardFavorites.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/FavoriteServices/DashboardFavorites.tsx":
/*!****************************************************************!*\
  !*** ./src/components/FavoriteServices/DashboardFavorites.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Gallery */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Gallery/@patternfly/react-core/dist/dynamic/layouts/Gallery");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Gallery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_layouts_Gallery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Split */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Split/@patternfly/react-core/dist/dynamic/layouts/Split?37ed");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Text */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Text/@patternfly/react-core/dist/dynamic/components/Text");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?dc4e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useFavoritedServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useFavoritedServices */ "./src/hooks/useFavoritedServices.ts");
/* harmony import */ var _FavoriteServices_EmptyState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FavoriteServices/EmptyState */ "./src/components/FavoriteServices/EmptyState.tsx");
/* harmony import */ var _hooks_useBundle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useBundle */ "./src/hooks/useBundle.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ServiceIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ServiceIcon */ "./src/components/FavoriteServices/ServiceIcon.tsx");
/* harmony import */ var _DashboardFavorites_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DashboardFavorites.scss */ "./src/components/FavoriteServices/DashboardFavorites.scss");










var DashboardFavorites = function() {
    var favoritedServices = (0,_hooks_useFavoritedServices__WEBPACK_IMPORTED_MODULE_4__["default"])();
    var getBundle = function(href) {
        return _hooks_useBundle__WEBPACK_IMPORTED_MODULE_6__.bundleMapping[href.split("/")[1]];
    };
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, favoritedServices.length === 0 ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_FavoriteServices_EmptyState__WEBPACK_IMPORTED_MODULE_5__["default"], null) : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_dynamic_layouts_Gallery__WEBPACK_IMPORTED_MODULE_0__.Gallery, {
        hasGutter: true,
        className: "widget-favorites pf-v5-u-m-md"
    }, favoritedServices.map(function(favorite, index) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_dynamic_layouts_Gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryItem, {
            key: index
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_1__.Split, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_1__.SplitItem, {
            className: "pf-v5-u-mr-sm"
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_ServiceIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
            icon: favorite.icon
        })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_1__.SplitItem, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_2__.TextContent, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
            to: favorite.pathname
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_2__.Text, {
            className: "pf-v5-u-mb-0"
        }, favorite.name)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_2__.Text, {
            component: "small"
        }, getBundle(favorite.pathname))))));
    }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardFavorites);


/***/ })

}]);