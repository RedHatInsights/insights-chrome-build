(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[7657,1931],{81506:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},34575:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},93913:e=>{function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}},29754:e=>{function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(r)}e.exports=t},2205:(e,t,r)=>{var n=r(99489);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},78585:(e,t,r)=>{var n=r(50008),o=r(81506);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},99489:e=>{function t(r,n){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(r,n)}e.exports=t},50008:e=>{function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(r)}e.exports=t},23373:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ACTION_TYPES:()=>n.a,editAnsibleHost:()=>o.Uw,editDisplayName:()=>o.$Y,systemProfile:()=>o.eR,calculateInterfaces:()=>i.Y4,calculateRepos:()=>i.bI,defaultState:()=>i.W2,formatBytes:()=>i.td,onSystemProfile:()=>i.EG,sizes:()=>i.J7,systemProfilePending:()=>i.b5,systemProfileStore:()=>i.ZP,default:()=>i.ZP});var n=r(73217),o=r(328),i=r(66125)},77460:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>L});var n=r(87757),o=r.n(n),i=r(59713),c=r.n(i),s=r(48926),u=r.n(s),a=r(34575),l=r.n(a),f=r(2205),p=r.n(f),b=r(78585),y=r.n(b),h=r(29754),v=r.n(h),d=r(65957),O=r.n(d),g=r(9669),w=r.n(g),P=r(39666);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v()(e);if(t){var o=v()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return y()(this,r)}}Error;function j(){return(j=u()(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=w().create();E.interceptors.request.use((function(e){return j.apply(this,arguments)})),E.interceptors.response.use((function(e){return e.data?e.data:e})),E.interceptors.response.use(null,(function(e){if(e.response&&401===e.response.status)return window.insights.chrome.auth.logout(),!1;throw e})),E.interceptors.response.use(null,(function(e){throw e.response&&e.response.status>=500&&e.response.status<600&&(0,P.e)((function(t){t.setTag("request_id",e.response.req_id)})),e})),E.interceptors.response.use(null,(function(e){var t;if(!w().isCancel(e))try{var r,n,o=R({},e);if(t=null===(r=o.response)||void 0===r||null===(n=r.headers)||void 0===n?void 0:n["x-rh-insights-request-id"],o.response&&o.response.data)throw R({},o.response.data,{statusText:o.response.statusText});throw e}catch(e){throw t||(e.sentryId=(0,P.Tb)(e)),e.requestId=t,e}}));const L=E},63367:(e,t,r)=>{var n,o;void 0===(o="function"==typeof(n=function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?u(e):t}function l(e){var t=s();return function(){var r,n=i(e);if(t){var o=i(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=i(e)););return e}function p(e,t,r){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=f(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}var b=function(){function t(){e(this,t),Object.defineProperty(this,"listeners",{value:{},writable:!0,configurable:!0})}return n(t,[{key:"addEventListener",value:function(e,t,r){e in this.listeners||(this.listeners[e]=[]),this.listeners[e].push({callback:t,options:r})}},{key:"removeEventListener",value:function(e,t){if(e in this.listeners)for(var r=this.listeners[e],n=0,o=r.length;n<o;n++)if(r[n].callback===t)return void r.splice(n,1)}},{key:"dispatchEvent",value:function(e){if(e.type in this.listeners){for(var t=this.listeners[e.type].slice(),r=0,n=t.length;r<n;r++){var o=t[r];try{o.callback.call(this,e)}catch(e){Promise.resolve().then((function(){throw e}))}o.options&&o.options.once&&this.removeEventListener(e.type,o.callback)}return!e.defaultPrevented}}}]),t}(),y=function(t){o(c,t);var r=l(c);function c(){var t;return e(this,c),(t=r.call(this)).listeners||b.call(u(t)),Object.defineProperty(u(t),"aborted",{value:!1,writable:!0,configurable:!0}),Object.defineProperty(u(t),"onabort",{value:null,writable:!0,configurable:!0}),t}return n(c,[{key:"toString",value:function(){return"[object AbortSignal]"}},{key:"dispatchEvent",value:function(e){"abort"===e.type&&(this.aborted=!0,"function"==typeof this.onabort&&this.onabort.call(this,e)),p(i(c.prototype),"dispatchEvent",this).call(this,e)}}]),c}(b),h=function(){function t(){e(this,t),Object.defineProperty(this,"signal",{value:new y,writable:!0,configurable:!0})}return n(t,[{key:"abort",value:function(){var e;try{e=new Event("abort")}catch(t){"undefined"!=typeof document?document.createEvent?(e=document.createEvent("Event")).initEvent("abort",!1,!1):(e=document.createEventObject()).type="abort":e={type:"abort",bubbles:!1,cancelable:!1}}this.signal.dispatchEvent(e)}},{key:"toString",value:function(){return"[object AbortController]"}}]),t}();function v(e){return e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL?(console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"),!0):"function"==typeof e.Request&&!e.Request.prototype.hasOwnProperty("signal")||!e.AbortController}function d(e){"function"==typeof e&&(e={fetch:e});var t=e,r=t.fetch,n=t.Request,o=void 0===n?r.Request:n,i=t.AbortController,c=t.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL,s=void 0!==c&&c;if(!v({fetch:r,Request:o,AbortController:i,__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL:s}))return{fetch:r,Request:u};var u=o;(u&&!u.prototype.hasOwnProperty("signal")||s)&&((u=function(e,t){var r;t&&t.signal&&(r=t.signal,delete t.signal);var n=new o(e,t);return r&&Object.defineProperty(n,"signal",{writable:!1,enumerable:!1,configurable:!0,value:r}),n}).prototype=o.prototype);var a=r;return{fetch:function(e,t){var r=u&&u.prototype.isPrototypeOf(e)?e.signal:t?t.signal:void 0;if(r){var n;try{n=new DOMException("Aborted","AbortError")}catch(e){(n=new Error("Aborted")).name="AbortError"}if(r.aborted)return Promise.reject(n);var o=new Promise((function(e,t){r.addEventListener("abort",(function(){return t(n)}),{once:!0})}));return t&&t.signal&&delete t.signal,Promise.race([o,a(e,t)])}return a(e,t)},Request:u}}"undefined"!=typeof Symbol&&Symbol.toStringTag&&(h.prototype[Symbol.toStringTag]="AbortController",y.prototype[Symbol.toStringTag]="AbortSignal"),function(e){if(v(e))if(e.fetch){var t=d(e),r=t.fetch,n=t.Request;e.fetch=r,e.Request=n,Object.defineProperty(e,"AbortController",{writable:!0,enumerable:!1,configurable:!0,value:h}),Object.defineProperty(e,"AbortSignal",{writable:!0,enumerable:!1,configurable:!0,value:y})}else console.warn("fetch() is not available, cannot install abortcontroller-polyfill")}("undefined"!=typeof self?self:r.g)})?n.call(t,r,t,e):n)||(e.exports=o)}}]);
//# sourceMappingURL=sourcemaps/inventory-gen-info-store.js.map