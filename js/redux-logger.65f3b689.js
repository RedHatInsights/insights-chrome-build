parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"hgt/":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,t=arguments[3];!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof e&&e.amd?e(["exports"],r):r(t.reduxLogger=t.reduxLogger||{})}(this,function(e){"use strict";function r(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function n(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,r){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function i(e,t){i.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function a(e,t){a.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function c(e,t,r){c.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function u(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function l(e){var t=void 0===e?"undefined":S(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function f(e,t,r,n,s,d,p){p=p||[];var g=(s=s||[]).slice(0);if(void 0!==d){if(n){if("function"==typeof n&&n(g,d))return;if("object"===(void 0===n?"undefined":S(n))){if(n.prefilter&&n.prefilter(g,d))return;if(n.normalize){var h=n.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===l(e)&&"regexp"===l(t)&&(e=e.toString(),t=t.toString());var v=void 0===e?"undefined":S(e),y=void 0===t?"undefined":S(t),b="undefined"!==v||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==y||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new i(g,t));else if(!m&&b)r(new a(g,e));else if(l(e)!==l(t))r(new o(g,e,t));else if("date"===l(e)&&e-t!=0)r(new o(g,e,t));else if("object"===v&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new o(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;for(e.length,w=0;w<e.length;w++)w>=t.length?r(new c(g,w,new a(void 0,e[w]))):f(e[w],t[w],r,n,g,w,p);for(;w<t.length;)r(new c(g,w,new i(void 0,t[w++])))}else{var x=Object.keys(e),j=Object.keys(t);x.forEach(function(o,i){var a=j.indexOf(o);a>=0?(f(e[o],t[o],r,n,g,o,p),j=u(j,a)):f(e[o],void 0,r,n,g,o,p)}),j.forEach(function(e){f(void 0,t[e],r,n,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===v&&isNaN(e)&&isNaN(t)||r(new o(g,e,t)))}function s(e,t,r,n){return n=n||[],f(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)void 0===n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":!function e(t,r,n){if(n.path&&n.path.length){var o,i=t[r],a=n.path.length-1;for(o=0;o<a;o++)i=i[n.path[o]];switch(n.kind){case"A":e(i[n.path[o]],n.index,n.item);break;case"D":delete i[n.path[o]];break;case"E":case"N":i[n.path[o]]=n.rhs}}else switch(n.kind){case"A":e(t[r],n.index,n.item);break;case"D":t=u(t,r);break;case"E":case"N":t[r]=n.rhs}return t}(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r,n){var o=s(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=function(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}(e);r.log.apply(r,["%c "+E[t].text,function(e){return"color: "+E[e].color+"; font-weight: bold"}(t)].concat(j(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function g(e,t,r,n){switch(void 0===e?"undefined":S(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,j(r)):e[n];case"function":return e(t);default:return e}}function h(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?function(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}(t):o,a=t.collapsed,c=t.colors,u=t.level,l=t.diff,f=void 0===t.titleFormatter;e.forEach(function(o,s){var d=o.started,h=o.startedTime,v=o.action,y=o.prevState,b=o.error,m=o.took,x=o.nextState,S=e[s+1];S&&(x=S.prevState,m=S.started-d);var j=n(v),k="function"==typeof a?a(function(){return x},v,o):a,E=w(h),A=c.title?"color: "+c.title(j)+";":"",D=["color: gray; font-weight: lighter;"];D.push(A),t.timestamp&&D.push("color: gray; font-weight: lighter;"),t.duration&&D.push("color: gray; font-weight: lighter;");var O=i(j,E,m);try{k?c.title&&f?r.groupCollapsed.apply(r,["%c "+O].concat(D)):r.groupCollapsed(O):c.title&&f?r.group.apply(r,["%c "+O].concat(D)):r.group(O)}catch(e){r.log(O)}var N=g(u,j,[y],"prevState"),P=g(u,j,[j],"action"),C=g(u,j,[b,y],"error"),F=g(u,j,[x],"nextState");if(N)if(c.prevState){var L="color: "+c.prevState(y)+"; font-weight: bold";r[N]("%c prev state",L,y)}else r[N]("prev state",y);if(P)if(c.action){var T="color: "+c.action(j)+"; font-weight: bold";r[P]("%c action    ",T,j)}else r[P]("action    ",j);if(b&&C)if(c.error){var M="color: "+c.error(b,y)+"; font-weight: bold;";r[C]("%c error     ",M,b)}else r[C]("error     ",b);if(F)if(c.nextState){var _="color: "+c.nextState(x)+"; font-weight: bold";r[F]("%c next state",_,x)}else r[F]("next state",x);l&&p(y,x,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},A,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,c=t.diffPredicate;if(void 0===r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var f={};u.push(f),f.started=x.now(),f.startedTime=new Date,f.prevState=n(r()),f.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){f.error=o(e)}else s=e(l);f.took=x.now()-f.started,f.nextState=n(r());var d=t.diff&&"function"==typeof c?c(r,l):t.diff;if(h(u,Object.assign({},t,{diff:d})),u.length=0,f.error)throw f.error;return s}}}}var y,b,m=function(e,t){return function(e,t){return new Array(t+1).join(e)}("0",t-e.toString().length)+e},w=function(e){return m(e.getHours(),2)+":"+m(e.getMinutes(),2)+":"+m(e.getSeconds(),2)+"."+m(e.getMilliseconds(),3)},x="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},k=[];y="object"===(void 0===t?"undefined":S(t))&&t?t:"undefined"!=typeof window?window:{},(b=y.DeepDiff)&&k.push(function(){void 0!==b&&y.DeepDiff===s&&(y.DeepDiff=b,b=void 0)}),r(o,n),r(i,n),r(a,n),r(c,n),Object.defineProperties(s,{diff:{value:s,enumerable:!0},observableDiff:{value:f,enumerable:!0},applyDiff:{value:function(e,t,r){e&&t&&f(e,t,function(n){r&&!r(e,t,n)||d(e,t,n)})},enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:function(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)void 0===i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":!function e(t,r,n){if(n.path&&n.path.length){var o,i=t[r],a=n.path.length-1;for(o=0;o<a;o++)i=i[n.path[o]];switch(n.kind){case"A":e(i[n.path[o]],n.index,n.item);break;case"D":case"E":i[n.path[o]]=n.lhs;break;case"N":delete i[n.path[o]]}}else switch(n.kind){case"A":e(t[r],n.index,n.item);break;case"D":case"E":t[r]=n.lhs;break;case"N":t=u(t,r)}return t}(i[r.path[n]],r.index,r.item);break;case"D":case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}},enumerable:!0},isConflict:{value:function(){return void 0!==b},enumerable:!0},noConflict:{value:function(){return k&&(k.forEach(function(e){e()}),k=null),s},enumerable:!0}});var E={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},A={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?v()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=A,e.createLogger=v,e.logger=D,e.default=D,Object.defineProperty(e,"__esModule",{value:!0})});
},{}]},{},["hgt/"], null)