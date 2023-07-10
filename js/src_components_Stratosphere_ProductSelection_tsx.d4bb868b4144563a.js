"use strict";
(self["webpackChunkinsights_chrome"] = self["webpackChunkinsights_chrome"] || []).push([["src_components_Stratosphere_ProductSelection_tsx"],{

/***/ "./node_modules/@patternfly/react-icons/dist/js/icons/arrow-right-icon.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@patternfly/react-icons/dist/js/icons/arrow-right-icon.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.ArrowRightIconConfig = {
  name: 'ArrowRightIcon',
  height: 512,
  width: 448,
  svgPath: 'M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z',
  yOffset: 0,
  xOffset: 0,
};
exports.ArrowRightIcon = (__webpack_require__(/*! ../createIcon */ "./node_modules/@patternfly/react-icons/dist/js/createIcon.js").createIcon)(exports.ArrowRightIconConfig);
exports["default"] = exports.ArrowRightIcon;

/***/ }),

/***/ "./node_modules/@patternfly/react-icons/dist/js/icons/check-circle-icon.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@patternfly/react-icons/dist/js/icons/check-circle-icon.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.CheckCircleIconConfig = {
  name: 'CheckCircleIcon',
  height: 512,
  width: 512,
  svgPath: 'M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z',
  yOffset: 0,
  xOffset: 0,
};
exports.CheckCircleIcon = (__webpack_require__(/*! ../createIcon */ "./node_modules/@patternfly/react-icons/dist/js/createIcon.js").createIcon)(exports.CheckCircleIconConfig);
exports["default"] = exports.CheckCircleIcon;

/***/ }),

/***/ "./src/components/Stratosphere/footer.scss":
/*!*************************************************!*\
  !*** ./src/components/Stratosphere/footer.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Stratosphere/product-card.scss":
/*!*******************************************************!*\
  !*** ./src/components/Stratosphere/product-card.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Stratosphere/product-selection.scss":
/*!************************************************************!*\
  !*** ./src/components/Stratosphere/product-selection.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Stratosphere/Footer.tsx":
/*!************************************************!*\
  !*** ./src/components/Stratosphere/Footer.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?dc4e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.scss */ "./src/components/Stratosphere/footer.scss");



var FooterLink = function(param) {
    var href = param.href, label = param.label;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.TextContent, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.Text, {
        component: "small"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
        className: "chr-c-footer__link",
        href: href
    }, label)));
};
var Footer = function() {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "chr-c-footer"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.Level, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.LevelItem, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
        className: "chr-c-footer__logo pf-u-mr-3xl",
        src: "/apps/frontend-assets/red-hat-logos/logo.svg"
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.LevelItem, {
        className: "pf-u-mr-2xl"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.TextContent, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.Text, {
        component: "small"
    }, "Copyright c 2023 Red Hat, Inc."))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.LevelItem, {
        className: "pf-u-mr-auto"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.Flex, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.FlexItem, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(FooterLink, {
        href: "https://www.redhat.com/en/about/privacy-policy",
        label: "Privacy statement"
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.Divider, {
        className: "chr-c-footer__divider",
        inset: {
            default: "insetSm"
        },
        orientation: {
            default: "vertical"
        }
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.FlexItem, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(FooterLink, {
        href: "https://www.redhat.com/en/about/terms-use",
        label: "Terms of service"
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.Divider, {
        className: "chr-c-footer__divider",
        inset: {
            default: "insetSm"
        },
        orientation: {
            default: "vertical"
        }
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.FlexItem, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(FooterLink, {
        href: "https://www.redhat.com/en/about/all-policies-guidelines",
        label: "All policies and guidelines"
    }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ "./src/components/Stratosphere/ProductCard.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Stratosphere/ProductCard.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?dc4e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/arrow-right-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/arrow-right-icon.js");
/* harmony import */ var _ChromeLink_ChromeLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ChromeLink/ChromeLink */ "./src/components/ChromeLink/ChromeLink.tsx");
/* harmony import */ var _product_card_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-card.scss */ "./src/components/Stratosphere/product-card.scss");





var ProductCard = function(param) {
    var img = param.img, description = param.description, link = param.link, order = param.order;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "chr-c-product-card__title title-".concat(order)
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        className: "chr-c-product-card__image",
        src: img
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "chr-c-product-card__body body-".concat(order)
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextContent, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, null, description))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "chr-c-product-card__footer footer-".concat(order)
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ChromeLink_ChromeLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "chr-c-product-card__link",
        href: link.href,
        appId: link.appId
    }, link.label, "\xa0", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons_dist_js_icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "pf-u-ml-sm"
    }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);


/***/ }),

/***/ "./src/components/Stratosphere/ProductSelection.tsx":
/*!**********************************************************!*\
  !*** ./src/components/Stratosphere/ProductSelection.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?dc4e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_check_circle_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/check-circle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/check-circle-icon.js");
/* harmony import */ var _products_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-list */ "./src/components/Stratosphere/products-list.ts");
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductCard */ "./src/components/Stratosphere/ProductCard.tsx");
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header/Header */ "./src/components/Header/Header.tsx");
/* harmony import */ var _ChromeLink_ChromeLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ChromeLink/ChromeLink */ "./src/components/ChromeLink/ChromeLink.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer */ "./src/components/Stratosphere/Footer.tsx");
/* harmony import */ var _product_selection_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-selection.scss */ "./src/components/Stratosphere/product-selection.scss");
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}









var ProductSelection = function() {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        id: "chrome-app-render-root"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Page, {
        header: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Masthead, {
            className: "chr-c-masthead"
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_4__.Header, null))
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "chr-c-product-selection pf-u-pt-lg pf-u-pb-lg"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        hasGutter: true
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.StackItem, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Bullseye, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons_dist_js_icons_check_circle_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
        size: "xl",
        color: "var(--pf-global--success-color--100)"
    }))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.StackItem, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Stack, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.StackItem, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Bullseye, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Title, {
        size: "3xl",
        headingLevel: "h1"
    }, "Congratulations,"))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.StackItem, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Title, {
        className: "chr-c-product-selection__description",
        size: "3xl",
        headingLevel: "h1"
    }, "your Red Hat and AWS accounts are connected and you can now access Red Hat support resources")))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.StackItem, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Bullseye, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextContent, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, null, "To get started using your Red Hat products, follow the links below")))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.StackItem, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Flex, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "chr-c-product-selection__layout"
    }, _products_list__WEBPACK_IMPORTED_MODULE_2__["default"].map(function(item, i) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProductCard__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
            key: i
        }, item, {
            order: i
        }));
    })))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.StackItem, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Bullseye, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextContent, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, null, "To manage or learn more about your Red Hat subscriptions, visit", " ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ChromeLink_ChromeLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
        href: "/insights/subscriptions/rhel",
        appId: "subscriptions"
    }, "subscriptions."))))))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductSelection);


/***/ }),

/***/ "./src/components/Stratosphere/products-list.ts":
/*!******************************************************!*\
  !*** ./src/components/Stratosphere/products-list.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var productsList = [
    {
        img: "/apps/frontend-assets/logos/logo__rhel.svg",
        description: "You can create your own OS image to deploy to your cloud instance.",
        link: {
            href: "/insights/dashboard",
            appId: "dashboard",
            label: "Create an OS image"
        }
    },
    {
        img: "/apps/frontend-assets/logos/logo__openshift.svg",
        description: "You can create a cluster to deploy to your cloud instance.",
        link: {
            href: "/openshift",
            appId: "openshift",
            label: "Create a cluster"
        }
    },
    {
        img: "/apps/frontend-assets/logos/logo__ansible-automation.svg",
        description: "Learn how to install and configure your Ansible infrastructure.",
        link: {
            href: "/ansible/ansible-dashboard",
            appId: "ansibleDashboard",
            label: "Ansible Automation Platform"
        }
    },
    {
        img: "/apps/frontend-assets/logos/logo__application-services.svg",
        description: "Learn how to access your Application and Data services.",
        link: {
            href: "/application-services/overview",
            appId: "applicationServices",
            label: "Application and Data Services"
        }
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productsList);


/***/ })

}]);