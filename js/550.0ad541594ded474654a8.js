/*! For license information please see 550.0ad541594ded474654a8.js.LICENSE.txt */
(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[550],{8679:(t,e,n)=>{"use strict";var r=n(59864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function u(t){return r.isMemo(t)?a:c[t.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=a;var s=Object.defineProperty,p=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,m=Object.prototype;t.exports=function t(e,n,r){if("string"!=typeof n){if(m){var o=h(n);o&&o!==m&&t(e,o,r)}var a=p(n);l&&(a=a.concat(l(n)));for(var c=u(e),d=u(n),y=0;y<a.length;++y){var v=a[y];if(!(i[v]||r&&r[v]||d&&d[v]||c&&c[v])){var g=f(n,v);try{s(e,v,g)}catch(t){}}}}return e}},5826:t=>{t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},42554:(t,e,n)=>{"use strict";n.d(e,{Z:()=>l});var r=n(96985),o=n.n(r),i=n(94578),a=n(45697),c=n.n(a),u=1073741823,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:{};function p(t){var e=[];return{on:function(t){e.push(t)},off:function(t){e=e.filter((function(e){return e!==t}))},get:function(){return t},set:function(n,r){t=n,e.forEach((function(e){return e(t,r)}))}}}const l=o().createContext||function(t,e){var n,o,a,l="__create-react-context-"+((s[a="__global_unique_id__"]=(s[a]||0)+1)+"__"),f=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).emitter=p(e.props.value),e}(0,i.Z)(n,t);var r=n.prototype;return r.getChildContext=function(){var t;return(t={})[l]=this.emitter,t},r.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var n,r=this.props.value,o=t.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?n=0:(n="function"==typeof e?e(r,o):u,0!==(n|=0)&&this.emitter.set(t.value,n))}var i,a},r.render=function(){return this.props.children},n}(r.Component);f.childContextTypes=((n={})[l]=c().object.isRequired,n);var h=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(e,n){0!=((0|t.observedBits)&n)&&t.setState({value:t.getValue()})},t}(0,i.Z)(n,e);var r=n.prototype;return r.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?u:e},r.componentDidMount=function(){this.context[l]&&this.context[l].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?u:t},r.componentWillUnmount=function(){this.context[l]&&this.context[l].off(this.onUpdate)},r.getValue=function(){return this.context[l]?this.context[l].get():t},r.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(r.Component);return h.contextTypes=((o={})[l]=c().object,o),{Provider:f,Consumer:h}}},14779:(t,e,n)=>{var r=n(5826);t.exports=h,t.exports.parse=i,t.exports.compile=function(t,e){return c(i(t,e),e)},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=f;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(t,e){for(var n,r=[],i=0,a=0,c="",p=e&&e.delimiter||"/";null!=(n=o.exec(t));){var l=n[0],f=n[1],h=n.index;if(c+=t.slice(a,h),a=h+l.length,f)c+=f[1];else{var m=t[a],d=n[2],y=n[3],v=n[4],g=n[5],x=n[6],b=n[7];c&&(r.push(c),c="");var C=null!=d&&null!=m&&m!==d,E="+"===x||"*"===x,w="?"===x||"*"===x,$=n[2]||p,S=v||g;r.push({name:y||i++,prefix:d||"",delimiter:$,optional:w,repeat:E,partial:C,asterisk:!!b,pattern:S?s(S):b?".*":"[^"+u($)+"]+?"})}}return a<t.length&&(c+=t.substr(a)),c&&r.push(c),r}function a(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function c(t,e){for(var n=new Array(t.length),o=0;o<t.length;o++)"object"==typeof t[o]&&(n[o]=new RegExp("^(?:"+t[o].pattern+")$",l(e)));return function(e,o){for(var i="",c=e||{},u=(o||{}).pretty?a:encodeURIComponent,s=0;s<t.length;s++){var p=t[s];if("string"!=typeof p){var l,f=c[p.name];if(null==f){if(p.optional){p.partial&&(i+=p.prefix);continue}throw new TypeError('Expected "'+p.name+'" to be defined')}if(r(f)){if(!p.repeat)throw new TypeError('Expected "'+p.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(p.optional)continue;throw new TypeError('Expected "'+p.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(l=u(f[h]),!n[s].test(l))throw new TypeError('Expected all "'+p.name+'" to match "'+p.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===h?p.prefix:p.delimiter)+l}}else{if(l=p.asterisk?encodeURI(f).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):u(f),!n[s].test(l))throw new TypeError('Expected "'+p.name+'" to match "'+p.pattern+'", but received "'+l+'"');i+=p.prefix+l}}else i+=p}return i}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function p(t,e){return t.keys=e,t}function l(t){return t&&t.sensitive?"":"i"}function f(t,e,n){r(e)||(n=e||n,e=[]);for(var o=(n=n||{}).strict,i=!1!==n.end,a="",c=0;c<t.length;c++){var s=t[c];if("string"==typeof s)a+=u(s);else{var f=u(s.prefix),h="(?:"+s.pattern+")";e.push(s),s.repeat&&(h+="(?:"+f+h+")*"),a+=h=s.optional?s.partial?f+"("+h+")?":"(?:"+f+"("+h+"))?":f+"("+h+")"}}var m=u(n.delimiter||"/"),d=a.slice(-m.length)===m;return o||(a=(d?a.slice(0,-m.length):a)+"(?:"+m+"(?=$))?"),a+=i?"$":o&&d?"":"(?="+m+"|$)",p(new RegExp("^"+a,l(n)),e)}function h(t,e,n){return r(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return p(t,e)}(t,e):r(t)?function(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(h(t[o],e,n).source);return p(new RegExp("(?:"+r.join("|")+")",l(n)),e)}(t,e,n):function(t,e,n){return f(i(t,n),e,n)}(t,e,n)}},69921:(t,e)=>{"use strict";var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,p=n?Symbol.for("react.async_mode"):60111,l=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,d=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,x=n?Symbol.for("react.responder"):60118,b=n?Symbol.for("react.scope"):60119;function C(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case r:switch(t=t.type){case p:case l:case i:case c:case a:case h:return t;default:switch(t=t&&t.$$typeof){case s:case f:case y:case d:case u:return t;default:return e}}case o:return e}}}function E(t){return C(t)===l}e.AsyncMode=p,e.ConcurrentMode=l,e.ContextConsumer=s,e.ContextProvider=u,e.Element=r,e.ForwardRef=f,e.Fragment=i,e.Lazy=y,e.Memo=d,e.Portal=o,e.Profiler=c,e.StrictMode=a,e.Suspense=h,e.isAsyncMode=function(t){return E(t)||C(t)===p},e.isConcurrentMode=E,e.isContextConsumer=function(t){return C(t)===s},e.isContextProvider=function(t){return C(t)===u},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===r},e.isForwardRef=function(t){return C(t)===f},e.isFragment=function(t){return C(t)===i},e.isLazy=function(t){return C(t)===y},e.isMemo=function(t){return C(t)===d},e.isPortal=function(t){return C(t)===o},e.isProfiler=function(t){return C(t)===c},e.isStrictMode=function(t){return C(t)===a},e.isSuspense=function(t){return C(t)===h},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===i||t===l||t===c||t===a||t===h||t===m||"object"==typeof t&&null!==t&&(t.$$typeof===y||t.$$typeof===d||t.$$typeof===u||t.$$typeof===s||t.$$typeof===f||t.$$typeof===g||t.$$typeof===x||t.$$typeof===b||t.$$typeof===v)},e.typeOf=C},59864:(t,e,n)=>{"use strict";t.exports=n(69921)},16550:(t,e,n)=>{"use strict";n.d(e,{VA:()=>x,NL:()=>C,l_:()=>S,AW:()=>_,F0:()=>g,gx:()=>O,rs:()=>j,s6:()=>v,Gn:()=>$,LX:()=>M,k6:()=>F,TH:()=>B,UO:()=>D,$B:()=>W,EN:()=>L});var r=n(94578),o=n(96985),i=n.n(o),a=(n(45697),n(59731)),c=n(42554),u=n(2177),s=n(87462),p=n(14779),l=n.n(p),f=(n(59864),n(63366)),h=n(8679),m=n.n(h),d=function(t){var e=(0,c.Z)();return e.displayName=t,e},y=d("Router-History"),v=d("Router"),g=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={location:e.history.location},n._isMounted=!1,n._pendingLocation=null,e.staticContext||(n.unlisten=e.history.listen((function(t){n._isMounted?n.setState({location:t}):n._pendingLocation=t}))),n}(0,r.Z)(e,t),e.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var n=e.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},n.render=function(){return i().createElement(v.Provider,{value:{history:this.props.history,location:this.state.location,match:e.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},i().createElement(y.Provider,{children:this.props.children||null,value:this.props.history}))},e}(i().Component);var x=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).history=(0,a.PP)(e.props),e}return(0,r.Z)(e,t),e.prototype.render=function(){return i().createElement(g,{history:this.history,children:this.props.children})},e}(i().Component);var b=function(t){function e(){return t.apply(this,arguments)||this}(0,r.Z)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},n.componentDidUpdate=function(t){this.props.onUpdate&&this.props.onUpdate.call(this,this,t)},n.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},n.render=function(){return null},e}(i().Component);function C(t){var e=t.message,n=t.when,r=void 0===n||n;return i().createElement(v.Consumer,null,(function(t){if(t||(0,u.Z)(!1),!r||t.staticContext)return null;var n=t.history.block;return i().createElement(b,{onMount:function(t){t.release=n(e)},onUpdate:function(t,r){r.message!==e&&(t.release(),t.release=n(e))},onUnmount:function(t){t.release()},message:e})}))}var E={},w=0;function $(t,e){return void 0===t&&(t="/"),void 0===e&&(e={}),"/"===t?t:function(t){if(E[t])return E[t];var e=l().compile(t);return w<1e4&&(E[t]=e,w++),e}(t)(e,{pretty:!0})}function S(t){var e=t.computedMatch,n=t.to,r=t.push,o=void 0!==r&&r;return i().createElement(v.Consumer,null,(function(t){t||(0,u.Z)(!1);var r=t.history,c=t.staticContext,p=o?r.push:r.replace,l=(0,a.ob)(e?"string"==typeof n?$(n,e.params):(0,s.Z)({},n,{pathname:$(n.pathname,e.params)}):n);return c?(p(l),null):i().createElement(b,{onMount:function(){p(l)},onUpdate:function(t,e){var n=(0,a.ob)(e.to);(0,a.Hp)(n,(0,s.Z)({},l,{key:n.key}))||p(l)},to:n})}))}var P={},Z=0;function M(t,e){void 0===e&&(e={}),("string"==typeof e||Array.isArray(e))&&(e={path:e});var n=e,r=n.path,o=n.exact,i=void 0!==o&&o,a=n.strict,c=void 0!==a&&a,u=n.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(e,n){if(!n&&""!==n)return null;if(e)return e;var r=function(t,e){var n=""+e.end+e.strict+e.sensitive,r=P[n]||(P[n]={});if(r[t])return r[t];var o=[],i={regexp:l()(t,o,e),keys:o};return Z<1e4&&(r[t]=i,Z++),i}(n,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(t);if(!u)return null;var p=u[0],f=u.slice(1),h=t===p;return i&&!h?null:{path:n,url:"/"===n&&""===p?"/":p,isExact:h,params:a.reduce((function(t,e,n){return t[e.name]=f[n],t}),{})}}),null)}var _=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){var t=this;return i().createElement(v.Consumer,null,(function(e){e||(0,u.Z)(!1);var n=t.props.location||e.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?M(n.pathname,t.props):e.match,o=(0,s.Z)({},e,{location:n,match:r}),a=t.props,c=a.children,p=a.component,l=a.render;return Array.isArray(c)&&function(t){return 0===i().Children.count(t)}(c)&&(c=null),i().createElement(v.Provider,{value:o},o.match?c?"function"==typeof c?c(o):c:p?i().createElement(p,o):l?l(o):null:"function"==typeof c?c(o):null)}))},e}(i().Component);function R(t){return"/"===t.charAt(0)?t:"/"+t}function T(t,e){if(!t)return e;var n=R(t);return 0!==e.pathname.indexOf(n)?e:(0,s.Z)({},e,{pathname:e.pathname.substr(n.length)})}function k(t){return"string"==typeof t?t:(0,a.Ep)(t)}function U(t){return function(){(0,u.Z)(!1)}}function A(){}var O=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).handlePush=function(t){return e.navigateTo(t,"PUSH")},e.handleReplace=function(t){return e.navigateTo(t,"REPLACE")},e.handleListen=function(){return A},e.handleBlock=function(){return A},e}(0,r.Z)(e,t);var n=e.prototype;return n.navigateTo=function(t,e){var n=this.props,r=n.basename,o=void 0===r?"":r,i=n.context,c=void 0===i?{}:i;c.action=e,c.location=function(t,e){return t?(0,s.Z)({},e,{pathname:R(t)+e.pathname}):e}(o,(0,a.ob)(t)),c.url=k(c.location)},n.render=function(){var t=this.props,e=t.basename,n=void 0===e?"":e,r=t.context,o=void 0===r?{}:r,c=t.location,u=void 0===c?"/":c,p=(0,f.Z)(t,["basename","context","location"]),l={createHref:function(t){return R(n+k(t))},action:"POP",location:T(n,(0,a.ob)(u)),push:this.handlePush,replace:this.handleReplace,go:U(),goBack:U(),goForward:U(),listen:this.handleListen,block:this.handleBlock};return i().createElement(g,(0,s.Z)({},p,{history:l,staticContext:o}))},e}(i().Component);var j=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){var t=this;return i().createElement(v.Consumer,null,(function(e){e||(0,u.Z)(!1);var n,r,o=t.props.location||e.location;return i().Children.forEach(t.props.children,(function(t){if(null==r&&i().isValidElement(t)){n=t;var a=t.props.path||t.props.from;r=a?M(o.pathname,(0,s.Z)({},t.props,{path:a})):e.match}})),r?i().cloneElement(n,{location:o,computedMatch:r}):null}))},e}(i().Component);function L(t){var e="withRouter("+(t.displayName||t.name)+")",n=function(e){var n=e.wrappedComponentRef,r=(0,f.Z)(e,["wrappedComponentRef"]);return i().createElement(v.Consumer,null,(function(e){return e||(0,u.Z)(!1),i().createElement(t,(0,s.Z)({},r,e,{ref:n}))}))};return n.displayName=e,n.WrappedComponent=t,m()(n,t)}var N=i().useContext;function F(){return N(y)}function B(){return N(v).location}function D(){var t=N(v).match;return t?t.params:{}}function W(t){var e=B(),n=N(v).match;return t?M(e.pathname,t):n}},94578:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var r=n(89611);function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,(0,r.Z)(t,e)}}}]);