(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[78],{96156:(e,r,n)=>{"use strict";function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}n.d(r,{Z:()=>t})},81253:(e,r,n)=>{"use strict";n.d(r,{Z:()=>o});var t=n(19756);function o(e,r){if(null==e)return{};var n,o,a=(0,t.Z)(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},19756:(e,r,n)=>{"use strict";function t(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(r,{Z:()=>t})},73631:(e,r,n)=>{"use strict";n(27529),r.default={modifiers:{sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",xl:"pf-m-xl"},spinner:"pf-c-spinner",spinnerClipper:"pf-c-spinner__clipper",spinnerLeadBall:"pf-c-spinner__lead-ball",spinnerPath:"pf-c-spinner__path",spinnerTailBall:"pf-c-spinner__tail-ball"}},25687:(e,r,n)=>{"use strict";n(48586),r.default={bullseye:"pf-l-bullseye"}},38296:(e,r,n)=>{"use strict";function t(...e){const r=[],n={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const o=typeof e;if("string"===o||"number"===o)r.push(e);else if(Array.isArray(e)&&e.length){const n=t(...e);n&&r.push(n)}else if("object"===o)for(const t in e)n.call(e,t)&&e[t]&&r.push(t)})),r.join(" ")}n.d(r,{css:()=>t})},22663:(e,r,n)=>{"use strict";n.d(r,{Z:()=>O});var t=n(96156),o=n(22122),a=n(81253),l=n(96985),c=n.n(l),i=n(45697),s=n.n(i),p=n(8288),f=n(52643),u=n(2372);function m(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function y(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?m(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var b=function(e){var r=e.appName,n=e.scope,t=e.module,i=e.fallback,s=e.innerRef,f=(0,a.Z)(e,["appName","scope","module","fallback","innerRef"]);return c().createElement(l.Suspense,{fallback:i},c().createElement(p.ScalprumComponent,(0,o.Z)({appName:r,module:t,scope:n||r,ErrorComponent:i,ref:s},f)))},d=c().forwardRef((function(e,r){return c().createElement(b,(0,o.Z)({innerRef:r},e))}));d.propTypes={fallback:s().node,appName:s().string.isRequired,module:s().string.isRequired,scope:s().string},d.defaultProps={fallback:c().createElement(f.b,null,c().createElement(u.$,{size:"xl"}))},b.propTypes=y(y({},d.propTypes),{},{innerRef:s().any});const O=d},96713:(e,r,n)=>{"use strict";n.d(r,{Z:()=>u});var t=n(22122),o=n(81253),a=n(96985),l=n.n(a),c=n(45697),i=n.n(c),s=n(98373),p=n(22663),f=function(e){var r=e.componentName,n=e.innerRef,a=(0,o.Z)(e,["componentName","innerRef"]);return l().createElement(p.Z,(0,t.Z)({appName:"inventory",module:"./".concat(r),fallback:s.Z,ref:n},a))};f.propTypes={store:i().object,onLoad:i().func,componentName:i().string,history:i().object,innerRef:i().shape({current:i().any})},f.defaultProps={onLoad:function(){}};const u=f},93138:(e,r,n)=>{"use strict";n.r(r),n.d(r,{default:()=>i});var t=n(22122),o=n(96985),a=n.n(o),l=n(96713),c=function(e){return a().createElement(l.Z,(0,t.Z)({componentName:"InventoryDetailHead"},e))};const i=a().forwardRef((function(e,r){return a().createElement(c,(0,t.Z)({innerRef:r},e))}))},98373:(e,r,n)=>{"use strict";n.d(r,{Z:()=>l});var t=n(96985),o=n.n(t),a=n(97066);const l=o().createElement(a.Bullseye,{className:"pf-u-p-xl"},o().createElement(a.Spinner,{"data-ouia-component-id":"remote-module-loader",size:"xl"}))},70655:(e,r,n)=>{"use strict";n.d(r,{__assign:()=>t,__rest:()=>o,__values:()=>a,__spread:()=>c});var t=function(){return(t=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)};function o(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]])}return n}function a(e){var r="function"==typeof Symbol&&Symbol.iterator,n=r&&e[r],t=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function l(e,r){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var t,o,a=n.call(e),l=[];try{for(;(void 0===r||r-- >0)&&!(t=a.next()).done;)l.push(t.value)}catch(e){o={error:e}}finally{try{t&&!t.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return l}function c(){for(var e=[],r=0;r<arguments.length;r++)e=e.concat(l(arguments[r]));return e}}}]);