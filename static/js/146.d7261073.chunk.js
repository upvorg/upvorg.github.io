(self.webpackChunk_web_index=self.webpackChunk_web_index||[]).push([[146],{7403:(x,m,n)=>{"use strict";n.d(m,{x:()=>p,A:()=>a});var e=n(6048);const $={};var h=n(8588),f=n(1888),g=n(3259),s=n(7006),l=n.n(s),u=n(5159);const o=6;let d;const t="loading"in HTMLImageElement.prototype;t||(d=new IntersectionObserver(r=>{r.forEach(v=>{if(v.isIntersecting){const c=v.target;d.unobserve(c);const i=c.querySelector("img");i.src=i.dataset.src,i.onload=()=>{c.querySelector(".upv-video-card__loading").classList.add("upv-video-card__loading--hidden")},i.onerror=()=>{c.querySelector(".upv-video-card__error").classList.add("upv-video-card__error--show")}}})},{threshold:[.15]}));function a({info:r}){var v;const c=r.Type==="video"?`/v/${r.ID}`:`/p/${r.ID}`,i=(0,h.useRef)(null);return(0,h.useEffect)(()=>{var D;if(d&&((D=i.current)!=null&&D.dataset.cover))return d.observe(i.current),()=>{i.current&&(d.unobserve(i.current),i.current.querySelector(".upv-video-card__loading").classList.remove("upv-video-card__loading--hidden"),i.current.querySelector(".upv-video-card__error").classList.remove("upv-video-card__error--show"))}},[i,r]),(0,e.jsxs)("div",{className:"upv-video-card",children:[(0,e.jsx)(u.N_,{href:c,children:(0,e.jsx)("div",{ref:i,"data-cover":r.Cover,title:r.Title,children:(0,e.jsxs)(f.A,{ratio:3/4,children:[r.Cover&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("img",{loading:"lazy",className:"upv-video-card__image",alt:r.Title,title:r.Title,"data-src":r.Cover,src:t?r.Cover:void 0}),!t&&[(0,e.jsx)("div",{className:"upv-video-card__loading",children:"LOADING"}),(0,e.jsx)("div",{className:"upv-video-card__error",children:"ERROR"})]]}),(0,e.jsx)("div",{className:l()("upv-video-card__nocover",{"upv-video-card__nocover--show":!r.Cover}),children:(0,e.jsx)("span",{className:l()({large:r.Title.length<=4}),children:r.Title.slice(0,o)})})]})})}),(0,e.jsxs)("div",{className:"upv-video-card__content",children:[(0,e.jsx)("div",{className:"upv-video-card__content__title",children:r.Title}),(0,e.jsxs)("div",{className:"upv-video-card__content__author",children:[(0,e.jsx)("span",{children:((v=r.Creator)==null?void 0:v.Nickname)||"-"})," \xB7 ",(0,e.jsx)("span",{children:(0,g.D$)(r.CreatedAt)})]})]})]})}function p({id:r,level:v,name:c,qq:i,sign:D}){return(0,e.jsx)("a",{href:`/v/${r}?live`,children:(0,e.jsxs)("div",{className:"live-card",style:{display:"flex"},children:[(0,e.jsx)("div",{className:"live-avatar",children:(0,e.jsx)("img",{src:`https://q1.qlogo.cn/g?b=qq&nk=${i}&s=640`,alt:"name"})}),(0,e.jsxs)("div",{className:"live-info",children:[(0,e.jsxs)("span",{children:[D," ",(0,e.jsx)("sup",{children:v})]}),(0,e.jsx)("span",{children:c})]})]})})}},2146:(x,m,n)=>{"use strict";n.r(m),n.d(m,{default:()=>d});var e=n(6048),$=n(8588),h=n(7006),f=n.n(h),g=n(1466),s=n(7403),l=n(731);const u={};function o(){var t;const[a,p]=(0,$.useState)(new Date().getDay()),[r,v]=(0,$.useState)([]);return(0,$.useEffect)(()=>{g.pY.get("/post/week").then(c=>{!c.err&&v(c.data)})},[]),(0,e.jsxs)("div",{className:"v-index",children:[(0,e.jsx)(l.m,{children:(0,e.jsx)("title",{children:"\u65B0\u756A\u65F6\u95F4\u8868 - UPV - free animes no ads"})}),(0,e.jsx)("div",{className:"index-header",children:(0,e.jsxs)("div",{className:"index-header-left",children:[(0,e.jsx)("h1",{className:"title",children:"\u6BCF\u5468\u66F4\u65B0"}),(0,e.jsx)("ul",{className:"tags are-medium",children:g.h8.map((c,i)=>(0,e.jsx)("li",{className:f()("tag is-rounded",{"is-primary":i===a}),onClick:()=>p(i),children:c},i))})]})}),(0,e.jsx)("ul",{className:"video-list",children:(t=r[a])==null?void 0:t.map((c,i)=>(0,e.jsx)("li",{children:c&&(0,e.jsx)(s.A,{info:c})},i))})]})}const d=o},1888:(x,m,n)=>{"use strict";n.d(m,{A:()=>f});const e={};var $=n(8588);const f=g=>{const{children:s,ratio:l,mw:u}=g;return $.createElement("div",{className:"aspect-ratio",style:{width:typeof u=="string"?u:`${u}px`}},$.createElement("div",{className:"aspect-ratio__fill",style:{paddingTop:`${1/l*100}%`}},s))}},3259:(x,m,n)=>{"use strict";n.d(m,{D$:()=>e,Yq:()=>h});function e(o){const d=new Date,t=typeof o=="string"?new Date(o):new Date(o),a=(d.getTime()-t.getTime())/1e3;return a<30?"\u521A\u521A":a<3600?Math.ceil(a/60)+"\u5206\u949F\u524D":a<3600*24?Math.ceil(a/3600)+"\u5C0F\u65F6\u524D":a<3600*24*2?"1\u5929\u524D":a<3600*24*31?Math.ceil(a/3600/24)+"\u5929\u524D":d.getFullYear()===t.getFullYear()?`${t.getMonth()+1}\u6708${t.getDate()}\u65E5`:`${t.getFullYear()}\u5E74${t.getMonth()+1}\u6708${t.getDate()}\u65E5`}function $(o){const d=new Date,t=typeof o=="string"?new Date(o):new Date(o),a=(d.getTime()-t.getTime())/1e3;return a<3600*24?"\u4ECA\u5929":a<3600*24*2?"\u6628\u5929":a<3600*24*31?Math.ceil(a/3600/24)+"\u5929\u524D":d.getFullYear()===t.getFullYear()?`${t.getMonth()+1}\u6708${t.getDate()}\u65E5`:`${t.getFullYear()}\u5E74${t.getMonth()+1}\u6708${t.getDate()}\u65E5`}function h(o,d=!1){const t=typeof o=="string"?new Date(o):new Date(o);return new Date().getFullYear()===t.getFullYear()?`${t.getMonth()+1}\u6708${t.getDate()}\u65E5 ${d?` ${t.getHours()}:${t.getMinutes().toString().padStart(2,"0")}`:""}`:`${t.getFullYear()}\u5E74${t.getMonth()+1}\u6708${t.getDate()}\u65E5 ${d?` ${t.getHours()}:${t.getMinutes().toString().padStart(2,"0")}`:""}`}const f=1,g=2,s=3,l=4;function u(o,d=3){if(!o)return"";const t=new Date(o),a=t.getFullYear(),p=`${`0${t.getMonth()+1}`.slice(-2)}`,r=`${`0${t.getDate()}`.slice(-2)}`,v=`${`0${t.getHours()}`.slice(-2)}`,c=`${`0${t.getMinutes()}`.slice(-2)}`,i=`${`0${t.getSeconds()}`.slice(-2)}`;switch(d){case f:return`${a}-${p}-${r}`;case g:return`${p}-${r} ${v}:${c}`;case l:return`${a}-${p}-${r} ${v}:${c}:${i}`;case s:return`${a}-${p}-${r} ${v}:${c}`;default:return`${a}-${p}-${r} ${v}:${c}`}}},7006:(x,m)=>{var n,e;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var $={}.hasOwnProperty;function h(){for(var s="",l=0;l<arguments.length;l++){var u=arguments[l];u&&(s=g(s,f(u)))}return s}function f(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return h.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var l="";for(var u in s)$.call(s,u)&&s[u]&&(l=g(l,u));return l}function g(s,l){return l?s?s+" "+l:s+l:s}x.exports?(h.default=h,x.exports=h):(n=[],e=function(){return h}.apply(m,n),e!==void 0&&(x.exports=e))})()}}]);
