/*! For license information please see 713.9923f39c88f0c80b00d9.js.LICENSE.txt */
(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[713],{22663:(e,r,t)=>{"use strict";t.d(r,{Z:()=>y});var n=t(85893),o=t(96985),a=t.n(o),s=t(65679),c=t(21242),i=t(94184),p=t.n(i),l=function(){return l=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},l.apply(this,arguments)},f=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t},u=function(e){var r=e.appName,t=e.scope,o=e.module,a=e.fallback,i=void 0===a?(0,n.jsx)(c.Bullseye,{children:(0,n.jsx)(c.Spinner,{size:"xl"})}):a,u=e.innerRef,y=e.className,m=e.component,d=void 0===m?"section":m,v=f(e,["appName","scope","module","fallback","innerRef","className","component"]),O=l({className:y,appName:r,module:o,scope:null!=t?t:r,ErrorComponent:i,ref:u,fallback:i},v);return(0,n.jsx)(d,l({className:p()(y,r)},{children:(0,n.jsx)(s.ScalprumComponent,l({},O))}))};const y=a().forwardRef((function(e,r){return(0,n.jsx)(u,l({innerRef:r},e))}))},96713:(e,r,t)=>{"use strict";t.d(r,{Z:()=>y});var n=t(87462),o=t(45987),a=t(96985),s=t.n(a),c=t(45697),i=t.n(c),p=t(98373),l=t(22663),f=["componentName","innerRef"],u=function(e){var r=e.componentName,t=e.innerRef,a=(0,o.Z)(e,f);return s().createElement(l.Z,(0,n.Z)({appName:"inventory",module:"./".concat(r),fallback:p.Z,ref:t},a))};u.propTypes={store:i().object,onLoad:i().func,componentName:i().string,history:i().object,innerRef:i().shape({current:i().any})},u.defaultProps={onLoad:function(){}};const y=u},23713:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i});var n=t(87462),o=t(96985),a=t.n(o),s=t(96713),c=function(e){return a().createElement(s.Z,(0,n.Z)({componentName:"DetailWrapper"},e))};const i=a().forwardRef((function(e,r){return a().createElement(c,(0,n.Z)({innerRef:r},e))}))},98373:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});var n=t(96985),o=t.n(n),a=t(21242);const s=o().createElement(a.Bullseye,{className:"pf-u-p-xl"},o().createElement(a.Spinner,{"data-ouia-component-id":"remote-module-loader",size:"xl"}))},94184:(e,r)=>{var t;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var a=typeof t;if("string"===a||"number"===a)e.push(t);else if(Array.isArray(t)){if(t.length){var s=o.apply(null,t);s&&e.push(s)}}else if("object"===a)if(t.toString===Object.prototype.toString)for(var c in t)n.call(t,c)&&t[c]&&e.push(c);else e.push(t.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(r,[]))||(e.exports=t)}()},92703:(e,r,t)=>{"use strict";var n=t(50414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,r,t,o,a,s){if(s!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:a,resetWarningCache:o};return t.PropTypes=t,t}},45697:(e,r,t)=>{e.exports=t(92703)()},50414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},75251:(e,r,t)=>{"use strict";t(27418);var n=t(96985),o=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,t){var n,a={},p=null,l=null;for(n in void 0!==t&&(p=""+t),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,n)&&!i.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:o,type:e,key:p,ref:l,props:a,_owner:s.current}}r.jsx=p},85893:(e,r,t)=>{"use strict";e.exports=t(75251)},87462:(e,r,t)=>{"use strict";function n(){return n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n.apply(this,arguments)}t.d(r,{Z:()=>n})},45987:(e,r,t)=>{"use strict";t.d(r,{Z:()=>o});var n=t(63366);function o(e,r){if(null==e)return{};var t,o,a=(0,n.Z)(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}},63366:(e,r,t)=>{"use strict";function n(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(r,{Z:()=>n})}}]);