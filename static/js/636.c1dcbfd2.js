"use strict";var Ae=Object.defineProperty,Me=Object.defineProperties;var ze=Object.getOwnPropertyDescriptors;var de=Object.getOwnPropertySymbols;var Fe=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable;var pe=(V,r,p)=>r in V?Ae(V,r,{enumerable:!0,configurable:!0,writable:!0,value:p}):V[r]=p,R=(V,r)=>{for(var p in r||(r={}))Fe.call(r,p)&&pe(V,p,r[p]);if(de)for(var p of de(r))Ue.call(r,p)&&pe(V,p,r[p]);return V},ae=(V,r)=>Me(V,ze(r));(self.webpackChunk_web_index=self.webpackChunk_web_index||[]).push([[636],{6770:function(V,r,p){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=p(3044),X=Symbol.for("react.element"),Z=Symbol.for("react.fragment"),ne=Object.prototype.hasOwnProperty,Q=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T={key:!0,ref:!0,__self:!0,__source:!0};function M(I,_,O){var b,w={},h=null,N=null;O!==void 0&&(h=""+O),_.key!==void 0&&(h=""+_.key),_.ref!==void 0&&(N=_.ref);for(b in _)ne.call(_,b)&&!T.hasOwnProperty(b)&&(w[b]=_[b]);if(I&&I.defaultProps)for(b in _=I.defaultProps,_)w[b]===void 0&&(w[b]=_[b]);return{$$typeof:X,type:I,key:h,ref:N,props:w,_owner:Q.current}}r.Fragment=Z,r.jsx=M,r.jsxs=M},1605:function(V,r){/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p=Symbol.for("react.element"),i=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),ne=Symbol.for("react.profiler"),Q=Symbol.for("react.provider"),T=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),b=Symbol.iterator;function w(e){return e===null||typeof e!="object"?null:(e=b&&e[b]||e["@@iterator"],typeof e=="function"?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,ee={};function A(e,n,l){this.props=e,this.context=n,this.refs=ee,this.updater=l||h}A.prototype.isReactComponent={},A.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},A.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function k(){}k.prototype=A.prototype;function x(e,n,l){this.props=e,this.context=n,this.refs=ee,this.updater=l||h}var re=x.prototype=new k;re.constructor=x,N(re,A.prototype),re.isPureReactComponent=!0;var c=Array.isArray,E=Object.prototype.hasOwnProperty,S={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function K(e,n,l){var $,j={},L=null,B=null;if(n!=null)for($ in n.ref!==void 0&&(B=n.ref),n.key!==void 0&&(L=""+n.key),n)E.call(n,$)&&!P.hasOwnProperty($)&&(j[$]=n[$]);var Y=arguments.length-2;if(Y===1)j.children=l;else if(1<Y){for(var W=Array(Y),oe=0;oe<Y;oe++)W[oe]=arguments[oe+2];j.children=W}if(e&&e.defaultProps)for($ in Y=e.defaultProps,Y)j[$]===void 0&&(j[$]=Y[$]);return{$$typeof:p,type:e,key:L,ref:B,props:j,_owner:S.current}}function F(e,n){return{$$typeof:p,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function U(e){return typeof e=="object"&&e!==null&&e.$$typeof===p}function q(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(l){return n[l]})}var H=/\/+/g;function G(e,n){return typeof e=="object"&&e!==null&&e.key!=null?q(""+e.key):n.toString(36)}function te(e,n,l,$,j){var L=typeof e;(L==="undefined"||L==="boolean")&&(e=null);var B=!1;if(e===null)B=!0;else switch(L){case"string":case"number":B=!0;break;case"object":switch(e.$$typeof){case p:case i:B=!0}}if(B)return B=e,j=j(B),e=$===""?"."+G(B,0):$,c(j)?(l="",e!=null&&(l=e.replace(H,"$&/")+"/"),te(j,n,l,"",function(oe){return oe})):j!=null&&(U(j)&&(j=F(j,l+(!j.key||B&&B.key===j.key?"":(""+j.key).replace(H,"$&/")+"/")+e)),n.push(j)),1;if(B=0,$=$===""?".":$+":",c(e))for(var Y=0;Y<e.length;Y++){L=e[Y];var W=$+G(L,Y);B+=te(L,n,l,W,j)}else if(W=w(e),typeof W=="function")for(e=W.call(e),Y=0;!(L=e.next()).done;)L=L.value,W=$+G(L,Y++),B+=te(L,n,l,W,j);else if(L==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return B}function z(e,n,l){if(e==null)return e;var $=[],j=0;return te(e,$,"","",function(L){return n.call(l,L,j++)}),$}function ue(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(l){(e._status===0||e._status===-1)&&(e._status=1,e._result=l)},function(l){(e._status===0||e._status===-1)&&(e._status=2,e._result=l)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var a={current:null},f={transition:null},v={ReactCurrentDispatcher:a,ReactCurrentBatchConfig:f,ReactCurrentOwner:S};r.Children={map:z,forEach:function(e,n,l){z(e,function(){n.apply(this,arguments)},l)},count:function(e){var n=0;return z(e,function(){n++}),n},toArray:function(e){return z(e,function(n){return n})||[]},only:function(e){if(!U(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=A,r.Fragment=X,r.Profiler=ne,r.PureComponent=x,r.StrictMode=Z,r.Suspense=I,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v,r.cloneElement=function(e,n,l){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var $=N({},e.props),j=e.key,L=e.ref,B=e._owner;if(n!=null){if(n.ref!==void 0&&(L=n.ref,B=S.current),n.key!==void 0&&(j=""+n.key),e.type&&e.type.defaultProps)var Y=e.type.defaultProps;for(W in n)E.call(n,W)&&!P.hasOwnProperty(W)&&($[W]=n[W]===void 0&&Y!==void 0?Y[W]:n[W])}var W=arguments.length-2;if(W===1)$.children=l;else if(1<W){Y=Array(W);for(var oe=0;oe<W;oe++)Y[oe]=arguments[oe+2];$.children=Y}return{$$typeof:p,type:e.type,key:j,ref:L,props:$,_owner:B}},r.createContext=function(e){return e={$$typeof:T,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Q,_context:e},e.Consumer=e},r.createElement=K,r.createFactory=function(e){var n=K.bind(null,e);return n.type=e,n},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:M,render:e}},r.isValidElement=U,r.lazy=function(e){return{$$typeof:O,_payload:{_status:-1,_result:e},_init:ue}},r.memo=function(e,n){return{$$typeof:_,type:e,compare:n===void 0?null:n}},r.startTransition=function(e){var n=f.transition;f.transition={};try{e()}finally{f.transition=n}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,n){return a.current.useCallback(e,n)},r.useContext=function(e){return a.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return a.current.useDeferredValue(e)},r.useEffect=function(e,n){return a.current.useEffect(e,n)},r.useId=function(){return a.current.useId()},r.useImperativeHandle=function(e,n,l){return a.current.useImperativeHandle(e,n,l)},r.useInsertionEffect=function(e,n){return a.current.useInsertionEffect(e,n)},r.useLayoutEffect=function(e,n){return a.current.useLayoutEffect(e,n)},r.useMemo=function(e,n){return a.current.useMemo(e,n)},r.useReducer=function(e,n,l){return a.current.useReducer(e,n,l)},r.useRef=function(e){return a.current.useRef(e)},r.useState=function(e){return a.current.useState(e)},r.useSyncExternalStore=function(e,n,l){return a.current.useSyncExternalStore(e,n,l)},r.useTransition=function(){return a.current.useTransition()},r.version="18.2.0"},3044:function(V,r,p){V.exports=p(1605)},9362:function(V,r,p){V.exports=p(6770)},6282:function(V,r){/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function p(a,f){var v=a.length;a.push(f);e:for(;0<v;){var e=v-1>>>1,n=a[e];if(0<Z(n,f))a[e]=f,a[v]=n,v=e;else break e}}function i(a){return a.length===0?null:a[0]}function X(a){if(a.length===0)return null;var f=a[0],v=a.pop();if(v!==f){a[0]=v;e:for(var e=0,n=a.length,l=n>>>1;e<l;){var $=2*(e+1)-1,j=a[$],L=$+1,B=a[L];if(0>Z(j,v))L<n&&0>Z(B,j)?(a[e]=B,a[L]=v,e=L):(a[e]=j,a[$]=v,e=$);else if(L<n&&0>Z(B,v))a[e]=B,a[L]=v,e=L;else break e}}return f}function Z(a,f){var v=a.sortIndex-f.sortIndex;return v!==0?v:a.id-f.id}if(typeof performance=="object"&&typeof performance.now=="function"){var ne=performance;r.unstable_now=function(){return ne.now()}}else{var Q=Date,T=Q.now();r.unstable_now=function(){return Q.now()-T}}var M=[],I=[],_=1,O=null,b=3,w=!1,h=!1,N=!1,ee=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(a){for(var f=i(I);f!==null;){if(f.callback===null)X(I);else if(f.startTime<=a)X(I),f.sortIndex=f.expirationTime,p(M,f);else break;f=i(I)}}function re(a){if(N=!1,x(a),!h)if(i(M)!==null)h=!0,z(c);else{var f=i(I);f!==null&&ue(re,f.startTime-a)}}function c(a,f){h=!1,N&&(N=!1,A(P),P=-1),w=!0;var v=b;try{for(x(f),O=i(M);O!==null&&(!(O.expirationTime>f)||a&&!U());){var e=O.callback;if(typeof e=="function"){O.callback=null,b=O.priorityLevel;var n=e(O.expirationTime<=f);f=r.unstable_now(),typeof n=="function"?O.callback=n:O===i(M)&&X(M),x(f)}else X(M);O=i(M)}if(O!==null)var l=!0;else{var $=i(I);$!==null&&ue(re,$.startTime-f),l=!1}return l}finally{O=null,b=v,w=!1}}var E=!1,S=null,P=-1,K=5,F=-1;function U(){return!(r.unstable_now()-F<K)}function q(){if(S!==null){var a=r.unstable_now();F=a;var f=!0;try{f=S(!0,a)}finally{f?H():(E=!1,S=null)}}else E=!1}var H;if(typeof k=="function")H=function(){k(q)};else if(typeof MessageChannel!="undefined"){var G=new MessageChannel,te=G.port2;G.port1.onmessage=q,H=function(){te.postMessage(null)}}else H=function(){ee(q,0)};function z(a){S=a,E||(E=!0,H())}function ue(a,f){P=ee(function(){a(r.unstable_now())},f)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(a){a.callback=null},r.unstable_continueExecution=function(){h||w||(h=!0,z(c))},r.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<a?Math.floor(1e3/a):5},r.unstable_getCurrentPriorityLevel=function(){return b},r.unstable_getFirstCallbackNode=function(){return i(M)},r.unstable_next=function(a){switch(b){case 1:case 2:case 3:var f=3;break;default:f=b}var v=b;b=f;try{return a()}finally{b=v}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(a,f){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var v=b;b=a;try{return f()}finally{b=v}},r.unstable_scheduleCallback=function(a,f,v){var e=r.unstable_now();switch(typeof v=="object"&&v!==null?(v=v.delay,v=typeof v=="number"&&0<v?e+v:e):v=e,a){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=v+n,a={id:_++,callback:f,priorityLevel:a,startTime:v,expirationTime:n,sortIndex:-1},v>e?(a.sortIndex=v,p(I,a),i(M)===null&&a===i(I)&&(N?(A(P),P=-1):N=!0,ue(re,v-e))):(a.sortIndex=n,p(M,a),h||w||(h=!0,z(c))),a},r.unstable_shouldYield=U,r.unstable_wrapCallback=function(a){var f=b;return function(){var v=b;b=f;try{return a.apply(this,arguments)}finally{b=v}}}},6958:function(V,r,p){V.exports=p(6282)},1894:function(V,r,p){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=p(3044);function X(w,h){return w===h&&(w!==0||1/w===1/h)||w!==w&&h!==h}var Z=typeof Object.is=="function"?Object.is:X,ne=i.useState,Q=i.useEffect,T=i.useLayoutEffect,M=i.useDebugValue;function I(w,h){var N=h(),ee=ne({inst:{value:N,getSnapshot:h}}),A=ee[0].inst,k=ee[1];return T(function(){A.value=N,A.getSnapshot=h,_(A)&&k({inst:A})},[w,N,h]),Q(function(){return _(A)&&k({inst:A}),w(function(){_(A)&&k({inst:A})})},[w]),M(N),N}function _(w){var h=w.getSnapshot;w=w.value;try{var N=h();return!Z(w,N)}catch(ee){return!0}}function O(w,h){return h()}var b=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?O:I;r.useSyncExternalStore=i.useSyncExternalStore!==void 0?i.useSyncExternalStore:b},7733:function(V,r,p){V.exports=p(1894)},9017:function(V,r,p){p.d(r,{rU:function(){return ee},AW:function(){return N},F0:function(){return h},rs:function(){return k},yj:function(){return w}});var i=p(5148);function X(c=Q){let E={};const S=P=>E[P]||(E[P]=c(P));return(P,K)=>{const{regexp:F,keys:U}=S(P||""),q=F.exec(K);return q?[!0,U.reduce((G,te,z)=>(G[te.name]=q[z+1],G),{})]:[!1,null]}}const Z=c=>c.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),ne=(c,E,S)=>{let P=c?"((?:[^\\/]+?)(?:\\/(?:[^\\/]+?))*)":"([^\\/]+?)";return E&&S&&(P="(?:\\/"+P+")"),P+(E?"?":"")},Q=c=>{const E=/:([A-Za-z0-9_]+)([?+*]?)/g;let S=null,P=0,K=[],F="";for(;(S=E.exec(c))!==null;){const[U,q,H]=S,G=H==="+"||H==="*",te=H==="?"||H==="*",z=te&&c[S.index-1]==="/"?1:0,ue=c.substring(P,S.index-z);K.push({name:q}),P=E.lastIndex,F+=Z(ue)+ne(G,te,z)}return F+=Z(c.substring(P)),{keys:K,regexp:new RegExp("^"+F+"(?:\\/)?$","i")}};var T=p(1990);const M={hook:i.ZP,matcher:X(),base:""},I=(0,T.kr)(M),_=()=>(0,T.qp)(I),O=c=>c.hook(c),b=()=>O(_()),w=c=>{const E=_(),[S]=O(E);return E.matcher(c,S)},h=({hook:c,matcher:E,ssrPath:S,base:P="",parent:K,children:F})=>{const U=(H,G=K||M)=>(H.hook=c||G.hook,H.matcher=E||G.matcher,H.ssrPath=S||G.ssrPath,H.ownBase=P,H.parent=K,H),[q]=(0,T.eJ)(()=>U({get base(){return(q.parent||M).base+q.ownBase}}));return(0,T.NU)(()=>{U(q)}),(0,T.az)(I.Provider,{value:q,children:F})},N=({path:c,match:E,component:S,children:P})=>{const K=w(c),[F,U]=E||K;return F?S?(0,T.az)(S,{params:U}):typeof P=="function"?P(U):P:null},ee=(0,T.Gp)((c,E)=>{const S=_(),[,P]=O(S),{to:K,href:F=K,children:U,onClick:q}=c,H=(0,T.zX)(z=>{z.ctrlKey||z.metaKey||z.altKey||z.shiftKey||z.button!==0||(q&&q(z),z.defaultPrevented||(z.preventDefault(),P(K||F,c)))}),G={href:F[0]==="~"?F.slice(1):S.base+F,onClick:H,to:null,ref:E},te=(0,T.l$)(U)?U:(0,T.az)("a",c);return(0,T.Tm)(te,G)}),A=c=>Array.isArray(c)?[].concat(...c.map(E=>E&&E.type===T.HY?A(E.props.children):A(E))):[c],k=({children:c,location:E})=>{const S=_(),P=S.matcher,[K]=O(S);for(const F of A(c)){let U=0;if((0,T.l$)(F)&&(U=F.props.path?P(F.props.path,E||K):[!0,{}])[0])return(0,T.Tm)(F,{match:U})}return null},x=c=>{const{to:E,href:S=E}=c,[,P]=b(),K=useEvent(()=>P(E||S,c));return useIsomorphicLayoutEffect(()=>{K()},[]),null};var re=null},1990:function(V,r,p){p.d(r,{HY:function(){return i.Fragment},Tm:function(){return i.cloneElement},kr:function(){return i.createContext},az:function(){return i.createElement},Gp:function(){return i.forwardRef},l$:function(){return i.isValidElement},qp:function(){return i.useContext},zX:function(){return b},NU:function(){return O},eJ:function(){return i.useState},$N:function(){return Z.useSyncExternalStore}});var i=p(3044),X=p.t(i,2),Z=p(7733);const{useEffect:ne,useLayoutEffect:Q,useRef:T,useInsertionEffect:M}=X,_=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?Q:ne,O=M||_,b=w=>{const h=T([w,(...N)=>h[0](...N)]).current;return O(()=>{h[0]=w}),h[1]}},5148:function(V,r,p){p.d(r,{Rx:function(){return w}});var i=p(1990);const X=(k="",x=location.pathname)=>x.toLowerCase().indexOf(k.toLowerCase())?"~"+x:x.slice(k.length)||"/",Z=(k,x="")=>k[0]==="~"?k.slice(1):x+k,ne="popstate",Q="pushState",T="replaceState",I=[ne,Q,T,"hashchange"],_=k=>{for(const x of I)addEventListener(x,k);return()=>{for(const x of I)removeEventListener(x,k)}},O=(k,x)=>(0,i.$N)(_,k,x),b=()=>location.search,w=()=>O(b),h=()=>location.pathname,N=({ssrPath:k}={})=>O(h,k?()=>k:h),ee=(k,{replace:x=!1}={})=>history[x?T:Q](null,"",k),A=(k={})=>[X(k.base,N(k)),(0,i.zX)((x,re)=>ee(Z(x,k.base),re))];if(r.ZP=A,typeof history!="undefined")for(const k of[Q,T]){const x=history[k];history[k]=function(){const re=x.apply(this,arguments),c=new Event(k);return c.arguments=arguments,dispatchEvent(c),re}}},9764:function(V,r,p){p.d(r,{x7:function(){return De},ZP:function(){return Ne}});var i=p(3044);let X={data:""},Z=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||X,ne=t=>{let o=Z(t),u=o.data;return o.data="",u},Q=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,T=/\/\*[^]*?\*\/|  +/g,M=/\n+/g,I=(t,o)=>{let u="",y="",d="";for(let s in t){let g=t[s];s[0]=="@"?s[1]=="i"?u=s+" "+g+";":y+=s[1]=="f"?I(g,s):s+"{"+I(g,s[1]=="k"?"":o)+"}":typeof g=="object"?y+=I(g,o?o.replace(/([^,])+/g,m=>s.replace(/(^:.*)|([^,])+/g,C=>/&/.test(C)?C.replace(/&/g,m):m?m+" "+C:C)):s):g!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),d+=I.p?I.p(s,g):s+":"+g+";")}return u+(o&&d?o+"{"+d+"}":d)+y},_={},O=t=>{if(typeof t=="object"){let o="";for(let u in t)o+=u+O(t[u]);return o}return t},b=(t,o,u,y,d)=>{let s=O(t),g=_[s]||(_[s]=(C=>{let D=0,J=11;for(;D<C.length;)J=101*J+C.charCodeAt(D++)>>>0;return"go"+J})(s));if(!_[g]){let C=s!==t?t:(D=>{let J,se,ie=[{}];for(;J=Q.exec(D.replace(T,""));)J[4]?ie.shift():J[3]?(se=J[3].replace(M," ").trim(),ie.unshift(ie[0][se]=ie[0][se]||{})):ie[0][J[1]]=J[2].replace(M," ").trim();return ie[0]})(t);_[g]=I(d?{["@keyframes "+g]:C}:C,u?"":"."+g)}let m=u&&_.g?_.g:null;return u&&(_.g=_[g]),((C,D,J,se)=>{se?D.data=D.data.replace(se,C):D.data.indexOf(C)===-1&&(D.data=J?C+D.data:D.data+C)})(_[g],o,y,m),g},w=(t,o,u)=>t.reduce((y,d,s)=>{let g=o[s];if(g&&g.call){let m=g(u),C=m&&m.props&&m.props.className||/^go/.test(m)&&m;g=C?"."+C:m&&typeof m=="object"?m.props?"":I(m,""):m===!1?"":m}return y+d+(g==null?"":g)},"");function h(t){let o=this||{},u=t.call?t(o.p):t;return b(u.unshift?u.raw?w(u,[].slice.call(arguments,1),o.p):u.reduce((y,d)=>Object.assign(y,d&&d.call?d(o.p):d),{}):u,Z(o.target),o.g,o.o,o.k)}let N,ee,A,k=h.bind({g:1}),x=h.bind({k:1});function re(t,o,u,y){I.p=o,N=t,ee=u,A=y}function c(t,o){let u=this||{};return function(){let y=arguments;function d(s,g){let m=Object.assign({},s),C=m.className||d.className;u.p=Object.assign({theme:ee&&ee()},m),u.o=/ *go\d+/.test(C),m.className=h.apply(u,y)+(C?" "+C:""),o&&(m.ref=g);let D=t;return t[0]&&(D=m.as||t,delete m.as),A&&D[0]&&A(m),N(D,m)}return o?o(d):d}}var E=t=>typeof t=="function",S=(t,o)=>E(t)?t(o):t,P=(()=>{let t=0;return()=>(++t).toString()})(),K=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let o=matchMedia("(prefers-reduced-motion: reduce)");t=!o||o.matches}return t}})(),F=20,U=new Map,q=1e3,H=t=>{if(U.has(t))return;let o=setTimeout(()=>{U.delete(t),a({type:4,toastId:t})},q);U.set(t,o)},G=t=>{let o=U.get(t);o&&clearTimeout(o)},te=(t,o)=>{switch(o.type){case 0:return ae(R({},t),{toasts:[o.toast,...t.toasts].slice(0,F)});case 1:return o.toast.id&&G(o.toast.id),ae(R({},t),{toasts:t.toasts.map(s=>s.id===o.toast.id?R(R({},s),o.toast):s)});case 2:let{toast:u}=o;return t.toasts.find(s=>s.id===u.id)?te(t,{type:1,toast:u}):te(t,{type:0,toast:u});case 3:let{toastId:y}=o;return y?H(y):t.toasts.forEach(s=>{H(s.id)}),ae(R({},t),{toasts:t.toasts.map(s=>s.id===y||y===void 0?ae(R({},s),{visible:!1}):s)});case 4:return o.toastId===void 0?ae(R({},t),{toasts:[]}):ae(R({},t),{toasts:t.toasts.filter(s=>s.id!==o.toastId)});case 5:return ae(R({},t),{pausedAt:o.time});case 6:let d=o.time-(t.pausedAt||0);return ae(R({},t),{pausedAt:void 0,toasts:t.toasts.map(s=>ae(R({},s),{pauseDuration:s.pauseDuration+d}))})}},z=[],ue={toasts:[],pausedAt:void 0},a=t=>{ue=te(ue,t),z.forEach(o=>{o(ue)})},f={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},v=(t={})=>{let[o,u]=(0,i.useState)(ue);(0,i.useEffect)(()=>(z.push(u),()=>{let d=z.indexOf(u);d>-1&&z.splice(d,1)}),[o]);let y=o.toasts.map(d=>{var s,g;return ae(R(R(R({},t),t[d.type]),d),{duration:d.duration||((s=t[d.type])==null?void 0:s.duration)||(t==null?void 0:t.duration)||f[d.type],style:R(R(R({},t.style),(g=t[d.type])==null?void 0:g.style),d.style)})});return ae(R({},o),{toasts:y})},e=(t,o="blank",u)=>ae(R({createdAt:Date.now(),visible:!0,type:o,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},u),{id:(u==null?void 0:u.id)||P()}),n=t=>(o,u)=>{let y=e(o,t,u);return a({type:2,toast:y}),y.id},l=(t,o)=>n("blank")(t,o);l.error=n("error"),l.success=n("success"),l.loading=n("loading"),l.custom=n("custom"),l.dismiss=t=>{a({type:3,toastId:t})},l.remove=t=>a({type:4,toastId:t}),l.promise=(t,o,u)=>{let y=l.loading(o.loading,R(R({},u),u==null?void 0:u.loading));return t.then(d=>(l.success(S(o.success,d),R(R({id:y},u),u==null?void 0:u.success)),d)).catch(d=>{l.error(S(o.error,d),R(R({id:y},u),u==null?void 0:u.error))}),t};var $=(t,o)=>{a({type:1,toast:{id:t,height:o}})},j=()=>{a({type:5,time:Date.now()})},L=t=>{let{toasts:o,pausedAt:u}=v(t);(0,i.useEffect)(()=>{if(u)return;let s=Date.now(),g=o.map(m=>{if(m.duration===1/0)return;let C=(m.duration||0)+m.pauseDuration-(s-m.createdAt);if(C<0){m.visible&&l.dismiss(m.id);return}return setTimeout(()=>l.dismiss(m.id),C)});return()=>{g.forEach(m=>m&&clearTimeout(m))}},[o,u]);let y=(0,i.useCallback)(()=>{u&&a({type:6,time:Date.now()})},[u]),d=(0,i.useCallback)((s,g)=>{let{reverseOrder:m=!1,gutter:C=8,defaultPosition:D}=g||{},J=o.filter(ce=>(ce.position||D)===(s.position||D)&&ce.height),se=J.findIndex(ce=>ce.id===s.id),ie=J.filter((ce,fe)=>fe<se&&ce.visible).length;return J.filter(ce=>ce.visible).slice(...m?[ie+1]:[0,ie]).reduce((ce,fe)=>ce+(fe.height||0)+C,0)},[o]);return{toasts:o,handlers:{updateHeight:$,startPause:j,endPause:y,calculateOffset:d}}},B=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Y=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,W=x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,oe=c("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${B} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Y} 0.15s ease-out forwards;
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
    animation: ${W} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ye=x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,me=c("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${ye} 1s linear infinite;
`,he=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ve=x`
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
}`,ge=c("div")`
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
`,be=c("div")`
  position: absolute;
`,_e=c("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,we=x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ke=c("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${we} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ee=({toast:t})=>{let{icon:o,type:u,iconTheme:y}=t;return o!==void 0?typeof o=="string"?i.createElement(ke,null,o):o:u==="blank"?null:i.createElement(_e,null,i.createElement(me,R({},y)),u!=="loading"&&i.createElement(be,null,u==="error"?i.createElement(oe,R({},y)):i.createElement(ge,R({},y))))},Se=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,xe=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Pe="0%{opacity:0;} 100%{opacity:1;}",Re="0%{opacity:1;} 100%{opacity:0;}",$e=c("div")`
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
`,Ce=c("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ie=(t,o)=>{let u=t.includes("top")?1:-1,[y,d]=K()?[Pe,Re]:[Se(u),xe(u)];return{animation:o?`${x(y)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(d)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Oe=i.memo(({toast:t,position:o,style:u,children:y})=>{let d=t.height?Ie(t.position||o||"top-center",t.visible):{opacity:0},s=i.createElement(Ee,{toast:t}),g=i.createElement(Ce,R({},t.ariaProps),S(t.message,t));return i.createElement($e,{className:t.className,style:R(R(R({},d),u),t.style)},typeof y=="function"?y({icon:s,message:g}):i.createElement(i.Fragment,null,s,g))});re(i.createElement);var je=({id:t,className:o,style:u,onHeightUpdate:y,children:d})=>{let s=i.useCallback(g=>{if(g){let m=()=>{let C=g.getBoundingClientRect().height;y(t,C)};m(),new MutationObserver(m).observe(g,{subtree:!0,childList:!0,characterData:!0})}},[t,y]);return i.createElement("div",{ref:s,className:o,style:u},d)},Te=(t,o)=>{let u=t.includes("top"),y=u?{top:0}:{bottom:0},d=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return R(R({left:0,right:0,display:"flex",position:"absolute",transition:K()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${o*(u?1:-1)}px)`},y),d)},Le=h`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,le=16,De=({reverseOrder:t,position:o="top-center",toastOptions:u,gutter:y,children:d,containerStyle:s,containerClassName:g})=>{let{toasts:m,handlers:C}=L(u);return i.createElement("div",{style:R({position:"fixed",zIndex:9999,top:le,left:le,right:le,bottom:le,pointerEvents:"none"},s),className:g,onMouseEnter:C.startPause,onMouseLeave:C.endPause},m.map(D=>{let J=D.position||o,se=C.calculateOffset(D,{reverseOrder:t,gutter:y,defaultPosition:o}),ie=Te(J,se);return i.createElement(je,{id:D.id,key:D.id,onHeightUpdate:C.updateHeight,className:D.visible?Le:"",style:ie},D.type==="custom"?S(D.message,D):d?d(D):i.createElement(Oe,{toast:D,position:J}))}))},Ne=l}}]);
