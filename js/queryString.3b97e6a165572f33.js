"use strict";(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[96],{55469:(r,e,t)=>{function s(r){return"object"===Object.prototype.toString.call(r).slice(8,-1).toLowerCase()}t.d(e,{PO:()=>s})},12485:(r,e,t)=>{t.r(e),t.d(e,{queryString:()=>n});var s=t(15411),a=t(67475),i=t(55469);function n(r,e){var t=document.createElement("a");t.href=e;var n=t.search.slice(1).split("&").reduce((function(r,e){var t=e.split("="),s=t[0],i=t[1];return r[s]=(0,a.a)(i),r}),{}),u=[],o=n.ajs_uid,c=n.ajs_event,d=n.ajs_aid,_=(0,i.PO)(r.options.useQueryString)?r.options.useQueryString:{},j=_.aid,v=void 0===j?/.+/:j,f=_.uid,h=void 0===f?/.+/:f;if(d){var p=Array.isArray(n.ajs_aid)?n.ajs_aid[0]:n.ajs_aid;v.test(p)&&r.setAnonymousId(p)}if(o){var y=Array.isArray(n.ajs_uid)?n.ajs_uid[0]:n.ajs_uid;if(h.test(y)){var l=(0,s.H)("ajs_trait_",n);u.push(r.identify(y,l))}}if(c){var g=Array.isArray(n.ajs_event)?n.ajs_event[0]:n.ajs_event,A=(0,s.H)("ajs_prop_",n);u.push(r.track(g,A))}return Promise.all(u)}},15411:(r,e,t)=>{function s(r,e){return Object.keys(e).reduce((function(t,s){s.startsWith(r)&&(t[s.substr(r.length)]=e[s]);return t}),{})}t.d(e,{H:()=>s})}}]);