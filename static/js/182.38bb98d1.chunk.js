"use strict";(self.webpackChunk_web_index=self.webpackChunk_web_index||[]).push([[182],{5182:(e,a,s)=>{s.r(a),s.d(a,{default:()=>r});var t=s(591),n=s(8199),i=s(1308),l=s(4448),c=s(4266),d=s(5455);const r=()=>{const[e,a]=(0,n.useState)([]),[s,r]=(0,n.useState)({DisplayName:"",Email:"",Message:""}),[m,u]=(0,n.useState)(1),g=(0,c.k)();function o(e){r(Object.assign(Object.assign({},s),{[e.target.name]:e.target.value}))}return(0,n.useEffect)((()=>{d.pY.get("/feedbacks").then((e=>{a(e.data)}))}),[m]),(0,t.jsxs)("div",{className:"feedback-container",children:[(0,t.jsx)(i.m,{children:(0,t.jsx)("title",{children:"Feedback"})}),(0,t.jsx)("div",{className:"feedback-open",children:(0,t.jsxs)("form",{className:"feedback-form",onSubmit:function(e){e.preventDefault(),e.stopPropagation(),d.pY.post("/feedback",{data:Object.assign(Object.assign({},s),{name:null===g||void 0===g?void 0:g.Name})}).then((e=>{e.err||(u(Date.now()),r(Object.assign(Object.assign({},s),{Message:""})))}))},children:[(0,t.jsx)("h1",{children:"Feedback"}),(0,t.jsxs)("div",{className:"feedback-form-group",children:[(0,t.jsxs)("label",{htmlFor:"feedback-name",children:["Name",(0,t.jsx)("span",{children:"*"})]}),(0,t.jsx)("input",{type:"text",id:"feedback-name",className:"input",required:!0,name:"DisplayName",onChange:o,value:s.DisplayName})]}),(0,t.jsxs)("div",{className:"feedback-form-group",children:[(0,t.jsx)("label",{htmlFor:"feedback-email",children:"Email"}),(0,t.jsx)("input",{type:"email",id:"feedback-email",className:"input",name:"Email",value:s.Email,onChange:o})]}),(0,t.jsxs)("div",{className:"feedback-form-group",children:[(0,t.jsxs)("label",{htmlFor:"feedback-message",children:["Message",(0,t.jsx)("span",{children:"*"})]}),(0,t.jsx)("textarea",{id:"feedback-message",className:"textarea",required:!0,name:"Message",onChange:o,value:s.Message})]}),(0,t.jsx)("button",{type:"submit",className:"button is-black is-fullwidth",children:"Send"})]})}),(0,t.jsx)("div",{className:"feedback-list",children:(0,t.jsx)("ul",{children:null===e||void 0===e?void 0:e.map((e=>(0,t.jsxs)("li",{className:"feedback-item",id:`feedback-${e.ID}`,children:[(0,t.jsx)("div",{className:"feedback-item__head",children:(0,t.jsxs)("span",{className:"feedback-item__name",children:[e.DisplayName," :"]})}),(0,t.jsxs)("div",{className:"feedback-item__content",children:[(0,t.jsx)("p",{children:e.Message}),(0,t.jsxs)("p",{className:"feedback-item__time",children:[(0,l.Yq)(e.CreatedAt)," | ",e.Ip]})]})]},e.ID)))})})]})}},4448:(e,a,s)=>{function t(e){const a=new Date,s=new Date(e),t=(a.getTime()-s.getTime())/1e3;return t<30?"\u521a\u521a":t<3600?Math.ceil(t/60)+"\u5206\u949f\u524d":t<86400?Math.ceil(t/3600)+"\u5c0f\u65f6\u524d":t<172800?"1\u5929\u524d":t<2678400?Math.ceil(t/3600/24)+"\u5929\u524d":a.getFullYear()===s.getFullYear()?`${s.getMonth()+1}\u6708${s.getDate()}\u65e5`:`${s.getFullYear()}\u5e74${s.getMonth()+1}\u6708${s.getDate()}\u65e5`}function n(e,a=!1){const s=new Date(e);return(new Date).getFullYear()===s.getFullYear()?`${s.getMonth()+1}\u6708${s.getDate()}\u65e5 ${a?` ${s.getHours()}:${s.getMinutes().toString().padStart(2,"0")}`:""}`:`${s.getFullYear()}\u5e74${s.getMonth()+1}\u6708${s.getDate()}\u65e5 ${a?` ${s.getHours()}:${s.getMinutes().toString().padStart(2,"0")}`:""}`}s.d(a,{D$:()=>t,Yq:()=>n})}}]);