"use strict";(self.webpackChunk_web_index=self.webpackChunk_web_index||[]).push([[179],{2682:function(O,y,t){var e=t(3467),m=t(1347),j={},h=t(5227),d=t(3862),f=t(2954),v=t(3947),x=t(6013),p,K=["title","titleId"];function A(){return A=Object.assign?Object.assign.bind():function(s){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(s[c]=l[c])}return s},A.apply(this,arguments)}function T(s,a){if(s==null)return{};var l=M(s,a),c,i;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(s);for(i=0;i<u.length;i++)c=u[i],!(a.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(s,c)&&(l[c]=s[c])}return l}function M(s,a){if(s==null)return{};var l={},c=Object.keys(s),i,u;for(u=0;u<c.length;u++)i=c[u],!(a.indexOf(i)>=0)&&(l[i]=s[i]);return l}var U=function(a,l){var c=a.title,i=a.titleId,u=T(a,K);return d.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",ref:l,"aria-labelledby":i},u),c?d.createElement("title",{id:i},c):null,p||(p=d.createElement("path",{d:"M384 352v64c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32v-64c0-17.67-14.33-32-32-32s-32 14.33-32 32v64c0 53.02 42.98 96 96 96h256c53.02 0 96-42.98 96-96v-64c0-17.67-14.33-32-32-32S384 334.3 384 352zM201.4 9.375l-128 128c-12.51 12.51-12.49 32.76 0 45.25c12.5 12.5 32.75 12.5 45.25 0L192 109.3V320c0 17.69 14.31 32 32 32s32-14.31 32-32V109.3l73.38 73.38c12.5 12.5 32.75 12.5 45.25 0s12.5-32.75 0-45.25l-128-128C234.1-3.125 213.9-3.125 201.4 9.375z"})))},$=(0,d.forwardRef)(U),G=t.p+"static/media/fa-arrow-up-from-bracket.12e2f135cfaadc1ae41c4e4804eee0fd.svg",Y={};function S(){const s=(0,d.useRef)(""),[a]=(0,f.yj)("/search"),[l,c]=(0,d.useState)("Search"),i=(0,x.L)();return(0,d.useEffect)(()=>{fetch("//v1.hitokoto.cn?c=a").then(b=>b.json()).then(b=>{c(b.hitokoto)});const u=document.querySelector(".navbar-burger"),P=()=>{const b=document.getElementById(u.dataset.target);u.classList.toggle("is-active"),b.classList.toggle("is-active")};return u.addEventListener("click",P,!1),()=>{u.removeEventListener("click",P,!1)}},[]),(0,e.jsxs)("nav",{className:"navbar is-transparent",role:"navigation","aria-label":"main navigation",children:[(0,e.jsxs)("div",{className:"navbar-brand",children:[(0,e.jsx)(f.rU,{href:"/",children:(0,e.jsx)("a",{className:"navbar-item",children:(0,e.jsx)("h1",{className:"logo",children:"UPV"})})}),(0,e.jsxs)("a",{role:"button",className:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"upv-nav",children:[(0,e.jsx)("span",{"aria-hidden":"true"}),(0,e.jsx)("span",{"aria-hidden":"true"}),(0,e.jsx)("span",{"aria-hidden":"true"})]})]}),(0,e.jsxs)("div",{id:"upv-nav",className:"navbar-menu",children:[(0,e.jsxs)("div",{className:"navbar-start",children:[(0,e.jsx)(f.rU,{href:"/",children:(0,e.jsx)("a",{className:"navbar-item",children:"Home"})}),(0,e.jsx)("a",{className:"navbar-item",href:"/anime/index",target:"_blank",children:"Schedule"}),(0,e.jsx)("a",{className:"navbar-item",href:"https://cdn.jsdelivr.net/gh/upvorg/cdn@master/apk/app-arm64-v8a-release.apk",target:"_blank",children:"App"}),(0,e.jsx)("a",{className:"navbar-item",href:"/about",target:"_blank",children:"About"})]}),!a&&(0,e.jsx)("div",{className:"navbar-item center-search",children:(0,e.jsxs)("form",{className:"nav-search-form",onSubmit:u=>{u.preventDefault(),window.open(`/search?k=${s.current}`)},children:[(0,e.jsxs)("div",{className:"nav-search-content",children:[(0,e.jsx)("input",{className:"nav-search-input",type:"text",autoComplete:"off",accessKey:"s",maxLength:100,"x-webkit-speech":"","x-webkit-grammar":"builtin:translate",placeholder:l,title:l,onChange:u=>{s.current=u.target.value}}),(0,e.jsx)("div",{className:"nav-search-clean",children:(0,e.jsx)("button",{className:"delete is-small",type:"reset"})})]}),(0,e.jsx)("button",{className:"nav-search-btn icon",children:(0,e.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"search",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"svg-inline--fa fa-search fa-w-16 fa-fw",children:(0,e.jsx)("path",{fill:"currentColor",d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"})})})]})}),(0,e.jsxs)("div",{className:"navbar-end",children:[(0,e.jsx)("div",{className:"navbar-item upload",children:(0,e.jsx)("a",{href:h.ol,target:"_blank",children:(0,e.jsxs)("button",{className:"button is-primary","aria-haspopup":"true","aria-controls":"dropdown-menu4",children:[(0,e.jsx)($,{}),"\xA0\xA0",(0,e.jsx)("strong",{children:"Upload"})]})})}),i?(0,e.jsxs)("div",{className:"navbar-item has-dropdown is-hoverable",children:[(0,e.jsx)("div",{className:"navbar-link is-arrowless",children:(0,e.jsx)("figure",{className:"image avatar",children:(0,e.jsx)("img",{className:"is-rounded",src:i.Avatar})})}),(0,e.jsxs)("div",{className:"navbar-dropdown is-right",children:[(0,e.jsx)("a",{className:"navbar-item",href:h.ol+`/user/profile?name=${i.Name}`,target:"_blank",children:"\u6211\u7684\u8D44\u6599"}),(0,e.jsx)("hr",{className:"navbar-divider"}),(0,e.jsx)("a",{className:"navbar-item",onClick:()=>v.g.logout(),children:"\u9000\u51FA\u767B\u5F55"})]})]}):(0,e.jsx)("div",{className:"navbar-item",children:(0,e.jsx)("div",{className:"buttons",children:(0,e.jsx)("a",{href:"/login",className:"button is-light",children:"Log in"})})})]})]})]})}var w={},V=Object.defineProperty,J=Object.defineProperties,Z=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,D=(s,a,l)=>a in s?V(s,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[a]=l,I=(s,a)=>{for(var l in a||(a={}))B.call(a,l)&&D(s,l,a[l]);if(E)for(var l of E(a))F.call(a,l)&&D(s,l,a[l]);return s},C=(s,a)=>J(s,Z(a)),L=(s,a)=>{var l={};for(var c in s)B.call(s,c)&&a.indexOf(c)<0&&(l[c]=s[c]);if(s!=null&&E)for(var c of E(s))a.indexOf(c)<0&&F.call(s,c)&&(l[c]=s[c]);return l};const H=document.getElementById("root"),W=s=>((0,d.useEffect)(()=>{const a=document.querySelector(".upv-header__bar"),l=c=>{H.scrollTop>=222?a.classList.add("fixed-header"):a.classList.remove("fixed-header")};return H.addEventListener("scroll",l),()=>{H.removeEventListener("scroll",l)}},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"upv-header",children:[(0,e.jsx)("div",{className:"upv-header__bar",children:(0,e.jsx)(S,{})}),(0,e.jsx)("div",{className:"upv-header__banner",children:(0,e.jsx)("div",{className:"taper-line"})})]}),(0,e.jsx)("main",{className:"container",children:s.children})]})),Q=s=>(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"upv-header",children:(0,e.jsx)("div",{className:"upv-header__bar fixed-header",children:(0,e.jsx)(S,{})})}),(0,e.jsx)("main",{className:"container",children:s.children})]}),R=s=>{var a=s,{component:l,layout:c,children:i}=a,u=L(a,["component","layout","children"]);return(0,e.jsx)(f.AW,C(I({},u),{component:({params:P})=>(0,e.jsx)(c,{children:l?(0,e.jsx)(l,I({},P)):typeof i=="function"?i(P):i})}))},r=s=>{var a=L(s,[]);return(0,e.jsx)(R,C(I({},a),{layout:W}))},n=s=>{var a=L(s,[]);return(0,e.jsx)(R,C(I({},a),{layout:Q}))};var o=t(5480),g=t(4803),z=()=>{const[s,a]=(0,d.useState)(null);return(0,d.useEffect)(()=>{h.od.interceptors.response.use(i=>i,i=>(i.err&&o.ZP.error(i.err),i.status===401&&(a(null),v.g.logout(`${h.M5}/login?from=${location.href}`)),i));const l=g.V.get(h.yI),c=localStorage.getItem(h.LH);c&&l?a(JSON.parse(c)):l&&h.od.get("/user").then(i=>{i.data&&(a(i.data),localStorage.setItem(h.LH,JSON.stringify(i.data)))})},[]),(0,e.jsx)(f.F0,{children:(0,e.jsxs)(d.Suspense,{fallback:null,children:[(0,e.jsx)(x.S.Provider,{value:s,children:(0,e.jsxs)(f.rs,{children:[(0,e.jsx)(r,{path:"/",component:(0,d.lazy)(()=>Promise.all([t.e(933),t.e(475)]).then(t.bind(t,3475)))}),(0,e.jsx)(r,{path:"/login",component:(0,d.lazy)(()=>Promise.all([t.e(933),t.e(854)]).then(t.bind(t,2854)))}),(0,e.jsx)(n,{path:"/p/:id",component:(0,d.lazy)(()=>Promise.all([t.e(18),t.e(933),t.e(149),t.e(569),t.e(189)]).then(t.bind(t,7405)))}),(0,e.jsx)(n,{path:"/v/:id",component:(0,d.lazy)(()=>Promise.all([t.e(18),t.e(817),t.e(193),t.e(933),t.e(149),t.e(569),t.e(80)]).then(t.bind(t,8817)))}),(0,e.jsx)(n,{path:"/pv/tag",component:(0,d.lazy)(()=>Promise.all([t.e(933),t.e(307)]).then(t.bind(t,5307)))}),(0,e.jsx)(n,{path:"/search",component:(0,d.lazy)(()=>Promise.all([t.e(933),t.e(856)]).then(t.bind(t,6856)))}),(0,e.jsx)(n,{path:"/about",component:(0,d.lazy)(()=>Promise.all([t.e(18),t.e(933),t.e(149),t.e(870)]).then(t.bind(t,4870)))}),(0,e.jsx)(n,{path:"/feedback",component:(0,d.lazy)(()=>Promise.all([t.e(933),t.e(680)]).then(t.bind(t,2680)))}),(0,e.jsx)(n,{path:"/anime/index",component:(0,d.lazy)(()=>Promise.all([t.e(933),t.e(725)]).then(t.bind(t,4725)))}),(0,e.jsx)(n,{path:"/:rest*",component:(0,d.lazy)(()=>Promise.all([t.e(933),t.e(24)]).then(t.bind(t,3024)))})]})}),(0,e.jsxs)("footer",{className:"footer",children:[(0,e.jsx)("div",{className:"bd-footer-support",children:(0,e.jsxs)("h4",{className:"bd-footer-title",children:[(0,e.jsx)("strong",{children:"Support"})," ",(0,e.jsx)("span",{className:"font-family-logo",children:"UPV"})]})}),(0,e.jsxs)("div",{className:"content",children:[(0,e.jsxs)("p",{className:"links",children:[(0,e.jsx)("a",{className:"link",href:"/feedback",target:"_blank",children:"\u7559\u8A00"})," ","|"," ",(0,e.jsx)("a",{className:"link",href:"/feedback",target:"_blank",children:"\u53CD\u9988"})," ","|"," ",(0,e.jsx)("a",{className:"link",href:"/about",target:"_blank",children:"\u5173\u4E8E"})]}),(0,e.jsxs)("p",{children:["Copyright \xA9 2022"," ",(0,e.jsx)("a",{href:"/",className:"font-family-logo",children:"UPV"})]})]})]}),(0,e.jsx)(o.x7,{position:"top-right",toastOptions:{success:{iconTheme:{primary:h.iZ,secondary:"#fff"}}},containerStyle:{top:70,right:20}})]})})};(0,m.s)(document.getElementById("root")).render((0,e.jsx)(z,{}))},6013:function(O,y,t){t.d(y,{L:function(){return j},S:function(){return m}});var e=t(3862);const m=e.createContext(null),j=()=>e.useContext(m);m.displayName="UserContext"},3947:function(O,y,t){t.d(y,{g:function(){return j}});var e=t(5227),m=t(4803),j;(h=>{function d(x){m.V.del(e.yI,"/",e.yK),localStorage.removeItem(e.oS),localStorage.removeItem(e.LH),location.href=x||location.href}h.logout=d;function f(){return m.V.get(e.yI)}h.getAccessToken=f;function v(x){localStorage.setItem(e.oS,m.V.get(e.yI)),localStorage.setItem(e.LH,JSON.stringify(x))}h.login=v})(j||(j={}))},5227:function(O,y,t){t.d(y,{ol:function(){return E},yI:function(){return D},zA:function(){return C},yK:function(){return w},M5:function(){return V},oS:function(){return F},LH:function(){return B},iZ:function(){return I},od:function(){return R}});var e=t(4803),m=Object.defineProperty,j=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(r,n,o)=>n in r?m(r,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[n]=o,v=(r,n)=>{for(var o in n||(n={}))h.call(n,o)&&f(r,o,n[o]);if(j)for(var o of j(n))d.call(n,o)&&f(r,o,n[o]);return r};class x{constructor(){this.resolve=n=>n,this.reject=n=>n}use(n,o){this.resolve=n,o&&(this.reject=o)}}class p{constructor(n){var o,g,N;this.baseUrl=(o=n.baseUrl)!=null?o:"",this.headers=(g=n.headers)!=null?g:{},this.config=(N=n.config)!=null?N:{},this.interceptors={request:new x,response:new x}}static create(n,o){return new p({baseUrl:n,headers:o==null?void 0:o.header,config:o==null?void 0:o.config})}get(n,{headers:o,data:g}={}){return this._send(n,"GET",o,g)}post(n,{headers:o,data:g}={}){return this._send(n,"POST",o,g)}put(n,{headers:o,data:g}={}){return this._send(n,"PUT",o,g)}delete(n,{headers:o,data:g}={}){return this._send(n,"DELETE",o,g)}_send(n,o,g={},N={}){var z,s;const a=(s=(z=this.interceptors.request).resolve)==null?void 0:s.call(z,v(v({},this.headers),g));!(N instanceof FormData)&&this.headers["Content-type"]&&(a["Content-type"]="application/json; charset=UTF-8");let l;return fetch(`${this.baseUrl}${n}`,v(v({method:o,headers:a},this.config),!["GET","HEAD"].includes(o.toUpperCase())&&{body:N instanceof FormData?N:JSON.stringify(N)})).then(c=>{l=c;try{return c.json()}catch(i){throw i}},c=>{var i,u;return console.error("<--- request error"+c),(u=(i=this.interceptors.request).reject)==null?void 0:u.call(i,c)}).then(c=>{var i,u,P,b,X;if(!l.ok)throw(u=(i=this.interceptors.response).reject)==null?void 0:u.call(i,v({status:l.status,statusText:l.statusText},c));return(X=(b=(P=this.interceptors.response).resolve)==null?void 0:b.call(P,c))!=null?X:c})}}var K=Object.defineProperty,A=Object.defineProperties,T=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,G=(r,n,o)=>n in r?K(r,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[n]=o,Y=(r,n)=>{for(var o in n||(n={}))U.call(n,o)&&G(r,o,n[o]);if(M)for(var o of M(n))$.call(n,o)&&G(r,o,n[o]);return r},S=(r,n)=>A(r,T(n));const w="xn--7ov117aclgs4c.life",V="https://xn--7ov117aclgs4c.life",J="https://api.xn--7ov117aclgs4c.life/api",Z=null,E="https://admin.xn--7ov117aclgs4c.life",B="USER_INFO",F="ACCESS_TOKEN",D="access_token",I="#6668ab",C=["\u5468\u65E5","\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D"];var L=(r=>(r[r.NORMAL=4]="NORMAL",r[r.CREATOR=3]="CREATOR",r[r.ADMIN=2]="ADMIN",r[r.ROOT=1]="ROOT",r.ALL="",r))(L||{});const H={[4]:"\u666E\u901A\u7528\u6237",[3]:"\u521B\u4F5C\u8005",[2]:"\u7BA1\u7406\u5458",[1]:"\u8D85\u7EA7\u7BA1\u7406\u5458",[""]:"\u5168\u90E8"};var W=(r=>(r[r.DRAFT=5]="DRAFT",r[r.PUBLISHED=4]="PUBLISHED",r[r.PENDING=3]="PENDING",r[r.REJECT=2]="REJECT",r[r.DELETED=1]="DELETED",r.ALL="",r))(W||{});const Q={[4]:"\u5DF2\u53D1\u5E03",[3]:"\u5F85\u5BA1\u6838",[2]:"\u5DF2\u4E0B\u67B6",[""]:"\u5168\u90E8"},R=p.create(J,{config:{credentials:"include"}});R.interceptors.request.use(r=>{const n=e.V.get(D);return S(Y({},r),{Authorization:n?`Bearer ${n}`:""})})},4803:function(O,y,t){t.d(y,{V:function(){return e}});var e;(m=>{function j(d){for(var f=d+"=",v=document.cookie.split(";"),x=0;x<v.length;x++){for(var p=v[x];p.charAt(0)==" ";)p=p.substring(1,p.length);if(p.indexOf(f)==0)return p.substring(f.length,p.length)}return null}m.get=j;function h(d,f,v){document.cookie=d+"="+(f?";path="+f:"")+(v?";domain="+v:"")+";expires=Thu, 01 Jan 1970 00:00:01 GMT"}m.del=h})(e||(e={}))}},function(O){var y=function(e){return O(O.s=e)};O.O(0,[217,417],function(){return y(2682)});var t=O.O()}]);
