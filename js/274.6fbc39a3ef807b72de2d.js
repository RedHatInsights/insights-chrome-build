(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[274,849],{94008:(e,t,n)=>{"use strict";n.d(t,{lY:()=>f,oo:()=>g,M5:()=>y});var r=n(70655),o=n(77865),a=n(27708),i=n(91941),c=n(92607),l=n(13342),s=n(41724),d=n(20941),u=n(44540),p=n(42606);const f=(e,t)=>{const n=e.currentTarget.parentElement,r=document.createElement("textarea");r.value=t.toString(),n.appendChild(r),r.select(),document.execCommand("copy"),n.removeChild(r)};var g;!function(e){e.inline="inline",e.expansion="expansion"}(g||(g={}));class y extends o.Component{constructor(e){super(e),this.timer=null,this.componentDidUpdate=(e,t)=>{e.children!==this.props.children&&this.updateText(this.props.children)},this.expandContent=e=>{this.setState((e=>({expanded:!e.expanded})))},this.updateText=e=>{this.setState({text:e}),this.props.onChange(e)},this.render=()=>{const e=this.props,{isExpanded:t,onChange:n,isReadOnly:l,isCode:f,exitDelay:g,maxWidth:y,entryDelay:v,switchDelay:h,onCopy:m,hoverTip:b,clickTip:O,textAriaLabel:_,toggleAriaLabel:E,variant:w,position:C,className:x}=e,I=(0,r.__rest)(e,["isExpanded","onChange","isReadOnly","isCode","exitDelay","maxWidth","entryDelay","switchDelay","onCopy","hoverTip","clickTip","textAriaLabel","toggleAriaLabel","variant","position","className"]);return o.createElement("div",Object.assign({className:(0,i.css)(a.Z.clipboardCopy,this.state.expanded&&a.Z.modifiers.expanded,x)},I),o.createElement(s.w,{prefix:""},(e=>o.createElement(o.Fragment,null,o.createElement("div",{className:(0,i.css)(a.Z.clipboardCopyGroup)},"expansion"===w&&o.createElement(u.i,{isExpanded:this.state.expanded,onClick:this.expandContent,id:`toggle--${e}`,textId:`text-input--${e}`,contentId:`content--${e}`,"aria-label":E}),o.createElement(c.oi,{isReadOnly:l||this.state.expanded,onChange:this.updateText,value:this.state.text,id:`text-input-${e}`,"aria-label":_}),o.createElement(d.u,{exitDelay:g,entryDelay:v,maxWidth:y,position:C,id:`copy-button-${e}`,textId:`text-input-${e}`,"aria-label":b,onClick:e=>{this.timer&&(window.clearTimeout(this.timer),this.setState({copied:!1})),m(e,this.state.text),this.setState({copied:!0},(()=>{this.timer=window.setTimeout((()=>{this.setState({copied:!1}),this.timer=null}),h)}))}},this.state.copied?O:b)),this.state.expanded&&o.createElement(p.G,{isReadOnly:l,isCode:f,id:`content-${e}`,onChange:this.updateText},this.state.text)))))},this.state={text:this.props.children,expanded:this.props.isExpanded,copied:!1}}}y.displayName="ClipboardCopy",y.defaultProps={hoverTip:"Copy to clipboard",clickTip:"Successfully copied to clipboard!",isReadOnly:!1,isExpanded:!1,isCode:!1,variant:"inline",position:l.D.top,maxWidth:"150px",exitDelay:1600,entryDelay:100,switchDelay:2e3,onCopy:f,onChange:()=>{},textAriaLabel:"Copyable input",toggleAriaLabel:"Show content"}},20941:(e,t,n)=>{"use strict";n.d(t,{u:()=>l});var r=n(70655),o=n(77865),a=n(44008),i=n(47173),c=n(13342);const l=e=>{var{onClick:t,exitDelay:n=100,entryDelay:l=100,maxWidth:s="100px",position:d="top","aria-label":u="Copyable input",id:p,textId:f,children:g}=e,y=(0,r.__rest)(e,["onClick","exitDelay","entryDelay","maxWidth","position","aria-label","id","textId","children"]);return o.createElement(c.u,{trigger:"mouseenter focus click",exitDelay:n,entryDelay:l,maxWidth:s,position:d,content:o.createElement("div",null,g)},o.createElement(i.zx,Object.assign({type:"button",variant:"control",onClick:t,"aria-label":u,id:p,"aria-labelledby":`${p} ${f}`},y),o.createElement(a.ZP,null)))};l.displayName="ClipboardCopyButton"},42606:(e,t,n)=>{"use strict";n.d(t,{G:()=>c});var r=n(70655),o=n(77865),a=n(27708),i=n(91941);class c extends o.Component{constructor(e){super(e)}render(){const e=this.props,{className:t,children:n,onChange:c,isReadOnly:l,isCode:s}=e,d=(0,r.__rest)(e,["className","children","onChange","isReadOnly","isCode"]);return o.createElement("div",Object.assign({suppressContentEditableWarning:!0,className:(0,i.css)(a.Z.clipboardCopyExpandableContent,t),onInput:e=>c(e.target.innerText,e),contentEditable:!l},d),s?o.createElement("pre",null,n):n)}}c.displayName="ClipboardCopyExpanded",c.defaultProps={onChange:()=>{},className:"",isReadOnly:!1,isCode:!1}},44540:(e,t,n)=>{"use strict";n.d(t,{i:()=>l});var r=n(70655),o=n(77865),a=n(93174),i=n(9003),c=n(47173);const l=e=>{var{onClick:t,id:n,textId:l,contentId:s,isExpanded:d=!1}=e,u=(0,r.__rest)(e,["onClick","id","textId","contentId","isExpanded"]);return o.createElement(c.zx,Object.assign({type:"button",variant:"control",onClick:t,id:n,"aria-labelledby":`${n} ${l}`,"aria-controls":`${n} ${s}`,"aria-expanded":d},u),d?o.createElement(i.ZP,{"aria-hidden":"true"}):o.createElement(a.ZP,{"aria-hidden":"true"}))};l.displayName="ClipboardCopyToggle"},48140:(e,t,n)=>{"use strict";n.d(t,{a:()=>c});var r=n(70655),o=n(77865),a=n(91941),i=n(38730);const c=e=>{var{hasGutter:t,className:n="",children:c=null}=e,l=(0,r.__rest)(e,["hasGutter","className","children"]);return o.createElement("div",Object.assign({},l,{className:(0,a.css)(i.Z.level,t&&i.Z.modifiers.gutter,n)}),c)};c.displayName="Level"},86050:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(70655),o=n(77865);const a=e=>{var{children:t=null}=e,n=(0,r.__rest)(e,["children"]);return o.createElement("div",Object.assign({},n),t)};a.displayName="LevelItem"},49739:(e,t,n)=>{"use strict";n.d(t,{K:()=>c});var r=n(70655),o=n(77865),a=n(75968),i=n(91941);const c=e=>{var{hasGutter:t=!1,className:n="",children:c=null,component:l="div"}=e,s=(0,r.__rest)(e,["hasGutter","className","children","component"]);const d=l;return o.createElement(d,Object.assign({},s,{className:(0,i.css)(a.Z.stack,t&&a.Z.modifiers.gutter,n)}),c)};c.displayName="Stack"},83826:(e,t,n)=>{"use strict";n.d(t,{v:()=>c});var r=n(70655),o=n(77865),a=n(75968),i=n(91941);const c=e=>{var{isFilled:t=!1,className:n="",children:c=null}=e,l=(0,r.__rest)(e,["isFilled","className","children"]);return o.createElement("div",Object.assign({},l,{className:(0,i.css)(a.Z.stackItem,t&&a.Z.modifiers.fill,n)}),c)};c.displayName="StackItem"},27708:(e,t,n)=>{"use strict";n(51128),t.Z={clipboardCopy:"pf-c-clipboard-copy",clipboardCopyExpandableContent:"pf-c-clipboard-copy__expandable-content",clipboardCopyGroup:"pf-c-clipboard-copy__group",clipboardCopyToggleIcon:"pf-c-clipboard-copy__toggle-icon",modifiers:{expanded:"pf-m-expanded"}}},38730:(e,t,n)=>{"use strict";n(88087),t.Z={level:"pf-l-level",modifiers:{gutter:"pf-m-gutter"}}},75968:(e,t,n)=>{"use strict";n(2151),t.Z={modifiers:{fill:"pf-m-fill",gutter:"pf-m-gutter"},stack:"pf-l-stack",stackItem:"pf-l-stack__item"}},44008:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>r});const r=(0,n(40400).IU)({name:"CopyIcon",height:512,width:448,svgPath:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z",yOffset:0,xOffset:0})},12136:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>r});const r=(0,n(40400).IU)({name:"DisconnectedIcon",height:1024,width:1024,svgPath:"M107.625758,511.919812 C107.647579,453.639819 120.473237,396.076275 145.195758,343.299812 L66.0757577,263.919812 C64.9757577,266.019812 63.7857577,268.019812 62.6857577,270.119812 C-38.2858609,455.136708 -13.6478565,683.418046 124.475758,842.629812 C134.640866,854.227038 149.304208,860.890207 164.725758,860.920803 C177.621501,860.999229 190.089847,856.300444 199.725758,847.729812 C222.045758,828.339812 224.235758,794.349812 204.725758,771.959812 C142.116482,699.791587 107.639971,607.46129 107.625758,511.919812 Z M298.965758,512.769812 C298.965758,507.959812 299.165758,503.349812 299.465758,498.849812 L223.695758,422.919812 C195.943021,511.49644 210.859555,607.936744 264.075758,683.989812 C272.417691,695.880397 286.040845,702.947712 300.565758,702.92092 C309.717884,702.984827 318.661486,700.187766 326.145758,694.919812 C346.244069,680.682503 351.030068,652.865563 336.845758,632.729812 C312.094475,597.618928 298.858215,555.687799 298.965758,512.729812 L298.965758,512.769812 Z M903.425758,837.839812 C1064.25516,648.181373 1062.68818,369.557312 899.735758,181.719812 C890.46515,170.983736 877.290268,164.395355 863.139154,163.418898 C848.98804,162.442441 835.033106,167.158807 824.375758,176.519812 C802.005758,195.919812 799.815758,229.919812 819.185758,252.309812 C945.123654,397.620078 948.572544,612.370403 827.365758,761.649812 L754.005758,688.159812 C755.244385,686.815558 756.37773,685.377981 757.395758,683.859812 C792.844775,633.759435 811.790626,573.852791 811.595758,512.479812 C811.595758,450.189812 792.735758,390.599812 756.695758,340.199812 C749.880846,330.567 739.510358,324.044705 727.876268,322.074416 C716.242178,320.104127 704.302408,322.848071 694.695758,329.699812 C674.625758,343.899812 670.135758,371.699812 684.215758,391.799812 C733.317078,460.966176 735.688504,552.965658 690.215758,624.569812 L615.045758,549.479812 C619.447596,537.503845 621.679174,524.839047 621.635758,512.079812 C621.657896,451.518897 572.616613,402.388105 512.055758,402.299812 C499.315423,402.259246 486.670236,404.494336 474.715758,408.899812 L82.6457577,15.6398121 C64.3651324,-2.58558468 34.7711544,-2.54081316 16.5457577,15.7398121 C-1.67963909,34.0204373 -1.63486757,63.6144153 16.6457577,81.8398121 L120.475758,185.919812 L196.535758,261.919812 L333.185758,398.799812 L408.845758,474.589812 L549.005758,614.969812 L941.455758,1008.21981 C959.733621,1026.4673 989.34327,1026.44268 1007.59076,1008.16481 C1025.83825,989.886948 1025.81362,960.2773 1007.53576,942.029812 L903.425758,837.839812 Z",yOffset:0,xOffset:0})},86848:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(77865),o=n.n(r);const a=function(e,t,n,r){return o().createElement("div",{className:"ins-composed-col"},o().createElement("div",null,null==n?void 0:n.os_release),o().createElement("div",{className:(null==r?void 0:r.noDetail)?"ins-m-nodetail":""},(null==r?void 0:r.noDetail)?e:o().createElement("a",{widget:"col",href:"".concat(location.pathname).concat("/"===location.pathname.substr(-1)?"":"/").concat(t),onClick:function(e){e.preventDefault(),e.stopPropagation(),function(e,t,n){var r=n.loaded,o=n.onRowClick,a=n.noDetail;if(r&&!a){var i=e.ctrlKey||e.metaKey||2===e.which;if(i){var c=new URL("./".concat(t),location.href);window.open(c.href)}else o&&o(e,t,i)}}(e,t,r)}},e)))}},55849:(e,t,n)=>{"use strict";n.d(t,{W2:()=>x,y5:()=>I,nN:()=>P,tz:()=>L,vI:()=>T,iF:()=>N,ZP:()=>j});var r,o=n(63038),a=n.n(o),i=n(6479),c=n.n(i),l=n(319),s=n.n(l),d=n(59713),u=n.n(d),p=n(77865),f=n.n(p),g=n(50576),y=n(35240),v=n(64107),h=n(66774),m=n(57748),b=n(7739),O=n.n(b),_=n(86848),E=n(258);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x={loaded:!1,tagsLoaded:!1,allTagsLoaded:!1,invConfig:{},sortBy:{key:"updated",direction:"desc"}},I=[{key:"display_name",title:"Name",renderFunc:_.Z},{key:"tags",title:"Tags",props:{width:25,isStatic:!0},renderFunc:function(e,t){return f().createElement(m.TagWithDialog,{count:e.length,systemId:t})}},{key:"updated",title:"Last seen",renderFunc:function(e,t,n){var r=n.culled_timestamp,o=n.stale_warning_timestamp,a=n.stale_timestamp,i=n.insights_id;return h.Z?f().createElement(h.Z,{culled:r,staleWarning:o,stale:a,render:function(t){var n=t.msg;return f().createElement(f().Fragment,null,f().createElement(v.Z,{date:e,extraTitle:f().createElement(f().Fragment,null,f().createElement("div",null,n),"Last seen:"," ")}),!i&&f().createElement(E.Z,null))}}," ",f().createElement(v.Z,{date:e})," "):new Date(e).toLocaleString()},props:{width:25}}];function D(e,t){var n=t.payload,r=n.results,o=n.per_page,a=n.page,i=n.count,c=n.total,l=n.loaded,s=n.filters;return void 0!==l||void 0!==a&&void 0!==o?C({},e,{activeFilters:s||[],loaded:void 0===l||l,rows:(0,y.r0)([e.rows,r]).filter((function(e){return!l||e.created})),perPage:void 0!==o?o:e.perPage,page:void 0!==a?a:e.page,count:void 0!==i?i:e.count,total:void 0!==c?c:e.total}):e}function P(e,t){var n=t.payload,r=t.meta,o=e.rows?e.rows.find((function(e){var t=e.id;return r.systemId===t})):e.entity||{};o.tags;return C({},e,{tagModalLoaded:!0,activeSystemTag:C({},c()(o,["tags"]),{tags:Object.values(n.results)[0],tagsCount:r.tagsCount,page:n.page,perPage:n.per_page,tagsLoaded:!0})})}function L(e,t){var n=t.meta,r=e.rows?e.rows.find((function(e){var t=e.id;return n.systemId===t})):e.entity||{};r.tags;return C({},e,{tagModalLoaded:!1,activeSystemTag:C({},c()(r,["tags"]),{tagsCount:n.tagsCount,tagsLoaded:!1})})}function T(e,t){return C({},e,{showTagDialog:t.payload.isOpen,activeSystemTag:void 0})}function N(e,t){var n=t.payload,r=n.results,o=n.total,i=n.page,c=n.per_page;return C({},e,{allTags:Object.entries(O()(r,(function(e){return e.tag.namespace}))).map((function(e){var t=a()(e,2);return{name:t[0],tags:t[1]}})),allTagsPagination:{perPage:c,page:i},additionalTagsCount:o>c?o-c:0,allTagsTotal:o,allTagsLoaded:!0})}const j=(r={},u()(r,g.aI.ALL_TAGS_FULFILLED,N),u()(r,g.aI.ALL_TAGS_PENDING,(function(e){return C({},e,{allTagsLoaded:!1})})),u()(r,g.aI.LOAD_ENTITIES_PENDING,(function(e,t){var n=t.meta;return C({},e,{columns:(0,y.r0)([I.filter((function(e){return"tags"!==e.key||(null==n?void 0:n.showTags)})),e.columns],"key"),rows:[],loaded:!1})})),u()(r,g.aI.LOAD_ENTITIES_FULFILLED,D),u()(r,g.aI.LOAD_TAGS_PENDING,L),u()(r,g.aI.LOAD_TAGS_FULFILLED,P),u()(r,g.s$,D),u()(r,g.u4,(function(e,t){return D(e,{payload:C({},t.payload,{loaded:!1})})})),u()(r,g.hI,(function(e,t){var n=t.payload,r=n.item,o=r.items,a=c()(r,["items"]),i=n.selected,l=e.activeFilters,d=void 0===l?[]:l;if(i){var u=(d=[].concat(s()(d),[a],s()(o||[]))).map((function(e){return e.value}));d=d.filter((function(e,t){return u.lastIndexOf(e.value)===t}))}else d.splice(d.map((function(e){return e.value})).indexOf(a.value),1),o&&o.forEach((function(e){d.splice(d.map((function(e){return e.value})).indexOf(e.value),1)}));return C({},e,{activeFilters:d})})),u()(r,g.pr,(function(e,t){var n=t.payload,r=s()(e.rows);return[].concat(n).forEach((function(e){var t=e.id,n=e.selected,o=r.find((function(e){return e.id===t}));o?o.selected=n:r.forEach((function(e){return e.selected=n}))})),C({},e,{rows:r})})),u()(r,g.WH,(function(e,t){var n=t.payload;return C({},e,{sortBy:{key:n.key,direction:n.direction}})})),u()(r,g.Gs,(function(e){return C({},e,{activeFilters:[]})})),u()(r,g.jZ,(function(e,t){return C({},e,{loaded:!t.payload.isLoading})})),u()(r,g.Qd,T),u()(r,g.Uq,(function(e,t){return C({},e,{invConfig:t.payload})})),r)},5251:(e,t,n)=>{"use strict";n.d(t,{P:()=>u,Z:()=>p});var r,o=n(59713),a=n.n(o),i=n(50576),c=n(55849),l=n(70210);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={loaded:!1};const p=d((r={},a()(r,i.aI.LOAD_ENTITIES_PENDING,(function(){return u})),a()(r,i.aI.LOAD_ENTITY_PENDING,(function(e){return d({},e,{loaded:!1})})),a()(r,i.aI.LOAD_ENTITY_FULFILLED,(function(e,t){return d({},e,{loaded:!0,entity:t.payload.results[0]})})),a()(r,i.TP,(function(e,t){return d({},e,{activeApp:t.payload})})),a()(r,i.aI.LOAD_TAGS,c.nN),a()(r,i.aI.LOAD_TAGS_PENDING,(function(e){return d({},e,{tagModalLoaded:!1})})),a()(r,i.aI.LOAD_TAGS_FULFILLED,c.nN),a()(r,i.Qd,c.vI),a()(r,i.Ji,(function(e,t){var n=t.payload;return d({},e,{isToggleOpened:null==n?void 0:n.isOpened})})),r),l.ZP)},77444:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ACTION_TYPES:()=>r.aI,APPLICATION_SELECTED:()=>r.TP,CHANGE_SORT:()=>r.WH,CLEAR_FILTERS:()=>r.Gs,CONFIG_CHANGED:()=>r.Uq,ENTITIES_LOADING:()=>r.jZ,FILTER_ENTITIES:()=>r.lP,FILTER_SELECT:()=>r.hI,INVENTORY_ACTION_TYPES:()=>r.AL,SELECT_ENTITY:()=>r.pr,SHOW_ENTITIES:()=>r.u4,SYSTEM_ISSUE_TYPES:()=>r.dF,TOGGLE_DRAWER:()=>r.Ji,TOGGLE_TAG_MODAL:()=>r.Qd,UPDATE_ENTITIES:()=>r.s$,clearFilters:()=>o.K5,configChanged:()=>o.u3,deleteEntity:()=>o.Ks,detailSelect:()=>o.Xe,editAnsibleHost:()=>o.Uw,editDisplayName:()=>o.$Y,entitiesLoading:()=>o.nE,fetchAllTags:()=>o.C8,filterEntities:()=>o.CP,filterSelect:()=>o.fg,getAdvisorData:()=>o.gb,getComplianceData:()=>o.Oj,getPatchData:()=>o.k0,getVulnData:()=>o.Fo,loadEntities:()=>o.il,loadEntity:()=>o.A_,loadTags:()=>o.me,selectEntity:()=>o.CL,setSort:()=>o.HD,systemProfile:()=>o.eR,toggleDrawer:()=>o.wb,toggleTagModal:()=>o.Ar,updateEntities:()=>o.jB,allTags:()=>a.iF,defaultColumns:()=>a.y5,defaultState:()=>a.W2,showTags:()=>a.nN,showTagsPending:()=>a.tz,toggleTagModalReducer:()=>a.vI,entityDefaultState:()=>i.P,entitiesReducer:()=>c.zw,entityDetailsReducer:()=>c.gA,mergeWithDetail:()=>c.OL,mergeWithEntities:()=>c.AF,advisor:()=>l.Zs,compliance:()=>l.As,cve:()=>l.b$,isPending:()=>l.zR,patch:()=>l.r$});var r=n(50576),o=n(60574),a=n(55849),i=n(5251),c=n(66258),l=n(70210)},66258:(e,t,n)=>{"use strict";n.d(t,{zw:()=>i.ZP,gA:()=>c.Z,AF:()=>d,OL:()=>u});var r=n(59713),o=n.n(r),a=n(18546),i=n(55849),c=n(5251);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return{entities:function(t,n){return s({},e(s({},(0,a.Gg)(s({},i.ZP),i.W2)(t,n)),n))}}}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return{entityDetails:function(t,n){return s({},e(s({},(0,a.Gg)(s({},c.Z),c.defaultState)(t,n)),n))}}}},70210:(e,t,n)=>{"use strict";n.d(t,{Zs:()=>s,b$:()=>d,r$:()=>u,As:()=>p,zR:()=>f,ZP:()=>g});var r,o=n(59713),a=n.n(o),i=n(50576);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){var n=t.payload;return l({},e,{systemIssues:l({},null==e?void 0:e.systemIssues,{advisor:{isLoaded:!0,criticalCount:null==n?void 0:n.filter((function(e){return(null==e?void 0:e.total_risk)>=4}))}})})}function d(e,t){var n,r,o,a,i,c,s,d,u=t.payload;return l({},e,{systemIssues:l({},null==e?void 0:e.systemIssues,{cve:{isLoaded:!0,critical:{count:(null==u||null===(n=u.critical)||void 0===n||null===(r=n.meta)||void 0===r?void 0:r.total_items)||0},moderate:{count:(null==u||null===(o=u.moderate)||void 0===o||null===(a=o.meta)||void 0===a?void 0:a.total_items)||0},important:{count:(null==u||null===(i=u.important)||void 0===i||null===(c=i.meta)||void 0===c?void 0:c.total_items)||0},low:{count:(null==u||null===(s=u.low)||void 0===s||null===(d=s.meta)||void 0===d?void 0:d.total_items)||0}}})})}function u(e,t){var n,r,o,a,i,c,s=t.payload;return l({},e,{systemIssues:l({},null==e?void 0:e.systemIssues,{patch:{isLoaded:!0,bug:{count:(null==s||null===(n=s.data)||void 0===n||null===(r=n.attributes)||void 0===r?void 0:r.rhba_count)||0},enhancement:{count:(null==s||null===(o=s.data)||void 0===o||null===(a=o.attributes)||void 0===a?void 0:a.rhea_count)||0},security:{count:(null==s||null===(i=s.data)||void 0===i||null===(c=i.attributes)||void 0===c?void 0:c.rhsa_count)||0}}})})}function p(e,t){var n,r,o=t.payload;return l({},e,{systemIssues:l({},null==e?void 0:e.systemIssues,{compliance:{isLoaded:!0,profiles:null==o||null===(n=o.data)||void 0===n||null===(r=n.system)||void 0===r?void 0:r.profiles}})})}function f(e,t){return l({},e,{systemIssues:l({},null==e?void 0:e.systemIssues,{},t&&a()({},t,{isLoaded:!1}))})}const g=(r={},a()(r,i.dF.LOAD_ADVISOR_RECOMMENDATIONS_PENDING,(function(e){return f(e,"advisor")})),a()(r,i.dF.LOAD_APPLICABLE_CVES_PENDING,(function(e){return f(e,"cve")})),a()(r,i.dF.LOAD_APPLICABLE_ADVISORIES_PENDING,(function(e){return f(e,"patch")})),a()(r,i.dF.LOAD_COMPLIANCE_POLICIES_PENDING,(function(e){return f(e,"compliance")})),a()(r,i.dF.LOAD_ADVISOR_RECOMMENDATIONS_FULFILLED,s),a()(r,i.dF.LOAD_APPLICABLE_CVES_FULFILLED,d),a()(r,i.dF.LOAD_APPLICABLE_ADVISORIES_FULFILLED,u),a()(r,i.dF.LOAD_COMPLIANCE_POLICIES_FULFILLED,p),r)},258:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(77865),o=n.n(r),a=n(13342),i=n(12136);n(58825);const c=function(){return o().createElement(a.u,{content:"Insights disabled"},o().createElement("span",{className:"pf-u-ml-sm ins-c-inventor__disconnected-icon"},o().createElement(i.ZP,null)))}},18546:(e,t,n)=>{"use strict";n.d(t,{Gg:()=>v});var r=n(63038),o=n.n(r),a=n(319),i=n.n(a),c=n(34575),l=n.n(c),s=n(93913),d=n.n(s),u=n(59713),p=n.n(u),f=n(14890);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){p()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1?arguments[1]:void 0;return Object.prototype.hasOwnProperty.call(e,r.type)?e[r.type](n,r):n}}var h=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f.compose;l()(this,e);var o=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r;this.store=(0,f.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t;return e}),t,o(f.applyMiddleware.apply(void 0,i()(n)))),this.reducers={}}return d()(e,[{key:"getStore",value:function(){return this.store}},{key:"register",value:function(e){var t=this;return this.reducers=y({},this.reducers,{},e),this.store.replaceReducer((0,f.combineReducers)(y({},this.reducers))),function(){t.reducers=Object.entries(t.reducers).filter((function(t){return!Object.keys(e).includes(t)})).reduce((function(e,t){var n=o()(t,2),r=n[0],a=n[1];return y({},e,p()({},r,a))}),{}),t.store.replaceReducer((0,f.combineReducers)(y({},t.reducers)))}}}]),e}();new h},66774:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(67154),o=n.n(r),a=n(6479),i=n.n(a),c=n(77865),l=n.n(c),s=n(45697),d=n.n(s),u=n(43047),p=n(69957),f=n(13342),g=n(94184),y=n.n(g),v=(n(13908),function(e){var t=e.culled,n=(e.className,e.staleWarning),r=e.stale,a=e.currDate,c=e.children,s=e.render,d=i()(e,["culled","className","staleWarning","stale","currDate","children","render"]);if(new Date(a)-new Date(r)<0)return s?s({msg:""}):c;var g=function(e,t,n){var r=new Date(e),o=n-new Date(t),a=Math.ceil((r-n)/864e5),i="System scheduled for inventory removal in ".concat(a," days");return o>=0?{isError:!0,msg:i}:{isWarn:!0,msg:i}}(t,n,a),v=g.isWarn,h=g.isError,m=g.msg;return s?l().createElement("span",{className:y()({"ins-c-inventory__culling-warning":v,"ins-c-inventory__culling-danger":h})},v&&l().createElement(p.ZP,null),h&&l().createElement(u.ZP,null),s({msg:m})):l().createElement(l().Fragment,null,l().createElement(f.u,o()({},d,{content:m,position:"bottom"}),l().createElement("span",{className:y()({"ins-c-inventory__culling-warning":v,"ins-c-inventory__culling-danger":h})},h&&l().createElement(u.ZP,null),v&&l().createElement(p.ZP,null),c)))});v.propTypes={culled:d().oneOfType([d().string,d().number,d().instanceOf(Date)]),staleWarning:d().oneOfType([d().string,d().number,d().instanceOf(Date)]),stale:d().oneOfType([d().string,d().number,d().instanceOf(Date)]),currDate:d().oneOfType([d().string,d().number,d().instanceOf(Date)]),render:d().func},v.defaultProps={culled:new Date(0),staleWarning:new Date(0),currDate:new Date};const h=v},64107:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(77865),o=n.n(r),a=n(45697),i=n.n(a),c=n(29165);function l(e){var t=e.date,n=e.type,r=void 0===n?"relative":n,a=e.extraTitle,i=e.tooltipProps,l=void 0===i?{}:i,s=t instanceof Date?t:new Date(t),d=null==t||"Invalid Date"===s.toString()?"invalid":r;return o().createElement(o().Fragment,null,(0,c.iq)(d,l,a)(s))}l.propTypes={date:i().oneOfType([i().instanceOf(Date),i().string,i().number]),type:i().oneOf(["exact","onlyDate","relative"]),extraTitle:i().node,tooltipProps:i().object}},29165:(e,t,n)=>{"use strict";n.d(t,{iq:()=>h});var r=n(67154),o=n.n(r),a=n(77865),i=n.n(a),c=n(13342),l=6e4,s=36e5,d=24*s,u=30*d,p=365*d,f=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},g=[{rightBound:1/0,description:function(e){return f(Math.round(e/p),"year")}},{rightBound:p,description:function(e){return f(Math.round(e/u),"month")}},{rightBound:u,description:function(e){return f(Math.round(e/d),"day")}},{rightBound:d,description:function(e){return f(Math.round(e/s),"hour")}},{rightBound:s,description:function(e){return f(Math.round(e/l),"minute")}},{rightBound:l,description:function(){return"Just now"}}],y=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},v=function(e){return{exact:function(e){return y(e)+" UTC"},onlyDate:function(e){return y(e).slice(0,-6)},relative:function(e){return g.reduce((function(t,n){return n.rightBound>Date.now()-e?n.description(Date.now()-e):t}),y(e))},invalid:function(){return"Invalid date"}}[e]},h=function(e,t,n){return{exact:function(t){return v(e)(t)},onlyDate:function(t){return v(e)(t)},relative:function(r){return function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return i().createElement(c.u,o()({},n,{content:i().createElement("div",null,r,e)}),t)}(v("exact")(r),i().createElement("span",null,v(e)(r)),t,n)},invalid:function(){return"Invalid date"}}[e]}},36039:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(23645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".pf-c-clipboard-copy{--pf-c-clipboard-copy__toggle-icon--Transition: .2s ease-in 0s;--pf-c-clipboard-copy--m-expanded__toggle-icon--Rotate: 90deg;--pf-c-clipboard-copy__expandable-content--PaddingTop: var(--pf-global--spacer--md);--pf-c-clipboard-copy__expandable-content--PaddingRight: var(--pf-global--spacer--md);--pf-c-clipboard-copy__expandable-content--PaddingBottom: var(--pf-global--spacer--md);--pf-c-clipboard-copy__expandable-content--PaddingLeft: var(--pf-global--spacer--md);--pf-c-clipboard-copy__expandable-content--BackgroundColor: var(--pf-global--BackgroundColor--light-100);--pf-c-clipboard-copy__expandable-content--BorderTopWidth: 0;--pf-c-clipboard-copy__expandable-content--BorderRightWidth: var(--pf-global--BorderWidth--sm);--pf-c-clipboard-copy__expandable-content--BorderBottomWidth: var(--pf-global--BorderWidth--sm);--pf-c-clipboard-copy__expandable-content--BorderLeftWidth: var(--pf-global--BorderWidth--sm);--pf-c-clipboard-copy__expandable-content--BorderColor: var(--pf-global--BorderColor--100);--pf-c-clipboard-copy__expandable-content--OutlineOffset: calc(-1 * var(--pf-global--spacer--xs))}.pf-c-clipboard-copy.pf-m-expanded .pf-c-clipboard-copy__toggle-icon{transform:rotate(var(--pf-c-clipboard-copy--m-expanded__toggle-icon--Rotate))}.pf-c-clipboard-copy__group{display:flex}.pf-c-clipboard-copy__group>*+*{margin-left:-1px}.pf-c-clipboard-copy__toggle-icon{transition:var(--pf-c-clipboard-copy__toggle-icon--Transition)}.pf-c-clipboard-copy__expandable-content{padding:var(--pf-c-clipboard-copy__expandable-content--PaddingTop) var(--pf-c-clipboard-copy__expandable-content--PaddingRight) var(--pf-c-clipboard-copy__expandable-content--PaddingBottom) var(--pf-c-clipboard-copy__expandable-content--PaddingLeft);word-wrap:break-word;background-color:var(--pf-c-clipboard-copy__expandable-content--BackgroundColor);background-clip:padding-box;border:solid var(--pf-c-clipboard-copy__expandable-content--BorderColor);border-width:var(--pf-c-clipboard-copy__expandable-content--BorderTopWidth) var(--pf-c-clipboard-copy__expandable-content--BorderRightWidth) var(--pf-c-clipboard-copy__expandable-content--BorderBottomWidth) var(--pf-c-clipboard-copy__expandable-content--BorderLeftWidth);box-shadow:var(--pf-c-clipboard-copy__expandable-content--BoxShadow)}.pf-c-clipboard-copy__expandable-content pre{white-space:pre-wrap}\n",""]);const a=o},8183:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(23645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".pf-l-level{--pf-l-level--m-gutter--MarginRight: var(--pf-global--gutter);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.pf-l-level.pf-m-gutter>*:not(:last-child){margin-right:var(--pf-l-level--m-gutter--MarginRight)}\n",""]);const a=o},88221:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(23645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".pf-l-stack{--pf-l-stack--m-gutter--MarginBottom: var(--pf-global--gutter);display:flex;flex-direction:column;height:100%}.pf-l-stack__item.pf-m-fill{flex-grow:1}.pf-l-stack.pf-m-gutter>*:not(:last-child){margin-bottom:var(--pf-l-stack--m-gutter--MarginBottom)}\n",""]);const a=o},64592:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(23645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".ins-c-inventor__disconnected-icon{color:var(--pf-global--warning-color--100)}\n",""]);const a=o},80151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(23645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".ins-c-inventory__culling-warning{color:var(--pf-global--warning-color--100)}.ins-c-inventory__culling-danger{color:var(--pf-global--danger-color--100)}.ins-c-inventory__culling-danger,.ins-c-inventory__culling-warning{font-weight:var(--pf-global--FontWeight--bold)}.ins-c-inventory__culling-danger svg,.ins-c-inventory__culling-warning svg{margin-right:var(--pf-global--spacer--sm)}\n",""]);const a=o},44174:e=>{e.exports=function(e,t,n,r){for(var o=-1,a=null==e?0:e.length;++o<a;){var i=e[o];t(r,i,n(i),e)}return r}},81119:(e,t,n)=>{var r=n(89881);e.exports=function(e,t,n,o){return r(e,(function(e,r,a){t(o,e,n(e),a)})),o}},55189:(e,t,n)=>{var r=n(44174),o=n(81119),a=n(67206),i=n(1469);e.exports=function(e,t){return function(n,c){var l=i(n)?r:o,s=t?t():{};return l(n,e,a(c,2),s)}}},7739:(e,t,n)=>{var r=n(89465),o=n(55189),a=Object.prototype.hasOwnProperty,i=o((function(e,t,n){a.call(e,n)?e[n].push(t):r(e,n,[t])}));e.exports=i},14890:(e,t,n)=>{"use strict";n.d(t,{applyMiddleware:()=>v,bindActionCreators:()=>u,combineReducers:()=>s,compose:()=>y,createStore:()=>c});var r=n(27164),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},a={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function i(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function c(e,t,n){var o;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(c)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var l=e,s=t,d=[],u=d,p=!1;function f(){u===d&&(u=d.slice())}function g(){if(p)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function y(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(p)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return f(),u.push(e),function(){if(t){if(p)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,f();var n=u.indexOf(e);u.splice(n,1),d=null}}}function v(e){if(!i(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,s=l(s,e)}finally{p=!1}for(var t=d=u,n=0;n<t.length;n++){(0,t[n])()}return e}function h(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");l=e,v({type:a.REPLACE})}function m(){var e,t=y;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(g())}return n(),{unsubscribe:t(n)}}})[r.Z]=function(){return this},e}return v({type:a.INIT}),(o={dispatch:v,subscribe:y,getState:g,replaceReducer:h})[r.Z]=m,o}function l(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function s(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];0,"function"==typeof e[o]&&(n[o]=e[o])}var i,c=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if(void 0===n(void 0,{type:a.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:a.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+a.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(e){i=e}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var r=!1,o={},a=0;a<c.length;a++){var s=c[a],d=n[s],u=e[s],p=d(u,t);if(void 0===p){var f=l(s,t);throw new Error(f)}o[s]=p,r=r||p!==u}return(r=r||c.length!==Object.keys(e).length)?o:e}}function d(e,t){return function(){return t(e.apply(this,arguments))}}function u(e,t){if("function"==typeof e)return d(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var n={};for(var r in e){var o=e[r];"function"==typeof o&&(n[r]=d(o,t))}return n}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function v(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},a=t.map((function(e){return e(o)}));return g({},n,{dispatch:r=y.apply(void 0,a)(n.dispatch)})}}}},51128:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var r=n(93379),o=n.n(r),a=n(36039),i={insert:"head",singleton:!1};o()(a.Z,i);const c=a.Z.locals||{}},88087:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var r=n(93379),o=n.n(r),a=n(8183),i={insert:"head",singleton:!1};o()(a.Z,i);const c=a.Z.locals||{}},2151:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var r=n(93379),o=n.n(r),a=n(88221),i={insert:"head",singleton:!1};o()(a.Z,i);const c=a.Z.locals||{}},58825:(e,t,n)=>{"use strict";var r=n(93379),o=n.n(r),a=n(64592),i={insert:"head",singleton:!1};o()(a.Z,i),a.Z.locals},13908:(e,t,n)=>{"use strict";var r=n(93379),o=n.n(r),a=n(80151),i={insert:"head",singleton:!1};o()(a.Z,i),a.Z.locals},27164:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r,o=n(10396);e=n.hmd(e),r="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:e;const a=(0,o.Z)(r)},10396:(e,t,n)=>{"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,{Z:()=>r})}}]);