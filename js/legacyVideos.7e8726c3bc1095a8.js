"use strict";
(self["webpackChunkinsights_chrome"] = self["webpackChunkinsights_chrome"] || []).push([["legacyVideos"],{

/***/ "./node_modules/@segment/analytics-next/dist/pkg/plugins/legacy-video-plugins/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@segment/analytics-next/dist/pkg/plugins/legacy-video-plugins/index.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadLegacyVideoPlugins: () => (/* binding */ loadLegacyVideoPlugins)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");

function loadLegacyVideoPlugins(analytics) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
        var plugins;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, __webpack_require__.e(/*! import() */ "vendors-node_modules_segment_analytics_js-video-plugins_dist_index_umd_js").then(__webpack_require__.t.bind(__webpack_require__, /*! @segment/analytics.js-video-plugins/dist/index.umd.js */ "./node_modules/@segment/analytics.js-video-plugins/dist/index.umd.js", 23))
                    // This is super gross, but we need to support the `window.analytics.plugins` namespace
                    // that is linked in the segment docs in order to be backwards compatible with ajs-classic
                    // @ts-expect-error
                ];
                case 1:
                    plugins = _a.sent();
                    // This is super gross, but we need to support the `window.analytics.plugins` namespace
                    // that is linked in the segment docs in order to be backwards compatible with ajs-classic
                    // @ts-expect-error
                    analytics._plugins = plugins;
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=index.js.map

/***/ })

}]);