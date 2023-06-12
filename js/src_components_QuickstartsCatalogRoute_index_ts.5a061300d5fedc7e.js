"use strict";
(self["webpackChunkinsights_chrome"] = self["webpackChunkinsights_chrome"] || []).push([["src_components_QuickstartsCatalogRoute_index_ts"],{

/***/ "./src/components/QuickStart/QuickStartCatalog.tsx":
/*!*********************************************************!*\
  !*** ./src/components/QuickStart/QuickStartCatalog.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?dc4e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/quickstarts */ "webpack/sharing/consume/default/@patternfly/quickstarts/@patternfly/quickstarts");
/* harmony import */ var _patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_1__);
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectDestructuringEmpty(o) {
    if (o === null || o === void 0) throw new TypeError("Cannot destructure " + o);
    return o;
}


var QuickStartCatalog = function(_param) /*#__PURE__*/ {
    var props = _extends({}, _objectDestructuringEmpty(_param));
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_1__.QuickStartCatalogPage, _extends({}, props));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuickStartCatalog);


/***/ }),

/***/ "./src/components/QuickstartsCatalogRoute/QuickstartsCatalogRoute.tsx":
/*!****************************************************************************!*\
  !*** ./src/components/QuickstartsCatalogRoute/QuickstartsCatalogRoute.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?dc4e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _QuickStart_QuickStartCatalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../QuickStart/QuickStartCatalog */ "./src/components/QuickStart/QuickStartCatalog.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "webpack/sharing/consume/default/react-intl/react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _locales_Messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../locales/Messages */ "./src/locales/Messages.ts");
/* harmony import */ var _hooks_useBundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useBundle */ "./src/hooks/useBundle.ts");






var QuickstartCatalogRoute = function() {
    var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
    var bundle = (0,_hooks_useBundle__WEBPACK_IMPORTED_MODULE_5__.getUrl)("bundle");
    var disabled = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(param) {
        var _param_chrome = param.chrome, disabled = _param_chrome.quickstarts.disabled;
        return disabled;
    });
    if (disabled) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, intl.formatMessage(_locales_Messages__WEBPACK_IMPORTED_MODULE_4__["default"].unableToLoadQuickstartsContent)));
    }
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, intl.formatMessage(_locales_Messages__WEBPACK_IMPORTED_MODULE_4__["default"].thereWillBeACatalgPage, {
        bundle: bundle
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_QuickStart_QuickStartCatalog__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuickstartCatalogRoute);


/***/ }),

/***/ "./src/components/QuickstartsCatalogRoute/index.ts":
/*!*********************************************************!*\
  !*** ./src/components/QuickstartsCatalogRoute/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _QuickstartsCatalogRoute__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _QuickstartsCatalogRoute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuickstartsCatalogRoute */ "./src/components/QuickstartsCatalogRoute/QuickstartsCatalogRoute.tsx");



/***/ })

}]);