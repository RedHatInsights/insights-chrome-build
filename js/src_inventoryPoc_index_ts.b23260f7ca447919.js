"use strict";
(self["webpackChunkinsights_chrome"] = self["webpackChunkinsights_chrome"] || []).push([["src_inventoryPoc_index_ts"],{

/***/ "./src/inventoryPoc/InventoryColumn.ts":
/*!*********************************************!*\
  !*** ./src/inventoryPoc/InventoryColumn.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseInventoryColumn: () => (/* binding */ BaseInventoryColumn),
/* harmony export */   InventoryColumn: () => (/* binding */ InventoryColumn),
/* harmony export */   isAsyncColumnData: () => (/* binding */ isAsyncColumnData),
/* harmony export */   isRemoteColumn: () => (/* binding */ isRemoteColumn)
/* harmony export */ });
/* harmony import */ var _scalprum_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @scalprum/core */ "webpack/sharing/consume/default/@scalprum/core/@scalprum/core");
/* harmony import */ var _scalprum_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scalprum_core__WEBPACK_IMPORTED_MODULE_0__);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}

function isRemoteColumn(columnData) {
    return columnData.module !== undefined || columnData.scope !== undefined;
}
function isAsyncColumnData(columnData) {
    return typeof columnData === 'function';
}
var BaseInventoryColumn = /*#__PURE__*/ function() {
    "use strict";
    function BaseInventoryColumn(columnId, title, param) {
        var columnData = param.columnData;
        _class_call_check(this, BaseInventoryColumn);
        _define_property(this, "columnId", void 0);
        _define_property(this, "title", void 0);
        _define_property(this, "columnData", void 0);
        this.columnId = columnId;
        this.title = title;
        this.columnData = columnData;
    }
    _create_class(BaseInventoryColumn, [
        {
            key: "getColumnId",
            value: function getColumnId() {
                return this.columnId;
            }
        },
        {
            key: "getTitle",
            value: function getTitle() {
                return this.title;
            }
        },
        {
            key: "getColumnData",
            value: function getColumnData() {
                return this.columnData;
            }
        },
        {
            key: "setColumnData",
            value: function setColumnData(columnData) {
                this.columnData = columnData;
            }
        },
        {
            key: "setColumnId",
            value: function setColumnId(columnId) {
                this.columnId = columnId;
            }
        },
        {
            key: "setColumnTitle",
            value: function setColumnTitle(title) {
                this.title = title;
            }
        }
    ]);
    return BaseInventoryColumn;
}();
var InventoryColumn = /*#__PURE__*/ function(BaseInventoryColumn) {
    "use strict";
    _inherits(InventoryColumn, BaseInventoryColumn);
    var _super = _create_super(InventoryColumn);
    function InventoryColumn(columnId, title, param) {
        var columnData = param.columnData;
        _class_call_check(this, InventoryColumn);
        var _this;
        if (isRemoteColumn(columnData)) {
            _this = _super.call(this, columnId, title, {
                columnData: []
            });
            _define_property(_assert_this_initialized(_this), "asyncModule", false);
            _define_property(_assert_this_initialized(_this), "ready", true);
            _define_property(_assert_this_initialized(_this), "observeReadyCallbacks", []);
            _this.asyncModule = true;
            _this.ready = false;
            (0,_scalprum_core__WEBPACK_IMPORTED_MODULE_0__.getModule)(columnData.scope, columnData.module, columnData.importName).then(function(remoteColumnInit) {
                var _remoteColumn_isAsync;
                var remoteColumn = remoteColumnInit.apply(void 0, _to_consumable_array(columnData.initArgs || []));
                if (remoteColumn === null || remoteColumn === void 0 ? void 0 : (_remoteColumn_isAsync = remoteColumn.isAsync) === null || _remoteColumn_isAsync === void 0 ? void 0 : _remoteColumn_isAsync.call(remoteColumn)) {
                    var p = new Promise(function(res) {
                        remoteColumn.observeReady(res);
                    });
                    p.then(function() {
                        _this.setColumnId(remoteColumn.getColumnId());
                        _this.setColumnTitle(remoteColumn.getTitle());
                        _this.setColumnData(remoteColumn.getColumnData());
                        _this.ready = true;
                        _this.observeReadyCallbacks.forEach(function(callback) {
                            return callback();
                        });
                    });
                } else {
                    _this.setColumnId(remoteColumn.getColumnId());
                    _this.setColumnTitle(remoteColumn.getTitle());
                    _this.setColumnData(remoteColumn.getColumnData());
                    _this.ready = true;
                    _this.observeReadyCallbacks.forEach(function(callback) {
                        return callback();
                    });
                }
            });
        } else if (isAsyncColumnData(columnData)) {
            _this = _super.call(this, columnId, title, {
                columnData: []
            });
            _define_property(_assert_this_initialized(_this), "asyncModule", false);
            _define_property(_assert_this_initialized(_this), "ready", true);
            _define_property(_assert_this_initialized(_this), "observeReadyCallbacks", []);
            _this.asyncModule = true;
            _this.ready = false;
            columnData().then(function(data) {
                _this.setColumnData(data);
                _this.ready = true;
                _this.observeReadyCallbacks.forEach(function(callback) {
                    return callback();
                });
            });
        } else {
            _this = _super.call(this, columnId, title, {
                columnData: columnData
            });
            _define_property(_assert_this_initialized(_this), "asyncModule", false);
            _define_property(_assert_this_initialized(_this), "ready", true);
            _define_property(_assert_this_initialized(_this), "observeReadyCallbacks", []);
        }
        return _possible_constructor_return(_this);
    }
    _create_class(InventoryColumn, [
        {
            key: "isAsync",
            value: function isAsync() {
                return !!this.asyncModule;
            }
        },
        {
            key: "isReady",
            value: function isReady() {
                return !!this.ready;
            }
        },
        {
            key: "observeReady",
            value: function observeReady(callback) {
                this.observeReadyCallbacks.push(callback);
            }
        }
    ]);
    return InventoryColumn;
}(BaseInventoryColumn);


/***/ }),

/***/ "./src/inventoryPoc/ModularInventory.tsx":
/*!***********************************************!*\
  !*** ./src/inventoryPoc/ModularInventory.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?1a75");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InventoryColumn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InventoryColumn */ "./src/inventoryPoc/InventoryColumn.ts");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Table.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Thead.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Tr.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Th.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Tbody.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Td.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_DateFormat__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/DateFormat */ "./node_modules/@redhat-cloud-services/frontend-components/esm/DateFormat/DateFormat.js");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_security_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/security-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/security-icon/@patternfly/react-icons/dist/dynamic/icons/security-icon");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_security_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_dynamic_icons_security_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_tag_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/tag-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/tag-icon/@patternfly/react-icons/dist/dynamic/icons/tag-icon");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_tag_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_dynamic_icons_tag_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api */ "./src/inventoryPoc/api.ts");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Checkbox */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Checkbox/@patternfly/react-core/dist/dynamic/components/Checkbox?f5e7");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Checkbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Checkbox__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Icon */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Icon/@patternfly/react-core/dist/dynamic/components/Icon?6d41");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Skeleton */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Skeleton/@patternfly/react-core/dist/dynamic/components/Skeleton?21e9");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Skeleton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Skeleton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_shield_alt_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/shield-alt-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/shield-alt-icon/@patternfly/react-icons/dist/dynamic/icons/shield-alt-icon");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_shield_alt_icon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_dynamic_icons_shield_alt_icon__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_bug_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/bug-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/bug-icon/@patternfly/react-icons/dist/dynamic/icons/bug-icon");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_bug_icon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_dynamic_icons_bug_icon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_cog_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/cog-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/cog-icon/@patternfly/react-icons/dist/dynamic/icons/cog-icon");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_cog_icon__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_dynamic_icons_cog_icon__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Toolbar */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Toolbar/@patternfly/react-core/dist/dynamic/components/Toolbar?534c");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_11__);
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














function createRows(columns) {
    var rowNumber = columns.reduce(function(acc, column) {
        var _column_isAsync;
        if (!((_column_isAsync = column.isAsync) === null || _column_isAsync === void 0 ? void 0 : _column_isAsync.call(column))) {
            return Math.max(acc, column.getColumnData().length);
        }
        return acc;
    }, 0);
    var allData = columns.reduce(function(acc, column) {
        var _column_isAsync, _column_isReady;
        if (((_column_isAsync = column.isAsync) === null || _column_isAsync === void 0 ? void 0 : _column_isAsync.call(column)) && !((_column_isReady = column.isReady) === null || _column_isReady === void 0 ? void 0 : _column_isReady.call(column))) {
            for(var i = 0; i < rowNumber; i++){
                if (!acc[i]) {
                    acc[i] = [];
                }
                acc[i].push(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Skeleton__WEBPACK_IMPORTED_MODULE_7__.Skeleton, null));
            }
            return acc;
        }
        var data = column.getColumnData();
        for(var i1 = 0; i1 < data.length; i1++){
            if (!acc[i1]) {
                acc[i1] = [];
            }
            acc[i1].push(data[i1]);
        }
        return acc;
    }, []);
    return allData;
}
function useColumnData(columns) {
    var hasRemoteColumns = columns.some(function(column) {
        var _column_isAsync;
        return (_column_isAsync = column.isAsync) === null || _column_isAsync === void 0 ? void 0 : _column_isAsync.call(column);
    });
    var _React_useState = _sliced_to_array(react__WEBPACK_IMPORTED_MODULE_0___default().useState(!hasRemoteColumns), 2), ready = _React_useState[0], setReady = _React_useState[1];
    function initLocalData() {
        if (hasRemoteColumns) {
            return new Array(columns.length).fill([]);
        }
        return createRows(columns);
    }
    var _React_useState1 = _sliced_to_array(react__WEBPACK_IMPORTED_MODULE_0___default().useState(initLocalData), 2), data = _React_useState1[0], setData = _React_useState1[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
        var _loop = function(i) {
            var _columns_i_isAsync, _columns_i;
            if (((_columns_i_isAsync = (_columns_i = columns[i]).isAsync) === null || _columns_i_isAsync === void 0 ? void 0 : _columns_i_isAsync.call(_columns_i)) && typeof columns[i].observeReady === 'function') {
                var P = new Promise(function(resolve) {
                    var _columns_i_observeReady, _columns_i;
                    (_columns_i_observeReady = (_columns_i = columns[i]).observeReady) === null || _columns_i_observeReady === void 0 ? void 0 : _columns_i_observeReady.call(_columns_i, resolve);
                });
                promises.push(P);
                P.then(function() {
                    setData(createRows(columns));
                });
            }
        };
        setReady(!hasRemoteColumns);
        setData(createRows(columns));
        var promises = [];
        for(var i = 0; i < columns.length; i++)_loop(i);
        return function() {
            setReady(true);
            setData([]);
        };
    }, [
        columns
    ]);
    var res = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function() {
        return [
            data,
            ready
        ];
    }, [
        data,
        ready
    ]);
    return res;
}
var ModularInventory = function(param) {
    var columns = param.columns;
    var _useColumnData = _sliced_to_array(useColumnData(columns), 1), allData = _useColumnData[0];
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_12__.Table, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_13__.Thead, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_14__.Tr, null, columns.map(function(column) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_15__.Th, {
            key: column.getColumnId()
        }, column.getTitle());
    }))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_16__.Tbody, null, allData.map(function(row, index) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_14__.Tr, {
            key: index
        }, row.map(function(cell, cellIndex) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_17__.Td, {
                key: cellIndex
            }, cell);
        }));
    })));
};
var columnIds = [
    'id',
    'name',
    'all-cves',
    'cves',
    'tags',
    'os',
    'lastCheckIn',
    'criticalCves',
    'importantCves',
    'moderateCves',
    'lowCves',
    'recommendations',
    'installAbleAdvisories'
];
var ColumnEnabler = function(param) {
    var enabledColumns = param.enabledColumns, handleCheckboxChange = param.handleCheckboxChange;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_11__.Toolbar, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_11__.ToolbarContent, null, columnIds.map(function(columnId) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_11__.ToolbarItem, {
            key: columnId
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {
            isChecked: enabledColumns[columnId],
            onChange: function() {
                return handleCheckboxChange(columnId);
            },
            label: columnId,
            id: columnId
        }));
    })));
};
var columnsRegistry = {
    criticalCves: function(_h, _c, systemPromises) {
        return new _InventoryColumn__WEBPACK_IMPORTED_MODULE_1__.InventoryColumn('criticalCves', 'Critical', {
            columnData: /*#__PURE__*/ _async_to_generator(function() {
                var res;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                Promise.all(systemPromises)
                            ];
                        case 1:
                            res = _state.sent();
                            return [
                                2,
                                res.map(function(r) {
                                    if (r === 'unknown') {
                                        return 'Unknown';
                                    }
                                    return r.critical_hits;
                                })
                            ];
                    }
                });
            })
        });
    },
    importantCves: function(_h, _c, systemPromises) {
        return new _InventoryColumn__WEBPACK_IMPORTED_MODULE_1__.InventoryColumn('importantCves', 'Important', {
            columnData: /*#__PURE__*/ _async_to_generator(function() {
                var res;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                Promise.all(systemPromises)
                            ];
                        case 1:
                            res = _state.sent();
                            return [
                                2,
                                res.map(function(r) {
                                    if (r === 'unknown') {
                                        return 'Unknown';
                                    }
                                    return r.important_hits;
                                })
                            ];
                    }
                });
            })
        });
    },
    moderateCves: function(_h, _c, systemPromises) {
        return new _InventoryColumn__WEBPACK_IMPORTED_MODULE_1__.InventoryColumn('moderateCves', 'Moderate', {
            columnData: /*#__PURE__*/ _async_to_generator(function() {
                var res;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                Promise.all(systemPromises)
                            ];
                        case 1:
                            res = _state.sent();
                            return [
                                2,
                                res.map(function(r) {
                                    if (r === 'unknown') {
                                        return 'Unknown';
                                    }
                                    return r.moderate_hits;
                                })
                            ];
                    }
                });
            })
        });
    },
    lowCves: function(_h, _c, systemPromises) {
        return new _InventoryColumn__WEBPACK_IMPORTED_MODULE_1__.InventoryColumn('lowCves', 'Low', {
            columnData: /*#__PURE__*/ _async_to_generator(function() {
                var res;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                Promise.all(systemPromises)
                            ];
                        case 1:
                            res = _state.sent();
                            return [
                                2,
                                res.map(function(r) {
                                    if (r === 'unknown') {
                                        return 'Unknown';
                                    }
                                    return r.low_hits;
                                })
                            ];
                    }
                });
            })
        });
    },
    recommendations: function(_h, _c, systemPromises) {
        return new _InventoryColumn__WEBPACK_IMPORTED_MODULE_1__.InventoryColumn('recommendations', 'Recommendations', {
            columnData: /*#__PURE__*/ _async_to_generator(function() {
                var res;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                Promise.all(systemPromises)
                            ];
                        case 1:
                            res = _state.sent();
                            return [
                                2,
                                res.map(function(r) {
                                    if (r === 'unknown') {
                                        return 'Unknown';
                                    }
                                    return r.low_hits + r.moderate_hits + r.important_hits + r.critical_hits;
                                })
                            ];
                    }
                });
            })
        });
    },
    installAbleAdvisories: function(_h, _c, _s, patchPromises) {
        return new _InventoryColumn__WEBPACK_IMPORTED_MODULE_1__.InventoryColumn('installAbleAdvisories', 'Installable advisories', {
            columnData: /*#__PURE__*/ _async_to_generator(function() {
                var res;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                Promise.all(patchPromises)
                            ];
                        case 1:
                            res = _state.sent();
                            return [
                                2,
                                res.map(function(r) {
                                    if (r === 'unknown') {
                                        return 'unknown';
                                    }
                                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
                                        className: "pf-v5-u-mr-sm"
                                    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_patternfly_react_icons_dist_dynamic_icons_shield_alt_icon__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        className: "pf-v5-u-mr-sm"
                                    }), r.attributes.installable_rhsa_count), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
                                        className: "pf-v5-u-mr-sm"
                                    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_patternfly_react_icons_dist_dynamic_icons_bug_icon__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        className: "pf-v5-u-mr-sm"
                                    }), r.attributes.installable_rhba_count), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
                                        className: "pf-v5-u-mr-sm"
                                    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_patternfly_react_icons_dist_dynamic_icons_cog_icon__WEBPACK_IMPORTED_MODULE_10___default()), {
                                        className: "pf-v5-u-mr-sm"
                                    }), r.attributes.installable_rhea_count));
                                })
                            ];
                    }
                });
            })
        });
    },
    id: function(hosts) {
        return new _InventoryColumn__WEBPACK_IMPORTED_MODULE_1__.BaseInventoryColumn('id', 'System ID', {
            columnData: hosts.map(function(host) {
                return host.id;
            })
        });
    },
    name: function(hosts) {
        return new _InventoryColumn__WEBPACK_IMPORTED_MODULE_1__.BaseInventoryColumn('name', 'System Name', {
            columnData: hosts.map(function(host) {
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
                    key: host.id,
                    href: "#"
                }, host.display_name);
            })
        });
    },
    'all-cves': function(_e, cvePromises) {
        return new _InventoryColumn__WEBPACK_IMPORTED_MODULE_1__.InventoryColumn('all-cves', 'Total CVEs', {
            columnData: /*#__PURE__*/ _async_to_generator(function() {
                var res;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                Promise.all(cvePromises)
                            ];
                        case 1:
                            res = _state.sent();
                            return [
                                2,
                                res.map(function(r, index) {
                                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
                                        key: index,
                                        href: "#"
                                    }, r.allCount);
                                })
                            ];
                    }
                });
            })
        });
    },
    cves: function(_e, cvePromises) {
        return new _InventoryColumn__WEBPACK_IMPORTED_MODULE_1__.InventoryColumn('cves', 'High severity CVEs', {
            columnData: /*#__PURE__*/ _async_to_generator(function() {
                var res;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                Promise.all(cvePromises)
                            ];
                        case 1:
                            res = _state.sent();
                            return [
                                2,
                                res.map(function(r, index) {
                                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
                                        key: index,
                                        className: "pf-v5-u-mr-md"
                                    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Icon__WEBPACK_IMPORTED_MODULE_6__.Icon, {
                                        status: "danger",
                                        className: "pf-v5-u-mr-sm"
                                    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_patternfly_react_icons_dist_dynamic_icons_security_icon__WEBPACK_IMPORTED_MODULE_2___default()), null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
                                        href: "#"
                                    }, r.criticalCount)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Icon__WEBPACK_IMPORTED_MODULE_6__.Icon, {
                                        status: "warning",
                                        className: "pf-v5-u-mr-sm"
                                    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_patternfly_react_icons_dist_dynamic_icons_security_icon__WEBPACK_IMPORTED_MODULE_2___default()), null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
                                        href: "#"
                                    }, r.highCount)));
                                })
                            ];
                    }
                });
            })
        });
    },
    tags: function(hosts) {
        return new _InventoryColumn__WEBPACK_IMPORTED_MODULE_1__.InventoryColumn('tags', 'Tags??', {
            columnData: /*#__PURE__*/ _async_to_generator(function() {
                var promises, res;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            promises = hosts.map(function(host) {
                                if (!host.id) {
                                    return {
                                        count: 0,
                                        results: {}
                                    };
                                }
                                return (0,_api__WEBPACK_IMPORTED_MODULE_4__.getHostTags)(host.id);
                            });
                            return [
                                4,
                                Promise.all(promises)
                            ];
                        case 1:
                            res = _state.sent();
                            return [
                                2,
                                res.map(function(r, index) {
                                    var tagCount = Object.values(r.results).reduce(function(acc, curr) {
                                        return acc + curr;
                                    }, 0);
                                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
                                        key: index
                                    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_patternfly_react_icons_dist_dynamic_icons_tag_icon__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        className: "pf-v5-u-mr-md"
                                    }), tagCount);
                                })
                            ];
                    }
                });
            })
        });
    },
    os: function(hosts) {
        return new _InventoryColumn__WEBPACK_IMPORTED_MODULE_1__.BaseInventoryColumn('os', 'OS', {
            columnData: hosts.map(function(host) {
                return host.system_profile.operating_system ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
                    key: host.id
                }, host.system_profile.operating_system.name, "\xa0", host.system_profile.operating_system.major, ".", host.system_profile.operating_system.minor) : 'Not available';
            })
        });
    },
    lastCheckIn: function(hosts) {
        return new _InventoryColumn__WEBPACK_IMPORTED_MODULE_1__.BaseInventoryColumn('lastCheckIn', 'Last check-in', {
            columnData: hosts.map(function(host) {
                var _host_per_reporter_staleness_puptoo, _host_per_reporter_staleness_puptoo1;
                return ((_host_per_reporter_staleness_puptoo = host.per_reporter_staleness.puptoo) === null || _host_per_reporter_staleness_puptoo === void 0 ? void 0 : _host_per_reporter_staleness_puptoo.last_check_in) ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_DateFormat__WEBPACK_IMPORTED_MODULE_18__["default"], {
                    key: host.id,
                    date: (_host_per_reporter_staleness_puptoo1 = host.per_reporter_staleness.puptoo) === null || _host_per_reporter_staleness_puptoo1 === void 0 ? void 0 : _host_per_reporter_staleness_puptoo1.last_check_in
                }) : null;
            })
        });
    }
};
var ModularInventoryRoute = function() {
    var initData = function initData() {
        return _initData.apply(this, arguments);
    };
    var _React_useState = _sliced_to_array(react__WEBPACK_IMPORTED_MODULE_0___default().useState([]), 2), hosts = _React_useState[0], setHosts = _React_useState[1];
    var _useState = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(columnIds.reduce(function(acc, curr) {
        acc[curr] = true;
        return acc;
    }, {})), 2), enabledColumns = _useState[0], setEnabledColumns = _useState[1];
    var handleCheckboxChange = function(columnId) {
        setEnabledColumns(function(prev) {
            return _object_spread_props(_object_spread({}, prev), _define_property({}, columnId, !prev[columnId]));
        });
    };
    var cols = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function() {
        var cvePromises = hosts.map(function(host) {
            if (!host.id) {
                return {
                    criticalCount: 0,
                    highCount: 0,
                    allCount: 0
                };
            }
            return (0,_api__WEBPACK_IMPORTED_MODULE_4__.getHostCVEs)(host.id);
        });
        var systemPromises = hosts.map(function(host) {
            return (0,_api__WEBPACK_IMPORTED_MODULE_4__.getHostInsights)(host.id);
        });
        var patchPromises = hosts.map(function(host) {
            return (0,_api__WEBPACK_IMPORTED_MODULE_4__.getHostPatch)(host.id);
        });
        var cols = columnIds.filter(function(columnId) {
            return enabledColumns[columnId];
        }).map(function(columnId) {
            return columnsRegistry[columnId](hosts, cvePromises, systemPromises, patchPromises);
        });
        return cols;
    }, [
        hosts,
        enabledColumns
    ]);
    function _initData() {
        _initData = _async_to_generator(function() {
            var response;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            (0,_api__WEBPACK_IMPORTED_MODULE_4__.getHosts)()
                        ];
                    case 1:
                        response = _state.sent();
                        setHosts(response.results);
                        (0,_api__WEBPACK_IMPORTED_MODULE_4__.getHostTags)(response.results[0].insights_id);
                        return [
                            2
                        ];
                }
            });
        });
        return _initData.apply(this, arguments);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
        initData();
    }, []);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "pf-v5-u-p-md"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ColumnEnabler, {
        enabledColumns: enabledColumns,
        handleCheckboxChange: handleCheckboxChange
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ModularInventory, {
        columns: cols
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModularInventoryRoute);


/***/ }),

/***/ "./src/inventoryPoc/api.ts":
/*!*********************************!*\
  !*** ./src/inventoryPoc/api.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHostCVEs: () => (/* binding */ getHostCVEs),
/* harmony export */   getHostInsights: () => (/* binding */ getHostInsights),
/* harmony export */   getHostPatch: () => (/* binding */ getHostPatch),
/* harmony export */   getHostTags: () => (/* binding */ getHostTags),
/* harmony export */   getHosts: () => (/* binding */ getHosts)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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

var getHosts = function() {
    var _ref = _async_to_generator(function() {
        var response;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/inventory/v1/hosts', {
                            params: {
                                page: 1,
                                per_page: 20,
                                order_by: 'updated',
                                order_how: 'DESC',
                                'fields[system_profile]': [
                                    'operating_system'
                                ]
                            }
                        })
                    ];
                case 1:
                    response = _state.sent();
                    return [
                        2,
                        response.data
                    ];
            }
        });
    });
    return function getHosts() {
        return _ref.apply(this, arguments);
    };
}();
var hostCache = {};
var getHostTags = function() {
    var _ref = _async_to_generator(function(hostId) {
        var p, result, result1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!hostId) {
                        return [
                            2,
                            {
                                count: 0,
                                results: {}
                            }
                        ];
                    }
                    if (!!hostCache[hostId]) return [
                        3,
                        2
                    ];
                    p = axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/inventory/v1/hosts/".concat(hostId, "/tags/count"));
                    hostCache[hostId] = p;
                    return [
                        4,
                        p
                    ];
                case 1:
                    result = _state.sent();
                    return [
                        2,
                        result.data
                    ];
                case 2:
                    return [
                        4,
                        hostCache[hostId]
                    ];
                case 3:
                    result1 = _state.sent();
                    return [
                        2,
                        result1.data
                    ];
            }
        });
    });
    return function getHostTags(hostId) {
        return _ref.apply(this, arguments);
    };
}();
var cveCache = {};
var getHostCVEs = function() {
    var _ref = _async_to_generator(function(hostId) {
        var p;
        return _ts_generator(this, function(_state) {
            if (!cveCache[hostId]) {
                p = new Promise(function(resolve) {
                    var criticalPromise = axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/vulnerability/v1/systems/".concat(hostId, "/cves"), {
                        params: {
                            business_risk_id: 4
                        }
                    });
                    var highPromise = axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/vulnerability/v1/systems/".concat(hostId, "/cves"), {
                        params: {
                            business_risk_id: 3
                        }
                    });
                    var allPromise = axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/vulnerability/v1/systems/".concat(hostId, "/cves"), {});
                    return Promise.all([
                        criticalPromise,
                        highPromise,
                        allPromise
                    ]).then(function(result) {
                        return resolve({
                            criticalCount: result[0].data.meta.total_items,
                            highCount: result[1].data.meta.total_items,
                            allCount: result[2].data.meta.total_items
                        });
                    }).catch(function() {
                        return resolve({
                            criticalCount: 0,
                            highCount: 0,
                            allCount: 0
                        });
                    });
                });
                cveCache[hostId] = p;
                return [
                    2,
                    p
                ];
            }
            return [
                2,
                cveCache[hostId]
            ];
        });
    });
    return function getHostCVEs(hostId) {
        return _ref.apply(this, arguments);
    };
}();
var getHostInsights = function() {
    var _ref = _async_to_generator(function(hostId) {
        var data, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    return [
                        4,
                        axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/insights/v1/system/".concat(hostId))
                    ];
                case 1:
                    data = _state.sent().data;
                    return [
                        2,
                        data
                    ];
                case 2:
                    error = _state.sent();
                    return [
                        2,
                        'unknown'
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return function getHostInsights(hostId) {
        return _ref.apply(this, arguments);
    };
}();
var getHostPatch = function() {
    var _ref = _async_to_generator(function(hostId) {
        var data, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    return [
                        4,
                        axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/patch/v3/systems/".concat(hostId))
                    ];
                case 1:
                    data = _state.sent().data;
                    return [
                        2,
                        data.data
                    ];
                case 2:
                    error = _state.sent();
                    return [
                        2,
                        'unknown'
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return function getHostPatch(hostId) {
        return _ref.apply(this, arguments);
    };
}();


/***/ }),

/***/ "./src/inventoryPoc/index.ts":
/*!***********************************!*\
  !*** ./src/inventoryPoc/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _ModularInventory__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _ModularInventory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModularInventory */ "./src/inventoryPoc/ModularInventory.tsx");
// This module is only used for a POC and should not be used in production
// Once the POC is complete, this module will be removed
// Ownership will be decided in future



/***/ })

}]);