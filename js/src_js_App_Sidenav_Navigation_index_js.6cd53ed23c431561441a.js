"use strict";
(self["webpackChunkinsights_chrome"] = self["webpackChunkinsights_chrome"] || []).push([["src_js_App_Sidenav_Navigation_index_js"],{

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

/***/ "./src/js/App/Sidenav/BetaInfoModal.js":
/*!*********************************************!*\
  !*** ./src/js/App/Sidenav/BetaInfoModal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_info_circle_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/info-circle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/info-circle-icon.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?9cbb");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Messages */ "./src/js/Messages.ts");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);







var BetaInfoModal = function BetaInfoModal(_ref) {
  var isOpen = _ref.isOpen,
      onClick = _ref.onClick,
      onCancel = _ref.onCancel,
      menuItemClicked = _ref.menuItemClicked;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.default)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    "aria-label": "Beta info modal",
    isOpen: isOpen,
    onClose: onCancel,
    variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ModalVariant.medium
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Bullseye, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "chr-c-navigation__beta-info-modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons_dist_js_icons_info_circle_icon__WEBPACK_IMPORTED_MODULE_4__.InfoCircleIcon, {
    size: "xl",
    className: "info-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Title, {
    headingLevel: "h4",
    size: "xl"
  }, "".concat(menuItemClicked, " is only available in our Beta Environment")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__.default.tryThisFeatureInBeta)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__.default.afterBetaUse)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pf-u-pt-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
    key: "confirm",
    variant: "primary",
    onClick: onClick
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__.default.useFeatureInBeta))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://access.redhat.com/support/policy/updates/cloud-redhat/lifecycle"
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__.default.learnMoreABoutBeta))))));
};

BetaInfoModal.propTypes = {
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  menuItemClicked: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BetaInfoModal);

/***/ }),

/***/ "./src/js/App/Sidenav/Navigation/index.js":
/*!************************************************!*\
  !*** ./src/js/App/Sidenav/Navigation/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?9cbb");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _navContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navContext */ "./src/js/App/Sidenav/Navigation/navContext.ts");
/* harmony import */ var _componentMapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentMapper */ "./src/js/App/Sidenav/Navigation/componentMapper.js");
/* harmony import */ var _ChromeNavItemFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChromeNavItemFactory */ "./src/js/App/Sidenav/Navigation/ChromeNavItemFactory.js");
/* harmony import */ var _BetaInfoModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../BetaInfoModal */ "./src/js/App/Sidenav/BetaInfoModal.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils */ "./src/js/utils.ts");
/* harmony import */ var _utils_useNavigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/useNavigation */ "./src/js/utils/useNavigation.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Loader */ "./src/js/App/Sidenav/Navigation/Loader.tsx");
/* harmony import */ var _ChromeNavItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ChromeNavItem */ "./src/js/App/Sidenav/Navigation/ChromeNavItem.js");













var Navigation = function Navigation() {
  var _useNavigation = (0,_utils_useNavigation__WEBPACK_IMPORTED_MODULE_9__.default)(),
      loaded = _useNavigation.loaded,
      schema = _useNavigation.schema;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
      showBetaModal = _useState2[0],
      setShowBetaModal = _useState2[1];

  var deferedOnClickArgs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)([]);
  var showBundleCatalog = localStorage.getItem('chrome:experimental:quickstarts') === 'true';

  var onLinkClick = function onLinkClick(origEvent, href) {
    if (!showBetaModal && !(0,_utils__WEBPACK_IMPORTED_MODULE_8__.isBeta)()) {
      var _origEvent$target;

      origEvent.preventDefault();
      deferedOnClickArgs.current = [origEvent, href, origEvent === null || origEvent === void 0 ? void 0 : (_origEvent$target = origEvent.target) === null || _origEvent$target === void 0 ? void 0 : _origEvent$target.text];
      setShowBetaModal(true);
      return false;
    }

    return true;
  };

  if (!loaded) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Loader__WEBPACK_IMPORTED_MODULE_10__.default, null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "chr-c-app-title"
  }, schema.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Nav, {
    "aria-label": "Insights Global Navigation",
    "data-ouia-safe": "true",
    ouiaId: "SideNavigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.NavList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.PageContextConsumer, null, function (_ref) {
    var isNavOpen = _ref.isNavOpen;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_navContext__WEBPACK_IMPORTED_MODULE_4__.default.Provider, {
      value: {
        componentMapper: _componentMapper__WEBPACK_IMPORTED_MODULE_5__.default,
        onLinkClick: onLinkClick,
        inPageLayout: true,
        isNavOpen: isNavOpen
      }
    }, schema.navItems.map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ChromeNavItemFactory__WEBPACK_IMPORTED_MODULE_6__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        key: index
      }, item));
    }), showBundleCatalog ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ChromeNavItem__WEBPACK_IMPORTED_MODULE_11__.default, {
      title: "Quickstarts",
      href: "/".concat((0,_utils__WEBPACK_IMPORTED_MODULE_8__.getUrl)('bundle'), "/quickstarts"),
      appId: "dynamic"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_BetaInfoModal__WEBPACK_IMPORTED_MODULE_7__.default, {
    isOpen: showBetaModal,
    onClick: function onClick(event) {
      if (!(0,_utils__WEBPACK_IMPORTED_MODULE_8__.isBeta)()) {
        var _deferedOnClickArgs$c = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(deferedOnClickArgs.current, 2),
            origEvent = _deferedOnClickArgs$c[0],
            href = _deferedOnClickArgs$c[1];

        var isMetaKey = event.ctrlKey || event.metaKey || event.which === 2 || origEvent.ctrlKey || origEvent.metaKey || origEvent.which === 2;
        var url = "".concat(document.baseURI, "beta").concat(href);
        isMetaKey ? window.open(url) : window.location.href = url;
      }
    },
    onCancel: function onCancel() {
      return setShowBetaModal(false);
    },
    menuItemClicked: deferedOnClickArgs.current[2]
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);

/***/ }),

/***/ "./src/js/utils/useNavigation.js":
/*!***************************************!*\
  !*** ./src/js/utils/useNavigation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/actions */ "./src/js/redux/actions.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./src/js/utils.ts");
/* harmony import */ var _isNavItemVisible__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./isNavItemVisible */ "./src/js/utils/isNavItemVisible.js");
/* harmony import */ var _patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/quickstarts */ "webpack/sharing/consume/default/@patternfly/quickstarts/@patternfly/quickstarts");
/* harmony import */ var _patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @unleash/proxy-client-react */ "webpack/sharing/consume/default/@unleash/proxy-client-react/@unleash/proxy-client-react");
/* harmony import */ var _unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_12__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











function cleanNavItemsHref(navItem) {
  var result = _objectSpread({}, navItem);

  if (typeof result.groupId !== 'undefined') {
    result.navItems = result.navItems.map(cleanNavItemsHref);
  }

  if (result.expandable === true) {
    result.routes = result.routes.map(cleanNavItemsHref);
  }

  if (typeof result.href === 'string') {
    /**
     * Remove traling "/" from  the link
     */
    result.href = result.href.replace(/\/$/, '');
  }

  return result;
}

var shouldPreseverQuickstartSearch = function shouldPreseverQuickstartSearch(prevSearch, activeQuickStartID) {
  var prevParams = new URLSearchParams(prevSearch);
  return activeQuickStartID !== prevParams.get('quickstart');
};

var appendQSSearch = function appendQSSearch(currentSearch, activeQuickStartID) {
  var search = new URLSearchParams(currentSearch);
  search.set('quickstart', activeQuickStartID);
  return search.toString();
};

var useNavigation = function useNavigation() {
  var _useFlagsStatus = (0,_unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_12__.useFlagsStatus)(),
      flagsReady = _useFlagsStatus.flagsReady;

  var isBetaEnv = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.isBeta)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();

  var _useHistory = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useHistory)(),
      replace = _useHistory.replace,
      location = _useHistory.location;

  var pathname = location.pathname;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_11__.QuickStartContext),
      activeQuickStartID = _useContext.activeQuickStartID;

  var currentNamespace = pathname.split('/')[1];

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (_ref) {
    var _ref$chrome = _ref.chrome,
        navigation = _ref$chrome.navigation,
        activeApp = _ref$chrome.activeApp;
    return [navigation[currentNamespace], activeApp];
  }),
      _useSelector2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useSelector, 1),
      schema = _useSelector2[0];
  /**
   * We need a side effect to get the value into the mutation observer closure
   */


  var activeQSId = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)('');
  var activeLocation = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)({});
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    activeQSId.current = activeQuickStartID;
    activeLocation.current = location;
  }, [activeQuickStartID]);

  var registerLocationObserver = function registerLocationObserver(initialPathname, schema) {
    var prevPathname = initialPathname;
    dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_8__.loadLeftNavSegment)(schema, currentNamespace, initialPathname));
    return new MutationObserver(function (mutations) {
      mutations.forEach(function () {
        var newPathname = window.location.pathname;

        if (newPathname !== prevPathname) {
          prevPathname = newPathname;
          (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.batch)(function () {
            dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_8__.loadLeftNavSegment)(schema, currentNamespace, prevPathname));
            /**
             * Clean gateway error on URL change
             */

            dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_8__.setGatewayError)());
          });
        }

        setTimeout(function () {
          if (activeQSId.current && shouldPreseverQuickstartSearch(window.location.search, activeQSId.current)) {
            replace(_objectSpread(_objectSpread({}, activeLocation.current), {}, {
              pathname: newPathname.replace(/^\/beta\//, '/'),
              search: appendQSSearch(window.location.search, activeQSId.current)
            }));
          }
        });
      });
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    var observer;

    if (currentNamespace && flagsReady) {
      axios__WEBPACK_IMPORTED_MODULE_4___default().get("".concat(window.location.origin).concat(isBetaEnv ? '/beta' : '', "/config/chrome/").concat(currentNamespace, "-navigation.json?ts=").concat(Date.now())).then( /*#__PURE__*/function () {
        var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(response) {
          var data, navItems, schema;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (observer && typeof observer.disconnect === 'function') {
                    observer.disconnect();
                  }

                  data = response.data;
                  _context.next = 4;
                  return Promise.all(data.navItems.map(cleanNavItemsHref).map(_isNavItemVisible__WEBPACK_IMPORTED_MODULE_10__.evaluateVisibility));

                case 4:
                  navItems = _context.sent;
                  schema = _objectSpread(_objectSpread({}, data), {}, {
                    navItems: navItems
                  });
                  observer = registerLocationObserver(pathname, schema);
                  observer.observe(document.querySelector('body'), {
                    childList: true,
                    subtree: true
                  });

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
    }

    return function () {
      if (observer && typeof observer.disconnect === 'function') {
        observer.disconnect();
      }
    };
  }, [currentNamespace, flagsReady]);
  return {
    loaded: !!schema,
    schema: schema
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useNavigation);

/***/ })

}]);