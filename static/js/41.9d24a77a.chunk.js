"use strict";(self.webpackChunk_web_index=self.webpackChunk_web_index||[]).push([[41],{8613:function(f,i,n){n.r(i),n.d(i,{default:function(){return j}});var e=n(3148),a=n(5168),u=n(3156),h=n(3350),m=n(9476),x=n(1758),v={};function j(){const c=(0,a.useRef)(""),[l,p]=(0,a.useState)([]),[{page:r,k:t},d]=(0,x.v)({page:1,k:""}),o=s=>{d({page:s<1?1:s}),root.scrollTop=0};return(0,a.useEffect)(()=>{t&&(c.current=t,fetch(`https://api.enime.moe/search/${encodeURIComponent(t)}`).then(s=>s.json()).then(s=>p((0,m.in)(s.data))))},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(u.q,{children:(0,e.jsx)("title",{children:t?`${t} - \u641C\u7D22 - UPV - free animes no ads`:"\u641C\u7D22 - UPV - free animes no ads"})}),(0,e.jsxs)("div",{className:"search",children:[(0,e.jsx)("div",{className:"search-header",children:(0,e.jsx)("form",{onSubmit:s=>{s.preventDefault(),d({k:c.current,v:Date.now()})},children:(0,e.jsxs)("div",{className:"search-wrap",children:[(0,e.jsx)("div",{className:"search-action",children:(0,e.jsx)("div",{className:"control",children:(0,e.jsx)("input",{id:"search-input",className:"input",maxLength:100,autoComplete:"off",defaultValue:t,onChange:s=>c.current=s.target.value,type:"text",placeholder:"Type to search"})})}),(0,e.jsx)("button",{className:"button is-primary",children:"\u641C\u7D22"})]})})}),(0,e.jsxs)("div",{className:"search-body",children:[(0,e.jsx)(h.Z,{title:"\u641C\u7D22\u7ED3\u679C",videos:l}),(0,e.jsxs)("div",{className:"paginate-container field has-addons",style:{justifyContent:"center",paddingBottom:"28px"},children:[(0,e.jsx)("p",{className:"control",children:(0,e.jsx)("button",{className:"button",onClick:()=>o(+r-1),disabled:+r<=1,children:(0,e.jsx)("span",{children:"Newer"})})}),(0,e.jsx)("p",{className:"control",children:(0,e.jsx)("button",{className:"button is-outlined",disabled:l.length<1||l.length<12,onClick:()=>o(+r+1),children:(0,e.jsx)("span",{className:"is-primary",children:"Older"})})})]})]})]})]})}}}]);
