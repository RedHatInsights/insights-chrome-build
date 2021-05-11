(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[989],{94008:(e,t,a)=>{"use strict";a.d(t,{lY:()=>u,oo:()=>f,M5:()=>h});var r=a(70655),n=a(77865),i=a(27708),s=a(91941),l=a(92607),o=a(13342),d=a(41724),c=a(20941),p=a(44540),m=a(42606);const u=(e,t)=>{const a=e.currentTarget.parentElement,r=document.createElement("textarea");r.value=t.toString(),a.appendChild(r),r.select(),document.execCommand("copy"),a.removeChild(r)};var f;!function(e){e.inline="inline",e.expansion="expansion"}(f||(f={}));class h extends n.Component{constructor(e){super(e),this.timer=null,this.componentDidUpdate=(e,t)=>{e.children!==this.props.children&&this.updateText(this.props.children)},this.expandContent=e=>{this.setState((e=>({expanded:!e.expanded})))},this.updateText=e=>{this.setState({text:e}),this.props.onChange(e)},this.render=()=>{const e=this.props,{isExpanded:t,onChange:a,isReadOnly:o,isCode:u,exitDelay:f,maxWidth:h,entryDelay:b,switchDelay:g,onCopy:x,hoverTip:y,clickTip:v,textAriaLabel:_,toggleAriaLabel:w,variant:C,position:E,className:N}=e,B=(0,r.__rest)(e,["isExpanded","onChange","isReadOnly","isCode","exitDelay","maxWidth","entryDelay","switchDelay","onCopy","hoverTip","clickTip","textAriaLabel","toggleAriaLabel","variant","position","className"]);return n.createElement("div",Object.assign({className:(0,s.css)(i.Z.clipboardCopy,this.state.expanded&&i.Z.modifiers.expanded,N)},B),n.createElement(d.w,{prefix:""},(e=>n.createElement(n.Fragment,null,n.createElement("div",{className:(0,s.css)(i.Z.clipboardCopyGroup)},"expansion"===C&&n.createElement(p.i,{isExpanded:this.state.expanded,onClick:this.expandContent,id:`toggle--${e}`,textId:`text-input--${e}`,contentId:`content--${e}`,"aria-label":w}),n.createElement(l.oi,{isReadOnly:o||this.state.expanded,onChange:this.updateText,value:this.state.text,id:`text-input-${e}`,"aria-label":_}),n.createElement(c.u,{exitDelay:f,entryDelay:b,maxWidth:h,position:E,id:`copy-button-${e}`,textId:`text-input-${e}`,"aria-label":y,onClick:e=>{this.timer&&(window.clearTimeout(this.timer),this.setState({copied:!1})),x(e,this.state.text),this.setState({copied:!0},(()=>{this.timer=window.setTimeout((()=>{this.setState({copied:!1}),this.timer=null}),g)}))}},this.state.copied?v:y)),this.state.expanded&&n.createElement(m.G,{isReadOnly:o,isCode:u,id:`content-${e}`,onChange:this.updateText},this.state.text)))))},this.state={text:this.props.children,expanded:this.props.isExpanded,copied:!1}}}h.displayName="ClipboardCopy",h.defaultProps={hoverTip:"Copy to clipboard",clickTip:"Successfully copied to clipboard!",isReadOnly:!1,isExpanded:!1,isCode:!1,variant:"inline",position:o.D.top,maxWidth:"150px",exitDelay:1600,entryDelay:100,switchDelay:2e3,onCopy:u,onChange:()=>{},textAriaLabel:"Copyable input",toggleAriaLabel:"Show content"}},20941:(e,t,a)=>{"use strict";a.d(t,{u:()=>o});var r=a(70655),n=a(77865),i=a(44008),s=a(47173),l=a(13342);const o=e=>{var{onClick:t,exitDelay:a=100,entryDelay:o=100,maxWidth:d="100px",position:c="top","aria-label":p="Copyable input",id:m,textId:u,children:f}=e,h=(0,r.__rest)(e,["onClick","exitDelay","entryDelay","maxWidth","position","aria-label","id","textId","children"]);return n.createElement(l.u,{trigger:"mouseenter focus click",exitDelay:a,entryDelay:o,maxWidth:d,position:c,content:n.createElement("div",null,f)},n.createElement(s.zx,Object.assign({type:"button",variant:"control",onClick:t,"aria-label":p,id:m,"aria-labelledby":`${m} ${u}`},h),n.createElement(i.ZP,null)))};o.displayName="ClipboardCopyButton"},42606:(e,t,a)=>{"use strict";a.d(t,{G:()=>l});var r=a(70655),n=a(77865),i=a(27708),s=a(91941);class l extends n.Component{constructor(e){super(e)}render(){const e=this.props,{className:t,children:a,onChange:l,isReadOnly:o,isCode:d}=e,c=(0,r.__rest)(e,["className","children","onChange","isReadOnly","isCode"]);return n.createElement("div",Object.assign({suppressContentEditableWarning:!0,className:(0,s.css)(i.Z.clipboardCopyExpandableContent,t),onInput:e=>l(e.target.innerText,e),contentEditable:!o},c),d?n.createElement("pre",null,a):a)}}l.displayName="ClipboardCopyExpanded",l.defaultProps={onChange:()=>{},className:"",isReadOnly:!1,isCode:!1}},44540:(e,t,a)=>{"use strict";a.d(t,{i:()=>o});var r=a(70655),n=a(77865),i=a(93174),s=a(9003),l=a(47173);const o=e=>{var{onClick:t,id:a,textId:o,contentId:d,isExpanded:c=!1}=e,p=(0,r.__rest)(e,["onClick","id","textId","contentId","isExpanded"]);return n.createElement(l.zx,Object.assign({type:"button",variant:"control",onClick:t,id:a,"aria-labelledby":`${a} ${o}`,"aria-controls":`${a} ${d}`,"aria-expanded":c},p),c?n.createElement(s.ZP,{"aria-hidden":"true"}):n.createElement(i.ZP,{"aria-hidden":"true"}))};o.displayName="ClipboardCopyToggle"},5436:(e,t,a)=>{"use strict";a.d(t,{r:()=>l,d:()=>o});var r=a(70655),n=a(77865),i=a(51777),s=a(91941);const l=n.createContext({isExpanded:!1,isStatic:!1,onExpand:()=>{},position:"right"}),o=e=>{var{className:t="",children:a,isExpanded:o=!1,isInline:d=!1,isStatic:c=!1,position:p="right",onExpand:m=(()=>{})}=e,u=(0,r.__rest)(e,["className","children","isExpanded","isInline","isStatic","position","onExpand"]);return n.createElement(l.Provider,{value:{isExpanded:o,isStatic:c,onExpand:m,position:p}},n.createElement("div",Object.assign({className:(0,s.css)(i.default.drawer,o&&i.default.modifiers.expanded,d&&i.default.modifiers.inline,c&&i.default.modifiers.static,"left"===p&&i.default.modifiers.panelLeft,"bottom"===p&&i.default.modifiers.panelBottom,t)},u),a))};o.displayName="Drawer"},76770:(e,t,a)=>{"use strict";a.d(t,{x:()=>l});var r=a(70655),n=a(77865),i=a(51777),s=a(91941);const l=e=>{var{className:t="",children:a}=e,l=(0,r.__rest)(e,["className","children"]);return n.createElement("div",Object.assign({className:(0,s.css)(i.default.drawerActions,t)},l),a)};l.displayName="DrawerActions"},28985:(e,t,a)=>{"use strict";a.d(t,{c:()=>d});var r=a(70655),n=a(77865),i=a(51777),s=a(91941),l=a(47173),o=a(24307);const d=e=>{var{className:t="",onClose:a=(()=>{}),"aria-label":d="Close drawer panel"}=e,c=(0,r.__rest)(e,["className","onClose","aria-label"]);return n.createElement("div",Object.assign({className:(0,s.css)(i.default.drawerClose,t)},c),n.createElement(l.zx,{variant:"plain",onClick:a,"aria-label":d},n.createElement(o.ZP,null)))};d.displayName="DrawerCloseButton"},78135:(e,t,a)=>{"use strict";a.d(t,{s:()=>o});var r=a(70655),n=a(77865),i=a(51777),s=a(91941),l=a(97311);const o=e=>{var{className:t="",children:a,panelContent:o}=e,d=(0,r.__rest)(e,["className","children","panelContent"]);return n.createElement(l.j,null,n.createElement("div",Object.assign({className:(0,s.css)(i.default.drawerContent,t)},d),a),o)};o.displayName="DrawerContent"},16537:(e,t,a)=>{"use strict";a.d(t,{s:()=>l});var r=a(70655),n=a(77865),i=a(51777),s=a(91941);const l=e=>{var{className:t="",children:a,hasPadding:l=!1}=e,o=(0,r.__rest)(e,["className","children","hasPadding"]);return n.createElement("div",Object.assign({className:(0,s.css)(i.default.drawerBody,l&&i.default.modifiers.padding,t)},o),a)};l.displayName="DrawerContentBody"},58409:(e,t,a)=>{"use strict";a.d(t,{h:()=>o});var r=a(70655),n=a(77865),i=a(51777),s=a(91941),l=a(29821);const o=e=>{var{className:t="",children:a,hasNoPadding:o=!1}=e,d=(0,r.__rest)(e,["className","children","hasNoPadding"]);return n.createElement(l.F,{hasNoPadding:o},n.createElement("div",Object.assign({className:(0,s.css)(i.default.drawerHead,t)},d),a))};o.displayName="DrawerHead"},97311:(e,t,a)=>{"use strict";a.d(t,{j:()=>l});var r=a(70655),n=a(77865),i=a(51777),s=a(91941);const l=e=>{var{className:t="",children:a}=e,l=(0,r.__rest)(e,["className","children"]);return n.createElement("div",Object.assign({className:(0,s.css)(i.default.drawerMain,t)},l),a)};l.displayName="DrawerMain"},29821:(e,t,a)=>{"use strict";a.d(t,{F:()=>l});var r=a(70655),n=a(77865),i=a(51777),s=a(91941);const l=e=>{var{className:t="",children:a,hasNoPadding:l=!1}=e,o=(0,r.__rest)(e,["className","children","hasNoPadding"]);return n.createElement("div",Object.assign({className:(0,s.css)(i.default.drawerBody,l&&i.default.modifiers.noPadding,t)},o),a)};l.displayName="DrawerPanelBody"},16941:(e,t,a)=>{"use strict";a.d(t,{S:()=>p});var r=a(70655),n=a(77865),i=a(51777),s=a(91941),l=a(5436),o=a(80164);let d=null,c=0;const p=e=>{var{className:t="",id:a,children:p,hasNoBorder:m=!1,isResizable:u=!1,onResize:f,minSize:h,defaultSize:b,maxSize:g,increment:x=5,resizeAriaLabel:y="Resize",resizeAriaDescribedBy:v="Press space to begin resizing, and use the arrow keys to grow or shrink the panel. Press enter or escape to finish resizing.",widths:_}=e,w=(0,r.__rest)(e,["className","id","children","hasNoBorder","isResizable","onResize","minSize","defaultSize","maxSize","increment","resizeAriaLabel","resizeAriaDescribedBy","widths"]);const C=n.useRef(),{position:E,isExpanded:N,isStatic:B,onExpand:D}=n.useContext(l.r);let P,k,z,O,S=0,R=!0;const W=n.useCallback((e=>{if(!d)return;R&&(P=C.current.getBoundingClientRect(),k=P.right,z=P.left,O=P.bottom,R=!1);const t="bottom"===E?e.clientY:e.clientX;let a=0;a="right"===E?k-t:"left"===E?t-z:O-t,"bottom"===E&&(C.current.style.overflowAnchor="none"),C.current.style.setProperty("transition","transform 5ms cubic-bezier(0.4, 0, 1, 1) 0ms"),C.current.style.setProperty("--pf-c-drawer__panel--md--FlexBasis",a+"px"),S=a}),[]),L=n.useCallback((()=>{d&&(C.current.parentElement.classList.remove("pf-m-drawer-resizing"),d=!1,f&&f(S,a),R=!0,document.removeEventListener("mousemove",W),document.removeEventListener("mouseup",L))}),[]),A=!B&&!N,T={};return b&&(T["--pf-c-drawer__panel--md--FlexBasis"]=b),h&&(T["--pf-c-drawer__panel--md--FlexBasis--min"]=h),g&&(T["--pf-c-drawer__panel--md--FlexBasis--max"]=g),n.createElement("div",Object.assign({id:a,className:(0,s.css)(i.default.drawerPanel,u&&i.default.modifiers.resizable,m&&i.default.modifiers.noBorder,(0,o.wt)(_,i.default),t),ref:C,onTransitionEnd:e=>{A||"transform"!==e.nativeEvent.propertyName||D()},hidden:A},(b||h||g)&&{style:T},w),n.createElement(n.Fragment,null,u&&n.createElement(n.Fragment,null,n.createElement("div",{className:(0,s.css)(i.default.drawerSplitter,"bottom"!==E&&i.default.modifiers.vertical),role:"separator",tabIndex:0,"aria-orientation":"bottom"===E?"horizontal":"vertical","aria-label":y,"aria-describedby":v,onMouseDown:e=>{e.stopPropagation(),e.preventDefault(),document.addEventListener("mousemove",W),document.addEventListener("mouseup",L),C.current.parentElement.classList.add("pf-m-drawer-resizing"),d=!0,R=!0},onKeyDown:e=>{const t=e.key;if(" "===t||"Escape"===t||"Enter"===t||"ArrowUp"===t||"ArrowDown"===t||"ArrowLeft"===t||"ArrowRight"===t){if(e.preventDefault()," "===t||"Escape"===t||"Enter"===t){" "===t?d=!0:(d=!1,f&&f(S,a));const e=C.current.getBoundingClientRect();c="bottom"===E?e.height:e.width}if(d){let e=0;"ArrowRight"===t?e="left"===E?x:-x:"ArrowLeft"===t?e="left"===E?-x:x:"ArrowUp"===t?e=x:"ArrowDown"===t&&(e=-x),c+=e,"bottom"===E&&(C.current.style.overflowAnchor="none"),C.current.style.setProperty("transition","transform 5ms cubic-bezier(0.4, 0, 1, 1) 0ms"),C.current.style.setProperty("--pf-c-drawer__panel--md--FlexBasis",c+"px"),S=c}}else d&&e.preventDefault()}},n.createElement("div",{className:(0,s.css)(i.default.drawerSplitterHandle),"aria-hidden":!0})),n.createElement("div",{className:(0,s.css)(i.default.drawerPanelMain)},p)),!u&&p))};p.displayName="DrawerPanelContent"},28191:(e,t,a)=>{"use strict";a.d(t,{k:()=>o});var r=a(70655),n=a(77865),i=a(91941),s=a(69341),l=a(80164);const o=e=>{var{children:t=null,className:a="",spacer:o,spaceItems:d,grow:c,shrink:p,flex:m,direction:u,alignItems:f,alignContent:h,alignSelf:b,align:g,justifyContent:x,display:y,fullWidth:v,flexWrap:_}=e,w=(0,r.__rest)(e,["children","className","spacer","spaceItems","grow","shrink","flex","direction","alignItems","alignContent","alignSelf","align","justifyContent","display","fullWidth","flexWrap"]);return n.createElement("div",Object.assign({className:(0,i.css)(s.default.flex,(0,l.wt)(o,s.default),(0,l.wt)(d,s.default),(0,l.wt)(c,s.default),(0,l.wt)(p,s.default),(0,l.wt)(m,s.default),(0,l.wt)(u,s.default),(0,l.wt)(f,s.default),(0,l.wt)(h,s.default),(0,l.wt)(b,s.default),(0,l.wt)(g,s.default),(0,l.wt)(x,s.default),(0,l.wt)(y,s.default),(0,l.wt)(v,s.default),(0,l.wt)(_,s.default),a)},w),t)};o.displayName="Flex"},92298:(e,t,a)=>{"use strict";a.d(t,{B:()=>o});var r=a(70655),n=a(77865),i=a(91941),s=a(69341),l=a(80164);const o=e=>{var{children:t=null,className:a="",spacer:o,grow:d,shrink:c,flex:p,alignSelf:m,align:u,fullWidth:f}=e,h=(0,r.__rest)(e,["children","className","spacer","grow","shrink","flex","alignSelf","align","fullWidth"]);return n.createElement("div",Object.assign({},h,{className:(0,i.css)((0,l.wt)(o,s.default),(0,l.wt)(d,s.default),(0,l.wt)(c,s.default),(0,l.wt)(p,s.default),(0,l.wt)(m,s.default),(0,l.wt)(u,s.default),(0,l.wt)(f,s.default),a)}),t)};o.displayName="FlexItem"},48140:(e,t,a)=>{"use strict";a.d(t,{a:()=>l});var r=a(70655),n=a(77865),i=a(91941),s=a(38730);const l=e=>{var{hasGutter:t,className:a="",children:l=null}=e,o=(0,r.__rest)(e,["hasGutter","className","children"]);return n.createElement("div",Object.assign({},o,{className:(0,i.css)(s.Z.level,t&&s.Z.modifiers.gutter,a)}),l)};l.displayName="Level"},86050:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(70655),n=a(77865);const i=e=>{var{children:t=null}=e,a=(0,r.__rest)(e,["children"]);return n.createElement("div",Object.assign({},a),t)};i.displayName="LevelItem"},27708:(e,t,a)=>{"use strict";a(51128),t.Z={clipboardCopy:"pf-c-clipboard-copy",clipboardCopyExpandableContent:"pf-c-clipboard-copy__expandable-content",clipboardCopyGroup:"pf-c-clipboard-copy__group",clipboardCopyToggleIcon:"pf-c-clipboard-copy__toggle-icon",modifiers:{expanded:"pf-m-expanded"}}},38730:(e,t,a)=>{"use strict";a(88087),t.Z={level:"pf-l-level",modifiers:{gutter:"pf-m-gutter"}}},44008:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>r});const r=(0,a(40400).IU)({name:"CopyIcon",height:512,width:448,svgPath:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z",yOffset:0,xOffset:0})},36039:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(23645),n=a.n(r)()((function(e){return e[1]}));n.push([e.id,".pf-c-clipboard-copy{--pf-c-clipboard-copy__toggle-icon--Transition: .2s ease-in 0s;--pf-c-clipboard-copy--m-expanded__toggle-icon--Rotate: 90deg;--pf-c-clipboard-copy__expandable-content--PaddingTop: var(--pf-global--spacer--md);--pf-c-clipboard-copy__expandable-content--PaddingRight: var(--pf-global--spacer--md);--pf-c-clipboard-copy__expandable-content--PaddingBottom: var(--pf-global--spacer--md);--pf-c-clipboard-copy__expandable-content--PaddingLeft: var(--pf-global--spacer--md);--pf-c-clipboard-copy__expandable-content--BackgroundColor: var(--pf-global--BackgroundColor--light-100);--pf-c-clipboard-copy__expandable-content--BorderTopWidth: 0;--pf-c-clipboard-copy__expandable-content--BorderRightWidth: var(--pf-global--BorderWidth--sm);--pf-c-clipboard-copy__expandable-content--BorderBottomWidth: var(--pf-global--BorderWidth--sm);--pf-c-clipboard-copy__expandable-content--BorderLeftWidth: var(--pf-global--BorderWidth--sm);--pf-c-clipboard-copy__expandable-content--BorderColor: var(--pf-global--BorderColor--100);--pf-c-clipboard-copy__expandable-content--OutlineOffset: calc(-1 * var(--pf-global--spacer--xs))}.pf-c-clipboard-copy.pf-m-expanded .pf-c-clipboard-copy__toggle-icon{transform:rotate(var(--pf-c-clipboard-copy--m-expanded__toggle-icon--Rotate))}.pf-c-clipboard-copy__group{display:flex}.pf-c-clipboard-copy__group>*+*{margin-left:-1px}.pf-c-clipboard-copy__toggle-icon{transition:var(--pf-c-clipboard-copy__toggle-icon--Transition)}.pf-c-clipboard-copy__expandable-content{padding:var(--pf-c-clipboard-copy__expandable-content--PaddingTop) var(--pf-c-clipboard-copy__expandable-content--PaddingRight) var(--pf-c-clipboard-copy__expandable-content--PaddingBottom) var(--pf-c-clipboard-copy__expandable-content--PaddingLeft);word-wrap:break-word;background-color:var(--pf-c-clipboard-copy__expandable-content--BackgroundColor);background-clip:padding-box;border:solid var(--pf-c-clipboard-copy__expandable-content--BorderColor);border-width:var(--pf-c-clipboard-copy__expandable-content--BorderTopWidth) var(--pf-c-clipboard-copy__expandable-content--BorderRightWidth) var(--pf-c-clipboard-copy__expandable-content--BorderBottomWidth) var(--pf-c-clipboard-copy__expandable-content--BorderLeftWidth);box-shadow:var(--pf-c-clipboard-copy__expandable-content--BoxShadow)}.pf-c-clipboard-copy__expandable-content pre{white-space:pre-wrap}\n",""]);const i=n},8183:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(23645),n=a.n(r)()((function(e){return e[1]}));n.push([e.id,".pf-l-level{--pf-l-level--m-gutter--MarginRight: var(--pf-global--gutter);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.pf-l-level.pf-m-gutter>*:not(:last-child){margin-right:var(--pf-l-level--m-gutter--MarginRight)}\n",""]);const i=n},51128:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var r=a(93379),n=a.n(r),i=a(36039),s={insert:"head",singleton:!1};n()(i.Z,s);const l=i.Z.locals||{}},88087:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var r=a(93379),n=a.n(r),i=a(8183),s={insert:"head",singleton:!1};n()(i.Z,s);const l=i.Z.locals||{}}}]);