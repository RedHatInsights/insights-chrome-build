(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[533],{6526:(e,r,n)=>{"use strict";n.d(r,{E:()=>o});var t=n(96985),o=n.n(t)().createContext(null)},60682:(e,r,n)=>{"use strict";n.d(r,{Z:()=>a});var t=n(96985),o=n.n(t),u=(n(45697),n(6526)),i=n(86496),s=n(1881);const a=function(e){var r=e.store,n=e.context,a=e.children,c=(0,t.useMemo)((function(){var e=new i.Z(r);return e.onStateChange=e.notifyNestedSubs,{store:r,subscription:e}}),[r]),p=(0,t.useMemo)((function(){return r.getState()}),[r]);(0,s.L)((function(){var e=c.subscription;return e.trySubscribe(),p!==r.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[c,p]);var d=n||u.E;return o().createElement(d.Provider,{value:c},a)}},26685:(e,r,n)=>{"use strict";n.d(r,{Z:()=>S});var t=n(22122),o=n(19756),u=n(8679),i=n.n(u),s=n(96985),a=n.n(s),c=n(59864),p=n(86496),d=n(1881),f=n(6526),l=[],v=[null,null];function h(e,r){var n=e[1];return[r.payload,n+1]}function m(e,r,n){(0,d.L)((function(){return e.apply(void 0,r)}),n)}function b(e,r,n,t,o,u,i){e.current=t,r.current=o,n.current=!1,u.current&&(u.current=null,i())}function P(e,r,n,t,o,u,i,s,a,c){if(e){var p=!1,d=null,f=function(){if(!p){var e,n,f=r.getState();try{e=t(f,o.current)}catch(e){n=e,d=e}n||(d=null),e===u.current?i.current||a():(u.current=e,s.current=e,i.current=!0,c({type:"STORE_UPDATED",payload:{error:n}}))}};n.onStateChange=f,n.trySubscribe(),f();return function(){if(p=!0,n.tryUnsubscribe(),n.onStateChange=null,d)throw d}}}var y=function(){return[null,0]};function S(e,r){void 0===r&&(r={});var n=r,u=n.getDisplayName,d=void 0===u?function(e){return"ConnectAdvanced("+e+")"}:u,S=n.methodName,g=void 0===S?"connectAdvanced":S,w=n.renderCountProp,C=void 0===w?void 0:w,E=n.shouldHandleStateChanges,Z=void 0===E||E,O=n.storeKey,x=void 0===O?"store":O,M=(n.withRef,n.forwardRef),R=void 0!==M&&M,N=n.context,T=void 0===N?f.E:N,q=(0,o.Z)(n,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]),D=T;return function(r){var n=r.displayName||r.name||"Component",u=d(n),f=(0,t.Z)({},q,{getDisplayName:d,methodName:g,renderCountProp:C,shouldHandleStateChanges:Z,storeKey:x,displayName:u,wrappedComponentName:n,WrappedComponent:r}),S=q.pure;var w=S?s.useMemo:function(e){return e()};function E(n){var u=(0,s.useMemo)((function(){var e=n.reactReduxForwardedRef,r=(0,o.Z)(n,["reactReduxForwardedRef"]);return[n.context,e,r]}),[n]),i=u[0],d=u[1],S=u[2],g=(0,s.useMemo)((function(){return i&&i.Consumer&&(0,c.isContextConsumer)(a().createElement(i.Consumer,null))?i:D}),[i,D]),C=(0,s.useContext)(g),E=Boolean(n.store)&&Boolean(n.store.getState)&&Boolean(n.store.dispatch);Boolean(C)&&Boolean(C.store);var O=E?n.store:C.store,x=(0,s.useMemo)((function(){return function(r){return e(r.dispatch,f)}(O)}),[O]),M=(0,s.useMemo)((function(){if(!Z)return v;var e=new p.Z(O,E?null:C.subscription),r=e.notifyNestedSubs.bind(e);return[e,r]}),[O,E,C]),R=M[0],N=M[1],T=(0,s.useMemo)((function(){return E?C:(0,t.Z)({},C,{subscription:R})}),[E,C,R]),q=(0,s.useReducer)(h,l,y),k=q[0][0],F=q[1];if(k&&k.error)throw k.error;var B=(0,s.useRef)(),H=(0,s.useRef)(S),W=(0,s.useRef)(),j=(0,s.useRef)(!1),A=w((function(){return W.current&&S===H.current?W.current:x(O.getState(),S)}),[O,k,S]);m(b,[H,B,j,S,A,W,N]),m(P,[Z,O,R,x,H,B,j,W,N,F],[O,R,x]);var L=(0,s.useMemo)((function(){return a().createElement(r,(0,t.Z)({},A,{ref:d}))}),[d,r,A]);return(0,s.useMemo)((function(){return Z?a().createElement(g.Provider,{value:T},L):L}),[g,L,T])}var O=S?a().memo(E):E;if(O.WrappedComponent=r,O.displayName=E.displayName=u,R){var M=a().forwardRef((function(e,r){return a().createElement(O,(0,t.Z)({},e,{reactReduxForwardedRef:r}))}));return M.displayName=u,M.WrappedComponent=r,i()(M,r)}return i()(O,r)}}},57034:(e,r,n)=>{"use strict";n.d(r,{Z:()=>v});var t=n(22122),o=n(19756),u=n(26685),i=n(35067),s=n(55112),a=n(11743),c=n(5532),p=n(38548);function d(e,r,n){for(var t=r.length-1;t>=0;t--){var o=r[t](e);if(o)return o}return function(r,t){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+t.wrappedComponentName+".")}}function f(e,r){return e===r}function l(e){var r=void 0===e?{}:e,n=r.connectHOC,l=void 0===n?u.Z:n,v=r.mapStateToPropsFactories,h=void 0===v?a.ZP:v,m=r.mapDispatchToPropsFactories,b=void 0===m?s.ZP:m,P=r.mergePropsFactories,y=void 0===P?c.ZP:P,S=r.selectorFactory,g=void 0===S?p.ZP:S;return function(e,r,n,u){void 0===u&&(u={});var s=u,a=s.pure,c=void 0===a||a,p=s.areStatesEqual,v=void 0===p?f:p,m=s.areOwnPropsEqual,P=void 0===m?i.Z:m,S=s.areStatePropsEqual,w=void 0===S?i.Z:S,C=s.areMergedPropsEqual,E=void 0===C?i.Z:C,Z=(0,o.Z)(s,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),O=d(e,h,"mapStateToProps"),x=d(r,b,"mapDispatchToProps"),M=d(n,y,"mergeProps");return l(g,(0,t.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:O,initMapDispatchToProps:x,initMergeProps:M,pure:c,areStatesEqual:v,areOwnPropsEqual:P,areStatePropsEqual:w,areMergedPropsEqual:E},Z))}}const v=l()},55112:(e,r,n)=>{"use strict";n.d(r,{ZP:()=>u});var t=n(63480),o=n(26343);const u=[function(e){return"function"==typeof e?(0,o.xv)(e,"mapDispatchToProps"):void 0},function(e){return e?void 0:(0,o.dX)((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?(0,o.dX)((function(r){return(0,t.Z)(e,r)})):void 0}]},11743:(e,r,n)=>{"use strict";n.d(r,{ZP:()=>o});var t=n(26343);const o=[function(e){return"function"==typeof e?(0,t.xv)(e,"mapStateToProps"):void 0},function(e){return e?void 0:(0,t.dX)((function(){return{}}))}]},5532:(e,r,n)=>{"use strict";n.d(r,{ZP:()=>u});var t=n(22122);function o(e,r,n){return(0,t.Z)({},n,e,r)}const u=[function(e){return"function"==typeof e?function(e){return function(r,n){n.displayName;var t,o=n.pure,u=n.areMergedPropsEqual,i=!1;return function(r,n,s){var a=e(r,n,s);return i?o&&u(a,t)||(t=a):(i=!0,t=a),t}}}(e):void 0},function(e){return e?void 0:function(){return o}}]},38548:(e,r,n)=>{"use strict";n.d(r,{ZP:()=>i});var t=n(19756);function o(e,r,n,t){return function(o,u){return n(e(o,u),r(t,u),u)}}function u(e,r,n,t,o){var u,i,s,a,c,p=o.areStatesEqual,d=o.areOwnPropsEqual,f=o.areStatePropsEqual,l=!1;function v(o,l){var v,h,m=!d(l,i),b=!p(o,u);return u=o,i=l,m&&b?(s=e(u,i),r.dependsOnOwnProps&&(a=r(t,i)),c=n(s,a,i)):m?(e.dependsOnOwnProps&&(s=e(u,i)),r.dependsOnOwnProps&&(a=r(t,i)),c=n(s,a,i)):b?(v=e(u,i),h=!f(v,s),s=v,h&&(c=n(s,a,i)),c):c}return function(o,p){return l?v(o,p):(s=e(u=o,i=p),a=r(t,i),c=n(s,a,i),l=!0,c)}}function i(e,r){var n=r.initMapStateToProps,i=r.initMapDispatchToProps,s=r.initMergeProps,a=(0,t.Z)(r,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),c=n(e,a),p=i(e,a),d=s(e,a);return(a.pure?u:o)(c,p,d,e,a)}},26343:(e,r,n)=>{"use strict";function t(e){return function(r,n){var t=e(r,n);function o(){return t}return o.dependsOnOwnProps=!1,o}}function o(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function u(e,r){return function(r,n){n.displayName;var t=function(e,r){return t.dependsOnOwnProps?t.mapToProps(e,r):t.mapToProps(e)};return t.dependsOnOwnProps=!0,t.mapToProps=function(r,n){t.mapToProps=e,t.dependsOnOwnProps=o(e);var u=t(r,n);return"function"==typeof u&&(t.mapToProps=u,t.dependsOnOwnProps=o(u),u=t(r,n)),u},t}}n.d(r,{dX:()=>t,xv:()=>u})},72307:(e,r,n)=>{"use strict";n.d(r,{A:()=>u,I:()=>i});var t=n(6526),o=n(420);function u(e){void 0===e&&(e=t.E);var r=e===t.E?o.o:(0,o.f)(e);return function(){return r().dispatch}}var i=u()},2975:(e,r,n)=>{"use strict";n.d(r,{x:()=>u});var t=n(96985),o=n(6526);function u(){return(0,t.useContext)(o.E)}},59854:(e,r,n)=>{"use strict";n.d(r,{g:()=>c,v:()=>p});var t=n(96985),o=n(2975),u=n(86496),i=n(1881),s=n(6526),a=function(e,r){return e===r};function c(e){void 0===e&&(e=s.E);var r=e===s.E?o.x:function(){return(0,t.useContext)(e)};return function(e,n){void 0===n&&(n=a);var o=r(),s=function(e,r,n,o){var s,a=(0,t.useReducer)((function(e){return e+1}),0)[1],c=(0,t.useMemo)((function(){return new u.Z(n,o)}),[n,o]),p=(0,t.useRef)(),d=(0,t.useRef)(),f=(0,t.useRef)(),l=(0,t.useRef)(),v=n.getState();try{if(e!==d.current||v!==f.current||p.current){var h=e(v);s=void 0!==l.current&&r(h,l.current)?l.current:h}else s=l.current}catch(e){throw p.current&&(e.message+="\nThe error may be correlated with this previous error:\n"+p.current.stack+"\n\n"),e}return(0,i.L)((function(){d.current=e,f.current=v,l.current=s,p.current=void 0})),(0,i.L)((function(){function e(){try{var e=n.getState(),t=d.current(e);if(r(t,l.current))return;l.current=t,f.current=e}catch(e){p.current=e}a()}return c.onStateChange=e,c.trySubscribe(),e(),function(){return c.tryUnsubscribe()}}),[n,c]),s}(e,n,o.store,o.subscription);return(0,t.useDebugValue)(s),s}}var p=c()},420:(e,r,n)=>{"use strict";n.d(r,{f:()=>i,o:()=>s});var t=n(96985),o=n(6526),u=n(2975);function i(e){void 0===e&&(e=o.E);var r=e===o.E?u.x:function(){return(0,t.useContext)(e)};return function(){return r().store}}var s=i()},50533:(e,r,n)=>{"use strict";n.r(r),n.d(r,{Provider:()=>t.Z,connectAdvanced:()=>o.Z,ReactReduxContext:()=>u.E,connect:()=>i.Z,batch:()=>d.m,useDispatch:()=>s.I,createDispatchHook:()=>s.A,useSelector:()=>a.v,createSelectorHook:()=>a.g,useStore:()=>c.o,createStoreHook:()=>c.f,shallowEqual:()=>f.Z});var t=n(60682),o=n(26685),u=n(6526),i=n(57034),s=n(72307),a=n(59854),c=n(420),p=n(9256),d=n(71679),f=n(35067);(0,p.F)(d.m)},86496:(e,r,n)=>{"use strict";n.d(r,{Z:()=>u});var t=n(9256),o={notify:function(){}};var u=function(){function e(e,r){this.store=e,this.parentSub=r,this.unsubscribe=null,this.listeners=o,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var r=e.prototype;return r.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},r.notifyNestedSubs=function(){this.listeners.notify()},r.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},r.isSubscribed=function(){return Boolean(this.unsubscribe)},r.trySubscribe=function(){var e,r,n;this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=(e=(0,t.k)(),r=null,n=null,{clear:function(){r=null,n=null},notify:function(){e((function(){for(var e=r;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],n=r;n;)e.push(n),n=n.next;return e},subscribe:function(e){var t=!0,o=n={callback:e,next:null,prev:n};return o.prev?o.prev.next=o:r=o,function(){t&&null!==r&&(t=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:r=o.next)}}}))},r.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=o)},e}()},9256:(e,r,n)=>{"use strict";n.d(r,{F:()=>o,k:()=>u});var t=function(e){e()},o=function(e){return t=e},u=function(){return t}},63480:(e,r,n)=>{"use strict";function t(e,r){var n={},t=function(t){var o=e[t];"function"==typeof o&&(n[t]=function(){return r(o.apply(void 0,arguments))})};for(var o in e)t(o);return n}n.d(r,{Z:()=>t})},71679:(e,r,n)=>{"use strict";n.d(r,{m:()=>t.unstable_batchedUpdates});var t=n(20563)},35067:(e,r,n)=>{"use strict";function t(e,r){return e===r?0!==e||0!==r||1/e==1/r:e!=e&&r!=r}function o(e,r){if(t(e,r))return!0;if("object"!=typeof e||null===e||"object"!=typeof r||null===r)return!1;var n=Object.keys(e),o=Object.keys(r);if(n.length!==o.length)return!1;for(var u=0;u<n.length;u++)if(!Object.prototype.hasOwnProperty.call(r,n[u])||!t(e[n[u]],r[n[u]]))return!1;return!0}n.d(r,{Z:()=>o})},1881:(e,r,n)=>{"use strict";n.d(r,{L:()=>o});var t=n(96985),o="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?t.useLayoutEffect:t.useEffect}}]);