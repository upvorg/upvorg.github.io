"use strict";var Ne=Object.defineProperty,Fe=Object.defineProperties;var Me=Object.getOwnPropertyDescriptors;var de=Object.getOwnPropertySymbols;var Ue=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable;var pe=(F,a,k)=>a in F?Ne(F,a,{enumerable:!0,configurable:!0,writable:!0,value:k}):F[a]=k,w=(F,a)=>{for(var k in a||(a={}))Ue.call(a,k)&&pe(F,k,a[k]);if(de)for(var k of de(a))ze.call(a,k)&&pe(F,k,a[k]);return F},Z=(F,a)=>Fe(F,Me(a));(self.webpackChunk_web_index=self.webpackChunk_web_index||[]).push([[8492],{2223:function(F,a,k){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=k(5168),X=Symbol.for("react.element"),W=Symbol.for("react.fragment"),se=Object.prototype.hasOwnProperty,re=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ee={key:!0,ref:!0,__self:!0,__source:!0};function L(I,O,A){var E,q={},N=null,V=null;A!==void 0&&(N=""+A),O.key!==void 0&&(N=""+O.key),O.ref!==void 0&&(V=O.ref);for(E in O)se.call(O,E)&&!ee.hasOwnProperty(E)&&(q[E]=O[E]);if(I&&I.defaultProps)for(E in O=I.defaultProps,O)q[E]===void 0&&(q[E]=O[E]);return{$$typeof:X,type:I,key:N,ref:V,props:q,_owner:re.current}}a.Fragment=W,a.jsx=L,a.jsxs=L},517:function(F,a){/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k=Symbol.for("react.element"),l=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),se=Symbol.for("react.profiler"),re=Symbol.for("react.provider"),ee=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),O=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),E=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=E&&e[E]||e["@@iterator"],typeof e=="function"?e:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,G={};function z(e,r,s){this.props=e,this.context=r,this.refs=G,this.updater=s||N}z.prototype.isReactComponent={},z.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},z.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function oe(){}oe.prototype=z.prototype;function M(e,r,s){this.props=e,this.context=r,this.refs=G,this.updater=s||N}var J=M.prototype=new oe;J.constructor=M,V(J,z.prototype),J.isPureReactComponent=!0;var H=Array.isArray,te=Object.prototype.hasOwnProperty,B={current:null},K={key:!0,ref:!0,__self:!0,__source:!0};function ae(e,r,s){var b,S={},$=null,j=null;if(r!=null)for(b in r.ref!==void 0&&(j=r.ref),r.key!==void 0&&($=""+r.key),r)te.call(r,b)&&!K.hasOwnProperty(b)&&(S[b]=r[b]);var D=arguments.length-2;if(D===1)S.children=s;else if(1<D){for(var T=Array(D),Y=0;Y<D;Y++)T[Y]=arguments[Y+2];S.children=T}if(e&&e.defaultProps)for(b in D=e.defaultProps,D)S[b]===void 0&&(S[b]=D[b]);return{$$typeof:k,type:e,key:$,ref:j,props:S,_owner:B.current}}function le(e,r){return{$$typeof:k,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function Q(e){return typeof e=="object"&&e!==null&&e.$$typeof===k}function f(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(s){return r[s]})}var p=/\/+/g;function x(e,r){return typeof e=="object"&&e!==null&&e.key!=null?f(""+e.key):r.toString(36)}function v(e,r,s,b,S){var $=typeof e;($==="undefined"||$==="boolean")&&(e=null);var j=!1;if(e===null)j=!0;else switch($){case"string":case"number":j=!0;break;case"object":switch(e.$$typeof){case k:case l:j=!0}}if(j)return j=e,S=S(j),e=b===""?"."+x(j,0):b,H(S)?(s="",e!=null&&(s=e.replace(p,"$&/")+"/"),v(S,r,s,"",function(Y){return Y})):S!=null&&(Q(S)&&(S=le(S,s+(!S.key||j&&j.key===S.key?"":(""+S.key).replace(p,"$&/")+"/")+e)),r.push(S)),1;if(j=0,b=b===""?".":b+":",H(e))for(var D=0;D<e.length;D++){$=e[D];var T=b+x($,D);j+=v($,r,s,T,S)}else if(T=q(e),typeof T=="function")for(e=T.call(e),D=0;!($=e.next()).done;)$=$.value,T=b+x($,D++),j+=v($,r,s,T,S);else if($==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return j}function C(e,r,s){if(e==null)return e;var b=[],S=0;return v(e,b,"","",function($){return r.call(s,$,S++)}),b}function _(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(s){(e._status===0||e._status===-1)&&(e._status=1,e._result=s)},function(s){(e._status===0||e._status===-1)&&(e._status=2,e._result=s)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var n={current:null},u={transition:null},d={ReactCurrentDispatcher:n,ReactCurrentBatchConfig:u,ReactCurrentOwner:B};a.Children={map:C,forEach:function(e,r,s){C(e,function(){r.apply(this,arguments)},s)},count:function(e){var r=0;return C(e,function(){r++}),r},toArray:function(e){return C(e,function(r){return r})||[]},only:function(e){if(!Q(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},a.Component=z,a.Fragment=X,a.Profiler=se,a.PureComponent=M,a.StrictMode=W,a.Suspense=I,a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d,a.cloneElement=function(e,r,s){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var b=V({},e.props),S=e.key,$=e.ref,j=e._owner;if(r!=null){if(r.ref!==void 0&&($=r.ref,j=B.current),r.key!==void 0&&(S=""+r.key),e.type&&e.type.defaultProps)var D=e.type.defaultProps;for(T in r)te.call(r,T)&&!K.hasOwnProperty(T)&&(b[T]=r[T]===void 0&&D!==void 0?D[T]:r[T])}var T=arguments.length-2;if(T===1)b.children=s;else if(1<T){D=Array(T);for(var Y=0;Y<T;Y++)D[Y]=arguments[Y+2];b.children=D}return{$$typeof:k,type:e.type,key:S,ref:$,props:b,_owner:j}},a.createContext=function(e){return e={$$typeof:ee,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:re,_context:e},e.Consumer=e},a.createElement=ae,a.createFactory=function(e){var r=ae.bind(null,e);return r.type=e,r},a.createRef=function(){return{current:null}},a.forwardRef=function(e){return{$$typeof:L,render:e}},a.isValidElement=Q,a.lazy=function(e){return{$$typeof:A,_payload:{_status:-1,_result:e},_init:_}},a.memo=function(e,r){return{$$typeof:O,type:e,compare:r===void 0?null:r}},a.startTransition=function(e){var r=u.transition;u.transition={};try{e()}finally{u.transition=r}},a.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},a.useCallback=function(e,r){return n.current.useCallback(e,r)},a.useContext=function(e){return n.current.useContext(e)},a.useDebugValue=function(){},a.useDeferredValue=function(e){return n.current.useDeferredValue(e)},a.useEffect=function(e,r){return n.current.useEffect(e,r)},a.useId=function(){return n.current.useId()},a.useImperativeHandle=function(e,r,s){return n.current.useImperativeHandle(e,r,s)},a.useInsertionEffect=function(e,r){return n.current.useInsertionEffect(e,r)},a.useLayoutEffect=function(e,r){return n.current.useLayoutEffect(e,r)},a.useMemo=function(e,r){return n.current.useMemo(e,r)},a.useReducer=function(e,r,s){return n.current.useReducer(e,r,s)},a.useRef=function(e){return n.current.useRef(e)},a.useState=function(e){return n.current.useState(e)},a.useSyncExternalStore=function(e,r,s){return n.current.useSyncExternalStore(e,r,s)},a.useTransition=function(){return n.current.useTransition()},a.version="18.2.0"},5168:function(F,a,k){F.exports=k(517)},3148:function(F,a,k){F.exports=k(2223)},9824:function(F,a){/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function k(n,u){var d=n.length;n.push(u);e:for(;0<d;){var e=d-1>>>1,r=n[e];if(0<W(r,u))n[e]=u,n[d]=r,d=e;else break e}}function l(n){return n.length===0?null:n[0]}function X(n){if(n.length===0)return null;var u=n[0],d=n.pop();if(d!==u){n[0]=d;e:for(var e=0,r=n.length,s=r>>>1;e<s;){var b=2*(e+1)-1,S=n[b],$=b+1,j=n[$];if(0>W(S,d))$<r&&0>W(j,S)?(n[e]=j,n[$]=d,e=$):(n[e]=S,n[b]=d,e=b);else if($<r&&0>W(j,d))n[e]=j,n[$]=d,e=$;else break e}}return u}function W(n,u){var d=n.sortIndex-u.sortIndex;return d!==0?d:n.id-u.id}if(typeof performance=="object"&&typeof performance.now=="function"){var se=performance;a.unstable_now=function(){return se.now()}}else{var re=Date,ee=re.now();a.unstable_now=function(){return re.now()-ee}}var L=[],I=[],O=1,A=null,E=3,q=!1,N=!1,V=!1,G=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,oe=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(n){for(var u=l(I);u!==null;){if(u.callback===null)X(I);else if(u.startTime<=n)X(I),u.sortIndex=u.expirationTime,k(L,u);else break;u=l(I)}}function J(n){if(V=!1,M(n),!N)if(l(L)!==null)N=!0,C(H);else{var u=l(I);u!==null&&_(J,u.startTime-n)}}function H(n,u){N=!1,V&&(V=!1,z(K),K=-1),q=!0;var d=E;try{for(M(u),A=l(L);A!==null&&(!(A.expirationTime>u)||n&&!Q());){var e=A.callback;if(typeof e=="function"){A.callback=null,E=A.priorityLevel;var r=e(A.expirationTime<=u);u=a.unstable_now(),typeof r=="function"?A.callback=r:A===l(L)&&X(L),M(u)}else X(L);A=l(L)}if(A!==null)var s=!0;else{var b=l(I);b!==null&&_(J,b.startTime-u),s=!1}return s}finally{A=null,E=d,q=!1}}var te=!1,B=null,K=-1,ae=5,le=-1;function Q(){return!(a.unstable_now()-le<ae)}function f(){if(B!==null){var n=a.unstable_now();le=n;var u=!0;try{u=B(!0,n)}finally{u?p():(te=!1,B=null)}}else te=!1}var p;if(typeof oe=="function")p=function(){oe(f)};else if(typeof MessageChannel!="undefined"){var x=new MessageChannel,v=x.port2;x.port1.onmessage=f,p=function(){v.postMessage(null)}}else p=function(){G(f,0)};function C(n){B=n,te||(te=!0,p())}function _(n,u){K=G(function(){n(a.unstable_now())},u)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(n){n.callback=null},a.unstable_continueExecution=function(){N||q||(N=!0,C(H))},a.unstable_forceFrameRate=function(n){0>n||125<n?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ae=0<n?Math.floor(1e3/n):5},a.unstable_getCurrentPriorityLevel=function(){return E},a.unstable_getFirstCallbackNode=function(){return l(L)},a.unstable_next=function(n){switch(E){case 1:case 2:case 3:var u=3;break;default:u=E}var d=E;E=u;try{return n()}finally{E=d}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(n,u){switch(n){case 1:case 2:case 3:case 4:case 5:break;default:n=3}var d=E;E=n;try{return u()}finally{E=d}},a.unstable_scheduleCallback=function(n,u,d){var e=a.unstable_now();switch(typeof d=="object"&&d!==null?(d=d.delay,d=typeof d=="number"&&0<d?e+d:e):d=e,n){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=d+r,n={id:O++,callback:u,priorityLevel:n,startTime:d,expirationTime:r,sortIndex:-1},d>e?(n.sortIndex=d,k(I,n),l(L)===null&&n===l(I)&&(V?(z(K),K=-1):V=!0,_(J,d-e))):(n.sortIndex=r,k(L,n),N||q||(N=!0,C(H))),n},a.unstable_shouldYield=Q,a.unstable_wrapCallback=function(n){var u=E;return function(){var d=E;E=u;try{return n.apply(this,arguments)}finally{E=d}}}},3822:function(F,a,k){F.exports=k(9824)},7510:function(F,a,k){k.d(a,{rU:function(){return B},AW:function(){return te},F0:function(){return H},rs:function(){return ae},yj:function(){return M}});var l=k(5168);const W=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?l.useLayoutEffect:l.useEffect,se=(f,p=location.pathname)=>p.toLowerCase().indexOf(f.toLowerCase())?"~"+p:p.slice(f.length)||"/",re="popstate",ee="pushState",L="replaceState",I=[re,ee,L];var O=({base:f=""}={})=>{const[{path:p},x]=(0,l.useState)(()=>({path:se(f)})),v=(0,l.useRef)(p+location.search);(0,l.useEffect)(()=>{const _=()=>{const n=se(f),u=n+location.search;v.current!==u&&(v.current=u,x({path:n}))};return I.forEach(n=>addEventListener(n,_)),_(),()=>I.forEach(n=>removeEventListener(n,_))},[f]);const C=(0,l.useCallback)((_,{replace:n=!1}={})=>history[n?L:ee](null,"",_[0]==="~"?_.slice(1):f+_),[f]);return[p,C]};if(typeof history!="undefined")for(const f of[ee,L]){const p=history[f];history[f]=function(){const x=p.apply(this,arguments),v=new Event(f);return v.arguments=arguments,dispatchEvent(v),x}}function A(f=N){let p={};const x=v=>p[v]||(p[v]=f(v));return(v,C)=>{const{regexp:_,keys:n}=x(v||""),u=_.exec(C);return u?[!0,n.reduce((e,r,s)=>(e[r.name]=u[s+1],e),{})]:[!1,null]}}const E=f=>f.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),q=(f,p,x)=>{let v=f?"((?:[^\\/]+?)(?:\\/(?:[^\\/]+?))*)":"([^\\/]+?)";return p&&x&&(v="(?:\\/"+v+")"),v+(p?"?":"")},N=f=>{const p=/:([A-Za-z0-9_]+)([?+*]?)/g;let x=null,v=0,C=[],_="";for(;(x=p.exec(f))!==null;){const[n,u,d]=x,e=d==="+"||d==="*",r=d==="?"||d==="*",s=r&&f[x.index-1]==="/"?1:0,b=f.substring(v,x.index-s);C.push({name:u}),v=p.lastIndex,_+=E(b)+q(e,r,s)}return _+=E(f.substring(v)),{keys:C,regexp:new RegExp("^"+_+"(?:\\/)?$","i")}},V={hook:O,matcher:A(),base:""},G=(0,l.createContext)(V),z=()=>(0,l.useContext)(G),oe=()=>{const f=z();return f.hook(f)},M=f=>{const[p]=oe();return z().matcher(f,p)},J=f=>{const p=(0,l.useRef)(),[,x]=oe();return p.current=()=>x(f.to||f.href,f),p},H=({hook:f,matcher:p,base:x="",parent:v,children:C})=>{const _=(u,d=v||V)=>(u.hook=f||d.hook,u.matcher=p||d.matcher,u.base=d.base+x,u.parent=v,u),[n]=(0,l.useState)(()=>_({}));return W(()=>{_(n)}),(0,l.createElement)(G.Provider,{value:n,children:C})},te=({path:f,match:p,component:x,children:v})=>{const C=M(f),[_,n]=p||C;return _?x?(0,l.createElement)(x,{params:n}):typeof v=="function"?v(n):v:null},B=(0,l.forwardRef)((f,p)=>{const x=J(f),{base:v}=z();let{to:C,href:_=C,children:n,onClick:u}=f;const d=(0,l.useCallback)(s=>{s.ctrlKey||s.metaKey||s.altKey||s.shiftKey||s.button!==0||(u&&u(s),s.defaultPrevented||(s.preventDefault(),x.current()))},[u]),e={href:_[0]==="~"?_.slice(1):v+_,onClick:d,to:null,ref:p},r=(0,l.isValidElement)(n)?n:(0,l.createElement)("a",f);return(0,l.cloneElement)(r,e)}),K=f=>Array.isArray(f)?[].concat(...f.map(p=>p&&p.type===l.Fragment?K(p.props.children):K(p))):[f],ae=({children:f,location:p})=>{const{matcher:x}=z(),[v]=oe();for(const C of K(f)){let _=0;if((0,l.isValidElement)(C)&&(_=C.props.path?x(C.props.path,p||v):[!0,{}])[0])return(0,l.cloneElement)(C,{match:_})}return null},le=f=>{const p=J(f);return useIsomorphicLayoutEffect(()=>{p.current()},[]),null};var Q=null},3621:function(F,a,k){k.d(a,{x7:function(){return Ae},ZP:function(){return De}});var l=k(5168);let X={data:""},W=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||X,se=t=>{let o=W(t),i=o.data;return o.data="",i},re=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ee=/\/\*[^]*?\*\/|  +/g,L=/\n+/g,I=(t,o)=>{let i="",m="",y="";for(let c in t){let g=t[c];c[0]=="@"?c[1]=="i"?i=c+" "+g+";":m+=c[1]=="f"?I(g,c):c+"{"+I(g,c[1]=="k"?"":o)+"}":typeof g=="object"?m+=I(g,o?o.replace(/([^,])+/g,h=>c.replace(/(^:.*)|([^,])+/g,R=>/&/.test(R)?R.replace(/&/g,h):h?h+" "+R:R)):c):g!=null&&(c=/^--/.test(c)?c:c.replace(/[A-Z]/g,"-$&").toLowerCase(),y+=I.p?I.p(c,g):c+":"+g+";")}return i+(o&&y?o+"{"+y+"}":y)+m},O={},A=t=>{if(typeof t=="object"){let o="";for(let i in t)o+=i+A(t[i]);return o}return t},E=(t,o,i,m,y)=>{let c=A(t),g=O[c]||(O[c]=(R=>{let P=0,U=11;for(;P<R.length;)U=101*U+R.charCodeAt(P++)>>>0;return"go"+U})(c));if(!O[g]){let R=c!==t?t:(P=>{let U,ie,ne=[{}];for(;U=re.exec(P.replace(ee,""));)U[4]?ne.shift():U[3]?(ie=U[3].replace(L," ").trim(),ne.unshift(ne[0][ie]=ne[0][ie]||{})):ne[0][U[1]]=U[2].replace(L," ").trim();return ne[0]})(t);O[g]=I(y?{["@keyframes "+g]:R}:R,i?"":"."+g)}let h=i&&O.g?O.g:null;return i&&(O.g=O[g]),((R,P,U,ie)=>{ie?P.data=P.data.replace(ie,R):P.data.indexOf(R)===-1&&(P.data=U?R+P.data:P.data+R)})(O[g],o,m,h),g},q=(t,o,i)=>t.reduce((m,y,c)=>{let g=o[c];if(g&&g.call){let h=g(i),R=h&&h.props&&h.props.className||/^go/.test(h)&&h;g=R?"."+R:h&&typeof h=="object"?h.props?"":I(h,""):h===!1?"":h}return m+y+(g==null?"":g)},"");function N(t){let o=this||{},i=t.call?t(o.p):t;return E(i.unshift?i.raw?q(i,[].slice.call(arguments,1),o.p):i.reduce((m,y)=>Object.assign(m,y&&y.call?y(o.p):y),{}):i,W(o.target),o.g,o.o,o.k)}let V,G,z,oe=N.bind({g:1}),M=N.bind({k:1});function J(t,o,i,m){I.p=o,V=t,G=i,z=m}function H(t,o){let i=this||{};return function(){let m=arguments;function y(c,g){let h=Object.assign({},c),R=h.className||y.className;i.p=Object.assign({theme:G&&G()},h),i.o=/ *go\d+/.test(R),h.className=N.apply(i,m)+(R?" "+R:""),o&&(h.ref=g);let P=t;return t[0]&&(P=h.as||t,delete h.as),z&&P[0]&&z(h),V(P,h)}return o?o(y):y}}var te=t=>typeof t=="function",B=(t,o)=>te(t)?t(o):t,K=(()=>{let t=0;return()=>(++t).toString()})(),ae=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let o=matchMedia("(prefers-reduced-motion: reduce)");t=!o||o.matches}return t}})(),le=20,Q=new Map,f=1e3,p=t=>{if(Q.has(t))return;let o=setTimeout(()=>{Q.delete(t),n({type:4,toastId:t})},f);Q.set(t,o)},x=t=>{let o=Q.get(t);o&&clearTimeout(o)},v=(t,o)=>{switch(o.type){case 0:return Z(w({},t),{toasts:[o.toast,...t.toasts].slice(0,le)});case 1:return o.toast.id&&x(o.toast.id),Z(w({},t),{toasts:t.toasts.map(c=>c.id===o.toast.id?w(w({},c),o.toast):c)});case 2:let{toast:i}=o;return t.toasts.find(c=>c.id===i.id)?v(t,{type:1,toast:i}):v(t,{type:0,toast:i});case 3:let{toastId:m}=o;return m?p(m):t.toasts.forEach(c=>{p(c.id)}),Z(w({},t),{toasts:t.toasts.map(c=>c.id===m||m===void 0?Z(w({},c),{visible:!1}):c)});case 4:return o.toastId===void 0?Z(w({},t),{toasts:[]}):Z(w({},t),{toasts:t.toasts.filter(c=>c.id!==o.toastId)});case 5:return Z(w({},t),{pausedAt:o.time});case 6:let y=o.time-(t.pausedAt||0);return Z(w({},t),{pausedAt:void 0,toasts:t.toasts.map(c=>Z(w({},c),{pauseDuration:c.pauseDuration+y}))})}},C=[],_={toasts:[],pausedAt:void 0},n=t=>{_=v(_,t),C.forEach(o=>{o(_)})},u={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},d=(t={})=>{let[o,i]=(0,l.useState)(_);(0,l.useEffect)(()=>(C.push(i),()=>{let y=C.indexOf(i);y>-1&&C.splice(y,1)}),[o]);let m=o.toasts.map(y=>{var c,g;return Z(w(w(w({},t),t[y.type]),y),{duration:y.duration||((c=t[y.type])==null?void 0:c.duration)||(t==null?void 0:t.duration)||u[y.type],style:w(w(w({},t.style),(g=t[y.type])==null?void 0:g.style),y.style)})});return Z(w({},o),{toasts:m})},e=(t,o="blank",i)=>Z(w({createdAt:Date.now(),visible:!0,type:o,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},i),{id:(i==null?void 0:i.id)||K()}),r=t=>(o,i)=>{let m=e(o,t,i);return n({type:2,toast:m}),m.id},s=(t,o)=>r("blank")(t,o);s.error=r("error"),s.success=r("success"),s.loading=r("loading"),s.custom=r("custom"),s.dismiss=t=>{n({type:3,toastId:t})},s.remove=t=>n({type:4,toastId:t}),s.promise=(t,o,i)=>{let m=s.loading(o.loading,w(w({},i),i==null?void 0:i.loading));return t.then(y=>(s.success(B(o.success,y),w(w({id:m},i),i==null?void 0:i.success)),y)).catch(y=>{s.error(B(o.error,y),w(w({id:m},i),i==null?void 0:i.error))}),t};var b=(t,o)=>{n({type:1,toast:{id:t,height:o}})},S=()=>{n({type:5,time:Date.now()})},$=t=>{let{toasts:o,pausedAt:i}=d(t);(0,l.useEffect)(()=>{if(i)return;let c=Date.now(),g=o.map(h=>{if(h.duration===1/0)return;let R=(h.duration||0)+h.pauseDuration-(c-h.createdAt);if(R<0){h.visible&&s.dismiss(h.id);return}return setTimeout(()=>s.dismiss(h.id),R)});return()=>{g.forEach(h=>h&&clearTimeout(h))}},[o,i]);let m=(0,l.useCallback)(()=>{i&&n({type:6,time:Date.now()})},[i]),y=(0,l.useCallback)((c,g)=>{let{reverseOrder:h=!1,gutter:R=8,defaultPosition:P}=g||{},U=o.filter(ue=>(ue.position||P)===(c.position||P)&&ue.height),ie=U.findIndex(ue=>ue.id===c.id),ne=U.filter((ue,fe)=>fe<ie&&ue.visible).length;return U.filter(ue=>ue.visible).slice(...h?[ne+1]:[0,ne]).reduce((ue,fe)=>ue+(fe.height||0)+R,0)},[o]);return{toasts:o,handlers:{updateHeight:b,startPause:S,endPause:m,calculateOffset:y}}},j=M`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,D=M`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,T=M`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Y=H("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${j} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${D} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${T} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ye=M`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,me=H("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${ye} 1s linear infinite;
`,he=M`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ve=M`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ge=H("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${he} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ve} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,be=H("div")`
  position: absolute;
`,_e=H("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,we=M`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ke=H("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${we} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ee=({toast:t})=>{let{icon:o,type:i,iconTheme:m}=t;return o!==void 0?typeof o=="string"?l.createElement(ke,null,o):o:i==="blank"?null:l.createElement(_e,null,l.createElement(me,w({},m)),i!=="loading"&&l.createElement(be,null,i==="error"?l.createElement(Y,w({},m)):l.createElement(ge,w({},m))))},Re=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,xe=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Se="0%{opacity:0;} 100%{opacity:1;}",Ce="0%{opacity:1;} 100%{opacity:0;}",$e=H("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Pe=H("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ie=(t,o)=>{let i=t.includes("top")?1:-1,[m,y]=ae()?[Se,Ce]:[Re(i),xe(i)];return{animation:o?`${M(m)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${M(y)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Oe=l.memo(({toast:t,position:o,style:i,children:m})=>{let y=t.height?Ie(t.position||o||"top-center",t.visible):{opacity:0},c=l.createElement(Ee,{toast:t}),g=l.createElement(Pe,w({},t.ariaProps),B(t.message,t));return l.createElement($e,{className:t.className,style:w(w(w({},y),i),t.style)},typeof m=="function"?m({icon:c,message:g}):l.createElement(l.Fragment,null,c,g))});J(l.createElement);var je=({id:t,className:o,style:i,onHeightUpdate:m,children:y})=>{let c=l.useCallback(g=>{if(g){let h=()=>{let R=g.getBoundingClientRect().height;m(t,R)};h(),new MutationObserver(h).observe(g,{subtree:!0,childList:!0,characterData:!0})}},[t,m]);return l.createElement("div",{ref:c,className:o,style:i},y)},Te=(t,o)=>{let i=t.includes("top"),m=i?{top:0}:{bottom:0},y=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return w(w({left:0,right:0,display:"flex",position:"absolute",transition:ae()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${o*(i?1:-1)}px)`},m),y)},Le=N`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ce=16,Ae=({reverseOrder:t,position:o="top-center",toastOptions:i,gutter:m,children:y,containerStyle:c,containerClassName:g})=>{let{toasts:h,handlers:R}=$(i);return l.createElement("div",{style:w({position:"fixed",zIndex:9999,top:ce,left:ce,right:ce,bottom:ce,pointerEvents:"none"},c),className:g,onMouseEnter:R.startPause,onMouseLeave:R.endPause},h.map(P=>{let U=P.position||o,ie=R.calculateOffset(P,{reverseOrder:t,gutter:m,defaultPosition:o}),ne=Te(U,ie);return l.createElement(je,{id:P.id,key:P.id,onHeightUpdate:R.updateHeight,className:P.visible?Le:"",style:ne},P.type==="custom"?B(P.message,P):y?y(P):l.createElement(Oe,{toast:P,position:U}))}))},De=s}}]);
