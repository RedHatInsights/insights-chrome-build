/*! For license information please see 713.55fbbe0310c2749d96f3.js.LICENSE.txt */
(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[713],{22663:(e,r,t)=>{"use strict";t.d(r,{Z:()=>f});var n=t(96985),o=t.n(n),a=t(10305),c=t(73666),s=t(94184),p=t.n(s),i=function(){return i=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},i.apply(this,arguments)},l=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t},u=function(e){var r=e.appName,t=e.scope,n=e.module,s=e.fallback,u=void 0===s?o().createElement(c.Bullseye,null,o().createElement(c.Spinner,{size:"xl"})):s,f=e.innerRef,m=e.className,y=e.component,b=void 0===y?"section":y,h=l(e,["appName","scope","module","fallback","innerRef","className","component"]);return o().createElement(b,{className:p()(m,r)},o().createElement(a.ScalprumComponent,i({className:m,appName:r,module:n,scope:null!=t?t:r,ErrorComponent:u,ref:f,fallback:u},h)))};const f=o().forwardRef((function(e,r){return o().createElement(u,i({innerRef:r},e))}))},96713:(e,r,t)=>{"use strict";t.d(r,{Z:()=>m});var n=t(87462),o=t(45987),a=t(96985),c=t.n(a),s=t(45697),p=t.n(s),i=t(98373),l=t(22663),u=["componentName","innerRef"],f=function(e){var r=e.componentName,t=e.innerRef,a=(0,o.Z)(e,u);return c().createElement(l.Z,(0,n.Z)({appName:"inventory",module:"./".concat(r),fallback:i.Z,ref:t},a))};f.propTypes={store:p().object,onLoad:p().func,componentName:p().string,history:p().object,innerRef:p().shape({current:p().any})},f.defaultProps={onLoad:function(){}};const m=f},23713:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>p});var n=t(87462),o=t(96985),a=t.n(o),c=t(96713),s=function(e){return a().createElement(c.Z,(0,n.Z)({componentName:"DetailWrapper"},e))};const p=a().forwardRef((function(e,r){return a().createElement(s,(0,n.Z)({innerRef:r},e))}))},98373:(e,r,t)=>{"use strict";t.d(r,{Z:()=>c});var n=t(96985),o=t.n(n),a=t(73666);const c=o().createElement(a.Bullseye,{className:"pf-u-p-xl"},o().createElement(a.Spinner,{"data-ouia-component-id":"remote-module-loader",size:"xl"}))},94184:(e,r)=>{var t;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var a=typeof t;if("string"===a||"number"===a)e.push(t);else if(Array.isArray(t)){if(t.length){var c=o.apply(null,t);c&&e.push(c)}}else if("object"===a)if(t.toString===Object.prototype.toString)for(var s in t)n.call(t,s)&&t[s]&&e.push(s);else e.push(t.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(r,[]))||(e.exports=t)}()},92703:(e,r,t)=>{"use strict";var n=t(50414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,r,t,o,a,c){if(c!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function r(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:a,resetWarningCache:o};return t.PropTypes=t,t}},45697:(e,r,t)=>{e.exports=t(92703)()},50414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},87462:(e,r,t)=>{"use strict";function n(){return n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n.apply(this,arguments)}t.d(r,{Z:()=>n})},45987:(e,r,t)=>{"use strict";t.d(r,{Z:()=>o});var n=t(63366);function o(e,r){if(null==e)return{};var t,o,a=(0,n.Z)(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}},63366:(e,r,t)=>{"use strict";function n(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(r,{Z:()=>n})}}]);