"use strict";var oe=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var le=(p,y)=>{var t={};for(var e in p)ce.call(p,e)&&y.indexOf(e)<0&&(t[e]=p[e]);if(p!=null&&oe)for(var e of oe(p))y.indexOf(e)<0&&ie.call(p,e)&&(t[e]=p[e]);return t};(self.webpackChunk_web_index=self.webpackChunk_web_index||[]).push([[524],{4893:(p,y,t)=>{var e=t(6048),x=t(1806);const N={};var h=t(1466),a=t(8588),m=t(5159),v=t(1447),f=t(5633),E;function b(){return b=Object.assign?Object.assign.bind():function(o){for(var l=1;l<arguments.length;l++){var c=arguments[l];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(o[d]=c[d])}return o},b.apply(this,arguments)}const C=(o,l)=>{let g=o,{title:c,titleId:d}=g,i=le(g,["title","titleId"]);return a.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",ref:l,"aria-labelledby":d},i),c?a.createElement("title",{id:d},c):null,E||(E=a.createElement("path",{d:"M384 352v64c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32v-64c0-17.67-14.33-32-32-32s-32 14.33-32 32v64c0 53.02 42.98 96 96 96h256c53.02 0 96-42.98 96-96v-64c0-17.67-14.33-32-32-32S384 334.3 384 352zM201.4 9.375l-128 128c-12.51 12.51-12.49 32.76 0 45.25c12.5 12.5 32.75 12.5 45.25 0L192 109.3V320c0 17.69 14.31 32 32 32s32-14.31 32-32V109.3l73.38 73.38c12.5 12.5 32.75 12.5 45.25 0s12.5-32.75 0-45.25l-128-128C234.1-3.125 213.9-3.125 201.4 9.375z"})))},L=(0,a.forwardRef)(C),te=t.p+"static/media/fa-arrow-up-from-bracket.12e2f135cfaadc1ae41c4e4804eee0fd.svg",Y={},B="darkMode",J=(o=!!localStorage.getItem(B),l={})=>{const{classNameDark:c="dark",classNameLight:d="light",storageKey:i=B,element:g=globalThis.document&&document.documentElement,transition:O=document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches?document.startViewTransition():void 0}=l,[u,D]=(0,a.useState)(o),[M,G]=(0,a.useState)({x:0,y:0});(0,a.useEffect)(()=>{const j=localStorage.getItem(i);D(j?j==="true":window.matchMedia("(prefers-color-scheme: dark)").matches)},[i]),(0,a.useEffect)(()=>{const j=A=>{const ee=localStorage.getItem(i)==="true";D(A.matches),ee===A.matches&&localStorage.removeItem(i)},w=()=>{const A=localStorage.getItem(i);D(A===void 0?window.matchMedia("(prefers-color-scheme: dark)").matches:A==="true")};return window.addEventListener("storage",w),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",j),()=>{window.removeEventListener("storage",w),window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",j)}},[i]);const ne=(0,a.useRef)(u);return(0,a.useEffect)(()=>{ne.current=u},[u]),(0,a.useEffect)(()=>{const j=()=>{window.matchMedia("(prefers-color-scheme: dark)").matches===ne.current&&localStorage.removeItem(B)};return window.addEventListener("beforeunload",j),()=>{window.removeEventListener("beforeunload",j)}},[]),(0,a.useEffect)(()=>{if(typeof u=="undefined")return;const j=g,w=()=>{u?(j.classList.remove(d),j.classList.add(c)):(j.classList.remove(c),j.classList.add(d))},{x:A,y:$}=M,ee=Math.hypot(Math.max(A,innerWidth-A),Math.max($,innerHeight-$));O?O.ready.then(()=>{if(w(),M.x===0)return;const re=[`circle(0px at ${A}px ${$}px)`,`circle(${ee}px at ${A}px ${$}px)`];j.animate({clipPath:u?[...re].reverse():re},{duration:400,easing:"ease-in-out",pseudoElement:u?"::view-transition-old(root)":"::view-transition-new(root)"})}):w()},[c,d,u,g]),{value:u,toggle:j=>{D(w=>(i&&(localStorage.setItem(i,String(!w)),G({x:j.clientX,y:j.clientY})),!w))}}};function F(){const o=(0,a.useRef)(""),[l]=(0,m.lq)("/search"),[c,d]=(0,a.useState)("Search"),i=(0,f.k)(),{value:g,toggle:O}=J();return(0,a.useEffect)(()=>{fetch("//v1.hitokoto.cn?c=a").then(M=>M.json()).then(M=>{d(M.hitokoto)});const u=document.querySelector(".navbar-burger"),D=()=>{const M=document.getElementById(u.dataset.target);u.classList.toggle("is-active"),M.classList.toggle("is-active")};return u.addEventListener("click",D,!1),()=>{u.removeEventListener("click",D,!1)}},[]),(0,e.jsxs)("nav",{className:"navbar is-transparent",role:"navigation","aria-label":"main navigation",children:[(0,e.jsxs)("div",{className:"navbar-brand",children:[(0,e.jsx)(m.N_,{href:"/",className:"navbar-item",children:(0,e.jsx)("h1",{className:"logo",children:"UPV"})}),(0,e.jsxs)("a",{role:"button",className:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"upv-nav",children:[(0,e.jsx)("span",{"aria-hidden":"true"}),(0,e.jsx)("span",{"aria-hidden":"true"}),(0,e.jsx)("span",{"aria-hidden":"true"})]})]}),(0,e.jsxs)("div",{id:"upv-nav",className:"navbar-menu",children:[(0,e.jsxs)("div",{className:"navbar-start",children:[(0,e.jsx)(m.N_,{href:"/",className:"navbar-item",children:"Home"}),(0,e.jsx)("a",{className:"navbar-item",href:"/anime/index",target:"_blank",children:"Schedule"}),(0,e.jsx)("a",{className:"navbar-item",href:"https://cdn.jsdelivr.net/gh/upvorg/cdn@master/apk/app-arm64-v8a-release.apk",target:"_blank",children:"App"}),(0,e.jsx)("a",{className:"navbar-item",href:"/about",target:"_blank",children:"About"})]}),!l&&(0,e.jsx)("div",{className:"navbar-item center-search",children:(0,e.jsxs)("form",{className:"nav-search-form",onSubmit:u=>{u.preventDefault(),window.open(`/search?k=${o.current}`)},children:[(0,e.jsxs)("div",{className:"nav-search-content",children:[(0,e.jsx)("input",{className:"nav-search-input",type:"text",autoComplete:"off",accessKey:"s",maxLength:100,"x-webkit-speech":"","x-webkit-grammar":"builtin:translate",placeholder:c,title:c,onChange:u=>{o.current=u.target.value}}),(0,e.jsx)("div",{className:"nav-search-clean",children:(0,e.jsx)("button",{className:"delete is-small",type:"reset"})})]}),(0,e.jsx)("button",{className:"nav-search-btn icon",children:(0,e.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"search",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"svg-inline--fa fa-search fa-w-16 fa-fw",children:(0,e.jsx)("path",{fill:"currentColor",d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"})})})]})}),(0,e.jsxs)("div",{className:"navbar-end",children:[(0,e.jsx)("div",{className:"navbar-item theme",onClick:O,children:(0,e.jsx)("button",{className:"button is-light","aria-haspopup":"true","aria-controls":"dropdown-menu4",children:g?(0,e.jsx)("svg",{viewBox:"0 0 1024 1024",children:(0,e.jsx)("path",{d:"M185.335 178.178l-2.742-2.384c-13.39-11.534-14.895-31.74-3.36-45.13a32 32 0 0 1 4.324-4.158C249.354 74.17 337.575 48 448.22 48 704.358 48 912 255.74 912 512l-0.062 7.673C907.842 772.394 701.797 976 448.22 976c-110.645 0-198.866-26.169-264.663-78.506a32 32 0 0 1-4.325-4.159c-11.419-13.256-10.058-33.192 2.962-44.78l0.399-0.35 2.742-2.383c89.13-78.201 134.016-188.043 134.66-329.525L320 512c0.253-143.557-44.635-254.831-134.665-333.822z",fill:"#FFC445"})}):(0,e.jsxs)("svg",{viewBox:"0 0 1028 1024",children:[(0,e.jsx)("path",{d:"M514.133333 509.866667m-256 0a256 256 0 1 0 512 0 256 256 0 1 0-512 0Z",fill:"#FFC445"}),(0,e.jsx)("path",{d:"M514.133333 170.666667c-19.2 0-32-14.933333-32-32V29.866667c0-17.066667 12.8-29.866667 29.866667-29.866667h2.133333c17.066667 0 32 14.933333 32 32v108.8c0 14.933333-14.933333 29.866667-32 29.866667zM514.133333 1024c-19.2 0-32-14.933333-32-32v-108.8c0-17.066667 14.933333-32 32-32h2.133334c17.066667 0 32 14.933333 32 32v108.8c-2.133333 17.066667-17.066667 32-34.133334 32zM853.333333 509.866667c0-19.2 14.933333-32 32-32h108.8c17.066667 0 32 14.933333 32 32v2.133333c0 17.066667-14.933333 32-32 32h-108.8c-17.066667-2.133333-32-17.066667-32-34.133333zM0 509.866667c0-19.2 14.933333-32 32-32h108.8c17.066667 0 32 14.933333 32 32v2.133333c0 17.066667-14.933333 32-32 32H32c-17.066667-2.133333-32-17.066667-32-34.133333zM742.4 247.466667c-12.8-12.8-12.8-32-2.133333-44.8l76.8-76.8c12.8-12.8 32-12.8 44.8 0V128c12.8 12.8 12.8 32 0 44.8l-76.8 76.8c-10.666667 10.666667-32 10.666667-42.666667-2.133333zM138.666667 851.2c-12.8-12.8-12.8-34.133333-2.133334-44.8l76.8-76.8c12.8-12.8 32-12.8 44.8 0l2.133334 2.133333c12.8 12.8 12.8 32 0 44.8L183.466667 853.333333c-12.8 10.666667-32 10.666667-44.8-2.133333zM740.266667 727.466667c12.8-12.8 34.133333-12.8 44.8-2.133334l76.8 76.8c12.8 12.8 12.8 32 0 44.8l-2.133334 2.133334c-12.8 12.8-32 12.8-44.8 0l-76.8-76.8c-10.666667-12.8-10.666667-32 2.133334-44.8zM136.533333 123.733333c12.8-12.8 34.133333-12.8 44.8-2.133333l76.8 76.8c12.8 12.8 12.8 32 0 44.8l-2.133333 2.133333c-12.8 12.8-32 12.8-44.8 0L136.533333 168.533333c-10.666667-12.8-10.666667-32 0-44.8z",fill:"#FFC445"})]})})}),(0,e.jsx)("div",{className:"navbar-item upload",children:(0,e.jsx)("a",{href:h.PK,target:"_blank",children:(0,e.jsxs)("button",{className:"button is-primary","aria-haspopup":"true","aria-controls":"dropdown-menu4",children:[(0,e.jsx)(L,{}),"\xA0\xA0",(0,e.jsx)("strong",{children:"Upload"})]})})}),i?(0,e.jsxs)("div",{className:"navbar-item has-dropdown is-hoverable",children:[(0,e.jsx)("div",{className:"navbar-link is-arrowless",children:(0,e.jsx)("figure",{className:"image avatar",children:(0,e.jsx)("img",{className:"is-rounded",src:i.Avatar})})}),(0,e.jsxs)("div",{className:"navbar-dropdown is-right",children:[(0,e.jsx)("a",{className:"navbar-item",href:h.PK+`/user/profile?name=${i.Name}`,target:"_blank",children:"\u6211\u7684\u8D44\u6599"}),(0,e.jsx)("hr",{className:"navbar-divider"}),(0,e.jsx)("a",{className:"navbar-item",onClick:()=>v.N.logout(),children:"\u9000\u51FA\u767B\u5F55"})]})]}):(0,e.jsx)("div",{className:"navbar-item",children:(0,e.jsx)("div",{className:"buttons",children:(0,e.jsx)("a",{href:"/login",className:"button is-light",children:"Log in"})})})]})]})]})}const se={};var W=Object.defineProperty,Q=Object.defineProperties,X=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,V=(o,l,c)=>l in o?W(o,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[l]=c,z=(o,l)=>{for(var c in l||(l={}))Z.call(l,c)&&V(o,c,l[c]);if(S)for(var c of S(l))K.call(l,c)&&V(o,c,l[c]);return o},R=(o,l)=>Q(o,X(l)),H=(o,l)=>{var c={};for(var d in o)Z.call(o,d)&&l.indexOf(d)<0&&(c[d]=o[d]);if(o!=null&&S)for(var d of S(o))l.indexOf(d)<0&&K.call(o,d)&&(c[d]=o[d]);return c};const T=document.getElementById("root"),k=o=>((0,a.useEffect)(()=>{const l=document.querySelector(".upv-header__bar"),c=d=>{T.scrollTop>=222?l.classList.add("fixed-header"):l.classList.remove("fixed-header")};return T.addEventListener("scroll",c),()=>{T.removeEventListener("scroll",c)}},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"upv-header",children:[(0,e.jsx)("div",{className:"upv-header__bar",children:(0,e.jsx)(F,{})}),(0,e.jsx)("div",{className:"upv-header__banner",children:(0,e.jsx)("div",{className:"taper-line"})})]}),(0,e.jsx)("main",{className:"container",children:o.children})]})),ae=o=>(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"upv-header",children:(0,e.jsx)("div",{className:"upv-header__bar fixed-header",children:(0,e.jsx)(F,{})})}),(0,e.jsx)("main",{className:"container",children:o.children})]}),U=o=>{var l=o,{component:c,layout:d,children:i}=l,g=H(l,["component","layout","children"]);return(0,e.jsx)(m.qh,R(z({},g),{component:({params:O})=>(0,e.jsx)(d,{children:(0,e.jsx)(a.Suspense,{fallback:(0,e.jsx)(_,{}),children:c?(0,e.jsx)(c,z({},O)):typeof i=="function"?i(O):i})})}))},q=o=>{var l=H(o,[]);return(0,e.jsx)(U,R(z({},l),{layout:k}))},I=o=>{var l=H(o,[]);return(0,e.jsx)(U,R(z({},l),{layout:ae}))};function _(){return(0,e.jsx)("div",{style:{height:"80vh",lineHeight:"80vh",textAlign:"center",fontSize:"36px"},children:(0,e.jsx)("h2",{children:"\u{1F300} Loading..."})})}var n=t(1696),s=t(2109);const P=()=>{const[o,l]=(0,a.useState)(null);return(0,a.useEffect)(()=>{h.pY.interceptors.response.use(i=>i,i=>(i.err&&n.Ay.error(i.err),i.status===401&&(l(null),v.N.logout(`${h.jg}/login?from=${location.href}`)),i));const c=s.H.get(h.od),d=localStorage.getItem(h.Pz);d&&c?l(JSON.parse(d)):c&&h.pY.get("/user").then(i=>{i.data&&(l(i.data),localStorage.setItem(h.Pz,JSON.stringify(i.data)))})},[]),(0,e.jsxs)(a.Fragment,{children:[(0,e.jsx)(m.Ix,{children:(0,e.jsx)(f.R.Provider,{value:o,children:(0,e.jsxs)(m.dO,{children:[(0,e.jsx)(q,{path:"/",component:(0,a.lazy)(()=>Promise.all([t.e(731),t.e(830)]).then(t.bind(t,4830)))}),(0,e.jsx)(q,{path:"/login",component:(0,a.lazy)(()=>Promise.all([t.e(731),t.e(813)]).then(t.bind(t,9813)))}),(0,e.jsx)(I,{path:"/p/:id",component:(0,a.lazy)(()=>Promise.all([t.e(714),t.e(731),t.e(568),t.e(64),t.e(722)]).then(t.bind(t,4121)))}),(0,e.jsx)(I,{path:"/v/:id",component:(0,a.lazy)(()=>Promise.all([t.e(714),t.e(458),t.e(533),t.e(731),t.e(568),t.e(64),t.e(264)]).then(t.bind(t,8987)))}),(0,e.jsx)(I,{path:"/pv/tag",component:(0,a.lazy)(()=>Promise.all([t.e(731),t.e(594)]).then(t.bind(t,9594)))}),(0,e.jsx)(I,{path:"/search",component:(0,a.lazy)(()=>Promise.all([t.e(731),t.e(504)]).then(t.bind(t,5504)))}),(0,e.jsx)(I,{path:"/about",component:(0,a.lazy)(()=>Promise.all([t.e(714),t.e(731),t.e(568),t.e(677)]).then(t.bind(t,8677)))}),(0,e.jsx)(I,{path:"/feedback",component:(0,a.lazy)(()=>Promise.all([t.e(731),t.e(995)]).then(t.bind(t,4995)))}),(0,e.jsx)(I,{path:"/anime/index",component:(0,a.lazy)(()=>Promise.all([t.e(731),t.e(87)]).then(t.bind(t,87)))}),(0,e.jsx)(I,{path:"/:rest*",component:(0,a.lazy)(()=>Promise.all([t.e(731),t.e(762)]).then(t.bind(t,4762)))})]})})}),(0,e.jsxs)("footer",{className:"footer",children:[(0,e.jsx)("div",{className:"bd-footer-support",children:(0,e.jsxs)("h4",{className:"bd-footer-title",children:[(0,e.jsx)("strong",{children:"Support"})," ",(0,e.jsx)("span",{className:"font-family-logo",children:"UPV"})]})}),(0,e.jsxs)("div",{className:"content",children:[(0,e.jsxs)("p",{className:"links",children:[(0,e.jsx)("a",{className:"link",href:"/feedback",target:"_blank",children:"\u7559\u8A00"})," ","|"," ",(0,e.jsx)("a",{className:"link",href:"/feedback",target:"_blank",children:"\u53CD\u9988"})," ","|"," ",(0,e.jsx)("a",{className:"link",href:"/about",target:"_blank",children:"\u5173\u4E8E"})]}),(0,e.jsxs)("p",{children:["Copyright \xA9 2022"," ",(0,e.jsx)("a",{href:"/",className:"font-family-logo",children:"UPV"})]})]})]}),(0,e.jsx)(n.l$,{position:"top-right",toastOptions:{success:{iconTheme:{primary:h.VG,secondary:"#fff"}}},containerStyle:{top:70,right:20}})]})};t(2552),(0,x.H)(document.getElementById("root")).render((0,e.jsx)(P,{}))},5633:(p,y,t)=>{t.d(y,{R:()=>x,k:()=>N});var e=t(8588);const x=e.createContext(null),N=()=>e.useContext(x);x.displayName="UserContext"},1447:(p,y,t)=>{t.d(y,{N:()=>N});var e=t(1466),x=t(2109),N;(h=>{function a(f){x.H.del(e.od,"/",e.V2),localStorage.removeItem(e.n),localStorage.removeItem(e.Pz),location.href=f||location.href}h.logout=a;function m(){return x.H.get(e.od)}h.getAccessToken=m;function v(f){localStorage.setItem(e.n,x.H.get(e.od)),localStorage.setItem(e.Pz,JSON.stringify(f))}h.login=v})(N||(N={}))},1466:(p,y,t)=>{t.d(y,{PK:()=>K,od:()=>R,h8:()=>T,V2:()=>Q,jg:()=>X,n:()=>z,Pz:()=>V,VG:()=>H,pY:()=>I,OF:()=>_});var e=t(2109),x=Object.defineProperty,N=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,m=(n,s,r)=>s in n?x(n,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[s]=r,v=(n,s)=>{for(var r in s||(s={}))h.call(s,r)&&m(n,r,s[r]);if(N)for(var r of N(s))a.call(s,r)&&m(n,r,s[r]);return n},f=(n,s,r)=>(m(n,typeof s!="symbol"?s+"":s,r),r);class E{constructor(){f(this,"resolve",s=>s),f(this,"reject",s=>s)}use(s,r){this.resolve=s,r&&(this.reject=r)}}class b{constructor(s){f(this,"baseUrl"),f(this,"headers"),f(this,"config"),f(this,"interceptors");var r,P,o;this.baseUrl=(r=s.baseUrl)!=null?r:"",this.headers=(P=s.headers)!=null?P:{},this.config=(o=s.config)!=null?o:{},this.interceptors={request:new E,response:new E}}static create(s,r){return new b({baseUrl:s,headers:r==null?void 0:r.header,config:r==null?void 0:r.config})}get(s,{headers:r,data:P}={}){return this._send(s,"GET",r,P)}post(s,{headers:r,data:P}={}){return this._send(s,"POST",r,P)}put(s,{headers:r,data:P}={}){return this._send(s,"PUT",r,P)}delete(s,{headers:r,data:P}={}){return this._send(s,"DELETE",r,P)}_send(s,r,P={},o={}){var l,c;const d=(c=(l=this.interceptors.request).resolve)==null?void 0:c.call(l,v(v({},this.headers),P));!(o instanceof FormData)&&this.headers["Content-type"]&&(d["Content-type"]="application/json; charset=UTF-8");let i;return fetch(`${this.baseUrl}${this.baseUrl?encodeURIComponent(s):s}`,v(v({method:r,headers:d},this.config),!["GET","HEAD"].includes(r.toUpperCase())&&{body:o instanceof FormData?o:JSON.stringify(o)})).then(g=>{i=g;try{return g.json()}catch(O){throw O}},g=>{var O,u;return console.error("<--- request error"+g),(u=(O=this.interceptors.request).reject)==null?void 0:u.call(O,g)}).then(g=>{var O,u,D,M,G;if(!i.ok)throw(u=(O=this.interceptors.response).reject)==null?void 0:u.call(O,v({status:i.status,statusText:i.statusText},g));return(G=(M=(D=this.interceptors.response).resolve)==null?void 0:M.call(D,g))!=null?G:g})}}var C=Object.defineProperty,L=Object.defineProperties,te=Object.getOwnPropertyDescriptors,Y=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,F=(n,s,r)=>s in n?C(n,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[s]=r,se=(n,s)=>{for(var r in s||(s={}))B.call(s,r)&&F(n,r,s[r]);if(Y)for(var r of Y(s))J.call(s,r)&&F(n,r,s[r]);return n},W=(n,s)=>L(n,te(s));const Q="xn--7ov117aclgs4c.life",X="https://xn--7ov117aclgs4c.life",S="https://api.xn--7ov117aclgs4c.life/api",Z=null,K="https://admin.xn--7ov117aclgs4c.life",V="USER_INFO",z="ACCESS_TOKEN",R="access_token",H="#6668ab",T=["\u5468\u65E5","\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D"];var k=(n=>(n[n.NORMAL=4]="NORMAL",n[n.CREATOR=3]="CREATOR",n[n.ADMIN=2]="ADMIN",n[n.ROOT=1]="ROOT",n.ALL="",n))(k||{});const ae={4:"\u666E\u901A\u7528\u6237",3:"\u521B\u4F5C\u8005",2:"\u7BA1\u7406\u5458",1:"\u8D85\u7EA7\u7BA1\u7406\u5458","":"\u5168\u90E8"};var U=(n=>(n[n.DRAFT=5]="DRAFT",n[n.PUBLISHED=4]="PUBLISHED",n[n.PENDING=3]="PENDING",n[n.REJECT=2]="REJECT",n[n.DELETED=1]="DELETED",n.ALL="",n))(U||{});const q={4:"\u5DF2\u53D1\u5E03",3:"\u5F85\u5BA1\u6838",2:"\u5DF2\u4E0B\u67B6","":"\u5168\u90E8"},I=b.create(S,{config:{credentials:"include"}});I.interceptors.request.use(n=>{const s=e.H.get(R);return W(se({},n),{Authorization:s?`Bearer ${s}`:""})}),document.location.search.includes("cors")&&localStorage.setItem("cors","1");const _=b.create(localStorage.getItem("cors")=="1"?"":"https://cors-flame.vercel.app/api/cors?url=")},2552:(p,y,t)=>{t.r(y);var e=(N,h,a)=>new Promise((m,v)=>{var f=C=>{try{b(a.next(C))}catch(L){v(L)}},E=C=>{try{b(a.throw(C))}catch(L){v(L)}},b=C=>C.done?m(C.value):Promise.resolve(C.value).then(f,E);b((a=a.apply(N,h)).next())});let x=!1;if(document.location.search.includes("debug")&&localStorage.setItem("debug","1"),localStorage.getItem("debug")!="1"){const N=h=>e(void 0,null,function*(){h.isSafari&&(document.body.innerHTML='<h1 style="font-size:2em;font-weight:bold">\u{1F47E}\u6253\u65AD\u65BD\u6CD5!</h1>',yield new Promise(a=>setTimeout(a,1e3))),window.close(),window.location.href="https://www.baidu.com/s?wd=ip"});t.e(643).then(t.t.bind(t,3798,23)).then(function(h){h.addListener(function(a){x=a,a&&N(h)}),h.launch(),window.addEventListener("pageshow",a=>{var m,v;(a.persisted||((v=(m=window.performance)==null?void 0:m.navigation)==null?void 0:v.type)==2)&&x&&N(h)},!1)})}},2109:(p,y,t)=>{t.d(y,{H:()=>e});var e;(x=>{function N(a){for(var m=a+"=",v=document.cookie.split(";"),f=0;f<v.length;f++){for(var E=v[f];E.charAt(0)==" ";)E=E.substring(1,E.length);if(E.indexOf(m)==0)return E.substring(m.length,E.length)}return null}x.get=N;function h(a,m,v){document.cookie=a+"="+(m?";path="+m:"")+(v?";domain="+v:"")+";expires=Thu, 01 Jan 1970 00:00:01 GMT"}x.del=h})(e||(e={}))}},p=>{var y=e=>p(p.s=e);p.O(0,[784,910],()=>y(4893));var t=p.O()}]);
