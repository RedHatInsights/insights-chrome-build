/*! For license information please see 533.823d3c894e186cab103c.js.LICENSE.txt */
"use strict";(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[533],{8679:(e,r,t)=>{var n=t(59864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function i(e){return n.isMemo(e)?a:c[e.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=a;var s=Object.defineProperty,f=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,v=Object.prototype;e.exports=function e(r,t,n){if("string"!=typeof t){if(v){var o=l(t);o&&o!==v&&e(r,o,n)}var a=f(t);p&&(a=a.concat(p(t)));for(var c=i(r),y=i(t),m=0;m<a.length;++m){var b=a[m];if(!(u[b]||n&&n[b]||y&&y[b]||c&&c[b])){var S=d(t,b);try{s(r,b,S)}catch(e){}}}}return r}},69921:(e,r)=>{var t="function"==typeof Symbol&&Symbol.for,n=t?Symbol.for("react.element"):60103,o=t?Symbol.for("react.portal"):60106,u=t?Symbol.for("react.fragment"):60107,a=t?Symbol.for("react.strict_mode"):60108,c=t?Symbol.for("react.profiler"):60114,i=t?Symbol.for("react.provider"):60109,s=t?Symbol.for("react.context"):60110,f=t?Symbol.for("react.async_mode"):60111,p=t?Symbol.for("react.concurrent_mode"):60111,d=t?Symbol.for("react.forward_ref"):60112,l=t?Symbol.for("react.suspense"):60113,v=t?Symbol.for("react.suspense_list"):60120,y=t?Symbol.for("react.memo"):60115,m=t?Symbol.for("react.lazy"):60116,b=t?Symbol.for("react.block"):60121,S=t?Symbol.for("react.fundamental"):60117,h=t?Symbol.for("react.responder"):60118,P=t?Symbol.for("react.scope"):60119;function g(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case n:switch(e=e.type){case f:case p:case u:case c:case a:case l:return e;default:switch(e=e&&e.$$typeof){case s:case d:case m:case y:case i:return e;default:return r}}case o:return r}}}function w(e){return g(e)===p}r.AsyncMode=f,r.ConcurrentMode=p,r.ContextConsumer=s,r.ContextProvider=i,r.Element=n,r.ForwardRef=d,r.Fragment=u,r.Lazy=m,r.Memo=y,r.Portal=o,r.Profiler=c,r.StrictMode=a,r.Suspense=l,r.isAsyncMode=function(e){return w(e)||g(e)===f},r.isConcurrentMode=w,r.isContextConsumer=function(e){return g(e)===s},r.isContextProvider=function(e){return g(e)===i},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},r.isForwardRef=function(e){return g(e)===d},r.isFragment=function(e){return g(e)===u},r.isLazy=function(e){return g(e)===m},r.isMemo=function(e){return g(e)===y},r.isPortal=function(e){return g(e)===o},r.isProfiler=function(e){return g(e)===c},r.isStrictMode=function(e){return g(e)===a},r.isSuspense=function(e){return g(e)===l},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===u||e===p||e===c||e===a||e===l||e===v||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===y||e.$$typeof===i||e.$$typeof===s||e.$$typeof===d||e.$$typeof===S||e.$$typeof===h||e.$$typeof===P||e.$$typeof===b)},r.typeOf=g},59864:(e,r,t)=>{e.exports=t(69921)},6526:(e,r,t)=>{t.d(r,{E:()=>o});var n=t(96985),o=t.n(n)().createContext(null)},60682:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(96985),o=t.n(n),u=(t(45697),t(6526)),a=t(86496),c=t(1881);const i=function(e){var r=e.store,t=e.context,i=e.children,s=(0,n.useMemo)((function(){var e=(0,a.X)(r);return e.onStateChange=e.notifyNestedSubs,{store:r,subscription:e}}),[r]),f=(0,n.useMemo)((function(){return r.getState()}),[r]);(0,c.L)((function(){var e=s.subscription;return e.trySubscribe(),f!==r.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[s,f]);var p=t||u.E;return o().createElement(p.Provider,{value:s},i)}},26685:(e,r,t)=>{t.d(r,{Z:()=>w});var n=t(87462),o=t(63366),u=t(8679),a=t.n(u),c=t(96985),i=t.n(c),s=t(72973),f=t(86496),p=t(1881),d=t(6526),l=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],v=["reactReduxForwardedRef"],y=[],m=[null,null];function b(e,r){var t=e[1];return[r.payload,t+1]}function S(e,r,t){(0,p.L)((function(){return e.apply(void 0,r)}),t)}function h(e,r,t,n,o,u,a){e.current=n,r.current=o,t.current=!1,u.current&&(u.current=null,a())}function P(e,r,t,n,o,u,a,c,i,s){if(e){var f=!1,p=null,d=function(){if(!f){var e,t,d=r.getState();try{e=n(d,o.current)}catch(e){t=e,p=e}t||(p=null),e===u.current?a.current||i():(u.current=e,c.current=e,a.current=!0,s({type:"STORE_UPDATED",payload:{error:t}}))}};t.onStateChange=d,t.trySubscribe(),d();return function(){if(f=!0,t.tryUnsubscribe(),t.onStateChange=null,p)throw p}}}var g=function(){return[null,0]};function w(e,r){void 0===r&&(r={});var t=r,u=t.getDisplayName,p=void 0===u?function(e){return"ConnectAdvanced("+e+")"}:u,w=t.methodName,O=void 0===w?"connectAdvanced":w,C=t.renderCountProp,x=void 0===C?void 0:C,E=t.shouldHandleStateChanges,$=void 0===E||E,M=t.storeKey,Z=void 0===M?"store":M,R=(t.withRef,t.forwardRef),T=void 0!==R&&R,N=t.context,j=void 0===N?d.E:N,D=(0,o.Z)(t,l),k=j;return function(r){var t=r.displayName||r.name||"Component",u=p(t),d=(0,n.Z)({},D,{getDisplayName:p,methodName:O,renderCountProp:x,shouldHandleStateChanges:$,storeKey:Z,displayName:u,wrappedComponentName:t,WrappedComponent:r}),l=D.pure;var w=l?c.useMemo:function(e){return e()};function C(t){var u=(0,c.useMemo)((function(){var e=t.reactReduxForwardedRef,r=(0,o.Z)(t,v);return[t.context,e,r]}),[t]),a=u[0],p=u[1],l=u[2],O=(0,c.useMemo)((function(){return a&&a.Consumer&&(0,s.isContextConsumer)(i().createElement(a.Consumer,null))?a:k}),[a,k]),C=(0,c.useContext)(O),x=Boolean(t.store)&&Boolean(t.store.getState)&&Boolean(t.store.dispatch);Boolean(C)&&Boolean(C.store);var E=x?t.store:C.store,M=(0,c.useMemo)((function(){return function(r){return e(r.dispatch,d)}(E)}),[E]),Z=(0,c.useMemo)((function(){if(!$)return m;var e=(0,f.X)(E,x?null:C.subscription),r=e.notifyNestedSubs.bind(e);return[e,r]}),[E,x,C]),R=Z[0],T=Z[1],N=(0,c.useMemo)((function(){return x?C:(0,n.Z)({},C,{subscription:R})}),[x,C,R]),j=(0,c.useReducer)(b,y,g),D=j[0][0],q=j[1];if(D&&D.error)throw D.error;var F=(0,c.useRef)(),_=(0,c.useRef)(l),A=(0,c.useRef)(),L=(0,c.useRef)(!1),B=w((function(){return A.current&&l===_.current?A.current:M(E.getState(),l)}),[E,D,l]);S(h,[_,F,L,l,B,A,T]),S(P,[$,E,R,M,_,F,L,A,T,q],[E,R,M]);var H=(0,c.useMemo)((function(){return i().createElement(r,(0,n.Z)({},B,{ref:p}))}),[p,r,B]);return(0,c.useMemo)((function(){return $?i().createElement(O.Provider,{value:N},H):H}),[O,H,N])}var E=l?i().memo(C):C;if(E.WrappedComponent=r,E.displayName=C.displayName=u,T){var M=i().forwardRef((function(e,r){return i().createElement(E,(0,n.Z)({},e,{reactReduxForwardedRef:r}))}));return M.displayName=u,M.WrappedComponent=r,a()(M,r)}return a()(E,r)}}},57034:(e,r,t)=>{t.d(r,{Z:()=>y});var n=t(87462),o=t(63366),u=t(26685),a=t(35067),c=t(55112),i=t(11743),s=t(5532),f=t(38548),p=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function d(e,r,t){for(var n=r.length-1;n>=0;n--){var o=r[n](e);if(o)return o}return function(r,n){throw new Error("Invalid value of type "+typeof e+" for "+t+" argument when connecting component "+n.wrappedComponentName+".")}}function l(e,r){return e===r}function v(e){var r=void 0===e?{}:e,t=r.connectHOC,v=void 0===t?u.Z:t,y=r.mapStateToPropsFactories,m=void 0===y?i.ZP:y,b=r.mapDispatchToPropsFactories,S=void 0===b?c.ZP:b,h=r.mergePropsFactories,P=void 0===h?s.ZP:h,g=r.selectorFactory,w=void 0===g?f.ZP:g;return function(e,r,t,u){void 0===u&&(u={});var c=u,i=c.pure,s=void 0===i||i,f=c.areStatesEqual,y=void 0===f?l:f,b=c.areOwnPropsEqual,h=void 0===b?a.Z:b,g=c.areStatePropsEqual,O=void 0===g?a.Z:g,C=c.areMergedPropsEqual,x=void 0===C?a.Z:C,E=(0,o.Z)(c,p),$=d(e,m,"mapStateToProps"),M=d(r,S,"mapDispatchToProps"),Z=d(t,P,"mergeProps");return v(w,(0,n.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:$,initMapDispatchToProps:M,initMergeProps:Z,pure:s,areStatesEqual:y,areOwnPropsEqual:h,areStatePropsEqual:O,areMergedPropsEqual:x},E))}}const y=v()},55112:(e,r,t)=>{t.d(r,{ZP:()=>u});var n=t(63480),o=t(26343);const u=[function(e){return"function"==typeof e?(0,o.xv)(e,"mapDispatchToProps"):void 0},function(e){return e?void 0:(0,o.dX)((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?(0,o.dX)((function(r){return(0,n.Z)(e,r)})):void 0}]},11743:(e,r,t)=>{t.d(r,{ZP:()=>o});var n=t(26343);const o=[function(e){return"function"==typeof e?(0,n.xv)(e,"mapStateToProps"):void 0},function(e){return e?void 0:(0,n.dX)((function(){return{}}))}]},5532:(e,r,t)=>{t.d(r,{ZP:()=>u});var n=t(87462);function o(e,r,t){return(0,n.Z)({},t,e,r)}const u=[function(e){return"function"==typeof e?function(e){return function(r,t){t.displayName;var n,o=t.pure,u=t.areMergedPropsEqual,a=!1;return function(r,t,c){var i=e(r,t,c);return a?o&&u(i,n)||(n=i):(a=!0,n=i),n}}}(e):void 0},function(e){return e?void 0:function(){return o}}]},38548:(e,r,t)=>{t.d(r,{ZP:()=>c});var n=t(63366),o=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function u(e,r,t,n){return function(o,u){return t(e(o,u),r(n,u),u)}}function a(e,r,t,n,o){var u,a,c,i,s,f=o.areStatesEqual,p=o.areOwnPropsEqual,d=o.areStatePropsEqual,l=!1;function v(o,l){var v,y,m=!p(l,a),b=!f(o,u);return u=o,a=l,m&&b?(c=e(u,a),r.dependsOnOwnProps&&(i=r(n,a)),s=t(c,i,a)):m?(e.dependsOnOwnProps&&(c=e(u,a)),r.dependsOnOwnProps&&(i=r(n,a)),s=t(c,i,a)):b?(v=e(u,a),y=!d(v,c),c=v,y&&(s=t(c,i,a)),s):s}return function(o,f){return l?v(o,f):(c=e(u=o,a=f),i=r(n,a),s=t(c,i,a),l=!0,s)}}function c(e,r){var t=r.initMapStateToProps,c=r.initMapDispatchToProps,i=r.initMergeProps,s=(0,n.Z)(r,o),f=t(e,s),p=c(e,s),d=i(e,s);return(s.pure?a:u)(f,p,d,e,s)}},26343:(e,r,t)=>{function n(e){return function(r,t){var n=e(r,t);function o(){return n}return o.dependsOnOwnProps=!1,o}}function o(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function u(e,r){return function(r,t){t.displayName;var n=function(e,r){return n.dependsOnOwnProps?n.mapToProps(e,r):n.mapToProps(e)};return n.dependsOnOwnProps=!0,n.mapToProps=function(r,t){n.mapToProps=e,n.dependsOnOwnProps=o(e);var u=n(r,t);return"function"==typeof u&&(n.mapToProps=u,n.dependsOnOwnProps=o(u),u=n(r,t)),u},n}}t.d(r,{dX:()=>n,xv:()=>u})},56209:(e,r,t)=>{t.d(r,{zt:()=>n.Z,e$:()=>o.Z,ET:()=>u.E,$j:()=>a.Z,I0:()=>c.I,AS:()=>c.A,v9:()=>i.v,gR:()=>i.g,oR:()=>s.o,fw:()=>s.f,wU:()=>f.Z});var n=t(60682),o=t(26685),u=t(6526),a=t(57034),c=t(72307),i=t(59854),s=t(420),f=t(35067)},72307:(e,r,t)=>{t.d(r,{A:()=>u,I:()=>a});var n=t(6526),o=t(420);function u(e){void 0===e&&(e=n.E);var r=e===n.E?o.o:(0,o.f)(e);return function(){return r().dispatch}}var a=u()},2975:(e,r,t)=>{t.d(r,{x:()=>u});var n=t(96985),o=t(6526);function u(){return(0,n.useContext)(o.E)}},59854:(e,r,t)=>{t.d(r,{g:()=>s,v:()=>f});var n=t(96985),o=t(2975),u=t(86496),a=t(1881),c=t(6526),i=function(e,r){return e===r};function s(e){void 0===e&&(e=c.E);var r=e===c.E?o.x:function(){return(0,n.useContext)(e)};return function(e,t){void 0===t&&(t=i);var o=r(),c=function(e,r,t,o){var c,i=(0,n.useReducer)((function(e){return e+1}),0)[1],s=(0,n.useMemo)((function(){return(0,u.X)(t,o)}),[t,o]),f=(0,n.useRef)(),p=(0,n.useRef)(),d=(0,n.useRef)(),l=(0,n.useRef)(),v=t.getState();try{if(e!==p.current||v!==d.current||f.current){var y=e(v);c=void 0!==l.current&&r(y,l.current)?l.current:y}else c=l.current}catch(e){throw f.current&&(e.message+="\nThe error may be correlated with this previous error:\n"+f.current.stack+"\n\n"),e}return(0,a.L)((function(){p.current=e,d.current=v,l.current=c,f.current=void 0})),(0,a.L)((function(){function e(){try{var e=t.getState();if(e===d.current)return;var n=p.current(e);if(r(n,l.current))return;l.current=n,d.current=e}catch(e){f.current=e}i()}return s.onStateChange=e,s.trySubscribe(),e(),function(){return s.tryUnsubscribe()}}),[t,s]),c}(e,t,o.store,o.subscription);return(0,n.useDebugValue)(c),c}}var f=s()},420:(e,r,t)=>{t.d(r,{f:()=>a,o:()=>c});var n=t(96985),o=t(6526),u=t(2975);function a(e){void 0===e&&(e=o.E);var r=e===o.E?u.x:function(){return(0,n.useContext)(e)};return function(){return r().store}}var c=a()},50533:(e,r,t)=>{t.r(r),t.d(r,{Provider:()=>n.zt,ReactReduxContext:()=>n.ET,connect:()=>n.$j,connectAdvanced:()=>n.e$,createDispatchHook:()=>n.AS,createSelectorHook:()=>n.gR,createStoreHook:()=>n.fw,shallowEqual:()=>n.wU,useDispatch:()=>n.I0,useSelector:()=>n.v9,useStore:()=>n.oR,batch:()=>o.m});var n=t(56209),o=t(71679);(0,t(9256).F)(o.m)},86496:(e,r,t)=>{t.d(r,{X:()=>u});var n=t(9256);var o={notify:function(){},get:function(){return[]}};function u(e,r){var t,u=o;function a(){i.onStateChange&&i.onStateChange()}function c(){var o,c,i;t||(t=r?r.addNestedSub(a):e.subscribe(a),o=(0,n.k)(),c=null,i=null,u={clear:function(){c=null,i=null},notify:function(){o((function(){for(var e=c;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],r=c;r;)e.push(r),r=r.next;return e},subscribe:function(e){var r=!0,t=i={callback:e,next:null,prev:i};return t.prev?t.prev.next=t:c=t,function(){r&&null!==c&&(r=!1,t.next?t.next.prev=t.prev:i=t.prev,t.prev?t.prev.next=t.next:c=t.next)}}})}var i={addNestedSub:function(e){return c(),u.subscribe(e)},notifyNestedSubs:function(){u.notify()},handleChangeWrapper:a,isSubscribed:function(){return Boolean(t)},trySubscribe:c,tryUnsubscribe:function(){t&&(t(),t=void 0,u.clear(),u=o)},getListeners:function(){return u}};return i}},9256:(e,r,t)=>{t.d(r,{F:()=>o,k:()=>u});var n=function(e){e()},o=function(e){return n=e},u=function(){return n}},63480:(e,r,t)=>{function n(e,r){var t={},n=function(n){var o=e[n];"function"==typeof o&&(t[n]=function(){return r(o.apply(void 0,arguments))})};for(var o in e)n(o);return t}t.d(r,{Z:()=>n})},71679:(e,r,t)=>{t.d(r,{m:()=>n.unstable_batchedUpdates});var n=t(20563)},35067:(e,r,t)=>{function n(e,r){return e===r?0!==e||0!==r||1/e==1/r:e!=e&&r!=r}function o(e,r){if(n(e,r))return!0;if("object"!=typeof e||null===e||"object"!=typeof r||null===r)return!1;var t=Object.keys(e),o=Object.keys(r);if(t.length!==o.length)return!1;for(var u=0;u<t.length;u++)if(!Object.prototype.hasOwnProperty.call(r,t[u])||!n(e[t[u]],r[t[u]]))return!1;return!0}t.d(r,{Z:()=>o})},1881:(e,r,t)=>{t.d(r,{L:()=>o});var n=t(96985),o="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?n.useLayoutEffect:n.useEffect},88359:(e,r)=>{var t=60103,n=60106,o=60107,u=60108,a=60114,c=60109,i=60110,s=60112,f=60113,p=60120,d=60115,l=60116,v=60121,y=60122,m=60117,b=60129,S=60131;if("function"==typeof Symbol&&Symbol.for){var h=Symbol.for;t=h("react.element"),n=h("react.portal"),o=h("react.fragment"),u=h("react.strict_mode"),a=h("react.profiler"),c=h("react.provider"),i=h("react.context"),s=h("react.forward_ref"),f=h("react.suspense"),p=h("react.suspense_list"),d=h("react.memo"),l=h("react.lazy"),v=h("react.block"),y=h("react.server.block"),m=h("react.fundamental"),b=h("react.debug_trace_mode"),S=h("react.legacy_hidden")}function P(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:switch(e=e.type){case o:case a:case u:case f:case p:return e;default:switch(e=e&&e.$$typeof){case i:case s:case l:case d:case c:return e;default:return r}}case n:return r}}}r.isContextConsumer=function(e){return P(e)===i}},72973:(e,r,t)=>{e.exports=t(88359)},87462:(e,r,t)=>{function n(){return n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n.apply(this,arguments)}t.d(r,{Z:()=>n})},63366:(e,r,t)=>{function n(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(r,{Z:()=>n})}}]);