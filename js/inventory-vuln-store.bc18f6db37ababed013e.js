(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[2209],{23646:(e,r,t)=>{var n=t(67228);e.exports=function(e){if(Array.isArray(e))return n(e)}},34575:e=>{e.exports=function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}},93913:e=>{function r(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},46860:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},98206:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:(e,r,t)=>{var n=t(23646),i=t(46860),o=t(60379),E=t(98206);e.exports=function(e){return n(e)||i(e)||o(e)||E()}},77129:(e,r,t)=>{"use strict";var n,i=t(70348),o=function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e};function E(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?E(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var s={parameters:{page:1,page_size:20,show_advisories:!0},cveList:{isLoading:!0,payload:[],meta:new Date,error:!1},openedCves:[],selectedCves:[],expandCveDescription:!1},c=i.applyReducerHash((o(n={},"".concat("FETCH_SYSTEM_CVE_LIST","_PENDING"),(function(e,r){var t=r.meta;return a(a({},e),{},{timestamp:t,cveList:a(a({},e.cveList),{},{isLoading:!0})})})),o(n,"".concat("FETCH_SYSTEM_CVE_LIST","_REJECTED"),(function(e,r){var t=r.meta,n=r.payload;return a(a({},e),{},{timestamp:t,cveList:{payload:{errors:n},isLoading:!1}})})),o(n,"".concat("FETCH_SYSTEM_CVE_LIST","_FULFILLED"),(function(e,r){var t=r.payload,n=r.meta;return n>=e.timestamp?a(a({},e),{},{timestamp:n,cveList:{payload:t,isLoading:!1}}):e})),o(n,"CHANGE_SYSTEM_CVE_LIST_PARAMETERS",(function(e,r){var t=e;return t.parameters=a(a({},e.parameters),r.payload),t})),o(n,"SELECT_SYSTEM_CVE",(function(e,r){var t=e,n=t.selectedCves.slice();return Array.isArray(r.payload)?n=r.payload:n.includes(r.payload)&&n.splice(n.indexOf(r.payload),1)||n.push(r.payload),a(a({},t),{},{selectedCves:n})})),o(n,"EXPAND_SYSTEM_CVE",(function(e,r){var t=e,n=r.payload,i=n.isOpen,o=n.cves,E=n.expandCveDescription,s=t.openedCves.slice();return o.length>0?o.map((function(e){var r=s.findIndex((function(r){return r.id===e}));r>-1?s[r]={id:e,isOpen:i}:s.push({id:e,isOpen:i})})):s=s.map((function(e){return{id:e.id,isOpen:!1}})),a(a({},t),{},{openedCves:s,expandCveDescription:E})})),o(n,"CLEAR_SYSTEM_CVES_STORE",(function(e){var r=e;return r.selectedCves=[],r.openedCves=[],r.parameters={page:1,page_size:20,show_advisories:!0},r})),n),s);r.CHANGE_CVE_LIST_PARAMETERS="CHANGE_CVE_LIST_PARAMETERS",r.CHANGE_EXPOSED_SYSTEMS_PARAMETERS="CHANGE_EXPOSED_SYSTEMS_PARAMETERS",r.CHANGE_SYSTEMS_PARAMS="CHANGE_SYSTEMS_PARAMS",r.CHANGE_SYSTEM_CVE_LIST_PARAMETERS="CHANGE_SYSTEM_CVE_LIST_PARAMETERS",r.CLEAR_CVES_STORE="CLEAR_CVEs_STORE",r.CLEAR_CVE_STORE="CLEAR_CVE_STORE",r.CLEAR_SYSTEMS_STORE="CLEAR_SYSTEMS_STORE",r.CLEAR_SYSTEM_CVES_STORE="CLEAR_SYSTEM_CVES_STORE",r.EXPAND_CVE="EXPAND_CVE",r.EXPAND_SYSTEM_CVE="EXPAND_SYSTEM_CVE",r.FETCH_AFFECTED_SYSTEMS_BY_CVE="FETCH_AFFECTED_SYSTEMS_BY_CVE",r.FETCH_CVE_DETAILS="FETCH_CVE_DETAILS",r.FETCH_CVE_LIST="FETCH_CVE_LIST",r.FETCH_SYSTEMS="FETCH_SYSTEMS",r.FETCH_SYSTEM_CVE_LIST="FETCH_SYSTEM_CVE_LIST",r.FETCH_SYTEM_DETAILS_IDS="FETCH_SYTEM_DETAILS_IDS",r.SELECT_CVE="SELECT_CVE",r.SELECT_SYSTEM_CVE="SELECT_SYSTEM_CVE",r.SET_GLOBAL_FILTER="SET_GLOBAL_FILTER",r.SystemCvesStore=c,r.defineProperty=o,r.initialState=s},93703:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(77129);t(70348),r.SystemCvesStore=n.SystemCvesStore,r.initialState=n.initialState},18546:(e,r,t)=>{"use strict";t.d(r,{Gg:()=>d,vj:()=>l,xI:()=>f,G$:()=>v,ZP:()=>y});var n=t(63038),i=t.n(n),o=t(319),E=t.n(o),a=t(34575),s=t.n(a),c=t(93913),S=t.n(c),_=t(59713),u=t.n(_),p=t(14890);function T(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function C(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?T(Object(t),!0).forEach((function(r){u()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,n=arguments.length>1?arguments[1]:void 0;return Object.prototype.hasOwnProperty.call(e,n.type)?e[n.type](t,n):t}}function l(e,r){return Object.keys(e).reduce((function(t,n){return C({},t,u()({},n,(function(){return r&&r.dispatch(e[n].apply(e,arguments))})))}),{})}var f=function(){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p.qC;s()(this,e);var i=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||n;this.store=(0,p.MT)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;return e}),r,i(p.md.apply(void 0,E()(t)))),this.reducers={}}return S()(e,[{key:"getStore",value:function(){return this.store}},{key:"register",value:function(e){var r=this;return this.reducers=C({},this.reducers,{},e),this.store.replaceReducer((0,p.UY)(C({},this.reducers))),function(){r.reducers=Object.entries(r.reducers).filter((function(r){return!Object.keys(e).includes(r)})).reduce((function(e,r){var t=i()(r,2),n=t[0],o=t[1];return C({},e,u()({},n,o))}),{}),r.store.replaceReducer((0,p.UY)(C({},r.reducers)))}}}]),e}(),v=new f;const y=f},70348:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n.ZP,ReducerRegistry:()=>n.xI,applyReducerHash:()=>n.Gg,dispatchActionsToStore:()=>n.vj,reduxRegistry:()=>n.G$});var n=t(18546)}}]);
//# sourceMappingURL=sourcemaps/inventory-vuln-store.js.map