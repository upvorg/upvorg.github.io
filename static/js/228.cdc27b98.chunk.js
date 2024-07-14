/*! For license information please see 228.cdc27b98.chunk.js.LICENSE.txt */
(self.webpackChunk_web_index=self.webpackChunk_web_index||[]).push([[228],{8837:(e,r,t)=>{"use strict";t.d(r,{x:()=>p,A:()=>h});var i=t(8073),s=t(3997),n=t(1689),a=t(7274),l=t(2389),c=t.n(l),d=t(1947);const o=6;let v;const u="loading"in HTMLImageElement.prototype;function h({info:e}){var r;const t="video"===e.Type?`/v/${e.ID}`:`/p/${e.ID}`,l=(0,s.useRef)(null);return(0,s.useEffect)((()=>{var e;if(v&&(null===(e=l.current)||void 0===e?void 0:e.dataset.cover))return v.observe(l.current),()=>{l.current&&(v.unobserve(l.current),l.current.querySelector(".upv-video-card__loading").classList.remove("upv-video-card__loading--hidden"),l.current.querySelector(".upv-video-card__error").classList.remove("upv-video-card__error--show"))}}),[l,e]),(0,i.jsxs)("div",{className:"upv-video-card",children:[(0,i.jsx)(d.N_,{href:t,children:(0,i.jsx)("div",{ref:l,"data-cover":e.Cover,title:e.Title,children:(0,i.jsxs)(n.A,{ratio:3/4,children:[e.Cover&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{loading:"lazy",className:"upv-video-card__image",alt:e.Title,title:e.Title,"data-src":e.Cover,src:u?e.Cover:void 0}),!u&&[(0,i.jsx)("div",{className:"upv-video-card__loading",children:"LOADING"}),(0,i.jsx)("div",{className:"upv-video-card__error",children:"ERROR"})]]}),(0,i.jsx)("div",{className:c()("upv-video-card__nocover",{"upv-video-card__nocover--show":!e.Cover}),children:(0,i.jsx)("span",{className:c()({large:e.Title.length<=4}),children:e.Title.slice(0,o)})})]})})}),(0,i.jsxs)("div",{className:"upv-video-card__content",children:[(0,i.jsx)("div",{className:"upv-video-card__content__title",children:e.Title}),(0,i.jsxs)("div",{className:"upv-video-card__content__author",children:[(0,i.jsx)("span",{children:(null===(r=e.Creator)||void 0===r?void 0:r.Nickname)||"-"})," \xb7 ",(0,i.jsx)("span",{children:(0,a.D$)(e.CreatedAt)})]})]})]})}function p({id:e,level:r,name:t,qq:s,sign:n}){return(0,i.jsx)("a",{href:`/v/${e}?live`,children:(0,i.jsxs)("div",{className:"live-card",style:{display:"flex"},children:[(0,i.jsx)("div",{className:"live-avatar",children:(0,i.jsx)("img",{src:`https://q1.qlogo.cn/g?b=qq&nk=${s}&s=640`,alt:"name"})}),(0,i.jsxs)("div",{className:"live-info",children:[(0,i.jsxs)("span",{children:[n," ",(0,i.jsx)("sup",{children:r})]}),(0,i.jsx)("span",{children:t})]})]})})}u||(v=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const r=e.target;v.unobserve(r);const t=r.querySelector("img");t.src=t.dataset.src,t.onload=()=>{r.querySelector(".upv-video-card__loading").classList.add("upv-video-card__loading--hidden")},t.onerror=()=>{r.querySelector(".upv-video-card__error").classList.add("upv-video-card__error--show")}}}))}),{threshold:[.15]}))},1228:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var i=t(8073),s=t(3997),n=t(2389),a=t.n(n),l=t(3592),c=t(8837),d=t(854);const o=function(){var e;const[r,t]=(0,s.useState)((new Date).getDay()),[n,o]=(0,s.useState)([]);return(0,s.useEffect)((()=>{l.pY.get("/post/week").then((e=>{!e.err&&o(e.data)}))}),[]),(0,i.jsxs)("div",{className:"v-index",children:[(0,i.jsx)(d.m,{children:(0,i.jsx)("title",{children:"\u65b0\u756a\u65f6\u95f4\u8868 - UPV - free animes no ads"})}),(0,i.jsx)("div",{className:"index-header",children:(0,i.jsxs)("div",{className:"index-header-left",children:[(0,i.jsx)("h1",{className:"title",children:"\u6bcf\u5468\u66f4\u65b0"}),(0,i.jsx)("ul",{className:"tags are-medium",children:l.h8.map(((e,s)=>(0,i.jsx)("li",{className:a()("tag is-rounded",{"is-primary":s===r}),onClick:()=>t(s),children:e},s)))})]})}),(0,i.jsx)("ul",{className:"video-list",children:null===(e=n[r])||void 0===e?void 0:e.map(((e,r)=>(0,i.jsx)("li",{children:e&&(0,i.jsx)(c.A,{info:e})},r)))})]})}},1689:(e,r,t)=>{"use strict";t.d(r,{A:()=>s});var i=t(8073);const s=e=>{const{children:r,ratio:t,mw:s}=e;return(0,i.jsx)("div",{className:"aspect-ratio",style:{width:"string"===typeof s?s:`${s}px`},children:(0,i.jsx)("div",{className:"aspect-ratio__fill",style:{paddingTop:1/t*100+"%"},children:r})})}},7274:(e,r,t)=>{"use strict";function i(e){const r=new Date,t=new Date(e),i=(r.getTime()-t.getTime())/1e3;return i<30?"\u521a\u521a":i<3600?Math.ceil(i/60)+"\u5206\u949f\u524d":i<86400?Math.ceil(i/3600)+"\u5c0f\u65f6\u524d":i<172800?"1\u5929\u524d":i<2678400?Math.ceil(i/3600/24)+"\u5929\u524d":r.getFullYear()===t.getFullYear()?`${t.getMonth()+1}\u6708${t.getDate()}\u65e5`:`${t.getFullYear()}\u5e74${t.getMonth()+1}\u6708${t.getDate()}\u65e5`}function s(e,r=!1){const t=new Date(e);return(new Date).getFullYear()===t.getFullYear()?`${t.getMonth()+1}\u6708${t.getDate()}\u65e5 ${r?` ${t.getHours()}:${t.getMinutes().toString().padStart(2,"0")}`:""}`:`${t.getFullYear()}\u5e74${t.getMonth()+1}\u6708${t.getDate()}\u65e5 ${r?` ${t.getHours()}:${t.getMinutes().toString().padStart(2,"0")}`:""}`}t.d(r,{D$:()=>i,Yq:()=>s})},2389:(e,r)=>{var t;!function(){"use strict";var i={}.hasOwnProperty;function s(){for(var e="",r=0;r<arguments.length;r++){var t=arguments[r];t&&(e=a(e,n(t)))}return e}function n(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var t in e)i.call(e,t)&&e[t]&&(r=a(r,t));return r}function a(e,r){return r?e?e+" "+r:e+r:e}e.exports?(s.default=s,e.exports=s):void 0===(t=function(){return s}.apply(r,[]))||(e.exports=t)}()}}]);