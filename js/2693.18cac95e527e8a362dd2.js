(self.webpackChunkinsights_chrome=self.webpackChunkinsights_chrome||[]).push([[2693],{56540:(e,t,r)=>{"use strict";r.d(t,{E7:()=>o,wC:()=>s});r(63367);var i=r(77460),n=r(75622),o=new n.HostsApi(void 0,"/api/inventory/v1",i.ZP),s=function(e){return o.apiHostGetHostSystemProfileById([e])}},7550:(e,t,r)=>{"use strict";r.d(t,{wC:()=>i.wC,E7:()=>i.E7});var i=r(56540)},73217:(e,t,r)=>{"use strict";r.d(t,{a:()=>s});var i=r(319),n=r.n(i),o=["LOAD_SYSTEM_PROFILE"].reduce((function(e,t){return[].concat(n()(e),[t,"".concat(t,"_PENDING"),"".concat(t,"_FULFILLED"),"".concat(t,"_REJECTED")])}),[]),s=n()(o).reduce((function(e,t){return e[t]=t,e}),{SET_DISPLAY_NAME:"SET_DISPLAY_NAME",SET_ANSIBLE_HOST:"SET_ANSIBLE_HOST"})},328:(e,t,r)=>{"use strict";r.d(t,{eR:()=>o,$Y:()=>s,Uw:()=>a});var i=r(73217),n=r(7550),o=function(e){return{type:i.a.LOAD_SYSTEM_PROFILE,payload:(0,n.wC)(e,{})}},s=function(e,t){return{type:i.a.SET_DISPLAY_NAME,payload:n.E7.apiHostPatchById([e],{display_name:t}),meta:{notifications:{fulfilled:{variant:"success",title:"Display name has been updated",dismissable:!0}}}}},a=function(e,t){return{type:i.a.SET_ANSIBLE_HOST,payload:n.E7.apiHostPatchById([e],{ansible_host:t}),meta:{notifications:{fulfilled:{variant:"success",title:"Ansible hostname has been updated",dismissable:!0}}}}}},66125:(e,t,r)=>{"use strict";r.d(t,{W2:()=>l,J7:()=>h,td:()=>f,b5:()=>y,bI:()=>v,Y4:()=>m,EG:()=>H,ZP:()=>b});var i,n=r(319),o=r.n(n),s=r(59713),a=r.n(s),u=r(18546),c=r(73217);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={loaded:!1},h=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],f=function(e){if(0===e||isNaN(Number(e)))return"0 B";var t=Math.floor(Math.log(e)/Math.log(1024));return"".concat(parseFloat((e/Math.pow(1024,t)).toFixed(2))," ").concat(h[t])};function y(e){return d({},e,{systemProfile:{loaded:!1}})}function v(e){return e&&e.reduce((function(e,t){return d({},e,{},t.enabled?{enabled:[].concat(o()(e.enabled),[t])}:{disabled:[].concat(o()(e.disabled),[t])})}),{enabled:[],disabled:[]})}function m(e){return e&&e.reduce((function(e,t){return{interfaces:[].concat(o()(e.interfaces),[t]),ipv4:[].concat(o()(e.ipv4),o()(t.ipv4_addresses||[])).filter(Boolean),ipv6:[].concat(o()(e.ipv6),o()(t.ipv6_addresses||[])).filter(Boolean)}}),{interfaces:[],ipv4:[],ipv6:[]})}function H(e,t){var r=t.payload.results,i=r&&r[0]&&r[0].system_profile||{};return d({},e,{systemProfile:d({loaded:!0},i,{ramSize:i.system_memory_bytes&&f(i.system_memory_bytes),repositories:v(i.yum_repos),network:m(i.network_interfaces)})})}const b=(0,u.Gg)((i={},a()(i,c.a.LOAD_SYSTEM_PROFILE_FULFILLED,H),a()(i,c.a.LOAD_SYSTEM_PROFILE_PENDING,y),i),{systemProfile:l})},85020:function(e,t,r){"use strict";var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},s=this&&this.__awaiter||function(e,t,r,i){return new(r||(r=Promise))((function(n,o){function s(e){try{u(i.next(e))}catch(e){o(e)}}function a(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}u((i=i.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var r,i,n,o,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,i&&(n=2&o[0]?i.return:o[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,o[1])).done)return n;switch(i=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(n=s.trys,(n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){s.label=o[1];break}if(6===o[0]&&s.label<n[1]){s.label=n[1],n=o;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(o);break}n[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],i=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var u=r(8575),c=r(9669),p=r(11616);!function(e){e.Enforcing="enforcing",e.Permissive="permissive",e.Disabled="disabled"}(t.SystemProfileSelinuxCurrentModeEnum||(t.SystemProfileSelinuxCurrentModeEnum={})),function(e){e.Enforcing="enforcing",e.Permissive="permissive",e.Disabled="disabled"}(t.SystemProfileSelinuxConfigFileEnum||(t.SystemProfileSelinuxConfigFileEnum={})),function(e){e.RHEL="RHEL"}(t.SystemProfileOperatingSystemNameEnum||(t.SystemProfileOperatingSystemNameEnum={})),t.DefaultApiAxiosParamCreator=function(e){var t=this;return{apiSystemProfileValidateSchema:function(r,i,n,c){return void 0===c&&(c={}),s(t,void 0,void 0,(function(){var t,s,d,l,h,f,y,v;return a(this,(function(a){switch(a.label){case 0:if(null==r)throw new p.RequiredError("repoBranch","Required parameter repoBranch was null or undefined when calling apiSystemProfileValidateSchema.");return"/system_profile/validate_schema",t=u.parse("/system_profile/validate_schema",!0),e&&(s=e.baseOptions),d=o(o({method:"POST"},s),c),l={},h={},e&&e.apiKey?"function"!=typeof e.apiKey?[3,2]:[4,e.apiKey("x-rh-identity")]:[3,5];case 1:return y=a.sent(),[3,4];case 2:return[4,e.apiKey];case 3:y=a.sent(),a.label=4;case 4:f=y,l["x-rh-identity"]=f,a.label=5;case 5:return void 0!==i&&(h.repo_fork=i),void 0!==r&&(h.repo_branch=r),void 0!==n&&(h.days=n),t.query=o(o(o({},t.query),h),c.query),delete t.search,v=s&&s.headers?s.headers:{},d.headers=o(o(o({},l),v),c.headers),[2,{url:u.format(t),options:d}]}}))}))}}},t.DefaultApiFp=function(e){return{apiSystemProfileValidateSchema:function(r,i,n,u){return s(this,void 0,void 0,(function(){var s;return a(this,(function(a){switch(a.label){case 0:return[4,t.DefaultApiAxiosParamCreator(e).apiSystemProfileValidateSchema(r,i,n,u)];case 1:return s=a.sent(),[2,function(e,t){void 0===e&&(e=c.default),void 0===t&&(t=p.BASE_PATH);var r=o(o({},s.options),{url:t+s.url});return e.request(r)}]}}))}))}}},t.DefaultApiFactory=function(e,r,i){return{apiSystemProfileValidateSchema:function(n,o,s,a){return t.DefaultApiFp(e).apiSystemProfileValidateSchema(n,o,s,a).then((function(e){return e(i,r)}))}}};var d=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return n(r,e),r.prototype.apiSystemProfileValidateSchema=function(e,r,i,n){var o=this;return t.DefaultApiFp(this.configuration).apiSystemProfileValidateSchema(e,r,i,n).then((function(e){return e(o.axios,o.basePath)}))},r}(p.BaseAPI);t.DefaultApi=d,t.HostsApiAxiosParamCreator=function(e){var t=this;return{apiHostDeleteById:function(r,i,n){return void 0===n&&(n={}),s(t,void 0,void 0,(function(){var t,s,c,d,l,h,f,y,v;return a(this,(function(a){switch(a.label){case 0:if(null==r)throw new p.RequiredError("hostIdList","Required parameter hostIdList was null or undefined when calling apiHostDeleteById.");return t="/hosts/{host_id_list}".replace("{host_id_list}",encodeURIComponent(String(r))),s=u.parse(t,!0),e&&(c=e.baseOptions),d=o(o({method:"DELETE"},c),n),l={},h={},e&&e.apiKey?"function"!=typeof e.apiKey?[3,2]:[4,e.apiKey("x-rh-identity")]:[3,5];case 1:return y=a.sent(),[3,4];case 2:return[4,e.apiKey];case 3:y=a.sent(),a.label=4;case 4:f=y,l["x-rh-identity"]=f,a.label=5;case 5:return void 0!==i&&(h.branch_id=i),s.query=o(o(o({},s.query),h),n.query),delete s.search,v=c&&c.headers?c.headers:{},d.headers=o(o(o({},l),v),n.headers),[2,{url:u.format(s),options:d}]}}))}))},apiHostGetHostById:function(r,i,n,c,d,l,h){return void 0===h&&(h={}),s(t,void 0,void 0,(function(){var t,s,f,y,v,m,H,b,_;return a(this,(function(a){switch(a.label){case 0:if(null==r)throw new p.RequiredError("hostIdList","Required parameter hostIdList was null or undefined when calling apiHostGetHostById.");return t="/hosts/{host_id_list}".replace("{host_id_list}",encodeURIComponent(String(r))),s=u.parse(t,!0),e&&(f=e.baseOptions),y=o(o({method:"GET"},f),h),v={},m={},e&&e.apiKey?"function"!=typeof e.apiKey?[3,2]:[4,e.apiKey("x-rh-identity")]:[3,5];case 1:return b=a.sent(),[3,4];case 2:return[4,e.apiKey];case 3:b=a.sent(),a.label=4;case 4:H=b,v["x-rh-identity"]=H,a.label=5;case 5:return void 0!==i&&(m.branch_id=i),void 0!==n&&(m.per_page=n),void 0!==c&&(m.page=c),void 0!==d&&(m.order_by=d),void 0!==l&&(m.order_how=l),s.query=o(o(o({},s.query),m),h.query),delete s.search,_=f&&f.headers?f.headers:{},y.headers=o(o(o({},v),_),h.headers),[2,{url:u.format(s),options:y}]}}))}))},apiHostGetHostList:function(r,i,n,c,p,d,l,h,f,y,v,m,H,b){return void 0===b&&(b={}),s(t,void 0,void 0,(function(){var t,s,_,g,S,P,w,A;return a(this,(function(a){switch(a.label){case 0:return"/hosts",t=u.parse("/hosts",!0),e&&(s=e.baseOptions),_=o(o({method:"GET"},s),b),g={},S={},e&&e.apiKey?"function"!=typeof e.apiKey?[3,2]:[4,e.apiKey("x-rh-identity")]:[3,5];case 1:return w=a.sent(),[3,4];case 2:return[4,e.apiKey];case 3:w=a.sent(),a.label=4;case 4:P=w,g["x-rh-identity"]=P,a.label=5;case 5:return void 0!==r&&(S.display_name=r),void 0!==i&&(S.fqdn=i),void 0!==n&&(S.hostname_or_id=n),void 0!==c&&(S.insights_id=c),void 0!==p&&(S.branch_id=p),void 0!==d&&(S.per_page=d),void 0!==l&&(S.page=l),void 0!==h&&(S.order_by=h),void 0!==f&&(S.order_how=f),y&&(S.staleness=y),v&&(S.tags=v),void 0!==m&&(S.registered_with=m),void 0!==H&&(S.filter=H),t.query=o(o(o({},t.query),S),b.query),delete t.search,A=s&&s.headers?s.headers:{},_.headers=o(o(o({},g),A),b.headers),[2,{url:u.format(t),options:_}]}}))}))},apiHostGetHostSystemProfileById:function(r,i,n,c,d,l,h){return void 0===h&&(h={}),s(t,void 0,void 0,(function(){var t,s,f,y,v,m,H,b,_;return a(this,(function(a){switch(a.label){case 0:if(null==r)throw new p.RequiredError("hostIdList","Required parameter hostIdList was null or undefined when calling apiHostGetHostSystemProfileById.");return t="/hosts/{host_id_list}/system_profile".replace("{host_id_list}",encodeURIComponent(String(r))),s=u.parse(t,!0),e&&(f=e.baseOptions),y=o(o({method:"GET"},f),h),v={},m={},e&&e.apiKey?"function"!=typeof e.apiKey?[3,2]:[4,e.apiKey("x-rh-identity")]:[3,5];case 1:return b=a.sent(),[3,4];case 2:return[4,e.apiKey];case 3:b=a.sent(),a.label=4;case 4:H=b,v["x-rh-identity"]=H,a.label=5;case 5:return void 0!==i&&(m.per_page=i),void 0!==n&&(m.page=n),void 0!==c&&(m.order_by=c),void 0!==d&&(m.order_how=d),void 0!==l&&(m.branch_id=l),s.query=o(o(o({},s.query),m),h.query),delete s.search,_=f&&f.headers?f.headers:{},y.headers=o(o(o({},v),_),h.headers),[2,{url:u.format(s),options:y}]}}))}))},apiHostGetHostTagCount:function(r,i,n,c,d,l){return void 0===l&&(l={}),s(t,void 0,void 0,(function(){var t,s,h,f,y,v,m,H,b;return a(this,(function(a){switch(a.label){case 0:if(null==r)throw new p.RequiredError("hostIdList","Required parameter hostIdList was null or undefined when calling apiHostGetHostTagCount.");return t="/hosts/{host_id_list}/tags/count".replace("{host_id_list}",encodeURIComponent(String(r))),s=u.parse(t,!0),e&&(h=e.baseOptions),f=o(o({method:"GET"},h),l),y={},v={},e&&e.apiKey?"function"!=typeof e.apiKey?[3,2]:[4,e.apiKey("x-rh-identity")]:[3,5];case 1:return H=a.sent(),[3,4];case 2:return[4,e.apiKey];case 3:H=a.sent(),a.label=4;case 4:m=H,y["x-rh-identity"]=m,a.label=5;case 5:return void 0!==i&&(v.per_page=i),void 0!==n&&(v.page=n),void 0!==c&&(v.order_by=c),void 0!==d&&(v.order_how=d),s.query=o(o(o({},s.query),v),l.query),delete s.search,b=h&&h.headers?h.headers:{},f.headers=o(o(o({},y),b),l.headers),[2,{url:u.format(s),options:f}]}}))}))},apiHostGetHostTags:function(r,i,n,c,d,l,h){return void 0===h&&(h={}),s(t,void 0,void 0,(function(){var t,s,f,y,v,m,H,b,_;return a(this,(function(a){switch(a.label){case 0:if(null==r)throw new p.RequiredError("hostIdList","Required parameter hostIdList was null or undefined when calling apiHostGetHostTags.");return t="/hosts/{host_id_list}/tags".replace("{host_id_list}",encodeURIComponent(String(r))),s=u.parse(t,!0),e&&(f=e.baseOptions),y=o(o({method:"GET"},f),h),v={},m={},e&&e.apiKey?"function"!=typeof e.apiKey?[3,2]:[4,e.apiKey("x-rh-identity")]:[3,5];case 1:return b=a.sent(),[3,4];case 2:return[4,e.apiKey];case 3:b=a.sent(),a.label=4;case 4:H=b,v["x-rh-identity"]=H,a.label=5;case 5:return void 0!==i&&(m.per_page=i),void 0!==n&&(m.page=n),void 0!==c&&(m.order_by=c),void 0!==d&&(m.order_how=d),void 0!==l&&(m.search=l),s.query=o(o(o({},s.query),m),h.query),delete s.search,_=f&&f.headers?f.headers:{},y.headers=o(o(o({},v),_),h.headers),[2,{url:u.format(s),options:y}]}}))}))},apiHostHostCheckin:function(r,i){return void 0===i&&(i={}),s(t,void 0,void 0,(function(){var t,n,s,c,d,l,h,f,y,v;return a(this,(function(a){switch(a.label){case 0:if(null==r)throw new p.RequiredError("createCheckIn","Required parameter createCheckIn was null or undefined when calling apiHostHostCheckin.");return"/hosts/checkin",t=u.parse("/hosts/checkin",!0),e&&(n=e.baseOptions),s=o(o({method:"POST"},n),i),c={},d={},e&&e.apiKey?"function"!=typeof e.apiKey?[3,2]:[4,e.apiKey("x-rh-identity")]:[3,5];case 1:return h=a.sent(),[3,4];case 2:return[4,e.apiKey];case 3:h=a.sent(),a.label=4;case 4:l=h,c["x-rh-identity"]=l,a.label=5;case 5:return e&&e.accessToken&&(f="function"==typeof e.accessToken?e.accessToken():e.accessToken,c.Authorization="Bearer "+f),c["Content-Type"]="application/json",t.query=o(o(o({},t.query),d),i.query),delete t.search,y=n&&n.headers?n.headers:{},s.headers=o(o(o({},c),y),i.headers),v="string"!=typeof r||"application/json"===s.headers["Content-Type"],s.data=v?JSON.stringify(void 0!==r?r:{}):r||"",[2,{url:u.format(t),options:s}]}}))}))},apiHostMergeFacts:function(r,i,n,c,d){return void 0===d&&(d={}),s(t,void 0,void 0,(function(){var t,s,l,h,f,y,v,m,H,b;return a(this,(function(a){switch(a.label){case 0:if(null==r)throw new p.RequiredError("hostIdList","Required parameter hostIdList was null or undefined when calling apiHostMergeFacts.");if(null==i)throw new p.RequiredError("namespace","Required parameter namespace was null or undefined when calling apiHostMergeFacts.");if(null==n)throw new p.RequiredError("body","Required parameter body was null or undefined when calling apiHostMergeFacts.");return t="/hosts/{host_id_list}/facts/{namespace}".replace("{host_id_list}",encodeURIComponent(String(r))).replace("{namespace}",encodeURIComponent(String(i))),s=u.parse(t,!0),e&&(l=e.baseOptions),h=o(o({method:"PATCH"},l),d),f={},y={},e&&e.apiKey?"function"!=typeof e.apiKey?[3,2]:[4,e.apiKey("x-rh-identity")]:[3,5];case 1:return m=a.sent(),[3,4];case 2:return[4,e.apiKey];case 3:m=a.sent(),a.label=4;case 4:v=m,f["x-rh-identity"]=v,a.label=5;case 5:return void 0!==c&&(y.branch_id=c),f["Content-Type"]="application/json",s.query=o(o(o({},s.query),y),d.query),delete s.search,H=l&&l.headers?l.headers:{},h.headers=o(o(o({},f),H),d.headers),b="string"!=typeof n||"application/json"===h.headers["Content-Type"],h.data=b?JSON.stringify(void 0!==n?n:{}):n||"",[2,{url:u.format(s),options:h}]}}))}))},apiHostPatchById:function(r,i,n,c){return void 0===c&&(c={}),s(t,void 0,void 0,(function(){var t,s,d,l,h,f,y,v,m,H;return a(this,(function(a){switch(a.label){case 0:if(null==r)throw new p.RequiredError("hostIdList","Required parameter hostIdList was null or undefined when calling apiHostPatchById.");if(null==i)throw new p.RequiredError("patchHostIn","Required parameter patchHostIn was null or undefined when calling apiHostPatchById.");return t="/hosts/{host_id_list}".replace("{host_id_list}",encodeURIComponent(String(r))),s=u.parse(t,!0),e&&(d=e.baseOptions),l=o(o({method:"PATCH"},d),c),h={},f={},e&&e.apiKey?"function"!=typeof e.apiKey?[3,2]:[4,e.apiKey("x-rh-identity")]:[3,5];case 1:return v=a.sent(),[3,4];case 2:return[4,e.apiKey];case 3:v=a.sent(),a.label=4;case 4:y=v,h["x-rh-identity"]=y,a.label=5;case 5:return void 0!==n&&(f.branch_id=n),h["Content-Type"]="application/json",s.query=o(o(o({},s.query),f),c.query),delete s.search,m=d&&d.headers?d.headers:{},l.headers=o(o(o({},h),m),c.headers),H="string"!=typeof i||"application/json"===l.headers["Content-Type"],l.data=H?JSON.stringify(void 0!==i?i:{}):i||"",[2,{url:u.format(s),options:l}]}}))}))},apiHostReplaceFacts:function(r,i,n,c,d){return void 0===d&&(d={}),s(t,void 0,void 0,(function(){var t,s,l,h,f,y,v,m,H,b;return a(this,(function(a){switch(a.label){case 0:if(null==r)throw new p.RequiredError("hostIdList","Required parameter hostIdList was null or undefined when calling apiHostReplaceFacts.");if(null==i)throw new p.RequiredError("namespace","Required parameter namespace was null or undefined when calling apiHostReplaceFacts.");if(null==n)throw new p.RequiredError("body","Required parameter body was null or undefined when calling apiHostReplaceFacts.");return t="/hosts/{host_id_list}/facts/{namespace}".replace("{host_id_list}",encodeURIComponent(String(r))).replace("{namespace}",encodeURIComponent(String(i))),s=u.parse(t,!0),e&&(l=e.baseOptions),h=o(o({method:"PUT"},l),d),f={},y={},e&&e.apiKey?"function"!=typeof e.apiKey?[3,2]:[4,e.apiKey("x-rh-identity")]:[3,5];case 1:return m=a.sent(),[3,4];case 2:return[4,e.apiKey];case 3:m=a.sent(),a.label=4;case 4:v=m,f["x-rh-identity"]=v,a.label=5;case 5:return void 0!==c&&(y.branch_id=c),f["Content-Type"]="application/json",s.query=o(o(o({},s.query),y),d.query),delete s.search,H=l&&l.headers?l.headers:{},h.headers=o(o(o({},f),H),d.headers),b="string"!=typeof n||"application/json"===h.headers["Content-Type"],h.data=b?JSON.stringify(void 0!==n?n:{}):n||"",[2,{url:u.format(s),options:h}]}}))}))}}},t.HostsApiFp=function(e){return{apiHostDeleteById:function(r,i,n){return s(this,void 0,void 0,(function(){var s;return a(this,(function(a){switch(a.label){case 0:return[4,t.HostsApiAxiosParamCreator(e).apiHostDeleteById(r,i,n)];case 1:return s=a.sent(),[2,function(e,t){void 0===e&&(e=c.default),void 0===t&&(t=p.BASE_PATH);var r=o(o({},s.options),{url:t+s.url});return e.request(r)}]}}))}))},apiHostGetHostById:function(r,i,n,u,d,l,h){return s(this,void 0,void 0,(function(){var s;return a(this,(function(a){switch(a.label){case 0:return[4,t.HostsApiAxiosParamCreator(e).apiHostGetHostById(r,i,n,u,d,l,h)];case 1:return s=a.sent(),[2,function(e,t){void 0===e&&(e=c.default),void 0===t&&(t=p.BASE_PATH);var r=o(o({},s.options),{url:t+s.url});return e.request(r)}]}}))}))},apiHostGetHostList:function(r,i,n,u,d,l,h,f,y,v,m,H,b,_){return s(this,void 0,void 0,(function(){var s;return a(this,(function(a){switch(a.label){case 0:return[4,t.HostsApiAxiosParamCreator(e).apiHostGetHostList(r,i,n,u,d,l,h,f,y,v,m,H,b,_)];case 1:return s=a.sent(),[2,function(e,t){void 0===e&&(e=c.default),void 0===t&&(t=p.BASE_PATH);var r=o(o({},s.options),{url:t+s.url});return e.request(r)}]}}))}))},apiHostGetHostSystemProfileById:function(r,i,n,u,d,l,h){return s(this,void 0,void 0,(function(){var s;return a(this,(function(a){switch(a.label){case 0:return[4,t.HostsApiAxiosParamCreator(e).apiHostGetHostSystemProfileById(r,i,n,u,d,l,h)];case 1:return s=a.sent(),[2,function(e,t){void 0===e&&(e=c.default),void 0===t&&(t=p.BASE_PATH);var r=o(o({},s.options),{url:t+s.url});return e.request(r)}]}}))}))},apiHostGetHostTagCount:function(r,i,n,u,d,l){return s(this,void 0,void 0,(function(){var s;return a(this,(function(a){switch(a.label){case 0:return[4,t.HostsApiAxiosParamCreator(e).apiHostGetHostTagCount(r,i,n,u,d,l)];case 1:return s=a.sent(),[2,function(e,t){void 0===e&&(e=c.default),void 0===t&&(t=p.BASE_PATH);var r=o(o({},s.options),{url:t+s.url});return e.request(r)}]}}))}))},apiHostGetHostTags:function(r,i,n,u,d,l,h){return s(this,void 0,void 0,(function(){var s;return a(this,(function(a){switch(a.label){case 0:return[4,t.HostsApiAxiosParamCreator(e).apiHostGetHostTags(r,i,n,u,d,l,h)];case 1:return s=a.sent(),[2,function(e,t){void 0===e&&(e=c.default),void 0===t&&(t=p.BASE_PATH);var r=o(o({},s.options),{url:t+s.url});return e.request(r)}]}}))}))},apiHostHostCheckin:function(r,i){return s(this,void 0,void 0,(function(){var n;return a(this,(function(s){switch(s.label){case 0:return[4,t.HostsApiAxiosParamCreator(e).apiHostHostCheckin(r,i)];case 1:return n=s.sent(),[2,function(e,t){void 0===e&&(e=c.default),void 0===t&&(t=p.BASE_PATH);var r=o(o({},n.options),{url:t+n.url});return e.request(r)}]}}))}))},apiHostMergeFacts:function(r,i,n,u,d){return s(this,void 0,void 0,(function(){var s;return a(this,(function(a){switch(a.label){case 0:return[4,t.HostsApiAxiosParamCreator(e).apiHostMergeFacts(r,i,n,u,d)];case 1:return s=a.sent(),[2,function(e,t){void 0===e&&(e=c.default),void 0===t&&(t=p.BASE_PATH);var r=o(o({},s.options),{url:t+s.url});return e.request(r)}]}}))}))},apiHostPatchById:function(r,i,n,u){return s(this,void 0,void 0,(function(){var s;return a(this,(function(a){switch(a.label){case 0:return[4,t.HostsApiAxiosParamCreator(e).apiHostPatchById(r,i,n,u)];case 1:return s=a.sent(),[2,function(e,t){void 0===e&&(e=c.default),void 0===t&&(t=p.BASE_PATH);var r=o(o({},s.options),{url:t+s.url});return e.request(r)}]}}))}))},apiHostReplaceFacts:function(r,i,n,u,d){return s(this,void 0,void 0,(function(){var s;return a(this,(function(a){switch(a.label){case 0:return[4,t.HostsApiAxiosParamCreator(e).apiHostReplaceFacts(r,i,n,u,d)];case 1:return s=a.sent(),[2,function(e,t){void 0===e&&(e=c.default),void 0===t&&(t=p.BASE_PATH);var r=o(o({},s.options),{url:t+s.url});return e.request(r)}]}}))}))}}},t.HostsApiFactory=function(e,r,i){return{apiHostDeleteById:function(n,o,s){return t.HostsApiFp(e).apiHostDeleteById(n,o,s).then((function(e){return e(i,r)}))},apiHostGetHostById:function(n,o,s,a,u,c,p){return t.HostsApiFp(e).apiHostGetHostById(n,o,s,a,u,c,p).then((function(e){return e(i,r)}))},apiHostGetHostList:function(n,o,s,a,u,c,p,d,l,h,f,y,v,m){return t.HostsApiFp(e).apiHostGetHostList(n,o,s,a,u,c,p,d,l,h,f,y,v,m).then((function(e){return e(i,r)}))},apiHostGetHostSystemProfileById:function(n,o,s,a,u,c,p){return t.HostsApiFp(e).apiHostGetHostSystemProfileById(n,o,s,a,u,c,p).then((function(e){return e(i,r)}))},apiHostGetHostTagCount:function(n,o,s,a,u,c){return t.HostsApiFp(e).apiHostGetHostTagCount(n,o,s,a,u,c).then((function(e){return e(i,r)}))},apiHostGetHostTags:function(n,o,s,a,u,c,p){return t.HostsApiFp(e).apiHostGetHostTags(n,o,s,a,u,c,p).then((function(e){return e(i,r)}))},apiHostHostCheckin:function(n,o){return t.HostsApiFp(e).apiHostHostCheckin(n,o).then((function(e){return e(i,r)}))},apiHostMergeFacts:function(n,o,s,a,u){return t.HostsApiFp(e).apiHostMergeFacts(n,o,s,a,u).then((function(e){return e(i,r)}))},apiHostPatchById:function(n,o,s,a){return t.HostsApiFp(e).apiHostPatchById(n,o,s,a).then((function(e){return e(i,r)}))},apiHostReplaceFacts:function(n,o,s,a,u){return t.HostsApiFp(e).apiHostReplaceFacts(n,o,s,a,u).then((function(e){return e(i,r)}))}}};var l=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return n(r,e),r.prototype.apiHostDeleteById=function(e,r,i){var n=this;return t.HostsApiFp(this.configuration).apiHostDeleteById(e,r,i).then((function(e){return e(n.axios,n.basePath)}))},r.prototype.apiHostGetHostById=function(e,r,i,n,o,s,a){var u=this;return t.HostsApiFp(this.configuration).apiHostGetHostById(e,r,i,n,o,s,a).then((function(e){return e(u.axios,u.basePath)}))},r.prototype.apiHostGetHostList=function(e,r,i,n,o,s,a,u,c,p,d,l,h,f){var y=this;return t.HostsApiFp(this.configuration).apiHostGetHostList(e,r,i,n,o,s,a,u,c,p,d,l,h,f).then((function(e){return e(y.axios,y.basePath)}))},r.prototype.apiHostGetHostSystemProfileById=function(e,r,i,n,o,s,a){var u=this;return t.HostsApiFp(this.configuration).apiHostGetHostSystemProfileById(e,r,i,n,o,s,a).then((function(e){return e(u.axios,u.basePath)}))},r.prototype.apiHostGetHostTagCount=function(e,r,i,n,o,s){var a=this;return t.HostsApiFp(this.configuration).apiHostGetHostTagCount(e,r,i,n,o,s).then((function(e){return e(a.axios,a.basePath)}))},r.prototype.apiHostGetHostTags=function(e,r,i,n,o,s,a){var u=this;return t.HostsApiFp(this.configuration).apiHostGetHostTags(e,r,i,n,o,s,a).then((function(e){return e(u.axios,u.basePath)}))},r.prototype.apiHostHostCheckin=function(e,r){var i=this;return t.HostsApiFp(this.configuration).apiHostHostCheckin(e,r).then((function(e){return e(i.axios,i.basePath)}))},r.prototype.apiHostMergeFacts=function(e,r,i,n,o){var s=this;return t.HostsApiFp(this.configuration).apiHostMergeFacts(e,r,i,n,o).then((function(e){return e(s.axios,s.basePath)}))},r.prototype.apiHostPatchById=function(e,r,i,n){var o=this;return t.HostsApiFp(this.configuration).apiHostPatchById(e,r,i,n).then((function(e){return e(o.axios,o.basePath)}))},r.prototype.apiHostReplaceFacts=function(e,r,i,n,o){var s=this;return t.HostsApiFp(this.configuration).apiHostReplaceFacts(e,r,i,n,o).then((function(e){return e(s.axios,s.basePath)}))},r}(p.BaseAPI);t.HostsApi=l,t.SapSystemApiAxiosParamCreator=function(e){var t=this;return{apiSystemProfileGetSapSids:function(r,i,n,c,p,d,l,h){return void 0===h&&(h={}),s(t,void 0,void 0,(function(){var t,s,f,y,v,m,H,b;return a(this,(function(a){switch(a.label){case 0:return"/system_profile/sap_sids",t=u.parse("/system_profile/sap_sids",!0),e&&(s=e.baseOptions),f=o(o({method:"GET"},s),h),y={},v={},e&&e.apiKey?"function"!=typeof e.apiKey?[3,2]:[4,e.apiKey("x-rh-identity")]:[3,5];case 1:return H=a.sent(),[3,4];case 2:return[4,e.apiKey];case 3:H=a.sent(),a.label=4;case 4:m=H,y["x-rh-identity"]=m,a.label=5;case 5:return void 0!==r&&(v.search=r),i&&(v.tags=i),void 0!==n&&(v.per_page=n),void 0!==c&&(v.page=c),p&&(v.staleness=p),void 0!==d&&(v.registered_with=d),void 0!==l&&(v.filter=l),t.query=o(o(o({},t.query),v),h.query),delete t.search,b=s&&s.headers?s.headers:{},f.headers=o(o(o({},y),b),h.headers),[2,{url:u.format(t),options:f}]}}))}))},apiSystemProfileGetSapSystem:function(r,i,n,c,p,d,l){return void 0===l&&(l={}),s(t,void 0,void 0,(function(){var t,s,h,f,y,v,m,H;return a(this,(function(a){switch(a.label){case 0:return"/system_profile/sap_system",t=u.parse("/system_profile/sap_system",!0),e&&(s=e.baseOptions),h=o(o({method:"GET"},s),l),f={},y={},e&&e.apiKey?"function"!=typeof e.apiKey?[3,2]:[4,e.apiKey("x-rh-identity")]:[3,5];case 1:return m=a.sent(),[3,4];case 2:return[4,e.apiKey];case 3:m=a.sent(),a.label=4;case 4:v=m,f["x-rh-identity"]=v,a.label=5;case 5:return r&&(y.tags=r),void 0!==i&&(y.per_page=i),void 0!==n&&(y.page=n),c&&(y.staleness=c),void 0!==p&&(y.registered_with=p),void 0!==d&&(y.filter=d),t.query=o(o(o({},t.query),y),l.query),delete t.search,H=s&&s.headers?s.headers:{},h.headers=o(o(o({},f),H),l.headers),[2,{url:u.format(t),options:h}]}}))}))}}},t.SapSystemApiFp=function(e){return{apiSystemProfileGetSapSids:function(r,i,n,u,d,l,h,f){return s(this,void 0,void 0,(function(){var s;return a(this,(function(a){switch(a.label){case 0:return[4,t.SapSystemApiAxiosParamCreator(e).apiSystemProfileGetSapSids(r,i,n,u,d,l,h,f)];case 1:return s=a.sent(),[2,function(e,t){void 0===e&&(e=c.default),void 0===t&&(t=p.BASE_PATH);var r=o(o({},s.options),{url:t+s.url});return e.request(r)}]}}))}))},apiSystemProfileGetSapSystem:function(r,i,n,u,d,l,h){return s(this,void 0,void 0,(function(){var s;return a(this,(function(a){switch(a.label){case 0:return[4,t.SapSystemApiAxiosParamCreator(e).apiSystemProfileGetSapSystem(r,i,n,u,d,l,h)];case 1:return s=a.sent(),[2,function(e,t){void 0===e&&(e=c.default),void 0===t&&(t=p.BASE_PATH);var r=o(o({},s.options),{url:t+s.url});return e.request(r)}]}}))}))}}},t.SapSystemApiFactory=function(e,r,i){return{apiSystemProfileGetSapSids:function(n,o,s,a,u,c,p,d){return t.SapSystemApiFp(e).apiSystemProfileGetSapSids(n,o,s,a,u,c,p,d).then((function(e){return e(i,r)}))},apiSystemProfileGetSapSystem:function(n,o,s,a,u,c,p){return t.SapSystemApiFp(e).apiSystemProfileGetSapSystem(n,o,s,a,u,c,p).then((function(e){return e(i,r)}))}}};var h=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return n(r,e),r.prototype.apiSystemProfileGetSapSids=function(e,r,i,n,o,s,a,u){var c=this;return t.SapSystemApiFp(this.configuration).apiSystemProfileGetSapSids(e,r,i,n,o,s,a,u).then((function(e){return e(c.axios,c.basePath)}))},r.prototype.apiSystemProfileGetSapSystem=function(e,r,i,n,o,s,a){var u=this;return t.SapSystemApiFp(this.configuration).apiSystemProfileGetSapSystem(e,r,i,n,o,s,a).then((function(e){return e(u.axios,u.basePath)}))},r}(p.BaseAPI);t.SapSystemApi=h,t.TagsApiAxiosParamCreator=function(e){var t=this;return{apiTagGetTags:function(r,i,n,c,p,d,l,h,f,y){return void 0===y&&(y={}),s(t,void 0,void 0,(function(){var t,s,v,m,H,b,_,g;return a(this,(function(a){switch(a.label){case 0:return"/tags",t=u.parse("/tags",!0),e&&(s=e.baseOptions),v=o(o({method:"GET"},s),y),m={},H={},e&&e.apiKey?"function"!=typeof e.apiKey?[3,2]:[4,e.apiKey("x-rh-identity")]:[3,5];case 1:return _=a.sent(),[3,4];case 2:return[4,e.apiKey];case 3:_=a.sent(),a.label=4;case 4:b=_,m["x-rh-identity"]=b,a.label=5;case 5:return r&&(H.tags=r),void 0!==i&&(H.order_by=i),void 0!==n&&(H.order_how=n),void 0!==c&&(H.per_page=c),void 0!==p&&(H.page=p),d&&(H.staleness=d),void 0!==l&&(H.search=l),void 0!==h&&(H.registered_with=h),void 0!==f&&(H.filter=f),t.query=o(o(o({},t.query),H),y.query),delete t.search,g=s&&s.headers?s.headers:{},v.headers=o(o(o({},m),g),y.headers),[2,{url:u.format(t),options:v}]}}))}))}}},t.TagsApiFp=function(e){return{apiTagGetTags:function(r,i,n,u,d,l,h,f,y,v){return s(this,void 0,void 0,(function(){var s;return a(this,(function(a){switch(a.label){case 0:return[4,t.TagsApiAxiosParamCreator(e).apiTagGetTags(r,i,n,u,d,l,h,f,y,v)];case 1:return s=a.sent(),[2,function(e,t){void 0===e&&(e=c.default),void 0===t&&(t=p.BASE_PATH);var r=o(o({},s.options),{url:t+s.url});return e.request(r)}]}}))}))}}},t.TagsApiFactory=function(e,r,i){return{apiTagGetTags:function(n,o,s,a,u,c,p,d,l,h){return t.TagsApiFp(e).apiTagGetTags(n,o,s,a,u,c,p,d,l,h).then((function(e){return e(i,r)}))}}};var f=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return n(r,e),r.prototype.apiTagGetTags=function(e,r,i,n,o,s,a,u,c,p){var d=this;return t.TagsApiFp(this.configuration).apiTagGetTags(e,r,i,n,o,s,a,u,c,p).then((function(e){return e(d.axios,d.basePath)}))},r}(p.BaseAPI);t.TagsApi=f},11616:function(e,t,r){"use strict";var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var o=r(9669);t.BASE_PATH="http://localhost".replace(/\/+$/,""),t.COLLECTION_FORMATS={csv:",",ssv:" ",tsv:"\t",pipes:"|"};var s=function(e,r,i){void 0===r&&(r=t.BASE_PATH),void 0===i&&(i=o.default),this.basePath=r,this.axios=i,e&&(this.configuration=e,this.basePath=e.basePath||this.basePath)};t.BaseAPI=s;var a=function(e){function t(t,r){var i=e.call(this,r)||this;return i.field=t,i.name="RequiredError",i}return n(t,e),t}(Error);t.RequiredError=a},24484:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){void 0===e&&(e={}),this.apiKey=e.apiKey,this.username=e.username,this.password=e.password,this.accessToken=e.accessToken,this.basePath=e.basePath,this.baseOptions=e.baseOptions};t.Configuration=r},75622:(e,t,r)=>{"use strict";function i(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),i(r(85020)),i(r(24484))},18546:(e,t,r)=>{"use strict";r.d(t,{Gg:()=>v,vj:()=>m,xI:()=>H,G$:()=>b,ZP:()=>_});var i=r(63038),n=r.n(i),o=r(319),s=r.n(o),a=r(34575),u=r.n(a),c=r(93913),p=r.n(c),d=r(59713),l=r.n(d),h=r(14890);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,i=arguments.length>1?arguments[1]:void 0;return Object.prototype.hasOwnProperty.call(e,i.type)?e[i.type](r,i):r}}function m(e,t){return Object.keys(e).reduce((function(r,i){return y({},r,l()({},i,(function(){return t&&t.dispatch(e[i].apply(e,arguments))})))}),{})}var H=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:h.qC;u()(this,e);var n=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i;this.store=(0,h.MT)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t;return e}),t,n(h.md.apply(void 0,s()(r)))),this.reducers={}}return p()(e,[{key:"getStore",value:function(){return this.store}},{key:"register",value:function(e){var t=this;return this.reducers=y({},this.reducers,{},e),this.store.replaceReducer((0,h.UY)(y({},this.reducers))),function(){t.reducers=Object.entries(t.reducers).filter((function(t){return!Object.keys(e).includes(t)})).reduce((function(e,t){var r=n()(t,2),i=r[0],o=r[1];return y({},e,l()({},i,o))}),{}),t.store.replaceReducer((0,h.UY)(y({},t.reducers)))}}}]),e}(),b=new H;const _=H}}]);
//# sourceMappingURL=sourcemaps/2693.js.map