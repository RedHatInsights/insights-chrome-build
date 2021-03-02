/*! For license information please see 1588.1f6cacd751cf49b54053.js.LICENSE.txt */
(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[1588],{23645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},94015:e=>{"use strict";function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n=t(e,4),r=n[1],o=n[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),c="/*# ".concat(i," */"),u=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[r].concat(u).concat([c]).join("\n")}return[r].join("\n")}},15303:(e,t,n)=>{"use strict";n.r(t),n.d(t,{createFocusTrap:()=>l});var r,o=n(88388);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var c,u=(c=[],{activateTrap:function(e){if(c.length>0){var t=c[c.length-1];t!==e&&t.pause()}var n=c.indexOf(e);-1===n||c.splice(n,1),c.push(e)},deactivateTrap:function(e){var t=c.indexOf(e);-1!==t&&c.splice(t,1),c.length>0&&c[c.length-1].unpause()}}),s=function(e){return setTimeout(e,0)},l=function(e,t){var n,c=document,l=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),f={containers:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},d=function(e){return f.containers.some((function(t){return t.contains(e)}))},p=function(e){var t=l[e];if(!t)return null;var n=t;if("string"==typeof t&&!(n=c.querySelector(t)))throw new Error("`".concat(e,"` refers to no known node"));if("function"==typeof t&&!(n=t()))throw new Error("`".concat(e,"` did not return a node"));return n},v=function(){var e;if(null!==p("initialFocus"))e=p("initialFocus");else if(d(c.activeElement))e=c.activeElement;else{var t=f.tabbableGroups[0];e=t&&t.firstTabbableNode||p("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},b=function(){if(f.tabbableGroups=f.containers.map((function(e){var t=(0,o.ht)(e);if(t.length>0)return{firstTabbableNode:t[0],lastTabbableNode:t[t.length-1]}})).filter((function(e){return!!e})),f.tabbableGroups.length<=0&&!p("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},m=function e(t){t!==c.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!l.preventScroll}),f.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(v()))},h=function(e){d(e.target)||(l.clickOutsideDeactivates?n.deactivate({returnFocus:l.returnFocusOnDeactivate&&!(0,o.EB)(e.target)}):l.allowOutsideClick&&("boolean"==typeof l.allowOutsideClick?l.allowOutsideClick:l.allowOutsideClick(e))||e.preventDefault())},y=function(e){var t=d(e.target);t||e.target instanceof Document?t&&(f.mostRecentlyFocusedNode=e.target):(e.stopImmediatePropagation(),m(f.mostRecentlyFocusedNode||v()))},g=function(e){if(!1!==l.escapeDeactivates&&function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){b();var t=null;if(f.tabbableGroups.length>0)if(e.shiftKey){var n=f.tabbableGroups.findIndex((function(t){var n=t.firstTabbableNode;return e.target===n}));if(n>=0){var r=0===n?f.tabbableGroups.length-1:n-1;t=f.tabbableGroups[r].lastTabbableNode}}else{var o=f.tabbableGroups.findIndex((function(t){var n=t.lastTabbableNode;return e.target===n}));if(o>=0){var a=o===f.tabbableGroups.length-1?0:o+1;t=f.tabbableGroups[a].firstTabbableNode}}else t=p("fallbackFocus");t&&(e.preventDefault(),m(t))}(e)},w=function(e){l.clickOutsideDeactivates||d(e.target)||l.allowOutsideClick&&("boolean"==typeof l.allowOutsideClick?l.allowOutsideClick:l.allowOutsideClick(e))||(e.preventDefault(),e.stopImmediatePropagation())},O=function(){if(f.active)return u.activateTrap(n),r=l.delayInitialFocus?s((function(){m(v())})):m(v()),c.addEventListener("focusin",y,!0),c.addEventListener("mousedown",h,{capture:!0,passive:!1}),c.addEventListener("touchstart",h,{capture:!0,passive:!1}),c.addEventListener("click",w,{capture:!0,passive:!1}),c.addEventListener("keydown",g,{capture:!0,passive:!1}),n},E=function(){if(f.active)return c.removeEventListener("focusin",y,!0),c.removeEventListener("mousedown",h,!0),c.removeEventListener("touchstart",h,!0),c.removeEventListener("click",w,!0),c.removeEventListener("keydown",g,!0),n};return(n={activate:function(e){if(f.active)return this;b(),f.active=!0,f.paused=!1,f.nodeFocusedBeforeActivation=c.activeElement;var t=e&&e.onActivate?e.onActivate:l.onActivate;return t&&t(),O(),this},deactivate:function(e){if(!f.active)return this;clearTimeout(r),E(),f.active=!1,f.paused=!1,u.deactivateTrap(n);var t=e&&void 0!==e.onDeactivate?e.onDeactivate:l.onDeactivate;return t&&t(),(e&&void 0!==e.returnFocus?e.returnFocus:l.returnFocusOnDeactivate)&&s((function(){var e;m((e=f.nodeFocusedBeforeActivation,p("setReturnFocus")||e))})),this},pause:function(){return f.paused||!f.active||(f.paused=!0,E()),this},unpause:function(){return f.paused&&f.active?(f.paused=!1,b(),O(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return f.containers=t.map((function(e){return"string"==typeof e?c.querySelector(e):e})),f.active&&b(),this}}).updateContainerElements(e),n}},93379:(e,t,n)=>{"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],u=t.base?a[0]+t.base:a[0],s=n[u]||0,l="".concat(u," ").concat(s);n[u]=s+1;var f=c(l),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:l,updater:m(d,t),references:1}),r.push(l)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,b=0;function m(e,t){var n,r,o;if(t.singleton){var a=b++;n=v||(v=s(t)),r=d.bind(null,n,a,!1),o=d.bind(null,n,a,!0)}else n=s(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=u(e,t),s=0;s<n.length;s++){var l=c(n[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=a}}}},88388:(e,t,n)=>{"use strict";n.d(t,{EB:()=>b,ht:()=>p});var r=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],o=r.join(","),a="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,i=function(e,t,n){var r=Array.prototype.slice.apply(e.querySelectorAll(o));return t&&a.call(e,o)&&r.unshift(e),r=r.filter(n)},c=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:"AUDIO"!==e.nodeName&&"VIDEO"!==e.nodeName&&"DETAILS"!==e.nodeName||null!==e.getAttribute("tabindex")?e.tabIndex:0:t},u=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},s=function(e){return"INPUT"===e.tagName},l=function(e){return function(e){return s(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||e.ownerDocument,r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},f=function(e){return!(e.disabled||function(e){return s(e)&&"hidden"===e.type}(e)||function(e){if("hidden"===getComputedStyle(e).visibility)return!0;var t=a.call(e,"details>summary:first-of-type")?e.parentElement:e;if(a.call(t,"details:not([open]) *"))return!0;for(;e;){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(e))},d=function(e){return!(!f(e)||l(e)||c(e)<0)},p=function(e,t){var n=[],r=[];return i(e,(t=t||{}).includeContainer,d).forEach((function(e,t){var o=c(e);0===o?n.push(e):r.push({documentOrder:t,tabIndex:o,node:e})})),r.sort(u).map((function(e){return e.node})).concat(n)},v=r.concat("iframe").join(","),b=function(e){if(!e)throw new Error("No node provided");return!1!==a.call(e,v)&&f(e)}}}]);
//# sourceMappingURL=sourcemaps/1588.js.map