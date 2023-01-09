/*! For license information please see tsub-middleware.17b2f92872f1ffc8.js.LICENSE.txt */
(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[604],{37122:(t,r,e)=>{"use strict";e.r(r),e.d(r,{tsubMiddleware:()=>o});var n=e(35130),o=function(t){return function(r){var e=r.payload,o=r.integration,s=r.next;new n.Store(t).getRulesByDestinationName(o).forEach((function(t){for(var r=t.matchers,o=t.transformers,i=0;i<r.length;i++)if(n.matches(e.obj,r[i])&&(e.obj=n.transform(e.obj,o[i]),null===e.obj))return s(null)})),s(e)}}},35130:function(t,r,e){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(r,"__esModule",{value:!0}),r.Store=r.matches=r.transform=void 0;var o=e(41094);Object.defineProperty(r,"transform",{enumerable:!0,get:function(){return n(o).default}});var s=e(20714);Object.defineProperty(r,"matches",{enumerable:!0,get:function(){return n(s).default}});var i=e(14372);Object.defineProperty(r,"Store",{enumerable:!0,get:function(){return n(i).default}})},20714:function(t,r,e){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(r,"__esModule",{value:!0});var o=n(e(26905));function s(t,r){if(!Array.isArray(t))return!0===i(t,r);var e=t[0];switch(e){case"!":return!s(t[1],r);case"or":for(var n=1;n<t.length;n++)if(s(t[n],r))return!0;return!1;case"and":for(n=1;n<t.length;n++)if(!s(t[n],r))return!1;return!0;case"=":case"!=":return function(t,r,e,n){u(t)&&(t=s(t,n));u(r)&&(r=s(r,n));"object"==typeof t&&"object"==typeof r&&(t=JSON.stringify(t),r=JSON.stringify(r));switch(e){case"=":return t===r;case"!=":return t!==r;default:throw new Error("Invalid operator in compareItems: ".concat(e))}}(i(t[1],r),i(t[2],r),e,r);case"<=":case"<":case">":case">=":return function(t,r,e,n){u(t)&&(t=s(t,n));u(r)&&(r=s(r,n));if("number"!=typeof t||"number"!=typeof r)return!1;switch(e){case"<=":return t<=r;case">=":return t>=r;case"<":return t<r;case">":return t>r;default:throw new Error("Invalid operator in compareNumbers: ".concat(e))}}(i(t[1],r),i(t[2],r),e,r);case"in":return function(t,r,e){return void 0!==r.find((function(r){return i(r,e)===t}))}(i(t[1],r),i(t[2],r),r);case"contains":return function(t,r){if("string"!=typeof t||"string"!=typeof r)return!1;return-1!==t.indexOf(r)}(i(t[1],r),i(t[2],r));case"match":return function(t,r){if("string"!=typeof t||"string"!=typeof r)return!1;return function(t,r){var e,n;t:for(;t.length>0;){var o=void 0,s=void 0;if(o=(e=a(t)).star,s=e.chunk,t=e.pattern,o&&""===s)return!0;var i=c(s,r),u=i.t,f=i.ok,p=i.err;if(p)return!1;if(!f||!(0===u.length||t.length>0)){if(o)for(var l=0;l<r.length;l++){if(u=(n=c(s,r.slice(l+1))).t,f=n.ok,p=n.err,f){if(0===t.length&&u.length>0)continue;r=u;continue t}if(p)return!1}return!1}r=u}return 0===r.length}(r,t)}(i(t[1],r),i(t[2],r));case"lowercase":var o=i(t[1],r);return"string"!=typeof o?null:o.toLowerCase();case"typeof":return typeof i(t[1],r);case"length":return function(t){if(null===t)return 0;if(!Array.isArray(t)&&"string"!=typeof t)return NaN;return t.length}(i(t[1],r));default:throw new Error("FQL IR could not evaluate for token: ".concat(e))}}function i(t,r){return Array.isArray(t)?t:"object"==typeof t?t.value:(0,o.default)(r,t)}function u(t){return!!Array.isArray(t)&&(("lowercase"===t[0]||"length"===t[0]||"typeof"===t[0])&&2===t.length||("contains"===t[0]||"match"===t[0])&&3===t.length)}function a(t){for(var r={star:!1,chunk:"",pattern:""};t.length>0&&"*"===t[0];)t=t.slice(1),r.star=!0;var e,n=!1;t:for(e=0;e<t.length;e++)switch(t[e]){case"\\":e+1<t.length&&e++;break;case"[":n=!0;break;case"]":n=!1;break;case"*":if(!n)break t}return r.chunk=t.slice(0,e),r.pattern=t.slice(e),r}function c(t,r){for(var e,n,o={t:"",ok:!1,err:!1};t.length>0;){if(0===r.length)return o;switch(t[0]){case"[":var s=r[0];r=r.slice(1);var i=!0;(t=t.slice(1)).length>0&&"^"===t[0]&&(i=!1,t=t.slice(1));for(var u=!1,a=0;;){if(t.length>0&&"]"===t[0]&&a>0){t=t.slice(1);break}var c,p="";if(c=(e=f(t)).char,t=e.newChunk,e.err)return o;if(p=c,"-"===t[0]&&(p=(n=f(t.slice(1))).char,t=n.newChunk,n.err))return o;c<=s&&s<=p&&(u=!0),a++}if(u!==i)return o;break;case"?":r=r.slice(1),t=t.slice(1);break;case"\\":if(0===(t=t.slice(1)).length)return o.err=!0,o;default:if(t[0]!==r[0])return o;r=r.slice(1),t=t.slice(1)}}return o.t=r,o.ok=!0,o.err=!1,o}function f(t){var r={char:"",newChunk:"",err:!1};return 0===t.length||"-"===t[0]||"]"===t[0]||"\\"===t[0]&&0===(t=t.slice(1)).length?(r.err=!0,r):(r.char=t[0],r.newChunk=t.slice(1),0===r.newChunk.length&&(r.err=!0),r)}r.default=function(t,r){if(!r)throw new Error("No matcher supplied!");switch(r.type){case"all":return!0;case"fql":return function(t,r){if(!t)return!1;try{t=JSON.parse(t)}catch(r){throw new Error('Failed to JSON.parse FQL intermediate representation "'.concat(t,'": ').concat(r))}var e=s(t,r);if("boolean"!=typeof e)return!1;return e}(r.ir,t);default:throw new Error("Matcher of type ".concat(r.type," unsupported."))}}},14372:(t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e=function(){function t(t){this.rules=[],this.rules=t||[]}return t.prototype.getRulesByDestinationName=function(t){for(var r=[],e=0,n=this.rules;e<n.length;e++){var o=n[e];o.destinationName!==t&&void 0!==o.destinationName||r.push(o)}return r},t}();r.default=e},41094:function(t,r,e){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(r,"__esModule",{value:!0});var o=n(e(42766)),s=n(e(26905)),i=n(e(36652)),u=e(86651),a=e(54195);function c(t,r){for(var e in r.drop)if(r.drop.hasOwnProperty(e)){var n=""===e?t:(0,s.default)(t,e);if("object"==typeof n&&null!==n)for(var o=0,i=r.drop[e];o<i.length;o++){delete n[i[o]]}}}function f(t,r){for(var e in r.allow)if(r.allow.hasOwnProperty(e)){var n=""===e?t:(0,s.default)(t,e);if("object"==typeof n&&null!==n)for(var o in n)n.hasOwnProperty(o)&&-1===r.allow[e].indexOf(o)&&delete n[o]}}function p(t,r){var e=JSON.parse(JSON.stringify(t));for(var n in r.map)if(r.map.hasOwnProperty(n)){var o=r.map[n],i=n.split("."),c=void 0;if(i.length>1?(i.pop(),c=(0,s.default)(e,i.join("."))):c=t,"object"==typeof c){if(o.copy){var f=(0,s.default)(e,o.copy);void 0!==f&&(0,u.dset)(t,n,f)}else if(o.move){var p=(0,s.default)(e,o.move);void 0!==p&&(0,u.dset)(t,n,p),(0,a.unset)(t,o.move)}else o.hasOwnProperty("set")&&(0,u.dset)(t,n,o.set);if(o.to_string){var l=(0,s.default)(t,n);if("string"==typeof l||"object"==typeof l&&null!==l)continue;void 0!==l?(0,u.dset)(t,n,JSON.stringify(l)):(0,u.dset)(t,n,"undefined")}}}}function l(t,r){return!(r.sample.percent<=0)&&(r.sample.percent>=1||(r.sample.path?function(t,r){var e=(0,s.default)(t,r.sample.path),n=(0,o.default)(JSON.stringify(e)),u=-64,a=[];v(n.slice(0,8),a);for(var c=0,f=0;f<64&&1!==a[f];f++)c++;if(0!==c){var p=[];v(n.slice(9,16),p),u-=c,a.splice(0,c),p.splice(64-c),a=a.concat(p)}return a[63]=0===a[63]?1:0,(0,i.default)(parseInt(a.join(""),2),u)<r.sample.percent}(t,r):(e=r.sample.percent,Math.random()<=e)));var e}function v(t,r){for(var e=0;e<8;e++)for(var n=t[e],o=128;o>=1;o/=2)n-o>=0?(n-=o,r.push(1)):r.push(0)}r.default=function(t,r){for(var e=t,n=0,o=r;n<o.length;n++){var s=o[n];switch(s.type){case"drop":return null;case"drop_properties":c(e,s.config);break;case"allow_properties":f(e,s.config);break;case"sample_event":if(l(e,s.config))break;return null;case"map_properties":p(e,s.config);break;case"hash_properties":break;default:throw new Error('Transformer of type "'.concat(s.type,'" is unsupported.'))}}return e}},54195:function(t,r,e){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(r,"__esModule",{value:!0}),r.unset=void 0;var o=n(e(26905));r.unset=function(t,r){if((0,o.default)(t,r)){for(var e=r.split("."),n=e.pop();e.length&&"\\"===e[e.length-1].slice(-1);)n=e.pop().slice(0,-1)+"."+n;for(;e.length;)t=t[r=e.shift()];return delete t[n]}return!0}},79706:t=>{"use strict";var r="function"==typeof Float64Array?Float64Array:void 0;t.exports=r},19566:(t,r,e)=>{"use strict";var n,o=e(51014),s=e(79706),i=e(9664);n=o()?s:i,t.exports=n},9664:t=>{"use strict";t.exports=function(){throw new Error("not implemented")}},5943:(t,r,e)=>{"use strict";var n,o=e(32428),s=e(27774),i=e(85155);n=o()?s:i,t.exports=n},85155:t=>{"use strict";t.exports=function(){throw new Error("not implemented")}},27774:t=>{"use strict";var r="function"==typeof Uint16Array?Uint16Array:void 0;t.exports=r},5839:(t,r,e)=>{"use strict";var n,o=e(85353),s=e(88536),i=e(50062);n=o()?s:i,t.exports=n},50062:t=>{"use strict";t.exports=function(){throw new Error("not implemented")}},88536:t=>{"use strict";var r="function"==typeof Uint32Array?Uint32Array:void 0;t.exports=r},49626:(t,r,e)=>{"use strict";var n,o=e(5819),s=e(39580),i=e(21952);n=o()?s:i,t.exports=n},21952:t=>{"use strict";t.exports=function(){throw new Error("not implemented")}},39580:t=>{"use strict";var r="function"==typeof Uint8Array?Uint8Array:void 0;t.exports=r},56064:t=>{"use strict";var r="function"==typeof Float64Array?Float64Array:null;t.exports=r},51014:(t,r,e)=>{"use strict";var n=e(29780);t.exports=n},29780:(t,r,e)=>{"use strict";var n=e(20241),o=e(56064);t.exports=function(){var t,r;if("function"!=typeof o)return!1;try{r=new o([1,3.14,-3.14,NaN]),t=n(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}},6480:(t,r,e)=>{"use strict";var n=e(35426);t.exports=n},35426:t=>{"use strict";var r=Object.prototype.hasOwnProperty;t.exports=function(t,e){return null!=t&&r.call(t,e)}},24847:(t,r,e)=>{"use strict";var n=e(52596);t.exports=n},52596:t=>{"use strict";t.exports=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}},84183:(t,r,e)=>{"use strict";var n=e(48102);t.exports=n},48102:(t,r,e)=>{"use strict";var n=e(24847)();t.exports=function(){return n&&"symbol"==typeof Symbol.toStringTag}},32428:(t,r,e)=>{"use strict";var n=e(8389);t.exports=n},8389:(t,r,e)=>{"use strict";var n=e(24694),o=e(42183),s=e(18602);t.exports=function(){var t,r;if("function"!=typeof s)return!1;try{r=new s(r=[1,3.14,-3.14,o+1,o+2]),t=n(r)&&1===r[0]&&3===r[1]&&r[2]===o-2&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}},18602:t=>{"use strict";var r="function"==typeof Uint16Array?Uint16Array:null;t.exports=r},85353:(t,r,e)=>{"use strict";var n=e(80052);t.exports=n},80052:(t,r,e)=>{"use strict";var n=e(64505),o=e(99811),s=e(50156);t.exports=function(){var t,r;if("function"!=typeof s)return!1;try{r=new s(r=[1,3.14,-3.14,o+1,o+2]),t=n(r)&&1===r[0]&&3===r[1]&&r[2]===o-2&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}},50156:t=>{"use strict";var r="function"==typeof Uint32Array?Uint32Array:null;t.exports=r},5819:(t,r,e)=>{"use strict";var n=e(81405);t.exports=n},81405:(t,r,e)=>{"use strict";var n=e(7641),o=e(92912),s=e(96619);t.exports=function(){var t,r;if("function"!=typeof s)return!1;try{r=new s(r=[1,3.14,-3.14,o+1,o+2]),t=n(r)&&1===r[0]&&3===r[1]&&r[2]===o-2&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}},96619:t=>{"use strict";var r="function"==typeof Uint8Array?Uint8Array:null;t.exports=r},20241:(t,r,e)=>{"use strict";var n=e(42520);t.exports=n},42520:(t,r,e)=>{"use strict";var n=e(25769),o="function"==typeof Float64Array;t.exports=function(t){return o&&t instanceof Float64Array||"[object Float64Array]"===n(t)}},66741:(t,r,e)=>{"use strict";var n=e(49626),o={uint16:e(5943),uint8:n};t.exports=o},62282:(t,r,e)=>{"use strict";var n=e(99402);t.exports=n},99402:(t,r,e)=>{"use strict";var n,o,s=e(66741);(o=new s.uint16(1))[0]=4660,n=52===new s.uint8(o.buffer)[0],t.exports=n},24694:(t,r,e)=>{"use strict";var n=e(66017);t.exports=n},66017:(t,r,e)=>{"use strict";var n=e(25769),o="function"==typeof Uint16Array;t.exports=function(t){return o&&t instanceof Uint16Array||"[object Uint16Array]"===n(t)}},64505:(t,r,e)=>{"use strict";var n=e(2465);t.exports=n},2465:(t,r,e)=>{"use strict";var n=e(25769),o="function"==typeof Uint32Array;t.exports=function(t){return o&&t instanceof Uint32Array||"[object Uint32Array]"===n(t)}},7641:(t,r,e)=>{"use strict";var n=e(2163);t.exports=n},2163:(t,r,e)=>{"use strict";var n=e(25769),o="function"==typeof Uint8Array;t.exports=function(t){return o&&t instanceof Uint8Array||"[object Uint8Array]"===n(t)}},8175:t=>{"use strict";t.exports=1023},6264:t=>{"use strict";t.exports=2147483647},6619:t=>{"use strict";t.exports=2146435072},84798:t=>{"use strict";t.exports=2147483648},72178:t=>{"use strict";t.exports=-1023},45355:t=>{"use strict";t.exports=1023},40008:t=>{"use strict";t.exports=-1074},10813:(t,r,e)=>{"use strict";var n=e(5606).NEGATIVE_INFINITY;t.exports=n},45992:t=>{"use strict";var r=Number.POSITIVE_INFINITY;t.exports=r},43364:t=>{"use strict";t.exports=22250738585072014e-324},42183:t=>{"use strict";t.exports=65535},99811:t=>{"use strict";t.exports=4294967295},92912:t=>{"use strict";t.exports=255},27831:(t,r,e)=>{"use strict";var n=e(9543);t.exports=n},9543:(t,r,e)=>{"use strict";var n=e(45992),o=e(10813);t.exports=function(t){return t===n||t===o}},97949:(t,r,e)=>{"use strict";var n=e(43909);t.exports=n},43909:t=>{"use strict";t.exports=function(t){return t!=t}},3226:(t,r,e)=>{"use strict";var n=e(50356);t.exports=n},50356:t=>{"use strict";t.exports=function(t){return Math.abs(t)}},31949:(t,r,e)=>{"use strict";var n=e(21480);t.exports=n},21480:(t,r,e)=>{"use strict";var n=e(84798),o=e(6264),s=e(66),i=e(38041),u=e(63563),a=[0,0];t.exports=function(t,r){var e,c;return s.assign(t,a,1,0),e=a[0],e&=o,c=i(r),u(e|=c&=n,a[1])}},36652:(t,r,e)=>{"use strict";var n=e(46973);t.exports=n},46973:(t,r,e)=>{"use strict";var n=e(45992),o=e(10813),s=e(8175),i=e(45355),u=e(72178),a=e(40008),c=e(97949),f=e(27831),p=e(31949),l=e(1299),v=e(32661),y=e(66),h=e(63563),d=[0,0],x=[0,0];t.exports=function(t,r){var e,b;return 0===t||c(t)||f(t)?t:(l(d,t),r+=d[1],(r+=v(t=d[0]))<a?p(0,t):r>i?t<0?o:n:(r<=u?(r+=52,b=2220446049250313e-31):b=1,y(x,t),e=x[0],e&=2148532223,b*h(e|=r+s<<20,x[1])))}},5606:(t,r,e)=>{"use strict";var n=e(9485);t.exports=n},9485:t=>{"use strict";t.exports=Number},32661:(t,r,e)=>{"use strict";var n=e(33393);t.exports=n},33393:(t,r,e)=>{"use strict";var n=e(38041),o=e(6619),s=e(8175);t.exports=function(t){var r=n(t);return(r=(r&o)>>>20)-s|0}},63563:(t,r,e)=>{"use strict";var n=e(52613);t.exports=n},5818:(t,r,e)=>{"use strict";var n,o,s;!0===e(62282)?(o=1,s=0):(o=0,s=1),n={HIGH:o,LOW:s},t.exports=n},52613:(t,r,e)=>{"use strict";var n=e(5839),o=e(19566),s=e(5818),i=new o(1),u=new n(i.buffer),a=s.HIGH,c=s.LOW;t.exports=function(t,r){return u[a]=t,u[c]=r,i[0]}},40773:(t,r,e)=>{"use strict";var n;n=!0===e(62282)?1:0,t.exports=n},38041:(t,r,e)=>{"use strict";var n=e(51406);t.exports=n},51406:(t,r,e)=>{"use strict";var n=e(5839),o=e(19566),s=e(40773),i=new o(1),u=new n(i.buffer);t.exports=function(t){return i[0]=t,u[s]}},46376:(t,r,e)=>{"use strict";var n=e(43364),o=e(27831),s=e(97949),i=e(3226);t.exports=function(t,r,e,u){return s(t)||o(t)?(r[u]=t,r[u+e]=0,r):0!==t&&i(t)<n?(r[u]=4503599627370496*t,r[u+e]=-52,r):(r[u]=t,r[u+e]=0,r)}},1299:(t,r,e)=>{"use strict";var n=e(55375),o=e(88154);n(o,"assign",e(46376)),t.exports=o},88154:(t,r,e)=>{"use strict";var n=e(46376);t.exports=function(t){return n(t,[0,0],1,0)}},5319:(t,r,e)=>{"use strict";var n=e(5839),o=e(19566),s=e(1694),i=new o(1),u=new n(i.buffer),a=s.HIGH,c=s.LOW;t.exports=function(t,r,e,n){return i[0]=t,r[n]=u[a],r[n+e]=u[c],r}},66:(t,r,e)=>{"use strict";var n=e(55375),o=e(21894);n(o,"assign",e(5319)),t.exports=o},1694:(t,r,e)=>{"use strict";var n,o,s;!0===e(62282)?(o=1,s=0):(o=0,s=1),n={HIGH:o,LOW:s},t.exports=n},21894:(t,r,e)=>{"use strict";var n=e(5319);t.exports=function(t){return n(t,[0,0],1,0)}},55375:(t,r,e)=>{"use strict";var n=e(47484);t.exports=n},47484:(t,r,e)=>{"use strict";var n=e(63673);t.exports=function(t,r,e){n(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}},55275:t=>{"use strict";var r=Object.defineProperty;t.exports=r},92344:t=>{"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;t.exports=r},36417:(t,r,e)=>{"use strict";var n=e(92344);t.exports=function(){try{return n({},"x",{}),!0}catch(t){return!1}}},63673:(t,r,e)=>{"use strict";var n,o=e(36417),s=e(55275),i=e(34885);n=o()?s:i,t.exports=n},34885:t=>{"use strict";var r=Object.prototype,e=r.toString,n=r.__defineGetter__,o=r.__defineSetter__,s=r.__lookupGetter__,i=r.__lookupSetter__;t.exports=function(t,u,a){var c,f,p,l;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((f="value"in a)&&(s.call(t,u)||i.call(t,u)?(c=t.__proto__,t.__proto__=r,delete t[u],t[u]=a.value,t.__proto__=c):t[u]=a.value),p="get"in a,l="set"in a,f&&(p||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&n&&n.call(t,u,a.get),l&&o&&o.call(t,u,a.set),t}},25769:(t,r,e)=>{"use strict";var n,o=e(84183),s=e(73142),i=e(52027);n=o()?i:s,t.exports=n},73142:(t,r,e)=>{"use strict";var n=e(64490);t.exports=function(t){return n.call(t)}},52027:(t,r,e)=>{"use strict";var n=e(6480),o=e(5382),s=e(64490);t.exports=function(t){var r,e,i;if(null==t)return s.call(t);e=t[o],r=n(t,o);try{t[o]=void 0}catch(r){return s.call(t)}return i=s.call(t),r?t[o]=e:delete t[o],i}},64490:t=>{"use strict";var r=Object.prototype.toString;t.exports=r},5382:t=>{"use strict";var r="function"==typeof Symbol?Symbol.toStringTag:"";t.exports=r},26905:function(t){t.exports=function(t,r,e,n,o){for(r=r.split?r.split("."):r,n=0;n<r.length;n++)t=t?t[r[n]]:o;return t===o?e:t}},86651:(t,r)=>{r.dset=function(t,r,e){r.split&&(r=r.split("."));for(var n,o,s=0,i=r.length,u=t;s<i&&"__proto__"!==(o=r[s++])&&"constructor"!==o&&"prototype"!==o;)u=u[o]=s===i?e:typeof(n=u[o])==typeof r?n:0*r[s]!=0||~(""+r[s]).indexOf(".")?{}:[]}},42766:(t,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>s});for(var n=[],o=0;o<64;)n[o]=0|4294967296*Math.sin(++o%Math.PI);function s(t){var r,e,s,i=[r=1732584193,e=4023233417,~r,~e],u=[],a=unescape(encodeURI(t))+"",c=a.length;for(t=--c/4+2|15,u[--t]=8*c;~c;)u[c>>2]|=a.charCodeAt(c)<<8*c--;for(o=a=0;o<t;o+=16){for(c=i;a<64;c=[s=c[3],r+((s=c[0]+[r&e|~r&s,s&r|~s&e,r^e^s,e^(r|~s)][c=a>>4]+n[a]+~~u[o|15&[a,5*a+1,3*a+5,7*a][c]])<<(c=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*c+a++%4])|s>>>-c),r,e])r=0|c[1],e=c[2];for(a=4;a;)i[--a]+=c[a]}for(t="";a<32;)t+=(i[a>>3]>>4*(1^a++)&15).toString(16);return t}}}]);