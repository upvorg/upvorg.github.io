(self.webpackChunk_web_index=self.webpackChunk_web_index||[]).push([[155],{7700:function(R,N,l){"use strict";l.d(N,{Om:function(){return U},PX:function(){return _},in:function(){return H}});var a=Object.defineProperty,o=Object.defineProperties,b=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,M=(f,d,m)=>d in f?a(f,d,{enumerable:!0,configurable:!0,writable:!0,value:m}):f[d]=m,I=(f,d)=>{for(var m in d||(d={}))w.call(d,m)&&M(f,m,d[m]);if(y)for(var m of y(d))C.call(d,m)&&M(f,m,d[m]);return f},V=(f,d)=>o(f,b(d));const U=f=>{var d,m,Z,W,G,K;return V(I({},f),{enime:!0,ID:(d=f.anime)==null?void 0:d.slug,Cover:((m=f.anime)==null?void 0:m.coverImage)||"",Title:((Z=f.anime)==null?void 0:Z.title.native)||"",Content:f.description||"",Tags:"\u5176\u4ED6",Type:"video",CreatedAt:f.createdAt,UpdatedAt:f.updatedAt,Meta:{TitleJapanese:"",TitleRomanji:"",Genre:(W=f.genre)==null?void 0:W.toString(),Region:"enime",Episodes:13,IsEnd:2,PublishDate:"2015-01-01T08:00:00+08:00",UpdatedDate:null},Creator:{ID:1,Name:"enime.moe",Nickname:"enime",Avatar:"https://q1.qlogo.cn/g?b=qq&nk=7619376472&s=640",Bio:"\u8FD9\u4E2A\u4EBA\u5F88\u9177\uFF0C\u4EC0\u4E48\u90FD\u6CA1\u6709\u7559\u4E0B"},episodes:(K=(G=f.anime)==null?void 0:G.episodes)==null?void 0:K.map(E=>{var S;return{ID:E.id,Episode:E.number,Cover:E.image,Title:E.title,TitleJapanese:"",TitleRomanji:"",VideoUrl:"",Synopsis:"",Uid:1,Pid:(S=f.anime)==null?void 0:S.slug,CreatedAt:E.airedAt||E.createdAt,UpdatedAt:E.updatedAt}})})},_=(f=[])=>f.map(U),H=(f=[])=>f.map(d=>{var m;return V(I({},d),{enime:!0,ID:d==null?void 0:d.slug,Cover:(d==null?void 0:d.coverImage)||"",Title:(d==null?void 0:d.title.native)||"",Content:d.description||"",Tags:"\u5176\u4ED6",Type:"video",CreatedAt:d.createdAt,UpdatedAt:d.updatedAt,Meta:{TitleJapanese:"",TitleRomanji:"",Genre:(m=d.genre)==null?void 0:m.toString(),Region:"enime",Episodes:13,IsEnd:2,PublishDate:"2015-01-01T08:00:00+08:00",UpdatedDate:null},Creator:{ID:1,Name:"enime.moe",Nickname:"enime",Avatar:"https://q1.qlogo.cn/g?b=qq&nk=7619376472&s=640",Bio:"\u8FD9\u4E2A\u4EBA\u5F88\u9177\uFF0C\u4EC0\u4E48\u90FD\u6CA1\u6709\u7559\u4E0B"}})})},7769:function(R,N,l){"use strict";l.r(N),l.d(N,{default:function(){return lt}});var a=l(5281),o=l(9209),b=l(1306),y=l(3439),w=l(8920),C=l(4817),M=l(9954),I=Object.defineProperty,V=Object.defineProperties,U=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))H.call(t,n)&&d(e,n,t[n]);if(_)for(var n of _(t))f.call(t,n)&&d(e,n,t[n]);return e},Z=(e,t)=>V(e,U(t)),W=(e,t)=>{var n={};for(var r in e)H.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&_)for(var r of _(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n};const G=[(0,M.Z)({screenshot:!0,topSetting:y.tq,slideToSeek:"always",pictureInPicture:!0,keyboard:{global:!0},controlBar:{back:"fullscreen"}}),(0,w.Z)({matcher:(e,t)=>t.format==="m3u8"||(t.format==="auto"||typeof t.format=="undefined")&&/m3u8(#|\?|$)/i.test(t.src)})];var E=o.forwardRef((e,t)=>{var n=e,{playerIsPlaying:r,duration:s,onEvent:i,autoplay:g}=n,j=W(n,["playerIsPlaying","duration","onEvent","autoplay"]);const O=(0,o.useRef)(null);return(0,o.useImperativeHandle)(t,()=>O.current),(0,a.jsx)(C.ZP,Z(m({ref:O},j),{plugins:(0,o.useMemo)(()=>G,[]),onEvent:i,autoplay:g,duration:s,playing:r}))}),S=l(5877),J=l(8007),Ce=l(6849),$=l.n(Ce),Oe=l(6309);const se="@player/";function Pe(e){const t=(0,o.useMemo)(()=>{const g=new URLSearchParams(window.location.search),j={id:e,duration:0,episode:g.has("v")?+g.get("v")-1:0,time:0};return g.has("v")?j:JSON.parse(localStorage.getItem(se+e)||"null")||j},[]),[n,r]=(0,o.useState)(t.episode),s=(0,o.useCallback)(g=>{localStorage.setItem(se+e,JSON.stringify(g))},[]),i=(0,o.useCallback)((g,j,O)=>{const x=j==n;s({id:g,episode:j,duration:O,time:Date.now()}),x||r(j)},[n]);return[n,t.duration,i]}var we=l(1338),Ee=l(3129),Ne=l(1910),Ie=l(2547),Se=l(3661),Ct={};function Ae({post:e,show:t,onChange:n}){const{Title:r,Content:s,IsOriginal:i,Tags:g}=e,{Region:j,Genre:O,IsEnd:x,UpdatedDate:z,PublishDate:T}=e.Meta||{};return(0,a.jsxs)("div",{className:$()("PlayerInfo modal",{"is-active":t}),children:[(0,a.jsx)("div",{className:"modal-background",onClick:()=>n(!1)}),(0,a.jsxs)("div",{className:"modal-card",children:[(0,a.jsx)("button",{className:"delete","aria-label":"close",onClick:()=>n(!1)}),(0,a.jsxs)("section",{className:"modal-card-body",children:[(0,a.jsxs)("div",{className:"post-head",children:[(0,a.jsx)("div",{children:(0,a.jsx)(Ie.Z,{ratio:3/4,mw:"200px",children:(0,a.jsx)("img",{src:e.Cover,alt:e.Title})})}),(0,a.jsxs)("div",{className:"post-info",children:[(0,a.jsx)("h3",{className:"title",children:r}),(0,a.jsxs)("div",{className:"post-info-item is-h",children:[(0,a.jsxs)("div",{className:"post-info-item",children:[(0,a.jsx)("label",{className:"name",children:"\u5730\u533A"}),(0,a.jsx)("div",{className:"body",children:j||"-"})]}),(0,a.jsxs)("div",{className:"post-info-item",children:[(0,a.jsx)("label",{className:"name",children:"\u7C7B\u578B"}),(0,a.jsx)("div",{className:"body",children:O})]})]}),(0,a.jsxs)("div",{className:"post-info-item is-h",children:[(0,a.jsxs)("div",{className:"post-info-item",children:[(0,a.jsx)("label",{className:"name",children:"\u5E74\u4EFD"}),(0,a.jsx)("div",{className:"body",children:T&&new Date(T).getFullYear()+" \u5E74"||"-"})]}),(0,a.jsxs)("div",{className:"post-info-item",children:[(0,a.jsx)("label",{className:"name",children:"\u5B8C\u7ED3"}),(0,a.jsx)("div",{className:"body",children:x==2?"\u662F":"\u5426"})]})]}),(0,a.jsxs)("div",{className:"post-info-item",children:[(0,a.jsx)("label",{className:"name",children:"\u66F4\u65B0"}),(0,a.jsx)("div",{className:"body",children:z&&`\u6BCF${S.zA[new Date(z).getDay()]} ${new Date(z).getHours()} \u70B9\u66F4\u65B0`||"-"})]}),(0,a.jsxs)("div",{className:"post-info-item tags",children:[i==2&&(0,a.jsx)("div",{className:"body tag is-primary is-light",children:"\u539F\u521B"}),g&&g.split(" ").map(h=>(0,a.jsx)("div",{className:"body tag is-primary is-light",children:h},h))]})]})]}),(0,a.jsx)(Se.U,{type:"render",value:s||"#### \u6682\u65E0\u8BE6\u60C5"})]})]})]})}var De=l(7700),ie,Fe=["title","titleId"];function X(){return X=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X.apply(this,arguments)}function Le(e,t){if(e==null)return{};var n=Te(e,t),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Te(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,i;for(i=0;i<r.length;i++)s=r[i],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}var Be=function(t,n){var r=t.title,s=t.titleId,i=Le(t,Fe);return o.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",ref:n,"aria-labelledby":s},i),r?o.createElement("title",{id:s},r):null,ie||(ie=o.createElement("path",{d:"M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"})))},Re=(0,o.forwardRef)(Be),Ot=l.p+"static/media/fa-eye.6081475b9bda458f2aa19687000650a7.svg",oe,Me=["title","titleId"];function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q.apply(this,arguments)}function _e(e,t){if(e==null)return{};var n=ke(e,t),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ke(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,i;for(i=0;i<r.length;i++)s=r[i],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}var $e=function(t,n){var r=t.title,s=t.titleId,i=_e(t,Me);return o.createElement("svg",q({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:n,"aria-labelledby":s},i),r?o.createElement("title",{id:s},r):null,oe||(oe=o.createElement("path",{d:"M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"})))},ze=(0,o.forwardRef)($e),Pt=l.p+"static/media/fa-heart.877791eb3fcf005481f684a0ecd27643.svg",le,Ve=["title","titleId"];function ee(){return ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ee.apply(this,arguments)}function Ue(e,t){if(e==null)return{};var n=He(e,t),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function He(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,i;for(i=0;i<r.length;i++)s=r[i],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}var Ze=function(t,n){var r=t.title,s=t.titleId,i=Ue(t,Ve);return o.createElement("svg",ee({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:n,"aria-labelledby":s},i),r?o.createElement("title",{id:s},r):null,le||(le=o.createElement("path",{d:"M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"})))},We=(0,o.forwardRef)(Ze),wt=l.p+"static/media/fa-info-circle.98be1242692ee31e98b17205bb5c9aaa.svg",ce,Ge=["title","titleId"];function te(){return te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},te.apply(this,arguments)}function Je(e,t){if(e==null)return{};var n=Ye(e,t),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ye(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,i;for(i=0;i<r.length;i++)s=r[i],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}var Qe=function(t,n){var r=t.title,s=t.titleId,i=Je(t,Ge);return o.createElement("svg",te({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:n,"aria-labelledby":s},i),r?o.createElement("title",{id:s},r):null,ce||(ce=o.createElement("path",{d:"M511.1 63.1v287.1c0 35.25-28.75 63.1-64 63.1h-144l-124.9 93.68c-7.875 5.75-19.12 .0497-19.12-9.7v-83.98h-96c-35.25 0-64-28.75-64-63.1V63.1c0-35.25 28.75-63.1 64-63.1h384C483.2 0 511.1 28.75 511.1 63.1z"})))},Ke=(0,o.forwardRef)(Qe),Et=l.p+"static/media/fa-message.2c4915772cd73f0e62933b66ee503fde.svg",de,Xe=["title","titleId"];function ae(){return ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ae.apply(this,arguments)}function qe(e,t){if(e==null)return{};var n=et(e,t),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function et(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,i;for(i=0;i<r.length;i++)s=r[i],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}var tt=function(t,n){var r=t.title,s=t.titleId,i=qe(t,Xe);return o.createElement("svg",ae({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",ref:n,"aria-labelledby":s},i),r?o.createElement("title",{id:s},r):null,de||(de=o.createElement("path",{d:"M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"})))},at=(0,o.forwardRef)(tt),Nt=l.p+"static/media/fa-star.6b2027c0ff37a21f8f9b4ce362121a79.svg",It={},nt=Object.defineProperty,rt=Object.defineProperties,st=Object.getOwnPropertyDescriptors,ue=Object.getOwnPropertySymbols,it=Object.prototype.hasOwnProperty,ot=Object.prototype.propertyIsEnumerable,fe=(e,t,n)=>t in e?nt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=(e,t)=>{for(var n in t||(t={}))it.call(t,n)&&fe(e,n,t[n]);if(ue)for(var n of ue(t))ot.call(t,n)&&fe(e,n,t[n]);return e},D=(e,t)=>rt(e,st(t));function lt({id:e}){var t,n;const[r,s]=(0,o.useState)(!1),[i,g]=(0,o.useState)(!1),[j,O]=(0,o.useState)(!1),[x,z,T]=Pe(e),[h,F]=(0,o.useState)({}),[L,pe]=(0,o.useState)([]),B=(0,o.useRef)(null),[ve,ct]=(0,o.useState)(!1),[dt,me]=(0,o.useState)({poster:"https://i.gifer.com/BxQY.gif",title:"\u5C11\u5973\u7948\u7977\u4E2D ..."}),[ut,ft]=(0,o.useState)(!0);(0,o.useEffect)(()=>{l(4953)(`./${e}.json`).catch(()=>{throw ct(!0),new Error("")}).then(c=>{if(!c.data||c.data.Type!=="video"){J.ZP.error("\u89C6\u9891\u4E0D\u89C1\u4E86",{duration:9e4});return}c.err||(c.data&&F(c.data),c.data.IsLiked==2&&g(!0),c.data.IsCollected==2&&O(!0),l(2341)(`./${e}.json`).then(u=>{u.data.sort((p,v)=>p.Episode-v.Episode),u.data&&pe(u.data),u.data.length<=x&&T(e,0,0)}))})},[]),(0,o.useEffect)(()=>{var c;(c=L[x])!=null&&c.VideoUrl&&me({title:L[x].Title||h.Title,src:L[x].VideoUrl,format:e=="iptv"?"m3u8":"auto",poster:"https://i.gifer.com/BxQY.gif"})},[h,x,L]),(0,o.useEffect)(()=>{var c,u;if(!ve)return;(u=(c=B.current)==null?void 0:c.context.ui)==null||u.menu.unregister("Source");const p=fetch(`https://api.enime.moe/view/${e}/${x+1}`).then(v=>v.json()).then(De.Om).then(v=>{var je,xe;F(v),pe(v.episodes);function ye(k){return fetch(`https://api.enime.moe/source/${k}`).then(P=>P.json()).then(P=>{var be;return P.subtitle&&B.current.on("loadedmetadata",()=>{B.current.context.ui.subtitle.updateSource([{default:!0,src:P.subtitle,name:"English"}])},{once:!0}),D(A({},P),{title:v.title||v.Title,poster:h.image||((be=h.anime)==null?void 0:be.coverImage),src:`https://cdn.nade.me/redirect?url=${P.url}`})})}return v.sources.length>1&&((xe=(je=B.current)==null?void 0:je.context.ui)==null||xe.menu.register({name:"Source",position:y.tq?"top":"bottom",icon:'<svg viewBox="0 0 1024 1024" style="transform: scale(0.9);"><path d="M554.666667 597.333333c-143.36 0-190.293333 57.6-205.653334 95.573334C394.666667 712.533333 426.666667 757.76 426.666667 810.666667a128 128 0 0 1-128 128 128 128 0 0 1-128-128c0-55.893333 35.413333-103.253333 85.333333-120.746667V334.08A127.573333 127.573333 0 0 1 170.666667 213.333333a128 128 0 0 1 128-128 128 128 0 0 1 128 128c0 55.893333-35.413333 103.253333-85.333334 120.746667v225.706667c37.546667-27.733333 92.16-47.786667 170.666667-47.786667 113.92 0 151.893333-57.173333 164.266667-95.146667A128.256 128.256 0 0 1 597.333333 298.666667a128 128 0 0 1 128-128 128 128 0 0 1 128 128c0 57.173333-37.546667 106.666667-89.173333 122.026666C753.066667 481.706667 711.68 597.333333 554.666667 597.333333m-256 170.666667a42.666667 42.666667 0 0 0-42.666667 42.666667 42.666667 42.666667 0 0 0 42.666667 42.666666 42.666667 42.666667 0 0 0 42.666666-42.666666 42.666667 42.666667 0 0 0-42.666666-42.666667M298.666667 170.666667a42.666667 42.666667 0 0 0-42.666667 42.666666 42.666667 42.666667 0 0 0 42.666667 42.666667 42.666667 42.666667 0 0 0 42.666666-42.666667 42.666667 42.666667 0 0 0-42.666666-42.666666m426.666666 85.333333a42.666667 42.666667 0 0 0-42.666666 42.666667 42.666667 42.666667 0 0 0 42.666666 42.666666 42.666667 42.666667 0 0 0 42.666667-42.666666 42.666667 42.666667 0 0 0-42.666667-42.666667z" fill="#ffffff" p-id="7015"></path></svg>',children:v.sources.map((k,P)=>({name:k.url.includes("zoro")?"ZORO":"GOGO",default:P==v.sources.length-1,value:k.id})),onChange({value:k}){var P;(P=B.current)==null||P.changeSource(ye(k))}})),ye(v.sources.at(-1).id)});me(p)},[ve,x]),(0,o.useEffect)(()=>{var c;y.tq||(c=B.current)==null||c.context.ui.menu.register({name:"Toggle Ep-Bar",position:"top",icon:'<svg style="transform: scale(1.2);" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M288 416v320h448V416H288z m0-64h448V288H288v64zM256 224h512a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H256a32 32 0 0 1-32-32V256a32 32 0 0 1 32-32z m384 224a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0v-192a32 32 0 0 1 32-32z"></path></svg>',onClick(u){ft(p=>(p?u.style.opacity="0.4":u.style.opacity="1",!p))}})},[]);const pt=(0,o.useCallback)(()=>{const c=i?-1:1,u=h.LikesCount||0;g(p=>!p),F(p=>D(A({},p),{LikesCount:u+c})),(i?S.od.delete(`/like/post/${e}`):S.od.post(`/like/post/${e}`)).then(p=>{p.err?(g(v=>!v),F(v=>D(A({},v),{LikesCount:v.LikesCount-c}))):i?J.ZP.error(`\u4F60\u6240\u70ED\u7231\u7684\uFF0C\u5C31\u662F\u4F60\u7684\u751F\u6D3B\u3002\r
 				--------?`):J.ZP.success("nice!")}).catch(()=>{setTimeout(()=>{g(p=>!p),F(p=>D(A({},p),{LikesCount:p.LikesCount-c}))},300)})},[h,i]),vt=(0,o.useCallback)(()=>{const c=j?-1:1;O(u=>!u),F(u=>D(A({},u),{CollectionCount:u.CollectionCount+c})),(j?S.od.delete(`/collect/post/${e}`):S.od.post(`/collect/post/${e}`)).then(u=>{u.err?(O(p=>!p),F(p=>D(A({},p),{CollectionCount:p.CollectionCount-c}))):j||J.ZP.success("nice!")}).catch(()=>{setTimeout(()=>{O(u=>!u),F(u=>D(A({},u),{CollectionCount:u.CollectionCount-1}))},300)})},[h,j]),ne=(0,o.useRef)(x);ne.current=x;const mt=({type:c,payload:u})=>{var p;const v=(p=u==null?void 0:u.target)==null?void 0:p.currentTime;c=="timeupdate"?v<1||T(e,ne.current,v*1e3):c=="ended"&&T(e,ne.current+1,0)},{Title:re,Creator:Y,Tags:Q,IsOriginal:ht,Hits:gt,CommentCount:jt,LikesCount:xt,CollectionCount:yt,Content:he,Meta:ge,Cover:bt}=h;return(0,a.jsxs)("div",{className:$()("player",{"no-side":!ut}),children:[(0,a.jsxs)(Oe.q,{children:[(0,a.jsx)("title",{children:`${re||""} - UPV - free animes no ads`}),(0,a.jsx)("meta",{name:"description",content:he==null?void 0:he.substring(0,200)}),(0,a.jsx)("meta",{name:"keywords",content:`${re},${ge==null?void 0:ge.Genre},${Q==null?void 0:Q.split(" ")}`}),(0,a.jsx)("meta",{name:"author",content:Y==null?void 0:Y.Nickname}),(0,a.jsx)("meta",{property:"og:title",content:`${re} - UPV - free animes no ads`}),(0,a.jsx)("meta",{property:"og:type",content:"video"}),(0,a.jsx)("meta",{property:"og:image",content:bt}),(0,a.jsx)("meta",{property:"og:url",content:location.origin+location.pathname})]}),(0,a.jsxs)("div",{className:"player-header",children:[(0,a.jsx)("div",{className:"player-header__player",children:(0,a.jsx)(E,{ref:B,autoplay:!0,source:dt,onEvent:mt,duration:z,isLive:e=="iptv"})}),(0,a.jsx)("div",{className:"player-header__r",children:(0,a.jsxs)("div",{className:"eplist_module",children:[(0,a.jsxs)("div",{className:"list-title",children:[(0,a.jsx)("h4",{children:"\u64AD\u653E\u5217\u8868"}),(0,a.jsxs)("span",{className:"ep-list-progress",children:[L.length>0?x+1:0,"/",L.length]})]}),(0,a.jsx)("div",{className:"list-wrapper",children:L.length>0?(0,a.jsx)("ul",{children:L.map((c,u)=>(0,a.jsx)("a",{children:(0,a.jsx)("li",D(A({className:$()("list-item has-tooltip-bottom",{cursor:u===x}),onClick:()=>T(e,u,0),title:c.Title},c.Title&&{"data-tooltip":c.Title}),{children:(0,a.jsxs)("span",{children:[" ",c.Episode]})}))},u))}):(0,a.jsx)("span",{className:"empty",children:"\u6682\u65E0\u89C6\u9891"})})]})})]}),(0,a.jsxs)("div",{className:"video-actions",children:[(0,a.jsxs)("div",{className:"icon-text",children:[(0,a.jsx)("span",{className:"icon",children:(0,a.jsx)(Re,{})}),(0,a.jsx)("span",{className:"text",children:gt||"-"})]}),(0,a.jsxs)("div",{className:"icon-text",children:[(0,a.jsx)("span",{className:"icon",children:(0,a.jsx)(Ke,{})}),(0,a.jsx)("span",{className:"text",children:jt||"-"})]}),(0,a.jsxs)("div",{className:$()("icon-text",{"--active":i}),onClick:pt,children:[(0,a.jsx)("span",{className:"icon",children:(0,a.jsx)(ze,{})}),(0,a.jsx)("span",{className:"text",children:xt||"-"})]}),(0,a.jsxs)("div",{className:$()("icon-text",{"--active":j}),onClick:vt,children:[(0,a.jsx)("span",{className:"icon",children:(0,a.jsx)(at,{})}),(0,a.jsx)("span",{className:"text",children:yt||"-"})]})]}),h.ID?(0,a.jsxs)("div",{className:"video-info-wrapper",children:[(0,a.jsxs)("div",{className:"video-info",children:[(0,a.jsx)("img",{className:"video-info__avatar",src:((t=h.Creator)==null?void 0:t.Avatar)||"https://uplife/ic_launcher_round.png",alt:(n=h.Creator)==null?void 0:n.Nickname}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("h3",{className:"video-info__title",onClick:()=>s(!0),children:[h.Title||"-",(0,a.jsx)("span",{className:"icon has-text-info",children:(0,a.jsx)(We,{})})]}),(0,a.jsxs)("div",{className:"video-meta",children:[(0,a.jsx)("span",{children:(Y==null?void 0:Y.Nickname)||"-"}),(0,a.jsxs)("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6827",width:"200",height:"200",children:[(0,a.jsx)("defs",{}),(0,a.jsx)("path",{d:"M167.024 512a344.976 344.976 0 1 1 689.952 0 344.976 344.976 0 0 1-690 0zM512 106.976a405.024 405.024 0 1 0 0 810.048 405.024 405.024 0 0 0 0-810z m30 235.008a30 30 0 1 0-60 0V512c0 7.968 3.168 15.6 8.784 21.216l120 120a30 30 0 1 0 42.432-42.432L542 499.52V341.984z",fill:"#9499A0","p-id":"6828"})]}),(0,a.jsx)("span",{children:h.CreatedAt?(0,b.wb)(h.CreatedAt):"-"})]})]})]}),(0,a.jsx)(Ne.$,{tags:Q?Q.trim().split(" ").map(c=>({title:c,href:`/pv/tag?type=video&title=${c}`})).concat(ht==2?{title:"\u539F\u521B",href:"/pv/tag?type=video&is_original=2&title=\u539F\u521B"}:[]):[]})]}):(0,a.jsx)(Ee.iR,{className:"video-info__skeleton",height:"200px"}),(0,a.jsx)(we.Z,{id:e}),(0,a.jsx)(Ae,{post:h,show:r,onChange:s})]})}},2547:function(R,N,l){"use strict";l.d(N,{Z:function(){return y}});var a=l(5281),o={},y=w=>{const{children:C,ratio:M,mw:I}=w;return(0,a.jsx)("div",{className:"aspect-ratio",style:{width:typeof I=="string"?I:`${I}px`},children:(0,a.jsx)("div",{className:"aspect-ratio__fill",style:{paddingTop:`${1/M*100}%`},children:C})})}},4953:function(R,N,l){var a={"./0.json":[8817,784],"./1.json":[7754,754],"./10.json":[6534,534],"./131478f2-31cd-446a-9cb2-15158b8c3efe.json":[9955,955],"./2.json":[5927,927],"./3.json":[1553,553],"./4.json":[5264,264],"./7.json":[1081,81],"./77745a95-b5db-4c0b-ad08-0a55a6e70f49.json":[7515,515],"./9.json":[3520,520],"./a7a1345e-1bc8-4793-9650-a0ee89b6d74b.json":[8085,85],"./b2cf7c39-3f62-45c0-bbe1-a9522ff24cb7.json":[9726,726]};function o(b){if(!l.o(a,b))return Promise.resolve().then(function(){var C=new Error("Cannot find module '"+b+"'");throw C.code="MODULE_NOT_FOUND",C});var y=a[b],w=y[0];return l.e(y[1]).then(function(){return l.t(w,19)})}o.keys=function(){return Object.keys(a)},o.id=4953,R.exports=o},2341:function(R,N,l){var a={"./0.json":[7894,360],"./1.json":[7331,331],"./10.json":[5374,374],"./131478f2-31cd-446a-9cb2-15158b8c3efe.json":[7418,418],"./2.json":[1526,526],"./3.json":[5424,424],"./4.json":[8525,525],"./7.json":[4941,941],"./77745a95-b5db-4c0b-ad08-0a55a6e70f49.json":[4063,63],"./9.json":[2807,807],"./b2cf7c39-3f62-45c0-bbe1-a9522ff24cb7.json":[6134,134]};function o(b){if(!l.o(a,b))return Promise.resolve().then(function(){var C=new Error("Cannot find module '"+b+"'");throw C.code="MODULE_NOT_FOUND",C});var y=a[b],w=y[0];return l.e(y[1]).then(function(){return l.t(w,19)})}o.keys=function(){return Object.keys(a)},o.id=2341,R.exports=o}}]);
