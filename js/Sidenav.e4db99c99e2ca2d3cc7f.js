(window.wpJsonpChromeInstance=window.wpJsonpChromeInstance||[]).push([[6],{1028:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(3),o=a.__importStar(n(1)),i=a.__importDefault(n(30)),r=n(2),c=n(911);t.NavItem=e=>{var{children:t,styleChildren:n=!0,className:s,to:l,isActive:p=!1,groupId:d=null,itemId:u=null,preventDefault:f=!1,onClick:m=null,component:h="a"}=e,v=a.__rest(e,["children","styleChildren","className","to","isActive","groupId","itemId","preventDefault","onClick","component"]);const g=h;return o.createElement("li",{className:r.css(i.default.navItem,s)},o.createElement(c.NavContext.Consumer,null,e=>o.isValidElement(t)?((e,t)=>o.cloneElement(t,Object.assign({onClick:t=>e.onSelect(t,d,u,l,f,m),"aria-current":p?"page":null},n&&{className:r.css(i.default.navLink,p&&i.default.modifiers.current,t.props&&t.props.className)})))(e,t):(e=>{const n=f||!l;return o.createElement(g,Object.assign({href:l,onClick:t=>e.onSelect(t,d,u,l,n,m),className:r.css(i.default.navLink,p&&i.default.modifiers.current,s),"aria-current":p?"page":null},v),t)})(e)))},t.NavItem.displayName="NavItem"},1158:function(e,t,n){var a=n(5),o=n(1159);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};a(o,i);e.exports=o.locals||{}},1159:function(e,t,n){(t=n(6)(!1)).push([e.i,".ins-c-sidebar .pf-c-nav .pf-c-nav__link{text-transform:capitalize}.ins-c-sidebar .pf-c-nav .pf-c-nav__link.ins-m-ignore-case{text-transform:none}\n",""]),e.exports=t},1160:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(3),o=a.__importStar(n(1)),i=a.__importDefault(n(30)),r=n(2),c=a.__importDefault(n(144)),s=a.__importDefault(n(33)),l=n(97),p=n(911);class d extends o.Component{constructor(){super(...arguments),this.state={scrollViewAtStart:!1,scrollViewAtEnd:!1},this.navList=o.createRef(),this.handleScrollButtons=()=>{const e=this.navList.current;if(e){const t=l.isElementInView(e,e.firstChild,!1),n=l.isElementInView(e,e.lastChild,!1);this.setState({scrollViewAtStart:t,scrollViewAtEnd:n}),this.context.updateIsScrollable(!t||!n)}},this.scrollLeft=()=>{const e=this.navList.current;if(e){const t=Array.from(e.children);let n,a;for(let o=0;o<t.length&&!n;o++)l.isElementInView(e,t[o],!1)&&(n=t[o],a=t[o-1]);a&&(e.scrollLeft-=a.scrollWidth),this.handleScrollButtons()}},this.scrollRight=()=>{const e=this.navList.current;if(e){const t=Array.from(e.children);let n,a;for(let o=t.length-1;o>=0&&!n;o--)l.isElementInView(e,t[o],!1)&&(n=t[o],a=t[o+1]);a&&(e.scrollLeft+=a.scrollWidth),this.handleScrollButtons()}}}componentDidMount(){window.addEventListener("resize",this.handleScrollButtons,!1),this.handleScrollButtons()}componentWillUnmount(){window.removeEventListener("resize",this.handleScrollButtons,!1)}render(){const e=this.props,{children:t,className:n,ariaLeftScroll:l,ariaRightScroll:d}=e,u=a.__rest(e,["children","className","ariaLeftScroll","ariaRightScroll"]),{scrollViewAtStart:f,scrollViewAtEnd:m}=this.state;return o.createElement(p.NavContext.Consumer,null,({isHorizontal:e})=>o.createElement(o.Fragment,null,e&&o.createElement("button",{className:r.css(i.default.navScrollButton),"aria-label":l,onClick:this.scrollLeft,disabled:f},o.createElement(c.default,null)),o.createElement("ul",Object.assign({ref:this.navList,className:r.css(i.default.navList,n),onScroll:this.handleScrollButtons},u),t),e&&o.createElement("button",{className:r.css(i.default.navScrollButton),"aria-label":d,onClick:this.scrollRight,disabled:m},o.createElement(s.default,null))))}}t.NavList=d,d.displayName="NavList",d.contextType=p.NavContext,d.defaultProps={ariaLeftScroll:"Scroll left",ariaRightScroll:"Scroll right"}},1161:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(3),o=a.__importStar(n(1)),i=a.__importDefault(n(30)),r=a.__importDefault(n(127)),c=n(2),s=a.__importDefault(n(33)),l=n(97),p=n(911);class d extends o.Component{constructor(){super(...arguments),this.expandableRef=o.createRef(),this.id=this.props.id||l.getUniqueId(),this.state={expandedState:this.props.isExpanded},this.onExpand=(e,t)=>{this.props.onExpand?this.props.onExpand(e,t):this.setState({expandedState:t})},this.handleToggle=(e,t)=>{if(!this.expandableRef.current||!this.expandableRef.current.contains(e.target))return;const{groupId:n}=this.props,{expandedState:a}=this.state;t(e,n,!a),this.onExpand(e,!a)}}componentDidMount(){this.setState({expandedState:this.props.isExpanded})}componentDidUpdate(e){this.props.isExpanded!==e.isExpanded&&this.setState({expandedState:this.props.isExpanded})}render(){const e=this.props,{id:t,title:n,srText:l,children:d,className:u,isActive:f,groupId:m,isExpanded:h,onExpand:v}=e,g=a.__rest(e,["id","title","srText","children","className","isActive","groupId","isExpanded","onExpand"]),{expandedState:b}=this.state,w=()=>{this.setState(e=>({expandedState:!e.expandedState}))};return o.createElement(p.NavContext.Consumer,null,e=>o.createElement("li",Object.assign({className:c.css(i.default.navItem,i.default.modifiers.expandable,b&&i.default.modifiers.expanded,f&&i.default.modifiers.current,u),onClick:t=>this.handleToggle(t,e.onToggle)},g),o.createElement("button",{className:i.default.navLink,id:l?null:this.id,onClick:w,onMouseDown:e=>e.preventDefault(),"aria-expanded":b},n,o.createElement("span",{className:c.css(i.default.navToggle)},o.createElement("span",{className:c.css(i.default.navToggleIcon)},o.createElement(s.default,{"aria-hidden":"true"})))),o.createElement("section",{className:c.css(i.default.navSubnav),"aria-labelledby":this.id,hidden:!b||null},l&&o.createElement("h2",{className:c.css(r.default.screenReader),id:this.id},l),o.createElement("ul",{className:c.css(i.default.navList)},d))))}}t.NavExpandable=d,d.displayName="NavExpandable",d.defaultProps={srText:"",isExpanded:!1,children:"",className:"",groupId:null,isActive:!1,id:""}},1162:function(e,t,n){var a=n(5),o=n(1163);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};a(o,i);e.exports=o.locals||{}},1163:function(e,t,n){(t=n(6)(!1)).push([e.i,".ins-c-app-switcher{width:100%;padding:calc(8px + var(--pf-global--spacer--sm)) 12px;margin-top:7px;border-bottom:3px solid #3c3f42}.ins-c-app-switcher .ins-c-app-switcher__dropdown{width:100%;padding:8px 12px}.ins-c-app-switcher .ins-c-app-switcher__dropdown.pf-m-expanded,.ins-c-app-switcher .ins-c-app-switcher__dropdown:hover{background:#393c3d}.ins-c-app-switcher .ins-c-app-switcher__dropdown .pf-c-dropdown__menu{min-width:unset;left:0}.ins-c-app-switcher .ins-c-app-switcher__dropdown .pf-c-dropdown__toggle{color:white;padding:0;width:100%;justify-content:space-between}.ins-c-app-switcher .ins-c-app-switcher__dropdown .pf-c-dropdown__toggle .pf-c-dropdown__toggle-text{text-transform:capitalize;font-weight:var(--pf-global--FontWeight--semi-bold);white-space:normal;text-align:left}.ins-c-app-switcher .ins-c-app-switcher__dropdown .pf-c-dropdown__menu-item{word-wrap:break-word;white-space:normal}.ins-c-app-switcher .ins-c-app-switcher__dropdown .pf-c-dropdown__menu-item.ins-c-app-switcher__current{font-weight:var(--pf-global--FontWeight--semi-bold);background:var(--pf-c-dropdown__menu-item--hover--BackgroundColor)}\n",""]),e.exports=t},1164:function(e,t,n){"use strict";t.__esModule=!0,t.CaretDownIconConfig={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0,transform:""},t.CaretDownIcon=n(77).createIcon(t.CaretDownIconConfig),t.default=t.CaretDownIcon},1645:function(e,t,n){"use strict";n.r(t),n.d(t,"SideNav",(function(){return X}));var a=n(833),o=n.n(a),i=n(829),r=n.n(i),c=n(834),s=n.n(c),l=n(835),p=n.n(l),d=n(836),u=n.n(d),f=n(1),m=n.n(f),h=n(12),v=n.n(h),g=n(29),b=n.n(g),w=n(821),_=n.n(w),x=n(911),y=n(1028),S=n(1161),E=n(1160),I=n(35),C=n(80),N=n(158),k=n.n(N),D=n(114),O=n.n(D),L=n(110),T=n.n(L),A=document.baseURI,R=function(e){var t=e.itemID,n=e.title,a=e.parent,o=e.navigate,i=e.ignoreCase,r=O()(e,["itemID","title","parent","navigate","ignoreCase"]);return m.a.createElement(y.NavItem,k()({},r,{itemId:t,className:T()({"ins-m-ignore-case":i}),preventDefault:!0,to:o||"".concat(A).concat(a,"/").concat(t)}),n)};R.propTypes={itemID:v.a.oneOfType([v.a.number,v.a.string]),title:v.a.node,navigate:v.a.oneOfType([v.a.number,v.a.string]),parent:v.a.oneOfType([v.a.number,v.a.string]),ignoreCase:v.a.bool},R.defaultProps={parent:""};var j=R;n(1158);function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=u()(e);if(t){var o=u()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return p()(this,n)}}var M=document.baseURI,V={supportcases:{title:"Support Cases",link:"https://access.redhat.com/support/cases"},feedback:{title:"Cluster Manager Feedback",link:"mailto:ocm-feedback@redhat.com"},marketplace:{title:"Red Hat Marketplace",link:"https://marketplace.redhat.com"}},B={subscriptionWatch:{title:"Subscription Watch",link:"./subscriptions/"}},z=function(e){s()(n,e);var t=P(n);function n(e){var a;return o()(this,n),(a=t.call(this,e)).onSelect=a.onSelect.bind(_()(a)),a.onClick=a.onClick.bind(_()(a)),a}return r()(n,[{key:"onSelect",value:function(e){var t=e.groupId,n=e.itemID;this.setState({activeGroup:t,activeItem:n})}},{key:"onClick",value:function(e,t,n){e.persist();var a,o=this.props,i=o.onNavigate,r=o.onClearActive,c=o.activeGroup,s=o.activeLocation,l=o.settings,p=o.appId,d=e.ctrlKey||e.metaKey||2===e.which;if(n&&n.active){var u=l.find((function(e){return e.id===p}));if(u){var f=u.subItems.find((function(e){return e.id===c}));f&&f.reload&&!t.reload&&(a="".concat(M).concat(s,"/").concat(p,"/").concat(t.id),d?window.open(a):window.location.href=a)}t.reload?(a="".concat(M).concat(s,"/").concat(t.reload),d?window.open(a):window.location.href=a):d?window.open("".concat(M).concat(s,"/").concat(t.reload)):i&&i(t,e)}else if(t.group&&c===t.group)d?window.open("".concat(M).concat(s,"/").concat(t.id)):(r&&r(),i&&i(t,e));else{var m=n&&n.id&&!t.reload?"/".concat(n.id,"/"):"/";a="".concat(M).concat(s).concat(m).concat(t.reload||t.id),d?window.open(a):window.location.href=a}}},{key:"render",value:function(){var e=this,t=this.props,n=t.settings,a=t.activeApp,o=t.activeLocation,i=t.documentation;return m.a.createElement(x.Nav,{onSelect:this.onSelect,"aria-label":"Insights Global Navigation","data-ouia-safe":"true"},m.a.createElement(E.NavList,null,n.map((function(t,n){if(!t.disabled_on_stable||-1!==window.location.pathname.indexOf("/beta"))return t.subItems?m.a.createElement(S.NavExpandable,{title:t.title,"ouia-nav-group":t.id,itemID:t.id,key:n,isActive:t.active,isExpanded:t.active},t.subItems.map((function(n,i){if(!n.disabled_on_stable||-1!==window.location.pathname.indexOf("/beta"))return m.a.createElement(j,{ignoreCase:n.ignoreCase,itemID:n.reload||n.id,"ouia-nav-item":n.reload||n.id,key:i,title:n.title,parent:"".concat(o).concat(t.id?"/".concat(t.id):""),isActive:t.active&&n.id===a,onClick:function(a){return e.onClick(a,n,t)}})}))):m.a.createElement(j,{ignoreCase:t.ignoreCase,itemID:t.id,"ouia-nav-item":t.id,key:n,title:t.title,parent:o,isActive:t.active||t.id===a,onClick:function(n){return e.onClick(n,t)}})})),"insights"===o&&Object.entries(B).map((function(e){var t=b()(e,2),n=t[0],a=t[1];return m.a.createElement(y.NavItem,{key:n,to:a.link,target:"_blank",rel:"noopener noreferrer"},a.title)})),i&&m.a.createElement(m.a.Fragment,null,m.a.createElement(y.NavItem,{className:"ins-c-page__documentation",to:i,rel:"noopener noreferrer",target:"_blank"},"Documentation")),"openshift"===o&&Object.entries(V).map((function(e){var t=b()(e,2),n=t[0],a=t[1];return m.a.createElement(y.NavItem,{key:n,to:a.link,target:"_blank",rel:"noopener noreferrer"},a.title)}))))}}]),n}(f.Component);z.propTypes={appId:v.a.string,settings:v.a.arrayOf(v.a.shape({id:v.a.string,title:v.a.string,ignoreCase:v.a.bool,subItems:function(){return z.propTypes.settings}})),activeApp:v.a.string,navHidden:v.a.bool,activeLocation:v.a.string,documentation:v.a.string,onNavigate:v.a.func,onClearActive:v.a.func,activeGroup:v.a.string};var H=Object(I.connect)((function(e){var t=e.chrome;return{settings:t.globalNav,activeApp:t.activeApp,navHidden:t.navHidden,activeLocation:t.activeLocation,activeGroup:t.activeGroup,appId:t.appId}}),(function(e){return{onNavigate:function(t,n){return e(Object(C.appNavClick)(t,n))},onClearActive:function(){return e(Object(C.clearActive)())}}}))(z),W=n(159),G=n(123),U=n(160),F=n(1164),J=(n(1162),function(e){var t,n=e.currentApp,a=Object(f.useState)(!1),o=b()(a,2),i=o[0],r=o[1];return m.a.createElement("section",{className:"ins-c-app-switcher"},m.a.createElement(W.Dropdown,{isPlain:!0,className:"ins-c-app-switcher__dropdown",onSelect:function(){return r(!i)},toggle:m.a.createElement(U.DropdownToggle,{id:"toggle-id",onToggle:function(){return r(!i)},toggleIndicator:F.CaretDownIcon},n),isOpen:i,dropdownItems:(t=n,[{title:"Red Hat Insights",id:"insights"},{title:"Red Hat OpenShift Cluster Manager",id:"openshift"},{title:"Red Hat Ansible Automation Platform",id:"ansible"},{title:"Cost Management",id:"cost-management"},{title:"Migration Services",id:"migrations"},{title:"Subscription Watch",id:"subscriptions"}].map((function(e){return m.a.createElement(G.DropdownItem,{component:"a",href:"".concat(document.baseURI).concat(e.id),className:T()({"ins-c-app-switcher__current":e.title===t}),key:e.id},e.title)})))}))}),K=J;function q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=u()(e);if(t){var o=u()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return p()(this,n)}}J.propTypes={currentApp:v.a.string};var Q={insights:"https://access.redhat.com/documentation/en-us/red_hat_insights/",openshift:"https://docs.openshift.com/dedicated/4/",subscriptions:"https://access.redhat.com/products/subscription-central","cost-management":"https://access.redhat.com/documentation/en-us/openshift_container_platform/#category-cost-management",ansible:"https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/"},X=function(e){s()(n,e);var t=q(n);function n(){return o()(this,n),t.apply(this,arguments)}return r()(n,[{key:"render",value:function(){var e=this.props,t=e.activeTechnology,n=e.activeLocation;return m.a.createElement(f.Fragment,null,m.a.createElement(K,{currentApp:t}),m.a.createElement(H,{documentation:Q[n]}))}}]),n}(f.Component);X.propTypes={activeTechnology:v.a.string,activeLocation:v.a.string},X.defaultProps={activeTechnology:"",activeLocation:""};t.default=Object(I.connect)((function(e){var t=e.chrome;return{activeTechnology:t.activeTechnology,activeLocation:t.activeLocation}}))(X)},821:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},829:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}e.exports=function(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}},833:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},834:function(e,t,n){var a=n(852);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},835:function(e,t,n){var a=n(338),o=n(821);e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?o(e):t}},836:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},852:function(e,t){function n(t,a){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,a)}e.exports=n},911:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(3),o=a.__importStar(n(1)),i=a.__importDefault(n(30)),r=n(2),c=n(72);t.NavContext=o.createContext({});class s extends o.Component{constructor(){super(...arguments),this.state={isScrollable:!1}}onSelect(e,t,n,a,o,i){o&&e.preventDefault(),this.props.onSelect({groupId:t,itemId:n,event:e,to:a}),i&&i(e,n,t,a)}onToggle(e,t,n){this.props.onToggle({event:e,groupId:t,isExpanded:n})}render(){const e=this.props,{"aria-label":n,children:l,className:p,onSelect:d,onToggle:u,theme:f,ouiaId:m,ouiaSafe:h,variant:v}=e,g=a.__rest(e,["aria-label","children","className","onSelect","onToggle","theme","ouiaId","ouiaSafe","variant"]),b=["horizontal","tertiary"].includes(v);return o.createElement(t.NavContext.Provider,{value:{onSelect:(e,t,n,a,o,i)=>this.onSelect(e,t,n,a,o,i),onToggle:(e,t,n)=>this.onToggle(e,t,n),updateIsScrollable:e=>this.setState({isScrollable:e}),isHorizontal:b}},o.createElement("nav",Object.assign({className:r.css(i.default.nav,"light"===f&&i.default.modifiers.light,b&&i.default.modifiers.horizontal,"tertiary"===v&&i.default.modifiers.tertiary,this.state.isScrollable&&i.default.modifiers.scrollable,p),"aria-label":n||"tertiary"===v?"Local":"Global"},c.getOUIAProps(s.displayName,m,h),g),l))}}t.Nav=s,s.displayName="Nav",s.defaultProps={onSelect:()=>{},onToggle:()=>{},theme:"dark",ouiaSafe:!0}}}]);
//# sourceMappingURL=sourcemaps/Sidenav.js.map