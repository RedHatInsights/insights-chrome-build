// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"rwWu":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  return _react.default.createElement("div", null, "I am Footer");
};

exports.default = _default;
},{"react":"ccIB"}],"CQxr":[function(require,module,exports) {
module.exports = "/insightsbeta/static/chrome/js/logo-cs.7d4907f8.svg";
},{}],"sxCS":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _logoCs = _interopRequireDefault(require("./logo-cs.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable max-len*/
var _default = function _default() {
  return _react.default.createElement("img", {
    src: _logoCs.default,
    alt: "Red Hat Cloud Services Logo"
  });
};
/*eslint-enable max-len*/


exports.default = _default;
},{"react":"ccIB","./logo-cs.svg":"CQxr"}],"i1dc":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _actions = require("../../redux/actions");

var _Button = require("@patternfly/react-core/dist/esm/components/Button");

var _barsIcon = _interopRequireDefault(require("@patternfly/react-icons/dist/esm/icons/bars-icon"));

var _Logo = _interopRequireDefault(require("./Logo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Brand = function Brand(_ref) {
  var toggleNav = _ref.toggleNav;
  return _react.default.createElement("div", {
    className: "pf-l-page__header-brand"
  }, _react.default.createElement("div", null, _react.default.createElement(_Button.Button, {
    variant: "plain",
    "aria-label": "Toggle primary navigation",
    "widget-type": "InsightsNavToggle",
    onClick: function onClick() {
      return toggleNav && toggleNav();
    }
  }, _react.default.createElement(_barsIcon.default, {
    size: "md"
  }))), _react.default.createElement("a", {
    className: "pf-l-page__header-brand-link",
    href: "./platform/dashboard/"
  }, _react.default.createElement(_Logo.default, null)));
};

function mapDispatchToProps(dispatch) {
  return {
    toggleNav: function toggleNav() {
      dispatch((0, _actions.onToggle)());
    }
  };
}

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Brand);

exports.default = _default;
},{"react":"ccIB","react-redux":"IZTr","../../redux/actions":"afkn","@patternfly/react-core/dist/esm/components/Button":"CjT+","@patternfly/react-icons/dist/esm/icons/bars-icon":"yJag","./Logo":"sxCS"}],"ZPuf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Dropdown = require("@patternfly/react-core/dist/esm/components/Dropdown");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function buildItems() {
  var accountNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
  var extraItems = arguments.length > 1 ? arguments[1] : undefined;
  return [_react.default.createElement(_Dropdown.DropdownItem, {
    key: "logout",
    component: "button",
    onClick: function onClick() {
      return window.insights.chrome.auth.logout();
    }
  }, "Logout"), _react.default.createElement(_Dropdown.DropdownSeparator, {
    key: "separator"
  }), _react.default.createElement(_Dropdown.DropdownItem, {
    key: "Account",
    isDisabled: true
  }, _react.default.createElement("dl", null, _react.default.createElement("dt", {
    className: "account-number__header"
  }, "Account Number:"), _react.default.createElement("dd", {
    className: "account-number__value"
  }, accountNumber))), _toConsumableArray(extraItems)];
}

var UserToggle =
/*#__PURE__*/
function (_Component) {
  _inherits(UserToggle, _Component);

  function UserToggle(props) {
    var _this;

    _classCallCheck(this, UserToggle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserToggle).call(this, props));
    _this.state = {
      isOpen: false
    };
    _this.onSelect = _this.onSelect.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onToggle = _this.onToggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(UserToggle, [{
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
    key: "render",
    value: function render() {
      var isOpen = this.state.isOpen;
      var _this$props = this.props,
          account = _this$props.account,
          isSmall = _this$props.isSmall,
          extraItems = _this$props.extraItems;
      var toggle = isSmall ? _react.default.createElement(_Dropdown.KebabToggle, {
        onToggle: this.onToggle
      }) : _react.default.createElement(_Dropdown.DropdownToggle, {
        onToggle: this.onToggle
      }, account.name);
      return _react.default.createElement(_Dropdown.Dropdown, {
        position: _Dropdown.DropdownPosition.right,
        "aria-label": "Overflow actions",
        "widget-type": "InsightsOverflowActions",
        onSelect: this.onSelect,
        toggle: toggle,
        isPlain: true,
        isOpen: isOpen,
        dropdownItems: buildItems(account.number, extraItems)
      });
    }
  }]);

  return UserToggle;
}(_react.Component);

UserToggle.propTypes = {
  account: _propTypes.default.shape({
    number: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    name: _propTypes.default.string
  }),
  isSmall: _propTypes.default.bool,
  extraItems: _propTypes.default.arrayOf(_propTypes.default.node)
};
UserToggle.defaultProps = {
  account: {
    number: 1,
    name: 'Foo'
  },
  isSmall: false,
  extraItems: []
};

var _default = (0, _reactRedux.connect)(function (_ref) {
  var _ref$chrome$user = _ref.chrome.user,
      accountNumber = _ref$chrome$user.account_number,
      firstName = _ref$chrome$user.firstName,
      lastName = _ref$chrome$user.lastName;
  return {
    account: {
      number: accountNumber,
      name: "".concat(firstName, " ").concat(lastName)
    }
  };
})(UserToggle);

exports.default = _default;
},{"react":"ccIB","@patternfly/react-core/dist/esm/components/Dropdown":"7GBR","prop-types":"3/B0","react-redux":"IZTr"}],"i78E":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Dropdown = require("@patternfly/react-core/dist/esm/components/Dropdown");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var ToolbarToggle =
/*#__PURE__*/
function (_Component) {
  _inherits(ToolbarToggle, _Component);

  function ToolbarToggle(props) {
    var _this;

    _classCallCheck(this, ToolbarToggle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ToolbarToggle).call(this, props));
    _this.state = {
      isOpen: false
    };
    _this.onSelect = _this.onSelect.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onToggle = _this.onToggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ToolbarToggle, [{
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
    value: function onClick(_ev, url) {
      window.location = "".concat(document.baseURI, "platform/").concat(url);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var dropdownItems = this.props.dropdownItems.map(function (_ref) {
        var url = _ref.url,
            title = _ref.title;
        return _react.default.createElement(_Dropdown.DropdownItem, {
          component: "button",
          onClick: function onClick(ev) {
            return _this2.onClick(ev, url);
          }
        }, title);
      });

      var toggle = _react.default.createElement(_Dropdown.DropdownToggle, {
        iconComponent: null,
        onToggle: this.onToggle
      }, _react.default.createElement(this.props.icon, null));

      return _react.default.createElement(_Dropdown.Dropdown, {
        "aria-label": "Settings",
        position: _Dropdown.DropdownPosition.right,
        toggle: toggle,
        isOpen: this.state.isOpen,
        dropdownItems: dropdownItems,
        onSelect: this.onSelect,
        isPlain: true
      });
    }
  }]);

  return ToolbarToggle;
}(_react.Component);

ToolbarToggle.propTypes = {
  icon: _propTypes.default.node,
  dropdownItems: _propTypes.default.arrayOf(_propTypes.default.node)
};
var _default = ToolbarToggle;
exports.default = _default;
},{"react":"ccIB","@patternfly/react-core/dist/esm/components/Dropdown":"7GBR","prop-types":"3/B0"}],"/LHF":[function(require,module,exports) {

},{}],"ocEB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactCore = require("@patternfly/react-core");

var _logoCs = _interopRequireDefault(require("./logo-cs.svg"));

var _reactRedux = require("react-redux");

require("./InsightsAbout.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var InsightsAbout =
/*#__PURE__*/
function (_Component) {
  _inherits(InsightsAbout, _Component);

  function InsightsAbout(props) {
    var _this;

    _classCallCheck(this, InsightsAbout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InsightsAbout).call(this, props));
    var app;

    if (_this.props.globalNav) {
      app = _this.props.globalNav.find(function (item) {
        return item.active;
      });

      if (app.subItems) {
        var subApp = app.subItems.find(function (subItem) {
          return subItem.id === _this.props.activeApp;
        });
        app = subApp && subApp.reload ? subApp : app;
      }
    }

    _this.state = {
      appDetails: {
        apps: [{
          name: 'Chrome',
          path: 'static/chrome/app.info.json',
          version: 'N/A'
        }, {
          name: 'Inventory',
          path: "platform/inventory/app.info.json",
          version: 'N/A'
        }, {
          name: 'Remediations',
          path: "platform/remediations/app.info.json",
          version: 'N/A'
        }, {
          name: 'Vulnerabilities',
          path: 'platform/vulnerability/app.info.json',
          version: 'N/A'
        }, {
          name: 'Compliance',
          path: 'platform/compliance/app.info.json',
          version: 'N/A'
        }, {
          name: 'Cost Management',
          path: 'platform/cost-management/app.info.json',
          version: 'N/A'
        }, {
          name: 'Advisor',
          path: 'platform/advisor/app.info.json',
          version: 'N/A'
        }]
      },
      currentApp: app && app.title
    };
    _this.updateAppVersion = _this.updateAppVersion.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(InsightsAbout, [{
    key: "getItem",
    value: function getItem(term, details) {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactCore.TextListItem, {
        component: "dt"
      }, term, ":"), _react.default.createElement(_reactCore.TextListItem, {
        component: "dd"
      }, typeof details === 'function' ? details() : details));
    }
  }, {
    key: "updateAppVersion",
    value: function updateAppVersion(app, version) {
      var appDetails = this.state.appDetails;
      var currentApp = appDetails.apps.find(function (appDetail) {
        return appDetail.name === app.name;
      });

      if (currentApp) {
        currentApp.version = version;
      }

      this.setState(appDetails);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.state.appDetails.apps.forEach(function (app) {
        fetch(app.path).then(function (response) {
          return response.json();
        }).catch(function () {
          return {
            travis: {}
          };
        }).then(function (data) {
          return _this2.updateAppVersion(app, data.src_hash);
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          isModalOpen = _this$props.isModalOpen,
          onClose = _this$props.onClose,
          user = _this$props.user;
      return _react.default.createElement(_reactCore.AboutModal, {
        isOpen: isModalOpen,
        onClose: onClose,
        brandImageSrc: _logoCs.default,
        brandImageAlt: "Red Hat Cloud Services Logo",
        heroImageSrc: "".concat(document.baseURI, "/static/chrome/assets/images/pfbg_2000.jpg"),
        trademark: "Copyright \xA9 2018 Red Hat, Inc."
      }, _react.default.createElement(_reactCore.Stack, {
        gutter: "sm"
      }, _react.default.createElement(_reactCore.StackItem, null, "Please include these details when opening a support case against Insights"), _react.default.createElement(_reactCore.StackItem, null, _react.default.createElement(_reactCore.TextContent, null, _react.default.createElement(_reactCore.TextList, {
        component: "dl",
        className: "ins-debug-info"
      }, this.getItem('User Name', user && user.username), this.getItem('Current Application', this.state.currentApp), this.getItem('Application Path', window.location.pathname), this.state.appDetails.apps.map(function (app) {
        return _this3.getItem(app.name + ' Version', app.version);
      })))), _react.default.createElement(_reactCore.StackItem, {
        className: "ins-c-about-modal__footer"
      }, _react.default.createElement(_reactCore.Level, null, _react.default.createElement(_reactCore.LevelItem, null, _react.default.createElement("a", {
        "class": "nav-link",
        href: "https://www.redhat.com/en/about/privacy-policy",
        target: "_blank"
      }, "Privacy Policy")), _react.default.createElement(_reactCore.LevelItem, null, _react.default.createElement("a", {
        "class": "nav-link",
        href: "https://ci.foo.redhat.com:1337/help/terms/",
        target: "_blank"
      }, "Customer Portal Terms of Use")), _react.default.createElement(_reactCore.LevelItem, null, _react.default.createElement("a", {
        "class": "nav-link",
        href: "https://www.redhat.com/en/about/all-policies-guidelines",
        target: "_blank"
      }, "All Policies and Guidelines"))))));
    }
  }]);

  return InsightsAbout;
}(_react.Component);

function mapStateToProps(_ref) {
  var _ref$chrome = _ref.chrome,
      user = _ref$chrome.user,
      appId = _ref$chrome.appId,
      globalNav = _ref$chrome.globalNav,
      activeApp = _ref$chrome.activeApp;
  return {
    appId: appId,
    globalNav: globalNav,
    user: user,
    activeApp: activeApp
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps)(InsightsAbout);

exports.default = _default;
},{"react":"ccIB","@patternfly/react-core":"Tk4w","./logo-cs.svg":"CQxr","react-redux":"IZTr","./InsightsAbout.scss":"/LHF"}],"uZ0D":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = require("@patternfly/react-core/dist/esm/components/Button");

var _Toolbar = require("@patternfly/react-core/dist/esm/layouts/Toolbar");

var _Dropdown = require("@patternfly/react-core/dist/esm/components/Dropdown");

var _questionCircleIcon = _interopRequireDefault(require("@patternfly/react-icons/dist/esm/icons/question-circle-icon"));

var _UserToggle = _interopRequireDefault(require("./UserToggle"));

var _ToolbarToggle = _interopRequireDefault(require("./ToolbarToggle"));

var _InsightsAbout = _interopRequireDefault(require("./InsightsAbout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var aboutButton = {
  title: 'FAQ',
  icon: _questionCircleIcon.default,
  widget: 'InsightsFAQ'
};
var actions = [// {
//     title: 'Search',
//     icon: SearchIcon,
//     widget: 'InsightsSearch'
// },
// {
//     title: 'Notification',
//     icon: BellIcon,
//     widget: 'InsightsNotifications'
// },
// {
//     title: 'Settings',
//     icon: CogIcon,
//     widget: 'InsightsSettings',
//     items: [
//         {
//             title: 'Topological Inventory',
//             url: 'topological-inventory'
//         }
//     ]
// },
aboutButton];

var Tools =
/*#__PURE__*/
function (_Component) {
  _inherits(Tools, _Component);

  function Tools(props) {
    var _this;

    _classCallCheck(this, Tools);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tools).call(this, props));
    _this.onModalToggle = _this.onModalToggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    aboutButton.onClick = _this.onModalToggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      isModalOpen: false
    };
    return _this;
  }

  _createClass(Tools, [{
    key: "onModalToggle",
    value: function onModalToggle() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isModalOpen = this.state.isModalOpen;
      return _react.default.createElement("div", {
        className: "pf-l-page__header-tools",
        "widget-type": "InsightsToolbar"
      }, _react.default.createElement(_Toolbar.Toolbar, null, _react.default.createElement(_Toolbar.ToolbarGroup, {
        className: "pf-u-sr-only pf-u-visible-on-lg"
      }, actions.map(function (oneItem, key) {
        return oneItem.items ? _react.default.createElement(_ToolbarToggle.default, {
          icon: oneItem.icon,
          dropdownItems: oneItem.items
        }) : _react.default.createElement(_Toolbar.ToolbarItem, {
          key: key,
          "data-key": key
        }, _react.default.createElement(_Button.Button, {
          variant: "plain",
          "aria-label": "Overflow ".concat(oneItem.title),
          "widget-type": oneItem.widget,
          onClick: function onClick(event) {
            return oneItem.onClick && oneItem.onClick(event);
          }
        }, _react.default.createElement(oneItem.icon, null)));
      })), _react.default.createElement(_Toolbar.ToolbarGroup, null, _react.default.createElement(_Toolbar.ToolbarItem, {
        className: "pf-u-hidden-on-lg pf-u-mr-0"
      }, _react.default.createElement(_UserToggle.default, {
        isSmall: true,
        extraItems: actions.map(function (action, key) {
          return _react.default.createElement(_Dropdown.DropdownItem, {
            key: key,
            component: "button",
            isDisabled: true
          }, action.title);
        })
      })), _react.default.createElement(_Toolbar.ToolbarItem, {
        className: "pf-u-sr-only pf-u-visible-on-lg"
      }, _react.default.createElement(_UserToggle.default, null))), isModalOpen && _react.default.createElement(_InsightsAbout.default, {
        isModalOpen: isModalOpen,
        onClose: this.onModalToggle
      })));
    }
  }]);

  return Tools;
}(_react.Component);

var _default = Tools;
exports.default = _default;
},{"react":"ccIB","@patternfly/react-core/dist/esm/components/Button":"CjT+","@patternfly/react-core/dist/esm/layouts/Toolbar":"f7TI","@patternfly/react-core/dist/esm/components/Dropdown":"7GBR","@patternfly/react-icons/dist/esm/icons/question-circle-icon":"wdXW","./UserToggle":"ZPuf","./ToolbarToggle":"i78E","./InsightsAbout":"ocEB"}],"1PeJ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Brand = _interopRequireDefault(require("./Brand"));

var _Tools = _interopRequireDefault(require("./Tools"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = function _default() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_Brand.default, null), _react.default.createElement(_Tools.default, null));
};

exports.default = _default;
},{"react":"ccIB","./Brand":"i1dc","./Tools":"uZ0D"}],"J5oO":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Nav = require("@patternfly/react-core/dist/esm/components/Nav");

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var basepath = "".concat(document.baseURI, "platform/");

var _default = function _default(_ref) {
  var itemId = _ref.itemId,
      title = _ref.title,
      _ref$parent = _ref.parent,
      parent = _ref$parent === void 0 ? '' : _ref$parent,
      props = _objectWithoutProperties(_ref, ["itemId", "title", "parent"]);

  return _react.default.createElement(_Nav.NavItem, _extends({}, props, {
    itemId: itemId,
    preventDefault: true,
    to: "".concat(basepath).concat(parent).concat(itemId)
  }), title);
};

exports.default = _default;
},{"react":"ccIB","@patternfly/react-core/dist/esm/components/Nav":"RqAC"}],"iurj":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Nav = require("@patternfly/react-core/dist/esm/components/Nav");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _actions = require("../../redux/actions");

var _NavigationItem = _interopRequireDefault(require("./NavigationItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var basepath = "".concat(document.baseURI, "platform/");

var Navigation =
/*#__PURE__*/
function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation(props) {
    var _this;

    _classCallCheck(this, Navigation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Navigation).call(this, props));
    _this.onSelect = _this.onSelect.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Navigation, [{
    key: "onSelect",
    value: function onSelect(_ref) {
      var groupId = _ref.groupId,
          itemId = _ref.itemId;
      this.setState({
        activeGroup: groupId,
        activeItem: itemId
      });
    }
  }, {
    key: "onClick",
    value: function onClick(_event, item, parent) {
      var onNavigate = this.props.onNavigate;

      if (parent && parent.active) {
        if (!item.reload) {
          onNavigate && onNavigate(item);
        } else {
          window.location.href = "".concat(basepath).concat(item.reload);
        }
      } else {
        var reload = item.reload || "".concat(parent ? parent.id + '/' : '').concat(item.id);
        window.location.href = "".concat(basepath).concat(reload);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          settings = _this$props.settings,
          activeApp = _this$props.activeApp;
      return _react.default.createElement(_Nav.Nav, {
        onSelect: this.onSelect,
        "aria-label": "Insights Global Navigation"
      }, _react.default.createElement(_Nav.NavList, null, settings.map(function (item, key) {
        if (!item.disabled) {
          if (item.subItems) {
            return _react.default.createElement(_Nav.NavExpandable, {
              title: item.title,
              itemId: item.id,
              key: key,
              isActive: item.active,
              isExpanded: item.active
            }, item.subItems.map(function (subItem, subKey) {
              return _react.default.createElement(_NavigationItem.default, {
                itemId: subItem.id,
                key: subKey,
                title: subItem.title,
                parent: "".concat(item.id, "/"),
                isActive: item.active && subItem.id === activeApp,
                onClick: function onClick(event) {
                  return _this2.onClick(event, subItem, item);
                }
              });
            }));
          } else {
            return _react.default.createElement(_NavigationItem.default, {
              itemId: item.id,
              key: key,
              title: item.title,
              isActive: item.active,
              onClick: function onClick(event) {
                return _this2.onClick(event, item);
              }
            });
          }
        }
      })));
    }
  }]);

  return Navigation;
}(_react.Component);

Navigation.propTypes = {
  settings: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string,
    title: _propTypes.default.string,
    subItems: function subItems() {
      return Navigation.propTypes.settings;
    }
  }))
};

function stateToProps(_ref2) {
  var _ref2$chrome = _ref2.chrome,
      globalNav = _ref2$chrome.globalNav,
      activeApp = _ref2$chrome.activeApp;
  return {
    settings: globalNav,
    activeApp: activeApp
  };
}

function dispatchToProps(dispatch) {
  return {
    onNavigate: function onNavigate(item) {
      return dispatch((0, _actions.appNavClick)(item));
    }
  };
}

var _default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Navigation);

exports.default = _default;
},{"react":"ccIB","@patternfly/react-core/dist/esm/components/Nav":"RqAC","prop-types":"3/B0","react-redux":"IZTr","../../redux/actions":"afkn","./NavigationItem":"J5oO"}],"nuDN":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Navigation = _interopRequireDefault(require("./Navigation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  return _react.default.createElement(_Navigation.default, null);
};

exports.default = _default;
},{"react":"ccIB","./Navigation":"iurj"}],"Sz1i":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function () {
    return _Footer.default;
  }
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function () {
    return _index.default;
  }
});
Object.defineProperty(exports, "Sidenav", {
  enumerable: true,
  get: function () {
    return _index2.default;
  }
});

var _Footer = _interopRequireDefault(require("./Footer"));

var _index = _interopRequireDefault(require("./Header/index"));

var _index2 = _interopRequireDefault(require("./Sidenav/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Footer":"rwWu","./Header/index":"1PeJ","./Sidenav/index":"nuDN"}]},{},[], null)
//# sourceMappingURL=/insightsbeta/static/chrome/js/App.d6ecbf82.map