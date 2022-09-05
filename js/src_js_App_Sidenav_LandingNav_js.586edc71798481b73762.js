"use strict";
(self["webpackChunkinsights_chrome"] = self["webpackChunkinsights_chrome"] || []).push([["src_js_App_Sidenav_LandingNav_js"],{

/***/ "./src/js/App/Sidenav/LandingNav.js":
/*!******************************************!*\
  !*** ./src/js/App/Sidenav/LandingNav.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/js/utils.ts");
/* harmony import */ var _LandingNav_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LandingNav.scss */ "./src/js/App/Sidenav/LandingNav.scss");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions */ "./src/js/redux/actions.ts");
/* harmony import */ var _Navigation_Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Navigation/Loader */ "./src/js/App/Sidenav/Navigation/Loader.tsx");
/* harmony import */ var _Navigation_ChromeNavItemFactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Navigation/ChromeNavItemFactory */ "./src/js/App/Sidenav/Navigation/ChromeNavItemFactory.js");
/* harmony import */ var _Navigation_navContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Navigation/navContext */ "./src/js/App/Sidenav/Navigation/navContext.ts");
/* harmony import */ var _Navigation_componentMapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Navigation/componentMapper */ "./src/js/App/Sidenav/Navigation/componentMapper.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Messages */ "./src/js/Messages.js");
















var LandingNav = function LandingNav() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_14__.default)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
      elementReady = _useState2[0],
      setElementReady = _useState2[1];

  var showNav = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (_ref) {
    var user = _ref.chrome.user;
    return !!user;
  });
  var schema = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (_ref2) {
    var landingPage = _ref2.chrome.navigation.landingPage;
    return landingPage;
  });
  var modules = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.chrome.modules;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (showNav) {
      setElementReady(true);
    }
  }, [showNav]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_7___default().get("".concat(window.location.origin).concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.isBeta)() ? '/beta' : '', "/config/chrome/landing-navigation.json")).then(function (response) {
      dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_8__.loadNavigationLandingPage)(response.data));
    });
  }, []);
  /**
   * render navigation only if the user is logged in
   */

  if (!showNav || !elementReady || !schema) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Navigation_Loader__WEBPACK_IMPORTED_MODULE_9__.default, null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Nav, {
    className: "chr-c-landing-nav",
    ouiaId: "SideNavigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.NavList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "chr-c-app-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("b", null, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_13__.default.home))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.PageContextConsumer, null, function (_ref3) {
    var isNavOpen = _ref3.isNavOpen;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Navigation_navContext__WEBPACK_IMPORTED_MODULE_11__.default.Provider, {
      value: {
        componentMapper: _Navigation_componentMapper__WEBPACK_IMPORTED_MODULE_12__.default,
        inPageLayout: true,
        isNavOpen: isNavOpen
      }
    }, schema.filter(function (_ref4) {
      var _modules$appId;

      var appId = _ref4.appId;
      return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.isFedRamp)() ? ((_modules$appId = modules[appId]) === null || _modules$appId === void 0 ? void 0 : _modules$appId.isFedramp) === true : true;
    }).map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Navigation_ChromeNavItemFactory__WEBPACK_IMPORTED_MODULE_10__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        key: index
      }, item));
    }));
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingNav);

/***/ }),

/***/ "./src/js/App/Sidenav/LandingNav.scss":
/*!********************************************!*\
  !*** ./src/js/App/Sidenav/LandingNav.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);