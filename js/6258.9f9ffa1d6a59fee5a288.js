(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[6258],{12136:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>r});const r=(0,n(40400).IU)({name:"DisconnectedIcon",height:1024,width:1024,svgPath:"M107.625758,511.919812 C107.647579,453.639819 120.473237,396.076275 145.195758,343.299812 L66.0757577,263.919812 C64.9757577,266.019812 63.7857577,268.019812 62.6857577,270.119812 C-38.2858609,455.136708 -13.6478565,683.418046 124.475758,842.629812 C134.640866,854.227038 149.304208,860.890207 164.725758,860.920803 C177.621501,860.999229 190.089847,856.300444 199.725758,847.729812 C222.045758,828.339812 224.235758,794.349812 204.725758,771.959812 C142.116482,699.791587 107.639971,607.46129 107.625758,511.919812 Z M298.965758,512.769812 C298.965758,507.959812 299.165758,503.349812 299.465758,498.849812 L223.695758,422.919812 C195.943021,511.49644 210.859555,607.936744 264.075758,683.989812 C272.417691,695.880397 286.040845,702.947712 300.565758,702.92092 C309.717884,702.984827 318.661486,700.187766 326.145758,694.919812 C346.244069,680.682503 351.030068,652.865563 336.845758,632.729812 C312.094475,597.618928 298.858215,555.687799 298.965758,512.729812 L298.965758,512.769812 Z M903.425758,837.839812 C1064.25516,648.181373 1062.68818,369.557312 899.735758,181.719812 C890.46515,170.983736 877.290268,164.395355 863.139154,163.418898 C848.98804,162.442441 835.033106,167.158807 824.375758,176.519812 C802.005758,195.919812 799.815758,229.919812 819.185758,252.309812 C945.123654,397.620078 948.572544,612.370403 827.365758,761.649812 L754.005758,688.159812 C755.244385,686.815558 756.37773,685.377981 757.395758,683.859812 C792.844775,633.759435 811.790626,573.852791 811.595758,512.479812 C811.595758,450.189812 792.735758,390.599812 756.695758,340.199812 C749.880846,330.567 739.510358,324.044705 727.876268,322.074416 C716.242178,320.104127 704.302408,322.848071 694.695758,329.699812 C674.625758,343.899812 670.135758,371.699812 684.215758,391.799812 C733.317078,460.966176 735.688504,552.965658 690.215758,624.569812 L615.045758,549.479812 C619.447596,537.503845 621.679174,524.839047 621.635758,512.079812 C621.657896,451.518897 572.616613,402.388105 512.055758,402.299812 C499.315423,402.259246 486.670236,404.494336 474.715758,408.899812 L82.6457577,15.6398121 C64.3651324,-2.58558468 34.7711544,-2.54081316 16.5457577,15.7398121 C-1.67963909,34.0204373 -1.63486757,63.6144153 16.6457577,81.8398121 L120.475758,185.919812 L196.535758,261.919812 L333.185758,398.799812 L408.845758,474.589812 L549.005758,614.969812 L941.455758,1008.21981 C959.733621,1026.4673 989.34327,1026.44268 1007.59076,1008.16481 C1025.83825,989.886948 1025.81362,960.2773 1007.53576,942.029812 L903.425758,837.839812 Z",yOffset:0,xOffset:0})},55849:(e,t,n)=>{"use strict";n.d(t,{W2:()=>C,y5:()=>D,nN:()=>h,tz:()=>w,Ar:()=>j,iF:()=>T,ZP:()=>F});var r,o=n(63038),a=n.n(o),i=n(6479),s=n.n(i),c=n(319),u=n.n(c),l=n(59713),d=n.n(l),p=n(77865),f=n.n(p),v=n(50576),O=n(35240),g=n(64107),y=n(66774),m=n(57748),L=n(7739),I=n.n(L),b=n(86848),_=n(258);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){d()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C={loaded:!1,tagsLoaded:!1,allTagsLoaded:!1,invConfig:{},sortBy:{key:"updated",direction:"desc"}},D=[{key:"display_name",title:"Name",renderFunc:b.Z},{key:"tags",title:"Tags",props:{width:25,isStatic:!0},renderFunc:function(e,t){return f().createElement(m.TagWithDialog,{count:e.length,systemId:t})}},{key:"updated",title:"Last seen",renderFunc:function(e,t,n){var r=n.culled_timestamp,o=n.stale_warning_timestamp,a=n.stale_timestamp,i=n.insights_id;return y.Z?f().createElement(y.Z,{culled:r,staleWarning:o,stale:a,render:function(t){var n=t.msg;return f().createElement(f().Fragment,null,f().createElement(g.Z,{date:e,extraTitle:f().createElement(f().Fragment,null,f().createElement("div",null,n),"Last seen:"," ")}),!i&&f().createElement(_.Z,null))}}," ",f().createElement(g.Z,{date:e})," "):new Date(e).toLocaleString()},props:{width:25}}];function A(e,t){var n=t.payload,r=n.results,o=n.per_page,a=n.page,i=n.count,s=n.total,c=n.loaded,u=n.filters;return void 0!==c||void 0!==a&&void 0!==o?E({},e,{activeFilters:u||[],loaded:void 0===c||c,rows:(0,O.r0)([e.rows,r]).filter((function(e){return!c||e.created})),perPage:void 0!==o?o:e.perPage,page:void 0!==a?a:e.page,count:void 0!==i?i:e.count,total:void 0!==s?s:e.total}):e}function h(e,t){var n=t.payload,r=t.meta,o=e.rows?e.rows.find((function(e){var t=e.id;return r.systemId===t})):e.entity||{};o.tags;return E({},e,{activeSystemTag:E({},s()(o,["tags"]),{tags:Object.values(n.results)[0],tagsCount:r.tagsCount,page:n.page,perPage:n.per_page,tagsLoaded:!0})})}function w(e,t){var n=t.meta,r=e.rows?e.rows.find((function(e){var t=e.id;return n.systemId===t})):e.entity||{};r.tags;return E({},e,{activeSystemTag:E({},s()(r,["tags"]),{tagsCount:n.tagsCount,tagsLoaded:!1})})}function j(e,t){return E({},e,{showTagDialog:t.payload.isOpen,activeSystemTag:void 0})}function T(e,t){var n=t.payload,r=n.results,o=n.total,i=n.page,s=n.per_page;return E({},e,{allTags:Object.entries(I()(r,(function(e){return e.tag.namespace}))).map((function(e){var t=a()(e,2);return{name:t[0],tags:t[1]}})),allTagsPagination:{perPage:s,page:i},additionalTagsCount:o>s?o-s:0,allTagsTotal:o,allTagsLoaded:!0})}const F=(r={},d()(r,v.aI.ALL_TAGS_FULFILLED,T),d()(r,v.aI.ALL_TAGS_PENDING,(function(e){return E({},e,{allTagsLoaded:!1})})),d()(r,v.aI.LOAD_ENTITIES_PENDING,(function(e,t){var n=t.meta;return E({},e,{columns:(0,O.r0)([D.filter((function(e){return"tags"!==e.key||(null==n?void 0:n.showTags)})),e.columns],"key"),rows:[],loaded:!1})})),d()(r,v.aI.LOAD_ENTITIES_FULFILLED,A),d()(r,v.aI.LOAD_TAGS_PENDING,w),d()(r,v.aI.LOAD_TAGS_FULFILLED,h),d()(r,v.s$,A),d()(r,v.u4,(function(e,t){return A(e,{payload:E({},t.payload,{loaded:!1})})})),d()(r,v.hI,(function(e,t){var n=t.payload,r=n.item,o=r.items,a=s()(r,["items"]),i=n.selected,c=e.activeFilters,l=void 0===c?[]:c;if(i){var d=(l=[].concat(u()(l),[a],u()(o||[]))).map((function(e){return e.value}));l=l.filter((function(e,t){return d.lastIndexOf(e.value)===t}))}else l.splice(l.map((function(e){return e.value})).indexOf(a.value),1),o&&o.forEach((function(e){l.splice(l.map((function(e){return e.value})).indexOf(e.value),1)}));return E({},e,{activeFilters:l})})),d()(r,v.pr,(function(e,t){var n=t.payload,r=u()(e.rows);return[].concat(n).forEach((function(e){var t=e.id,n=e.selected,o=r.find((function(e){return e.id===t}));o?o.selected=n:r.forEach((function(e){return e.selected=n}))})),E({},e,{rows:r})})),d()(r,v.WH,(function(e,t){var n=t.payload;return E({},e,{sortBy:{key:n.key,direction:n.direction}})})),d()(r,v.Gs,(function(e){return E({},e,{activeFilters:[]})})),d()(r,v.jZ,(function(e,t){return E({},e,{loaded:!t.payload.isLoading})})),d()(r,v.Qd,j),d()(r,v.Uq,(function(e,t){return E({},e,{invConfig:t.payload})})),r)},5251:(e,t,n)=>{"use strict";n.d(t,{W:()=>d,Z:()=>p});var r,o=n(59713),a=n.n(o),i=n(50576),s=n(55849),c=n(70210);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={loaded:!1};const p=l((r={},a()(r,i.aI.LOAD_ENTITIES_PENDING,(function(){return d})),a()(r,i.aI.LOAD_ENTITY_PENDING,(function(e){return l({},e,{loaded:!1})})),a()(r,i.aI.LOAD_ENTITY_FULFILLED,(function(e,t){return l({},e,{loaded:!0,entity:t.payload.results[0]})})),a()(r,i.TP,(function(e,t){return l({},e,{activeApp:t.payload})})),a()(r,i.aI.LOAD_TAGS,s.nN),a()(r,i.Qd,s.Ar),a()(r,i.Ji,(function(e,t){var n=t.payload;return l({},e,{isToggleOpened:null==n?void 0:n.isOpened})})),r),c.ZP)},66258:(e,t,n)=>{"use strict";n.d(t,{zw:()=>i.ZP,gA:()=>s.Z,AF:()=>l,OL:()=>d});var r=n(59713),o=n.n(r),a=n(18546),i=n(55849),s=n(5251);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return{entities:function(t,n){return u({},e(u({},(0,a.Gg)(u({},i.ZP),i.W2)(t,n)),n))}}}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return{entityDetails:function(t,n){return u({},e(u({},(0,a.Gg)(u({},s.Z),s.W)(t,n)),n))}}}},70210:(e,t,n)=>{"use strict";n.d(t,{Zs:()=>u,b$:()=>l,r$:()=>d,As:()=>p,zR:()=>f,ZP:()=>v});var r,o=n(59713),a=n.n(o),i=n(50576);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){var n=t.payload;return c({},e,{systemIssues:c({},null==e?void 0:e.systemIssues,{advisor:{isLoaded:!0,criticalCount:null==n?void 0:n.filter((function(e){return(null==e?void 0:e.total_risk)>=4}))}})})}function l(e,t){var n,r,o,a,i,s,u,l,d=t.payload;return c({},e,{systemIssues:c({},null==e?void 0:e.systemIssues,{cve:{isLoaded:!0,critical:{count:(null==d||null===(n=d.critical)||void 0===n||null===(r=n.meta)||void 0===r?void 0:r.total_items)||0},moderate:{count:(null==d||null===(o=d.moderate)||void 0===o||null===(a=o.meta)||void 0===a?void 0:a.total_items)||0},important:{count:(null==d||null===(i=d.important)||void 0===i||null===(s=i.meta)||void 0===s?void 0:s.total_items)||0},low:{count:(null==d||null===(u=d.low)||void 0===u||null===(l=u.meta)||void 0===l?void 0:l.total_items)||0}}})})}function d(e,t){var n,r,o,a,i,s,u=t.payload;return c({},e,{systemIssues:c({},null==e?void 0:e.systemIssues,{patch:{isLoaded:!0,bug:{count:(null==u||null===(n=u.data)||void 0===n||null===(r=n.attributes)||void 0===r?void 0:r.rhba_count)||0},enhancement:{count:(null==u||null===(o=u.data)||void 0===o||null===(a=o.attributes)||void 0===a?void 0:a.rhea_count)||0},security:{count:(null==u||null===(i=u.data)||void 0===i||null===(s=i.attributes)||void 0===s?void 0:s.rhsa_count)||0}}})})}function p(e,t){var n,r,o=t.payload;return c({},e,{systemIssues:c({},null==e?void 0:e.systemIssues,{compliance:{isLoaded:!0,profiles:null==o||null===(n=o.data)||void 0===n||null===(r=n.system)||void 0===r?void 0:r.profiles}})})}function f(e,t){return c({},e,{systemIssues:c({},null==e?void 0:e.systemIssues,{},t&&a()({},t,{isLoaded:!1}))})}const v=(r={},a()(r,i.dF.LOAD_ADVISOR_RECOMMENDATIONS_PENDING,(function(e){return f(e,"advisor")})),a()(r,i.dF.LOAD_APPLICABLE_CVES_PENDING,(function(e){return f(e,"cve")})),a()(r,i.dF.LOAD_APPLICABLE_ADVISORIES_PENDING,(function(e){return f(e,"patch")})),a()(r,i.dF.LOAD_COMPLIANCE_POLICIES_PENDING,(function(e){return f(e,"compliance")})),a()(r,i.dF.LOAD_ADVISOR_RECOMMENDATIONS_FULFILLED,u),a()(r,i.dF.LOAD_APPLICABLE_CVES_FULFILLED,l),a()(r,i.dF.LOAD_APPLICABLE_ADVISORIES_FULFILLED,d),a()(r,i.dF.LOAD_COMPLIANCE_POLICIES_FULFILLED,p),r)},258:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(77865),o=n.n(r),a=n(13342),i=n(12136);n(58825);const s=function(){return o().createElement(a.Tooltip,{content:"Insights disabled"},o().createElement("span",{className:"pf-u-ml-sm ins-c-inventor__disconnected-icon"},o().createElement(i.ZP,null)))}},64592:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(94015),o=n.n(r),a=n(23645),i=n.n(a)()(o());i.push([e.id,".ins-c-inventor__disconnected-icon{color:var(--pf-global--warning-color--100)}\n","",{version:3,sources:["webpack://./InsightsDisconnected.css"],names:[],mappings:"AAAA,mCACE,0CAA2C",sourcesContent:[".ins-c-inventor__disconnected-icon {\n  color: var(--pf-global--warning-color--100); }\n"],sourceRoot:""}]);const s=i},58825:(e,t,n)=>{"use strict";var r=n(93379),o=n.n(r),a=n(64592),i={insert:"head",singleton:!1};o()(a.Z,i),a.Z.locals}}]);
//# sourceMappingURL=sourcemaps/6258.js.map