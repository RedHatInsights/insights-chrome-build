(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[811],{6760:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.isVisible=t.visibilityFunctions=t.ACTIVE_REMOTE_REQUEST=t.CROSS_ACCESS_ACCOUNT_NUMBER=t.ACCOUNT_REQUEST_TIMEOUT=t.ACTIVE_ACCOUNT_SWITCH_NOTIFICATION=t.REQUESTS_DATA=t.REQUESTS_COUNT=t.HYDRA_ENDPOINT=void 0;var s=c(n(96993)),u=c(n(27361)),l=c(n(41609)),f=c(n(10646));t.HYDRA_ENDPOINT="/hydra/rest/se/sessions",t.REQUESTS_COUNT="chrome:cross-account-requests:pending:count",t.REQUESTS_DATA="chrome:cross-account-requests:pending:data",t.ACTIVE_ACCOUNT_SWITCH_NOTIFICATION="chrome:cross-account-requests:active-notification",t.ACCOUNT_REQUEST_TIMEOUT="chrome:cross-account-requests:request-timeout",t.CROSS_ACCESS_ACCOUNT_NUMBER="cross_access_account_number",t.ACTIVE_REMOTE_REQUEST="chrome/active-remote-request";var h={isEmpty:l.default,isNotEmpty:function(e){return!(0,l.default)(e)}},d=function(e,t){return void 0===e&&(e=[]),void 0===t&&(t="every"),o(void 0,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:return[4,insights.chrome.getUserPermissions()];case 1:return[2,(n=r.sent())&&e[t]((function(e){return n.find((function(t){return t.permission===e}))}))]}}))}))};t.visibilityFunctions={isOrgAdmin:function(){return o(void 0,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return[4,insights.chrome.auth.getUser()];case 1:e=t.sent();try{return[2,e.identity.user.is_org_admin]}catch(e){return[2,!1]}return[2]}}))}))},isActive:function(){return o(void 0,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return[4,insights.chrome.auth.getUser()];case 1:e=t.sent();try{return[2,e.identity.user.is_active]}catch(e){return[2,!1]}return[2]}}))}))},isInternal:function(){return o(void 0,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return[4,insights.chrome.auth.getUser()];case 1:e=t.sent();try{return[2,e.identity.user.is_internal]}catch(e){return[2,!1]}return[2]}}))}))},isEntitled:function(e){return o(void 0,void 0,void 0,(function(){var t,n;return i(this,(function(o){switch(o.label){case 0:return[4,insights.chrome.auth.getUser()];case 1:return t=o.sent(),n=(t||{}).entitlements,[2,t.entitlements&&e?Boolean(n[e]&&n[e].is_entitled):Object.entries(n||{}).reduce((function(e,t){var n,o=t[0],i=t[1].is_entitled;return r(r({},e),((n={})[o]=i,n))}),{})]}}))}))},isProd:function(){return insights.chrome.isProd},isBeta:function(){return insights.chrome.isBeta()},isHidden:function(){return!0},withEmail:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return o(void 0,void 0,void 0,(function(){var t,n;return i(this,(function(r){switch(r.label){case 0:return[4,insights.chrome.auth.getUser()];case 1:return t=r.sent(),n=(t||{}).identity.user,[2,null==e?void 0:e.some((function(e){var t;return null===(t=null==n?void 0:n.email)||void 0===t?void 0:t.includes(e)}))]}}))}))},loosePermissions:function(e){return d(e,"some")},hasPermissions:d,hasLocalStorage:function(e,t){return localStorage.get(e)===t},hasCookie:function(e,t){return f.default.get(e)===t},apiRequest:function(e){return o(void 0,void 0,void 0,(function(){var t=e.url,n=e.method,o=void 0===n?"GET":n,c=e.accessor,l=e.matcher,f=a(e,["url","method","accessor","matcher"]);return i(this,(function(e){switch(e.label){case 0:return[4,insights.chrome.auth.getUser()];case 1:return e.sent().identity.account_number?[2,(0,s.default)(r({url:t,method:o},f)).then((function(e){return function(e,t){var n=h[t];return"function"==typeof n?n(e):e}(c?(0,u.default)(e||{},c):e,l)})).catch((function(){return console.log("Unable to retrieve visibility result",{visibilityMethod:"apiRequest",method:o,url:t}),!1}))]:(console.log("Unable to call API, no account number"),[2,!1])}}))}))}};t.isVisible=function(e,t,n){return!e||!e.includes(t)||(n instanceof Object?Boolean(n[t]):n)},t.default=Object.freeze({noAuthParam:"noauth",offlineToken:"2402500adeacc30eb5c5a8a5e2e0ec1f"})},97027:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(21472)),i=function(){function e(){this._cookie,this._keycloak}return e.prototype.setCookie=function(e){this.cookie=e},e.prototype.setKeycloak=function(e,t,n,r){this._keycloak=(0,o.default)(e),this._keycloak.onTokenExpired=t,this._keycloak.onAuthSuccess=n,this._keycloak.onAuthRefreshSuccess=r},e.prototype.initializeKeycloak=function(e){this._keycloak.init(e)},e.prototype.setToken=function(e){this._keycloak.authenticated=!0,this._keycloak.token=e},e.prototype.initialize=function(e){return this._keycloak.init(e)},e.prototype.setTokenParsed=function(e){this._keycloak.tokenParsed=e},e.prototype.getTokenParsed=function(){return this._keycloak.tokenParsed},e.prototype.getToken=function(){return this._keycloak.token},e.prototype.getRefershToken=function(){this._keycloak.refreshToken},e.prototype.login=function(e){return this._keycloak.login(e)},e.prototype.clearToken=function(){this._keycloak.clearToken()},e.prototype.getCookie=function(){return this.cookie},e.prototype.logout=function(e){return this._keycloak.logout(e)},e.prototype.getAuthenticated=function(){return this._keycloak.authenticated},e.prototype.updateToken=function(){return this._keycloak.updateToken()},e}();t.default=i},30909:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.offlineToken=t.noAuthParam=t.options=t.DEFAULT_ROUTES=void 0,t.DEFAULT_ROUTES={prod:{url:["access.redhat.com","prod.foo.redhat.com","cloud.redhat.com","console.redhat.com"],sso:"https://sso.redhat.com/auth",portal:"https://access.redhat.com"},qa:{url:["qa.foo.redhat.com","qa.cloud.redhat.com","qa.console.redhat.com"],sso:"https://sso.qa.redhat.com/auth",portal:"https://access.qa.redhat.com"},ci:{url:["ci.foo.redhat.com","ci.cloud.redhat.com","ci.console.redhat.com"],sso:"https://sso.qa.redhat.com/auth",portal:"https://access.qa.redhat.com"},qaprodauth:{url:["qaprodauth.foo.redhat.com","qaprodauth.cloud.redhat.com","qaprodauth.console.redhat.com"],sso:"https://sso.redhat.com/auth",portal:"https://access.redhat.com"},stage:{url:["stage.foo.redhat.com","cloud.stage.redhat.com","console.stage.redhat.com"],sso:"https://sso.stage.redhat.com/auth",portal:"https://access.stage.redhat.com"},gov:{url:["gov.cloud.redhat.com","gov.console.redhat.com"],sso:"https://sso.redhat.com/auth",portal:"https://access.redhat.com"},govStage:{url:["gov.cloud.stage.redhat.com","gov.console.stage.redhat.com"],sso:"https://sso.stage.redhat.com/auth",portal:"https://access.redhat.com"},dev:{url:["console.dev.redhat.com"],sso:"https://sso.redhat.com/auth",portal:"https://access.redhat.com"}},t.options={realm:"redhat-external",clientId:"cloud-services",cookieName:"cs_jwt"},t.noAuthParam="noauth",t.offlineToken="2402500adeacc30eb5c5a8a5e2e0ec1f"},69934:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(9669)),i=n(49268),a=n(46182),c=n(68491),s="/api/entitlements/v1";t.default=function(e){var t=(0,c.bootstrapCache)(s,"".concat(e,"-entitlements")),n=o.default.create({adapter:t.adapter});return n.interceptors.response.use((function(e){if(e&&e.request&&!0!==e.request.fromCache){var t=(0,a.lastActive)("/api/entitlements/v1/services","fallback"),n=Object.keys(localStorage).filter((function(e){return e.endsWith("/api/entitlements/v1/services")&&e!==t}));(0,a.deleteLocalStorageItems)(n)}return e.data||e})),new i.ServicesApi(void 0,s,n)}},64698:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getOfflineToken=t.wipePostbackParamsThatAreNotForUs=void 0;var a=i(n(6760)),c=n(30909),s=i(n(36019)),u=i(n(9669)),l=i(n(54998)),f={};function h(){return window}function d(e,t,n){return{code:n,grant_type:"authorization_code",client_id:t,redirect_uri:encodeURIComponent(e.split("#")[0])}}t.wipePostbackParamsThatAreNotForUs=function(){if(-1!==h().location.href.indexOf(a.default.offlineToken)){var e=h().location,t=e.hash,n=e.search,r=e.origin,o=e.pathname,i=new URLSearchParams(n).get(a.default.noAuthParam);f.postbackUrl="".concat(r).concat(o,"?").concat(a.default.noAuthParam,"=").concat(i).concat(t),h().location.hash="";var c=(0,l.default)(h().location.href);c.removeQuery(a.default.noAuthParam),h().history.pushState("offlinePostback","",c.toString())}},t.getOfflineToken=function(e,t){return r(this,void 0,void 0,(function(){var n,r,i,a;return o(this,(function(o){switch(o.label){case 0:return h=f.postbackUrl,delete f.postbackUrl,n=h,f.response?[2,Promise.resolve(f.response)]:n?[4,(0,s.default)(c.DEFAULT_ROUTES)]:[2,Promise.reject("not available")];case 1:return r=o.sent(),i="".concat(r,"/realms/").concat(e,"/protocol/openid-connect/token"),a=n.split("#")[1].split("&").reduce((function(e,t){var n=t.split("=");return e[n[0]]=n[1],e}),{}),[2,u.default.post(i,(l=d(n,t,a.code),Object.entries(l).map((function(e){return"".concat(e[0],"=").concat(e[1])})).join("&")),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return f.response=e,e}))]}var l,h}))}))}},63104:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=""},36019:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},a=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))},c=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=(0,s(n(48948)).default)("insights/url.js"),l=Promise.resolve().then((function(){return i(n(63104))})).then((function(e){return e.default}));t.default=function(e){return a(void 0,void 0,void 0,(function(){var t;return c(this,(function(n){switch(n.label){case 0:return[4,l];case 1:return n.sent()?(u("Using dynamic SSO_URL found! ",l),[2,l]):(t=Object.entries(e).find((function(e){return e[1].url.includes(location.hostname)})))?(u("SSO Url: ".concat(null==t?void 0:t[1].sso)),u("Current env: ".concat(null==t?void 0:t[0])),[2,null==t?void 0:t[1].sso]):(u("SSO url: not found, defaulting to qa"),u("Current env: not found, defaultint to qa"),[2,"https://sso.qa.redhat.com/auth"])}}))}))}},24514:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=n(46182),s=a(n(69934)),u=(0,a(n(48948)).default)("insights/user.js"),l={"cost-management":"cost_management",insights:"insights",openshift:"openshift",migrations:"migrations",ansible:"ansible",subscriptions:"subscriptions",settings:"settings","user-preferences":"user_preferences",internal:"internal"};function f(){return window}function h(e,t){var n;if("insights"===t||"openshift"===t||"cost-management"===t||"migrations"===t||"ansible"===t||"subscriptions"===t||"settings"===t||"user-preferences"===t||"internal"===t){var r=l[t];!0===e&&f().location.replace("".concat(document.baseURI,"?not_entitled=").concat(r)),t&&""!==t&&((null===(n=null==e?void 0:e[r])||void 0===n?void 0:n.is_entitled)?u("Entitled to: ".concat(r)):(u("Not entitled to: ".concat(r)),f().location.replace("".concat(document.baseURI,"?not_entitled=").concat(r))))}}t.default=function(e){return o(void 0,void 0,void 0,(function(){var t,n,o;return i(this,(function(i){switch(i.label){case 0:if(t=function(e){return e?{identity:r(r({account_number:e.account_number,type:e.type},e.idp&&{idp:e.idp}),{user:{username:e.username,email:e.email,first_name:e.first_name,last_name:e.last_name,is_active:e.is_active,is_org_admin:e.is_org_admin,is_internal:e.is_internal,locale:e.locale},internal:{org_id:e.org_id,account_id:e.account_id}})}:null}(e),(n=f().location.pathname.split("/")).shift(),"beta"===n[0]&&n.shift(),"subscriptions"!==(null==n?void 0:n[1])&&"cost-management"!==(null==n?void 0:n[1])||n.shift(),!t)return[3,7];u("Account Number: ".concat(t.identity.account_number)),o=void 0,i.label=1;case 1:return i.trys.push([1,5,,6]),t.identity.account_number?[4,(0,s.default)(e.jti).servicesGet()]:[3,3];case 2:return o=i.sent(),[3,4];case 3:console.log("Cannot call entitlements API, no account number"),i.label=4;case 4:return[3,6];case 5:return i.sent(),[3,6];case 6:return(0,c.pageAllowsUnentitled)()?[2,r(r({},t),{entitlements:o||{}})]:(0,c.isValidAccountNumber)(t.identity.account_number)?(h(o,n[0]),[2,r(r({},t),{entitlements:o})]):(h(!0,n[0]),[2]);case 7:u("User not ready"),i.label=8;case 8:return[2]}}))}))}},28502:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return i(t,e),t},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getUrl=t.getEncodedToken=t.expiredToken=t.isAuthenticated=t.getUserInfo=t.logoutAllTabs=t.login=t.init=t.doOffline=t.decodeToken=t.GLOBAL_FILTER_KEY=void 0;var s=c(n(21472)),u=n(38437),l=c(n(10646)),f=n(46182),h=a(n(47820)),d=n(46182),p=c(n(48948)),v=c(n(36019)),g=c(n(24514)),m=c(n(54998)),b=n(30909),_=c(n(97027));t.GLOBAL_FILTER_KEY="chrome:global-filter";var y=(0,p.default)("jwt.js"),w="cs_jwt",k=new _.default,O=new u.BroadcastChannel("auth");function T(e){switch((e=(e=(e=e.split(".")[1]).replace("/-/g","+")).replace("/_/g","/")).length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Invalid token"}return e=(e=(e+"===").slice(0,e.length+e.length%4)).replace(/-/g,"+").replace(/_/g,"/"),e=decodeURIComponent(escape(atob(e))),e=JSON.parse(e)}O.onmessage=function(e){if(e&&e.data&&e.data.type)switch(y("BroadcastChannel, Received event : ".concat(e.data.type)),e.data.type){case"logout":return P();case"login":return j();case"refresh":return I()}},t.decodeToken=T;t.doOffline=function(e,t){var n=(0,m.default)(window.location.href);n.removeSearch(e),n.addSearch(e,t),Promise.resolve((0,v.default)(b.DEFAULT_ROUTES)).then((function(e){var t=r(r({},b.options),{promiseType:"native",redirectUri:n.toString(),url:e}),o=(0,s.default)(t);o.init(t).then((function(){o.login({scope:"offline_access"})}))}))};function S(e){y("Checking validity of existing JWT");try{if(!e)return!1;var t=T(e);if(!t.exp)return!1;var n=Date.now().toString().substr(0,10),r=t.exp-n;return y("Token expires in ".concat(r)),r>90?(k.setTokenParsed(t),!0):(y(r>0?"token is expiring in < 90 seconds":"token is expired"),!1)}catch(e){return y(e),!1}}function A(){var e;y("JWT Initialized"),C(k.getToken()),e=k.getRefershToken(),y("Setting the refresh token"),l.default.set("cs_jwt_refresh",e,{secure:!0})}function E(){y("JWT init error"),P()}function j(){return y("Logging in"),l.default.set("cs_loggedOut","false"),k.login({redirectUri:location.href})}function P(e){y("Logging out"),k.clearToken(),l.default.remove(k.getCookie().cookieName),l.default.remove("cs_demo");var n="beta"===window.location.pathname.split("/")[1]?"/beta":"",r=Object.keys(localStorage).filter((function(e){return e.endsWith("/api/entitlements/v1/services")||e.endsWith("/chrome")||e.endsWith("/chrome-store")||e.startsWith("kc-callback")||e.startsWith(t.GLOBAL_FILTER_KEY)}));if((0,d.deleteLocalStorageItems)(r),e){var o=new Date((new Date).getTime()+8e3);l.default.set("cs_loggedOut","true",{expires:o}),k.logout({redirectUri:"https://".concat(window.location.host).concat(n)})}}t.init=function(e){y("Initializing");var t=e.cookieName?e.cookieName:w;return k.setCookie({cookieName:t}),Promise.resolve((0,v.default)(e.routes?e.routes:b.DEFAULT_ROUTES)).then((function(t){e.url=t,e.clientId="cloud-services",e.realm="redhat-external",e.promiseType="native",e.onLoad="check-sso",e.checkLoginIframe=!1;var n="beta"===window.location.pathname.split("/")[1]?"/beta":"";if(e.silentCheckSsoRedirectUri="https://".concat(window.location.host).concat(n,"/apps/chrome/silent-check-sso.html"),window.localStorage&&"true"===window.localStorage.getItem("chrome:jwt:shortSession")&&(e.realm="short-session"),k.setKeycloak(e,I,U,x),e.token){if(S(e.token))return k.initializeKeycloak(e),k.setToken(e.token),Promise.resolve();delete e.token}return k.initialize(e).then(A).catch(E)}))},t.login=j;function U(){O.postMessage({type:"login"})}t.logoutAllTabs=function(e){O.postMessage({type:"logout"}),P(e)};t.getUserInfo=function(){y("Getting User Information");var e=l.default.get(w);return e&&S(e)&&S(k.getToken())?(0,g.default)(k.getTokenParsed()):I().then((function(){(0,g.default)(k.getTokenParsed()),y("Successfully updated token")})).catch((function(){if((0,f.pageRequiresAuthentication)())return y("Trying to log in user to refresh token"),j()}))};t.isAuthenticated=function(){return y("User Ready: ".concat(k.getAuthenticated())),k.getAuthenticated()};function x(){C(k.getToken()),O.postMessage({type:"refresh"})}function I(){return k.updateToken().then((function(e){C(k.getToken()),y("Attempting to update token"),y(e?"Token was successfully refreshed":"Token is still valid, not updating")})).catch((function(e){y(e),h.captureException(e),y("Token updated failed, trying to reauth"),j()}))}function C(e){var t,n,r;y("Setting the cs_jwt cookie"),e&&e.length>10&&(t="".concat(k.getCookie().cookieName,"=").concat(e,";")+"path=/;secure=true;"+"expires=".concat((n=T(e).exp,(r=new Date(0)).setUTCSeconds(n),r.toGMTString())),document.cookie=t)}t.expiredToken=function(){y("Token has expired, trying to log out"),P()};t.getEncodedToken=function(){return y("Trying to get the encoded token"),S(k.getToken())||(y("Failed to get encoded token, trying to update"),I()),k.getToken()};t.getUrl=function(){return(0,v.default)(b.DEFAULT_ROUTES)}},48948:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){window.console&&window.localStorage&&window.localStorage.getItem("chrome:jwt:debug")&&window.console.log("[JWT][".concat(e,"] ").concat(t))}}},73909:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return i(t,e),t},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.initChromeAuth=void 0;var s=n(64698),u=a(n(28502)),l=c(n(10646)),f=n(30909),h="[JWT][jwt.js] Auth time";function d(){u.isAuthenticated()||(l.default.remove(f.options.cookieName),u.login()),console.timeEnd(h)}t.initChromeAuth=function(){console.time(h);var e=r({},f.options);(0,s.wipePostbackParamsThatAreNotForUs)();var t=l.default.get(e.cookieName),n=l.default.get("cs_jwt_refresh");return t&&t.length>10&&n&&n.length>10&&(e.refreshToken=n,e.token=t),{initPromise:u.init(e).then(d)}};t.default=function(){var e=r({},f.options);return r({getOfflineToken:function(){return(0,s.getOfflineToken)(e.realm,e.clientId)}},u)}},46182:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.levelArray=t.highlightItems=t.updateDocumentTitle=t.isFedRamp=t.isBeta=t.getEnvDetails=t.getEnv=t.getUrl=t.isAnsible=t.lastActive=t.deleteLocalStorageItems=t.createReduxListener=t.pageRequiresAuthentication=t.pageAllowsUnentitled=t.isValidAccountNumber=t.getWindow=void 0;var i=o(n(27361)),a=n(30909),c=o(n(94654));function s(){return window}t.getWindow=s,t.isValidAccountNumber=function(e){return!!e&&(-1!==e&&("-1"!==e&&Number.isInteger(Number(e))))},t.pageAllowsUnentitled=function(){var e=s().location.pathname;return"/"===e||"/beta"===e||"/beta/"===e||0===e.indexOf("/openshift")||0===e.indexOf("/beta/openshift")||0===e.indexOf("/security")||0===e.indexOf("/beta/security")||0===e.indexOf("/application-services")||0===e.indexOf("/beta/application-services")||0===e.indexOf("/hac")||0===e.indexOf("/beta/hac")},t.pageRequiresAuthentication=function(){var e,t="beta"===(e=s().location.pathname.split("/"))[1]?e[2]||"":e[1];return"insights"===t||"cost-management"===t||"apps"===t||"ansible"===t||"migrations"===t||"subscriptions"===t||"openshift"===t||"settings"===t||"user-preferences"===t||"internal"===t||"application-services"===t},t.createReduxListener=function(e,t,n){var r=void 0;return function(){var o=e.getState(),a=(0,i.default)(o,t);a!==r&&(r=a,n(a,e))}},t.deleteLocalStorageItems=function(e){e.map((function(e){return localStorage.removeItem(e)}))},t.lastActive=function(e,t){return Object.keys(localStorage).reduce((function(t,n){if(n.includes(e))try{var r=void 0;try{r=new Date(JSON.parse(localStorage.getItem(t).expires))}catch(e){r=new Date}var o=JSON.parse(localStorage.getItem(n));return r>=new Date(o.expires)?t:n}catch(e){return t}return t}),t)};function u(){var e;return(null===(e=Object.entries(a.DEFAULT_ROUTES).find((function(e){return e[1].url.includes(location.hostname)})))||void 0===e?void 0:e[0])||"qa"}t.isAnsible=function(e){return e.includes("ansible")&&e.includes("insights")},t.getUrl=function(e){if("/beta/"===window.location.pathname||"/"===window.location.pathname)return"landing";var n=window.location.pathname.split("/");return"beta"===n[1]?"bundle"===e?n[2]:n[3+(0,t.isAnsible)(n)]:"bundle"===e?n[1]:n[2+(0,t.isAnsible)(n)]},t.getEnv=u,t.getEnvDetails=function(){var e;return null===(e=Object.entries(a.DEFAULT_ROUTES).find((function(e){return e[1].url.includes(location.hostname)})))||void 0===e?void 0:e[1]},t.isBeta=function(){return"beta"===window.location.pathname.split("/")[1]},t.isFedRamp=function(){return"gov"===u()},t.updateDocumentTitle=function(e){void 0!==e&&("string"==typeof e?document.title=e:console.warn("Title is not a string. Got ".concat(typeof e," instead.")))};function l(e,t){return t.map((function(t){var n=t.href,o=t.routes,i=t.navItems;return!n&&i?r(r({},t),{navItems:l(e,i)}):!n&&o?r(r({},t),function(e,t){var n=!1,o=t.map((function(t){var o=t.href===e;return o&&(n=!0),r(r({},t),{active:o})}));return{active:n,routes:o}}(e,o)):n?r(r({},t),{active:t.href===e}):t}))}t.highlightItems=function(e,t,n){var r=e.replace(/\/$/,""),o=r.split("/").length+1,i=n.find((function(e){var t=e.replace(/\/$/,"").split("/").slice(0,o).join("/");return r.includes(t)}));return l(null==i?void 0:i.replace(/\/$/,""),t)};t.levelArray=function(e){return(0,c.default)(e,(function(e){var n=e.href,r=e.routes,o=e.navItems;return!n&&o?(0,t.levelArray)(o):!n&&r?(0,t.levelArray)(r):n?[n]:[]}))}},68491:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CacheAdapter=t.bootstrapCache=t.createCacheStore=void 0;var c,s=n(35974),u=a(n(69483)),l=n(46182);t.createCacheStore=function(e,t){var n=(0,l.lastActive)(e,t);return u.default.createInstance({driver:[u.default.LOCALSTORAGE],name:(null==n?void 0:n.split("/")[0])||n})},t.bootstrapCache=function(e,n){var r=(0,t.createCacheStore)(e,n);return(0,s.setupCache)({store:r,maxAge:6e5})};var f=function(){function e(e,n,r){var o,i;if(void 0===r&&(r=6e5),this.maxAge=r,this.expires=(new Date).getTime()+this.maxAge,o=window.insights.chrome.isBeta()?"beta":"non-beta",(i=localStorage.getItem("chrome:prevEnv"))&&o!==i&&(0,l.deleteLocalStorageItems)(Object.keys(localStorage).filter((function(e){return e.endsWith("/chrome-store")}))),localStorage.setItem("chrome:prevEnv",o),!c){var a=(0,l.lastActive)(e,n),s=void 0;try{s=JSON.parse(localStorage.getItem(a))}catch(e){s=localStorage.getItem(a)}if(this.name=a,this.endpoint=e,this.cacheKey=n,c=(0,t.createCacheStore)(e,n),new Date(parseInt(null==s?void 0:s.expires,10))>=new Date)this.setCache(parseInt(null==s?void 0:s.expires,10),null==s?void 0:s.data);else{var u=(new Date).getTime()+this.maxAge;this.setCache(u,{})}}}return e.prototype.setCache=function(e,t){return o(this,void 0,void 0,(function(){return i(this,(function(n){switch(n.label){case 0:return this.expires=e,[4,c.setItem(this.endpoint,{data:t,expires:e})];case 1:return n.sent(),[2]}}))}))},e.prototype.invalidateStore=function(){return o(this,void 0,void 0,(function(){var e;return i(this,(function(n){switch(n.label){case 0:return new Date(this.expires)<=new Date?((0,l.deleteLocalStorageItems)(Object.keys(localStorage).filter((function(e){return e.endsWith("/chrome")}))),[4,u.default.dropInstance()]):[3,3];case 1:return n.sent(),c=(0,t.createCacheStore)(this.endpoint,this.cacheKey),e=(new Date).getTime()+this.maxAge,[4,this.setCache(e,{})];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))},e.prototype.setItem=function(e,t){return o(this,void 0,void 0,(function(){var n,o;return i(this,(function(i){switch(i.label){case 0:return[4,this.invalidateStore()];case 1:return i.sent(),[4,c.getItem(this.endpoint)];case 2:return(n=i.sent()).data=r(r({},null==n?void 0:n.data),((o={})[e]=t,o)),[4,c.setItem(this.endpoint,n)];case 3:return i.sent(),[2]}}))}))},e.prototype.getItem=function(e){var t;return o(this,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:return[4,this.invalidateStore()];case 1:return r.sent(),[4,c.getItem(this.endpoint)];case 2:return n=r.sent(),[2,null===(t=null==n?void 0:n.data)||void 0===t?void 0:t[e]]}}))}))},e}();t.CacheAdapter=f},199:()=>{}}]);