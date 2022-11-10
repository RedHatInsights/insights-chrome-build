"use strict";
(self["webpackChunkinsights_chrome"] = self["webpackChunkinsights_chrome"] || []).push([["src_components_LandingNav_index_ts"],{

/***/ "./src/components/LandingNav/LandingNav.scss":
/*!***************************************************!*\
  !*** ./src/components/LandingNav/LandingNav.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/LandingNav/LandingNav.tsx":
/*!**************************************************!*\
  !*** ./src/components/LandingNav/LandingNav.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?88de");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/common */ "./src/utils/common.ts");
/* harmony import */ var _LandingNav_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LandingNav.scss */ "./src/components/LandingNav/LandingNav.scss");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions */ "./src/redux/actions.ts");
/* harmony import */ var _Navigation_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Navigation/Loader */ "./src/components/Navigation/Loader.tsx");
/* harmony import */ var _Navigation_ChromeNavItemFactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Navigation/ChromeNavItemFactory */ "./src/components/Navigation/ChromeNavItemFactory.tsx");
/* harmony import */ var _Navigation_navContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Navigation/navContext */ "./src/components/Navigation/navContext.ts");
/* harmony import */ var _Navigation_componentMapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Navigation/componentMapper */ "./src/components/Navigation/componentMapper.ts");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _locales_Messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../locales/Messages */ "./src/locales/Messages.ts");













const LandingNav = () => {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_12__["default"])();
    const [elementReady, setElementReady] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const showNav = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(({ chrome: { user } }) => !!user);
    const schema = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(({ chrome: { navigation: { landingPage }, }, }) => landingPage);
    const modules = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state) => state.chrome.modules);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (showNav) {
            setElementReady(true);
        }
    }, [showNav]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        axios__WEBPACK_IMPORTED_MODULE_5___default().get(`${window.location.origin}${(0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.isBeta)() ? '/beta' : ''}/config/chrome/landing-navigation.json`).then((response) => {
            dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_6__.loadNavigationLandingPage)(response.data));
        });
    }, []);
    /**
     * render navigation only if the user is logged in
     */
    if (!showNav || !elementReady || !schema) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navigation_Loader__WEBPACK_IMPORTED_MODULE_7__["default"], null);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Nav, { className: "chr-c-landing-nav", ouiaId: "SideNavigation" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.NavList, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "chr-c-app-title" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, intl.formatMessage(_locales_Messages__WEBPACK_IMPORTED_MODULE_11__["default"].home))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageContextConsumer, null, ({ isNavOpen }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navigation_navContext__WEBPACK_IMPORTED_MODULE_9__["default"].Provider, { value: {
                    componentMapper: _Navigation_componentMapper__WEBPACK_IMPORTED_MODULE_10__["default"],
                    inPageLayout: true,
                    isNavOpen,
                } }, schema
                .filter(({ appId }) => (appId && (0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.isFedRamp)() ? modules?.[appId]?.isFedramp === true : true))
                .map((item, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navigation_ChromeNavItemFactory__WEBPACK_IMPORTED_MODULE_8__["default"], { key: index, ...item })))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingNav);


/***/ }),

/***/ "./src/components/LandingNav/index.ts":
/*!********************************************!*\
  !*** ./src/components/LandingNav/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _LandingNav__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _LandingNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LandingNav */ "./src/components/LandingNav/LandingNav.tsx");



/***/ })

}]);