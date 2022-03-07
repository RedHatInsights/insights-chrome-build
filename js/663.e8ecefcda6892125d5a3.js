/*! For license information please see 663.e8ecefcda6892125d5a3.js.LICENSE.txt */
(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[663],{2372:(e,r,t)=>{"use strict";t.d(r,{S:()=>n,$:()=>i});var n,s=t(21988),a=t(96985),o=t(73631),c=t(38296);!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(n||(n={}));const i=e=>{var{className:r="",size:t="xl","aria-valuetext":n="Loading...",isSVG:i=!1,diameter:l}=e,p=(0,s._T)(e,["className","size","aria-valuetext","isSVG","diameter"]);const u=i?"svg":"span";return a.createElement(u,Object.assign({className:(0,c.i)(o.Z.spinner,o.Z.modifiers[t],r),role:"progressbar","aria-valuetext":n},i&&{viewBox:"0 0 100 100"},l&&{style:{"--pf-c-spinner--diameter":l}},p),i?a.createElement("circle",{className:o.Z.spinnerPath,cx:"50",cy:"50",r:"45",fill:"none"}):a.createElement(a.Fragment,null,a.createElement("span",{className:(0,c.i)(o.Z.spinnerClipper)}),a.createElement("span",{className:(0,c.i)(o.Z.spinnerLeadBall)}),a.createElement("span",{className:(0,c.i)(o.Z.spinnerTailBall)})))};i.displayName="Spinner"},52643:(e,r,t)=>{"use strict";t.d(r,{b:()=>c});var n=t(21988),s=t(96985),a=t(38296),o=t(25687);const c=e=>{var{children:r=null,className:t="",component:c="div"}=e,i=(0,n._T)(e,["children","className","component"]);const l=c;return s.createElement(l,Object.assign({className:(0,a.i)(o.Z.bullseye,t)},i),r)};c.displayName="Bullseye"},21988:(e,r,t)=>{"use strict";t.d(r,{_T:()=>n,mG:()=>s});function n(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]])}return t}function s(e,r,t,n){return new(t||(t=Promise))((function(s,a){function o(e){try{i(n.next(e))}catch(e){a(e)}}function c(e){try{i(n.throw(e))}catch(e){a(e)}}function i(e){var r;e.done?s(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(o,c)}i((n=n.apply(e,r||[])).next())}))}Object.create;Object.create},73631:(e,r,t)=>{"use strict";t(66822),r.Z={modifiers:{sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",xl:"pf-m-xl"},spinner:"pf-c-spinner",spinnerClipper:"pf-c-spinner__clipper",spinnerLeadBall:"pf-c-spinner__lead-ball",spinnerPath:"pf-c-spinner__path",spinnerTailBall:"pf-c-spinner__tail-ball"}},25687:(e,r,t)=>{"use strict";t(87234),r.Z={bullseye:"pf-l-bullseye"}},38296:(e,r,t)=>{"use strict";function n(...e){const r=[],t={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const s=typeof e;if("string"===s||"number"===s)r.push(e);else if(Array.isArray(e)&&e.length){const t=n(...e);t&&r.push(t)}else if("object"===s)for(const n in e)t.call(e,n)&&e[n]&&r.push(n)})),r.join(" ")}t.d(r,{i:()=>n})},22663:(e,r,t)=>{"use strict";t.d(r,{Z:()=>g});var n=t(4942),s=t(87462),a=t(45987),o=t(96985),c=t.n(o),i=t(45697),l=t.n(i),p=t(10305),u=t(52643),f=t(2372),m=t(94184),y=t.n(m);function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var d=function(e){var r=e.appName,t=e.scope,n=e.module,o=e.fallback,i=e.innerRef,l=e.className,u=e.component,f=(0,a.Z)(e,["appName","scope","module","fallback","innerRef","className","component"]);return c().createElement(u,{className:y()(l,r)},c().createElement(p.ScalprumComponent,(0,s.Z)({className:l,appName:r,module:n,scope:t||r,ErrorComponent:o,ref:i,fallback:o},f)))},h=c().forwardRef((function(e,r){return c().createElement(d,(0,s.Z)({innerRef:r},e))}));h.propTypes={fallback:l().node,appName:l().string.isRequired,module:l().string.isRequired,scope:l().string,component:l().string},h.defaultProps={fallback:c().createElement(u.b,null,c().createElement(f.$,{size:"xl"})),component:"section"},d.propTypes=O(O({},h.propTypes),{},{innerRef:l().any});const g=h},94184:(e,r)=>{var t;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var a=typeof t;if("string"===a||"number"===a)e.push(t);else if(Array.isArray(t)){if(t.length){var o=s.apply(null,t);o&&e.push(o)}}else if("object"===a)if(t.toString===Object.prototype.toString)for(var c in t)n.call(t,c)&&t[c]&&e.push(c);else e.push(t.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(t=function(){return s}.apply(r,[]))||(e.exports=t)}()},92703:(e,r,t)=>{"use strict";var n=t(50414);function s(){}function a(){}a.resetWarningCache=s,e.exports=function(){function e(e,r,t,s,a,o){if(o!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function r(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:a,resetWarningCache:s};return t.PropTypes=t,t}},45697:(e,r,t)=>{e.exports=t(92703)()},50414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4942:(e,r,t)=>{"use strict";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.d(r,{Z:()=>n})},87462:(e,r,t)=>{"use strict";function n(){return(n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}t.d(r,{Z:()=>n})},45987:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});var n=t(63366);function s(e,r){if(null==e)return{};var t,s,a=(0,n.Z)(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}},63366:(e,r,t)=>{"use strict";function n(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}t.d(r,{Z:()=>n})}}]);