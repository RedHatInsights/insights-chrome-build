"use strict";
(self["webpackChunkinsights_chrome"] = self["webpackChunkinsights_chrome"] || []).push([["src_components_Debugger_index_ts"],{

/***/ "./src/components/Debugger/Debugger.scss":
/*!***********************************************!*\
  !*** ./src/components/Debugger/Debugger.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Debugger/DebuggerModal.tsx":
/*!***************************************************!*\
  !*** ./src/components/Debugger/DebuggerModal.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?dc4e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Modal */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Modal/@patternfly/react-core/dist/dynamic/components/Modal");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Text */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Text/@patternfly/react-core/dist/dynamic/components/Text");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_bug_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/bug-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/bug-icon/@patternfly/react-icons/dist/dynamic/icons/bug-icon");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_bug_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_dynamic_icons_bug_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions */ "./src/redux/actions.ts");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/MenuToggle */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/MenuToggle/@patternfly/react-core/dist/dynamic/components/MenuToggle");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Select */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Select/@patternfly/react-core/dist/dynamic/components/Select");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _DebuggerTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DebuggerTable */ "./src/components/Debugger/DebuggerTable.tsx");
/* harmony import */ var _Debugger_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Debugger.scss */ "./src/components/Debugger/Debugger.scss");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}











var DebuggerModal = function(param) {
    var user = param.user;
    var isOpen = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function(param) {
        var isDebuggerModalOpen = param.chrome.isDebuggerModalOpen;
        return isDebuggerModalOpen;
    });
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    var setIsModalOpen = function(isOpen) {
        return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_6__.toggleDebuggerModal)(isOpen));
    };
    var _React_useState = _sliced_to_array(react__WEBPACK_IMPORTED_MODULE_0___default().useState(false), 2), isDropdownOpen = _React_useState[0], setIsOpen = _React_useState[1];
    var _React_useState1 = _sliced_to_array(react__WEBPACK_IMPORTED_MODULE_0___default().useState("Entitlements"), 2), selected = _React_useState1[0], setSelected = _React_useState1[1];
    var menuRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
    var onToggleClick = function() {
        setIsOpen(!isDropdownOpen);
    };
    var onSelect = function(_event, itemId) {
        setSelected(itemId);
        setIsOpen(false);
    };
    var toggle = function(toggleRef) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_7__.MenuToggle, {
            ref: toggleRef,
            onClick: onToggleClick,
            isExpanded: isDropdownOpen,
            className: "chr-c-debugger-dropdown"
        }, selected);
    };
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
        ouiaId: "debugger-button",
        className: "chr-c-button-debugger",
        onClick: function() {
            setIsModalOpen(true);
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons_dist_dynamic_icons_bug_icon__WEBPACK_IMPORTED_MODULE_4__.BugIcon, null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_2__.Modal, {
        "aria-label": "Debugger modal",
        isOpen: isOpen,
        className: "chr-c-debugger-modal",
        variant: _patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_2__.ModalVariant.medium,
        onClose: function() {
            return setIsModalOpen(false);
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "chr-c-debugger-content"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Text__WEBPACK_IMPORTED_MODULE_3__.TextContent, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Chrome Debugger")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_8__.Select, {
        id: "single-select",
        ref: menuRef,
        isOpen: isDropdownOpen,
        selected: selected,
        onSelect: onSelect,
        onOpenChange: function(isOpen) {
            return setIsOpen(isOpen);
        },
        toggle: toggle
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_8__.SelectList, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_8__.SelectOption, {
        itemId: "Entitlements"
    }, "Entitlements"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_8__.SelectOption, {
        itemId: "Roles"
    }, "Roles"))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DebuggerTable__WEBPACK_IMPORTED_MODULE_9__["default"], {
        user: user,
        selected: selected
    }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DebuggerModal);


/***/ }),

/***/ "./src/components/Debugger/DebuggerTable.tsx":
/*!***************************************************!*\
  !*** ./src/components/Debugger/DebuggerTable.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?dc4e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Table.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Thead.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Tr.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Th.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Tbody.js");
/* harmony import */ var _utils_internalChromeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/internalChromeContext */ "./src/utils/internalChromeContext.ts");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}



var DebuggerTable = function(props) {
    var table;
    var entitlements = Object.entries(props.user.entitlements).reduce(function(acc, param) {
        var _param = _sliced_to_array(param, 2), key = _param[0], entitlement = _param[1];
        var _obj;
        return _object_spread_props(_object_spread({}, acc), (_obj = {}, _define_property(_obj, "entitlements_".concat(key), entitlement.is_entitled), _define_property(_obj, "entitlements_".concat(key, "_trial"), entitlement.is_trial), _obj));
    }, {});
    var _React_useState = _sliced_to_array(react__WEBPACK_IMPORTED_MODULE_0___default().useState({}), 2), permissions = _React_useState[0], setPermissions = _React_useState[1];
    var chrome = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_utils_internalChromeContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function() {
        function getPermissions() {
            return _getPermissions.apply(this, arguments);
        }
        function _getPermissions() {
            _getPermissions = _async_to_generator(function() {
                var userPermissions, userPermissionsList;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                chrome.getUserPermissions()
                            ];
                        case 1:
                            userPermissions = _state.sent();
                            userPermissionsList = Object.entries(userPermissions).reduce(function(acc, param) {
                                var _param = _sliced_to_array(param, 2), key = _param[0], userPermission = _param[1];
                                return _object_spread_props(_object_spread({}, acc), _define_property({}, "userPermissionsList_".concat(key), userPermission.permission));
                            }, {});
                            setPermissions(userPermissionsList);
                            return [
                                2
                            ];
                    }
                });
            });
            return _getPermissions.apply(this, arguments);
        }
        getPermissions();
    }, []);
    if (props.selected === "Entitlements") {
        var _props_user_identity_user;
        table = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__.Table, {
            variant: "compact"
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__.Thead, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__.Tr, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Th, null, "Entitlements given to ", (_props_user_identity_user = props.user.identity.user) === null || _props_user_identity_user === void 0 ? void 0 : _props_user_identity_user.username))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__.Tbody, null, Object.entries(entitlements).map(function(val, index) {
            //remove entitlement if false
            if (val[1] === true) {
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
                    key: index
                }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, val[0].replace(/entitlements_/g, "")));
            } else {
                return null;
            }
        })));
    } else if (props.selected === "Roles") {
        var _props_user_identity_user1;
        table = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__.Table, {
            variant: "compact"
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__.Thead, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__.Tr, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Th, null, "Roles given to ", (_props_user_identity_user1 = props.user.identity.user) === null || _props_user_identity_user1 === void 0 ? void 0 : _props_user_identity_user1.username))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__.Tbody, null, Object.values(permissions).map(function(val, index) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
                key: index
            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, val));
        })));
    }
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, table);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DebuggerTable);


/***/ }),

/***/ "./src/components/Debugger/index.ts":
/*!******************************************!*\
  !*** ./src/components/Debugger/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _DebuggerModal__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _DebuggerModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DebuggerModal */ "./src/components/Debugger/DebuggerModal.tsx");



/***/ })

}]);