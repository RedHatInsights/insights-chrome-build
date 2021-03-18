(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[966],{29390:(e,t,a)=>{"use strict";a.d(t,{Y:()=>n});var s=a(70655),l=a(77865),i=a(91941),r=a(75730);const n=e=>{var{children:t=null,className:a=""}=e,n=(0,s.__rest)(e,["children","className"]);return l.createElement("div",Object.assign({},n,{className:(0,i.css)(r.default.backdrop,a)}),t)};n.displayName="Backdrop"},9947:(e,t,a)=>{"use strict";a.d(t,{I:()=>s,u:()=>c});var s,l=a(70655),i=a(77865),r=a(91941),n=a(78460);!function(e){e.xs="xs",e.small="small",e.large="large",e.xl="xl",e.full="full"}(s||(s={}));const c=e=>{var{children:t,className:a="",variant:c=s.full,isFullHeight:o}=e,d=(0,l.__rest)(e,["children","className","variant","isFullHeight"]);return i.createElement("div",Object.assign({className:(0,r.css)(n.default.emptyState,"xs"===c&&n.default.modifiers.xs,"small"===c&&n.default.modifiers.sm,"large"===c&&n.default.modifiers.lg,"xl"===c&&n.default.modifiers.xl,o&&n.default.modifiers.fullHeight,a)},d),i.createElement("div",{className:(0,r.css)(n.default.emptyStateContent)},t))};c.displayName="EmptyState"},75106:(e,t,a)=>{"use strict";a.d(t,{B:()=>n});var s=a(70655),l=a(77865),i=a(91941),r=a(78460);const n=e=>{var{children:t,className:a=""}=e,n=(0,s.__rest)(e,["children","className"]);return l.createElement("div",Object.assign({className:(0,i.css)(r.default.emptyStateBody,a)},n),t)};n.displayName="EmptyStateBody"},80236:(e,t,a)=>{"use strict";a.d(t,{v:()=>s,u:()=>u});var s,l=a(70655),i=a(77865),r=a(21704),n=a(64190),c=a(67366),o=a(91941),d=a(75730),m=a(20051);!function(e){e.small="small",e.medium="medium",e.large="large",e.default="default"}(s||(s={}));class u extends i.Component{constructor(e){super(e),this.boxId="",this.labelId="",this.descriptorId="",this.handleEscKeyClick=e=>{const{onEscapePress:t}=this.props;e.keyCode===n.nx.ESCAPE_KEY&&this.props.isOpen&&(t?t(e):this.props.onClose())},this.getElement=e=>"function"==typeof e?e():e||document.body,this.toggleSiblingsFromScreenReaders=e=>{const{appendTo:t}=this.props,a=this.getElement(t).children;for(const t of Array.from(a))t!==this.state.container&&(e?t.setAttribute("aria-hidden",""+e):t.removeAttribute("aria-hidden"))},this.isEmpty=e=>null==e||""===e;const t=u.currentId++,a=t+1,s=t+2;this.boxId=e.id||`pf-modal-part-${t}`,this.labelId=`pf-modal-part-${a}`,this.descriptorId=`pf-modal-part-${s}`,this.state={container:void 0,ouiaStateId:(0,c.getDefaultOUIAId)(u.displayName,e.variant)}}componentDidMount(){const{appendTo:e,title:t,"aria-label":a,"aria-labelledby":s,hasNoBodyWrapper:l,header:i}=this.props,r=this.getElement(e),n=document.createElement("div");this.setState({container:n}),r.appendChild(n),r.addEventListener("keydown",this.handleEscKeyClick,!1),this.props.isOpen?r.classList.add((0,o.css)(d.default.backdropOpen)):r.classList.remove((0,o.css)(d.default.backdropOpen)),this.isEmpty(t)&&this.isEmpty(a)&&this.isEmpty(s)&&console.error("Modal: Specify at least one of: title, aria-label, aria-labelledby."),this.isEmpty(a)&&this.isEmpty(s)&&(l||i)&&console.error("Modal: When using hasNoBodyWrapper or setting a custom header, ensure you assign an accessible name to the the modal container with aria-label or aria-labelledby.")}componentDidUpdate(){const{appendTo:e}=this.props,t=this.getElement(e);this.props.isOpen?(t.classList.add((0,o.css)(d.default.backdropOpen)),this.toggleSiblingsFromScreenReaders(!0)):(t.classList.remove((0,o.css)(d.default.backdropOpen)),this.toggleSiblingsFromScreenReaders(!1))}componentWillUnmount(){const{appendTo:e}=this.props,t=this.getElement(e);this.state.container&&t.removeChild(this.state.container),t.removeEventListener("keydown",this.handleEscKeyClick,!1),t.classList.remove((0,o.css)(d.default.backdropOpen))}render(){const e=this.props,{appendTo:t,onEscapePress:a,"aria-labelledby":s,"aria-label":n,"aria-describedby":o,title:d,titleIconVariant:u,titleLabel:p,ouiaId:h,ouiaSafe:f}=e,b=(0,l.__rest)(e,["appendTo","onEscapePress","aria-labelledby","aria-label","aria-describedby","title","titleIconVariant","titleLabel","ouiaId","ouiaSafe"]),{container:g}=this.state;return c.canUseDOM&&g?r.createPortal(i.createElement(m.h,Object.assign({},b,{boxId:this.boxId,labelId:this.labelId,descriptorId:this.descriptorId,title:d,titleIconVariant:u,titleLabel:p,"aria-label":n,"aria-describedby":o,"aria-labelledby":s,ouiaId:void 0!==h?h:this.state.ouiaStateId,ouiaSafe:f})),g):null}}u.displayName="Modal",u.currentId=0,u.defaultProps={className:"",isOpen:!1,title:"",titleIconVariant:null,titleLabel:"","aria-label":"",showClose:!0,"aria-describedby":"","aria-labelledby":"",id:void 0,actions:[],onClose:()=>{},variant:"default",hasNoBodyWrapper:!1,appendTo:()=>document.body,ouiaSafe:!0}},75270:(e,t,a)=>{"use strict";a.d(t,{c:()=>c});var s=a(70655),l=a(77865),i=a(91941),r=a(30748),n=a(27001);const c=e=>{var{children:t,className:a="",variant:c="default",position:o,positionOffset:d,"aria-labelledby":m,"aria-label":u="","aria-describedby":p,style:h}=e,f=(0,s.__rest)(e,["children","className","variant","position","positionOffset","aria-labelledby","aria-label","aria-describedby","style"]);return d&&((h=h||{})[n.Z.name]=d),l.createElement("div",Object.assign({},f,{role:"dialog","aria-label":u||null,"aria-labelledby":m||null,"aria-describedby":p,"aria-modal":"true",className:(0,i.css)(r.default.modalBox,a,"top"===o&&r.default.modifiers.alignTop,"large"===c&&r.default.modifiers.lg,"small"===c&&r.default.modifiers.sm,"medium"===c&&r.default.modifiers.md),style:h}),t)};c.displayName="ModalBox"},92434:(e,t,a)=>{"use strict";a.d(t,{$:()=>n});var s=a(70655),l=a(77865),i=a(91941),r=a(30748);const n=e=>{var{children:t=null,className:a=""}=e,n=(0,s.__rest)(e,["children","className"]);return l.createElement("div",Object.assign({},n,{className:(0,i.css)(r.default.modalBoxBody,a)}),t)};n.displayName="ModalBoxBody"},93884:(e,t,a)=>{"use strict";a.d(t,{I:()=>n});var s=a(70655),l=a(77865),i=a(47173),r=a(24307);const n=e=>{var{className:t="",onClose:a=(()=>{})}=e,n=(0,s.__rest)(e,["className","onClose"]);return l.createElement(i.zx,Object.assign({className:t,variant:"plain",onClick:a,"aria-label":"Close"},n),l.createElement(r.ZP,null))};n.displayName="ModalBoxCloseButton"},81649:(e,t,a)=>{"use strict";a.d(t,{X:()=>n});var s=a(70655),l=a(77865),i=a(91941),r=a(30748);const n=e=>{var{children:t=null,className:a="",id:n=""}=e,c=(0,s.__rest)(e,["children","className","id"]);return l.createElement("div",Object.assign({},c,{id:n,className:(0,i.css)(r.default.modalBoxDescription,a)}),t)};n.displayName="ModalBoxDescription"},51898:(e,t,a)=>{"use strict";a.d(t,{t:()=>n});var s=a(70655),l=a(77865),i=a(91941),r=a(30748);const n=e=>{var{children:t=null,className:a=""}=e,n=(0,s.__rest)(e,["children","className"]);return l.createElement("footer",Object.assign({},n,{className:(0,i.css)(r.default.modalBoxFooter,a)}),t)};n.displayName="ModalBoxFooter"},38950:(e,t,a)=>{"use strict";a.d(t,{R:()=>n});var s=a(70655),l=a(77865),i=a(91941),r=a(30748);const n=e=>{var{children:t=null,className:a="",help:n=null}=e,c=(0,s.__rest)(e,["children","className","help"]);return l.createElement("header",Object.assign({className:(0,i.css)(r.default.modalBoxHeader,n&&r.default.modifiers.help,a)},c),n&&l.createElement(l.Fragment,null,l.createElement("div",{className:(0,i.css)(r.default.modalBoxHeaderMain)},t),l.createElement("div",{className:"pf-c-modal-box__header-help"},n)),!n&&t)};n.displayName="ModalBoxHeader"},32584:(e,t,a)=>{"use strict";a.d(t,{n:()=>f,u:()=>b});var s=a(70655),l=a(77865),i=a(30748),r=a(91941),n=a(12245),c=a(67366),o=a(13342),d=a(68778),m=a(43047),u=a(69957),p=a(53688),h=a(34143);const f=e=>["success","danger","warning","info","defaut"].includes(e),b=e=>{var{className:t="",id:a,title:b,titleIconVariant:g,titleLabel:y=""}=e,v=(0,s.__rest)(e,["className","id","title","titleIconVariant","titleLabel"]);const[C,E]=l.useState(!1),N=l.useRef(),x=y||(f(g)?`${(0,c.capitalize)(g)} alert:`:y),I={success:l.createElement(d.ZP,null),danger:l.createElement(m.ZP,null),warning:l.createElement(u.ZP,null),info:l.createElement(p.ZP,null),default:l.createElement(h.ZP,null)},O=!f(g)&&g;l.useLayoutEffect((()=>{E(N.current&&N.current.offsetWidth<N.current.scrollWidth)}),[]);const B=l.createElement("h1",Object.assign({id:a,ref:N,className:(0,r.css)(i.default.modalBoxTitle,g&&i.default.modifiers.icon,t)},v),g&&l.createElement("span",{className:(0,r.css)(i.default.modalBoxTitleIcon)},f(g)?I[g]:l.createElement(O,null)),x&&l.createElement("span",{className:(0,r.css)(n.default.screenReader)},x),l.createElement("span",{className:(0,r.css)(i.default.modalBoxTitleText)},b));return C?l.createElement(o.u,{content:b,isVisible:!0},B):B};b.displayName="ModalBoxTitle"},20051:(e,t,a)=>{"use strict";a.d(t,{h:()=>y});var s=a(70655),l=a(77865),i=a(43845),r=a(30748),n=a(26143),c=a(91941),o=a(67366),d=a(29390),m=a(92434),u=a(93884),p=a(75270),h=a(51898),f=a(81649),b=a(38950),g=a(32584);const y=e=>{var{children:t,className:a="",isOpen:v=!1,header:C=null,help:E=null,description:N=null,title:x="",titleIconVariant:I=null,titleLabel:O="","aria-label":B="","aria-describedby":_,"aria-labelledby":A,showClose:k=!0,footer:L=null,actions:M=[],onClose:P=(()=>{}),variant:S="default",position:w,positionOffset:Z,width:T=-1,boxId:z,labelId:j,descriptorId:D,disableFocusTrap:U=!1,hasNoBodyWrapper:W=!1,ouiaId:F,ouiaSafe:R=!0}=e,V=(0,s.__rest)(e,["children","className","isOpen","header","help","description","title","titleIconVariant","titleLabel","aria-label","aria-describedby","aria-labelledby","showClose","footer","actions","onClose","variant","position","positionOffset","width","boxId","labelId","descriptorId","disableFocusTrap","hasNoBodyWrapper","ouiaId","ouiaSafe"]);if(!v)return null;const H=C?l.createElement(b.R,{help:E},C):x&&l.createElement(b.R,{help:E},l.createElement(g.u,{title:x,titleIconVariant:I,titleLabel:O,id:j}),N&&l.createElement(f.X,{id:D},N)),Y=L?l.createElement(h.t,null,L):M.length>0&&l.createElement(h.t,null,M),$=W?t:l.createElement(m.$,Object.assign({},V,!N&&!_&&{id:D}),t),G=-1===T?{}:{width:T},K=l.createElement(p.c,Object.assign({id:z,style:G,className:(0,c.css)(a,(0,g.n)(I)&&r.default.modifiers[I]),variant:S,position:w,positionOffset:Z,"aria-label":B,"aria-labelledby":(()=>{if(null===A)return null;const e=[];return""!==(B&&z)&&e.push(B&&z),A&&e.push(A),x&&e.push(j),e.join(" ")})(),"aria-describedby":_||(W?null:D)},(0,o.getOUIAProps)(y.displayName,F,R)),k&&l.createElement(u.I,{onClose:P}),H,$,Y);return l.createElement(d.Y,null,l.createElement(i.i,{active:!U,focusTrapOptions:{clickOutsideDeactivates:!0},className:(0,c.css)(n.default.bullseye)},K))};y.displayName="ModalContent"},60485:(e,t,a)=>{"use strict";a.d(t,{H:()=>s,D:()=>o});var s,l,i=a(70655),r=a(77865),n=a(91941),c=a(6650);!function(e){e.md="md",e.lg="lg",e.xl="xl",e["2xl"]="2xl",e["3xl"]="3xl",e["4xl"]="4xl"}(s||(s={})),function(e){e.h1="2xl",e.h2="xl",e.h3="lg",e.h4="md",e.h5="md",e.h6="md"}(l||(l={}));const o=e=>{var{className:t="",children:a="",headingLevel:s,size:o=l[s]}=e,d=(0,i.__rest)(e,["className","children","headingLevel","size"]);return r.createElement(s,Object.assign({},d,{className:(0,n.css)(c.default.title,o&&c.default.modifiers[o],t)}),a)};o.displayName="Title"},27001:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});const s={name:"--pf-c-modal-box--m-align-top--spacer",value:"0.5rem",var:"var(--pf-c-modal-box--m-align-top--spacer)"}},93174:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>s});const s=(0,a(40400).IU)({name:"AngleRightIcon",height:512,width:256,svgPath:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",yOffset:0,xOffset:0})},34143:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>s});const s=(0,a(40400).IU)({name:"BellIcon",height:1024,width:896,svgPath:"M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",yOffset:0,xOffset:0})},68778:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>s});const s=(0,a(40400).IU)({name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0})},43047:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>s});const s=(0,a(40400).IU)({name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0})},69957:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>s});const s=(0,a(40400).IU)({name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0})},53688:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>s});const s=(0,a(40400).IU)({name:"InfoCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",yOffset:0,xOffset:0})},88221:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var s=a(94015),l=a.n(s),i=a(23645),r=a.n(i)()(l());r.push([e.id,".pf-l-stack{--pf-l-stack--m-gutter--MarginBottom: var(--pf-global--gutter);display:flex;flex-direction:column;height:100%}.pf-l-stack__item.pf-m-fill{flex-grow:1}.pf-l-stack.pf-m-gutter>*:not(:last-child){margin-bottom:var(--pf-l-stack--m-gutter--MarginBottom)}\n","",{version:3,sources:["webpack://./stack.css"],names:[],mappings:"AAAA,YACE,8DAAqC,CACrC,YAAa,CACb,qBAAsB,CACtB,WAAY,CAAG,4BAGf,WAAY,CAAG,2CAGf,uDAAwD",sourcesContent:[".pf-l-stack {\n  --pf-l-stack--m-gutter--MarginBottom: var(--pf-global--gutter);\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\n.pf-l-stack__item.pf-m-fill {\n  flex-grow: 1; }\n\n.pf-l-stack.pf-m-gutter > *:not(:last-child) {\n  margin-bottom: var(--pf-l-stack--m-gutter--MarginBottom); }\n"],sourceRoot:""}]);const n=r},2151:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var s=a(93379),l=a.n(s),i=a(88221),r={insert:"head",singleton:!1};l()(i.Z,r);const n=i.Z.locals||{}}}]);
//# sourceMappingURL=sourcemaps/966.js.map