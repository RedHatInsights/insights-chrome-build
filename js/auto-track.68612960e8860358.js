"use strict";(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[119],{4802:(t,n,e)=>{e.r(n),e.d(n,{form:()=>o,link:()=>i});var r=e(4591);function i(t,n,e,i){var o=this;return t?((t instanceof Element?[t]:"toArray"in t?t.toArray():t).forEach((function(t){t.addEventListener("click",(function(u){var c,a,s=n instanceof Function?n(t):n,l=e instanceof Function?e(t):e,f=t.getAttribute("href")||t.getAttributeNS("http://www.w3.org/1999/xlink","href")||t.getAttribute("xlink:href")||(null===(c=t.getElementsByTagName("a")[0])||void 0===c?void 0:c.getAttribute("href")),h=(0,r.FJ)(o.track(s,l,null!=i?i:{}),null!==(a=o.settings.timeout)&&void 0!==a?a:500);(function(t,n){return!("_blank"!==t.target||!n)})(t,f)||function(t){var n=t;return!!(n.ctrlKey||n.shiftKey||n.metaKey||n.button&&1==n.button)}(u)||f&&(u.preventDefault?u.preventDefault():u.returnValue=!1,h.catch(console.error).then((function(){window.location.href=f})).catch(console.error))}),!1)})),this):this}function o(t,n,e,i){var o=this;return t?(t instanceof HTMLFormElement&&(t=[t]),t.forEach((function(t){if(!(t instanceof Element))throw new TypeError("Must pass HTMLElement to trackForm/trackSubmit.");var u=function(u){var c;u.preventDefault?u.preventDefault():u.returnValue=!1;var a=n instanceof Function?n(t):n,s=e instanceof Function?e(t):e;(0,r.FJ)(o.track(a,s,null!=i?i:{}),null!==(c=o.settings.timeout)&&void 0!==c?c:500).catch(console.error).then((function(){t.submit()})).catch(console.error)},c=window.jQuery||window.Zepto;c?c(t).submit(u):t.addEventListener("submit",u,!1)})),this):this}}}]);