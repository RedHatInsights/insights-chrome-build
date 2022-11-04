"use strict";
(self["webpackChunkinsights_chrome"] = self["webpackChunkinsights_chrome"] || []).push([["src_components_Navigation_index_tsx"],{

/***/ "./node_modules/@patternfly/react-icons/dist/js/icons/info-circle-icon.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@patternfly/react-icons/dist/js/icons/info-circle-icon.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.InfoCircleIconConfig = {
  name: 'InfoCircleIcon',
  height: 512,
  width: 512,
  svgPath: 'M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z',
  yOffset: 0,
  xOffset: 0,
};
exports.InfoCircleIcon = __webpack_require__(/*! ../createIcon */ "./node_modules/@patternfly/react-icons/dist/js/createIcon.js").createIcon(exports.InfoCircleIconConfig);
exports.default = exports.InfoCircleIcon;

/***/ }),

/***/ "./src/components/BetaInfoModal/BetaInfoModal.tsx":
/*!********************************************************!*\
  !*** ./src/components/BetaInfoModal/BetaInfoModal.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_info_circle_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/info-circle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/info-circle-icon.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _locales_Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../locales/Messages */ "./src/locales/Messages.ts");





const BetaInfoModal = ({ isOpen, onClick, onCancel, menuItemClicked }) => {
    const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.default)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Modal, { "aria-label": "Beta info modal", isOpen: isOpen, onClose: onCancel, variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ModalVariant.medium },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Bullseye, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "chr-c-navigation__beta-info-modal" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons_dist_js_icons_info_circle_icon__WEBPACK_IMPORTED_MODULE_4__.InfoCircleIcon, { size: "xl", className: "info-icon" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Title, { headingLevel: "h4", size: "xl" }, `${menuItemClicked} is only available in our Beta Environment`),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, intl.formatMessage(_locales_Messages__WEBPACK_IMPORTED_MODULE_2__.default.tryThisFeatureInBeta)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, intl.formatMessage(_locales_Messages__WEBPACK_IMPORTED_MODULE_2__.default.afterBetaUse)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "pf-u-pt-md" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { key: "confirm", variant: "primary", onClick: onClick }, intl.formatMessage(_locales_Messages__WEBPACK_IMPORTED_MODULE_2__.default.useFeatureInBeta))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "https://access.redhat.com/support/policy/updates/cloud-redhat/lifecycle" }, intl.formatMessage(_locales_Messages__WEBPACK_IMPORTED_MODULE_2__.default.learnMoreABoutBeta)))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BetaInfoModal);


/***/ }),

/***/ "./src/components/BetaInfoModal/index.ts":
/*!***********************************************!*\
  !*** ./src/components/BetaInfoModal/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _BetaInfoModal__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _BetaInfoModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BetaInfoModal */ "./src/components/BetaInfoModal/BetaInfoModal.tsx");



/***/ }),

/***/ "./src/components/Navigation/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/Navigation/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navContext */ "./src/components/Navigation/navContext.ts");
/* harmony import */ var _componentMapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentMapper */ "./src/components/Navigation/componentMapper.ts");
/* harmony import */ var _ChromeNavItemFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChromeNavItemFactory */ "./src/components/Navigation/ChromeNavItemFactory.tsx");
/* harmony import */ var _components_BetaInfoModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/BetaInfoModal */ "./src/components/BetaInfoModal/index.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/common */ "./src/utils/common.ts");
/* harmony import */ var _utils_useNavigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/useNavigation */ "./src/utils/useNavigation.ts");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Loader */ "./src/components/Navigation/Loader.tsx");
/* harmony import */ var _ChromeNavItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ChromeNavItem */ "./src/components/Navigation/ChromeNavItem.tsx");










const Navigation = () => {
    const { loaded, schema } = (0,_utils_useNavigation__WEBPACK_IMPORTED_MODULE_7__.default)();
    const [showBetaModal, setShowBetaModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const deferedOnClickArgs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([
        undefined,
        undefined,
        undefined,
    ]);
    const showBundleCatalog = localStorage.getItem('chrome:experimental:quickstarts') === 'true';
    const onLinkClick = (origEvent, href) => {
        if (!showBetaModal && !(0,_utils_common__WEBPACK_IMPORTED_MODULE_6__.isBeta)()) {
            origEvent.preventDefault();
            deferedOnClickArgs.current = [origEvent, href, origEvent?.currentTarget?.text];
            setShowBetaModal(true);
            return false;
        }
        return true;
    };
    if (!loaded) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Loader__WEBPACK_IMPORTED_MODULE_8__.default, null);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "chr-c-app-title" }, schema?.title),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Nav, { "aria-label": "Insights Global Navigation", "data-ouia-safe": "true", ouiaId: "SideNavigation" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.NavList, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageContextConsumer, null, ({ isNavOpen }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_navContext__WEBPACK_IMPORTED_MODULE_2__.default.Provider, { value: {
                        componentMapper: _componentMapper__WEBPACK_IMPORTED_MODULE_3__.default,
                        onLinkClick,
                        inPageLayout: true,
                        isNavOpen,
                    } },
                    schema.navItems.map((item, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ChromeNavItemFactory__WEBPACK_IMPORTED_MODULE_4__.default, { key: index, ...item }))),
                    showBundleCatalog ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ChromeNavItem__WEBPACK_IMPORTED_MODULE_9__.default, { title: "Quickstarts", href: `/${(0,_utils_common__WEBPACK_IMPORTED_MODULE_6__.getUrl)('bundle')}/quickstarts`, appId: "dynamic" }) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null)))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_BetaInfoModal__WEBPACK_IMPORTED_MODULE_5__.default, { isOpen: showBetaModal, onClick: (event) => {
                if (!(0,_utils_common__WEBPACK_IMPORTED_MODULE_6__.isBeta)()) {
                    const [origEvent, href] = deferedOnClickArgs.current;
                    const isMetaKey = event.ctrlKey || event.metaKey || origEvent?.ctrlKey || origEvent?.metaKey;
                    const url = `${document.baseURI}beta${href}`;
                    isMetaKey ? window.open(url) : (window.location.href = url);
                }
            }, onCancel: () => setShowBetaModal(false), menuItemClicked: deferedOnClickArgs.current[2] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);


/***/ }),

/***/ "./src/utils/useNavigation.ts":
/*!************************************!*\
  !*** ./src/utils/useNavigation.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common */ "./src/utils/common.ts");
/* harmony import */ var _isNavItemVisible__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isNavItemVisible */ "./src/utils/isNavItemVisible.ts");
/* harmony import */ var _patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/quickstarts */ "webpack/sharing/consume/default/@patternfly/quickstarts/@patternfly/quickstarts");
/* harmony import */ var _patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @unleash/proxy-client-react */ "webpack/sharing/consume/default/@unleash/proxy-client-react/@unleash/proxy-client-react");
/* harmony import */ var _unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_8__);









function cleanNavItemsHref(navItem) {
    const result = { ...navItem };
    if (typeof result.groupId !== 'undefined') {
        result.navItems = result.navItems?.map(cleanNavItemsHref);
    }
    if (result.expandable === true) {
        result.routes = result.routes?.map(cleanNavItemsHref);
    }
    if (typeof result.href === 'string') {
        /**
         * Remove traling "/" from  the link
         */
        result.href = result.href.replace(/\/$/, '');
    }
    return result;
}
const shouldPreseverQuickstartSearch = (prevSearch, activeQuickStartID) => {
    const prevParams = new URLSearchParams(prevSearch);
    return activeQuickStartID !== prevParams.get('quickstart');
};
const appendQSSearch = (currentSearch, activeQuickStartID) => {
    const search = new URLSearchParams(currentSearch);
    search.set('quickstart', activeQuickStartID);
    return search.toString();
};
const useNavigation = () => {
    const { flagsReady } = (0,_unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_8__.useFlagsStatus)();
    const isBetaEnv = (0,_common__WEBPACK_IMPORTED_MODULE_5__.isBeta)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const { replace, location } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory)();
    const { pathname } = location;
    const { activeQuickStartID } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_7__.QuickStartContext);
    const currentNamespace = pathname.split('/')[1];
    const schema = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(({ chrome: { navigation } }) => navigation[currentNamespace]);
    /**
     * We need a side effect to get the value into the mutation observer closure
     */
    const activeQSId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)('');
    const activeLocation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({});
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        activeQSId.current = activeQuickStartID;
        activeLocation.current = location;
    }, [activeQuickStartID]);
    const registerLocationObserver = (initialPathname, schema) => {
        let prevPathname = initialPathname;
        dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_4__.loadLeftNavSegment)(schema, currentNamespace, initialPathname));
        return new MutationObserver((mutations) => {
            mutations.forEach(() => {
                const newPathname = window.location.pathname;
                if (newPathname !== prevPathname) {
                    prevPathname = newPathname;
                    (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.batch)(() => {
                        dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_4__.loadLeftNavSegment)(schema, currentNamespace, prevPathname));
                        /**
                         * Clean gateway error on URL change
                         */
                        dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_4__.setGatewayError)());
                    });
                }
                setTimeout(() => {
                    if (activeQSId.current && shouldPreseverQuickstartSearch(window.location.search, activeQSId.current)) {
                        replace({
                            ...activeLocation.current,
                            pathname: newPathname.replace(/^\/beta\//, '/'),
                            search: appendQSSearch(window.location.search, activeQSId.current),
                        });
                    }
                });
            });
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        let observer;
        if (currentNamespace && flagsReady) {
            axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${window.location.origin}${isBetaEnv ? '/beta' : ''}/config/chrome/${currentNamespace}-navigation.json?ts=${Date.now()}`)
                .then(async (response) => {
                if (observer && typeof observer.disconnect === 'function') {
                    observer.disconnect();
                }
                const data = response.data;
                const navItems = await Promise.all(data.navItems.map(cleanNavItemsHref).map(_isNavItemVisible__WEBPACK_IMPORTED_MODULE_6__.evaluateVisibility));
                const schema = {
                    ...data,
                    navItems,
                };
                observer = registerLocationObserver(pathname, schema);
                observer.observe(document.querySelector('body'), {
                    childList: true,
                    subtree: true,
                });
            });
        }
        return () => {
            if (observer && typeof observer.disconnect === 'function') {
                observer.disconnect();
            }
        };
    }, [currentNamespace, flagsReady]);
    return {
        loaded: !!schema,
        schema,
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useNavigation);


/***/ })

}]);