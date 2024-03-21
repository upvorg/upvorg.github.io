"use strict";var Ae=Object.defineProperty,Fe=Object.defineProperties;var Me=Object.getOwnPropertyDescriptors;var De=Object.getOwnPropertySymbols;var Ue=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable;var Ne=(z,s,E)=>s in z?Ae(z,s,{enumerable:!0,configurable:!0,writable:!0,value:E}):z[s]=E,O=(z,s)=>{for(var E in s||(s={}))Ue.call(s,E)&&Ne(z,E,s[E]);if(De)for(var E of De(s))ze.call(s,E)&&Ne(z,E,s[E]);return z},ae=(z,s)=>Fe(z,Me(s));(self.webpackChunk_web_index=self.webpackChunk_web_index||[]).push([[768],{906:(z,s,E)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=E(1770),X=Symbol.for("react.element"),Z=Symbol.for("react.fragment"),A=Object.prototype.hasOwnProperty,se=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ce={key:!0,ref:!0,__self:!0,__source:!0};function H(j,I,M){var x,$={},C=null,F=null;M!==void 0&&(C=""+M),I.key!==void 0&&(C=""+I.key),I.ref!==void 0&&(F=I.ref);for(x in I)A.call(I,x)&&!ce.hasOwnProperty(x)&&($[x]=I[x]);if(j&&j.defaultProps)for(x in I=j.defaultProps,I)$[x]===void 0&&($[x]=I[x]);return{$$typeof:X,type:j,key:C,ref:F,props:$,_owner:se.current}}s.Fragment=Z,s.jsx=H,s.jsxs=H},8949:(z,s)=>{/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=Symbol.for("react.element"),h=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),se=Symbol.for("react.provider"),ce=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),I=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),x=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=x&&e[x]||e["@@iterator"],typeof e=="function"?e:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,Y={};function D(e,n,p){this.props=e,this.context=n,this.refs=Y,this.updater=p||C}D.prototype.isReactComponent={},D.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},D.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ee(){}ee.prototype=D.prototype;function q(e,n,p){this.props=e,this.context=n,this.refs=Y,this.updater=p||C}var ie=q.prototype=new ee;ie.constructor=q,F(ie,D.prototype),ie.isPureReactComponent=!0;var K=Array.isArray,te=Object.prototype.hasOwnProperty,G={current:null},ue={key:!0,ref:!0,__self:!0,__source:!0};function fe(e,n,p){var k,S={},R=null,L=null;if(n!=null)for(k in n.ref!==void 0&&(L=n.ref),n.key!==void 0&&(R=""+n.key),n)te.call(n,k)&&!ue.hasOwnProperty(k)&&(S[k]=n[k]);var U=arguments.length-2;if(U===1)S.children=p;else if(1<U){for(var N=Array(U),Q=0;Q<U;Q++)N[Q]=arguments[Q+2];S.children=N}if(e&&e.defaultProps)for(k in U=e.defaultProps,U)S[k]===void 0&&(S[k]=U[k]);return{$$typeof:E,type:e,key:R,ref:L,props:S,_owner:G.current}}function ve(e,n){return{$$typeof:E,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function re(e){return typeof e=="object"&&e!==null&&e.$$typeof===E}function _e(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(p){return n[p]})}var ne=/\/+/g;function pe(e,n){return typeof e=="object"&&e!==null&&e.key!=null?_e(""+e.key):n.toString(36)}function oe(e,n,p,k,S){var R=typeof e;(R==="undefined"||R==="boolean")&&(e=null);var L=!1;if(e===null)L=!0;else switch(R){case"string":case"number":L=!0;break;case"object":switch(e.$$typeof){case E:case h:L=!0}}if(L)return L=e,S=S(L),e=k===""?"."+pe(L,0):k,K(S)?(p="",e!=null&&(p=e.replace(ne,"$&/")+"/"),oe(S,n,p,"",function(Q){return Q})):S!=null&&(re(S)&&(S=ve(S,p+(!S.key||L&&L.key===S.key?"":(""+S.key).replace(ne,"$&/")+"/")+e)),n.push(S)),1;if(L=0,k=k===""?".":k+":",K(e))for(var U=0;U<e.length;U++){R=e[U];var N=k+pe(R,U);L+=oe(R,n,p,N,S)}else if(N=$(e),typeof N=="function")for(e=N.call(e),U=0;!(R=e.next()).done;)R=R.value,N=k+pe(R,U++),L+=oe(R,n,p,N,S);else if(R==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return L}function J(e,n,p){if(e==null)return e;var k=[],S=0;return oe(e,k,"","",function(R){return n.call(p,R,S++)}),k}function le(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(p){(e._status===0||e._status===-1)&&(e._status=1,e._result=p)},function(p){(e._status===0||e._status===-1)&&(e._status=2,e._result=p)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var a={current:null},f={transition:null},b={ReactCurrentDispatcher:a,ReactCurrentBatchConfig:f,ReactCurrentOwner:G};s.Children={map:J,forEach:function(e,n,p){J(e,function(){n.apply(this,arguments)},p)},count:function(e){var n=0;return J(e,function(){n++}),n},toArray:function(e){return J(e,function(n){return n})||[]},only:function(e){if(!re(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},s.Component=D,s.Fragment=X,s.Profiler=A,s.PureComponent=q,s.StrictMode=Z,s.Suspense=j,s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b,s.cloneElement=function(e,n,p){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var k=F({},e.props),S=e.key,R=e.ref,L=e._owner;if(n!=null){if(n.ref!==void 0&&(R=n.ref,L=G.current),n.key!==void 0&&(S=""+n.key),e.type&&e.type.defaultProps)var U=e.type.defaultProps;for(N in n)te.call(n,N)&&!ue.hasOwnProperty(N)&&(k[N]=n[N]===void 0&&U!==void 0?U[N]:n[N])}var N=arguments.length-2;if(N===1)k.children=p;else if(1<N){U=Array(N);for(var Q=0;Q<N;Q++)U[Q]=arguments[Q+2];k.children=U}return{$$typeof:E,type:e.type,key:S,ref:R,props:k,_owner:L}},s.createContext=function(e){return e={$$typeof:ce,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:se,_context:e},e.Consumer=e},s.createElement=fe,s.createFactory=function(e){var n=fe.bind(null,e);return n.type=e,n},s.createRef=function(){return{current:null}},s.forwardRef=function(e){return{$$typeof:H,render:e}},s.isValidElement=re,s.lazy=function(e){return{$$typeof:M,_payload:{_status:-1,_result:e},_init:le}},s.memo=function(e,n){return{$$typeof:I,type:e,compare:n===void 0?null:n}},s.startTransition=function(e){var n=f.transition;f.transition={};try{e()}finally{f.transition=n}},s.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},s.useCallback=function(e,n){return a.current.useCallback(e,n)},s.useContext=function(e){return a.current.useContext(e)},s.useDebugValue=function(){},s.useDeferredValue=function(e){return a.current.useDeferredValue(e)},s.useEffect=function(e,n){return a.current.useEffect(e,n)},s.useId=function(){return a.current.useId()},s.useImperativeHandle=function(e,n,p){return a.current.useImperativeHandle(e,n,p)},s.useInsertionEffect=function(e,n){return a.current.useInsertionEffect(e,n)},s.useLayoutEffect=function(e,n){return a.current.useLayoutEffect(e,n)},s.useMemo=function(e,n){return a.current.useMemo(e,n)},s.useReducer=function(e,n,p){return a.current.useReducer(e,n,p)},s.useRef=function(e){return a.current.useRef(e)},s.useState=function(e){return a.current.useState(e)},s.useSyncExternalStore=function(e,n,p){return a.current.useSyncExternalStore(e,n,p)},s.useTransition=function(){return a.current.useTransition()},s.version="18.2.0"},1770:(z,s,E)=>{z.exports=E(8949)},2882:(z,s,E)=>{z.exports=E(906)},8551:(z,s)=>{/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function E(a,f){var b=a.length;a.push(f);e:for(;0<b;){var e=b-1>>>1,n=a[e];if(0<Z(n,f))a[e]=f,a[b]=n,b=e;else break e}}function h(a){return a.length===0?null:a[0]}function X(a){if(a.length===0)return null;var f=a[0],b=a.pop();if(b!==f){a[0]=b;e:for(var e=0,n=a.length,p=n>>>1;e<p;){var k=2*(e+1)-1,S=a[k],R=k+1,L=a[R];if(0>Z(S,b))R<n&&0>Z(L,S)?(a[e]=L,a[R]=b,e=R):(a[e]=S,a[k]=b,e=k);else if(R<n&&0>Z(L,b))a[e]=L,a[R]=b,e=R;else break e}}return f}function Z(a,f){var b=a.sortIndex-f.sortIndex;return b!==0?b:a.id-f.id}if(typeof performance=="object"&&typeof performance.now=="function"){var A=performance;s.unstable_now=function(){return A.now()}}else{var se=Date,ce=se.now();s.unstable_now=function(){return se.now()-ce}}var H=[],j=[],I=1,M=null,x=3,$=!1,C=!1,F=!1,Y=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function q(a){for(var f=h(j);f!==null;){if(f.callback===null)X(j);else if(f.startTime<=a)X(j),f.sortIndex=f.expirationTime,E(H,f);else break;f=h(j)}}function ie(a){if(F=!1,q(a),!C)if(h(H)!==null)C=!0,J(K);else{var f=h(j);f!==null&&le(ie,f.startTime-a)}}function K(a,f){C=!1,F&&(F=!1,D(ue),ue=-1),$=!0;var b=x;try{for(q(f),M=h(H);M!==null&&(!(M.expirationTime>f)||a&&!re());){var e=M.callback;if(typeof e=="function"){M.callback=null,x=M.priorityLevel;var n=e(M.expirationTime<=f);f=s.unstable_now(),typeof n=="function"?M.callback=n:M===h(H)&&X(H),q(f)}else X(H);M=h(H)}if(M!==null)var p=!0;else{var k=h(j);k!==null&&le(ie,k.startTime-f),p=!1}return p}finally{M=null,x=b,$=!1}}var te=!1,G=null,ue=-1,fe=5,ve=-1;function re(){return!(s.unstable_now()-ve<fe)}function _e(){if(G!==null){var a=s.unstable_now();ve=a;var f=!0;try{f=G(!0,a)}finally{f?ne():(te=!1,G=null)}}else te=!1}var ne;if(typeof ee=="function")ne=function(){ee(_e)};else if(typeof MessageChannel!="undefined"){var pe=new MessageChannel,oe=pe.port2;pe.port1.onmessage=_e,ne=function(){oe.postMessage(null)}}else ne=function(){Y(_e,0)};function J(a){G=a,te||(te=!0,ne())}function le(a,f){ue=Y(function(){a(s.unstable_now())},f)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(a){a.callback=null},s.unstable_continueExecution=function(){C||$||(C=!0,J(K))},s.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):fe=0<a?Math.floor(1e3/a):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return h(H)},s.unstable_next=function(a){switch(x){case 1:case 2:case 3:var f=3;break;default:f=x}var b=x;x=f;try{return a()}finally{x=b}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(a,f){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var b=x;x=a;try{return f()}finally{x=b}},s.unstable_scheduleCallback=function(a,f,b){var e=s.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?e+b:e):b=e,a){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=b+n,a={id:I++,callback:f,priorityLevel:a,startTime:b,expirationTime:n,sortIndex:-1},b>e?(a.sortIndex=b,E(j,a),h(H)===null&&a===h(j)&&(F?(D(ue),ue=-1):F=!0,le(ie,b-e))):(a.sortIndex=n,E(H,a),C||$||(C=!0,J(K))),a},s.unstable_shouldYield=re,s.unstable_wrapCallback=function(a){var f=x;return function(){var b=x;x=f;try{return a.apply(this,arguments)}finally{x=b}}}},4222:(z,s,E)=>{z.exports=E(8551)},1024:(z,s,E)=>{/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=E(1770);function X($,C){return $===C&&($!==0||1/$===1/C)||$!==$&&C!==C}var Z=typeof Object.is=="function"?Object.is:X,A=h.useState,se=h.useEffect,ce=h.useLayoutEffect,H=h.useDebugValue;function j($,C){var F=C(),Y=A({inst:{value:F,getSnapshot:C}}),D=Y[0].inst,ee=Y[1];return ce(function(){D.value=F,D.getSnapshot=C,I(D)&&ee({inst:D})},[$,F,C]),se(function(){return I(D)&&ee({inst:D}),$(function(){I(D)&&ee({inst:D})})},[$]),H(F),F}function I($){var C=$.getSnapshot;$=$.value;try{var F=C();return!Z($,F)}catch(Y){return!0}}function M($,C){return C()}var x=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?M:j;s.useSyncExternalStore=h.useSyncExternalStore!==void 0?h.useSyncExternalStore:x},425:(z,s,E)=>{z.exports=E(1024)},6682:(z,s,E)=>{E.d(s,{N_:()=>$e,qh:()=>Re,Ix:()=>Se,dO:()=>Ie,zy:()=>ge,lq:()=>xe,SQ:()=>Ce});function h(o,u){if(o instanceof RegExp)return{keys:!1,pattern:o};var y,g,P,T,W=[],V="",t=o.split("/");for(t[0]||t.shift();P=t.shift();)y=P[0],y==="*"?(W.push(y),V+=P[1]==="?"?"(?:/(.*))?":"/(.*)"):y===":"?(g=P.indexOf("?",1),T=P.indexOf(".",1),W.push(P.substring(1,~g?g:~T?T:P.length)),V+=~g&&!~T?"(?:/([^/]+?))?":"/([^/]+?)",~T&&(V+=(~g?"?":"")+"\\"+P.substring(T))):V+="/"+P;return{keys:W,pattern:new RegExp("^"+V+(u?"(?=$|/)":"/?$"),"i")}}var X=/(\/|^)([:*][^/]*?)(\?)?(?=[/.]|$)/g;function Z(o,u){return o.replace(X,(y,g,P,T)=>(y=u[P=="*"?P:P.substring(1)],y?"/"+y:T||P=="*"?"":"/"+P))}var A=E(1770),se=E.t(A,2),ce=E(425);const{useEffect:H,useLayoutEffect:j,useRef:I,useInsertionEffect:M}=se,$=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?j:H,C=M||$,F=o=>{const u=I([o,(...y)=>u[0](...y)]).current;return C(()=>{u[0]=o}),u[1]},Y="popstate",D="pushState",ee="replaceState",ie=[Y,D,ee,"hashchange"],K=o=>{for(const u of ie)addEventListener(u,o);return()=>{for(const u of ie)removeEventListener(u,o)}},te=(o,u)=>(0,ce.useSyncExternalStore)(K,o,u),G=()=>location.search,ue=({ssrSearch:o=""}={})=>te(G,()=>o),fe=()=>location.pathname,ve=({ssrPath:o}={})=>te(fe,o?()=>o:fe),re=()=>history.state,_e=()=>te(re,()=>null),ne=(o,{replace:u=!1,state:y=null}={})=>history[u?ee:D](y,"",o),pe=(o={})=>[ve(o),ne],oe=Symbol.for("wouter_v3");if(typeof history!="undefined"&&typeof window[oe]=="undefined"){for(const o of[D,ee]){const u=history[o];history[o]=function(){const y=u.apply(this,arguments),g=new Event(o);return g.arguments=arguments,dispatchEvent(g),y}}Object.defineProperty(window,oe,{value:!0})}var J=Object.defineProperty,le=Object.defineProperties,a=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable,n=(o,u,y)=>u in o?J(o,u,{enumerable:!0,configurable:!0,writable:!0,value:y}):o[u]=y,p=(o,u)=>{for(var y in u||(u={}))b.call(u,y)&&n(o,y,u[y]);if(f)for(var y of f(u))e.call(u,y)&&n(o,y,u[y]);return o},k=(o,u)=>le(o,a(u)),S=(o,u)=>{var y={};for(var g in o)b.call(o,g)&&u.indexOf(g)<0&&(y[g]=o[g]);if(o!=null&&f)for(var g of f(o))u.indexOf(g)<0&&e.call(o,g)&&(y[g]=o[g]);return y};const R=(o="",u)=>u.toLowerCase().indexOf(o.toLowerCase())?"~"+u:u.slice(o.length)||"/",L=(o,u="")=>o[0]==="~"?o.slice(1):u+o,U=o=>o[0]==="?"?o.slice(1):o,N=o=>{try{return decodeURI(o)}catch(u){return o}},Q={hook:pe,searchHook:ue,parser:h,base:"",ssrPath:void 0,ssrSearch:void 0,hrefs:o=>o},Ee=(0,A.createContext)(Q),he=()=>(0,A.useContext)(Ee),ke=(0,A.createContext)({}),Le=()=>useContext(ke),be=o=>{const[u,y]=o.hook(o);return[N(R(o.base,u)),F((g,P)=>y(L(g,o.base),P))]},ge=()=>be(he()),Ce=()=>{const o=he();return N(U(o.searchHook(o)))},we=(o,u,y,g)=>{const{pattern:P,keys:T}=o(u||"*",g),[W,...V]=P.exec(y)||[];return W!==void 0?[!0,Object.fromEntries(T.map((t,r)=>[t,V[r]])),...g?[W]:[]]:[!1,null]},xe=o=>we(he().parser,o,ge()[0]),Se=o=>{var u=o,{children:y}=u,g=S(u,["children"]),P,T,W,V;const t=he(),r=g.hook?Q:t;let i=r;const[d,m]=(T=(P=g.ssrPath)==null?void 0:P.split("?"))!=null?T:[];m&&(g.ssrSearch=m,g.ssrPath=d),g.hrefs=(V=g.hrefs)!=null?V:(W=g.hook)==null?void 0:W.hrefs;let l=(0,A.useRef)({}),_=l.current,c=_;for(let v in r){const w=v==="base"?r[v]+(g[v]||""):g[v]||r[v];_===c&&w!==c[v]&&(l.current=c=p({},c)),c[v]=w,w!==r[v]&&(i=c)}return(0,A.createElement)(Ee.Provider,{value:i,children:y})},Pe=({children:o,component:u},y)=>u?(0,A.createElement)(u,{params:y}):typeof o=="function"?o(y):o,Re=o=>{var u=o,{path:y,nest:g,match:P}=u,T=S(u,["path","nest","match"]);const W=he(),[V]=be(W),[t,r,i]=P!=null?P:we(W.parser,y,V,g);if(!t)return null;const d=i?(0,A.createElement)(Se,{base:i},Pe(T,r)):Pe(T,r);return(0,A.createElement)(ke.Provider,{value:r,children:d})},$e=(0,A.forwardRef)((o,u)=>{const y=he(),[g,P]=be(y),T=o,{to:W,href:V=W,onClick:t,asChild:r,children:i,className:d,replace:m,state:l}=T,_=S(T,["to","href","onClick","asChild","children","className","replace","state"]),c=F(w=>{w.ctrlKey||w.metaKey||w.altKey||w.shiftKey||w.button!==0||(t==null||t(w),w.defaultPrevented||(w.preventDefault(),P(V,o)))}),v=y.hrefs(V[0]==="~"?V.slice(1):y.base+V,y);return r&&(0,A.isValidElement)(i)?(0,A.cloneElement)(i,{onClick:c,href:v}):(0,A.createElement)("a",k(p({},_),{onClick:c,href:v,className:d!=null&&d.call?d(g===v):d,children:i,ref:u}))}),Oe=o=>Array.isArray(o)?o.flatMap(u=>Oe(u&&u.type===A.Fragment?u.props.children:u)):[o],Ie=({children:o,location:u})=>{const y=he(),[g]=be(y);for(const P of Oe(o)){let T=0;if((0,A.isValidElement)(P)&&(T=we(y.parser,P.props.path,u||g,P.props.nest))[0])return(0,A.cloneElement)(P,{match:T})}return null},Te=o=>{const{to:u,href:y=u}=o,[,g]=ge(),P=useEvent(()=>g(u||y,o));return useIsomorphicLayoutEffect(()=>{P()},[]),null}},149:(z,s,E)=>{E.d(s,{l$:()=>W,Ay:()=>V});var h=E(1770);let X={data:""},Z=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||X,A=t=>{let r=Z(t),i=r.data;return r.data="",i},se=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ce=/\/\*[^]*?\*\/|  +/g,H=/\n+/g,j=(t,r)=>{let i="",d="",m="";for(let l in t){let _=t[l];l[0]=="@"?l[1]=="i"?i=l+" "+_+";":d+=l[1]=="f"?j(_,l):l+"{"+j(_,l[1]=="k"?"":r)+"}":typeof _=="object"?d+=j(_,r?r.replace(/([^,])+/g,c=>l.replace(/(^:.*)|([^,])+/g,v=>/&/.test(v)?v.replace(/&/g,c):c?c+" "+v:v)):l):_!=null&&(l=/^--/.test(l)?l:l.replace(/[A-Z]/g,"-$&").toLowerCase(),m+=j.p?j.p(l,_):l+":"+_+";")}return i+(r&&m?r+"{"+m+"}":m)+d},I={},M=t=>{if(typeof t=="object"){let r="";for(let i in t)r+=i+M(t[i]);return r}return t},x=(t,r,i,d,m)=>{let l=M(t),_=I[l]||(I[l]=(v=>{let w=0,B=11;for(;w<v.length;)B=101*B+v.charCodeAt(w++)>>>0;return"go"+B})(l));if(!I[_]){let v=l!==t?t:(w=>{let B,ye,de=[{}];for(;B=se.exec(w.replace(ce,""));)B[4]?de.shift():B[3]?(ye=B[3].replace(H," ").trim(),de.unshift(de[0][ye]=de[0][ye]||{})):de[0][B[1]]=B[2].replace(H," ").trim();return de[0]})(t);I[_]=j(m?{["@keyframes "+_]:v}:v,i?"":"."+_)}let c=i&&I.g?I.g:null;return i&&(I.g=I[_]),((v,w,B,ye)=>{ye?w.data=w.data.replace(ye,v):w.data.indexOf(v)===-1&&(w.data=B?v+w.data:w.data+v)})(I[_],r,d,c),_},$=(t,r,i)=>t.reduce((d,m,l)=>{let _=r[l];if(_&&_.call){let c=_(i),v=c&&c.props&&c.props.className||/^go/.test(c)&&c;_=v?"."+v:c&&typeof c=="object"?c.props?"":j(c,""):c===!1?"":c}return d+m+(_==null?"":_)},"");function C(t){let r=this||{},i=t.call?t(r.p):t;return x(i.unshift?i.raw?$(i,[].slice.call(arguments,1),r.p):i.reduce((d,m)=>Object.assign(d,m&&m.call?m(r.p):m),{}):i,Z(r.target),r.g,r.o,r.k)}let F,Y,D,ee=C.bind({g:1}),q=C.bind({k:1});function ie(t,r,i,d){j.p=r,F=t,Y=i,D=d}function K(t,r){let i=this||{};return function(){let d=arguments;function m(l,_){let c=Object.assign({},l),v=c.className||m.className;i.p=Object.assign({theme:Y&&Y()},c),i.o=/ *go\d+/.test(v),c.className=C.apply(i,d)+(v?" "+v:""),r&&(c.ref=_);let w=t;return t[0]&&(w=c.as||t,delete c.as),D&&w[0]&&D(c),F(w,c)}return r?r(m):m}}var te=t=>typeof t=="function",G=(t,r)=>te(t)?t(r):t,ue=(()=>{let t=0;return()=>(++t).toString()})(),fe=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let r=matchMedia("(prefers-reduced-motion: reduce)");t=!r||r.matches}return t}})(),ve=20,re=new Map,_e=1e3,ne=t=>{if(re.has(t))return;let r=setTimeout(()=>{re.delete(t),a({type:4,toastId:t})},_e);re.set(t,r)},pe=t=>{let r=re.get(t);r&&clearTimeout(r)},oe=(t,r)=>{switch(r.type){case 0:return ae(O({},t),{toasts:[r.toast,...t.toasts].slice(0,ve)});case 1:return r.toast.id&&pe(r.toast.id),ae(O({},t),{toasts:t.toasts.map(l=>l.id===r.toast.id?O(O({},l),r.toast):l)});case 2:let{toast:i}=r;return t.toasts.find(l=>l.id===i.id)?oe(t,{type:1,toast:i}):oe(t,{type:0,toast:i});case 3:let{toastId:d}=r;return d?ne(d):t.toasts.forEach(l=>{ne(l.id)}),ae(O({},t),{toasts:t.toasts.map(l=>l.id===d||d===void 0?ae(O({},l),{visible:!1}):l)});case 4:return r.toastId===void 0?ae(O({},t),{toasts:[]}):ae(O({},t),{toasts:t.toasts.filter(l=>l.id!==r.toastId)});case 5:return ae(O({},t),{pausedAt:r.time});case 6:let m=r.time-(t.pausedAt||0);return ae(O({},t),{pausedAt:void 0,toasts:t.toasts.map(l=>ae(O({},l),{pauseDuration:l.pauseDuration+m}))})}},J=[],le={toasts:[],pausedAt:void 0},a=t=>{le=oe(le,t),J.forEach(r=>{r(le)})},f={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},b=(t={})=>{let[r,i]=(0,h.useState)(le);(0,h.useEffect)(()=>(J.push(i),()=>{let m=J.indexOf(i);m>-1&&J.splice(m,1)}),[r]);let d=r.toasts.map(m=>{var l,_;return ae(O(O(O({},t),t[m.type]),m),{duration:m.duration||((l=t[m.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||f[m.type],style:O(O(O({},t.style),(_=t[m.type])==null?void 0:_.style),m.style)})});return ae(O({},r),{toasts:d})},e=(t,r="blank",i)=>ae(O({createdAt:Date.now(),visible:!0,type:r,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},i),{id:(i==null?void 0:i.id)||ue()}),n=t=>(r,i)=>{let d=e(r,t,i);return a({type:2,toast:d}),d.id},p=(t,r)=>n("blank")(t,r);p.error=n("error"),p.success=n("success"),p.loading=n("loading"),p.custom=n("custom"),p.dismiss=t=>{a({type:3,toastId:t})},p.remove=t=>a({type:4,toastId:t}),p.promise=(t,r,i)=>{let d=p.loading(r.loading,O(O({},i),i==null?void 0:i.loading));return t.then(m=>(p.success(G(r.success,m),O(O({id:d},i),i==null?void 0:i.success)),m)).catch(m=>{p.error(G(r.error,m),O(O({id:d},i),i==null?void 0:i.error))}),t};var k=(t,r)=>{a({type:1,toast:{id:t,height:r}})},S=()=>{a({type:5,time:Date.now()})},R=t=>{let{toasts:r,pausedAt:i}=b(t);(0,h.useEffect)(()=>{if(i)return;let l=Date.now(),_=r.map(c=>{if(c.duration===1/0)return;let v=(c.duration||0)+c.pauseDuration-(l-c.createdAt);if(v<0){c.visible&&p.dismiss(c.id);return}return setTimeout(()=>p.dismiss(c.id),v)});return()=>{_.forEach(c=>c&&clearTimeout(c))}},[r,i]);let d=(0,h.useCallback)(()=>{i&&a({type:6,time:Date.now()})},[i]),m=(0,h.useCallback)((l,_)=>{let{reverseOrder:c=!1,gutter:v=8,defaultPosition:w}=_||{},B=r.filter(me=>(me.position||w)===(l.position||w)&&me.height),ye=B.findIndex(me=>me.id===l.id),de=B.filter((me,je)=>je<ye&&me.visible).length;return B.filter(me=>me.visible).slice(...c?[de+1]:[0,de]).reduce((me,je)=>me+(je.height||0)+v,0)},[r]);return{toasts:r,handlers:{updateHeight:k,startPause:S,endPause:d,calculateOffset:m}}},L=q`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,U=q`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,N=q`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Q=K("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${U} 0.15s ease-out forwards;
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
    animation: ${N} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Ee=q`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,he=K("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${Ee} 1s linear infinite;
`,ke=q`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Le=q`
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
}`,be=K("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ke} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Le} 0.2s ease-out forwards;
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
`,ge=K("div")`
  position: absolute;
`,Ce=K("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,we=q`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,xe=K("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${we} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Se=({toast:t})=>{let{icon:r,type:i,iconTheme:d}=t;return r!==void 0?typeof r=="string"?h.createElement(xe,null,r):r:i==="blank"?null:h.createElement(Ce,null,h.createElement(he,O({},d)),i!=="loading"&&h.createElement(ge,null,i==="error"?h.createElement(Q,O({},d)):h.createElement(be,O({},d))))},Pe=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Re=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,$e="0%{opacity:0;} 100%{opacity:1;}",Oe="0%{opacity:1;} 100%{opacity:0;}",Ie=K("div")`
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
`,Te=K("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,o=(t,r)=>{let i=t.includes("top")?1:-1,[d,m]=fe()?[$e,Oe]:[Pe(i),Re(i)];return{animation:r?`${q(d)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${q(m)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},u=h.memo(({toast:t,position:r,style:i,children:d})=>{let m=t.height?o(t.position||r||"top-center",t.visible):{opacity:0},l=h.createElement(Se,{toast:t}),_=h.createElement(Te,O({},t.ariaProps),G(t.message,t));return h.createElement(Ie,{className:t.className,style:O(O(O({},m),i),t.style)},typeof d=="function"?d({icon:l,message:_}):h.createElement(h.Fragment,null,l,_))});ie(h.createElement);var y=({id:t,className:r,style:i,onHeightUpdate:d,children:m})=>{let l=h.useCallback(_=>{if(_){let c=()=>{let v=_.getBoundingClientRect().height;d(t,v)};c(),new MutationObserver(c).observe(_,{subtree:!0,childList:!0,characterData:!0})}},[t,d]);return h.createElement("div",{ref:l,className:r,style:i},m)},g=(t,r)=>{let i=t.includes("top"),d=i?{top:0}:{bottom:0},m=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return O(O({left:0,right:0,display:"flex",position:"absolute",transition:fe()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${r*(i?1:-1)}px)`},d),m)},P=C`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,T=16,W=({reverseOrder:t,position:r="top-center",toastOptions:i,gutter:d,children:m,containerStyle:l,containerClassName:_})=>{let{toasts:c,handlers:v}=R(i);return h.createElement("div",{style:O({position:"fixed",zIndex:9999,top:T,left:T,right:T,bottom:T,pointerEvents:"none"},l),className:_,onMouseEnter:v.startPause,onMouseLeave:v.endPause},c.map(w=>{let B=w.position||r,ye=v.calculateOffset(w,{reverseOrder:t,gutter:d,defaultPosition:r}),de=g(B,ye);return h.createElement(y,{id:w.id,key:w.id,onHeightUpdate:v.updateHeight,className:w.visible?P:"",style:de},w.type==="custom"?G(w.message,w):m?m(w):h.createElement(u,{toast:w,position:B}))}))},V=p}}]);
