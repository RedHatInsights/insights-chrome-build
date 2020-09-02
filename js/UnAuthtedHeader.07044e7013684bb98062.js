(window.wpJsonpChromeInstance=window.wpJsonpChromeInstance||[]).push([[7],{2843:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(3501),l=n(3502),o=n(3054);t.default=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(o.a,null),r.a.createElement(i.a,null),r.a.createElement(l.a,null))}},2867:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},2877:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},2878:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}e.exports=function(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}},2879:function(e,t,n){var a=n(2918);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},2880:function(e,t,n){var a=n(467),r=n(2867);e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?r(e):t}},2881:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},2918:function(e,t){function n(t,a){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,a)}e.exports=n},2919:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(3).__importStar(n(1));t.AlertContext=a.createContext(null)},2959:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(3),r=a.__importStar(n(1)),i=n(1),l=n(2),o=a.__importDefault(n(111)),c=a.__importDefault(n(148)),s=n(2960),u=n(87),f=n(2919),m=a.__importDefault(n(475));var d;!function(e){e.success="success",e.danger="danger",e.warning="warning",e.info="info",e.default="default"}(d=t.AlertVariant||(t.AlertVariant={})),t.Alert=e=>{var{variant:n=d.default,isInline:p=!1,isLiveRegion:v=!1,variantLabel:_=u.capitalize(n)+" alert:","aria-label":g=u.capitalize(n)+" Alert",actionClose:b,actionLinks:h,title:y,children:E="",className:O="",ouiaId:A,ouiaSafe:N=!0,timeout:C=!1,truncateTitle:w=0}=e,I=a.__rest(e,["variant","isInline","isLiveRegion","variantLabel","aria-label","actionClose","actionLinks","title","children","className","ouiaId","ouiaSafe","timeout","truncateTitle"]);const x=r.createElement(r.Fragment,null,r.createElement("span",{className:l.css(c.default.screenReader)},_),y),[T,j]=i.useState(!1),D=r.useRef(null);r.useEffect(()=>{D.current&&w&&D.current.style.setProperty(m.default.name,w.toString())},[D,w]);const P=l.css(o.default.alert,p&&o.default.modifiers.inline,n!==d.default&&o.default.modifiers[n],O);return!1===T&&C&&0!==C&&setTimeout(()=>{j(!0)},!0===C?8e3:C),!1===T?r.createElement("div",Object.assign({},I,{className:P,"aria-label":g},u.getOUIAProps(t.Alert.displayName,A,N),v&&{"aria-live":"polite","aria-atomic":"false"}),r.createElement(s.AlertIcon,{variant:n}),r.createElement("h4",{ref:D,className:l.css(o.default.alertTitle,w&&o.default.modifiers.truncate)},x),b&&r.createElement(f.AlertContext.Provider,{value:{title:y,variantLabel:_}},r.createElement("div",{className:l.css(o.default.alertAction)},b)),E&&r.createElement("div",{className:l.css(o.default.alertDescription)},E),h&&r.createElement("div",{className:l.css(o.default.alertActionGroup)},h)):null},t.Alert.displayName="Alert"},2960:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(3),r=a.__importStar(n(1)),i=n(2),l=a.__importDefault(n(111)),o=a.__importDefault(n(196)),c=a.__importDefault(n(289)),s=a.__importDefault(n(290)),u=a.__importDefault(n(291)),f=a.__importDefault(n(197));t.variantIcons={success:o.default,danger:c.default,warning:s.default,info:u.default,default:f.default},t.AlertIcon=e=>{var{variant:n,className:o=""}=e,c=a.__rest(e,["variant","className"]);const s=t.variantIcons[n];return r.createElement("div",Object.assign({},c,{className:i.css(l.default.alertIcon,o)}),r.createElement(s,null))}},2998:function(e,t,n){"use strict";t.a=n.p+"fonts/logo.svg"},3053:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(3),r=a.__importStar(n(1)),i=n(96),l=a.__importDefault(n(53)),o=n(2919);t.AlertActionCloseButton=e=>{var{className:t="",onClose:n=(()=>{}),"aria-label":c="",variantLabel:s}=e,u=a.__rest(e,["className","onClose","aria-label","variantLabel"]);return r.createElement(o.AlertContext.Consumer,null,({title:e,variantLabel:t})=>r.createElement(i.Button,Object.assign({variant:i.ButtonVariant.plain,onClick:n,"aria-label":""===c?`Close ${s||t} alert: ${e}`:c},u),r.createElement(l.default,null)))},t.AlertActionCloseButton.displayName="AlertActionCloseButton"},3054:function(e,t,n){"use strict";var a=n(1),r=n.n(a),i=n(13),l=n.n(i),o=n(42),c=n(98),s=n(163),u=n(3056),f=n.n(u),m=n(3055),d=function(e){var t=e.toggleNav,n=e.navHidden;return r.a.createElement("div",{className:"pf-c-page__header-brand"},r.a.createElement("div",{hidden:n,className:"pf-c-page__header-brand-toggle"},r.a.createElement(s.Button,{variant:"plain","aria-label":"Toggle primary navigation","widget-type":"InsightsNavToggle",onClick:function(){return t&&t()}},r.a.createElement(f.a,{size:"md"}))),r.a.createElement("a",{className:"pf-c-page__header-brand-link",href:"./"},r.a.createElement(m.a,null)))};d.propTypes={navHidden:l.a.bool,toggleNav:l.a.func},t.a=Object(o.connect)((function(e){return{navHidden:e.chrome.navHidden}}),(function(e){return{toggleNav:function(){e(Object(c.onToggle)())}}}))(d)},3055:function(e,t,n){"use strict";var a=n(1),r=n.n(a),i=n(2998);t.a=function(){return r.a.createElement("img",{src:i.a,alt:"Red Hat Logo"})}},3056:function(e,t,n){"use strict";t.__esModule=!0,t.BarsIconConfig={name:"BarsIcon",height:512,width:448,svgPath:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",yOffset:0,xOffset:0,transform:""},t.BarsIcon=n(95).createIcon(t.BarsIconConfig),t.default=t.BarsIcon},3501:function(e,t,n){"use strict";var a=n(1),r=n.n(a),i=n(163),l=n(175);t.a=function(){return r.a.createElement("div",{className:"pf-c-page__header-tools"},r.a.createElement(i.Button,{variant:"tertiary","aria-label":"Toggle primary navigation","widget-type":"InsightsNavToggle",onClick:l.login},"Log in"))}},3502:function(e,t,n){"use strict";var a=n(2877),r=n.n(a),i=n(2878),l=n.n(i),o=n(2867),c=n.n(o),s=n(2879),u=n.n(s),f=n(2880),m=n.n(f),d=n(2881),p=n.n(d),v=n(16),_=n.n(v),g=n(1),b=n.n(g),h=n(2959),y=n(3053),E=n(124),O=n.n(E);n(3503);function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=p()(e);if(t){var r=p()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return m()(this,n)}}var N=function(e){u()(n,e);var t=A(n);function n(e){var a;return r()(this,n),a=t.call(this,e),_()(c()(a),"hideAlertOne",(function(){a.setState({alertOneVisible:!1}),O.a.set("cs_loggedOut","false")})),_()(c()(a),"setTimer",(function(){null!==a._timer&&clearTimeout(a._timer),a._timer=setTimeout(function(){this.setState({alertOneVisible:!1}),clearTimeout(this._timer)}.bind(c()(a)),a.state.delay)})),a.state={alertOneVisible:"true"===O.a.get("cs_loggedOut"),delay:8e3},a}return l()(n,[{key:"componentDidMount",value:function(){this.setTimer()}},{key:"componentWillUnmount",value:function(){clearTimeout(this._timer)}},{key:"render",value:function(){var e=this.state.alertOneVisible;return b.a.createElement(b.a.Fragment,null,e&&b.a.createElement(h.Alert,{variant:"success",title:"You have successfully logged out.",className:"ins-c-alert__logout",action:b.a.createElement(y.AlertActionCloseButton,{onClose:this.hideAlertOne})}))}}]),n}(b.a.Component);t.a=N},3503:function(e,t,n){var a=n(6),r=n(3504);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},3504:function(e,t,n){(t=n(7)(!1)).push([e.i,".ins-c-alert__logout .pf-c-alert__title{padding:unset}.ins-c-alert__logout .pf-c-alert__icon{padding:unset;background-color:unset}\n",""]),e.exports=t}}]);
//# sourceMappingURL=sourcemaps/UnAuthtedHeader.js.map