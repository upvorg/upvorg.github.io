"use strict";(self.webpackChunk_web_index=self.webpackChunk_web_index||[]).push([[524],{6947:(e,t,a)=>{var n,s=a(244),r=a(7498),c=a(5704),i=a(7128),o=a(5716),l=a(1719),d=a(8289);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},h.apply(this,arguments)}const u=(e,t)=>{let{title:a,titleId:s,...r}=e;return i.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",ref:t,"aria-labelledby":s},r),a?i.createElement("title",{id:s},a):null,n||(n=i.createElement("path",{d:"M384 352v64c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32v-64c0-17.67-14.33-32-32-32s-32 14.33-32 32v64c0 53.02 42.98 96 96 96h256c53.02 0 96-42.98 96-96v-64c0-17.67-14.33-32-32-32S384 334.3 384 352zM201.4 9.375l-128 128c-12.51 12.51-12.49 32.76 0 45.25c12.5 12.5 32.75 12.5 45.25 0L192 109.3V320c0 17.69 14.31 32 32 32s32-14.31 32-32V109.3l73.38 73.38c12.5 12.5 32.75 12.5 45.25 0s12.5-32.75 0-45.25l-128-128C234.1-3.125 213.9-3.125 201.4 9.375z"})))},m=(0,i.forwardRef)(u),v=(a.p,"darkMode");function p(){const e=(0,i.useRef)(""),[t]=(0,o.lq)("/search"),[a,n]=(0,i.useState)("Search"),r=(0,d.k)(),{value:h,toggle:u}=((e=Boolean(localStorage.getItem(v)),t={})=>{const{classNameDark:a="dark",classNameLight:n="light",storageKey:s=v,element:r=globalThis.document&&document.documentElement,transition:c=(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches?document.startViewTransition():void 0)}=t,[o,l]=(0,i.useState)(e),[d,h]=(0,i.useState)({x:0,y:0});(0,i.useEffect)((()=>{const e=localStorage.getItem(s);l(e?"true"===e:window.matchMedia("(prefers-color-scheme: dark)").matches)}),[s]),(0,i.useEffect)((()=>{const e=e=>{const t="true"===localStorage.getItem(s);l(e.matches),t===e.matches&&localStorage.removeItem(s)},t=()=>{const e=localStorage.getItem(s);l(void 0===e?window.matchMedia("(prefers-color-scheme: dark)").matches:"true"===e)};return window.addEventListener("storage",t),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e),()=>{window.removeEventListener("storage",t),window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",e)}}),[s]);const u=(0,i.useRef)(o);return(0,i.useEffect)((()=>{u.current=o}),[o]),(0,i.useEffect)((()=>{const e=()=>{window.matchMedia("(prefers-color-scheme: dark)").matches===u.current&&localStorage.removeItem(v)};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[]),(0,i.useEffect)((()=>{if("undefined"===typeof o)return;const e=r,t=()=>{o?(e.classList.remove(n),e.classList.add(a)):(e.classList.remove(a),e.classList.add(n))},{x:s,y:i}=d,l=Math.hypot(Math.max(s,innerWidth-s),Math.max(i,innerHeight-i));c?c.ready.then((()=>{if(t(),0===d.x)return;const a=[`circle(0px at ${s}px ${i}px)`,`circle(${l}px at ${s}px ${i}px)`];e.animate({clipPath:o?[...a].reverse():a},{duration:400,easing:"ease-in-out",pseudoElement:o?"::view-transition-old(root)":"::view-transition-new(root)"})})):t()}),[a,n,o,r]),{value:o,toggle:e=>{l((t=>(s&&(localStorage.setItem(s,String(!t)),h({x:e.clientX,y:e.clientY})),!t)))}}})();return(0,i.useEffect)((()=>{fetch("//v1.hitokoto.cn?c=a").then((e=>e.json())).then((e=>{n(e.hitokoto)}));const e=document.querySelector(".navbar-burger"),t=()=>{const t=document.getElementById(e.dataset.target);e.classList.toggle("is-active"),t.classList.toggle("is-active")};return e.addEventListener("click",t,!1),()=>{e.removeEventListener("click",t,!1)}}),[]),(0,s.jsxs)("nav",{className:"navbar is-transparent",role:"navigation","aria-label":"main navigation",children:[(0,s.jsxs)("div",{className:"navbar-brand",children:[(0,s.jsx)(o.N_,{href:"/",className:"navbar-item",children:(0,s.jsx)("h1",{className:"logo",children:"UPV"})}),(0,s.jsxs)("a",{role:"button",className:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"upv-nav",children:[(0,s.jsx)("span",{"aria-hidden":"true"}),(0,s.jsx)("span",{"aria-hidden":"true"}),(0,s.jsx)("span",{"aria-hidden":"true"})]})]}),(0,s.jsxs)("div",{id:"upv-nav",className:"navbar-menu",children:[(0,s.jsxs)("div",{className:"navbar-start",children:[(0,s.jsx)(o.N_,{href:"/",className:"navbar-item",children:"Home"}),(0,s.jsx)("a",{className:"navbar-item",href:"/anime/index",target:"_blank",children:"Schedule"}),(0,s.jsx)("a",{className:"navbar-item",href:"https://cdn.jsdelivr.net/gh/upvorg/cdn@master/apk/app-arm64-v8a-release.apk",target:"_blank",children:"App"}),(0,s.jsx)("a",{className:"navbar-item",href:"/about",target:"_blank",children:"About"})]}),!t&&(0,s.jsx)("div",{className:"navbar-item center-search",children:(0,s.jsxs)("form",{className:"nav-search-form",onSubmit:t=>{t.preventDefault(),window.open(`/search?k=${e.current}`)},children:[(0,s.jsxs)("div",{className:"nav-search-content",children:[(0,s.jsx)("input",{className:"nav-search-input",type:"text",autoComplete:"off",accessKey:"s",maxLength:100,"x-webkit-speech":"","x-webkit-grammar":"builtin:translate",placeholder:a,title:a,onChange:t=>{e.current=t.target.value}}),(0,s.jsx)("div",{className:"nav-search-clean",children:(0,s.jsx)("button",{className:"delete is-small",type:"reset"})})]}),(0,s.jsx)("button",{className:"nav-search-btn icon",children:(0,s.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"search",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"svg-inline--fa fa-search fa-w-16 fa-fw",children:(0,s.jsx)("path",{fill:"currentColor",d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"})})})]})}),(0,s.jsxs)("div",{className:"navbar-end",children:[(0,s.jsx)("div",{className:"navbar-item theme",onClick:u,children:(0,s.jsx)("button",{className:"button is-light","aria-haspopup":"true","aria-controls":"dropdown-menu4",children:h?(0,s.jsx)("svg",{viewBox:"0 0 1024 1024",children:(0,s.jsx)("path",{d:"M185.335 178.178l-2.742-2.384c-13.39-11.534-14.895-31.74-3.36-45.13a32 32 0 0 1 4.324-4.158C249.354 74.17 337.575 48 448.22 48 704.358 48 912 255.74 912 512l-0.062 7.673C907.842 772.394 701.797 976 448.22 976c-110.645 0-198.866-26.169-264.663-78.506a32 32 0 0 1-4.325-4.159c-11.419-13.256-10.058-33.192 2.962-44.78l0.399-0.35 2.742-2.383c89.13-78.201 134.016-188.043 134.66-329.525L320 512c0.253-143.557-44.635-254.831-134.665-333.822z",fill:"#FFC445"})}):(0,s.jsxs)("svg",{viewBox:"0 0 1028 1024",children:[(0,s.jsx)("path",{d:"M514.133333 509.866667m-256 0a256 256 0 1 0 512 0 256 256 0 1 0-512 0Z",fill:"#FFC445"}),(0,s.jsx)("path",{d:"M514.133333 170.666667c-19.2 0-32-14.933333-32-32V29.866667c0-17.066667 12.8-29.866667 29.866667-29.866667h2.133333c17.066667 0 32 14.933333 32 32v108.8c0 14.933333-14.933333 29.866667-32 29.866667zM514.133333 1024c-19.2 0-32-14.933333-32-32v-108.8c0-17.066667 14.933333-32 32-32h2.133334c17.066667 0 32 14.933333 32 32v108.8c-2.133333 17.066667-17.066667 32-34.133334 32zM853.333333 509.866667c0-19.2 14.933333-32 32-32h108.8c17.066667 0 32 14.933333 32 32v2.133333c0 17.066667-14.933333 32-32 32h-108.8c-17.066667-2.133333-32-17.066667-32-34.133333zM0 509.866667c0-19.2 14.933333-32 32-32h108.8c17.066667 0 32 14.933333 32 32v2.133333c0 17.066667-14.933333 32-32 32H32c-17.066667-2.133333-32-17.066667-32-34.133333zM742.4 247.466667c-12.8-12.8-12.8-32-2.133333-44.8l76.8-76.8c12.8-12.8 32-12.8 44.8 0V128c12.8 12.8 12.8 32 0 44.8l-76.8 76.8c-10.666667 10.666667-32 10.666667-42.666667-2.133333zM138.666667 851.2c-12.8-12.8-12.8-34.133333-2.133334-44.8l76.8-76.8c12.8-12.8 32-12.8 44.8 0l2.133334 2.133333c12.8 12.8 12.8 32 0 44.8L183.466667 853.333333c-12.8 10.666667-32 10.666667-44.8-2.133333zM740.266667 727.466667c12.8-12.8 34.133333-12.8 44.8-2.133334l76.8 76.8c12.8 12.8 12.8 32 0 44.8l-2.133334 2.133334c-12.8 12.8-32 12.8-44.8 0l-76.8-76.8c-10.666667-12.8-10.666667-32 2.133334-44.8zM136.533333 123.733333c12.8-12.8 34.133333-12.8 44.8-2.133333l76.8 76.8c12.8 12.8 12.8 32 0 44.8l-2.133333 2.133333c-12.8 12.8-32 12.8-44.8 0L136.533333 168.533333c-10.666667-12.8-10.666667-32 0-44.8z",fill:"#FFC445"})]})})}),(0,s.jsx)("div",{className:"navbar-item upload",children:(0,s.jsx)("a",{href:c.PK,target:"_blank",children:(0,s.jsxs)("button",{className:"button is-primary","aria-haspopup":"true","aria-controls":"dropdown-menu4",children:[(0,s.jsx)(m,{}),"\xa0\xa0",(0,s.jsx)("strong",{children:"Upload"})]})})}),r?(0,s.jsxs)("div",{className:"navbar-item has-dropdown is-hoverable",children:[(0,s.jsx)("div",{className:"navbar-link is-arrowless",children:(0,s.jsx)("figure",{className:"image avatar",children:(0,s.jsx)("img",{className:"is-rounded",src:r.Avatar})})}),(0,s.jsxs)("div",{className:"navbar-dropdown is-right",children:[(0,s.jsx)("a",{className:"navbar-item",href:c.PK+`/user/profile?name=${r.Name}`,target:"_blank",children:"\u6211\u7684\u8d44\u6599"}),(0,s.jsx)("hr",{className:"navbar-divider"}),(0,s.jsx)("a",{className:"navbar-item",onClick:()=>l.N.logout(),children:"\u9000\u51fa\u767b\u5f55"})]})]}):(0,s.jsx)("div",{className:"navbar-item",children:(0,s.jsx)("div",{className:"buttons",children:(0,s.jsx)("a",{href:"/login",className:"button is-light",children:"Log in"})})})]})]})]})}var g=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(a[n[s]]=e[n[s]])}return a};const f=document.getElementById("root"),x=e=>((0,i.useEffect)((()=>{const e=document.querySelector(".upv-header__bar"),t=t=>{f.scrollTop>=222?e.classList.add("fixed-header"):e.classList.remove("fixed-header")};return f.addEventListener("scroll",t),()=>{f.removeEventListener("scroll",t)}}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"upv-header",children:[(0,s.jsx)("div",{className:"upv-header__bar",children:(0,s.jsx)(p,{})}),(0,s.jsx)("div",{className:"upv-header__banner",children:(0,s.jsx)("div",{className:"taper-line"})})]}),(0,s.jsx)("main",{className:"container",children:e.children})]})),j=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"upv-header",children:(0,s.jsx)("div",{className:"upv-header__bar fixed-header",children:(0,s.jsx)(p,{})})}),(0,s.jsx)("main",{className:"container",children:e.children})]}),b=e=>{var{component:t,layout:a,children:n}=e,r=g(e,["component","layout","children"]);return(0,i.useEffect)((()=>{root.scrollTo({top:0,left:0})}),[]),(0,s.jsx)(o.qh,Object.assign({},r,{component:({params:e})=>(0,s.jsx)(a,{children:(0,s.jsx)(i.Suspense,{fallback:(0,s.jsx)(y,{}),children:t?(0,s.jsx)(t,Object.assign({},e)):"function"===typeof n?n(e):n})})}))},N=e=>{var t=g(e,[]);return(0,s.jsx)(b,Object.assign({},t,{layout:x}))},w=e=>{var t=g(e,[]);return(0,s.jsx)(b,Object.assign({},t,{layout:j}))};function y(){return(0,s.jsxs)("div",{style:{height:"80vh",lineHeight:"80vh",textAlign:"center",fontSize:"32px"},children:[(0,s.jsx)("h2",{className:"__loading__",children:"\ud83c\udf00 Loading..."}),(0,s.jsx)("style",{children:".__loading__{ animation: loading 5s infinite ease-in-out; }"})]})}var E=a(3522),O=a(1117);const k=()=>{const[e,t]=(0,i.useState)(null);return(0,i.useEffect)((()=>{c.pY.interceptors.response.use((e=>e),(e=>(e.err&&E.Ay.error(e.err),401===e.status&&(t(null),l.N.logout(`${c.jg}/login?from=${location.href}`)),e)));const e=O.H.get(c.od),a=localStorage.getItem(c.Pz);a&&e?t(JSON.parse(a)):e&&c.pY.get("/user").then((e=>{e.data&&(t(e.data),localStorage.setItem(c.Pz,JSON.stringify(e.data)))}))}),[]),(0,s.jsxs)(i.Fragment,{children:[(0,s.jsx)(o.Ix,{children:(0,s.jsx)(d.R.Provider,{value:e,children:(0,s.jsxs)(o.dO,{children:[(0,s.jsx)(N,{path:"/",component:(0,i.lazy)((()=>Promise.all([a.e(687),a.e(589)]).then(a.bind(a,589))))}),(0,s.jsx)(N,{path:"/login",component:(0,i.lazy)((()=>Promise.all([a.e(687),a.e(99)]).then(a.bind(a,3099))))}),(0,s.jsx)(w,{path:"/p/:id",component:(0,i.lazy)((()=>Promise.all([a.e(714),a.e(687),a.e(723),a.e(34),a.e(978)]).then(a.bind(a,7059))))}),(0,s.jsx)(w,{path:"/v/:id",component:(0,i.lazy)((()=>Promise.all([a.e(714),a.e(458),a.e(533),a.e(687),a.e(723),a.e(34),a.e(958)]).then(a.bind(a,3903))))}),(0,s.jsx)(w,{path:"/pv/tag",component:(0,i.lazy)((()=>Promise.all([a.e(687),a.e(250)]).then(a.bind(a,2250))))}),(0,s.jsx)(w,{path:"/search",component:(0,i.lazy)((()=>Promise.all([a.e(687),a.e(742)]).then(a.bind(a,5742))))}),(0,s.jsx)(w,{path:"/about",component:(0,i.lazy)((()=>Promise.all([a.e(714),a.e(687),a.e(723),a.e(173)]).then(a.bind(a,9173))))}),(0,s.jsx)(w,{path:"/feedback",component:(0,i.lazy)((()=>Promise.all([a.e(687),a.e(733)]).then(a.bind(a,5733))))}),(0,s.jsx)(w,{path:"/anime/index",component:(0,i.lazy)((()=>Promise.all([a.e(687),a.e(977)]).then(a.bind(a,8977))))}),(0,s.jsx)(w,{path:"/:rest*",component:(0,i.lazy)((()=>Promise.all([a.e(687),a.e(418)]).then(a.bind(a,7418))))})]})})}),(0,s.jsxs)("footer",{className:"footer",children:[(0,s.jsx)("div",{className:"bd-footer-support",children:(0,s.jsxs)("h4",{className:"bd-footer-title",children:[(0,s.jsx)("strong",{children:"Support"})," ",(0,s.jsx)("span",{className:"font-family-logo",children:"UPV"})]})}),(0,s.jsxs)("div",{className:"content",children:[(0,s.jsxs)("p",{className:"links",children:[(0,s.jsx)("a",{className:"link",href:"/feedback",target:"_blank",children:"\u7559\u8a00"})," ","|"," ",(0,s.jsx)("a",{className:"link",href:"/feedback",target:"_blank",children:"\u53cd\u9988"})," ","|"," ",(0,s.jsx)("a",{className:"link",href:"/about",target:"_blank",children:"\u5173\u4e8e"})]}),(0,s.jsxs)("p",{children:["Copyright \xa9 2022"," ",(0,s.jsx)("a",{href:"/",className:"font-family-logo",children:"UPV"})]})]})]}),(0,s.jsx)(E.l$,{position:"top-right",toastOptions:{success:{iconTheme:{primary:c.VG,secondary:"#fff"}}},containerStyle:{top:70,right:20}})]})};a(1240),(0,r.H)(document.getElementById("root")).render((0,s.jsx)(k,{}))},8289:(e,t,a)=>{a.d(t,{R:()=>s,k:()=>r});var n=a(7128);const s=n.createContext(null),r=()=>n.useContext(s);s.displayName="UserContext"},1719:(e,t,a)=>{a.d(t,{N:()=>n});var n,s=a(5704),r=a(1117);!function(e){e.logout=function(e){r.H.del(s.od,"/",s.V2),localStorage.removeItem(s.n),localStorage.removeItem(s.Pz),location.href=e||location.href},e.getAccessToken=function(){return r.H.get(s.od)},e.login=function(e){localStorage.setItem(s.n,r.H.get(s.od)),localStorage.setItem(s.Pz,JSON.stringify(e))}}(n||(n={}))},5704:(e,t,a)=>{a.d(t,{PK:()=>o,od:()=>h,h8:()=>m,V2:()=>c,jg:()=>i,n:()=>d,Pz:()=>l,VG:()=>u,pY:()=>g,OF:()=>f});var n=a(1117);class s{constructor(){this.resolve=e=>e,this.reject=e=>e}use(e,t){this.resolve=e,t&&(this.reject=t)}}class r{constructor(e){var t,a,n;this.baseUrl=null!==(t=e.baseUrl)&&void 0!==t?t:"",this.headers=null!==(a=e.headers)&&void 0!==a?a:{},this.config=null!==(n=e.config)&&void 0!==n?n:{},this.interceptors={request:new s,response:new s}}static create(e,t){return new r({baseUrl:e,headers:null===t||void 0===t?void 0:t.header,config:null===t||void 0===t?void 0:t.config})}get(e,{headers:t,data:a}={}){return this._send(e,"GET",t,a)}post(e,{headers:t,data:a}={}){return this._send(e,"POST",t,a)}put(e,{headers:t,data:a}={}){return this._send(e,"PUT",t,a)}delete(e,{headers:t,data:a}={}){return this._send(e,"DELETE",t,a)}_send(e,t,a={},n={}){var s,r;const c=null===(r=(s=this.interceptors.request).resolve)||void 0===r?void 0:r.call(s,Object.assign(Object.assign({},this.headers),a));let i;return n instanceof FormData||!this.headers["Content-type"]||(c["Content-type"]="application/json; charset=UTF-8"),fetch(`${this.baseUrl}${this.baseUrl?encodeURIComponent(e):e}`,Object.assign(Object.assign({method:t,headers:c},this.config),!["GET","HEAD"].includes(t.toUpperCase())&&{body:n instanceof FormData?n:JSON.stringify(n)})).then((e=>{i=e;try{return e.json()}catch(t){throw t}}),(e=>{var t,a;return console.error("<--- request error"+e),null===(a=(t=this.interceptors.request).reject)||void 0===a?void 0:a.call(t,e)})).then((e=>{var t,a,n,s,r;if(!i.ok)throw null===(a=(t=this.interceptors.response).reject)||void 0===a?void 0:a.call(t,Object.assign({status:i.status,statusText:i.statusText},e));return null!==(r=null===(s=(n=this.interceptors.response).resolve)||void 0===s?void 0:s.call(n,e))&&void 0!==r?r:e}))}}const c="xn--7ov117aclgs4c.life",i="https://xn--7ov117aclgs4c.life",o="https://admin.xn--7ov117aclgs4c.life",l="USER_INFO",d="ACCESS_TOKEN",h="access_token",u="#6668ab",m=["\u5468\u65e5","\u5468\u4e00","\u5468\u4e8c","\u5468\u4e09","\u5468\u56db","\u5468\u4e94","\u5468\u516d"];var v;!function(e){e[e.NORMAL=4]="NORMAL",e[e.CREATOR=3]="CREATOR",e[e.ADMIN=2]="ADMIN",e[e.ROOT=1]="ROOT",e.ALL=""}(v||(v={}));v.NORMAL,v.CREATOR,v.ADMIN,v.ROOT,v.ALL;var p;!function(e){e[e.DRAFT=5]="DRAFT",e[e.PUBLISHED=4]="PUBLISHED",e[e.PENDING=3]="PENDING",e[e.REJECT=2]="REJECT",e[e.DELETED=1]="DELETED",e.ALL=""}(p||(p={}));p.PUBLISHED,p.PENDING,p.REJECT,p.ALL;const g=r.create("https://api.xn--7ov117aclgs4c.life/api",{config:{credentials:"include"}});g.interceptors.request.use((e=>{const t=n.H.get(h);return Object.assign(Object.assign({},e),{Authorization:t?`Bearer ${t}`:""})})),document.location.search.includes("cors")&&localStorage.setItem("cors","1");const f=r.create("1"==localStorage.getItem("cors")?"":"https://cors-flame.vercel.app/api/cors?url=")},1240:(e,t,a)=>{a.r(t);var n=function(e,t,a,n){return new(a||(a=Promise))((function(s,r){function c(e){try{o(n.next(e))}catch(t){r(t)}}function i(e){try{o(n.throw(e))}catch(t){r(t)}}function o(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(c,i)}o((n=n.apply(e,t||[])).next())}))};let s=!1;if(document.location.search.includes("debug")&&localStorage.setItem("debug","1"),"1"!=localStorage.getItem("debug")){const e=e=>n(void 0,void 0,void 0,(function*(){e.isSafari&&(document.body.innerHTML='<h1 style="font-size:2em;font-weight:bold">\ud83d\udc7e\u6253\u65ad\u65bd\u6cd5!</h1>',yield new Promise((e=>setTimeout(e,1e3)))),window.close(),window.location.href="https://www.baidu.com/s?wd=ip"}));a.e(643).then(a.t.bind(a,965,23)).then((function(t){t.addListener((function(a){s=a,a&&e(t)})),t.launch(),window.addEventListener("pageshow",(a=>{var n,r;(a.persisted||2==(null===(r=null===(n=window.performance)||void 0===n?void 0:n.navigation)||void 0===r?void 0:r.type))&&s&&e(t)}),!1)}))}},1117:(e,t,a)=>{var n;a.d(t,{H:()=>n}),function(e){e.get=function(e){for(var t=e+"=",a=document.cookie.split(";"),n=0;n<a.length;n++){for(var s=a[n];" "==s.charAt(0);)s=s.substring(1,s.length);if(0==s.indexOf(t))return s.substring(t.length,s.length)}return null},e.del=function(e,t,a){document.cookie=e+"="+(t?";path="+t:"")+(a?";domain="+a:"")+";expires=Thu, 01 Jan 1970 00:00:01 GMT"}}(n||(n={}))}},e=>{e.O(0,[784,767],(()=>{return t=6947,e(e.s=t);var t}));e.O()}]);