(self.webpackChunk_web_index=self.webpackChunk_web_index||[]).push([[771],{785:function(p,f){var r,t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var g={}.hasOwnProperty,m="[native code]";function l(){for(var u=[],v=0;v<arguments.length;v++){var a=arguments[v];if(!!a){var h=typeof a;if(h==="string"||h==="number")u.push(a);else if(Array.isArray(a)){if(a.length){var s=l.apply(null,a);s&&u.push(s)}}else if(h==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){u.push(a.toString());continue}for(var c in a)g.call(a,c)&&a[c]&&u.push(c)}}}return u.join(" ")}p.exports?(l.default=l,p.exports=l):(r=[],t=function(){return l}.apply(f,r),t!==void 0&&(p.exports=t))})()},8338:function(p,f,r){"use strict";r.d(f,{Z:function(){return c}});var t=r(3148),g={},m=r(5168),l=r(8776),u=r(4247),v=r(785),a=r.n(v);const h=6,s=new IntersectionObserver(e=>{e.forEach(n=>{if(n.isIntersecting){const o=n.target;s.unobserve(o);const i=o.querySelector("img");i.src=i.dataset.src,i.onload=()=>{o.querySelector(".upv-video-card__loading").classList.add("upv-video-card__loading--hidden")},i.onerror=()=>{o.querySelector(".upv-video-card__error").classList.add("upv-video-card__error--show")}}})},{threshold:[.15]});function c({info:e}){var n;const o=e.Type==="video"?`/v/${e.ID}`:`/p/${e.ID}`,i=(0,m.useRef)(null);return(0,m.useEffect)(()=>{var $;if(($=i.current)!=null&&$.dataset.cover)return s.observe(i.current),()=>{i.current&&(s.unobserve(i.current),i.current.querySelector(".upv-video-card__loading").classList.remove("upv-video-card__loading--hidden"),i.current.querySelector(".upv-video-card__error").classList.remove("upv-video-card__error--show"))}},[i,e]),(0,t.jsxs)("div",{className:"upv-video-card",children:[(0,t.jsx)("a",{href:o,target:"_blank",ref:i,"data-cover":e.Cover,title:e.Title,children:(0,t.jsxs)(l.Z,{ratio:3/4,children:[e.Cover&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("img",{className:"upv-video-card__image",alt:e.Title,title:e.Title,"data-src":e.Cover}),(0,t.jsx)("div",{className:"upv-video-card__loading",children:"LOADING"}),(0,t.jsx)("div",{className:"upv-video-card__error",children:"ERROR"})]}),(0,t.jsx)("div",{className:a()("upv-video-card__nocover",{"upv-video-card__nocover--show":!e.Cover}),children:(0,t.jsx)("span",{className:a()({large:e.Title.length<=4}),children:e.Title.slice(0,h)})})]})}),(0,t.jsxs)("div",{className:"upv-video-card__content",children:[(0,t.jsx)("div",{className:"upv-video-card__content__title",children:e.Title}),(0,t.jsxs)("div",{className:"upv-video-card__content__author",children:[(0,t.jsx)("span",{children:((n=e.Creator)==null?void 0:n.Nickname)||"-"})," \xB7 ",(0,t.jsx)("span",{children:(0,u.qF)(e.CreatedAt)})]})]})]})}},9771:function(p,f,r){"use strict";r.r(f),r.d(f,{default:function(){return c}});var t=r(3148),g=r(5168),m=r(785),l=r.n(m),u=r(2787),v=r(8338),a=r(3156),h={};function s(){var e;const[n,o]=(0,g.useState)(new Date().getDay()),[i,$]=(0,g.useState)([]);return(0,g.useEffect)(()=>{u.od.get("/post/week").then(d=>{!d.err&&$(d.data)})},[]),(0,t.jsxs)("div",{className:"v-index",children:[(0,t.jsx)(a.q,{children:(0,t.jsx)("title",{children:"\u65B0\u756A\u65F6\u95F4\u8868 - UPV - free animes no ads"})}),(0,t.jsx)("div",{className:"index-header",children:(0,t.jsxs)("div",{className:"index-header-left",children:[(0,t.jsx)("h1",{className:"title",children:"\u6BCF\u5468\u66F4\u65B0"}),(0,t.jsx)("ul",{className:"tags are-medium",children:u.zA.map((d,x)=>(0,t.jsx)("li",{className:l()("tag is-rounded",{"is-primary":x===n}),onClick:()=>o(x),children:d},x))})]})}),(0,t.jsx)("ul",{className:"video-list",children:(e=i[n])==null?void 0:e.map((d,x)=>(0,t.jsx)("li",{children:d&&(0,t.jsx)(v.Z,{info:d})},x))})]})}var c=s},8776:function(p,f,r){"use strict";r.d(f,{Z:function(){return l}});var t=r(3148),g={},l=u=>{const{children:v,ratio:a,mw:h}=u;return(0,t.jsx)("div",{className:"aspect-ratio",style:{width:typeof h=="string"?h:`${h}px`},children:(0,t.jsx)("div",{className:"aspect-ratio__fill",style:{paddingTop:`${1/a*100}%`},children:v})})}},4247:function(p,f,r){"use strict";r.d(f,{p6:function(){return m},qF:function(){return g},wb:function(){return t}});function t(s){const c=new Date,e=typeof s=="string"?new Date(s):new Date(s),n=(c.getTime()-e.getTime())/1e3;return n<30?"\u521A\u521A":n<3600?Math.ceil(n/60)+"\u5206\u949F\u524D":n<3600*24?Math.ceil(n/3600)+"\u5C0F\u65F6\u524D":n<3600*24*2?"1\u5929\u524D":n<3600*24*31?Math.ceil(n/3600/24)+"\u5929\u524D":c.getFullYear()===e.getFullYear()?`${e.getMonth()+1}\u6708${e.getDate()}\u65E5`:`${e.getFullYear()}\u5E74${e.getMonth()+1}\u6708${e.getDate()}\u65E5`}function g(s){const c=new Date,e=typeof s=="string"?new Date(s):new Date(s),n=(c.getTime()-e.getTime())/1e3;return n<3600*24?"\u4ECA\u5929":n<3600*24*2?"\u6628\u5929":n<3600*24*31?Math.ceil(n/3600/24)+"\u5929\u524D":c.getFullYear()===e.getFullYear()?`${e.getMonth()+1}\u6708${e.getDate()}\u65E5`:`${e.getFullYear()}\u5E74${e.getMonth()+1}\u6708${e.getDate()}\u65E5`}function m(s,c=!1){const e=typeof s=="string"?new Date(s):new Date(s);return new Date().getFullYear()===e.getFullYear()?`${e.getMonth()+1}\u6708${e.getDate()}\u65E5 ${c?` ${e.getHours()}:${e.getMinutes().toString().padStart(2,"0")}`:""}`:`${e.getFullYear()}\u5E74${e.getMonth()+1}\u6708${e.getDate()}\u65E5 ${c?` ${e.getHours()}:${e.getMinutes().toString().padStart(2,"0")}`:""}`}const l=1,u=2,v=3,a=4;function h(s,c=3){if(!s)return"";const e=new Date(s),n=e.getFullYear(),o=`${`0${e.getMonth()+1}`.slice(-2)}`,i=`${`0${e.getDate()}`.slice(-2)}`,$=`${`0${e.getHours()}`.slice(-2)}`,d=`${`0${e.getMinutes()}`.slice(-2)}`,x=`${`0${e.getSeconds()}`.slice(-2)}`;switch(c){case l:return`${n}-${o}-${i}`;case u:return`${o}-${i} ${$}:${d}`;case a:return`${n}-${o}-${i} ${$}:${d}:${x}`;case v:return`${n}-${o}-${i} ${$}:${d}`;default:return`${n}-${o}-${i} ${$}:${d}`}}}}]);
