webpackJsonp([0],{20:function(e,t){e.exports=function(e,t,r,n,o){var a,s=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(a=e,s=e.default);var u="function"==typeof s?s.options:s;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):r&&(c=r),c){var l=u.functional,d=l?u.render:u.beforeCreate;l?u.render=function(e,t){return c.call(t),d(e,t)}:u.beforeCreate=d?[].concat(d,c):[c]}return{esModule:a,exports:s,options:u}}},225:function(e,t,r){"use strict";var n=r(325),o=r(326),a=r(20),s=a(n.a,o.a,null,null,null);s.options.__file="src\\components\\card\\Comments.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] Comments.vue: functional components are not supported with templates, they should use render functions."),t.a=s.exports},226:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={submitted:"submitted",by:"by",language:"language",comment:"comment",comments:"comments",loadMore:"load more",moreReply:"more reply",moreReplies:"more replies"}},227:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={ago:"ago",aSecond:"a second",second:"seconds",aFew:"a few",aMinute:"a minute",minutes:"minutes",anHour:"an hour",hours:"hours",aDay:"a day",days:"days",aMonth:"a month",months:"months",aYear:"a year",years:"years"}},228:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={submitted:"สร้างเมื่อ",by:"โดย",language:"ภาษา",comment:"คอมเม้นต์",comments:"คอมเม้นต์",loadMore:"ดูเพิ่ม",moreReply:"ข้อความตอบกลับเพิ่มเติม",moreReplies:"ข้อความตอบกลับเพิ่มเติม"}},229:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={ago:"ที่แล้ว",aSecond:"วินาที",second:"วินาที",aFew:"ไม่กี่วินาที",aMinute:"นาที",minutes:"นาที",anHour:"ชั่วโมง",hours:"ชั่วโมง",aDay:"วัน",days:"วัน",aMonth:"เดือน",months:"เดือน",aYear:"ปี",years:"ปี"}},264:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}r(265);var o=r(95),a=n(o),s=r(96),i=n(s),u=r(97),c=n(u),l=r(98),d=n(l),f=r(99),p=n(f),v=r(270),h=n(v),m=r(293),_=n(m),g=r(330);a.default.use(i.default),a.default.use(c.default),a.default.use(d.default),a.default.use(p.default);var y=new c.default.Store(h.default),b=new d.default({routes:_.default,mode:"history"}),w=(0,g.getSystemLangs)(),C=new p.default({locale:"en",messages:w});new a.default({store:y,router:b,i18n:C}).$mount("#ajkLmeno");var M=document.querySelector("base").getAttribute("href");"localhost"!==window.location.hostname&&"https:"!==window.location.protocol&&(window.location.href=M),"serviceWorker"in navigator&&navigator.serviceWorker.register(M+"sw.js")},265:function(e,t,r){"use strict";r(266),r(268),r(269)},266:function(e,t){},267:function(e,t){function r(e,t){var r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var a=n(o);return[r].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([a]).join("\n")}return[r].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(n[a]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),t.push(s))}},t}},268:function(e,t){},269:function(e,t){},270:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(271),a=n(o),s=r(272),i=n(s),u=r(273),c=n(u);t.default={strict:!1,state:{defaultLayoutPrimaryColor:"indigo",defaultSubReddit:"webdev",drawerOpen:!1,isMainContentLoading:!1,toolbarTitle:"Loading...",isShowLoadMore:!1,isLoadingMore:!1,layoutPrimaryColor:"indigo",drawerMenus:[{title:"WebDev",r:"webdev",icon:"devicon-html5-plain",primaryColor:"deep-orange darken-1"},{title:"VueJS",r:"vuejs",icon:"devicon-vuejs-plain",primaryColor:"green darken-3"},{title:"ReactJS",r:"reactjs",icon:"devicon-react-original",primaryColor:"light-blue lighten-1"},{title:"Angular",r:"Angular2",icon:"devicon-angularjs-plain",primaryColor:"red darken-4"},{title:"Meteor",r:"Meteor",icon:"devicon-meteor-plain",primaryColor:"red accent-4"},{title:"Backbone",r:"backbonejs",icon:"devicon-backbonejs-plain",primaryColor:"indigo darken-4"},{title:"jQuery",r:"jquery",icon:"devicon-jquery-plain",primaryColor:"blue darken-4"},{title:"NodeJS",r:"node",icon:"devicon-nodejs-plain",primaryColor:"green darken-1"},{title:"JavaScript",r:"javascript",icon:"devicon-javascript-plain",primaryColor:"orange lighten-1"}],subReddit:"",threads:[],threadContent:{},comments:[],threadAfter:""},getters:a.default,mutations:i.default,actions:c.default}},271:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={toolbarTitle:function(e){return"r/"+e.toolbarTitle},routeToComments:function(e,t){return function(t){return e.toolbarTitle+"/"+t}}}},272:function(e,t,r){"use strict";(function(e){function r(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var n="";t.default={setDrawerOpen:function(e,t){var r=t.isOpen;e.drawerOpen=r},setMainContentLoading:function(e,t){var r=t.isLoading;e.isMainContentLoading=r},setSubReddit:function(e,t){var r=t.subReddit;e.subReddit=r},setToolbarTitle:function(e){e.toolbarTitle=e.subReddit},setDefaultColor:function(t){n=e.find(t.drawerMenus,function(e){return e.r===t.subReddit}),t.layoutPrimaryColor=n?n.primaryColor:t.defaultLayoutPrimaryColor},emptyThreads:function(e){e.threads=[]},initSubReddit:function(e,t){var r=t.threads;e.threads=r.data.data.children.map(function(e){return e.data})},addNewThreads:function(e,t){var n,o=t.threads,a=o.data.data.children.map(function(e){return e.data});(n=e.threads).push.apply(n,r(a))},setThreadContent:function(e,t){var r=t.thread;e.threadContent=r.data[0].data.children[0].data},setComments:function(e,t){var r=t.comments;e.comments=r.data[1].data.children},emptyThreadContent:function(e){e.threadContent={title:""}},emptyComments:function(e){e.comments=[]},setIsShowLoadMore:function(e,t){var r=t.isShowLoadMore;e.isShowLoadMore=r},setIsLoadingMore:function(e,t){var r=t.isLoadingMore;e.isLoadingMore=r},setThreadAfter:function(e,t){var r=t.threadAfter;e.threadAfter=r}}}).call(t,r(45))},273:function(e,t,r){"use strict";function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,a){try{var s=t[o](a),i=s.value}catch(e){return void r(e)}if(!s.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}return n("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(101),a=function(e){return e&&e.__esModule?e:{default:e}}(o),s={};t.default={setLayoutStateFromParams:function(e,t){var r=e.state,n=e.commit;n({type:"setSubReddit",subReddit:t.r||r.defaultSubReddit}),n("setToolbarTitle"),n("setDefaultColor")},getThreads:function(){function e(e,r){return t.apply(this,arguments)}var t=n(regeneratorRuntime.mark(function e(t,r){var n=t.state,o=t.commit,i=r.action;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o("emptyThreads"),e.next=3,a.default.get("https://www.reddit.com/r/"+n.subReddit+"/hot.json");case 3:if(s=e.sent,200!==s.status){e.next=13;break}e.t0=i,e.next="init"===e.t0?8:11;break;case 8:return o({type:"initSubReddit",threads:s}),o({type:"setThreadAfter",threadAfter:s.data.data.after}),e.abrupt("break",11);case 11:e.next=14;break;case 13:console.error(s);case 14:case"end":return e.stop()}},e,this)}));return e}(),getMoreThreads:function(){function e(e){return t.apply(this,arguments)}var t=n(regeneratorRuntime.mark(function e(t){var r=t.state,n=t.commit;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"setIsLoadingMore",isLoadingMore:!0}),e.next=3,a.default.get("https://www.reddit.com/r/"+r.subReddit+"/hot.json",{params:{after:r.threadAfter}});case 3:s=e.sent,200===s.status&&(n({type:"addNewThreads",threads:s}),n({type:"setThreadAfter",threadAfter:s.data.data.after})),n({type:"setIsLoadingMore",isLoadingMore:!1});case 6:case"end":return e.stop()}},e,this)}));return e}(),getComments:function(){function e(e,r){return t.apply(this,arguments)}var t=n(regeneratorRuntime.mark(function e(t,r){var n=t.state,o=t.commit,i=r.id;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o("emptyThreadContent"),o("emptyComments"),e.next=4,a.default.get("https://www.reddit.com/r/"+n.subReddit+"/comments/"+i+"/.json");case 4:s=e.sent,200===s.status?(o({type:"setThreadContent",thread:s}),o({type:"setComments",comments:s})):console.error(s);case 6:case"end":return e.stop()}},e,this)}));return e}()}},293:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(294),a=n(o),s=r(313),i=n(s),u=r(320),c=n(u),l=r(328),d=n(l);t.default=[{path:"/",component:a.default,children:[{path:"",component:i.default},{path:":r",component:i.default},{path:":r/:id",component:c.default},{path:"*",component:d.default}]}]},294:function(e,t,r){"use strict";function n(e){s||r(295)}Object.defineProperty(t,"__esModule",{value:!0});var o=r(299),a=r(312),s=!1,i=r(20),u=n,c=i(o.a,a.a,u,null,null);c.options.__file="src\\layouts\\Default.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] Default.vue: functional components are not supported with templates, they should use render functions."),t.default=c.exports},295:function(e,t,r){var n=r(296);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(297)("f4560fc6",n,!1)},296:function(e,t,r){t=e.exports=r(267)(void 0),t.push([e.i,"\n.cursor-pointer {\n  cursor: pointer;\n}\n",""])},297:function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=l[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(a(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var s=[],o=0;o<r.parts.length;o++)s.push(a(r.parts[o]));l[r.id]={id:r.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function a(e){var t,r,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(v)return h;n.parentNode.removeChild(n)}if(m){var a=p++;n=f||(f=o()),t=s.bind(null,n,a,!1),r=s.bind(null,n,a,!0)}else n=o(),t=i.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function s(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var a=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function i(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=r(298),l={},d=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r){v=r;var o=c(e,t);return n(o),function(t){for(var r=[],a=0;a<o.length;a++){var s=o[a],i=l[s.id];i.refs--,r.push(i)}t?(o=c(e,t),n(o)):o=[];for(var a=0;a<r.length;a++){var i=r[a];if(0===i.refs){for(var u=0;u<i.parts.length;u++)i.parts[u]();delete l[i.id]}}}};var _=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},298:function(e,t){e.exports=function(e,t){for(var r=[],n={},o=0;o<t.length;o++){var a=t[o],s=a[0],i=a[1],u=a[2],c=a[3],l={id:e+":"+o,css:i,media:u,sourceMap:c};n[s]?n[s].parts.push(l):r.push(n[s]={id:s,parts:[l]})}return r}},299:function(e,t,r){"use strict";var n=r(300),o=r(309);t.a={components:{NavigationDrawer:n.a,DialogLoading:o.a},data:function(){return{dialog:!0}},computed:{drawer:function(){return this.$store.state.drawerOpen},toolbarTitle:function(){return this.$store.getters.toolbarTitle},primaryLayoutClass:function(){return this.$store.state.layoutPrimaryColor}},methods:{toggleDrawer:function(){this.$store.commit("setDrawerOpen",{isOpen:!this.drawer})}},props:{source:String}}},300:function(e,t,r){"use strict";var n=r(301),o=r(308),a=r(20),s=a(n.a,o.a,null,null,null);s.options.__file="src\\components\\navigation\\Drawer.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] Drawer.vue: functional components are not supported with templates, they should use render functions."),t.a=s.exports},301:function(e,t,r){"use strict";var n=r(302);t.a={components:{ListNavigationDrawer:n.a},computed:{drawer:{get:function(){return this.$store.state.drawerOpen},set:function(e){this.$store.commit("setDrawerOpen",{isOpen:e})}}}}},302:function(e,t,r){"use strict";var n=r(303),o=r(307),a=r(20),s=a(n.a,o.a,null,null,null);s.options.__file="src\\components\\list\\NavigationDrawer.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] NavigationDrawer.vue: functional components are not supported with templates, they should use render functions."),t.a=s.exports},303:function(e,t,r){"use strict";var n=r(304);t.a={components:{ButtonLanguage:n.a},methods:{isActive:function(e){return e===this.$store.state.subReddit},routePath:function(e){return e===this.$store.state.defaultSubReddit?"/":"/"+e},openGitHub:function(){window.open("https://github.com/Minnerwa/reddit-vuetifyjs")}}}},304:function(e,t,r){"use strict";var n=r(305),o=r(306),a=r(20),s=a(n.a,o.a,null,null,null);s.options.__file="src\\components\\button\\Language.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] Language.vue: functional components are not supported with templates, they should use render functions."),t.a=s.exports},305:function(e,t,r){"use strict";t.a={props:{lang:{type:String,default:"en"}},computed:{buttonAttrs:function(){return{dark:this.currentLang!==this.lang,light:this.currentLang===this.lang,disabled:this.currentLang===this.lang}},langText:function(){return this.lang.toUpperCase()},layoutPrimaryColor:function(){return this.$store.state.layoutPrimaryColor},drawer:function(){return this.$store.state.drawerOpen},currentLang:function(){return this.$i18n.locale}},methods:{changeLang:function(e){this.$i18n.locale=e,this.$store.commit("setDrawerOpen",{isOpen:!this.drawer})}}}},306:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-btn",e._b({attrs:{color:e.layoutPrimaryColor},on:{click:function(t){e.changeLang(e.lang)}}},"v-btn",e.buttonAttrs,!1),[e._v(e._s(e.langText))])},o=[];n._withStripped=!0;var a={render:n,staticRenderFns:o};t.a=a},307:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-toolbar",{attrs:{flat:""}},[r("v-list",[r("v-list-tile",[r("v-flex",[r("v-list-tile-title",{staticClass:"title"},[e._v("Sub Reddit")])],1),e._v(" "),r("v-flex",[r("v-list-tile-title",{staticClass:"title text-xs-right"},[r("v-icon",{staticClass:"cursor-pointer",attrs:{color:"grey darken-4"},on:{click:function(t){e.openGitHub()}}},[e._v("devicon-github-plain")])],1)],1)],1)],1)],1),e._v(" "),r("v-list",[e._l(e.$store.state.drawerMenus,function(t,n){return[n>0?r("v-divider",{key:n}):e._e(),e._v(" "),r("v-list-tile",{key:n,attrs:{value:e.isActive(t.r)},on:{click:function(r){e.$router.push(e.routePath(t.r))}}},[r("v-list-tile-action",[r("v-icon",{attrs:{color:t.primaryColor}},[e._v(e._s(t.icon))])],1),e._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[e.isActive(t.r)?[r("b",[e._v(e._s(t.title))])]:[e._v("\n               "+e._s(t.title)+"\n            ")]],2)],1)],1)]})],2),e._v(" "),r("v-divider"),e._v(" "),r("v-subheader",[e._v(e._s(e.$t("general.language")))]),e._v(" "),r("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[r("button-language",{attrs:{lang:"en"}}),e._v(" "),r("button-language",{attrs:{lang:"th"}})],1)],1)},o=[];n._withStripped=!0;var a={render:n,staticRenderFns:o};t.a=a},308:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-navigation-drawer",{attrs:{app:"","enable-resize-watcher":"",persistent:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("list-navigation-drawer")],1)},o=[];n._withStripped=!0;var a={render:n,staticRenderFns:o};t.a=a},309:function(e,t,r){"use strict";var n=r(310),o=r(311),a=r(20),s=a(n.a,o.a,null,null,null);s.options.__file="src\\components\\dialog\\Loading.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] Loading.vue: functional components are not supported with templates, they should use render functions."),t.a=s.exports},310:function(e,t,r){"use strict";t.a={computed:{layoutPrimaryColor:function(){return this.$store.state.layoutPrimaryColor},isOpen:function(){return this.$store.state.isMainContentLoading}}}},311:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{persistent:"",fullscreen:!0},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},[r("v-container",{attrs:{"fill-height":""}},[r("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[r("v-flex",{staticClass:"text-xs-center"},[r("v-progress-circular",{attrs:{indeterminate:"",size:125,width:2,color:e.layoutPrimaryColor}})],1)],1)],1)],1)},o=[];n._withStripped=!0;var a={render:n,staticRenderFns:o};t.a=a},312:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("navigation-drawer"),e._v(" "),r("v-toolbar",{class:e.primaryLayoutClass,attrs:{dark:"",fixed:"",app:""}},[r("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.toggleDrawer()}}}),e._v(" "),r("v-toolbar-title",[e._v(e._s(e.toolbarTitle))])],1),e._v(" "),r("main",[r("v-content",[r("v-container",{attrs:{fluid:"","grid-list-lg":""}},[r("router-view")],1)],1)],1),e._v(" "),r("v-footer",{class:e.primaryLayoutClass,attrs:{app:""}},[r("span",{staticClass:"white--text"},[e._v("© 2017")])])],1)},o=[];n._withStripped=!0;var a={render:n,staticRenderFns:o};t.a=a},313:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(314),o=r(319),a=r(20),s=a(n.a,o.a,null,null,null);s.options.__file="src\\views\\Index.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] Index.vue: functional components are not supported with templates, they should use render functions."),t.default=s.exports},314:function(e,t,r){"use strict";var n=r(315);t.a={components:{CardThread:n.a},created:function(){this.initSubReddit()},watch:{$route:function(e,t){this.initSubReddit()}},computed:{threads:function(){return this.$store.state.threads},isShowLoadMore:function(){return this.$store.state.isShowLoadMore},isLoadingMore:function(){return this.$store.state.isLoadingMore}},methods:{initSubReddit:function(){var e=this,t=this.$route.params.r||this.$store.state.defaultSubReddit;t!==this.$store.state.subReddit&&(this.$store.dispatch({type:"setLayoutStateFromParams",r:t}),this.$store.dispatch({type:"getThreads",action:"init"}).then(function(){e.$store.commit({type:"setIsShowLoadMore",isShowLoadMore:!0})}))},loadMore:function(){this.$store.dispatch({type:"getMoreThreads"})}}}},315:function(e,t,r){"use strict";var n=r(316),o=r(318),a=r(20),s=a(n.a,o.a,null,null,null);s.options.__file="src\\components\\card\\Thread.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] Thread.vue: functional components are not supported with templates, they should use render functions."),t.a=s.exports},316:function(e,t,r){"use strict";(function(e,r){t.a={props:{thread:{type:Object,default:function(){return{title:"",score:0,author:"",created_utc:0,num_comments:0}}}},computed:{createSince:function(){var t="",n=!1,o=e(this.thread.created_utc+"000","x").fromNow(),a=o.split(" ");return["a","an"].indexOf(a[0])>-1&&(n=!0),n?("th"===this.$i18n.locale&&(t+="หนึ่ง"),t+=this.$t("time."+r.camelCase(a[0]+" "+a[1]))):t+=a[0]+" "+this.$t("time."+a[1]),"en"===this.$i18n.locale&&(t+=" "),t+=this.$t("time.ago")},upvoteColor:function(){return this.thread.score>0?"green":""},downvoteColor:function(){return this.thread.score<0?"red":""},textComments:function(){return this.thread.num_comments>1?this.$t("general.comments"):this.$t("general.comment")}},methods:{toDetail:function(){this.$router.push(this.$store.getters.routeToComments(this.thread.id))}}}}).call(t,r(1),r(45))},318:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"mb-3 mt-3",attrs:{color:e.thread.stickied?"blue-grey darken-2":""}},[r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:""}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs2:""}},[r("v-layout",{attrs:{row:"","align-center":"","fill-height":""}},[r("v-flex",{staticClass:"text-xs-center"},[r("v-icon",{attrs:{color:e.upvoteColor}},[e._v("arrow_upward")]),e._v(" "),r("div",[e._v(e._s(e.thread.score))]),e._v(" "),r("v-icon",{attrs:{color:e.downvoteColor}},[e._v("arrow_downward")])],1)],1)],1),e._v(" "),r("v-flex",{attrs:{xs10:""}},[r("div",[r("div",{staticClass:"headline cursor-pointer",on:{click:e.toDetail}},[e._v(e._s(e.thread.title))]),e._v(" "),r("div",[e._v(e._s(e.$t("general.submitted"))+" "+e._s(e.createSince)+" "+e._s(e.$t("general.by"))+" "+e._s(e.thread.author)+" ("+e._s(e.thread.domain)+")")])]),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"orange darken-2",dark:""},on:{click:e.toDetail}},[r("v-icon",{attrs:{dark:"",left:""}},[e._v("question_answer")]),e._v(e._s(e.thread.num_comments)+" "+e._s(e.textComments)+"\n          ")],1)],1)],1)],1)],1)],1)},o=[];n._withStripped=!0;var a={render:n,staticRenderFns:o};t.a=a},319:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[e._l(e.threads,function(e){return r("card-thread",{key:e.id,attrs:{thread:e}})}),e._v(" "),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.isShowLoadMore,expression:"isShowLoadMore"}],attrs:{loading:e.isLoadingMore,block:"",color:"secondary",dark:""},on:{click:e.loadMore}},[e._v("\n      "+e._s(e.$t("general.loadMore"))+"\n    ")])],2)],1)},o=[];n._withStripped=!0;var a={render:n,staticRenderFns:o};t.a=a},320:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(321),o=r(327),a=r(20),s=a(n.a,o.a,null,null,null);s.options.__file="src\\views\\Comments.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] Comments.vue: functional components are not supported with templates, they should use render functions."),t.default=s.exports},321:function(e,t,r){"use strict";var n=r(322),o=r(225);t.a={components:{CardThreadContent:n.a,CardComments:o.a},created:function(){this.initComments()},watch:{$route:function(e,t){this.initComments()}},computed:{comments:function(){return this.$store.state.comments}},methods:{initComments:function(){var e=this;this.$store.dispatch({type:"setLayoutStateFromParams",r:this.$route.params.r}).then(function(){e.$store.dispatch({type:"getComments",id:e.$route.params.id})})}}}},322:function(e,t,r){"use strict";var n=r(323),o=r(324),a=r(20),s=a(n.a,o.a,null,null,null);s.options.__file="src\\components\\card\\ThreadContent.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] ThreadContent.vue: functional components are not supported with templates, they should use render functions."),t.a=s.exports},323:function(e,t,r){"use strict";(function(e){t.a={data:function(){return{youtubeRegExp:new RegExp("v=([A-Za-z0-9]*)&?","ig")}},computed:{thread:function(){return this.$store.state.threadContent}},methods:{toExternalURL:function(e){window.open(e)},unescapeHTML:function(t){return e.unescape(t)},youtubeEmbedUrl:function(e){return"https://www.youtube.com/embed/"+this.youtubeRegExp.exec(e)[1]}}}}).call(t,r(45))},324:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:""}},[r("v-flex",[r("div",[r("div",{staticClass:"headline cursor-pointer",on:{click:function(t){e.toExternalURL(e.thread.url)}}},[e._v(e._s(e.thread.title))]),e._v(" "),r("div",[e._v("("+e._s(e.thread.domain)+")")]),e._v(" "),r("v-divider",{staticClass:"mb-3 mt-2"}),e._v(" "),"youtube.com"===e.thread.domain?[r("iframe",{attrs:{width:"100%",height:"300px",src:e.youtubeEmbedUrl(e.thread.url),frameborder:"0",allowfullscreen:""}})]:e.thread.domain==="self."+e.$route.params.r?[r("div",{domProps:{innerHTML:e._s(e.unescapeHTML(e.thread.selftext_html))}})]:[r("div")]],2)])],1)],1)],1)},o=[];n._withStripped=!0;var a={render:n,staticRenderFns:o};t.a=a},325:function(e,t,r){"use strict";(function(e){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var o=r(225);t.a={name:"card-comments",components:{CardComments:o.a},props:{children:{type:Array,default:[]}},computed:{thread:function(){return this.$store.state.threadContent},childDept:function(){return this.children.length>0?this.children[0].data.depth:0},cardOffSet:function(){return n({},"offset-xs"+this.childDept,!0)}},methods:{unescapeHTML:function(t){return e.unescape(t)},getReplies:function(t){return e.isObject(t.data.replies)?t.data.replies.data.children:[]},getLangReply:function(e){return e.data.count<=1?this.$t("general.moreReply"):this.$t("general.moreReplies")},getParentId:function(e){return e.data.parent_id.replace(/(t[0-9]*_)/g,"")},openMoreReply:function(e){window.open("https://reddit.com"+this.thread.permalink+this.getParentId(e))}}}}).call(t,r(45))},326:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.children,function(t){return r("div",{key:t.data.id},[r("v-flex",e._b({},"v-flex",e.cardOffSet,!1),[r("v-card",{staticClass:"mb-2 mt-2"},[r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:""}},[r("v-flex",["t1"===t.kind?r("div",[r("div",{domProps:{innerHTML:e._s(e.unescapeHTML(t.data.body_html))}})]):r("div",[r("div",[r("a",{attrs:{href:"#"},on:{click:function(r){r.preventDefault(),e.openMoreReply(t)}}},[r("i",[e._v(e._s(t.data.count)+" "+e._s(e.getLangReply(t))+"...")])])])])])],1)],1)],1)],1),e._v(" "),r("card-comments",{attrs:{children:e.getReplies(t)}})],1)}))},o=[];n._withStripped=!0;var a={render:n,staticRenderFns:o};t.a=a},327:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("card-thread-content"),e._v(" "),r("v-divider",{staticClass:"mb-3 mt-2"}),e._v(" "),r("card-comments",{attrs:{children:this.comments}})],1)},o=[];n._withStripped=!0;var a={render:n,staticRenderFns:o};t.a=a},328:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(329),o=r(20),a=o(null,n.a,null,null,null);a.options.__file="src\\views\\errors\\404.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] 404.vue: functional components are not supported with templates, they should use render functions."),t.default=a.exports},329:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("h2",[e._v("404")])},o=[];n._withStripped=!0;var a={render:n,staticRenderFns:o};t.a=a},330:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});t.getSystemLangs=function(){var t={};return e.forIn({en:["general","time"],th:["general","time"]},function(n,o){t[o]={},n.forEach(function(n){e.set(t[o],n.replace(/\//g,"."),r(331)("./"+o+"/"+n).default)})}),t}}).call(t,r(45))},331:function(e,t,r){function n(e){return r(o(e))}function o(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var a={"./en/general":226,"./en/general.js":226,"./en/time":227,"./en/time.js":227,"./th/general":228,"./th/general.js":228,"./th/time":229,"./th/time.js":229};n.keys=function(){return Object.keys(a)},n.resolve=o,e.exports=n,n.id=331}},[264]);