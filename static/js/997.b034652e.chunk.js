(self.webpackChunk_web_index=self.webpackChunk_web_index||[]).push([[997],{519:function(R,C,r){"use strict";r.d(C,{Z:function(){return m}});var t=r(3148),a=r(5168),s=r(3621),v=r(785),b=r.n(v),g=r(4247),p=r(7790),B=r(2787),h=r(882),f={},m=({id:y,onFocus:w,onBlur:$})=>{const[x,O]=(0,a.useState)(null),[N,L]=(0,a.useState)(""),E=(0,p.L)();(0,a.useEffect)(()=>{B.od.get(`/post/${y}/comments`).then(c=>{O((c==null?void 0:c.data)||[])})},[]);const M=()=>{if(!N){s.ZP.error("\u5199\u70B9\u4EC0\u4E48\u5427");return}B.od.post(`/post/${y}/comment`,{data:{content:N}}).then(c=>{c.err||(L(""),O([c.data,...x]))})},S=c=>{c.ctrlKey&&c.keyCode===13&&M()};return(0,t.jsxs)("div",{className:"video-comment",children:[(0,t.jsx)("div",{className:"video-comment__title",children:(0,t.jsx)("h4",{children:"\u8BC4\u8BBA"})}),(0,t.jsxs)("div",{className:"video-comment-edit",children:[(0,t.jsx)("img",{className:"video-comment-edit__avatar",src:(E==null?void 0:E.Avatar)||"/ic_launcher_round.png",alt:""}),(0,t.jsx)("textarea",{className:"video-comment-edit__input",placeholder:"\u7559\u4E0B\u8BC4\u8BBA...",disabled:!E,value:N,onChange:c=>L(c.target.value),onKeyDown:S,onFocus:c=>w==null?void 0:w(c),onBlur:c=>$==null?void 0:$(c)}),(0,t.jsx)("button",{disabled:!E||!N,className:"button is-primary video-comment-edit__button",onClick:M,children:"\u8BC4\u8BBA"})]}),(0,t.jsx)("div",{className:"comment-list",children:x?x.length>0?(0,t.jsx)("ul",{children:x.map(c=>{var Y,F;return(0,t.jsxs)("li",{className:b()("comment-item",{"--o":(E==null?void 0:E.ID)==c.Uid}),children:[(0,t.jsxs)("div",{className:"comment-item__head",children:[(0,t.jsx)("img",{className:"comment-item__avatar",src:(Y=c.Creator)==null?void 0:Y.Avatar,alt:""}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"comment-item__name",children:(F=c.Creator)==null?void 0:F.Nickname}),(0,t.jsx)("p",{className:"comment-item__time",children:(0,g.wb)(c.CreatedAt)})]})]}),(0,t.jsx)("div",{className:"comment-item__content",children:(0,t.jsx)("p",{children:c.Content})})]},c.ID)})}):(0,t.jsx)("p",{className:"empty",children:"\u6682\u65E0\u8BC4\u8BBA"}):(0,t.jsx)(h.wM,{})})]})}},3785:function(R,C,r){"use strict";r.d(C,{$:function(){return a}});var t=r(3148);const a=({tags:s})=>s.length?(0,t.jsx)("div",{className:"tags are-medium",children:s.map(({href:v,title:b},g)=>(0,t.jsx)("a",{className:"tag is-primary is-light",href:v,target:"_blank",style:{fontSize:"0.9rem"},children:b},g))}):null},882:function(R,C,r){"use strict";r.d(C,{wM:function(){return c},pA:function(){return Y},iR:function(){return F}});var t=r(3148),a=r(5168);/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var s=function(){return s=Object.assign||function(l){for(var u,o=1,i=arguments.length;o<i;o++){u=arguments[o];for(var d in u)Object.prototype.hasOwnProperty.call(u,d)&&(l[d]=u[d])}return l},s.apply(this,arguments)};function v(e,l){var u={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&l.indexOf(o)<0&&(u[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)l.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(u[o[i]]=e[o[i]]);return u}var b=function(){return Math.random().toString(36).substring(6)},g=function(e){var l=e.animate,u=e.animateBegin,o=e.backgroundColor,i=e.backgroundOpacity,d=e.baseUrl,H=e.children,k=e.foregroundColor,I=e.foregroundOpacity,D=e.gradientRatio,A=e.gradientDirection,j=e.uniqueKey,P=e.interval,G=e.rtl,J=e.speed,Q=e.style,V=e.title,T=e.beforeMask,_=v(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),U=j||b(),z=U+"-diff",W=U+"-animated-diff",X=U+"-aria",q=G?{transform:"scaleX(-1)"}:null,Z="0; "+P+"; 1",K=J+"s",ee=A==="top-bottom"?"rotate(90)":void 0;return(0,a.createElement)("svg",s({"aria-labelledby":X,role:"img",style:s(s({},Q),q)},_),V?(0,a.createElement)("title",{id:X},V):null,T&&(0,a.isValidElement)(T)?T:null,(0,a.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+d+"#"+z+")",style:{fill:"url("+d+"#"+W+")"}}),(0,a.createElement)("defs",null,(0,a.createElement)("clipPath",{id:z},H),(0,a.createElement)("linearGradient",{id:W,gradientTransform:ee},(0,a.createElement)("stop",{offset:"0%",stopColor:o,stopOpacity:i},l&&(0,a.createElement)("animate",{attributeName:"offset",values:-D+"; "+-D+"; 1",keyTimes:Z,dur:K,repeatCount:"indefinite",begin:u})),(0,a.createElement)("stop",{offset:"50%",stopColor:k,stopOpacity:I},l&&(0,a.createElement)("animate",{attributeName:"offset",values:-D/2+"; "+-D/2+"; "+(1+D/2),keyTimes:Z,dur:K,repeatCount:"indefinite",begin:u})),(0,a.createElement)("stop",{offset:"100%",stopColor:o,stopOpacity:i},l&&(0,a.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+D),keyTimes:Z,dur:K,repeatCount:"indefinite",begin:u})))))};g.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var p=function(e){return e.children?(0,a.createElement)(g,s({},e)):(0,a.createElement)(B,s({},e))},B=function(e){return(0,a.createElement)(p,s({viewBox:"0 0 476 124"},e),(0,a.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,a.createElement)("circle",{cx:"20",cy:"20",r:"20"}))},h=function(e){return createElement(p,s({viewBox:"0 0 400 460"},e),createElement("circle",{cx:"31",cy:"31",r:"15"}),createElement("rect",{x:"58",y:"18",rx:"2",ry:"2",width:"140",height:"10"}),createElement("rect",{x:"58",y:"34",rx:"2",ry:"2",width:"140",height:"10"}),createElement("rect",{x:"0",y:"60",rx:"2",ry:"2",width:"400",height:"400"}))},f=function(e){return createElement(p,s({viewBox:"0 0 340 84"},e),createElement("rect",{x:"0",y:"0",width:"67",height:"11",rx:"3"}),createElement("rect",{x:"76",y:"0",width:"140",height:"11",rx:"3"}),createElement("rect",{x:"127",y:"48",width:"53",height:"11",rx:"3"}),createElement("rect",{x:"187",y:"48",width:"72",height:"11",rx:"3"}),createElement("rect",{x:"18",y:"48",width:"100",height:"11",rx:"3"}),createElement("rect",{x:"0",y:"71",width:"37",height:"11",rx:"3"}),createElement("rect",{x:"18",y:"23",width:"140",height:"11",rx:"3"}),createElement("rect",{x:"166",y:"23",width:"173",height:"11",rx:"3"}))},n=function(e){return createElement(p,s({viewBox:"0 0 400 110"},e),createElement("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"10"}),createElement("rect",{x:"20",y:"20",rx:"3",ry:"3",width:"220",height:"10"}),createElement("rect",{x:"20",y:"40",rx:"3",ry:"3",width:"170",height:"10"}),createElement("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"250",height:"10"}),createElement("rect",{x:"20",y:"80",rx:"3",ry:"3",width:"200",height:"10"}),createElement("rect",{x:"20",y:"100",rx:"3",ry:"3",width:"80",height:"10"}))},m=function(e){return createElement(p,s({viewBox:"0 0 245 125"},e),createElement("circle",{cx:"10",cy:"20",r:"8"}),createElement("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"}),createElement("circle",{cx:"10",cy:"50",r:"8"}),createElement("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"}),createElement("circle",{cx:"10",cy:"80",r:"8"}),createElement("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"}),createElement("circle",{cx:"10",cy:"110",r:"8"}),createElement("rect",{x:"25",y:"105",rx:"5",ry:"5",width:"220",height:"10"}))},y=p,w=Object.defineProperty,$=Object.defineProperties,x=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,E=(e,l,u)=>l in e?w(e,l,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[l]=u,M=(e,l)=>{for(var u in l||(l={}))N.call(l,u)&&E(e,u,l[u]);if(O)for(var u of O(l))L.call(l,u)&&E(e,u,l[u]);return e},S=(e,l)=>$(e,x(l));const c=e=>(0,t.jsxs)(y,S(M({viewBox:"0 0 462 160"},e),{children:[(0,t.jsx)("rect",{x:"70",y:"16",rx:"5",ry:"5",width:"100",height:"12"}),(0,t.jsx)("rect",{x:"70",y:"39",rx:"5",ry:"5",width:"321",height:"20"}),(0,t.jsx)("circle",{cx:"26",cy:"40",r:"26"})]})),Y=e=>(0,t.jsxs)(y,S(M({viewBox:"0 0 500 200"},e),{style:{padding:"0.5em"},children:[(0,t.jsx)("rect",{x:"60",y:"25",rx:"5",ry:"5",width:"50",height:"10"}),(0,t.jsx)("rect",{x:"60",y:"45",rx:"5",ry:"5",width:"60",height:"10"}),(0,t.jsx)("rect",{x:"0",y:"80",rx:"5",ry:"5",width:"46%",height:"20"}),(0,t.jsx)("rect",{x:"0",y:"110",rx:"5",ry:"5",width:"100%",height:"20"}),(0,t.jsx)("rect",{x:"0",y:"140",rx:"5",ry:"5",width:"70%",height:"20"}),(0,t.jsx)("rect",{x:"0",y:"170",rx:"5",ry:"5",width:"60%",height:"20"}),(0,t.jsx)("circle",{cx:"26",cy:"40",r:"26"})]})),F=e=>(0,t.jsxs)(y,S(M({viewBox:"0 0 462 160"},e),{children:[(0,t.jsx)("rect",{x:"70",y:"16",rx:"5",ry:"5",width:"100",height:"12"}),(0,t.jsx)("rect",{x:"70",y:"39",rx:"5",ry:"5",width:"321",height:"20"}),(0,t.jsx)("circle",{cx:"26",cy:"40",r:"26"})]}));c.metadata={name:"comment",github:"comment",description:"comment",filename:"CommentSkeleton"}},3073:function(R,C,r){"use strict";r.d(C,{U:function(){return u}});var t=r(3148),a=r(3542),s=r(5073),v=r(2913),b=r(2597),g=r(585),p=r(4538),B=r(7489),h=r(7059),f=r(4704),n=r(7135),m=r(7131),y={},w=Object.defineProperty,$=Object.defineProperties,x=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,E=(o,i,d)=>i in o?w(o,i,{enumerable:!0,configurable:!0,writable:!0,value:d}):o[i]=d,M=(o,i)=>{for(var d in i||(i={}))N.call(i,d)&&E(o,d,i[d]);if(O)for(var d of O(i))L.call(i,d)&&E(o,d,i[d]);return o},S=(o,i)=>$(o,x(i)),c=(o,i,d)=>new Promise((H,k)=>{var I=j=>{try{A(d.next(j))}catch(P){k(P)}},D=j=>{try{A(d.throw(j))}catch(P){k(P)}},A=j=>j.done?H(j.value):Promise.resolve(j.value).then(I,D);A((d=d.apply(o,i)).next())}),Y,F;const e={render:{view:{menu:!1,md:!1,html:!0},classname:"markdown_render"},editor:{view:{menu:!0,md:!0,html:!1},classname:"markdown_editor"}},l=(0,a.l)().use(s.Z).use(g.Z).use(v.Z,{allowDangerousHtml:!0}).use(b.Z).use(p.Z,{properties:"attr"}).use(B.Z,S(M({},h.R),{attributes:S(M({},h.R.attributes),{img:[...((F=(Y=h.R)==null?void 0:Y.attributes)==null?void 0:F.img)||[],["style"]]})})).use(f.Z),u=o=>{const{value:i="",type:d,onChange:H,customClassName:k="",placeholder:I=""}=o,{view:D,classname:A}=e[d];let j=`markdown ${A}`;return k&&(j+=` ${k}`),(0,t.jsx)(n.ZP,{className:j,readOnly:d==="render",view:D,value:i,htmlClass:"markdown-body",renderHTML:P=>c(void 0,null,function*(){return(yield l.process(P)).toString()}),onChange:P=>H==null?void 0:H(P.text),placeholder:I})}},4247:function(R,C,r){"use strict";r.d(C,{p6:function(){return s},qF:function(){return a},wb:function(){return t}});function t(h){const f=new Date,n=typeof h=="string"?new Date(h):new Date(h),m=(f.getTime()-n.getTime())/1e3;return m<30?"\u521A\u521A":m<3600?Math.ceil(m/60)+"\u5206\u949F\u524D":m<3600*24?Math.ceil(m/3600)+"\u5C0F\u65F6\u524D":m<3600*24*2?"1\u5929\u524D":m<3600*24*31?Math.ceil(m/3600/24)+"\u5929\u524D":f.getFullYear()===n.getFullYear()?`${n.getMonth()+1}\u6708${n.getDate()}\u65E5`:`${n.getFullYear()}\u5E74${n.getMonth()+1}\u6708${n.getDate()}\u65E5`}function a(h){const f=new Date,n=typeof h=="string"?new Date(h):new Date(h),m=(f.getTime()-n.getTime())/1e3;return m<3600*24?"\u4ECA\u5929":m<3600*24*2?"\u6628\u5929":m<3600*24*31?Math.ceil(m/3600/24)+"\u5929\u524D":f.getFullYear()===n.getFullYear()?`${n.getMonth()+1}\u6708${n.getDate()}\u65E5`:`${n.getFullYear()}\u5E74${n.getMonth()+1}\u6708${n.getDate()}\u65E5`}function s(h,f=!1){const n=typeof h=="string"?new Date(h):new Date(h);return new Date().getFullYear()===n.getFullYear()?`${n.getMonth()+1}\u6708${n.getDate()}\u65E5 ${f?` ${n.getHours()}:${n.getMinutes().toString().padStart(2,"0")}`:""}`:`${n.getFullYear()}\u5E74${n.getMonth()+1}\u6708${n.getDate()}\u65E5 ${f?` ${n.getHours()}:${n.getMinutes().toString().padStart(2,"0")}`:""}`}const v=1,b=2,g=3,p=4;function B(h,f=3){if(!h)return"";const n=new Date(h),m=n.getFullYear(),y=`${`0${n.getMonth()+1}`.slice(-2)}`,w=`${`0${n.getDate()}`.slice(-2)}`,$=`${`0${n.getHours()}`.slice(-2)}`,x=`${`0${n.getMinutes()}`.slice(-2)}`,O=`${`0${n.getSeconds()}`.slice(-2)}`;switch(f){case v:return`${m}-${y}-${w}`;case b:return`${y}-${w} ${$}:${x}`;case p:return`${m}-${y}-${w} ${$}:${x}:${O}`;case g:return`${m}-${y}-${w} ${$}:${x}`;default:return`${m}-${y}-${w} ${$}:${x}`}}},4953:function(R,C,r){var t={"./1.json":[7754,754],"./10.json":[6534,534],"./131478f2-31cd-446a-9cb2-15158b8c3efe.json":[9955,955],"./163f51f8-76a4-4e41-8eeb-f27295520829.json":[3298,298],"./2.json":[5927,927],"./4.json":[5264,264],"./7.json":[1081,81],"./77745a95-b5db-4c0b-ad08-0a55a6e70f49.json":[7515,515],"./9.json":[3520,520],"./a7a1345e-1bc8-4793-9650-a0ee89b6d74b.json":[8085,85],"./b2cf7c39-3f62-45c0-bbe1-a9522ff24cb7.json":[9726,726]};function a(s){if(!r.o(t,s))return Promise.resolve().then(function(){var g=new Error("Cannot find module '"+s+"'");throw g.code="MODULE_NOT_FOUND",g});var v=t[s],b=v[0];return r.e(v[1]).then(function(){return r.t(b,19)})}a.keys=function(){return Object.keys(t)},a.id=4953,R.exports=a}}]);