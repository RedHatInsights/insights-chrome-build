"use strict";(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[742],{78742:(e,n,t)=>{t.r(n),t.d(n,{default:()=>v});var a=t(87462),i=t(93324),c=t(96985),r=t.n(c),o=t(65832),u=t(35755),l=t(45237),s=t(9669),d=t.n(s),m=t(38181),f=t(52690),h=t.n(f),p=t(22187),g=t.n(p);const v=function(){var e=(0,u.isBeta)(),n=(0,l.useDispatch)(),t=(0,c.useState)(!1),s=(0,i.Z)(t,2),f=s[0],p=s[1],v=(0,l.useSelector)((function(e){return!!e.chrome.user})),E=(0,l.useSelector)((function(e){return e.chrome.navigation.landingPage})),N=(0,l.useSelector)((function(e){return e.chrome.modules}));return(0,c.useEffect)((function(){v&&p(!0)}),[v]),(0,c.useEffect)((function(){d().get("".concat(window.location.origin).concat((0,u.isBeta)()?"/beta":"","/config/chrome/landing-navigation.json")).then((function(e){n((0,m.loadNavigationLandingPage)(e.data))}))}),[]),v&&f&&E?r().createElement(o.Nav,{className:"chr-c-landing-nav",ouiaId:"SideNavigation"},r().createElement(o.NavList,null,r().createElement("div",{className:"chr-c-app-title"},r().createElement("b",null,"Home")),E.filter((function(e){var n,t=e.appId;return!(0,u.isFedRamp)()||!0===(null===(n=N[t])||void 0===n?void 0:n.isFedramp)})).map((function(n){var t=n.title,i=n.id,c=n.href,u=n.appId;return r().createElement(o.NavItem,{component:function(n){return r().createElement(g(),(0,a.Z)({},n,{isBeta:e,appId:u}))},key:i,ouiaId:i,to:c},t)})))):r().createElement(h(),null)}}}]);