(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[368],{30701:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=""},36522:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getFeatureFlagsError=t.unleashClient=t.UNLEASH_ERROR_KEY=void 0;var c=a(n(96985)),s=a(n(45697)),u=i(n(9390)),l={url:"".concat(document.location.origin,"/api/featureflags/v0"),clientKey:"proxy-123",appName:"web",headerName:"X-Unleash-Auth",refreshInterval:6e4,metrcisInterval:12e4};t.UNLEASH_ERROR_KEY="chrome:feature-flags:error",localStorage.setItem(t.UNLEASH_ERROR_KEY,"false"),t.unleashClient=new u.UnleashClient(l);t.getFeatureFlagsError=function(){return"true"===localStorage.getItem(t.UNLEASH_ERROR_KEY)},t.unleashClient.on("error",(function(){localStorage.setItem(t.UNLEASH_ERROR_KEY,"true")}));var f=function(e){var n=e.children;return c.default.createElement(u.default,{unleashClient:t.unleashClient},n)};f.propTypes={children:s.default.node.isRequired},t.default=f},14734:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.activationRequestURLs=t.isVisible=t.visibilityFunctions=t.CROSS_ACCESS_ORG_ID=t.ACTIVE_REMOTE_REQUEST=t.CROSS_ACCESS_ACCOUNT_NUMBER=t.ACCOUNT_REQUEST_TIMEOUT=t.ACTIVE_ACCOUNT_SWITCH_NOTIFICATION=t.REQUESTS_DATA=t.REQUESTS_COUNT=t.HYDRA_ENDPOINT=void 0;var s=c(n(96993)),u=c(n(27361)),l=c(n(41609)),f=c(n(10646)),d=n(36522),h=n(35755);t.HYDRA_ENDPOINT="/hydra/rest/se/sessions",t.REQUESTS_COUNT="chrome:cross-account-requests:pending:count",t.REQUESTS_DATA="chrome:cross-account-requests:pending:data",t.ACTIVE_ACCOUNT_SWITCH_NOTIFICATION="chrome:cross-account-requests:active-notification",t.ACCOUNT_REQUEST_TIMEOUT="chrome:cross-account-requests:request-timeout",t.CROSS_ACCESS_ACCOUNT_NUMBER="cross_access_account_number",t.ACTIVE_REMOTE_REQUEST="chrome/active-remote-request",t.CROSS_ACCESS_ORG_ID="cross_access_org_id";var p={isEmpty:l.default,isNotEmpty:function(e){return!(0,l.default)(e)}},v=function(e,t){return void 0===e&&(e=[]),void 0===t&&(t="every"),o(void 0,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:return[4,window.insights.chrome.getUserPermissions()];case 1:return[2,(n=r.sent())&&e[t]((function(e){return n.find((function(t){return t.permission===e}))}))]}}))}))};t.visibilityFunctions={isOrgAdmin:function(){return o(void 0,void 0,void 0,(function(){var e,t;return i(this,(function(n){switch(n.label){case 0:return[4,window.insights.chrome.auth.getUser()];case 1:e=n.sent();try{return[2,!!(null===(t=e.identity.user)||void 0===t?void 0:t.is_org_admin)]}catch(e){return[2,!1]}return[2]}}))}))},isActive:function(){return o(void 0,void 0,void 0,(function(){var e,t;return i(this,(function(n){switch(n.label){case 0:return[4,window.insights.chrome.auth.getUser()];case 1:e=n.sent();try{return[2,!!(null===(t=e.identity.user)||void 0===t?void 0:t.is_active)]}catch(e){return[2,!1]}return[2]}}))}))},isInternal:function(){return o(void 0,void 0,void 0,(function(){var e,t;return i(this,(function(n){switch(n.label){case 0:return[4,window.insights.chrome.auth.getUser()];case 1:e=n.sent();try{return[2,!!(null===(t=e.identity.user)||void 0===t?void 0:t.is_internal)]}catch(e){return[2,!1]}return[2]}}))}))},isEntitled:function(e){return o(void 0,void 0,void 0,(function(){var t,n;return i(this,(function(o){switch(o.label){case 0:return[4,window.insights.chrome.auth.getUser()];case 1:return t=o.sent(),n=(t||{}).entitlements,[2,t.entitlements&&e?Boolean(n[e]&&n[e].is_entitled):Object.entries(n||{}).reduce((function(e,t){var n,o=t[0],i=t[1].is_entitled;return r(r({},e),((n={})[o]=i,n))}),{})]}}))}))},isProd:function(){return(0,h.isProd)()},isBeta:function(){return(0,h.isBeta)()},isHidden:function(){return!0},withEmail:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return o(void 0,void 0,void 0,(function(){var t,n;return i(this,(function(r){switch(r.label){case 0:return[4,window.insights.chrome.auth.getUser()];case 1:return t=r.sent(),n=(t||{}).identity.user,[2,null==e?void 0:e.some((function(e){var t;return null===(t=null==n?void 0:n.email)||void 0===t?void 0:t.includes(e)}))]}}))}))},loosePermissions:function(e){return v(e,"some")},hasPermissions:v,hasLocalStorage:function(e,t){return localStorage.get(e)===t},hasCookie:function(e,t){return f.default.get(e)===t},apiRequest:function(e){return o(void 0,void 0,void 0,(function(){var t=e.url,n=e.method,o=void 0===n?"GET":n,c=e.accessor,l=e.matcher,f=a(e,["url","method","accessor","matcher"]);return i(this,(function(e){switch(e.label){case 0:return[4,window.insights.chrome.auth.getUser()];case 1:return e.sent().identity.account_number?[2,(0,s.default)(r({url:t,method:o},f)).then((function(e){return function(e,t){var n=p[t];return"function"==typeof n?n(e):e}(c?(0,u.default)(e||{},c):e,l)})).catch((function(){return console.log("Unable to retrieve visibility result",{visibilityMethod:"apiRequest",method:o,url:t}),!1}))]:(console.log("Unable to call API, no account number"),[2,!1])}}))}))},featureFlag:function(e,t){return!0!==(0,d.getFeatureFlagsError)()&&d.unleashClient.isEnabled(e)===t}};t.isVisible=function(e,t,n){return!(e&&t&&e.includes(t))||(n instanceof Object?Boolean(n[t]):n)},t.default=Object.freeze({noAuthParam:"noauth",offlineToken:"2402500adeacc30eb5c5a8a5e2e0ec1f"}),t.activationRequestURLs=["azure-openshift-activation","azure-ocp-activation","azure-oke-activation","azure-opp-activation","aws-openshift-activation","aws-ocp-activation","aws-oke-activation","aws-opp-activation"]},44057:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(94671)),i=function(){function e(){this._cookie,this._keycloak={}}return e.prototype.setCookie=function(e){this.cookie=e},e.prototype.setKeycloak=function(e,t,n,r){this._keycloak=new o.default(e),this._keycloak.onTokenExpired=t,this._keycloak.onAuthSuccess=n,this._keycloak.onAuthRefreshSuccess=r},e.prototype.initializeKeycloak=function(e){var t;null===(t=this._keycloak)||void 0===t||t.init(e)},e.prototype.setToken=function(e){this._keycloak.authenticated=!0,this._keycloak.token=e},e.prototype.initialize=function(e){return this._keycloak.init(e)},e.prototype.setTokenParsed=function(e){this._keycloak.tokenParsed=e},e.prototype.getTokenParsed=function(){return this._keycloak.tokenParsed},e.prototype.getToken=function(){return this._keycloak.token},e.prototype.getRefershToken=function(){return this._keycloak.refreshToken},e.prototype.login=function(e){return this._keycloak.login(e)},e.prototype.clearToken=function(){this._keycloak.clearToken()},e.prototype.getCookie=function(){return this.cookie},e.prototype.logout=function(e){return this._keycloak.logout(e)},e.prototype.getAuthenticated=function(){return this._keycloak.authenticated},e.prototype.updateToken=function(){return this._keycloak.updateToken(5)},e}();t.default=i},11577:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.offlineToken=t.noAuthParam=t.options=t.DEFAULT_ROUTES=void 0,t.DEFAULT_ROUTES={prod:{url:["access.redhat.com","prod.foo.redhat.com","cloud.redhat.com","console.redhat.com"],sso:"https://sso.redhat.com/auth",portal:"https://access.redhat.com"},qa:{url:["qa.foo.redhat.com","qa.cloud.redhat.com","qa.console.redhat.com"],sso:"https://sso.qa.redhat.com/auth",portal:"https://access.qa.redhat.com"},ci:{url:["ci.foo.redhat.com","ci.cloud.redhat.com","ci.console.redhat.com"],sso:"https://sso.qa.redhat.com/auth",portal:"https://access.qa.redhat.com"},qaprodauth:{url:["qaprodauth.foo.redhat.com","qaprodauth.cloud.redhat.com","qaprodauth.console.redhat.com"],sso:"https://sso.redhat.com/auth",portal:"https://access.redhat.com"},stage:{url:["stage.foo.redhat.com","cloud.stage.redhat.com","console.stage.redhat.com","fetest.stage.redhat.com"],sso:"https://sso.stage.redhat.com/auth",portal:"https://access.stage.redhat.com"},gov:{url:["gov.cloud.redhat.com","gov.console.redhat.com"],sso:"https://sso.redhat.com/auth",portal:"https://access.redhat.com"},govStage:{url:["gov.cloud.stage.redhat.com","gov.console.stage.redhat.com"],sso:"https://sso.stage.redhat.com/auth",portal:"https://access.redhat.com"},dev:{url:["console.dev.redhat.com"],sso:"https://sso.redhat.com/auth",portal:"https://access.redhat.com"}},t.options={realm:"redhat-external",clientId:"cloud-services",cookieName:"cs_jwt"},t.noAuthParam="noauth",t.offlineToken="2402500adeacc30eb5c5a8a5e2e0ec1f"},88377:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(9669)),i=n(49268),a=n(35755),c=n(28997),s="/api/entitlements/v1";t.default=function(e){var t=(0,c.bootstrapCache)(s,"".concat(e,"-entitlements")),n=o.default.create({adapter:t.adapter});return n.interceptors.response.use((function(e){if(e&&e.request&&!0!==e.request.fromCache){var t=(0,a.lastActive)("/api/entitlements/v1/services","fallback"),n=Object.keys(localStorage).filter((function(e){return e.endsWith("/api/entitlements/v1/services")&&e!==t}));(0,a.deleteLocalStorageItems)(n)}return e.data||e})),new i.ServicesApi(void 0,s,n)}},61480:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.parseHashString=t.getPostDataObject=t.getPostbackUrl=t.getWindow=t.getOfflineToken=t.wipePostbackParamsThatAreNotForUs=void 0;var a=i(n(14734)),c=n(11577),s=i(n(13606)),u=i(n(9669)),l={};function f(){return window}function d(){var e=l.postbackUrl;return delete l.postbackUrl,e}function h(e,t,n){return{code:n,grant_type:"authorization_code",client_id:t,redirect_uri:encodeURIComponent(e.split("#")[0])}}function p(e){return e.split("#")[1].split("&").reduce((function(e,t){var n=t.split("=");return e[n[0]]=n[1],e}),{})}t.wipePostbackParamsThatAreNotForUs=function(){if(-1!==f().location.href.indexOf(a.default.offlineToken)){var e=f().location,t=e.hash,n=e.search,r=e.origin,o=e.pathname,i=new URLSearchParams(n).get(a.default.noAuthParam);l.postbackUrl="".concat(r).concat(o,"?").concat(a.default.noAuthParam,"=").concat(i).concat(t),f().location.hash="";var c=new URL(f().location.href);c.searchParams.delete(a.default.noAuthParam),f().history.pushState("offlinePostback","",c.toString())}},t.getOfflineToken=function(e,t){return r(this,void 0,void 0,(function(){var n,r,i,a;return o(this,(function(o){switch(o.label){case 0:return n=d(),l.response?[2,Promise.resolve(l.response)]:n?[4,(0,s.default)(c.DEFAULT_ROUTES)]:[2,Promise.reject("not available")];case 1:return r=o.sent(),i="".concat(r,"/realms/").concat(e,"/protocol/openid-connect/token"),a=p(n),[2,u.default.post(i,(f=h(n,t,a.code),Object.entries(f).map((function(e){return"".concat(e[0],"=").concat(e[1])})).join("&")),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return l.response=e,e}))]}var f}))}))},t.getWindow=f,t.getPostbackUrl=d,t.getPostDataObject=h,t.parseHashString=p},13606:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},a=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))},c=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=(0,s(n(18579)).default)("insights/url.js"),l=Promise.resolve().then((function(){return i(n(30701))})).then((function(e){return e.default}));t.default=function(e){return a(void 0,void 0,void 0,(function(){var t;return c(this,(function(n){switch(n.label){case 0:return[4,l];case 1:return n.sent()?(u("Using dynamic SSO_URL found! "+l),[2,l]):(t=Object.entries(e).find((function(e){return e[1].url.includes(location.hostname)})))?(u("SSO Url: ".concat(null==t?void 0:t[1].sso)),u("Current env: ".concat(null==t?void 0:t[0])),[2,null==t?void 0:t[1].sso]):(u("SSO url: not found, defaulting to qa"),u("Current env: not found, defaultint to qa"),[2,"https://sso.qa.redhat.com/auth"])}}))}))}},69083:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.tryBounceIfUnentitled=t.buildUser=void 0;var c=n(35755),s=a(n(88377)),u=(0,a(n(18579)).default)("insights/user.js"),l={"cost-management":"cost_management",insights:"insights",openshift:"openshift",migrations:"migrations",ansible:"ansible",subscriptions:"subscriptions",settings:"settings","user-preferences":"user_preferences",internal:"internal"};function f(){return window}function d(e){return e?{identity:r(r({account_number:e.account_number,org_id:e.org_id,type:e.type},e.idp&&{idp:e.idp}),{user:{username:e.username,email:e.email,first_name:e.first_name,last_name:e.last_name,is_active:e.is_active,is_org_admin:e.is_org_admin,is_internal:e.is_internal,locale:e.locale},internal:{org_id:e.org_id,account_id:e.account_id}})}:null}function h(e,t){var n;if("insights"===t||"openshift"===t||"cost-management"===t||"migrations"===t||"ansible"===t||"subscriptions"===t||"settings"===t||"user-preferences"===t||"internal"===t){var r=l[t],o=function(e,t){return{ansible:"".concat(document.baseURI).concat((0,c.isBeta)()?"beta/":"","ansible/ansible-dashboard/trial")}[e]||"".concat(document.baseURI,"?not_entitled=").concat(t)}(t,r);!0===e&&f().location.replace(o),t&&"object"==typeof e&&((null===(n=null==e?void 0:e[r])||void 0===n?void 0:n.is_entitled)?u("Entitled to: ".concat(r)):(u("Not entitled to: ".concat(r)),f().location.replace(o)))}}t.buildUser=d,t.tryBounceIfUnentitled=h,t.default=function(e){return o(void 0,void 0,void 0,(function(){var t,n,o;return i(this,(function(i){switch(i.label){case 0:if(t=d(e),(n=f().location.pathname.split("/")).shift(),"beta"===n[0]&&n.shift(),"subscriptions"!==(null==n?void 0:n[1])&&"cost-management"!==(null==n?void 0:n[1])||n.shift(),!t)return[3,7];u("Account Number: ".concat(t.identity.account_number)),o=void 0,i.label=1;case 1:return i.trys.push([1,5,,6]),t.identity.account_number?[4,(0,s.default)(e.jti).servicesGet()]:[3,3];case 2:return o=i.sent(),[3,4];case 3:console.log("Cannot call entitlements API, no account number"),i.label=4;case 4:return[3,6];case 5:return i.sent(),[3,6];case 6:return(0,c.pageAllowsUnentitled)()?[2,r(r({},t),{entitlements:o||{}})]:(0,c.isValidAccountNumber)(t.identity.account_number)?(h(o,n[0]),[2,r(r({},t),{entitlements:o})]):(h(!0,n[0]),[2]);case 7:u("User not ready"),i.label=8;case 8:return[2]}}))}))}},71093:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return i(t,e),t},c=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getUrl=t.getEncodedToken=t.setCookieWrapper=t.setCookie=t.getCookieExpires=t.updateToken=t.expiredToken=t.isAuthenticated=t.getUserInfo=t.logoutAllTabs=t.logout=t.login=t.initError=t.initSuccess=t.isExistingValid=t.init=t.doOffline=t.decodeToken=t.GLOBAL_FILTER_KEY=void 0;var l=u(n(94671)),f=n(38437),d=u(n(10646)),h=n(35755),p=a(n(47820)),v=u(n(18579)),g=u(n(13606)),m=u(n(69083)),b=u(n(54998)),_=n(11577),y=u(n(44057));t.GLOBAL_FILTER_KEY="chrome:global-filter";var w=(0,v.default)("jwt.js"),k="cs_jwt",O=new y.default,S=new f.BroadcastChannel("auth");function T(e){switch((e=(e=(e=e.split(".")[1]).replace("/-/g","+")).replace("/_/g","/")).length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Invalid token"}return e=(e=(e+"===").slice(0,e.length+e.length%4)).replace(/-/g,"+").replace(/_/g,"/"),e=decodeURIComponent(escape(atob(e))),JSON.parse(e)}S.onmessage=function(e){if(e&&e.data&&e.data.type)switch(w("BroadcastChannel, Received event : ".concat(e.data.type)),e.data.type){case"logout":return x();case"login":return C();case"refresh":return R()}},t.decodeToken=T;t.doOffline=function(e,t){var n=(0,b.default)(window.location.href);n.removeSearch(e),n.addSearch(e,t),Promise.resolve((0,g.default)(_.DEFAULT_ROUTES)).then((function(e){return c(void 0,void 0,void 0,(function(){var t,o;return s(this,(function(i){switch(i.label){case 0:return t=r(r({},_.options),{promiseType:"native",redirectUri:n.toString(),url:e}),[4,(o=new l.default(t)).init(t)];case 1:return i.sent(),o.login({scope:"offline_access"}),[2]}}))}))}))};function E(e){w("Checking validity of existing JWT");try{if(!e)return!1;var t=T(e);if(!t.exp)return!1;var n=Date.now().toString().substr(0,10),r=t.exp-parseInt(n);return w("Token expires in ".concat(r)),r>90?(O.setTokenParsed(t),!0):(w(r>0?"token is expiring in < 90 seconds":"token is expired"),!1)}catch(e){return w(e),!1}}function A(){var e;w("JWT Initialized"),D(O.getToken()),e=O.getRefershToken(),w("Setting the refresh token"),e&&d.default.set("cs_jwt_refresh",e,{secure:!0})}function U(){w("JWT init error"),x()}function C(){return w("Logging in"),d.default.set("cs_loggedOut","false"),O.login({redirectUri:location.href})}function x(e){var n;w("Logging out"),O.clearToken();var r=null===(n=O.getCookie())||void 0===n?void 0:n.cookieName;r&&d.default.remove(r),d.default.remove("cs_demo");var o="beta"===window.location.pathname.split("/")[1]?"/beta":"",i=Object.keys(localStorage).filter((function(e){return e.endsWith("/api/entitlements/v1/services")||e.endsWith("/chrome")||e.endsWith("/chrome-store")||e.startsWith("kc-callback")||e.startsWith(t.GLOBAL_FILTER_KEY)}));if((0,h.deleteLocalStorageItems)(i),e){var a=new Date((new Date).getTime()+8e3);d.default.set("cs_loggedOut","true",{expires:a}),O.logout({redirectUri:"https://".concat(window.location.host).concat(o)})}}t.init=function(e){w("Initializing");var t=e.cookieName?e.cookieName:k;return O.setCookie({cookieName:t}),Promise.resolve((0,g.default)(e.routes?e.routes:_.DEFAULT_ROUTES)).then((function(t){e.url=t,e.clientId="cloud-services",e.realm="redhat-external",e.promiseType="native",e.onLoad="check-sso",e.checkLoginIframe=!1;var n="beta"===window.location.pathname.split("/")[1]?"/beta":"";if(e.silentCheckSsoRedirectUri="https://".concat(window.location.host).concat(n,"/apps/chrome/silent-check-sso.html"),window.localStorage&&"true"===window.localStorage.getItem("chrome:jwt:shortSession")&&(e.realm="short-session"),O.setKeycloak(e,R,P,I),e.token){if(E(e.token))return O.initializeKeycloak(e),O.setToken(e.token),Promise.resolve();delete e.token}return O.initialize(e).then(A).catch(U)}))},t.isExistingValid=E,t.initSuccess=A,t.initError=U,t.login=C,t.logout=x;function P(){S.postMessage({type:"login"})}t.logoutAllTabs=function(e){S.postMessage({type:"logout"}),x(e)};t.getUserInfo=function(){w("Getting User Information");var e=d.default.get(k);return e&&E(e)&&E(O.getToken())?(0,m.default)(O.getTokenParsed()):R().then((function(){return w("Successfully updated token"),(0,m.default)(O.getTokenParsed())})).catch((function(){if((0,h.pageRequiresAuthentication)())return w("Trying to log in user to refresh token"),C()}))};t.isAuthenticated=function(){return w("User Ready: ".concat(O.getAuthenticated())),O.getAuthenticated()};function I(){D(O.getToken()),S.postMessage({type:"refresh"})}function R(){var e;return Promise.resolve(null===(e=null==O?void 0:O.updateToken)||void 0===e?void 0:e.call(O)).then((function(e){D(O.getToken()),w("Attempting to update token"),w(e?"Token was successfully refreshed":"Token is still valid, not updating")})).catch((function(e){w(e),p.captureException(e),w("Token updated failed, trying to reauth"),C()}))}function j(e){var t=new Date(0);return t.setUTCSeconds(e),t.toUTCString()}function D(e){var t;if(w("Setting the cs_jwt cookie"),e&&e.length>10){var n=null===(t=O.getCookie())||void 0===t?void 0:t.cookieName;n&&N("".concat(n,"=").concat(e,";")+"path=/;secure=true;"+"expires=".concat(j(T(e).exp)))}}function N(e){window.document.cookie=e}t.expiredToken=function(){w("Token has expired, trying to log out"),x()},t.updateToken=R,t.getCookieExpires=j,t.setCookie=D,t.setCookieWrapper=N;t.getEncodedToken=function(){return w("Trying to get the encoded token"),E(O.getToken())||(w("Failed to get encoded token, trying to update"),R()),O.getToken()};t.getUrl=function(){return(0,g.default)(_.DEFAULT_ROUTES)}},35755:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.levelArray=t.highlightItems=t.updateDocumentTitle=t.isFedRamp=t.isBeta=t.isProd=t.getEnvDetails=t.getEnv=t.getUrl=t.isAnsible=t.lastActive=t.deleteLocalStorageItems=t.createReduxListener=t.pageRequiresAuthentication=t.pageAllowsUnentitled=t.getSection=t.isValidAccountNumber=t.getWindow=void 0;var i=o(n(27361)),a=n(11577),c=o(n(94654));function s(){return window}function u(){var e=s().location.pathname.split("/");return"beta"===e[1]?e[2]||"":e[1]}t.getWindow=s,t.isValidAccountNumber=function(e){return!!e&&(-1!==e&&("-1"!==e&&Number.isInteger(Number(e))))},t.getSection=u,t.pageAllowsUnentitled=function(){var e=s().location.pathname;return"/"===e||"/beta"===e||"/beta/"===e||0===e.indexOf("/openshift")||0===e.indexOf("/beta/openshift")||0===e.indexOf("/security")||0===e.indexOf("/beta/security")||0===e.indexOf("/application-services")||0===e.indexOf("/beta/application-services")||0===e.indexOf("/hac")||0===e.indexOf("/beta/hac")||0===e.indexOf("/ansible/ansible-dashboard/trial")||0===e.indexOf("/beta/ansible/ansible-dashboard/trial")},t.pageRequiresAuthentication=function(){var e=u();return"insights"===e||"cost-management"===e||"apps"===e||"ansible"===e||"migrations"===e||"subscriptions"===e||"openshift"===e||"settings"===e||"user-preferences"===e||"internal"===e||"application-services"===e},t.createReduxListener=function(e,t,n){var r=void 0;return function(){var o=e.getState(),a=(0,i.default)(o,t);a!==r&&(r=a,n(a,e))}},t.deleteLocalStorageItems=function(e){e.map((function(e){return localStorage.removeItem(e)}))},t.lastActive=function(e,t){return Object.keys(localStorage).reduce((function(t,n){var r;if(n.includes(e))try{var o=void 0;try{var i=localStorage.getItem(t);o=i?new Date(null===(r=JSON.parse(i))||void 0===r?void 0:r.expires):new Date}catch(e){o=new Date}var a=JSON.parse(localStorage.getItem(n)||"");return o>=new Date(a.expires)?t:n}catch(e){return t}return t}),t)};function l(){var e;return(null===(e=Object.entries(a.DEFAULT_ROUTES).find((function(e){return e[1].url.includes(location.hostname)})))||void 0===e?void 0:e[0])||"qa"}t.isAnsible=function(e){return e.includes("ansible")&&e.includes("insights")?1:0},t.getUrl=function(e){if("/beta/"===window.location.pathname||"/"===window.location.pathname)return"landing";var n=window.location.pathname.split("/");return"beta"===n[1]?"bundle"===e?n[2]:n[3+(0,t.isAnsible)(n)]:"bundle"===e?n[1]:n[2+(0,t.isAnsible)(n)]},t.getEnv=l,t.getEnvDetails=function(){var e;return null===(e=Object.entries(a.DEFAULT_ROUTES).find((function(e){return e[1].url.includes(location.hostname)})))||void 0===e?void 0:e[1]},t.isProd=function(){return"cloud.redhat.com"===location.host||"console.redhat.com"===location.host||location.host.includes("prod.foo.redhat.com")},t.isBeta=function(){return"beta"===window.location.pathname.split("/")[1]},t.isFedRamp=function(){return"gov"===l()},t.updateDocumentTitle=function(e,t){void 0===t&&(t=!1);var n="| console.redhat.com";void 0!==e&&("string"==typeof e?document.title=e.includes(n)||t?e:"".concat(e," ").concat(n):console.warn("Title is not a string. Got ".concat(typeof e," instead.")))};function f(e,t){return t.map((function(t){var n=t.href,o=t.routes,i=t.navItems;return!n&&i?r(r({},t),{navItems:f(e,i)}):!n&&o?r(r({},t),function(e,t){var n=!1,o=t.map((function(t){var o=t.href===e;return o&&(n=!0),r(r({},t),{active:o})}));return{active:n,routes:o}}(e,o)):n?r(r({},t),{active:t.href===e}):t}))}t.highlightItems=function(e,t,n){var r=e.replace(/\/$/,""),o=r.split("/").length+1,i=n.find((function(e){var t=e.replace(/\/$/,"").split("/").slice(0,o).join("/");return r.includes(t)}));return f((null==i?void 0:i.replace(/\/$/,""))||"",t)};t.levelArray=function(e){return(0,c.default)(e,(function(e){var n=e.href,r=e.routes,o=e.navItems;return!n&&o?(0,t.levelArray)(o):!n&&r?(0,t.levelArray)(r):n?[n]:[]}))}},28997:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CacheAdapter=t.bootstrapCache=t.createCacheStore=void 0;var c,s=n(35974),u=a(n(69483)),l=n(35755);t.createCacheStore=function(e,t){var n=(0,l.lastActive)(e,t);return u.default.createInstance({driver:[u.default.LOCALSTORAGE],name:"string"==typeof n?null==n?void 0:n.split("/")[0]:n.expires.split("/")[0]})},t.bootstrapCache=function(e,n){var r=(0,t.createCacheStore)(e,n);return(0,s.setupCache)({store:r,maxAge:6e5})};var f=function(){function e(e,n,r){var o,i;if(void 0===r&&(r=6e5),this.maxAge=r,this.expires=(new Date).getTime()+this.maxAge,o=window.insights.chrome.isBeta()?"beta":"non-beta",(i=localStorage.getItem("chrome:prevEnv"))&&o!==i&&(0,l.deleteLocalStorageItems)(Object.keys(localStorage).filter((function(e){return e.endsWith("/chrome-store")}))),localStorage.setItem("chrome:prevEnv",o),!c){var a=(0,l.lastActive)(e,n),s=void 0,u="string"==typeof a?a:a.expires;try{s=JSON.parse(localStorage.getItem(u)||"")}catch(e){s=localStorage.getItem(u)}if(this.name=u,this.endpoint=e,this.cacheKey=n,c=(0,t.createCacheStore)(e,n),new Date(parseInt(null==s?void 0:s.expires,10))>=new Date)this.setCache(parseInt(null==s?void 0:s.expires,10),null==s?void 0:s.data);else{var f=(new Date).getTime()+this.maxAge;this.setCache(f,{})}}}return e.prototype.setCache=function(e,t){return o(this,void 0,void 0,(function(){return i(this,(function(n){switch(n.label){case 0:return this.expires=e,this.endpoint?[4,c.setItem(this.endpoint,{data:t,expires:e})]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}}))}))},e.prototype.invalidateStore=function(){return o(this,void 0,void 0,(function(){var e;return i(this,(function(n){switch(n.label){case 0:return new Date(this.expires)<=new Date?((0,l.deleteLocalStorageItems)(Object.keys(localStorage).filter((function(e){return e.endsWith("/chrome")}))),[4,u.default.dropInstance()]):[3,3];case 1:return n.sent(),this.endpoint&&this.cacheKey?(c=(0,t.createCacheStore)(this.endpoint,this.cacheKey),e=(new Date).getTime()+this.maxAge,[4,this.setCache(e,{})]):[3,3];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))},e.prototype.setItem=function(e,t){return o(this,void 0,void 0,(function(){var n,o;return i(this,(function(i){switch(i.label){case 0:return[4,this.invalidateStore()];case 1:return i.sent(),this.endpoint?[4,c.getItem(this.endpoint)]:[3,4];case 2:return null!=(n=i.sent())&&(n.data=r(r({},null==n?void 0:n.data),((o={})[e]=t,o))),[4,c.setItem(this.endpoint,n)];case 3:i.sent(),i.label=4;case 4:return[2]}}))}))},e.prototype.getItem=function(e){var t;return o(this,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:return[4,this.invalidateStore()];case 1:return r.sent(),this.endpoint?[4,c.getItem(this.endpoint)]:[3,3];case 2:return n=r.sent(),[2,null===(t=null==n?void 0:n.data)||void 0===t?void 0:t[e]];case 3:return[2,Promise.resolve()]}}))}))},e}();t.CacheAdapter=f},199:()=>{}}]);