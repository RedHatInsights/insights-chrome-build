(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[256,697],{22122:(e,t,r)=>{"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:()=>n})},96713:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var n=r(22122),o=r(96156),a=r(92137),i=r(34738),c=r(81253),s=r(87757),p=r.n(s),u=r(92950),l=r.n(u),f=r(45697),m=r.n(f),h=r(45237),y=r(334),d=r(98373);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(e){var t=e.componentName,o=e.onLoad,s=e.store,f=e.history,m=e.innerRef,b=(0,c.Z)(e,["componentName","onLoad","store","history","innerRef"]),v=(0,u.useState)(u.Fragment),g=(0,i.Z)(v,2),P=g[0],j=g[1];return(0,u.useEffect)((function(){(0,a.Z)(p().mark((function e(){var n,a,u,l,f,m,h,y;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Promise.all([r.e(141),r.e(107),r.e(248),r.e(512),r.e(986),r.e(329),r.e(931),r.e(834),r.e(441),r.e(849),r.e(575),r.e(181),r.e(589)]).then(r.bind(r,44575)),Promise.all([r.e(141),r.e(107),r.e(248),r.e(512),r.e(986),r.e(931),r.e(834),r.e(441),r.e(849),r.e(444),r.e(181),r.e(589)]).then(r.bind(r,77444)),Promise.all([r.e(141),r.e(107),r.e(248),r.e(512),r.e(986),r.e(931),r.e(834),r.e(441),r.e(181),r.e(589)]).then(r.bind(r,57748)),Promise.all([r.e(512),r.e(986),r.e(931)]).then(r.bind(r,75509))]).then((function(e){var t=(0,i.Z)(e,4),r=t[0].inventoryConnector,n=t[1],o=n.mergeWithDetail,a=(0,c.Z)(n,["mergeWithDetail"]);return O({inventoryConnector:r,mergeWithDetail:o,shared:t[2],api:t[3]},a)}));case 2:n=e.sent,a=n.inventoryConnector,u=n.mergeWithDetail,l=n.shared,f=n.api,m=(0,c.Z)(n,["inventoryConnector","mergeWithDetail","shared","api"]),h=a(s,void 0,void 0,!0),y=h[t],o(O(O(O({},m),l),{},{api:f,mergeWithDetail:u})),j((function(){return y}));case 11:case"end":return e.stop()}}),e)})))()}),[t]),l().createElement(h.Provider,{store:s},l().createElement(y.Router,{history:f},l().createElement(P,(0,n.Z)({},b,{fallback:d.Z,ref:m}))))};v.propTypes={store:m().object,onLoad:m().func,componentName:m().string,history:m().object,innerRef:m().shape({current:m().any})},v.defaultProps={onLoad:function(){}};const g=v},38256:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(22122),o=r(92950),a=r.n(o),i=r(96713),c=function(e){return a().createElement(i.Z,(0,n.Z)({componentName:"InventoryDetail"},e))};const s=a().forwardRef((function(e,t){return a().createElement(c,(0,n.Z)({innerRef:t},e))}))},98373:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(92950),o=r.n(n),a=r(90847);const i=o().createElement(a.Bullseye,{className:"pf-u-p-xl"},o().createElement(a.Spinner,{"data-ouia-component-id":"remote-module-loader",size:"xl"}))},92703:(e,t,r)=>{"use strict";var n=r(50414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},45697:(e,t,r)=>{e.exports=r(92703)()},50414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);