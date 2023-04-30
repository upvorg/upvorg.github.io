"use strict";(self.webpackChunk_web_index=self.webpackChunk_web_index||[]).push([[525],{9525:function(N,$,i){i.r($),i.d($,{default:function(){return Y}});var t=i(4155),g=i(9653),p=i(6069),b=i(2932),D=i(426),h=i(2195),x={},M=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,e=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,o=(l,r,n)=>r in l?M(l,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[r]=n,d=(l,r)=>{for(var n in r||(r={}))a.call(r,n)&&o(l,n,r[n]);if(e)for(var n of e(r))m.call(r,n)&&o(l,n,r[n]);return l},f=(l,r)=>s(l,u(r)),Y=()=>{const[l,r]=(0,g.useState)([]),[n,k]=(0,g.useState)({DisplayName:"",Email:"",Message:""}),[w,y]=(0,g.useState)(1),F=(0,D.L)();(0,g.useEffect)(()=>{h.od.get("/feedbacks").then(c=>{r(c.data)})},[w]);function v(c){k(f(d({},n),{[c.target.name]:c.target.value}))}function E(c){c.preventDefault(),c.stopPropagation(),h.od.post("/feedback",{data:f(d({},n),{name:F==null?void 0:F.Name})}).then(S=>{S.err||(y(Date.now()),k(f(d({},n),{Message:""})))})}return(0,t.jsxs)("div",{className:"feedback-container",children:[(0,t.jsx)(p.q,{children:(0,t.jsx)("title",{children:"Feedback"})}),(0,t.jsx)("div",{className:"feedback-open",children:(0,t.jsxs)("form",{className:"feedback-form",onSubmit:E,children:[(0,t.jsx)("h1",{children:"Feedback"}),(0,t.jsxs)("div",{className:"feedback-form-group",children:[(0,t.jsxs)("label",{htmlFor:"feedback-name",children:["Name",(0,t.jsx)("span",{children:"*"})]}),(0,t.jsx)("input",{type:"text",id:"feedback-name",className:"input",required:!0,name:"DisplayName",onChange:v,value:n.DisplayName})]}),(0,t.jsxs)("div",{className:"feedback-form-group",children:[(0,t.jsx)("label",{htmlFor:"feedback-email",children:"Email"}),(0,t.jsx)("input",{type:"email",id:"feedback-email",className:"input",name:"Email",value:n.Email,onChange:v})]}),(0,t.jsxs)("div",{className:"feedback-form-group",children:[(0,t.jsxs)("label",{htmlFor:"feedback-message",children:["Message",(0,t.jsx)("span",{children:"*"})]}),(0,t.jsx)("textarea",{id:"feedback-message",className:"textarea",required:!0,name:"Message",onChange:v,value:n.Message})]}),(0,t.jsx)("button",{type:"submit",className:"button is-black is-fullwidth",children:"Send"})]})}),(0,t.jsx)("div",{className:"feedback-list",children:(0,t.jsx)("ul",{children:l==null?void 0:l.map(c=>(0,t.jsxs)("li",{className:"feedback-item",id:`feedback-${c.ID}`,children:[(0,t.jsx)("div",{className:"feedback-item__head",children:(0,t.jsxs)("span",{className:"feedback-item__name",children:[c.DisplayName," :"]})}),(0,t.jsxs)("div",{className:"feedback-item__content",children:[(0,t.jsx)("p",{children:c.Message}),(0,t.jsxs)("p",{className:"feedback-item__time",children:[(0,b.p6)(c.CreatedAt)," | ",c.Ip]})]})]},c.ID))})})]})}},2932:function(N,$,i){i.d($,{p6:function(){return p},qF:function(){return g},wb:function(){return t}});function t(s){const u=new Date,e=typeof s=="string"?new Date(s):new Date(s),a=(u.getTime()-e.getTime())/1e3;return a<30?"\u521A\u521A":a<3600?Math.ceil(a/60)+"\u5206\u949F\u524D":a<3600*24?Math.ceil(a/3600)+"\u5C0F\u65F6\u524D":a<3600*24*2?"1\u5929\u524D":a<3600*24*31?Math.ceil(a/3600/24)+"\u5929\u524D":u.getFullYear()===e.getFullYear()?`${e.getMonth()+1}\u6708${e.getDate()}\u65E5`:`${e.getFullYear()}\u5E74${e.getMonth()+1}\u6708${e.getDate()}\u65E5`}function g(s){const u=new Date,e=typeof s=="string"?new Date(s):new Date(s),a=(u.getTime()-e.getTime())/1e3;return a<3600*24?"\u4ECA\u5929":a<3600*24*2?"\u6628\u5929":a<3600*24*31?Math.ceil(a/3600/24)+"\u5929\u524D":u.getFullYear()===e.getFullYear()?`${e.getMonth()+1}\u6708${e.getDate()}\u65E5`:`${e.getFullYear()}\u5E74${e.getMonth()+1}\u6708${e.getDate()}\u65E5`}function p(s,u=!1){const e=typeof s=="string"?new Date(s):new Date(s);return new Date().getFullYear()===e.getFullYear()?`${e.getMonth()+1}\u6708${e.getDate()}\u65E5 ${u?` ${e.getHours()}:${e.getMinutes().toString().padStart(2,"0")}`:""}`:`${e.getFullYear()}\u5E74${e.getMonth()+1}\u6708${e.getDate()}\u65E5 ${u?` ${e.getHours()}:${e.getMinutes().toString().padStart(2,"0")}`:""}`}const b=1,D=2,h=3,x=4;function M(s,u=3){if(!s)return"";const e=new Date(s),a=e.getFullYear(),m=`${`0${e.getMonth()+1}`.slice(-2)}`,o=`${`0${e.getDate()}`.slice(-2)}`,d=`${`0${e.getHours()}`.slice(-2)}`,f=`${`0${e.getMinutes()}`.slice(-2)}`,j=`${`0${e.getSeconds()}`.slice(-2)}`;switch(u){case b:return`${a}-${m}-${o}`;case D:return`${m}-${o} ${d}:${f}`;case x:return`${a}-${m}-${o} ${d}:${f}:${j}`;case h:return`${a}-${m}-${o} ${d}:${f}`;default:return`${a}-${m}-${o} ${d}:${f}`}}}}]);
