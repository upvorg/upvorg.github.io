(self.webpackChunk_web_index=self.webpackChunk_web_index||[]).push([[27],{9051:function(A,D){var u,s;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var L={}.hasOwnProperty,E="[native code]";function F(){for(var x=[],j=0;j<arguments.length;j++){var m=arguments[j];if(m){var $=typeof m;if($==="string"||$==="number")x.push(m);else if(Array.isArray(m)){if(m.length){var g=F.apply(null,m);g&&x.push(g)}}else if($==="object"){if(m.toString!==Object.prototype.toString&&!m.toString.toString().includes("[native code]")){x.push(m.toString());continue}for(var p in m)L.call(m,p)&&m[p]&&x.push(p)}}}return x.join(" ")}A.exports?(F.default=F,A.exports=F):(u=[],s=function(){return F}.apply(D,u),s!==void 0&&(A.exports=s))})()},6802:function(A,D,u){"use strict";u.d(D,{Z:function(){return F}});var s=u(9745),L=u(9889),E={};function F({title:x,icon:j,videos:m,asideTitle:$,aside:g,moreUrl:p}){return(0,s.jsxs)("div",{className:`upv-grid ${$?"col-2":""}`,children:[(0,s.jsxs)("div",{className:"upv-card-list",children:[(0,s.jsxs)("div",{className:"list-header",children:[(0,s.jsxs)("div",{children:[j&&(0,s.jsx)("img",{src:j,alt:x}),(0,s.jsx)("h2",{children:x})]}),p&&m&&m.length>0&&(0,s.jsxs)("a",{className:"list-header__more",href:p,target:"_blank",children:["more",(0,s.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 9 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"channel-entry-more__link--arrow",children:[(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.50588 3.40623C7.40825 3.3086 7.24996 3.3086 7.15232 3.40623L4.41244 6.14612L1.67255 3.40623C1.57491 3.3086 1.41662 3.3086 1.31899 3.40623C1.22136 3.50386 1.22136 3.66215 1.31899 3.75978L4.11781 6.5586C4.28053 6.72132 4.54434 6.72132 4.70706 6.5586L7.50588 3.75978C7.60351 3.66215 7.60351 3.50386 7.50588 3.40623Z",fill:"currentColor"}),(0,s.jsx)("path",{d:"M7.15232 3.40623L7.50588 3.75978L7.50588 3.75978L7.15232 3.40623ZM7.50588 3.40623L7.15232 3.75978L7.15233 3.75978L7.50588 3.40623ZM4.41244 6.14612L4.05888 6.49967C4.15265 6.59344 4.27983 6.64612 4.41244 6.64612C4.54504 6.64612 4.67222 6.59344 4.76599 6.49967L4.41244 6.14612ZM1.67255 3.40623L2.0261 3.05268L2.0261 3.05268L1.67255 3.40623ZM1.31899 3.40623L0.965439 3.05268L0.965439 3.05268L1.31899 3.40623ZM1.31899 3.75978L1.67255 3.40623V3.40623L1.31899 3.75978ZM4.11781 6.5586L3.76425 6.91215L4.11781 6.5586ZM4.70706 6.5586L4.35351 6.20505L4.70706 6.5586ZM7.50588 3.75978L7.15233 3.40623L7.15232 3.40623L7.50588 3.75978ZM7.50588 3.75978C7.40825 3.85742 7.24996 3.85742 7.15232 3.75978L7.85943 3.05268C7.56654 2.75978 7.09166 2.75978 6.79877 3.05268L7.50588 3.75978ZM4.76599 6.49967L7.50588 3.75978L6.79877 3.05268L4.05888 5.79257L4.76599 6.49967ZM1.31899 3.75978L4.05888 6.49967L4.76599 5.79257L2.0261 3.05268L1.31899 3.75978ZM1.67254 3.75979C1.57491 3.85742 1.41662 3.85742 1.31899 3.75979L2.0261 3.05268C1.73321 2.75978 1.25833 2.75978 0.965439 3.05268L1.67254 3.75979ZM1.67255 3.40623C1.77018 3.50386 1.77018 3.66215 1.67255 3.75978L0.965439 3.05268C0.672546 3.34557 0.672546 3.82044 0.965439 4.11334L1.67255 3.40623ZM4.47136 6.20505L1.67255 3.40623L0.965439 4.11334L3.76425 6.91215L4.47136 6.20505ZM4.35351 6.20505C4.38605 6.1725 4.43882 6.1725 4.47136 6.20505L3.76425 6.91215C4.12223 7.27013 4.70264 7.27013 5.06062 6.91215L4.35351 6.20505ZM7.15232 3.40623L4.35351 6.20505L5.06062 6.91215L7.85943 4.11334L7.15232 3.40623ZM7.15233 3.75978C7.05469 3.66215 7.05469 3.50386 7.15233 3.40623L7.85943 4.11334C8.15233 3.82045 8.15233 3.34557 7.85943 3.05268L7.15233 3.75978Z",fill:"currentColor"})]})]})]}),(0,s.jsx)("div",{className:"list-body",children:m?m.length>0?m.map((i,f)=>(0,s.jsx)(L.Z,{info:i},f)):(0,s.jsx)("div",{className:"empty",children:"No Data"}):(0,s.jsx)("span",{className:"loading empty",children:"loading\xB7\xB7\xB7"})})]}),!!$&&(0,s.jsxs)("aside",{children:[(0,s.jsx)("div",{className:"aside-header",children:(0,s.jsx)("div",{className:"aside-title",children:$})}),(0,s.jsx)("div",{className:"aside-body",children:g})]})]})}},9889:function(A,D,u){"use strict";u.d(D,{Z:function(){return p}});var s=u(9745),L={},E=u(7510),F=u(619),x=u(5580),j=u(9051),m=u.n(j);const $=6,g=new IntersectionObserver(i=>{i.forEach(f=>{if(f.isIntersecting){const o=f.target;g.unobserve(o);const c=o.querySelector("img");c.src=c.dataset.src,c.onload=()=>{o.querySelector(".upv-video-card__loading").classList.add("upv-video-card__loading--hidden")},c.onerror=()=>{o.querySelector(".upv-video-card__error").classList.add("upv-video-card__error--show")}}})},{threshold:[.15]});function p({info:i}){var f;const o=i.Type==="video"?`/v/${i.ID}`:`/p/${i.ID}`,c=(0,E.useRef)(null),d="loading"in HTMLImageElement.prototype;return(0,E.useEffect)(()=>{var _;if((_=c.current)!=null&&_.dataset.cover&&!d)return g.observe(c.current),()=>{c.current&&(g.unobserve(c.current),c.current.querySelector(".upv-video-card__loading").classList.remove("upv-video-card__loading--hidden"),c.current.querySelector(".upv-video-card__error").classList.remove("upv-video-card__error--show"))}},[c,i]),(0,s.jsxs)("div",{className:"upv-video-card",children:[(0,s.jsx)("a",{href:o,target:"_blank",ref:c,"data-cover":i.Cover,title:i.Title,children:(0,s.jsxs)(F.Z,{ratio:3/4,children:[i.Cover&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{loading:"lazy",className:"upv-video-card__image",alt:i.Title,title:i.Title,"data-src":i.Cover,src:d?i.Cover:void 0}),!d&&[(0,s.jsx)("div",{className:"upv-video-card__loading",children:"LOADING"}),(0,s.jsx)("div",{className:"upv-video-card__error",children:"ERROR"})]]}),(0,s.jsx)("div",{className:m()("upv-video-card__nocover",{"upv-video-card__nocover--show":!i.Cover}),children:(0,s.jsx)("span",{className:m()({large:i.Title.length<=4}),children:i.Title.slice(0,$)})})]})}),(0,s.jsxs)("div",{className:"upv-video-card__content",children:[(0,s.jsx)("div",{className:"upv-video-card__content__title",children:i.Title}),(0,s.jsxs)("div",{className:"upv-video-card__content__author",children:[(0,s.jsx)("span",{children:((f=i.Creator)==null?void 0:f.Nickname)||"-"})," \xB7 ",(0,s.jsx)("span",{children:(0,x.qF)(i.CreatedAt)})]})]})]})}},2422:function(A,D,u){"use strict";u.d(D,{Om:function(){return p},PX:function(){return i},in:function(){return f}});var s=Object.defineProperty,L=Object.defineProperties,E=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,m=(o,c,d)=>c in o?s(o,c,{enumerable:!0,configurable:!0,writable:!0,value:d}):o[c]=d,$=(o,c)=>{for(var d in c||(c={}))x.call(c,d)&&m(o,d,c[d]);if(F)for(var d of F(c))j.call(c,d)&&m(o,d,c[d]);return o},g=(o,c)=>L(o,E(c));const p=o=>{var c,d,_,v,w,b;return g($({},o),{enime:!0,ID:(c=o.anime)==null?void 0:c.slug,Cover:((d=o.anime)==null?void 0:d.coverImage)||"",Title:((_=o.anime)==null?void 0:_.title.native)||"",Content:o.description||"",Tags:"\u5176\u4ED6",Type:"video",CreatedAt:o.createdAt,UpdatedAt:o.updatedAt,Meta:{TitleJapanese:"",TitleRomanji:"",Genre:(v=o.genre)==null?void 0:v.toString(),Region:"enime",Episodes:13,IsEnd:2,PublishDate:"2015-01-01T08:00:00+08:00",UpdatedDate:null},Creator:{ID:1,Name:"enime.moe",Nickname:"enime",Avatar:"https://q1.qlogo.cn/g?b=qq&nk=7619376472&s=640",Bio:"\u8FD9\u4E2A\u4EBA\u5F88\u9177\uFF0C\u4EC0\u4E48\u90FD\u6CA1\u6709\u7559\u4E0B"},episodes:(b=(w=o.anime)==null?void 0:w.episodes)==null?void 0:b.map(N=>{var O;return{ID:N.id,Episode:N.number,Cover:N.image,Title:N.title,TitleJapanese:"",TitleRomanji:"",VideoUrl:"",Synopsis:"",Uid:1,Pid:(O=o.anime)==null?void 0:O.slug,CreatedAt:N.airedAt||N.createdAt,UpdatedAt:N.updatedAt}})})},i=(o=[])=>o.map(p),f=(o=[])=>o.map(c=>{var d;return g($({},c),{enime:!0,ID:c==null?void 0:c.slug,Cover:(c==null?void 0:c.coverImage)||"",Title:(c==null?void 0:c.title.native)||"",Content:c.description||"",Tags:"\u5176\u4ED6",Type:"video",CreatedAt:c.createdAt,UpdatedAt:c.updatedAt,Meta:{TitleJapanese:"",TitleRomanji:"",Genre:(d=c.genre)==null?void 0:d.toString(),Region:"enime",Episodes:13,IsEnd:2,PublishDate:"2015-01-01T08:00:00+08:00",UpdatedDate:null},Creator:{ID:1,Name:"enime.moe",Nickname:"enime",Avatar:"https://q1.qlogo.cn/g?b=qq&nk=7619376472&s=640",Bio:"\u8FD9\u4E2A\u4EBA\u5F88\u9177\uFF0C\u4EC0\u4E48\u90FD\u6CA1\u6709\u7559\u4E0B"}})})},1027:function(A,D,u){"use strict";u.r(D),u.d(D,{default:function(){return g}});var s=u(9745),L=u(7510),E=u(4717),F=u(6802),x=u(2422),j=u(8451),m=u(1351),$={};function g(){const p=(0,L.useRef)(""),[i,f]=(0,L.useState)(),[,o]=(0,m.ZP)(),{page:c,k:d}=j.Z.parse((0,m.Rx)()),_=v=>{const w=Object.assign({},j.Z.parse(window.location.search),{page:v});o(`/search?${j.Z.stringify(w)}`),root.scrollTop=0};return(0,L.useEffect)(()=>{d&&(f(null),p.current=d,fetch(`https://api.enime.moe/search/${encodeURIComponent(d)}?page=${c}&perPage=20`).then(v=>v.json()).then(v=>f((0,x.in)(v.data))).catch(()=>f([])))},[d,c]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(E.q,{children:(0,s.jsx)("title",{children:d?`${d} - \u641C\u7D22 - UPV - free animes no ads`:"\u641C\u7D22 - UPV - free animes no ads"})}),(0,s.jsxs)("div",{className:"search",children:[(0,s.jsx)("div",{className:"search-header",children:(0,s.jsx)("form",{onSubmit:v=>{v.preventDefault();const w=Object.assign({},j.Z.parse(window.location.search),{k:p.current,page:1});o(`/search?${j.Z.stringify(w)}`)},children:(0,s.jsxs)("div",{className:"search-wrap",children:[(0,s.jsx)("div",{className:"search-action",children:(0,s.jsx)("div",{className:"control",children:(0,s.jsx)("input",{id:"search-input",className:"input",maxLength:100,autoComplete:"off",defaultValue:d,onChange:v=>p.current=v.target.value,type:"text",placeholder:"Type to search"})})}),(0,s.jsx)("button",{className:"button is-primary",children:"\u641C\u7D22"})]})})}),(0,s.jsxs)("div",{className:"search-body",children:[(0,s.jsx)(F.Z,{title:"\u641C\u7D22\u7ED3\u679C",videos:i}),(0,s.jsxs)("div",{className:"paginate-container field has-addons",style:{justifyContent:"center",paddingBottom:"28px"},children:[(0,s.jsx)("p",{className:"control",children:(0,s.jsx)("button",{className:"button",onClick:()=>_(+c-1),disabled:+c<=1,children:(0,s.jsx)("span",{children:"Newer"})})}),(0,s.jsx)("p",{className:"control",children:(0,s.jsx)("button",{className:"button is-outlined",disabled:!i||i&&((i==null?void 0:i.length)<1||(i==null?void 0:i.length)<12),onClick:()=>_(+c+1),children:(0,s.jsx)("span",{className:"is-primary",children:"Older"})})})]})]})]})]})}},619:function(A,D,u){"use strict";u.d(D,{Z:function(){return F}});var s=u(9745),L={},F=x=>{const{children:j,ratio:m,mw:$}=x;return(0,s.jsx)("div",{className:"aspect-ratio",style:{width:typeof $=="string"?$:`${$}px`},children:(0,s.jsx)("div",{className:"aspect-ratio__fill",style:{paddingTop:`${1/m*100}%`},children:j})})}},5580:function(A,D,u){"use strict";u.d(D,{p6:function(){return E},qF:function(){return L},wb:function(){return s}});function s(g){const p=new Date,i=typeof g=="string"?new Date(g):new Date(g),f=(p.getTime()-i.getTime())/1e3;return f<30?"\u521A\u521A":f<3600?Math.ceil(f/60)+"\u5206\u949F\u524D":f<3600*24?Math.ceil(f/3600)+"\u5C0F\u65F6\u524D":f<3600*24*2?"1\u5929\u524D":f<3600*24*31?Math.ceil(f/3600/24)+"\u5929\u524D":p.getFullYear()===i.getFullYear()?`${i.getMonth()+1}\u6708${i.getDate()}\u65E5`:`${i.getFullYear()}\u5E74${i.getMonth()+1}\u6708${i.getDate()}\u65E5`}function L(g){const p=new Date,i=typeof g=="string"?new Date(g):new Date(g),f=(p.getTime()-i.getTime())/1e3;return f<3600*24?"\u4ECA\u5929":f<3600*24*2?"\u6628\u5929":f<3600*24*31?Math.ceil(f/3600/24)+"\u5929\u524D":p.getFullYear()===i.getFullYear()?`${i.getMonth()+1}\u6708${i.getDate()}\u65E5`:`${i.getFullYear()}\u5E74${i.getMonth()+1}\u6708${i.getDate()}\u65E5`}function E(g,p=!1){const i=typeof g=="string"?new Date(g):new Date(g);return new Date().getFullYear()===i.getFullYear()?`${i.getMonth()+1}\u6708${i.getDate()}\u65E5 ${p?` ${i.getHours()}:${i.getMinutes().toString().padStart(2,"0")}`:""}`:`${i.getFullYear()}\u5E74${i.getMonth()+1}\u6708${i.getDate()}\u65E5 ${p?` ${i.getHours()}:${i.getMinutes().toString().padStart(2,"0")}`:""}`}const F=1,x=2,j=3,m=4;function $(g,p=3){if(!g)return"";const i=new Date(g),f=i.getFullYear(),o=`${`0${i.getMonth()+1}`.slice(-2)}`,c=`${`0${i.getDate()}`.slice(-2)}`,d=`${`0${i.getHours()}`.slice(-2)}`,_=`${`0${i.getMinutes()}`.slice(-2)}`,v=`${`0${i.getSeconds()}`.slice(-2)}`;switch(p){case F:return`${f}-${o}-${c}`;case x:return`${o}-${c} ${d}:${_}`;case m:return`${f}-${o}-${c} ${d}:${_}:${v}`;case j:return`${f}-${o}-${c} ${d}:${_}`;default:return`${f}-${o}-${c} ${d}:${_}`}}},8451:function(A,D,u){"use strict";u.d(D,{Z:function(){return G}});var s={};u.r(s),u.d(s,{exclude:function(){return q},extract:function(){return M},parse:function(){return I},parseUrl:function(){return Y},pick:function(){return H},stringify:function(){return U},stringifyUrl:function(){return B}});const L="%[a-f0-9]{2}",E=new RegExp("("+L+")|([^%]+?)","gi"),F=new RegExp("("+L+")+","gi");function x(e,r){try{return[decodeURIComponent(e.join(""))]}catch(a){}if(e.length===1)return e;r=r||1;const t=e.slice(0,r),n=e.slice(r);return Array.prototype.concat.call([],x(t),x(n))}function j(e){try{return decodeURIComponent(e)}catch(r){let t=e.match(E)||[];for(let n=1;n<t.length;n++)e=x(t,n).join(""),t=e.match(E)||[];return e}}function m(e){const r={"%FE%FF":"\uFFFD\uFFFD","%FF%FE":"\uFFFD\uFFFD"};let t=F.exec(e);for(;t;){try{r[t[0]]=decodeURIComponent(t[0])}catch(a){const l=j(t[0]);l!==t[0]&&(r[t[0]]=l)}t=F.exec(e)}r["%C2"]="\uFFFD";const n=Object.keys(r);for(const a of n)e=e.replace(new RegExp(a,"g"),r[a]);return e}function $(e){if(typeof e!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch(r){return m(e)}}function g(e,r){if(!(typeof e=="string"&&typeof r=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e===""||r==="")return[];const t=e.indexOf(r);return t===-1?[]:[e.slice(0,t),e.slice(t+r.length)]}function p(e,r){const t={};if(Array.isArray(r))for(const n of r){const a=Object.getOwnPropertyDescriptor(e,n);a!=null&&a.enumerable&&Object.defineProperty(t,n,a)}else for(const n of Reflect.ownKeys(e)){const a=Object.getOwnPropertyDescriptor(e,n);if(a.enumerable){const l=e[n];r(n,l,e)&&Object.defineProperty(t,n,a)}}return t}function i(e,r){if(Array.isArray(r)){const t=new Set(r);return p(e,n=>!t.has(n))}return p(e,(t,n,a)=>!r(t,n,a))}var f=Object.defineProperty,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,_=(e,r,t)=>r in e?f(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,v=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&_(e,t,r[t]);if(o)for(var t of o(r))d.call(r,t)&&_(e,t,r[t]);return e};const w=e=>e==null,b=e=>encodeURIComponent(e).replace(/[!'()*]/g,r=>`%${r.charCodeAt(0).toString(16).toUpperCase()}`),N=Symbol("encodeFragmentIdentifier");function O(e){switch(e.arrayFormat){case"index":return r=>(t,n)=>{const a=t.length;return n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,[C(r,e),"[",a,"]"].join("")]:[...t,[C(r,e),"[",C(a,e),"]=",C(n,e)].join("")]};case"bracket":return r=>(t,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,[C(r,e),"[]"].join("")]:[...t,[C(r,e),"[]=",C(n,e)].join("")];case"colon-list-separator":return r=>(t,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,[C(r,e),":list="].join("")]:[...t,[C(r,e),":list=",C(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const r=e.arrayFormat==="bracket-separator"?"[]=":"=";return t=>(n,a)=>a===void 0||e.skipNull&&a===null||e.skipEmptyString&&a===""?n:(a=a===null?"":a,n.length===0?[[C(t,e),r,C(a,e)].join("")]:[[n,C(a,e)].join(e.arrayFormatSeparator)])}default:return r=>(t,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,C(r,e)]:[...t,[C(r,e),"=",C(n,e)].join("")]}}function V(e){let r;switch(e.arrayFormat){case"index":return(t,n,a)=>{if(r=/\[(\d*)]$/.exec(t),t=t.replace(/\[\d*]$/,""),!r){a[t]=n;return}a[t]===void 0&&(a[t]={}),a[t][r[1]]=n};case"bracket":return(t,n,a)=>{if(r=/(\[])$/.exec(t),t=t.replace(/\[]$/,""),!r){a[t]=n;return}if(a[t]===void 0){a[t]=[n];return}a[t]=[...a[t],n]};case"colon-list-separator":return(t,n,a)=>{if(r=/(:list)$/.exec(t),t=t.replace(/:list$/,""),!r){a[t]=n;return}if(a[t]===void 0){a[t]=[n];return}a[t]=[...a[t],n]};case"comma":case"separator":return(t,n,a)=>{const l=typeof n=="string"&&n.includes(e.arrayFormatSeparator),h=typeof n=="string"&&!l&&S(n,e).includes(e.arrayFormatSeparator);n=h?S(n,e):n;const y=l||h?n.split(e.arrayFormatSeparator).map(J=>S(J,e)):n===null?n:S(n,e);a[t]=y};case"bracket-separator":return(t,n,a)=>{const l=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!l){a[t]=n&&S(n,e);return}const h=n===null?[]:n.split(e.arrayFormatSeparator).map(y=>S(y,e));if(a[t]===void 0){a[t]=h;return}a[t]=[...a[t],...h]};default:return(t,n,a)=>{if(a[t]===void 0){a[t]=n;return}a[t]=[...[a[t]].flat(),n]}}}function P(e){if(typeof e!="string"||e.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function C(e,r){return r.encode?r.strict?b(e):encodeURIComponent(e):e}function S(e,r){return r.decode?$(e):e}function R(e){return Array.isArray(e)?e.sort():typeof e=="object"?R(Object.keys(e)).sort((r,t)=>Number(r)-Number(t)).map(r=>e[r]):e}function T(e){const r=e.indexOf("#");return r!==-1&&(e=e.slice(0,r)),e}function K(e){let r="";const t=e.indexOf("#");return t!==-1&&(r=e.slice(t)),r}function Z(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&typeof e=="string"&&e.trim()!==""?e=Number(e):r.parseBooleans&&e!==null&&(e.toLowerCase()==="true"||e.toLowerCase()==="false")&&(e=e.toLowerCase()==="true"),e}function M(e){e=T(e);const r=e.indexOf("?");return r===-1?"":e.slice(r+1)}function I(e,r){r=v({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r),P(r.arrayFormatSeparator);const t=V(r),n=Object.create(null);if(typeof e!="string"||(e=e.trim().replace(/^[?#&]/,""),!e))return n;for(const a of e.split("&")){if(a==="")continue;const l=r.decode?a.replace(/\+/g," "):a;let[h,y]=g(l,"=");h===void 0&&(h=l),y=y===void 0?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?y:S(y,r),t(S(h,r),y,n)}for(const[a,l]of Object.entries(n))if(typeof l=="object"&&l!==null)for(const[h,y]of Object.entries(l))l[h]=Z(y,r);else n[a]=Z(l,r);return r.sort===!1?n:(r.sort===!0?Object.keys(n).sort():Object.keys(n).sort(r.sort)).reduce((a,l)=>{const h=n[l];return Boolean(h)&&typeof h=="object"&&!Array.isArray(h)?a[l]=R(h):a[l]=h,a},Object.create(null))}function U(e,r){if(!e)return"";r=v({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r),P(r.arrayFormatSeparator);const t=h=>r.skipNull&&w(e[h])||r.skipEmptyString&&e[h]==="",n=O(r),a={};for(const[h,y]of Object.entries(e))t(h)||(a[h]=y);const l=Object.keys(a);return r.sort!==!1&&l.sort(r.sort),l.map(h=>{const y=e[h];return y===void 0?"":y===null?C(h,r):Array.isArray(y)?y.length===0&&r.arrayFormat==="bracket-separator"?C(h,r)+"[]":y.reduce(n(h),[]).join("&"):C(h,r)+"="+C(y,r)}).filter(h=>h.length>0).join("&")}function Y(e,r){var t,n;r=v({decode:!0},r);let[a,l]=g(e,"#");return a===void 0&&(a=e),v({url:(n=(t=a==null?void 0:a.split("?"))==null?void 0:t[0])!=null?n:"",query:I(M(e),r)},r&&r.parseFragmentIdentifier&&l?{fragmentIdentifier:S(l,r)}:{})}function B(e,r){r=v({encode:!0,strict:!0,[N]:!0},r);const t=T(e.url).split("?")[0]||"",n=M(e.url),a=v(v({},I(n,{sort:!1})),e.query);let l=U(a,r);l&&(l=`?${l}`);let h=K(e.url);if(e.fragmentIdentifier){const y=new URL(t);y.hash=e.fragmentIdentifier,h=r[N]?y.hash:`#${e.fragmentIdentifier}`}return`${t}${l}${h}`}function H(e,r,t){t=v({parseFragmentIdentifier:!0,[N]:!1},t);const{url:n,query:a,fragmentIdentifier:l}=Y(e,t);return B({url:n,query:p(a,r),fragmentIdentifier:l},t)}function q(e,r,t){const n=Array.isArray(r)?a=>!r.includes(a):(a,l)=>!r(a,l);return H(e,n,t)}var G=s}}]);
