"use strict";(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[665],{89850:(e,t,n)=>{n.d(t,{sL:()=>m});var r=n(71002),o=n(89062),c=n(45987),a=n(93324),i=n(4942),s=(n(87757),n(74624),n(23911),n(57557),n(94654)),u=n.n(s),l=n(88306),f=n.n(l),h=n(97704);function p(e){var t=function(e,t){if("object"!==(0,r.Z)(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==(0,r.Z)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===(0,r.Z)(t)?t:String(t)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m="chrome:global-filter",v=function(e){return e.replace(/\//gi,"%2F").replace(/=/gi,"%3D")};f()((function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e.Workloads,i=e[h.YF],s=(0,c.Z)(e,["Workloads",h.YF].map(p)),l=u()(Object.entries(g(g({},s),!n&&{Workloads:r})||{}),(function(e){var n=(0,a.Z)(e,2),r=n[0],o=n[1];return Object.entries(o||{}).filter((function(e){return(0,a.Z)(e,2)[1].isSelected})).map((function(e){var n=(0,a.Z)(e,2),o=n[0],c=n[1],i=c.item,s=c.value;return"".concat(r?"".concat(t?encodeURIComponent(v(r)):v(r),"/"):"").concat(t?encodeURIComponent(v((null==i?void 0:i.tagKey)||o)):v((null==i?void 0:i.tagKey)||o)).concat(null!=i&&i.tagValue||s?"=".concat(t?encodeURIComponent(v((null==i?void 0:i.tagValue)||s)):v((null==i?void 0:i.tagValue)||s)):"")}))}));return n?[r,Object.entries(i||{}).filter((function(e){return(0,a.Z)(e,2)[1].isSelected})).reduce((function(e,t){var n=(0,a.Z)(t,1)[0];return[].concat((0,o.Z)(e),[n])}),[]),l]:l}),(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return"".concat(Object.entries(e).map((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];return"".concat(n,".").concat(Object.entries(r||{}).filter((function(e){return(0,a.Z)(e,2)[1].isSelected})).map((function(e){return(0,a.Z)(e,1)[0]})).join(""))})).join(",")).concat(t?"_encode":"").concat(n?"_format":"")}))},98670:(e,t,n)=>{n.d(t,{ZP:()=>P});var r=n(45987),o=n(4942),c=n(93324),a=n(15861),i=n(87757),s=n.n(i),u=n(77460),l=n(27361),f=n.n(l),h=n(41609),p=n.n(h),d=(n(31955),["url","method","accessor","matcher"]);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v,k,b,y,O,w,j={isEmpty:p(),isNotEmpty:function(e){return!p()(e)}},_=function(e,t){var n=j[t];return"function"==typeof n?n(e):e};w=(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return t=e.sent,e.prev=3,e.abrupt("return",t.identity.user.is_org_admin);case 7:return e.prev=7,e.t0=e.catch(3),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[3,7]])}))),O=(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return t=e.sent,e.prev=3,e.abrupt("return",t.identity.user.is_active);case 7:return e.prev=7,e.t0=e.catch(3),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[3,7]])}))),y=(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return t=e.sent,e.prev=3,e.abrupt("return",t.identity.user.is_internal);case 7:return e.prev=7,e.t0=e.catch(3),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[3,7]])}))),b=(0,a.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return n=e.sent,r=(n||{}).entitlements,e.abrupt("return",n.entitlements&&t?Boolean(r[t]&&r[t].is_entitled):Object.entries(r||{}).reduce((function(e,t){var n=(0,c.Z)(t,2),r=n[0],a=n[1].is_entitled;return m(m({},e),{},(0,o.Z)({},r,a))}),{}));case 5:case"end":return e.stop()}}),e)}))),k=(0,a.Z)(s().mark((function e(t){var n,r,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return r=e.sent,o=(r||{}).identity.user,e.abrupt("return",null==o||null===(n=o.email)||void 0===n?void 0:n.includes(t));case 5:case"end":return e.stop()}}),e)}))),v=(0,a.Z)(s().mark((function e(t){var n,o,c,a,i,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,o=t.method,c=void 0===o?"GET":o,a=t.accessor,i=t.matcher,l=(0,r.Z)(t,d),e.next=3,insights.chrome.auth.getUser();case 3:if(!e.sent.identity.account_number){e.next=8;break}return e.abrupt("return",(0,u.ZP)(m({url:n,method:c},l)).then((function(e){return _(a?f()(e||{},a):e,i)})).catch((function(){return console.log("Unable to retrieve visibility result",{visibilityMethod:"apiRequest",method:c,url:n}),!1})));case 8:return console.log("Unable to call API, no account number"),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e)})));const P=Object.freeze({noAuthParam:"noauth",offlineToken:"2402500adeacc30eb5c5a8a5e2e0ec1f"})},53750:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(15671),o=n(43144),c=n(21472),a=n.n(c);const i=function(){function e(){(0,r.Z)(this,e),this._cookie,this._keycloak}return(0,o.Z)(e,[{key:"setCookie",value:function(e){this.cookie=e}},{key:"setKeycloak",value:function(e,t,n,r){this._keycloak=a()(e),this._keycloak.onTokenExpired=t,this._keycloak.onAuthSuccess=n,this._keycloak.onAuthRefreshSuccess=r}},{key:"initializeKeycloak",value:function(e){this._keycloak.init(e)}},{key:"setToken",value:function(e){this._keycloak.authenticated=!0,this._keycloak.token=e}},{key:"initialize",value:function(e){return this._keycloak.init(e)}},{key:"setTokenParsed",value:function(e){this._keycloak.tokenParsed=e}},{key:"getTokenParsed",value:function(){return this._keycloak.tokenParsed}},{key:"getToken",value:function(){return this._keycloak.token}},{key:"getRefershToken",value:function(){this._keycloak.refreshToken}},{key:"login",value:function(e){return this._keycloak.login(e)}},{key:"clearToken",value:function(){this._keycloak.clearToken()}},{key:"getCookie",value:function(){return this.cookie}},{key:"logout",value:function(e){return this._keycloak.logout(e)}},{key:"getAuthenticated",value:function(){return this._keycloak.authenticated}},{key:"updateToken",value:function(){return this._keycloak.updateToken()}}]),e}()},11972:(e,t,n)=>{n.d(t,{wM:()=>r,YM:()=>o});var r={prod:{url:["access.redhat.com","prod.foo.redhat.com","cloud.redhat.com","console.redhat.com"],sso:"https://sso.redhat.com/auth",portal:"https://access.redhat.com"},qa:{url:["qa.foo.redhat.com","qa.cloud.redhat.com","qa.console.redhat.com"],sso:"https://sso.qa.redhat.com/auth",portal:"https://access.qa.redhat.com"},ci:{url:["ci.foo.redhat.com","ci.cloud.redhat.com","ci.console.redhat.com"],sso:"https://sso.qa.redhat.com/auth",portal:"https://access.qa.redhat.com"},qaprodauth:{url:["qaprodauth.foo.redhat.com","qaprodauth.cloud.redhat.com","qaprodauth.console.redhat.com"],sso:"https://sso.redhat.com/auth",portal:"https://access.redhat.com"},stage:{url:["stage.foo.redhat.com","cloud.stage.redhat.com","console.stage.redhat.com"],sso:"https://sso.stage.redhat.com/auth",portal:"https://access.stage.redhat.com"},gov:{url:["gov.cloud.redhat.com","gov.console.redhat.com"],sso:"https://sso.redhat.com/auth",portal:"https://access.redhat.com"},govStage:{url:["gov.cloud.stage.redhat.com","gov.console.stage.redhat.com"],sso:"https://sso.stage.redhat.com/auth",portal:"https://access.redhat.com"}},o={realm:"redhat-external",clientId:"cloud-services",cookieName:"cs_jwt"}},12008:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(9669),o=n.n(r),c=n(49268),a=n(74624),i="/api/entitlements/v1";const s=function(e){var t=(0,a.h4)(i,"".concat(e,"-entitlements")),n=o().create({adapter:t.adapter});return n.interceptors.response.use((function(e){if(e&&e.request&&!0!==e.request.fromCache){var t=(0,a.Qn)("/api/entitlements/v1/services","fallback"),n=Object.keys(localStorage).filter((function(e){return e.endsWith("/api/entitlements/v1/services")&&e!==t}));(0,a.gB)(n)}return e.data||e})),new c.ServicesApi(void 0,i,n)}},60200:(e,t,n)=>{n.d(t,{W:()=>f,x:()=>h});var r=n(98670),o=n(11972),c=n(35379),a=n(9669),i=n.n(a),s=n(54998),u=n.n(s),l={};function f(){if(-1!==p().location.href.indexOf(r.ZP.offlineToken)){var e=p().location,t=e.hash,n=e.search,o=e.origin,c=e.pathname,a=new URLSearchParams(n).get(r.ZP.noAuthParam);l.postbackUrl="".concat(o).concat(c,"?").concat(r.ZP.noAuthParam,"=").concat(a).concat(t),p().location.hash="";var i=u()(p().location.href);i.removeQuery(r.ZP.noAuthParam),p().history.pushState("offlinePostback","",i.toString())}}function h(e,t){var n,r=(n=l.postbackUrl,delete l.postbackUrl,n);if(l.response)return Promise.resolve(l.response);if(!r)return Promise.reject("not available");var a,s="".concat((0,c.Z)(o.wM),"/realms/").concat(e,"/protocol/openid-connect/token"),u=r.split("#")[1].split("&").reduce((function(e,t){var n=t.split("=");return e[n[0]]=n[1],e}),{});return i()({method:"post",url:s,data:(a=d(r,t,u.code),Object.entries(a).map((function(e){return"".concat(e[0],"=").concat(e[1])})).join("&")),config:{headers:{"Content-Type":"application/x-www-form-urlencoded"}}}).then((function(e){return l.response=e,e}))}function p(){return window}function d(e,t,n){return{code:n,grant_type:"authorization_code",client_id:t,redirect_uri:encodeURIComponent(e.split("#")[0])}}},35379:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(93324),o=(0,n(82389).Z)("insights/url.js");const c=function(e){if(window.SSO_URL)return o("Env SSO_URL found! ",window.SSO_URL),window.SSO_URL;var t=Object.entries(e).find((function(e){return(0,r.Z)(e,2)[1].url.includes(location.hostname)}));return t?(o("SSO Url: ".concat(null==t?void 0:t[1].sso)),o("Current env: ".concat(null==t?void 0:t[0])),null==t?void 0:t[1].sso):(o("SSO url: not found, defaulting to qa"),o("Current env: not found, defaultint to qa"),"https://sso.qa.redhat.com/auth")}},85146:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(4942),o=n(15861),c=n(87757),a=n.n(c),i=n(74624),s=n(12008);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=(0,n(82389).Z)("insights/user.js"),h={"cost-management":"cost_management",insights:"insights",openshift:"openshift",migrations:"migrations",ansible:"ansible",subscriptions:"subscriptions",settings:"settings","user-preferences":"user_preferences",internal:"internal"};function p(){return window}function d(e){return e?{identity:{account_number:e.account_number,type:e.type,user:{username:e.username,email:e.email,first_name:e.first_name,last_name:e.last_name,is_active:e.is_active,is_org_admin:e.is_org_admin,is_internal:e.is_internal,locale:e.locale},internal:{org_id:e.org_id,account_id:e.account_id}}}:null}function g(e,t){if("insights"===t||"openshift"===t||"cost-management"===t||"migrations"===t||"ansible"===t||"subscriptions"===t||"settings"===t||"user-preferences"===t||"internal"===t){var n,r=h[t];if(!0===e&&p().location.replace("".concat(document.baseURI,"?not_entitled=").concat(r)),t&&""!==t)null!=e&&null!==(n=e[r])&&void 0!==n&&n.is_entitled?f("Entitled to: ".concat(r)):(f("Not entitled to: ".concat(r)),p().location.replace("".concat(document.baseURI,"?not_entitled=").concat(r)))}}const m=function(){var e=(0,o.Z)(a().mark((function e(t){var n,r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=d(t),(r=p().location.pathname.split("/")).shift(),"beta"===r[0]&&r.shift(),"subscriptions"!==(null==r?void 0:r[1])&&"cost-management"!==(null==r?void 0:r[1])||r.shift(),!n){e.next=28;break}if(f("Account Number: ".concat(n.identity.account_number)),e.prev=7,!n.identity.account_number){e.next=14;break}return e.next=11,(0,s.Z)(t.jti).servicesGet();case 11:o=e.sent,e.next=15;break;case 14:console.log("Cannot call entitlements API, no account number");case 15:e.next=19;break;case 17:e.prev=17,e.t0=e.catch(7);case 19:if(!(0,i.$s)()){e.next=21;break}return e.abrupt("return",l(l({},n),{},{entitlements:o||{}}));case 21:if((0,i.iB)(n.identity.account_number)){e.next=24;break}return g(!0,r[0]),e.abrupt("return");case 24:return g(o,r[0]),e.abrupt("return",l(l({},n),{},{entitlements:o}));case 28:f("User not ready");case 29:case"end":return e.stop()}}),e,null,[[7,17]])})));return function(t){return e.apply(this,arguments)}}()},23911:(e,t,n)=>{n.r(t),n.d(t,{decodeToken:()=>_,doOffline:()=>P,init:()=>S,login:()=>U,logoutAllTabs:()=>I,getUserInfo:()=>A,isAuthenticated:()=>E,expiredToken:()=>R,getEncodedToken:()=>W,getUrl:()=>L});var r=n(4942),o=n(21472),c=n.n(o),a=n(87728),i=n(31955),s=n(74624),u=n(39666),l=n(89850),f=n(82389),h=n(35379),p=n(85146),d=n(54998),g=n.n(d),m=n(11972),v=n(53750);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=(0,f.Z)("jwt.js"),O="cs_jwt",w=new v.Z,j=new a.g0("auth");function _(e){switch((e=(e=(e=e.split(".")[1]).replace("/-/g","+")).replace("/_/g","/")).length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Invalid token"}return e=(e=(e+"===").slice(0,e.length+e.length%4)).replace(/-/g,"+").replace(/_/g,"/"),e=decodeURIComponent(escape(atob(e))),e=JSON.parse(e)}j.onmessage=function(e){if(e&&e.data&&e.data.type)switch(y("BroadcastChannel, Received event : ".concat(e.data.type)),e.data.type){case"logout":return D();case"login":return U();case"refresh":return M()}};var P=function(e,t){var n=g()(window.location.href);n.removeSearch(e),n.addSearch(e,t);var r=b(b({},m.YM),{},{promiseType:"native",redirectUri:n.toString(),url:(0,h.Z)(m.wM)}),o=c()(r);o.init(r).then((function(){o.login({scope:"offline_access"})}))},S=function(e){y("Initializing");var t=e.cookieName?e.cookieName:O;w.setCookie({cookieName:t}),e.url=(0,h.Z)(e.routes?e.routes:m.wM),e.clientId="cloud-services",e.realm="redhat-external",e.promiseType="native",e.onLoad="check-sso",e.checkLoginIframe=!1;var n="beta"===window.location.pathname.split("/")[1]?"/beta":"";if(e.silentCheckSsoRedirectUri="https://".concat(window.location.host).concat(n,"/silent-check-sso.html"),window.localStorage&&"true"===window.localStorage.getItem("chrome:jwt:shortSession")&&(e.realm="short-session"),w.setKeycloak(e,M,C,q),e.token){if(Z(e.token))return w.initializeKeycloak(e),new Promise((function(t){w.setToken(e.token),t()}));delete e.token}return w.initialize(e).then(T).catch(x)};function Z(e){y("Checking validity of existing JWT");try{if(!e)return!1;var t=_(e);if(!t.exp)return!1;var n=Date.now().toString().substr(0,10),r=t.exp-n;return y("Token expires in ".concat(r)),r>90?(w.setTokenParsed(t),!0):(y(r>0?"token is expiring in < 90 seconds":"token is expired"),!1)}catch(e){return y(e),!1}}function T(){var e;y("JWT Initialized"),N(w.getToken()),e=w.getRefershToken(),y("Setting the refresh token"),i.Z.set("cs_jwt_refresh",e,{secure:!0})}function x(){y("JWT init error"),D()}function U(){return y("Logging in"),i.Z.set("cs_loggedOut","false"),w.login({redirectUri:location.href})}function D(e){y("Logging out"),w.clearToken(),i.Z.remove(w.getCookie().cookieName),i.Z.remove("cs_demo");var t="beta"===window.location.pathname.split("/")[1]?"/beta":"",n=Object.keys(localStorage).filter((function(e){return e.endsWith("/api/entitlements/v1/services")||e.endsWith("/chrome")||e.endsWith("/chrome-store")||e.startsWith("kc-callback")||e.startsWith(l.sL)}));if((0,s.gB)(n),e){var r=new Date((new Date).getTime()+8e3);i.Z.set("cs_loggedOut","true",{expires:r}),w.logout({redirectUri:"https://".concat(window.location.host).concat(t)})}}var I=function(e){j.postMessage({type:"logout"}),D(e)};function C(){j.postMessage({type:"login"})}var A=function(){y("Getting User Information");var e=i.Z.get(O);return e&&Z(e)&&Z(w.getToken())?(0,p.Z)(w.getTokenParsed()):M().then((function(){(0,p.Z)(w.getTokenParsed()),y("Successfully updated token")})).catch((function(){if((0,s.hM)())return y("Trying to log in user to refresh token"),U()}))},E=function(){return y("User Ready: ".concat(w.getAuthenticated())),w.getAuthenticated()},R=function(){y("Token has expired, trying to log out"),D()};function q(){N(w.getToken()),j.postMessage({type:"refresh"})}function M(){return w.updateToken().then((function(e){N(w.getToken()),y("Attempting to update token"),y(e?"Token was successfully refreshed":"Token is still valid, not updating")})).catch((function(e){y(e),u.Tb(e),y("Token updated failed, trying to reauth"),U()}))}function N(e){var t,n,r;y("Setting the cs_jwt cookie"),e&&e.length>10&&(t="".concat(w.getCookie().cookieName,"=").concat(e,";")+"path=/;secure=true;"+"expires=".concat((n=_(e).exp,(r=new Date(0)).setUTCSeconds(n),r.toGMTString())),document.cookie=t)}var W=function(){return y("Trying to get the encoded token"),Z(w.getToken())||(y("Failed to get encoded token, trying to update"),M()),w.getToken()},L=function(){return(0,h.Z)(m.wM)}},82389:(e,t,n)=>{n.d(t,{Z:()=>r});const r=function(e){return function(t){window.console&&window.localStorage&&window.localStorage.getItem("chrome:jwt:debug")&&window.console.log("[JWT][".concat(e,"] ").concat(t))}}},41665:(e,t,n)=>{n.r(t),n.d(t,{initChromeAuth:()=>h,default:()=>p});var r=n(4942),o=n(60200),c=n(23911),a=n(31955),i=n(11972);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l="[JWT][jwt.js] Auth time";function f(){c.isAuthenticated()||(a.Z.remove(i.YM.cookieName),c.login()),console.timeEnd(l)}var h=function(){console.time(l);var e=u({},i.YM);(0,o.W)();var t=a.Z.get(e.cookieName),n=a.Z.get("cs_jwt_refresh");return t&&t.length>10&&n&&n.length>10&&(e.refreshToken=n,e.token=t),{initPromise:c.init(e).then(f)}};const p=function(){var e=u({},i.YM);return u({getOfflineToken:function(){return(0,o.x)(e.realm,e.clientId)}},c)}},97704:(e,t,n)=>{n.d(t,{YF:()=>r});n(7739);var r="SAP ID (SID)"},74624:(e,t,n)=>{n.d(t,{iB:()=>a,$s:()=>i,hM:()=>s,gB:()=>u,Qn:()=>l,h4:()=>f});n(27361);var r=n(35974),o=n(6993);n(11972);function c(){return window}function a(e){return!!e&&(-1!==e&&("-1"!==e&&Number.isInteger(Number(e))))}function i(){var e=c().location.pathname;return"/"===e||"/beta"===e||"/beta/"===e||0===e.indexOf("/openshift")||0===e.indexOf("/beta/openshift")||0===e.indexOf("/security")||0===e.indexOf("/beta/security")||0===e.indexOf("/application-services")||0===e.indexOf("/beta/application-services")}function s(){var e,t="beta"===(e=c().location.pathname.split("/"))[1]?e[2]||"":e[1];return"insights"===t||"cost-management"===t||"apps"===t||"ansible"===t||"migrations"===t||"subscriptions"===t||"openshift"===t||"settings"===t||"user-preferences"===t||"internal"===t||"application-services"===t}function u(e){e.map((function(e){return localStorage.removeItem(e)}))}function l(e,t){return Object.keys(localStorage).reduce((function(t,n){if(n.includes(e))try{var r;try{r=new Date(JSON.parse(localStorage.getItem(t).expires))}catch(e){r=new Date}var o=JSON.parse(localStorage.getItem(n));return r>=new Date(o.expires)?t:n}catch(e){return t}return t}),t)}function f(e,t){var n=(0,o.F)(e,t);return(0,r.setupCache)({store:n,maxAge:6e5})}},6993:(e,t,n)=>{n.d(t,{F:()=>a});n(87757);var r=n(74624),o=n(69483),c=n.n(o);var a=function(e,t){var n=(0,r.Qn)(e,t);return c().createInstance({driver:[c().LOCALSTORAGE],name:(null==n?void 0:n.split("/")[0])||n})}}}]);