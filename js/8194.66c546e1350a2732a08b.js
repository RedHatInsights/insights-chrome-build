(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[8194],{47173:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ButtonVariant:()=>i,ButtonType:()=>a,Button:()=>u});var i,a,s=n(70655),o=n(77865),r=n(22715),l=n(91941),c=n(2372),d=n(67366);!function(e){e.primary="primary",e.secondary="secondary",e.tertiary="tertiary",e.danger="danger",e.warning="warning",e.link="link",e.plain="plain",e.control="control"}(i||(i={})),function(e){e.button="button",e.submit="submit",e.reset="reset"}(a||(a={}));const u=e=>{var{children:t=null,className:n="",component:p="button",isActive:m=!1,isBlock:f=!1,isDisabled:h=!1,isAriaDisabled:g=!1,isLoading:b=null,spinnerAriaValueText:y,isSmall:v=!1,isLarge:C=!1,inoperableEvents:x=["onClick","onKeyPress"],isInline:I=!1,type:T=a.button,variant:w=i.primary,iconPosition:D="left","aria-label":E=null,icon:N=null,ouiaId:O,ouiaSafe:R=!0,tabIndex:L=null}=e,A=(0,s.__rest)(e,["children","className","component","isActive","isBlock","isDisabled","isAriaDisabled","isLoading","spinnerAriaValueText","isSmall","isLarge","inoperableEvents","isInline","type","variant","iconPosition","aria-label","icon","ouiaId","ouiaSafe","tabIndex"]);const P=(0,d.useOUIAProps)(u.displayName,O,R,w),$=p,B="button"===$,S=I&&"span"===$;const k=x.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:e=>{e.preventDefault()}})),{});return o.createElement($,Object.assign({},A,g?k:null,{"aria-disabled":h||g,"aria-label":E,className:(0,l.css)(r.default.button,r.default.modifiers[w],f&&r.default.modifiers.block,h&&r.default.modifiers.disabled,g&&r.default.modifiers.ariaDisabled,m&&r.default.modifiers.active,I&&w===i.link&&r.default.modifiers.inline,null!==b&&r.default.modifiers.progress,b&&r.default.modifiers.inProgress,v&&r.default.modifiers.small,C&&r.default.modifiers.displayLg,n),disabled:B?h:null,tabIndex:null!==L?L:h?B?null:-1:g?null:S?0:void 0,type:B||S?T:null,role:S?"button":null},P),b&&o.createElement("span",{className:(0,l.css)(r.default.buttonProgress)},o.createElement(c.$,{size:c.S.md,"aria-valuetext":y})),w!==i.plain&&N&&"left"===D&&o.createElement("span",{className:(0,l.css)(r.default.buttonIcon,r.default.modifiers.start)},N),t,w!==i.plain&&N&&"right"===D&&o.createElement("span",{className:(0,l.css)(r.default.buttonIcon,r.default.modifiers.end)},N))};u.displayName="Button"},84457:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DropdownItem:()=>l});var i=n(70655),a=n(77865),s=n(33676),o=n(99355),r=n(67366);const l=e=>{var{children:t,className:n,component:c="a",isDisabled:d=!1,isPlainText:u=!1,isHovered:p=!1,href:m,tooltip:f,tooltipProps:h={},listItemClassName:g,onClick:b,ref:y,additionalChild:v,customChild:C,tabIndex:x=-1,icon:I=null,autoFocus:T,description:w=null,styleChildren:D,ouiaId:E,ouiaSafe:N}=e,O=(0,i.__rest)(e,["children","className","component","isDisabled","isPlainText","isHovered","href","tooltip","tooltipProps","listItemClassName","onClick","ref","additionalChild","customChild","tabIndex","icon","autoFocus","description","styleChildren","ouiaId","ouiaSafe"]);const R=(0,r.useOUIAProps)(l.displayName,E,N);return a.createElement(o.DropdownArrowContext.Consumer,null,(e=>a.createElement(s.n,Object.assign({context:e,role:"menuitem",tabIndex:x,className:n,component:c,isDisabled:d,isPlainText:u,isHovered:p,href:m,tooltip:f,tooltipProps:h,listItemClassName:g,onClick:b,additionalChild:v,customChild:C,icon:I,autoFocus:T,styleChildren:D,description:w},R,O),t)))};l.displayName="DropdownItem"},74829:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DropdownSeparator:()=>c});var i=n(70655),a=n(77865),s=n(99355),o=n(33676),r=n(56186),l=n(67366);const c=e=>{var{className:t="",ref:n,ouiaId:d,ouiaSafe:u}=e,p=(0,i.__rest)(e,["className","ref","ouiaId","ouiaSafe"]);const m=(0,l.useOUIAProps)(c.displayName,d,u);return a.createElement(s.DropdownArrowContext.Consumer,null,(e=>a.createElement(o.n,Object.assign({},p,{context:e,component:a.createElement(r.i,{component:r.N.div}),className:t,role:"separator"},m))))};c.displayName="DropdownSeparator"},94024:(e,t,n)=>{"use strict";n.r(t),n.d(t,{KebabToggle:()=>r});var i=n(70655),a=n(77865),s=n(62165),o=n(1024);const r=e=>{var{id:t="",children:n=null,className:r="",isOpen:l=!1,"aria-label":c="Actions",parentRef:d=null,getMenuRef:u=null,isActive:p=!1,isPlain:m=!1,isDisabled:f=!1,bubbleEvent:h=!1,onToggle:g=(()=>{}),ref:b}=e,y=(0,i.__rest)(e,["id","children","className","isOpen","aria-label","parentRef","getMenuRef","isActive","isPlain","isDisabled","bubbleEvent","onToggle","ref"]);return a.createElement(o.Z,Object.assign({id:t,className:r,isOpen:l,"aria-label":c,parentRef:d,getMenuRef:u,isActive:p,isPlain:m,isDisabled:f,onToggle:g,bubbleEvent:h},y),a.createElement(s.ZP,null))};r.displayName="KebabToggle"},99355:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DropdownPosition:()=>i,DropdownDirection:()=>a,DropdownContext:()=>o,DropdownArrowContext:()=>r});var i,a,s=n(77865);!function(e){e.right="right",e.left="left"}(i||(i={})),function(e){e.up="up",e.down="down"}(a||(a={}));const o=s.createContext({onSelect:e=>{},id:"",toggleIndicatorClass:"",toggleIconClass:"",toggleTextClass:"",menuClass:"",itemClass:"",toggleClass:"",baseClass:"",baseComponent:"div",sectionClass:"",sectionTitleClass:"",sectionComponent:"section",disabledClass:"",plainTextClass:"",menuComponent:"ul"}),r=s.createContext({keyHandler:null,sendRef:null})},92607:(e,t,n)=>{"use strict";n.r(t),n.d(t,{TextInputTypes:()=>i,TextInputBase:()=>d,TextInput:()=>u});var i,a=n(70655),s=n(77865),o=n(1874),r=n(91941),l=n(64190),c=n(80164);!function(e){e.text="text",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url"}(i||(i={}));class d extends s.Component{constructor(e){super(e),this.inputRef=s.createRef(),this.handleChange=e=>{this.props.onChange&&this.props.onChange(e.currentTarget.value,e)},this.handleResize=()=>{const e=this.props.innerRef||this.inputRef;e&&e.current&&(0,c.trimLeft)(e.current,String(this.props.value))},this.restoreText=()=>{const e=this.props.innerRef||this.inputRef;e.current.value=String(this.props.value),e.current.scrollLeft=e.current.scrollWidth},this.onFocus=e=>{const{isLeftTruncated:t,onFocus:n}=this.props;t&&this.restoreText(),n&&n(e)},this.onBlur=e=>{const{isLeftTruncated:t,onBlur:n}=this.props;t&&this.handleResize(),n&&n(e)},e.id||e["aria-label"]||e["aria-labelledby"]||console.error("Text input:","Text input requires either an id or aria-label to be specified")}componentDidMount(){this.props.isLeftTruncated&&(this.handleResize(),window.addEventListener("resize",(0,c.debounce)(this.handleResize,250)))}componentWillUnmount(){this.props.isLeftTruncated&&window.removeEventListener("resize",(0,c.debounce)(this.handleResize,250))}render(){const e=this.props,{innerRef:t,className:n,type:i,value:c,validated:d,onChange:u,onFocus:p,onBlur:m,isLeftTruncated:f,isReadOnly:h,isRequired:g,isDisabled:b,iconVariant:y,customIconUrl:v,customIconDimensions:C}=e,x=(0,a.__rest)(e,["innerRef","className","type","value","validated","onChange","onFocus","onBlur","isLeftTruncated","isReadOnly","isRequired","isDisabled","iconVariant","customIconUrl","customIconDimensions"]),I={};return v&&(I.backgroundImage=`url('${v}')`),C&&(I.backgroundSize=C),s.createElement("input",Object.assign({},x,{onFocus:this.onFocus,onBlur:this.onBlur,className:(0,r.css)(o.default.formControl,d===l.LD.success&&o.default.modifiers.success,d===l.LD.warning&&o.default.modifiers.warning,(y&&"search"!==y||v)&&o.default.modifiers.icon,y&&o.default.modifiers[y],n),onChange:this.handleChange,type:i,value:c,"aria-invalid":d===l.LD.error,required:g,disabled:b,readOnly:h,ref:t||this.inputRef},(v||C)&&{style:I}))}}d.displayName="TextInputBase",d.defaultProps={"aria-label":null,className:"",isRequired:!1,validated:"default",isDisabled:!1,isReadOnly:!1,type:i.text,isLeftTruncated:!1,onChange:()=>{}};const u=s.forwardRef(((e,t)=>s.createElement(d,Object.assign({},e,{innerRef:t}))));u.displayName="TextInput"},13342:(e,t,n)=>{"use strict";n.r(t),n.d(t,{TooltipPosition:()=>i,Tooltip:()=>f});var i,a=n(70655),s=n(77865),o=n(38031),r=n(91941),l=n(66641),c=n(95673),d=n(64190),u=n(11910),p=n(14492);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right"}(i||(i={}));let m=1;const f=e=>{var{content:t,position:n="top",trigger:i="mouseenter focus",isVisible:f=!1,isContentLeftAligned:h=!1,enableFlip:g=!0,className:b="",entryDelay:y=0,exitDelay:v=0,appendTo:C=(()=>document.body),zIndex:x=9999,maxWidth:I=u.Z.value,distance:T=15,aria:w="describedby",flipBehavior:D=["top","right","bottom","left","top","right","bottom"],id:E="pf-tooltip-"+m++,children:N,animationDuration:O=300,reference:R,boundary:L,isAppLauncher:A,tippyProps:P}=e,$=(0,a.__rest)(e,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","reference","boundary","isAppLauncher","tippyProps"]);const B=i.includes("mouseenter"),S=i.includes("focus"),k=i.includes("click"),M="manual"===i,[z,F]=s.useState(!1),[_,U]=s.useState(0),V=s.useRef(null),j=s.useRef(null),W=s.useRef(null);s.useEffect((()=>{f?H():q()}),[f]);const H=()=>{V.current&&clearTimeout(V.current),W.current&&clearTimeout(W.current),j.current=setTimeout((()=>{F(!0),U(1)}),y)},q=()=>{j.current&&clearTimeout(j.current),W.current=setTimeout((()=>{U(0),V.current=setTimeout((()=>F(!1)),O)}),v)},K={top:o.default.modifiers.top,bottom:o.default.modifiers.bottom,left:o.default.modifiers.left,right:o.default.modifiers.right},Z=I!==u.Z.value,G=s.createElement("div",Object.assign({className:(0,r.css)(o.default.tooltip,b),role:"tooltip",id:E,style:{maxWidth:Z?I:null,opacity:_,transition:(0,p.K)(O)}},$),s.createElement(c.C,null),s.createElement(l._,{isLeftAligned:h},t));return s.createElement(p.r,{trigger:"none"!==w?"describedby"===w&&N&&N.props&&!N.props["aria-describedby"]?s.cloneElement(N,{"aria-describedby":E}):"labelledby"===w&&N.props&&!N.props["aria-labelledby"]?s.cloneElement(N,{"aria-labelledby":E}):N:N,reference:R,popper:G,popperMatchesTriggerWidth:!1,appendTo:C,isVisible:z,positionModifiers:K,distance:T,placement:n,onMouseEnter:B&&H,onMouseLeave:B&&q,onFocus:S&&H,onBlur:S&&q,onDocumentClick:k&&((e,t)=>{z?q():e.target===t&&H()}),onDocumentKeyDown:M?null:e=>{M||e.keyCode===d.nx.ESCAPE_KEY&&z&&q()},onTriggerEnter:M?null:e=>{e.keyCode===d.nx.ENTER&&(z?q():H())},enableFlip:g,zIndex:x,flipBehavior:D})};f.displayName="Tooltip"},28981:(e,t,n)=>{"use strict";n.r(t),n.d(t,{getOUIAProps:()=>r,useOUIAProps:()=>l,useOUIAId:()=>c,getDefaultOUIAId:()=>d});var i=n(77865);let a=0;const s="OUIA-Generated-",o={};function r(e,t,n=!0){return{"data-ouia-component-type":`PF4/${e}`,"data-ouia-safe":n,"data-ouia-component-id":t}}const l=(e,t,n=!0,i)=>({"data-ouia-component-type":`PF4/${e}`,"data-ouia-safe":n,"data-ouia-component-id":c(e,t,i)}),c=(e,t,n)=>void 0!==t?t:(0,i.useMemo)((()=>d(e,n)),[e,n]);function d(e,t){try{const n=`${window.location.href}-${e}-${t||""}`;return o[n]||(o[n]=0),`${s}${e}-${t?`${t}-`:""}${++o[n]}`}catch(n){return`${s}${e}-${t?`${t}-`:""}${++a}`}}},80164:(e,t,n)=>{"use strict";n.r(t),n.d(t,{capitalize:()=>s,getUniqueId:()=>o,debounce:()=>r,isElementInView:()=>l,sideElementIsOutOfView:()=>c,fillTemplate:()=>d,keyHandler:()=>u,getNextIndex:()=>p,pluralize:()=>m,formatBreakpointMods:()=>f,toCamel:()=>g,canUseDOM:()=>b,getTextWidth:()=>y,innerDimensions:()=>v,trimLeft:()=>C,preventedEvents:()=>x});var i=n(21704),a=n(64190);function s(e){return e[0].toUpperCase()+e.substring(1)}function o(e="pf"){return`${e}-${(new Date).getTime()+Math.random().toString(36).slice(2)}`}function r(e,t){let n;return(...i)=>{clearTimeout(n),n=setTimeout((()=>e.apply(this,i)),t)}}function l(e,t,n){if(!e||!t)return!1;const i=e.getBoundingClientRect(),a=t.getBoundingClientRect(),s=Math.floor(i.left),o=Math.floor(i.right),r=Math.floor(a.left),l=Math.floor(a.right);return r>=s&&l<=o||n&&(r<s&&l>s||l>o&&r<o)}function c(e,t){const n=e.getBoundingClientRect(),i=t.getBoundingClientRect(),s=Math.floor(n.left),o=Math.floor(n.right),r=Math.floor(i.left)<s,l=Math.floor(i.right)>o;let c=a.VW.NONE;return l&&r?c=a.VW.BOTH:l?c=a.VW.RIGHT:r&&(c=a.VW.LEFT),c}function d(e,t){return e.replace(/\${(.*?)}/g,((e,n)=>t[n]||""))}function u(e,t,n,a,s,o=!1){if(!Array.isArray(s))return;const r=a.filter((e=>e))[0].constructor===Array;let l=e,c=t;if("up"===n?l=0===e?s.length-1:e-1:"down"===n?l=e===s.length-1?0:e+1:"left"===n?c=0===t?a[e].length-1:t-1:"right"===n&&(c=t===a[e].length-1?0:t+1),null===a[l]||void 0===a[l]||r&&(null===a[l][c]||void 0===a[l][c]))u(l,c,n,a,s,o);else if(o){a[l].focus&&a[l].focus();i.findDOMNode(a[l]).focus()}else"tab"!==n&&(r?a[l][c].focus():a[l].focus())}function p(e,t,n){let i;return i="up"===t?0===e?n.length-1:e-1:e===n.length-1?0:e+1,void 0===n[i]||null===n[i][0]?p(i,t,n):i}function m(e,t,n){return n||(n=`${t}s`),`${e||0} ${1===e?t:n}`}const f=(e,t)=>Object.entries(e||{}).map((([e,t])=>`${t}${"default"!==e?`-on-${e}`:""}`)).map(g).map((e=>e.replace(/-?(\dxl)/gi,((e,t)=>`_${t}`)))).map((e=>t.modifiers[e])).filter(Boolean).join(" "),h=e=>e.toUpperCase().replace("-","").replace("_",""),g=e=>e.replace(/([-_][a-z])/gi,h),b=!("undefined"==typeof window||!window.document||!window.document.createElement),y=(e,t)=>{const n=getComputedStyle(t),i=document.createElement("canvas").getContext("2d");return i.font=n.font||(()=>{let e="";const t={"50%":"ultra-condensed","62.5%":"extra-condensed","75%":"condensed","87.5%":"semi-condensed","100%":"normal","112.5%":"semi-expanded","125%":"expanded","150%":"extra-expanded","200%":"ultra-expanded"};let i;return i=n.fontStretch in t?t[n.fontStretch]:"normal",e=n.fontStyle+" "+n.fontVariant+" "+n.fontWeight+" "+i+" "+n.fontSize+"/"+n.lineHeight+" "+n.fontFamily,e})(),i.measureText(e).width},v=e=>{const t=getComputedStyle(e);let n=e.clientWidth,i=e.clientHeight;return i-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),n-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight),{height:i,width:n}},C=(e,t)=>{const n=v(e).width;let i=t;if(y(t,e)>n){for(;y(`...${i}`,e)>n;)i=i.substring(1);e.value?e.value=`...${i}`:e.innerText=`...${i}`}else e.value?e.value=t:e.innerText=t},x=e=>e.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:e=>{e.preventDefault()}})),{})},40400:(e,t,n)=>{"use strict";n.d(t,{IU:()=>r});var i,a=n(70655),s=n(77865);!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(i||(i={}));let o=0;function r({name:e,xOffset:t=0,yOffset:n=0,width:r,height:l,svgPath:c}){var d;return(d=class extends s.Component{constructor(){super(...arguments),this.id="icon-title-"+o++}render(){const e=this.props,{size:o,color:d,title:u,noVerticalAlign:p}=e,m=(0,a.__rest)(e,["size","color","title","noVerticalAlign"]),f=Boolean(u),h=(e=>{switch(e){case i.sm:return"1em";case i.md:return"1.5em";case i.lg:return"2em";case i.xl:return"3em";default:return"1em"}})(o),g=-.125*Number.parseFloat(h),b=p?null:{verticalAlign:`${g}em`},y=[t,n,r,l].join(" ");return s.createElement("svg",Object.assign({style:b,fill:d,height:h,width:h,viewBox:y,"aria-labelledby":f?this.id:null,"aria-hidden":!f||null,role:"img"},m),f&&s.createElement("title",{id:this.id},u),s.createElement("path",{d:c}))}}).displayName=e,d.defaultProps={color:"currentColor",size:i.sm,noVerticalAlign:!1},d}},98614:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CheckIconConfig:()=>a,CheckIcon:()=>s,default:()=>o});var i=n(40400);const a={name:"CheckIcon",height:512,width:512,svgPath:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",yOffset:0,xOffset:0},s=(0,i.IU)(a),o=s},83668:(e,t,n)=>{"use strict";n.r(t),n.d(t,{StarIconConfig:()=>a,StarIcon:()=>s,default:()=>o});var i=n(40400);const a={name:"StarIcon",height:512,width:576,svgPath:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z",yOffset:0,xOffset:0},s=(0,i.IU)(a),o=s},24307:(e,t,n)=>{"use strict";n.r(t),n.d(t,{TimesIconConfig:()=>a,TimesIcon:()=>s,default:()=>o});var i=n(40400);const a={name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0},s=(0,i.IU)(a),o=s}}]);
//# sourceMappingURL=sourcemaps/8194.js.map