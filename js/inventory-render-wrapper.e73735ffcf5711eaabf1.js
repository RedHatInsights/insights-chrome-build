(window.wpJsonpChromeInstance=window.wpJsonpChromeInstance||[]).push([[16],{1757:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(107),a=n.n(r),o=n(75),c=n.n(o),i=n(0),l=n.n(i),u=n(2012),s=n(20),f=Object(i.lazy)((function(){return Promise.all([n.e(26),n.e(13)]).then(n.bind(null,1761))})),p=Object(i.lazy)((function(){return Promise.all([n.e(5),n.e(27),n.e(14)]).then(n.t.bind(null,1764,7))})),m=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(10)]).then(n.bind(null,1771))})),d=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(4),n.e(18)]).then(n.t.bind(null,1786,7))})),v=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(11)]).then(n.bind(null,1987))})),b=function(){return l.a.createElement("div",{className:"ins-c-inventory__loading"},l.a.createElement(u.a,{size:"lg"}))},y=function(e){return l.a.createElement(i.Suspense,{fallback:l.a.createElement(b,null)},l.a.createElement(m,e))},h={general_information:function(e){return l.a.createElement(i.Suspense,{fallback:l.a.createElement(b,null)},l.a.createElement(f,e))},advisor:y,insights:y,compliance:function(e){var t=e.store,n=c()(e,["store"]);return l.a.createElement(i.Suspense,{fallback:l.a.createElement(b,null)},l.a.createElement(s.Provider,{store:t},l.a.createElement(v,a()({},n,{customItnl:!0,intlProps:{locale:navigator.language}}))))},vulnerabilities:function(e){var t=e.store,n=e.inventoryId,r=c()(e,["store","inventoryId"]);return l.a.createElement(i.Suspense,{fallback:l.a.createElement(b,null)},l.a.createElement(s.Provider,{store:t},l.a.createElement(d,a()({},r,{customItnlProvider:!0,entity:{id:n}}))))},patch:function(e){var t=e.store,n=c()(e,["store"]);return l.a.createElement(i.Suspense,{fallback:l.a.createElement(b,null)},l.a.createElement(s.Provider,{store:t},l.a.createElement(p,n)))}}},2012:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r,a=n(1),o=n(0),c=n(450),i=n.n(c),l=n(2);!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(r||(r={}));const u=e=>{var{className:t="",size:n="xl","aria-valuetext":r="Loading..."}=e,c=Object(a.__rest)(e,["className","size","aria-valuetext"]);return o.createElement("span",Object.assign({className:Object(l.css)(i.a.spinner,i.a.modifiers[n],t),role:"progressbar","aria-valuetext":r},c),o.createElement("span",{className:Object(l.css)(i.a.spinnerClipper)}),o.createElement("span",{className:Object(l.css)(i.a.spinnerLeadBall)}),o.createElement("span",{className:Object(l.css)(i.a.spinnerTailBall)}))};u.displayName="Spinner"},680:function(e,t,n){"use strict";n.r(t);var r=n(107),a=n.n(r),o=n(75),c=n.n(o),i=n(708),l=n.n(i),u=n(709),s=n.n(u),f=n(697),p=n.n(f),m=n(710),d=n.n(m),v=n(711),b=n.n(v),y=n(712),h=n.n(y),E=n(8),O=n.n(E),g=n(0),j=n.n(g),P=n(13),x=n.n(P),w=n(31),N=n.n(w),_=n(20),R=n(1757);function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var a=h()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return b()(this,n)}}var z=function(e){d()(n,e);var t=k(n);function n(){var e;l()(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return e=t.call.apply(t,[this].concat(o)),O()(p()(e),"ref",Object(g.createRef)()),O()(p()(e),"renderApp",(function(){var t=e.props,n=t.inventoryRef,r=t.appName,o=t.store,i=c()(t,["inventoryRef","appName","store"]),l=R.a[r];e.ref.current&&N.a.render(j.a.createElement(_.Provider,{store:o},j.a.createElement(l,a()({},i,n&&{ref:n},{store:o}))),e.ref.current)})),e}return s()(n,[{key:"componentDidMount",value:function(){this.renderApp()}},{key:"componentWillUnmount",value:function(){this.ref.current&&N.a.unmountComponentAtNode(this.ref.current)}},{key:"componentDidUpdate",value:function(e){e.appName!==this.props.appName&&(this.ref.current&&N.a.unmountComponentAtNode(this.ref.current),this.renderApp())}},{key:"render",value:function(){return j.a.createElement("article",{ref:this.ref})}}]),n}(g.PureComponent);z.propTypes={cmp:x.a.any,inventoryRef:x.a.any,store:x.a.object,customRender:x.a.bool,appName:x.a.string},t.default=z},697:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},708:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},709:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},710:function(e,t,n){var r=n(752);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},711:function(e,t,n){var r=n(282),a=n(697);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?a(e):t}},712:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},752:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n}}]);
//# sourceMappingURL=sourcemaps/inventory-render-wrapper.js.map