"use strict";(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[125],{23994:(e,t,n)=>{n.d(t,{n:()=>r.Z});var r=n(4592)},2214:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(85893),u=n(96985),i=n(10868),s=n(4592),o=n(47268),c=n(33825),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var u in t=arguments[n])Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u]);return e},a.apply(this,arguments)};const l=function(e){var t=e.children,n=e.bundle,l=(0,u.useRef)(!1),f=(0,u.useState)(!1),d=f[0],v=f[1],h=(0,u.useRef)();return h.current||(h.current=(0,o.Z)()),function(e,t){void 0===t&&(t="");var n=(0,i.useLocation)().pathname;(0,u.useEffect)((function(){(0,c.v_)(c.ZQ,{pathname:n,title:document.title,bundle:t}).then((function(t){return e.setLastVisited(t)})).catch((function(e){return console.error("Unable to update last visited pages!",e)}))}),[n])}(h.current,n),(0,u.useEffect)((function(){return l.current=!0,d||(0,c.U2)(c.Yq).then((function(e){var t;l.current&&(null===(t=h.current)||void 0===t||t.setIdentity(e),v(!0))})).catch((function(e){console.error("Unable to initialize ChromeProvider!",e)})),function(){l.current=!1}}),[]),(0,r.jsx)(s.Z.Provider,a({value:h.current},{children:t}))}},44597:(e,t,n)=>{n.d(t,{k9:()=>u.k,vA:()=>r.Z});var r=n(2214),u=n(47268)},37773:(e,t,n)=>{n.r(t),n.d(t,{ChromeContext:()=>u.n,ChromeProvider:()=>r.vA,UpdateEvents:()=>r.k9,useFavoritePages:()=>s.o,useLastVisited:()=>i.k,useVisitedBundles:()=>o.b});var r=n(44597),u=n(23994),i=n(8063),s=n(73744),o=n(2197)},73744:(e,t,n)=>{n.d(t,{o:()=>r.Z});var r=n(11751)},8063:(e,t,n)=>{n.d(t,{k:()=>r.Z});var r=n(94342)},94342:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(96985),u=n(4592),i=n(47268);const s=function(){var e=(0,r.useContext)(u.Z),t=e.subscribe,n=e.unsubscribe,s=e.getState,o=(0,r.useReducer)((function(e){return e+1}),0)[1];return(0,r.useEffect)((function(){var e=t(i.k.lastVisited,o);return function(){n(e,i.k.lastVisited)}}),[]),s().lastVisitedPages}},2197:(e,t,n)=>{n.d(t,{b:()=>r.Z});var r=n(17716)},17716:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(96985),u=n(47268),i=n(33825),s=n(4592),o=function(e,t,n,r){return new(n||(n=Promise))((function(u,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function o(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?u(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,o)}c((r=r.apply(e,t||[])).next())}))},c=function(e,t){var n,r,u,i,s={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(u=2&i[0]?r.return:i[0]?r.throw||((u=r.return)&&u.call(r),0):r.next)&&!(u=u.call(r,i[1])).done)return u;switch(r=0,u&&(i=[2&i[0],u.value]),i[0]){case 0:case 1:u=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(u=s.trys,(u=u.length>0&&u[u.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!u||i[1]>u[0]&&i[1]<u[3])){s.label=i[1];break}if(6===i[0]&&s.label<u[1]){s.label=u[1],u=i;break}if(u&&s.label<u[2]){s.label=u[2],s.ops.push(i);break}u[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=u=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}};function a(e){return(0,i.v_)(i.fV,{bundle:e})}const l=function(){var e=(0,r.useContext)(s.Z),t=e.subscribe,n=e.unsubscribe,i=e.getState,l=e.setVisitedBundles,f=(0,r.useReducer)((function(e){return e+1}),0)[1];return(0,r.useEffect)((function(){var e=t(u.k.visitedBundles,f);return function(){n(e,u.k.visitedBundles)}}),[]),{visitedBundles:i().visitedBundles,markVisited:function(e){var t;return o(this,void 0,void 0,(function(){var n;return c(this,(function(r){switch(r.label){case 0:return!(null===(t=i().visitedBundles)||void 0===t?void 0:t[e])?[4,a(e)]:[3,2];case 1:return n=r.sent(),l(n.visitedBundles),[2,n.visitedBundles];case 2:return[2,i().visitedBundles]}}))}))}}}}}]);