(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[167],{56787:(e,t,n)=>{"use strict";n.d(t,{L:()=>d});var s=n(70655),o=n(77865),i=n(35954),r=n(99355),l=n(17352),a=n(67366);const d=e=>{var{onSelect:t,ref:n,ouiaId:p,ouiaSafe:c}=e,u=(0,s.__rest)(e,["onSelect","ref","ouiaId","ouiaSafe"]);return o.createElement(r.Dl.Provider,{value:{onSelect:e=>t&&t(e),toggleTextClass:i.default.dropdownToggleText,toggleIconClass:i.default.dropdownToggleImage,toggleIndicatorClass:i.default.dropdownToggleIcon,menuClass:i.default.dropdownMenu,itemClass:i.default.dropdownMenuItem,toggleClass:i.default.dropdownToggle,baseClass:i.default.dropdown,baseComponent:"div",sectionClass:i.default.dropdownGroup,sectionTitleClass:i.default.dropdownGroupTitle,sectionComponent:"section",disabledClass:i.default.modifiers.disabled,plainTextClass:i.default.modifiers.text,ouiaId:(0,a.useOUIAId)(d.displayName,p),ouiaSafe:c,ouiaComponentType:d.displayName}},o.createElement(l.R,Object.assign({},u)))};d.displayName="Dropdown"},84457:(e,t,n)=>{"use strict";n.d(t,{h:()=>a});var s=n(70655),o=n(77865),i=n(33676),r=n(99355),l=n(67366);const a=e=>{var{children:t,className:n,component:d="a",isDisabled:p=!1,isPlainText:c=!1,isHovered:u=!1,href:m,tooltip:h,tooltipProps:f={},listItemClassName:g,onClick:C,ref:b,additionalChild:E,customChild:v,tabIndex:y=-1,icon:R=null,autoFocus:w,description:O=null,styleChildren:T,ouiaId:D,ouiaSafe:N}=e,P=(0,s.__rest)(e,["children","className","component","isDisabled","isPlainText","isHovered","href","tooltip","tooltipProps","listItemClassName","onClick","ref","additionalChild","customChild","tabIndex","icon","autoFocus","description","styleChildren","ouiaId","ouiaSafe"]);const I=(0,l.useOUIAProps)(a.displayName,D,N);return o.createElement(r.e4.Consumer,null,(e=>o.createElement(i.n,Object.assign({context:e,role:"menuitem",tabIndex:y,className:n,component:d,isDisabled:p,isPlainText:c,isHovered:u,href:m,tooltip:h,tooltipProps:f,listItemClassName:g,onClick:C,additionalChild:E,customChild:v,icon:R,autoFocus:w,styleChildren:T,description:O},I,P),t)))};a.displayName="DropdownItem"},94868:(e,t,n)=>{"use strict";n.d(t,{h:()=>p});var s=n(70655),o=n(77865),i=n(21704),r=n(35954),l=n(91941),a=n(80164),d=n(99355);class p extends o.Component{constructor(){super(...arguments),this.refsCollection=[],this.componentWillUnmount=()=>{document.removeEventListener("keydown",this.onKeyDown)},this.onKeyDown=e=>{if(!this.props.isOpen||!Array.from(document.activeElement.classList).find((e=>p.validToggleClasses.concat(this.context.toggleClass).includes(e))))return;const t=this.refsCollection;if("ArrowDown"===e.key){const e=t.find((e=>e&&e[0]&&!e[0].hasAttribute("disabled")));p.focusFirstRef(e)}else if("ArrowUp"===e.key){const e=t.length,n=t.slice(e-1,e),s=n&&n[0];p.focusFirstRef(s)}},this.childKeyHandler=(e,t,n,s=!1)=>{(0,a.qG)(e,t,n,this.refsCollection,this.props.isGrouped?this.refsCollection:o.Children.toArray(this.props.children),s)},this.sendRef=(e,t,n,s)=>{this.refsCollection[e]=[],t.map(((t,n)=>{t?t.getAttribute?this.refsCollection[e][n]=s?null:t:this.refsCollection[e][n]=i.findDOMNode(t):this.refsCollection[e][n]=null}))}}componentDidMount(){document.addEventListener("keydown",this.onKeyDown);const{autoFocus:e}=this.props;if(e){const e=this.refsCollection.find((e=>e&&e[0]&&!e[0].hasAttribute("disabled"))),t=e&&e[0];t&&t.focus&&setTimeout((()=>t.focus()))}}shouldComponentUpdate(){return this.refsCollection=[],!0}extendChildren(){const{children:e,isGrouped:t}=this.props;if(t){let t=0;return o.Children.map(e,(e=>{const n=e,s={};return n.props&&n.props.children&&(Array.isArray(n.props.children)?s.children=o.Children.map(n.props.children,(e=>o.cloneElement(e,{index:t++}))):s.children=o.cloneElement(n.props.children,{index:t++})),o.cloneElement(n,s)}))}return o.Children.map(e,((e,t)=>o.cloneElement(e,{index:t})))}render(){const e=this.props,{className:t,isOpen:n,position:i,children:a,component:p,isGrouped:c,setMenuComponentRef:u,openedOnEnter:m}=e,h=(0,s.__rest)(e,["className","isOpen","position","children","component","isGrouped","setMenuComponentRef","openedOnEnter"]);return o.createElement(d.e4.Provider,{value:{keyHandler:this.childKeyHandler,sendRef:this.sendRef}},"div"===p?o.createElement(d.Dl.Consumer,null,(({onSelect:e,menuClass:s})=>o.createElement("div",{className:(0,l.css)(s,i===d.ir.right&&r.default.modifiers.alignRight,t),hidden:!n,onClick:t=>e&&e(t),ref:u},a))):c&&o.createElement(d.Dl.Consumer,null,(({menuClass:e,menuComponent:s})=>{const a=s||"div";return o.createElement(a,Object.assign({},h,{className:(0,l.css)(e,i===d.ir.right&&r.default.modifiers.alignRight,t),hidden:!n,role:"menu",ref:u}),this.extendChildren())}))||o.createElement(d.Dl.Consumer,null,(({menuClass:e,menuComponent:s})=>{const a=s||p;return o.createElement(a,Object.assign({},h,{className:(0,l.css)(e,i===d.ir.right&&r.default.modifiers.alignRight,t),hidden:!n,role:"menu",ref:u}),this.extendChildren())})))}}p.displayName="DropdownMenu",p.defaultProps={className:"",isOpen:!0,openedOnEnter:!1,autoFocus:!0,position:d.ir.left,component:"ul",isGrouped:!1,setMenuComponentRef:null},p.validToggleClasses=[r.default.dropdownToggle,r.default.dropdownToggleButton],p.focusFirstRef=e=>{e&&e[0]&&e[0].focus&&setTimeout((()=>e[0].focus()))},p.contextType=d.Dl},17352:(e,t,n)=>{"use strict";n.d(t,{R:()=>c});var s=n(70655),o=n(77865),i=n(35954),r=n(91941),l=n(94868),a=n(99355),d=n(67366),p=n(14492);class c extends o.Component{constructor(e){super(e),this.openedOnEnter=!1,this.baseComponentRef=o.createRef(),this.menuComponentRef=o.createRef(),this.onEnter=()=>{this.openedOnEnter=!0},this.setMenuComponentRef=e=>{this.menuComponentRef=e},this.getMenuComponentRef=()=>this.menuComponentRef,e.dropdownItems&&e.dropdownItems.length>0&&e.children&&console.error("Children and dropdownItems props have been provided. Only the dropdownItems prop items will be rendered")}componentDidUpdate(){this.props.isOpen||(this.openedOnEnter=!1)}render(){const e=this.props,{children:t,className:n,direction:u,dropdownItems:m,isOpen:h,isPlain:f,isGrouped:g,onSelect:C,position:b,toggle:E,autoFocus:v,menuAppendTo:y}=e,R=(0,s.__rest)(e,["children","className","direction","dropdownItems","isOpen","isPlain","isGrouped","onSelect","position","toggle","autoFocus","menuAppendTo"]),w=E.props.id||"pf-dropdown-toggle-id-"+c.currentId++;let O,T,D=!1;m&&m.length>0?(O="ul",T=m,D=!0):(O="div",T=o.Children.toArray(t));const N=this.openedOnEnter;return o.createElement(a.Dl.Consumer,null,(({baseClass:e,baseComponent:t,id:s,ouiaId:c,ouiaComponentType:m,ouiaSafe:C})=>{const P=t,I=o.createElement(l.h,{setMenuComponentRef:this.setMenuComponentRef,component:O,isOpen:h,position:b,"aria-labelledby":s?`${s}-toggle`:w,isGrouped:g,autoFocus:N&&v},T),k=o.createElement("div",{className:(0,r.css)(e,u===a.dw.up&&i.default.modifiers.top,b===a.ir.right&&i.default.modifiers.alignRight,h&&i.default.modifiers.expanded,n)},h&&I),x=o.createElement(P,Object.assign({},R,{className:(0,r.css)(e,u===a.dw.up&&i.default.modifiers.top,b===a.ir.right&&i.default.modifiers.alignRight,h&&i.default.modifiers.expanded,n),ref:this.baseComponentRef},(0,d.getOUIAProps)(m,c,C)),o.Children.map(E,(e=>o.cloneElement(e,{parentRef:this.baseComponentRef,getMenuRef:this.getMenuComponentRef,isOpen:h,id:w,isPlain:f,"aria-haspopup":D,onEnter:()=>this.onEnter()}))),"inline"===y&&h&&I);return"inline"===y?x:o.createElement(p.r,{trigger:x,popper:k,direction:u,position:b,appendTo:"parent"===y?(()=>this.baseComponentRef&&this.baseComponentRef.current?this.baseComponentRef.current.parentElement:null)():y,isVisible:h})}))}}c.displayName="DropdownWithContext",c.currentId=0,c.defaultProps={className:"",dropdownItems:[],isOpen:!1,isPlain:!1,isGrouped:!1,position:a.ir.left,direction:a.dw.down,onSelect:()=>{},autoFocus:!0,menuAppendTo:"inline"}},94024:(e,t,n)=>{"use strict";n.d(t,{a:()=>l});var s=n(70655),o=n(77865),i=n(62165),r=n(1024);const l=e=>{var{id:t="",children:n=null,className:l="",isOpen:a=!1,"aria-label":d="Actions",parentRef:p=null,getMenuRef:c=null,isActive:u=!1,isPlain:m=!1,isDisabled:h=!1,bubbleEvent:f=!1,onToggle:g=(()=>{}),ref:C}=e,b=(0,s.__rest)(e,["id","children","className","isOpen","aria-label","parentRef","getMenuRef","isActive","isPlain","isDisabled","bubbleEvent","onToggle","ref"]);return o.createElement(r.Z,Object.assign({id:t,className:l,isOpen:a,"aria-label":d,parentRef:p,getMenuRef:c,isActive:u,isPlain:m,isDisabled:h,onToggle:g,bubbleEvent:f},b),o.createElement(i.ZP,null))};l.displayName="KebabToggle"},1024:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var s=n(70655),o=n(77865),i=n(35954),r=n(99355),l=n(91941),a=n(64190);class d extends o.Component{constructor(){super(...arguments),this.buttonRef=o.createRef(),this.componentDidMount=()=>{document.addEventListener("mousedown",this.onDocClick),document.addEventListener("touchstart",this.onDocClick),document.addEventListener("keydown",this.onEscPress,{capture:!0})},this.componentWillUnmount=()=>{document.removeEventListener("mousedown",this.onDocClick),document.removeEventListener("touchstart",this.onDocClick),document.removeEventListener("keydown",this.onEscPress,{capture:!0})},this.onDocClick=e=>{const{isOpen:t,parentRef:n,onToggle:s,getMenuRef:o}=this.props,i=o&&o(),r=n&&n.current&&n.current.contains(e.target),l=i&&i.contains&&i.contains(e.target);!t||r||l||(s(!1,e),this.buttonRef.current.focus())},this.onEscPress=e=>{const{parentRef:t,getMenuRef:n}=this.props,s=e.keyCode||e.which,o=n&&n(),i=t&&t.current&&t.current.contains(e.target),r=o&&o.contains&&o.contains(e.target);!this.props.isOpen||s!==a.nx.ESCAPE_KEY&&"Tab"!==e.key||!i&&!r||(this.props.onToggle(!1,e),this.buttonRef.current.focus())},this.onKeyDown=e=>{("Tab"!==e.key||this.props.isOpen)&&(this.props.bubbleEvent||e.stopPropagation(),e.preventDefault(),"Tab"!==e.key&&"Enter"!==e.key&&" "!==e.key||!this.props.isOpen?"Enter"!==e.key&&" "!==e.key&&"ArrowDown"!==e.key||this.props.isOpen||(this.props.onToggle(!this.props.isOpen,e),this.props.onEnter()):this.props.onToggle(!this.props.isOpen,e))}}render(){const e=this.props,{className:t,children:n,isOpen:a,isDisabled:d,isPlain:p,isPrimary:c,isSplitButton:u,onToggle:m,"aria-haspopup":h,isActive:f,bubbleEvent:g,onEnter:C,parentRef:b,getMenuRef:E,id:v,type:y}=e,R=(0,s.__rest)(e,["className","children","isOpen","isDisabled","isPlain","isPrimary","isSplitButton","onToggle","aria-haspopup","isActive","bubbleEvent","onEnter","parentRef","getMenuRef","id","type"]);return o.createElement(r.Dl.Consumer,null,(({toggleClass:e})=>o.createElement("button",Object.assign({},R,{id:v,ref:this.buttonRef,className:(0,l.css)(u?i.default.dropdownToggleButton:e||i.default.dropdownToggle,f&&i.default.modifiers.active,p&&i.default.modifiers.plain,c&&i.default.modifiers.primary,t),type:y||"button",onClick:e=>m(!a,e),"aria-expanded":a,"aria-haspopup":h,onKeyDown:e=>this.onKeyDown(e),disabled:d}),n)))}}d.displayName="Toggle",d.defaultProps={className:"",isOpen:!1,isActive:!1,isDisabled:!1,isPlain:!1,isPrimary:!1,isSplitButton:!1,onToggle:()=>{},onEnter:()=>{},bubbleEvent:!1}},62165:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>s});const s=(0,n(40400).IU)({name:"EllipsisVIcon",height:512,width:192,svgPath:"M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z",yOffset:0,xOffset:0})}}]);
//# sourceMappingURL=sourcemaps/167.js.map