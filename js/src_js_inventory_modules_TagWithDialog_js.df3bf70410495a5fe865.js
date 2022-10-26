"use strict";
(self["webpackChunkinsights_chrome"] = self["webpackChunkinsights_chrome"] || []).push([["src_js_inventory_modules_TagWithDialog_js"],{

/***/ "./node_modules/@redhat-cloud-services/frontend-components/esm/AsyncComponent/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components/esm/AsyncComponent/index.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scalprum_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scalprum/react-core */ "webpack/sharing/consume/default/@scalprum/react-core/@scalprum/react-core");
/* harmony import */ var _scalprum_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scalprum_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
var __assign = (undefined && undefined.__assign) || function () {
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
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};





var BaseAsyncComponent = function (_a) {
    var appName = _a.appName, scope = _a.scope, module = _a.module, _b = _a.fallback, fallback = _b === void 0 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Bullseye, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Spinner, { size: "xl" }) })) : _b, innerRef = _a.innerRef, className = _a.className, _c = _a.component, Cmp = _c === void 0 ? 'section' : _c, props = __rest(_a, ["appName", "scope", "module", "fallback", "innerRef", "className", "component"]);
    var SCProps = __assign({ className: className, appName: appName, module: module, scope: scope !== null && scope !== void 0 ? scope : appName, ErrorComponent: fallback, ref: innerRef, fallback: fallback }, props);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmp, __assign({ className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, appName) }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_scalprum_react_core__WEBPACK_IMPORTED_MODULE_2__.ScalprumComponent, __assign({}, SCProps)) })));
};
var AsynComponent = react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function (props, ref) { return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BaseAsyncComponent, __assign({ innerRef: ref }, props)); });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AsynComponent);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/js/inventory/modules/AsyncInventory.js":
/*!****************************************************!*\
  !*** ./src/js/inventory/modules/AsyncInventory.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_loading_fallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/loading-fallback */ "./src/js/utils/loading-fallback.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_AsyncComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/AsyncComponent */ "./node_modules/@redhat-cloud-services/frontend-components/esm/AsyncComponent/index.js");


var _excluded = ["componentName", "innerRef"];



 // TODO: remove me once every app uses new loader

var AsyncInventory = function AsyncInventory(_ref) {
  var componentName = _ref.componentName,
      innerRef = _ref.innerRef,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_AsyncComponent__WEBPACK_IMPORTED_MODULE_4__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    appName: "inventory",
    module: "./".concat(componentName),
    fallback: _utils_loading_fallback__WEBPACK_IMPORTED_MODULE_3__.default,
    ref: innerRef
  }, props));
};

AsyncInventory.propTypes = {
  store: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  onLoad: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  componentName: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  history: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({
    current: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().any)
  })
};
AsyncInventory.defaultProps = {
  onLoad: function onLoad() {
    return undefined;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AsyncInventory);

/***/ }),

/***/ "./src/js/inventory/modules/TagWithDialog.js":
/*!***************************************************!*\
  !*** ./src/js/inventory/modules/TagWithDialog.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AsyncInventory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AsyncInventory */ "./src/js/inventory/modules/AsyncInventory.js");




var BaseTagWithDialog = function BaseTagWithDialog(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_AsyncInventory__WEBPACK_IMPORTED_MODULE_2__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    componentName: "TagWithDialog"
  }, props));
};

var TagWithDialog = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function (props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(BaseTagWithDialog, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    innerRef: ref
  }, props));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagWithDialog);

/***/ }),

/***/ "./src/js/utils/loading-fallback.js":
/*!******************************************!*\
  !*** ./src/js/utils/loading-fallback.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);


/**
 * This fallback has to be a react node not a component.
 * Node will be persistent when switching parent component and won't reset its instance and animation
 */

var LoadingFallback = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Bullseye, {
  className: "pf-u-p-xl"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
  "data-ouia-component-id": "remote-module-loader",
  size: "xl"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingFallback);

/***/ })

}]);