"use strict";(self.webpackChunk_web_index=self.webpackChunk_web_index||[]).push([[524],{9806:(e,t,a)=>{var n=a(9186),s=a(3868),r=a(4656),o=a(9962),i=a(5079);var c,l=a(7125),d=a(2899);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},h.apply(null,arguments)}const u=(e,t)=>{let{title:a,titleId:n,...s}=e;return o.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",ref:t,"aria-labelledby":n},s),a?o.createElement("title",{id:n},a):null,c||(c=o.createElement("path",{d:"M384 352v64c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32v-64c0-17.67-14.33-32-32-32s-32 14.33-32 32v64c0 53.02 42.98 96 96 96h256c53.02 0 96-42.98 96-96v-64c0-17.67-14.33-32-32-32S384 334.3 384 352zM201.4 9.375l-128 128c-12.51 12.51-12.49 32.76 0 45.25c12.5 12.5 32.75 12.5 45.25 0L192 109.3V320c0 17.69 14.31 32 32 32s32-14.31 32-32V109.3l73.38 73.38c12.5 12.5 32.75 12.5 45.25 0s12.5-32.75 0-45.25l-128-128C234.1-3.125 213.9-3.125 201.4 9.375z"})))},m=(0,o.forwardRef)(u),v=(a.p,"darkMode");function p(){const e=(0,o.useRef)(""),[t]=(0,i.lq)("/search"),[a,s]=(0,o.useState)("Search"),c=(0,d.k)(),{value:h,toggle:u}=((e=Boolean(localStorage.getItem(v)),t={})=>{const{classNameDark:a="dark",classNameLight:n="light",storageKey:s=v,element:r=globalThis.document&&document.documentElement,transition:i=(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches?document.startViewTransition():void 0)}=t,[c,l]=(0,o.useState)(e),[d,h]=(0,o.useState)({x:0,y:0});(0,o.useEffect)((()=>{const e=localStorage.getItem(s);l(e?"true"===e:window.matchMedia("(prefers-color-scheme: dark)").matches)}),[s]),(0,o.useEffect)((()=>{const e=e=>{const t="true"===localStorage.getItem(s);l(e.matches),t===e.matches&&localStorage.removeItem(s)},t=()=>{const e=localStorage.getItem(s);l(void 0===e?window.matchMedia("(prefers-color-scheme: dark)").matches:"true"===e)};return window.addEventListener("storage",t),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e),()=>{window.removeEventListener("storage",t),window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",e)}}),[s]);const u=(0,o.useRef)(c);return(0,o.useEffect)((()=>{u.current=c}),[c]),(0,o.useEffect)((()=>{const e=()=>{window.matchMedia("(prefers-color-scheme: dark)").matches===u.current&&localStorage.removeItem(v)};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[]),(0,o.useEffect)((()=>{if("undefined"===typeof c)return;const e=r,t=()=>{c?(e.classList.remove(n),e.classList.add(a)):(e.classList.remove(a),e.classList.add(n))},{x:s,y:o}=d,l=Math.hypot(Math.max(s,innerWidth-s),Math.max(o,innerHeight-o));i?i.ready.then((()=>{if(t(),0===d.x)return;const a=[`circle(0px at ${s}px ${o}px)`,`circle(${l}px at ${s}px ${o}px)`];e.animate({clipPath:c?[...a].reverse():a},{duration:400,easing:"ease-in-out",pseudoElement:c?"::view-transition-old(root)":"::view-transition-new(root)"})})):t()}),[a,n,c,r]),{value:c,toggle:e=>{l((t=>(s&&(localStorage.setItem(s,String(!t)),h({x:e.clientX,y:e.clientY})),!t)))}}})();return(0,o.useEffect)((()=>{fetch("//v1.hitokoto.cn?c=a").then((e=>e.json())).then((e=>{s(e.hitokoto)}));const e=document.querySelector(".navbar-burger"),t=()=>{const t=document.getElementById(e.dataset.target);e.classList.toggle("is-active"),t.classList.toggle("is-active")};return e.addEventListener("click",t,!1),()=>{e.removeEventListener("click",t,!1)}}),[]),(0,n.jsxs)("nav",{className:"navbar is-transparent",role:"navigation","aria-label":"main navigation",children:[(0,n.jsxs)("div",{className:"navbar-brand",children:[(0,n.jsx)(i.N_,{href:"/",className:"navbar-item",children:(0,n.jsx)("h1",{className:"logo",children:"UPV"})}),(0,n.jsxs)("a",{role:"button",className:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"upv-nav",children:[(0,n.jsx)("span",{"aria-hidden":"true"}),(0,n.jsx)("span",{"aria-hidden":"true"}),(0,n.jsx)("span",{"aria-hidden":"true"})]})]}),(0,n.jsxs)("div",{id:"upv-nav",className:"navbar-menu",children:[(0,n.jsxs)("div",{className:"navbar-start",children:[(0,n.jsx)(i.N_,{href:"/",className:"navbar-item",children:"Home"}),(0,n.jsx)("a",{className:"navbar-item",href:"/anime/index",target:"_blank",children:"Schedule"}),(0,n.jsx)("a",{className:"navbar-item",href:"https://cdn.jsdelivr.net/gh/upvorg/cdn@master/apk/app-arm64-v8a-release.apk",target:"_blank",children:"App"}),(0,n.jsx)("a",{className:"navbar-item",href:"/about",target:"_blank",children:"About"})]}),!t&&(0,n.jsx)("div",{className:"navbar-item center-search",children:(0,n.jsxs)("form",{className:"nav-search-form",onSubmit:t=>{t.preventDefault(),window.open(`/search?k=${e.current}`)},children:[(0,n.jsxs)("div",{className:"nav-search-content",children:[(0,n.jsx)("input",{className:"nav-search-input",type:"text",autoComplete:"off",accessKey:"s",maxLength:100,"x-webkit-speech":"","x-webkit-grammar":"builtin:translate",placeholder:a,title:a,onChange:t=>{e.current=t.target.value}}),(0,n.jsx)("div",{className:"nav-search-clean",children:(0,n.jsx)("button",{className:"delete is-small",type:"reset"})})]}),(0,n.jsx)("button",{className:"nav-search-btn icon",children:(0,n.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"search",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"svg-inline--fa fa-search fa-w-16 fa-fw",children:(0,n.jsx)("path",{fill:"currentColor",d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"})})})]})}),(0,n.jsxs)("div",{className:"navbar-end",children:[(0,n.jsx)("div",{className:"navbar-item theme",onClick:u,children:(0,n.jsx)("button",{className:"button is-light","aria-haspopup":"true","aria-controls":"dropdown-menu4",children:h?(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",children:(0,n.jsx)("path",{d:"M185.335 178.178l-2.742-2.384c-13.39-11.534-14.895-31.74-3.36-45.13a32 32 0 0 1 4.324-4.158C249.354 74.17 337.575 48 448.22 48 704.358 48 912 255.74 912 512l-0.062 7.673C907.842 772.394 701.797 976 448.22 976c-110.645 0-198.866-26.169-264.663-78.506a32 32 0 0 1-4.325-4.159c-11.419-13.256-10.058-33.192 2.962-44.78l0.399-0.35 2.742-2.383c89.13-78.201 134.016-188.043 134.66-329.525L320 512c0.253-143.557-44.635-254.831-134.665-333.822z",fill:"#FFC445"})}):(0,n.jsxs)("svg",{viewBox:"0 0 1028 1024",children:[(0,n.jsx)("path",{d:"M514.133333 509.866667m-256 0a256 256 0 1 0 512 0 256 256 0 1 0-512 0Z",fill:"#FFC445"}),(0,n.jsx)("path",{d:"M514.133333 170.666667c-19.2 0-32-14.933333-32-32V29.866667c0-17.066667 12.8-29.866667 29.866667-29.866667h2.133333c17.066667 0 32 14.933333 32 32v108.8c0 14.933333-14.933333 29.866667-32 29.866667zM514.133333 1024c-19.2 0-32-14.933333-32-32v-108.8c0-17.066667 14.933333-32 32-32h2.133334c17.066667 0 32 14.933333 32 32v108.8c-2.133333 17.066667-17.066667 32-34.133334 32zM853.333333 509.866667c0-19.2 14.933333-32 32-32h108.8c17.066667 0 32 14.933333 32 32v2.133333c0 17.066667-14.933333 32-32 32h-108.8c-17.066667-2.133333-32-17.066667-32-34.133333zM0 509.866667c0-19.2 14.933333-32 32-32h108.8c17.066667 0 32 14.933333 32 32v2.133333c0 17.066667-14.933333 32-32 32H32c-17.066667-2.133333-32-17.066667-32-34.133333zM742.4 247.466667c-12.8-12.8-12.8-32-2.133333-44.8l76.8-76.8c12.8-12.8 32-12.8 44.8 0V128c12.8 12.8 12.8 32 0 44.8l-76.8 76.8c-10.666667 10.666667-32 10.666667-42.666667-2.133333zM138.666667 851.2c-12.8-12.8-12.8-34.133333-2.133334-44.8l76.8-76.8c12.8-12.8 32-12.8 44.8 0l2.133334 2.133333c12.8 12.8 12.8 32 0 44.8L183.466667 853.333333c-12.8 10.666667-32 10.666667-44.8-2.133333zM740.266667 727.466667c12.8-12.8 34.133333-12.8 44.8-2.133334l76.8 76.8c12.8 12.8 12.8 32 0 44.8l-2.133334 2.133334c-12.8 12.8-32 12.8-44.8 0l-76.8-76.8c-10.666667-12.8-10.666667-32 2.133334-44.8zM136.533333 123.733333c12.8-12.8 34.133333-12.8 44.8-2.133333l76.8 76.8c12.8 12.8 12.8 32 0 44.8l-2.133333 2.133333c-12.8 12.8-32 12.8-44.8 0L136.533333 168.533333c-10.666667-12.8-10.666667-32 0-44.8z",fill:"#FFC445"})]})})}),(0,n.jsx)("div",{className:"navbar-item upload",children:(0,n.jsx)("a",{href:r.PK,target:"_blank",children:(0,n.jsxs)("button",{className:"button is-primary","aria-haspopup":"true","aria-controls":"dropdown-menu4",children:[(0,n.jsx)(m,{}),"\xa0\xa0",(0,n.jsx)("strong",{children:"Upload"})]})})}),c?(0,n.jsxs)("div",{className:"navbar-item has-dropdown is-hoverable",children:[(0,n.jsx)("div",{className:"navbar-link is-arrowless",children:(0,n.jsx)("figure",{className:"image avatar",children:(0,n.jsx)("img",{className:"is-rounded",src:c.Avatar})})}),(0,n.jsxs)("div",{className:"navbar-dropdown is-right",children:[(0,n.jsx)("a",{className:"navbar-item",href:r.PK+`/user/profile?name=${c.Name}`,target:"_blank",children:"\u6211\u7684\u8d44\u6599"}),(0,n.jsx)("hr",{className:"navbar-divider"}),(0,n.jsx)("a",{className:"navbar-item",onClick:()=>l.N.logout(),children:"\u9000\u51fa\u767b\u5f55"})]})]}):(0,n.jsx)("div",{className:"navbar-item",children:(0,n.jsx)("div",{className:"buttons",children:(0,n.jsx)("a",{href:"/login",className:"button is-light",children:"Log in"})})})]})]})]})}var g=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(a[n[s]]=e[n[s]])}return a};const f=document.getElementById("root"),x=e=>((0,o.useEffect)((()=>{const e=document.querySelector(".upv-header__bar"),t=function(e,t,a=!0,n=!0){let s;return(...r)=>{s?(clearTimeout(s),s=void 0):a&&e(...r),s=self.setTimeout((()=>{n&&e(...r),s=void 0}),t)}}((t=>{f.scrollTop>=222?e.classList.add("fixed-header"):e.classList.remove("fixed-header")}),200);return f.addEventListener("scroll",t),()=>{f.removeEventListener("scroll",t)}}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"upv-header",children:[(0,n.jsx)("div",{className:"upv-header__bar",children:(0,n.jsx)(p,{})}),(0,n.jsx)("div",{className:"upv-header__banner",children:(0,n.jsx)("div",{className:"taper-line"})})]}),(0,n.jsx)("main",{className:"container",children:e.children})]})),j=e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"upv-header",children:(0,n.jsx)("div",{className:"upv-header__bar fixed-header",children:(0,n.jsx)(p,{})})}),(0,n.jsx)("main",{className:"container",children:e.children})]}),b=e=>{var{component:t,layout:a,children:s}=e,r=g(e,["component","layout","children"]);return(0,o.useEffect)((()=>{root.scrollTo({top:0,left:0})}),[]),(0,n.jsx)(i.qh,Object.assign({},r,{component:({params:e})=>(0,n.jsx)(a,{children:(0,n.jsx)(o.Suspense,{fallback:(0,n.jsx)(y,{}),children:t?(0,n.jsx)(t,Object.assign({},e)):"function"===typeof s?s(e):s})})}))},N=e=>{var t=g(e,[]);return(0,n.jsx)(b,Object.assign({},t,{layout:x}))},w=e=>{var t=g(e,[]);return(0,n.jsx)(b,Object.assign({},t,{layout:j}))};function y(){return(0,n.jsxs)("div",{style:{height:"80vh",lineHeight:"80vh",textAlign:"center",fontSize:"32px"},children:[(0,n.jsx)("h2",{className:"__loading__",children:"\ud83c\udf00 Loading..."}),(0,n.jsx)("style",{children:".__loading__{ animation: loading 5s infinite ease-in-out; }"})]})}var E=a(859),O=a(4227);const S=()=>{const[e,t]=(0,o.useState)(null);return(0,o.useEffect)((()=>{r.pY.interceptors.response.use((e=>e),(e=>(e.err&&E.Ay.error(e.err),401===e.status&&(t(null),l.N.logout(`${r.jg}/login?from=${location.href}`)),e)));const e=O.H.get(r.od),a=localStorage.getItem(r.Pz);a&&e?t(JSON.parse(a)):e&&r.pY.get("/user").then((e=>{e.data&&(t(e.data),localStorage.setItem(r.Pz,JSON.stringify(e.data)))}))}),[]),(0,n.jsxs)(o.Fragment,{children:[(0,n.jsx)(i.Ix,{children:(0,n.jsx)(d.R.Provider,{value:e,children:(0,n.jsxs)(i.dO,{children:[(0,n.jsx)(N,{path:"/",component:(0,o.lazy)((()=>Promise.all([a.e(173),a.e(678)]).then(a.bind(a,5678))))}),(0,n.jsx)(N,{path:"/login",component:(0,o.lazy)((()=>Promise.all([a.e(173),a.e(669)]).then(a.bind(a,6669))))}),(0,n.jsx)(w,{path:"/p/:id",component:(0,o.lazy)((()=>Promise.all([a.e(714),a.e(173),a.e(957),a.e(282),a.e(897)]).then(a.bind(a,5106))))}),(0,n.jsx)(w,{path:"/v/:id",component:(0,o.lazy)((()=>Promise.all([a.e(714),a.e(458),a.e(533),a.e(173),a.e(957),a.e(282),a.e(817)]).then(a.bind(a,8810))))}),(0,n.jsx)(w,{path:"/pv/tag",component:(0,o.lazy)((()=>Promise.all([a.e(173),a.e(504)]).then(a.bind(a,9504))))}),(0,n.jsx)(w,{path:"/search",component:(0,o.lazy)((()=>Promise.all([a.e(173),a.e(848)]).then(a.bind(a,4848))))}),(0,n.jsx)(w,{path:"/about",component:(0,o.lazy)((()=>Promise.all([a.e(714),a.e(173),a.e(957),a.e(735)]).then(a.bind(a,735))))}),(0,n.jsx)(w,{path:"/feedback",component:(0,o.lazy)((()=>Promise.all([a.e(173),a.e(23)]).then(a.bind(a,3023))))}),(0,n.jsx)(w,{path:"/anime/index",component:(0,o.lazy)((()=>Promise.all([a.e(173),a.e(135)]).then(a.bind(a,1135))))}),(0,n.jsx)(w,{path:"/:rest*",component:(0,o.lazy)((()=>Promise.all([a.e(173),a.e(100)]).then(a.bind(a,2100))))})]})})}),(0,n.jsxs)("footer",{className:"footer",children:[(0,n.jsx)("div",{className:"bd-footer-support",children:(0,n.jsxs)("h4",{className:"bd-footer-title",children:[(0,n.jsx)("strong",{children:"Support"})," ",(0,n.jsx)("span",{className:"font-family-logo",children:"UPV"})]})}),(0,n.jsxs)("div",{className:"content",children:[(0,n.jsxs)("p",{className:"links",children:[(0,n.jsx)("a",{className:"link",href:"/feedback",target:"_blank",children:"\u7559\u8a00"})," ","|"," ",(0,n.jsx)("a",{className:"link",href:"/feedback",target:"_blank",children:"\u53cd\u9988"})," ","|"," ",(0,n.jsx)("a",{className:"link",href:"/about",target:"_blank",children:"\u5173\u4e8e"})]}),(0,n.jsxs)("p",{children:["Copyright \xa9 2022"," ",(0,n.jsx)("a",{href:"/",className:"font-family-logo",children:"UPV"})]})]})]}),(0,n.jsx)(E.l$,{position:"top-right",toastOptions:{success:{iconTheme:{primary:r.VG,secondary:"#fff"}}},containerStyle:{top:70,right:20}})]})};a(4978),(0,s.H)(document.getElementById("root")).render((0,n.jsx)(S,{}))},2899:(e,t,a)=>{a.d(t,{R:()=>s,k:()=>r});var n=a(9962);const s=n.createContext(null),r=()=>n.useContext(s);s.displayName="UserContext"},7125:(e,t,a)=>{a.d(t,{N:()=>n});var n,s=a(4656),r=a(4227);!function(e){e.logout=function(e){r.H.del(s.od,"/",s.V2),localStorage.removeItem(s.n),localStorage.removeItem(s.Pz),location.href=e||location.href},e.getAccessToken=function(){return r.H.get(s.od)},e.login=function(e){localStorage.setItem(s.n,r.H.get(s.od)),localStorage.setItem(s.Pz,JSON.stringify(e))}}(n||(n={}))},4656:(e,t,a)=>{a.d(t,{PK:()=>d,od:()=>m,h8:()=>p,V2:()=>c,jg:()=>l,n:()=>u,Pz:()=>h,VG:()=>v,pY:()=>x,OF:()=>j});var n=a(4227),s=a(3685);class r{constructor(){this.resolve=e=>e,this.reject=e=>e}use(e,t){this.resolve=e,t&&(this.reject=t)}}const o=new s.q({max:10});class i{constructor(e){var t,a,n;this.baseUrl=null!==(t=e.baseUrl)&&void 0!==t?t:"",this.headers=null!==(a=e.headers)&&void 0!==a?a:{},this.config=null!==(n=e.config)&&void 0!==n?n:{},this.interceptors={request:new r,response:new r}}static create(e,t){return new i({baseUrl:e,headers:null===t||void 0===t?void 0:t.header,config:null===t||void 0===t?void 0:t.config})}get(e,{headers:t,data:a}={}){return this._send(e,"GET",t,a)}post(e,{headers:t,data:a}={}){return this._send(e,"POST",t,a)}put(e,{headers:t,data:a}={}){return this._send(e,"PUT",t,a)}delete(e,{headers:t,data:a}={}){return this._send(e,"DELETE",t,a)}_send(e,t,a={},n={}){var s,r;const i=JSON.stringify({url:e,method:t,headers:a,data:n});if(o.has(i))return o.get(i);const c=null===(r=(s=this.interceptors.request).resolve)||void 0===r?void 0:r.call(s,Object.assign(Object.assign({},this.headers),a));let l;return n instanceof FormData||!this.headers["Content-type"]||(c["Content-type"]="application/json; charset=UTF-8"),fetch(`${this.baseUrl}${e}`,Object.assign(Object.assign({method:t,headers:c},this.config),!["GET","HEAD"].includes(t.toUpperCase())&&{body:n instanceof FormData?n:JSON.stringify(n)})).then((e=>{l=e;const t=e.json();o.set(i,t);try{return t}catch(a){throw a}}),(e=>{var t,a;return console.error("<--- request error"+e),null===(a=(t=this.interceptors.request).reject)||void 0===a?void 0:a.call(t,e)})).then((e=>{var t,a,n,s,r;if(!l.ok)throw null===(a=(t=this.interceptors.response).reject)||void 0===a?void 0:a.call(t,Object.assign({status:l.status,statusText:l.statusText},e));return null!==(r=null===(s=(n=this.interceptors.response).resolve)||void 0===s?void 0:s.call(n,e))&&void 0!==r?r:e}))}}const c="xn--7ov117aclgs4c.life",l="https://xn--7ov117aclgs4c.life",d="https://admin.xn--7ov117aclgs4c.life",h="USER_INFO",u="ACCESS_TOKEN",m="access_token",v="#6668ab",p=["\u5468\u65e5","\u5468\u4e00","\u5468\u4e8c","\u5468\u4e09","\u5468\u56db","\u5468\u4e94","\u5468\u516d"];var g;!function(e){e[e.NORMAL=4]="NORMAL",e[e.CREATOR=3]="CREATOR",e[e.ADMIN=2]="ADMIN",e[e.ROOT=1]="ROOT",e.ALL=""}(g||(g={}));g.NORMAL,g.CREATOR,g.ADMIN,g.ROOT,g.ALL;var f;!function(e){e[e.DRAFT=5]="DRAFT",e[e.PUBLISHED=4]="PUBLISHED",e[e.PENDING=3]="PENDING",e[e.REJECT=2]="REJECT",e[e.DELETED=1]="DELETED",e.ALL=""}(f||(f={}));f.PUBLISHED,f.PENDING,f.REJECT,f.ALL;const x=i.create("https://api.xn--7ov117aclgs4c.life/api",{config:{credentials:"include"}});x.interceptors.request.use((e=>{const t=n.H.get(m);return Object.assign(Object.assign({},e),{Authorization:t?`Bearer ${t}`:""})})),document.location.search.includes("noproxy")&&localStorage.setItem("noproxy","1"),document.location.search.includes("proxy")&&localStorage.removeItem("noproxy");const j=i.create(localStorage.getItem("noproxy")?"":"https://cli.airmole.net")},4978:(e,t,a)=>{a.r(t);var n=function(e,t,a,n){return new(a||(a=Promise))((function(s,r){function o(e){try{c(n.next(e))}catch(t){r(t)}}function i(e){try{c(n.throw(e))}catch(t){r(t)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,i)}c((n=n.apply(e,t||[])).next())}))};let s=!1;if(document.location.search.includes("debug")&&localStorage.setItem("debug","1"),"1"!=localStorage.getItem("debug")){const e=e=>n(void 0,void 0,void 0,(function*(){e.isSafari&&(document.body.innerHTML='<h1 style="font-size:2em;font-weight:bold">\ud83d\udc7e\u6253\u65ad\u65bd\u6cd5!</h1>',yield new Promise((e=>setTimeout(e,1e3)))),window.close(),window.location.href="https://www.baidu.com/s?wd=ip"}));a.e(643).then(a.t.bind(a,1042,23)).then((function(t){t.addListener((function(a){s=a,a&&e(t)})),t.launch(),window.addEventListener("pageshow",(a=>{var n,r;(a.persisted||2==(null===(r=null===(n=window.performance)||void 0===n?void 0:n.navigation)||void 0===r?void 0:r.type))&&s&&e(t)}),!1)}))}},4227:(e,t,a)=>{var n;a.d(t,{H:()=>n}),function(e){e.get=function(e){for(var t=e+"=",a=document.cookie.split(";"),n=0;n<a.length;n++){for(var s=a[n];" "==s.charAt(0);)s=s.substring(1,s.length);if(0==s.indexOf(t))return s.substring(t.length,s.length)}return null},e.del=function(e,t,a){document.cookie=e+"="+(t?";path="+t:"")+(a?";domain="+a:"")+";expires=Thu, 01 Jan 1970 00:00:01 GMT"}}(n||(n={}))}},e=>{e.O(0,[784,648,951],(()=>{return t=9806,e(e.s=t);var t}));e.O()}]);