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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/quickstarts */ "webpack/sharing/consume/default/@patternfly/quickstarts/@patternfly/quickstarts");
/* harmony import */ var _patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_1__);


const QuickStartCatalog = ({ ...props }) => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_1__.QuickStartCatalogPage, { ...props });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/common */ "./src/utils/common.ts");
/* harmony import */ var _QuickStart_QuickStartCatalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../QuickStart/QuickStartCatalog */ "./src/components/QuickStart/QuickStartCatalog.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _locales_Messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../locales/Messages */ "./src/locales/Messages.ts");






const QuickstartCatalogRoute = () => {
    const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.default)();
    const bundle = (0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.getUrl)('bundle');
    const disabled = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(({ chrome: { quickstarts: { disabled }, }, }) => disabled);
    if (disabled) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, intl.formatMessage(_locales_Messages__WEBPACK_IMPORTED_MODULE_4__.default.unableToLoadQuickstartsContent))));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, intl.formatMessage(_locales_Messages__WEBPACK_IMPORTED_MODULE_4__.default.thereWillBeACatalgPage, { bundle })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_QuickStart_QuickStartCatalog__WEBPACK_IMPORTED_MODULE_3__.default, null)));
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
/* harmony export */   "default": () => (/* reexport safe */ _QuickstartsCatalogRoute__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _QuickstartsCatalogRoute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuickstartsCatalogRoute */ "./src/components/QuickstartsCatalogRoute/QuickstartsCatalogRoute.tsx");



/***/ })

}]);