(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[932],{49739:(e,t,r)=>{"use strict";r.d(t,{K:()=>c});var n=r(70655),o=r(77865),i=r(75968),s=r(91941);const c=e=>{var{hasGutter:t=!1,className:r="",children:c=null,component:u="div"}=e,a=(0,n.__rest)(e,["hasGutter","className","children","component"]);const l=u;return o.createElement(l,Object.assign({},a,{className:(0,s.css)(i.Z.stack,t&&i.Z.modifiers.gutter,r)}),c)};c.displayName="Stack"},83826:(e,t,r)=>{"use strict";r.d(t,{v:()=>c});var n=r(70655),o=r(77865),i=r(75968),s=r(91941);const c=e=>{var{isFilled:t=!1,className:r="",children:c=null}=e,u=(0,n.__rest)(e,["isFilled","className","children"]);return o.createElement("div",Object.assign({},u,{className:(0,s.css)(i.Z.stackItem,t&&i.Z.modifiers.fill,r)}),c)};c.displayName="StackItem"},75968:(e,t,r)=>{"use strict";r(2151),t.Z={modifiers:{fill:"pf-m-fill",gutter:"pf-m-gutter"},stack:"pf-l-stack",stackItem:"pf-l-stack__item"}},5251:(e,t,r)=>{"use strict";r.d(t,{P:()=>d,Z:()=>f});var n,o=r(59713),i=r.n(o),s=r(50576),c=r(55849),u=r(70210);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={loaded:!1};const f=l((n={},i()(n,s.aI.LOAD_ENTITIES_PENDING,(function(){return d})),i()(n,s.aI.LOAD_ENTITY_PENDING,(function(e){return l({},e,{loaded:!1})})),i()(n,s.aI.LOAD_ENTITY_FULFILLED,(function(e,t){return l({},e,{loaded:!0,entity:t.payload.results[0]})})),i()(n,s.TP,(function(e,t){return l({},e,{activeApp:t.payload})})),i()(n,s.aI.LOAD_TAGS,c.nN),i()(n,s.aI.LOAD_TAGS_PENDING,(function(e){return l({},e,{tagModalLoaded:!1})})),i()(n,s.aI.LOAD_TAGS_FULFILLED,c.nN),i()(n,s.Qd,c.vI),i()(n,s.Ji,(function(e,t){var r=t.payload;return l({},e,{isToggleOpened:null==r?void 0:r.isOpened})})),n),u.ZP)},77444:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ACTION_TYPES:()=>n.aI,APPLICATION_SELECTED:()=>n.TP,CHANGE_SORT:()=>n.WH,CLEAR_FILTERS:()=>n.Gs,CONFIG_CHANGED:()=>n.Uq,ENTITIES_LOADING:()=>n.jZ,FILTER_ENTITIES:()=>n.lP,FILTER_SELECT:()=>n.hI,INVENTORY_ACTION_TYPES:()=>n.AL,SELECT_ENTITY:()=>n.pr,SHOW_ENTITIES:()=>n.u4,SYSTEM_ISSUE_TYPES:()=>n.dF,TOGGLE_DRAWER:()=>n.Ji,TOGGLE_TAG_MODAL:()=>n.Qd,UPDATE_ENTITIES:()=>n.s$,clearFilters:()=>o.K5,configChanged:()=>o.u3,deleteEntity:()=>o.Ks,detailSelect:()=>o.Xe,editAnsibleHost:()=>o.Uw,editDisplayName:()=>o.$Y,entitiesLoading:()=>o.nE,fetchAllTags:()=>o.C8,filterEntities:()=>o.CP,filterSelect:()=>o.fg,getAdvisorData:()=>o.gb,getComplianceData:()=>o.Oj,getPatchData:()=>o.k0,getVulnData:()=>o.Fo,loadEntities:()=>o.il,loadEntity:()=>o.A_,loadTags:()=>o.me,selectEntity:()=>o.CL,setSort:()=>o.HD,systemProfile:()=>o.eR,toggleDrawer:()=>o.wb,toggleTagModal:()=>o.Ar,updateEntities:()=>o.jB,allTags:()=>i.iF,defaultColumns:()=>i.y5,defaultState:()=>i.W2,showTags:()=>i.nN,showTagsPending:()=>i.tz,toggleTagModalReducer:()=>i.vI,entityDefaultState:()=>s.P,entitiesReducer:()=>c.zw,entityDetailsReducer:()=>c.gA,mergeWithDetail:()=>c.OL,mergeWithEntities:()=>c.AF,advisor:()=>u.Zs,compliance:()=>u.As,cve:()=>u.b$,isPending:()=>u.zR,patch:()=>u.r$});var n=r(50576),o=r(60574),i=r(55849),s=r(5251),c=r(66258),u=r(70210)},66258:(e,t,r)=>{"use strict";r.d(t,{zw:()=>s.ZP,gA:()=>c.Z,AF:()=>l,OL:()=>d});var n=r(59713),o=r.n(n),i=r(18546),s=r(55849),c=r(5251);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return{entities:function(t,r){return a({},e(a({},(0,i.Gg)(a({},s.ZP),s.W2)(t,r)),r))}}}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return{entityDetails:function(t,r){return a({},e(a({},(0,i.Gg)(a({},c.Z),c.defaultState)(t,r)),r))}}}},70210:(e,t,r)=>{"use strict";r.d(t,{Zs:()=>a,b$:()=>l,r$:()=>d,As:()=>f,zR:()=>p,ZP:()=>y});var n,o=r(59713),i=r.n(o),s=r(50576);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){var r=t.payload;return u({},e,{systemIssues:u({},null==e?void 0:e.systemIssues,{advisor:{isLoaded:!0,criticalCount:null==r?void 0:r.filter((function(e){return(null==e?void 0:e.total_risk)>=4}))}})})}function l(e,t){var r,n,o,i,s,c,a,l,d=t.payload;return u({},e,{systemIssues:u({},null==e?void 0:e.systemIssues,{cve:{isLoaded:!0,critical:{count:(null==d||null===(r=d.critical)||void 0===r||null===(n=r.meta)||void 0===n?void 0:n.total_items)||0},moderate:{count:(null==d||null===(o=d.moderate)||void 0===o||null===(i=o.meta)||void 0===i?void 0:i.total_items)||0},important:{count:(null==d||null===(s=d.important)||void 0===s||null===(c=s.meta)||void 0===c?void 0:c.total_items)||0},low:{count:(null==d||null===(a=d.low)||void 0===a||null===(l=a.meta)||void 0===l?void 0:l.total_items)||0}}})})}function d(e,t){var r,n,o,i,s,c,a=t.payload;return u({},e,{systemIssues:u({},null==e?void 0:e.systemIssues,{patch:{isLoaded:!0,bug:{count:(null==a||null===(r=a.data)||void 0===r||null===(n=r.attributes)||void 0===n?void 0:n.rhba_count)||0},enhancement:{count:(null==a||null===(o=a.data)||void 0===o||null===(i=o.attributes)||void 0===i?void 0:i.rhea_count)||0},security:{count:(null==a||null===(s=a.data)||void 0===s||null===(c=s.attributes)||void 0===c?void 0:c.rhsa_count)||0}}})})}function f(e,t){var r,n,o=t.payload;return u({},e,{systemIssues:u({},null==e?void 0:e.systemIssues,{compliance:{isLoaded:!0,profiles:null==o||null===(r=o.data)||void 0===r||null===(n=r.system)||void 0===n?void 0:n.profiles}})})}function p(e,t){return u({},e,{systemIssues:u({},null==e?void 0:e.systemIssues,{},t&&i()({},t,{isLoaded:!1}))})}const y=(n={},i()(n,s.dF.LOAD_ADVISOR_RECOMMENDATIONS_PENDING,(function(e){return p(e,"advisor")})),i()(n,s.dF.LOAD_APPLICABLE_CVES_PENDING,(function(e){return p(e,"cve")})),i()(n,s.dF.LOAD_APPLICABLE_ADVISORIES_PENDING,(function(e){return p(e,"patch")})),i()(n,s.dF.LOAD_COMPLIANCE_POLICIES_PENDING,(function(e){return p(e,"compliance")})),i()(n,s.dF.LOAD_ADVISOR_RECOMMENDATIONS_FULFILLED,a),i()(n,s.dF.LOAD_APPLICABLE_CVES_FULFILLED,l),i()(n,s.dF.LOAD_APPLICABLE_ADVISORIES_FULFILLED,d),i()(n,s.dF.LOAD_COMPLIANCE_POLICIES_FULFILLED,f),n)},18546:(e,t,r)=>{"use strict";r.d(t,{Gg:()=>v});var n=r(63038),o=r.n(n),i=r(319),s=r.n(i),c=r(34575),u=r.n(c),a=r(93913),l=r.n(a),d=r(59713),f=r.n(d),p=r(14890);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){f()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=arguments.length>1?arguments[1]:void 0;return Object.prototype.hasOwnProperty.call(e,n.type)?e[n.type](r,n):r}}var O=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p.compose;u()(this,e);var o=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||n;this.store=(0,p.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t;return e}),t,o(p.applyMiddleware.apply(void 0,s()(r)))),this.reducers={}}return l()(e,[{key:"getStore",value:function(){return this.store}},{key:"register",value:function(e){var t=this;return this.reducers=h({},this.reducers,{},e),this.store.replaceReducer((0,p.combineReducers)(h({},this.reducers))),function(){t.reducers=Object.entries(t.reducers).filter((function(t){return!Object.keys(e).includes(t)})).reduce((function(e,t){var r=o()(t,2),n=r[0],i=r[1];return h({},e,f()({},n,i))}),{}),t.store.replaceReducer((0,p.combineReducers)(h({},t.reducers)))}}}]),e}();new O},88221:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(94015),o=r.n(n),i=r(23645),s=r.n(i)()(o());s.push([e.id,".pf-l-stack{--pf-l-stack--m-gutter--MarginBottom: var(--pf-global--gutter);display:flex;flex-direction:column;height:100%}.pf-l-stack__item.pf-m-fill{flex-grow:1}.pf-l-stack.pf-m-gutter>*:not(:last-child){margin-bottom:var(--pf-l-stack--m-gutter--MarginBottom)}\n","",{version:3,sources:["webpack://./stack.css"],names:[],mappings:"AAAA,YACE,8DAAqC,CACrC,YAAa,CACb,qBAAsB,CACtB,WAAY,CAAG,4BAGf,WAAY,CAAG,2CAGf,uDAAwD",sourcesContent:[".pf-l-stack {\n  --pf-l-stack--m-gutter--MarginBottom: var(--pf-global--gutter);\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\n.pf-l-stack__item.pf-m-fill {\n  flex-grow: 1; }\n\n.pf-l-stack.pf-m-gutter > *:not(:last-child) {\n  margin-bottom: var(--pf-l-stack--m-gutter--MarginBottom); }\n"],sourceRoot:""}]);const c=s},14890:(e,t,r)=>{"use strict";r.d(t,{applyMiddleware:()=>v,bindActionCreators:()=>d,combineReducers:()=>a,compose:()=>h,createStore:()=>c});var n=r(27164),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function s(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function c(e,t,r){var o;if("function"==typeof t&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(c)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var u=e,a=t,l=[],d=l,f=!1;function p(){d===l&&(d=l.slice())}function y(){if(f)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return a}function h(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(f)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return p(),d.push(e),function(){if(t){if(f)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,p();var r=d.indexOf(e);d.splice(r,1),l=null}}}function v(e){if(!s(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(f)throw new Error("Reducers may not dispatch actions.");try{f=!0,a=u(a,e)}finally{f=!1}for(var t=l=d,r=0;r<t.length;r++){(0,t[r])()}return e}function O(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");u=e,v({type:i.REPLACE})}function b(){var e,t=h;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function r(){e.next&&e.next(y())}return r(),{unsubscribe:t(r)}}})[n.Z]=function(){return this},e}return v({type:i.INIT}),(o={dispatch:v,subscribe:h,getState:y,replaceReducer:O})[n.Z]=b,o}function u(e,t){var r=t&&t.type;return"Given "+(r&&'action "'+String(r)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function a(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];0,"function"==typeof e[o]&&(r[o]=e[o])}var s,c=Object.keys(r);try{!function(e){Object.keys(e).forEach((function(t){var r=e[t];if(void 0===r(void 0,{type:i.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===r(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(r)}catch(e){s=e}return function(e,t){if(void 0===e&&(e={}),s)throw s;for(var n=!1,o={},i=0;i<c.length;i++){var a=c[i],l=r[a],d=e[a],f=l(d,t);if(void 0===f){var p=u(a,t);throw new Error(p)}o[a]=f,n=n||f!==d}return(n=n||c.length!==Object.keys(e).length)?o:e}}function l(e,t){return function(){return t(e.apply(this,arguments))}}function d(e,t){if("function"==typeof e)return l(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var r={};for(var n in e){var o=e[n];"function"==typeof o&&(r[n]=l(o,t))}return r}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(r,!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function v(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=t.map((function(e){return e(o)}));return y({},r,{dispatch:n=h.apply(void 0,i)(r.dispatch)})}}}},2151:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var n=r(93379),o=r.n(n),i=r(88221),s={insert:"head",singleton:!1};o()(i.Z,s);const c=i.Z.locals||{}},27164:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n,o=r(10396);e=r.hmd(e),n="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==r.g?r.g:e;const i=(0,o.Z)(n)},10396:(e,t,r)=>{"use strict";function n(e){var t,r=e.Symbol;return"function"==typeof r?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t}r.d(t,{Z:()=>n})}}]);
//# sourceMappingURL=sourcemaps/932.js.map