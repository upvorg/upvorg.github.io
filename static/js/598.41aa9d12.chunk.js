"use strict";(self.webpackChunk_web_index=self.webpackChunk_web_index||[]).push([[598],{7248:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(568),a=n(548),i=n(4656),o=n(6638),c=n.n(o),l=n(5219),s=n(4857),d=n(3987),m=n(7857);const u=({id:e,onFocus:t,onBlur:n})=>{const[o,u]=(0,a.useState)(null),[h,g]=(0,a.useState)(""),x=(0,s.k)();(0,a.useEffect)((()=>{d.pY.get(`/post/${e}/comments`).then((e=>{u((null===e||void 0===e?void 0:e.data)||[])})).catch((()=>{u([])}))}),[]);const v=()=>{h?d.pY.post(`/post/${e}/comment`,{data:{content:h}}).then((e=>{e.err||(g(""),u([e.data,...o]))})):i.Ay.error("\u5199\u70b9\u4ec0\u4e48\u5427")};return(0,r.jsxs)("div",{className:"video-comment",children:[(0,r.jsx)("div",{className:"video-comment__title",children:(0,r.jsx)("h4",{children:"\u8bc4\u8bba"})}),(0,r.jsxs)("div",{className:"video-comment-edit",children:[(0,r.jsx)("img",{className:"video-comment-edit__avatar",src:(null===x||void 0===x?void 0:x.Avatar)||"/ic_launcher_round.png",alt:""}),(0,r.jsx)("textarea",{className:"video-comment-edit__input",placeholder:"\u7559\u4e0b\u8bc4\u8bba...",disabled:!x,value:h,onChange:e=>g(e.target.value),onKeyDown:e=>{e.ctrlKey&&13===e.keyCode&&v()},onFocus:e=>null===t||void 0===t?void 0:t(e),onBlur:e=>null===n||void 0===n?void 0:n(e)}),(0,r.jsx)("button",{disabled:!x||!h,className:"button is-primary video-comment-edit__button",onClick:v,children:"\u8bc4\u8bba"})]}),(0,r.jsx)("div",{className:"comment-list",children:o?o.length>0?(0,r.jsx)("ul",{children:o.map((e=>{var t,n;return(0,r.jsxs)("li",{className:c()("comment-item",{"--o":(null===x||void 0===x?void 0:x.ID)==e.Uid}),children:[(0,r.jsxs)("div",{className:"comment-item__head",children:[(0,r.jsx)("img",{className:"comment-item__avatar",src:null===(t=e.Creator)||void 0===t?void 0:t.Avatar,alt:""}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"comment-item__name",children:null===(n=e.Creator)||void 0===n?void 0:n.Nickname}),(0,r.jsx)("p",{className:"comment-item__time",children:(0,l.D$)(e.CreatedAt)})]})]}),(0,r.jsx)("div",{className:"comment-item__content",children:(0,r.jsx)("p",{children:e.Content})})]},e.ID)}))}):(0,r.jsx)("p",{className:"empty",children:"\u6682\u65e0\u8bc4\u8bba"}):(0,r.jsx)(m.BQ,{})})]})}},6848:(e,t,n)=>{n.d(t,{Y:()=>a});var r=n(568);const a=({tags:e})=>e.length?(0,r.jsx)("div",{className:"tags are-medium",children:e.map((({href:e,title:t},n)=>(0,r.jsx)("a",{className:"tag is-primary is-light",href:e,target:"_blank",style:{fontSize:"0.9rem"},children:t},n)))}):null},7857:(e,t,n)=>{n.d(t,{BQ:()=>d,BI:()=>m,M4:()=>u});var r=n(568),a=n(548),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)};var o=function(e){var t=e.animate,n=void 0===t||t,r=e.backgroundColor,o=void 0===r?"#f5f6f7":r,c=e.backgroundOpacity,l=void 0===c?1:c,s=e.baseUrl,d=void 0===s?"":s,m=e.children,u=e.foregroundColor,h=void 0===u?"#eee":u,g=e.foregroundOpacity,x=void 0===g?1:g,v=e.gradientRatio,y=void 0===v?2:v,p=e.uniqueKey,f=e.rtl,j=void 0!==f&&f,w=e.speed,b=void 0===w?1.2:w,O=e.style,_=void 0===O?{}:O,C=e.title,E=void 0===C?"Loading...":C,$=e.beforeMask,k=void 0===$?null:$,N=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","rtl","speed","style","title","beforeMask"]),D=p||Math.random().toString(36).substring(6),M="".concat(D,"-diff"),A="".concat(D,"-animated-diff"),S="".concat(D,"-aria"),Y=j?{transform:"scaleX(-1)"}:null,B="".concat(b,"s"),F="".concat(-1*y," 0"),P="".concat(y," 0");return(0,a.createElement)("svg",i({"aria-labelledby":S,role:"img",style:i(i({},_),Y)},N),E?(0,a.createElement)("title",{id:S},E):null,k&&(0,a.isValidElement)(k)?k:null,(0,a.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url(".concat(d,"#").concat(M,")"),style:{fill:"url(".concat(d,"#").concat(A,")")}}),(0,a.createElement)("defs",null,(0,a.createElement)("clipPath",{id:M},m),(0,a.createElement)("linearGradient",{id:A,gradientTransform:"translate(".concat(F,")")},(0,a.createElement)("stop",{offset:"0%",stopColor:o,stopOpacity:l}),(0,a.createElement)("stop",{offset:"50%",stopColor:h,stopOpacity:x}),(0,a.createElement)("stop",{offset:"100%",stopColor:o,stopOpacity:l}),n&&(0,a.createElement)("animateTransform",{attributeName:"gradientTransform",type:"translate",values:"".concat(F,"; 0 0; ").concat(P),dur:B,repeatCount:"indefinite"}))))},c=function(e){return e.children?(0,a.createElement)(o,i({},e)):(0,a.createElement)(l,i({},e))},l=function(e){return(0,a.createElement)(c,i({viewBox:"0 0 476 124"},e),(0,a.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,a.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};const s=c,d=e=>(0,r.jsxs)(s,Object.assign({viewBox:"0 0 462 160"},e,{children:[(0,r.jsx)("rect",{x:"70",y:"16",rx:"5",ry:"5",width:"100",height:"12"}),(0,r.jsx)("rect",{x:"70",y:"39",rx:"5",ry:"5",width:"321",height:"20"}),(0,r.jsx)("circle",{cx:"26",cy:"40",r:"26"})]})),m=e=>(0,r.jsxs)(s,Object.assign({viewBox:"0 0 500 200"},e,{style:{padding:"0.5em"},children:[(0,r.jsx)("rect",{x:"60",y:"25",rx:"5",ry:"5",width:"50",height:"10"}),(0,r.jsx)("rect",{x:"60",y:"45",rx:"5",ry:"5",width:"60",height:"10"}),(0,r.jsx)("rect",{x:"0",y:"80",rx:"5",ry:"5",width:"46%",height:"20"}),(0,r.jsx)("rect",{x:"0",y:"110",rx:"5",ry:"5",width:"100%",height:"20"}),(0,r.jsx)("rect",{x:"0",y:"140",rx:"5",ry:"5",width:"70%",height:"20"}),(0,r.jsx)("rect",{x:"0",y:"170",rx:"5",ry:"5",width:"60%",height:"20"}),(0,r.jsx)("circle",{cx:"26",cy:"40",r:"26"})]})),u=e=>(0,r.jsxs)(s,Object.assign({viewBox:"0 0 462 160"},e,{children:[(0,r.jsx)("rect",{x:"70",y:"16",rx:"5",ry:"5",width:"100",height:"12"}),(0,r.jsx)("rect",{x:"70",y:"39",rx:"5",ry:"5",width:"321",height:"20"}),(0,r.jsx)("circle",{cx:"26",cy:"40",r:"26"})]}));d.metadata={name:"comment",github:"comment",description:"comment",filename:"CommentSkeleton"}},1604:(e,t,n)=>{n.d(t,{o:()=>p});var r,a=n(568),i=(n(548),n(4041)),o=n(1992),c=n(7706),l=n(5107),s=n(9163),d=n(3549),m=n(8226),u=n(795),h=n(3125),g=n(7673),x=(n(8902),function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{l(r.next(e))}catch(t){i(t)}}function c(e){try{l(r.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}l((r=r.apply(e,t||[])).next())}))});const v={render:{view:{menu:!1,md:!1,html:!0},classname:"markdown_render"},editor:{view:{menu:!0,md:!0,html:!1},classname:"markdown_editor"}},y=(0,i.l)().use(o.A).use(s.A).use(c.A,{allowDangerousHtml:!0}).use(l.A).use(d.A,{properties:"attr"}).use(m.A,Object.assign(Object.assign({},u.j),{attributes:Object.assign(Object.assign({},u.j.attributes),{img:[...(null===(r=null===u.j||void 0===u.j?void 0:u.j.attributes)||void 0===r?void 0:r.img)||[],["style"]]})})).use(h.A),p=e=>{const{value:t="",type:n,onChange:r,customClassName:i="",placeholder:o=""}=e,{view:c,classname:l}=v[n];let s=`markdown ${l}`;return i&&(s+=` ${i}`),(0,a.jsx)(g.Ay,{className:s,readOnly:"render"===n,view:c,value:t,htmlClass:"markdown-body",renderHTML:e=>x(void 0,void 0,void 0,(function*(){return(yield y.process(e)).toString()})),onChange:e=>null===r||void 0===r?void 0:r(e.text),placeholder:o})}},5219:(e,t,n)=>{function r(e){const t=new Date,n=new Date(e),r=(t.getTime()-n.getTime())/1e3;return r<30?"\u521a\u521a":r<3600?Math.ceil(r/60)+"\u5206\u949f\u524d":r<86400?Math.ceil(r/3600)+"\u5c0f\u65f6\u524d":r<172800?"1\u5929\u524d":r<2678400?Math.ceil(r/3600/24)+"\u5929\u524d":t.getFullYear()===n.getFullYear()?`${n.getMonth()+1}\u6708${n.getDate()}\u65e5`:`${n.getFullYear()}\u5e74${n.getMonth()+1}\u6708${n.getDate()}\u65e5`}function a(e,t=!1){const n=new Date(e);return(new Date).getFullYear()===n.getFullYear()?`${n.getMonth()+1}\u6708${n.getDate()}\u65e5 ${t?` ${n.getHours()}:${n.getMinutes().toString().padStart(2,"0")}`:""}`:`${n.getFullYear()}\u5e74${n.getMonth()+1}\u6708${n.getDate()}\u65e5 ${t?` ${n.getHours()}:${n.getMinutes().toString().padStart(2,"0")}`:""}`}n.d(t,{D$:()=>r,Yq:()=>a})}}]);