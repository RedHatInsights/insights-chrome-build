"use strict";(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[186],{31369:(e,t,n)=>{t.nQ={name:"InfoCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",yOffset:0,xOffset:0},t.uM=n(35183).createIcon(t.nQ),t.ZP=t.uM},46350:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(96985),r=n.n(a),c=n(31369),o=n(77340),i=n(45697),l=n.n(i),u=function(e){var t=e.isOpen,n=e.onClick,a=e.onCancel,i=e.menuItemClicked;return r().createElement(o.Modal,{"aria-label":"Beta info modal",isOpen:t,onClose:a,variant:o.ModalVariant.medium},r().createElement(o.Bullseye,null,r().createElement("div",{className:"chr-c-navigation__beta-info-modal"},r().createElement(c.uM,{size:"xl",className:"info-icon"}),r().createElement(o.Title,{headingLevel:"h4",size:"xl"},"".concat(i," is only available in our Beta Environment")),r().createElement("div",null,"Try this feature in our Beta Environment on cloud.redhat.com/beta. The Beta Environment allows you to interact with new features in an active development space. Because beta pre-release software is still being developed, you may encounter bugs or flaws in availability, stability, data, or performance."),r().createElement("div",null,"After you use a feature in beta, you’ll stay in the Beta Environment until you manually exit the beta release. Leave the Beta Environment any time by clicking on the settings (gear) icon or beta icon in the top toolbar."),r().createElement("div",{className:"pf-u-pt-md"},r().createElement(o.Button,{key:"confirm",variant:"primary",onClick:n},"Use feature in beta")),r().createElement("div",null,r().createElement("a",{href:"https://access.redhat.com/support/policy/updates/cloud-redhat/lifecycle"},"Learn more about Beta Environment")))))};u.propTypes={isOpen:l().bool,onClick:l().func,onCancel:l().func,menuItemClicked:l().string};const s=u},66186:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var a=n(87462),r=n(93324),c=n(96985),o=n.n(c),i=n(77340),l=n(55753),u=n(93943),s=n(84617),m=n(46350),f=n(35755),v=n(53038),p=n(52690),d=n.n(p),h=n(82647);const y=function(){var e=(0,v.Z)(),t=e.loaded,n=e.schema,p=(0,c.useState)(),y=(0,r.Z)(p,2),b=y[0],g=y[1],w=(0,c.useRef)([]),E="true"===localStorage.getItem("chrome:experimental:quickstarts"),O=function(e,t){var n;return!(!b&&!(0,f.isBeta)())||(e.preventDefault(),w.current=[e,t,null==e||null===(n=e.target)||void 0===n?void 0:n.text],g(!0),!1)};return t?o().createElement(c.Fragment,null,o().createElement("div",{className:"chr-c-app-title"},n.title),o().createElement(i.Nav,{"aria-label":"Insights Global Navigation","data-ouia-safe":"true",ouiaId:"SideNavigation"},o().createElement(i.NavList,null,o().createElement(i.PageContextConsumer,null,(function(e){var t=e.isNavOpen;return o().createElement(l.default.Provider,{value:{componentMapper:u.Z,onLinkClick:O,inPageLayout:!0,isNavOpen:t}},n.navItems.map((function(e,t){return o().createElement(s.Z,(0,a.Z)({key:t},e))})),E?o().createElement(h.Z,{title:"Quickstarts",href:"/".concat((0,f.getUrl)("bundle"),"/quickstarts"),appId:"dynamic"}):o().createElement(c.Fragment,null))})))),o().createElement(m.Z,{isOpen:b,onClick:function(e){if(!(0,f.isBeta)()){var t=(0,r.Z)(w.current,2),n=t[0],a=t[1],c=e.ctrlKey||e.metaKey||2===e.which||n.ctrlKey||n.metaKey||2===n.which,o="".concat(document.baseURI,"beta").concat(a);c?window.open(o):window.location.href=o}},onCancel:function(){return g(!1)},menuItemClicked:w.current[2]})):o().createElement(d(),null)}},53038:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(15861),r=n(93324),c=n(4942),o=n(87757),i=n.n(o),l=n(9669),u=n.n(l),s=n(96985),m=n(45237),f=n(73685),v=n(38181),p=n(35755),d=n(5819),h=n(36194);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e){var t=b({},e);return void 0!==t.groupId&&(t.navItems=t.navItems.map(g)),!0===t.expandable&&(t.routes=t.routes.map(g)),"string"==typeof t.href&&(t.href=t.href.replace(/\/$/,"")),t}var w=function(e,t){var n=new URLSearchParams(e);return n.set("quickstart",t),n.toString()};const E=function(){var e=(0,p.isBeta)(),t=(0,m.useDispatch)(),n=(0,f.useHistory)(),c=n.replace,o=n.location,l=o.pathname,y=(0,s.useContext)(h.QuickStartContext).activeQuickStartID,E=l.split("/")[1],O=(0,m.useSelector)((function(e){var t=e.chrome,n=t.navigation,a=t.activeApp;return[n[E],a]})),k=(0,r.Z)(O,1)[0],C=(0,s.useRef)(""),I=(0,s.useRef)({});(0,s.useEffect)((function(){C.current=y,I.current=o}),[y]);var P=function(e,n){var a=e;return t((0,v.loadLeftNavSegment)(n,E,e)),new MutationObserver((function(e){e.forEach((function(){var e=window.location.pathname;e!==a&&(a=e,t((0,v.loadLeftNavSegment)(n,E,a))),setTimeout((function(){C.current&&function(e,t){return t!==new URLSearchParams(e).get("quickstart")}(window.location.search,C.current)&&c(b(b({},I.current),{},{pathname:e.replace(/^\/beta\//,"/"),search:w(window.location.search,C.current)}))}))}))}))};return(0,s.useEffect)((function(){var t;return E&&u().get("".concat(window.location.origin).concat(e?"/beta":"","/config/chrome/").concat(E,"-navigation.json?ts=").concat(Date.now())).then(function(){var e=(0,a.Z)(i().mark((function e(n){var a,r,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t&&"function"==typeof t.disconnect&&t.disconnect(),a=n.data,e.next=4,Promise.all(a.navItems.map(g).map(d.c));case 4:r=e.sent,c=b(b({},a),{},{navItems:r}),(t=P(l,c)).observe(document.querySelector("body"),{childList:!0,subtree:!0});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),function(){t&&"function"==typeof t.disconnect&&t.disconnect()}}),[E]),{loaded:!!k,schema:k}}}}]);