(window.wpJsonpChromeInstance=window.wpJsonpChromeInstance||[]).push([[26],{1034:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),a=n.__importStar(r(0)),o=n.__importDefault(r(238)),c=r(1);t.TextContent=e=>{var{children:t=null,className:r=""}=e,l=n.__rest(e,["children","className"]);return a.createElement("div",Object.assign({},l,{className:c.css(o.default.content,r)}),t)},t.TextContent.displayName="TextContent"},1078:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1079);t.addNotification=function(e){return{type:n.ADD_NOTIFICATION,payload:e}},t.clearNotifications=function(){return{type:n.CLEAR_NOTIFICATIONS}},t.removeNotification=function(e){return{type:n.REMOVE_NOTIFICATION,payload:e}}},1079:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="@@INSIGHTS-CORE/NOTIFICATIONS/",a="".concat(n,"ADD_NOTIFICATION"),o="".concat(n,"REMOVE_NOTIFICATION"),c="".concat(n,"CLEAR_NOTIFICATIONS");t.ADD_NOTIFICATION=a,t.CLEAR_NOTIFICATIONS=c,t.REMOVE_NOTIFICATION=o},1134:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),a=n.__importStar(r(0)),o=n.__importDefault(r(55)),c=r(1),l=r(72);t.Card=e=>{var{children:r=null,className:i="",component:s="article",isHoverable:u=!1,isCompact:f=!1,isSelectable:p=!1,isSelected:d=!1,isFlat:m=!1,ouiaId:y,ouiaSafe:b=!0}=e,h=n.__rest(e,["children","className","component","isHoverable","isCompact","isSelectable","isSelected","isFlat","ouiaId","ouiaSafe"]);const v=s;return a.createElement(v,Object.assign({className:c.css(o.default.card,u&&o.default.modifiers.hoverable,f&&o.default.modifiers.compact,p&&o.default.modifiers.selectable,d&&p&&o.default.modifiers.selected,m&&o.default.modifiers.flat,i),tabIndex:p?"0":void 0},h,l.getOUIAProps(t.Card.displayName,y,b)),r)},t.Card.displayName="Card"},1135:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),a=n.__importStar(r(0)),o=r(1),c=n.__importDefault(r(61));t.EmptyStateIcon=e=>{var{className:t="",icon:r,component:l,variant:i="icon"}=e,s=n.__rest(e,["className","icon","component","variant"]);const u=o.css(c.default.emptyStateIcon,t);return"icon"===i?a.createElement(r,Object.assign({className:u},s,{"aria-hidden":"true"})):a.createElement("div",{className:u},a.createElement(l,null))},t.EmptyStateIcon.displayName="EmptyStateIcon"},1136:function(e,t,r){"use strict";t.__esModule=!0,t.AnsibeTowerIconConfig={name:"AnsibeTowerIcon",height:390,width:390,svgPath:"M402.6,214.7c0,103.9-84.2,188.1-188.1,188.1c-103.9,0-188.1-84.2-188.1-188.1  c0-103.9,84.2-188.1,188.1-188.1C318.4,26.6,402.6,110.8,402.6,214.7z M304.1,289.3l-74.9-180.2c-2.1-5.2-6.4-7.9-11.6-7.9c-5.2,0-9.8,2.8-11.9,7.9l-82.2,197.7h28.1l32.5-81.5  l97.1,78.4c3.9,3.2,6.7,4.6,10.4,4.6c7.3,0,13.7-5.5,13.7-13.4C305.4,293.6,305,291.5,304.1,289.3z M217.7,141.5l48.7,120.2  l-73.5-57.9L217.7,141.5z",yOffset:20,xOffset:20},t.AnsibeTowerIcon=r(29).createIcon(t.AnsibeTowerIconConfig),t.default=t.AnsibeTowerIcon},1137:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),a=n.__importStar(r(0)),o=r(1);var c;!function(e){e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.p="p",e.a="a",e.small="small",e.blockquote="blockquote",e.pre="pre"}(c=t.TextVariants||(t.TextVariants={})),t.Text=e=>{var{children:t=null,className:r="",component:l=c.p}=e,i=n.__rest(e,["children","className","component"]);const s=l;return a.createElement(s,Object.assign({},i,{"data-pf-content":!0,className:o.css(r)}),t)},t.Text.displayName="Text"},1393:function(e,t,r){"use strict";t.__esModule=!0,t.FrownOpenIconConfig={name:"FrownOpenIcon",height:512,width:496,svgPath:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM136 208c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm187.3 183.3c-31.2-9.6-59.4-15.3-75.3-15.3s-44.1 5.7-75.3 15.3c-11.5 3.5-22.5-6.3-20.5-18.1 7-40 60.1-61.2 95.8-61.2s88.8 21.3 95.8 61.2c2 11.9-9.1 21.6-20.5 18.1zM328 240c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z",yOffset:0,xOffset:0},t.FrownOpenIcon=r(29).createIcon(t.FrownOpenIconConfig),t.default=t.FrownOpenIcon},1394:function(e,t,r){"use strict";t.__esModule=!0,t.WrenchIconConfig={name:"WrenchIcon",height:512,width:512,svgPath:"M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z",yOffset:0,xOffset:0},t.WrenchIcon=r(29).createIcon(t.WrenchIconConfig),t.default=t.WrenchIcon},1395:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2);n.__exportStar(r(410),t),n.__exportStar(r(563),t)},1401:function(e,t,r){"use strict";t.__esModule=!0,t.ExternalLinkSquareAltIconConfig={name:"ExternalLinkSquareAltIcon",height:512,width:448,svgPath:"M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z",yOffset:0,xOffset:0},t.ExternalLinkSquareAltIcon=r(29).createIcon(t.ExternalLinkSquareAltIconConfig),t.default=t.ExternalLinkSquareAltIcon},1790:function(e,t,r){!function(e,t,r,n,a,o,c,l,i,s,u,f,p,d,m,y,b,h,v,S,g,O,E,P,_,j,w,T,I,A,C,k,L,D,x,R,N,M,F,B,V,W,Y,G,z,H){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,l=l&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l,u=u&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u,f=f&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f,p=p&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p,b=b&&Object.prototype.hasOwnProperty.call(b,"default")?b.default:b,h=h&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h,S=S&&Object.prototype.hasOwnProperty.call(S,"default")?S.default:S,g=g&&Object.prototype.hasOwnProperty.call(g,"default")?g.default:g,E=E&&Object.prototype.hasOwnProperty.call(E,"default")?E.default:E,I=I&&Object.prototype.hasOwnProperty.call(I,"default")?I.default:I,k=k&&Object.prototype.hasOwnProperty.call(k,"default")?k.default:k,L=L&&Object.prototype.hasOwnProperty.call(L,"default")?L.default:L,x=x&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x,V=V&&Object.prototype.hasOwnProperty.call(V,"default")?V.default:V,z=z&&Object.prototype.hasOwnProperty.call(z,"default")?z.default:z,H=H&&Object.prototype.hasOwnProperty.call(H,"default")?H.default:H;var q=function(e){if(Array.isArray(e))return e},K=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}},U=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},J=function(e,t){if(e){if("string"==typeof e)return U(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?U(e,t):void 0}},X=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},$=function(e,t){return q(e)||K(e,t)||J(e,t)||X()},Q=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},Z=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a},ee=function(e,t){if(null==e)return{};var r,n,a=Z(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a};function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){Q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ne=function(e,t,r){if(t){var n=$(t,1)[0],a=t.join();a===ge?n="-applicable_advisories":a===Oe&&(n="applicable_advisories");var o="-"===n[0]?v.SortByDirection.desc:v.SortByDirection.asc;return n=n.replace(/^(-|\+)/,""),{index:S(e,(function(e){return e.key===n}))+r,direction:o}}return{}},ae=function(e,t){var r=t.reduce((function(e,t){return e[t.rowId]=t.value||void 0,e}),{});return re(re({},e),r)},oe=function(e,t){return e[t/2].id},ce=function(e,t){return e*t-t};function le(e){return t.createElement("div",{style:{display:"flex",alignItems:"center"}},e&&t.createElement(h,{style:{color:"var(--pf-global--palette--blue-400)"}})||t.createElement(b,{style:{color:"var(--pf-global--success-color--100)"}}),t.createElement("span",{style:{marginLeft:"var(--pf-global--spacer--sm)"}},e?"Upgradable":"Up-to-date"))}function ie(e,n,a){return-1===location.href.indexOf("inventory")?t.createElement(r.Link,{to:"/".concat(e,"/").concat(n)},void 0===a?n:a):t.createElement("a",{href:"".concat(document.baseURI,"insights/patch/").concat(e,"/").concat(n)},a||n)}var se,ue,fe,pe,de,me=function(e){return Object.values(e).filter((function(e){return e}))},ye=function(e,t){return e=[].concat(e),t=[].concat(t),!(!e.length||!t.length)&&{issues:e.map((function(e){return{id:"patch-advisory:".concat(e),description:e}})),systems:t}},be=function(e,t){var r=e.filter,n=ee(e,["filter"]);n=re(re({},n),function(e){var r={};return e&&Object.entries(e).forEach((function(e){var n=$(e,2),a=n[0],o=n[1];o=t&&function(e,t){var r=we[e];if(r)return r.values.find((function(e){return e.value===t}))||{apiValue:t}}(a,o).apiValue||o;var c=[].concat(o).length>1?"in:":"";r=re(re({},r),{},Q({},"filter[".concat(a,"]"),"".concat(c).concat(o.toString())))})),r}(r));var a=[];return Object.keys(n).forEach((function(e){var t=encodeURIComponent(e),r=encodeURIComponent(n[e]);["",void 0,null].some((function(t){return[r,e].includes(t)}))||(["selectedTags","systemProfile"].includes(e)?"selectedTags"===e?a.push.apply(a,n[e]):a.push(n[e]):a.push(t.concat("=").concat(r)))})),"?".concat(a.join("&"))},he=function(e){return be(e,!0)},ve=function(e,t){var r=[];return e&&function(){var t=Object.keys(e).filter((function(t){return""!==e[t]&&0!==[].concat(e[t]).length}));r=r.concat(t.map((function(t){var r=we[t],n=r.label,a=r.values;return{category:n,id:t,chips:[].concat(e[t]).map((function(e){var t=a.find((function(t){return t.value.toString()===e.toString()}));return{name:t.label,value:e,id:t.value}}))}})))}(),t&&(r=r.concat([{category:"Search",id:"search",chips:[{name:t,value:t}]}])),r};function Se(e){var t=new Date;return t.setDate(t.getDate()-e),t.toISOString()}var ge="-rhsa_count,-rhba_count,-rhea_count",Oe="rhsa_count,rhba_count,rhea_count",Ee=((null===(se=window)||void 0===se||null===(ue=se.insights)||void 0===ue||null===(fe=ue.chrome)||void 0===fe?void 0:fe.isBeta)&&(null===(pe=insights)||void 0===pe||null===(de=pe.chrome)||void 0===de||de.isBeta()),{rows:[],metadata:{limit:25,offset:0,total_items:0},expandedRows:{},selectedRows:{},queryParams:{},error:{}}),Pe=[{apiValue:"",label:"All",value:""},{apiValue:"gt:".concat(Se(7)),label:"Last 7 days",value:"last7"},{apiValue:"gt:".concat(Se(30)),label:"Last 30 days",value:"last30"},{apiValue:"gt:".concat(Se(90)),label:"Last 90 days",value:"last90"},{apiValue:"gt:".concat(Se(365)),label:"Last year",value:"lastYear"},{apiValue:"lt:".concat(Se(365)),label:"More than 1 year ago",value:"moreThanYear"}],_e=[{value:3,label:"Security",icon:t.createElement(p,null)},{value:2,label:"Bugfix",icon:t.createElement(u,null)},{value:1,label:"Enhancement",icon:t.createElement(f,null)}],je=[{value:"",label:"All"},{value:!0,label:"Upgradable"}],we={advisory_type:{label:"Advisory type",values:_e},public_date:{label:"Public date",values:Pe},updatable:{label:"Status",values:je}},Te="advisories",Ie="packages",Ae=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).public_date;""!==t&&t||(t="0");var r=function(t){e({filter:{public_date:"0"!==t&&t||""}})};return{label:"Publish date",type:s.conditionalFilterType.radio,filterValues:{onChange:function(e,t){r(t)},items:Pe,value:t}}},Ce=function(e,r,n){var a=t.useState(),o=$(a,2),c=o[0],l=o[1],i=t.useState((function(){return E((function(t){return e({search:t})}),400)})),s=$(i,1)[0];return t.useEffect((function(){return l(r)}),[r]),{type:O.conditionalFilterType.text,label:"Search",filterValues:{"aria-label":"search-field",onChange:function(e,t){l(t),s(t)},placeholder:n||"Search advisories",value:c}}},ke=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.useMemo((function(){return _e.map((function(e){var t=e.value;return{label:e.label,value:t.toString()}}))}),[]),a=function(t){e({filter:{advisory_type:t}})};return{label:"Type",type:O.conditionalFilterType.checkbox,filterValues:{onChange:function(e,t){a(t)},items:n,value:r.advisory_type}}},Le=function(e){var r=e.message;return t.createElement(P.Card,null,t.createElement(_.EmptyState,{variant:_.EmptyStateVariant.full},t.createElement(w.EmptyStateIcon,{icon:I,color:"black"}),t.createElement(T.Title,{headingLevel:"h5",size:"lg"},"Error"),t.createElement(j.EmptyStateBody,null,r)))};Le.propTypes={message:l.string};var De=function(){return t.createElement(A.Bullseye,null,t.createElement(_.EmptyState,{style:{paddingTop:40}},t.createElement(w.EmptyStateIcon,{icon:k}),t.createElement(T.Title,{headingLevel:"h5",size:"lg"},"Patch is not yet configured"),t.createElement(j.EmptyStateBody,null,"Activate the Insights client for this system"),t.createElement(C.Button,{variant:"primary",component:"a",href:"http://access.redhat.com/products/cloud_management_services_for_rhel#getstarted"},"Learn about the Insights client")))},xe=function(){return t.createElement(A.Bullseye,null,t.createElement(_.EmptyState,{style:{paddingTop:40}},t.createElement(w.EmptyStateIcon,{icon:function(){return t.createElement(L,{size:"xl",color:"var(--pf-global--success-color--200)",style:{marginBottom:15}})}}),t.createElement(T.Title,{headingLevel:"h5",size:"lg"},"No applicable advisories"),t.createElement(j.EmptyStateBody,null,"This system is up to date, based on package information submitted at the most recent system check-in")))},Re=function(e,t,r){return e(r={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&r.path)}},r.exports),r.exports}((function(e,t){t.__esModule=!0,t.global_palette_white={name:"--pf-global--palette--white",value:"#fff",var:"var(--pf-global--palette--white)"},t.default=t.global_palette_white})),Ne=function(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}(Re);Re.global_palette_white;var Me=function(e){var r=e.data,n=i.useDispatch(),a=t.useState(!1),o=$(a,2),l=o[0],s=o[1];return t.useEffect((function(){return(insights.experimental&&insights.experimental.loadRemediations||insights.loadRemediations)({pfReactTable:{Table:v.Table,TableBody:v.TableBody,TableHeader:v.TableHeader,TableGridBreakpoint:v.TableGridBreakpoint,cellWidth:v.cellWidth,TableVariant:v.TableVariant,sortable:v.sortable,expandable:v.expandable,SortByDirection:v.SortByDirection}}).then((function(e){return s(e)})),function(){return s(!1)}}),[]),t.useEffect((function(){l&&l.openWizard(r).then((function(e){return e&&function(e){n(c.addNotification(e.getNotification()))}(e)}))}),[l]),t.createElement(t.Fragment,null,l.RemediationWizard&&t.createElement(l.RemediationWizard,null))};function Fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Me.propTypes={data:l.object},Me.defaultProps={onRemediationCreated:function(e){return e}};var Be=function(e,r){return t.useCallback((function(t,n){return r({offset:ce(n,e)})}))},Ve=function(e){return t.useCallback((function(t,r){return e({limit:r,offset:0})}))},We=function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return t.useCallback((function(t,a,o){var c=e[a-n].key;o===v.SortByDirection.desc&&(c="-"+c),"-applicable_advisories"===c?c=ge:"applicable_advisories"===c&&(c=Oe),r({sort:c})}))},Ye=function(e,r){return t.useCallback((function(t,n){var a={filter:{}};n.forEach((function(t){var r=t.id,n=t.chips;if("search"!==r){var o=e[r],c=n.map((function(e){return e.id.toString()}));Array.isArray(o)?a.filter[r]=o.filter((function(e){return!c.includes(e.toString())})):a.filter[r]=""}else a.search=""})),r(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Fe(Object(r),!0).forEach((function(t){Q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},a))}))},Ge=function(e){var r=e.page,n=e.perPage,a=e.onSetPage,o=e.totalItems,c=e.onPerPageSelect;return t.createElement(B.TableToolbar,null,t.createElement(F.Pagination,{itemCount:o,perPage:n,page:r,onSetPage:a,onPerPageSelect:c,widgetId:"pagination-options-menu-bottom",variant:F.PaginationVariant.bottom}))};Ge.propTypes={onSetPage:l.func,onPerPageSelect:l.func,page:l.number,perPage:l.number,totalItems:l.number};var ze=function(e){var r=e.columns,n=e.store,a=n.rows,o=n.metadata,c=n.status,l=n.queryParams,i=l.filter,s=l.search,u=e.onCollapse,f=e.onSelect,p=e.onSetPage,d=e.onPerPageSelect,m=e.onSort,y=e.onExport,b=e.filterConfig,h=e.sortBy,v=e.remediationProvider,S=e.selectedRows,g=e.compact,O=e.apply,E=t.useState((function(){return function(){return null}})),P=$(E,2),_=P[0],j=P[1],w=t.useMemo((function(){return function(e,t){return[t/e+1,e]}(o.limit,o.offset)}),[o.limit,o.offset]),T=$(w,2),I=T[0],A=T[1],C=Ye(i,O),k=S&&me(S).length;return t.createElement(t.Fragment,null,t.createElement(N.PrimaryToolbar,{pagination:{itemCount:o.total_items,page:I,perPage:A,isCompact:!0,onSetPage:p,onPerPageSelect:d},filterConfig:b,activeFiltersConfig:{filters:ve(i,s),onDelete:C},actionsConfig:{actions:[v&&t.createElement(t.Fragment,null,t.createElement(D.Button,{isDisabled:0===k,className:"remediationButtonPatch",onClick:function(){return function(e){j((function(){return function(){return t.createElement(Me,{data:e})}}))}(v())}},t.createElement(x,{color:Ne.value})," Remediate"),t.createElement(_,null))]},exportConfig:{onSelect:y},bulkSelect:f&&{count:k,items:[{title:"Select none (0)",onClick:function(){f("none")}},{title:"Select page (".concat(u&&a.length/2||a.length,")"),onClick:function(){f("page")}},{title:"Select all (".concat(o.total_items,")"),onClick:function(){f("all")}}],onSelect:function(e){f(e?"all":"none")},checked:k===o.total_items||0!==k&&null}}),"loading"===c&&t.createElement(M.SkeletonTable,{colSize:5,rowSize:20}),"resolved"===c&&t.createElement(t.Fragment,null,t.createElement(R.Table,{"aria-label":"Patch table view",cells:o.total_items&&r||[""],onSelect:f,rows:a,onCollapse:o.total_items&&u,canSelectAll:!1,onSort:m,sortBy:o.total_items&&h,variant:g&&R.TableVariant.compact},t.createElement(R.TableHeader,null),t.createElement(R.TableBody,null)),t.createElement(Ge,{totalItems:o.total_items,perPage:A,page:I,onSetPage:p,onPerPageSelect:d})))};ze.propTypes={columns:l.array,onCollapse:l.func,onSelect:l.func,onSetPage:l.func,onPerPageSelect:l.func,onSort:l.func,onExport:l.func,remediationProvider:l.func,selectedRows:l.object,apply:l.func,sortBy:l.object,filterConfig:l.object,store:l.object,compact:l.bool},v.expandable,v.sortable,v.cellWidth(15),v.sortable,v.cellWidth(15),v.sortable,v.cellWidth(15),v.sortable,v.cellWidth(15),v.sortable;var He=[{title:"Name",cellFormatters:[v.expandable],transforms:[v.sortable,v.cellWidth(15)],key:"id"},{title:"Publish date",transforms:[v.sortable,v.cellWidth(15)],key:"public_date"},{title:"Type",transforms:[v.sortable,v.cellWidth(15)],key:"advisory_type"},{title:"Synopsis",transforms:[v.sortable],key:"synopsis"}],qe=[{title:"Package",transforms:[v.sortable,v.cellWidth(20)],key:"name"},{title:"Installed version",transforms:[v.sortable,v.cellWidth(15)],key:"evra"},{title:"Latest version",transforms:[v.cellWidth(15)],key:"latest_update"},{title:"Status",transforms:[v.cellWidth(10)],key:"updatable"},{title:"Summary",transforms:[v.sortable,v.cellWidth(40)],key:"summary"}];function Ke(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ke(Object(r),!0).forEach((function(t){Q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ke(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Je(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;return r&&"get"===t&&(e=e.concat(he(r))),window.insights.chrome.auth.getUser().then((function(){return fetch("/api/patch/v1"+e,{method:t,credentials:"include",body:JSON.stringify(n)})})).then((function(e){if(!e.ok)throw-1!==e.headers.get("content-type").indexOf("json")?e:{errors:[{status:e.status,detail:e.statusText}]};return e.json()})).catch((function(e){var t=Promise.resolve(e||{}),r={title:"There was an error getting data"};return t.then((function(e){var t=$(e.errors,1)[0];throw e.errors&&Ue(Ue({},r),{},{detail:t.detail,status:t.status})||r}))}))}v.sortable,v.cellWidth(25),v.sortable,v.cellWidth(15),v.sortable,v.cellWidth(10),v.sortable,v.cellWidth(40);var Xe=function(e){var t=e.id,r=ee(e,["id"]);return Je("/systems/".concat(t,"/advisories"),"get",r)},$e=function(e){var t=e.id,r=ee(e,["id"]);return Je("/systems/".concat(t,"/packages"),"get",r)},Qe=function(e){return{type:"SELECT_SYSTEM_ADVISORY_ROW",payload:e}},Ze=function(e){return{type:"SELECT_SYSTEM_PACKAGES_ROW",payload:e}},et=function(e){var r=e.type,n=_e.find((function(e){return e.value===r}))||_e[2];return t.createElement(t.Fragment,null,t.createElement(d.Flex,null,t.createElement(m.FlexItem,{spacer:{default:"spacerSm"}},n.icon),t.createElement(m.FlexItem,{spacer:{default:"spacerSm"}},n.label)))};et.propTypes={type:l.number};var tt=function(){return t.createElement(_.EmptyState,{variant:_.EmptyStateVariant.full},t.createElement(w.EmptyStateIcon,{icon:z}),t.createElement(T.Title,{headingLevel:"h5",size:"lg"},"No matching Advisories found"))},rt=function(){return t.createElement(_.EmptyState,{variant:_.EmptyStateVariant.full},t.createElement(w.EmptyStateIcon,{icon:z}),t.createElement(T.Title,{headingLevel:"h5",size:"lg"},"No matching packages found"))},nt=function(e){var r=e.link,n=e.text;return t.createElement("a",{href:r,target:"__blank"},t.createElement(d.Flex,{flex:{default:"inlineFlex"}},t.createElement(m.FlexItem,{spacer:{default:"spacerSm"}},t.createElement(H,null)),t.createElement(m.FlexItem,{spacer:{default:"spacerSm"}},n)))};nt.propTypes={link:l.string,text:l.string};var at=function(e){var r=e.children;return t.createElement("span",{className:"patchman-label"},r)};function ot(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ct(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ot(Object(r),!0).forEach((function(t){Q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ot(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}at.propTypes={children:l.any};var lt=function(e){var r=e.history,n=i.useDispatch(),a=t.useState(!0),o=$(a,2),l=o[0],s=o[1],u=i.useSelector((function(e){return e.SystemAdvisoryListStore.rows})),f=i.useSelector((function(e){return e.entityDetails.entity})),p=i.useSelector((function(e){return e.SystemAdvisoryListStore.expandedRows})),d=i.useSelector((function(e){return e.SystemAdvisoryListStore.queryParams})),m=i.useSelector((function(e){return e.SystemAdvisoryListStore.selectedRows})),y=i.useSelector((function(e){return e.SystemAdvisoryListStore.metadata})),b=i.useSelector((function(e){return e.SystemAdvisoryListStore.status})),h=i.useSelector((function(e){return e.SystemAdvisoryListStore.error})),v=t.useMemo((function(){return function(e,r,n){return 0!==e.length?V(e,(function(e,a){return[{id:e.id,isOpen:!0===r[e.id],selected:void 0!==n[e.id],cells:[{title:ie(Te,e.id)},{title:G.processDate(e.attributes.public_date)},{title:t.createElement(et,{type:e.attributes.advisory_type})},e.attributes.synopsis]},{cells:[{title:t.createElement(Y.TextContent,null,t.createElement(at,null,"Description"),t.createElement(W.Text,{component:W.TextVariants.p,style:{whiteSpace:"pre-line"}},(o=e.attributes.description.replace(new RegExp("\\n(?=[^\\n])","g"),""),c=570,l=ie(Te,e.id,"Read more"),o.length>c?t.createElement(t.Fragment,null,o.substr(0,c-1),"... ",l):o)),t.createElement(nt,{link:"https://access.redhat.com/errata/".concat(e.id),text:"View packages and errata at access.redhat.com"}))}],parent:2*a}];var o,c,l})):[{heightAuto:!0,cells:[{props:{colSpan:6},title:t.createElement(tt,null)}]}]}(u,p,m)}),[u,p,m]);t.useEffect((function(){return function(){return n({type:"CLEAR_SYSTEM_ADVISORIES",payload:[]})}}),[]),t.useEffect((function(){l?(w(function(e){var t=g.parse(e),r={};return Object.keys(t).forEach((function(e){if(!e.startsWith("filter[system_profile]")){var n=t[e],a=e.search(/\[.*\]/);if(a>0){var o=e.slice(0,a),c=e.slice(a+1,-1);r[o]=re(re({},r[o]),{},Q({},c,function(e){return e.startsWith("in:")?e.slice(3).split(","):e}(n)))}else r[e]=n}})),r}(r.location.search)),s(!1)):(r.push(function(e){delete e.id;var t=re({},e);return delete t.systemProfile,delete t.selectedTags,be(t,!1)}(d)),n(function(e){return{type:"FETCH_APPLICABLE_SYSTEM_ADVISORIES",payload:new Promise((function(t){t(Xe(e))})).then((function(e){return e})),meta:{noError:!0}}}(ct({id:f.id},d))))}),[d]);var S=t.useCallback((function(e,t,r){return n(function(e){return{type:"EXPAND_SYSTEM_ADVISORY_ROW",payload:e}}({rowId:oe(u,t),value:r}))})),O=t.useCallback((function(e,t,r){var a=[];switch(e){case"none":Object.keys(m).forEach((function(e){a.push({id:e,selected:!1})})),n(Qe(a));break;case"page":u.forEach((function(e){var t=e.id;a.push({id:t,selected:t})})),n(Qe(a));break;case"all":Xe({id:f.id,limit:-1}).then((function(e){e.data.forEach((function(e){var t=e.id;a.push({id:t,selected:t})})),n(Qe(a))}));break;default:a.push({id:oe(u,r),selected:t&&oe(u,r)}),n(Qe(a))}})),E=We(He,w,2),P=t.useMemo((function(){return ne(He,y.sort,2)}),[y.sort]),_=Be(y.limit,w),j=Ve(w);function w(e){n(function(e){return{type:"CHANGE_SYSTEM_SYSTEMS_LIST_PARAMS",payload:e}}(ct({id:f.id},e)))}var T=404===h.status?t.createElement(De,null):t.createElement(Le,{message:h.detail});"rejected"===b&&404!==h.status&&n(c.addNotification({variant:"danger",title:h.title,description:h.detail}));var I=function(){return"resolved"===b&&0===y.total_items&&0===Object.keys(d).length?t.createElement(xe,null):t.createElement(ze,{columns:He,onCollapse:S,onSelect:u.length&&O||void 0,onSetPage:_,onPerPageSelect:j,onSort:E,sortBy:P,remediationProvider:function(){return ye(me(m),f.id)},selectedRows:m,systemId:f.id,apply:w,store:{rows:v,metadata:y,status:b,queryParams:d},filterConfig:{items:[Ce(w,d.search),ke(w,d.filter),Ae(w,d.filter)]}})};return t.createElement(t.Fragment,null,"rejected"===b?T:t.createElement(I,null))};lt.propTypes={history:l.object};var it=r.withRouter(lt),st=function(e){var r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).updatable;""!==r&&r||(r="0");var n=t.useMemo((function(){return je.map((function(e){var t=e.value;return{label:e.label,value:t.toString()}}))}),[]),a=function(t){e({filter:{updatable:"0"!==t&&t||""}})};return{label:"Status",type:O.conditionalFilterType.radio,filterValues:{onChange:function(e,t){a(t)},items:n,value:r}}};function ut(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ft(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ut(Object(r),!0).forEach((function(t){Q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ut(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var pt=function(){var e=i.useDispatch(),r=i.useSelector((function(e){return e.entityDetails.entity})),n=i.useSelector((function(e){return e.SystemPackageListStore.rows})),a=i.useSelector((function(e){return e.SystemPackageListStore.queryParams})),o=i.useSelector((function(e){return e.SystemPackageListStore.selectedRows})),l=i.useSelector((function(e){return e.SystemPackageListStore.metadata})),s=i.useSelector((function(e){return e.SystemPackageListStore.status})),u=i.useSelector((function(e){return e.SystemPackageListStore.error})),f=t.useMemo((function(){return function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return 0!==e.length?e.map((function(e){var t=e.updates||[],n=t[t.length-1];return{id:e.name,key:e.name,selected:void 0!==r[e.name],disableCheckbox:!n,cells:[{title:ie(Ie,e.name)},{title:e.evra},{title:n&&n.evra||e.evra},{title:le(e.updatable)},{title:e.summary}]}})):[{heightAuto:!0,cells:[{props:{colSpan:7},title:t.createElement(rt,null)}]}]}(n,o)}),[n,o]);t.useEffect((function(){return function(){return e({type:"CLEAR_SYSTEM_PACKAGES",payload:[]})}}),[]),t.useEffect((function(){e(function(e){return{type:"FETCH_APPLICABLE_SYSTEM_PACKAGES",payload:new Promise((function(t){t($e(e))})).then((function(e){return e}))}}(ft({id:r.id},a)))}),[a]);var p=t.useCallback((function(t,a,c){var l=[],i=function(e){var t=e.updates||[],r=t[t.length-1];return r&&"".concat(e.name,"-").concat(r.evra)};switch(t){case"none":Object.keys(o).forEach((function(e){l.push({id:e,selected:!1})})),e(Ze(l));break;case"page":n.forEach((function(e){l.push({id:e.name,selected:i(e)})})),e(Ze(l));break;case"all":$e({id:r.id,limit:-1}).then((function(t){t.data.forEach((function(e){var t=i(e);t&&l.push({id:e.name,selected:t})})),e(Ze(l))}));break;default:l.push({id:n[c].name,selected:a&&i(n[c])}),e(Ze(l))}}));function d(t){e(function(e){return{type:"CHANGE_SYSTEM_PACKAGES_LIST_PARAMS",payload:e}}(ft({id:r.id},t)))}var m=We(qe,d,1),y=t.useMemo((function(){return ne(qe,l.sort,1)}),[l.sort]),b=Be(l.limit,d),h=Ve(d),v=404===u.status?t.createElement(De,null):t.createElement(Le,{message:u.detail});"rejected"===s&&404!==u.status&&e(c.addNotification({variant:"danger",title:u.title,description:u.detail}));var S=function(){return"resolved"===s&&0===l.total_items&&0===Object.keys(a).length?t.createElement(xe,null):t.createElement(ze,{columns:qe,store:{rows:f,metadata:l,status:s,queryParams:a},onSelect:n.length&&p||void 0,selectedRows:o,compact:!0,onSort:m,sortBy:y,onSetPage:b,onPerPageSelect:h,remediationProvider:function(){return ye(me(o),r.id)},apply:d,filterConfig:{items:[Ce(d,a.search,"Search packages"),st(d,a.filter)]}})};return t.createElement(t.Fragment,null,"rejected"===s?v:t.createElement(S,null))},dt=function(){var e=t.useState(0),r=$(e,2),c=r[0],l=r[1];return t.createElement(a.Tabs,{activeKey:c,onSelect:function(e,t){l(t)},className:"patchTabSelect"},t.createElement(n.Tab,{eventKey:0,title:t.createElement(o.TabTitleText,null,"Advisories")},t.createElement(it,null)),t.createElement(n.Tab,{eventKey:1,title:t.createElement(o.TabTitleText,null,"Packages")},t.createElement(pt,null)))};function mt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function yt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?mt(Object(r),!0).forEach((function(t){Q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):mt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var bt=function(e,t){return e.queryParams=function(e,t){var r=re(re({},e),t);return["filter","search","limit","selectedTags"].some((function(e){return t.hasOwnProperty(e)}))&&(r.offset=0),t.hasOwnProperty("filter")&&(r.filter=re(re({},e.filter),t.filter)),r.hasOwnProperty("tags")&&r&&delete r.tags,r}(e.queryParams,t.payload),e},ht=function(e,t){var r=function(e,t){var r=[].concat(e).map((function(e){return{rowId:e.id,value:e.selected}}));return ae(t,r)}(t.payload,e.selectedRows);return yt(yt({},e),{},{selectedRows:r})},vt=function(e,t){var r=ae(e.expandedRows,[].concat(t.payload));return yt(yt({},e),{},{expandedRows:r})},St=function(e){return e.error={},e.status="loading",e},gt=function(e,t){return e.status="rejected",e.error=t.payload,e},Ot=function(e,t){return e.rows=t.payload.data,e.metadata=t.payload.meta,e.error={},e.status="resolved",e};function Et(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Pt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Et(Object(r),!0).forEach((function(t){Q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Et(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function jt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_t(Object(r),!0).forEach((function(t){Q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var wt={queryParams:{filter:{updatable:"true"}}};e.SystemAdvisoryListStore=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0,r=Pt({},e);switch(t.type){case"FETCH_APPLICABLE_SYSTEM_ADVISORIES_FULFILLED":return Ot(r,t);case"FETCH_APPLICABLE_SYSTEM_ADVISORIES_PENDING":return St(r);case"FETCH_APPLICABLE_SYSTEM_ADVISORIES_REJECTED":return gt(r,t);case"CHANGE_SYSTEM_SYSTEMS_LIST_PARAMS":return bt(r,t);case"EXPAND_SYSTEM_ADVISORY_ROW":return vt(r,t);case"SELECT_SYSTEM_ADVISORY_ROW":return ht(r,t);case"CLEAR_SYSTEM_ADVISORIES":return Ee;case"TRIGGER_GLOBAL_FILTER":return bt(r,t);default:return e}},e.SystemPackageListStore=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt(jt({},Ee),wt),t=arguments.length>1?arguments[1]:void 0,r=jt({},e);switch(t.type){case"FETCH_APPLICABLE_SYSTEM_PACKAGES_FULFILLED":return Ot(r,t);case"FETCH_APPLICABLE_SYSTEM_PACKAGES_PENDING":return St(r);case"FETCH_APPLICABLE_SYSTEM_PACKAGES_REJECTED":return gt(r,t);case"CHANGE_SYSTEM_PACKAGES_LIST_PARAMS":return bt(r,t);case"SELECT_SYSTEM_PACKAGES_ROW":return ht(r,t);case"CLEAR_SYSTEM_PACKAGES":return jt(jt({},Ee),wt);case"TRIGGER_GLOBAL_FILTER":return bt(r,t);default:return e}},e.default=function(e){return t.createElement(r.BrowserRouter,null,t.createElement(dt,e))},Object.defineProperty(e,"__esModule",{value:!0})}(t,r(0),r(972),r(568),r(567),r(569),r(1078),r(12),r(42),r(243),r(1024),r(1025),r(979),r(1115),r(1116),r(211),r(64),r(396),r(1117),r(1029),r(1129),r(243),r(422),r(1134),r(542),r(543),r(1135),r(537),r(1393),r(539),r(210),r(1394),r(178),r(210),r(1136),r(1189),r(544),r(545),r(1395),r(546),r(163),r(1137),r(1034),r(1005),r(153),r(1401))}}]);
//# sourceMappingURL=sourcemaps/vendors~inventory-patch.js.map