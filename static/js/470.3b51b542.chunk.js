(self.webpackChunk_web_index=self.webpackChunk_web_index||[]).push([[470],{6689:function(U,P,o){"use strict";o.r(P),o.d(P,{default:function(){return Qe}});var n=o(3148),l=o(5168),b=o(4247),O=o(1846),E=o(1296),N=o(331);const V=[(0,O.Z)(),(0,E.Z)({options:{hlsQualityControl:!0,forceHLS:!0}})];function L({playerIsPlaying:e,src:t,poster:s,duration:a,onEvent:r}){return(0,n.jsx)(N.ZP,{playbackRate:1,playing:e,plugins:V,source:{src:t,poster:s},duration:a,onEvent:r})}var I=o(2787),D=o(3621),oe=o(785),k=o.n(oe),ce=o(3156);function ct(e,t,s=!0,a=!0){let r;return(...i)=>{r?(clearTimeout(r),r=void 0):s&&e(...i),r=self.setTimeout(()=>{a&&e(...i),r=void 0},t)}}function de(e,t,s=!0){let a,r,i;return(...m)=>{r=!0,i=m,a||(s&&(r=!1,e(...i)),a=self.setInterval(()=>{if(!r){self.clearInterval(a),a=void 0;return}r=!1,e(...i)},t))}}function dt(e){return A(Z,e)}function ft(e){return A(ue,e)}function ut(e){return A(H,e)}function vt(e){return A(fe,e)}function A(e,t){let s=!1,a;return(...r)=>{a=r,s||(s=!0,e(()=>{s=!1,t(...a)}))}}function mt(e,t){self.requestIdleCallback?self.requestIdleCallback(e,{timeout:t}):H(e)}function fe(e){e()}const pt=e=>new Promise(t=>{setTimeout(()=>t(),e)});function ht(){return new Promise(e=>{Z(e)})}let S,B;function Z(e,t=!1){S?t?B.push(e):S.push(e):(S=t?[]:[e],B=t?[e]:[],requestAnimationFrame(()=>{const s=S,a=B;S=void 0,B=void 0,a.forEach(r=>r()),s.forEach(r=>r())}))}function ue(e){Z(e,!0)}let F,M;function H(e,t=!1){F?t?M.push(e):F.push(e):(F=t?[]:[e],M=t?[e]:[],Promise.resolve().then(()=>{const s=F,a=M;F=void 0,M=void 0,a.forEach(r=>r()),s.forEach(r=>r())}))}function jt(e){H(e,!0)}let g;function gt(e,t=!1){return g||(g=[],self.addEventListener("beforeunload",()=>{g.forEach(s=>s())})),t?g.push(e):g.unshift(e),()=>{g=g.filter(s=>s!==e)}}const _="@player/";function ve(e){const t=(0,l.useMemo)(()=>{const f=new URLSearchParams(window.location.search),v={id:e,duration:0,episode:f.has("v")?+f.get("v")-1:0,time:0};return f.has("v")?v:JSON.parse(localStorage.getItem(_+e)||"null")||v},[]),[s,a]=(0,l.useState)(t.episode),[r,i]=(0,l.useState)(t.duration),m=(0,l.useCallback)(f=>{localStorage.setItem(_+e,JSON.stringify(f))},[]),h=(0,l.useCallback)(f=>{f!=s&&(a(f),i(0),m({id:e,episode:f,duration:0,time:Date.now()}))},[s]);return[{lastEpisode:s,setLastEpisode:h},{lastDuration:r,setLastDuration:f=>{m({id:e,episode:s,duration:f,time:Date.now()})}}]}var me=o(9247),pe=o(882),he=o(3785),je=o(8971),ge=o(4162),xt={};function xe({post:e,show:t,onChange:s}){const{Title:a,Content:r,IsOriginal:i,Tags:m}=e,{Region:h,Genre:j,IsEnd:f,UpdatedDate:v,PublishDate:w}=e.Meta||{};return(0,n.jsxs)("div",{className:k()("PlayerInfo modal",{"is-active":t}),children:[(0,n.jsx)("div",{className:"modal-background",onClick:()=>s(!1)}),(0,n.jsxs)("div",{className:"modal-card",children:[(0,n.jsx)("button",{className:"delete","aria-label":"close",onClick:()=>s(!1)}),(0,n.jsxs)("section",{className:"modal-card-body",children:[(0,n.jsxs)("div",{className:"post-head",children:[(0,n.jsx)("div",{children:(0,n.jsx)(je.Z,{ratio:3/4,mw:"200px",children:(0,n.jsx)("img",{src:e.Cover,alt:e.Title})})}),(0,n.jsxs)("div",{className:"post-info",children:[(0,n.jsx)("h3",{className:"title",children:a}),(0,n.jsxs)("div",{className:"post-info-item is-h",children:[(0,n.jsxs)("div",{className:"post-info-item",children:[(0,n.jsx)("label",{className:"name",children:"\u5730\u533A"}),(0,n.jsx)("div",{className:"body",children:h||"-"})]}),(0,n.jsxs)("div",{className:"post-info-item",children:[(0,n.jsx)("label",{className:"name",children:"\u7C7B\u578B"}),(0,n.jsx)("div",{className:"body",children:j})]})]}),(0,n.jsxs)("div",{className:"post-info-item is-h",children:[(0,n.jsxs)("div",{className:"post-info-item",children:[(0,n.jsx)("label",{className:"name",children:"\u5E74\u4EFD"}),(0,n.jsx)("div",{className:"body",children:w&&new Date(w).getFullYear()+" \u5E74"||"-"})]}),(0,n.jsxs)("div",{className:"post-info-item",children:[(0,n.jsx)("label",{className:"name",children:"\u5B8C\u7ED3"}),(0,n.jsx)("div",{className:"body",children:f==2?"\u662F":"\u5426"})]})]}),(0,n.jsxs)("div",{className:"post-info-item",children:[(0,n.jsx)("label",{className:"name",children:"\u66F4\u65B0"}),(0,n.jsx)("div",{className:"body",children:v&&`\u6BCF${I.zA[new Date(v).getDay()]} ${new Date(v).getHours()} \u70B9\u66F4\u65B0`||"-"})]}),(0,n.jsxs)("div",{className:"post-info-item tags",children:[i==2&&(0,n.jsx)("div",{className:"body tag is-primary is-light",children:"\u539F\u521B"}),m&&m.split(" ").map($=>(0,n.jsx)("div",{className:"body tag is-primary is-light",children:$},$))]})]})]}),(0,n.jsx)(ge.U,{type:"render",value:r||"#### \u6682\u65E0\u8BE6\u60C5"})]})]})]})}var q,Ce=["title","titleId"];function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},G.apply(this,arguments)}function ye(e,t){if(e==null)return{};var s=be(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(s[a]=e[a]))}return s}function be(e,t){if(e==null)return{};var s={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(s[r]=e[r]);return s}var Oe=function(t,s){var a=t.title,r=t.titleId,i=ye(t,Ce);return l.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",ref:s,"aria-labelledby":r},i),a?l.createElement("title",{id:r},a):null,q||(q=l.createElement("path",{d:"M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"})))},Ne=(0,l.forwardRef)(Oe),Ct=o.p+"static/media/fa-eye.6081475b9bda458f2aa19687000650a7.svg",ee,we=["title","titleId"];function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},Y.apply(this,arguments)}function Pe(e,t){if(e==null)return{};var s=Ee(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(s[a]=e[a]))}return s}function Ee(e,t){if(e==null)return{};var s={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(s[r]=e[r]);return s}var Le=function(t,s){var a=t.title,r=t.titleId,i=Pe(t,we);return l.createElement("svg",Y({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:s,"aria-labelledby":r},i),a?l.createElement("title",{id:r},a):null,ee||(ee=l.createElement("path",{d:"M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"})))},Ie=(0,l.forwardRef)(Le),yt=o.p+"static/media/fa-heart.877791eb3fcf005481f684a0ecd27643.svg",te,Se=["title","titleId"];function J(){return J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},J.apply(this,arguments)}function Fe(e,t){if(e==null)return{};var s=Te(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(s[a]=e[a]))}return s}function Te(e,t){if(e==null)return{};var s={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(s[r]=e[r]);return s}var Re=function(t,s){var a=t.title,r=t.titleId,i=Fe(t,Se);return l.createElement("svg",J({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:s,"aria-labelledby":r},i),a?l.createElement("title",{id:r},a):null,te||(te=l.createElement("path",{d:"M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"})))},De=(0,l.forwardRef)(Re),bt=o.p+"static/media/fa-info-circle.98be1242692ee31e98b17205bb5c9aaa.svg",ae,ke=["title","titleId"];function K(){return K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},K.apply(this,arguments)}function Ae(e,t){if(e==null)return{};var s=Be(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(s[a]=e[a]))}return s}function Be(e,t){if(e==null)return{};var s={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(s[r]=e[r]);return s}var Me=function(t,s){var a=t.title,r=t.titleId,i=Ae(t,ke);return l.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:s,"aria-labelledby":r},i),a?l.createElement("title",{id:r},a):null,ae||(ae=l.createElement("path",{d:"M511.1 63.1v287.1c0 35.25-28.75 63.1-64 63.1h-144l-124.9 93.68c-7.875 5.75-19.12 .0497-19.12-9.7v-83.98h-96c-35.25 0-64-28.75-64-63.1V63.1c0-35.25 28.75-63.1 64-63.1h384C483.2 0 511.1 28.75 511.1 63.1z"})))},$e=(0,l.forwardRef)(Me),Ot=o.p+"static/media/fa-message.2c4915772cd73f0e62933b66ee503fde.svg",ne,We=["title","titleId"];function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},Q.apply(this,arguments)}function ze(e,t){if(e==null)return{};var s=Ue(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(s[a]=e[a]))}return s}function Ue(e,t){if(e==null)return{};var s={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(s[r]=e[r]);return s}var Ve=function(t,s){var a=t.title,r=t.titleId,i=ze(t,We);return l.createElement("svg",Q({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",ref:s,"aria-labelledby":r},i),a?l.createElement("title",{id:r},a):null,ne||(ne=l.createElement("path",{d:"M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"})))},Ze=(0,l.forwardRef)(Ve),Nt=o.p+"static/media/fa-star.6b2027c0ff37a21f8f9b4ce362121a79.svg",wt={},He=Object.defineProperty,Ge=Object.defineProperties,Ye=Object.getOwnPropertyDescriptors,se=Object.getOwnPropertySymbols,Je=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable,re=(e,t,s)=>t in e?He(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,x=(e,t)=>{for(var s in t||(t={}))Je.call(t,s)&&re(e,s,t[s]);if(se)for(var s of se(t))Ke.call(t,s)&&re(e,s,t[s]);return e},C=(e,t)=>Ge(e,Ye(t));function Qe({id:e}){var t,s,a;const[r,i]=(0,l.useState)(!1),[m,h]=(0,l.useState)(!1),[j,f]=(0,l.useState)(!1),[{lastEpisode:v,setLastEpisode:w},{lastDuration:$,setLastDuration:Xe}]=ve(e),[p,y]=(0,l.useState)({}),[T,_e]=(0,l.useState)([]);(0,l.useEffect)(()=>{o(4953)(`./${e}.json`).then(c=>{if(!c.data||c.data.Type!=="video"){D.ZP.error("\u89C6\u9891\u4E0D\u89C1\u4E86",{duration:9e4});return}c.err||(c.data&&y(c.data),c.data.IsLiked==2&&h(!0),c.data.IsCollected==2&&f(!0),o(2341)(`./${e}.json`).then(d=>{d.data.sort((u,R)=>u.Episode-R.Episode),d.data&&_e(d.data),d.data.length<=v&&w(0)}))})},[]);const qe=(0,l.useCallback)(()=>{const c=m?-1:1,d=p.LikesCount||0;h(u=>!u),y(u=>C(x({},u),{LikesCount:d+c})),(m?I.od.delete(`/like/post/${e}`):I.od.post(`/like/post/${e}`)).then(u=>{u.err?(h(R=>!R),y(R=>C(x({},R),{LikesCount:d-c}))):m?D.ZP.error(`\u4F60\u6240\u70ED\u7231\u7684\uFF0C\u5C31\u662F\u4F60\u7684\u751F\u6D3B\u3002\r
 				--------?`):D.ZP.success("nice!")}).catch(()=>{setTimeout(()=>{h(u=>!u),y(u=>C(x({},u),{LikesCount:d-c}))},300)})},[p,m]),et=(0,l.useCallback)(()=>{const c=j?-1:1;f(d=>!d),y(d=>C(x({},d),{CollectionCount:d.CollectionCount+c})),(j?I.od.delete(`/collect/post/${e}`):I.od.post(`/collect/post/${e}`)).then(d=>{d.err?(f(u=>!u),y(u=>C(x({},u),{CollectionCount:u.CollectionCount-c}))):j||D.ZP.success("nice!")}).catch(()=>{setTimeout(()=>{f(d=>!d),y(d=>C(x({},d),{CollectionCount:d.CollectionCount-1}))},300)})},[p,j]),tt=(0,l.useMemo)(()=>de(({currentTime:c})=>{Xe(c)},1e3),[v]),at=(0,l.useCallback)(c=>{c.type=="timeupdate"?tt({currentTime:c.payload.target.currentTime*1e3}):c.type=="ended"&&w(v+1)},[v]),{Title:X,Creator:W,Tags:z,IsOriginal:nt,Hits:st,CommentCount:rt,LikesCount:it,CollectionCount:lt,Content:ie,Meta:le,Cover:ot}=p;return(0,n.jsxs)("div",{className:"player",children:[(0,n.jsxs)(ce.q,{children:[(0,n.jsx)("title",{children:`${X||""} - UPV - free animes no ads`}),(0,n.jsx)("meta",{name:"description",content:ie==null?void 0:ie.substring(0,200)}),(0,n.jsx)("meta",{name:"referrer",content:"no-referrer-when-downgrade"}),(0,n.jsx)("meta",{name:"keywords",content:`${X},${le==null?void 0:le.Genre},${z==null?void 0:z.split(" ")}`}),(0,n.jsx)("meta",{name:"author",content:W==null?void 0:W.Nickname}),(0,n.jsx)("meta",{property:"og:title",content:`${X} - UPV - free animes no ads`}),(0,n.jsx)("meta",{property:"og:type",content:"video"}),(0,n.jsx)("meta",{property:"og:image",content:ot}),(0,n.jsx)("meta",{property:"og:url",content:location.origin+location.pathname})]}),(0,n.jsxs)("div",{className:"player-header",children:[(0,n.jsx)("div",{className:"player-header__player",children:(0,n.jsx)(L,{src:(t=T[v])==null?void 0:t.VideoUrl,onEvent:at,duration:$})}),(0,n.jsx)("div",{className:"player-header__r",children:(0,n.jsxs)("div",{className:"eplist_module",children:[(0,n.jsxs)("div",{className:"list-title",children:[(0,n.jsx)("h4",{children:"\u64AD\u653E\u5217\u8868"}),(0,n.jsxs)("span",{className:"ep-list-progress",children:[T.length>0?v+1:0,"/",T.length]})]}),(0,n.jsx)("div",{className:"list-wrapper",children:T.length>0?(0,n.jsx)("ul",{children:T.map((c,d)=>(0,n.jsx)("a",{children:(0,n.jsx)("li",C(x({className:k()("list-item has-tooltip-bottom",{cursor:d===v}),onClick:()=>w(d),title:c.Title},c.Title&&{"data-tooltip":c.Title}),{children:(0,n.jsxs)("span",{children:[" ",c.Episode]})}))},d))}):(0,n.jsx)("span",{className:"empty",children:"\u6682\u65E0\u89C6\u9891"})})]})})]}),(0,n.jsxs)("div",{className:"video-actions",children:[(0,n.jsxs)("div",{className:"icon-text",children:[(0,n.jsx)("span",{className:"icon",children:(0,n.jsx)(Ne,{})}),(0,n.jsx)("span",{className:"text",children:st||"-"})]}),(0,n.jsxs)("div",{className:"icon-text",children:[(0,n.jsx)("span",{className:"icon",children:(0,n.jsx)($e,{})}),(0,n.jsx)("span",{className:"text",children:rt||"-"})]}),(0,n.jsxs)("div",{className:k()("icon-text",{"--active":m}),onClick:qe,children:[(0,n.jsx)("span",{className:"icon",children:(0,n.jsx)(Ie,{})}),(0,n.jsx)("span",{className:"text",children:it||"-"})]}),(0,n.jsxs)("div",{className:k()("icon-text",{"--active":j}),onClick:et,children:[(0,n.jsx)("span",{className:"icon",children:(0,n.jsx)(Ze,{})}),(0,n.jsx)("span",{className:"text",children:lt||"-"})]})]}),p.ID?(0,n.jsxs)("div",{className:"video-info-wrapper",children:[(0,n.jsxs)("div",{className:"video-info",children:[(0,n.jsx)("img",{className:"video-info__avatar",src:((s=p.Creator)==null?void 0:s.Avatar)||"https://uplife/ic_launcher_round.png",alt:(a=p.Creator)==null?void 0:a.Nickname}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("h3",{className:"video-info__title",onClick:()=>i(!0),children:[p.Title||"-",(0,n.jsx)("span",{className:"icon has-text-info",children:(0,n.jsx)(De,{})})]}),(0,n.jsxs)("div",{className:"video-meta",children:[(0,n.jsx)("span",{children:(W==null?void 0:W.Nickname)||"-"}),(0,n.jsxs)("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6827",width:"200",height:"200",children:[(0,n.jsx)("defs",{}),(0,n.jsx)("path",{d:"M167.024 512a344.976 344.976 0 1 1 689.952 0 344.976 344.976 0 0 1-690 0zM512 106.976a405.024 405.024 0 1 0 0 810.048 405.024 405.024 0 0 0 0-810z m30 235.008a30 30 0 1 0-60 0V512c0 7.968 3.168 15.6 8.784 21.216l120 120a30 30 0 1 0 42.432-42.432L542 499.52V341.984z",fill:"#9499A0","p-id":"6828"})]}),(0,n.jsx)("span",{children:p.CreatedAt?(0,b.wb)(p.CreatedAt):"-"})]})]})]}),(0,n.jsx)(he.$,{tags:z?z.trim().split(" ").map(c=>({title:c,href:`/pv/tag?type=video&title=${c}`})).concat(nt==2?{title:"\u539F\u521B",href:"/pv/tag?type=video&is_original=2&title=\u539F\u521B"}:[]):[]})]}):(0,n.jsx)(pe.iR,{className:"video-info__skeleton",height:"200px"}),(0,n.jsx)(me.Z,{id:e}),(0,n.jsx)(xe,{post:p,show:r,onChange:i})]})}},8971:function(U,P,o){"use strict";o.d(P,{Z:function(){return O}});var n=o(3148),l={},O=E=>{const{children:N,ratio:V,mw:L}=E;return(0,n.jsx)("div",{className:"aspect-ratio",style:{width:typeof L=="string"?L:`${L}px`},children:(0,n.jsx)("div",{className:"aspect-ratio__fill",style:{paddingTop:`${1/V*100}%`},children:N})})}},2341:function(U,P,o){var n={"./1.json":[7331,331],"./10.json":[5374,374],"./131478f2-31cd-446a-9cb2-15158b8c3efe.json":[7418,418],"./163f51f8-76a4-4e41-8eeb-f27295520829.json":[4550,550],"./2.json":[1526,526],"./20221113.json":[7824,824],"./4.json":[8525,525],"./7.json":[4941,941],"./77745a95-b5db-4c0b-ad08-0a55a6e70f49.json":[4063,63],"./9.json":[2807,807],"./b2cf7c39-3f62-45c0-bbe1-a9522ff24cb7.json":[6134,134]};function l(b){if(!o.o(n,b))return Promise.resolve().then(function(){var N=new Error("Cannot find module '"+b+"'");throw N.code="MODULE_NOT_FOUND",N});var O=n[b],E=O[0];return o.e(O[1]).then(function(){return o.t(E,19)})}l.keys=function(){return Object.keys(n)},l.id=2341,U.exports=l}}]);
