(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[640],{89850:(e,t,n)=>{"use strict";n.d(t,{sL:()=>m});var r=n(90484),o=n(78927),c=n(81253),i=n(34738),a=n(96156),s=(n(87757),n(74624),n(23911),n(57557),n(94654)),u=n.n(s),l=n(88306),p=n.n(l),f=n(97704);function d(e){var t=function(e,t){if("object"!==(0,r.Z)(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==(0,r.Z)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===(0,r.Z)(t)?t:String(t)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m="chrome:global-filter",v=function(e){return e.replace(/\//gi,"%2F").replace(/=/gi,"%3D")};p()((function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e.Workloads,a=e[f.YF],s=(0,c.Z)(e,["Workloads",f.YF].map(d)),l=u()(Object.entries(g(g({},s),!n&&{Workloads:r})||{}),(function(e){var n=(0,i.Z)(e,2),r=n[0],o=n[1];return Object.entries(o||{}).filter((function(e){return(0,i.Z)(e,2)[1].isSelected})).map((function(e){var n=(0,i.Z)(e,2),o=n[0],c=n[1],a=c.item,s=c.value;return"".concat(r?"".concat(t?encodeURIComponent(v(r)):v(r),"/"):"").concat(t?encodeURIComponent(v((null==a?void 0:a.tagKey)||o)):v((null==a?void 0:a.tagKey)||o)).concat(null!=a&&a.tagValue||s?"=".concat(t?encodeURIComponent(v((null==a?void 0:a.tagValue)||s)):v((null==a?void 0:a.tagValue)||s)):"")}))}));return n?[r,Object.entries(a||{}).filter((function(e){return(0,i.Z)(e,2)[1].isSelected})).reduce((function(e,t){var n=(0,i.Z)(t,1)[0];return[].concat((0,o.Z)(e),[n])}),[]),l]:l}),(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return"".concat(Object.entries(e).map((function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1];return"".concat(n,".").concat(Object.entries(r||{}).filter((function(e){return(0,i.Z)(e,2)[1].isSelected})).map((function(e){return(0,i.Z)(e,1)[0]})).join(""))})).join(",")).concat(t?"_encode":"").concat(n?"_format":"")}))},98670:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>P});var r=n(81253),o=n(96156),c=n(34738),i=n(92137),a=n(87757),s=n.n(a),u=n(77460),l=n(27361),p=n.n(l),f=n(41609),d=n.n(f);n(36808);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m,v,b,k,y,w,O={isEmpty:d(),isNotEmpty:function(e){return!d()(e)}},j=function(e,t){var n=O[t];return"function"==typeof n?n(e):e};w=(0,i.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return t=e.sent,e.prev=3,e.abrupt("return",t.identity.user.is_org_admin);case 7:return e.prev=7,e.t0=e.catch(3),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[3,7]])}))),y=(0,i.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return t=e.sent,e.prev=3,e.abrupt("return",t.identity.user.is_active);case 7:return e.prev=7,e.t0=e.catch(3),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[3,7]])}))),k=(0,i.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return t=e.sent,e.prev=3,e.abrupt("return",t.identity.user.is_internal);case 7:return e.prev=7,e.t0=e.catch(3),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[3,7]])}))),b=(0,i.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return n=e.sent,r=(n||{}).entitlements,e.abrupt("return",n.entitlements&&t?Boolean(r[t]&&r[t].is_entitled):Object.entries(r||{}).reduce((function(e,t){var n=(0,c.Z)(t,2),r=n[0],i=n[1].is_entitled;return g(g({},e),{},(0,o.Z)({},r,i))}),{}));case 5:case"end":return e.stop()}}),e)}))),v=(0,i.Z)(s().mark((function e(t){var n,r,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return r=e.sent,o=(r||{}).identity.user,e.abrupt("return",null==o||null===(n=o.email)||void 0===n?void 0:n.includes(t));case 5:case"end":return e.stop()}}),e)}))),m=(0,i.Z)(s().mark((function e(t){var n,o,c,i,a,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,o=t.method,c=void 0===o?"GET":o,i=t.accessor,a=t.matcher,l=(0,r.Z)(t,["url","method","accessor","matcher"]),e.next=3,insights.chrome.auth.getUser();case 3:if(!e.sent.identity.account_number){e.next=8;break}return e.abrupt("return",(0,u.ZP)(g({url:n,method:c},l)).then((function(e){return j(i?p()(e||{},i):e,a)})).catch((function(){return console.log("Unable to retrieve visibility result",{visibilityMethod:"apiRequest",method:c,url:n}),!1})));case 8:return console.log("Unable to call API, no account number"),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e)})));const P=Object.freeze({noAuthParam:"noauth",offlineToken:"2402500adeacc30eb5c5a8a5e2e0ec1f",allowedUnauthedPaths:["/","/logout","/beta","/security/insights","/beta/security/insights"]})},11972:(e,t,n)=>{"use strict";n.d(t,{wM:()=>r,YM:()=>o,bv:()=>c});var r={prod:{url:["access.redhat.com","prod.foo.redhat.com","cloud.redhat.com"],sso:"https://sso.redhat.com/auth"},qa:{url:["qa.foo.redhat.com","qa.cloud.redhat.com"],sso:"https://sso.qa.redhat.com/auth"},ci:{url:["ci.foo.redhat.com","ci.cloud.redhat.com"],sso:"https://sso.qa.redhat.com/auth"},qaprodauth:{url:["qaprodauth.foo.redhat.com","qaprodauth.cloud.redhat.com"],sso:"https://sso.redhat.com/auth"},stage:{url:["stage.foo.redhat.com","cloud.stage.redhat.com"],sso:"https://sso.stage.redhat.com/auth"}},o={realm:"redhat-external",clientId:"cloud-services",cookieName:"cs_jwt"},c=["/","/logout","/beta","/security/insights","/beta/security/insights"]},12008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(9669),o=n.n(r),c=n(49268),i=n(74624),a="/api/entitlements/v1";const s=function(e){var t=(0,i.bootstrapCache)(a,"".concat(e,"-entitlements")),n=o().create({adapter:t.adapter});return n.interceptors.response.use((function(e){if(e&&e.request&&!0!==e.request.fromCache){var t=(0,i.lastActive)("/api/entitlements/v1/services","fallback"),n=Object.keys(localStorage).filter((function(e){return e.endsWith("/api/entitlements/v1/services")&&e!==t}));(0,i.deleteLocalStorageItems)(n)}return e.data||e})),new c.ServicesApi(void 0,a,n)}},60200:(e,t,n)=>{"use strict";n.d(t,{W:()=>p,x:()=>f});var r=n(98670),o=n(11972),c=n(35379),i=n(9669),a=n.n(i),s=n(54998),u=n.n(s),l={};function p(){if(-1!==d().location.href.indexOf(r.ZP.offlineToken)){var e=d().location,t=e.hash,n=e.search,o=e.origin,c=e.pathname,i=new URLSearchParams(n).get(r.ZP.noAuthParam);l.postbackUrl="".concat(o).concat(c,"?").concat(r.ZP.noAuthParam,"=").concat(i).concat(t),d().location.hash="";var a=u()(d().location.href);a.removeQuery(r.ZP.noAuthParam),d().history.pushState("offlinePostback","",a.toString())}}function f(e,t){var n,r=(n=l.postbackUrl,delete l.postbackUrl,n);if(l.response)return Promise.resolve(l.response);if(!r)return Promise.reject("not available");var i,s="".concat((0,c.Z)(o.wM),"/realms/").concat(e,"/protocol/openid-connect/token"),u=r.split("#")[1].split("&").reduce((function(e,t){var n=t.split("=");return e[n[0]]=n[1],e}),{});return a()({method:"post",url:s,data:(i=h(r,t,u.code),Object.entries(i).map((function(e){return"".concat(e[0],"=").concat(e[1])})).join("&")),config:{headers:{"Content-Type":"application/x-www-form-urlencoded"}}}).then((function(e){return l.response=e,e}))}function d(){return window}function h(e,t,n){return{code:n,grant_type:"authorization_code",client_id:t,redirect_uri:encodeURIComponent(e.split("#")[0])}}},35379:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(34738),o=(0,n(82389).Z)("insights/url.js");const c=function(e){var t=Object.entries(e).find((function(e){return(0,r.Z)(e,2)[1].url.includes(location.hostname)}));return t?(o("SSO Url: ".concat(null==t?void 0:t[1].sso)),o("Current env: ".concat(null==t?void 0:t[0])),null==t?void 0:t[1].sso):(o("SSO url: not found, defaulting to qa"),o("Current env: not found, defaultint to qa"),"https://sso.qa.redhat.com/auth")}},85146:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(96156),o=n(92137),c=n(87757),i=n.n(c),a=n(74624),s=n(12008);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=(0,n(82389).Z)("insights/user.js"),f={"cost-management":"cost_management",insights:"insights",openshift:"openshift",migrations:"migrations",ansible:"ansible",subscriptions:"subscriptions",settings:"settings","user-preferences":"user_preferences",internal:"internal"};function d(){return window}function h(e){return e?{identity:{account_number:e.account_number,type:e.type,user:{username:e.username,email:e.email,first_name:e.first_name,last_name:e.last_name,is_active:e.is_active,is_org_admin:e.is_org_admin,is_internal:e.is_internal,locale:e.locale},internal:{org_id:e.org_id,account_id:e.account_id}}}:null}function g(e,t){if("insights"===t||"openshift"===t||"cost-management"===t||"migrations"===t||"ansible"===t||"subscriptions"===t||"settings"===t||"user-preferences"===t||"internal"===t){var n,r=f[t];if(!0===e&&d().location.replace("".concat(document.baseURI,"?not_entitled=").concat(r)),t&&""!==t)null!=e&&null!==(n=e[r])&&void 0!==n&&n.is_entitled?p("Entitled to: ".concat(r)):(p("Not entitled to: ".concat(r)),d().location.replace("".concat(document.baseURI,"?not_entitled=").concat(r)))}}const m=function(){var e=(0,o.Z)(i().mark((function e(t){var n,r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=h(t),(r=d().location.pathname.split("/")).shift(),"beta"===r[0]&&r.shift(),"subscriptions"!==(null==r?void 0:r[1])&&"cost-management"!==(null==r?void 0:r[1])||r.shift(),!n){e.next=28;break}if(p("Account Number: ".concat(n.identity.account_number)),e.prev=7,!n.identity.account_number){e.next=14;break}return e.next=11,(0,s.Z)(t.jti).servicesGet();case 11:o=e.sent,e.next=15;break;case 14:console.log("Cannot call entitlements API, no account number");case 15:e.next=19;break;case 17:e.prev=17,e.t0=e.catch(7);case 19:if(!(0,a.pageAllowsUnentitled)()){e.next=21;break}return e.abrupt("return",l(l({},n),{},{entitlements:o||{}}));case 21:if((0,a.isValidAccountNumber)(n.identity.account_number)){e.next=24;break}return g(!0,r[0]),e.abrupt("return");case 24:return g(o,r[0]),e.abrupt("return",l(l({},n),{},{entitlements:o}));case 28:p("User not ready");case 29:case"end":return e.stop()}}),e,null,[[7,17]])})));return function(t){return e.apply(this,arguments)}}()},23911:(e,t,n)=>{"use strict";n.r(t),n.d(t,{decodeToken:()=>P,doOffline:()=>S,init:()=>_,login:()=>U,logoutAllTabs:()=>I,getUserInfo:()=>C,isAuthenticated:()=>E,expiredToken:()=>N,getEncodedToken:()=>M,getUrl:()=>L});var r=n(96156),o=n(21472),c=n.n(o),i=n(55610),a=n(36808),s=n.n(a),u=n(74624),l=n(39666),p=n(89850),f=n(82389),d=n(11972),h=n(35379),g=n(85146),m=n(54998),v=n.n(m);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=(0,f.Z)("jwt.js"),w="cs_jwt",O={},j=new i.g0("auth");function P(e){switch((e=(e=(e=e.split(".")[1]).replace("/-/g","+")).replace("/_/g","/")).length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Invalid token"}return e=(e=(e+"===").slice(0,e.length+e.length%4)).replace(/-/g,"+").replace(/_/g,"/"),e=decodeURIComponent(escape(atob(e))),e=JSON.parse(e)}j.onmessage=function(e){if(e&&e.data&&e.data.type)switch(y("BroadcastChannel, Received event : ".concat(e.data.type)),e.data.type){case"logout":return D();case"login":return U();case"refresh":return q()}};var S=function(e,t){var n=v()(window.location.href);n.removeSearch(e),n.addSearch(e,t);var r=k(k({},d.YM),{},{promiseType:"native",redirectUri:n.toString(),url:(0,h.Z)(d.wM)}),o=c()(r);o.init(r).then((function(){o.login({scope:"offline_access"})}))},_=function(e){y("Initializing");var t=e.cookieName?e.cookieName:w;O.cookie={cookieName:t},e.url=(0,h.Z)(e.routes?e.routes:d.wM),e.clientId="cloud-services",e.realm="redhat-external",e.promiseType="native",e.onLoad="check-sso",e.checkLoginIframe=!1;var n="beta"===window.location.pathname.split("/")[1]?"/beta":"";if(e.silentCheckSsoRedirectUri="https://".concat(window.location.host).concat(n,"/silent-check-sso.html"),window.localStorage&&"true"===window.localStorage.getItem("chrome:jwt:shortSession")&&(e.realm="short-session"),O.keycloak=c()(e),O.keycloak.onTokenExpired=q,O.keycloak.onAuthSuccess=A,O.keycloak.onAuthRefreshSuccess=W,e.token){if(Z(e.token))return O.keycloak.init(e),new Promise((function(t){O.keycloak.authenticated=!0,O.keycloak.token=e.token,t()}));delete e.token}return O.keycloak.init(e).then(x).catch(T)};function Z(e){y("Checking validity of existing JWT");try{if(!e)return!1;var t=P(e);if(!t.exp)return!1;var n=Date.now().toString().substr(0,10),r=t.exp-n;return y("Token expires in ".concat(r)),r>90?(O.keycloak.tokenParsed=t,!0):(y(r>0?"token is expiring in < 90 seconds":"token is expired"),!1)}catch(e){return y(e),!1}}function x(){var e;y("JWT Initialized"),R(O.keycloak.token),e=O.keycloak.refreshToken,y("Setting the refresh token"),s().set("cs_jwt_refresh",e,{secure:!0})}function T(){y("JWT init error"),D()}function U(){return y("Logging in"),s().set("cs_loggedOut","false"),O.keycloak.login({redirectUri:location.href})}function D(e){y("Logging out"),O.keycloak.clearToken(),s().remove(O.cookie.cookieName),s().remove("cs_demo");var t="beta"===window.location.pathname.split("/")[1]?"/beta":"",n=Object.keys(localStorage).filter((function(e){return e.endsWith("/api/entitlements/v1/services")||e.endsWith("/config/main.yml")||e.endsWith("/chrome")||e.endsWith("/chrome-store")||e.startsWith("kc-callback")||e.startsWith(p.sL)}));if((0,u.deleteLocalStorageItems)(n),e){var r=new Date((new Date).getTime()+8e3);s().set("cs_loggedOut","true",{expires:r}),O.keycloak.logout({redirectUri:"https://".concat(window.location.host).concat(t)})}}var I=function(e){j.postMessage({type:"logout"}),D(e)};function A(){j.postMessage({type:"login"})}var C=function(){y("Getting User Information");var e=s().get(w);return e&&Z(e)&&Z(O.keycloak.token)?(0,g.Z)(O.keycloak.tokenParsed):q().then((function(){(0,g.Z)(O.keycloak.tokenParsed),y("Successfully updated token")})).catch((function(){if((0,u.pageRequiresAuthentication)())return y("Trying to log in user to refresh token"),U()}))},E=function(){return y("User Ready: ".concat(O.keycloak.authenticated)),O.keycloak.authenticated},N=function(){y("Token has expired, trying to log out"),D()};function W(){j.postMessage({type:"refresh"})}function q(){return O.keycloak.updateToken().then((function(e){R(O.keycloak.token),y("Attempting to update token"),y(e?"Token was successfully refreshed":"Token is still valid, not updating")})).catch((function(e){var t;y(e),l.Tb(e),y("Token updated failed, trying to reauth"),"/"===(t=window.location.pathname)||d.bv.includes(t.replace(/\/$/,""))||U()}))}function R(e){var t,n,r;y("Setting the cs_jwt cookie"),e&&e.length>10&&(t="".concat(O.cookie.cookieName,"=").concat(e,";")+"path=/;secure=true;"+"expires=".concat((n=P(e).exp,(r=new Date(0)).setUTCSeconds(n),r.toGMTString())),document.cookie=t)}var M=function(){return y("Trying to get the encoded token"),Z(O.keycloak.token)||(y("Failed to get encoded token, trying to update"),q()),O.keycloak.token},L=function(){return(0,h.Z)(d.wM)}},82389:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=function(e){return function(t){window.console&&window.localStorage&&window.localStorage.getItem("chrome:jwt:debug")&&window.console.log("[JWT][".concat(e,"] ").concat(t))}}},41665:(e,t,n)=>{"use strict";n.r(t),n.d(t,{allowUnauthed:()=>g,initChromeAuth:()=>m,default:()=>v});var r=n(96156),o=n(60200),c=n(85564),i=n.n(c),a=n(23911),s=n(36808),u=n.n(s),l=n(11972);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d="[JWT][jwt.js] Auth time";function h(){g()||(a.isAuthenticated()||(u().remove(l.YM.cookieName),a.login()),console.timeEnd(d))}function g(){return!!i()(l.bv.map((function(e){return[e,e+"/"]}))).includes(window.location.pathname)}var m=function(){console.time(d);var e=f({},l.YM);(0,o.W)();var t=u().get(e.cookieName);return t&&t.length>10&&(e.token=t,e.refreshToken=u().get("cs_jwt_refresh")),{initPromise:a.init(e).then(h)}};const v=function(){var e=f({},l.YM);return f({getOfflineToken:function(){return(0,o.x)(e.realm,e.clientId)}},a)}},97704:(e,t,n)=>{"use strict";n.d(t,{YF:()=>r});n(7739);var r="SAP ID (SID)"},74624:(e,t,n)=>{"use strict";n.d(t,{isValidAccountNumber:()=>i,pageAllowsUnentitled:()=>a,pageRequiresAuthentication:()=>s,deleteLocalStorageItems:()=>u,lastActive:()=>l,bootstrapCache:()=>p});n(27361);var r=n(35974),o=n(6993);n(11972);function c(){return window}function i(e){return!!e&&(-1!==e&&("-1"!==e&&Number.isInteger(Number(e))))}function a(){var e=c().location.pathname;return"/"===e||"/beta"===e||"/beta/"===e||0===e.indexOf("/openshift")||0===e.indexOf("/beta/openshift")||0===e.indexOf("/security")||0===e.indexOf("/beta/security")||0===e.indexOf("/application-services")||0===e.indexOf("/beta/application-services")}function s(){var e,t="beta"===(e=c().location.pathname.split("/"))[1]?e[2]||"":e[1];return"insights"===t||"cost-management"===t||"apps"===t||"ansible"===t||"migrations"===t||"subscriptions"===t||"openshift"===t||"settings"===t||"user-preferences"===t||"internal"===t||"application-services"===t}function u(e){e.map((function(e){return localStorage.removeItem(e)}))}function l(e,t){return Object.keys(localStorage).reduce((function(t,n){if(n.includes(e))try{var r;try{r=new Date(JSON.parse(localStorage.getItem(t).expires))}catch(e){r=new Date}var o=JSON.parse(localStorage.getItem(n));return r>=new Date(o.expires)?t:n}catch(e){return t}return t}),t)}function p(e,t){var n=(0,o.F)(e,t);return(0,r.setupCache)({store:n,maxAge:6e5})}},6993:(e,t,n)=>{"use strict";n.d(t,{F:()=>i});n(87757);var r=n(74624),o=n(69483),c=n.n(o);var i=function(e,t){var n=(0,r.lastActive)(e,t);return c().createInstance({driver:[c().LOCALSTORAGE],name:(null==n?void 0:n.split("/")[0])||n})}},68211:()=>{}}]);