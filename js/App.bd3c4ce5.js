// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"rwWu":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react.default.createElement("div", null, "I am Footer");
};

var _default = Footer;
exports.default = _default;
},{"react":"ccIB"}],"5ufQ":[function(require,module,exports) {
module.exports = "/apps/chrome/js/logo.37528907.svg";
},{}],"sxCS":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _logo = _interopRequireDefault(require("../../../../static/images/logo.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logo = function Logo() {
  return _react.default.createElement("img", {
    src: _logo.default,
    alt: "Red Hat Logo"
  });
};

var _default = Logo;
exports.default = _default;
},{"react":"ccIB","../../../../static/images/logo.svg":"5ufQ"}],"i1dc":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _actions = require("../../redux/actions");

var _Button = require("@patternfly/react-core/dist/esm/components/Button");

var _barsIcon = _interopRequireDefault(require("@patternfly/react-icons/dist/esm/icons/bars-icon"));

var _Logo = _interopRequireDefault(require("./Logo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Brand = function Brand(_ref) {
  var toggleNav = _ref.toggleNav,
      navHidden = _ref.navHidden;
  return _react.default.createElement("div", {
    className: "pf-c-page__header-brand"
  }, _react.default.createElement("div", {
    hidden: navHidden,
    className: "pf-c-page__header-brand-toggle"
  }, _react.default.createElement(_Button.Button, {
    variant: "plain",
    "aria-label": "Toggle primary navigation",
    "widget-type": "InsightsNavToggle",
    onClick: function onClick() {
      return toggleNav && toggleNav();
    }
  }, _react.default.createElement(_barsIcon.default, {
    size: "md"
  }))), _react.default.createElement("a", {
    className: "pf-c-page__header-brand-link",
    href: "./"
  }, _react.default.createElement(_Logo.default, null)));
};

Brand.propTypes = {
  navHidden: _propTypes.default.bool,
  toggleNav: _propTypes.default.func
};

function mapDispatchToProps(dispatch) {
  return {
    toggleNav: function toggleNav() {
      dispatch((0, _actions.onToggle)());
    }
  };
}

var _default = (0, _reactRedux.connect)(function (_ref2) {
  var navHidden = _ref2.chrome.navHidden;
  return {
    navHidden: navHidden
  };
}, mapDispatchToProps)(Brand);

exports.default = _default;
},{"react":"ccIB","prop-types":"3/B0","react-redux":"IZTr","../../redux/actions":"afkn","@patternfly/react-core/dist/esm/components/Button":"CjT+","@patternfly/react-icons/dist/esm/icons/bars-icon":"yJag","./Logo":"sxCS"}],"kUj2":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],"dMjH":[function(require,module,exports) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],"oXBW":[function(require,module,exports) {
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
},{}],"3cbG":[function(require,module,exports) {
var _typeof = require("../helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"../helpers/typeof":"FlpK","./assertThisInitialized":"oXBW"}],"XApn":[function(require,module,exports) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{}],"+Omx":[function(require,module,exports) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{}],"1PhT":[function(require,module,exports) {
var setPrototypeOf = require("./setPrototypeOf");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
},{"./setPrototypeOf":"+Omx"}],"o3SL":[function(require,module,exports) {
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;
},{}],"lZpU":[function(require,module,exports) {
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;
},{}],"NCaH":[function(require,module,exports) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;
},{}],"I9dH":[function(require,module,exports) {
var arrayWithoutHoles = require("./arrayWithoutHoles");

var iterableToArray = require("./iterableToArray");

var nonIterableSpread = require("./nonIterableSpread");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
},{"./arrayWithoutHoles":"o3SL","./iterableToArray":"lZpU","./nonIterableSpread":"NCaH"}],"ZPuf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireWildcard(require("react"));

var _Dropdown = require("@patternfly/react-core/dist/esm/components/Dropdown");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildItems(username, isOrgAdmin) {
  var accountNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
  var extraItems = arguments.length > 3 ? arguments[3] : undefined;
  return [_react.default.createElement(_Dropdown.DropdownItem, {
    key: "Username",
    isDisabled: true
  }, _react.default.createElement("dl", {
    className: "ins-c-dropdown-item__stack"
  }, _react.default.createElement("dt", {
    className: "ins-c-dropdown-item__stack--header"
  }, "Username:"), _react.default.createElement("dd", {
    className: "ins-c-dropdown-item__stack--value"
  }, username))), _react.default.createElement(_react.default.Fragment, {
    key: "account wrapper"
  }, accountNumber > -1 && _react.default.createElement(_Dropdown.DropdownItem, {
    key: "Account",
    isDisabled: true
  }, _react.default.createElement("dl", {
    className: "ins-c-dropdown-item__stack"
  }, _react.default.createElement("dt", {
    className: "ins-c-dropdown-item__stack--header"
  }, "Account Number:"), _react.default.createElement("dd", {
    className: "ins-c-dropdown-item__stack--value"
  }, accountNumber)))), _react.default.createElement(_Dropdown.DropdownSeparator, {
    key: "separator"
  }), _react.default.createElement(_react.default.Fragment, {
    key: "user management wrapper"
  }, isOrgAdmin && _react.default.createElement(_Dropdown.DropdownItem, {
    key: "User management",
    href: "https://www.redhat.com/wapps/ugc/protected/usermgt/userList.html",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "User management")), _react.default.createElement(_Dropdown.DropdownItem, {
    key: "My Profile",
    href: "https://access.redhat.com/user",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "My profile"), _react.default.createElement(_Dropdown.DropdownItem, {
    key: "logout",
    component: "button",
    onClick: function onClick() {
      return window.insights.chrome.auth.logout(true);
    }
  }, "Logout"), (0, _toConsumableArray2.default)(extraItems)];
}

var UserToggle =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(UserToggle, _Component);

  function UserToggle(props) {
    var _this;

    (0, _classCallCheck2.default)(this, UserToggle);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(UserToggle).call(this, props));
    _this.state = {
      isOpen: false
    };
    _this.onSelect = _this.onSelect.bind((0, _assertThisInitialized2.default)(_this));
    _this.onToggle = _this.onToggle.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(UserToggle, [{
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
        dropdownItems: buildItems(account.username, account.isOrgAdmin, account.number, extraItems)
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
/* eslint-disable camelcase */
// TODO update this to use account_id

var _default = (0, _reactRedux.connect)(function (_ref) {
  var _ref$chrome$user$iden = _ref.chrome.user.identity,
      accountNumber = _ref$chrome$user$iden.account_number,
      _ref$chrome$user$iden2 = _ref$chrome$user$iden.user,
      username = _ref$chrome$user$iden2.username,
      first_name = _ref$chrome$user$iden2.first_name,
      last_name = _ref$chrome$user$iden2.last_name,
      is_org_admin = _ref$chrome$user$iden2.is_org_admin;
  return {
    account: {
      number: accountNumber,
      username: username,
      isOrgAdmin: is_org_admin,
      name: "".concat(first_name, " ").concat(last_name)
    }
  };
})(UserToggle);
/* eslint-enable camelcase */


exports.default = _default;
},{"@babel/runtime/helpers/classCallCheck":"kUj2","@babel/runtime/helpers/createClass":"dMjH","@babel/runtime/helpers/possibleConstructorReturn":"3cbG","@babel/runtime/helpers/getPrototypeOf":"XApn","@babel/runtime/helpers/assertThisInitialized":"oXBW","@babel/runtime/helpers/inherits":"1PhT","@babel/runtime/helpers/toConsumableArray":"I9dH","react":"ccIB","@patternfly/react-core/dist/esm/components/Dropdown":"7GBR","prop-types":"3/B0","react-redux":"IZTr"}],"8L7b":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Avatar = require("@patternfly/react-core/dist/esm/components/Avatar");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserIcon =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(UserIcon, _Component);

  function UserIcon(props) {
    var _this;

    (0, _classCallCheck2.default)(this, UserIcon);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(UserIcon).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getImage", function (img) {
      if (img.width === 140) {
        _this.setState({
          avatar: img.src
        });
      }
    });
    _this.state = {
      account: _this.props.account,
      avatar: 'apps/chrome/assets/images/img_avatar.svg'
    };
    return _this;
  }

  (0, _createClass2.default)(UserIcon, [{
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
      return _react.default.createElement(_Avatar.Avatar, {
        src: avatar,
        alt: "User Avatar"
      });
    }
  }]);
  return UserIcon;
}(_react.Component);

UserIcon.propTypes = {
  account: _propTypes.default.shape({
    username: _propTypes.default.string
  })
};

var _default = (0, _reactRedux.connect)(function (_ref) {
  var username = _ref.chrome.user.identity.user.username;
  return {
    account: {
      username: username
    }
  };
})(UserIcon);

exports.default = _default;
},{"@babel/runtime/helpers/classCallCheck":"kUj2","@babel/runtime/helpers/createClass":"dMjH","@babel/runtime/helpers/possibleConstructorReturn":"3cbG","@babel/runtime/helpers/getPrototypeOf":"XApn","@babel/runtime/helpers/assertThisInitialized":"oXBW","@babel/runtime/helpers/inherits":"1PhT","@babel/runtime/helpers/defineProperty":"6x3D","react":"ccIB","@patternfly/react-core/dist/esm/components/Avatar":"15FK","prop-types":"3/B0","react-redux":"IZTr"}],"i78E":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _Dropdown = require("@patternfly/react-core/dist/esm/components/Dropdown");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToolbarToggle =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ToolbarToggle, _Component);

  function ToolbarToggle(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ToolbarToggle);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ToolbarToggle).call(this, props));
    _this.state = {
      isOpen: false
    };
    _this.onSelect = _this.onSelect.bind((0, _assertThisInitialized2.default)(_this));
    _this.onToggle = _this.onToggle.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(ToolbarToggle, [{
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
            title = _ref.title,
            _onClick2 = _ref.onClick;
        return _react.default.createElement(_Dropdown.DropdownItem, (0, _extends2.default)({
          key: title,
          component: url ? 'a' : 'button' // Because the urls are using 'a', don't use onClick for accessibility
          // If it is a button, use the onClick prop

        }, url ? {
          href: url,
          target: '_blank',
          rel: 'noopener noreferrer'
        } : {
          onClick: function onClick(ev) {
            return _this2.onClick(ev, url, _onClick2);
          }
        }), title);
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
  icon: _propTypes.default.func,
  dropdownItems: _propTypes.default.array
};
var _default = ToolbarToggle;
exports.default = _default;
},{"@babel/runtime/helpers/extends":"cJ8j","@babel/runtime/helpers/classCallCheck":"kUj2","@babel/runtime/helpers/createClass":"dMjH","@babel/runtime/helpers/possibleConstructorReturn":"3cbG","@babel/runtime/helpers/getPrototypeOf":"XApn","@babel/runtime/helpers/assertThisInitialized":"oXBW","@babel/runtime/helpers/inherits":"1PhT","react":"ccIB","@patternfly/react-core/dist/esm/components/Dropdown":"7GBR","prop-types":"3/B0"}],"/LHF":[function(require,module,exports) {

},{"/home/travis/build/RedHatInsights/insights-chrome/build/assets/images/fedora-background.svg":[["fedora-background.162919df.svg","Mfaz"],"Mfaz"]}],"ocEB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCore = require("@patternfly/react-core");

var _reactIcons = require("@patternfly/react-icons");

var _logo = _interopRequireDefault(require("../../../../static/images/logo.svg"));

var _reactRedux = require("react-redux");

require("./InsightsAbout.scss");

var Sentry = _interopRequireWildcard(require("@sentry/browser"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Copyright = function Copyright() {
  return _react.default.createElement("div", {
    className: "ins-c-footer__traditional-nav pf-l-flex pf-m-column pf-m-row-on-lg pf-m-flex-1-on-lg ins-c-page__about--modal-footer"
  }, _react.default.createElement("p", {
    className: "copyright pf-m-spacer-xl-on-lg"
  }, "Copyright \xA9 2019 Red Hat, Inc."), _react.default.createElement("nav", null, _react.default.createElement("ul", {
    className: "pf-l-flex pf-m-column pf-m-row-on-md"
  }, _react.default.createElement("li", null, _react.default.createElement("a", {
    className: "nav-link",
    href: "https://www.redhat.com/en/about/privacy-policy",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Privacy Policy")), _react.default.createElement("li", null, _react.default.createElement("a", {
    className: "nav-link",
    href: "https://access.redhat.com/help/terms/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Terms of Use")), _react.default.createElement("li", null, _react.default.createElement("a", {
    className: "nav-link",
    href: "https://www.redhat.com/en/about/all-policies-guidelines",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "All Policies and Guidelines")))));
};

var InsightsAbout =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(InsightsAbout, _Component);

  function InsightsAbout(props) {
    var _this;

    (0, _classCallCheck2.default)(this, InsightsAbout);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(InsightsAbout).call(this, props));
    var app;

    if (_this.props.globalNav) {
      app = _this.props.globalNav.find(function (item) {
        return item.active;
      });

      if (app && app.subItems) {
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
          path: 'apps/chrome/app.info.json',
          version: 'N/A'
        }, {
          name: 'Dashboard',
          path: "apps/dashboard/app.info.json",
          version: 'N/A'
        }, {
          name: 'Inventory',
          path: "apps/inventory/app.info.json",
          version: 'N/A'
        }, {
          name: 'Remediations',
          path: "apps/remediations/app.info.json",
          version: 'N/A'
        }, {
          name: 'Vulnerability',
          path: 'apps/vulnerability/app.info.json',
          version: 'N/A'
        }, {
          name: 'Compliance',
          path: 'apps/compliance/app.info.json',
          version: 'N/A'
        }, {
          name: 'Cost Management',
          path: 'apps/cost-management/app.info.json',
          version: 'N/A'
        }, {
          name: 'Insights',
          path: 'apps/insights/app.info.json',
          version: 'N/A'
        }, {
          name: 'System Comparison',
          path: 'apps/drift/app.info.json',
          version: 'N/A'
        }, {
          name: 'Migration Analytics',
          path: 'apps/migration-analytics/app.info.json',
          version: 'N/A'
        }, {
          name: 'Automation Hub',
          path: 'apps/automation-hub/app.info.json',
          version: 'N/A'
        }, {
          name: 'Automation Analytics',
          path: 'apps/automation-analytics/app.info.json',
          version: 'N/A'
        }]
      },
      showCopyAlert: false,
      showCopyAlertError: false,
      currentApp: app && app.title
    };

    _this.hideCopyAlert = function () {
      return _this.setState({
        showCopyAlert: false
      });
    };

    _this.updateAppVersion = _this.updateAppVersion.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(InsightsAbout, [{
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
    value: function updateAppVersion(app, version, buildId) {
      var appDetails = this.state.appDetails;
      var currentApp = appDetails.apps.find(function (appDetail) {
        return appDetail.name === app.name;
      });

      if (currentApp) {
        if (buildId) {
          version = "".concat(version, ".").concat(buildId);
        }

        currentApp.version = version;
      }

      this.setState(appDetails);
    }
  }, {
    key: "copyDetails",
    value: function copyDetails(username) {
      var _this2 = this;

      var debugDetails = (0, _objectSpread2.default)({
        Username: username,
        CurrentApp: this.state.currentApp || 'Landing',
        ApplicationPath: window.location.pathname
      }, this.state.appDetails); // If the text is successfully copied, change the tooltip
      // The tooltip exit delay is 1000ms, but the fade out is 200ms
      // Set the timeout to 1200 so the text doesn't change while it is fading

      navigator.clipboard.writeText(JSON.stringify(debugDetails, null, 2)).then(function () {
        _this2.setState({
          showCopyAlert: true
        }, function () {
          setTimeout(function () {
            _this2.setState({
              showCopyAlert: false
            });
          }, 1200);
        });
      }, function (err) {
        Sentry.captureException(err);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.state.appDetails.apps.forEach(function (app) {
        fetch(app.path).then(function (response) {
          return response.json();
        }).catch(function () {
          return {
            travis: {}
          };
        }).then(function (data) {
          return _this3.updateAppVersion(app, data.src_hash, data.build_id);
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          isModalOpen = _this$props.isModalOpen,
          onClose = _this$props.onClose,
          user = _this$props.user;
      var showCopyAlert = this.state.showCopyAlert;
      return _react.default.createElement(_reactCore.AboutModal, {
        isOpen: isModalOpen,
        onClose: onClose,
        brandImageSrc: _logo.default,
        brandImageAlt: "Red Hat Logo",
        trademark: _react.default.createElement(Copyright, null),
        className: "ins-c-about-modal"
      }, _react.default.createElement(_reactCore.Stack, {
        gutter: "sm"
      }, _react.default.createElement(_reactCore.StackItem, null, "Please include these details when opening a support case.", _react.default.createElement(_reactCore.Tooltip, {
        trigger: "mouseenter focus click",
        position: "top",
        content: showCopyAlert ? _react.default.createElement("span", null, " Successfully copied to clipboard") : _react.default.createElement("span", null, " Copy to clipboard "),
        entryDelay: 100,
        exitDelay: 1000
      }, _react.default.createElement(_reactCore.Button, {
        variant: "plain",
        onClick: function onClick() {
          return _this4.copyDetails(user.username);
        },
        "aria-label": "Copy details"
      }, _react.default.createElement(_reactIcons.CopyIcon, null)))), _react.default.createElement(_reactCore.StackItem, null, _react.default.createElement(_reactCore.TextContent, {
        className: "ins-c-page__about--modal"
      }, _react.default.createElement(_reactCore.TextList, {
        component: "dl",
        className: "ins-debug-info"
      }, this.getItem('User Name', user && user.username), this.getItem('Current Application', this.state.currentApp || 'Landing'), this.getItem('Application Path', window.location.pathname), this.state.appDetails.apps.map(function (app) {
        return _this4.getItem(app.name + ' Version', app.version);
      }))))));
    }
  }]);
  return InsightsAbout;
}(_react.Component);

InsightsAbout.propTypes = {
  globalNav: _propTypes.default.any,
  activeApp: _propTypes.default.string,
  isModalOpen: _propTypes.default.bool,
  onClose: _propTypes.default.func,
  user: _propTypes.default.object
};

function mapStateToProps(_ref) {
  var _ref$chrome = _ref.chrome,
      user = _ref$chrome.user.identity.user,
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
},{"@babel/runtime/helpers/objectSpread":"Onyf","@babel/runtime/helpers/classCallCheck":"kUj2","@babel/runtime/helpers/createClass":"dMjH","@babel/runtime/helpers/possibleConstructorReturn":"3cbG","@babel/runtime/helpers/getPrototypeOf":"XApn","@babel/runtime/helpers/assertThisInitialized":"oXBW","@babel/runtime/helpers/inherits":"1PhT","react":"ccIB","prop-types":"3/B0","@patternfly/react-core":"Tk4w","@patternfly/react-icons":"k73M","../../../../static/images/logo.svg":"5ufQ","react-redux":"IZTr","./InsightsAbout.scss":"/LHF","@sentry/browser":"W/hB"}],"uZ0D":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _Button = require("@patternfly/react-core/dist/esm/components/Button");

var _Toolbar = require("@patternfly/react-core/dist/esm/layouts/Toolbar");

var _Dropdown = require("@patternfly/react-core/dist/esm/components/Dropdown");

var _questionCircleIcon = _interopRequireDefault(require("@patternfly/react-icons/dist/esm/icons/question-circle-icon"));

var _UserToggle = _interopRequireDefault(require("./UserToggle"));

var _UserIcon = _interopRequireDefault(require("./UserIcon"));

var _ToolbarToggle = _interopRequireDefault(require("./ToolbarToggle"));

var _InsightsAbout = _interopRequireDefault(require("./InsightsAbout"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
// import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
// import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
var aboutButton = {
  title: 'FAQ',
  icon: _questionCircleIcon.default,
  widget: 'InsightsFAQ',
  items: [{
    title: 'Help & assistance',
    url: 'https://access.redhat.com/help/'
  }, {
    title: 'Customer support',
    url: 'https://access.redhat.com/support'
  }, {
    title: 'Training',
    url: 'https://www.redhat.com/en/services/training-and-certification'
  }, {
    title: 'API Documentation',
    onClick: function onClick() {
      return window.location.href = "".concat(document.baseURI, "docs/api");
    }
  }, {
    title: 'About'
  }]
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
  (0, _inherits2.default)(Tools, _Component);

  function Tools(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Tools);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Tools).call(this, props));
    _this.onModalToggle = _this.onModalToggle.bind((0, _assertThisInitialized2.default)(_this));
    aboutButton.items[4].onClick = _this.onModalToggle.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      isModalOpen: false
    };
    return _this;
  }

  (0, _createClass2.default)(Tools, [{
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
        className: "pf-l-page__header-tools pf-c-page__header-tools",
        "widget-type": "InsightsToolbar"
      }, _react.default.createElement(_Toolbar.Toolbar, null, _react.default.createElement(_Toolbar.ToolbarGroup, {
        className: "pf-u-mr-0 pf-u-mr-lg-on-lg"
      }, actions.map(function (oneItem, key) {
        return oneItem.items ? _react.default.createElement(_ToolbarToggle.default, {
          key: key,
          icon: oneItem.icon,
          dropdownItems: oneItem.items
        }) : _react.default.createElement(_Toolbar.ToolbarItem, {
          key: key,
          "data-key": key
        }, _react.default.createElement(_Button.Button, {
          key: key,
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
        className: "pf-u-screen-reader pf-u-visible-on-lg"
      }, _react.default.createElement(_UserToggle.default, {
        className: "ins-c-dropdown__user"
      }))), isModalOpen && _react.default.createElement(_InsightsAbout.default, {
        isModalOpen: isModalOpen,
        onClose: this.onModalToggle
      })), _react.default.createElement(_UserIcon.default, null));
    }
  }]);
  return Tools;
}(_react.Component);

var _default = Tools;
exports.default = _default;
},{"@babel/runtime/helpers/classCallCheck":"kUj2","@babel/runtime/helpers/createClass":"dMjH","@babel/runtime/helpers/possibleConstructorReturn":"3cbG","@babel/runtime/helpers/getPrototypeOf":"XApn","@babel/runtime/helpers/assertThisInitialized":"oXBW","@babel/runtime/helpers/inherits":"1PhT","react":"ccIB","@patternfly/react-core/dist/esm/components/Button":"CjT+","@patternfly/react-core/dist/esm/layouts/Toolbar":"f7TI","@patternfly/react-core/dist/esm/components/Dropdown":"7GBR","@patternfly/react-icons/dist/esm/icons/question-circle-icon":"wdXW","./UserToggle":"ZPuf","./UserIcon":"8L7b","./ToolbarToggle":"i78E","./InsightsAbout":"ocEB"}],"zq6H":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = require("@patternfly/react-core/dist/esm/components/Button");

var _jwt = require("../../jwt/jwt");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = function Login() {
  return _react.default.createElement("div", {
    className: "pf-c-page__header-tools"
  }, _react.default.createElement(_Button.Button, {
    variant: "tertiary",
    "aria-label": "Toggle primary navigation",
    "widget-type": "InsightsNavToggle",
    onClick: _jwt.login
  }, "Log in"));
};

var _default = Login;
exports.default = _default;
},{"react":"ccIB","@patternfly/react-core/dist/esm/components/Button":"CjT+","../../jwt/jwt":"REp7"}],"1PeJ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unauthed = unauthed;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Brand = _interopRequireDefault(require("./Brand"));

var _Tools = _interopRequireDefault(require("./Tools"));

var _Login = _interopRequireDefault(require("./Login"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function unauthed() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_Brand.default, null), _react.default.createElement(_Login.default, null));
}

;

var Header = function Header() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_Brand.default, null), _react.default.createElement(_Tools.default, null));
};

var _default = Header;
exports.default = _default;
},{"react":"ccIB","./Brand":"i1dc","./Tools":"uZ0D","./Login":"zq6H"}],"J5oO":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _Nav = require("@patternfly/react-core/dist/esm/components/Nav");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basepath = document.baseURI;

var NavigationItem = function NavigationItem(_ref) {
  var itemID = _ref.itemID,
      title = _ref.title,
      _ref$parent = _ref.parent,
      parent = _ref$parent === void 0 ? '' : _ref$parent,
      navigate = _ref.navigate,
      props = (0, _objectWithoutProperties2.default)(_ref, ["itemID", "title", "parent", "navigate"]);
  return _react.default.createElement(_Nav.NavItem, (0, _extends2.default)({}, props, {
    itemId: itemID,
    preventDefault: true,
    to: navigate || "".concat(basepath).concat(parent, "/").concat(itemID)
  }), title);
};

var _default = NavigationItem;
exports.default = _default;
},{"@babel/runtime/helpers/extends":"cJ8j","@babel/runtime/helpers/objectWithoutProperties":"RvhQ","react":"ccIB","@patternfly/react-core/dist/esm/components/Nav":"RqAC"}],"iurj":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _Nav = require("@patternfly/react-core/dist/esm/components/Nav");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _actions = require("../../redux/actions");

var _NavigationItem = _interopRequireDefault(require("./NavigationItem"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basepath = document.baseURI;
var openshiftLinks = {
  operatorhub: {
    title: 'OperatorHub.io',
    link: 'https://operatorhub.io/'
  },
  feedback: {
    title: 'Cluster Manager Feedback',
    link: 'mailto:ocm-feedback@redhat.com'
  },
  bugs: {
    title: 'Report an OpenShift Bug',
    link: 'https://bugzilla.redhat.com/enter_bug.cgi?product=OpenShift%20Container%20Platform'
  }
};

var Navigation =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Navigation, _Component);

  function Navigation(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Navigation);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Navigation).call(this, props));
    _this.onSelect = _this.onSelect.bind((0, _assertThisInitialized2.default)(_this));
    _this.onClick = _this.onClick.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Navigation, [{
    key: "onSelect",
    value: function onSelect(_ref) {
      var groupId = _ref.groupId,
          itemID = _ref.itemID;
      this.setState({
        activeGroup: groupId,
        activeItem: itemID
      });
    }
  }, {
    key: "onClick",
    value: function onClick(event, item, parent) {
      event.persist();
      var _this$props = this.props,
          onNavigate = _this$props.onNavigate,
          onClearActive = _this$props.onClearActive,
          activeGroup = _this$props.activeGroup,
          activeLocation = _this$props.activeLocation,
          settings = _this$props.settings,
          appId = _this$props.appId;
      var isMetaKey = event.ctrlKey || event.metaKey || event.which === 2;
      var url;

      if (parent && parent.active) {
        var activeLevel = settings.find(function (navItem) {
          return navItem.id === appId;
        });

        if (activeLevel) {
          var activeItem = activeLevel.subItems.find(function (navItem) {
            return navItem.id === activeGroup;
          });

          if (activeItem && activeItem.reload && !item.reload) {
            url = "".concat(basepath).concat(activeLocation, "/").concat(appId, "/").concat(item.id);
            isMetaKey ? window.open(url) : window.location.href = url;
          }
        }

        if (!item.reload) {
          isMetaKey ? window.open("".concat(basepath).concat(activeLocation, "/").concat(item.reload)) : onNavigate && onNavigate(item, event);
        } else {
          url = "".concat(basepath).concat(activeLocation, "/").concat(item.reload);
          isMetaKey ? window.open(url) : window.location.href = url;
        }
      } else {
        if (item.group && activeGroup === item.group) {
          if (isMetaKey) {
            window.open("".concat(basepath).concat(activeLocation, "/").concat(item.id));
          } else {
            onClearActive && onClearActive();
            onNavigate && onNavigate(item, event);
          }
        } else {
          var prefix = parent && parent.id && !item.reload ? "/".concat(parent.id, "/") : '/';
          url = "".concat(basepath).concat(activeLocation).concat(prefix).concat(item.reload || item.id);
          isMetaKey ? window.open(url) : window.location.href = url;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          settings = _this$props2.settings,
          activeApp = _this$props2.activeApp,
          navHidden = _this$props2.navHidden,
          activeLocation = _this$props2.activeLocation,
          documentation = _this$props2.documentation;

      if (navHidden) {
        document.querySelector('aside').setAttribute('hidden', true);
      }

      return _react.default.createElement(_Nav.Nav, {
        onSelect: this.onSelect,
        "aria-label": "Insights Global Navigation",
        "data-ouia-safe": "true"
      }, _react.default.createElement(_Nav.NavList, null, settings.map(function (item, key) {
        if (!(item.disabled_on_stable && window.location.pathname.indexOf('/beta') === -1)) {
          if (item.subItems) {
            return _react.default.createElement(_Nav.NavExpandable, {
              title: item.title,
              itemID: item.id,
              key: key,
              isActive: item.active,
              isExpanded: item.active
            }, item.subItems.map(function (subItem, subKey) {
              if (!(subItem.disabled_on_stable && window.location.pathname.indexOf('/beta') === -1)) {
                return _react.default.createElement(_NavigationItem.default, {
                  itemID: subItem.reload || subItem.id,
                  key: subKey,
                  title: subItem.title,
                  parent: "".concat(activeLocation).concat(item.id ? "/".concat(item.id) : ''),
                  isActive: item.active && subItem.id === activeApp,
                  onClick: function onClick(event) {
                    return _this2.onClick(event, subItem, item);
                  }
                });
              }
            }));
          } else {
            return _react.default.createElement(_NavigationItem.default, {
              itemID: item.id,
              key: key,
              title: item.title,
              parent: activeLocation,
              isActive: item.active || item.id === activeApp,
              onClick: function onClick(event) {
                return _this2.onClick(event, item);
              }
            });
          }
        }
      }), documentation && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Nav.NavItemSeparator, null), _react.default.createElement(_Nav.NavItem, {
        className: "ins-c-page__documentation",
        to: documentation,
        rel: "noopener noreferrer",
        target: "_blank"
      }, "Documentation")), activeLocation === 'openshift' && Object.entries(openshiftLinks).map(function (_ref2) {
        var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
            key = _ref3[0],
            value = _ref3[1];

        return _react.default.createElement(_Nav.NavItem, {
          key: key,
          to: value.link,
          target: "_blank",
          rel: "noopener noreferrer"
        }, value.title);
      })));
    }
  }]);
  return Navigation;
}(_react.Component);

Navigation.propTypes = {
  appId: _propTypes.default.string,
  settings: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string,
    title: _propTypes.default.string,
    subItems: function subItems() {
      return Navigation.propTypes.settings;
    }
  })),
  activeApp: _propTypes.default.string,
  navHidden: _propTypes.default.bool,
  activeLocation: _propTypes.default.string,
  documentation: _propTypes.default.string,
  onNavigate: _propTypes.default.func,
  onClearActive: _propTypes.default.func,
  activeGroup: _propTypes.default.string
};

function stateToProps(_ref4) {
  var _ref4$chrome = _ref4.chrome,
      globalNav = _ref4$chrome.globalNav,
      activeApp = _ref4$chrome.activeApp,
      navHidden = _ref4$chrome.navHidden,
      activeLocation = _ref4$chrome.activeLocation,
      activeGroup = _ref4$chrome.activeGroup,
      appId = _ref4$chrome.appId;
  return {
    settings: globalNav,
    activeApp: activeApp,
    navHidden: navHidden,
    activeLocation: activeLocation,
    activeGroup: activeGroup,
    appId: appId
  };
}

function dispatchToProps(dispatch) {
  return {
    onNavigate: function onNavigate(item, event) {
      return dispatch((0, _actions.appNavClick)(item, event));
    },
    onClearActive: function onClearActive() {
      return dispatch((0, _actions.clearActive)());
    }
  };
}

var _default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Navigation);

exports.default = _default;
},{"@babel/runtime/helpers/slicedToArray":"xkYc","@babel/runtime/helpers/classCallCheck":"kUj2","@babel/runtime/helpers/createClass":"dMjH","@babel/runtime/helpers/possibleConstructorReturn":"3cbG","@babel/runtime/helpers/getPrototypeOf":"XApn","@babel/runtime/helpers/assertThisInitialized":"oXBW","@babel/runtime/helpers/inherits":"1PhT","react":"ccIB","@patternfly/react-core/dist/esm/components/Nav":"RqAC","prop-types":"3/B0","react-redux":"IZTr","../../redux/actions":"afkn","./NavigationItem":"J5oO"}],"nuDN":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Navigation = _interopRequireDefault(require("./Navigation"));

var _Split = require("@patternfly/react-core/dist/esm/layouts/Split");

var _homeIcon = _interopRequireDefault(require("@patternfly/react-icons/dist/esm/icons/home-icon"));

var _reactRedux = require("react-redux");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var documentationLink = {
  rhel: 'https://access.redhat.com/documentation/en-us/cloud_management_services_for_red_hat_enterprise_linux/1.0/',
  insights: 'https://access.redhat.com/documentation/en-us/red_hat_insights/',
  openshift: 'https://docs.openshift.com/container-platform/4.1/'
};

var SideNav =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(SideNav, _Component);

  function SideNav() {
    (0, _classCallCheck2.default)(this, SideNav);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SideNav).apply(this, arguments));
  }

  (0, _createClass2.default)(SideNav, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          activeTechnology = _this$props.activeTechnology,
          activeLocation = _this$props.activeLocation;
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_Split.Split, {
        className: "ins-c-navigation__header"
      }, _react.default.createElement(_Split.SplitItem, {
        className: "ins-c-page__home-icon"
      }, _react.default.createElement("a", {
        href: "".concat(document.baseURI)
      }, _react.default.createElement(_homeIcon.default, {
        size: "md"
      }))), _react.default.createElement(_Split.SplitItem, {
        isFilled: true,
        className: "pf-u-display-flex pf-u-align-items-center ins-c-navigation__header-title__wrapper"
      }, _react.default.createElement("div", {
        className: "ins-c-navigation__header-title"
      }, activeTechnology))), _react.default.createElement(_Navigation.default, {
        documentation: documentationLink[activeLocation]
      }));
    }
  }]);
  return SideNav;
}(_react.Component);

SideNav.propTypes = {
  activeTechnology: _propTypes.default.string,
  activeLocation: _propTypes.default.string
};
SideNav.defaultProps = {
  activeTechnology: '',
  activeLocation: ''
};

var _default = (0, _reactRedux.connect)(function (_ref) {
  var _ref$chrome = _ref.chrome,
      activeTechnology = _ref$chrome.activeTechnology,
      activeLocation = _ref$chrome.activeLocation;
  return {
    activeTechnology: activeTechnology,
    activeLocation: activeLocation
  };
})(SideNav);

exports.default = _default;
},{"@babel/runtime/helpers/classCallCheck":"kUj2","@babel/runtime/helpers/createClass":"dMjH","@babel/runtime/helpers/possibleConstructorReturn":"3cbG","@babel/runtime/helpers/getPrototypeOf":"XApn","@babel/runtime/helpers/inherits":"1PhT","react":"ccIB","prop-types":"3/B0","./Navigation":"iurj","@patternfly/react-core/dist/esm/layouts/Split":"azXe","@patternfly/react-icons/dist/esm/icons/home-icon":"QV0D","react-redux":"IZTr"}],"Sz1i":[function(require,module,exports) {
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
Object.defineProperty(exports, "UnauthedHeader", {
  enumerable: true,
  get: function () {
    return _index.unauthed;
  }
});
Object.defineProperty(exports, "Sidenav", {
  enumerable: true,
  get: function () {
    return _index2.default;
  }
});
Object.defineProperty(exports, "RootApp", {
  enumerable: true,
  get: function () {
    return _RootApp.default;
  }
});

var _Footer = _interopRequireDefault(require("./Footer"));

var _index = _interopRequireWildcard(require("./Header/index"));

var _index2 = _interopRequireDefault(require("./Sidenav/index"));

var _RootApp = _interopRequireDefault(require("./RootApp"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Footer":"rwWu","./Header/index":"1PeJ","./Sidenav/index":"nuDN","./RootApp":"DUhv"}],"4IsA":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"EIqc":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"4IsA"}],0:[function(require,module,exports) {
var b=require("EIqc");b.load([]).then(function(){require("Sz1i");});
},{}]},{},[0], null)
//# sourceMappingURL=/apps/chrome/js/App.bd3c4ce5.js.map