"use strict";
(self["webpackChunkinsights_chrome"] = self["webpackChunkinsights_chrome"] || []).push([["remediations-render-wrapper"],{

/***/ "./node_modules/@redhat-cloud-services/frontend-components/esm/AsyncComponent/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components/esm/AsyncComponent/index.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scalprum_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @scalprum/react-core */ "webpack/sharing/consume/default/@scalprum/react-core/@scalprum/react-core");
/* harmony import */ var _scalprum_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scalprum_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
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
    var appName = _a.appName, scope = _a.scope, module = _a.module, _b = _a.fallback, fallback = _b === void 0 ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Bullseye, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Spinner, { size: "xl" }))) : _b, innerRef = _a.innerRef, className = _a.className, _c = _a.component, Cmp = _c === void 0 ? 'section' : _c, props = __rest(_a, ["appName", "scope", "module", "fallback", "innerRef", "className", "component"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Cmp, { className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, appName) },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_scalprum_react_core__WEBPACK_IMPORTED_MODULE_1__.ScalprumComponent, __assign({ className: className, appName: appName, module: module, scope: scope !== null && scope !== void 0 ? scope : appName, ErrorComponent: fallback, ref: innerRef, fallback: fallback }, props))));
};
var AsynComponent = react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BaseAsyncComponent, __assign({ innerRef: ref }, props)); });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AsynComponent);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/js/remediations/Wrapper.js":
/*!****************************************!*\
  !*** ./src/js/remediations/Wrapper.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redhat_cloud_services_frontend_components_AsyncComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/AsyncComponent */ "./node_modules/@redhat-cloud-services/frontend-components/esm/AsyncComponent/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_Deffered__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/Deffered */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/esm/Deffered/Deffered.js");




var _excluded = ["promise", "onClose"];






var RenderWrapper = function RenderWrapper(_ref) {
  var promise = _ref.promise,
      onClose = _ref.onClose,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__.default)(_ref, _excluded);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState, 2),
      isModalOpen = _useState2[0],
      setIsModalOpen = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({}),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState3, 2),
      _useState4$ = _useState4[0],
      data = _useState4$.data,
      basePath = _useState4$.basePath,
      setConfig = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
      var config;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return promise;

            case 2:
              config = _context.sent;
              setConfig(config);
              setIsModalOpen(true);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, isModalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_redhat_cloud_services_frontend_components_AsyncComponent__WEBPACK_IMPORTED_MODULE_7__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    setOpen: function setOpen(isOpen) {
      setIsModalOpen(isOpen);
      var deffered = new _redhat_cloud_services_frontend_components_utilities_Deffered__WEBPACK_IMPORTED_MODULE_8__.default();
      onClose(deffered);

      (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2() {
        var config;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return deffered.promise;

              case 2:
                config = _context2.sent;
                setConfig(config);
                setIsModalOpen(true);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    appName: "remediations",
    module: "./RemediationWizard",
    data: data,
    basePath: basePath
  }, props)));
};

RenderWrapper.propTypes = {
  promise: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
    then: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)
  }),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderWrapper);

/***/ })

}]);