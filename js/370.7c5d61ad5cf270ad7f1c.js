(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[370],{40688:(e,n,t)=>{"use strict";t.d(n,{x9:()=>c,B$:()=>a,iF:()=>s,Ut:()=>l,j2:()=>f,$s:()=>p,Lu:()=>d,l8:()=>h,OS:()=>v});var r=function(){return r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},r.apply(this,arguments)},o=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function c(e){try{a(r.next(e))}catch(e){i(e)}}function u(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,u)}a((r=r.apply(e,n||[])).next())}))},i=function(e,n){var t,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=c.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(e,c)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},c=function(e,n,t){void 0===t&&(t=!1);try{var r=window.__scalprum__.factories[e];if(!r||!r.expiration)return;if(t||((new Date).getTime()-r.expiration.getTime())/1e3>window.__scalprum__.scalprumOptions.cacheTimeout)return void delete window.__scalprum__.factories[e];var o=r.modules[n];if(!n)return;return o}catch(t){return void console.warn("Unable to retriev cached module "+e+" "+n+". New module will be loaded.",t)}},u=function(e){delete window.__scalprum__.pendingInjections[e]},a=function(e,n,t){return window.__scalprum__.pendingLoading[e+"#"+n]=t,t.then((function(t){return delete window.__scalprum__.pendingLoading[e+"#"+n],t})).catch((function(){delete window.__scalprum__.pendingLoading[e+"#"+n]})),t},s=function(e,n){return window.__scalprum__.pendingLoading[e+"#"+n]},l=function(e,n,t,r){return void 0===r&&(r=!1),o(void 0,void 0,void 0,(function(){var o,u,l;return i(this,(function(i){return o=p(e).manifestLocation,u=c(e,n,r),(l=s(e,n))||u||!o||(l=h(o,e,e,t).then((function(){return v(e,n)}))),[2,a(e,n,Promise.resolve(l))]}))}))},f=function(e){var n=e.appsConfig,t=e.api,o=e.options,i=r({cacheTimeout:120},o);window.__scalprum__=r({appsConfig:n,pendingInjections:{},pendingLoading:{},factories:{},scalprumOptions:i},t)},p=function(e){return window.__scalprum__.appsConfig[e]},d=function(e,n){var t,r=void 0;if(!function(e){var n;return 0===(null===(n=document.querySelectorAll('script[src="'+e+'"]'))||void 0===n?void 0:n.length)}(n))return Promise.resolve([e,null===(t=document.querySelectorAll('script[src="'+n+'"]'))||void 0===t?void 0:t[0]]);var o=new Promise((function(t,o){(r=document.createElement("script")).src=n,r.id="container_entry_"+e,r.onload=function(){t([e,r])},r.onerror=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];console.log(e),o([e,r])}}));return void 0!==r&&document.body.appendChild(r),o};function h(e,n,t,r){return o(this,void 0,void 0,(function(){var c,a,s,l,f=this;return i(this,(function(p){switch(p.label){case 0:return(c=new Headers).append("Pragma","no-cache"),c.append("Cache-Control","no-cache"),c.append("expires","0"),[4,fetch(e,{method:"GET",headers:c})];case 1:return[4,p.sent().json()];case 2:return a=p.sent(),h=t,(s=window.__scalprum__.pendingInjections[h])?[2,s]:(l=Promise.all(Object.entries(a).filter((function(e){var n=e[0];return!t||n===t})).flatMap(r||function(e){return e[1].entry||e}).map((function(e){return o(f,void 0,void 0,(function(){var r;return i(this,(function(o){switch(o.label){case 0:return[4,d(n,e)];case 1:return r=o.sent(),u(t),[2,r]}}))}))}))),function(e,n){window.__scalprum__.pendingInjections[e]=n}(t,l),l.then((function(e){return u(t),e})),[2,l])}var h}))}))}function v(e,n){return o(this,void 0,void 0,(function(){var o,c,u,a;return i(this,(function(i){switch(i.label){case 0:if(void 0===e||0===e.length)throw new Error("Scope can't be undefined or empty");if(void 0===n||0===n.length)throw new Error("Module can't be undefined or empty");return n.startsWith("./")||console.warn("Your module "+n+" doesn't start with './' this indicates an error"),[4,t.I("default")];case 1:return i.sent(),[4,(o=window[e]).init(t.S.default)];case 2:return i.sent(),[4,window[e].get(n)];case 3:return c=i.sent(),window.__scalprum__.factories[e]||(window.__scalprum__.factories[e]={}),u={init:o.init,modules:r(r({},window.__scalprum__.factories[e].modules),(a={},a[n]=c(),a)),expiration:new Date},window.__scalprum__.factories[e]=u,[2,c()]}}))}))}},35092:(e,n,t)=>{"use strict";t.d(n,{y:()=>l});var r=t(96985),o=t.n(r),i=t(40688),c=t(21949),u=function(){return u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},u.apply(this,arguments)},a=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function c(e){try{a(r.next(e))}catch(e){i(e)}}function u(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,u)}a((r=r.apply(e,n||[])).next())}))},s=function(e,n){var t,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=c.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(e,c)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};function l(e,n,t){var r=this;return void 0===t&&(t=c.Z),function(){return a(r,void 0,void 0,(function(){var r,c;return s(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,(0,i.OS)(e,n)];case 1:return r=a.sent(),[3,3];case 2:return c=a.sent(),r={default:function(e){return o().createElement(t,u({},e,{error:c}))}},[3,3];case 3:return[2,r]}}))}))}}},21949:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(96985),o=t.n(r);const i=function(e){var n=e.error,t=e.errorInfo;return o().createElement("div",null,o().createElement("h2",null,"Error loading component"),(null==n?void 0:n.message)&&o().createElement("p",null,n.message),(null==t?void 0:t.componentStack)?o().createElement("pre",null,null==t?void 0:t.componentStack):(null==n?void 0:n.stack)&&o().createElement("pre",null,n.stack))}},45370:(e,n,t)=>{"use strict";t.r(n),t.d(n,{ScalprumComponent:()=>r.v,ScalprumProvider:()=>o.U,useScalprum:()=>i.R,ScalprumContext:()=>c.u,useModule:()=>u.b,useLoadModule:()=>a.J,default:()=>o.U});var r=t(44368),o=t(11786),i=t(75037),c=t(52347),u=t(43218),a=t(68321)},44368:(e,n,t)=>{"use strict";t.d(n,{v:()=>m});var r,o=t(96985),i=t.n(o),c=t(40688),u=t(18446),a=t.n(u),s=t(35092),l=t(21949),f=(r=function(e,n){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},r(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),p=function(){return p=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},p.apply(this,arguments)},d=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},h=function(e){var n=e.fallback,t=void 0===n?"loading":n,r=e.appName,u=e.scope,a=e.module,l=e.ErrorComponent,f=e.processor,h=e.innerRef,v=e.skipCache,m=void 0!==v&&v,y=d(e,["fallback","appName","scope","module","ErrorComponent","processor","innerRef","skipCache"]),w=(0,c.$s)(r),b=w.scriptLocation,_=w.manifestLocation,g=(0,o.useReducer)((function(e){return e+1}),0),E=g[0],O=g[1],k=(0,o.useState)(void 0),S=k[0],x=k[1];return(0,o.useEffect)((function(){var e=(0,c.x9)(u,a,m),n=!0,t=function(){return n&&x((function(){return function(e){return i().createElement(l,p({},e))}}))},o=(0,c.iF)(u,a);if(!e&&o)o.finally((function(){O()}));else if(e)try{n&&x((function(){return e.default}))}catch(e){t()}else if(b){var d=(0,c.Lu)(r,b).then((function(){n&&x((function(){return i().lazy((0,s.y)(u,a,l))}))})).catch(t);(0,c.B$)(u,a,d)}else if(_){var h=(0,c.l8)(_,r,u,f).then((function(){n&&x((function(){return i().lazy((0,s.y)(u,a,l))}))})).catch(t);(0,c.B$)(u,a,h)}return function(){n=!1}}),[r,u,m,E]),i().createElement(o.Suspense,{fallback:t},S?i().createElement(S,p({ref:h},y)):t)},v=function(e){function n(n){var t=e.call(this,n)||this;return t.state={hasError:!1},t.selfRepairAttempt=!1,t}return f(n,e),n.getDerivedStateFromError=function(){return{hasError:!0}},n.prototype.shouldComponentUpdate=function(e,n){return this.state.hasError!==n.hasError||(!a()(e,this.props)||!a()(n,this.state))},n.prototype.componentDidCatch=function(e,n){!0===this.selfRepairAttempt?(console.error("Scalprum encountered an error!",e.message),this.setState({error:e,errorInfo:n})):(console.warn("Scalprum failed to render component. Attempting to skip module cache."),this.setState({repairAttempt:!0}))},n.prototype.render=function(){var e=this,n=this.props,t=n.ErrorComponent,r=void 0===t?i().createElement(l.Z,p({},this.state)):t,o=d(n,["ErrorComponent"]),c=function(n){return i().cloneElement(r,p(p({},e.state),n))};return this.state.repairAttempt&&!this.selfRepairAttempt?(this.selfRepairAttempt=!0,i().createElement(h,p({},o,{skipCache:!0,ErrorComponent:c}))):this.state.hasError&&this.selfRepairAttempt?i().cloneElement(r,p({},this.state)):i().createElement(h,p({},o,{ErrorComponent:c}))},n.defaultProps={ErrorComponent:i().createElement(l.Z,null)},n}(i().Component),m=i().forwardRef((function(e,n){return i().createElement(v,p({},e,{innerRef:n}))}))},52347:(e,n,t)=>{"use strict";t.d(n,{u:()=>o});var r=t(96985),o=(0,r.createContext)({initialized:!1,config:{},api:void 0})},11786:(e,n,t)=>{"use strict";t.d(n,{U:()=>a});var r=t(96985),o=t.n(r),i=t(40688),c=t(52347),u=function(){return u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},u.apply(this,arguments)};function a(e){var n=e.config,t=e.children,a=e.api,s=(0,r.useRef)(!1),l=(0,r.useState)({initialized:!1,config:{},api:a}),f=l[0],p=l[1];return(0,r.useEffect)((function(){"object"==typeof n&&((0,i.j2)({appsConfig:n,api:a}),p((function(e){return u(u({},e),{initialized:!0,config:n})})),s.current=!0),"function"==typeof n&&Promise.resolve(n()).then((function(e){p((function(n){return u(u({},n),{initialized:!0,config:e})})),(0,i.j2)({appsConfig:e,api:a}),s.current=!0}))}),[n]),(0,r.useEffect)((function(){s.current&&p((function(e){return u(u({},e),{api:a})}))}),[a]),o().createElement(c.u.Provider,{value:f},t)}},68321:(e,n,t)=>{"use strict";t.d(n,{J:()=>a});var r=t(96985),o=t(40688),i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},i.apply(this,arguments)},c=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function c(e){try{a(r.next(e))}catch(e){i(e)}}function u(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,u)}a((r=r.apply(e,n||[])).next())}))},u=function(e,n){var t,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=c.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(e,c)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};function a(e,n,t){var a=this,s=e.appName,l=e.scope,f=e.module,p=e.processor;void 0===t&&(t={});var d=i({skipCache:!1},t),h=(0,o.$s)(s||l),v=h.scriptLocation,m=h.manifestLocation,y=(0,r.useState)(n),w=y[0],b=y[1],_=(0,r.useState)(),g=_[0],E=_[1],O=(0,o.x9)(l,f,d.skipCache),k=(0,r.useRef)(!0);return(0,r.useEffect)((function(){if(k.current)if(O)try{(0,o.OS)(l,f).then((function(e){b((function(){return e}))}))}catch(e){E((function(){return e}))}else v?(0,o.Lu)(s||l,v).then((function(){return c(a,void 0,void 0,(function(){var e;return u(this,(function(n){switch(n.label){case 0:return[4,(0,o.OS)(l,f)];case 1:return e=n.sent(),b((function(){return e})),[2]}}))}))})).catch((function(e){E((function(){return e}))})):m&&(0,o.l8)(m,s||l,l,p).then((function(){return c(a,void 0,void 0,(function(){var e;return u(this,(function(n){switch(n.label){case 0:return[4,(0,o.OS)(l,f)];case 1:return e=n.sent(),b((function(){return e})),[2]}}))}))})).catch((function(e){E((function(){return e}))}));return function(){k.current=!1}}),[s,l,O,d.skipCache]),[w,g]}},43218:(e,n,t)=>{"use strict";t.d(n,{b:()=>a});var r=t(96985),o=t(40688),i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},i.apply(this,arguments)},c=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function c(e){try{a(r.next(e))}catch(e){i(e)}}function u(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,u)}a((r=r.apply(e,n||[])).next())}))},u=function(e,n){var t,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=c.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(e,c)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};function a(e,n,t,a){var s=this;void 0===a&&(a={});var l=i({skipCache:!1},a),f=(0,r.useState)(t),p=f[0],d=f[1],h=(0,r.useCallback)((function(){return c(s,void 0,void 0,(function(){var t,r;return u(this,(function(i){switch(i.label){case 0:if(t=(0,o.x9)(e,n,l.skipCache))return[3,5];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,(0,o.OS)(e,n)];case 2:return r=i.sent(),[3,4];case 3:return i.sent(),console.error('Module not initialized! Module "'+n+'" was not found in "'+e+'" webpack scope. Make sure the remote container is loaded?'),[3,4];case 4:return[3,6];case 5:r=t,i.label=6;case 6:return d((function(){return r})),[2]}}))}))}),[e,n]);return(0,r.useEffect)((function(){h()}),[e,n]),p}},75037:(e,n,t)=>{"use strict";t.d(n,{R:()=>i});var r=t(96985),o=t(52347);function i(e){var n=(0,r.useContext)(o.u);return"function"==typeof e?e(n):n}},18446:(e,n,t)=>{var r=t(90939);e.exports=function(e,n){return r(e,n)}}}]);