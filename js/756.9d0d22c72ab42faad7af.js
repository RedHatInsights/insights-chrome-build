(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[756],{59731:(n,t,e)=>{"use strict";e.d(t,{lX:()=>O,q_:()=>E,PP:()=>R,ob:()=>h,Hp:()=>v,Ep:()=>l});var r=e(87462),o=e(78273),i=e(95429),a=e(2177);function c(n){return"/"===n.charAt(0)?n:"/"+n}function u(n){return"/"===n.charAt(0)?n.substr(1):n}function s(n,t){return function(n,t){return 0===n.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(n.charAt(t.length))}(n,t)?n.substr(t.length):n}function f(n){return"/"===n.charAt(n.length-1)?n.slice(0,-1):n}function l(n){var t=n.pathname,e=n.search,r=n.hash,o=t||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function h(n,t,e,i){var a;"string"==typeof n?(a=function(n){var t=n||"/",e="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return-1!==i&&(e=t.substr(i),t=t.substr(0,i)),{pathname:t,search:"?"===e?"":e,hash:"#"===r?"":r}}(n)).state=t:(void 0===(a=(0,r.Z)({},n)).pathname&&(a.pathname=""),a.search?"?"!==a.search.charAt(0)&&(a.search="?"+a.search):a.search="",a.hash?"#"!==a.hash.charAt(0)&&(a.hash="#"+a.hash):a.hash="",void 0!==t&&void 0===a.state&&(a.state=t));try{a.pathname=decodeURI(a.pathname)}catch(n){throw n instanceof URIError?new URIError('Pathname "'+a.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):n}return e&&(a.key=e),i?a.pathname?"/"!==a.pathname.charAt(0)&&(a.pathname=(0,o.Z)(a.pathname,i.pathname)):a.pathname=i.pathname:a.pathname||(a.pathname="/"),a}function v(n,t){return n.pathname===t.pathname&&n.search===t.search&&n.hash===t.hash&&n.key===t.key&&(0,i.Z)(n.state,t.state)}function d(){var n=null;var t=[];return{setPrompt:function(t){return n=t,function(){n===t&&(n=null)}},confirmTransitionTo:function(t,e,r,o){if(null!=n){var i="function"==typeof n?n(t,e):n;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(n){var e=!0;function r(){e&&n.apply(void 0,arguments)}return t.push(r),function(){e=!1,t=t.filter((function(n){return n!==r}))}},notifyListeners:function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];t.forEach((function(n){return n.apply(void 0,e)}))}}}var p=!("undefined"==typeof window||!window.document||!window.document.createElement);function y(n,t){t(window.confirm(n))}var m="popstate",g="hashchange";function w(){try{return window.history.state||{}}catch(n){return{}}}function O(n){void 0===n&&(n={}),p||(0,a.Z)(!1);var t,e=window.history,o=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,i=!(-1===window.navigator.userAgent.indexOf("Trident")),u=n,v=u.forceRefresh,O=void 0!==v&&v,P=u.getUserConfirmation,b=void 0===P?y:P,k=u.keyLength,x=void 0===k?6:k,A=n.basename?f(c(n.basename)):"";function E(n){var t=n||{},e=t.key,r=t.state,o=window.location,i=o.pathname+o.search+o.hash;return A&&(i=s(i,A)),h(i,r,e)}function T(){return Math.random().toString(36).substr(2,x)}var R=d();function L(n){(0,r.Z)(B,n),B.length=e.length,R.notifyListeners(B.location,B.action)}function C(n){(function(n){return void 0===n.state&&-1===navigator.userAgent.indexOf("CriOS")})(n)||_(E(n.state))}function Z(){_(E(w()))}var S=!1;function _(n){if(S)S=!1,L();else{R.confirmTransitionTo(n,"POP",b,(function(t){t?L({action:"POP",location:n}):function(n){var t=B.location,e=H.indexOf(t.key);-1===e&&(e=0);var r=H.indexOf(n.key);-1===r&&(r=0);var o=e-r;o&&(S=!0,U(o))}(n)}))}}var j=E(w()),H=[j.key];function I(n){return A+l(n)}function U(n){e.go(n)}var N=0;function F(n){1===(N+=n)&&1===n?(window.addEventListener(m,C),i&&window.addEventListener(g,Z)):0===N&&(window.removeEventListener(m,C),i&&window.removeEventListener(g,Z))}var M=!1;var B={length:e.length,action:"POP",location:j,createHref:I,push:function(n,t){var r="PUSH",i=h(n,t,T(),B.location);R.confirmTransitionTo(i,r,b,(function(n){if(n){var t=I(i),a=i.key,c=i.state;if(o)if(e.pushState({key:a,state:c},null,t),O)window.location.href=t;else{var u=H.indexOf(B.location.key),s=H.slice(0,u+1);s.push(i.key),H=s,L({action:r,location:i})}else window.location.href=t}}))},replace:function(n,t){var r="REPLACE",i=h(n,t,T(),B.location);R.confirmTransitionTo(i,r,b,(function(n){if(n){var t=I(i),a=i.key,c=i.state;if(o)if(e.replaceState({key:a,state:c},null,t),O)window.location.replace(t);else{var u=H.indexOf(B.location.key);-1!==u&&(H[u]=i.key),L({action:r,location:i})}else window.location.replace(t)}}))},go:U,goBack:function(){U(-1)},goForward:function(){U(1)},block:function(n){void 0===n&&(n=!1);var t=R.setPrompt(n);return M||(F(1),M=!0),function(){return M&&(M=!1,F(-1)),t()}},listen:function(n){var t=R.appendListener(n);return F(1),function(){F(-1),t()}}};return B}var P="hashchange",b={hashbang:{encodePath:function(n){return"!"===n.charAt(0)?n:"!/"+u(n)},decodePath:function(n){return"!"===n.charAt(0)?n.substr(1):n}},noslash:{encodePath:u,decodePath:c},slash:{encodePath:c,decodePath:c}};function k(n){var t=n.indexOf("#");return-1===t?n:n.slice(0,t)}function x(){var n=window.location.href,t=n.indexOf("#");return-1===t?"":n.substring(t+1)}function A(n){window.location.replace(k(window.location.href)+"#"+n)}function E(n){void 0===n&&(n={}),p||(0,a.Z)(!1);var t=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),n),o=e.getUserConfirmation,i=void 0===o?y:o,u=e.hashType,v=void 0===u?"slash":u,m=n.basename?f(c(n.basename)):"",g=b[v],w=g.encodePath,O=g.decodePath;function E(){var n=O(x());return m&&(n=s(n,m)),h(n)}var T=d();function R(n){(0,r.Z)(M,n),M.length=t.length,T.notifyListeners(M.location,M.action)}var L=!1,C=null;function Z(){var n,t,e=x(),r=w(e);if(e!==r)A(r);else{var o=E(),a=M.location;if(!L&&(t=o,(n=a).pathname===t.pathname&&n.search===t.search&&n.hash===t.hash))return;if(C===l(o))return;C=null,function(n){if(L)L=!1,R();else{var t="POP";T.confirmTransitionTo(n,t,i,(function(e){e?R({action:t,location:n}):function(n){var t=M.location,e=H.lastIndexOf(l(t));-1===e&&(e=0);var r=H.lastIndexOf(l(n));-1===r&&(r=0);var o=e-r;o&&(L=!0,I(o))}(n)}))}}(o)}}var S=x(),_=w(S);S!==_&&A(_);var j=E(),H=[l(j)];function I(n){t.go(n)}var U=0;function N(n){1===(U+=n)&&1===n?window.addEventListener(P,Z):0===U&&window.removeEventListener(P,Z)}var F=!1;var M={length:t.length,action:"POP",location:j,createHref:function(n){var t=document.querySelector("base"),e="";return t&&t.getAttribute("href")&&(e=k(window.location.href)),e+"#"+w(m+l(n))},push:function(n,t){var e="PUSH",r=h(n,void 0,void 0,M.location);T.confirmTransitionTo(r,e,i,(function(n){if(n){var t=l(r),o=w(m+t);if(x()!==o){C=t,function(n){window.location.hash=n}(o);var i=H.lastIndexOf(l(M.location)),a=H.slice(0,i+1);a.push(t),H=a,R({action:e,location:r})}else R()}}))},replace:function(n,t){var e="REPLACE",r=h(n,void 0,void 0,M.location);T.confirmTransitionTo(r,e,i,(function(n){if(n){var t=l(r),o=w(m+t);x()!==o&&(C=t,A(o));var i=H.indexOf(l(M.location));-1!==i&&(H[i]=t),R({action:e,location:r})}}))},go:I,goBack:function(){I(-1)},goForward:function(){I(1)},block:function(n){void 0===n&&(n=!1);var t=T.setPrompt(n);return F||(N(1),F=!0),function(){return F&&(F=!1,N(-1)),t()}},listen:function(n){var t=T.appendListener(n);return N(1),function(){N(-1),t()}}};return M}function T(n,t,e){return Math.min(Math.max(n,t),e)}function R(n){void 0===n&&(n={});var t=n,e=t.getUserConfirmation,o=t.initialEntries,i=void 0===o?["/"]:o,a=t.initialIndex,c=void 0===a?0:a,u=t.keyLength,s=void 0===u?6:u,f=d();function v(n){(0,r.Z)(O,n),O.length=O.entries.length,f.notifyListeners(O.location,O.action)}function p(){return Math.random().toString(36).substr(2,s)}var y=T(c,0,i.length-1),m=i.map((function(n){return h(n,void 0,"string"==typeof n?p():n.key||p())})),g=l;function w(n){var t=T(O.index+n,0,O.entries.length-1),r=O.entries[t];f.confirmTransitionTo(r,"POP",e,(function(n){n?v({action:"POP",location:r,index:t}):v()}))}var O={length:m.length,action:"POP",location:m[y],index:y,entries:m,createHref:g,push:function(n,t){var r="PUSH",o=h(n,t,p(),O.location);f.confirmTransitionTo(o,r,e,(function(n){if(n){var t=O.index+1,e=O.entries.slice(0);e.length>t?e.splice(t,e.length-t,o):e.push(o),v({action:r,location:o,index:t,entries:e})}}))},replace:function(n,t){var r="REPLACE",o=h(n,t,p(),O.location);f.confirmTransitionTo(o,r,e,(function(n){n&&(O.entries[O.index]=o,v({action:r,location:o}))}))},go:w,goBack:function(){w(-1)},goForward:function(){w(1)},canGo:function(n){var t=O.index+n;return t>=0&&t<O.entries.length},block:function(n){return void 0===n&&(n=!1),f.setPrompt(n)},listen:function(n){return f.appendListener(n)}};return O}},92703:(n,t,e)=>{"use strict";var r=e(50414);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,t,e,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return n}n.isRequired=n;var e={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:t,element:n,elementType:n,instanceOf:t,node:n,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return e.PropTypes=e,e}},45697:(n,t,e)=>{n.exports=e(92703)()},50414:n=>{"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},73727:(n,t,e)=>{"use strict";e.r(t),e.d(t,{MemoryRouter:()=>r.VA,Prompt:()=>r.NL,Redirect:()=>r.l_,Route:()=>r.AW,Router:()=>r.F0,StaticRouter:()=>r.gx,Switch:()=>r.rs,generatePath:()=>r.Gn,matchPath:()=>r.LX,useHistory:()=>r.k6,useLocation:()=>r.TH,useParams:()=>r.UO,useRouteMatch:()=>r.$B,withRouter:()=>r.EN,BrowserRouter:()=>l,HashRouter:()=>h,Link:()=>g,NavLink:()=>P});var r=e(16550),o=e(94578),i=e(96985),a=e.n(i),c=e(59731),u=(e(45697),e(87462)),s=e(63366),f=e(2177),l=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).history=(0,c.lX)(t.props),t}return(0,o.Z)(t,n),t.prototype.render=function(){return a().createElement(r.F0,{history:this.history,children:this.props.children})},t}(a().Component);var h=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).history=(0,c.q_)(t.props),t}return(0,o.Z)(t,n),t.prototype.render=function(){return a().createElement(r.F0,{history:this.history,children:this.props.children})},t}(a().Component);var v=function(n,t){return"function"==typeof n?n(t):n},d=function(n,t){return"string"==typeof n?(0,c.ob)(n,null,null,t):n},p=function(n){return n},y=a().forwardRef;void 0===y&&(y=p);var m=y((function(n,t){var e=n.innerRef,r=n.navigate,o=n.onClick,i=(0,s.Z)(n,["innerRef","navigate","onClick"]),c=i.target,f=(0,u.Z)({},i,{onClick:function(n){try{o&&o(n)}catch(t){throw n.preventDefault(),t}n.defaultPrevented||0!==n.button||c&&"_self"!==c||function(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}(n)||(n.preventDefault(),r())}});return f.ref=p!==y&&t||e,a().createElement("a",f)}));var g=y((function(n,t){var e=n.component,o=void 0===e?m:e,i=n.replace,l=n.to,h=n.innerRef,g=(0,s.Z)(n,["component","replace","to","innerRef"]);return a().createElement(r.s6.Consumer,null,(function(n){n||(0,f.Z)(!1);var e=n.history,r=d(v(l,n.location),n.location),s=r?e.createHref(r):"",m=(0,u.Z)({},g,{href:s,navigate:function(){var t=v(l,n.location),r=(0,c.Ep)(n.location)===(0,c.Ep)(d(t));(i||r?e.replace:e.push)(t)}});return p!==y?m.ref=t||h:m.innerRef=h,a().createElement(o,m)}))})),w=function(n){return n},O=a().forwardRef;void 0===O&&(O=w);var P=O((function(n,t){var e=n["aria-current"],o=void 0===e?"page":e,i=n.activeClassName,c=void 0===i?"active":i,l=n.activeStyle,h=n.className,p=n.exact,y=n.isActive,m=n.location,P=n.sensitive,b=n.strict,k=n.style,x=n.to,A=n.innerRef,E=(0,s.Z)(n,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a().createElement(r.s6.Consumer,null,(function(n){n||(0,f.Z)(!1);var e=m||n.location,i=d(v(x,e),e),s=i.pathname,T=s&&s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),R=T?(0,r.LX)(e.pathname,{path:T,exact:p,sensitive:P,strict:b}):null,L=!!(y?y(R,e):R),C=L?function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return t.filter((function(n){return n})).join(" ")}(h,c):h,Z=L?(0,u.Z)({},k,l):k,S=(0,u.Z)({"aria-current":L&&o||null,className:C,style:Z,to:i},E);return w!==O?S.ref=t||A:S.innerRef=A,a().createElement(g,S)}))}))},78273:(n,t,e)=>{"use strict";function r(n){return"/"===n.charAt(0)}function o(n,t){for(var e=t,r=e+1,o=n.length;r<o;e+=1,r+=1)n[e]=n[r];n.pop()}e.d(t,{Z:()=>i});const i=function(n,t){void 0===t&&(t="");var e,i=n&&n.split("/")||[],a=t&&t.split("/")||[],c=n&&r(n),u=t&&r(t),s=c||u;if(n&&r(n)?a=i:i.length&&(a.pop(),a=a.concat(i)),!a.length)return"/";if(a.length){var f=a[a.length-1];e="."===f||".."===f||""===f}else e=!1;for(var l=0,h=a.length;h>=0;h--){var v=a[h];"."===v?o(a,h):".."===v?(o(a,h),l++):l&&(o(a,h),l--)}if(!s)for(;l--;l)a.unshift("..");!s||""===a[0]||a[0]&&r(a[0])||a.unshift("");var d=a.join("/");return e&&"/"!==d.substr(-1)&&(d+="/"),d}},2177:(n,t,e)=>{"use strict";e.d(t,{Z:()=>o});var r="Invariant failed";const o=function(n,t){if(!n)throw new Error(r)}},95429:(n,t,e)=>{"use strict";function r(n){return n.valueOf?n.valueOf():Object.prototype.valueOf.call(n)}e.d(t,{Z:()=>o});const o=function n(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(Array.isArray(t))return Array.isArray(e)&&t.length===e.length&&t.every((function(t,r){return n(t,e[r])}));if("object"==typeof t||"object"==typeof e){var o=r(t),i=r(e);return o!==t||i!==e?n(o,i):Object.keys(Object.assign({},t,e)).every((function(r){return n(t[r],e[r])}))}return!1}},87462:(n,t,e)=>{"use strict";function r(){return(r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}e.d(t,{Z:()=>r})},63366:(n,t,e)=>{"use strict";function r(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}e.d(t,{Z:()=>r})},89611:(n,t,e)=>{"use strict";function r(n,t){return(r=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}e.d(t,{Z:()=>r})}}]);