"use strict";(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[742],{78742:(e,n,t)=>{t.r(n),t.d(n,{default:()=>N});var a=t(87462),r=t(93324),c=t(96985),i=t.n(c),o=t(21242),u=t(35755),l=t(45237),s=t(9669),m=t.n(s),f=t(60266),d=t(52690),g=t(84617),v=t(55753),h=t(93943),p=t(86896),E=t(23980);const N=function(){var e=(0,l.useDispatch)(),n=(0,p.Z)(),t=(0,c.useState)(!1),s=(0,r.Z)(t,2),N=s[0],Z=s[1],k=(0,l.useSelector)((function(e){return!!e.chrome.user})),P=(0,l.useSelector)((function(e){return e.chrome.navigation.landingPage})),S=(0,l.useSelector)((function(e){return e.chrome.modules}));return(0,c.useEffect)((function(){k&&Z(!0)}),[k]),(0,c.useEffect)((function(){m().get("".concat(window.location.origin).concat((0,u.hN)()?"/beta":"","/config/chrome/landing-navigation.json")).then((function(n){e((0,f.loadNavigationLandingPage)(n.data))}))}),[]),k&&N&&P?i().createElement(o.Nav,{className:"chr-c-landing-nav",ouiaId:"SideNavigation"},i().createElement(o.NavList,null,i().createElement("div",{className:"chr-c-app-title"},i().createElement("b",null,n.formatMessage(E.Z.home))),i().createElement(o.PageContextConsumer,null,(function(e){var n=e.isNavOpen;return i().createElement(v.Z.Provider,{value:{componentMapper:h.Z,inPageLayout:!0,isNavOpen:n}},P.filter((function(e){var n,t=e.appId;return!(0,u.nY)()||!0===(null===(n=S[t])||void 0===n?void 0:n.isFedramp)})).map((function(e,n){return i().createElement(g.Z,(0,a.Z)({key:n},e))})))})))):i().createElement(d.Z,null)}}}]);