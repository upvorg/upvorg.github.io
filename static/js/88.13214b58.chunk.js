(self.webpackChunk_web_index=self.webpackChunk_web_index||[]).push([[88],{785:function(C,f){var d,i;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var j={}.hasOwnProperty,D="[native code]";function F(){for(var c=[],h=0;h<arguments.length;h++){var l=arguments[h];if(!!l){var $=typeof l;if($==="string"||$==="number")c.push(l);else if(Array.isArray(l)){if(l.length){var v=F.apply(null,l);v&&c.push(v)}}else if($==="object"){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){c.push(l.toString());continue}for(var o in l)j.call(l,o)&&l[o]&&c.push(o)}}}return c.join(" ")}C.exports?(F.default=F,C.exports=F):(d=[],i=function(){return F}.apply(f,d),i!==void 0&&(C.exports=i))})()},487:function(C){"use strict";var f="%[a-f0-9]{2}",d=new RegExp("("+f+")|([^%]+?)","gi"),i=new RegExp("("+f+")+","gi");function j(c,h){try{return[decodeURIComponent(c.join(""))]}catch(v){}if(c.length===1)return c;h=h||1;var l=c.slice(0,h),$=c.slice(h);return Array.prototype.concat.call([],j(l),j($))}function D(c){try{return decodeURIComponent(c)}catch($){for(var h=c.match(d)||[],l=1;l<h.length;l++)c=j(h,l).join(""),h=c.match(d)||[];return c}}function F(c){for(var h={"%FE%FF":"\uFFFD\uFFFD","%FF%FE":"\uFFFD\uFFFD"},l=i.exec(c);l;){try{h[l[0]]=decodeURIComponent(l[0])}catch(p){var $=D(l[0]);$!==l[0]&&(h[l[0]]=$)}l=i.exec(c)}h["%C2"]="\uFFFD";for(var v=Object.keys(h),o=0;o<v.length;o++){var a=v[o];c=c.replace(new RegExp(a,"g"),h[a])}return c}C.exports=function(c){if(typeof c!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof c+"`");try{return c=c.replace(/\+/g," "),decodeURIComponent(c)}catch(h){return F(c)}}},98:function(C){"use strict";C.exports=function(f,d){for(var i={},j=Object.keys(f),D=Array.isArray(d),F=0;F<j.length;F++){var c=j[F],h=f[c];(D?d.indexOf(c)!==-1:d(c,h,f))&&(i[c]=h)}return i}},3493:function(C,f,d){"use strict";const i=d(4178),j=d(487),D=d(2726),F=d(98),c=e=>e==null,h=Symbol("encodeFragmentIdentifier");function l(e){switch(e.arrayFormat){case"index":return r=>(t,n)=>{const s=t.length;return n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,[o(r,e),"[",s,"]"].join("")]:[...t,[o(r,e),"[",o(s,e),"]=",o(n,e)].join("")]};case"bracket":return r=>(t,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,[o(r,e),"[]"].join("")]:[...t,[o(r,e),"[]=",o(n,e)].join("")];case"colon-list-separator":return r=>(t,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,[o(r,e),":list="].join("")]:[...t,[o(r,e),":list=",o(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const r=e.arrayFormat==="bracket-separator"?"[]=":"=";return t=>(n,s)=>s===void 0||e.skipNull&&s===null||e.skipEmptyString&&s===""?n:(s=s===null?"":s,n.length===0?[[o(t,e),r,o(s,e)].join("")]:[[n,o(s,e)].join(e.arrayFormatSeparator)])}default:return r=>(t,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,o(r,e)]:[...t,[o(r,e),"=",o(n,e)].join("")]}}function $(e){let r;switch(e.arrayFormat){case"index":return(t,n,s)=>{if(r=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),!r){s[t]=n;return}s[t]===void 0&&(s[t]={}),s[t][r[1]]=n};case"bracket":return(t,n,s)=>{if(r=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),!r){s[t]=n;return}if(s[t]===void 0){s[t]=[n];return}s[t]=[].concat(s[t],n)};case"colon-list-separator":return(t,n,s)=>{if(r=/(:list)$/.exec(t),t=t.replace(/:list$/,""),!r){s[t]=n;return}if(s[t]===void 0){s[t]=[n];return}s[t]=[].concat(s[t],n)};case"comma":case"separator":return(t,n,s)=>{const y=typeof n=="string"&&n.includes(e.arrayFormatSeparator),m=typeof n=="string"&&!y&&a(n,e).includes(e.arrayFormatSeparator);n=m?a(n,e):n;const E=y||m?n.split(e.arrayFormatSeparator).map(x=>a(x,e)):n===null?n:a(n,e);s[t]=E};case"bracket-separator":return(t,n,s)=>{const y=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!y){s[t]=n&&a(n,e);return}const m=n===null?[]:n.split(e.arrayFormatSeparator).map(E=>a(E,e));if(s[t]===void 0){s[t]=m;return}s[t]=[].concat(s[t],m)};default:return(t,n,s)=>{if(s[t]===void 0){s[t]=n;return}s[t]=[].concat(s[t],n)}}}function v(e){if(typeof e!="string"||e.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function o(e,r){return r.encode?r.strict?i(e):encodeURIComponent(e):e}function a(e,r){return r.decode?j(e):e}function p(e){return Array.isArray(e)?e.sort():typeof e=="object"?p(Object.keys(e)).sort((r,t)=>Number(r)-Number(t)).map(r=>e[r]):e}function g(e){const r=e.indexOf("#");return r!==-1&&(e=e.slice(0,r)),e}function u(e){let r="";const t=e.indexOf("#");return t!==-1&&(r=e.slice(t)),r}function _(e){e=g(e);const r=e.indexOf("?");return r===-1?"":e.slice(r+1)}function A(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&typeof e=="string"&&e.trim()!==""?e=Number(e):r.parseBooleans&&e!==null&&(e.toLowerCase()==="true"||e.toLowerCase()==="false")&&(e=e.toLowerCase()==="true"),e}function L(e,r){r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r),v(r.arrayFormatSeparator);const t=$(r),n=Object.create(null);if(typeof e!="string"||(e=e.trim().replace(/^[?#&]/,""),!e))return n;for(const s of e.split("&")){if(s==="")continue;let[y,m]=D(r.decode?s.replace(/\+/g," "):s,"=");m=m===void 0?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?m:a(m,r),t(a(y,r),m,n)}for(const s of Object.keys(n)){const y=n[s];if(typeof y=="object"&&y!==null)for(const m of Object.keys(y))y[m]=A(y[m],r);else n[s]=A(y,r)}return r.sort===!1?n:(r.sort===!0?Object.keys(n).sort():Object.keys(n).sort(r.sort)).reduce((s,y)=>{const m=n[y];return Boolean(m)&&typeof m=="object"&&!Array.isArray(m)?s[y]=p(m):s[y]=m,s},Object.create(null))}f.extract=_,f.parse=L,f.stringify=(e,r)=>{if(!e)return"";r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r),v(r.arrayFormatSeparator);const t=m=>r.skipNull&&c(e[m])||r.skipEmptyString&&e[m]==="",n=l(r),s={};for(const m of Object.keys(e))t(m)||(s[m]=e[m]);const y=Object.keys(s);return r.sort!==!1&&y.sort(r.sort),y.map(m=>{const E=e[m];return E===void 0?"":E===null?o(m,r):Array.isArray(E)?E.length===0&&r.arrayFormat==="bracket-separator"?o(m,r)+"[]":E.reduce(n(m),[]).join("&"):o(m,r)+"="+o(E,r)}).filter(m=>m.length>0).join("&")},f.parseUrl=(e,r)=>{r=Object.assign({decode:!0},r);const[t,n]=D(e,"#");return Object.assign({url:t.split("?")[0]||"",query:L(_(e),r)},r&&r.parseFragmentIdentifier&&n?{fragmentIdentifier:a(n,r)}:{})},f.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[h]:!0},r);const t=g(e.url).split("?")[0]||"",n=f.extract(e.url),s=f.parse(n,{sort:!1}),y=Object.assign(s,e.query);let m=f.stringify(y,r);m&&(m=`?${m}`);let E=u(e.url);return e.fragmentIdentifier&&(E=`#${r[h]?o(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${t}${m}${E}`},f.pick=(e,r,t)=>{t=Object.assign({parseFragmentIdentifier:!0,[h]:!1},t);const{url:n,query:s,fragmentIdentifier:y}=f.parseUrl(e,t);return f.stringifyUrl({url:n,query:F(s,r),fragmentIdentifier:y},t)},f.exclude=(e,r,t)=>{const n=Array.isArray(r)?s=>!r.includes(s):(s,y)=>!r(s,y);return f.pick(e,n,t)}},2726:function(C){"use strict";C.exports=(f,d)=>{if(!(typeof f=="string"&&typeof d=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(d==="")return[f];const i=f.indexOf(d);return i===-1?[f]:[f.slice(0,i),f.slice(i+d.length)]}},4178:function(C){"use strict";C.exports=f=>encodeURIComponent(f).replace(/[!'()*]/g,d=>`%${d.charCodeAt(0).toString(16).toUpperCase()}`)},3350:function(C,f,d){"use strict";d.d(f,{Z:function(){return F}});var i=d(3148),j=d(3763),D={};function F({title:c,icon:h,videos:l,asideTitle:$,aside:v,moreUrl:o}){return(0,i.jsxs)("div",{className:`upv-grid ${$?"col-2":""}`,children:[(0,i.jsxs)("div",{className:"upv-card-list",children:[(0,i.jsxs)("div",{className:"list-header",children:[(0,i.jsxs)("div",{children:[h&&(0,i.jsx)("img",{src:h,alt:c}),(0,i.jsx)("h2",{children:c})]}),o&&l&&l.length>0&&(0,i.jsxs)("a",{className:"list-header__more",href:o,target:"_blank",children:["\u66F4\u591A",(0,i.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 9 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"channel-entry-more__link--arrow",children:[(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.50588 3.40623C7.40825 3.3086 7.24996 3.3086 7.15232 3.40623L4.41244 6.14612L1.67255 3.40623C1.57491 3.3086 1.41662 3.3086 1.31899 3.40623C1.22136 3.50386 1.22136 3.66215 1.31899 3.75978L4.11781 6.5586C4.28053 6.72132 4.54434 6.72132 4.70706 6.5586L7.50588 3.75978C7.60351 3.66215 7.60351 3.50386 7.50588 3.40623Z",fill:"currentColor"}),(0,i.jsx)("path",{d:"M7.15232 3.40623L7.50588 3.75978L7.50588 3.75978L7.15232 3.40623ZM7.50588 3.40623L7.15232 3.75978L7.15233 3.75978L7.50588 3.40623ZM4.41244 6.14612L4.05888 6.49967C4.15265 6.59344 4.27983 6.64612 4.41244 6.64612C4.54504 6.64612 4.67222 6.59344 4.76599 6.49967L4.41244 6.14612ZM1.67255 3.40623L2.0261 3.05268L2.0261 3.05268L1.67255 3.40623ZM1.31899 3.40623L0.965439 3.05268L0.965439 3.05268L1.31899 3.40623ZM1.31899 3.75978L1.67255 3.40623V3.40623L1.31899 3.75978ZM4.11781 6.5586L3.76425 6.91215L4.11781 6.5586ZM4.70706 6.5586L4.35351 6.20505L4.70706 6.5586ZM7.50588 3.75978L7.15233 3.40623L7.15232 3.40623L7.50588 3.75978ZM7.50588 3.75978C7.40825 3.85742 7.24996 3.85742 7.15232 3.75978L7.85943 3.05268C7.56654 2.75978 7.09166 2.75978 6.79877 3.05268L7.50588 3.75978ZM4.76599 6.49967L7.50588 3.75978L6.79877 3.05268L4.05888 5.79257L4.76599 6.49967ZM1.31899 3.75978L4.05888 6.49967L4.76599 5.79257L2.0261 3.05268L1.31899 3.75978ZM1.67254 3.75979C1.57491 3.85742 1.41662 3.85742 1.31899 3.75979L2.0261 3.05268C1.73321 2.75978 1.25833 2.75978 0.965439 3.05268L1.67254 3.75979ZM1.67255 3.40623C1.77018 3.50386 1.77018 3.66215 1.67255 3.75978L0.965439 3.05268C0.672546 3.34557 0.672546 3.82044 0.965439 4.11334L1.67255 3.40623ZM4.47136 6.20505L1.67255 3.40623L0.965439 4.11334L3.76425 6.91215L4.47136 6.20505ZM4.35351 6.20505C4.38605 6.1725 4.43882 6.1725 4.47136 6.20505L3.76425 6.91215C4.12223 7.27013 4.70264 7.27013 5.06062 6.91215L4.35351 6.20505ZM7.15232 3.40623L4.35351 6.20505L5.06062 6.91215L7.85943 4.11334L7.15232 3.40623ZM7.15233 3.75978C7.05469 3.66215 7.05469 3.50386 7.15233 3.40623L7.85943 4.11334C8.15233 3.82045 8.15233 3.34557 7.85943 3.05268L7.15233 3.75978Z",fill:"currentColor"})]})]})]}),(0,i.jsx)("div",{className:"list-body",children:l?l.length>0?l.map((a,p)=>(0,i.jsx)(j.Z,{info:a},p)):(0,i.jsx)("div",{className:"empty",children:"\u6682\u65E0\u6570\u636E"}):(0,i.jsx)("span",{className:"loading empty",children:"\u52A0\u8F7D\u4E2D\xB7\xB7\xB7"})})]}),!!$&&(0,i.jsxs)("aside",{children:[(0,i.jsx)("div",{className:"aside-header",children:(0,i.jsx)("div",{className:"aside-title",children:$})}),(0,i.jsx)("div",{className:"aside-body",children:v})]})]})}},3763:function(C,f,d){"use strict";d.d(f,{Z:function(){return o}});var i=d(3148),j={},D=d(5168),F=d(6094),c=d(4247),h=d(785),l=d.n(h);const $=6,v=new IntersectionObserver(a=>{a.forEach(p=>{if(p.isIntersecting){const g=p.target;v.unobserve(g);const u=g.querySelector("img");u.src=u.dataset.src,u.onload=()=>{g.querySelector(".upv-video-card__loading").classList.add("upv-video-card__loading--hidden")},u.onerror=()=>{g.querySelector(".upv-video-card__error").classList.add("upv-video-card__error--show")}}})},{threshold:[.15]});function o({info:a}){var p;const g=a.Type==="video"?`/v/${a.ID}`:`/p/${a.ID}`,u=(0,D.useRef)(null);return(0,D.useEffect)(()=>{var _;if((_=u.current)!=null&&_.dataset.cover)return v.observe(u.current),()=>{u.current&&(v.unobserve(u.current),u.current.querySelector(".upv-video-card__loading").classList.remove("upv-video-card__loading--hidden"),u.current.querySelector(".upv-video-card__error").classList.remove("upv-video-card__error--show"))}},[u,a]),(0,i.jsxs)("div",{className:"upv-video-card",children:[(0,i.jsx)("a",{href:g,target:"_blank",ref:u,"data-cover":a.Cover,title:a.Title,children:(0,i.jsxs)(F.Z,{ratio:3/4,children:[a.Cover&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{className:"upv-video-card__image",alt:a.Title,title:a.Title,"data-src":a.Cover}),(0,i.jsx)("div",{className:"upv-video-card__loading",children:"LOADING"}),(0,i.jsx)("div",{className:"upv-video-card__error",children:"ERROR"})]}),(0,i.jsx)("div",{className:l()("upv-video-card__nocover",{"upv-video-card__nocover--show":!a.Cover}),children:(0,i.jsx)("span",{className:l()({large:a.Title.length<=4}),children:a.Title.slice(0,$)})})]})}),(0,i.jsxs)("div",{className:"upv-video-card__content",children:[(0,i.jsx)("div",{className:"upv-video-card__content__title",children:a.Title}),(0,i.jsxs)("div",{className:"upv-video-card__content__author",children:[(0,i.jsx)("span",{children:((p=a.Creator)==null?void 0:p.Nickname)||"-"})," \xB7 ",(0,i.jsx)("span",{children:(0,c.qF)(a.CreatedAt)})]})]})]})}},9476:function(C,f,d){"use strict";d.d(f,{Om:function(){return o},PX:function(){return a},in:function(){return p}});var i=Object.defineProperty,j=Object.defineProperties,D=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,l=(g,u,_)=>u in g?i(g,u,{enumerable:!0,configurable:!0,writable:!0,value:_}):g[u]=_,$=(g,u)=>{for(var _ in u||(u={}))c.call(u,_)&&l(g,_,u[_]);if(F)for(var _ of F(u))h.call(u,_)&&l(g,_,u[_]);return g},v=(g,u)=>j(g,D(u));const o=g=>{var u,_,A,L,e,r;return v($({},g),{enime:!0,ID:(u=g.anime)==null?void 0:u.slug,Cover:((_=g.anime)==null?void 0:_.coverImage)||"",Title:((A=g.anime)==null?void 0:A.title.native)||"",Content:g.description||"",Tags:"\u5176\u4ED6",Type:"video",CreatedAt:g.createdAt,UpdatedAt:g.updatedAt,Meta:{TitleJapanese:"",TitleRomanji:"",Genre:(L=g.genre)==null?void 0:L.toString(),Region:"enime",Episodes:13,IsEnd:2,PublishDate:"2015-01-01T08:00:00+08:00",UpdatedDate:null},Creator:{ID:1,Name:"enime.moe",Nickname:"enime",Avatar:"https://q1.qlogo.cn/g?b=qq&nk=7619376472&s=640",Bio:"\u8FD9\u4E2A\u4EBA\u5F88\u9177\uFF0C\u4EC0\u4E48\u90FD\u6CA1\u6709\u7559\u4E0B"},episodes:(r=(e=g.anime)==null?void 0:e.episodes)==null?void 0:r.map(t=>{var n;return{ID:t.id,Episode:t.number,Cover:t.image,Title:t.title,TitleJapanese:"",TitleRomanji:"",VideoUrl:"",Synopsis:"",Uid:1,Pid:(n=g.anime)==null?void 0:n.slug,CreatedAt:t.airedAt||t.createdAt,UpdatedAt:t.updatedAt}})})},a=g=>g.map(o),p=g=>g.map(u=>{var _;return v($({},u),{enime:!0,ID:u==null?void 0:u.slug,Cover:(u==null?void 0:u.coverImage)||"",Title:(u==null?void 0:u.title.native)||"",Content:u.description||"",Tags:"\u5176\u4ED6",Type:"video",CreatedAt:u.createdAt,UpdatedAt:u.updatedAt,Meta:{TitleJapanese:"",TitleRomanji:"",Genre:(_=u.genre)==null?void 0:_.toString(),Region:"enime",Episodes:13,IsEnd:2,PublishDate:"2015-01-01T08:00:00+08:00",UpdatedDate:null},Creator:{ID:1,Name:"enime.moe",Nickname:"enime",Avatar:"https://q1.qlogo.cn/g?b=qq&nk=7619376472&s=640",Bio:"\u8FD9\u4E2A\u4EBA\u5F88\u9177\uFF0C\u4EC0\u4E48\u90FD\u6CA1\u6709\u7559\u4E0B"}})})},1758:function(C,f,d){"use strict";d.d(f,{v:function(){return D}});var i=d(3493),j=d(5168);function D(F){const c=Object.assign({},F,i.parse(window.location.search));return[c,(0,j.useCallback)(h=>{window.history.pushState(null,"",`?${i.stringify(Object.assign({},c,h))}`)},[])]}},6094:function(C,f,d){"use strict";d.d(f,{Z:function(){return F}});var i=d(3148),j={},F=c=>{const{children:h,ratio:l,mw:$}=c;return(0,i.jsx)("div",{className:"aspect-ratio",style:{width:typeof $=="string"?$:`${$}px`},children:(0,i.jsx)("div",{className:"aspect-ratio__fill",style:{paddingTop:`${1/l*100}%`},children:h})})}},4247:function(C,f,d){"use strict";d.d(f,{p6:function(){return D},qF:function(){return j},wb:function(){return i}});function i(v){const o=new Date,a=typeof v=="string"?new Date(v):new Date(v),p=(o.getTime()-a.getTime())/1e3;return p<30?"\u521A\u521A":p<3600?Math.ceil(p/60)+"\u5206\u949F\u524D":p<3600*24?Math.ceil(p/3600)+"\u5C0F\u65F6\u524D":p<3600*24*2?"1\u5929\u524D":p<3600*24*31?Math.ceil(p/3600/24)+"\u5929\u524D":o.getFullYear()===a.getFullYear()?`${a.getMonth()+1}\u6708${a.getDate()}\u65E5`:`${a.getFullYear()}\u5E74${a.getMonth()+1}\u6708${a.getDate()}\u65E5`}function j(v){const o=new Date,a=typeof v=="string"?new Date(v):new Date(v),p=(o.getTime()-a.getTime())/1e3;return p<3600*24?"\u4ECA\u5929":p<3600*24*2?"\u6628\u5929":p<3600*24*31?Math.ceil(p/3600/24)+"\u5929\u524D":o.getFullYear()===a.getFullYear()?`${a.getMonth()+1}\u6708${a.getDate()}\u65E5`:`${a.getFullYear()}\u5E74${a.getMonth()+1}\u6708${a.getDate()}\u65E5`}function D(v,o=!1){const a=typeof v=="string"?new Date(v):new Date(v);return new Date().getFullYear()===a.getFullYear()?`${a.getMonth()+1}\u6708${a.getDate()}\u65E5 ${o?` ${a.getHours()}:${a.getMinutes().toString().padStart(2,"0")}`:""}`:`${a.getFullYear()}\u5E74${a.getMonth()+1}\u6708${a.getDate()}\u65E5 ${o?` ${a.getHours()}:${a.getMinutes().toString().padStart(2,"0")}`:""}`}const F=1,c=2,h=3,l=4;function $(v,o=3){if(!v)return"";const a=new Date(v),p=a.getFullYear(),g=`${`0${a.getMonth()+1}`.slice(-2)}`,u=`${`0${a.getDate()}`.slice(-2)}`,_=`${`0${a.getHours()}`.slice(-2)}`,A=`${`0${a.getMinutes()}`.slice(-2)}`,L=`${`0${a.getSeconds()}`.slice(-2)}`;switch(o){case F:return`${p}-${g}-${u}`;case c:return`${g}-${u} ${_}:${A}`;case l:return`${p}-${g}-${u} ${_}:${A}:${L}`;case h:return`${p}-${g}-${u} ${_}:${A}`;default:return`${p}-${g}-${u} ${_}:${A}`}}}}]);
