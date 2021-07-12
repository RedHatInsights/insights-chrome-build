(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[2248],{94008:(e,t,a)=>{"use strict";a.d(t,{lY:()=>b,oo:()=>f,M5:()=>g});var o=a(70655),i=a(92950),c=a(72585),n=a(38296),p=a(92607),l=a(13342),r=a(41724),d=a(20941),s=a(44540),m=a(42606);const b=(e,t)=>{const a=e.currentTarget.parentElement,o=document.createElement("textarea");o.value=t.toString(),a.appendChild(o),o.select(),document.execCommand("copy"),a.removeChild(o)};var f;!function(e){e.inline="inline",e.expansion="expansion",e.inlineCompact="inline-compact"}(f||(f={}));class g extends i.Component{constructor(e){super(e),this.timer=null,this.componentDidUpdate=(e,t)=>{e.children!==this.props.children&&this.updateText(this.props.children)},this.expandContent=e=>{this.setState((e=>({expanded:!e.expanded})))},this.updateText=e=>{this.setState({text:e}),this.props.onChange(e)},this.render=()=>{const e=this.props,{isExpanded:t,onChange:a,isReadOnly:l,isCode:b,isBlock:f,exitDelay:g,maxWidth:y,entryDelay:u,switchDelay:h,onCopy:_,hoverTip:x,clickTip:v,textAriaLabel:C,toggleAriaLabel:k,variant:E,position:B,className:P,additionalActions:w}=e,T=(0,o.__rest)(e,["isExpanded","onChange","isReadOnly","isCode","isBlock","exitDelay","maxWidth","entryDelay","switchDelay","onCopy","hoverTip","clickTip","textAriaLabel","toggleAriaLabel","variant","position","className","additionalActions"]);return i.createElement("div",Object.assign({className:(0,n.css)(c.Z.clipboardCopy,"inline-compact"===E&&c.Z.modifiers.inline,f&&c.Z.modifiers.block,this.state.expanded&&c.Z.modifiers.expanded,P)},T),"inline-compact"===E&&i.createElement(r.w,{prefix:""},(e=>i.createElement(i.Fragment,null,!b&&i.createElement("span",{className:(0,n.css)(c.Z.clipboardCopyText),id:`text-input-${e}`},this.state.text),b&&i.createElement("code",{className:(0,n.css)(c.Z.clipboardCopyText,c.Z.modifiers.code),id:`text-input-${e}`},this.state.text),i.createElement("span",{className:(0,n.css)(c.Z.clipboardCopyActions)},i.createElement("span",{className:(0,n.css)(c.Z.clipboardCopyActionsItem)},i.createElement(d.u,{variant:"plain",exitDelay:g,entryDelay:u,maxWidth:y,position:B,id:`copy-button-${e}`,textId:`text-input-${e}`,"aria-label":x,onClick:e=>{this.timer&&(window.clearTimeout(this.timer),this.setState({copied:!1})),_(e,this.state.text),this.setState({copied:!0},(()=>{this.timer=window.setTimeout((()=>{this.setState({copied:!1}),this.timer=null}),h)}))}},this.state.copied?v:x)),w&&w)))),"inline-compact"!==E&&i.createElement(r.w,{prefix:""},(e=>i.createElement(i.Fragment,null,i.createElement("div",{className:(0,n.css)(c.Z.clipboardCopyGroup)},"expansion"===E&&i.createElement(s.i,{isExpanded:this.state.expanded,onClick:this.expandContent,id:`toggle-${e}`,textId:`text-input-${e}`,contentId:`content-${e}`,"aria-label":k}),i.createElement(p.oi,{isReadOnly:l||this.state.expanded,onChange:this.updateText,value:this.state.text,id:`text-input-${e}`,"aria-label":C}),i.createElement(d.u,{exitDelay:g,entryDelay:u,maxWidth:y,position:B,id:`copy-button-${e}`,textId:`text-input-${e}`,"aria-label":x,onClick:e=>{this.timer&&(window.clearTimeout(this.timer),this.setState({copied:!1})),_(e,this.state.text),this.setState({copied:!0},(()=>{this.timer=window.setTimeout((()=>{this.setState({copied:!1}),this.timer=null}),h)}))}},this.state.copied?v:x)),this.state.expanded&&i.createElement(m.G,{isReadOnly:l,isCode:b,id:`content-${e}`,onChange:this.updateText},this.state.text)))))},this.state={text:this.props.children,expanded:this.props.isExpanded,copied:!1}}}g.displayName="ClipboardCopy",g.defaultProps={hoverTip:"Copy to clipboard",clickTip:"Successfully copied to clipboard!",isReadOnly:!1,isExpanded:!1,isCode:!1,variant:"inline",position:l.D.top,maxWidth:"150px",exitDelay:1600,entryDelay:100,switchDelay:2e3,onCopy:b,onChange:()=>{},textAriaLabel:"Copyable input",toggleAriaLabel:"Show content",additionalActions:null}},20941:(e,t,a)=>{"use strict";a.d(t,{u:()=>l});var o=a(70655),i=a(92950),c=a(44008),n=a(47173),p=a(13342);const l=e=>{var{onClick:t,exitDelay:a=100,entryDelay:l=100,maxWidth:r="100px",position:d="top","aria-label":s="Copyable input",id:m,textId:b,children:f,variant:g="control"}=e,y=(0,o.__rest)(e,["onClick","exitDelay","entryDelay","maxWidth","position","aria-label","id","textId","children","variant"]);return i.createElement(p.u,{trigger:"mouseenter focus click",exitDelay:a,entryDelay:l,maxWidth:r,position:d,content:i.createElement("div",null,f)},i.createElement(n.zx,Object.assign({type:"button",variant:g,onClick:t,"aria-label":s,id:m,"aria-labelledby":`${m} ${b}`},y),i.createElement(c.ZP,null)))};l.displayName="ClipboardCopyButton"},42606:(e,t,a)=>{"use strict";a.d(t,{G:()=>p});var o=a(70655),i=a(92950),c=a(72585),n=a(38296);class p extends i.Component{constructor(e){super(e)}render(){const e=this.props,{className:t,children:a,onChange:p,isReadOnly:l,isCode:r}=e,d=(0,o.__rest)(e,["className","children","onChange","isReadOnly","isCode"]);return i.createElement("div",Object.assign({suppressContentEditableWarning:!0,className:(0,n.css)(c.Z.clipboardCopyExpandableContent,t),onInput:e=>p(e.target.innerText,e),contentEditable:!l},d),r?i.createElement("pre",null,a):a)}}p.displayName="ClipboardCopyExpanded",p.defaultProps={onChange:()=>{},className:"",isReadOnly:!1,isCode:!1}},44540:(e,t,a)=>{"use strict";a.d(t,{i:()=>l});var o=a(70655),i=a(92950),c=a(93174),n=a(9003),p=a(47173);const l=e=>{var{onClick:t,id:a,textId:l,contentId:r,isExpanded:d=!1}=e,s=(0,o.__rest)(e,["onClick","id","textId","contentId","isExpanded"]);return i.createElement(p.zx,Object.assign({type:"button",variant:"control",onClick:t,id:a,"aria-labelledby":`${a} ${l}`,"aria-controls":`${a} ${r}`,"aria-expanded":d},s),d?i.createElement(n.ZP,{"aria-hidden":"true"}):i.createElement(c.ZP,{"aria-hidden":"true"}))};l.displayName="ClipboardCopyToggle"},48140:(e,t,a)=>{"use strict";a.d(t,{a:()=>p});var o=a(70655),i=a(92950),c=a(38296),n=a(86192);const p=e=>{var{hasGutter:t,className:a="",children:p=null}=e,l=(0,o.__rest)(e,["hasGutter","className","children"]);return i.createElement("div",Object.assign({},l,{className:(0,c.css)(n.Z.level,t&&n.Z.modifiers.gutter,a)}),p)};p.displayName="Level"},86050:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var o=a(70655),i=a(92950);const c=e=>{var{children:t=null}=e,a=(0,o.__rest)(e,["children"]);return i.createElement("div",Object.assign({},a),t)};c.displayName="LevelItem"},49739:(e,t,a)=>{"use strict";a.d(t,{K:()=>p});var o=a(70655),i=a(92950),c=a(15957),n=a(38296);const p=e=>{var{hasGutter:t=!1,className:a="",children:p=null,component:l="div"}=e,r=(0,o.__rest)(e,["hasGutter","className","children","component"]);const d=l;return i.createElement(d,Object.assign({},r,{className:(0,n.css)(c.Z.stack,t&&c.Z.modifiers.gutter,a)}),p)};p.displayName="Stack"},83826:(e,t,a)=>{"use strict";a.d(t,{v:()=>p});var o=a(70655),i=a(92950),c=a(15957),n=a(38296);const p=e=>{var{isFilled:t=!1,className:a="",children:p=null}=e,l=(0,o.__rest)(e,["isFilled","className","children"]);return i.createElement("div",Object.assign({},l,{className:(0,n.css)(c.Z.stackItem,t&&c.Z.modifiers.fill,a)}),p)};p.displayName="StackItem"},44008:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>o});const o=(0,a(40400).IU)({name:"CopyIcon",height:512,width:448,svgPath:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z",yOffset:0,xOffset:0})},72585:(e,t,a)=>{"use strict";a(9608),t.Z={button:"pf-c-button",clipboardCopy:"pf-c-clipboard-copy",clipboardCopyActions:"pf-c-clipboard-copy__actions",clipboardCopyActionsItem:"pf-c-clipboard-copy__actions-item",clipboardCopyExpandableContent:"pf-c-clipboard-copy__expandable-content",clipboardCopyGroup:"pf-c-clipboard-copy__group",clipboardCopyText:"pf-c-clipboard-copy__text",clipboardCopyToggleIcon:"pf-c-clipboard-copy__toggle-icon",modifiers:{expanded:"pf-m-expanded",inline:"pf-m-inline",block:"pf-m-block",code:"pf-m-code"}}},86192:(e,t,a)=>{"use strict";a(94650),t.Z={level:"pf-l-level",modifiers:{gutter:"pf-m-gutter"}}},15957:(e,t,a)=>{"use strict";a(99634),t.Z={modifiers:{fill:"pf-m-fill",gutter:"pf-m-gutter"},stack:"pf-l-stack",stackItem:"pf-l-stack__item"}},40053:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var o=a(23645),i=a.n(o)()((function(e){return e[1]}));i.push([e.id,".pf-c-clipboard-copy{--pf-c-clipboard-copy__toggle-icon--Transition: .2s ease-in 0s;--pf-c-clipboard-copy--m-expanded__toggle-icon--Rotate: 90deg;--pf-c-clipboard-copy__expandable-content--PaddingTop: var(--pf-global--spacer--md);--pf-c-clipboard-copy__expandable-content--PaddingRight: var(--pf-global--spacer--md);--pf-c-clipboard-copy__expandable-content--PaddingBottom: var(--pf-global--spacer--md);--pf-c-clipboard-copy__expandable-content--PaddingLeft: var(--pf-global--spacer--md);--pf-c-clipboard-copy__expandable-content--BackgroundColor: var(--pf-global--BackgroundColor--light-100);--pf-c-clipboard-copy__expandable-content--BorderTopWidth: 0;--pf-c-clipboard-copy__expandable-content--BorderRightWidth: var(--pf-global--BorderWidth--sm);--pf-c-clipboard-copy__expandable-content--BorderBottomWidth: var(--pf-global--BorderWidth--sm);--pf-c-clipboard-copy__expandable-content--BorderLeftWidth: var(--pf-global--BorderWidth--sm);--pf-c-clipboard-copy__expandable-content--BorderColor: var(--pf-global--BorderColor--100);--pf-c-clipboard-copy__expandable-content--OutlineOffset: calc(-1 * var(--pf-global--spacer--xs));--pf-c-clipboard-copy--m-inline--PaddingTop: 0.25rem;--pf-c-clipboard-copy--m-inline--PaddingBottom: 0.3125rem;--pf-c-clipboard-copy--m-inline--PaddingLeft: var(--pf-global--spacer--xs);--pf-c-clipboard-copy--m-inline--BackgroundColor: var(--pf-global--BackgroundColor--200);--pf-c-clipboard-copy__text--m-code--FontFamily: var(--pf-global--FontFamily--monospace);--pf-c-clipboard-copy__text--m-code--FontSize: var(--pf-global--FontSize--sm);--pf-c-clipboard-copy__actions-item--MarginTop: calc(-1 * var(--pf-global--spacer--form-element));--pf-c-clipboard-copy__actions-item--MarginBottom: calc(-1 * var(--pf-global--spacer--form-element));--pf-c-clipboard-copy__actions-item--button--PaddingTop: var(--pf-global--spacer--xs);--pf-c-clipboard-copy__actions-item--button--PaddingRight: var(--pf-global--spacer--sm);--pf-c-clipboard-copy__actions-item--button--PaddingBottom: var(--pf-global--spacer--xs);--pf-c-clipboard-copy__actions-item--button--PaddingLeft: var(--pf-global--spacer--sm)}.pf-c-clipboard-copy.pf-m-expanded .pf-c-clipboard-copy__toggle-icon{transform:rotate(var(--pf-c-clipboard-copy--m-expanded__toggle-icon--Rotate))}.pf-c-clipboard-copy.pf-m-inline{display:inline;padding-top:var(--pf-c-clipboard-copy--m-inline--PaddingTop);padding-bottom:var(--pf-c-clipboard-copy--m-inline--PaddingBottom);padding-left:var(--pf-c-clipboard-copy--m-inline--PaddingLeft);white-space:nowrap;background-color:var(--pf-c-clipboard-copy--m-inline--BackgroundColor)}.pf-c-clipboard-copy.pf-m-inline.pf-m-block{display:block}.pf-c-clipboard-copy__group{display:flex}.pf-c-clipboard-copy__group>*+*{margin-left:-1px}.pf-c-clipboard-copy__toggle-icon{transition:var(--pf-c-clipboard-copy__toggle-icon--Transition)}.pf-c-clipboard-copy__expandable-content{padding:var(--pf-c-clipboard-copy__expandable-content--PaddingTop) var(--pf-c-clipboard-copy__expandable-content--PaddingRight) var(--pf-c-clipboard-copy__expandable-content--PaddingBottom) var(--pf-c-clipboard-copy__expandable-content--PaddingLeft);word-wrap:break-word;background-color:var(--pf-c-clipboard-copy__expandable-content--BackgroundColor);background-clip:padding-box;border:solid var(--pf-c-clipboard-copy__expandable-content--BorderColor);border-width:var(--pf-c-clipboard-copy__expandable-content--BorderTopWidth) var(--pf-c-clipboard-copy__expandable-content--BorderRightWidth) var(--pf-c-clipboard-copy__expandable-content--BorderBottomWidth) var(--pf-c-clipboard-copy__expandable-content--BorderLeftWidth);box-shadow:var(--pf-c-clipboard-copy__expandable-content--BoxShadow)}.pf-c-clipboard-copy__expandable-content pre{white-space:pre-wrap}.pf-c-clipboard-copy__text{word-break:break-word;white-space:normal}.pf-c-clipboard-copy__text.pf-m-code{font-family:var(--pf-c-clipboard-copy__text--m-code--FontFamily);font-size:var(--pf-c-clipboard-copy__text--m-code--FontSize)}.pf-c-clipboard-copy__actions{display:inline-flex}.pf-c-clipboard-copy__actions-item{margin-top:calc(-1 * var(--pf-c-clipboard-copy__actions-item--button--PaddingTop));margin-bottom:calc(-1 * var(--pf-c-clipboard-copy__actions-item--button--PaddingBottom))}.pf-c-clipboard-copy__actions-item .pf-c-button{--pf-c-button--PaddingTop: var(--pf-c-clipboard-copy__actions-item--button--PaddingTop);--pf-c-button--PaddingRight: var(--pf-c-clipboard-copy__actions-item--button--PaddingRight);--pf-c-button--PaddingBottom: var(--pf-c-clipboard-copy__actions-item--button--PaddingBottom);--pf-c-button--PaddingLeft: var(--pf-c-clipboard-copy__actions-item--button--PaddingLeft)}",""]);const c=i},95428:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var o=a(23645),i=a.n(o)()((function(e){return e[1]}));i.push([e.id,".pf-l-level{--pf-l-level--m-gutter--MarginRight: var(--pf-global--gutter);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.pf-l-level.pf-m-gutter>*:not(:last-child){margin-right:var(--pf-l-level--m-gutter--MarginRight)}",""]);const c=i},67145:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var o=a(23645),i=a.n(o)()((function(e){return e[1]}));i.push([e.id,".pf-l-stack{--pf-l-stack--m-gutter--MarginBottom: var(--pf-global--gutter);display:flex;flex-direction:column;height:100%}.pf-l-stack__item.pf-m-fill{flex-grow:1}.pf-l-stack.pf-m-gutter>*:not(:last-child){margin-bottom:var(--pf-l-stack--m-gutter--MarginBottom)}",""]);const c=i},9608:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>p});var o=a(93379),i=a.n(o),c=a(40053),n={insert:"head",singleton:!1};i()(c.Z,n);const p=c.Z.locals||{}},94650:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>p});var o=a(93379),i=a.n(o),c=a(95428),n={insert:"head",singleton:!1};i()(c.Z,n);const p=c.Z.locals||{}},99634:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>p});var o=a(93379),i=a.n(o),c=a(67145),n={insert:"head",singleton:!1};i()(c.Z,n);const p=c.Z.locals||{}}}]);