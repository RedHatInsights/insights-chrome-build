(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[928,736],{87957:function(n,t){"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)},r=this&&this.__awaiter||function(n,t,e,r){return new(e||(e=Promise))((function(o,i){function a(n){try{c(r.next(n))}catch(n){i(n)}}function u(n){try{c(r.throw(n))}catch(n){i(n)}}function c(n){var t;n.done?o(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,u)}c((r=r.apply(n,t||[])).next())}))},o=this&&this.__generator||function(n,t){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(n,a)}catch(n){i=[6,n],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.processManifest=t.injectScript=t.getAppsByRootLocation=t.getAppData=t.getApp=t.initializeApp=t.unmountAll=t.unmountAppsFromRoute=t.removeActiveApp=t.setActiveApp=t.initialize=t.setPendingInjection=t.getScalprum=t.GLOBAL_NAMESPACE=void 0,t.GLOBAL_NAMESPACE="__scalprum__",t.getScalprum=function(){return window[t.GLOBAL_NAMESPACE]};var i=function(n){var t={};return Object.values(n).forEach((function(n){var e=n.rootLocation,r=n.name;e&&t[e]?t[e].push(r):e&&(t[e]=[r])})),t};t.setPendingInjection=function(n,e){window[t.GLOBAL_NAMESPACE].pendingInjections[n]=e},t.initialize=function(n){var r=n.scalpLets,o=n.api;window[t.GLOBAL_NAMESPACE]=e({apps:{},appsMetaData:r,activeApps:{},scalpletRoutes:i(r),pendingInjections:{}},o)},t.setActiveApp=function(n){window[t.GLOBAL_NAMESPACE].activeApps[n]=!0},t.removeActiveApp=function(n){window[t.GLOBAL_NAMESPACE].activeApps[n]=!1},t.unmountAppsFromRoute=function(n){var e;null===(e=window[t.GLOBAL_NAMESPACE].scalpletRoutes[n])||void 0===e||e.forEach((function(n){return window[t.GLOBAL_NAMESPACE].apps[n].unmount()}))},t.unmountAll=function(){Object.entries(window[t.GLOBAL_NAMESPACE].activeApps).filter((function(n){var e=n[0];n[1]&&window[t.GLOBAL_NAMESPACE].apps[e].unmount()}))},t.initializeApp=function(n){if(void 0===window[t.GLOBAL_NAMESPACE])throw"Cannot inititlize app. Scalprum was not inititliazed!";window[t.GLOBAL_NAMESPACE].apps[n.name]={mount:function(r){var o=e(e({},r),window[t.GLOBAL_NAMESPACE]);return t.setActiveApp(n.name),n.mount(o)},unmount:function(){t.removeActiveApp(n.name),n.unmount()},update:n.update,nodeId:n.id},window[t.GLOBAL_NAMESPACE].pendingInjections[n.name]()},t.getApp=function(n){return window[t.GLOBAL_NAMESPACE].apps[n]},t.getAppData=function(n){return window[t.GLOBAL_NAMESPACE].appsMetaData[n]},t.getAppsByRootLocation=function(n){return Object.keys(window[t.GLOBAL_NAMESPACE].appsMetaData).filter((function(e){return window[t.GLOBAL_NAMESPACE].appsMetaData[e].rootLocation===n})).map((function(n){return e(e({},window[t.GLOBAL_NAMESPACE].appsMetaData[n]),{name:n})}))},t.injectScript=function(n,e,r){void 0===r&&(r=!1);var o=void 0,i=new Promise((function(i,a){(o=document.createElement("script")).src=e,o.id=n,r?o.onload=function(){i([name,o])}:t.setPendingInjection(n,(function(){return i([name,o])})),o.onerror=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];console.log(e),r?a([e,o]):t.setPendingInjection(n,(function(){return a([e,o])}))}}));return void 0!==o&&document.body.appendChild(o),i},t.processManifest=function(n,e,i,a){return r(this,void 0,void 0,(function(){var r;return o(this,(function(o){switch(o.label){case 0:return[4,fetch(n)];case 1:return[4,o.sent().json()];case 2:return r=o.sent(),[2,Promise.all(Object.entries(r).filter((function(n){var t=n[0];return!i||t===i})).flatMap(a||function(n){return n[1].entry||n}).map((function(n){return t.injectScript(e,n,!0)})))]}}))}))}},36116:(n,t,e)=>{"use strict";e.d(t,{y:()=>c});var r=e(92950),o=e.n(r),i=function(n,t,e,r){return new(e||(e=Promise))((function(o,i){function a(n){try{c(r.next(n))}catch(n){i(n)}}function u(n){try{c(r.throw(n))}catch(n){i(n)}}function c(n){var t;n.done?o(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,u)}c((r=r.apply(n,t||[])).next())}))},a=function(n,t){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(n,a)}catch(n){i=[6,n],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},u=function(){return o().createElement("span",null,"Error while loading component!")};function c(n,t,r){var o=this;return void 0===r&&(r=u),function(){return i(o,void 0,void 0,(function(){var o,i,u;return a(this,(function(a){switch(a.label){case 0:return a.trys.push([0,4,,5]),[4,e.I("default")];case 1:return a.sent(),[4,window[n].init(e.S.default)];case 2:return a.sent(),[4,window[n].get(t)];case 3:return i=a.sent(),o=i(),[3,5];case 4:return u=a.sent(),console.error(u),o={default:r},[3,5];case 5:return[2,o]}}))}))}}},11736:(n,t,e)=>{"use strict";e.r(t),e.d(t,{ScalprumRoute:()=>r.Z,ScalprumLink:()=>o.K,ScalprumComponent:()=>i.v,ScalprumProvider:()=>a.U,useScalprum:()=>u.R,ScalprumContext:()=>c.u,default:()=>a.U});var r=e(48621),o=e(86462),i=e(5335),a=e(33462),u=e(62516),c=e(54302)},5335:(n,t,e)=>{"use strict";e.d(t,{v:()=>h});var r,o=e(92950),i=e.n(o),a=e(87957),u=e(18446),c=e.n(u),p=e(36116),l=(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])})(n,t)},function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}),s=function(){return(s=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)},f=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(e[r[o]]=n[r[o]])}return e},d=function(){return i().createElement("span",null,"Error while loading component!")},m=function(n){var t=n.fallback,e=void 0===t?"loading":t,r=n.appName,u=n.api,c=n.scope,l=n.module,d=n.ErrorComponent,m=n.processor,v=n.innerRef,h=f(n,["fallback","appName","api","scope","module","ErrorComponent","processor","innerRef"]),y=(0,a.getAppData)(r),A=y.scriptLocation,w=y.manifestLocation,E=(0,o.useState)(void 0),b=E[0],g=E[1],O=(0,o.useState)(),L=O[0],S=O[1];return(0,o.useEffect)((function(){var n=(0,a.getApp)(r);return n?(null==n||n.mount(u),g((function(){return i().lazy((0,p.y)(c,l,d))}))):A?(0,a.injectScript)(r,A).then((function(n){var t=n[1],e=(0,a.getApp)(r);null==e||e.mount(u),g((function(){return i().lazy((0,p.y)(c,l,d))})),S((function(){return t}))})).catch((function(){g((function(){return d}))})):w&&(0,a.processManifest)(w,r,c,m).then((function(n){S((function(){return n.map((function(n){return n[1]}))}));var t=(0,a.getApp)(r);null==t||t.mount(u),g((function(){return i().lazy((0,p.y)(c,l,d))}))})).catch((function(){g((function(){return d}))})),function(){var n=(0,a.getApp)(r);null==n||n.unmount(),L&&(Array.isArray(L)?L.forEach((function(n){return document.body.removeChild(n)})):document.body.removeChild(L))}}),[]),i().createElement(o.Suspense,{fallback:e},b?i().createElement(b,s({ref:v},h)):e)},v=function(n){function t(t){var e=n.call(this,t)||this;return e.state={hasError:!1},e}return l(t,n),t.getDerivedStateFromError=function(){return{hasError:!0}},t.prototype.shouldComponentUpdate=function(n,t){return this.state.hasError!==t.hasError||!c()(n,this.props)},t.prototype.componentDidCatch=function(n,t){console.error("Scalprum encountered an error!",n),console.log("Error info: ",JSON.stringify(t,null,2)),console.log("Component stack: ",t.componentStack)},t.prototype.render=function(){var n=this.props,t=n.ErrorComponent,e=void 0===t?i().createElement(d,null):t,r=f(n,["ErrorComponent"]);return this.state.hasError?e:i().createElement(m,s({},r,{ErrorComponent:function(){return i().createElement(o.Fragment,null,e)}}))},t.defaultProps={ErrorComponent:i().createElement(d,null)},t}(i().Component),h=i().forwardRef((function(n,t){return i().createElement(v,s({},n,{innerRef:t}))}))},54302:(n,t,e)=>{"use strict";e.d(t,{u:()=>o});var r=e(92950),o=(0,r.createContext)({initialized:!1,config:{},api:void 0})},86462:(n,t,e)=>{"use strict";e.d(t,{K:()=>c});var r=e(92950),o=e.n(r),i=(e(87957),e(334)),a=function(){return(a=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)},u=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(e[r[o]]=n[r[o]])}return e},c=function(n){var t=n.to,e=n.onClick,r=n.shouldUnmount,c=(n.unmount,u(n,["to","onClick","shouldUnmount","unmount"])),p=(0,i.useLocation)().pathname;return o().createElement(i.Link,a({onClick:function(n){void 0===r?"string"==typeof t&&p!==t||"object"==typeof t&&t.pathname:"boolean"==typeof r||"function"==typeof r&&r(p,t),e&&e(n)},to:t},c))}},33462:(n,t,e)=>{"use strict";e.d(t,{U:()=>c});var r=e(92950),o=e.n(r),i=e(87957),a=e(54302),u=function(){return(u=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)};function c(n){var t=n.config,e=n.children,c=n.api,p=(0,r.useState)({initialized:!1,config:{},api:c}),l=p[0],s=p[1];return(0,r.useEffect)((function(){"object"==typeof t&&((0,i.initialize)({scalpLets:t,api:c}),s((function(n){return u(u({},n),{initialized:!0,config:t})}))),"function"==typeof t&&Promise.resolve(t()).then((function(n){s((function(t){return u(u({},t),{initialized:!0,config:n})})),(0,i.initialize)({scalpLets:n,api:c})}))}),[t]),o().createElement(a.u.Provider,{value:l},e)}},48621:(n,t,e)=>{"use strict";e.d(t,{Z:()=>l});var r=e(87957),o=e(92950),i=e.n(o),a=e(12181),u=e(334),c=function(){return(c=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)},p=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(e[r[o]]=n[r[o]])}return e},l=function(n){var t,e=n.Placeholder,l=void 0===e?o.Fragment:e,s=n.elementId,f=n.appName,d=n.path,m=n.api,v=p(n,["Placeholder","elementId","appName","path","api"]),h=(null===(t=(0,r.getAppsByRootLocation)(d))||void 0===t?void 0:t[0]).scriptLocation;return(0,o.useEffect)((function(){var n=(0,r.getApp)(f),t=document.getElementById(s);if(n){var e=n.mount(m);(0,a.render)(e,t)}else(0,r.injectScript)(f,h).then((function(){var n=(0,r.getApp)(f).mount(m);(0,a.render)(n,t)}));return function(){(0,r.getApp)(f).unmount(),(0,a.unmountComponentAtNode)(t)}}),[d]),i().createElement(u.Route,c({},v,{path:d}),i().createElement("div",{id:s},i().createElement(l,null)))}},62516:(n,t,e)=>{"use strict";e.d(t,{R:()=>i});var r=e(92950),o=e(54302);function i(n){var t=(0,r.useContext)(o.u);return"function"==typeof n?n(t):t}},18446:(n,t,e)=>{var r=e(90939);n.exports=function(n,t){return r(n,t)}}}]);