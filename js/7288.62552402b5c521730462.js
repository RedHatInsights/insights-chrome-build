(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[7288],{212939:(e,n,t)=>{"use strict";t(957136),t(945123),t(592867),t(157264),t(160254),t(341168),t(358270),t(283382),t(131661)},90925:(e,n,t)=>{"use strict";t.d(n,{Z:()=>S});var r=t(967154),i=t.n(r),a=t(859713),o=t.n(a),s=t(963038),c=t.n(s),l=t(506479),p=t.n(l),u=t(887757),f=t.n(u),d=t(348926),v=t.n(d),g=t(377865),m=t.n(g),b=t(45697),y=t.n(b),h=t(50533),_=t(447194),k=(t(212939),t(900410)),A=t(14085);function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){o()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var w=function(){var e=v()(f().mark((function e(){var n,t,r,i;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.localStorage.getItem("chrome:inventory:experimental_detail"),e.next=3,insights.chrome.auth.getUser();case 3:return r=e.sent,i=r.identity,e.abrupt("return",t&&"false"!==t||k.B.includes(null==i||null===(n=i.internal)||void 0===n?void 0:n.account_id)&&"false"!==t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=v()(f().mark((function e(){var n,t,r,i;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.localStorage.getItem("chrome:inventory:experimental_drawer"),e.next=3,insights.chrome.auth.getUser();case 3:return r=e.sent,i=r.identity,e.abrupt("return",t&&"false"!==t||k.Y.includes(null==i||null===(n=i.internal)||void 0===n?void 0:n.account_id)&&"false"!==t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(e){var n=e.componentName,r=e.onLoad,a=e.store,o=e.history,s=e.innerRef,l=p()(e,["componentName","onLoad","store","history","innerRef"]),u=(0,g.useState)(g.Fragment),d=c()(u,2),b=d[0],y=d[1];return(0,g.useEffect)((function(){v()(f().mark((function e(){var i,o,s,c,l,u,d,v,g,m,b,h,_,k,A;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:return l=e.sent,e.next=5,O();case 5:if(u=e.sent,!l&&!u){e.next=13;break}return e.next=9,Promise.all([t.e(9669),t.e(9666),t.e(8575),t.e(2693),t.e(7657)]).then(t.bind(t,623373));case 9:return s=e.sent,e.next=12,t.e(3885).then(t.bind(t,817979));case 12:c=e.sent;case 13:if(!l){e.next=38;break}return e.next=16,Promise.all([t.e(5303),t.e(3216),t.e(939),t.e(9341),t.e(3096),t.e(1070),t.e(4882),t.e(5414),t.e(8470),t.e(6214)]).then(t.bind(t,143408));case 16:if(e.t1=d=e.sent,e.t0=null===e.t1,e.t0){e.next=20;break}e.t0=void 0===d;case 20:if(!e.t0){e.next=24;break}e.t2=void 0,e.next=25;break;case 24:e.t2=d.SystemAdvisoryListStore;case 25:return i=e.t2,e.next=28,t.e(2209).then(t.bind(t,193703));case 28:if(e.t4=v=e.sent,e.t3=null===e.t4,e.t3){e.next=32;break}e.t3=void 0===v;case 32:if(!e.t3){e.next=36;break}e.t5=void 0,e.next=37;break;case 36:e.t5=v.SystemCvesStore;case 37:o=e.t5;case 38:return e.next=40,Promise.all([t.e(5303),t.e(3216),t.e(9172),t.e(5918),t.e(9341),t.e(3834),t.e(1254),t.e(9669),t.e(2479),t.e(9666),t.e(1777),t.e(8575),t.e(4882),t.e(3062),t.e(6959),t.e(3897),t.e(3709),t.e(6660),t.e(1338),t.e(5230),t.e(2333),t.e(2234)]).then(t.bind(t,244486));case 40:g=e.sent,m=g.inventoryConnector,b=g.mergeWithDetail,h=p()(g,["inventoryConnector","mergeWithDetail"]),_=m(a,l?{componentMapper:c.default,appList:[{title:"General information",name:"general_information",pageId:"inventory"},{title:"Advisor",name:"advisor",pageId:"insights"},{title:"Vulnerability",name:"vulnerabilities",pageId:"vulnerability"},{title:"Compliance",name:"compliance"},{title:"Patch",name:"patch"}]}:void 0,u?c.default:void 0,!0),k=_[n],A=function(e){return C(C(C({},b(e)),(l||u)&&{systemProfileStore:s.default}),l&&{SystemCvesStore:o,SystemAdvisoryListStore:i})},r(C(C({},h),{},{mergeWithDetail:A})),y((function(){return k}));case 48:case"end":return e.stop()}}),e)})))()}),[n]),m().createElement(h.Provider,{store:a},m().createElement(_.Router,{history:o},m().createElement(b,i()({},l,{fallback:A.Z,ref:s}))))};P.propTypes={store:y().object,onLoad:y().func,componentName:y().string,history:y().object,innerRef:y().shape({current:y().any})},P.defaultProps={onLoad:function(){}};const S=P},57288:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>l});var r=t(967154),i=t.n(r),a=t(377865),o=t.n(a),s=t(90925),c=function(e){return o().createElement(s.Z,i()({componentName:"InventoryDetail"},e))};const l=o().forwardRef((function(e,n){return o().createElement(c,i()({innerRef:n},e))}))},14085:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var r=t(377865),i=t.n(r),a=t(751981);const o=i().createElement(a.Bullseye,{className:"pf-u-p-xl"},i().createElement(a.Spinner,{size:"xl"}))},399967:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});var r=t(894015),i=t.n(r),a=t(923645),o=t.n(a)()(i());o.push([e.id,'.ins-entity-table.pf-c-table .pf-c-table__check{position:inherit}.ins-c-inventory__detail--general-info:not(.ins-inventory-detail){background:var(--pf-global--BackgroundColor--100)}.pf-c-page__main .ins-inventory-detail+section.pf-c-page__main-section{padding:0}.pf-c-page__main .ins-inventory-detail+section.pf-c-page__main-section div[class*="ins-active-app-"]{padding:var(--pf-global--spacer--lg)}.pf-c-page__main .ins-inventory-detail+section.pf-c-page__main-section div[class*="ins-active-app-"] .ins-c-inventory__loading{text-align:center}.pf-c-page__main .ins-inventory-detail+section.pf-c-page__main-section .ins-active-app-general_information{background:var(--pf-global--BackgroundColor--100)}\n',"",{version:3,sources:["webpack://./inventory.scss"],names:[],mappings:"AACA,gDACE,gBAAiB,CAClB,kEAGG,iDAAkD,CACrD,uEAGG,SAAU,CADd,qGAIQ,oCAAqC,CAJ7C,+HAOY,iBAAkB,CAP9B,2GAYQ,iDAAkD",sourcesContent:['\n.ins-entity-table.pf-c-table .pf-c-table__check {\n  position: inherit;\n}\n\n.ins-c-inventory__detail--general-info:not(.ins-inventory-detail) {\n    background: var(--pf-global--BackgroundColor--100);\n}\n\n.pf-c-page__main .ins-inventory-detail+section.pf-c-page__main-section {\n    padding: 0;\n\n    div[class*="ins-active-app-"] {\n        padding: var(--pf-global--spacer--lg);\n\n        .ins-c-inventory__loading {\n            text-align: center;\n        }\n    }\n\n    .ins-active-app-general_information {\n        background: var(--pf-global--BackgroundColor--100);\n    }\n}\n'],sourceRoot:""}]);const s=o},131661:(e,n,t)=>{"use strict";var r=t(893379),i=t.n(r),a=t(399967),o={insert:"head",singleton:!1};i()(a.Z,o),a.Z.locals},900410:e=>{"use strict";e.exports={B:[],Y:[]}}}]);
//# sourceMappingURL=sourcemaps/7288.js.map