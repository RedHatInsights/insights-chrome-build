"use strict";(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[370],{40688:(e,t,n)=>{n.d(t,{$s:()=>S,B$:()=>m,C6:()=>d,Jb:()=>s,QT:()=>p,Ut:()=>w,ag:()=>f,iF:()=>g,j2:()=>E,kV:()=>y,l8:()=>P,x9:()=>h});var r,o=n(33898),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},u=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))},a=function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},c="default",l=function(e,t){return e+"#"+t},s=function(){if(!r)throw new Error("Scalprum was not initialized! Call the initialize function first.");return r},f=function(){return u(void 0,void 0,void 0,(function(){return a(this,(function(e){return[2,n.I(c)]}))}))},p=function(){if(!Object.keys(n.S).includes(c))throw new Error("Attempt to access share scope object before its initialization");return n.S.default},d=function(e,t){t&&(v(e,t),t.finally((function(){b(e)})))},h=function(e,t){var n=l(e,t);try{var r=s().exposedModules[n];if(!t)return{};var o=e+"#"+t,i=y(o);return i?{cachedModule:r,prefetchPromise:i}:(null==r?void 0:r.prefetch)?(d(o,r.prefetch(s().api)),{cachedModule:r,prefetchPromise:y(o)}):{cachedModule:r}}catch(n){return console.warn("Unable to retrieve cached module "+e+" "+t+". New module will be loaded.",n),{}}},v=function(e,t){s().pendingPrefetch[e]=t},y=function(e){var t;return null===(t=s().pendingPrefetch)||void 0===t?void 0:t[e]},b=function(e){delete s().pendingPrefetch[e]},m=function(e,t,n){return s().pendingLoading[e+"#"+t]=n,n.then((function(n){return delete s().pendingLoading[e+"#"+t],n})).catch((function(){delete s().pendingLoading[e+"#"+t]})),n},g=function(e,t){return s().pendingLoading[e+"#"+t]},w=function(e,t,n){return u(void 0,void 0,void 0,(function(){var r,o,i,u;return a(this,(function(a){return r=S(e).manifestLocation,o=h(e,t).cachedModule,!(i=g(e,t))&&0==Object.keys(o||{}).length&&r&&(i=P(r,e,t,n).then((function(){return s().pluginStore.getExposedModule(e,t)}))),!y(u=e+"#"+t)&&(null==o?void 0:o.prefetch)&&d(u,o.prefetch(s().api)),[2,m(e,t,Promise.resolve(i))]}))}))},E=function(e){var t=e.appsConfig,n=e.api,u=e.options,a=e.pluginStoreFeatureFlags,c=void 0===a?{}:a,l=e.pluginLoaderOptions,s=void 0===l?{}:l,f=e.pluginStoreOptions,d=void 0===f?{}:f;if(r)return r;var h=i({cacheTimeout:120},u),v=new o.PluginLoader(i({sharedScope:p(),getPluginEntryModule:function(e){var t=e.name;return window[t]}},s)),y=new o.PluginStore(d);return v.registerPluginEntryCallback(),y.setLoader(v),y.setFeatureFlags(c),r={appsConfig:t,pendingInjections:{},pendingLoading:{},pendingPrefetch:{},exposedModules:{},scalprumOptions:h,api:n||{},pluginStore:y}},S=function(e){return s().appsConfig[e]},x=function(e,t){s().exposedModules[e]=t},k=function(e){delete s().pendingInjections[e]};function P(e,t,n,r){return u(this,void 0,void 0,(function(){var o,i,c,f=this;return a(this,(function(p){switch(p.label){case 0:return o=function(e){return s().pendingInjections[e]}(t),i=s().pluginStore,o?[4,o]:[3,3];case 1:return p.sent(),[4,i.getExposedModule(t,n)];case 2:return c=p.sent(),x(l(t,n),c),[2];case 3:return o=new Promise((function(o,c){return u(f,void 0,void 0,(function(){var u,s,f,p,d,h,v,y;return a(this,(function(a){switch(a.label){case 0:return(u=new Headers).append("Pragma","no-cache"),u.append("Cache-Control","no-cache"),u.append("expires","0"),[4,fetch(e,{method:"GET",headers:u})];case 1:if((s=a.sent()).ok)return[3,7];f="Unable to process manifest",p=s.clone(),console.log("LINKED BITDS"),a.label=2;case 2:return a.trys.push([2,4,,6]),[4,p.json()];case 3:return f=a.sent(),[3,6];case 4:return a.sent(),[4,p.text()];case 5:return f=a.sent(),[3,6];case 6:return[2,c(f)];case 7:return[4,s.json()];case 8:return d=a.sent(),h=r?r(d):d[t].entry,[4,i.loadPlugin(document.location.origin,{extensions:[],loadScripts:h,name:t,registrationMethod:"custom",version:"1.0.0"})];case 9:a.sent(),a.label=10;case 10:return a.trys.push([10,12,,13]),[4,i.getExposedModule(t,n)];case 11:return v=a.sent(),x(l(t,n),v),[3,13];case 12:return y=a.sent(),k(t),[2,c(y)];case 13:return o(),[2]}}))}))})),function(e,t){s().pendingInjections[e]=t}(t,o),[4,o];case 4:return p.sent(),k(t),[2]}}))}))}},35092:(e,t,n)=>{n.d(t,{y:()=>u});var r=n(40688),o=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))},i=function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};function u(e,t){return o(this,void 0,void 0,(function(){var n,o,u;return i(this,(function(i){switch(i.label){case 0:return n=(0,r.Jb)().pluginStore,o=void 0,u=(0,r.x9)(e,t).cachedModule,(o=u)?[3,2]:[4,n.getExposedModule(e,t)];case 1:o=i.sent(),i.label=2;case 2:return[2,{prefetch:o.prefetch,component:o.default}]}}))}))}},21949:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(96985),o=n.n(r);const i=function(e){var t=e.error,n=e.errorInfo;return o().createElement("div",null,o().createElement("h2",null,"Error loading component"),(null==t?void 0:t.message)&&o().createElement("p",null,t.message),(null==n?void 0:n.componentStack)?o().createElement("pre",null,null==n?void 0:n.componentStack):(null==t?void 0:t.stack)&&o().createElement("pre",null,t.stack))}},45370:(e,t,n)=>{n.r(t),n.d(t,{PrefetchContext:()=>s.q,PrefetchProvider:()=>s.O,ScalprumComponent:()=>r.v,ScalprumContext:()=>u.u,ScalprumProvider:()=>o.U,default:()=>o.U,useLoadModule:()=>c.J,useModule:()=>a.b,usePrefetch:()=>l.F,useScalprum:()=>i.R});var r=n(44368),o=n(11786),i=n(75037),u=n(52347),a=n(43218),c=n(68321),l=n(23128),s=n(58868)},58868:(e,t,n)=>{n.d(t,{O:()=>u,q:()=>i});var r=n(96985),o=n.n(r),i=(0,r.createContext)(void 0),u=function(e){var t=e.children,n=e.prefetchPromise;return o().createElement(i.Provider,{value:n},t)}},44368:(e,t,n)=>{n.d(t,{v:()=>w});var r,o=n(96985),i=n.n(o),u=n(40688),a=n(18446),c=n.n(a),l=n(35092),s=n(21949),f=n(58868),p=n(75037),d=(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),h=function(){return h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},h.apply(this,arguments)},v=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))},y=function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};var m=function(e){var t=e.fallback,n=void 0===t?"loading":t,r=e.scope,a=e.module,c=e.ErrorComponent,s=e.processor,d=e.innerRef,m=e.skipCache,g=void 0!==m&&m,w=b(e,["fallback","scope","module","ErrorComponent","processor","innerRef","skipCache"]),E=(0,u.$s)(r).manifestLocation,S=(0,o.useReducer)((function(e){return e+1}),0),x=S[0],k=S[1],P=(0,o.useState)(void 0),C=P[0],O=P[1],j=(0,o.useState)(),M=j[0],R=j[1],L=(0,o.useState)(),A=L[0],I=L[1];if(A)throw A;var T=(0,p.R)();(0,o.useEffect)((function(){var e=r+"#"+a,t=(0,u.x9)(r,a),n=t.cachedModule,o=t.prefetchPromise;R(o);var f,p=!0,d=function(e){p&&(I(e),O((function(){return function(t){return i().createElement(c,h({error:e},t))}})))},b=(0,u.iF)(r,a);if(!n&&b)b.finally((function(){k()}));else if(n)try{if(p&&O((function(){return n.default})),f=n.prefetch){var m=(0,u.kV)(e)||f(T);R(m),(0,u.C6)(e,m)}}catch(e){d(e)}else if(E){var g=(0,u.l8)(E,r,a,s).then((function(){return f=function(e,t,n,r){return v(this,void 0,void 0,(function(){var o,i,u;return y(this,(function(a){switch(a.label){case 0:return[4,(0,l.y)(e,t)];case 1:return o=a.sent(),i=o.prefetch,u=o.component,n&&r((function(){return u})),[2,i]}}))}))}(r,a,p,O),f.then((function(t){if(t){var n=(0,u.kV)(e)||t(T);R(n),(0,u.C6)(e,n)}})),f})).catch(d);(0,u.B$)(r,a,g)}return function(){p=!1,I(void 0)}}),[r,g,x]);var _=(0,o.useRef)(!1);return(0,o.useEffect)((function(){_.current&&R(void 0),_.current=!0}),[r,a]),i().createElement(f.O,{prefetchPromise:M},i().createElement(o.Suspense,{fallback:n},C?i().createElement(C,h({ref:d},w)):n))},g=function(e){function t(t){var n=e.call(this,t)||this;return n.state={hasError:!1},n.selfRepairAttempt=!1,n}return d(t,e),t.getDerivedStateFromError=function(){return{hasError:!0}},t.prototype.shouldComponentUpdate=function(e,t){return this.state.hasError!==t.hasError||(!c()(e,this.props)||!c()(t,this.state))},t.prototype.componentDidCatch=function(e,t){!0===this.selfRepairAttempt?(console.error("Scalprum encountered an error!",(null==e?void 0:e.message)||e),this.setState({error:e,errorInfo:t})):(console.warn("Scalprum failed to render component. Attempting to skip module cache."),this.setState({repairAttempt:!0}))},t.prototype.render=function(){var e=this,t=this.props,n=t.ErrorComponent,r=void 0===n?i().createElement(s.Z,h({},this.state)):n,o=b(t,["ErrorComponent"]),u=function(t){return i().cloneElement(r,h(h({},e.state),t))};return this.state.repairAttempt&&!this.selfRepairAttempt?(this.selfRepairAttempt=!0,i().createElement(m,h({},o,{skipCache:!0,ErrorComponent:u}))):this.state.hasError&&this.selfRepairAttempt?i().cloneElement(r,h({},this.state)):i().createElement(m,h({},o,{ErrorComponent:u}))},t.defaultProps={ErrorComponent:i().createElement(s.Z,null)},t}(i().Component),w=i().forwardRef((function(e,t){return i().createElement(g,h({},e,{innerRef:t}))}))},52347:(e,t,n)=>{n.d(t,{u:()=>o});var r=n(96985),o=(0,r.createContext)({initialized:!1,config:{},api:{},pluginStore:{}})},11786:(e,t,n)=>{n.d(t,{U:()=>l});var r=n(96985),o=n.n(r),i=n(40688),u=n(52347),a=n(33898),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c.apply(this,arguments)};function l(e){var t=e.config,n=e.children,l=e.api,s=e.pluginSDKOptions,f=(0,r.useMemo)((function(){return(0,i.j2)(c({appsConfig:t,api:l},s))}),[]);return o().createElement(u.u.Provider,{value:{config:t,api:l,initialized:!0,pluginStore:f.pluginStore}},o().createElement(a.PluginStoreProvider,{store:f.pluginStore},n))}},68321:(e,t,n)=>{n.d(t,{J:()=>a});var r=n(96985),o=n(40688),i=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))},u=function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};function a(e,t){var n=this,a=e.scope,c=e.module,l=e.processor,s=(0,o.$s)(a).manifestLocation,f=(0,r.useState)(t),p=f[0],d=f[1],h=(0,r.useState)(),v=h[0],y=h[1],b=(0,o.x9)(a,c).cachedModule,m=(0,r.useRef)(!0),g=(0,o.Jb)().pluginStore;return(0,r.useEffect)((function(){if(m.current)if(b)try{g.getExposedModule(a,c).then((function(e){d((function(){return e}))}))}catch(e){y((function(){return e}))}else s&&(0,o.l8)(s,a,c,l).then((function(){return i(n,void 0,void 0,(function(){var e;return u(this,(function(t){switch(t.label){case 0:return[4,g.getExposedModule(a,c)];case 1:return e=t.sent(),d((function(){return e})),[2]}}))}))})).catch((function(e){y((function(){return e}))}));return function(){m.current=!1}}),[a,b]),[p,v]}},43218:(e,t,n)=>{n.d(t,{b:()=>a});var r=n(96985),o=n(40688),i=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))},u=function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};function a(e,t,n){var a=this,c=(0,r.useState)(n),l=c[0],s=c[1],f=(0,o.Jb)().pluginStore,p=(0,r.useCallback)((function(){return i(a,void 0,void 0,(function(){var n,r;return u(this,(function(i){switch(i.label){case 0:if(n=(0,o.x9)(e,t).cachedModule)return[3,5];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,f.getExposedModule(e,t)];case 2:return r=i.sent(),[3,4];case 3:return i.sent(),console.error('Module not initialized! Module "'+t+'" was not found in "'+e+'" webpack scope. Make sure the remote container is loaded?'),[3,4];case 4:return[3,6];case 5:r=n,i.label=6;case 6:return s((function(){return r})),[2]}}))}))}),[e,t]);return(0,r.useEffect)((function(){p()}),[e,t]),l}},23128:(e,t,n)=>{n.d(t,{F:()=>a});var r=n(96985),o=n(58868),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},u={data:void 0,ready:!1,error:void 0},a=function(){var e=(0,r.useState)(u),t=e[0],n=e[1],a=(0,r.useContext)(o.q);return(0,r.useEffect)((function(){t.ready=!1,null==a||a.then((function(e){n(i(i({},t),{error:void 0,data:e,ready:!0}))})).catch((function(e){n(i(i({},t),{ready:!0,data:void 0,error:e}))}))}),[a]),t}},75037:(e,t,n)=>{n.d(t,{R:()=>i});var r=n(96985),o=n(52347);function i(e){var t=(0,r.useContext)(o.u);return"function"==typeof e?e(t):t}}}]);