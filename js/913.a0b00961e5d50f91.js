(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[913],{80913:(t,e,r)=>{(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};e.r(n),e.d(n,{FlagContext:()=>s,FlagProvider:()=>a,InMemoryStorageProvider:()=>o.InMemoryStorageProvider,LocalStorageProvider:()=>o.LocalStorageProvider,UnleashClient:()=>o.UnleashClient,default:()=>d,useFlag:()=>u,useFlags:()=>c,useFlagsStatus:()=>l,useUnleashClient:()=>p,useUnleashContext:()=>h,useVariant:()=>f});const o=r(14009),i=r(96985),s=e.n(i)().createContext(null),a=function(t){var e=t.config,r=t.children,n=t.unleashClient,a=t.startClient,u=void 0===a||a,c=i.useRef(n),l=i.useState(!1),f=l[0],h=l[1],p=i.useState(null),d=p[0],v=p[1],y=i.useRef(null),g=i.useRef(null);e||n||console.warn("You must provide either a config or an unleash client to the flag provider. If you are initializing the client in useEffect, you can avoid this warning by\n      checking if the client exists before rendering."),c.current||(c.current=new o.UnleashClient(e));var b=function(t){y.current=t,null===y.current&&v(t)},m=function(){h(!0)};g.current||(c.current.on("ready",m),c.current.on("error",b),g.current="set"),i.useEffect((function(){return(u||!n)&&(c.current.stop(),c.current.start()),function(){c.current&&(c.current.off("error",b),c.current.off("ready",m),c.current.stop())}}),[]);var w=function(t){return void 0,void 0,r=function(){return function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(e){switch(e.label){case 0:return[4,c.current.updateContext(t)];case 1:return e.sent(),[2]}}))},new((e=void 0)||(e=Promise))((function(t,n){function o(t){try{s(r.next(t))}catch(t){n(t)}}function i(t){try{s(r.throw(t))}catch(t){n(t)}}function s(r){var n;r.done?t(r.value):(n=r.value,n instanceof e?n:new e((function(t){t(n)}))).then(o,i)}s((r=r.apply(undefined,[])).next())}));var e,r},E=function(t){return c.current.isEnabled(t)},x=function(t){return c.current.getVariant(t)},S=function(t,e,r){return c.current.on(t,e,r)},I=i.useMemo((function(){return{on:S,updateContext:w,isEnabled:E,getVariant:x,client:c.current,flagsReady:f,flagsError:d,setFlagsReady:h,setFlagsError:v}}),[f,d]);return i.createElement(s.Provider,{value:I},r)},u=function(t){var e=(0,i.useContext)(s),r=e.isEnabled,n=e.client,o=(0,i.useState)(!!r(t)),a=o[0],u=o[1],c=(0,i.useRef)();return c.current=a,(0,i.useEffect)((function(){n&&(n.on("update",(function(){var e=r(t);e!==c.current&&(c.current=e,u(!!e))})),n.on("ready",(function(){var e=r(t);c.current=e,u(e)})))}),[n]),a},c=function(){return(0,i.useContext)(s).client.getAllToggles()},l=function(){var t=(0,i.useContext)(s);return{flagsReady:t.flagsReady,flagsError:t.flagsError}},f=function(t){var e=(0,i.useContext)(s),r=e.getVariant,n=e.client,o=(0,i.useState)(r(t)),a=o[0],u=o[1],c=(0,i.useRef)();return c.current=a,(0,i.useEffect)((function(){n&&(n.on("update",(function(){var e=r(t);c.current.name===e.name&&c.current.enabled===e.enabled||(u(e),c.current=e)})),n.on("ready",(function(){var e=r(t);c.current.name=e.name,c.current.enabled=e.enabled,u(e)})))}),[n]),a||{}},h=function(){return(0,i.useContext)(s).updateContext},p=function(){return(0,i.useContext)(s).client},d=a;t.exports=n})()},74279:t=>{function e(){}e.prototype={on:function(t,e,r){var n=this.e||(this.e={});return(n[t]||(n[t]=[])).push({fn:e,ctx:r}),this},once:function(t,e,r){var n=this;function o(){n.off(t,o),e.apply(r,arguments)}return o._=e,this.on(t,o,r)},emit:function(t){for(var e=[].slice.call(arguments,1),r=((this.e||(this.e={}))[t]||[]).slice(),n=0,o=r.length;n<o;n++)r[n].fn.apply(r[n].ctx,e);return this},off:function(t,e){var r=this.e||(this.e={}),n=r[t],o=[];if(n&&e)for(var i=0,s=n.length;i<s;i++)n[i].fn!==e&&n[i].fn._!==e&&o.push(n[i]);return o.length?r[t]=o:delete r[t],this}},t.exports=e,t.exports.TinyEmitter=e},82562:function(t,e,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var o=r(41187),i=function(){function t(){}return t.prototype.generateEventId=function(){return(0,o.v4)()},t.prototype.createImpressionEvent=function(t,e,r,o,i,s){var a=this.createBaseEvent(t,e,r,o,i);return s?n(n({},a),{variant:s}):a},t.prototype.createBaseEvent=function(t,e,r,n,o){return{eventType:n,eventId:this.generateEventId(),context:t,enabled:e,featureName:r,impressionData:o}},t}();e.default=i},14009:function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)},s=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{u(n.next(t))}catch(t){i(t)}}function a(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((n=n.apply(t,e||[])).next())}))},a=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},u=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0}),e.InMemoryStorageProvider=e.LocalStorageProvider=e.UnleashClient=e.resolveFetch=e.EVENTS=void 0;var c=r(74279),l=r(88524),f=r(8475);e.InMemoryStorageProvider=f.default;var h=r(6432);e.LocalStorageProvider=h.default;var p=r(82562),d=r(75581),v=["userId","sessionId","remoteAddress"];e.EVENTS={INIT:"initialized",ERROR:"error",READY:"ready",UPDATE:"update",IMPRESSION:"impression"};var y="isEnabled",g="getVariant",b={name:"disabled",enabled:!1},m="repo";e.resolveFetch=function(){try{if("fetch"in window)return fetch.bind(window);if("fetch"in globalThis)return fetch.bind(globalThis)}catch(t){console.error('Unleash failed to resolve "fetch"',t)}};var w=function(t){function r(r){var n=r.storageProvider,o=r.url,s=r.clientKey,a=r.disableRefresh,u=void 0!==a&&a,c=r.refreshInterval,f=void 0===c?30:c,d=r.metricsInterval,v=void 0===d?30:d,y=r.disableMetrics,g=void 0!==y&&y,b=r.appName,m=r.environment,w=void 0===m?"default":m,E=r.context,x=r.fetch,S=void 0===x?(0,e.resolveFetch)():x,I=r.bootstrap,T=r.bootstrapOverride,O=void 0===T||T,_=r.headerName,R=void 0===_?"Authorization":_,k=r.customHeaders,N=void 0===k?{}:k,P=r.impressionDataAll,C=void 0!==P&&P,U=r.usePOSTrequests,A=void 0!==U&&U,Z=t.call(this)||this;if(Z.toggles=[],Z.etag="",Z.readyEventEmitted=!1,Z.usePOSTrequests=!1,!o)throw new Error("url is required");if(!s)throw new Error("clientKey is required");if(!b)throw new Error("appName is required.");return Z.eventsHandler=new p.default,Z.impressionDataAll=C,Z.toggles=I&&I.length>0?I:[],Z.url=o instanceof URL?o:new URL(o),Z.clientKey=s,Z.headerName=R,Z.customHeaders=N,Z.storage=n||new h.default,Z.refreshInterval=u?0:1e3*f,Z.context=i({appName:b,environment:w},E),Z.usePOSTrequests=A,Z.ready=new Promise((function(t){Z.init().then(t).catch((function(r){console.error(r),Z.emit(e.EVENTS.ERROR,r),t()}))})),S||console.error('Unleash: You must either provide your own "fetch" implementation or run in an environment where "fetch" is available.'),Z.fetch=S,Z.bootstrap=I&&I.length>0?I:void 0,Z.bootstrapOverride=O,Z.metrics=new l.default({onError:Z.emit.bind(Z,e.EVENTS.ERROR),appName:b,metricsInterval:v,disableMetrics:g,url:Z.url,clientKey:s,fetch:S,headerName:R}),Z}return o(r,t),r.prototype.getAllToggles=function(){return u([],this.toggles,!0)},r.prototype.isEnabled=function(t){var r,n=this.toggles.find((function(e){return e.name===t})),o=!!n&&n.enabled;if(this.metrics.count(t,o),(null==n?void 0:n.impressionData)||this.impressionDataAll){var i=this.eventsHandler.createImpressionEvent(this.context,o,t,y,null!==(r=null==n?void 0:n.impressionData)&&void 0!==r?r:void 0);this.emit(e.EVENTS.IMPRESSION,i)}return o},r.prototype.getVariant=function(t){var r,n=this.toggles.find((function(e){return e.name===t})),o=(null==n?void 0:n.enabled)||!1,i=n?n.variant:b;if(this.metrics.count(t,!0),(null==n?void 0:n.impressionData)||this.impressionDataAll){var s=this.eventsHandler.createImpressionEvent(this.context,o,t,g,null!==(r=null==n?void 0:n.impressionData)&&void 0!==r?r:void 0,i.name);this.emit(e.EVENTS.IMPRESSION,s)}return i},r.prototype.updateContext=function(t){return s(this,void 0,void 0,(function(){var e;return a(this,(function(r){switch(r.label){case 0:return(t.appName||t.environment)&&console.warn("appName and environment are static. They can't be updated with updateContext."),e={environment:this.context.environment,appName:this.context.appName,sessionId:this.context.sessionId},this.context=i(i({},e),t),this.timerRef?[4,this.fetchToggles()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2]}}))}))},r.prototype.getContext=function(){return i({},this.context)},r.prototype.setContextField=function(t,e){var r,n;if(v.includes(t))this.context=i(i({},this.context),((r={})[t]=e,r));else{var o=i(i({},this.context.properties),((n={})[t]=e,n));this.context=i(i({},this.context),{properties:o})}this.timerRef&&this.fetchToggles()},r.prototype.init=function(){return s(this,void 0,void 0,(function(){var t,r;return a(this,(function(n){switch(n.label){case 0:return[4,this.resolveSessionId()];case 1:return t=n.sent(),this.context=i({sessionId:t},this.context),r=this,[4,this.storage.get(m)];case 2:return r.toggles=n.sent()||[],!this.bootstrap||!this.bootstrapOverride&&0!==this.toggles.length?[3,4]:[4,this.storage.save(m,this.bootstrap)];case 3:n.sent(),this.toggles=this.bootstrap,this.emit(e.EVENTS.READY),n.label=4;case 4:return this.emit(e.EVENTS.INIT),[2]}}))}))},r.prototype.start=function(){return s(this,void 0,void 0,(function(){var t,e=this;return a(this,(function(r){switch(r.label){case 0:return this.timerRef?(console.error("Unleash SDK has already started, if you want to restart the SDK you should call client.stop() before starting again."),[2]):[4,this.ready];case 1:return r.sent(),this.metrics.start(),t=this.refreshInterval,[4,this.fetchToggles()];case 2:return r.sent(),t>0&&(this.timerRef=setInterval((function(){return e.fetchToggles()}),t)),[2]}}))}))},r.prototype.stop=function(){this.timerRef&&(clearInterval(this.timerRef),this.timerRef=void 0),this.metrics.stop()},r.prototype.resolveSessionId=function(){return s(this,void 0,void 0,(function(){var t;return a(this,(function(e){switch(e.label){case 0:return this.context.sessionId?[2,this.context.sessionId]:[3,1];case 1:return[4,this.storage.get("sessionId")];case 2:return(t=e.sent())?[3,4]:(t=Math.floor(1e9*Math.random()),[4,this.storage.save("sessionId",t)]);case 3:e.sent(),e.label=4;case 4:return[2,t]}}))}))},r.prototype.getHeaders=function(){var t,e=((t={})[this.headerName]=this.clientKey,t.Accept="application/json",t["Content-Type"]="application/json",t["If-None-Match"]=this.etag,t);return Object.entries(this.customHeaders).filter(d.notNullOrUndefined).forEach((function(t){var r=t[0],n=t[1];return e[r]=n})),e},r.prototype.storeToggles=function(t){return s(this,void 0,void 0,(function(){return a(this,(function(r){switch(r.label){case 0:return this.toggles=t,this.emit(e.EVENTS.UPDATE),[4,this.storage.save(m,t)];case 1:return r.sent(),[2]}}))}))},r.prototype.fetchToggles=function(){return s(this,void 0,void 0,(function(){var t,r,n,o,i,s,u;return a(this,(function(a){switch(a.label){case 0:if(!this.fetch)return[3,8];a.label=1;case 1:return a.trys.push([1,7,,8]),t=this.usePOSTrequests,r=t?this.url:(0,d.urlWithContextAsQuery)(this.url,this.context),n=t?"POST":"GET",o=t?JSON.stringify({context:this.context}):void 0,[4,this.fetch(r.toString(),{method:n,cache:"no-cache",headers:this.getHeaders(),body:o})];case 2:return(i=a.sent()).ok&&304!==i.status?(this.etag=i.headers.get("ETag")||"",[4,i.json()]):[3,5];case 3:return s=a.sent(),[4,this.storeToggles(s.toggles)];case 4:return a.sent(),this.bootstrap||this.readyEventEmitted||(this.emit(e.EVENTS.READY),this.readyEventEmitted=!0),[3,6];case 5:i.ok||304===i.status||(console.error("Unleash: Fetching feature toggles did not have an ok response"),this.emit(e.EVENTS.ERROR,{type:"HttpError",code:i.status})),a.label=6;case 6:return[3,8];case 7:return u=a.sent(),console.error("Unleash: unable to fetch feature toggles",u),this.emit(e.EVENTS.ERROR,u),[3,8];case 8:return[2]}}))}))},r}(c.TinyEmitter);e.UnleashClient=w},88524:function(t,e){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)},n=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{u(n.next(t))}catch(t){i(t)}}function a(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((n=n.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t){var e=t.onError,r=t.appName,n=t.metricsInterval,o=t.disableMetrics,i=void 0!==o&&o,s=t.url,a=t.clientKey,u=t.fetch,c=t.headerName;this.onError=e,this.disabled=i,this.metricsInterval=1e3*n,this.appName=r,this.url=s instanceof URL?s:new URL(s),this.clientKey=a,this.bucket=this.createEmptyBucket(),this.fetch=u,this.headerName=c}return t.prototype.start=function(){var t=this;if(this.disabled)return!1;"number"==typeof this.metricsInterval&&this.metricsInterval>0&&setTimeout((function(){t.startTimer(),t.sendMetrics()}),2e3)},t.prototype.stop=function(){this.timer&&(clearTimeout(this.timer),delete this.timer)},t.prototype.createEmptyBucket=function(){return{start:new Date,stop:null,toggles:{}}},t.prototype.sendMetrics=function(){return n(this,void 0,void 0,(function(){var t,e,r,n;return o(this,(function(o){switch(o.label){case 0:if(t="".concat(this.url,"/client/metrics"),e=this.getPayload(),this.bucketIsEmpty(e))return[2];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.fetch(t,{cache:"no-cache",method:"POST",headers:(n={},n[this.headerName]=this.clientKey,n.Accept="application/json",n["Content-Type"]="application/json",n),body:JSON.stringify(e)})];case 2:return o.sent(),[3,4];case 3:return r=o.sent(),console.error("Unleash: unable to send feature metrics",r),this.onError(r),[3,4];case 4:return[2]}}))}))},t.prototype.count=function(t,e){return!(this.disabled||!this.bucket)&&(this.assertBucket(t),this.bucket.toggles[t][e?"yes":"no"]++,!0)},t.prototype.assertBucket=function(t){if(this.disabled||!this.bucket)return!1;this.bucket.toggles[t]||(this.bucket.toggles[t]={yes:0,no:0})},t.prototype.startTimer=function(){var t=this;this.timer=setInterval((function(){t.sendMetrics()}),this.metricsInterval)},t.prototype.bucketIsEmpty=function(t){return 0===Object.keys(t.bucket.toggles).length},t.prototype.getPayload=function(){var t=r(r({},this.bucket),{stop:new Date});return this.bucket=this.createEmptyBucket(),{bucket:t,appName:this.appName,instanceId:"browser"}},t}();e.default=i},8475:function(t,e){"use strict";var r=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{u(n.next(t))}catch(t){i(t)}}function a(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((n=n.apply(t,e||[])).next())}))},n=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){this.store=new Map}return t.prototype.save=function(t,e){return r(this,void 0,void 0,(function(){return n(this,(function(r){return this.store.set(t,e),[2]}))}))},t.prototype.get=function(t){return r(this,void 0,void 0,(function(){return n(this,(function(e){return[2,this.store.get(t)]}))}))},t}();e.default=o},6432:function(t,e){"use strict";var r=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{u(n.next(t))}catch(t){i(t)}}function a(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((n=n.apply(t,e||[])).next())}))},n=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){this.prefix="unleash:repository"}return t.prototype.save=function(t,e){return r(this,void 0,void 0,(function(){var r,o;return n(this,(function(n){r=JSON.stringify(e),o="".concat(this.prefix,":").concat(t);try{window.localStorage.setItem(o,r)}catch(t){console.error(t)}return[2]}))}))},t.prototype.get=function(t){try{var e="".concat(this.prefix,":").concat(t),r=window.localStorage.getItem(e);return r?JSON.parse(r):void 0}catch(t){console.error(t)}},t}();e.default=o},75581:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.urlWithContextAsQuery=e.notNullOrUndefined=void 0;e.notNullOrUndefined=function(t){var e=t[1];return null!=e};e.urlWithContextAsQuery=function(t,r){var n=new URL(t.toString());return Object.entries(r).filter(e.notNullOrUndefined).forEach((function(t){var r=t[0],o=t[1];"properties"===r&&o?Object.entries(o).filter(e.notNullOrUndefined).forEach((function(t){var e=t[0],r=t[1];return n.searchParams.append("properties[".concat(e,"]"),r)})):n.searchParams.append(r,o)})),n}},41187:(t,e,r)=>{"use strict";r.r(e),r.d(e,{NIL:()=>a.Z,parse:()=>f.Z,stringify:()=>l.Z,v1:()=>n.Z,v3:()=>o.Z,v4:()=>i.Z,v5:()=>s.Z,validate:()=>c.Z,version:()=>u.Z});var n=r(75861),o=r(59527),i=r(18727),s=r(79279),a=r(73558),u=r(77437),c=r(37813),l=r(73807),f=r(80222)},43371:(t,e,r)=>{"use strict";function n(t){return 14+(t+64>>>9<<4)+1}function o(t,e){var r=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(r>>16)<<16|65535&r}function i(t,e,r,n,i,s){return o((a=o(o(e,t),o(n,s)))<<(u=i)|a>>>32-u,r);var a,u}function s(t,e,r,n,o,s,a){return i(e&r|~e&n,t,e,o,s,a)}function a(t,e,r,n,o,s,a){return i(e&n|r&~n,t,e,o,s,a)}function u(t,e,r,n,o,s,a){return i(e^r^n,t,e,o,s,a)}function c(t,e,r,n,o,s,a){return i(r^(e|~n),t,e,o,s,a)}r.d(e,{Z:()=>l});const l=function(t){if("string"==typeof t){var e=unescape(encodeURIComponent(t));t=new Uint8Array(e.length);for(var r=0;r<e.length;++r)t[r]=e.charCodeAt(r)}return function(t){for(var e=[],r=32*t.length,n="0123456789abcdef",o=0;o<r;o+=8){var i=t[o>>5]>>>o%32&255,s=parseInt(n.charAt(i>>>4&15)+n.charAt(15&i),16);e.push(s)}return e}(function(t,e){t[e>>5]|=128<<e%32,t[n(e)-1]=e;for(var r=1732584193,i=-271733879,l=-1732584194,f=271733878,h=0;h<t.length;h+=16){var p=r,d=i,v=l,y=f;r=s(r,i,l,f,t[h],7,-680876936),f=s(f,r,i,l,t[h+1],12,-389564586),l=s(l,f,r,i,t[h+2],17,606105819),i=s(i,l,f,r,t[h+3],22,-1044525330),r=s(r,i,l,f,t[h+4],7,-176418897),f=s(f,r,i,l,t[h+5],12,1200080426),l=s(l,f,r,i,t[h+6],17,-1473231341),i=s(i,l,f,r,t[h+7],22,-45705983),r=s(r,i,l,f,t[h+8],7,1770035416),f=s(f,r,i,l,t[h+9],12,-1958414417),l=s(l,f,r,i,t[h+10],17,-42063),i=s(i,l,f,r,t[h+11],22,-1990404162),r=s(r,i,l,f,t[h+12],7,1804603682),f=s(f,r,i,l,t[h+13],12,-40341101),l=s(l,f,r,i,t[h+14],17,-1502002290),r=a(r,i=s(i,l,f,r,t[h+15],22,1236535329),l,f,t[h+1],5,-165796510),f=a(f,r,i,l,t[h+6],9,-1069501632),l=a(l,f,r,i,t[h+11],14,643717713),i=a(i,l,f,r,t[h],20,-373897302),r=a(r,i,l,f,t[h+5],5,-701558691),f=a(f,r,i,l,t[h+10],9,38016083),l=a(l,f,r,i,t[h+15],14,-660478335),i=a(i,l,f,r,t[h+4],20,-405537848),r=a(r,i,l,f,t[h+9],5,568446438),f=a(f,r,i,l,t[h+14],9,-1019803690),l=a(l,f,r,i,t[h+3],14,-187363961),i=a(i,l,f,r,t[h+8],20,1163531501),r=a(r,i,l,f,t[h+13],5,-1444681467),f=a(f,r,i,l,t[h+2],9,-51403784),l=a(l,f,r,i,t[h+7],14,1735328473),r=u(r,i=a(i,l,f,r,t[h+12],20,-1926607734),l,f,t[h+5],4,-378558),f=u(f,r,i,l,t[h+8],11,-2022574463),l=u(l,f,r,i,t[h+11],16,1839030562),i=u(i,l,f,r,t[h+14],23,-35309556),r=u(r,i,l,f,t[h+1],4,-1530992060),f=u(f,r,i,l,t[h+4],11,1272893353),l=u(l,f,r,i,t[h+7],16,-155497632),i=u(i,l,f,r,t[h+10],23,-1094730640),r=u(r,i,l,f,t[h+13],4,681279174),f=u(f,r,i,l,t[h],11,-358537222),l=u(l,f,r,i,t[h+3],16,-722521979),i=u(i,l,f,r,t[h+6],23,76029189),r=u(r,i,l,f,t[h+9],4,-640364487),f=u(f,r,i,l,t[h+12],11,-421815835),l=u(l,f,r,i,t[h+15],16,530742520),r=c(r,i=u(i,l,f,r,t[h+2],23,-995338651),l,f,t[h],6,-198630844),f=c(f,r,i,l,t[h+7],10,1126891415),l=c(l,f,r,i,t[h+14],15,-1416354905),i=c(i,l,f,r,t[h+5],21,-57434055),r=c(r,i,l,f,t[h+12],6,1700485571),f=c(f,r,i,l,t[h+3],10,-1894986606),l=c(l,f,r,i,t[h+10],15,-1051523),i=c(i,l,f,r,t[h+1],21,-2054922799),r=c(r,i,l,f,t[h+8],6,1873313359),f=c(f,r,i,l,t[h+15],10,-30611744),l=c(l,f,r,i,t[h+6],15,-1560198380),i=c(i,l,f,r,t[h+13],21,1309151649),r=c(r,i,l,f,t[h+4],6,-145523070),f=c(f,r,i,l,t[h+11],10,-1120210379),l=c(l,f,r,i,t[h+2],15,718787259),i=c(i,l,f,r,t[h+9],21,-343485551),r=o(r,p),i=o(i,d),l=o(l,v),f=o(f,y)}return[r,i,l,f]}(function(t){if(0===t.length)return[];for(var e=8*t.length,r=new Uint32Array(n(e)),o=0;o<e;o+=8)r[o>>5]|=(255&t[o/8])<<o%32;return r}(t),8*t.length))}},73558:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n="00000000-0000-0000-0000-000000000000"},80222:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});var n=r(37813);const o=function(t){if(!(0,n.Z)(t))throw TypeError("Invalid UUID");var e,r=new Uint8Array(16);return r[0]=(e=parseInt(t.slice(0,8),16))>>>24,r[1]=e>>>16&255,r[2]=e>>>8&255,r[3]=255&e,r[4]=(e=parseInt(t.slice(9,13),16))>>>8,r[5]=255&e,r[6]=(e=parseInt(t.slice(14,18),16))>>>8,r[7]=255&e,r[8]=(e=parseInt(t.slice(19,23),16))>>>8,r[9]=255&e,r[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,r[11]=e/4294967296&255,r[12]=e>>>24&255,r[13]=e>>>16&255,r[14]=e>>>8&255,r[15]=255&e,r}},80290:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i},81150:(t,e,r)=>{"use strict";var n;r.d(e,{Z:()=>i});var o=new Uint8Array(16);function i(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}},44220:(t,e,r)=>{"use strict";function n(t,e,r,n){switch(t){case 0:return e&r^~e&n;case 1:case 3:return e^r^n;case 2:return e&r^e&n^r&n}}function o(t,e){return t<<e|t>>>32-e}r.d(e,{Z:()=>i});const i=function(t){var e=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){var i=unescape(encodeURIComponent(t));t=[];for(var s=0;s<i.length;++s)t.push(i.charCodeAt(s))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);for(var a=t.length/4+2,u=Math.ceil(a/16),c=new Array(u),l=0;l<u;++l){for(var f=new Uint32Array(16),h=0;h<16;++h)f[h]=t[64*l+4*h]<<24|t[64*l+4*h+1]<<16|t[64*l+4*h+2]<<8|t[64*l+4*h+3];c[l]=f}c[u-1][14]=8*(t.length-1)/Math.pow(2,32),c[u-1][14]=Math.floor(c[u-1][14]),c[u-1][15]=8*(t.length-1)&4294967295;for(var p=0;p<u;++p){for(var d=new Uint32Array(80),v=0;v<16;++v)d[v]=c[p][v];for(var y=16;y<80;++y)d[y]=o(d[y-3]^d[y-8]^d[y-14]^d[y-16],1);for(var g=r[0],b=r[1],m=r[2],w=r[3],E=r[4],x=0;x<80;++x){var S=Math.floor(x/20),I=o(g,5)+n(S,b,m,w)+E+e[S]+d[x]>>>0;E=w,w=m,m=o(b,30)>>>0,b=g,g=I}r[0]=r[0]+g>>>0,r[1]=r[1]+b>>>0,r[2]=r[2]+m>>>0,r[3]=r[3]+w>>>0,r[4]=r[4]+E>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]}},73807:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});for(var n=r(37813),o=[],i=0;i<256;++i)o.push((i+256).toString(16).substr(1));const s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(o[t[e+0]]+o[t[e+1]]+o[t[e+2]]+o[t[e+3]]+"-"+o[t[e+4]]+o[t[e+5]]+"-"+o[t[e+6]]+o[t[e+7]]+"-"+o[t[e+8]]+o[t[e+9]]+"-"+o[t[e+10]]+o[t[e+11]]+o[t[e+12]]+o[t[e+13]]+o[t[e+14]]+o[t[e+15]]).toLowerCase();if(!(0,n.Z)(r))throw TypeError("Stringified UUID is invalid");return r}},75861:(t,e,r)=>{"use strict";r.d(e,{Z:()=>c});var n,o,i=r(81150),s=r(73807),a=0,u=0;const c=function(t,e,r){var c=e&&r||0,l=e||new Array(16),f=(t=t||{}).node||n,h=void 0!==t.clockseq?t.clockseq:o;if(null==f||null==h){var p=t.random||(t.rng||i.Z)();null==f&&(f=n=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==h&&(h=o=16383&(p[6]<<8|p[7]))}var d=void 0!==t.msecs?t.msecs:Date.now(),v=void 0!==t.nsecs?t.nsecs:u+1,y=d-a+(v-u)/1e4;if(y<0&&void 0===t.clockseq&&(h=h+1&16383),(y<0||d>a)&&void 0===t.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=d,u=v,o=h;var g=(1e4*(268435455&(d+=122192928e5))+v)%4294967296;l[c++]=g>>>24&255,l[c++]=g>>>16&255,l[c++]=g>>>8&255,l[c++]=255&g;var b=d/4294967296*1e4&268435455;l[c++]=b>>>8&255,l[c++]=255&b,l[c++]=b>>>24&15|16,l[c++]=b>>>16&255,l[c++]=h>>>8|128,l[c++]=255&h;for(var m=0;m<6;++m)l[c+m]=f[m];return e||(0,s.Z)(l)}},59527:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var n=r(57655),o=r(43371);const i=(0,n.ZP)("v3",48,o.Z)},57655:(t,e,r)=>{"use strict";r.d(e,{ZP:()=>i});var n=r(73807),o=r(80222);function i(t,e,r){function i(t,i,s,a){if("string"==typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));for(var e=[],r=0;r<t.length;++r)e.push(t.charCodeAt(r));return e}(t)),"string"==typeof i&&(i=(0,o.Z)(i)),16!==i.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var u=new Uint8Array(16+t.length);if(u.set(i),u.set(t,i.length),(u=r(u))[6]=15&u[6]|e,u[8]=63&u[8]|128,s){a=a||0;for(var c=0;c<16;++c)s[a+c]=u[c];return s}return(0,n.Z)(u)}try{i.name=t}catch(t){}return i.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",i.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",i}},18727:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var n=r(81150),o=r(73807);const i=function(t,e,r){var i=(t=t||{}).random||(t.rng||n.Z)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e){r=r||0;for(var s=0;s<16;++s)e[r+s]=i[s];return e}return(0,o.Z)(i)}},79279:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var n=r(57655),o=r(44220);const i=(0,n.ZP)("v5",80,o.Z)},37813:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});var n=r(80290);const o=function(t){return"string"==typeof t&&n.Z.test(t)}},77437:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});var n=r(37813);const o=function(t){if(!(0,n.Z)(t))throw TypeError("Invalid UUID");return parseInt(t.substr(14,1),16)}}}]);