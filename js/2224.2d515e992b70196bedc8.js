(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[2224],{91491:(e,t,n)=>{"use strict";t.M5=t.oo=t.lY=void 0;const a=n(70655),o=a.__importStar(n(77865)),r=a.__importDefault(n(27708)),i=n(91941),l=n(27336),s=n(8045),c=n(80997),d=n(60738),u=n(50207),p=n(27504);t.lY=(e,t)=>{const n=e.currentTarget.parentElement,a=document.createElement("textarea");a.value=t.toString(),n.appendChild(a),a.select(),document.execCommand("copy"),n.removeChild(a)},function(e){e.inline="inline",e.expansion="expansion"}(t.oo||(t.oo={}));class m extends o.Component{constructor(e){super(e),this.timer=null,this.componentDidUpdate=(e,t)=>{e.children!==this.props.children&&this.updateText(this.props.children)},this.expandContent=e=>{this.setState((e=>({expanded:!e.expanded})))},this.updateText=e=>{this.setState({text:e}),this.props.onChange(e)},this.render=()=>{const e=this.props,{isExpanded:t,onChange:n,isReadOnly:s,isCode:m,exitDelay:g,maxWidth:b,entryDelay:f,switchDelay:C,onCopy:A,hoverTip:y,clickTip:h,textAriaLabel:v,toggleAriaLabel:_,variant:x,position:k,className:E}=e,B=a.__rest(e,["isExpanded","onChange","isReadOnly","isCode","exitDelay","maxWidth","entryDelay","switchDelay","onCopy","hoverTip","clickTip","textAriaLabel","toggleAriaLabel","variant","position","className"]);return o.createElement("div",Object.assign({className:i.css(r.default.clipboardCopy,this.state.expanded&&r.default.modifiers.expanded,E)},B),o.createElement(c.GenerateId,{prefix:""},(e=>o.createElement(o.Fragment,null,o.createElement("div",{className:i.css(r.default.clipboardCopyGroup)},"expansion"===x&&o.createElement(u.ClipboardCopyToggle,{isExpanded:this.state.expanded,onClick:this.expandContent,id:`toggle--${e}`,textId:`text-input--${e}`,contentId:`content--${e}`,"aria-label":_}),o.createElement(l.TextInput,{isReadOnly:s||this.state.expanded,onChange:this.updateText,value:this.state.text,id:`text-input-${e}`,"aria-label":v}),o.createElement(d.ClipboardCopyButton,{exitDelay:g,entryDelay:f,maxWidth:b,position:k,id:`copy-button-${e}`,textId:`text-input-${e}`,"aria-label":y,onClick:e=>{this.timer&&(window.clearTimeout(this.timer),this.setState({copied:!1})),A(e,this.state.text),this.setState({copied:!0},(()=>{this.timer=window.setTimeout((()=>{this.setState({copied:!1}),this.timer=null}),C)}))}},this.state.copied?h:y)),this.state.expanded&&o.createElement(p.ClipboardCopyExpanded,{isReadOnly:s,isCode:m,id:`content-${e}`,onChange:this.updateText},this.state.text)))))},this.state={text:this.props.children,expanded:this.props.isExpanded,copied:!1}}}t.M5=m,m.displayName="ClipboardCopy",m.defaultProps={hoverTip:"Copy to clipboard",clickTip:"Successfully copied to clipboard!",isReadOnly:!1,isExpanded:!1,isCode:!1,variant:"inline",position:s.TooltipPosition.top,maxWidth:"150px",exitDelay:1600,entryDelay:100,switchDelay:2e3,onCopy:t.lY,onChange:()=>{},textAriaLabel:"Copyable input",toggleAriaLabel:"Show content"}},60738:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClipboardCopyButton=void 0;const a=n(70655),o=a.__importStar(n(77865)),r=a.__importDefault(n(10141)),i=n(16396),l=n(8045);t.ClipboardCopyButton=e=>{var{onClick:t,exitDelay:n=100,entryDelay:s=100,maxWidth:c="100px",position:d="top","aria-label":u="Copyable input",id:p,textId:m,children:g}=e,b=a.__rest(e,["onClick","exitDelay","entryDelay","maxWidth","position","aria-label","id","textId","children"]);return o.createElement(l.Tooltip,{trigger:"mouseenter focus click",exitDelay:n,entryDelay:s,maxWidth:c,position:d,content:o.createElement("div",null,g)},o.createElement(i.Button,Object.assign({type:"button",variant:"control",onClick:t,"aria-label":u,id:p,"aria-labelledby":`${p} ${m}`},b),o.createElement(r.default,null)))},t.ClipboardCopyButton.displayName="ClipboardCopyButton"},27504:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClipboardCopyExpanded=void 0;const a=n(70655),o=a.__importStar(n(77865)),r=a.__importDefault(n(27708)),i=n(91941);class l extends o.Component{constructor(e){super(e)}render(){const e=this.props,{className:t,children:n,onChange:l,isReadOnly:s,isCode:c}=e,d=a.__rest(e,["className","children","onChange","isReadOnly","isCode"]);return o.createElement("div",Object.assign({suppressContentEditableWarning:!0,className:i.css(r.default.clipboardCopyExpandableContent,t),onInput:e=>l(e.target.innerText,e),contentEditable:!s},d),c?o.createElement("pre",null,n):n)}}t.ClipboardCopyExpanded=l,l.displayName="ClipboardCopyExpanded",l.defaultProps={onChange:()=>{},className:"",isReadOnly:!1,isCode:!1}},50207:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClipboardCopyToggle=void 0;const a=n(70655),o=a.__importStar(n(77865)),r=a.__importDefault(n(95511)),i=a.__importDefault(n(81875)),l=n(16396);t.ClipboardCopyToggle=e=>{var{onClick:t,id:n,textId:s,contentId:c,isExpanded:d=!1}=e,u=a.__rest(e,["onClick","id","textId","contentId","isExpanded"]);return o.createElement(l.Button,Object.assign({type:"button",variant:"control",onClick:t,id:n,"aria-labelledby":`${n} ${s}`,"aria-controls":`${n} ${c}`,"aria-expanded":d},u),d?o.createElement(i.default,{"aria-hidden":"true"}):o.createElement(r.default,{"aria-hidden":"true"}))},t.ClipboardCopyToggle.displayName="ClipboardCopyToggle"},27336:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(70655).__exportStar(n(12282),t)},24774:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Level=void 0;const a=n(70655),o=a.__importStar(n(77865)),r=n(91941),i=a.__importDefault(n(38730));t.Level=e=>{var{hasGutter:t,className:n="",children:l=null}=e,s=a.__rest(e,["hasGutter","className","children"]);return o.createElement("div",Object.assign({},s,{className:r.css(i.default.level,t&&i.default.modifiers.gutter,n)}),l)},t.Level.displayName="Level"},80256:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LevelItem=void 0;const a=n(70655),o=a.__importStar(n(77865));t.LevelItem=e=>{var{children:t=null}=e,n=a.__rest(e,["children"]);return o.createElement("div",Object.assign({},n),t)},t.LevelItem.displayName="LevelItem"},81159:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Stack=void 0;const a=n(70655),o=a.__importStar(n(77865)),r=a.__importDefault(n(75968)),i=n(91941);t.Stack=e=>{var{hasGutter:t=!1,className:n="",children:l=null,component:s="div"}=e,c=a.__rest(e,["hasGutter","className","children","component"]);const d=s;return o.createElement(d,Object.assign({},c,{className:i.css(r.default.stack,t&&r.default.modifiers.gutter,n)}),l)},t.Stack.displayName="Stack"},34023:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StackItem=void 0;const a=n(70655),o=a.__importStar(n(77865)),r=a.__importDefault(n(75968)),i=n(91941);t.StackItem=e=>{var{isFilled:t=!1,className:n="",children:l=null}=e,s=a.__rest(e,["isFilled","className","children"]);return o.createElement("div",Object.assign({},s,{className:i.css(r.default.stackItem,t&&r.default.modifiers.fill,n)}),l)},t.StackItem.displayName="StackItem"},55785:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>a});const a=(0,n(40400).IU)({name:"TagIcon",height:512,width:512,svgPath:"M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z",yOffset:0,xOffset:0})},10141:(e,t,n)=>{"use strict";t.__esModule=!0,t.CopyIconConfig={name:"CopyIcon",height:512,width:448,svgPath:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z",yOffset:0,xOffset:0},t.CopyIcon=n(35183).createIcon(t.CopyIconConfig),t.default=t.CopyIcon},72726:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(77865),o=n.n(a),r=n(45697),i=n.n(r),l=n(61084),s=n(1577),c=n(60574),d=function(e){var t=e.count,n=e.loadTags,a=e.systemId;return o().createElement("span",{onClick:function(e){return e.stopPropagation()},className:"ins-c-inventory__list-tags","data-ouia-component-id":"".concat(a,"-tag-button")},o().createElement(s.Z,{count:t,onTagClick:function(){return n(a,t)}}))};d.propTypes={count:i().number,loadTags:i().func,systemId:i().string};const u=(0,l.connect)((function(){return{}}),(function(e){return{loadTags:function(t,n){t&&(e((0,c.Ar)(!0)),e((0,c.me)(t,void 0,void 0,n)))}}}))(d)},6937:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var a=n(67154),o=n.n(a),r=n(6479),i=n.n(r),l=n(77865),s=n.n(l),c=n(45697),d=n.n(c),u=n(95249),p=n(42151),m=function(e){var t=e.cmp,n=e.hideLoader,a=e.isRbacEnabled,r=e.inventoryRef,l=e.store,c=i()(e,["cmp","hideLoader","isRbacEnabled","inventoryRef","store"]),d=(0,u.T)("inventory",["inventory:*:*","inventory:*:read","inventory:hosts:read"]).hasAccess;return void 0!==d||n?s().createElement(t,o()({},c,r&&{ref:r},{hasAccess:!a||d,store:l})):s().createElement(p.Spinner,null)};m.propTypes={cmp:d().any,inventoryRef:d().any,store:d().object,customRender:d().bool,isRbacEnabled:d().bool};const g=m},34663:(e,t,n)=>{"use strict";n.d(t,{_:()=>l,C:()=>c});var a=n(87757),o=n.n(a),r=n(48926),i=n.n(r);function l(){return s.apply(this,arguments)}function s(){return(s=i()(o().mark((function e(){var t,n,a,r,i,l,s,c,d=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=d.length>0&&void 0!==d[0]?d[0]:"",s=window.insights,e.next=4,null==s||null===(t=s.chrome)||void 0===t||null===(n=t.auth)||void 0===n?void 0:n.getUser();case 4:return c=e.sent,e.t0=(null==c||null===(a=c.identity)||void 0===a||null===(r=a.user)||void 0===r?void 0:r.is_org_admin)||!1,e.next=8,null==s||null===(i=s.chrome)||void 0===i?void 0:i.getUserPermissions(l);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1=null;case 11:return e.t2=e.t1,e.abrupt("return",{isOrgAdmin:e.t0,permissions:e.t2});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e,t){return!!e&&e.some((function(e){return t.includes((null==e?void 0:e.permission)||e)}))}},95249:(e,t,n)=>{"use strict";n.d(t,{T:()=>u});var a=n(87757),o=n.n(a),r=n(48926),i=n.n(r),l=n(63038),s=n.n(l),c=n(77865),d=n(34663);function u(e,t){var n=(0,c.useState)({isLoading:!0}),a=s()(n,2),r=a[0],l=a[1];return(0,c.useEffect)((function(){l({isLoading:!0}),i()(o().mark((function n(){var a,r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,d._)(e);case 2:a=n.sent,r=a.isOrgAdmin,i=a.permissions,l({isLoading:!1,isOrgAdmin:r,permissions:i,hasAccess:(0,d.C)(i,t)});case 6:case"end":return n.stop()}}),n)})))()}),[e]),r}},92223:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var a=n(67154),o=n.n(a),r=n(59713),i=n.n(r),l=n(6479),s=n.n(l),c=n(77865),d=n.n(c),u=n(45697),p=n.n(u),m=n(94184),g=n.n(m),b=(n(91882),function(e){var t=e.centered,n=e.className,a=e.children,r=s()(e,["centered","className","children"]),l=g()("ins-c-table__empty",i()({},"is-centered",t),n);return d().createElement("div",o()({className:l},r)," ",a)});const f=b;b.propTypes={centered:p().bool,children:p().any,className:p().string}},56455:(e,t,n)=>{"use strict";n.d(t,{i:()=>b,Z:()=>C});var a=n(67154),o=n.n(a),r=n(59713),i=n.n(r),l=n(6479),s=n.n(l),c=n(77865),d=n.n(c),u=n(45697),p=n.n(u),m=n(94184),g=n.n(m),b=(n(17898),{xs:"xs",sm:"sm",md:"md",lg:"lg"}),f=function(e){var t=e.size,n=e.isDark,a=e.className,r=s()(e,["size","isDark","className"]),l=g()("ins-c-skeleton","ins-c-skeleton__".concat(t),i()({},"ins-m-dark",n),a);return d().createElement("div",o()({className:l},r)," ")};const C=f;f.propTypes={className:p().string,size:p().oneOf(Object.values(b)),isDark:p().bool},f.defaultProps={size:b.md,isDark:!1}},75959:(e,t,n)=>{"use strict";n.d(t,{Z:()=>T});var a=n(319),o=n.n(a),r=n(34575),i=n.n(r),l=n(93913),s=n.n(l),c=n(81506),d=n.n(c),u=n(2205),p=n.n(u),m=n(78585),g=n.n(m),b=n(29754),f=n.n(b),C=n(59713),A=n.n(C),y=n(77865),h=n.n(y),v=n(66918),_=n(56455),x=n(45697),k=n.n(x);function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=f()(e);if(t){var o=f()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return g()(this,n)}}var B=function(e){p()(n,e);var t=E(n);function n(){var e;i()(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return e=t.call.apply(t,[this].concat(r)),A()(d()(e),"createColumns",(function(){var t=e.props.colSize;return o()(Array(t)).map((function(){return{title:h().createElement(_.Z,{size:_.i.sm})}}))})),A()(d()(e),"getColumns",(function(){var t=e.props,n=t.paddingColumnSize,a=t.columns;return e.newArray(n).map((function(){return""})).concat(a||e.createColumns())})),A()(d()(e),"createRows",(function(){var t=e.props,n=t.colSize,a=t.rowSize,o=t.columns,r=t.paddingColumnSize,i=o?o.length:n;return e.newArray(a).map((function(){return{disableSelection:!0,cells:e.newArray(r).map((function(){return""})).concat(e.newArray(i).map((function(){return{title:h().createElement(_.Z,{size:_.i.md})}})))}}))})),A()(d()(e),"selectVariant",(function(){return e.props.hasRadio?(null===v.RowSelectVariant||void 0===v.RowSelectVariant?void 0:v.RowSelectVariant.radio)||"radio":(null===v.RowSelectVariant||void 0===v.RowSelectVariant?void 0:v.RowSelectVariant.checkbox)||"checkbox"})),A()(d()(e),"newArray",(function(e){return o()(Array(e))})),e}return s()(n,[{key:"render",value:function(){var e=this.props,t=e.canSelectAll,n=e.isSelectable,a=e.sortBy;return h().createElement(v.Table,{cells:this.getColumns(),rows:this.createRows(),sortBy:a,"aria-label":"Loading",onSelect:n,selectVariant:n?this.selectVariant():null,canSelectAll:t},h().createElement(v.TableHeader,null),h().createElement(v.TableBody,null))}}]),n}(h().Component);B.propTypes={colSize:k().number,rowSize:k().number,columns:k().array,paddingColumnSize:k().number,sortBy:k().shape({index:k().number,direction:k().oneOf(["asc","desc"])}),isSelectable:k().bool,canSelectAll:k().bool,hasRadio:k().bool},B.defaultProps={rowSize:0,paddingColumnSize:0,canSelectAll:!1,isSelectable:!1,hasRadio:!1};const T=B},32875:(e,t,n)=>{"use strict";n.d(t,{Z:()=>C});var a=n(67154),o=n.n(a),r=n(59713),i=n.n(r),l=n(6479),s=n.n(l),c=n(77865),d=n.n(c),u=n(45697),p=n.n(u),m=n(62894),g=n(94184),b=n.n(g);n(52294);var f=function(e){var t=e.isFooter,n=e.results,a=e.className,r=e.selected,l=e.children,u=s()(e,["isFooter","results","className","selected","children"]),p=b()("ins-c-table__toolbar",i()({},"ins-m-footer",t),a);return d().createElement(c.Fragment,null,d().createElement(m.o,o()({className:p},u)," ",l),(n>=0||r>=0)&&d().createElement("div",{className:"ins-c-table__toolbar-results"},n>=0&&d().createElement("span",{className:"ins-c-table__toolbar-results-count"}," ",function(e){return"".concat(e,e>1||e<1?" Results":" Result")}(n)," "),r>=0&&d().createElement("span",{className:"ins-c-table__toolbar-results-selected"}," ",r," Selected ")))};const C=f;f.propTypes={isFooter:p().bool,results:p().number,children:p().any,className:p().string,selected:p().number},f.defaultProps={isFooter:!1}},1577:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var a=n(67154),o=n.n(a),r=n(6479),i=n.n(r),l=n(77865),s=n.n(l),c=n(45697),d=n.n(c),u=(n(45605),n(94184)),p=n.n(u),m=n(47173),g=n(55785),b=function(e){var t=e.count,n=e.onTagClick,a=e.className,r=i()(e,["count","onTagClick","className"]);return s().createElement(m.Button,o()({},r,{variant:"plain",isDisabled:!t,className:p()("ins-c-tag-count",a),onClick:n}),s().createElement(g.ZP,{size:"md"}),s().createElement("span",{className:"ins-c-tag__text"},t))};b.propTypes={count:d().number,onTagClick:d().func,className:d().string},b.defaultProps={onTagClick:function(){}};const f=b},36988:(e,t,n)=>{"use strict";n.d(t,{Z:()=>B});var a=n(67154),o=n.n(a),r=n(59713),i=n.n(r),l=n(319),s=n.n(l),c=n(77865),d=n.n(c),u=n(32265),p=n(52643),m=n(9947),g=n(60485),b=n(75106),f=n(45697),C=n(66918),A=n(92223),y=n(32875),h=n(81790),v=n(56455),_=n(75959);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e){var t=e.rows,n=e.onSelect,a=e.selected,r=e.onUpdateData,i=e.pagination,l=e.loaded,f=e.calculateChecked,x=e.unique,E=e.filters,B=e.primaryToolbarProps,T=e.children,S=e.title,P=e.systemName,w=e.columns,N=e.tableProps,O=e.entityName;return d().createElement(c.Fragment,null,r&&d().createElement(h.Z,o()({},n&&i&&{bulkSelect:{count:null==a?void 0:a.length,onSelect:function(e){n(e?null==x?void 0:x([].concat(s()(t),s()(a))):a.filter((function(e){var n=e.id;return!t.find((function(e){return e.id===n}))})))},checked:l&&(null==f?void 0:f(t,a)),items:[{title:"Select none (0)",onClick:function(){return n([])}},k({},l&&(null==t?void 0:t.length)>0?{title:"Select page (".concat(t.length,")"),onClick:function(){return n(x([].concat(s()(t),s()(a))))}}:{})]}},E&&{filterConfig:{items:E}},{pagination:l?k({},i||{},{itemCount:null==i?void 0:i.count,onSetPage:function(e,t){return r(k({},i,{page:t}))},onPerPageSelect:function(e,t){return r(k({},i,{page:1,perPage:t}))}}):d().createElement(v.Z,{size:"lg"})},B)),T,l?d().createElement(C.Table,o()({"aria-label":S||"".concat(P," ").concat(O),variant:"compact",className:"ins-c-tag-modal__table",cells:w,rows:(null==t?void 0:t.length)?t:[{cells:[{title:d().createElement(A.Z,null,d().createElement(p.Bullseye,null,d().createElement(m.EmptyState,{variant:m.EmptyStateVariant.full},d().createElement(g.Title,{headingLevel:"h5",size:"lg"},"No ",O," found"),d().createElement(b.EmptyStateBody,null,"This filter criteria matches no ",O,". ",d().createElement("br",null)," Try changing your filter settings.")))),props:{colSpan:w.length}}]}]},n&&(null==t?void 0:t.length)&&{onSelect:function(e,o,r){return function(e){var o=e.isSelected,r=e.rowId,i=null==t?void 0:t[r];i&&n(o?[].concat(s()(a),[i]):a.filter((function(e){return e.id!==i.id})))}({isSelected:o,rowId:r})}},N),d().createElement(C.TableHeader,null),d().createElement(C.TableBody,null)):d().createElement(_.Z,{columns:w,rowSize:(null==i?void 0:i.perPage)||10}),r&&i&&l&&d().createElement(y.Z,{isFooter:!0,className:"ins-c-inventory__table--toolbar"},d().createElement(u.Pagination,{itemCount:null==i?void 0:i.count,perPage:null==i?void 0:i.perPage,page:(null==i?void 0:i.page)||0,variant:"bottom",onSetPage:function(e,t){return r(k({},i,{page:t}))},onPerPageSelect:function(e,t){return r(k({},i,{page:1,perPage:t}))}})))};E.propTypes={entityName:f.PropTypes.string,loaded:f.PropTypes.bool,systemName:f.PropTypes.string,rows:f.PropTypes.array,selected:f.PropTypes.array,columns:f.PropTypes.array,filters:f.PropTypes.array,pagination:f.PropTypes.shape({count:f.PropTypes.number,page:f.PropTypes.number,perPage:f.PropTypes.number}),primaryToolbarProps:f.PropTypes.object,tableProps:f.PropTypes.object,children:f.PropTypes.node,title:f.PropTypes.node,calculateChecked:f.PropTypes.func,unique:f.PropTypes.func,onSelect:f.PropTypes.func,onUpdateData:f.PropTypes.func},E.defaultProps={entityName:"tags"};const B=E},96344:(e,t,n)=>{"use strict";n.d(t,{Z:()=>z});var a=n(6479),o=n.n(a),r=n(67154),i=n.n(r),l=n(34575),s=n.n(l),c=n(93913),d=n.n(c),u=n(81506),p=n.n(u),m=n(2205),g=n.n(m),b=n(78585),f=n.n(b),C=n(29754),A=n.n(C),y=n(59713),h=n.n(y),v=n(77865),_=n.n(v),x=n(45697),k=n.n(x),E=(n(63335),n(80236)),B=n(47173),T=n(14638),S=n(48099),P=n(29873),w=n(94184),N=n.n(w),O=n(36988);function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=A()(e);if(t){var o=A()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return f()(this,n)}}var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){var n=e.id;return t&&t.find((function(e){return e.id===n}))}))?e.length>0:e.some((function(e){var n=e.id;return t&&t.find((function(e){return e.id===n}))}))&&null},G=function(e){return e.filter((function(e,t,n){var a=e.id;return n.findIndex((function(e){return e.id===a}))===t}))},R=function(e){g()(n,e);var t=D(n);function n(){var e;s()(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return e=t.call.apply(t,[this].concat(o)),h()(p()(e),"state",{selectedTab:0}),h()(p()(e),"handleTabClick",(function(t,n){e.setState({activeTabKey:n})})),h()(p()(e),"renderTable",(function(t,n,a,o,r,l,s,c){return _().createElement(O.Z,i()({},e.props,{rows:t,pagination:a,loaded:o,calculateChecked:j,unique:G,filters:r,title:e.props.title,systemName:e.props.systemName,columns:n,onSelect:s,onUpdateData:c,selected:l}),e.props.children)})),e}return d()(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.className,a=t.title,r=t.systemName,l=t.toggleModal,s=t.isOpen,c=t.rows,d=t.columns,u=(t.children,t.pagination),p=t.loaded,m=t.filters,g=t.onApply,b=t.tabNames,f=t.onSelect,C=t.onUpdateData,A=t.selected,y=o()(t,["className","title","systemName","toggleModal","isOpen","rows","columns","children","pagination","loaded","filters","onApply","tabNames","onSelect","onUpdateData","selected"]),h=Array.isArray(b);return _().createElement(E.Modal,i()({},y,{className:N()("ins-c-tag-modal",n),isOpen:s,title:a||"Tags for ".concat(r),onClose:function(e){return l(e,!1)},variant:"medium"},g&&{actions:[_().createElement(B.Button,{key:"confirm",variant:"primary",isDisabled:h?Object.values(A||{}).every((function(e){return!e||0===(null==e?void 0:e.length)})):!A||0===(null==A?void 0:A.length),onClick:function(e){g(),l(e,!0)}},"Apply ",h?"selected":"tags"),_().createElement(B.Button,{key:"cancel",variant:"link",onClick:function(e){return l(e,!1)}},"Cancel")]}),h?_().createElement(T.m,{activeKey:this.state.activeTabKey,onSelect:this.handleTabClick},b.map((function(t,n){return _().createElement(S.O,{key:n,eventKey:n,title:_().createElement(P.T,null,"All ",t)},e.renderTable(null==c?void 0:c[n],null==d?void 0:d[n],null==u?void 0:u[n],null==p?void 0:p[n],null==m?void 0:m[n],null==A?void 0:A[n],null==f?void 0:f[n],null==C?void 0:C[n]))}))):this.renderTable(c,d,u,p,m,A,f,C))}}]),n}(v.Component);R.propTypes={tabNames:k().arrayOf(k().string),loaded:k().oneOfType([k().bool,k().arrayOf(k().bool)]),title:k().string,systemName:k().string,isOpen:k().bool,toggleModal:k().func,rows:k().array,columns:k().array,className:k().string,tableProps:k().shape(h()({},k().string,k().any)),onSelect:k().oneOfType([k().func,k().arrayOf(k().func)]),onUpdateData:k().oneOfType([k().func,k().arrayOf(k().func)]),pagination:k().oneOfType([O.Z.propTypes.pagination,k().arrayOf(O.Z.propTypes.pagination)]),primaryToolbarProps:k().shape(h()({},k().string,k().any)),selected:k().array},R.defaultProps={loaded:!1,isOpen:!1,toggleModal:function(){},columns:[{title:"Name"},{title:"Tag source"}],onUpdateData:function(){},rows:[],tableProps:{},pagination:{count:10}};const z=R},80197:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(94015),o=n.n(a),r=n(23645),i=n.n(r)()(o());i.push([e.id,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.ins-c-table__empty{background:var(--pf-global--Color--light-100);border-bottom:1px solid var(--pf-global--BorderColor--light-200);padding:20px;padding:1.25rem}.ins-c-table__empty.is-centered{display:flex;justify-content:center}\n","",{version:3,sources:["webpack://./EmptyTable.css"],names:[],mappings:"AAAA,MACE,4BAAoB,CAAW,aAG/B,YAAa,CAAG,oBAGhB,6CAA8C,CAC9C,gEAAiE,CACjE,YAAa,CACb,eAAgB,CAAG,gCAEjB,YAAa,CACb,sBAAuB",sourcesContent:[":root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\n.ins-c-table__empty {\n  background: var(--pf-global--Color--light-100);\n  border-bottom: 1px solid var(--pf-global--BorderColor--light-200);\n  padding: 20px;\n  padding: 1.25rem; }\n  .ins-c-table__empty.is-centered {\n    display: flex;\n    justify-content: center; }\n"],sourceRoot:""}]);const l=i},69042:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(94015),o=n.n(a),r=n(23645),i=n.n(r)()(o());i.push([e.id,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.ins-c-skeleton{animation-duration:1s;animation-iteration-count:infinite;animation-name:skeletonGradient;animation-timing-function:linear;background:var(--pf-global--disabled-color--200);background:linear-gradient(to right, #f5f5f5 10%, #e8e8e8 18%, #f5f5f5 33%);background-size:1000px 50px;background-size:62.5rem 3.125rem;border-radius:5px;border-radius:0.3125rem}.ins-c-skeleton__xs{width:16%}.ins-c-skeleton__sm{width:33%}.ins-c-skeleton__md{width:66%}.ins-c-skeleton__lg{width:100%}.ins-c-skeleton.ins-m-dark{background:#3c3c3c;background:linear-gradient(to right, #3c3c3c 10%, #484848 18%, #3c3c3c 33%);background-size:1000px 50px;background-size:62.5rem 3.125rem}@keyframes skeletonGradient{0%{background-position:-500px 0px;background-position:-31.25rem 0rem}100%{background-position:500px 0px;background-position:31.25rem 0rem}}\n","",{version:3,sources:["webpack://./skeleton.css"],names:[],mappings:"AAAA,MACE,4BAAoB,CAAW,aAG/B,YAAa,CAAG,gBAGhB,qBAAsB,CACtB,kCAAmC,CACnC,+BAAgC,CAChC,gCAAiC,CACjC,gDAAiD,CACjD,2EAA4E,CAC5E,2BAA4B,CAC5B,gCAAiC,CACjC,iBAAkB,CAClB,uBAAwB,CAAG,oBAEzB,SAAU,CAAG,oBAEb,SAAU,CAAG,oBAEb,SAAU,CAAG,oBAEb,UAAW,CAAG,2BAEd,kBAAmB,CACnB,2EAA4E,CAC5E,2BAA4B,CAC5B,gCAAiC,CAAG,4BAGtC,GACE,8BAA+B,CAC/B,kCAAmC,CACrC,KACE,6BAA8B,CAC9B,iCAAkC,CAAA",sourcesContent:[":root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\n.ins-c-skeleton {\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-name: skeletonGradient;\n  animation-timing-function: linear;\n  background: var(--pf-global--disabled-color--200);\n  background: linear-gradient(to right, #f5f5f5 10%, #e8e8e8 18%, #f5f5f5 33%);\n  background-size: 1000px 50px;\n  background-size: 62.5rem 3.125rem;\n  border-radius: 5px;\n  border-radius: 0.3125rem; }\n  .ins-c-skeleton__xs {\n    width: 16%; }\n  .ins-c-skeleton__sm {\n    width: 33%; }\n  .ins-c-skeleton__md {\n    width: 66%; }\n  .ins-c-skeleton__lg {\n    width: 100%; }\n  .ins-c-skeleton.ins-m-dark {\n    background: #3c3c3c;\n    background: linear-gradient(to right, #3c3c3c 10%, #484848 18%, #3c3c3c 33%);\n    background-size: 1000px 50px;\n    background-size: 62.5rem 3.125rem; }\n\n@keyframes skeletonGradient {\n  0% {\n    background-position: -500px 0px;\n    background-position: -31.25rem 0rem; }\n  100% {\n    background-position: 500px 0px;\n    background-position: 31.25rem 0rem; } }\n"],sourceRoot:""}]);const l=i},7903:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(94015),o=n.n(a),r=n(23645),i=n.n(r)()(o());i.push([e.id,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}:root{--ins-c-table-toolbar--PaddingVertical: 16px;--ins-c-table-toolbar--PaddingHorizontal: 32px}.ins-c-table__toolbar,.ins-c-table__toolbar-results{background:var(--pf-global--Color--light-100);border-bottom:1px solid var(--pf-global--BorderColor--light-200);padding:var(--ins-c-table-toolbar--PaddingVertical) var(--ins-c-table-toolbar--PaddingHorizontal)}.ins-c-table__toolbar.ins-m-footer{border-top:1px solid var(--pf-global--BorderColor--light-200)}.ins-c-table__toolbar-results{color:var(--pf-global--Color--200)}.ins-c-table__toolbar-results-count+.ins-c-table__toolbar-results-selected{margin-left:15px;margin-left:0.9375rem;padding-left:15px;padding-left:0.9375rem;border-left:2px solid var(--pf-global--BorderColor--light)}@media only screen and (max-width: 768px){.ins-c-table__toolbar{padding:var(--pf-global--spacer--md) var(--pf-global--spacer--md)}}\n","",{version:3,sources:["webpack://./TableToolbar.css"],names:[],mappings:"AAAA,MACE,4BAAoB,CAAW,aAG/B,YAAa,CAAG,MAGhB,4CAAuC,CACvC,8CAAyC,CAAQ,oDAGjD,6CAA8C,CAC9C,gEAAiE,CACjE,iGAAkG,CAAG,mCAGrG,6DAA8D,CAAG,8BAGjE,kCAAmC,CAAG,2EAGtC,gBAAiB,CACjB,qBAAsB,CACtB,iBAAkB,CAClB,sBAAuB,CACvB,0DAA2D,CAAG,0CAG9D,sBACE,iEAAkE,CAAG",sourcesContent:[":root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\n:root {\n  --ins-c-table-toolbar--PaddingVertical: 16px;\n  --ins-c-table-toolbar--PaddingHorizontal: 32px; }\n\n.ins-c-table__toolbar, .ins-c-table__toolbar-results {\n  background: var(--pf-global--Color--light-100);\n  border-bottom: 1px solid var(--pf-global--BorderColor--light-200);\n  padding: var(--ins-c-table-toolbar--PaddingVertical) var(--ins-c-table-toolbar--PaddingHorizontal); }\n\n.ins-c-table__toolbar.ins-m-footer {\n  border-top: 1px solid var(--pf-global--BorderColor--light-200); }\n\n.ins-c-table__toolbar-results {\n  color: var(--pf-global--Color--200); }\n\n.ins-c-table__toolbar-results-count + .ins-c-table__toolbar-results-selected {\n  margin-left: 15px;\n  margin-left: 0.9375rem;\n  padding-left: 15px;\n  padding-left: 0.9375rem;\n  border-left: 2px solid var(--pf-global--BorderColor--light); }\n\n@media only screen and (max-width: 768px) {\n  .ins-c-table__toolbar {\n    padding: var(--pf-global--spacer--md) var(--pf-global--spacer--md); } }\n"],sourceRoot:""}]);const l=i},87087:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(94015),o=n.n(a),r=n(23645),i=n.n(r)()(o());i.push([e.id,"button.ins-c-tag-count{color:var(--pf-global--icon--Color--light);display:flex;align-content:center}.ins-c-tag__text{margin-left:10px}\n","",{version:3,sources:["webpack://./tagCount.css"],names:[],mappings:"AAAA,uBACE,0CAA2C,CAC3C,YAAa,CACb,oBAAqB,CAAG,iBAGxB,gBAAiB",sourcesContent:["button.ins-c-tag-count {\n  color: var(--pf-global--icon--Color--light);\n  display: flex;\n  align-content: center; }\n\n.ins-c-tag__text {\n  margin-left: 10px; }\n"],sourceRoot:""}]);const l=i},36466:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(94015),o=n.n(a),r=n(23645),i=n.n(r)()(o());i.push([e.id,".ins-c-tag-modal{height:calc(var(--pf-global--spacer--4xl) + var(--pf-global--breakpoint--md))}\n","",{version:3,sources:["webpack://./tagModal.css"],names:[],mappings:"AAAA,iBACE,6EAA8E",sourcesContent:[".ins-c-tag-modal {\n  height: calc(var(--pf-global--spacer--4xl) + var(--pf-global--breakpoint--md)); }\n"],sourceRoot:""}]);const l=i},91882:(e,t,n)=>{"use strict";var a=n(93379),o=n.n(a),r=n(80197),i={insert:"head",singleton:!1};o()(r.Z,i),r.Z.locals},17898:(e,t,n)=>{"use strict";var a=n(93379),o=n.n(a),r=n(69042),i={insert:"head",singleton:!1};o()(r.Z,i),r.Z.locals},52294:(e,t,n)=>{"use strict";var a=n(93379),o=n.n(a),r=n(7903),i={insert:"head",singleton:!1};o()(r.Z,i),r.Z.locals},45605:(e,t,n)=>{"use strict";var a=n(93379),o=n.n(a),r=n(87087),i={insert:"head",singleton:!1};o()(r.Z,i),r.Z.locals},63335:(e,t,n)=>{"use strict";var a=n(93379),o=n.n(a),r=n(36466),i={insert:"head",singleton:!1};o()(r.Z,i),r.Z.locals}}]);
//# sourceMappingURL=sourcemaps/2224.js.map