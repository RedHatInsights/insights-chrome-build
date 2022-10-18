(self["webpackChunkinsights_chrome"] = self["webpackChunkinsights_chrome"] || []).push([["src_js_bootstrap_js-src_js_unfetch_index_js-webpack_sharing_consume_default_patternfly_react--e35842"],{

/***/ "./src/js/App/ErrorBoundary.js":
/*!*************************************!*\
  !*** ./src/js/App/ErrorBoundary.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ErrorComponents_DefaultErrorComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ErrorComponents/DefaultErrorComponent */ "./src/js/App/ErrorComponents/DefaultErrorComponent.tsx");








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(ErrorBoundary, _React$Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "state", {
      hasError: false
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      console.error('Chrome encountered an error!', error);
      this.setState(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          error: error,
          errorInfo: errorInfo
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_ErrorComponents_DefaultErrorComponent__WEBPACK_IMPORTED_MODULE_8__.default, {
          error: this.state.error,
          errorInfo: this.state.errorInfo
        });
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError() {
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}((react__WEBPACK_IMPORTED_MODULE_7___default().Component));

ErrorBoundary.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().node)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);

/***/ }),

/***/ "./src/js/App/GlobalFilter/GlobalFilter.js":
/*!*************************************************!*\
  !*** ./src/js/App/GlobalFilter/GlobalFilter.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redhat_cloud_services_frontend_components_FilterHooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/FilterHooks */ "./node_modules/@redhat-cloud-services/frontend-components/esm/FilterHooks/tagFilterHook.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions */ "./src/js/redux/actions.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./src/js/App/GlobalFilter/constants.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _GlobalFilterMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GlobalFilterMenu */ "./src/js/App/GlobalFilter/GlobalFilterMenu.tsx");
/* harmony import */ var _filterApi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filterApi */ "./src/js/App/GlobalFilter/filterApi.ts");














var useLoadTags = function useLoadTags(hasAccess) {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useHistory)();
  var registeredWith = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (_ref) {
    var scope = _ref.globalFilter.scope;
    return scope;
  });
  var isDisabled = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (_ref2) {
    var globalFilterHidden = _ref2.globalFilter.globalFilterHidden,
        appId = _ref2.chrome.appId;
    return globalFilterHidden || !appId;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  return (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function (activeTags, search) {
    (0,_filterApi__WEBPACK_IMPORTED_MODULE_10__.storeFilter)(activeTags, hasAccess && !isDisabled, history);
    (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.batch)(function () {
      dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_6__.fetchAllTags)({
        registeredWith: registeredWith,
        activeTags: activeTags,
        search: search
      }));
      dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_6__.fetchAllSIDs)({
        registeredWith: registeredWith,
        activeTags: activeTags,
        search: search
      }));
      dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_6__.fetchAllWorkloads)({
        registeredWith: registeredWith,
        activeTags: activeTags,
        search: search
      }));
    });
  }, [registeredWith, hasAccess, history]);
};

var GlobalFilter = function GlobalFilter(_ref3) {
  var hasAccess = _ref3.hasAccess;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  var isLoaded = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (_ref4) {
    var _ref4$globalFilter = _ref4.globalFilter,
        tags = _ref4$globalFilter.tags,
        sid = _ref4$globalFilter.sid,
        workloads = _ref4$globalFilter.workloads;
    return tags.isLoaded && sid.isLoaded && workloads.isLoaded;
  });

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (_ref5) {
    var _ref5$globalFilter = _ref5.globalFilter,
        tags = _ref5$globalFilter.tags,
        sid = _ref5$globalFilter.sid,
        workloads = _ref5$globalFilter.workloads;
    return {
      count: tags.count + sid.count + workloads.count,
      total: tags.total + sid.total + workloads.total,
      tags: tags.items || [],
      sid: sid.items || [],
      workloads: workloads
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_5__.shallowEqual),
      count = _useSelector.count,
      total = _useSelector.total,
      tags = _useSelector.tags,
      sid = _useSelector.sid,
      workloads = _useSelector.workloads;

  var isDisabled = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (_ref6) {
    var globalFilterHidden = _ref6.globalFilter.globalFilterHidden,
        appId = _ref6.chrome.appId;
    return globalFilterHidden || !appId;
  });

  var _useTagsFilter = (0,_redhat_cloud_services_frontend_components_FilterHooks__WEBPACK_IMPORTED_MODULE_11__.useTagsFilter)([workloads].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(sid), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(tags)), isLoaded, total - count, function (_e, closeFn) {
    setIsOpen(function () {
      return true;
    });
    closeFn && closeFn();
  }, undefined, 'system', 'View more'),
      filter = _useTagsFilter.filter,
      chips = _useTagsFilter.chips,
      selectedTags = _useTagsFilter.selectedTags,
      setValue = _useTagsFilter.setValue,
      filterTagsBy = _useTagsFilter.filterTagsBy;

  var loadTags = useLoadTags(hasAccess);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    setValue(function () {
      return (0,_constants__WEBPACK_IMPORTED_MODULE_7__.generateFilter)();
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (hasAccess && !isDisabled) {
      loadTags(selectedTags, filterTagsBy, true);
      dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_6__.globalFilterChange)(selectedTags));
    }
  }, [selectedTags, filterTagsBy, hasAccess, isDisabled]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_GlobalFilterMenu__WEBPACK_IMPORTED_MODULE_9__.GlobalFilterDropdown, {
    allowed: hasAccess,
    isDisabled: isDisabled,
    filter: filter,
    chips: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(chips.filter(function (_ref7) {
      var key = _ref7.key;
      return key === 'Workloads';
    })), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(chips.filter(function (_ref8) {
      var key = _ref8.key;
      return key !== 'Workloads';
    }))),
    setValue: setValue,
    selectedTags: selectedTags,
    isOpen: isOpen,
    filterTagsBy: filterTagsBy,
    setIsOpen: setIsOpen
  });
};

GlobalFilter.propTypes = {
  hasAccess: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool)
};

var GlobalFilterWrapper = function GlobalFilterWrapper() {
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState3, 2),
      hasAccess = _useState4[0],
      setHasAccess = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    var fetchPermissions = /*#__PURE__*/function () {
      var _ref9 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
        var _window$insights, _window$insights$chro, _window$insights$chro2;

        var permissions;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (_window$insights = window.insights) === null || _window$insights === void 0 ? void 0 : (_window$insights$chro = _window$insights.chrome) === null || _window$insights$chro === void 0 ? void 0 : (_window$insights$chro2 = _window$insights$chro.getUserPermissions) === null || _window$insights$chro2 === void 0 ? void 0 : _window$insights$chro2.call(_window$insights$chro, 'inventory');

              case 2:
                permissions = _context.sent;
                setHasAccess(permissions === null || permissions === void 0 ? void 0 : permissions.some(function (item) {
                  return ['inventory:*:*', 'inventory:*:read', 'inventory:hosts:read'].includes((item === null || item === void 0 ? void 0 : item.permission) || item);
                }));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchPermissions() {
        return _ref9.apply(this, arguments);
      };
    }();

    fetchPermissions();
  }, []);
  var userLoaded = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (_ref10) {
    var user = _ref10.chrome.user;
    return Boolean(user);
  });
  return userLoaded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(GlobalFilter, {
    hasAccess: hasAccess
  }) : null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalFilterWrapper);

/***/ }),

/***/ "./src/js/App/Header/AppFilter/AppFilter.js":
/*!**************************************************!*\
  !*** ./src/js/App/Header/AppFilter/AppFilter.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "webpack/sharing/consume/default/react-dom/react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Messages */ "./src/js/Messages.ts");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_caret_down_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/caret-down-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/caret-down-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_filter_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/filter-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/filter-icon.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?9cbb");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _AppFilter_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AppFilter.scss */ "./src/js/App/Header/AppFilter/AppFilter.scss");
/* harmony import */ var _useAppFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useAppFilter */ "./src/js/App/Header/AppFilter/useAppFilter.js");
/* harmony import */ var _Sidenav_Navigation_ChromeLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Sidenav/Navigation/ChromeLink */ "./src/js/App/Sidenav/Navigation/ChromeLink.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);


var _excluded = ["filterable", "href", "title", "isHidden"];













var App = function App(_ref) {
  var id = _ref.id,
      title = _ref.title,
      _ref$links = _ref.links,
      links = _ref$links === void 0 ? [] : _ref$links,
      setIsOpen = _ref.setIsOpen;
  return links.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "galleryItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Split, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.SplitItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Text, {
    component: "h4"
  }, title), links.map(function (_ref2) {
    var filterable = _ref2.filterable,
        href = _ref2.href,
        title = _ref2.title,
        isHidden = _ref2.isHidden,
        rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref2, _excluded);

    return isHidden ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Text, {
      component: "p",
      key: "".concat(id, "-").concat(href),
      onClick: function onClick() {
        return setIsOpen === null || setIsOpen === void 0 ? void 0 : setIsOpen(false);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Sidenav_Navigation_ChromeLink__WEBPACK_IMPORTED_MODULE_8__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, rest, {
      title: title,
      href: href
    }), title));
  }))))) : null;
};

App.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string.isRequired),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().node),
  links: prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default().shape({
    href: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string.isRequired),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string.isRequired)
  })).isRequired,
  setIsOpen: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func)
};

var AppFilterDropdown = function AppFilterDropdown(_ref3) {
  var isLoaded = _ref3.isLoaded,
      setIsOpen = _ref3.setIsOpen,
      isOpen = _ref3.isOpen,
      filterValue = _ref3.filterValue,
      setFilterValue = _ref3.setFilterValue,
      filteredApps = _ref3.filteredApps;
  var dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);

  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useLocation)(),
      pathname = _useLocation.pathname;

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_11__.default)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (isLoaded) {
      setIsOpen(false);
    }
  }, [pathname]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {
    className: "pf-m-full-height",
    toggle: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.DropdownToggle, {
      id: "toggle-id",
      onToggle: function onToggle(_isOpen, event) {
        var _dropdownRef$current;

        if (!((_dropdownRef$current = dropdownRef.current) !== null && _dropdownRef$current !== void 0 && _dropdownRef$current.contains(event.target))) {
          setIsOpen(!isOpen);
        }
      },
      toggleIndicator: _patternfly_react_icons_dist_js_icons_caret_down_icon__WEBPACK_IMPORTED_MODULE_12__.CaretDownIcon
    }, "All apps and services"),
    isOpen: isOpen,
    ouiaId: "App Filter"
  }, /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_3___default().createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    ref: dropdownRef,
    className: "pf-c-dropdown chr-c-page__app-filter-dropdown-menu",
    "data-testid": "chr-c__find-app-service"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "pf-c-dropdown__menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "chr-app-filter-content"
  }, isLoaded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Flex, {
    className: "chr-l-flex-app-filter-search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.SearchInput, {
    "data-ouia-component-id": "app-filter-search",
    placeholder: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_4__.default.findAppOrService),
    value: filterValue,
    onChange: function onChange(val) {
      return setFilterValue(val);
    },
    onClear: function onClear(e) {
      setFilterValue('');
      e.stopPropagation();
    }
  })), (filteredApps === null || filteredApps === void 0 ? void 0 : filteredApps.length) > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "gallery"
  }, filteredApps.map(function (app) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(App, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      key: app.id
    }, app, {
      setIsOpen: setIsOpen
    }));
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.EmptyState, {
    className: "pf-u-mt-xl",
    variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.EmptyStateVariant.full
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.EmptyStateIcon, {
    className: "pf-u-mb-xl",
    icon: _patternfly_react_icons_dist_js_icons_filter_icon__WEBPACK_IMPORTED_MODULE_13__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Title, {
    headingLevel: "h4"
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_4__.default.noMatchingAppsFound)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.EmptyStateBody, {
    className: "pf-u-mb-xl"
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_4__.default.tryChangingSearch)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Button, {
    ouiaId: "app-filter-clear-input",
    className: "pf-u-mt-lg",
    variant: "link",
    onClick: function onClick(e) {
      setFilterValue('');
      e.stopPropagation();
    }
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_4__.default.clearFilters)))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Bullseye, {
    className: "pf-u-p-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Spinner, null))))), document.body));
};

AppFilterDropdown.propTypes = {
  isLoaded: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),
  filterValue: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),
  setFilterValue: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),
  setIsOpen: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func.isRequired),
  filteredApps: prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string.isRequired),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().node.isRequired),
    routes: prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default().shape({
      id: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string.isRequired)
    }))
  }))
};

var AppFilter = function AppFilter() {
  var _useAppFilter = (0,_useAppFilter__WEBPACK_IMPORTED_MODULE_7__.default)(),
      filteredApps = _useAppFilter.filteredApps,
      isLoaded = _useAppFilter.isLoaded,
      isOpen = _useAppFilter.isOpen,
      setIsOpen = _useAppFilter.setIsOpen,
      filterValue = _useAppFilter.filterValue,
      setFilterValue = _useAppFilter.setFilterValue;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(AppFilterDropdown, {
    isLoaded: isLoaded,
    setIsOpen: setIsOpen,
    isOpen: isOpen,
    filterValue: filterValue,
    setFilterValue: setFilterValue,
    filteredApps: filteredApps
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppFilter);

/***/ }),

/***/ "./src/js/App/Header/AppFilter/index.js":
/*!**********************************************!*\
  !*** ./src/js/App/Header/AppFilter/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _AppFilter__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _AppFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppFilter */ "./src/js/App/Header/AppFilter/AppFilter.js");


/***/ }),

/***/ "./src/js/App/Header/AppFilter/useAppFilter.js":
/*!*****************************************************!*\
  !*** ./src/js/App/Header/AppFilter/useAppFilter.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requiredBundles": () => (/* binding */ requiredBundles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils */ "./src/js/utils.ts");
/* harmony import */ var _utils_isNavItemVisible__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/isNavItemVisible */ "./src/js/utils/isNavItemVisible.js");
/* harmony import */ var _utils_useRenderFedramp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/useRenderFedramp */ "./src/js/utils/useRenderFedramp.js");





var _excluded = ["title", "isExternal", "href", "routes", "expandable"],
    _excluded2 = ["href", "title"],
    _excluded3 = ["groupId", "navItems"],
    _excluded4 = ["costLinks", "subscriptionsLinks"],
    _excluded5 = ["links"];


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var requiredBundles = ['application-services', 'openshift', 'insights', 'edge', 'ansible', 'settings'].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__.default)((0,_utils__WEBPACK_IMPORTED_MODULE_9__.isBeta)() && !(0,_utils__WEBPACK_IMPORTED_MODULE_9__.isProd)() ? ['iam', 'business-services'] : []));
var bundlesOrder = ['application-services', 'openshift', 'rhel', 'edge', 'ansible', 'settings', 'cost-management', 'subscriptions', 'iam', 'business-services'];
var isFedrampEnv = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.isFedRamp)();

function findModuleByLink(href) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    modules: []
  },
      modules = _ref.modules;

  var routes = modules.flatMap(function (_ref2) {
    var routes = _ref2.routes;
    return routes.map(function (route) {
      return typeof route === 'string' ? route : route.pathname;
    });
  }).sort(function (a, b) {
    return a.length < b.length ? 1 : -1;
  });
  return routes.find(function (route) {
    return href.includes(route);
  }) || '';
}

function getBundleLink(_ref3, modules) {
  var title = _ref3.title,
      isExternal = _ref3.isExternal,
      href = _ref3.href,
      routes = _ref3.routes,
      expandable = _ref3.expandable,
      rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__.default)(_ref3, _excluded);

  var costLinks = [];
  var subscriptionsLinks = [];
  var url = href;
  var appId = rest.appId;
  var isFedramp = (0,_utils_useRenderFedramp__WEBPACK_IMPORTED_MODULE_11__.computeFedrampResult)(isFedrampEnv, url, modules[appId]);

  if (expandable) {
    routes.forEach(function (_ref4) {
      var href = _ref4.href,
          title = _ref4.title,
          rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__.default)(_ref4, _excluded2);

      if (href.includes('/openshift/cost-management') && rest.filterable !== false) {
        costLinks.push(_objectSpread(_objectSpread({}, rest), {}, {
          isFedramp: false,
          href: href,
          title: title
        }));
      }

      if (rest.filterable !== false && (href.includes('/insights/subscriptions') || href.includes('/openshift/subscriptions'))) {
        subscriptionsLinks.push(_objectSpread(_objectSpread({}, rest), {}, {
          isFedramp: false,
          // openshift and subs are never visible on fedramp.
          href: href,
          title: title
        }));
      }

      if (!url && href.match(/^\//)) {
        var moduleRoute = isExternal ? '' : findModuleByLink(href, modules[rest.appId]);
        var truncatedRoute = href.split('/').slice(0, 3).join('/');
        url = isExternal ? href : moduleRoute.length > truncatedRoute.length ? moduleRoute : truncatedRoute;
        appId = rest.appId ? rest.appId : appId;
        isFedramp = (0,_utils_useRenderFedramp__WEBPACK_IMPORTED_MODULE_11__.computeFedrampResult)(isFedrampEnv, url, modules[appId]);
      }
    });
  }

  return _objectSpread(_objectSpread({}, rest), {}, {
    isFedramp: isFedramp,
    appId: appId,
    isExternal: isExternal,
    title: title,
    href: url,
    costLinks: costLinks,
    subscriptionsLinks: subscriptionsLinks
  });
}

var isDuplicate = function isDuplicate(items, href) {
  return !!items.find(function (item) {
    return item.href === href;
  });
};

var useAppFilter = function useAppFilter() {
  var isBetaEnv = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.isBeta)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
    isLoaded: false,
    isLoading: false,
    isOpen: false,
    filterValue: '',
    data: {
      'cost-management': {
        id: 'cost-management',
        title: 'Cost Management',
        links: []
      },
      subscriptions: {
        id: 'subscriptions',
        title: 'Subscriptions',
        links: []
      }
    }
  }),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var existingSchemas = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (_ref5) {
    var navigation = _ref5.chrome.navigation;
    return navigation;
  });
  var modules = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (_ref6) {
    var modules = _ref6.chrome.modules;
    return modules;
  });

  var handleBundleData = /*#__PURE__*/function () {
    var _ref8 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee2(_ref7) {
      var _ref7$data, id, navItems, title, links, bundleLinks, extraLinks, promises;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _ref7$data = _ref7.data, id = _ref7$data.id, navItems = _ref7$data.navItems, title = _ref7$data.title;
              links = (navItems === null || navItems === void 0 ? void 0 : navItems.reduce(function (acc, curr) {
                if (curr.groupId) {
                  var _curr$navItems;

                  return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__.default)(acc), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__.default)((_curr$navItems = curr.navItems) === null || _curr$navItems === void 0 ? void 0 : _curr$navItems.map(function (_ref9) {
                    var groupId = _ref9.groupId,
                        navItems = _ref9.navItems,
                        rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__.default)(_ref9, _excluded3);

                    return groupId ? navItems : rest;
                  })));
                }

                return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__.default)(acc), [curr]);
              }, []).flat().map(function (link) {
                return getBundleLink(link, modules);
              }).filter(function (_ref10) {
                var isFedramp = _ref10.isFedramp;
                return isFedrampEnv ? !!isFedramp : true;
              }).filter(function (_ref11) {
                var filterable = _ref11.filterable;
                return filterable !== false;
              })) || [];
              bundleLinks = [];
              extraLinks = {
                cost: [],
                subs: []
              };
              promises = links.map( /*#__PURE__*/function () {
                var _ref13 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee(_ref12) {
                  var costLinks, subscriptionsLinks, rest, nextIndex, link;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          costLinks = _ref12.costLinks, subscriptionsLinks = _ref12.subscriptionsLinks, rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__.default)(_ref12, _excluded4);
                          nextIndex = bundleLinks.length;

                          if (!(costLinks.length > 0)) {
                            _context.next = 6;
                            break;
                          }

                          _context.next = 5;
                          return costLinks.filter(_utils_isNavItemVisible__WEBPACK_IMPORTED_MODULE_10__.evaluateVisibility);

                        case 5:
                          extraLinks.cost = _context.sent;

                        case 6:
                          if (!(subscriptionsLinks.length > 0)) {
                            _context.next = 10;
                            break;
                          }

                          _context.next = 9;
                          return subscriptionsLinks.filter(_utils_isNavItemVisible__WEBPACK_IMPORTED_MODULE_10__.evaluateVisibility);

                        case 9:
                          extraLinks.subs = _context.sent;

                        case 10:
                          if (!(rest.filterable !== true && (subscriptionsLinks.length > 0 || costLinks.length > 0))) {
                            _context.next = 12;
                            break;
                          }

                          return _context.abrupt("return");

                        case 12:
                          /**
                           * We have to create a placeholder for the link item, in order to preserver the links order
                           */
                          bundleLinks.push(_objectSpread(_objectSpread({}, rest), {}, {
                            isHidden: true
                          }));
                          _context.next = 15;
                          return (0,_utils_isNavItemVisible__WEBPACK_IMPORTED_MODULE_10__.evaluateVisibility)(rest);

                        case 15:
                          link = _context.sent;
                          bundleLinks[nextIndex] = link;

                        case 17:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x2) {
                  return _ref13.apply(this, arguments);
                };
              }());
              _context2.next = 7;
              return Promise.all(promises);

            case 7:
              setState(function (prev) {
                var _objectSpread2;

                return _objectSpread(_objectSpread({}, prev), {}, {
                  isLoaded: true,
                  data: _objectSpread(_objectSpread({}, prev.data), {}, (_objectSpread2 = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(_objectSpread2, id, {
                    id: id,
                    title: title,
                    links: bundleLinks
                  }), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(_objectSpread2, 'cost-management', _objectSpread(_objectSpread({}, prev.data['cost-management']), {}, {
                    links: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__.default)(prev.data['cost-management'].links), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__.default)(extraLinks.cost.filter(function (item) {
                      return !isDuplicate(prev.data['cost-management'].links, item.href);
                    })))
                  })), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(_objectSpread2, "subscriptions", _objectSpread(_objectSpread({}, prev.data.subscriptions), {}, {
                    links: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__.default)(prev.data.subscriptions.links), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__.default)(extraLinks.subs.filter(function (item) {
                      return !isDuplicate(prev.data.subscriptions.links, item.href);
                    })))
                  })), _objectSpread2))
                });
              });

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleBundleData(_x) {
      return _ref8.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    if (state.isOpen && !state.isLoading && !state.isLoaded) {
      setState(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          isLoading: true
        });
      });
      var bundles = requiredBundles.filter(function (app) {
        return !Object.keys(existingSchemas).includes(app);
      });
      bundles.map(function (fragment) {
        return axios__WEBPACK_IMPORTED_MODULE_6___default().get("".concat(isBetaEnv ? '/beta' : '', "/config/chrome/").concat(fragment, "-navigation.json?ts=").concat(Date.now())).then(handleBundleData).then(function () {
          return Object.values(existingSchemas).map(function (data) {
            return handleBundleData({
              data: data
            });
          });
        }).catch(function (err) {
          console.error('Unable to load appfilter bundle', err, fragment);
        });
      });
    }
  }, [state.isOpen]);

  var setIsOpen = function setIsOpen(isOpen) {
    setState(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        isOpen: isOpen
      });
    });
  };

  var setFilterValue = function setFilterValue() {
    var filterValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    setState(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        filterValue: filterValue
      });
    });
  };

  var filterApps = function filterApps(data) {
    var filterValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return Object.entries(data).reduce(function (acc, _ref14) {
      var _rest$title;

      var _ref15 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref14, 2),
          key = _ref15[0],
          _ref15$ = _ref15[1],
          links = _ref15$.links,
          rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__.default)(_ref15$, _excluded5);

      if (rest !== null && rest !== void 0 && (_rest$title = rest.title) !== null && _rest$title !== void 0 && _rest$title.toLowerCase().includes(filterValue.toLowerCase())) {
        return _objectSpread(_objectSpread({}, acc), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, key, _objectSpread(_objectSpread({}, rest), {}, {
          links: links
        })));
      }

      return _objectSpread(_objectSpread({}, acc), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, key, _objectSpread(_objectSpread({}, rest), {}, {
        links: links.filter(function (_ref16) {
          var title = _ref16.title,
              isHidden = _ref16.isHidden;
          return !isHidden && title.toLowerCase().includes(filterValue.toLowerCase());
        })
      })));
    }, {});
  };

  var filteredApps = filterApps(state.data, state.filterValue);
  return _objectSpread(_objectSpread({}, state), {}, {
    setIsOpen: setIsOpen,
    setFilterValue: setFilterValue,
    filteredApps: bundlesOrder.map(function (app) {
      return filteredApps[app];
    }).filter(function (app) {
      return typeof app !== 'undefined';
    }).filter(function (_ref17) {
      var links = _ref17.links;
      return links.length > 0;
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAppFilter);

/***/ }),

/***/ "./src/js/App/Header/ContextSwitcher.js":
/*!**********************************************!*\
  !*** ./src/js/App/Header/ContextSwitcher.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?9cbb");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_check_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/check-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/check-icon.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Messages */ "./src/js/Messages.ts");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions */ "./src/js/redux/actions.ts");
/* harmony import */ var _ContextSwitcher_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ContextSwitcher.scss */ "./src/js/App/Header/ContextSwitcher.scss");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../consts */ "./src/js/consts.ts");

















var ContextSwitcher = function ContextSwitcher(_ref) {
  var _user$identity4, _user$identity5, _user$identity6;

  var user = _ref.user,
      className = _ref.className;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_12__.default)();
  var isOpen = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (_ref2) {
    var chrome = _ref2.chrome;
    return chrome === null || chrome === void 0 ? void 0 : chrome.contextSwitcherOpen;
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState3, 2),
      searchValue = _useState4[0],
      setSearchValue = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(user.identity.account_number),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState5, 2),
      selectedAccountNumber = _useState6[0],
      setSelectedAccountNumber = _useState6[1];

  var onSelect = function onSelect() {
    dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_8__.onToggleContextSwitcher)());
  };

  var handleItemClick = function handleItemClick(target_account, request_id, end_date, target_org) {
    if (target_account === selectedAccountNumber) {
      return;
    }

    localStorage.removeItem(_consts__WEBPACK_IMPORTED_MODULE_11__.ACTIVE_ACCOUNT_SWITCH_NOTIFICATION);
    localStorage.removeItem(_consts__WEBPACK_IMPORTED_MODULE_11__.REQUESTS_COUNT);
    localStorage.removeItem(_consts__WEBPACK_IMPORTED_MODULE_11__.REQUESTS_DATA);
    setSelectedAccountNumber(target_account);
    js_cookie__WEBPACK_IMPORTED_MODULE_10__.default.set(_consts__WEBPACK_IMPORTED_MODULE_11__.CROSS_ACCESS_ACCOUNT_NUMBER, target_account);
    js_cookie__WEBPACK_IMPORTED_MODULE_10__.default.set(_consts__WEBPACK_IMPORTED_MODULE_11__.CROSS_ACCESS_ORG_ID, target_org);
    /**
     * We need to keep the request id somewhere to check if the request is still active after session start.
     * If it is not active, we have to remove the cookie.
     * This has to happen before ANY API call is made.
     */

    localStorage.setItem(_consts__WEBPACK_IMPORTED_MODULE_11__.ACTIVE_REMOTE_REQUEST, JSON.stringify({
      request_id: request_id,
      target_account: target_account,
      end_date: end_date
    }));
    localStorage.setItem(_consts__WEBPACK_IMPORTED_MODULE_11__.ACTIVE_ACCOUNT_SWITCH_NOTIFICATION, 'true');
    window.location.reload();
  };

  var resetAccountRequest = function resetAccountRequest() {
    var _user$identity, _user$identity2;

    if ((user === null || user === void 0 ? void 0 : (_user$identity = user.identity) === null || _user$identity === void 0 ? void 0 : _user$identity.account_number) === selectedAccountNumber) {
      return;
    }

    setSelectedAccountNumber(user === null || user === void 0 ? void 0 : (_user$identity2 = user.identity) === null || _user$identity2 === void 0 ? void 0 : _user$identity2.account_number);
    js_cookie__WEBPACK_IMPORTED_MODULE_10__.default.remove(_consts__WEBPACK_IMPORTED_MODULE_11__.CROSS_ACCESS_ACCOUNT_NUMBER);
    js_cookie__WEBPACK_IMPORTED_MODULE_10__.default.remove(_consts__WEBPACK_IMPORTED_MODULE_11__.CROSS_ACCESS_ORG_ID);
    localStorage.removeItem(_consts__WEBPACK_IMPORTED_MODULE_11__.ACTIVE_REMOTE_REQUEST);
    window.location.reload();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var _user$identity3, _user$identity3$user;

    // only inernal users have the TAM features enabled
    if (user !== null && user !== void 0 && (_user$identity3 = user.identity) !== null && _user$identity3 !== void 0 && (_user$identity3$user = _user$identity3.user) !== null && _user$identity3$user !== void 0 && _user$identity3$user.is_internal) {
      var initialAccount = localStorage.getItem(_consts__WEBPACK_IMPORTED_MODULE_11__.ACTIVE_REMOTE_REQUEST);

      if (initialAccount) {
        try {
          setSelectedAccountNumber(JSON.parse(initialAccount).target_account);
        } catch (_unused) {
          console.log('Unable to parse initial account. Using default account');
        }
      }

      axios__WEBPACK_IMPORTED_MODULE_6___default().get('/api/rbac/v1/cross-account-requests/', {
        params: {
          status: 'approved',
          order_by: '-created',
          query_by: 'user_id'
        }
      }).then(function (_ref3) {
        var data = _ref3.data.data;
        return setData(data.reduce(function (acc, curr) {
          return acc.find(function (_ref4) {
            var target_account = _ref4.target_account;
            return target_account === curr.target_account;
          }) ? acc : [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(acc), [curr]);
        }, []).filter(function (_ref5) {
          var target_account = _ref5.target_account;
          return target_account !== user.identity.account_number;
        }));
      });
    }
  }, []);

  if (data.length === 0) {
    return null;
  }

  var filteredData = data && data.filter(function (_ref6) {
    var target_account = _ref6.target_account;
    return "".concat(target_account).includes(searchValue);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.ContextSelector, {
    toggleText: "Account: ".concat(selectedAccountNumber),
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('chr-c-context-selector', className),
    onSearchInputChange: function onSearchInputChange(val) {
      return setSearchValue(val);
    },
    isOpen: isOpen,
    searchInputValue: searchValue,
    onToggle: onSelect,
    onSelect: onSelect,
    screenReaderLabel: "Selected account:`",
    ouiaId: "Account Switcher",
    searchInputPlaceholder: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__.default.searchAccount),
    isFullHeight: true
  }, user && user !== null && user !== void 0 && (_user$identity4 = user.identity) !== null && _user$identity4 !== void 0 && _user$identity4.account_number.includes(searchValue) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.ContextSelectorItem, {
    onClick: resetAccountRequest
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.TextContent, {
    className: "chr-c-content-personal-account"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: "account-label pf-u-mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, user === null || user === void 0 ? void 0 : (_user$identity5 = user.identity) === null || _user$identity5 === void 0 ? void 0 : _user$identity5.account_number), (user === null || user === void 0 ? void 0 : (_user$identity6 = user.identity) === null || _user$identity6 === void 0 ? void 0 : _user$identity6.account_number) === "".concat(selectedAccountNumber) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_icons_dist_js_icons_check_icon__WEBPACK_IMPORTED_MODULE_13__.default, {
    size: "sm",
    color: "var(--pf-global--primary-color--100)",
    className: "pf-u-ml-auto"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Text, {
    component: "small"
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__.default.personalAccount)))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null), (filteredData === null || filteredData === void 0 ? void 0 : filteredData.length) === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.ContextSelectorItem, null, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__.default.noResults)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null), filteredData ? filteredData.map(function (_ref7) {
    var target_account = _ref7.target_account,
        request_id = _ref7.request_id,
        end_date = _ref7.end_date,
        target_org = _ref7.target_org;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.ContextSelectorItem, {
      onClick: function onClick() {
        return handleItemClick(target_account, request_id, end_date, target_org);
      },
      key: request_id
    }, target_account, target_account === selectedAccountNumber && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_icons_dist_js_icons_check_icon__WEBPACK_IMPORTED_MODULE_13__.default, {
      size: "sm",
      color: "var(--pf-global--primary-color--100)",
      className: "pf-u-ml-auto"
    }));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.ContextSelectorItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Bullseye, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Spinner, {
    size: "md"
  }))));
};

ContextSwitcher.propTypes = {
  user: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextSwitcher);

/***/ }),

/***/ "./src/js/App/Header/Header.js":
/*!*************************************!*\
  !*** ./src/js/App/Header/Header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header),
/* harmony export */   "HeaderTools": () => (/* binding */ HeaderTools)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "webpack/sharing/consume/default/react-dom/react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tools */ "./src/js/App/Header/Tools.js");
/* harmony import */ var _UnAuthtedHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UnAuthtedHeader */ "./src/js/App/Header/UnAuthtedHeader.js");
/* harmony import */ var _AppFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AppFilter */ "./src/js/App/Header/AppFilter/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?9cbb");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ContextSwitcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ContextSwitcher */ "./src/js/App/Header/ContextSwitcher.js");
/* harmony import */ var _Feedback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Feedback */ "./src/js/App/Feedback/index.ts");
/* harmony import */ var _Activation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Activation */ "./src/js/App/Activation/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Logo */ "./src/js/App/Header/Logo.js");
/* harmony import */ var _Sidenav_Navigation_ChromeLink__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Sidenav/Navigation/ChromeLink */ "./src/js/App/Sidenav/Navigation/ChromeLink.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../consts */ "./src/js/consts.ts");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Header.scss */ "./src/js/App/Header/Header.scss");


















var FeedbackRoute = function FeedbackRoute(_ref) {
  var user = _ref.user;
  var path = localStorage.getItem('chrome:experimental:feedback') === 'true' ? '*' : ['/insights', '/settings', '/openshift', '/application-services', '/ansible', '/edge'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: path
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Feedback__WEBPACK_IMPORTED_MODULE_8__.default, {
    user: user
  }));
};

var Header = function Header() {
  var _user$identity;

  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(function (_ref2) {
    var chrome = _ref2.chrome;
    return chrome === null || chrome === void 0 ? void 0 : chrome.user;
  });
  var search = new URLSearchParams(window.location.search).keys().next().value;
  var isActivationPath = _consts__WEBPACK_IMPORTED_MODULE_14__.activationRequestURLs.includes(search);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.MastheadMain, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.MastheadBrand, {
    component: function component(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Sidenav_Navigation_ChromeLink__WEBPACK_IMPORTED_MODULE_12__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props, {
        appId: "landing",
        href: "/"
      }));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Logo__WEBPACK_IMPORTED_MODULE_11__.default, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.MastheadContent, null, (user === null || user === void 0 ? void 0 : (_user$identity = user.identity) === null || _user$identity === void 0 ? void 0 : _user$identity.account_number) && /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_2___default().createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(FeedbackRoute, {
    user: user
  }), document.body), user && isActivationPath && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Activation__WEBPACK_IMPORTED_MODULE_9__.default, {
    user: user,
    request: search
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.Toolbar, {
    isFullHeight: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.ToolbarContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.ToolbarGroup, {
    variant: "filter-group"
  }, user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.ToolbarItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_AppFilter__WEBPACK_IMPORTED_MODULE_5__.default, null)), user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.ToolbarItem, {
    className: "pf-m-hidden pf-m-visible-on-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ContextSwitcher__WEBPACK_IMPORTED_MODULE_7__.default, {
    user: user,
    className: "data-hj-suppress"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(HeaderTools, null)))));
};
Header.propTypes = {
  logoClassName: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string)
};
FeedbackRoute.propTypes = {
  user: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().object.isRequired)
};
Header.defaultProps = {
  logoClassName: ''
};
var HeaderTools = function HeaderTools() {
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(function (_ref3) {
    var chrome = _ref3.chrome;
    return chrome === null || chrome === void 0 ? void 0 : chrome.user;
  });

  if (!user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_UnAuthtedHeader__WEBPACK_IMPORTED_MODULE_4__.default, null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Tools__WEBPACK_IMPORTED_MODULE_3__.default, null);
};

/***/ }),

/***/ "./src/js/App/Header/HeaderAlert.js":
/*!******************************************!*\
  !*** ./src/js/App/Header/HeaderAlert.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?9cbb");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _HeaderAlert_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderAlert.scss */ "./src/js/App/Header/HeaderAlert.scss");






var HeaderAlert = function HeaderAlert(_ref) {
  var title = _ref.title,
      variant = _ref.variant,
      onDismiss = _ref.onDismiss,
      dismissable = _ref.dismissable,
      dismissDelay = _ref.dismissDelay;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      alertVisible = _useState2[0],
      setAlertVisible = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),
      timer = _useState4[0],
      setTimer = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    dismissable || createTimer();
    return function () {
      return clearTimeout(timer);
    };
  }, []);

  var createTimer = function createTimer() {
    timer !== null && clearTimeout(timer);
    setTimer(setTimeout(function () {
      setAlertVisible(false);
      clearTimeout(timer);
      onDismiss && onDismiss();
    }, dismissDelay));
  };

  var onClose = function onClose() {
    onDismiss && onDismiss();
    setAlertVisible(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, alertVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Alert, {
    variant: variant,
    title: title,
    className: "chr-c-alert",
    actionClose: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.AlertActionCloseButton, {
      onClose: onClose
    })
  }));
};

HeaderAlert.defaultProps = {
  variant: 'info',
  dismissable: false,
  dismissDelay: 5000
};
HeaderAlert.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  variant: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  onDismiss: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  dismissable: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  dismissDelay: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderAlert);

/***/ }),

/***/ "./src/js/App/Header/Login.js":
/*!************************************!*\
  !*** ./src/js/App/Header/Login.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?9cbb");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jwt_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jwt/jwt */ "./src/js/jwt/jwt.ts");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Messages */ "./src/js/Messages.ts");







var Login = function Login() {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.default)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageHeaderTools, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
    ouiaId: "top-right-login-button",
    variant: "tertiary",
    "aria-label": "Toggle primary navigation",
    "widget-type": "InsightsNavToggle",
    onClick: _jwt_jwt__WEBPACK_IMPORTED_MODULE_2__.login
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_3__.default.login)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./src/js/App/Header/Logo.js":
/*!***********************************!*\
  !*** ./src/js/App/Header/Logo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_images_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../static/images/logo.svg */ "./static/images/logo.svg");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?9cbb");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);




var Logo = function Logo() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Brand, {
    className: "chr-c-brand",
    src: _static_images_logo_svg__WEBPACK_IMPORTED_MODULE_1__,
    alt: "Red Hat Logo"
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Logo));

/***/ }),

/***/ "./src/js/App/Header/ToolbarToggle.js":
/*!********************************************!*\
  !*** ./src/js/App/Header/ToolbarToggle.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?9cbb");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Sidenav_Navigation_ChromeLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Sidenav/Navigation/ChromeLink */ "./src/js/App/Sidenav/Navigation/ChromeLink.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils */ "./src/js/utils.ts");









var _excluded = ["url", "appId", "title", "onClick", "isHidden", "isDisabled", "target", "rel"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var ToolbarToggle = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__.default)(ToolbarToggle, _Component);

  var _super = _createSuper(ToolbarToggle);

  function ToolbarToggle(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, ToolbarToggle);

    _this = _super.call(this, props);
    _this.state = {
      isOpen: false
    };
    _this.onSelect = _this.onSelect.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.default)(_this));
    _this.onToggle = _this.onToggle.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.default)(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(ToolbarToggle, [{
    key: "onSelect",
    value: function onSelect() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "onToggle",
    value: function onToggle(isOpen) {
      this.setState({
        isOpen: isOpen
      });
    }
  }, {
    key: "onClick",
    value: function onClick(ev, url, _onClick) {
      ev.preventDefault();

      if (url) {
        window.location.href = "".concat(url);
      }

      if (_onClick) {
        _onClick(ev);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // Render the questionmark icon items
      var dropdownItems = this.props.dropdownItems.map(function (_ref) {
        var url = _ref.url,
            appId = _ref.appId,
            title = _ref.title,
            _onClick2 = _ref.onClick,
            isHidden = _ref.isHidden,
            isDisabled = _ref.isDisabled,
            _ref$target = _ref.target,
            target = _ref$target === void 0 ? '_blank' : _ref$target,
            _ref$rel = _ref.rel,
            rel = _ref$rel === void 0 ? 'noopener noreferrer' : _ref$rel,
            rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, _excluded);

        return !isHidden ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.DropdownItem, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
          key: title,
          ouiaId: title,
          disabled: isDisabled,
          component: appId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_Sidenav_Navigation_ChromeLink__WEBPACK_IMPORTED_MODULE_11__.default, {
            href: url,
            target: target,
            rel: rel,
            isBeta: (0,_utils__WEBPACK_IMPORTED_MODULE_12__.isBeta)(),
            appId: appId
          }, title) : url ? 'a' : 'button' // Because the urls are using 'a', don't use onClick for accessibility
          // If it is a button, use the onClick prop

        }, appId ? {} : url ? _objectSpread({
          href: url,
          target: target,
          rel: rel
        }, rest) : {
          onClick: function onClick(ev) {
            return _this2.onClick(ev, url, _onClick2);
          }
        }), title) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react__WEBPACK_IMPORTED_MODULE_9___default().Fragment), {
          key: "fragment"
        });
      });
      var toggle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.DropdownToggle, {
        className: this.props.className,
        id: this.props.id,
        ouiaId: this.props.id,
        toggleIndicator: this.props.hasToggleIndicator,
        onToggle: this.onToggle,
        "aria-label": this.props.ariaLabel
      }, this.props.icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(this.props.icon, null));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.Dropdown, {
        position: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.DropdownPosition.right,
        toggle: toggle,
        isOpen: this.state.isOpen,
        dropdownItems: dropdownItems,
        onSelect: this.onSelect,
        ouiaId: this.props.ouiaId,
        isPlain: true
      });
    }
  }]);

  return ToolbarToggle;
}(react__WEBPACK_IMPORTED_MODULE_9__.Component);

ToolbarToggle.propTypes = {
  icon: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().elementType),
  dropdownItems: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().array),
  widgetType: prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_13___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_13___default().number)]),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string),
  id: prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_13___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_13___default().number)]),
  hasToggleIndicator: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),
  ouiaId: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string),
  isHidden: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),
  ariaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToolbarToggle);

/***/ }),

/***/ "./src/js/App/Header/Tools.js":
/*!************************************!*\
  !*** ./src/js/App/Header/Tools.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "switchRelease": () => (/* binding */ switchRelease),
/* harmony export */   "betaBadge": () => (/* binding */ betaBadge),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?9cbb");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_question_circle_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/question-circle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/question-circle-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_cog_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/cog-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/cog-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_redhat_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/redhat-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/redhat-icon.js");
/* harmony import */ var _UserToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserToggle */ "./src/js/App/Header/UserToggle.js");
/* harmony import */ var _ToolbarToggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ToolbarToggle */ "./src/js/App/Header/ToolbarToggle.js");
/* harmony import */ var _HeaderAlert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeaderAlert */ "./src/js/App/Header/HeaderAlert.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils */ "./src/js/utils.ts");
/* harmony import */ var _redux_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux-config */ "./src/js/redux-config.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Messages */ "./src/js/Messages.ts");
/* harmony import */ var _unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @unleash/proxy-client-react */ "webpack/sharing/consume/default/@unleash/proxy-client-react/@unleash/proxy-client-react");
/* harmony import */ var _unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_13__);



















var switchRelease = function switchRelease(isBeta, pathname) {
  var _store$getState$chrom;

  js_cookie__WEBPACK_IMPORTED_MODULE_8__.default.set('cs_toggledRelease', 'true');

  var _spinUpStore = (0,_redux_config__WEBPACK_IMPORTED_MODULE_10__.spinUpStore)(),
      store = _spinUpStore.store;

  var isAppOnlyOnBeta = (_store$getState$chrom = store.getState().chrome.activeSection) === null || _store$getState$chrom === void 0 ? void 0 : _store$getState$chrom.isBeta;

  if (isBeta) {
    return isAppOnlyOnBeta ? window.location.origin : "".concat(document.baseURI.replace(/\/*beta/, '')).concat(pathname.replace(/\/*beta\/*/, ''));
  } else {
    var path = pathname.split('/');
    path[0] = 'beta';
    return document.baseURI.concat(path.join('/'));
  }
};
var betaBadge = function betaBadge(css) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Badge, {
    className: classnames__WEBPACK_IMPORTED_MODULE_11___default()('chr-c-toolbar__beta-badge', css)
  }, "beta");
};

var InternalButton = function InternalButton() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "plain",
    "aria-label": "Go to internal tools",
    "widget-type": "InternalButton",
    className: "chr-c-toolbar__button-internal",
    href: "".concat(document.baseURI, "internal"),
    component: "a"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_icons_dist_js_icons_redhat_icon__WEBPACK_IMPORTED_MODULE_14__.default, null));
};

var SettingsButton = function SettingsButton(_ref) {
  var settingsMenuDropdownItems = _ref.settingsMenuDropdownItems;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ToolbarToggle__WEBPACK_IMPORTED_MODULE_5__.default, {
    key: "Settings menu",
    icon: function icon() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_icons_dist_js_icons_cog_icon__WEBPACK_IMPORTED_MODULE_15__.default, null);
    },
    id: "SettingsMenu",
    ariaLabel: "Settings menu",
    ouiaId: "chrome-settings",
    hasToggleIndicator: null,
    "widget-type": "SettingsMenu",
    dropdownItems: settingsMenuDropdownItems
  });
};

SettingsButton.propTypes = {
  settingsMenuDropdownItems: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().array.isRequired)
};

var Tools = function Tools() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    isSettingsDisabled: true,
    isInternal: true,
    isRhosakEntitled: false,
    isDemoAcc: false
  }),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
      _useState2$ = _useState2[0],
      isDemoAcc = _useState2$.isDemoAcc,
      isInternal = _useState2$.isInternal,
      isRhosakEntitled = _useState2$.isRhosakEntitled,
      isSettingsDisabled = _useState2$.isSettingsDisabled,
      setState = _useState2[1];

  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (_ref2) {
    var user = _ref2.chrome.user;
    return user;
  });
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_17__.default)();
  var bundle = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.getUrl)('bundle');
  var settingsPath = "/settings/my-user-access".concat(bundle ? "?bundle=".concat(bundle) : '');
  var identityAndAccessManagmentPath = '/iam/authentication-policy/authentication-factors';
  var betaSwitcherTitle = "".concat((0,_utils__WEBPACK_IMPORTED_MODULE_9__.isBeta)() ? intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_12__.default.stopUsing) : intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_12__.default.use), " ").concat(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_12__.default.betaRelease));
  var enableAuthDropdownOption = (0,_unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_13__.useFlag)('platform.chrome.dropdown.authfactor');
  /* list out the items for the settings menu */

  var settingsMenuDropdownItems = [{
    url: settingsPath,
    title: 'Settings',
    target: '_self',
    appId: 'rbac'
  }].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(enableAuthDropdownOption ? [{
    url: identityAndAccessManagmentPath,
    title: 'Identity & Access Management',
    target: '_self',
    appId: 'iam'
  }] : []), [{
    title: betaSwitcherTitle,
    onClick: function onClick() {
      return window.location = switchRelease((0,_utils__WEBPACK_IMPORTED_MODULE_9__.isBeta)(), window.location.pathname);
    }
  }]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (user) {
      var _user$identity, _user$identity2, _user$identity2$user, _user$entitlements, _user$entitlements$rh, _user$identity3, _user$identity3$user;

      setState({
        isSettingsDisabled: !(user !== null && user !== void 0 && (_user$identity = user.identity) !== null && _user$identity !== void 0 && _user$identity.account_number),
        isInternal: !!(user !== null && user !== void 0 && (_user$identity2 = user.identity) !== null && _user$identity2 !== void 0 && (_user$identity2$user = _user$identity2.user) !== null && _user$identity2$user !== void 0 && _user$identity2$user.is_internal),
        isRhosakEntitled: !!(user !== null && user !== void 0 && (_user$entitlements = user.entitlements) !== null && _user$entitlements !== void 0 && (_user$entitlements$rh = _user$entitlements.rhosak) !== null && _user$entitlements$rh !== void 0 && _user$entitlements$rh.is_entitled),
        isDemoAcc: (user === null || user === void 0 ? void 0 : (_user$identity3 = user.identity) === null || _user$identity3 === void 0 ? void 0 : (_user$identity3$user = _user$identity3.user) === null || _user$identity3$user === void 0 ? void 0 : _user$identity3$user.username) === 'insights-demo-2021'
      });
    }
  }, [user]);
  /* list out the items for the about menu */

  var aboutMenuDropdownItems = [{
    title: "".concat(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_12__.default.supportOptions)),
    url: 'https://access.redhat.com/support'
  }, {
    title: "".concat(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_12__.default.openSupportCase)),
    onClick: function onClick() {
      return window.insights.chrome.createCase();
    },
    isDisabled: window.location.href.includes('/application-services') && !isRhosakEntitled
  }, {
    title: "".concat(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_12__.default.apiDocumentation)),
    url: "/docs/api",
    appId: 'apiDocs'
  }, {
    title: "".concat(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_12__.default.statusPage)),
    url: 'https://status.redhat.com/'
  }, {
    title: "".concat(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_12__.default.insightsRhelDocumentation)),
    url: "https://access.redhat.com/documentation/en-us/red_hat_insights/",
    isHidden: (0,_utils__WEBPACK_IMPORTED_MODULE_9__.getSection)() !== 'insights'
  }, {
    title: "".concat(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_12__.default.demoMode)),
    onClick: function onClick() {
      return js_cookie__WEBPACK_IMPORTED_MODULE_8__.default.set('cs_demo', 'true') && location.reload();
    },
    isHidden: !isDemoAcc
  }];
  /* Combine aboutMenuItems with a settings link on mobile */

  var mobileDropdownItems = [{
    title: 'separator'
  }, {
    url: settingsPath,
    title: 'Settings',
    target: '_self'
  }, {
    title: betaSwitcherTitle,
    onClick: function onClick() {
      return window.location = switchRelease((0,_utils__WEBPACK_IMPORTED_MODULE_9__.isBeta)(), window.location.pathname);
    }
  }, {
    title: 'separator'
  }].concat(aboutMenuDropdownItems);
  /* QuestionMark icon that should be used for "help/support" things */

  var AboutButton = function AboutButton() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ToolbarToggle__WEBPACK_IMPORTED_MODULE_5__.default, {
      key: "Help menu",
      icon: _patternfly_react_icons_dist_js_icons_question_circle_icon__WEBPACK_IMPORTED_MODULE_18__.default,
      id: "HelpMenu",
      ouiaId: "chrome-help",
      ariaLabel: "Help menu",
      hasToggleIndicator: null,
      dropdownItems: aboutMenuDropdownItems
    });
  };

  var ThemeToggle = function ThemeToggle() {
    var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(darkmode, false),
        _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState3, 2),
        darkmode = _useState4[0],
        setDarkmode = _useState4[1];

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Switch, {
      id: "no-label-switch-on",
      isChecked: darkmode || false,
      "aria-label": "Dark mode switch",
      onChange: function onChange() {
        setDarkmode(!darkmode);
        document.body.classList.contains('pf-theme-dark') ? document.body.classList.remove('pf-theme-dark') : document.body.classList.add('pf-theme-dark');
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, {
    className: "pf-m-icon-button-group pf-m-align-right pf-m-spacer-none pf-m-spacer-md-on-md pf-u-mr-0",
    alignment: {
      default: 'alignRight'
    },
    spaceItems: {
      default: 'spaceItemsNone'
    },
    "widget-type": "InsightsToolbar"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_9__.isBeta)() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.ToolbarItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Badge, {
    className: "chr-c-badge-beta"
  }, "beta")), localStorage.getItem('chrome:darkmode') === 'true' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.ToolbarItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ThemeToggle, null)), isInternal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.ToolbarItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(InternalButton, null)), !isSettingsDisabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.ToolbarItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(SettingsButton, {
    settingsMenuDropdownItems: settingsMenuDropdownItems
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(AboutButton, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.ToolbarItem, {
    visibility: {
      default: 'hidden',
      lg: 'visible'
    },
    className: "pf-u-mr-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_UserToggle__WEBPACK_IMPORTED_MODULE_4__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.ToolbarItem, {
    visibility: {
      lg: 'hidden'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_UserToggle__WEBPACK_IMPORTED_MODULE_4__.default, {
    isSmall: true,
    extraItems: mobileDropdownItems.map(function (action, key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        key: key
      }, action.title === 'separator' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Divider, {
        component: "li"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.DropdownItem, action.onClick ? {
        component: 'button',
        onClick: action.onClick
      } : {
        href: action.url,
        component: 'a',
        target: '_blank',
        rel: 'noopener noreferrer'
      }, action.title));
    })
  })), js_cookie__WEBPACK_IMPORTED_MODULE_8__.default.get('cs_toggledRelease') === 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_HeaderAlert__WEBPACK_IMPORTED_MODULE_6__.default, {
    title: "You're ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_9__.isBeta)() ? 'now' : 'no longer', " using the beta release."),
    onDismiss: function onDismiss() {
      return js_cookie__WEBPACK_IMPORTED_MODULE_8__.default.set('cs_toggledRelease', 'false');
    }
  }) : null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(Tools));

/***/ }),

/***/ "./src/js/App/Header/UnAuthtedHeader.js":
/*!**********************************************!*\
  !*** ./src/js/App/Header/UnAuthtedHeader.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login */ "./src/js/App/Header/Login.js");
/* harmony import */ var _HeaderAlert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderAlert */ "./src/js/App/Header/HeaderAlert.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Messages */ "./src/js/Messages.ts");







function Unauthed() {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.default)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login__WEBPACK_IMPORTED_MODULE_1__.default, null), js_cookie__WEBPACK_IMPORTED_MODULE_3__.default.get('cs_loggedOut') === 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HeaderAlert__WEBPACK_IMPORTED_MODULE_2__.default, {
    variant: "success",
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_4__.default.loggedOut),
    onDismiss: function onDismiss() {
      return js_cookie__WEBPACK_IMPORTED_MODULE_3__.default.set('cs_loggedOut', 'false');
    }
  }) : null);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Unauthed);

/***/ }),

/***/ "./src/js/App/Header/UserIcon.js":
/*!***************************************!*\
  !*** ./src/js/App/Header/UserIcon.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserIcon": () => (/* binding */ UserIcon),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?9cbb");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var UserIcon = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(UserIcon, _Component);

  var _super = _createSuper(UserIcon);

  function UserIcon(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, UserIcon);

    _this = _super.call(this, props);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "getImage", function (img) {
      if (img.width === 140) {
        _this.setState({
          avatar: img.src
        });
      }
    });

    _this.state = {
      account: _this.props.account,
      avatar: '/apps/chrome/assets/images/img_avatar.svg'
    };
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(UserIcon, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var img = new Image();
      img.src = "https://access.redhat.com/api/users/avatar/".concat(this.state.account.username, "/");

      img.onload = function () {
        return _this2.getImage(img);
      };
    }
  }, {
    key: "render",
    value: function render() {
      var avatar = this.state.avatar;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__.Avatar, {
        src: avatar,
        alt: "User Avatar"
      });
    }
  }]);

  return UserIcon;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component);
UserIcon.propTypes = {
  account: prop_types__WEBPACK_IMPORTED_MODULE_10___default().shape({
    username: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string)
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_9__.connect)(function (_ref) {
  var username = _ref.chrome.user.identity.user.username;
  return {
    account: {
      username: username
    }
  };
})(UserIcon));

/***/ }),

/***/ "./src/js/App/Header/UserToggle.js":
/*!*****************************************!*\
  !*** ./src/js/App/Header/UserToggle.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserToggle": () => (/* binding */ UserToggle),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?9cbb");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_question_circle_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/question-circle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/question-circle-icon.js");
/* harmony import */ var _UserIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserIcon */ "./src/js/App/Header/UserIcon.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./src/js/utils.ts");
/* harmony import */ var _Sidenav_Navigation_ChromeLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Sidenav/Navigation/ChromeLink */ "./src/js/App/Sidenav/Navigation/ChromeLink.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Messages */ "./src/js/Messages.ts");












var buildItems = function buildItems(username, isOrgAdmin) {
  var accountNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
  var isInternal = arguments.length > 3 ? arguments[3] : undefined;
  var extraItems = arguments.length > 4 ? arguments[4] : undefined;
  var env = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getEnv)();
  var isProd = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.isProd)();
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.default)();
  var prefix = isProd ? '' : "".concat(env === 'ci' ? 'qa' : env, ".");
  var accountNumberTooltip = "".concat(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__.default.useAccountNumber));
  return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.DropdownItem, {
    key: "Username",
    isDisabled: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("dl", {
    className: "chr-c-dropdown-item__stack"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("dt", {
    className: "chr-c-dropdown-item__stack--header"
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__.default.username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("dd", {
    className: "chr-c-dropdown-item__stack--value data-hj-suppress"
  }, username), isOrgAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("dd", {
    className: "chr-c-dropdown-item__stack--subValue"
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__.default.orgAdministrator)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    key: "account wrapper"
  }, accountNumber > -1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.DropdownItem, {
    key: "Account",
    isPlainText: true,
    className: "disabled-pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("dl", {
    className: "chr-c-dropdown-item__stack"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("dt", {
    className: "chr-c-dropdown-item__stack--header"
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__.default.accountNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "visible-pointer pf-u-ml-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
    id: "accountNumber-tooltip",
    content: accountNumberTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_icons_dist_js_icons_question_circle_icon__WEBPACK_IMPORTED_MODULE_9__.default, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("dd", {
    className: "chr-c-dropdown-item__stack--value"
  }, accountNumber), isInternal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("dd", {
    className: "chr-c-dropdown-item__stack--subValue"
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__.default.internalUser))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.DropdownSeparator, {
    key: "separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.DropdownItem, {
    key: "My Profile",
    href: "https://www.".concat(prefix, "redhat.com/wapps/ugc/protected/personalInfo.html"),
    target: "_blank",
    rel: "noopener noreferrer"
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__.default.myProfile)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    key: "My user access wrapper"
  }, accountNumber > -1 && (0,_utils__WEBPACK_IMPORTED_MODULE_5__.isBeta)() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.DropdownItem, {
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Sidenav_Navigation_ChromeLink__WEBPACK_IMPORTED_MODULE_6__.default, {
      href: "/settings/my-user-access",
      isBeta: (0,_utils__WEBPACK_IMPORTED_MODULE_5__.isBeta)(),
      appId: "rbac"
    }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__.default.myUserAccess)),
    key: "My user access"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    key: "user prefs wrapper"
  }, accountNumber > -1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.DropdownItem, {
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Sidenav_Navigation_ChromeLink__WEBPACK_IMPORTED_MODULE_6__.default, {
      href: "/user-preferences/email",
      isBeta: (0,_utils__WEBPACK_IMPORTED_MODULE_5__.isBeta)(),
      appId: "userPreferences"
    }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__.default.userPreferences)),
    key: "User preferences"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    key: "internal wrapper"
  }, isInternal && isProd && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.DropdownItem, {
    key: "Internal",
    href: "./internal"
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__.default.internal))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.DropdownItem, {
    key: "logout",
    component: "button",
    onClick: function onClick() {
      return window.insights.chrome.auth.logout(true);
    }
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__.default.logout)), extraItems];
};

var UserToggle = function UserToggle(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var onSelect = function onSelect() {
    setIsOpen(!isOpen);
  };

  var onToggle = function onToggle(isOpen) {
    setIsOpen(isOpen);
  };

  var account = props.account,
      isSmall = props.isSmall,
      extraItems = props.extraItems;
  var toggle = isSmall ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.KebabToggle, {
    onToggle: onToggle,
    className: "data-hj-suppress"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.DropdownToggle, {
    id: "UserMenu",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_UserIcon__WEBPACK_IMPORTED_MODULE_3__.default, null),
    className: "data-hj-suppress",
    "widget-type": "UserMenu",
    onToggle: onToggle
  }, account.name);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    position: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.DropdownPosition.right,
    "aria-label": "Overflow actions",
    ouiaId: "chrome-user-menu",
    onSelect: onSelect,
    toggle: toggle,
    className: "chr-c-dropdown-user-toggle",
    isOpen: isOpen,
    dropdownItems: buildItems(account.username, account.isOrgAdmin, account.number, account.isInternal, extraItems)
  });
};
UserToggle.propTypes = {
  account: prop_types__WEBPACK_IMPORTED_MODULE_10___default().shape({
    number: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_10___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string)]),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),
    username: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_10___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string)]),
    isOrgAdmin: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),
    isInternal: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool)
  }),
  isSmall: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),
  extraItems: prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_10___default().node))
};
UserToggle.defaultProps = {
  account: {
    number: 1,
    name: 'Foo'
  },
  isSmall: false,
  extraItems: []
};
/* eslint-disable camelcase */
// TODO update this to use account_id

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(function (_ref) {
  var _ref$chrome$user$iden = _ref.chrome.user.identity,
      accountNumber = _ref$chrome$user$iden.account_number,
      _ref$chrome$user$iden2 = _ref$chrome$user$iden.user,
      username = _ref$chrome$user$iden2.username,
      first_name = _ref$chrome$user$iden2.first_name,
      last_name = _ref$chrome$user$iden2.last_name,
      is_org_admin = _ref$chrome$user$iden2.is_org_admin,
      is_internal = _ref$chrome$user$iden2.is_internal;
  return {
    account: {
      number: accountNumber,
      username: username,
      isOrgAdmin: is_org_admin,
      isInternal: is_internal,
      name: "".concat(first_name, " ").concat(last_name)
    }
  };
})(UserToggle));
/* eslint-enable camelcase */

/***/ }),

/***/ "./src/js/App/IDPError/IDPError.js":
/*!*****************************************!*\
  !*** ./src/js/App/IDPError/IDPError.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?9cbb");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_exclamation_circle_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/exclamation-circle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/exclamation-circle-icon.js");
/* harmony import */ var _jwt_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jwt/jwt */ "./src/js/jwt/jwt.ts");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Messages */ "./src/js/Messages.ts");







var IDPError = function IDPError() {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.default)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Bullseye, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyState, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyStateIcon, {
    color: "var(--pf-global--danger-color--100)",
    icon: _patternfly_react_icons_dist_js_icons_exclamation_circle_icon__WEBPACK_IMPORTED_MODULE_5__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Title, {
    headingLevel: "h1",
    size: "lg"
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_3__.default.authFailure)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyStateBody, null, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_3__.default.accessRestricted)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: function onClick() {
      (0,_jwt_jwt__WEBPACK_IMPORTED_MODULE_2__.logoutAllTabs)(true);
    },
    variant: "primary"
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_3__.default.tryUsingDifferentAccount))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IDPError);

/***/ }),

/***/ "./src/js/App/QuickStart/LazyQuickStartCatalog.js":
/*!********************************************************!*\
  !*** ./src/js/App/QuickStart/LazyQuickStartCatalog.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyQuickStartCatalog": () => (/* binding */ LazyQuickStartCatalog)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/quickstarts */ "webpack/sharing/consume/default/@patternfly/quickstarts/@patternfly/quickstarts");
/* harmony import */ var _patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Messages */ "./src/js/Messages.ts");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var QuickStartCatalog = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.lazy)(function () {
  return __webpack_require__.e(/*! import() | quick-start */ "quick-start").then(__webpack_require__.bind(__webpack_require__, /*! ./QuickStartCatalog */ "./src/js/App/QuickStart/QuickStartCatalog.js"));
});
var LazyQuickStartCatalog = function LazyQuickStartCatalog(_ref) {
  var props = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, _ref);

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.default)();

  var propsWithDefaults = _objectSpread({
    title: "".concat(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_4__.default.quickStarts)),
    hint: "".concat(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_4__.default.learnHowTo)),
    showFilter: true
  }, props);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_3__.LoadingBox, null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(QuickStartCatalog, propsWithDefaults));
};

/***/ }),

/***/ "./src/js/App/QuickStart/useQuickstartsStates.js":
/*!*******************************************************!*\
  !*** ./src/js/App/QuickStart/useQuickstartsStates.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/quickstarts */ "webpack/sharing/consume/default/@patternfly/quickstarts/@patternfly/quickstarts");
/* harmony import */ var _patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils */ "./src/js/utils.ts");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var quickstartsSupported = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getEnv)() === 'stage' || (0,_utils__WEBPACK_IMPORTED_MODULE_7__.isBeta)() && (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getEnv)() === 'prod';
var statePersistor = quickstartsSupported ? react__WEBPACK_IMPORTED_MODULE_4__.useState : _patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_6__.useLocalStorage;
var initiStatesArgs = ['insights-quickstarts', {}];
var initialIdArgs = quickstartsSupported ? ['', ''] : [undefined];

var useQuickstartsStates = function useQuickstartsStates() {
  var accountId = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (_ref) {
    var _chrome$user, _chrome$user$identity, _chrome$user$identity2;

    var chrome = _ref.chrome;
    return chrome === null || chrome === void 0 ? void 0 : (_chrome$user = chrome.user) === null || _chrome$user === void 0 ? void 0 : (_chrome$user$identity = _chrome$user.identity) === null || _chrome$user$identity === void 0 ? void 0 : (_chrome$user$identity2 = _chrome$user$identity.internal) === null || _chrome$user$identity2 === void 0 ? void 0 : _chrome$user$identity2.account_id;
  });

  var _statePersistor = statePersistor.apply(void 0, initiStatesArgs),
      _statePersistor2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_statePersistor, 2),
      allQuickStartStates = _statePersistor2[0],
      setAllQuickStartStatesInternal = _statePersistor2[1];

  var _statePersistor3 = statePersistor.apply(void 0, initialIdArgs),
      _statePersistor4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_statePersistor3, 2),
      activeQuickStartID = _statePersistor4[0],
      setActiveQuickStartIDInternal = _statePersistor4[1];

  function setAllQuickStartStates() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!quickstartsSupported) {
      return setAllQuickStartStatesInternal.apply(void 0, args);
    }

    var value = args[0];
    var valueToStore = typeof value === 'function' ? value(allQuickStartStates) : value;
    var activeState = valueToStore[activeQuickStartID];

    if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__.default)(activeState) === 'object') {
      axios__WEBPACK_IMPORTED_MODULE_3___default().post('/api/quickstarts/v1/progress', {
        quickstartName: activeQuickStartID,
        accountId: parseInt(accountId),
        progress: activeState
      }).catch(function (err) {
        console.error("Unable to persis quickstart progress! ".concat(activeQuickStartID), err);
      });
    }

    setAllQuickStartStatesInternal(valueToStore);
  }

  function setActiveQuickStartID() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (!quickstartsSupported) {
      return setActiveQuickStartIDInternal.apply(void 0, args);
    }

    var id = args[0];
    id !== '' && typeof id !== 'function' ? document.body.classList.add('quickstarts-open') : document.body.classList.remove('quickstarts-open');
    setActiveQuickStartIDInternal(id);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (accountId) {
      axios__WEBPACK_IMPORTED_MODULE_3___default().get('/api/quickstarts/v1/progress', {
        params: {
          account: accountId
        }
      }).then(function (_ref2) {
        var data = _ref2.data.data;
        var states = data.reduce(function (acc, curr) {
          return _objectSpread(_objectSpread({}, acc), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, curr.quickstartName, curr.progress));
        }, {});
        setAllQuickStartStates(states);
      }).catch(function (error) {
        console.error(error);
      });
    }
  }, [accountId]);
  return {
    allQuickStartStates: allQuickStartStates,
    setAllQuickStartStates: setAllQuickStartStates,
    activeQuickStartID: activeQuickStartID,
    setActiveQuickStartID: setActiveQuickStartID
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useQuickstartsStates);

/***/ }),

/***/ "./src/js/App/RootApp/DefaultLayout.js":
/*!*********************************************!*\
  !*** ./src/js/App/RootApp/DefaultLayout.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _GlobalFilter_GlobalFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../GlobalFilter/GlobalFilter */ "./src/js/App/GlobalFilter/GlobalFilter.js");
/* harmony import */ var _scalprum_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @scalprum/react-core */ "webpack/sharing/consume/default/@scalprum/react-core/@scalprum/react-core");
/* harmony import */ var _scalprum_react_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scalprum_react_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?9cbb");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Header/Header */ "./src/js/App/Header/Header.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions */ "./src/js/redux/actions.ts");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Routes */ "./src/js/App/Routes/index.js");
/* harmony import */ var _utils_useOuiaTags__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/useOuiaTags */ "./src/js/utils/useOuiaTags.js");
/* harmony import */ var _Stratosphere_RedirectBanner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Stratosphere/RedirectBanner */ "./src/js/App/Stratosphere/RedirectBanner.tsx");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_bars_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/bars-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/bars-icon.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../Messages */ "./src/js/Messages.ts");
/* harmony import */ var _Sidenav_Navigation_Navigation_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Sidenav/Navigation/Navigation.scss */ "./src/js/App/Sidenav/Navigation/Navigation.scss");
/* harmony import */ var _DefaultLayout_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./DefaultLayout.scss */ "./src/js/App/RootApp/DefaultLayout.scss");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../consts */ "./src/js/consts.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../utils */ "./src/js/utils.ts");
























var ShieldedRoot = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function (_ref) {
  var hideNav = _ref.hideNav,
      insightsContentRef = _ref.insightsContentRef,
      isGlobalFilterEnabled = _ref.isGlobalFilterEnabled,
      initialized = _ref.initialized,
      Sidebar = _ref.Sidebar;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(window.document.body.clientWidth < 1200),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
      isMobileView = _useState2[0],
      setIsMobileView = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!isMobileView),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState3, 2),
      isNavOpen = _useState4[0],
      setIsNavOpen = _useState4[1];
  /**
   * Required for event listener to access the variables
   */


  var mutableStateRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({
    isMobileView: isMobileView
  });

  function navReziseListener() {
    var internalMobile = window.document.body.clientWidth < 1200;
    var isMobileView = mutableStateRef.current.isMobileView;

    if (!isMobileView && internalMobile) {
      setIsMobileView(true);
      setIsNavOpen(false);
      mutableStateRef.current = {
        isMobileView: true
      };
    } else if (isMobileView && !internalMobile) {
      setIsMobileView(false);
      setIsNavOpen(true);
      mutableStateRef.current = {
        isMobileView: false
      };
    }
  }

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_21__.default)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    window.addEventListener('resize', navReziseListener);
    return function () {
      window.removeEventListener('resize', navReziseListener);
    };
  }, []);

  if (!initialized) {
    return null;
  }

  var selectedAccountNumber = js_cookie__WEBPACK_IMPORTED_MODULE_10__.default.get(_consts__WEBPACK_IMPORTED_MODULE_19__.CROSS_ACCESS_ACCOUNT_NUMBER);
  var hasBanner = false; // Update this later when we use feature flags

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.Page, {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      'chr-c-page__hasBanner': hasBanner,
      'chr-c-page__account-banner': selectedAccountNumber
    }),
    onPageResize: null // required to disable PF resize observer that causes re-rendring issue
    ,
    header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.Masthead, {
      className: "chr-c-masthead"
    }, !hideNav && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.MastheadToggle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.PageToggleButton, {
      variant: "plain",
      "aria-label": "Global navigation",
      isNavOpen: isNavOpen,
      onNavToggle: function onNavToggle() {
        setIsNavOpen(function (prev) {
          return !prev;
        });
        dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_12__.onToggle)());
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_icons_dist_js_icons_bars_icon__WEBPACK_IMPORTED_MODULE_22__.default, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_9__.Header, null)),
    sidebar: hideNav ? undefined : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.PageSidebar, {
      isNavOpen: isNavOpen,
      id: "chr-c-sidebar",
      nav: Sidebar
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    ref: insightsContentRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('chr-render')
  }, isGlobalFilterEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_GlobalFilter_GlobalFilter__WEBPACK_IMPORTED_MODULE_5__.default, {
    key: (0,_utils__WEBPACK_IMPORTED_MODULE_20__.getUrl)('bundle')
  }), selectedAccountNumber && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "chr-viewing-as"
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_16__.default.viewingAsAccount, {
    selectedAccountNumber: selectedAccountNumber
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Stratosphere_RedirectBanner__WEBPACK_IMPORTED_MODULE_15__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Routes__WEBPACK_IMPORTED_MODULE_13__.default, {
    routesProps: {
      scopeClass: 'chr-scope__default-layout'
    },
    insightsContentRef: insightsContentRef
  })));
}, function (prevProps, nextProps) {
  return lodash_isEqual__WEBPACK_IMPORTED_MODULE_11___default()(prevProps, nextProps);
});
ShieldedRoot.propTypes = {
  hideNav: (prop_types__WEBPACK_IMPORTED_MODULE_23___default().bool),
  insightsContentRef: (prop_types__WEBPACK_IMPORTED_MODULE_23___default().object.isRequired),
  isGlobalFilterEnabled: (prop_types__WEBPACK_IMPORTED_MODULE_23___default().bool.isRequired),
  initialized: (prop_types__WEBPACK_IMPORTED_MODULE_23___default().bool),
  Sidebar: (prop_types__WEBPACK_IMPORTED_MODULE_23___default().element)
};
ShieldedRoot.defaultProps = {
  useLandingNav: false,
  hideNav: false,
  isGlobalFilterEnabled: false,
  initialized: false
};
ShieldedRoot.displayName = 'ShieldedRoot';

var isGlobalFilterAllowed = function isGlobalFilterAllowed() {
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_20__.getUrl)('bundle') === 'insights') {
    return true;
  }

  return (0,_utils__WEBPACK_IMPORTED_MODULE_20__.getUrl)('bundle') === 'ansible' && ['inventory', 'drift', 'advisor'].includes((0,_utils__WEBPACK_IMPORTED_MODULE_20__.getUrl)('app'));
};

var RootApp = function RootApp(_ref2) {
  var globalFilterHidden = _ref2.globalFilterHidden,
      Sidebar = _ref2.Sidebar;
  var ouiaTags = (0,_utils_useOuiaTags__WEBPACK_IMPORTED_MODULE_14__.default)();
  var initialized = (0,_scalprum_react_core__WEBPACK_IMPORTED_MODULE_6__.useScalprum)(function (_ref3) {
    var initialized = _ref3.initialized;
    return initialized;
  });

  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useLocation)(),
      pathname = _useLocation.pathname;

  var hideNav = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (_ref4) {
    var user = _ref4.chrome.user;
    return !user || !Sidebar;
  });
  /**
   * Using the chrome landing flag is not going to work because the appId is initialized inside the app.
   * We need the information before anything is rendered to determine if we use root module or render landing page.
   * This will be replaced once we can use react router for all pages. Landing page will have its own route.
   */

  var isLanding = pathname === '/';
  var globalFilterAllowed = !globalFilterHidden && isGlobalFilterAllowed();
  var isGlobalFilterEnabled = !isLanding && (globalFilterAllowed || Boolean(localStorage.getItem('chrome:experimental:global-filter')));
  var insightsContentRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    id: "chrome-app-render-root"
  }, ouiaTags), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ShieldedRoot, {
    isGlobalFilterEnabled: isGlobalFilterEnabled,
    hideNav: hideNav,
    insightsContentRef: insightsContentRef,
    initialized: initialized,
    Sidebar: Sidebar
  }));
};

RootApp.propTypes = {
  activeApp: (prop_types__WEBPACK_IMPORTED_MODULE_23___default().string),
  pageAction: (prop_types__WEBPACK_IMPORTED_MODULE_23___default().string),
  pageObjectId: prop_types__WEBPACK_IMPORTED_MODULE_23___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_23___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_23___default().number)]),
  globalFilterHidden: (prop_types__WEBPACK_IMPORTED_MODULE_23___default().bool),
  config: (prop_types__WEBPACK_IMPORTED_MODULE_23___default().any),
  Sidebar: (prop_types__WEBPACK_IMPORTED_MODULE_23___default().element)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RootApp);

/***/ }),

/***/ "./src/js/App/RootApp/IDPChecker.js":
/*!******************************************!*\
  !*** ./src/js/App/RootApp/IDPChecker.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/js/utils.ts");
/* harmony import */ var _IDPError_IDPError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../IDPError/IDPError */ "./src/js/App/IDPError/IDPError.js");







var IDPStatuses = {
  OK: 'OK',
  UNKNOWN: 'UNKNOWN',
  PENDING: 'PENDING',
  ERROR: 'ERROR'
};

var IDPChecker = function IDPChecker(_ref) {
  var children = _ref.children;
  var isFedrampEnv = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.isFedRamp)();
  var missingIDP = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (_ref2) {
    var chrome = _ref2.chrome;
    return chrome === null || chrome === void 0 ? void 0 : chrome.missingIDP;
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {
    if (isFedrampEnv) {
      return missingIDP === true ? IDPStatuses.ERROR : IDPStatuses.UNKNOWN;
    }

    return IDPStatuses.OK;
  }),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      status = _useState2[0],
      setStatus = _useState2[1];

  var hasUser = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (_ref3) {
    var user = _ref3.chrome.user;
    return Object.keys(user || {}).length > 0;
  });
  var allowStateChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(isFedrampEnv);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (isFedrampEnv && status !== IDPStatuses.PENDING && hasUser) {
      allowStateChange.current && setStatus(IDPStatuses.PENDING);
      axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/entitlements/v1/services').then(function () {
        allowStateChange.current && setStatus(IDPStatuses.OK);
      }).catch(function (err) {
        var authError = err.response.status === 403 && err.message === 'Insights authorization failed - account number not in allow list';
        allowStateChange.current && setStatus(authError ? IDPStatuses.ERROR : IDPStatuses.OK);
      });
    }
  }, [hasUser, missingIDP]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (missingIDP === true) {
      allowStateChange.current && setStatus(IDPStatuses.ERROR);
      allowStateChange.current = false;
    }
  }, [missingIDP]);

  if (status === IDPStatuses.OK) {
    return children;
  }

  if (status === IDPStatuses.ERROR) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_IDPError_IDPError__WEBPACK_IMPORTED_MODULE_5__.default, null);
  }

  return null;
};

IDPChecker.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IDPChecker);

/***/ }),

/***/ "./src/js/App/RootApp/RootApp.js":
/*!***************************************!*\
  !*** ./src/js/App/RootApp/RootApp.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/quickstarts */ "webpack/sharing/consume/default/@patternfly/quickstarts/@patternfly/quickstarts");
/* harmony import */ var _patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/js/utils.ts");
/* harmony import */ var _utils_chromeHistory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/chromeHistory */ "./src/js/utils/chromeHistory.ts");
/* harmony import */ var _FeatureFlags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FeatureFlags */ "./src/js/App/FeatureFlags/index.ts");
/* harmony import */ var _IDPChecker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IDPChecker */ "./src/js/App/RootApp/IDPChecker.js");
/* harmony import */ var _ScalprumRoot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ScalprumRoot */ "./src/js/App/RootApp/ScalprumRoot.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _QuickStart_useQuickstartsStates__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../QuickStart/useQuickstartsStates */ "./src/js/App/QuickStart/useQuickstartsStates.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions */ "./src/js/redux/actions.ts");
/* harmony import */ var _QuickStart_LazyQuickStartCatalog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../QuickStart/LazyQuickStartCatalog */ "./src/js/App/QuickStart/LazyQuickStartCatalog.js");
/* harmony import */ var _QuickStart_useHelpTopicState__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../QuickStart/useHelpTopicState */ "./src/js/App/QuickStart/useHelpTopicState.ts");
/* harmony import */ var _analytics_segment_analytics__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../analytics/segment-analytics */ "./src/js/App/analytics/segment-analytics.tsx");
















var RootApp = function RootApp(props) {
  var _useQuickstartsStates = (0,_QuickStart_useQuickstartsStates__WEBPACK_IMPORTED_MODULE_10__.default)(),
      allQuickStartStates = _useQuickstartsStates.allQuickStartStates,
      setAllQuickStartStates = _useQuickstartsStates.setAllQuickStartStates,
      activeQuickStartID = _useQuickstartsStates.activeQuickStartID,
      setActiveQuickStartID = _useQuickstartsStates.setActiveQuickStartID;

  var _useHelpTopicState = (0,_QuickStart_useHelpTopicState__WEBPACK_IMPORTED_MODULE_13__.default)(),
      helpTopics = _useHelpTopicState.helpTopics,
      addHelpTopics = _useHelpTopicState.addHelpTopics,
      disableTopics = _useHelpTopicState.disableTopics,
      enableTopics = _useHelpTopicState.enableTopics;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
  var activeModule = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (_ref) {
    var activeModule = _ref.chrome.activeModule;
    return activeModule;
  });
  var quickStarts = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (_ref2) {
    var quickstarts = _ref2.chrome.quickstarts.quickstarts;
    return Object.values(quickstarts).flat();
  });
  /**
   * Updates the available quick starts
   *
   * Usage example:
   * const { quickStarts } = useChrome();
   * quickStarts.set('applicationServices', quickStartsArray)
   *
   * @param {string} key App identifier
   * @param {array} qs Array of quick starts
   */

  var updateQuickStarts = function updateQuickStarts(key, qs) {
    dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_11__.populateQuickstartsCatalog)(key, qs));
  };

  var quickStartProps = {
    quickStarts: quickStarts,
    activeQuickStartID: activeQuickStartID,
    allQuickStartStates: allQuickStartStates,
    setActiveQuickStartID: setActiveQuickStartID,
    setAllQuickStartStates: setAllQuickStartStates,
    showCardFooters: false,
    language: 'en',
    alwaysShowTaskReview: true
  };
  var helpTopicsAPI = {
    addHelpTopics: addHelpTopics,
    disableTopics: disableTopics,
    enableTopics: enableTopics
  };
  var quickstartsAPI = {
    version: 1,
    set: updateQuickStarts,
    toggle: setActiveQuickStartID,
    Catalog: _QuickStart_LazyQuickStartCatalog__WEBPACK_IMPORTED_MODULE_12__.LazyQuickStartCatalog
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Router, {
    history: _utils_chromeHistory__WEBPACK_IMPORTED_MODULE_5__.default,
    basename: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.isBeta)() ? '/beta' : '/'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_analytics_segment_analytics__WEBPACK_IMPORTED_MODULE_14__.SegmentProvider, {
    activeModule: activeModule
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_FeatureFlags__WEBPACK_IMPORTED_MODULE_6__.FeatureFlagsProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_IDPChecker__WEBPACK_IMPORTED_MODULE_7__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_3__.QuickStartContainer, quickStartProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_3__.HelpTopicContainer, {
    helpTopics: helpTopics
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ScalprumRoot__WEBPACK_IMPORTED_MODULE_8__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props, {
    helpTopics: helpTopics,
    quickstartsAPI: quickstartsAPI,
    helpTopicsAPI: helpTopicsAPI
  }))))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RootApp);

/***/ }),

/***/ "./src/js/App/RootApp/ScalprumRoot.js":
/*!********************************************!*\
  !*** ./src/js/App/RootApp/ScalprumRoot.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _scalprum_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @scalprum/react-core */ "webpack/sharing/consume/default/@scalprum/react-core/@scalprum/react-core");
/* harmony import */ var _scalprum_react_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scalprum_react_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/quickstarts */ "webpack/sharing/consume/default/@patternfly/quickstarts/@patternfly/quickstarts");
/* harmony import */ var _patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _DefaultLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DefaultLayout */ "./src/js/App/RootApp/DefaultLayout.js");
/* harmony import */ var _Sidenav_Navigation_Loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Sidenav/Navigation/Loader */ "./src/js/App/Sidenav/Navigation/Loader.tsx");
/* harmony import */ var _Feedback__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Feedback */ "./src/js/App/Feedback/index.ts");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../redux/actions */ "./src/js/redux/actions.ts");
/* harmony import */ var _utils_historyListener__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/historyListener */ "./src/js/utils/historyListener.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils */ "./src/js/utils.ts");
/* harmony import */ var _analytics_segment_analytics__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../analytics/segment-analytics */ "./src/js/App/analytics/segment-analytics.tsx");
/* harmony import */ var _utils_loading_fallback__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/loading-fallback */ "./src/js/utils/loading-fallback.js");
/* harmony import */ var _utils_isAnsibleTrialFlagActive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../utils/isAnsibleTrialFlagActive */ "./src/js/utils/isAnsibleTrialFlagActive.ts");





var _excluded = ["config", "helpTopicsAPI", "quickstartsAPI"];


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
















var Navigation = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_6__.lazy)(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-router_esm_react-router_js"), __webpack_require__.e("src_js_App_Sidenav_Navigation_componentMapper_js"), __webpack_require__.e("src_js_App_Sidenav_Navigation_index_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../Sidenav/Navigation */ "./src/js/App/Sidenav/Navigation/index.js"));
});
var LandingNav = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_6__.lazy)(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-router_esm_react-router_js"), __webpack_require__.e("src_js_App_Sidenav_Navigation_componentMapper_js"), __webpack_require__.e("src_js_App_Sidenav_LandingNav_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../Sidenav/LandingNav */ "./src/js/App/Sidenav/LandingNav.js"));
});
var ProductSelection = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_6__.lazy)(function () {
  return __webpack_require__.e(/*! import() */ "src_js_App_Stratosphere_ProductSelection_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../Stratosphere/ProductSelection */ "./src/js/App/Stratosphere/ProductSelection.tsx"));
});

var loaderWrapper = function loaderWrapper(Component) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react__WEBPACK_IMPORTED_MODULE_6__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_Sidenav_Navigation_Loader__WEBPACK_IMPORTED_MODULE_12__.default, null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(Component, props));
};

var useGlobalFilter = function useGlobalFilter(callback) {
  var selectedTags = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (_ref) {
    var selectedTags = _ref.globalFilter.selectedTags;
    return selectedTags;
  }, react_redux__WEBPACK_IMPORTED_MODULE_8__.shallowEqual);
  return callback(selectedTags);
};

var ScalprumRoot = function ScalprumRoot(_ref2) {
  var config = _ref2.config,
      helpTopicsAPI = _ref2.helpTopicsAPI,
      quickstartsAPI = _ref2.quickstartsAPI,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__.default)(_ref2, _excluded);

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_10__.HelpTopicContext),
      setActiveHelpTopicByName = _useContext.setActiveHelpTopicByName,
      helpTopics = _useContext.helpTopics,
      activeHelpTopic = _useContext.activeHelpTopic;

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_analytics_segment_analytics__WEBPACK_IMPORTED_MODULE_17__.SegmentContext),
      analytics = _useContext2.analytics;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useState, 2),
      activeTopicName = _useState2[0],
      setActiveTopicName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(activeHelpTopic === null || activeHelpTopic === void 0 ? void 0 : activeHelpTopic.name),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useState3, 2),
      prevActiveTopic = _useState4[0],
      setPrevActiveTopic = _useState4[1];

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useHistory)();
  var globalFilterRemoved = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (_ref3) {
    var globalFilterRemoved = _ref3.globalFilter.globalFilterRemoved;
    return globalFilterRemoved;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();

  function setActiveTopic(_x) {
    return _setActiveTopic.apply(this, arguments);
  }

  function _setActiveTopic() {
    _setActiveTopic = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee(name) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setActiveTopicName(name);

              if ((name === null || name === void 0 ? void 0 : name.length) > 0) {
                helpTopicsAPI.enableTopics(name);
              }

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _setActiveTopic.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    var unregister = history.listen(_utils_historyListener__WEBPACK_IMPORTED_MODULE_15__.default);
    return function () {
      if (typeof unregister === 'function') {
        return unregister();
      }
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    /**
     * We can't call the setActiveHelpTopicByName directly after we populate the context with new value
     * The quickstarts module returns a undefined value
     * TODO: Fix it in the quickstarts repository
     */
    if (prevActiveTopic && activeHelpTopic === null) {
      setActiveTopic('');
      setPrevActiveTopic();
    } else {
      if ((activeTopicName === null || activeTopicName === void 0 ? void 0 : activeTopicName.length) > 0) {
        if (helpTopics.find(function (_ref4) {
          var name = _ref4.name;
          return name === activeTopicName;
        })) {
          setActiveHelpTopicByName(activeTopicName);
          setPrevActiveTopic(activeTopicName);
        }
      } else {
        setActiveHelpTopicByName('');
        setPrevActiveTopic();
      }
    }
  }, [activeTopicName, helpTopics, activeHelpTopic]);
  var setPageMetadata = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function (pageOptions) {
    window._segment = _objectSpread(_objectSpread({}, window._segment), {}, {
      pageOptions: pageOptions
    });
  }, []);
  return (
    /*#__PURE__*/

    /**
     * Once all applications are migrated to chrome 2:
     * - define chrome API in chrome root after it mounts
     * - copy these functions to window
     * - add deprecation warning to the window functions
     */
    react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_scalprum_react_core__WEBPACK_IMPORTED_MODULE_7__.ScalprumProvider, {
      config: config,
      api: {
        chrome: _objectSpread(_objectSpread({
          experimentalApi: true
        }, window.insights.chrome), {}, {
          isFedramp: (0,_utils__WEBPACK_IMPORTED_MODULE_16__.isFedRamp)(),
          usePendoFeedback: _Feedback__WEBPACK_IMPORTED_MODULE_13__.usePendoFeedback,
          segment: {
            setPageMetadata: setPageMetadata
          },
          toggleFeedbackModal: function toggleFeedbackModal() {
            return dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_14__.toggleFeedbackModal.apply(void 0, arguments));
          },
          quickStarts: quickstartsAPI,
          helpTopics: _objectSpread(_objectSpread({}, helpTopicsAPI), {}, {
            setActiveTopic: setActiveTopic,
            closeHelpTopic: function closeHelpTopic() {
              setActiveTopic('');
            }
          }),
          clearAnsibleTrialFlag: _utils_isAnsibleTrialFlagActive__WEBPACK_IMPORTED_MODULE_19__.clearAnsibleTrialFlag,
          isAnsibleTrialFlagActive: _utils_isAnsibleTrialFlagActive__WEBPACK_IMPORTED_MODULE_19__.isAnsibleTrialFlagActive,
          setAnsibleTrialFlag: _utils_isAnsibleTrialFlagActive__WEBPACK_IMPORTED_MODULE_19__.setAnsibleTrialFlag,
          chromeHistory: history,
          analytics: analytics,
          useGlobalFilter: useGlobalFilter
        })
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      exact: true,
      path: "/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_DefaultLayout__WEBPACK_IMPORTED_MODULE_11__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      Sidebar: loaderWrapper(LandingNav)
    }, props, {
      globalFilterRemoved: globalFilterRemoved
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      exact: true,
      path: "/connect/products"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react__WEBPACK_IMPORTED_MODULE_6__.Suspense, {
      fallback: _utils_loading_fallback__WEBPACK_IMPORTED_MODULE_18__.default
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(ProductSelection, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      path: "/connect"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_DefaultLayout__WEBPACK_IMPORTED_MODULE_11__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props, {
      globalFilterRemoved: globalFilterRemoved
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      path: "/security"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_DefaultLayout__WEBPACK_IMPORTED_MODULE_11__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props, {
      globalFilterRemoved: globalFilterRemoved
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_DefaultLayout__WEBPACK_IMPORTED_MODULE_11__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      Sidebar: loaderWrapper(Navigation)
    }, props, {
      globalFilterRemoved: globalFilterRemoved
    })))))
  );
};

ScalprumRoot.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().any),
  helpTopicsAPI: prop_types__WEBPACK_IMPORTED_MODULE_20___default().shape({
    addHelpTopics: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().func.isRequired),
    disableTopics: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().func.isRequired),
    enableTopics: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().func.isRequired)
  }).isRequired,
  quickstartsAPI: prop_types__WEBPACK_IMPORTED_MODULE_20___default().shape({
    version: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().number.isRequired),
    set: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().func.isRequired),
    toggle: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().func.isRequired),
    Catalog: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().elementType.isRequired)
  }).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScalprumRoot);

/***/ }),

/***/ "./src/js/App/RootApp/index.js":
/*!*************************************!*\
  !*** ./src/js/App/RootApp/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _RootApp__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _RootApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RootApp */ "./src/js/App/RootApp/RootApp.js");


/***/ }),

/***/ "./src/js/App/Routes/ChromeRoute.js":
/*!******************************************!*\
  !*** ./src/js/App/Routes/ChromeRoute.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _scalprum_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scalprum/react-core */ "webpack/sharing/consume/default/@scalprum/react-core/@scalprum/react-core");
/* harmony import */ var _scalprum_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scalprum_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_loading_fallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/loading-fallback */ "./src/js/utils/loading-fallback.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions */ "./src/js/redux/actions.ts");
/* harmony import */ var _ErrorComponents_DefaultErrorComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ErrorComponents/DefaultErrorComponent */ "./src/js/App/ErrorComponents/DefaultErrorComponent.tsx");
/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../analytics */ "./src/js/analytics.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/quickstarts */ "webpack/sharing/consume/default/@patternfly/quickstarts/@patternfly/quickstarts");
/* harmony import */ var _patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ErrorComponents_GatewayErrorComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ErrorComponents/GatewayErrorComponent */ "./src/js/App/ErrorComponents/GatewayErrorComponent.tsx");


var _excluded = ["scope", "module", "insightsContentRef", "scopeClass"];











 // eslint-disable-next-line react/display-name

var ChromeRoute = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(function (_ref) {
  var scope = _ref.scope,
      module = _ref.module,
      insightsContentRef = _ref.insightsContentRef,
      scopeClass = _ref.scopeClass,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, _excluded);

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_11__.HelpTopicContext),
      setActiveHelpTopicByName = _useContext.setActiveHelpTopicByName;

  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (_ref2) {
    var user = _ref2.chrome.user;
    return user;
  });
  var gatewayError = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (_ref3) {
    var gatewayError = _ref3.chrome.gatewayError;
    return gatewayError;
  });
  /**
   * If default title was not set, use module scope (appId)
   */

  var defaultTitle = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (_ref4) {
    var _modules$scope;

    var modules = _ref4.chrome.modules;
    return (modules === null || modules === void 0 ? void 0 : (_modules$scope = modules[scope]) === null || _modules$scope === void 0 ? void 0 : _modules$scope.defaultDocumentTitle) || scope;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.batch)(function () {
      dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_7__.changeActiveModule)(scope));
      /**
       * Default document title update. If application won't update its title chrome sets a title using module config
       */

      dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_7__.updateDocumentTitle)(defaultTitle));
    });
    /**
     * update pendo metadata on application change
     */

    try {
      var _window, _window$pendo;

      (_window = window) === null || _window === void 0 ? void 0 : (_window$pendo = _window.pendo) === null || _window$pendo === void 0 ? void 0 : _window$pendo.updateOptions((0,_analytics__WEBPACK_IMPORTED_MODULE_9__.getPendoConf)(user));
    } catch (error) {
      console.error('Unable to update pendo options');
      console.error(error);
    }
    /**
     * TODO: Discuss default close feature of topics
     * Topics drawer has no close button, therefore there might be an issue with opened topics after user changes route and does not clear the active topic trough the now non existing elements.
     */


    setActiveHelpTopicByName && setActiveHelpTopicByName('');
    return function () {
      /**
       * Reset global filter when switching application
       */
      dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_7__.toggleGlobalFilter)(false));
    };
  }, [scope]);

  if (gatewayError) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_ErrorComponents_GatewayErrorComponent__WEBPACK_IMPORTED_MODULE_12__.default, {
      error: gatewayError
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    key: props.path
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(scopeClass, scope)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_scalprum_react_core__WEBPACK_IMPORTED_MODULE_2__.ScalprumComponent, {
    ErrorComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_ErrorComponents_DefaultErrorComponent__WEBPACK_IMPORTED_MODULE_8__.default, null),
    appName: scope,
    fallback: _utils_loading_fallback__WEBPACK_IMPORTED_MODULE_5__.default,
    LoadingFallback: _utils_loading_fallback__WEBPACK_IMPORTED_MODULE_5__.default,
    scope: scope,
    module: module
  })));
}, // prevent unecessary re-render that can trigger initialization phase of a module
function (prevProps, nextProps) {
  return prevProps.scope === nextProps.scope && prevProps.module === nextProps.module && prevProps.scopeClass === nextProps.scopeClass && prevProps.path === nextProps.path;
});
ChromeRoute.propTypes = {
  scope: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string.isRequired),
  module: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string),
  path: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string.isRequired),
  exact: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),
  insightsContentRef: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object.isRequired),
  scopeClass: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChromeRoute);

/***/ }),

/***/ "./src/js/App/Routes/NotFoundRoute.js":
/*!********************************************!*\
  !*** ./src/js/App/Routes/NotFoundRoute.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?9cbb");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redhat_cloud_services_frontend_components_InvalidObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/InvalidObject */ "./node_modules/@redhat-cloud-services/frontend-components/esm/InvalidObject/InvalidObject.js");




var NotFoundRoute = function NotFoundRoute() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyState, {
    id: "not-found"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyStateBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_InvalidObject__WEBPACK_IMPORTED_MODULE_2__.default, null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundRoute);

/***/ }),

/***/ "./src/js/App/Routes/index.js":
/*!************************************!*\
  !*** ./src/js/App/Routes/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ChromeRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChromeRoute */ "./src/js/App/Routes/ChromeRoute.js");
/* harmony import */ var _NotFoundRoute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NotFoundRoute */ "./src/js/App/Routes/NotFoundRoute.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./src/js/utils.ts");
/* harmony import */ var _utils_loading_fallback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/loading-fallback */ "./src/js/utils/loading-fallback.js");









var QuickstartCatalogRoute = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(function () {
  return __webpack_require__.e(/*! import() */ "src_js_App_Routes_QuickstartsCatalogRoute_js").then(__webpack_require__.bind(__webpack_require__, /*! ./QuickstartsCatalogRoute */ "./src/js/App/Routes/QuickstartsCatalogRoute.js"));
});
var redirects = [{
  path: '/insights',
  to: '/insights/dashboard'
}, {
  path: '/docs',
  to: '/api/docs'
}];

var Routes = function Routes(_ref) {
  var insightsContentRef = _ref.insightsContentRef,
      routesProps = _ref.routesProps;
  var moduleRoutes = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (_ref2) {
    var moduleRoutes = _ref2.chrome.moduleRoutes;
    return moduleRoutes;
  });
  var showBundleCatalog = localStorage.getItem('chrome:experimental:quickstarts') === 'true';
  var list = moduleRoutes;

  if ((0,_utils__WEBPACK_IMPORTED_MODULE_6__.isFedRamp)()) {
    list = list.filter(function (list) {
      return list.isFedramp;
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Switch, null, showBundleCatalog && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    exact: true,
    path: "/([^\\/]+)/quickstarts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
    fallback: _utils_loading_fallback__WEBPACK_IMPORTED_MODULE_7__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(QuickstartCatalogRoute, null))), redirects.map(function (_ref3) {
    var path = _ref3.path,
        to = _ref3.to;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
      key: path,
      exact: true,
      path: path
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Redirect, {
      to: to
    }));
  }), list.map(function (app) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ChromeRoute__WEBPACK_IMPORTED_MODULE_4__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      insightsContentRef: insightsContentRef,
      key: app.path
    }, routesProps, app));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_NotFoundRoute__WEBPACK_IMPORTED_MODULE_5__.default, null)));
};

Routes.propTypes = {
  insightsContentRef: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  routesProps: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);

/***/ }),

/***/ "./src/js/analytics.js":
/*!*****************************!*\
  !*** ./src/js/analytics.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPendoConf": () => (/* binding */ getPendoConf),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toArray */ "./node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _jwt_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt/logger */ "./src/js/jwt/logger.ts");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/js/utils.ts");







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var log = (0,_jwt_logger__WEBPACK_IMPORTED_MODULE_4__.default)('Analytics.js');
var API_KEY = 'bde62396-720d-45b5-546a-e02df377a965';

function initPendo(pendoConf) {
  window.pendo.initialize(pendoConf);
}

function isInternalFlag(email, isInternal) {
  if (email.includes('redhat') || isInternal) {
    return '_redhat';
  }

  if (email.includes('ibm')) {
    return '_ibm';
  }

  return '';
}

function getUrl(type) {
  if (window.location.pathname === ('/beta' || 0)) {
    return 'landing';
  }

  var sections = window.location.pathname.split('/').slice(1);
  var isBetaEnv = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.isBeta)();

  if (type) {
    if (isBetaEnv) {
      return type === 'bundle' ? sections[1] : sections[2];
    }

    return type === 'bundle' ? sections[0] : sections[1];
  }

  isBetaEnv && sections.shift();
  return [isBetaEnv].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(sections));
}

function getAdobeVisitorId() {
  var visitor = lodash_get__WEBPACK_IMPORTED_MODULE_5___default()('window.s.visitor', false);

  if (visitor) {
    return visitor.getMarketingCloudVisitorID();
  }

  return -1;
}

function getPendoConf(data) {
  var userID = "".concat(data.identity.internal.account_id).concat(isInternalFlag(data.identity.user.email, data.identity.user.is_internal));
  var entitlements = {};
  data.entitlements && Object.entries(data.entitlements).forEach(function (_ref) {
    var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    entitlements["entitlements_".concat(key)] = value.is_entitled;
    entitlements["entitlements_".concat(key, "_trial")] = value.is_trial;
  });

  var _getUrl = getUrl(),
      _getUrl2 = (0,_babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_1__.default)(_getUrl),
      isBeta = _getUrl2[0],
      currentBundle = _getUrl2[1],
      currentApp = _getUrl2[2],
      rest = _getUrl2.slice(3);

  return {
    visitor: _objectSpread(_objectSpread({
      id: userID,
      // Here we want to store this separately
      // even if its duplicative... just to be extra sure
      // in case another we property overrides account_num account_id
      cloud_user_id: userID,
      adobe_cloud_visitor_id: getAdobeVisitorId(),
      internal: data.identity.user.is_internal,
      lang: data.identity.user.locale,
      isOrgAdmin: data.identity.user.is_org_admin,
      currentBundle: currentBundle,
      currentApp: currentApp,
      isBeta: isBeta,
      urlSegment1: currentBundle,
      urlSegment2: currentApp
    }, rest === null || rest === void 0 ? void 0 : rest.reduce(function (acc, curr, id) {
      return _objectSpread(_objectSpread({}, acc), curr && (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, "urlSegment".concat(id + 3), curr));
    }, {})), entitlements),
    account: {
      // TODO add in customer name as name:
      // here if/when we get that in the JWT
      id: data.identity.account_number,
      account_number: data.identity.account_number,
      // The EBS id
      account_id: data.identity.internal.org_id,
      // The internal RH org id
      // Here we want to store this separately
      // even if its duplicative... just to be extra sure
      // in case another we property overrides account_num account_id
      cloud_org_id: data.identity.internal.org_id,
      cloud_ebs_id: data.identity.account_number
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (data) {
  // eslint-disable-next-line
  (function (p, e, n, d, o) {
    var v, w, x, y, z;
    o = p[d] = p[d] || {};
    o._q = [];
    v = ['initialize', 'identify', 'updateOptions', 'pageLoad'];

    for (w = 0, x = v.length; w < x; ++w) {
      (function (m) {
        o[m] = o[m] || function () {
          o._q[m === v[0] ? 'unshift' : 'push']([m].concat([].slice.call(arguments, 0)));
        };
      })(v[w]);
    }

    y = e.createElement(n);

    y.onerror = function (error) {
      console.error('Pendo blocked');
    };

    y.async = !0;
    y.src = "https://content.analytics.console.redhat.com/agent/static/".concat(API_KEY, "/pendo.js");
    z = e.getElementsByTagName(n)[0];
    z.parentNode.insertBefore(y, z);
  })(window, document, 'script', 'pendo');

  try {
    initPendo(getPendoConf(data));
    log('Pendo initialized');
  } catch (_unused) {
    log('Pendo init failed');
  }
});

/***/ }),

/***/ "./src/js/bootstrap.js":
/*!*****************************!*\
  !*** ./src/js/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "webpack/sharing/consume/default/react-dom/react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/provider.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-intl */ "./node_modules/@formatjs/intl/lib/src/error.js");
/* harmony import */ var _redux_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux-config */ "./src/js/redux-config.ts");
/* harmony import */ var _App_RootApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App/RootApp */ "./src/js/App/RootApp/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redux/actions */ "./src/js/redux/actions.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./consts */ "./src/js/consts.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth */ "./src/js/auth.ts");
/* harmony import */ var _sentry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sentry */ "./src/js/sentry.ts");
/* harmony import */ var _chrome_create_chrome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chrome/create-chrome */ "./src/js/chrome/create-chrome.ts");
/* harmony import */ var _url_observer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./url-observer */ "./src/js/url-observer.ts");
/* harmony import */ var _utils_ts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils */ "./src/js/utils.ts");
/* harmony import */ var _locales_data_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../locales/data.json */ "./src/locales/data.json");
/* harmony import */ var _App_ErrorBoundary__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./App/ErrorBoundary */ "./src/js/App/ErrorBoundary.js");


var _spinUpStore;


















var language = navigator.language.slice(0, 2) || 'en';

var initializeAccessRequestCookies = function initializeAccessRequestCookies() {
  var initialAccount = localStorage.getItem(_consts__WEBPACK_IMPORTED_MODULE_8__.ACTIVE_REMOTE_REQUEST);

  if (js_cookie__WEBPACK_IMPORTED_MODULE_7__.default.get(_consts__WEBPACK_IMPORTED_MODULE_8__.CROSS_ACCESS_ACCOUNT_NUMBER) && initialAccount) {
    try {
      var _JSON$parse = JSON.parse(initialAccount),
          end_date = _JSON$parse.end_date;
      /**
       * Remove cross account request if it is expired
       */


      if (new Date(end_date).getTime() <= Date.now()) {
        (0,_auth__WEBPACK_IMPORTED_MODULE_9__.crossAccountBouncer)();
      }
    } catch (_unused) {
      console.log('Unable to parse initial account. Using default account');
      js_cookie__WEBPACK_IMPORTED_MODULE_7__.default.remove(_consts__WEBPACK_IMPORTED_MODULE_8__.CROSS_ACCESS_ACCOUNT_NUMBER);
    }
  }
};

var libjwtSetup = function libjwtSetup(chromeConfig, setReadyState) {
  var libjwt = (0,_auth__WEBPACK_IMPORTED_MODULE_9__.default)(chromeConfig || {});
  libjwt.initPromise.then(function () {
    return libjwt.jwt.getUserInfo().then(function () {
      _sentry__WEBPACK_IMPORTED_MODULE_10__.default.apply(void 0, arguments);
      setReadyState(true);
    }).catch(_utils_ts__WEBPACK_IMPORTED_MODULE_13__.noop);
  });
  return libjwt;
};

var App = function App() {
  var modules = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (_ref) {
    var chrome = _ref.chrome;
    return chrome === null || chrome === void 0 ? void 0 : chrome.modules;
  });
  var scalprumConfig = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (_ref2) {
    var chrome = _ref2.chrome;
    return chrome === null || chrome === void 0 ? void 0 : chrome.scalprumConfig;
  });
  var documentTitle = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (_ref3) {
    var chrome = _ref3.chrome;
    return chrome === null || chrome === void 0 ? void 0 : chrome.documentTitle;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      jwtState = _useState2[0],
      setJwtState = _useState2[1];

  var store = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useStore)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    (0,_utils_ts__WEBPACK_IMPORTED_MODULE_13__.loadFedModules)().then(function (_ref4) {
      var data = _ref4.data;
      var chromeConfig = data.chrome;
      dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_6__.loadModulesSchema)(data));
      initializeAccessRequestCookies();
      var libjwt = libjwtSetup((chromeConfig === null || chromeConfig === void 0 ? void 0 : chromeConfig.config) || chromeConfig, setJwtState);
      window.insights = (0,_chrome_create_chrome__WEBPACK_IMPORTED_MODULE_11__.default)(libjwt, window.insights, data, store);
    });

    if (typeof _satellite !== 'undefined' && typeof window._satellite.pageBottom === 'function') {
      window._satellite.pageBottom();

      (0,_url_observer__WEBPACK_IMPORTED_MODULE_12__.default)(window._satellite.pageBottom);
    }

    (0,_utils_ts__WEBPACK_IMPORTED_MODULE_13__.trustarcScriptSetup)();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var title = typeof documentTitle === 'string' ? "".concat(documentTitle, " | ") : '';
    document.title = "".concat(title, "console.redhat.com");
  }, [documentTitle]);
  return modules && scalprumConfig && jwtState ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_App_RootApp__WEBPACK_IMPORTED_MODULE_5__.default, {
    config: scalprumConfig
  }) : null;
};

react_dom__WEBPACK_IMPORTED_MODULE_2___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__.default, {
  locale: language,
  messages: _locales_data_json__WEBPACK_IMPORTED_MODULE_14__[language],
  onError: function onError(error) {
    if ((0,_utils_ts__WEBPACK_IMPORTED_MODULE_13__.getEnv)() === 'stage' && !window.location.origin.includes('foo') || localStorage.getItem('chrome:intl:debug') === 'true' || !(error.code === react_intl__WEBPACK_IMPORTED_MODULE_17__.IntlErrorCode.MISSING_TRANSLATION)) {
      console.error(error);
    }
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
  store: (_spinUpStore = (0,_redux_config__WEBPACK_IMPORTED_MODULE_4__.spinUpStore)()) === null || _spinUpStore === void 0 ? void 0 : _spinUpStore.store
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_App_ErrorBoundary__WEBPACK_IMPORTED_MODULE_15__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(App, null)))), document.getElementById('chrome-entry'));

/***/ }),

/***/ "./src/js/unfetch/index.js":
/*!*********************************!*\
  !*** ./src/js/unfetch/index.js ***!
  \*********************************/
/***/ ((module) => {

/**
 * This is required for the segment analytics
 * It uses the unfetch library which is not compatbile with our fecth library and fails to initialize the browser client.
 * */
module.exports = window.fetch;

/***/ }),

/***/ "./src/js/utils/historyListener.js":
/*!*****************************************!*\
  !*** ./src/js/utils/historyListener.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Maximum SPA application switches
 */
var SWITCHES_LIMIT = 20;
var contextSwitches = 0;
var prevApp = '';

var historyListener = function historyListener(location, action) {
  var app = location.pathname.split('/').filter(function (s) {
    return s.length > 0;
  })[1];
  /**
   * If the browser hist the reload limit, force the browser refresh for current URL
   */

  if (contextSwitches === SWITCHES_LIMIT) {
    window.location.reload();
  }
  /**
   * Update app switches data
   */


  if (action === 'PUSH' && prevApp !== app) {
    prevApp = app;
    contextSwitches += 1;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (historyListener);

/***/ }),

/***/ "./src/js/utils/isNavItemVisible.js":
/*!******************************************!*\
  !*** ./src/js/utils/isNavItemVisible.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNavItemVisible": () => (/* binding */ isNavItemVisible),
/* harmony export */   "evaluateVisibility": () => (/* binding */ evaluateVisibility)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/flatMap */ "./node_modules/lodash/flatMap.js");
/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_flatMap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../consts */ "./src/js/consts.ts");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var isNavItemVisible = function isNavItemVisible(permissions) {
  return Promise.all(lodash_flatMap__WEBPACK_IMPORTED_MODULE_4___default()(Array.isArray(permissions) ? permissions : [permissions], /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
    var _visibilityFunctions$;

    var _ref2,
        method,
        args,
        _args = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref2 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, method = _ref2.method, args = _ref2.args;
            _context.next = 3;
            return _consts__WEBPACK_IMPORTED_MODULE_5__.visibilityFunctions === null || _consts__WEBPACK_IMPORTED_MODULE_5__.visibilityFunctions === void 0 ? void 0 : (_visibilityFunctions$ = _consts__WEBPACK_IMPORTED_MODULE_5__.visibilityFunctions[method]) === null || _visibilityFunctions$ === void 0 ? void 0 : _visibilityFunctions$.call.apply(_visibilityFunctions$, [_consts__WEBPACK_IMPORTED_MODULE_5__.visibilityFunctions].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(args || [])));

          case 3:
            _context.t0 = _context.sent;
            return _context.abrupt("return", _context.t0 !== false);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })))).then(function (visibility) {
    return visibility.every(Boolean);
  });
};
var evaluateVisibility = /*#__PURE__*/function () {
  var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(navItem) {
    var result, visible;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(navItem.isHidden === true)) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", navItem);

          case 2:
            result = _objectSpread(_objectSpread({}, navItem), {}, {
              isHidden: false
            });

            if (!(typeof result.permissions !== 'undefined')) {
              _context2.next = 9;
              break;
            }

            _context2.next = 6;
            return isNavItemVisible(result.permissions);

          case 6:
            visible = _context2.sent;

            if (visible) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", _objectSpread(_objectSpread({}, result), {}, {
              isHidden: true
            }));

          case 9:
            if (!(typeof result.groupId !== 'undefined')) {
              _context2.next = 13;
              break;
            }

            _context2.next = 12;
            return Promise.all(result.navItems.map(evaluateVisibility));

          case 12:
            result.navItems = _context2.sent;

          case 13:
            if (!(result.expandable === true)) {
              _context2.next = 17;
              break;
            }

            _context2.next = 16;
            return Promise.all(result.routes.map(evaluateVisibility));

          case 16:
            result.routes = _context2.sent;

          case 17:
            return _context2.abrupt("return", result);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function evaluateVisibility(_x) {
    return _ref3.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/js/utils/loading-fallback.js":
/*!******************************************!*\
  !*** ./src/js/utils/loading-fallback.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?9cbb");
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

/***/ }),

/***/ "./src/js/utils/useOuiaTags.js":
/*!*************************************!*\
  !*** ./src/js/utils/useOuiaTags.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/js/utils.ts");






var useOuiaTags = function useOuiaTags() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    'data-ouia-safe': 'true'
  }),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)(),
      pathname = _useLocation.pathname;

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (_ref) {
    var _ref$chrome = _ref.chrome,
        pageAction = _ref$chrome.pageAction,
        pageObjectId = _ref$chrome.pageObjectId,
        activeApp = _ref$chrome.activeApp;
    return {
      pageAction: pageAction,
      pageObjectId: pageObjectId,
      activeApp: activeApp
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_2__.shallowEqual),
      pageAction = _useSelector.pageAction,
      pageObjectId = _useSelector.pageObjectId,
      activeApp = _useSelector.activeApp;

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setState(function () {
      var result = {
        'data-ouia-safe': 'true'
      };
      var sections = pathname.split('/');

      if (pathname === '/') {
        result.landing = 'true';
      }

      result['data-ouia-bundle'] = sections[1];
      result['data-ouia-app-id'] = sections[2 + (0,_utils__WEBPACK_IMPORTED_MODULE_4__.isAnsible)(sections)];
      result['data-ouia-subnav'] = activeApp;

      if (pageObjectId) {
        result['data-ouia-page-object-id'] = pageObjectId;
      }

      if (pageAction) {
        result['data-ouia-page-type'] = pageAction;
      }

      return result;
    });
  }, [pathname, pageAction, pageObjectId, activeApp]);
  return state;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useOuiaTags);

/***/ }),

/***/ "./src/js/utils/useRenderFedramp.js":
/*!******************************************!*\
  !*** ./src/js/utils/useRenderFedramp.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computeFedrampResult": () => (/* binding */ computeFedrampResult),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/js/utils.ts");






var isFedrampEnv = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.isFedRamp)();
var computeFedrampResult = function computeFedrampResult(isFedrampEnv) {
  var linkHref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    modules: []
  },
      modules = _ref.modules,
      isFedramp = _ref.isFedramp;

  /**
   * Render everything on non-fedramp env
   */
  if (!isFedrampEnv) {
    return undefined;
  }
  /**
   * Look for module routes with fedramp flag that match the link
   */


  var configs = modules.map(function (_ref2) {
    var routes = _ref2.routes;
    return routes;
  }).flat().filter(function (route) {
    if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__.default)(route) !== 'object') {
      return false;
    }

    var match = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.matchPath)(linkHref, {
      path: route.pathname
    });
    return match !== null;
  }).filter(function (_ref3) {
    var isFedramp = _ref3.isFedramp;
    return typeof isFedramp === 'boolean';
  });
  var result = configs.length > 0 ? configs.some(function (_ref4) {
    var isFedramp = _ref4.isFedramp;
    return isFedramp === true;
  }) : undefined;

  if (typeof result === 'boolean') {
    return result;
  }
  /**
   * Global module setting has the lowest priority
   */


  return isFedramp;
};

var useRenderFedramp = function useRenderFedramp(appId, linkHref) {
  var module = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (_ref5) {
    var modules = _ref5.chrome.modules;
    return modules[appId];
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(function () {
    return computeFedrampResult(isFedrampEnv, linkHref, module);
  }),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      shouldRender = _useState2[0],
      setShouldRender = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setShouldRender(computeFedrampResult(isFedrampEnv, linkHref, module));
  }, [appId, linkHref]);
  return isFedrampEnv ? shouldRender : true;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRenderFedramp);

/***/ }),

/***/ "./src/js/App/ErrorComponents/ErrorComponent.scss":
/*!********************************************************!*\
  !*** ./src/js/App/ErrorComponents/ErrorComponent.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/App/Feedback/Feedback.scss":
/*!*******************************************!*\
  !*** ./src/js/App/Feedback/Feedback.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/App/GlobalFilter/global-filter-menu.scss":
/*!*********************************************************!*\
  !*** ./src/js/App/GlobalFilter/global-filter-menu.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/App/Header/AppFilter/AppFilter.scss":
/*!****************************************************!*\
  !*** ./src/js/App/Header/AppFilter/AppFilter.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/App/Header/ContextSwitcher.scss":
/*!************************************************!*\
  !*** ./src/js/App/Header/ContextSwitcher.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/App/Header/Header.scss":
/*!***************************************!*\
  !*** ./src/js/App/Header/Header.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/App/Header/HeaderAlert.scss":
/*!********************************************!*\
  !*** ./src/js/App/Header/HeaderAlert.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/App/RootApp/DefaultLayout.scss":
/*!***********************************************!*\
  !*** ./src/js/App/RootApp/DefaultLayout.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/App/Sidenav/Navigation/Navigation.scss":
/*!*******************************************************!*\
  !*** ./src/js/App/Sidenav/Navigation/Navigation.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/App/Activation/Activation.tsx":
/*!**********************************************!*\
  !*** ./src/js/App/Activation/Activation.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?9cbb");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/js/utils.ts");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Messages */ "./src/js/Messages.ts");







const Activation = ({ user, request }) => {
    const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.default)();
    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();
    const isAvailable = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)() === 'prod';
    async function handleActivationRequest() {
        const token = await window.insights.chrome.auth.getToken();
        if (isAvailable) {
            fetch(`${window.origin}/api/platform-feedback/v1/issues`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    description: `Username: ${user.identity.user.username}, Account ID: ${user.identity.account_number}, Email: ${user.identity.user.email}`,
                    summary: `Activation Request - for cloud-marketplace-enablement team`,
                    labels: [request],
                }),
            });
            console.log('Activation request sent');
        }
        else {
            console.log('You must be in prod to request activation');
        }
    }
    const onModalClose = () => {
        setIsModalOpen(false);
        history.push('/');
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        user && handleActivationRequest();
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Modal, { isOpen: isModalOpen, onClose: onModalClose, title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_4__.default.activationTitle), variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.ModalVariant.medium },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.TextContent, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Text, null, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_4__.default.activationDescription)))));
};
Activation.propTypes = {
    user: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
    request: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Activation);


/***/ }),

/***/ "./src/js/App/Activation/index.ts":
/*!****************************************!*\
  !*** ./src/js/App/Activation/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Activation__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Activation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Activation */ "./src/js/App/Activation/Activation.tsx");



/***/ }),

/***/ "./src/js/App/ErrorComponents/DefaultErrorComponent.tsx":
/*!**************************************************************!*\
  !*** ./src/js/App/ErrorComponents/DefaultErrorComponent.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sentry_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sentry/react */ "./node_modules/@sentry/core/esm/exports.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?9cbb");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_exclamation_circle_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/exclamation-circle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/exclamation-circle-icon.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/js/utils.ts");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Messages */ "./src/js/Messages.ts");
/* harmony import */ var _ErrorComponent_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorComponent.scss */ "./src/js/App/ErrorComponents/ErrorComponent.scss");








const DefaultErrorComponent = (props) => {
    const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.default)();
    const [sentryId, setSentryId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const sentryId = _sentry_react__WEBPACK_IMPORTED_MODULE_6__.captureException(new Error('Unhandled UI runtime error'), {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            bundle: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getUrl)('bundle'),
            app: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getUrl)('app'),
            error: (props.error instanceof Error && props.error?.message) || props.error,
            trace: props.errorInfo?.componentStack || (props.error instanceof Error && props.error?.stack) || props.error,
        });
        setSentryId(sentryId);
    }, []);
    const stack = props.errorInfo?.componentStack || (props.error instanceof Error && props.error?.stack) || props.error;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Bullseye, { className: "chr-c-error-component" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyState, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyStateIcon, { color: "var(--pf-global--danger-color--200)", icon: _patternfly_react_icons_dist_js_icons_exclamation_circle_icon__WEBPACK_IMPORTED_MODULE_7__.default }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Title, { size: "lg", headingLevel: "h1" },
                intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_3__.default.somethingWentWrong),
                "\u00A0",
                sentryId && intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_3__.default.globalRuntimeErrorId, { errorId: sentryId })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyStateBody, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "chr-c-error-component__text" },
                    intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_3__.default.problemProcessingRequest),
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { target: "_blank", href: "https://access.redhat.com/support", rel: "noreferrer" }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_3__.default.redHatSupport)),
                    ' ',
                    intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_3__.default.checkOur),
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "https://status.redhat.com/", target: "_blank", rel: "noreferrer" }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_3__.default.statusPage)),
                    ' ',
                    intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_3__.default.knownOutages)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Flex, { alignContent: { default: 'alignContentCenter' }, direction: { default: 'column' } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ExpandableSection, { toggleTextExpanded: "Show less", toggleTextCollapsed: "Show more" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextContent, null,
                                typeof props?.error === 'string' && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, { className: "error-text" }, props.error),
                                typeof props?.error === 'object' && typeof props?.error?.message === 'string' && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, { className: "error-text" }, props.error.message)),
                                typeof stack === 'string' && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, { className: "error-text", component: "pre" }, stack.split('\n').map((content, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "error-line", key: index }, content)))))))))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyStatePrimary, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { component: () => react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "/" }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_3__.default.returnToHomepage)), variant: "primary" })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultErrorComponent);


/***/ }),

/***/ "./src/js/App/ErrorComponents/GatewayErrorComponent.tsx":
/*!**************************************************************!*\
  !*** ./src/js/App/ErrorComponents/GatewayErrorComponent.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redhat_cloud_services_frontend_components_NotAuthorized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/NotAuthorized */ "./node_modules/@redhat-cloud-services/frontend-components/esm/NotAuthorized/NotAuthorized.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sanitize-html */ "./node_modules/sanitize-html/index.js");
/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sanitize_html__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Sidenav_Navigation_ChromeLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Sidenav/Navigation/ChromeLink */ "./src/js/App/Sidenav/Navigation/ChromeLink.tsx");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?9cbb");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Messages */ "./src/js/Messages.ts");








const MuaLink = (chunks) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Sidenav_Navigation_ChromeLink__WEBPACK_IMPORTED_MODULE_2__.default, { appId: "rbac", href: "/settings/my-user-access" }, chunks));
const Description = ({ detail, complianceError }) => {
    const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.default)();
    const description = intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_4__.default.permissionErrorDescription, {
        MuaLink,
    });
    const errorDetail = intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_4__.default.permissionErrorDetail, {
        message: detail || '',
    });
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.TextContent, null, detail && complianceError ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Text, { dangerouslySetInnerHTML: { __html: sanitize_html__WEBPACK_IMPORTED_MODULE_6___default()(detail) } })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Text, null, description),
        detail && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Text, null, errorDetail)))));
};
const GatewayErrorComponent = ({ error }) => {
    // get active product, fallback to module name if product is not defined
    const serviceName = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state) => state.chrome.activeProduct || state.chrome.activeModule);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_NotAuthorized__WEBPACK_IMPORTED_MODULE_7__.default, { description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Description, { complianceError: error.complianceError, detail: error.detail }), serviceName: serviceName });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GatewayErrorComponent);


/***/ }),

/***/ "./src/js/App/FeatureFlags/index.ts":
/*!******************************************!*\
  !*** ./src/js/App/FeatureFlags/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureFlagsProvider": () => (/* reexport safe */ _FeatureFlagsProvider__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _FeatureFlagsProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeatureFlagsProvider */ "./src/js/App/FeatureFlags/FeatureFlagsProvider.tsx");



/***/ }),

/***/ "./src/js/App/Feedback/Feedback.tsx":
/*!******************************************!*\
  !*** ./src/js/App/Feedback/Feedback.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?9cbb");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Messages */ "./src/js/Messages.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/js/utils.ts");
/* harmony import */ var _Feedback_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Feedback.scss */ "./src/js/App/Feedback/Feedback.scss");






const Feedback = ({ user, onCloseModal, onSubmit }) => {
    const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.default)();
    const [textAreaValue, setTextAreaValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const env = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)();
    const app = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getUrl)('app');
    const bundle = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getUrl)('bundle');
    const isAvailable = env === 'prod' || env === 'stage';
    const addFeedbackTag = () => ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isProd)() ? `[${bundle}]` : '[PRE-PROD]');
    async function handleModalSubmission() {
        const token = await window.insights.chrome.auth.getToken();
        if (isAvailable) {
            fetch(`${window.origin}/api/platform-feedback/v1/issues`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    description: `Feedback: ${textAreaValue}, Username: ${user.identity.user.username}, Account ID: ${user.identity.account_number}, Email: ${checked ? user.identity.user.email : ''}, URL: ${window.location.href}`,
                    summary: `${addFeedbackTag()} App Feedback`,
                    labels: [app, bundle],
                }),
            }).then((response) => response.json());
        }
        else {
            console.log('Submitting feedback only works in prod and stage');
        }
        onSubmit();
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "chr-c-feedback-content" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextContent, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, { component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextVariants.h1 }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__.default.shareYourFeedback))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Form, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.FormGroup, { label: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__.default.enterFeedback), fieldId: "horizontal-form-exp" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextArea, { value: textAreaValue, onChange: (value) => setTextAreaValue(value), name: "feedback-description-text", id: "feedback-description-text" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.FormGroup, { className: "pf-u-mt-20" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Checkbox, { id: "feedback-checkbox", isChecked: checked, onChange: () => setChecked(!checked), label: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__.default.researchOpportunities), description: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__.default.learnAboutResearchOpportunities) }))),
        checked ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "pf-u-font-family-heading-sans-serif chr-c-feedback-email" }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__.default.email)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Panel, { variant: "raised", className: "chr-c-feedback-panel" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PanelMain, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PanelMainBody, { className: "chr-c-feedback-panel__body" }, user.identity.user.email))))) : (''),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "chr-c-feedback-buttons" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { ouiaId: "submit-feedback", key: "confirm", variant: "primary", onClick: handleModalSubmission }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__.default.submitFeedback)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { ouiaId: "cancel-feedback", key: "cancel", variant: "link", onClick: onCloseModal }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__.default.cancel)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feedback);


/***/ }),

/***/ "./src/js/App/Feedback/FeedbackModal.tsx":
/*!***********************************************!*\
  !*** ./src/js/App/Feedback/FeedbackModal.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?9cbb");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/icons/external-link-alt-icon.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/icons/outlined-comments-icon.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _static_images_feedback_illo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../static/images/feedback_illo.svg */ "./static/images/feedback_illo.svg");
/* harmony import */ var _Feedback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Feedback */ "./src/js/App/Feedback/Feedback.tsx");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions */ "./src/js/redux/actions.ts");
/* harmony import */ var _FeedbackSuccess__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FeedbackSuccess */ "./src/js/App/Feedback/FeedbackSuccess.tsx");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Messages */ "./src/js/Messages.ts");
/* harmony import */ var _Feedback_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Feedback.scss */ "./src/js/App/Feedback/Feedback.scss");











const FeedbackModal = ({ user }) => {
    const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__.default)();
    const usePendoFeedback = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(({ chrome: { usePendoFeedback } }) => usePendoFeedback);
    const isOpen = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(({ chrome: { isFeedbackModalOpen } }) => isFeedbackModalOpen);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const [modalPage, setModalPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('feedbackHome');
    const env = window.insights.chrome.getEnvironment();
    const isAvailable = env === 'prod' || env === 'stage';
    const setIsModalOpen = (isOpen) => dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_5__.toggleFeedbackModal)(isOpen));
    const handleCloseModal = () => {
        setIsModalOpen(false), setModalPage('feedbackHome');
    };
    const ModalDescription = ({ modalPage }) => {
        switch (modalPage) {
            case 'feedbackHome':
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "chr-c-feedback-content" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextContent, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, { component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextVariants.h1 }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__.default.tellAboutExperience)),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, null, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__.default.helpUsImproveHCC))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "chr-c-feedback-cards" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Card, { isSelectableRaised: true, isCompact: true, onClick: () => setModalPage('feedbackOne') },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.CardTitle, { className: "chr-c-feedback-card-title" }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__.default.shareFeedback)),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.CardBody, null, `${intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__.default.tellAboutExperience)} ${intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__.default.orShareIdeas)}`)),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Card, { isSelectableRaised: true, isCompact: true, href: "https://access.redhat.com/support/cases/#/case/new/open-case?caseCreate=true", target: "_blank" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.CardTitle, { className: "chr-c-feedback-card-title" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, { component: "a", href: "https://access.redhat.com/support/cases/#/case/new/open-case?caseCreate=true", target: "_blank" },
                                    intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__.default.openSupportCase),
                                    " ",
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_10__.ExternalLinkAltIcon, null))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.CardBody, null, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__.default.getSupport)))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { className: "chr-c-feedback-button", ouiaId: "cancel-feedback", key: "cancel", variant: "link", onClick: handleCloseModal }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__.default.cancel))));
            case 'feedbackOne':
                return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Feedback__WEBPACK_IMPORTED_MODULE_4__.default, { user: user, onCloseModal: handleCloseModal, onSubmit: () => setModalPage('feedbackSuccess') });
            case 'feedbackSuccess':
                return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FeedbackSuccess__WEBPACK_IMPORTED_MODULE_6__.default, { onCloseModal: handleCloseModal });
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { ouiaId: "feedback-button", className: "chr-c-button-feedback", onClick: () => {
                if (!usePendoFeedback) {
                    setIsModalOpen(true);
                }
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_11__.OutlinedCommentsIcon, null),
            intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__.default.feedback)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Modal, { "aria-label": "Feedback modal", isOpen: isOpen, className: "chr-c-feedback-modal", variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ModalVariant.medium, onClose: handleCloseModal },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Grid, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.GridItem, { span: 8, rowSpan: 12 },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ModalDescription, { modalPage: modalPage })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.GridItem, { span: 4, className: "chr-c-feedback-image" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "chr-c-feedback-image", src: _static_images_feedback_illo_svg__WEBPACK_IMPORTED_MODULE_3__ }))),
            !isAvailable && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Label, { color: "red" },
                " ",
                intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__.default.submitOnlyInStageProd),
                " "))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedbackModal);


/***/ }),

/***/ "./src/js/App/Feedback/FeedbackSuccess.tsx":
/*!*************************************************!*\
  !*** ./src/js/App/Feedback/FeedbackSuccess.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?9cbb");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_check_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/check-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/check-icon.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Messages */ "./src/js/Messages.ts");
/* harmony import */ var _Feedback_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Feedback.scss */ "./src/js/App/Feedback/Feedback.scss");






const FeedbackSuccess = ({ onCloseModal }) => {
    const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.default)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "chr-c-feedback-success-content" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons_dist_js_icons_check_icon__WEBPACK_IMPORTED_MODULE_5__.default, { size: "md", color: "var(--pf-global--success-color--100)", className: "pf-u-mx-auto" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextContent, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, { component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextVariants.h1 }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__.default.feedbackSent)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, null, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__.default.thankYouForFeedback))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "primary", onClick: onCloseModal }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__.default.close))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedbackSuccess);


/***/ }),

/***/ "./src/js/App/Feedback/index.ts":
/*!**************************************!*\
  !*** ./src/js/App/Feedback/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _FeedbackModal__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "usePendoFeedback": () => (/* reexport safe */ _usePendoFeedback__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _FeedbackModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackModal */ "./src/js/App/Feedback/FeedbackModal.tsx");
/* harmony import */ var _usePendoFeedback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usePendoFeedback */ "./src/js/App/Feedback/usePendoFeedback.ts");




/***/ }),

/***/ "./src/js/App/Feedback/usePendoFeedback.ts":
/*!*************************************************!*\
  !*** ./src/js/App/Feedback/usePendoFeedback.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux-config */ "./src/js/redux-config.ts");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions */ "./src/js/redux/actions.ts");



const usePendoFeedback = () => {
    /**
     * We have to use the "spinUpStore" instead of just calling useDispatch
     * Otherwise we will end up using the "dispatch" instance from the application not chrome!
     */
    const { store: { dispatch }, } = (0,_redux_config__WEBPACK_IMPORTED_MODULE_1__.spinUpStore)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.setPendoFeedbackFlag)(true));
        return () => {
            dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.setPendoFeedbackFlag)(false));
        };
    }, []);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePendoFeedback);


/***/ }),

/***/ "./src/js/App/GlobalFilter/GlobalFilterMenu.tsx":
/*!******************************************************!*\
  !*** ./src/js/App/GlobalFilter/GlobalFilterMenu.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalFilterDropdown": () => (/* binding */ GlobalFilterDropdown),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/ConditionalFilter */ "./node_modules/@redhat-cloud-services/frontend-components/esm/ConditionalFilter/GroupFilter.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Messages */ "./src/js/Messages.ts");
/* harmony import */ var _global_filter_menu_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-filter-menu.scss */ "./src/js/App/GlobalFilter/global-filter-menu.scss");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?9cbb");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/js/App/GlobalFilter/constants.ts");
/* harmony import */ var _TagsModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TagsModal */ "./src/js/App/GlobalFilter/TagsModal.tsx");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions */ "./src/js/redux/actions.ts");










/** Create unique hotjar event for selected tags */
const generateGlobalFilterEvent = (isChecked, value) => `global_filter_tag_${isChecked ? 'uncheck' : 'check'}_${value}`;
const GlobalFilterDropdown = ({ allowed, isDisabled, filter, chips, setValue, selectedTags, isOpen, filterTagsBy, setIsOpen, }) => {
    /**
     * Hotjar API reference: https://help.hotjar.com/hc/en-us/articles/4405109971095-Events-API-Reference#the-events-api-call
     * window.hj is only avaiable in console.redhat.com and console.redhat.com/beta
     * We are unable to test it in any local development environment
     * */
    const hotjarEventEmitter = typeof window.hj === 'function' ? window.hj : () => undefined;
    const registeredWith = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(({ globalFilter: { scope } }) => scope);
    const userLoaded = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(({ chrome: { user } }) => Boolean(user));
    const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.default)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const GroupFilterWrapper = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (!allowed || isDisabled ? _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Tooltip : ({ children }) => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children)), [allowed, isDisabled]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Split, { id: "global-filter", hasGutter: true, className: "chr-c-global-filter" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.SplitItem, null, userLoaded && allowed !== undefined ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GroupFilterWrapper, { content: !allowed || isDisabled
                    ? !allowed
                        ? `${intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_1__.default.noInventoryPermissions)}`
                        : `${intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_1__.default.globalFilterNotApplicable)}`
                    : '', position: "right" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_9__.default, { className: "chr-c-menu-global-filter__select", selected: selectedTags, isDisabled: isDisabled, groups: filter.groups?.map((group) => ({
                        ...group,
                        items: group.items.map((item) => ({
                            ...item,
                            onClick: (e, selected, group, currItem, groupName, itemName) => {
                                generateGlobalFilterEvent(selected?.[groupName]?.[itemName]?.isSelected, item.value);
                                item.onClick?.(e, selected, group, currItem, groupName, itemName);
                            },
                        })),
                    })), onChange: filter.onChange, placeholder: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_1__.default.filterByTags), isFilterable: true, onFilter: filter.onFilter, filterBy: filter.filterBy, showMoreTitle: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_1__.default.showMore), onShowMore: () => setIsOpen(true), showMoreOptions: {
                        isLoadButton: true,
                    } }))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Skeleton, { fontSize: 'xl' }))),
            allowed && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.SplitItem, { isFilled: true }, chips?.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                chips.map(({ category, chips }, key) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.ChipGroup, { key: key, categoryName: category, className: category === 'Workloads' ? 'chr-c-chip' : '' }, chips?.map(({ key: chipName, tagKey, value }, chipKey) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Chip, { key: chipKey, onClick: () => setValue(() => (0,_constants__WEBPACK_IMPORTED_MODULE_5__.updateSelected)(selectedTags, category, chipName, value, false, {})), isReadOnly: isDisabled },
                    tagKey,
                    value ? `=${value}` : '')))))),
                !isDisabled && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Button, { variant: "link", ouiaId: "global-filter-clear", onClick: () => setValue(() => ({})) }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_1__.default.clearFilters)))))))),
        isOpen && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TagsModal__WEBPACK_IMPORTED_MODULE_6__.default, { isOpen: isOpen, filterTagsBy: filterTagsBy, selectedTags: selectedTags, toggleModal: (isSubmit) => {
                if (!isSubmit) {
                    dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_7__.fetchAllTags)({
                        registeredWith: registeredWith,
                        activeTags: selectedTags,
                        search: filterTagsBy,
                    }));
                }
                hotjarEventEmitter('event', 'global_filter_bulk_action');
                setIsOpen(false);
            }, onApplyTags: (selected, sidSelected) => {
                setValue(() => [...(selected || []), ...(sidSelected || [])].reduce((acc, { key, value, namespace }) => {
                    return (0,_constants__WEBPACK_IMPORTED_MODULE_5__.updateSelected)(acc, namespace, `${key}${value ? `=${value}` : ''}`, value, true, {
                        item: { tagKey: key },
                    });
                }, selectedTags));
            } })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Divider, null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalFilterDropdown);


/***/ }),

/***/ "./src/js/App/GlobalFilter/TagsModal.tsx":
/*!***********************************************!*\
  !*** ./src/js/App/GlobalFilter/TagsModal.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMetaSelector": () => (/* binding */ useMetaSelector),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redhat_cloud_services_frontend_components_TagModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/TagModal */ "./node_modules/@redhat-cloud-services/frontend-components/esm/TagModal/TagModal.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions */ "./src/js/redux/actions.ts");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/flatMap */ "./node_modules/lodash/flatMap.js");
/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_flatMap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Messages */ "./src/js/Messages.ts");









const useMetaSelector = (key) => (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(({ globalFilter }) => {
    const selected = globalFilter[key];
    return [selected?.isLoaded, selected?.total || 0, selected?.page || 1, selected?.perPage || 10];
}, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual);
const usePagination = (loaded, perPage, page, count) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        if (loaded) {
            return {
                perPage: perPage,
                page: page,
                count: count,
            };
        }
        return {};
    }, [loaded, perPage, page, count]);
};
const useRow = (resource, loaded, idMapper, cellsMapper, selected) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        if (loaded) {
            return lodash_flatMap__WEBPACK_IMPORTED_MODULE_4___default()(resource, ({ tags }) => tags?.map(({ tag }) => ({
                id: idMapper(tag),
                namespace: tag.namespace,
                key: tag.key,
                value: tag.value,
                selected: selected?.find?.(({ id }) => id === idMapper(tag)),
                cells: cellsMapper(tag),
            })));
        }
        return [];
    }, [resource, loaded, selected]);
};
const useDebounce = (callback, perPage, activeTags) => {
    const registeredWith = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(({ globalFilter: { scope } }) => scope || undefined);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()((search) => {
        dispatch(callback({
            registeredWith,
            activeTags,
            search,
        }, { page: 1, perPage }));
    }, 800), [perPage, registeredWith, activeTags]);
};
const TagsModal = ({ isOpen, filterTagsBy, onApplyTags, toggleModal, selectedTags }) => {
    const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.default)();
    const [tagsSelected, setTagsSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [sidsSelected, setSidsSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [filterBy, setFilterBy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [filterSIDsBy, setFilterSIDsBy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    const [tagsLoaded, tagsCount, tagsPage, tagsPerPage] = useMetaSelector('tags');
    const [sidLoaded, sidCount, sidPage, sidPerPage] = useMetaSelector('sid');
    const tags = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(({ globalFilter: { tags } }) => tags?.items || []);
    const sids = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(({ globalFilter: { sid } }) => sid?.items || []);
    const filterScope = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(({ globalFilter: { scope } }) => scope || undefined);
    const debounceGetTags = useDebounce(_redux_actions__WEBPACK_IMPORTED_MODULE_2__.fetchAllTags, tagsPerPage, selectedTags);
    const debounceGetSIDs = useDebounce(_redux_actions__WEBPACK_IMPORTED_MODULE_2__.fetchAllSIDs, sidPerPage, selectedTags);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setFilterBy(filterTagsBy);
        setFilterSIDsBy(filterTagsBy);
    }, [filterTagsBy]);
    const tagsPagination = usePagination(tagsLoaded, tagsPerPage, tagsPage, tagsCount);
    const sidPagination = usePagination(sidLoaded, sidPerPage, sidPage, sidCount);
    const tagsRows = useRow(tags, tagsLoaded, ({ key, value, namespace }) => `${namespace}/${key}=${value}`, ({ key, value, namespace }) => [key, value, namespace], tagsSelected);
    const sidRows = useRow(sids, sidLoaded, ({ key }) => key, ({ key }) => [key], sidsSelected);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_TagModal__WEBPACK_IMPORTED_MODULE_7__.default, { tabNames: ['tags', 'SAP IDs (SID)'], tableProps: {
            canSelectAll: false,
        }, pagination: [tagsPagination, sidPagination], rows: [tagsRows, sidRows], loaded: [tagsLoaded, sidLoaded], width: "50%", isOpen: isOpen, toggleModal: (_e, open) => {
            setSidsSelected([]);
            setTagsSelected([]);
            setFilterBy('');
            setFilterSIDsBy('');
            toggleModal(!!open);
        }, filters: [
            [
                {
                    label: `${intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_5__.default.tagsFilter)}`,
                    placeholder: `${intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_5__.default.filterTags)}`,
                    value: 'tags-filter',
                    type: 'checkbox',
                    filterValues: {
                        value: filterBy,
                        onChange: (_e, value) => {
                            setFilterBy(() => value);
                            debounceGetTags(value);
                        },
                    },
                },
            ],
            [
                {
                    label: `${intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_5__.default.SIDsFilter)}`,
                    placeholder: `${intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_5__.default.filterSAPIDs)}`,
                    value: 'sids-filter',
                    type: 'checkbox',
                    filterValues: {
                        value: filterSIDsBy,
                        onChange: (_e, value) => {
                            setFilterSIDsBy(() => value);
                            debounceGetSIDs(value);
                        },
                    },
                },
            ],
        ], onUpdateData: [
            (pagination) => {
                dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.fetchAllTags)({
                    registeredWith: filterScope,
                    activeTags: selectedTags,
                    search: filterBy,
                }, pagination));
            },
            (pagination) => {
                dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.fetchAllSIDs)({
                    registeredWith: filterScope,
                    activeTags: selectedTags,
                    search: filterSIDsBy,
                }, pagination));
            },
        ], columns: [
            [
                { title: `${intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_5__.default.name)}` },
                { title: `${intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_5__.default.value)}` },
                { title: `${intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_5__.default.tagSources)}` },
            ],
            [{ title: `${intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_5__.default.value)}` }],
        ], onSelect: [
            (selected) => setTagsSelected(selected),
            (selected) => setSidsSelected(selected),
        ], selected: [tagsSelected, sidsSelected], onApply: () => onApplyTags(tagsSelected, sidsSelected), title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_5__.default.selectTagsOrSIDs), ouiaId: "global-filter-tags-modal" }));
};
TagsModal.propTypes = {
    isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
    selectedTags: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
    filterTagsBy: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
    onApplyTags: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
    toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
};
TagsModal.defaultProps = {
    isOpen: false,
    selectedTags: {},
    onApplyTags: () => undefined,
    toggleModal: () => undefined,
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagsModal);


/***/ }),

/***/ "./src/js/App/GlobalFilter/constants.ts":
/*!**********************************************!*\
  !*** ./src/js/App/GlobalFilter/constants.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INVENTORY_API_BASE": () => (/* binding */ INVENTORY_API_BASE),
/* harmony export */   "workloads": () => (/* binding */ workloads),
/* harmony export */   "updateSelected": () => (/* binding */ updateSelected),
/* harmony export */   "createTagsFilter": () => (/* binding */ createTagsFilter),
/* harmony export */   "generateFilter": () => (/* binding */ generateFilter),
/* harmony export */   "escaper": () => (/* binding */ escaper),
/* harmony export */   "flatTags": () => (/* binding */ flatTags)
/* harmony export */ });
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/flatMap */ "./node_modules/lodash/flatMap.js");
/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_flatMap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/memoize */ "./node_modules/lodash/memoize.js");
/* harmony import */ var lodash_memoize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_memoize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_globalFilterReducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/globalFilterReducers */ "./src/js/redux/globalFilterReducers.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/js/utils.ts");





const INVENTORY_API_BASE = '/api/inventory/v1';
const workloads = [
    {
        name: 'Workloads',
        noFilter: true,
        tags: [
            {
                tag: { key: 'SAP' },
            },
            {
                tag: { key: _redux_globalFilterReducers__WEBPACK_IMPORTED_MODULE_3__.AAP_KEY },
            },
            {
                tag: { key: _redux_globalFilterReducers__WEBPACK_IMPORTED_MODULE_3__.MSSQL_KEY },
            },
        ],
    },
];
const updateSelected = (original, namespace, key, value, isSelected, extra) => ({
    ...original,
    [namespace]: {
        ...original?.[namespace],
        [key]: {
            ...original?.[namespace]?.[key],
            isSelected,
            value,
            ...extra,
        },
    },
});
const createTagsFilter = (tags = []) => tags.reduce((acc, curr) => {
    const [namespace, tag] = curr.split('/');
    const [tagKey, tagValue] = tag?.split('=') || [];
    return {
        ...acc,
        [namespace]: {
            ...(acc[namespace] || {}),
            ...(tagKey?.length > 0 && {
                [`${tagKey}${tagValue ? `=${tagValue}` : ''}`]: {
                    isSelected: true,
                    group: { value: namespace, label: namespace, type: 'checkbox' },
                    item: { tagValue, tagKey },
                },
            }),
        },
    };
}, {});
const generateFilter = () => {
    const searchParams = new URLSearchParams(location.hash?.substring(1));
    // Ansible bundle requires AAP to be active at all times
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_4__.getUrl)('bundle') === 'ansible') {
        searchParams.set('workloads', _redux_globalFilterReducers__WEBPACK_IMPORTED_MODULE_3__.AAP_KEY);
    }
    let Workloads = {};
    let tags = {};
    let SIDs = {};
    if (searchParams.get('workloads')) {
        const { tag } = workloads[0].tags.find(({ tag: { key } }) => key === searchParams.get('workloads')) || {};
        Workloads = tag?.key
            ? {
                [tag?.key]: {
                    group: lodash_omit__WEBPACK_IMPORTED_MODULE_0___default()(workloads[0], 'tags'),
                    isSelected: true,
                    item: { tagKey: tag?.key },
                },
            }
            : {};
    }
    if (typeof searchParams.get('tags') === 'string') {
        tags = createTagsFilter(searchParams.get('tags')?.split(','));
    }
    if (typeof searchParams.get('SIDs') === 'string') {
        SIDs = createTagsFilter(searchParams
            .get('SIDs')
            ?.split(',')
            .map((sid) => `${_redux_globalFilterReducers__WEBPACK_IMPORTED_MODULE_3__.SID_KEY}/${sid}`))?.[_redux_globalFilterReducers__WEBPACK_IMPORTED_MODULE_3__.SID_KEY];
    }
    return {
        Workloads,
        ...(SIDs && { [_redux_globalFilterReducers__WEBPACK_IMPORTED_MODULE_3__.SID_KEY]: SIDs }),
        ...tags,
    };
};
const escaper = (value) => value.replace(/\//gi, '%2F').replace(/=/gi, '%3D');
const flatTags = lodash_memoize__WEBPACK_IMPORTED_MODULE_2___default()((filter = {}, encode = false, format = false) => {
    const { Workloads, [_redux_globalFilterReducers__WEBPACK_IMPORTED_MODULE_3__.SID_KEY]: SID, ...tags } = filter;
    const mappedTags = lodash_flatMap__WEBPACK_IMPORTED_MODULE_1___default()(Object.entries({ ...tags, ...(!format && { Workloads }) } || {}), ([namespace, item]) => Object.entries(item || {})
        .filter(([, { isSelected }]) => isSelected)
        .map(([tagKey, { item, value: tagValue }]) => {
        return `${namespace ? `${encode ? encodeURIComponent(escaper(namespace)) : escaper(namespace)}/` : ''}${encode ? encodeURIComponent(escaper(item?.tagKey || tagKey)) : escaper(item?.tagKey || tagKey)}${item?.tagValue || tagValue
            ? `=${encode ? encodeURIComponent(escaper(item?.tagValue || tagValue)) : escaper(item?.tagValue || tagValue)}`
            : ''}`;
    }));
    return format
        ? [
            Workloads,
            Object.entries(SID || {})
                .filter(([, { isSelected }]) => isSelected)
                .reduce((acc, [key]) => [...acc, key], []),
            mappedTags,
        ]
        : mappedTags;
}, (filter = {}, encode, format) => `${Object.entries(filter)
    .map(([namespace, val]) => `${namespace}.${Object.entries(val || {})
    .filter(([, { isSelected }]) => isSelected)
    .map(([key]) => key)
    .join('')}`)
    .join(',')}${encode ? '_encode' : ''}${format ? '_format' : ''}`);


/***/ }),

/***/ "./src/js/App/GlobalFilter/filterApi.ts":
/*!**********************************************!*\
  !*** ./src/js/App/GlobalFilter/filterApi.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storeFilter": () => (/* binding */ storeFilter)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/js/App/GlobalFilter/constants.ts");

const storeFilter = (tags, isEnabled, history) => {
    if (isEnabled) {
        const searchParams = new URLSearchParams();
        const [, SIDs, mappedTags] = (0,_constants__WEBPACK_IMPORTED_MODULE_0__.flatTags)(tags, false, true);
        if (tags?.Workloads) {
            const currWorkloads = Object.entries(tags?.Workloads || {})?.find(([, workload]) => workload.isSelected)?.[0];
            if (currWorkloads) {
                searchParams.append('workloads', currWorkloads);
            }
        }
        searchParams.append('SIDs', SIDs);
        searchParams.append('tags', mappedTags);
        history.push({
            ...history.location,
            hash: searchParams.toString(),
        });
    }
};


/***/ }),

/***/ "./src/js/App/GlobalFilter/tagsApi.ts":
/*!********************************************!*\
  !*** ./src/js/App/GlobalFilter/tagsApi.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tags": () => (/* binding */ tags),
/* harmony export */   "sap": () => (/* binding */ sap),
/* harmony export */   "system": () => (/* binding */ system),
/* harmony export */   "generateFilter": () => (/* binding */ generateFilter),
/* harmony export */   "getAllTags": () => (/* binding */ getAllTags),
/* harmony export */   "getAllSIDs": () => (/* binding */ getAllSIDs),
/* harmony export */   "getAllWorkloads": () => (/* binding */ getAllWorkloads)
/* harmony export */ });
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_interceptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/interceptors */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/esm/interceptors/interceptors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/js/App/GlobalFilter/constants.ts");
/* harmony import */ var _redhat_cloud_services_host_inventory_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redhat-cloud-services/host-inventory-client */ "./node_modules/@redhat-cloud-services/host-inventory-client/dist/index.js");
/* harmony import */ var _redhat_cloud_services_host_inventory_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_host_inventory_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_globalFilterReducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/globalFilterReducers */ "./src/js/redux/globalFilterReducers.ts");
/* eslint-disable camelcase */




const tags = new _redhat_cloud_services_host_inventory_client__WEBPACK_IMPORTED_MODULE_1__.TagsApi(undefined, _constants__WEBPACK_IMPORTED_MODULE_0__.INVENTORY_API_BASE, _redhat_cloud_services_frontend_components_utilities_interceptors__WEBPACK_IMPORTED_MODULE_3__.default);
const sap = new _redhat_cloud_services_host_inventory_client__WEBPACK_IMPORTED_MODULE_1__.SapSystemApi(undefined, _constants__WEBPACK_IMPORTED_MODULE_0__.INVENTORY_API_BASE, _redhat_cloud_services_frontend_components_utilities_interceptors__WEBPACK_IMPORTED_MODULE_3__.default);
const system = new _redhat_cloud_services_host_inventory_client__WEBPACK_IMPORTED_MODULE_1__.HostsApi(undefined, _constants__WEBPACK_IMPORTED_MODULE_0__.INVENTORY_API_BASE, _redhat_cloud_services_frontend_components_utilities_interceptors__WEBPACK_IMPORTED_MODULE_3__.default);
/**
 * This has to be pulled out of FEC for a while until we split react and non react helper functions
 */
const generateFilter = (data, path = 'filter', options) => Object.entries(data || {}).reduce((acc, [key, value]) => {
    const newPath = `${path || ''}[${key}]${Array.isArray(value) ? `${options?.arrayEnhancer ? `[${options.arrayEnhancer}]` : ''}[]` : ''}`;
    if (value instanceof Function || value instanceof Date) {
        return acc;
    }
    return {
        ...acc,
        ...(Array.isArray(value) || typeof value !== 'object' ? { [newPath]: value } : generateFilter(value, newPath, options)),
    };
}, {});
const buildFilter = (workloads, SID) => ({
    system_profile: {
        ...(workloads?.SAP?.isSelected && { sap_system: true }),
        // enable once AAP filter is enabled
        ...(workloads?.[_redux_globalFilterReducers__WEBPACK_IMPORTED_MODULE_2__.AAP_KEY]?.isSelected && {
            ansible: 'not_nil',
        }),
        ...(workloads?.[_redux_globalFilterReducers__WEBPACK_IMPORTED_MODULE_2__.MSSQL_KEY]?.isSelected && {
            mssql: 'not_nil',
        }),
        sap_sids: SID,
    },
});
function getAllTags({ search, activeTags, registeredWith } = {}, pagination) {
    const [workloads, SID, selectedTags] = (0,_constants__WEBPACK_IMPORTED_MODULE_0__.flatTags)(activeTags, false, true);
    return tags.apiTagGetTags(selectedTags, // tag filer
    'tag', 'ASC', pagination?.perPage || 10, pagination?.page || 1, undefined, search, registeredWith, undefined, {
        query: generateFilter(buildFilter(workloads, SID)),
    });
}
function getAllSIDs({ search, activeTags, registeredWith } = {}, pagination = {}) {
    const [workloads, SID, selectedTags] = (0,_constants__WEBPACK_IMPORTED_MODULE_0__.flatTags)(activeTags, false, true);
    return sap.apiSystemProfileGetSapSids(search, selectedTags, // tags
    (pagination && pagination.perPage) || 10, (pagination && pagination.page) || 1, undefined, // staleness,
    registeredWith, undefined, {
        query: generateFilter(buildFilter(workloads, SID)),
    });
}
async function getAllWorkloads({ activeTags, registeredWith } = {}, pagination = {}) {
    const [workloads, SID, selectedTags] = (0,_constants__WEBPACK_IMPORTED_MODULE_0__.flatTags)(activeTags, false, true);
    const [SAP, AAP, MSSQL] = await Promise.all([
        sap.apiSystemProfileGetSapSystem(selectedTags, // tags
        (pagination && pagination.perPage) || 10, (pagination && pagination.page) || 1, undefined, // staleness,
        registeredWith, undefined, {
            query: generateFilter(buildFilter(workloads, SID)),
        }),
        system.apiHostGetHostList(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ['fresh', 'stale'], selectedTags, registeredWith, undefined, undefined, {
            query: generateFilter(buildFilter({
                ...(workloads || {}),
                [_redux_globalFilterReducers__WEBPACK_IMPORTED_MODULE_2__.AAP_KEY]: { isSelected: true },
            }, SID)),
        }),
        system.apiHostGetHostList(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ['fresh', 'stale'], selectedTags, registeredWith, undefined, undefined, {
            query: generateFilter(buildFilter({
                ...(workloads || {}),
                [_redux_globalFilterReducers__WEBPACK_IMPORTED_MODULE_2__.MSSQL_KEY]: { isSelected: true },
            }, SID)),
        }),
    ]);
    return { SAP, AAP, MSSQL };
}


/***/ }),

/***/ "./src/js/App/QuickStart/useHelpTopicState.ts":
/*!****************************************************!*\
  !*** ./src/js/App/QuickStart/useHelpTopicState.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_interceptors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/interceptors */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/esm/interceptors/interceptors.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useHelpTopicState = (state = { topics: {}, activeTopics: {} }) => {
    const [helpTopics, setHelpTopics] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(state.topics || {});
    const [activeTopics, setActiveTopics] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(state.activeTopics || {});
    function batchToggleTopic(names, active) {
        setActiveTopics((prev) => names.reduce((acc, curr) => ({
            ...acc,
            [curr]: active,
        }), { ...prev }));
    }
    /**
     * Add new or replace exiting topics
     * New topics
     */
    function addHelpTopics(topics, enabled = true) {
        setHelpTopics((prev) => topics.reduce((acc, curr) => ({
            ...acc,
            [curr.name]: curr,
        }), { ...prev }));
        batchToggleTopic(topics.map(({ name }) => name), enabled);
    }
    function appendQueryArray(params, name, values) {
        values.forEach((value) => {
            params.append(name, value);
        });
        return params;
    }
    async function fetchHelpTopics({ bundles = [], applications = [], names = [], enabled = true, }) {
        let params = new URLSearchParams('');
        params = appendQueryArray(params, 'bundle', bundles);
        params = appendQueryArray(params, 'application', applications);
        params = appendQueryArray(params, 'name', names);
        try {
            const { data } = await _redhat_cloud_services_frontend_components_utilities_interceptors__WEBPACK_IMPORTED_MODULE_1__.default.get(`/api/quickstarts/v1/helptopics?${params.toString()}`);
            addHelpTopics(data.map(({ content }) => content), enabled);
        }
        catch (error) {
            console.error('Unable to fetch help topics', error);
        }
    }
    async function enableTopics(...topicsNames) {
        const newTopics = [];
        const existingTopics = [];
        topicsNames.forEach((name) => {
            if (typeof helpTopics[name] === 'undefined') {
                newTopics.push(name);
            }
            else {
                existingTopics.push(name);
            }
        });
        const tasks = [];
        if (newTopics.length > 0) {
            tasks.push(fetchHelpTopics({ enabled: true, names: newTopics }));
        }
        batchToggleTopic(existingTopics, true);
        return await Promise.all(tasks);
    }
    function disableTopics(...topicsNames) {
        batchToggleTopic(topicsNames, false);
    }
    return {
        helpTopics: Object.values(helpTopics).filter(({ name }) => activeTopics?.[name]),
        addHelpTopics,
        disableTopics,
        enableTopics,
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHelpTopicState);


/***/ }),

/***/ "./src/js/App/Sidenav/Navigation/ChromeLink.tsx":
/*!******************************************************!*\
  !*** ./src/js/App/Sidenav/Navigation/ChromeLink.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scalprum_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @scalprum/core */ "./node_modules/@scalprum/core/dist/esm/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/actions */ "./src/js/redux/actions.ts");
/* harmony import */ var _navContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navContext */ "./src/js/App/Sidenav/Navigation/navContext.ts");






const useDynamicModule = (appId) => {
    const [isDynamic, setIsDynamic] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const { modules, activeModule } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(({ chrome: { modules = {}, activeModule } }) => ({
        modules,
        activeModule,
    }));
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const currentModule = modules[appId];
        if (appId === 'dynamic') {
            setIsDynamic(true);
        }
        else if (!currentModule) {
            setIsDynamic(false);
        }
        else if (appId === activeModule) {
            setIsDynamic(true);
        }
        else if (currentModule && appId !== activeModule) {
            setIsDynamic(currentModule.dynamic !== false && modules[activeModule]?.dynamic !== false);
        }
    }, [appId]);
    return isDynamic;
};
const LinkWrapper = ({ href, isBeta, onLinkClick, className, currAppId, appId, children, tabIndex }) => {
    const linkRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const moduleRoutes = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(({ chrome: { moduleRoutes } }) => moduleRoutes);
    const moduleEntry = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => moduleRoutes.find((route) => href.includes(route.path)), [href, appId]);
    const preloadTimeout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    let actionId = href.split('/').slice(2).join('/');
    if (actionId.includes('/')) {
        actionId = actionId.split('/').pop();
    }
    if (currAppId !== appId && href.split('/').length === 3) {
        actionId = '/';
    }
    /**
     * If the sub nav item points to application root
     * eg. /openshift/cost-management we don't want to send "/cost-management" but "/"
     * We are not in app sub route but in app root
     */
    const domEvent = {
        href,
        id: actionId,
        navId: actionId,
        /**
         * @deprecated
         * Remove once nav overhaul is in all environments
         */
        type: 'click',
    };
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const onClick = (event) => {
        if (event.ctrlKey || event.shiftKey) {
            return false;
        }
        if (onLinkClick && isBeta) {
            if (!onLinkClick(event, href)) {
                return false;
            }
        }
        /**
         * Add reference to the DOM link element
         */
        domEvent.target = linkRef.current;
        dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_4__.appNavClick)({ id: actionId }, domEvent));
    };
    // turns /settings/rbac/roles -> settings_rbac_roles
    const quickStartHighlightId = href
        .split('/')
        .slice(href.startsWith('/') ? 1 : 0)
        .join('_');
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, { onMouseEnter: () => {
            if (moduleEntry) {
                preloadTimeout.current = setTimeout(() => {
                    (0,_scalprum_core__WEBPACK_IMPORTED_MODULE_3__.preloadModule)(moduleEntry?.scope, moduleEntry?.module);
                }, 250);
            }
        }, onMouseLeave: () => {
            if (preloadTimeout.current) {
                clearTimeout(preloadTimeout.current);
            }
        }, tabIndex: tabIndex, ref: linkRef, "data-testid": "router-link", onClick: onClick, to: href, className: className, "data-quickstart-id": quickStartHighlightId }, children));
};
const basepath = document.baseURI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cleanRefreshLinkProps = ({ active, onClick, appId, currAppId, ...rest }) => rest;
const RefreshLink = (props) => {
    const { href, isExternal, onLinkClick, isBeta, ...rest } = cleanRefreshLinkProps(props);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { "data-testid": "native-link", href: isExternal ? href : `${basepath}${href.replace(/^\//, '')}`, ...(isExternal
            ? {
                rel: 'noreferrer noopener',
                target: '_blank',
            }
            : {}), onClick: (event) => {
            if (onLinkClick && isBeta && !isExternal) {
                if (!onLinkClick(event, href)) {
                    return false;
                }
            }
        }, ...rest }));
};
const ChromeLink = ({ appId, children, ...rest }) => {
    const { onLinkClick, isNavOpen, inPageLayout } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_navContext__WEBPACK_IMPORTED_MODULE_5__.default);
    const currAppId = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(({ chrome }) => chrome?.appId);
    const isDynamic = useDynamicModule(appId);
    if (!rest.isExternal && typeof isDynamic === 'undefined') {
        return null;
    }
    const LinkComponent = !rest.isExternal && isDynamic ? LinkWrapper : RefreshLink;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LinkComponent, { ...(inPageLayout && !isNavOpen ? { tabIndex: -1 } : {}), onLinkClick: onLinkClick, appId: appId, currAppId: currAppId, ...rest }, children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChromeLink);


/***/ }),

/***/ "./src/js/App/Sidenav/Navigation/Loader.tsx":
/*!**************************************************!*\
  !*** ./src/js/App/Sidenav/Navigation/Loader.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Skeleton */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Skeleton/Skeleton.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?9cbb");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);



const NavLoader = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", { className: "chr-c-app-switcher--loading" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_2__.default, { isDark: true, size: _redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_2__.SkeletonSize.lg })),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Nav, { "aria-label": "Insights Global Navigation", "data-ouia-safe": "false", ouiaId: "SideNavigation" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.NavList, null, [...new Array(4)].map((_i, key) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.NavItem, { key: key, preventDefault: true },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "#" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_2__.default, { isDark: true, size: _redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_2__.SkeletonSize.lg })))))))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLoader);


/***/ }),

/***/ "./src/js/App/Sidenav/Navigation/navContext.ts":
/*!*****************************************************!*\
  !*** ./src/js/App/Sidenav/Navigation/navContext.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const NavContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavContext);


/***/ }),

/***/ "./src/js/App/Stratosphere/RedirectBanner.tsx":
/*!****************************************************!*\
  !*** ./src/js/App/Stratosphere/RedirectBanner.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STRATOSPHERE_BANNER_NAME": () => (/* binding */ STRATOSPHERE_BANNER_NAME),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?9cbb");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);




// TODO: Figure out what param chrome should expect
const STRATOSPHERE_BANNER_NAME = 'from-aws';
const RedirectBanner = () => {
    const { replace, location: { pathname, search, hash, state }, } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory)();
    const params = new URLSearchParams(search);
    const product = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state) => state.chrome.activeProduct);
    const handleClose = () => {
        // remove only the flag search param
        params.delete(STRATOSPHERE_BANNER_NAME);
        // only change the search params
        replace({
            pathname,
            search: params.toString(),
            hash,
            state,
        });
    };
    // show the banner only if correct search param exists
    return params.has(STRATOSPHERE_BANNER_NAME) ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Alert, { actionClose: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.AlertActionCloseButton, { "data-testid": "stratosphere-banner-close", onClose: handleClose }), isInline: true, variant: "success", title: "Congratulations, your Red Hat and AWS accounts are linked" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextContent, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, null,
                "Welcome to the Red Hat Hybrid Cloud Console. If you cannot access production tools for a subscription that you have purchased, please wait 5 minutes and and confirm your subscription at subscription inventory. ",
                product ? `Here you can configure or manage ${product}` : '',
                "."),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "#" }, "View subscription inventory")))) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RedirectBanner);


/***/ }),

/***/ "./src/js/App/analytics/segment-analytics.tsx":
/*!****************************************************!*\
  !*** ./src/js/App/analytics/segment-analytics.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentContext": () => (/* binding */ SegmentContext),
/* harmony export */   "SegmentProvider": () => (/* binding */ SegmentProvider),
/* harmony export */   "useSegment": () => (/* binding */ useSegment)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _segment_analytics_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @segment/analytics-next */ "./node_modules/@segment/analytics-next/dist/pkg/browser.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/js/utils.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Messages */ "./src/js/Messages.ts");







const KEY_FALLBACK = {
    prod: 'nm7VsnYsBVJ9MqjaVInft69pAkhCXq9Q',
    dev: 'Aoak9IFNixtkZJRatfZG9cY1RHxbATW1',
};
const DEV_ENV = localStorage.getItem('chrome:analytics:dev') === 'true' || !(0,_utils__WEBPACK_IMPORTED_MODULE_1__.isProd)();
function getAdobeVisitorId() {
    const visitor = window?.s?.visitor;
    if (visitor) {
        return visitor.getMarketingCloudVisitorID();
    }
    return -1;
}
const getPageEventOptions = () => {
    const path = window.location.pathname.replace(/^\/beta\//, '/');
    return [
        {
            path,
            url: `${window.location.origin}${path}${window.location.search}`,
            isBeta: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.isBeta)(),
            module: window._segment?.activeModule,
            ...window?._segment?.pageOptions,
        },
        {
            context: {
                groupId: window._segment?.groupId,
            },
        },
    ];
};
const getAPIKey = (env = 'dev', module, moduleAPIKey) => moduleAPIKey ||
    {
        prod: {
            openshift: 'z3Ic4EtzJtHrhXfpKgViJmf2QurSxXb9',
        },
        dev: {
            openshift: 'A8iCO9n9Ax9ObvHBgz4hMC9htKB0AdKj',
        },
    }[env]?.[module] ||
    KEY_FALLBACK[env];
const registerUrlObserver = () => {
    /**
     * We ignore hash changes
     * Hashes only have frontend effect
     */
    let oldHref = document.location.href.replace(/#.*$/, '');
    const bodyList = document.body;
    const observer = new MutationObserver((mutations) => {
        mutations.forEach(() => {
            const newLocation = document.location.href.replace(/#.*$/, '');
            if (oldHref !== newLocation) {
                oldHref = newLocation;
                window?.sendCustomEvent?.('pageBottom');
                setTimeout(() => {
                    window.segment?.page(...getPageEventOptions());
                });
            }
        });
    });
    observer.observe(bodyList, {
        childList: true,
        subtree: true,
    });
    return observer.disconnect;
};
const isInternal = (email = '') => /@(redhat\.com|.*ibm\.com)$/gi.test(email);
const emailDomain = (email = '') => (/@/g.test(email) ? email.split('@')[1].toLowerCase() : null);
const getPagePathSegment = (pathname, n) => pathname.split('/')[n] || '';
const getIdentityTrais = (user, pathname, activeModule = '') => {
    const entitlements = Object.entries(user.entitlements).reduce((acc, [key, entitlement]) => ({
        ...acc,
        [`entitlements_${key}`]: entitlement.is_entitled,
        [`entitlements_${key}_trial`]: entitlement.is_trial,
    }), {});
    const email = user.identity.user?.email;
    return {
        cloud_user_id: user.identity.internal?.account_id,
        adobe_cloud_visitor_id: getAdobeVisitorId(),
        internal: isInternal(email),
        email_domain: emailDomain(email),
        lang: user.identity.user?.locale,
        isOrgAdmin: user.identity.user?.is_org_admin,
        currentBundle: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getUrl)('bundle'),
        currentApp: activeModule,
        isBeta: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.isBeta)(),
        ...[...Array(5)].reduce((acc, _, i) => ({
            ...acc,
            [`urlSegment${i + 1}`]: getPagePathSegment(pathname, i + 1),
        }), {}),
        ...entitlements,
    };
};
const SegmentContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    ready: false,
    analytics: undefined,
});
const SegmentProvider = ({ activeModule, children }) => {
    const isDisabled = localStorage.getItem('chrome:analytics:disable') === 'true';
    const analytics = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(({ chrome: { user } }) => user);
    const moduleAPIKey = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(({ chrome: { modules } }) => modules?.[activeModule]?.analytics?.APIKey);
    const { pathname } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const disconnect = registerUrlObserver();
        return () => disconnect();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!isDisabled && activeModule && user) {
            /**
             * Clean up custom page event data after module change
             */
            window._segment = {
                groupId: user.identity.internal?.org_id,
                activeModule,
            };
            const newKey = getAPIKey(DEV_ENV ? 'dev' : 'prod', activeModule, moduleAPIKey);
            const identityTraits = getIdentityTrais(user, pathname, activeModule);
            const identityOptions = {
                context: {
                    groupId: user.identity.internal?.org_id,
                },
                cloud_user_id: user.identity.internal?.account_id,
                adobe_cloud_visitor_id: getAdobeVisitorId(),
            };
            const groupTraits = {
                account_number: user.identity.account_number,
                account_id: user.identity.internal?.org_id,
                cloud_org_id: user.identity.internal?.org_id,
                cloud_ebs_id: user.identity.account_number,
            };
            if (!analytics.current) {
                analytics.current = _segment_analytics_next__WEBPACK_IMPORTED_MODULE_5__.AnalyticsBrowser.load({ writeKey: newKey }, { initialPageview: false });
                window.segment = analytics.current;
                analytics.current.identify(user.identity.internal?.account_id, identityTraits, identityOptions);
                analytics.current.group(user.identity.internal?.org_id, groupTraits);
                analytics.current.page(...getPageEventOptions());
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore TS does not allow accessing the instance settings but its necessary for us to not create instances if we don't have to
            }
            else if (!isDisabled && analytics.current?.instance?.settings.writeKey !== newKey) {
                window.segment = undefined;
                analytics.current = _segment_analytics_next__WEBPACK_IMPORTED_MODULE_5__.AnalyticsBrowser.load({ writeKey: newKey }, { initialPageview: false, disableClientPersistence: true });
                window.segment = analytics.current;
                analytics.current.identify(user.identity.internal?.account_id, identityTraits, identityOptions);
                analytics.current.group(user.identity.internal?.org_id, groupTraits);
            }
        }
    }, [activeModule, user]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SegmentContext.Provider, { value: {
            ready: true,
            analytics: analytics.current,
        } }, children));
};
function useSegment() {
    const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.default)();
    const ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SegmentContext);
    if (!ctx) {
        throw new Error(`${intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_4__.default.segmentError)}`);
    }
    return ctx;
}


/***/ }),

/***/ "./src/js/Messages.ts":
/*!****************************!*\
  !*** ./src/js/Messages.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* eslint-disable max-len */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
    activationTitle: {
        id: 'activationTitle',
        description: 'Thank you for submitting your activation request',
        defaultMessage: 'Thank you for submitting your activation request',
    },
    activationDescription: {
        id: 'activationDescription',
        description: 'Red Hat will be in touch within 1 business day to confirm your subscription benefits are ready to be activated.',
        defaultMessage: 'Red Hat will be in touch within 1 business day to confirm your subscription benefits are ready to be activated.',
    },
    segmentError: {
        id: 'segmentError',
        description: 'Context used outside of its Provider!',
        defaultMessage: 'Context used outside of its Provider!',
    },
    changesComing: {
        id: 'changesComing',
        description: 'Changes are coming to cloud.redhat.com on July 29.',
        defaultMessage: 'Changes are coming to cloud.redhat.com on July 29.',
    },
    learnMore: {
        id: 'learnMore',
        description: 'Learn more on our blog.',
        defaultMessage: 'Learn more on our blog.',
    },
    viewChanged: {
        id: 'viewChanged',
        description: 'View has changed',
        defaultMessage: 'View has changed',
    },
    viewAsCustomer: {
        id: 'viewAsCustomer',
        description: 'You are now viewing console.redhat.com as a customer, and will be interacting with real customer data.',
        defaultMessage: 'You are now viewing console.redhat.com as a customer, and will be interacting with real customer data.',
    },
    newRequestReview: {
        id: 'newRequestReview',
        description: 'You have a new access request that needs your review',
        defaultMessage: 'You have a new access request that needs your review',
    },
    noLongerHaveAccess: {
        id: 'noLongerHaveAccess',
        description: `You no longer have access to account {accountId}.`,
        defaultMessage: `You no longer have access to account {accountId}.`,
    },
    somethingWentWrong: {
        id: 'somethingWentWrong',
        description: 'Something went wrong',
        defaultMessage: 'Something went wrong',
    },
    globalRuntimeErrorId: {
        id: 'globalRuntimeErrorId',
        description: 'Global runtime error Id',
        defaultMessage: 'Sentry error ID: {errorId}',
    },
    problemProcessingRequest: {
        id: 'problemProcessingRequest',
        description: 'There was a problem processing the request. Try reloading the page. If the problem persists, contact',
        defaultMessage: 'There was a problem processing the request. Try reloading the page. If the problem persists, contact',
    },
    redHatSupport: {
        id: 'redHatSupport',
        description: 'Red Hat support',
        defaultMessage: 'Red Hat support',
    },
    checkOur: {
        id: 'checkOur',
        description: 'or check our',
        defaultMessage: 'or check our',
    },
    statusPage: {
        id: 'statusPage',
        description: 'Status page',
        defaultMessage: 'Status page',
    },
    knownOutages: {
        id: 'knownOutages',
        description: 'for known outages.',
        defaultMessage: 'for known outages.',
    },
    returnToHomepage: {
        id: 'returnToHomepage',
        description: 'Return to home page',
        defaultMessage: 'Return to home page',
    },
    shareYourFeedback: {
        id: 'shareYourFeedback',
        description: 'Share your feedback with us!',
        defaultMessage: 'Share your feedback with us!',
    },
    enterFeedback: {
        id: 'enterFeedback',
        description: 'Enter your feedback',
        defaultMessage: 'Enter your feedback',
    },
    researchOpportunities: {
        id: 'researchOpportunities',
        description: 'Yes, I would like to hear about research opportunities',
        defaultMessage: 'Yes, I would like to hear about research opportunities',
    },
    learnAboutResearchOpportunities: {
        id: 'learnAboutResearchOpportunities',
        description: 'Learn about opportunities to share your feedback with our User Research Team. We never shareyour personal information, and you can opt out at any time.',
        defaultMessage: 'Learn about opportunities to share your feedback with our User Research Team. We never shareyour personal information, and you can opt out at any time.',
    },
    email: {
        id: 'email',
        description: 'Email',
        defaultMessage: 'Email',
    },
    submitFeedback: {
        id: 'submitFeedback',
        description: 'Submit feedback',
        defaultMessage: 'Submit feedback',
    },
    cancel: {
        id: 'cancel',
        description: 'Cancel',
        defaultMessage: 'Cancel',
    },
    feedback: {
        id: 'feedback',
        description: 'Feedback',
        defaultMessage: 'Feedback',
    },
    tellAboutExperience: {
        id: 'tellAboutExperience',
        description: 'Tell us about your experience',
        defaultMessage: 'Tell us about your experience',
    },
    helpUsImproveHCC: {
        id: 'helpUsImproveHCC',
        description: 'Help us improve the Red Hat Hybrid Cloud Console.',
        defaultMessage: 'Help us improve the Red Hat Hybrid Cloud Console.',
    },
    shareFeedback: {
        id: 'shareFeedback',
        description: 'Share feedback',
        defaultMessage: 'Share feedback',
    },
    orShareIdeas: {
        id: 'orShareIdeas',
        description: 'or share your ideas.',
        defaultMessage: 'or share your ideas.',
    },
    reportBug: {
        id: 'reportBug',
        description: 'Report a bug',
        defaultMessage: 'Report a bug',
    },
    describeBug: {
        id: 'describeBug',
        description: 'Describe the bug you encountered. For urgent issues, open a support case instead.',
        defaultMessage: 'Describe the bug you encountered. For urgent issues, open a support case instead.',
    },
    openSupportCase: {
        id: 'openSupportCase',
        description: 'Open a support case ',
        defaultMessage: 'Open a support case ',
    },
    getSupport: {
        id: 'getSupport',
        description: 'Get help from Red Hat support.',
        defaultMessage: 'Get help from Red Hat support.',
    },
    submitOnlyInStageProd: {
        id: 'submitOnlyInStageProd',
        description: 'Submitting feedback only works in prod and stage',
        defaultMessage: 'Submitting feedback only works in prod and stage',
    },
    feedbackSent: {
        id: 'feedbackSent',
        description: 'Feedback Sent',
        defaultMessage: 'Feedback Sent',
    },
    thankYouForFeedback: {
        id: 'thankYouForFeedback',
        description: 'Thank you, we appreciate your feedback.',
        defaultMessage: 'Thank you, we appreciate your feedback.',
    },
    close: {
        id: 'close',
        description: 'Close',
        defaultMessage: 'Close',
    },
    showMore: {
        id: 'showMore',
        description: 'Show more',
        defaultMessage: 'Show more',
    },
    clearFilters: {
        id: 'clearFilters',
        description: 'Clear filters',
        defaultMessage: 'Clear filters',
    },
    noInventoryPermissions: {
        id: 'noInventoryPermissions',
        description: 'You do not have the required inventory permissions to perform this action',
        defaultMessage: 'You do not have the required inventory permissions to perform this action',
    },
    globalFilterNotApplicable: {
        id: 'globalFilterNotApplicable',
        description: 'Global filter is not applicable for this page',
        defaultMessage: 'Global filter is not applicable for this page',
    },
    filterResults: {
        id: 'filterResults',
        description: 'Filter results',
        defaultMessage: 'Filter results',
    },
    selectTagsOrSIDs: {
        id: 'selectTagsOrSIDs',
        description: 'Select one or more tags/SAP IDs (SID)',
        defaultMessage: 'Select one or more tags/SAP IDs (SID)',
    },
    name: {
        id: 'name',
        description: 'Name',
        defaultMessage: 'Name',
    },
    value: {
        id: 'value',
        description: 'Value',
        defaultMessage: 'Value',
    },
    tagSources: {
        id: 'tagSources',
        description: 'Tag sources',
        defaultMessage: 'Tag sources',
    },
    tagsFilter: {
        id: 'tagsFilter',
        description: 'Tags filter',
        defaultMessage: 'Tags filter',
    },
    filterTags: {
        id: 'filterTags',
        description: 'Filter tags',
        defaultMessage: 'Filter tags',
    },
    SIDsFilter: {
        id: 'SIDsFilter',
        description: 'SIDs Filter',
        defaultMessage: 'SIDs Filter',
    },
    filterSAPIDs: {
        id: 'filterSAPIDs',
        description: 'Filter SAP IDs',
        defaultMessage: 'Filter SAP IDs',
    },
    findAppOrService: {
        id: 'findAppOrService',
        description: 'Find an app or service',
        defaultMessage: 'Find an app or service',
    },
    noMatchingAppsFound: {
        id: 'noMatchingAppsFound',
        description: 'No matching applications or services found.',
        defaultMessage: 'No matching applications or services found.',
    },
    tryChangingSearch: {
        id: 'tryChangingSearch',
        description: 'This filter criteria matches no applications or services. Try changing your input filter.',
        defaultMessage: 'This filter criteria matches no applications or services. Try changing your input filter.',
    },
    personalAccount: {
        id: 'personalAccount',
        description: 'Personal account',
        defaultMessage: 'Personal account',
    },
    noResults: {
        id: 'noResults',
        description: 'No results',
        defaultMessage: 'No results',
    },
    searchAccount: {
        id: 'searchAccount',
        description: 'Search account',
        defaultMessage: 'Search account',
    },
    login: {
        id: 'login',
        description: 'Log in',
        defaultMessage: 'Log in',
    },
    stopUsing: {
        id: 'stopUsing',
        description: 'Stop using',
        defaultMessage: 'Stop using',
    },
    use: {
        id: 'use',
        description: 'Use',
        defaultMessage: 'Use',
    },
    betaRelease: {
        id: 'betaRelease',
        description: 'the beta release',
        defaultMessage: 'the beta release',
    },
    supportOptions: {
        id: 'supportOptions',
        description: 'Support options',
        defaultMessage: 'Support options',
    },
    apiDocumentation: {
        id: 'apiDocumentation',
        description: 'API documentation',
        defaultMessage: 'API documentation',
    },
    insightsRhelDocumentation: {
        id: 'insightsRhelDocumentation',
        description: 'Insights for RHEL Documentation',
        defaultMessage: 'Insights for RHEL Documentation',
    },
    demoMode: {
        id: 'demoMode',
        description: 'Demo mode',
        defaultMessage: 'Demo mode',
    },
    loggedOut: {
        id: 'loggedOut',
        description: 'You have successfully logged out.',
        defaultMessage: 'You have successfully logged out.',
    },
    useAccountNumber: {
        id: 'useAccountNumber',
        description: "Use this number when contacting Red hat for support. If you don't have any active subscriptions, you will not have an account number.",
        defaultMessage: "Use this number when contacting Red hat for support. If you don't have any active subscriptions, you will not have an account number.",
    },
    accountNumber: {
        id: 'accountNumber',
        description: 'Account number:',
        defaultMessage: 'Account number:',
    },
    orgAdministrator: {
        id: 'orgAdministrator',
        description: 'Org. Administrator',
        defaultMessage: 'Org. Administrator',
    },
    internalUser: {
        id: 'internalUser',
        description: 'Internal user',
        defaultMessage: 'Internal user',
    },
    myProfile: { id: 'myProfile', description: 'My profile', defaultMessage: 'My profile' },
    myUserAccess: { id: 'myUserAccess', description: 'My User Access', defaultMessage: 'MyUserAccess' },
    userPreferences: {
        id: 'userPreferences',
        description: 'User Preferences',
        defaultMessage: 'User Preferences',
    },
    internal: {
        id: 'internal',
        description: 'Internal',
        defaultMessage: 'Internal',
    },
    logout: {
        id: 'logout',
        description: 'Log out',
        defaultMessage: 'Log out',
    },
    home: {
        id: 'home',
        description: 'Home',
        defaultMessage: 'Home',
    },
    viewingAsAccount: {
        id: 'viewingAsAccount',
        description: 'Viewing as Account {selectedAccountNumber}',
        defaultMessage: 'Viewing as Account {selectedAccountNumber}',
    },
    viewRequest: {
        id: 'viewRequest',
        description: 'View request',
        defaultMessage: 'View request',
    },
    username: {
        id: 'username',
        description: 'Username:',
        defaultMessage: 'Username:',
    },
    authFailure: {
        id: 'authFailure',
        description: 'Authorization failure',
        defaultMessage: 'Authorization failure',
    },
    accessRestricted: {
        id: 'accessRestricted',
        description: 'Access to this page is reserved for third party IDP token from users on authorized accounts.',
        defaultMessage: 'Access to this page is reserved for third party IDP token from users on authorized accounts.',
    },
    tryUsingDifferentAccount: {
        id: 'tryUsingDifferentAccount',
        description: 'Try using different account',
        defaultMessage: 'Try using different account',
    },
    quickStarts: {
        id: 'quickStarts',
        description: 'Quick starts',
        defaultMessage: 'Quick starts',
    },
    learnHowTo: {
        id: 'learnHowTo',
        description: 'Learn how to create, import, and run applications with step-by-step instructions and tasks.',
        defaultMessage: 'Learn how to create, import, and run applications with step-by-step instructions and tasks.',
    },
    unableToLoadQuickstartsContent: {
        id: 'unableToLoadQuickstartsContent',
        description: 'Unable to load the quickstarts content.',
        defaultMessage: 'Unable to load the quickstarts content.',
    },
    thereWillBeACatalgPage: {
        id: 'thereWillBeACatalgPage',
        description: 'There will be a catalog page for {bundle} bundle',
        defaultMessage: 'There will be a catalog page for {bundle} bundle',
    },
    tryThisFeatureInBeta: {
        id: 'tryThisFeatureInBeta',
        description: 'Try this feature in our Beta Environment on cloud.redhat.com/beta. The Beta Environment allows you to interact with new features in an active development space. Because beta pre-release software is still being developed, you may encounter bugs or flaws in availability, stability, data, or performance.',
        defaultMessage: 'Try this feature in our Beta Environment on cloud.redhat.com/beta. The Beta Environment allows you to interact with new features in an active development space. Because beta pre-release software is still being developed, you may encounter bugs or flaws in availability, stability, data, or performance.',
    },
    afterBetaUse: {
        id: 'afterBetaUse',
        description: 'After you use a feature in beta, you’ll stay in the Beta Environment until you manually exit the beta release. Leave the Beta Environment any time by clicking on the settings (gear) icon or beta icon in the top toolbar.',
        defaultMessage: 'After you use a feature in beta, you’ll stay in the Beta Environment until you manually exit the beta release. Leave the Beta Environment any time by clicking on the settings (gear) icon or beta icon in the top toolbar.',
    },
    useFeatureInBeta: {
        id: 'useFeatureInBeta',
        description: 'Use feature in beta',
        defaultMessage: 'Use feature in beta',
    },
    learnMoreABoutBeta: {
        id: 'learnMoreABoutBeta',
        description: 'Learn more about Beta Environment',
        defaultMessage: 'Learn more about Beta Environment',
    },
    permissionErrorDescription: {
        id: 'permissionErrorDescription',
        defaultMessage: 'Contact your organization administrator(s) for more information or visit <MuaLink>My User Access</MuaLink> to learn more about your permissions.',
    },
    permissionErrorDetail: {
        id: 'permissionErrorDetail',
        defaultMessage: 'Detail: {message}.',
    },
    filterByTags: {
        id: 'filterByTags',
        description: 'Placeholder to indicate ',
        defaultMessage: 'Filter by tags',
    },
}));


/***/ }),

/***/ "./src/js/auth.ts":
/*!************************!*\
  !*** ./src/js/auth.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "crossAccountBouncer": () => (/* binding */ crossAccountBouncer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jwt_insights_offline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwt/insights/offline */ "./src/js/jwt/insights/offline.ts");
/* harmony import */ var _jwt_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt/jwt */ "./src/js/jwt/jwt.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _jwt_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwt/constants */ "./src/js/jwt/constants.ts");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consts */ "./src/js/consts.ts");





const TIMER_STR = '[JWT][jwt.js] Auth time';
function bouncer() {
    if (!_jwt_jwt__WEBPACK_IMPORTED_MODULE_1__.isAuthenticated()) {
        js_cookie__WEBPACK_IMPORTED_MODULE_2__.default.remove(_jwt_constants__WEBPACK_IMPORTED_MODULE_3__.options.cookieName);
        _jwt_jwt__WEBPACK_IMPORTED_MODULE_1__.login();
    }
    console.timeEnd(TIMER_STR); // eslint-disable-line no-console
}
function crossAccountBouncer() {
    const requestCookie = js_cookie__WEBPACK_IMPORTED_MODULE_2__.default.get(_consts__WEBPACK_IMPORTED_MODULE_4__.CROSS_ACCESS_ACCOUNT_NUMBER);
    if (requestCookie) {
        localStorage.setItem(_consts__WEBPACK_IMPORTED_MODULE_4__.ACCOUNT_REQUEST_TIMEOUT, requestCookie);
        localStorage.removeItem(_consts__WEBPACK_IMPORTED_MODULE_4__.ACTIVE_REMOTE_REQUEST);
    }
    js_cookie__WEBPACK_IMPORTED_MODULE_2__.default.remove(_consts__WEBPACK_IMPORTED_MODULE_4__.CROSS_ACCESS_ACCOUNT_NUMBER);
    js_cookie__WEBPACK_IMPORTED_MODULE_2__.default.remove(_consts__WEBPACK_IMPORTED_MODULE_4__.CROSS_ACCESS_ORG_ID);
    window.location.reload();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ ssoUrl }) => {
    console.time(TIMER_STR); // eslint-disable-line no-console
    const options = {
        ..._jwt_constants__WEBPACK_IMPORTED_MODULE_3__.options,
    };
    (0,_jwt_insights_offline__WEBPACK_IMPORTED_MODULE_0__.wipePostbackParamsThatAreNotForUs)();
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_2__.default.get(options.cookieName);
    // If we find an existing token, use it
    // so that we dont auth even when a valid token is present
    // otherwise its quick, but we bounce around and get a new token
    // on every page load
    if (token && token.length > 10) {
        options.token = token;
    }
    const promise = _jwt_jwt__WEBPACK_IMPORTED_MODULE_1__.init(options, ssoUrl).then(bouncer);
    return {
        getOfflineToken: () => (0,_jwt_insights_offline__WEBPACK_IMPORTED_MODULE_0__.getOfflineToken)(options.realm, options.clientId, ssoUrl),
        jwt: _jwt_jwt__WEBPACK_IMPORTED_MODULE_1__,
        initPromise: promise,
    };
});


/***/ }),

/***/ "./src/js/chrome/create-chrome.ts":
/*!****************************************!*\
  !*** ./src/js/chrome/create-chrome.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _iqeEnablement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iqeEnablement */ "./src/js/chrome/iqeEnablement.ts");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entry */ "./src/js/chrome/entry.ts");
/* harmony import */ var _initialize_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initialize-jwt */ "./src/js/chrome/initialize-jwt.ts");
/* harmony import */ var _rbac_fetchPermissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rbac/fetchPermissions */ "./src/js/rbac/fetchPermissions.ts");




/**
 * Create a chrome API instance
 * @param {object} jwt JWT auth functions
 * @param {object} insights existing insights instance
 */
const createChromeInstance = (jwt, insights, globalConfig, store) => {
    const libjwt = jwt;
    const chromeInstance = {
        cache: undefined,
    };
    // initialize qe instance globally
    _iqeEnablement__WEBPACK_IMPORTED_MODULE_0__.default.init(store);
    const jwtResolver = (0,_initialize_jwt__WEBPACK_IMPORTED_MODULE_2__.default)(libjwt, chromeInstance);
    const init = () => {
        /**
         * Mutate the root element to enable QA during app init.
         * Previously was done from applications after react-dom render.
         */
        const rootEl = document.getElementById('root');
        if (rootEl) {
            rootEl.setAttribute('data-ouia-safe', 'true');
        }
        const initializedChrome = {
            ...window.insights.chrome,
            ...(0,_entry__WEBPACK_IMPORTED_MODULE_1__.chromeInit)(),
        };
        window.insights.chrome = initializedChrome;
        return initializedChrome;
    };
    /**
     * here we need to init the qe plugin
     * the "contract" is we will do this before anyone
     * calls/finishes getUser
     * this only does something if the correct localstorage
     * vars are set
     */
    const getUser = () => {
        return libjwt.initPromise.then(libjwt.jwt.getUserInfo).catch(() => {
            libjwt.jwt.logoutAllTabs();
        });
    };
    /**
     * Guard async cache dependent functions until cache is created
     * @param {function} fn function that requires global chrome cache
     * @returns {Promise}
     */
    const bufferAsyncFunction = (fn) => {
        if (chromeInstance.cache) {
            return fn;
        }
        /**
         * Wait for JWT initialization to happen and cache initialization in chrome instance
         */
        return (...args) => jwtResolver.then(() => fn(...(args || [])));
    };
    const fetchPermissions = bufferAsyncFunction((0,_rbac_fetchPermissions__WEBPACK_IMPORTED_MODULE_3__.createFetchPermissionsWatcher)());
    const bootstrapFunctions = (0,_entry__WEBPACK_IMPORTED_MODULE_1__.bootstrap)(libjwt, init, getUser, globalConfig);
    const chromeFunctions = {
        ...bootstrapFunctions,
        chrome: {
            ...bootstrapFunctions.chrome,
            getUserPermissions: async (app = '', bypassCache) => {
                await getUser();
                return fetchPermissions(libjwt.jwt.getEncodedToken(), app, bypassCache);
            },
        },
    };
    return {
        ...insights,
        ...chromeFunctions,
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createChromeInstance);


/***/ }),

/***/ "./src/js/chrome/entry.ts":
/*!********************************!*\
  !*** ./src/js/chrome/entry.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chromeInit": () => (/* binding */ chromeInit),
/* harmony export */   "bootstrap": () => (/* binding */ bootstrap)
/* harmony export */ });
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../redux/actions */ "./src/js/redux/actions.ts");
/* harmony import */ var _redux_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux-config */ "./src/js/redux-config.ts");
/* harmony import */ var _iqeEnablement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iqeEnablement */ "./src/js/chrome/iqeEnablement.ts");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../consts */ "./src/js/consts.ts");
/* harmony import */ var _utils_chromeHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/chromeHistory */ "./src/js/utils/chromeHistory.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/js/utils.ts");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _createCase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../createCase */ "./src/js/createCase.ts");
/* harmony import */ var _redux_action_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/action-types */ "./src/js/redux/action-types.ts");
/* harmony import */ var _App_GlobalFilter_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../App/GlobalFilter/constants */ "./src/js/App/GlobalFilter/constants.ts");
/* harmony import */ var _debugFunctions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../debugFunctions */ "./src/js/debugFunctions.ts");













const PUBLIC_EVENTS = {
    APP_NAVIGATION: [
        (callback) => {
            const appNavListener = {
                on: _redux_action_types__WEBPACK_IMPORTED_MODULE_9__.APP_NAV_CLICK,
                callback: ({ data }) => {
                    if (data.id !== undefined || data.event) {
                        callback({ navId: data.id, domEvent: data.event });
                    }
                },
            };
            return appNavListener;
        },
    ],
    NAVIGATION_TOGGLE: [
        (callback) => {
            console.warn('NAVIGATION_TOGGLE event is deprecated and will be removed in future versions of chrome.');
            return {
                on: 'NAVIGATION_TOGGLE',
                callback,
            };
        },
    ],
    GLOBAL_FILTER_UPDATE: [
        (callback) => ({
            on: _redux_action_types__WEBPACK_IMPORTED_MODULE_9__.GLOBAL_FILTER_UPDATE,
            callback,
        }),
        'globalFilter.selectedTags',
    ],
};
function chromeInit() {
    const { store, actions, middlewareListener } = (0,_redux_config__WEBPACK_IMPORTED_MODULE_1__.spinUpStore)();
    // public API actions
    const { appAction, appObjectId, appNavClick } = actions;
    return {
        appAction,
        appNavClick: ({ secondaryNav, ...payload }) => {
            appNavClick({
                ...payload,
                custom: true,
            });
        },
        appObjectId,
        globalFilterScope: (scope) => store.dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_0__.globalFilterScope)(scope)),
        hideGlobalFilter: (isHidden) => {
            const initialHash = store.getState()?.chrome?.initialHash;
            /**
             * Restore app URL hash fragment after the global filter is disabled
             */
            if (initialHash) {
                _utils_chromeHistory__WEBPACK_IMPORTED_MODULE_4__.default.replace({
                    ..._utils_chromeHistory__WEBPACK_IMPORTED_MODULE_4__.default.location,
                    hash: initialHash,
                });
                store.dispatch({ type: _redux_action_types__WEBPACK_IMPORTED_MODULE_9__.STORE_INITIAL_HASH });
            }
            store.dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_0__.toggleGlobalFilter)(isHidden));
        },
        identifyApp: (_data, appTitle, noSuffix) => {
            (0,_utils__WEBPACK_IMPORTED_MODULE_6__.updateDocumentTitle)(appTitle, noSuffix);
            return Promise.resolve();
        },
        mapGlobalFilter: _App_GlobalFilter_constants__WEBPACK_IMPORTED_MODULE_10__.flatTags,
        navigation: () => console.error("Don't use insights.chrome.navigation, it has been deprecated!"),
        on: (type, callback) => {
            if (!Object.prototype.hasOwnProperty.call(PUBLIC_EVENTS, type)) {
                throw new Error(`Unknown event type: ${type}`);
            }
            const [listener, selector] = PUBLIC_EVENTS[type];
            if (type !== 'APP_NAVIGATION' && typeof selector === 'string') {
                callback({
                    data: lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(store.getState(), selector) || {},
                });
            }
            if (typeof listener === 'function') {
                return middlewareListener.addNew(listener(callback));
            }
        },
        registerModule: (module, manifest) => store.dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_0__.registerModule)(module, manifest)),
        removeGlobalFilter: (isHidden) => store.dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_0__.removeGlobalFilter)(isHidden)),
        updateDocumentTitle: _utils__WEBPACK_IMPORTED_MODULE_6__.updateDocumentTitle,
        $internal: { store },
    };
}
function bootstrap(libjwt, initFunc, getUser, globalConfig) {
    const { store } = (0,_redux_config__WEBPACK_IMPORTED_MODULE_1__.spinUpStore)();
    return {
        chrome: {
            auth: {
                getOfflineToken: () => libjwt.getOfflineToken(),
                doOffline: () => libjwt.jwt.doOffline(_consts__WEBPACK_IMPORTED_MODULE_3__.default.noAuthParam, _consts__WEBPACK_IMPORTED_MODULE_3__.default.offlineToken, globalConfig?.chrome?.ssoUrl || globalConfig?.chrome?.config?.ssoUrl),
                getToken: () => libjwt.initPromise.then(() => libjwt.jwt.getUserInfo().then(() => libjwt.jwt.getEncodedToken())),
                getUser,
                qe: {
                    ..._iqeEnablement__WEBPACK_IMPORTED_MODULE_2__.default,
                    init: () => _iqeEnablement__WEBPACK_IMPORTED_MODULE_2__.default.init(store),
                },
                logout: (bounce) => libjwt.jwt.logoutAllTabs(bounce),
                login: () => libjwt.jwt.login(),
            },
            isProd: () => (0,_utils__WEBPACK_IMPORTED_MODULE_6__.isProd)(),
            isBeta: _utils__WEBPACK_IMPORTED_MODULE_6__.isBeta,
            isPenTest: () => (js_cookie__WEBPACK_IMPORTED_MODULE_5__.default.get('x-rh-insights-pentest') ? true : false),
            forceDemo: () => js_cookie__WEBPACK_IMPORTED_MODULE_5__.default.set('cs_demo', 'true'),
            isDemo: () => (js_cookie__WEBPACK_IMPORTED_MODULE_5__.default.get('cs_demo') ? true : false),
            getBundle: () => (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getUrl)('bundle'),
            getApp: () => (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getUrl)('app'),
            getEnvironment: () => (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getEnv)(),
            getEnvironmentDetails: () => (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getEnvDetails)(),
            createCase: (fields) => window.insights.chrome.auth.getUser().then((user) => (0,_createCase__WEBPACK_IMPORTED_MODULE_8__.createSupportCase)(user.identity, libjwt, fields)),
            visibilityFunctions: _consts__WEBPACK_IMPORTED_MODULE_3__.visibilityFunctions,
            init: initFunc,
            isChrome2: true,
            enable: _debugFunctions__WEBPACK_IMPORTED_MODULE_11__.default,
            globalConfig,
        },
        experimental: {},
    };
}


/***/ }),

/***/ "./src/js/chrome/initialize-jwt.ts":
/*!*****************************************!*\
  !*** ./src/js/chrome/initialize-jwt.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jwt_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jwt/jwt */ "./src/js/jwt/jwt.ts");
/* harmony import */ var _redux_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux-config */ "./src/js/redux-config.ts");
/* harmony import */ var _utils_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/cache */ "./src/js/utils/cache.ts");



const initializeJWT = async (libjwt, chromeInstance) => {
    const { actions } = (0,_redux_config__WEBPACK_IMPORTED_MODULE_1__.spinUpStore)();
    try {
        await libjwt.initPromise;
        const user = await libjwt.jwt.getUserInfo();
        if (user) {
            actions.userLogIn(user);
        }
        const encodedToken = libjwt.jwt.getEncodedToken();
        if (encodedToken) {
            chromeInstance.cache = new _utils_cache__WEBPACK_IMPORTED_MODULE_2__.CacheAdapter('chrome-store', `${(0,_jwt_jwt__WEBPACK_IMPORTED_MODULE_0__.decodeToken)(encodedToken).session_state}-chrome-store`);
        }
    }
    catch {
        actions.userLogIn(false);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeJWT);


/***/ }),

/***/ "./src/js/chrome/iqeEnablement.ts":
/*!****************************************!*\
  !*** ./src/js/chrome/iqeEnablement.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth */ "./src/js/auth.ts");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/actions */ "./src/js/redux/actions.ts");
/* harmony import */ var _utils_responseInterceptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/responseInterceptors */ "./src/js/utils/responseInterceptors.ts");



// TODO: Refactor this file to use modern JS
let xhrResults = [];
let fetchResults = {};
const DENINED_CROSS_CHECK = 'Access denied from RBAC on cross-access check';
function init(store) {
    const open = window.XMLHttpRequest.prototype.open;
    const send = window.XMLHttpRequest.prototype.send;
    const oldFetch = window.fetch;
    fetchResults = {};
    const iqeEnabled = window.localStorage && window.localStorage.getItem('iqe:chrome:init') === 'true';
    if (iqeEnabled) {
        console.log('[iqe] initialized'); // eslint-disable-line no-console
    }
    // must use function here because arrows dont "this" like functions
    window.XMLHttpRequest.prototype.open = function openReplacement(_method, url) {
        // @ts-ignore
        this._url = url;
        // @ts-ignore
        const req = open.apply(this, arguments);
        return req;
    };
    // must use function here because arrows dont "this" like functions
    window.XMLHttpRequest.prototype.send = function sendReplacement() {
        // eslint-disable-line func-names
        if (iqeEnabled) {
            xhrResults.push(this);
        }
        this.onload = function () {
            if (this.status >= 400) {
                const gatewayError = (0,_utils_responseInterceptors__WEBPACK_IMPORTED_MODULE_2__.get3scaleError)(this.response);
                if (this.status === 403 && this.responseText.includes(DENINED_CROSS_CHECK)) {
                    (0,_auth__WEBPACK_IMPORTED_MODULE_0__.crossAccountBouncer)();
                    // check for 3scale error
                }
                else if (gatewayError) {
                    store.dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_1__.setGatewayError)(gatewayError));
                }
            }
        };
        // @ts-ignore
        return send.apply(this, arguments);
    };
    /**
     * Check response errors for cross_account requests.
     * If we get error response with specific cross account error message, we kick the user out of the corss account session.
     */
    window.fetch = function fetchReplacement(path = '', options, ...rest) {
        const tid = Math.random().toString(36);
        const prom = oldFetch.apply(this, [
            path,
            {
                ...(options || {}),
                headers: {
                    ...((options && options.headers) || {}),
                },
            },
            ...rest,
        ]);
        if (iqeEnabled) {
            fetchResults[tid] = arguments[0];
            prom
                .then(function () {
                delete fetchResults[tid];
            })
                .catch(function (err) {
                delete fetchResults[tid];
                throw err;
            });
        }
        return prom
            .then(async (res) => {
            if (!res.ok) {
                try {
                    const isJson = res?.headers?.get('content-type')?.includes('application/json');
                    const data = isJson ? await res.json() : await res.text();
                    const gatewayError = (0,_utils_responseInterceptors__WEBPACK_IMPORTED_MODULE_2__.get3scaleError)(data);
                    if (gatewayError) {
                        store.dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_1__.setGatewayError)(gatewayError));
                    }
                    return {
                        ...res,
                        headers: res.headers,
                        ...(isJson ? { json: () => Promise.resolve(data) } : { text: () => Promise.resolve(data) }),
                    };
                }
                catch (error) {
                    console.error('unable to check unauthotized response', error);
                    return res;
                }
            }
            return res;
        })
            .catch((err) => {
            console.log(err);
            throw err;
        });
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    init: (store) => {
        init(store);
    },
    hasPendingAjax: () => {
        const xhrRemoved = xhrResults.filter((result) => result.readyState === 4 || result.readyState === 0);
        xhrResults = xhrResults.filter((result) => result.readyState !== 4 && result.readyState !== 0);
        // @ts-ignore
        xhrRemoved.map((e) => console.log(`[iqe] xhr complete:   ${e._url}`));
        // @ts-ignore
        xhrResults.map((e) => console.log(`[iqe] xhr incomplete: ${e._url}`));
        Object.values(fetchResults).map((e) => console.log(`[iqe] fetch incomplete: ${e}`));
        return xhrResults.length > 0 || Object.values(fetchResults).length > 0;
    },
    isPageSafe: () => document.querySelectorAll('[data-ouia-safe=false]').length === 0,
    xhrResults: () => {
        return xhrResults;
    },
    fetchResults: () => {
        return fetchResults;
    },
});


/***/ }),

/***/ "./src/js/createCase.ts":
/*!******************************!*\
  !*** ./src/js/createCase.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSupportCase": () => (/* binding */ createSupportCase)
/* harmony export */ });
/* harmony import */ var _sentry_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sentry/react */ "./node_modules/@sentry/core/esm/exports.js");
/* harmony import */ var _jwt_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwt/logger */ "./src/js/jwt/logger.ts");
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! urijs */ "./node_modules/urijs/src/URI.js");
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urijs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/js/utils.ts");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consts */ "./src/js/consts.ts");
/* harmony import */ var _redux_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux-config */ "./src/js/redux-config.ts");



const log = (0,_jwt_logger__WEBPACK_IMPORTED_MODULE_0__.default)('createCase.js');



// Lit of products that are bundles
const BUNDLE_PRODUCTS = [
    { id: 'openshift', name: 'Red Hat OpenShift Cluster Manager' },
    { id: 'insights', name: 'Red Hat Insights' },
    { id: 'subscriptions', name: 'Subscription Watch' },
    { id: 'migrations', name: 'Migration Analytics' },
    { id: 'cost-management', name: 'Red Hat Cost Management' },
];
// List of products that are individual apps
const APP_PRODUCTS = [
    { id: 'automation-hub', name: 'Ansible Automation Hub' },
    { id: 'automation-analytics', name: 'Ansible Automation Analytics' },
];
function getLocation() {
    const currentLocation = {
        bundle: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getUrl)('bundle'),
        app: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getUrl)('app'),
    };
    return currentLocation;
}
function registerProduct() {
    const currentLocation = getLocation();
    const product = BUNDLE_PRODUCTS.find((bundle) => bundle.id === currentLocation.bundle) || APP_PRODUCTS.find((app) => app.id === currentLocation.app);
    return product?.name;
}
async function getAppInfo(activeModule) {
    let path = `${window.location.origin}${window.insights.chrome.isBeta() ? '/beta/' : '/'}apps/${activeModule}/app.info.json`;
    try {
        return activeModule && (await (await fetch(path)).json());
    }
    catch (error) {
        /**
         * Some apps in camel case should use kebab-case instead.
         * Transformation co camel case is requried by webpack remote moduled name requirements.
         * If we don't find the app info with camel case app id we try using kebab-case
         */
        path = `${window.location.origin}${window.insights.chrome.isBeta() ? '/beta/' : '/'}apps/${activeModule
            .replace(/[A-Z]/g, '-$&')
            .toLowerCase()}/app.info.json`;
        try {
            return activeModule && (await (await fetch(path)).json());
        }
        catch (error) {
            return undefined;
        }
    }
}
async function getProductData() {
    const { store } = (0,_redux_config__WEBPACK_IMPORTED_MODULE_4__.spinUpStore)();
    const activeModule = store.getState().chrome.activeModule || '';
    const appData = await getAppInfo(activeModule);
    return appData;
}
async function createSupportCase(userInfo, libjwt, fields) {
    const currentProduct = registerProduct() || 'Other';
    const { src_hash, app_name } = await getProductData();
    const portalUrl = `${(0,_utils__WEBPACK_IMPORTED_MODULE_2__.getEnvDetails)()?.portal}`;
    const caseUrl = `${portalUrl}${_consts__WEBPACK_IMPORTED_MODULE_3__.HYDRA_ENDPOINT}`;
    log('Creating a support case');
    const token = await libjwt.initPromise.then(() => libjwt.jwt.getUserInfo().then(() => libjwt.jwt.getEncodedToken()));
    fetch(caseUrl, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            session: {
                createdBy: `${userInfo.user?.username}`,
                userAgent: 'console.redhat.com',
            },
            sessionDetails: {
                createdBy: `${userInfo.user?.username}`,
                environment: `Production${window.insights.chrome.isBeta() ? ' Beta' : ''}, ${src_hash
                    ? `Current app: ${app_name}, Current app hash: ${src_hash}, Current URL: ${window.location.href}`
                    : `Unknown app, filed on ${window.location.href}`}`,
                ...(currentProduct && { product: currentProduct }),
                ...fields?.caseFields,
            },
        }),
    })
        .then((response) => response.json())
        .then((data) => {
        if (data) {
            const query = urijs__WEBPACK_IMPORTED_MODULE_1___default()(`?seSessionId=${data.session.id}&product=${data.sessionDetails.product}&version=${src_hash}`).normalize();
            window.open(`${portalUrl}/support/cases/#/case/new/open-case/describe-issue${query.readable()}`);
            return createSupportSentry(data.session.id, fields);
        }
    })
        .catch((err) => _sentry_react__WEBPACK_IMPORTED_MODULE_5__.captureException(err));
}
function createSupportSentry(session, fields) {
    if (window.insights.chrome.isProd) {
        log('Capturing support case information in Sentry');
        // this should capture the app information anyway, so no need to pass extra data
        _sentry_react__WEBPACK_IMPORTED_MODULE_5__.captureException(new Error('Support case created'), {
            tags: {
                caseId: session,
                ...(fields && { additionalFields: fields }),
            },
        });
    }
    else {
        log('No Sentry info captured in non prod environments');
    }
}


/***/ }),

/***/ "./src/js/debugFunctions.ts":
/*!**********************************!*\
  !*** ./src/js/debugFunctions.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const functionBuilder = (key, value) => {
    window.localStorage && window.localStorage.setItem(key, value.toString());
    return () => window.localStorage && window.localStorage.removeItem(key);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    iqe: () => functionBuilder('iqe:chrome:init', true),
    remediationsDebug: () => functionBuilder('remediations:debug', true),
    invTags: () => functionBuilder('rhcs-tags', true),
    shortSession: () => functionBuilder('chrome:jwt:shortSession', true),
    jwtDebug: () => functionBuilder('chrome:jwt:debug', true),
    reduxDebug: () => functionBuilder('chrome:redux:debug', true),
    forcePendo: () => functionBuilder('forcePendo', true),
    disableSegment: () => functionBuilder('chrome:analytics:disable', true),
    allDetails: () => functionBuilder('chrome:inventory:experimental_detail', true),
    inventoryDrawer: () => functionBuilder('chrome:inventory:experimental_drawer', true),
    globalFilter: () => functionBuilder('chrome:experimental:global-filter', true),
    appFilter: () => functionBuilder('chrome:experimental:app-filter', true),
    contextSwitcher: () => functionBuilder('chrome:experimental:context-switcher', true),
    quickstartsDebug: () => functionBuilder('chrome:experimental:quickstarts', true),
    darkMode: () => functionBuilder('chrome:darkmode', true),
    segmentDev: () => functionBuilder('chrome:analytics:dev', true),
    intlDebug: () => functionBuilder('chrome:intl:debug', true),
});


/***/ }),

/***/ "./src/js/rbac/fetchPermissions.ts":
/*!*****************************************!*\
  !*** ./src/js/rbac/fetchPermissions.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFetchPermissionsWatcher": () => (/* binding */ createFetchPermissionsWatcher)
/* harmony export */ });
/* harmony import */ var _rbac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rbac */ "./src/js/rbac/rbac.ts");
/* harmony import */ var _jwt_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jwt/logger */ "./src/js/jwt/logger.ts");


const log = (0,_jwt_logger__WEBPACK_IMPORTED_MODULE_1__.default)('fetchPermissions.ts');
const perPage = 1000;
const fetchPermissions = (userToken, app = '') => {
    const rbacApi = (0,_rbac__WEBPACK_IMPORTED_MODULE_0__.default)(userToken);
    return rbacApi
        .getPrincipalAccess(app, undefined, undefined, perPage)
        .then((resp) => {
        /**
         * We have to override the type because of interceptors. They are mutatuing the response.
         * We should come up with a nice pattern to work around the interceptors
         * */
        const { data, meta } = resp;
        if (meta.count > perPage) {
            return Promise.all([...new Array(Math.ceil(meta.count / perPage))].map((_empty, key) => rbacApi
                .getPrincipalAccess(app, undefined, undefined, perPage, (key + 1) * perPage)
                .then(({ data }) => data)))
                .then((allAccess) => allAccess.reduce((acc, curr) => [...acc, ...curr], data))
                .catch((error) => log(error));
        }
        else {
            return data;
        }
    })
        .catch((error) => log(error));
};
const createFetchPermissionsWatcher = () => {
    const currentCall = {};
    return async (userToken, app = '', bypassCache) => {
        const user = await window.insights.chrome.auth.getUser();
        if (user?.identity && [undefined, -1, '-1'].includes(user.identity.account_number)) {
            return Promise.resolve([]);
        }
        if (typeof currentCall?.[app] === 'undefined' || bypassCache) {
            currentCall[app] = await fetchPermissions(userToken, app);
        }
        return currentCall?.[app];
    };
};


/***/ }),

/***/ "./src/js/rbac/rbac.ts":
/*!*****************************!*\
  !*** ./src/js/rbac/rbac.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redhat_cloud_services_rbac_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redhat-cloud-services/rbac-client */ "./node_modules/@redhat-cloud-services/rbac-client/dist/index.js");
/* harmony import */ var _redhat_cloud_services_rbac_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_rbac_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/cache */ "./src/js/utils/cache.ts");



const BASE_PATH = '/api/rbac/v1';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((cachePrefix) => {
    const cache = (0,_utils_cache__WEBPACK_IMPORTED_MODULE_2__.bootstrapCache)(BASE_PATH, `${cachePrefix}-rbac`);
    const instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({ adapter: cache.adapter });
    instance.interceptors.response.use((response) => response.data || response);
    return new _redhat_cloud_services_rbac_client__WEBPACK_IMPORTED_MODULE_1__.AccessApi(undefined, BASE_PATH, instance);
});


/***/ }),

/***/ "./src/js/redux-config.ts":
/*!********************************!*\
  !*** ./src/js/redux-config.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "spinUpStore": () => (/* binding */ spinUpStore)
/* harmony export */ });
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redux/actions */ "./src/js/redux/actions.ts");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redux */ "./src/js/redux/index.ts");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/ReducerRegistry */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/esm/ReducerRegistry/ReducerRegistry.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_MiddlewareListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/MiddlewareListener */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/esm/MiddlewareListener/MiddlewareListener.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-promise-middleware */ "./node_modules/redux-promise-middleware/dist/es/index.js");






const basicMiddlewares = [];
if (true) {
    basicMiddlewares.push((redux_logger__WEBPACK_IMPORTED_MODULE_2___default()));
}
const middlewareListener = new _redhat_cloud_services_frontend_components_utilities_MiddlewareListener__WEBPACK_IMPORTED_MODULE_4__.default();
const reduxRegistry = new _redhat_cloud_services_frontend_components_utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_5__.default(_redux__WEBPACK_IMPORTED_MODULE_1__.chromeInitialState, [redux_promise_middleware__WEBPACK_IMPORTED_MODULE_3__.default, middlewareListener.getMiddleware(), ...basicMiddlewares]);
reduxRegistry.register((0,_redux__WEBPACK_IMPORTED_MODULE_1__.default)());
const store = reduxRegistry.getStore();
const actions = (0,_redhat_cloud_services_frontend_components_utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_5__.dispatchActionsToStore)(_redux_actions__WEBPACK_IMPORTED_MODULE_0__, store);
function spinUpStore() {
    return { store, middlewareListener, actions };
}


/***/ }),

/***/ "./src/js/redux/action-types.ts":
/*!**************************************!*\
  !*** ./src/js/redux/action-types.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USER_LOGIN": () => (/* binding */ USER_LOGIN),
/* harmony export */   "APP_NAV_CLICK": () => (/* binding */ APP_NAV_CLICK),
/* harmony export */   "CHROME_PAGE_ACTION": () => (/* binding */ CHROME_PAGE_ACTION),
/* harmony export */   "CHROME_PAGE_OBJECT": () => (/* binding */ CHROME_PAGE_OBJECT),
/* harmony export */   "CHROME_GET_ALL_TAGS": () => (/* binding */ CHROME_GET_ALL_TAGS),
/* harmony export */   "CHROME_GET_ALL_SIDS": () => (/* binding */ CHROME_GET_ALL_SIDS),
/* harmony export */   "CHROME_GET_ALL_WORKLOADS": () => (/* binding */ CHROME_GET_ALL_WORKLOADS),
/* harmony export */   "GLOBAL_FILTER_SCOPE": () => (/* binding */ GLOBAL_FILTER_SCOPE),
/* harmony export */   "GLOBAL_FILTER_UPDATE": () => (/* binding */ GLOBAL_FILTER_UPDATE),
/* harmony export */   "GLOBAL_FILTER_TOGGLE": () => (/* binding */ GLOBAL_FILTER_TOGGLE),
/* harmony export */   "GLOBAL_FILTER_REMOVE": () => (/* binding */ GLOBAL_FILTER_REMOVE),
/* harmony export */   "REGISTER_MODULE": () => (/* binding */ REGISTER_MODULE),
/* harmony export */   "TOGGLECONTEXTSWITCHER": () => (/* binding */ TOGGLECONTEXTSWITCHER),
/* harmony export */   "LOAD_NAVIGATION_LANDING_PAGE": () => (/* binding */ LOAD_NAVIGATION_LANDING_PAGE),
/* harmony export */   "LOAD_LEFT_NAVIGATION_SEGMENT": () => (/* binding */ LOAD_LEFT_NAVIGATION_SEGMENT),
/* harmony export */   "LOAD_MODULES_SCHEMA": () => (/* binding */ LOAD_MODULES_SCHEMA),
/* harmony export */   "CHANGE_ACTIVE_MODULE": () => (/* binding */ CHANGE_ACTIVE_MODULE),
/* harmony export */   "SET_PENDO_FEEDBACK_FLAG": () => (/* binding */ SET_PENDO_FEEDBACK_FLAG),
/* harmony export */   "TOGGLE_FEEDBACK_MODAL": () => (/* binding */ TOGGLE_FEEDBACK_MODAL),
/* harmony export */   "UPDATE_ACCESS_REQUESTS_NOTIFICATIONS": () => (/* binding */ UPDATE_ACCESS_REQUESTS_NOTIFICATIONS),
/* harmony export */   "MARK_REQUEST_NOTIFICATION_SEEN": () => (/* binding */ MARK_REQUEST_NOTIFICATION_SEEN),
/* harmony export */   "UPDATE_DOCUMENT_TITLE_REDUCER": () => (/* binding */ UPDATE_DOCUMENT_TITLE_REDUCER),
/* harmony export */   "MARK_ACTIVE_PRODUCT": () => (/* binding */ MARK_ACTIVE_PRODUCT),
/* harmony export */   "STORE_INITIAL_HASH": () => (/* binding */ STORE_INITIAL_HASH),
/* harmony export */   "POPULATE_QUICKSTARTS_CATALOG": () => (/* binding */ POPULATE_QUICKSTARTS_CATALOG),
/* harmony export */   "DISABLE_QUICKSTARTS": () => (/* binding */ DISABLE_QUICKSTARTS),
/* harmony export */   "SET_GATEWAY_ERROR": () => (/* binding */ SET_GATEWAY_ERROR)
/* harmony export */ });
const USER_LOGIN = '@@chrome/user-login';
const APP_NAV_CLICK = '@@chrome/app-nav-click';
const CHROME_PAGE_ACTION = '@@chrome/app-page-action';
const CHROME_PAGE_OBJECT = '@@chrome/app-object-id';
const CHROME_GET_ALL_TAGS = '@@chrome/get-all-tags';
const CHROME_GET_ALL_SIDS = '@@chrome/get-all-sids';
const CHROME_GET_ALL_WORKLOADS = '@@chrome/get-all-workloads';
const GLOBAL_FILTER_SCOPE = '@@chrome/set-global-filter-scope';
const GLOBAL_FILTER_UPDATE = '@@chrome/global-filter-update';
const GLOBAL_FILTER_TOGGLE = '@@chrome/global-filter-toggle';
const GLOBAL_FILTER_REMOVE = '@@chrome/global-filter-remove';
const REGISTER_MODULE = '@@chrome/register-async-module';
const TOGGLECONTEXTSWITCHER = '@@chrome/context-switcher-toggle';
const LOAD_NAVIGATION_LANDING_PAGE = '@@chrome/load-navigation-landing-page';
const LOAD_LEFT_NAVIGATION_SEGMENT = '@@chrome/load-navigation-segment';
const LOAD_MODULES_SCHEMA = '@@chrome/load-modules-schema';
const CHANGE_ACTIVE_MODULE = '@@chrome/change-active-module';
const SET_PENDO_FEEDBACK_FLAG = '@@chrome/set-pendo-feedback-flag';
const TOGGLE_FEEDBACK_MODAL = '@@chrome/toggle-feedback-modal';
const UPDATE_ACCESS_REQUESTS_NOTIFICATIONS = '@@chrome/update-access-requests-notifications';
const MARK_REQUEST_NOTIFICATION_SEEN = '@@chrome/mark-request-notification-seen';
const UPDATE_DOCUMENT_TITLE_REDUCER = '@@chrome/update-document-title';
const MARK_ACTIVE_PRODUCT = '@@chrome/mark-active-product';
const STORE_INITIAL_HASH = '@@chrome/store-initial-hash';
const POPULATE_QUICKSTARTS_CATALOG = '@@chrome/populate-quickstarts-catalog';
const DISABLE_QUICKSTARTS = '@@chrome/disable-quickstarts';
const SET_GATEWAY_ERROR = '@@chrome/set-gateway-error';


/***/ }),

/***/ "./src/js/redux/actions.ts":
/*!*********************************!*\
  !*** ./src/js/redux/actions.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userLogIn": () => (/* binding */ userLogIn),
/* harmony export */   "appNavClick": () => (/* binding */ appNavClick),
/* harmony export */   "appAction": () => (/* binding */ appAction),
/* harmony export */   "appObjectId": () => (/* binding */ appObjectId),
/* harmony export */   "fetchAllTags": () => (/* binding */ fetchAllTags),
/* harmony export */   "fetchAllSIDs": () => (/* binding */ fetchAllSIDs),
/* harmony export */   "fetchAllWorkloads": () => (/* binding */ fetchAllWorkloads),
/* harmony export */   "globalFilterScope": () => (/* binding */ globalFilterScope),
/* harmony export */   "globalFilterChange": () => (/* binding */ globalFilterChange),
/* harmony export */   "toggleGlobalFilter": () => (/* binding */ toggleGlobalFilter),
/* harmony export */   "removeGlobalFilter": () => (/* binding */ removeGlobalFilter),
/* harmony export */   "registerModule": () => (/* binding */ registerModule),
/* harmony export */   "onToggleContextSwitcher": () => (/* binding */ onToggleContextSwitcher),
/* harmony export */   "loadNavigationLandingPage": () => (/* binding */ loadNavigationLandingPage),
/* harmony export */   "loadLeftNavSegment": () => (/* binding */ loadLeftNavSegment),
/* harmony export */   "loadModulesSchema": () => (/* binding */ loadModulesSchema),
/* harmony export */   "changeActiveModule": () => (/* binding */ changeActiveModule),
/* harmony export */   "onToggle": () => (/* binding */ onToggle),
/* harmony export */   "setPendoFeedbackFlag": () => (/* binding */ setPendoFeedbackFlag),
/* harmony export */   "toggleFeedbackModal": () => (/* binding */ toggleFeedbackModal),
/* harmony export */   "updateAccessRequestsNotifications": () => (/* binding */ updateAccessRequestsNotifications),
/* harmony export */   "markAccessRequestNotification": () => (/* binding */ markAccessRequestNotification),
/* harmony export */   "populateQuickstartsCatalog": () => (/* binding */ populateQuickstartsCatalog),
/* harmony export */   "disableQuickstarts": () => (/* binding */ disableQuickstarts),
/* harmony export */   "updateDocumentTitle": () => (/* binding */ updateDocumentTitle),
/* harmony export */   "markActiveProduct": () => (/* binding */ markActiveProduct),
/* harmony export */   "setGatewayError": () => (/* binding */ setGatewayError)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ "./src/js/redux/action-types.ts");
/* harmony import */ var _App_GlobalFilter_tagsApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App/GlobalFilter/tagsApi */ "./src/js/App/GlobalFilter/tagsApi.ts");


function userLogIn(user) {
    return {
        type: _action_types__WEBPACK_IMPORTED_MODULE_0__.USER_LOGIN,
        payload: user,
    };
}
/*
 *TODO: The event type is deliberately nonse. It will start failing once we mirate rest of the app and we will figure out the correct type
 */
function appNavClick(item, event) {
    return { type: _action_types__WEBPACK_IMPORTED_MODULE_0__.APP_NAV_CLICK, payload: { ...(item || {}), id: item?.id, event } };
}
function appAction(action) {
    return { type: _action_types__WEBPACK_IMPORTED_MODULE_0__.CHROME_PAGE_ACTION, payload: action };
}
function appObjectId(objectId) {
    return { type: _action_types__WEBPACK_IMPORTED_MODULE_0__.CHROME_PAGE_OBJECT, payload: objectId };
}
function fetchAllTags(filters, pagination) {
    return {
        type: _action_types__WEBPACK_IMPORTED_MODULE_0__.CHROME_GET_ALL_TAGS,
        payload: (0,_App_GlobalFilter_tagsApi__WEBPACK_IMPORTED_MODULE_1__.getAllTags)(filters, pagination),
    };
}
function fetchAllSIDs(filters, pagination) {
    return {
        type: _action_types__WEBPACK_IMPORTED_MODULE_0__.CHROME_GET_ALL_SIDS,
        payload: (0,_App_GlobalFilter_tagsApi__WEBPACK_IMPORTED_MODULE_1__.getAllSIDs)(filters, pagination),
    };
}
function fetchAllWorkloads(filters, pagination) {
    return {
        type: _action_types__WEBPACK_IMPORTED_MODULE_0__.CHROME_GET_ALL_WORKLOADS,
        payload: (0,_App_GlobalFilter_tagsApi__WEBPACK_IMPORTED_MODULE_1__.getAllWorkloads)(filters, pagination),
    };
}
function globalFilterScope(scope) {
    return {
        type: _action_types__WEBPACK_IMPORTED_MODULE_0__.GLOBAL_FILTER_SCOPE,
        payload: scope,
    };
}
/*
 *TODO: SelectedTags type is deliberately nonse. It will start failing once we mirate rest of the app and we will figure out the correct type
 */
function globalFilterChange(selectedTags) {
    return {
        type: _action_types__WEBPACK_IMPORTED_MODULE_0__.GLOBAL_FILTER_UPDATE,
        payload: selectedTags,
    };
}
function toggleGlobalFilter(isHidden = true) {
    return {
        type: _action_types__WEBPACK_IMPORTED_MODULE_0__.GLOBAL_FILTER_TOGGLE,
        payload: { isHidden },
    };
}
function removeGlobalFilter(isHidden = true) {
    return {
        type: _action_types__WEBPACK_IMPORTED_MODULE_0__.GLOBAL_FILTER_REMOVE,
        payload: { isHidden },
    };
}
function registerModule(module, manifest) {
    if (!module) {
        throw new Error(`unknown module identifier: ${module}`);
    }
    return {
        type: _action_types__WEBPACK_IMPORTED_MODULE_0__.REGISTER_MODULE,
        payload: {
            module,
            manifest,
        },
    };
}
const onToggleContextSwitcher = () => ({
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.TOGGLECONTEXTSWITCHER,
});
const loadNavigationLandingPage = (schema) => ({
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.LOAD_NAVIGATION_LANDING_PAGE,
    payload: schema,
});
const loadLeftNavSegment = (schema, segment, pathName, shouldMerge) => ({
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.LOAD_LEFT_NAVIGATION_SEGMENT,
    payload: {
        segment,
        schema,
        pathName,
        shouldMerge,
    },
});
const loadModulesSchema = (schema) => ({
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.LOAD_MODULES_SCHEMA,
    payload: {
        schema,
    },
});
const changeActiveModule = (module) => ({
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.CHANGE_ACTIVE_MODULE,
    payload: module,
});
/**
 * @deprecated
 */
const onToggle = () => ({
    type: 'NAVIGATION_TOGGLE',
});
const setPendoFeedbackFlag = (payload) => ({
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.SET_PENDO_FEEDBACK_FLAG,
    payload,
});
const toggleFeedbackModal = (payload) => ({
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.TOGGLE_FEEDBACK_MODAL,
    payload,
});
const updateAccessRequestsNotifications = (payload) => ({
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_ACCESS_REQUESTS_NOTIFICATIONS,
    payload,
});
const markAccessRequestNotification = (payload) => ({
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.MARK_REQUEST_NOTIFICATION_SEEN,
    payload,
});
const populateQuickstartsCatalog = (app, quickstarts) => ({
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.POPULATE_QUICKSTARTS_CATALOG,
    payload: {
        app,
        quickstarts,
    },
});
const disableQuickstarts = () => ({
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.DISABLE_QUICKSTARTS,
});
const updateDocumentTitle = (title) => ({
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_DOCUMENT_TITLE_REDUCER,
    payload: title,
});
const markActiveProduct = (product) => ({
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.MARK_ACTIVE_PRODUCT,
    payload: product,
});
const setGatewayError = (error) => ({
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.SET_GATEWAY_ERROR,
    payload: error,
});


/***/ }),

/***/ "./src/js/redux/globalFilterReducers.ts":
/*!**********************************************!*\
  !*** ./src/js/redux/globalFilterReducers.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SID_KEY": () => (/* binding */ SID_KEY),
/* harmony export */   "AAP_KEY": () => (/* binding */ AAP_KEY),
/* harmony export */   "MSSQL_KEY": () => (/* binding */ MSSQL_KEY),
/* harmony export */   "globalFilterDefaultState": () => (/* binding */ globalFilterDefaultState),
/* harmony export */   "onGetAllTags": () => (/* binding */ onGetAllTags),
/* harmony export */   "onGetAllTagsPending": () => (/* binding */ onGetAllTagsPending),
/* harmony export */   "onSetGlobalFilterScope": () => (/* binding */ onSetGlobalFilterScope),
/* harmony export */   "onGlobalFilterToggle": () => (/* binding */ onGlobalFilterToggle),
/* harmony export */   "onTagSelect": () => (/* binding */ onTagSelect),
/* harmony export */   "onGetAllSIDs": () => (/* binding */ onGetAllSIDs),
/* harmony export */   "onGetAllSIDsPending": () => (/* binding */ onGetAllSIDsPending),
/* harmony export */   "onGetAllWorkloads": () => (/* binding */ onGetAllWorkloads),
/* harmony export */   "onGetAllWorkloadsPending": () => (/* binding */ onGetAllWorkloadsPending),
/* harmony export */   "onGlobalFilterRemove": () => (/* binding */ onGlobalFilterRemove)
/* harmony export */ });
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/groupBy */ "./node_modules/lodash/groupBy.js");
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_0__);

const SID_KEY = 'SAP ID (SID)';
const AAP_KEY = 'Ansible Automation Platform';
const MSSQL_KEY = 'Microsoft SQL';
const globalFilterDefaultState = {
    scope: 'insights',
    tags: { isLoaded: false, items: [], count: 0, total: 0 },
    sid: { isLoaded: false, items: [], count: 0, total: 0 },
    workloads: {
        isLoaded: false,
        items: [],
        count: 0,
        total: 0,
        name: 'Workloads',
        noFilter: true,
        tags: [
            {
                tag: { key: 'SAP' },
                count: 0,
            },
            {
                tag: { key: AAP_KEY },
                count: 0,
            },
            {
                tag: { key: MSSQL_KEY },
                count: 0,
            },
        ],
    },
    selectedTags: [],
    globalFilterHidden: false,
};
function onGetAllTags(state, { payload, }) {
    return {
        ...state,
        tags: {
            isLoaded: true,
            items: Object.entries(lodash_groupBy__WEBPACK_IMPORTED_MODULE_0___default()(payload?.results || [], ({ tag: { namespace } }) => namespace)).map(([key, value]) => ({
                name: key,
                tags: value,
            })),
            total: payload?.total,
            count: payload?.count,
            page: payload?.page,
            // eslint-disable-next-line camelcase
            perPage: payload?.per_page,
        },
    };
}
function onGetAllTagsPending(state) {
    return {
        ...state,
        tags: {
            ...state.tags,
            isLoaded: false,
        },
    };
}
function onSetGlobalFilterScope(state, { payload }) {
    return {
        ...state,
        scope: payload,
    };
}
function onGlobalFilterToggle(state, { payload }) {
    return {
        ...state,
        globalFilterHidden: payload.isHidden,
    };
}
function onTagSelect(state, { payload }) {
    return {
        ...state,
        selectedTags: payload,
    };
}
function onGetAllSIDs(state, { payload }) {
    return {
        ...state,
        sid: {
            isLoaded: true,
            ...(payload?.total > 0
                ? {
                    items: [
                        {
                            name: SID_KEY,
                            tags: (payload?.results || []).map(({ value, count } = {}) => ({
                                tag: { key: value, namespace: SID_KEY },
                                count,
                            })),
                        },
                    ],
                }
                : {}),
            total: payload?.total,
            count: payload?.count,
            page: payload?.page,
            // eslint-disable-next-line camelcase
            perPage: payload?.per_page,
        },
    };
}
function onGetAllSIDsPending(state) {
    return {
        ...state,
        sid: {
            ...state.sid,
            isLoaded: false,
        },
    };
}
function onGetAllWorkloads(state, { payload = {} }) {
    const { SAP, AAP, MSSQL } = payload;
    return {
        ...state,
        workloads: {
            ...state.workloads,
            isLoaded: true,
            tags: [
                {
                    ...(state.workloads?.tags?.[0] || {}),
                    count: SAP?.results?.find(({ value } = {}) => value)?.count || 0,
                },
                {
                    ...(state.workloads?.tags?.[1] || {}),
                    count: AAP?.total || 0,
                },
                {
                    ...(state.workloads?.tags?.[2] || {}),
                    count: MSSQL?.total || 0,
                },
            ],
        },
    };
}
function onGetAllWorkloadsPending(state) {
    return {
        ...state,
        workloads: {
            ...state.workloads,
            isLoaded: false,
        },
    };
}
function onGlobalFilterRemove(state, { payload }) {
    return {
        ...state,
        globalFilterRemoved: payload.isHidden,
    };
}


/***/ }),

/***/ "./src/js/redux/index.ts":
/*!*******************************!*\
  !*** ./src/js/redux/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chromeInitialState": () => (/* binding */ chromeInitialState),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/ReducerRegistry */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/esm/ReducerRegistry/ReducerRegistry.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./src/js/redux/reducers.ts");
/* harmony import */ var _globalFilterReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globalFilterReducers */ "./src/js/redux/globalFilterReducers.ts");
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-types */ "./src/js/redux/action-types.ts");




const reducers = {
    [_action_types__WEBPACK_IMPORTED_MODULE_2__.APP_NAV_CLICK]: _reducers__WEBPACK_IMPORTED_MODULE_0__.appNavClick,
    [_action_types__WEBPACK_IMPORTED_MODULE_2__.USER_LOGIN]: _reducers__WEBPACK_IMPORTED_MODULE_0__.loginReducer,
    [_action_types__WEBPACK_IMPORTED_MODULE_2__.CHROME_PAGE_ACTION]: _reducers__WEBPACK_IMPORTED_MODULE_0__.onPageAction,
    [_action_types__WEBPACK_IMPORTED_MODULE_2__.CHROME_PAGE_OBJECT]: _reducers__WEBPACK_IMPORTED_MODULE_0__.onPageObjectId,
    [_action_types__WEBPACK_IMPORTED_MODULE_2__.REGISTER_MODULE]: _reducers__WEBPACK_IMPORTED_MODULE_0__.onRegisterModule,
    [_action_types__WEBPACK_IMPORTED_MODULE_2__.TOGGLECONTEXTSWITCHER]: _reducers__WEBPACK_IMPORTED_MODULE_0__.contextSwitcherBannerReducer,
    [_action_types__WEBPACK_IMPORTED_MODULE_2__.LOAD_NAVIGATION_LANDING_PAGE]: _reducers__WEBPACK_IMPORTED_MODULE_0__.loadNavigationLandingPageReducer,
    [_action_types__WEBPACK_IMPORTED_MODULE_2__.LOAD_LEFT_NAVIGATION_SEGMENT]: _reducers__WEBPACK_IMPORTED_MODULE_0__.loadNavigationSegmentReducer,
    [_action_types__WEBPACK_IMPORTED_MODULE_2__.LOAD_MODULES_SCHEMA]: _reducers__WEBPACK_IMPORTED_MODULE_0__.loadModulesSchemaReducer,
    [_action_types__WEBPACK_IMPORTED_MODULE_2__.CHANGE_ACTIVE_MODULE]: _reducers__WEBPACK_IMPORTED_MODULE_0__.changeActiveModuleReducer,
    [_action_types__WEBPACK_IMPORTED_MODULE_2__.SET_PENDO_FEEDBACK_FLAG]: _reducers__WEBPACK_IMPORTED_MODULE_0__.setPendoFeedbackFlag,
    [_action_types__WEBPACK_IMPORTED_MODULE_2__.TOGGLE_FEEDBACK_MODAL]: _reducers__WEBPACK_IMPORTED_MODULE_0__.toggleFeedbackModal,
    [_action_types__WEBPACK_IMPORTED_MODULE_2__.UPDATE_ACCESS_REQUESTS_NOTIFICATIONS]: _reducers__WEBPACK_IMPORTED_MODULE_0__.accessRequestsNotificationsReducer,
    [_action_types__WEBPACK_IMPORTED_MODULE_2__.MARK_REQUEST_NOTIFICATION_SEEN]: _reducers__WEBPACK_IMPORTED_MODULE_0__.markAccessRequestRequestReducer,
    [_action_types__WEBPACK_IMPORTED_MODULE_2__.POPULATE_QUICKSTARTS_CATALOG]: _reducers__WEBPACK_IMPORTED_MODULE_0__.populateQuickstartsReducer,
    [_action_types__WEBPACK_IMPORTED_MODULE_2__.DISABLE_QUICKSTARTS]: _reducers__WEBPACK_IMPORTED_MODULE_0__.disableQuickstartsReducer,
    [_action_types__WEBPACK_IMPORTED_MODULE_2__.UPDATE_DOCUMENT_TITLE_REDUCER]: _reducers__WEBPACK_IMPORTED_MODULE_0__.documentTitleReducer,
    [_action_types__WEBPACK_IMPORTED_MODULE_2__.MARK_ACTIVE_PRODUCT]: _reducers__WEBPACK_IMPORTED_MODULE_0__.markActiveProduct,
    [_action_types__WEBPACK_IMPORTED_MODULE_2__.SET_GATEWAY_ERROR]: _reducers__WEBPACK_IMPORTED_MODULE_0__.setGatewayError,
};
const globalFilter = {
    [`${_action_types__WEBPACK_IMPORTED_MODULE_2__.CHROME_GET_ALL_TAGS}_FULFILLED`]: _globalFilterReducers__WEBPACK_IMPORTED_MODULE_1__.onGetAllTags,
    [`${_action_types__WEBPACK_IMPORTED_MODULE_2__.CHROME_GET_ALL_TAGS}_PENDING`]: _globalFilterReducers__WEBPACK_IMPORTED_MODULE_1__.onGetAllTagsPending,
    [`${_action_types__WEBPACK_IMPORTED_MODULE_2__.CHROME_GET_ALL_SIDS}_FULFILLED`]: _globalFilterReducers__WEBPACK_IMPORTED_MODULE_1__.onGetAllSIDs,
    [`${_action_types__WEBPACK_IMPORTED_MODULE_2__.CHROME_GET_ALL_SIDS}_PENDING`]: _globalFilterReducers__WEBPACK_IMPORTED_MODULE_1__.onGetAllSIDsPending,
    [`${_action_types__WEBPACK_IMPORTED_MODULE_2__.CHROME_GET_ALL_WORKLOADS}_FULFILLED`]: _globalFilterReducers__WEBPACK_IMPORTED_MODULE_1__.onGetAllWorkloads,
    [`${_action_types__WEBPACK_IMPORTED_MODULE_2__.CHROME_GET_ALL_WORKLOADS}_PENDING`]: _globalFilterReducers__WEBPACK_IMPORTED_MODULE_1__.onGetAllWorkloadsPending,
    [_action_types__WEBPACK_IMPORTED_MODULE_2__.GLOBAL_FILTER_SCOPE]: _globalFilterReducers__WEBPACK_IMPORTED_MODULE_1__.onSetGlobalFilterScope,
    [_action_types__WEBPACK_IMPORTED_MODULE_2__.GLOBAL_FILTER_TOGGLE]: _globalFilterReducers__WEBPACK_IMPORTED_MODULE_1__.onGlobalFilterToggle,
    [_action_types__WEBPACK_IMPORTED_MODULE_2__.GLOBAL_FILTER_REMOVE]: _globalFilterReducers__WEBPACK_IMPORTED_MODULE_1__.onGlobalFilterRemove,
    [_action_types__WEBPACK_IMPORTED_MODULE_2__.GLOBAL_FILTER_UPDATE]: _globalFilterReducers__WEBPACK_IMPORTED_MODULE_1__.onTagSelect,
};
const chromeInitialState = {
    chrome: {
        contextSwitcherOpen: false,
        navigation: {},
        accessRequests: {
            hasUnseen: false,
            count: 0,
            data: [],
        },
        quickstarts: {
            quickstarts: {},
        },
        moduleRoutes: [],
    },
    globalFilter: _globalFilterReducers__WEBPACK_IMPORTED_MODULE_1__.globalFilterDefaultState,
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    // const chromeInitialState = JSON.parse(localStorage.getItem('chrome')) || {};
    return {
        chrome: (state = {
            navigation: {},
            accessRequests: {
                count: 0,
                data: [],
                hasUnseen: false,
            },
            quickstarts: {
                quickstarts: {},
            },
            contextSwitcherOpen: false,
            modules: {},
            scalprumConfig: {},
            moduleRoutes: [],
        }, action) => (0,_redhat_cloud_services_frontend_components_utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_3__.applyReducerHash)(reducers)(state, action),
        globalFilter: (state = _globalFilterReducers__WEBPACK_IMPORTED_MODULE_1__.globalFilterDefaultState, action) => (0,_redhat_cloud_services_frontend_components_utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_3__.applyReducerHash)(globalFilter)(state, action),
    };
}


/***/ }),

/***/ "./src/js/redux/reducers.ts":
/*!**********************************!*\
  !*** ./src/js/redux/reducers.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contextSwitcherBannerReducer": () => (/* binding */ contextSwitcherBannerReducer),
/* harmony export */   "appNavClick": () => (/* binding */ appNavClick),
/* harmony export */   "loginReducer": () => (/* binding */ loginReducer),
/* harmony export */   "onPageAction": () => (/* binding */ onPageAction),
/* harmony export */   "onPageObjectId": () => (/* binding */ onPageObjectId),
/* harmony export */   "onRegisterModule": () => (/* binding */ onRegisterModule),
/* harmony export */   "loadNavigationLandingPageReducer": () => (/* binding */ loadNavigationLandingPageReducer),
/* harmony export */   "loadNavigationSegmentReducer": () => (/* binding */ loadNavigationSegmentReducer),
/* harmony export */   "loadModulesSchemaReducer": () => (/* binding */ loadModulesSchemaReducer),
/* harmony export */   "changeActiveModuleReducer": () => (/* binding */ changeActiveModuleReducer),
/* harmony export */   "setPendoFeedbackFlag": () => (/* binding */ setPendoFeedbackFlag),
/* harmony export */   "toggleFeedbackModal": () => (/* binding */ toggleFeedbackModal),
/* harmony export */   "accessRequestsNotificationsReducer": () => (/* binding */ accessRequestsNotificationsReducer),
/* harmony export */   "markAccessRequestRequestReducer": () => (/* binding */ markAccessRequestRequestReducer),
/* harmony export */   "populateQuickstartsReducer": () => (/* binding */ populateQuickstartsReducer),
/* harmony export */   "disableQuickstartsReducer": () => (/* binding */ disableQuickstartsReducer),
/* harmony export */   "documentTitleReducer": () => (/* binding */ documentTitleReducer),
/* harmony export */   "markActiveProduct": () => (/* binding */ markActiveProduct),
/* harmony export */   "setGatewayError": () => (/* binding */ setGatewayError)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ "./src/js/consts.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils.ts");


function contextSwitcherBannerReducer(state) {
    return {
        ...state,
        contextSwitcherOpen: !state.contextSwitcherOpen,
    };
}
function appNavClick(state, { payload }) {
    return {
        ...state,
        activeApp: payload.id,
    };
}
function loginReducer(state, { payload }) {
    const missingIDP = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.isFedRamp)() && !Object.prototype.hasOwnProperty.call(payload?.identity, 'idp');
    return {
        ...state,
        missingIDP,
        user: payload,
    };
}
function onPageAction(state, { payload }) {
    return {
        ...state,
        pageAction: payload,
    };
}
function onPageObjectId(state, { payload }) {
    return {
        ...state,
        pageObjectId: payload,
    };
}
function onRegisterModule(state, { payload, }) {
    const isModuleLoaded = state.modules?.[payload.module];
    const manifestLocation = payload.manifestLocation || payload.manifest;
    if (!isModuleLoaded && typeof manifestLocation === 'string') {
        return {
            ...state,
            modules: {
                ...state.modules,
                [payload.module]: {
                    manifestLocation,
                },
            },
        };
    }
    return state;
}
function loadNavigationLandingPageReducer(state, { payload }) {
    return {
        ...state,
        navigation: {
            ...state.navigation,
            landingPage: payload,
        },
    };
}
function isNavigation(nav) {
    return !Array.isArray(nav);
}
function loadNavigationSegmentReducer(state, { payload: { segment, schema, pathName, shouldMerge }, }) {
    const mergedSchema = shouldMerge || !state.navigation?.[segment] ? schema : state.navigation?.[segment];
    if (isNavigation(mergedSchema)) {
        // Landing page navgation has different siganture
        const sortedLinks = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.levelArray)(mergedSchema?.navItems).sort((a, b) => (a.length < b.length ? 1 : -1));
        return {
            ...state,
            navigation: {
                ...state.navigation,
                [segment]: {
                    ...mergedSchema,
                    navItems: pathName ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__.highlightItems)(pathName, mergedSchema.navItems, sortedLinks) : mergedSchema.navItems,
                    sortedLinks,
                },
            },
        };
    }
    return state;
}
function loadModulesSchemaReducer(state, { payload: { schema }, }) {
    const scalprumConfig = Object.entries(schema).reduce((acc, [name, config]) => ({
        ...acc,
        [name]: {
            name,
            module: `${name}#./RootApp`,
            manifestLocation: `${window.location.origin}${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.isBeta)() ? '/beta' : ''}${config.manifestLocation}?ts=${Date.now()}`,
        },
    }), {
        chrome: {
            name: 'chrome',
            manifestLocation: `${window.location.origin}${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.isBeta)() ? '/beta' : ''}/apps/chrome/js/fed-mods.json?ts=${Date.now()}`,
        },
    });
    const moduleRoutes = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.generateRoutesList)(schema);
    return {
        ...state,
        modules: schema,
        scalprumConfig,
        moduleRoutes,
    };
}
function changeActiveModuleReducer(state, { payload }) {
    return {
        ...state,
        activeModule: payload,
        appId: payload,
    };
}
function setPendoFeedbackFlag(state, { payload, }) {
    return {
        ...state,
        usePendoFeedback: payload,
    };
}
function toggleFeedbackModal(state, { payload, }) {
    return {
        ...state,
        isFeedbackModalOpen: payload,
    };
}
function accessRequestsNotificationsReducer(state, { payload: { count, data } }) {
    const newData = data.map(({ request_id, created, seen }) => ({
        request_id,
        created,
        seen: seen === true || !!state.accessRequests.data.find((item) => request_id === item.request_id)?.seen || false,
    }));
    localStorage.setItem(_consts__WEBPACK_IMPORTED_MODULE_0__.REQUESTS_COUNT, newData.length.toString());
    localStorage.setItem(_consts__WEBPACK_IMPORTED_MODULE_0__.REQUESTS_DATA, JSON.stringify(newData));
    return {
        ...state,
        accessRequests: {
            ...state.accessRequests,
            count,
            hasUnseen: newData.length > 0,
            data: newData,
        },
    };
}
function markAccessRequestRequestReducer(state, { payload }) {
    const newData = state.accessRequests.data.map((item) => (item.request_id === payload ? { ...item, seen: true } : item));
    localStorage.setItem(_consts__WEBPACK_IMPORTED_MODULE_0__.REQUESTS_DATA, JSON.stringify(newData));
    return {
        ...state,
        accessRequests: {
            ...state.accessRequests,
            hasUnseen: newData.length > 0,
            data: newData,
        },
    };
}
function populateQuickstartsReducer(state, { payload: { app, quickstarts } }) {
    return {
        ...state,
        quickstarts: {
            ...state.quickstarts,
            quickstarts: {
                ...state.quickstarts.quickstarts,
                [app]: quickstarts,
            },
        },
    };
}
function disableQuickstartsReducer(state) {
    return {
        ...state,
        quickstarts: {
            ...state.quickstarts,
            disabled: true,
        },
    };
}
function documentTitleReducer(state, { payload }) {
    return {
        ...state,
        documentTitle: payload,
    };
}
function markActiveProduct(state, { payload }) {
    return {
        ...state,
        activeProduct: payload,
    };
}
function setGatewayError(state, { payload }) {
    return {
        ...state,
        gatewayError: payload,
    };
}


/***/ }),

/***/ "./src/js/sentry.ts":
/*!**************************!*\
  !*** ./src/js/sentry.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sentry_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/react */ "./node_modules/@sentry/react/esm/sdk.js");
/* harmony import */ var _sentry_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/react */ "./node_modules/@sentry/core/esm/exports.js");
/* harmony import */ var _sentry_tracing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/tracing */ "./node_modules/@sentry/tracing/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/js/utils.ts");



function getAppDetails() {
    const pathName = window.location.pathname.split('/');
    let appGroup;
    let appName;
    let betaCheck;
    if (pathName[1] === 'beta') {
        betaCheck = ' Beta';
        appGroup = pathName[2];
        appName = appGroup === 'landing' ? 'landing' : pathName[3];
    }
    else {
        betaCheck = '';
        appGroup = pathName[1];
        appName = appGroup === 'landing' ? 'landing' : pathName[2];
    }
    const appDetails = {
        beta: betaCheck,
        app: {
            group: appGroup,
            name: appName,
        },
    };
    return appDetails;
}
// Actually initialize sentry with the group's api key
function initSentry() {
    const appDetails = getAppDetails();
    let API_KEY;
    switch (appDetails.app.group) {
        case 'insights':
            API_KEY = 'https://8b6372cad9604745ae3606bc4adc0060@o271843.ingest.sentry.io/1484024';
            break;
        case 'landing':
            API_KEY = 'https://d12a17c4a80b43888b30c306d7eb38b4@o271843.ingest.sentry.io/1484026';
            break;
        case 'ansible':
            API_KEY = 'https://03f062e075954433a296e71f243239fd@o271843.ingest.sentry.io/1769648';
            break;
        case 'settings':
            API_KEY = 'https://1002f82b7a444d48bc4c98d0b52f2155@o271843.ingest.sentry.io/5216681';
            break;
        case 'cost-management':
            API_KEY = 'https://61d5da651248485fb89216773932666b@o271843.ingest.sentry.io/5216676';
            break;
        case 'migrations':
            API_KEY = 'https://9dd048c85e524290b67ad98ff96c53ae@o271843.ingest.sentry.io/5216677';
            break;
        case 'subscriptions':
            API_KEY = 'https://4bbe4ac7e9fa4507803de69f9453ce5d@o271843.ingest.sentry.io/5216678';
            break;
        case 'user-preferences':
            API_KEY = 'https://eb32b0236ce045c9b0b9dcc7351c36bb@o271843.ingest.sentry.io/5216687';
            break;
    }
    // dsn: key
    // environment: logs Prod or Prod Beta for filtering
    // maxBreadcrumbs, if there is an error, trace back up to (x) lines if needed
    // attachStacktrace: attach the actual console logs
    // sampleRate: 0.0 to 1.0 - percentage of events to send (1.0 by default)
    _sentry_react__WEBPACK_IMPORTED_MODULE_2__.init({
        dsn: API_KEY,
        environment: `Prod${appDetails.beta}`,
        maxBreadcrumbs: 50,
        attachStacktrace: true,
        integrations: [new _sentry_tracing__WEBPACK_IMPORTED_MODULE_0__.BrowserTracing()],
        tracesSampleRate: 0.5, // send only every second transaction to Sentry
    });
}
// Sets up the tagging in sentry. This is stuff that can be filtered.
// Any window variable needs to be declared *above* the configureScope
/* eslint-disable camelcase */
function sentryTags(user) {
    const appDetails = getAppDetails();
    const browser_width = window.innerWidth + ' px';
    // TODO: Add request_id to this when we have it
    _sentry_react__WEBPACK_IMPORTED_MODULE_3__.configureScope((scope) => {
        scope.setUser({
            id: user.identity.account_number,
            account_id: user.identity.internal?.account_id,
        });
        scope.setTags({
            app_name: appDetails.app.name,
            app_group: appDetails.app.group,
            location: 'frontend',
            browser_width: browser_width,
        });
    });
}
/* eslint-enable camelcase */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((user) => {
    // this should only be enabled for prod and prod beta
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isProd)()) {
        initSentry();
        sentryTags(user);
    }
    else {
        console.log('Not initalizing sentry, on a pre-prod environment');
    }
});


/***/ }),

/***/ "./src/js/url-observer.ts":
/*!********************************!*\
  !*** ./src/js/url-observer.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Function that will register a location observer which will trigger an action after document.location.href change.
 * We can't use "popstate" event listener because react apps are not using browser history but custom router history implementaion
 * which are not using history go, push, pop functions that trigger popstate event.
 * @param {Function} observeCallback callback that will be triggered after URL change
 */
const registerUrlObserver = () => {
    /**
     * We ignore hash changes
     * Hashes only have frontend effect
     */
    let oldHref = document.location.href.replace(/#.*$/, '');
    window.onload = function () {
        const bodyList = document.body;
        const observer = new MutationObserver(function (mutations) {
            mutations.forEach(function () {
                const newLocation = document.location.href.replace(/#.*$/, '');
                if (oldHref !== newLocation && window.sendCustomEvent) {
                    oldHref = newLocation;
                    window.sendCustomEvent('pageBottom');
                }
            });
        });
        const config = {
            childList: true,
            subtree: true,
        };
        observer.observe(bodyList, config);
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerUrlObserver);


/***/ }),

/***/ "./src/js/utils/chromeHistory.ts":
/*!***************************************!*\
  !*** ./src/js/utils/chromeHistory.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/js/utils.ts");


const history = (0,history__WEBPACK_IMPORTED_MODULE_1__.createBrowserHistory)({
    basename: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isBeta)() ? '/beta' : '/',
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (history);


/***/ }),

/***/ "./src/js/utils/responseInterceptors.ts":
/*!**********************************************!*\
  !*** ./src/js/utils/responseInterceptors.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMPLIACE_ERROR_CODES": () => (/* binding */ COMPLIACE_ERROR_CODES),
/* harmony export */   "get3scaleError": () => (/* binding */ get3scaleError)
/* harmony export */ });
const COMPLIACE_ERROR_CODES = ['ERROR_OFAC', 'ERROR_T5', 'ERROR_EXPORT_CONTROL'];
const errorCodeRegexp = new RegExp(`(${COMPLIACE_ERROR_CODES.join('|')})`);
function get3scaleError(response) {
    // attempt to parse XHR response
    let parsedResponse;
    try {
        // the compliance error can be also in a simple string format. We have to parse it and shape it as a gateway error.
        if (typeof response === 'string' && isComplianceError(response)) {
            const parsedResponse = {
                status: 403,
                detail: response,
                complianceError: true,
                meta: {
                    response_by: 'gateway',
                },
            };
            return parsedResponse;
        }
        parsedResponse = typeof response === 'string' ? JSON.parse(response).errors : response.errors;
        if (typeof parsedResponse === 'undefined') {
            return;
        }
    }
    catch {
        // silently handle JSON parse error. Response is not a valid JSON and does not include any valid errors
        return;
    }
    // check if one of the error messages has gateway flag
    const result = parsedResponse.find(({ status, meta }) => status >= 400 && meta?.response_by === 'gateway');
    if (result) {
        // in case the gateway sends compliance error as a error detail
        result.complianceError = isComplianceError(result.detail);
    }
    return result;
}
function isComplianceError(response = '') {
    return !!response.match(errorCodeRegexp);
}


/***/ }),

/***/ "./static/images/feedback_illo.svg":
/*!*****************************************!*\
  !*** ./static/images/feedback_illo.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8192be77a1809074aa20.svg";

/***/ }),

/***/ "./static/images/logo.svg":
/*!********************************!*\
  !*** ./static/images/logo.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d7d2238f0d64e36cd533.svg";

/***/ }),

/***/ "?cf22":
/*!*****************************!*\
  !*** ./badge.css (ignored) ***!
  \*****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?d031":
/*!******************************!*\
  !*** ./button.css (ignored) ***!
  \******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?3421":
/*!*****************************!*\
  !*** ./check.css (ignored) ***!
  \*****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?9d45":
/*!*******************************!*\
  !*** ./divider.css (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?9754":
/*!********************************!*\
  !*** ./dropdown.css (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?c5e4":
/*!***********************************!*\
  !*** ./inline-edit.css (ignored) ***!
  \***********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?650f":
/*!*******************************!*\
  !*** ./spinner.css (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?446c":
/*!**********************************!*\
  !*** ./table-grid.css (ignored) ***!
  \**********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?df0d":
/*!****************************************!*\
  !*** ./table-scrollable.css (ignored) ***!
  \****************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?2d3a":
/*!***************************************!*\
  !*** ./table-tree-view.css (ignored) ***!
  \***************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?0f3c":
/*!*****************************!*\
  !*** ./table.css (ignored) ***!
  \*****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?afff":
/*!*******************************!*\
  !*** ./tooltip.css (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?91f5":
/*!***************************************************************************!*\
  !*** @patternfly/react-styles/css/components/Popper/Popper.css (ignored) ***!
  \***************************************************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?5580":
/*!**************************************!*\
  !*** ./terminal-highlight (ignored) ***!
  \**************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?03fb":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?6197":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?b8cb":
/*!*******************************!*\
  !*** source-map-js (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?c717":
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./src/locales/data.json":
/*!*******************************!*\
  !*** ./src/locales/data.json ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"en":{"SIDsFilter":"SIDs Filter","accessRestricted":"Access to this page is reserved for third party IDP token from users on authorized accounts.","accountNumber":"Account number:","activationDescription":"Red Hat will be in touch within 1 business day to confirm your subscription benefits are ready to be activated.","activationTitle":"Thank you for submitting your activation request","afterBetaUse":"After you use a feature in beta, you’ll stay in the Beta Environment until you manually exit the beta release. Leave the Beta Environment any time by clicking on the settings (gear) icon or beta icon in the top toolbar.","apiDocumentation":"API documentation","authFailure":"Authorization failure","betaRelease":"the beta release","cancel":"Cancel","changesComing":"Changes are coming to cloud.redhat.com on July 29.","checkOur":"or check our","clearFilters":"Clear filters","close":"Close","demoMode":"Demo mode","describeBug":"Describe the bug you encountered. For urgent issues, open a support case instead.","email":"Email","enterFeedback":"Enter your feedback","feedback":"Feedback","feedbackSent":"Feedback Sent","filterResults":"Filter results","filterSAPIDs":"Filter SAP IDs","filterTags":"Filter tags","findAppOrService":"Find an app or service","getSupport":"Get help from Red Hat support.","globalFilterNotApplicable":"Global filter is not applicable for this page","helpUsImproveHCC":"Help us improve the Red Hat Hybrid Cloud Console.","home":"Home","insightsRhelDocumentation":"Insights for RHEL Documentation","internal":"Internal","internalUser":"Internal user","knownOutages":"for known outages.","learnAboutResearchOpportunities":"Learn about opportunities to share your feedback with our User Research Team. We never shareyour personal information, and you can opt out at any time.","learnHowTo":"Learn how to create, import, and run applications with step-by-step instructions and tasks.","learnMore":"Learn more on our blog.","learnMoreABoutBeta":"Learn more about Beta Environment","loggedOut":"You have successfully logged out.","login":"Log in","logout":"Log out","myProfile":"My profile","myUserAccess":"MyUserAccess","name":"Name","newRequestReview":"You have a new access request that needs your review","noInventoryPermissions":"You do not have the required inventory permissions to perform this action","noLongerHaveAccess":"You no longer have access to account {accountId}.","noMatchingAppsFound":"No matching applications or services found.","noResults":"No results","openSupportCase":"Open a support case","orShareIdeas":"or share your ideas.","orgAdministrator":"Org. Administrator","personalAccount":"Personal account","problemProcessingRequest":"There was a problem processing the request. Try reloading the page. If the problem persists, contact","quickStarts":"Quick starts","redHatSupport":"Red Hat support","reportBug":"Report a bug","researchOpportunities":"Yes, I would like to hear about research opportunities","returnToHomepage":"Return to home page","searchAccount":"Search account","segmentError":"Context used outside of its Provider!","selectTagsOrSIDs":"Select one or more tags/SAP IDs (SID)","shareFeedback":"Share feedback","shareYourFeedback":"Share your feedback with us!","showMore":"Show more","somethingWentWrong":"Something went wrong","statusPage":"Status page","stopUsing":"Stop using","submitFeedback":"Submit feedback","submitOnlyInStageProd":"Submitting feedback only works in prod and stage","supportOptions":"Support options","tagSources":"Tag sources","tagsFilter":"Tags filter","tellAboutExperience":"Tell us about your experience","thankYouForFeedback":"Thank you, we appreciate your feedback.","thereWillBeACatalgPage":"There will be a catalog page for {bundle} bundle","tryChangingSearch":"This filter criteria matches no applications or services. Try changing your input filter.","tryThisFeatureInBeta":"Try this feature in our Beta Environment on cloud.redhat.com/beta. The Beta Environment allows you to interact with new features in an active development space. Because beta pre-release software is still being developed, you may encounter bugs or flaws in availability, stability, data, or performance.","tryUsingDifferentAccount":"Try using different account","unableToLoadQuickstartsContent":"Unable to load the quickstarts content.","use":"Use","useAccountNumber":"Use this number when contacting Red hat for support. If you don\'t have any active subscriptions, you will not have an account number.","useFeatureInBeta":"Use feature in beta","userPreferences":"User Preferences","username":"Username:","value":"Value","viewAsCustomer":"You are now viewing console.redhat.com as a customer, and will be interacting with real customer data.","viewChanged":"View has changed","viewRequest":"View request","viewingAsAccount":"Viewing as Account {selectedAccountNumber}"}}');

/***/ })

}]);