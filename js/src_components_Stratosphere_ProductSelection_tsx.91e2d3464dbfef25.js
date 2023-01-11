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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?88de");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.scss */ "./src/components/Stratosphere/footer.scss");



const FooterLink = ({ href, label }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.TextContent, null,
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.Text, { component: "small" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", { className: "chr-c-footer__link", href: href }, label))));
const Footer = () => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "chr-c-footer" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.Level, null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.LevelItem, null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", { className: "chr-c-footer__logo pf-u-mr-3xl", src: "/apps/frontend-assets/red-hat-logos/logo.svg" })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.LevelItem, { className: "pf-u-mr-2xl" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.TextContent, null,
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.Text, { component: "small" }, "Copyright c 2022 Red Hat, Inc."))),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.LevelItem, { className: "pf-u-mr-auto" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.Flex, null,
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.FlexItem, null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(FooterLink, { href: "https://www.redhat.com/en/about/privacy-policy", label: "Privacy statement" })),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.Divider, { className: "chr-c-footer__divider", inset: { default: 'insetSm' }, orientation: { default: 'vertical' } }),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.FlexItem, null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(FooterLink, { href: "https://www.redhat.com/en/about/terms-use", label: "Terms of service" })),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.Divider, { className: "chr-c-footer__divider", inset: { default: 'insetSm' }, orientation: { default: 'vertical' } }),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.FlexItem, null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(FooterLink, { href: "https://www.redhat.com/en/about/all-policies-guidelines", label: "All policies and guidelines" })))))));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?88de");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/arrow-right-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/arrow-right-icon.js");
/* harmony import */ var _ChromeLink_ChromeLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ChromeLink/ChromeLink */ "./src/components/ChromeLink/ChromeLink.tsx");
/* harmony import */ var _product_card_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-card.scss */ "./src/components/Stratosphere/product-card.scss");





const ProductCard = ({ img, description, link, order }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `chr-c-product-card__title title-${order}` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "chr-c-product-card__image", src: img })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `chr-c-product-card__body body-${order}` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextContent, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, null, description))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `chr-c-product-card__footer footer-${order}` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ChromeLink_ChromeLink__WEBPACK_IMPORTED_MODULE_2__["default"], { className: "chr-c-product-card__link", href: link.href, appId: link.appId },
                link.label,
                "\u00A0",
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons_dist_js_icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_4__["default"], { className: "pf-u-ml-sm" })))));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?88de");
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









const ProductSelection = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "chrome-app-render-root" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Page, { header: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Masthead, { className: "chr-c-masthead" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_4__.Header, null)) },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "chr-c-product-selection pf-u-pt-lg pf-u-pb-lg" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Stack, { hasGutter: true },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.StackItem, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Bullseye, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons_dist_js_icons_check_circle_icon__WEBPACK_IMPORTED_MODULE_8__["default"], { size: "xl", color: "var(--pf-global--success-color--100)" }))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.StackItem, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Stack, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.StackItem, null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Bullseye, null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Title, { size: "3xl", headingLevel: "h1" }, "Congratulations,"))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.StackItem, null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Title, { className: "chr-c-product-selection__description", size: "3xl", headingLevel: "h1" }, "your Red Hat and AWS accounts are connected and you can now access Red Hat support resources")))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.StackItem, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Bullseye, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextContent, null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, null, "To get started using your Red Hat products, follow the links below")))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.StackItem, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Flex, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "chr-c-product-selection__layout" }, _products_list__WEBPACK_IMPORTED_MODULE_2__["default"].map((item, i) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProductCard__WEBPACK_IMPORTED_MODULE_3__["default"], { key: i, ...item, order: i })))))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.StackItem, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Bullseye, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextContent, null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, null,
                                "To manage or learn more about your Red Hat subscriptions, visit",
                                ' ',
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ChromeLink_ChromeLink__WEBPACK_IMPORTED_MODULE_5__["default"], { href: "/insights/subscriptions/rhel", appId: "subscriptions" }, "subscriptions."))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
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
const productsList = [
    {
        img: '/apps/frontend-assets/logos/logo__rhel.svg',
        description: 'You can create your own OS image to deploy to your cloud instance.',
        link: {
            href: '/insights/image-builder',
            appId: 'image_builder',
            label: 'Create an OS image',
        },
    },
    {
        img: '/apps/frontend-assets/logos/logo__openshift.svg',
        description: 'You can create a cluster to deploy to your cloud instance.',
        link: {
            href: '/openshift',
            appId: 'openshift',
            label: 'Create a cluster',
        },
    },
    {
        img: '/apps/frontend-assets/logos/logo__ansible-automation.svg',
        description: 'Part of configuration is to obtain the repository authorization token.',
        link: {
            href: '/ansible/ansible-dashboard',
            appId: 'ansibleDashboard',
            label: 'Retrieve authorization token',
        },
    },
    {
        img: '/apps/frontend-assets/logos/logo__application-services.svg',
        description: 'Part of configuration is to obtain the repository authorization token.',
        link: {
            href: '/application-services/overview',
            appId: 'applicationServices',
            label: 'Application and Data Services',
        },
    },
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productsList);


/***/ })

}]);