(self["webpackChunkinsights_chrome"] = self["webpackChunkinsights_chrome"] || []).push([["src_layouts_SatelliteToken_tsx"],{

/***/ "./src/components/NotFoundRoute/NotFoundRoute.tsx":
/*!********************************************************!*\
  !*** ./src/components/NotFoundRoute/NotFoundRoute.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?1a75");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/EmptyState */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/EmptyState/@patternfly/react-core/dist/dynamic/components/EmptyState?28b3");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redhat_cloud_services_frontend_components_InvalidObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/InvalidObject */ "./node_modules/@redhat-cloud-services/frontend-components/esm/InvalidObject/InvalidObject.js");



var NotFoundRoute = function() {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_1__.EmptyState, {
        id: "not-found"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_1__.EmptyStateBody, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_InvalidObject__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundRoute);


/***/ }),

/***/ "./src/components/NotFoundRoute/index.ts":
/*!***********************************************!*\
  !*** ./src/components/NotFoundRoute/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _NotFoundRoute__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _NotFoundRoute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFoundRoute */ "./src/components/NotFoundRoute/NotFoundRoute.tsx");



/***/ }),

/***/ "./src/components/Satellite/IPWhitelistTable.tsx":
/*!*******************************************************!*\
  !*** ./src/components/Satellite/IPWhitelistTable.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?1a75");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/components/Modal/Modal.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/components/Form/Form.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/components/Form/FormGroup.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/components/TextInput/TextInput.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/helpers/constants.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/components/Form/FormHelperText.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/components/HelperText/HelperText.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/components/HelperText/HelperTextItem.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/components/Form/ActionGroup.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/components/Button/Button.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/layouts/Bullseye/Bullseye.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/components/EmptyState/EmptyState.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/components/EmptyState/EmptyStateHeader.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/components/EmptyState/EmptyStateBody.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/TableTypes.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Tr.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Td.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/OuterScrollContainer.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/InnerScrollContainer.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Table.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Thead.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Th.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Tbody.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/TableText.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redhat_cloud_services_frontend_components_SkeletonTable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/SkeletonTable */ "./node_modules/@redhat-cloud-services/frontend-components/esm/SkeletonTable/SkeletonTable.js");
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







var IPWhitelistTable = function() {
    var _useState = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), 2), allAddresses = _useState[0], setAllAddresses = _useState[1];
    var _useState1 = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), 2), loaded = _useState1[0], setLoaded = _useState1[1];
    var _useState2 = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), 2), actionPending = _useState2[0], setActionPending = _useState2[1];
    var _useState3 = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), 2), inputAddresses = _useState3[0], setInputAddresses = _useState3[1];
    var _useState4 = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), 2), inputAddressesValidated = _useState4[0], setInputAddressesesValidated = _useState4[1];
    var _useState5 = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), 2), removeAddresses = _useState5[0], setRemoveAddresses = _useState5[1];
    var _useState6 = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), 2), isIPModalOpen = _useState6[0], setIsIPModalOpen = _useState6[1];
    var _useState7 = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), 2), isIPRemoveModalOpen = _useState7[0], setIsIPRemoveModalOpen = _useState7[1];
    var getIPAddresses = function() {
        return axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/mbop/v1/allowlist');
    };
    var removeIPAddresses = function(ipBlock) {
        return axios__WEBPACK_IMPORTED_MODULE_2___default()["delete"]("/api/mbop/v1/allowlist?block=".concat(ipBlock));
    };
    var addIPAddresses = function(ipBlock) {
        return axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/mbop/v1/allowlist', {
            ip_block: ipBlock
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
        if (!loaded && !actionPending) {
            getIPAddresses().then(function(res) {
                setAllAddresses(res.data);
                setLoaded(true);
            }).catch(function(err) {
                return console.error(err);
            });
        }
    }, [
        loaded,
        actionPending
    ]);
    var onChangedAddresses = function(value) {
        setInputAddresses(value);
        setInputAddressesesValidated(validateIPAddress(value));
    };
    var onSubmitAddresses = function() {
        setActionPending(true);
        addIPAddresses(inputAddresses).then(function() {
            setInputAddresses('');
            setIsIPModalOpen(false);
            setLoaded(false);
            return getIPAddresses();
        }).then(function(res) {
            setAllAddresses(res.data);
            setLoaded(true);
        }).catch(function(err) {
            return console.error(err);
        }).finally(function() {
            return setActionPending(false);
        });
    };
    var onRemoveAddresses = function() {
        setActionPending(true);
        removeIPAddresses(removeAddresses).then(function() {
            setRemoveAddresses('');
            setIsIPRemoveModalOpen(false);
            setLoaded(false);
            return getIPAddresses();
        }).then(function(res) {
            setAllAddresses(res.data);
            setLoaded(true);
        }).catch(function(err) {
            return console.error(err);
        }).finally(function() {
            return setActionPending(false);
        });
    };
    var onChangedAddressesDebounced = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(onChangedAddresses, 500);
    var validateIPAddress = function(address) {
        return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([1-9]|[12][0-9]|3[0-2]))?$/.test(address);
    };
    var validationError = inputAddresses.length > 0 && !inputAddressesValidated;
    var addIPModal = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Modal, {
        isOpen: isIPModalOpen,
        onClose: function() {
            setInputAddresses('');
            setIsIPModalOpen(false);
        },
        title: 'Add IP Addresses to Allow List',
        variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.ModalVariant.medium
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Form, {
        onSubmit: function(event) {
            return event.preventDefault();
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.FormGroup, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.TextContent, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.Text, null, "Before connecting to your satellite servers, Red Hat needs to add your IP address or range of IP addresses to an allow-list.")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__.TextInput, {
        validated: validationError ? _patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__.ValidatedOptions.error : _patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__.ValidatedOptions.default,
        placeholder: "127.0.0.1/32",
        onChange: function(_event, value) {
            return onChangedAddressesDebounced(value);
        }
    }), validationError && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.FormHelperText, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_11__.HelperText, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__.HelperTextItem, {
        icon: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_13__.ExclamationCircleIcon, null),
        variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__.ValidatedOptions.error
    }, "Enter a valid IP address or CIDR notation IP range")))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__.ActionGroup, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__.Button, {
        isDisabled: inputAddresses.length <= 0 || validationError || actionPending,
        onClick: onSubmitAddresses
    }, "Submit"))));
    var removeIPModal = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Modal, {
        isOpen: isIPRemoveModalOpen,
        onClose: function() {
            setRemoveAddresses('');
            setIsIPRemoveModalOpen(false);
        },
        title: 'Remove IP Addresses from Allow List',
        variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.ModalVariant.medium
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Form, {
        onSubmit: function(event) {
            return event.preventDefault();
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.FormGroup, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.TextContent, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.Text, null, "The following IP addresses will be removed from the allow list")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__.TextInput, {
        isDisabled: true,
        value: removeAddresses
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__.ActionGroup, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__.Button, {
        onClick: onRemoveAddresses,
        isDisabled: actionPending,
        variant: "danger"
    }, "Remove"))));
    var columnNames = {
        ip_block: 'IP Block',
        org_id: 'Org ID',
        created_at: 'Created At',
        remove: ''
    };
    var skeletonTable = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_SkeletonTable__WEBPACK_IMPORTED_MODULE_16__["default"], {
        variant: _patternfly_react_table__WEBPACK_IMPORTED_MODULE_17__.TableVariant.compact,
        rows: 9,
        columns: Object.values(columnNames)
    });
    var emptyTable = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_18__.Tr, {
        style: {
            border: 'none'
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_19__.Td, {
        colSpan: 8
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_20__.Bullseye, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_21__.EmptyState, {
        variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_21__.EmptyStateVariant.sm
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_22__.EmptyStateHeader, {
        titleText: "No IP Addresses Allowed",
        headingLevel: "h2"
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_23__.EmptyStateBody, null, "Before connecting to your satellite servers, Red Hat needs to add your IP address or range of IP addresses to an allow-list.")))));
    var ipTable = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_24__.OuterScrollContainer, {
        style: {
            maxHeight: '25rem'
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_25__.InnerScrollContainer, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_26__.Table, {
        "aria-label": "IP Address Allow List",
        variant: _patternfly_react_table__WEBPACK_IMPORTED_MODULE_17__.TableVariant.compact,
        isStickyHeader: true
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_27__.Thead, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_18__.Tr, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_28__.Th, null, columnNames.ip_block), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_28__.Th, null, columnNames.org_id), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_28__.Th, null, columnNames.created_at), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_28__.Th, null, columnNames.remove))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_29__.Tbody, null, allAddresses.length <= 0 && emptyTable, allAddresses.map(function(ipBlock) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_18__.Tr, {
            key: ipBlock.ip_block
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_19__.Td, {
            dataLabel: columnNames.ip_block
        }, ipBlock.ip_block), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_19__.Td, {
            dataLabel: columnNames.org_id
        }, ipBlock.org_id), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_19__.Td, {
            dataLabel: columnNames.created_at
        }, new Date(ipBlock.created_at).toLocaleString()), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_19__.Td, {
            dataLabel: columnNames.remove,
            modifier: "fitContent"
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_30__.TableText, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__.Button, {
            variant: "secondary",
            onClick: function() {
                setRemoveAddresses(ipBlock.ip_block);
                setIsIPRemoveModalOpen(true);
            }
        }, "Remove"))));
    })))));
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, addIPModal, removeIPModal, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, loaded ? ipTable : skeletonTable, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__.Button, {
        onClick: function() {
            return setIsIPModalOpen(true);
        }
    }, "Add IP Addresses"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IPWhitelistTable);


/***/ }),

/***/ "./src/components/Satellite/SatelliteTable.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Satellite/SatelliteTable.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?1a75");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Table.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Thead.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Tr.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Th.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Tbody.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/TableText.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Td.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button?7990");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/EmptyState */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/EmptyState/@patternfly/react-core/dist/dynamic/components/EmptyState?28b3");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_3__);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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





var SatelliteTable = function() {
    var _useState = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), 2), registrations = _useState[0], setRegistrations = _useState[1];
    var _useState1 = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), 2), ready = _useState1[0], setReady = _useState1[1];
    var columnNames = {
        display_name: 'Name',
        created_at: 'Created At',
        singleAction: 'Single action'
    };
    var getRegistrations = function() {
        axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/identity/certificate/registrations').then(function(res) {
            setRegistrations(res.data.registrations.map(function(ele) {
                return _object_spread_props(_object_spread({}, ele), {
                    singleAction: 'unregister'
                });
            }));
            setReady(true);
        }).catch(function(err) {
            console.log(err);
        });
    };
    var unregisterSystem = function(uid) {
        axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]("/api/identity/certificate/registrations/".concat(uid)).then(function(res) {
            console.log(res.data);
            getRegistrations();
        }).catch(function(error) {
            console.log(error);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
        if (!ready) {
            getRegistrations();
        }
    }, [
        ready
    ]);
    if ((registrations === null || registrations === void 0 ? void 0 : registrations.length) < 1) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_3__.EmptyState, null, "There are no registrations");
    }
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__.Table, {
        "aria-label": "Misc table"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Thead, {
        noWrap: true
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__.Tr, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__.Th, null, columnNames.display_name), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__.Th, null, columnNames.created_at))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_8__.Tbody, null, registrations === null || registrations === void 0 ? void 0 : registrations.map(function(reg) {
        var unregisterButton = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_9__.TableText, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
            variant: "secondary",
            onClick: function() {
                return unregisterSystem(reg.uid);
            }
        }, reg.singleAction));
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__.Tr, {
            key: reg.uid
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_10__.Td, {
            dataLabel: columnNames.display_name
        }, reg.display_name), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_10__.Td, {
            dataLabel: columnNames.created_at
        }, reg.created_at), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_10__.Td, {
            dataLabel: columnNames.singleAction,
            modifier: "fitContent"
        }, unregisterButton));
    })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SatelliteTable);


/***/ }),

/***/ "./src/layouts/SatelliteToken.tsx":
/*!****************************************!*\
  !*** ./src/layouts/SatelliteToken.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?1a75");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @unleash/proxy-client-react */ "webpack/sharing/consume/default/@unleash/proxy-client-react/@unleash/proxy-client-react");
/* harmony import */ var _unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button?7990");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Card */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Card/@patternfly/react-core/dist/dynamic/components/Card");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_ClipboardCopy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/ClipboardCopy */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/ClipboardCopy/@patternfly/react-core/dist/dynamic/components/ClipboardCopy");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_ClipboardCopy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_ClipboardCopy__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/List */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/List/@patternfly/react-core/dist/dynamic/components/List");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_List__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_List__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Page */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Page/@patternfly/react-core/dist/dynamic/components/Page");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Satellite_SatelliteTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Satellite/SatelliteTable */ "./src/components/Satellite/SatelliteTable.tsx");
/* harmony import */ var _components_Satellite_IPWhitelistTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Satellite/IPWhitelistTable */ "./src/components/Satellite/IPWhitelistTable.tsx");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.ts");
/* harmony import */ var _redhat_cloud_services_frontend_components_useChrome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/useChrome */ "./node_modules/@redhat-cloud-services/frontend-components/esm/useChrome/useChrome.js");
/* harmony import */ var _components_NotFoundRoute__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/NotFoundRoute */ "./src/components/NotFoundRoute/index.ts");
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













var SatelliteToken = function() {
    var _useState = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), 2), token = _useState[0], setToken = _useState[1];
    var _useState1 = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), 2), error = _useState1[0], setError = _useState1[1];
    var _useState2 = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), 2), isOrgAdmin = _useState2[0], setIsOrgAdmin = _useState2[1];
    var auth = (0,_redhat_cloud_services_frontend_components_useChrome__WEBPACK_IMPORTED_MODULE_12__["default"])().auth;
    var isITLess = (0,_unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_2__.useFlag)('platform.chrome.itless');
    if (!isITLess) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NotFoundRoute__WEBPACK_IMPORTED_MODULE_11__["default"], null);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
        auth.getUser().then(function(user) {
            var _user_identity_user, _user_identity;
            return user && setIsOrgAdmin(!!(user === null || user === void 0 ? void 0 : (_user_identity = user.identity) === null || _user_identity === void 0 ? void 0 : (_user_identity_user = _user_identity.user) === null || _user_identity_user === void 0 ? void 0 : _user_identity_user.is_org_admin));
        });
    }, []);
    var generateToken = function() {
        axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/identity/certificate/token').then(function(res) {
            setToken(res.data.token);
        }).catch(function(err) {
            console.log(err);
            setError(err);
        });
    };
    var itlessProd = (0,_utils_common__WEBPACK_IMPORTED_MODULE_10__.getEnv)() === 'frh';
    var satelliteUrl = itlessProd ? 'https://mtls.console.openshiftusgov.com' : 'https://mtls.console.stage.openshiftusgov.com';
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
        if (token.length < 1 && error === null) {
            generateToken();
        }
    }, [
        token
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_7__.Page, {
        className: "chr-c-all-services",
        onPageResize: null
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_7__.PageSection, {
        padding: {
            default: 'noPadding',
            md: 'padding',
            lg: 'padding'
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_4__.Card, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_4__.CardTitle, null, "Your Registration Token"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_4__.CardBody, null, "Use this token to register your Satellite server organization. Note: The token expires in 5 minutes.", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: generateToken
    }, "Generate Token")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_ClipboardCopy__WEBPACK_IMPORTED_MODULE_5__.ClipboardCopy, {
        className: "pf-v5-u-mt-md",
        isReadOnly: true,
        hoverTip: "Copy",
        clickTip: "Copied"
    }, token))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_4__.Card, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_4__.CardTitle, null, "Satellite organization registration."), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_4__.CardBody, null, "Every Satellite server organization must be registered following the steps below.", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_List__WEBPACK_IMPORTED_MODULE_6__.List, {
        component: _patternfly_react_core_dist_dynamic_components_List__WEBPACK_IMPORTED_MODULE_6__.ListComponent.ol,
        type: _patternfly_react_core_dist_dynamic_components_List__WEBPACK_IMPORTED_MODULE_6__.OrderType.number
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_List__WEBPACK_IMPORTED_MODULE_6__.ListItem, null, "Copy the registration token above"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_List__WEBPACK_IMPORTED_MODULE_6__.ListItem, null, "Run the following command from your Satellite server to get the organization id you want to register"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_ClipboardCopy__WEBPACK_IMPORTED_MODULE_5__.ClipboardCopy, {
        className: "pf-v5-u-mt-md",
        isReadOnly: true,
        hoverTip: "Copy",
        clickTip: "Copied"
    }, "hammer organization list"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_List__WEBPACK_IMPORTED_MODULE_6__.ListItem, null, 'Run the Hybrid Cloud registration task to register your Red Hat Satellite organization, replacing "<organization_id>" with the organization id from\n                  Step 2. You will prompted to enter the token from Step 1.'), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_ClipboardCopy__WEBPACK_IMPORTED_MODULE_5__.ClipboardCopy, {
        className: "pf-v5-u-mt-md",
        isReadOnly: true,
        hoverTip: "Copy",
        clickTip: "Copied"
    }, "SATELLITE_RH_CLOUD_URL=".concat(satelliteUrl, " org_id=<organization_id> foreman-rake rh_cloud:hybridcloud_register")))))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_7__.PageSection, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_4__.Card, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_4__.CardTitle, null, "Registrations"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_4__.CardBody, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Satellite_SatelliteTable__WEBPACK_IMPORTED_MODULE_8__["default"], null)))), isOrgAdmin ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_7__.PageSection, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_4__.Card, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_4__.CardTitle, null, "IP Address Allow List"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_4__.CardBody, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Satellite_IPWhitelistTable__WEBPACK_IMPORTED_MODULE_9__["default"], null)))) : null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SatelliteToken);


/***/ }),

/***/ "?c74b":
/*!***************************************************************************!*\
  !*** @patternfly/react-styles/css/components/Popper/Popper.css (ignored) ***!
  \***************************************************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?8afc":
/*!********************************!*\
  !*** ./backdrop.css (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?1a3c":
/*!*****************************!*\
  !*** ./badge.css (ignored) ***!
  \*****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?5c4f":
/*!**********************************!*\
  !*** ./breadcrumb.css (ignored) ***!
  \**********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?0f6c":
/*!******************************!*\
  !*** ./button.css (ignored) ***!
  \******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?10cb":
/*!*****************************!*\
  !*** ./check.css (ignored) ***!
  \*****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?dd60":
/*!*******************************!*\
  !*** ./content.css (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?390c":
/*!*******************************!*\
  !*** ./divider.css (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?173a":
/*!********************************!*\
  !*** ./dropdown.css (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?6ec2":
/*!***********************************!*\
  !*** ./empty-state.css (ignored) ***!
  \***********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?7216":
/*!************************************!*\
  !*** ./form-control.css (ignored) ***!
  \************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?6f44":
/*!****************************!*\
  !*** ./form.css (ignored) ***!
  \****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?05c7":
/*!***********************************!*\
  !*** ./helper-text.css (ignored) ***!
  \***********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?e94f":
/*!***********************************!*\
  !*** ./inline-edit.css (ignored) ***!
  \***********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?7313":
/*!***********************************!*\
  !*** ./menu-toggle.css (ignored) ***!
  \***********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?81f8":
/*!****************************!*\
  !*** ./menu.css (ignored) ***!
  \****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?806e":
/*!*********************************!*\
  !*** ./modal-box.css (ignored) ***!
  \*********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?919e":
/*!*******************************!*\
  !*** ./popover.css (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?b49e":
/*!********************************!*\
  !*** ./skeleton.css (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?4a7c":
/*!*******************************!*\
  !*** ./spinner.css (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?5b4a":
/*!**********************************!*\
  !*** ./table-grid.css (ignored) ***!
  \**********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?b8a9":
/*!****************************************!*\
  !*** ./table-scrollable.css (ignored) ***!
  \****************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?a68b":
/*!***************************************!*\
  !*** ./table-tree-view.css (ignored) ***!
  \***************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?933f":
/*!*****************************!*\
  !*** ./table.css (ignored) ***!
  \*****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?1471":
/*!*******************************!*\
  !*** ./tooltip.css (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?af43":
/*!********************************!*\
  !*** ./bullseye.css (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);