"use strict";
(self["webpackChunkinsights_chrome"] = self["webpackChunkinsights_chrome"] || []).push([["middleware"],{

/***/ "./node_modules/@segment/analytics-next/dist/pkg/plugins/middleware/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@segment/analytics-next/dist/pkg/plugins/middleware/index.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyDestinationMiddleware": () => (/* binding */ applyDestinationMiddleware),
/* harmony export */   "sourceMiddlewarePlugin": () => (/* binding */ sourceMiddlewarePlugin)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@segment/analytics-next/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/context */ "./node_modules/@segment/analytics-next/dist/pkg/core/context/index.js");
/* harmony import */ var _lib_as_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/as-promise */ "./node_modules/@segment/analytics-next/dist/pkg/lib/as-promise.js");
/* harmony import */ var _lib_to_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/to-facade */ "./node_modules/@segment/analytics-next/dist/pkg/lib/to-facade.js");




function applyDestinationMiddleware(destination, evt, middleware) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
        function applyMiddleware(event, fn) {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
                var nextCalled, returnedEvent;
                var _a;
                return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            nextCalled = false;
                            returnedEvent = null;
                            return [4 /*yield*/, (0,_lib_as_promise__WEBPACK_IMPORTED_MODULE_1__.asPromise)(fn({
                                    payload: (0,_lib_to_facade__WEBPACK_IMPORTED_MODULE_2__.toFacade)(event, {
                                        clone: true,
                                        traverse: false,
                                    }),
                                    integration: destination,
                                    next: function (evt) {
                                        nextCalled = true;
                                        if (evt === null) {
                                            returnedEvent = null;
                                        }
                                        if (evt) {
                                            returnedEvent = evt.obj;
                                        }
                                    },
                                }))];
                        case 1:
                            _b.sent();
                            if (!nextCalled && returnedEvent !== null) {
                                returnedEvent = returnedEvent;
                                returnedEvent.integrations = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, event.integrations), (_a = {}, _a[destination] = false, _a));
                            }
                            return [2 /*return*/, returnedEvent];
                    }
                });
            });
        }
        var _i, middleware_1, md, result;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, middleware_1 = middleware;
                    _a.label = 1;
                case 1:
                    if (!(_i < middleware_1.length)) return [3 /*break*/, 4];
                    md = middleware_1[_i];
                    return [4 /*yield*/, applyMiddleware(evt, md)];
                case 2:
                    result = _a.sent();
                    if (result === null) {
                        return [2 /*return*/, null];
                    }
                    evt = result;
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, evt];
            }
        });
    });
}
function sourceMiddlewarePlugin(fn, integrations) {
    function apply(ctx) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
            var nextCalled;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nextCalled = false;
                        return [4 /*yield*/, (0,_lib_as_promise__WEBPACK_IMPORTED_MODULE_1__.asPromise)(fn({
                                payload: (0,_lib_to_facade__WEBPACK_IMPORTED_MODULE_2__.toFacade)(ctx.event, {
                                    clone: true,
                                    traverse: false,
                                }),
                                integrations: integrations !== null && integrations !== void 0 ? integrations : {},
                                next: function (evt) {
                                    nextCalled = true;
                                    if (evt) {
                                        ctx.event = evt.obj;
                                    }
                                },
                            }))];
                    case 1:
                        _a.sent();
                        if (!nextCalled) {
                            throw new _core_context__WEBPACK_IMPORTED_MODULE_3__.ContextCancelation({
                                retry: false,
                                type: 'middleware_cancellation',
                                reason: 'Middleware `next` function skipped',
                            });
                        }
                        return [2 /*return*/, ctx];
                }
            });
        });
    }
    return {
        name: "Source Middleware ".concat(fn.name),
        type: 'before',
        version: '0.1.0',
        isLoaded: function () { return true; },
        load: function (ctx) { return Promise.resolve(ctx); },
        track: apply,
        page: apply,
        identify: apply,
        alias: apply,
        group: apply,
    };
}
//# sourceMappingURL=index.js.map

/***/ })

}]);