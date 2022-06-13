"use strict";
(self["webpackChunkinsights_chrome"] = self["webpackChunkinsights_chrome"] || []).push([["src_js_App_Routes_QuickstartsCatalogRoute_js"],{

/***/ "./src/js/App/QuickStart/QuickStartCatalog.js":
/*!****************************************************!*\
  !*** ./src/js/App/QuickStart/QuickStartCatalog.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/quickstarts */ "webpack/sharing/consume/default/@patternfly/quickstarts/@patternfly/quickstarts");
/* harmony import */ var _patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_2__);




var QuickStartCatalog = function QuickStartCatalog(_ref) {
  var props = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, _ref);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_2__.QuickStartCatalogPage, props);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuickStartCatalog);

/***/ }),

/***/ "./src/js/App/Routes/QuickstartsCatalogRoute.js":
/*!******************************************************!*\
  !*** ./src/js/App/Routes/QuickstartsCatalogRoute.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/js/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _QuickStart_QuickStartCatalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../QuickStart/QuickStartCatalog */ "./src/js/App/QuickStart/QuickStartCatalog.js");





var QuickstartCatalogRoute = function QuickstartCatalogRoute() {
  var bundle = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getUrl)('bundle');
  var disabled = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (_ref) {
    var disabled = _ref.chrome.quickstarts.disabled;
    return disabled;
  });

  if (disabled) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Unable to load the quickstarts content."));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "There will be a catalog page for ", bundle, " bundle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_QuickStart_QuickStartCatalog__WEBPACK_IMPORTED_MODULE_3__.default, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuickstartCatalogRoute);

/***/ })

}]);