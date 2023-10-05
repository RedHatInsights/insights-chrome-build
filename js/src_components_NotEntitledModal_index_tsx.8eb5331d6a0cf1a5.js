"use strict";
(self["webpackChunkinsights_chrome"] = self["webpackChunkinsights_chrome"] || []).push([["src_components_NotEntitledModal_index_tsx"],{

/***/ "./src/components/NotEntitledModal/styles.scss":
/*!*****************************************************!*\
  !*** ./src/components/NotEntitledModal/styles.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/NotEntitledModal/index.tsx":
/*!***************************************************!*\
  !*** ./src/components/NotEntitledModal/index.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button?15a0");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Modal */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Modal/@patternfly/react-core/dist/dynamic/components/Modal?ddc1");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Title */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Title/@patternfly/react-core/dist/dynamic/components/Title?4e21");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Stack */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Stack/@patternfly/react-core/dist/dynamic/layouts/Stack");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?dc4e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _notEntitledData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notEntitledData */ "./src/components/NotEntitledModal/notEntitledData.tsx");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.scss */ "./src/components/NotEntitledModal/styles.scss");








var NOT_ENTITLED_PARAM = "not_entitled";
var NotEntitledModal = function() {
    var _entitlementData_emptyAction, _entitlementData_emptyAction1, _entitlementData_emptyAction2, _entitlementData_emptyAction3;
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
    var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)(), search = _useLocation.search, pathname = _useLocation.pathname;
    var params = new URLSearchParams(search);
    var notEntitled = params.has(NOT_ENTITLED_PARAM);
    var notEntitledValue = params.get(NOT_ENTITLED_PARAM);
    var entitlementData = _notEntitledData__WEBPACK_IMPORTED_MODULE_6__["default"].find(function(param) {
        var entitlement = param.entitlement;
        return entitlement === notEntitledValue;
    });
    var handleModalToggle = function() {
        navigate({
            pathname: pathname,
            search: undefined
        }, {
            replace: true
        });
    };
    if (!notEntitled || !entitlementData) {
        return null;
    }
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_1__.Modal, {
        className: "chr-c-error-modal",
        variant: _patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_1__.ModalVariant.medium,
        "app-entitlement": entitlementData.emptyID,
        isOpen: true,
        onClose: handleModalToggle,
        "aria-label": entitlementData.emptyTitle,
        header: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_2__.Title, {
            headingLevel: "h2",
            size: "2xl",
            className: "chr-c-error-modal__header"
        }, entitlementData.emptyTitle)
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_3__.Stack, {
        hasGutter: true,
        className: "chr-c-error-modal__content"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_3__.StackItem, {
        className: "chr-c-error-modal__content--image"
    }, entitlementData.image && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement("img", {
        className: "chr-c-application-info__logo",
        "aria-hidden": true,
        src: entitlementData.image,
        alt: "".concat(entitlementData.title, " logo")
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_3__.StackItem, {
        className: "chr-c-error-modal__content--body"
    }, entitlementData.emptyText), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_3__.StackItem, {
        className: "chr-c-error-modal__content--footer"
    }, ((_entitlementData_emptyAction = entitlementData.emptyAction) === null || _entitlementData_emptyAction === void 0 ? void 0 : _entitlementData_emptyAction.primary) && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_0__.Button, {
        variant: "primary",
        onClick: function() {
            var _entitlementData_emptyAction_primary, _entitlementData_emptyAction;
            if ((_entitlementData_emptyAction = entitlementData.emptyAction) === null || _entitlementData_emptyAction === void 0 ? void 0 : (_entitlementData_emptyAction_primary = _entitlementData_emptyAction.primary) === null || _entitlementData_emptyAction_primary === void 0 ? void 0 : _entitlementData_emptyAction_primary.navigate) {
                window.location.href = entitlementData.emptyAction.primary.navigate;
            }
        }
    }, entitlementData.emptyAction.primary.title), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement("section", {
        className: "chr-c-error-modal__content--footer-secondary"
    }, ((_entitlementData_emptyAction1 = entitlementData.emptyAction) === null || _entitlementData_emptyAction1 === void 0 ? void 0 : _entitlementData_emptyAction1.secondary) && entitlementData.emptyAction.secondary.navigate && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_0__.Button, {
        variant: "link",
        onClick: function() {
            var _entitlementData_emptyAction_secondary, _entitlementData_emptyAction;
            window.location.href = ((_entitlementData_emptyAction = entitlementData.emptyAction) === null || _entitlementData_emptyAction === void 0 ? void 0 : (_entitlementData_emptyAction_secondary = _entitlementData_emptyAction.secondary) === null || _entitlementData_emptyAction_secondary === void 0 ? void 0 : _entitlementData_emptyAction_secondary.navigate) || "#";
        }
    }, "Learn more"), ((_entitlementData_emptyAction2 = entitlementData.emptyAction) === null || _entitlementData_emptyAction2 === void 0 ? void 0 : _entitlementData_emptyAction2.secondary) && !entitlementData.emptyAction.secondary.navigate && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_0__.Button, {
        variant: "link"
    }, "Learn more"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_0__.Button, {
        variant: "link",
        onClick: handleModalToggle
    }, ((_entitlementData_emptyAction3 = entitlementData.emptyAction) === null || _entitlementData_emptyAction3 === void 0 ? void 0 : _entitlementData_emptyAction3.close) ? "".concat(entitlementData.emptyAction.close.title) : "Close")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotEntitledModal);


/***/ }),

/***/ "./src/components/NotEntitledModal/notEntitledData.tsx":
/*!*************************************************************!*\
  !*** ./src/components/NotEntitledModal/notEntitledData.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?dc4e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var notEntitledData = [
    {
        entitlement: "ansible",
        title: "Ansible Automation",
        image: "https://console.redhat.com/apps/frontend-assets/icons/icon__automation.svg",
        emptyTitle: "Get started with Red Hat Ansible Automation Platform",
        emptyText: [
            "Red Hat Ansible Automation Platform simplifies the development and operation of automation workloads across diverse hybrid environments using Ansible Automation Controller, certified and supported content collections, and the hosted services on cloud.redhat.com."
        ],
        emptyID: "ansible",
        emptyAction: {
            primary: {
                title: "Try it",
                navigate: "https://www.redhat.com/en/technologies/management/ansible/try-it"
            },
            secondary: {
                navigate: "https://www.ansible.com/products/automation-platform?extIdCarryOver=true&intcmp=701f20000012m1qAAA&sc_cid=701f2000001Css0AAC"
            },
            close: {
                title: "Not now"
            }
        }
    },
    {
        entitlement: "insights",
        image: "https://console.redhat.com/apps/frontend-assets/icons/icon__exp-up.svg",
        title: "Insights",
        emptyTitle: "Red Hat Insights is included with your Red Hat Enterprise Linux subscription.",
        emptyText: [
            "Red Hat Insights for Red Hat Enterprise Linux simplifies how IT teams maintain and optimize a stable, secure, and performant operating environment.",
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", {
                key: "insights-space1"
            }),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", {
                key: "insights-space2"
            }),
            "This is done by visualizing subscription and resource utilization of RHEL, and using powerful rule-based analytical models to proactively        identify and prioritize operational and security risks so teams can take action faster and easier.",
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", {
                key: "insights-space3"
            }),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", {
                key: "insights-space4"
            }),
            "Start your trial today."
        ],
        emptyID: "insights",
        emptyAction: {
            primary: {
                title: "Request a trial",
                navigate: "https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux/try-it"
            },
            secondary: {
                navigate: "https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux"
            },
            close: {
                title: "Not now"
            }
        }
    },
    {
        entitlement: "subscriptions",
        image: "https://console.redhat.com/apps/frontend-assets/icons/icon__subscriptions.svg",
        title: "Subscriptions",
        emptyTitle: "Subscriptions",
        emptyID: "subscription-watch",
        emptyText: [
            "Subscriptions enables you to understand your total subscription usage and capacity across your hybrid infrastructure over time.",
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", {
                key: "sw1"
            }),
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", {
                key: "sw2"
            }),
            "If you are interested in trying Subscriptions, your Red Hat account team can help."
        ],
        emptyAction: {
            primary: {
                title: "Contact us",
                navigate: "https://access.redhat.com/account-team"
            },
            close: {
                title: "Not now"
            }
        }
    },
    {
        entitlement: "cost_management",
        image: "https://console.redhat.com/apps/frontend-assets/icons/icon__const.svg",
        emptyTitle: "Cost Management for OpenShift",
        emptyID: "cost-management",
        emptyText: "Cost Management provides visibility and analysis for your OpenShift         and cloud costs. To obtain access to Cost Management, become an OpenShift customer.",
        emptyAction: {
            primary: {
                title: "Learn more",
                navigate: "https://www.redhat.com/en/technologies/cloud-computing/openshift"
            },
            close: {
                title: "Not now"
            }
        },
        title: "Cost Management"
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (notEntitledData);


/***/ })

}]);