/*! For license information please see 138.3fdcc27cb94720509771.js.LICENSE.txt */
(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[138],{22663:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(96985),o=r.n(n),a=r(10305),c=r(28553),s=r(94184),p=r.n(s),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},u=function(e){var t=e.appName,r=e.scope,n=e.module,s=e.fallback,u=void 0===s?o().createElement(c.Bullseye,null,o().createElement(c.Spinner,{size:"xl"})):s,f=e.innerRef,m=e.className,y=e.component,b=void 0===y?"section":y,d=l(e,["appName","scope","module","fallback","innerRef","className","component"]);return o().createElement(b,{className:p()(m,t)},o().createElement(a.ScalprumComponent,i({className:m,appName:t,module:n,scope:null!=r?r:t,ErrorComponent:u,ref:f,fallback:u},d)))};const f=o().forwardRef((function(e,t){return o().createElement(u,i({innerRef:t},e))}))},96713:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(87462),o=r(45987),a=r(96985),c=r.n(a),s=r(45697),p=r.n(s),i=r(98373),l=r(22663),u=["componentName","innerRef"],f=function(e){var t=e.componentName,r=e.innerRef,a=(0,o.Z)(e,u);return c().createElement(l.Z,(0,n.Z)({appName:"inventory",module:"./".concat(t),fallback:i.Z,ref:r},a))};f.propTypes={store:p().object,onLoad:p().func,componentName:p().string,history:p().object,innerRef:p().shape({current:p().any})},f.defaultProps={onLoad:function(){}};const m=f},93138:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=r(87462),o=r(96985),a=r.n(o),c=r(96713),s=function(e){return a().createElement(c.Z,(0,n.Z)({componentName:"InventoryDetailHead"},e))};const p=a().forwardRef((function(e,t){return a().createElement(s,(0,n.Z)({innerRef:t},e))}))},98373:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(96985),o=r.n(n),a=r(28553);const c=o().createElement(a.Bullseye,{className:"pf-u-p-xl"},o().createElement(a.Spinner,{"data-ouia-component-id":"remote-module-loader",size:"xl"}))},94184:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var c=o.apply(null,r);c&&e.push(c)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},92703:(e,t,r)=>{"use strict";var n=r(50414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,c){if(c!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},45697:(e,t,r)=>{e.exports=r(92703)()},50414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},87462:(e,t,r)=>{"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:()=>n})},45987:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(63366);function o(e,t){if(null==e)return{};var r,o,a=(0,n.Z)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}},63366:(e,t,r)=>{"use strict";function n(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,{Z:()=>n})}}]);