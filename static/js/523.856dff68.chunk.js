(self.webpackChunk_web_index=self.webpackChunk_web_index||[]).push([[523],{9476:function(T,w,l){"use strict";l.d(w,{Om:function(){return E},PX:function(){return B},in:function(){return J}});var e=Object.defineProperty,o=Object.defineProperties,x=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,R=(f,u,p)=>u in f?e(f,u,{enumerable:!0,configurable:!0,writable:!0,value:p}):f[u]=p,F=(f,u)=>{for(var p in u||(u={}))y.call(u,p)&&R(f,p,u[p]);if(b)for(var p of b(u))C.call(u,p)&&R(f,p,u[p]);return f},$=(f,u)=>o(f,x(u));const E=f=>{var u,p,k,U,z,V;return $(F({},f),{enime:!0,ID:(u=f.anime)==null?void 0:u.slug,Cover:((p=f.anime)==null?void 0:p.coverImage)||"",Title:((k=f.anime)==null?void 0:k.title.native)||"",Content:f.description||"",Tags:"\u5176\u4ED6",Type:"video",CreatedAt:f.createdAt,UpdatedAt:f.updatedAt,Meta:{TitleJapanese:"",TitleRomanji:"",Genre:(U=f.genre)==null?void 0:U.toString(),Region:"enime",Episodes:13,IsEnd:2,PublishDate:"2015-01-01T08:00:00+08:00",UpdatedDate:null},Creator:{ID:1,Name:"enime.moe",Nickname:"enime",Avatar:"https://q1.qlogo.cn/g?b=qq&nk=7619376472&s=640",Bio:"\u8FD9\u4E2A\u4EBA\u5F88\u9177\uFF0C\u4EC0\u4E48\u90FD\u6CA1\u6709\u7559\u4E0B"},episodes:(V=(z=f.anime)==null?void 0:z.episodes)==null?void 0:V.map(O=>{var W;return{ID:O.id,Episode:O.number,Cover:O.image,Title:O.title,TitleJapanese:"",TitleRomanji:"",VideoUrl:"",Synopsis:"",Uid:1,Pid:(W=f.anime)==null?void 0:W.slug,CreatedAt:O.airedAt||O.createdAt,UpdatedAt:O.updatedAt}})})},B=f=>f.map(E),J=f=>f.map(u=>{var p;return $(F({},u),{enime:!0,ID:u==null?void 0:u.slug,Cover:(u==null?void 0:u.coverImage)||"",Title:(u==null?void 0:u.title.native)||"",Content:u.description||"",Tags:"\u5176\u4ED6",Type:"video",CreatedAt:u.createdAt,UpdatedAt:u.updatedAt,Meta:{TitleJapanese:"",TitleRomanji:"",Genre:(p=u.genre)==null?void 0:p.toString(),Region:"enime",Episodes:13,IsEnd:2,PublishDate:"2015-01-01T08:00:00+08:00",UpdatedDate:null},Creator:{ID:1,Name:"enime.moe",Nickname:"enime",Avatar:"https://q1.qlogo.cn/g?b=qq&nk=7619376472&s=640",Bio:"\u8FD9\u4E2A\u4EBA\u5F88\u9177\uFF0C\u4EC0\u4E48\u90FD\u6CA1\u6709\u7559\u4E0B"}})})},7748:function(T,w,l){"use strict";l.r(w),l.d(w,{default:function(){return _e}});var e=l(3148),o=l(5168),x=l(4247),b=l(7476),y=l(5561),C=l(2339);const R=[(0,b.Z)(),(0,y.Z)({matcher:(t,a)=>a.format==="m3u8"||(a.format==="auto"||typeof a.format=="undefined")&&/m3u8(#|\?|$)/i.test(a.src)})];var $=o.forwardRef(({playerIsPlaying:t,src:a,poster:s,duration:n,onEvent:r},i)=>{const m=(0,o.useRef)(null);return(0,o.useImperativeHandle)(i,()=>m.current),(0,e.jsx)(C.ZP,{ref:m,playing:t,plugins:R,source:{src:a,poster:s},duration:n,onEvent:r})}),E=l(2787),B=l(3621),J=l(785),f=l.n(J),u=l(3156);const p="@player/";function k(t){const a=(0,o.useMemo)(()=>{const m=new URLSearchParams(window.location.search),j={id:t,duration:0,episode:m.has("v")?+m.get("v")-1:0,time:0};return m.has("v")?j:JSON.parse(localStorage.getItem(p+t)||"null")||j},[]),[s,n]=(0,o.useState)(a.episode),r=(0,o.useCallback)(m=>{localStorage.setItem(p+t,JSON.stringify(m))},[]),i=(0,o.useCallback)((m,j,I)=>{const g=j==s;r({id:m,episode:j,duration:I,time:Date.now()}),g||n(j)},[s]);return[s,a.duration,i]}var U=l(818),z=l(882),V=l(3785),O=l(6094),W=l(7443),nt={};function pe({post:t,show:a,onChange:s}){const{Title:n,Content:r,IsOriginal:i,Tags:m}=t,{Region:j,Genre:I,IsEnd:g,UpdatedDate:M,PublishDate:L}=t.Meta||{};return(0,e.jsxs)("div",{className:f()("PlayerInfo modal",{"is-active":a}),children:[(0,e.jsx)("div",{className:"modal-background",onClick:()=>s(!1)}),(0,e.jsxs)("div",{className:"modal-card",children:[(0,e.jsx)("button",{className:"delete","aria-label":"close",onClick:()=>s(!1)}),(0,e.jsxs)("section",{className:"modal-card-body",children:[(0,e.jsxs)("div",{className:"post-head",children:[(0,e.jsx)("div",{children:(0,e.jsx)(O.Z,{ratio:3/4,mw:"200px",children:(0,e.jsx)("img",{src:t.Cover,alt:t.Title})})}),(0,e.jsxs)("div",{className:"post-info",children:[(0,e.jsx)("h3",{className:"title",children:n}),(0,e.jsxs)("div",{className:"post-info-item is-h",children:[(0,e.jsxs)("div",{className:"post-info-item",children:[(0,e.jsx)("label",{className:"name",children:"\u5730\u533A"}),(0,e.jsx)("div",{className:"body",children:j||"-"})]}),(0,e.jsxs)("div",{className:"post-info-item",children:[(0,e.jsx)("label",{className:"name",children:"\u7C7B\u578B"}),(0,e.jsx)("div",{className:"body",children:I})]})]}),(0,e.jsxs)("div",{className:"post-info-item is-h",children:[(0,e.jsxs)("div",{className:"post-info-item",children:[(0,e.jsx)("label",{className:"name",children:"\u5E74\u4EFD"}),(0,e.jsx)("div",{className:"body",children:L&&new Date(L).getFullYear()+" \u5E74"||"-"})]}),(0,e.jsxs)("div",{className:"post-info-item",children:[(0,e.jsx)("label",{className:"name",children:"\u5B8C\u7ED3"}),(0,e.jsx)("div",{className:"body",children:g==2?"\u662F":"\u5426"})]})]}),(0,e.jsxs)("div",{className:"post-info-item",children:[(0,e.jsx)("label",{className:"name",children:"\u66F4\u65B0"}),(0,e.jsx)("div",{className:"body",children:M&&`\u6BCF${E.zA[new Date(M).getDay()]} ${new Date(M).getHours()} \u70B9\u66F4\u65B0`||"-"})]}),(0,e.jsxs)("div",{className:"post-info-item tags",children:[i==2&&(0,e.jsx)("div",{className:"body tag is-primary is-light",children:"\u539F\u521B"}),m&&m.split(" ").map(h=>(0,e.jsx)("div",{className:"body tag is-primary is-light",children:h},h))]})]})]}),(0,e.jsx)(W.U,{type:"render",value:r||"#### \u6682\u65E0\u8BE6\u60C5"})]})]})]})}var me=l(9476),ae,he=["title","titleId"];function Y(){return Y=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},Y.apply(this,arguments)}function je(t,a){if(t==null)return{};var s=ge(t,a),n,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],!(a.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,n)||(s[n]=t[n]))}return s}function ge(t,a){if(t==null)return{};var s={},n=Object.keys(t),r,i;for(i=0;i<n.length;i++)r=n[i],!(a.indexOf(r)>=0)&&(s[r]=t[r]);return s}var xe=function(a,s){var n=a.title,r=a.titleId,i=je(a,he);return o.createElement("svg",Y({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",ref:s,"aria-labelledby":r},i),n?o.createElement("title",{id:r},n):null,ae||(ae=o.createElement("path",{d:"M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"})))},be=(0,o.forwardRef)(xe),st=l.p+"static/media/fa-eye.6081475b9bda458f2aa19687000650a7.svg",ne,Ce=["title","titleId"];function K(){return K=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},K.apply(this,arguments)}function ye(t,a){if(t==null)return{};var s=Oe(t,a),n,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],!(a.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,n)||(s[n]=t[n]))}return s}function Oe(t,a){if(t==null)return{};var s={},n=Object.keys(t),r,i;for(i=0;i<n.length;i++)r=n[i],!(a.indexOf(r)>=0)&&(s[r]=t[r]);return s}var we=function(a,s){var n=a.title,r=a.titleId,i=ye(a,Ce);return o.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:s,"aria-labelledby":r},i),n?o.createElement("title",{id:r},n):null,ne||(ne=o.createElement("path",{d:"M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"})))},Ee=(0,o.forwardRef)(we),rt=l.p+"static/media/fa-heart.877791eb3fcf005481f684a0ecd27643.svg",se,Ne=["title","titleId"];function X(){return X=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},X.apply(this,arguments)}function Pe(t,a){if(t==null)return{};var s=Ie(t,a),n,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],!(a.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,n)||(s[n]=t[n]))}return s}function Ie(t,a){if(t==null)return{};var s={},n=Object.keys(t),r,i;for(i=0;i<n.length;i++)r=n[i],!(a.indexOf(r)>=0)&&(s[r]=t[r]);return s}var Se=function(a,s){var n=a.title,r=a.titleId,i=Pe(a,Ne);return o.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:s,"aria-labelledby":r},i),n?o.createElement("title",{id:r},n):null,se||(se=o.createElement("path",{d:"M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"})))},Ae=(0,o.forwardRef)(Se),it=l.p+"static/media/fa-info-circle.98be1242692ee31e98b17205bb5c9aaa.svg",re,Fe=["title","titleId"];function Q(){return Q=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},Q.apply(this,arguments)}function Le(t,a){if(t==null)return{};var s=De(t,a),n,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],!(a.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,n)||(s[n]=t[n]))}return s}function De(t,a){if(t==null)return{};var s={},n=Object.keys(t),r,i;for(i=0;i<n.length;i++)r=n[i],!(a.indexOf(r)>=0)&&(s[r]=t[r]);return s}var Te=function(a,s){var n=a.title,r=a.titleId,i=Le(a,Fe);return o.createElement("svg",Q({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:s,"aria-labelledby":r},i),n?o.createElement("title",{id:r},n):null,re||(re=o.createElement("path",{d:"M511.1 63.1v287.1c0 35.25-28.75 63.1-64 63.1h-144l-124.9 93.68c-7.875 5.75-19.12 .0497-19.12-9.7v-83.98h-96c-35.25 0-64-28.75-64-63.1V63.1c0-35.25 28.75-63.1 64-63.1h384C483.2 0 511.1 28.75 511.1 63.1z"})))},Re=(0,o.forwardRef)(Te),ot=l.p+"static/media/fa-message.2c4915772cd73f0e62933b66ee503fde.svg",ie,Be=["title","titleId"];function q(){return q=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},q.apply(this,arguments)}function Me(t,a){if(t==null)return{};var s=$e(t,a),n,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],!(a.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,n)||(s[n]=t[n]))}return s}function $e(t,a){if(t==null)return{};var s={},n=Object.keys(t),r,i;for(i=0;i<n.length;i++)r=n[i],!(a.indexOf(r)>=0)&&(s[r]=t[r]);return s}var ke=function(a,s){var n=a.title,r=a.titleId,i=Me(a,Be);return o.createElement("svg",q({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",ref:s,"aria-labelledby":r},i),n?o.createElement("title",{id:r},n):null,ie||(ie=o.createElement("path",{d:"M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"})))},Ue=(0,o.forwardRef)(ke),lt=l.p+"static/media/fa-star.6b2027c0ff37a21f8f9b4ce362121a79.svg",ct={},ze=Object.defineProperty,Ve=Object.defineProperties,We=Object.getOwnPropertyDescriptors,oe=Object.getOwnPropertySymbols,Ze=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable,le=(t,a,s)=>a in t?ze(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,N=(t,a)=>{for(var s in a||(a={}))Ze.call(a,s)&&le(t,s,a[s]);if(oe)for(var s of oe(a))He.call(a,s)&&le(t,s,a[s]);return t},P=(t,a)=>Ve(t,We(a));function _e({id:t}){var a,s;const[n,r]=(0,o.useState)(!1),[i,m]=(0,o.useState)(!1),[j,I]=(0,o.useState)(!1),[g,M,L]=k(t),[h,S]=(0,o.useState)({}),[D,ce]=(0,o.useState)([]),Z=(0,o.useRef)(null);let[de,Ge]=(0,o.useState)(!1);const[H,ue]=(0,o.useState)();(0,o.useEffect)(()=>{l(4953)(`./${t}.json`).catch(()=>{throw Ge(!0),new Error("")}).then(c=>{if(!c.data||c.data.Type!=="video"){B.ZP.error("\u89C6\u9891\u4E0D\u89C1\u4E86",{duration:9e4});return}c.err||(c.data&&S(c.data),c.data.IsLiked==2&&m(!0),c.data.IsCollected==2&&I(!0),l(2341)(`./${t}.json`).then(d=>{d.data.sort((v,A)=>v.Episode-A.Episode),d.data&&ce(d.data),d.data.length<=g&&L(t,0,0)}))})},[]),(0,o.useEffect)(()=>{var c;(c=D[g])!=null&&c.VideoUrl&&ue({url:D[g].VideoUrl})},[g,D]),(0,o.useEffect)(()=>{!de||(Z.current.isSourceChanging=!0,Z.current.emit("videosourcechange"),fetch(`https://api.enime.moe/view/${t}/${g+1}`).then(c=>c.json()).then(me.Om).then(c=>{S(c),ce(c.episodes),fetch(`https://api.enime.moe/source/${c.sources[0].id}`).then(d=>d.json()).then(d=>{var v;ue(P(N({},d),{url:c.sources[0].url.includes("zoro")?`https://cors.proxy.consumet.org/${d.url}`:d.url})),d.subtitle&&((v=Z.current)==null||v.plugins.ui.subtitle.updateSource([{default:!0,src:H.subtitle,name:"English"}]))})}))},[de,g]);const Je=(0,o.useCallback)(()=>{const c=i?-1:1,d=h.LikesCount||0;m(v=>!v),S(v=>P(N({},v),{LikesCount:d+c})),(i?E.od.delete(`/like/post/${t}`):E.od.post(`/like/post/${t}`)).then(v=>{v.err?(m(A=>!A),S(A=>P(N({},A),{LikesCount:d-c}))):i?B.ZP.error(`\u4F60\u6240\u70ED\u7231\u7684\uFF0C\u5C31\u662F\u4F60\u7684\u751F\u6D3B\u3002\r
 				--------?`):B.ZP.success("nice!")}).catch(()=>{setTimeout(()=>{m(v=>!v),S(v=>P(N({},v),{LikesCount:d-c}))},300)})},[h,i]),Ye=(0,o.useCallback)(()=>{const c=j?-1:1;I(d=>!d),S(d=>P(N({},d),{CollectionCount:d.CollectionCount+c})),(j?E.od.delete(`/collect/post/${t}`):E.od.post(`/collect/post/${t}`)).then(d=>{d.err?(I(v=>!v),S(v=>P(N({},v),{CollectionCount:v.CollectionCount-c}))):j||B.ZP.success("nice!")}).catch(()=>{setTimeout(()=>{I(d=>!d),S(d=>P(N({},d),{CollectionCount:d.CollectionCount-1}))},300)})},[h,j]),ee=(0,o.useRef)(g);ee.current=g;const Ke=({type:c,payload:d})=>{var v;const A=(v=d==null?void 0:d.target)==null?void 0:v.currentTime;c=="timeupdate"?A<1||L(t,ee.current,A*1e3):c=="ended"&&L(t,ee.current+1,0)},{Title:te,Creator:_,Tags:G,IsOriginal:Xe,Hits:Qe,CommentCount:qe,LikesCount:et,CollectionCount:tt,Content:fe,Meta:ve,Cover:at}=h;return(0,e.jsxs)("div",{className:"player",children:[(0,e.jsxs)(u.q,{children:[(0,e.jsx)("title",{children:`${te||""} - UPV - free animes no ads`}),(0,e.jsx)("meta",{name:"description",content:fe==null?void 0:fe.substring(0,200)}),(0,e.jsx)("meta",{name:"referrer",content:"no-referrer-when-downgrade"}),(0,e.jsx)("meta",{name:"keywords",content:`${te},${ve==null?void 0:ve.Genre},${G==null?void 0:G.split(" ")}`}),(0,e.jsx)("meta",{name:"author",content:_==null?void 0:_.Nickname}),(0,e.jsx)("meta",{property:"og:title",content:`${te} - UPV - free animes no ads`}),(0,e.jsx)("meta",{property:"og:type",content:"video"}),(0,e.jsx)("meta",{property:"og:image",content:at}),(0,e.jsx)("meta",{property:"og:url",content:location.origin+location.pathname})]}),(0,e.jsxs)("div",{className:"player-header",children:[(0,e.jsx)("div",{className:"player-header__player",children:(0,o.useMemo)(()=>{var c;return(0,e.jsx)($,{ref:Z,onEvent:Ke,duration:M,src:H==null?void 0:H.url,poster:h.image||((c=h.anime)==null?void 0:c.coverImage)})},[H])}),(0,e.jsx)("div",{className:"player-header__r",children:(0,e.jsxs)("div",{className:"eplist_module",children:[(0,e.jsxs)("div",{className:"list-title",children:[(0,e.jsx)("h4",{children:"\u64AD\u653E\u5217\u8868"}),(0,e.jsxs)("span",{className:"ep-list-progress",children:[D.length>0?g+1:0,"/",D.length]})]}),(0,e.jsx)("div",{className:"list-wrapper",children:D.length>0?(0,e.jsx)("ul",{children:D.map((c,d)=>(0,e.jsx)("a",{children:(0,e.jsx)("li",P(N({className:f()("list-item has-tooltip-bottom",{cursor:d===g}),onClick:()=>L(t,d,0),title:c.Title},c.Title&&{"data-tooltip":c.Title}),{children:(0,e.jsxs)("span",{children:[" ",c.Episode]})}))},d))}):(0,e.jsx)("span",{className:"empty",children:"\u6682\u65E0\u89C6\u9891"})})]})})]}),(0,e.jsxs)("div",{className:"video-actions",children:[(0,e.jsxs)("div",{className:"icon-text",children:[(0,e.jsx)("span",{className:"icon",children:(0,e.jsx)(be,{})}),(0,e.jsx)("span",{className:"text",children:Qe||"-"})]}),(0,e.jsxs)("div",{className:"icon-text",children:[(0,e.jsx)("span",{className:"icon",children:(0,e.jsx)(Re,{})}),(0,e.jsx)("span",{className:"text",children:qe||"-"})]}),(0,e.jsxs)("div",{className:f()("icon-text",{"--active":i}),onClick:Je,children:[(0,e.jsx)("span",{className:"icon",children:(0,e.jsx)(Ee,{})}),(0,e.jsx)("span",{className:"text",children:et||"-"})]}),(0,e.jsxs)("div",{className:f()("icon-text",{"--active":j}),onClick:Ye,children:[(0,e.jsx)("span",{className:"icon",children:(0,e.jsx)(Ue,{})}),(0,e.jsx)("span",{className:"text",children:tt||"-"})]})]}),h.ID?(0,e.jsxs)("div",{className:"video-info-wrapper",children:[(0,e.jsxs)("div",{className:"video-info",children:[(0,e.jsx)("img",{className:"video-info__avatar",src:((a=h.Creator)==null?void 0:a.Avatar)||"https://uplife/ic_launcher_round.png",alt:(s=h.Creator)==null?void 0:s.Nickname}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("h3",{className:"video-info__title",onClick:()=>r(!0),children:[h.Title||"-",(0,e.jsx)("span",{className:"icon has-text-info",children:(0,e.jsx)(Ae,{})})]}),(0,e.jsxs)("div",{className:"video-meta",children:[(0,e.jsx)("span",{children:(_==null?void 0:_.Nickname)||"-"}),(0,e.jsxs)("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6827",width:"200",height:"200",children:[(0,e.jsx)("defs",{}),(0,e.jsx)("path",{d:"M167.024 512a344.976 344.976 0 1 1 689.952 0 344.976 344.976 0 0 1-690 0zM512 106.976a405.024 405.024 0 1 0 0 810.048 405.024 405.024 0 0 0 0-810z m30 235.008a30 30 0 1 0-60 0V512c0 7.968 3.168 15.6 8.784 21.216l120 120a30 30 0 1 0 42.432-42.432L542 499.52V341.984z",fill:"#9499A0","p-id":"6828"})]}),(0,e.jsx)("span",{children:h.CreatedAt?(0,x.wb)(h.CreatedAt):"-"})]})]})]}),(0,e.jsx)(V.$,{tags:G?G.trim().split(" ").map(c=>({title:c,href:`/pv/tag?type=video&title=${c}`})).concat(Xe==2?{title:"\u539F\u521B",href:"/pv/tag?type=video&is_original=2&title=\u539F\u521B"}:[]):[]})]}):(0,e.jsx)(z.iR,{className:"video-info__skeleton",height:"200px"}),(0,e.jsx)(U.Z,{id:t}),(0,e.jsx)(pe,{post:h,show:n,onChange:r})]})}},6094:function(T,w,l){"use strict";l.d(w,{Z:function(){return b}});var e=l(3148),o={},b=y=>{const{children:C,ratio:R,mw:F}=y;return(0,e.jsx)("div",{className:"aspect-ratio",style:{width:typeof F=="string"?F:`${F}px`},children:(0,e.jsx)("div",{className:"aspect-ratio__fill",style:{paddingTop:`${1/R*100}%`},children:C})})}},4953:function(T,w,l){var e={"./1.json":[7754,754],"./10.json":[6534,534],"./131478f2-31cd-446a-9cb2-15158b8c3efe.json":[9955,955],"./163f51f8-76a4-4e41-8eeb-f27295520829.json":[3298,298],"./2.json":[5927,927],"./20221113.json":[9189,189],"./3.json":[1553,553],"./4.json":[5264,264],"./7.json":[1081,81],"./77745a95-b5db-4c0b-ad08-0a55a6e70f49.json":[7515,515],"./9.json":[3520,520],"./a7a1345e-1bc8-4793-9650-a0ee89b6d74b.json":[8085,85],"./b2cf7c39-3f62-45c0-bbe1-a9522ff24cb7.json":[9726,726]};function o(x){if(!l.o(e,x))return Promise.resolve().then(function(){var C=new Error("Cannot find module '"+x+"'");throw C.code="MODULE_NOT_FOUND",C});var b=e[x],y=b[0];return l.e(b[1]).then(function(){return l.t(y,19)})}o.keys=function(){return Object.keys(e)},o.id=4953,T.exports=o},2341:function(T,w,l){var e={"./1.json":[7331,331],"./10.json":[5374,374],"./131478f2-31cd-446a-9cb2-15158b8c3efe.json":[7418,418],"./163f51f8-76a4-4e41-8eeb-f27295520829.json":[4550,550],"./2.json":[1526,526],"./20221113.json":[7824,824],"./3.json":[5424,424],"./4.json":[8525,525],"./7.json":[4941,941],"./77745a95-b5db-4c0b-ad08-0a55a6e70f49.json":[4063,63],"./9.json":[2807,807],"./b2cf7c39-3f62-45c0-bbe1-a9522ff24cb7.json":[6134,134]};function o(x){if(!l.o(e,x))return Promise.resolve().then(function(){var C=new Error("Cannot find module '"+x+"'");throw C.code="MODULE_NOT_FOUND",C});var b=e[x],y=b[0];return l.e(b[1]).then(function(){return l.t(y,19)})}o.keys=function(){return Object.keys(e)},o.id=2341,T.exports=o}}]);
