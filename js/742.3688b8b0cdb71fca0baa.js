"use strict";(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[742],{78742:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});var a=t(87462),i=t(93324),c=t(96985),o=t.n(c),r=t(80708),s=t(74624),u=t(45237),l=t(9669),m=t.n(l),f=t(38181),g=t(17205),d=t(23040);const h=function(){var e=(0,s.hN)(),n=(0,u.useDispatch)(),t=(0,c.useState)(!1),l=(0,i.Z)(t,2),h=l[0],v=l[1],p=(0,u.useSelector)((function(e){return!!e.chrome.user})),N=(0,u.useSelector)((function(e){return e.chrome.navigation.landingPage}));return(0,c.useEffect)((function(){p&&v(!0)}),[p]),(0,c.useEffect)((function(){m().get("".concat(window.location.origin).concat((0,s.hN)()?"/beta":"","/config/chrome/landing-navigation.json")).then((function(e){n((0,f.loadNavigationLandingPage)(e.data))}))}),[]),p&&h&&N?o().createElement(r.Nav,{className:"ins-c-landing-nav",ouiaId:"SideNavigation"},o().createElement(r.NavList,null,o().createElement("div",{className:"ins-c-app-title"},o().createElement("b",null,"Home")),N.map((function(n){var t=n.title,i=n.id,c=n.href,s=n.appId;return o().createElement(r.NavItem,{component:function(n){return o().createElement(d.Z,(0,a.Z)({},n,{isBeta:e,appId:s}))},className:"ins-m-navigation-align",key:i,ouiaId:i,to:c},t)})))):o().createElement(g.Z,null)}}}]);