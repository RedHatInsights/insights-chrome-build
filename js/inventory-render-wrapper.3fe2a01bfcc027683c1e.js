(window.wpJsonpChromeInstance=window.wpJsonpChromeInstance||[]).push([[15],{1647:function(e,t,n){"use strict";n.r(t);var r=n(158),o=n.n(r),a=n(114),c=n.n(a),u=n(833),i=n.n(u),l=n(829),s=n.n(l),f=n(821),p=n.n(f),m=n(834),y=n.n(m),v=n(835),d=n.n(v),b=n(836),h=n.n(b),E=n(15),P=n.n(E),O=n(1),g=n.n(O),w=n(12),j=n.n(w),x=n(26),R=n.n(x),_=n(35),k=n(452),N=Object(O.lazy)((function(){return Promise.all([n.e(0),n.e(25),n.e(12)]).then(n.bind(null,1644))})),S=Object(O.lazy)((function(){return Promise.all([n.e(4),n.e(26),n.e(13)]).then(n.t.bind(null,1636,7))})),z=Object(O.lazy)((function(){return Promise.all([n.e(1),n.e(0),n.e(2),n.e(23),n.e(9)]).then(n.bind(null,1637))})),A=Object(O.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(28),n.e(17)]).then(n.t.bind(null,1638,7))})),C=Object(O.lazy)((function(){return Promise.all([n.e(1),n.e(0),n.e(3),n.e(24),n.e(10)]).then(n.bind(null,1642))})),I=function(){return g.a.createElement("div",{className:"ins-c-inventory__loading"},g.a.createElement(k.a,{size:"lg"}))},D=function(e){return g.a.createElement(O.Suspense,{fallback:g.a.createElement(I,null)},g.a.createElement(z,e))},T={general_information:function(e){return g.a.createElement(O.Suspense,{fallback:g.a.createElement(I,null)},g.a.createElement(N,e))},advisor:D,insights:D,compliance:function(e){var t=e.store,n=c()(e,["store"]);return g.a.createElement(O.Suspense,{fallback:g.a.createElement(I,null)},g.a.createElement(_.Provider,{store:t},g.a.createElement(C,o()({},n,{customItnl:!0,intlProps:{locale:navigator.language}}))))},vulnerabilities:function(e){var t=e.store,n=e.inventoryId,r=c()(e,["store","inventoryId"]);return g.a.createElement(O.Suspense,{fallback:g.a.createElement(I,null)},g.a.createElement(_.Provider,{store:t},g.a.createElement(A,o()({},r,{customItnlProvider:!0,entity:{id:n}}))))},patch:function(e){var t=e.store,n=c()(e,["store"]);return g.a.createElement(O.Suspense,{fallback:g.a.createElement(I,null)},g.a.createElement(_.Provider,{store:t},g.a.createElement(S,n)))}};function J(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var o=h()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d()(this,n)}}var U=function(e){y()(n,e);var t=J(n);function n(){var e;i()(this,n);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return e=t.call.apply(t,[this].concat(a)),P()(p()(e),"ref",Object(O.createRef)()),P()(p()(e),"renderApp",(function(){var t=e.props,n=t.inventoryRef,r=t.appName,a=t.store,u=c()(t,["inventoryRef","appName","store"]),i=T[r];e.ref.current&&R.a.render(g.a.createElement(_.Provider,{store:a},g.a.createElement(i,o()({},u,n&&{ref:n},{store:a}))),e.ref.current)})),e}return s()(n,[{key:"componentDidMount",value:function(){this.renderApp()}},{key:"componentWillUnmount",value:function(){this.ref.current&&R.a.unmountComponentAtNode(this.ref.current)}},{key:"componentDidUpdate",value:function(e){e.appName!==this.props.appName&&(this.ref.current&&R.a.unmountComponentAtNode(this.ref.current),this.renderApp())}},{key:"render",value:function(){return g.a.createElement("article",{ref:this.ref})}}]),n}(O.PureComponent);U.propTypes={cmp:j.a.any,inventoryRef:j.a.any,store:j.a.object,customRender:j.a.bool,appName:j.a.string};t.default=U},821:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},829:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},833:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},834:function(e,t,n){var r=n(852);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},835:function(e,t,n){var r=n(338),o=n(821);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},836:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},852:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n}}]);
//# sourceMappingURL=sourcemaps/inventory-render-wrapper.js.map