(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[6663],{79228:(e,t,n)=>{"use strict";n.d(t,{sL:()=>O});var r=n(50008),o=n.n(r),c=n(319),i=n.n(c),a=(n(87757),n(48926),n(6479)),s=n.n(a),u=n(63038),l=n.n(u),f=n(59713),d=n.n(f),p=(n(81727),n(88957),n(57557),n(94654)),h=n.n(p),g=n(88306),m=n.n(g),v=n(21724);function b(e){var t=function(e,t){if("object"!==o()(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==o()(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o()(t)?t:String(t)}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){d()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O="chrome:global-filter";m()((function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e.Workloads,o=e[v.YF],c=s()(e,["Workloads",v.YF].map(b)),a=h()(Object.entries(y(y({},c),!n&&{Workloads:r})||{}),(function(e){var n=l()(e,2),r=n[0],o=n[1];return Object.entries(o||{}).filter((function(e){return l()(e,2)[1].isSelected})).map((function(e){var n=l()(e,2),o=n[0],c=n[1],i=c.item,a=c.value;return"".concat(r?"".concat(t?encodeURIComponent(r):r,"/"):"").concat(t?encodeURIComponent((null==i?void 0:i.tagKey)||o):(null==i?void 0:i.tagKey)||o).concat(null!=i&&i.tagValue||a?"=".concat(t?encodeURIComponent((null==i?void 0:i.tagValue)||a):(null==i?void 0:i.tagValue)||a):"")}))}));return n?[r,Object.entries(o||{}).filter((function(e){return l()(e,2)[1].isSelected})).reduce((function(e,t){var n=l()(t,1)[0];return[].concat(i()(e),[n])}),[]),a]:a}),(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return"".concat(Object.entries(e).map((function(e){var t=l()(e,2),n=t[0],r=t[1];return"".concat(n,".").concat(Object.entries(r||{}).filter((function(e){return l()(e,2)[1].isSelected})).map((function(e){return l()(e,1)[0]})).join(""))})).join(",")).concat(t?"_encode":"").concat(n?"_format":"")}))},51471:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>x});var r=n(6479),o=n.n(r),c=n(59713),i=n.n(c),a=n(63038),s=n.n(a),u=n(87757),l=n.n(u),f=n(48926),d=n.n(f),p=n(77460),h=n(27361),g=n.n(h),m=n(41609),v=n.n(m);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y,O,w,j,P,S={isEmpty:v(),isNotEmpty:function(e){return!v()(e)}},_=function(e,t){var n=S[t];return"function"==typeof n?n(e):e};P=d()(l().mark((function e(){var t,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return t=e.sent,n=t.identity,e.prev=4,e.abrupt("return",n.user.is_org_admin);case 8:return e.prev=8,e.t0=e.catch(4),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[4,8]])}))),j=d()(l().mark((function e(){var t,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return t=e.sent,n=t.identity,e.prev=4,e.abrupt("return",n.user.is_active);case 8:return e.prev=8,e.t0=e.catch(4),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[4,8]])}))),w=d()(l().mark((function e(){var t,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return t=e.sent,n=t.identity,e.prev=4,e.abrupt("return",n.user.is_internal);case 8:return e.prev=8,e.t0=e.catch(4),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[4,8]])}))),O=d()(l().mark((function e(t){var n,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return n=e.sent,r=n.entitlements,e.abrupt("return",r&&t?Boolean(r[t]&&r[t].is_entitled):Object.entries(r||{}).reduce((function(e,t){var n=s()(t,2),r=n[0],o=n[1].is_entitled;return k(k({},e),{},i()({},r,o))}),{}));case 5:case"end":return e.stop()}}),e)}))),y=d()(l().mark((function e(t){var n,r,c,i,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,r=t.method,c=t.accessor,i=t.matcher,a=o()(t,["url","method","accessor","matcher"]),e.abrupt("return",(0,p.ZP)(k({url:n,method:r||"GET"},a)).then((function(e){return _(c?g()(e||{},c):e,i)})).catch((function(e){return console.log(e),!1})));case 2:case"end":return e.stop()}}),e)})));const x=Object.freeze({noAuthParam:"noauth",offlineToken:"2402500adeacc30eb5c5a8a5e2e0ec1f",allowedUnauthedPaths:["/","/logout","/beta","/security/insights","/beta/security/insights"]})},87492:(e,t,n)=>{"use strict";n.d(t,{wM:()=>r,YM:()=>o,bv:()=>c});var r={prod:{url:["access.redhat.com","prod.foo.redhat.com","cloud.redhat.com"],sso:"https://sso.redhat.com/auth"},qa:{url:["qa.foo.redhat.com","qa.cloud.redhat.com"],sso:"https://sso.qa.redhat.com/auth"},ci:{url:["ci.foo.redhat.com","ci.cloud.redhat.com"],sso:"https://sso.qa.redhat.com/auth"},qaprodauth:{url:["qaprodauth.foo.redhat.com","qaprodauth.cloud.redhat.com"],sso:"https://sso.redhat.com/auth"},stage:{url:["cloud.stage.redhat.com"],sso:"https://sso.stage.redhat.com/auth"}},o={realm:"redhat-external",clientId:"cloud-services",cookieName:"cs_jwt"},c=["/","/logout","/beta","/security/insights","/beta/security/insights"]},43718:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(9669),o=n.n(r),c=n(49268),i=n(81727),a="/api/entitlements/v1";const s=function(e){var t=(0,i.bootstrapCache)(a,"".concat(e,"-entitlements")),n=o().create({adapter:t.adapter});return n.interceptors.response.use((function(e){if(e&&e.request&&!0!==e.request.fromCache){var t=(0,i.lastActive)("/api/entitlements/v1/services","fallback"),n=Object.keys(localStorage).filter((function(e){return e.endsWith("/api/entitlements/v1/services")&&e!==t}));(0,i.deleteLocalStorageItems)(n)}return e.data||e})),new c.ServicesApi(void 0,a,n)}},55915:(e,t,n)=>{"use strict";n.d(t,{W:()=>f,x:()=>d});var r=n(51471),o=n(87492),c=n(28859),i=n(9669),a=n.n(i),s=n(99557),u=n.n(s),l={};function f(){if(-1!==p().location.href.indexOf(r.ZP.offlineToken)){l.postbackUrl=p().location.href,p().location.hash="";var e=u()(p().location.href);e.removeQuery(r.ZP.noAuthParam),p().history.pushState("offlinePostback","",e.toString())}}function d(e,t){var n,r=(n=l.postbackUrl,delete l.postbackUrl,n);if(!r)return Promise.reject("not available");var i,s="".concat((0,c.Z)(o.wM),"/realms/").concat(e,"/protocol/openid-connect/token"),u=r.split("#")[1].split("&").reduce((function(e,t){var n=t.split("=");return e[n[0]]=n[1],e}),{});return a()({method:"post",url:s,data:(i=h(r,t,u.code),Object.entries(i).map((function(e){return"".concat(e[0],"=").concat(e[1])})).join("&")),config:{headers:{"Content-Type":"application/x-www-form-urlencoded"}}})}function p(){return window}function h(e,t,n){return{code:n,grant_type:"authorization_code",client_id:t,redirect_uri:encodeURIComponent(e.split("#")[0])}}},28859:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(63038),o=n.n(r),c=(0,n(3437).Z)("insights/url.js");const i=function(e){var t=Object.entries(e).find((function(e){return o()(e,2)[1].url.includes(location.hostname)}));return t?(c("SSO Url: ".concat(null==t?void 0:t[1].sso)),c("Current env: ".concat(null==t?void 0:t[0])),null==t?void 0:t[1].sso):(c("SSO url: not found, defaulting to qa"),c("Current env: not found, defaultint to qa"),"https://sso.qa.redhat.com/auth")}},79795:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(59713),o=n.n(r),c=n(81727),i=n(43718);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=(0,n(3437).Z)("insights/user.js"),l={"cost-management":"cost_management",insights:"insights",openshift:"openshift",migrations:"migrations",ansible:"ansible",subscriptions:"subscriptions",settings:"settings","user-preferences":"user_preferences",internal:"internal"};function f(){return window}function d(e,t){if("insights"===t||"openshift"===t||"cost-management"===t||"migrations"===t||"ansible"===t||"subscriptions"===t||"settings"===t||"user-preferences"===t||"internal"===t){var n=l[t];!0===e&&f().location.replace("".concat(document.baseURI,"?not_entitled=").concat(n)),t&&""!==t&&(e[n]&&e[n].is_entitled?u("Entitled to: ".concat(n)):(u("Not entitled to: ".concat(n)),f().location.replace("".concat(document.baseURI,"?not_entitled=").concat(n))))}}const p=function(e){var t=function(e){return e?{identity:{account_number:e.account_number,type:e.type,user:{username:e.username,email:e.email,first_name:e.first_name,last_name:e.last_name,is_active:e.is_active,is_org_admin:e.is_org_admin,is_internal:e.is_internal,locale:e.locale},internal:{org_id:e.org_id,account_id:e.account_id}}}:null}(e),n=f().location.pathname.split("/");return n.shift(),"beta"===n[0]&&n.shift(),t?(u("Account Number: ".concat(t.identity.account_number)),(0,c.pageAllowsUnentitled)()?new Promise((function(e){t.identity=s(s({},t.identity),{},{entitlements:{}}),e(t)})):(0,c.isValidAccountNumber)(t.identity.account_number)?(0,i.Z)(e.jti).servicesGet().then((function(e){return d(e,n[0]),s(s({},t),{},{entitlements:e})})):void d(!0,n[0])):(u("User not ready"),new Promise((function(e){return e()})))}},88957:(e,t,n)=>{"use strict";n.r(t),n.d(t,{decodeToken:()=>S,doOffline:()=>_,init:()=>x,login:()=>I,logoutAllTabs:()=>C,getUserInfo:()=>N,isAuthenticated:()=>Z,expiredToken:()=>W,getEncodedToken:()=>L,getUrl:()=>J});var r=n(59713),o=n.n(r),c=n(21472),i=n.n(c),a=n(55610),s=n(95651),u=n.n(s),l=n(81727),f=n(82095),d=n(79228),p=n(3437),h=n(28859),g=n(79795),m=n(99557),v=n.n(m),b=n(87492);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=(0,p.Z)("jwt.js"),w="cs_jwt",j={},P=new a.g0("auth");function S(e){switch((e=(e=(e=e.split(".")[1]).replace("/-/g","+")).replace("/_/g","/")).length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Invalid token"}return e=(e=(e+"===").slice(0,e.length+e.length%4)).replace(/-/g,"+").replace(/_/g,"/"),e=decodeURIComponent(escape(atob(e))),e=JSON.parse(e)}P.onmessage=function(e){if(e&&e.data&&e.data.type)switch(O("BroadcastChannel, Received event : ".concat(e.data.type)),e.data.type){case"logout":return A();case"login":return I();case"refresh":return M()}};var _=function(e,t){var n=v()(window.location.href);n.removeSearch(e),n.addSearch(e,t);var r=y(y({},b.YM),{},{promiseType:"native",redirectUri:n.toString(),url:(0,h.Z)(b.wM)}),o=i()(r);o.init(r).then((function(){o.login({scope:"offline_access"})}))},x=function(e){O("Initializing");var t=e.cookieName?e.cookieName:w;j.cookie={cookieName:t},e.url=(0,h.Z)(e.routes?e.routes:b.wM),e.clientId="cloud-services",e.realm="redhat-external",e.promiseType="native",e.onLoad="check-sso",e.checkLoginIframe=!1;var n="beta"===window.location.pathname.split("/")[1]?"/beta":"";if(e.silentCheckSsoRedirectUri="https://".concat(window.location.host).concat(n,"/silent-check-sso.html"),window.localStorage&&"true"===window.localStorage.getItem("chrome:jwt:shortSession")&&(e.realm="short-session"),j.keycloak=i()(e),j.keycloak.onTokenExpired=M,j.keycloak.onAuthSuccess=E,j.keycloak.onAuthRefreshSuccess=q,e.token){if(T(e.token))return j.keycloak.init(e),new Promise((function(t){j.keycloak.authenticated=!0,j.keycloak.token=e.token,t()}));delete e.token}return j.keycloak.init(e).then(D).catch(U)};function T(e){O("Checking validity of existing JWT");try{if(!e)return!1;var t=S(e);if(!t.exp)return!1;var n=Date.now().toString().substr(0,10),r=t.exp-n;return O("Token expires in ".concat(r)),r>90?(j.keycloak.tokenParsed=t,!0):(O(r>0?"token is expiring in < 90 seconds":"token is expired"),!1)}catch(e){return O(e),!1}}function D(){var e;O("JWT Initialized"),R(j.keycloak.token),e=j.keycloak.refreshToken,O("Setting the refresh token"),u().set("cs_jwt_refresh",e,{secure:!0})}function U(){O("JWT init error"),A()}function I(){return O("Logging in"),u().set("cs_loggedOut","false"),j.keycloak.login({redirectUri:location.href})}function A(e){O("Logging out"),j.keycloak.clearToken(),u().remove(j.cookie.cookieName),u().remove("cs_demo");var t="beta"===window.location.pathname.split("/")[1]?"/beta":"",n=Object.keys(localStorage).filter((function(e){return e.endsWith("/api/entitlements/v1/services")||e.endsWith("/config/main.yml")||e.endsWith("/chrome")||e.endsWith("/chrome-store")||e.startsWith("kc-callback")||e.startsWith(d.sL)}));if((0,l.deleteLocalStorageItems)(n),e){var r=new Date((new Date).getTime()+8e3);u().set("cs_loggedOut","true",{expires:r}),j.keycloak.logout({redirectUri:"https://".concat(window.location.host).concat(t)})}}var C=function(e){P.postMessage({type:"logout"}),A(e)};function E(){P.postMessage({type:"login"})}var N=function(){O("Getting User Information");var e=u().get(w);return e&&T(e)&&T(j.keycloak.token)?(0,g.Z)(j.keycloak.tokenParsed):M().then((function(){(0,g.Z)(j.keycloak.tokenParsed),O("Successfully updated token")})).catch((function(){if((0,l.pageRequiresAuthentication)())return O("Trying to log in user to refresh token"),I()}))},Z=function(){return O("User Ready: ".concat(j.keycloak.authenticated)),j.keycloak.authenticated},W=function(){O("Token has expired, trying to log out"),A()};function q(){P.postMessage({type:"refresh"})}function M(){return j.keycloak.updateToken().then((function(e){R(j.keycloak.token),O("Attempting to update token"),O(e?"Token was successfully refreshed":"Token is still valid, not updating")})).catch((function(){O("Token update failed")}))}function R(e){var t,n,r;O("Setting the cs_jwt cookie"),e&&e.length>10&&(t="".concat(j.cookie.cookieName,"=").concat(e,";")+"path=/;secure=true;"+"expires=".concat((n=S(e).exp,(r=new Date(0)).setUTCSeconds(n),r.toGMTString())),document.cookie=t)}var L=function(){return O("Trying to get the encoded token"),T(j.keycloak.token)||(f.Tb(new Error("Fetching token failed - expired token")),O("Failed to get encoded token"),M()),j.keycloak.token},J=function(){return(0,h.Z)(b.wM)}},3437:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=function(e){return function(t){window.console&&window.localStorage&&window.localStorage.getItem("chrome:jwt:debug")&&window.console.log("[JWT][".concat(e,"] ").concat(t))}}},40178:(e,t,n)=>{"use strict";n.r(t),n.d(t,{allowUnauthed:()=>m,initChromeAuth:()=>v,default:()=>b});var r=n(59713),o=n.n(r),c=n(55915),i=n(85564),a=n.n(i),s=n(88957),u=n(95651),l=n.n(u),f=n(87492);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h="[JWT][jwt.js] Auth time";function g(){m()||(s.isAuthenticated()||(l().remove(f.YM.cookieName),s.login()),console.timeEnd(h))}function m(){return!!a()(f.bv.map((function(e){return[e,e+"/"]}))).includes(window.location.pathname)}var v=function(){console.time(h);var e=p({},f.YM);(0,c.W)();var t=l().get(e.cookieName);return t&&t.length>10&&(e.token=t,e.refreshToken=l().get("cs_jwt_refresh")),{initPromise:s.init(e).then(g)}};const b=function(){var e=p({},f.YM);return p({getOfflineToken:function(){return(0,c.x)(e.realm,e.clientId)}},s)}},21724:(e,t,n)=>{"use strict";n.d(t,{YF:()=>r});n(63038),n(59713),n(7739);var r="SAP ID (SID)"},81727:(e,t,n)=>{"use strict";n.d(t,{isValidAccountNumber:()=>i,pageAllowsUnentitled:()=>a,pageRequiresAuthentication:()=>s,deleteLocalStorageItems:()=>u,lastActive:()=>l,bootstrapCache:()=>f});n(50008),n(63038),n(27361);var r=n(35974),o=n(95264);n(87492);function c(){return window}function i(e){return!!e&&(-1!==e&&("-1"!==e&&Number.isInteger(Number(e))))}function a(){var e=c().location.pathname;return"/"===e||"/beta"===e||"/beta/"===e||0===e.indexOf("/openshift")||0===e.indexOf("/beta/openshift")||0===e.indexOf("/security")||0===e.indexOf("/beta/security")}function s(){var e,t="beta"===(e=c().location.pathname.split("/"))[1]?e[2]||"":e[1];return"insights"===t||"cost-management"===t||"apps"===t||"ansible"===t||"migrations"===t||"subscriptions"===t||"openshift"===t||"settings"===t||"user-preferences"===t||"internal"===t}function u(e){e.map((function(e){return localStorage.removeItem(e)}))}function l(e,t){return Object.keys(localStorage).reduce((function(t,n){if(n.includes(e))try{var r;try{r=new Date(JSON.parse(localStorage.getItem(t).expires))}catch(e){r=new Date}var o=JSON.parse(localStorage.getItem(n));return r>=new Date(o.expires)?t:n}catch(e){return t}return t}),t)}function f(e,t){var n=(0,o.F)(e,t);return(0,r.setupCache)({store:n,maxAge:6e5})}},95264:(e,t,n)=>{"use strict";n.d(t,{F:()=>i});n(59713),n(87757),n(48926),n(34575),n(93913);var r=n(81727),o=n(69483),c=n.n(o);var i=function(e,t){var n=(0,r.lastActive)(e,t);return c().createInstance({driver:[c().LOCALSTORAGE],name:(null==n?void 0:n.split("/")[0])||n})}},7815:()=>{}}]);
//# sourceMappingURL=sourcemaps/6663.js.map