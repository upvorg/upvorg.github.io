"use strict";var Ae=Object.defineProperty,Me=Object.defineProperties;var ze=Object.getOwnPropertyDescriptors;var de=Object.getOwnPropertySymbols;var Fe=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable;var pe=(H,r,p)=>r in H?Ae(H,r,{enumerable:!0,configurable:!0,writable:!0,value:p}):H[r]=p,R=(H,r)=>{for(var p in r||(r={}))Fe.call(r,p)&&pe(H,p,r[p]);if(de)for(var p of de(r))Ue.call(r,p)&&pe(H,p,r[p]);return H},ae=(H,r)=>Me(H,ze(r));(self.webpackChunk_web_index=self.webpackChunk_web_index||[]).push([[643],{1367:function(H,r,p){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=p(5813),J=Symbol.for("react.element"),q=Symbol.for("react.fragment"),ne=Object.prototype.hasOwnProperty,X=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function M(C,w,I){var _,k={},g=null,D=null;I!==void 0&&(g=""+I),w.key!==void 0&&(g=""+w.key),w.ref!==void 0&&(D=w.ref);for(_ in w)ne.call(w,_)&&!j.hasOwnProperty(_)&&(k[_]=w[_]);if(C&&C.defaultProps)for(_ in w=C.defaultProps,w)k[_]===void 0&&(k[_]=w[_]);return{$$typeof:J,type:C,key:g,ref:D,props:k,_owner:X.current}}r.Fragment=q,r.jsx=M,r.jsxs=M},6280:function(H,r){/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p=Symbol.for("react.element"),i=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),ne=Symbol.for("react.profiler"),X=Symbol.for("react.provider"),j=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),_=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=_&&e[_]||e["@@iterator"],typeof e=="function"?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,Q={};function y(e,n,l){this.props=e,this.context=n,this.refs=Q,this.updater=l||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function N(){}N.prototype=y.prototype;function K(e,n,l){this.props=e,this.context=n,this.refs=Q,this.updater=l||g}var re=K.prototype=new N;re.constructor=K,D(re,y.prototype),re.isPureReactComponent=!0;var c=Array.isArray,E=Object.prototype.hasOwnProperty,S={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function B(e,n,l){var P,O={},T=null,U=null;if(n!=null)for(P in n.ref!==void 0&&(U=n.ref),n.key!==void 0&&(T=""+n.key),n)E.call(n,P)&&!x.hasOwnProperty(P)&&(O[P]=n[P]);var Y=arguments.length-2;if(Y===1)O.children=l;else if(1<Y){for(var V=Array(Y),oe=0;oe<Y;oe++)V[oe]=arguments[oe+2];O.children=V}if(e&&e.defaultProps)for(P in Y=e.defaultProps,Y)O[P]===void 0&&(O[P]=Y[P]);return{$$typeof:p,type:e,key:T,ref:U,props:O,_owner:S.current}}function z(e,n){return{$$typeof:p,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function A(e){return typeof e=="object"&&e!==null&&e.$$typeof===p}function Z(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(l){return n[l]})}var W=/\/+/g;function te(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Z(""+e.key):n.toString(36)}function ee(e,n,l,P,O){var T=typeof e;(T==="undefined"||T==="boolean")&&(e=null);var U=!1;if(e===null)U=!0;else switch(T){case"string":case"number":U=!0;break;case"object":switch(e.$$typeof){case p:case i:U=!0}}if(U)return U=e,O=O(U),e=P===""?"."+te(U,0):P,c(O)?(l="",e!=null&&(l=e.replace(W,"$&/")+"/"),ee(O,n,l,"",function(oe){return oe})):O!=null&&(A(O)&&(O=z(O,l+(!O.key||U&&U.key===O.key?"":(""+O.key).replace(W,"$&/")+"/")+e)),n.push(O)),1;if(U=0,P=P===""?".":P+":",c(e))for(var Y=0;Y<e.length;Y++){T=e[Y];var V=P+te(T,Y);U+=ee(T,n,l,V,O)}else if(V=k(e),typeof V=="function")for(e=V.call(e),Y=0;!(T=e.next()).done;)T=T.value,V=P+te(T,Y++),U+=ee(T,n,l,V,O);else if(T==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return U}function F(e,n,l){if(e==null)return e;var P=[],O=0;return ee(e,P,"","",function(T){return n.call(l,T,O++)}),P}function ue(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(l){(e._status===0||e._status===-1)&&(e._status=1,e._result=l)},function(l){(e._status===0||e._status===-1)&&(e._status=2,e._result=l)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var a={current:null},f={transition:null},v={ReactCurrentDispatcher:a,ReactCurrentBatchConfig:f,ReactCurrentOwner:S};r.Children={map:F,forEach:function(e,n,l){F(e,function(){n.apply(this,arguments)},l)},count:function(e){var n=0;return F(e,function(){n++}),n},toArray:function(e){return F(e,function(n){return n})||[]},only:function(e){if(!A(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=y,r.Fragment=J,r.Profiler=ne,r.PureComponent=K,r.StrictMode=q,r.Suspense=C,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v,r.cloneElement=function(e,n,l){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var P=D({},e.props),O=e.key,T=e.ref,U=e._owner;if(n!=null){if(n.ref!==void 0&&(T=n.ref,U=S.current),n.key!==void 0&&(O=""+n.key),e.type&&e.type.defaultProps)var Y=e.type.defaultProps;for(V in n)E.call(n,V)&&!x.hasOwnProperty(V)&&(P[V]=n[V]===void 0&&Y!==void 0?Y[V]:n[V])}var V=arguments.length-2;if(V===1)P.children=l;else if(1<V){Y=Array(V);for(var oe=0;oe<V;oe++)Y[oe]=arguments[oe+2];P.children=Y}return{$$typeof:p,type:e.type,key:O,ref:T,props:P,_owner:U}},r.createContext=function(e){return e={$$typeof:j,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:X,_context:e},e.Consumer=e},r.createElement=B,r.createFactory=function(e){var n=B.bind(null,e);return n.type=e,n},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:M,render:e}},r.isValidElement=A,r.lazy=function(e){return{$$typeof:I,_payload:{_status:-1,_result:e},_init:ue}},r.memo=function(e,n){return{$$typeof:w,type:e,compare:n===void 0?null:n}},r.startTransition=function(e){var n=f.transition;f.transition={};try{e()}finally{f.transition=n}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,n){return a.current.useCallback(e,n)},r.useContext=function(e){return a.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return a.current.useDeferredValue(e)},r.useEffect=function(e,n){return a.current.useEffect(e,n)},r.useId=function(){return a.current.useId()},r.useImperativeHandle=function(e,n,l){return a.current.useImperativeHandle(e,n,l)},r.useInsertionEffect=function(e,n){return a.current.useInsertionEffect(e,n)},r.useLayoutEffect=function(e,n){return a.current.useLayoutEffect(e,n)},r.useMemo=function(e,n){return a.current.useMemo(e,n)},r.useReducer=function(e,n,l){return a.current.useReducer(e,n,l)},r.useRef=function(e){return a.current.useRef(e)},r.useState=function(e){return a.current.useState(e)},r.useSyncExternalStore=function(e,n,l){return a.current.useSyncExternalStore(e,n,l)},r.useTransition=function(){return a.current.useTransition()},r.version="18.2.0"},5813:function(H,r,p){H.exports=p(6280)},7339:function(H,r,p){H.exports=p(1367)},9152:function(H,r){/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function p(a,f){var v=a.length;a.push(f);e:for(;0<v;){var e=v-1>>>1,n=a[e];if(0<q(n,f))a[e]=f,a[v]=n,v=e;else break e}}function i(a){return a.length===0?null:a[0]}function J(a){if(a.length===0)return null;var f=a[0],v=a.pop();if(v!==f){a[0]=v;e:for(var e=0,n=a.length,l=n>>>1;e<l;){var P=2*(e+1)-1,O=a[P],T=P+1,U=a[T];if(0>q(O,v))T<n&&0>q(U,O)?(a[e]=U,a[T]=v,e=T):(a[e]=O,a[P]=v,e=P);else if(T<n&&0>q(U,v))a[e]=U,a[T]=v,e=T;else break e}}return f}function q(a,f){var v=a.sortIndex-f.sortIndex;return v!==0?v:a.id-f.id}if(typeof performance=="object"&&typeof performance.now=="function"){var ne=performance;r.unstable_now=function(){return ne.now()}}else{var X=Date,j=X.now();r.unstable_now=function(){return X.now()-j}}var M=[],C=[],w=1,I=null,_=3,k=!1,g=!1,D=!1,Q=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function K(a){for(var f=i(C);f!==null;){if(f.callback===null)J(C);else if(f.startTime<=a)J(C),f.sortIndex=f.expirationTime,p(M,f);else break;f=i(C)}}function re(a){if(D=!1,K(a),!g)if(i(M)!==null)g=!0,F(c);else{var f=i(C);f!==null&&ue(re,f.startTime-a)}}function c(a,f){g=!1,D&&(D=!1,y(x),x=-1),k=!0;var v=_;try{for(K(f),I=i(M);I!==null&&(!(I.expirationTime>f)||a&&!A());){var e=I.callback;if(typeof e=="function"){I.callback=null,_=I.priorityLevel;var n=e(I.expirationTime<=f);f=r.unstable_now(),typeof n=="function"?I.callback=n:I===i(M)&&J(M),K(f)}else J(M);I=i(M)}if(I!==null)var l=!0;else{var P=i(C);P!==null&&ue(re,P.startTime-f),l=!1}return l}finally{I=null,_=v,k=!1}}var E=!1,S=null,x=-1,B=5,z=-1;function A(){return!(r.unstable_now()-z<B)}function Z(){if(S!==null){var a=r.unstable_now();z=a;var f=!0;try{f=S(!0,a)}finally{f?W():(E=!1,S=null)}}else E=!1}var W;if(typeof N=="function")W=function(){N(Z)};else if(typeof MessageChannel!="undefined"){var te=new MessageChannel,ee=te.port2;te.port1.onmessage=Z,W=function(){ee.postMessage(null)}}else W=function(){Q(Z,0)};function F(a){S=a,E||(E=!0,W())}function ue(a,f){x=Q(function(){a(r.unstable_now())},f)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(a){a.callback=null},r.unstable_continueExecution=function(){g||k||(g=!0,F(c))},r.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<a?Math.floor(1e3/a):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_getFirstCallbackNode=function(){return i(M)},r.unstable_next=function(a){switch(_){case 1:case 2:case 3:var f=3;break;default:f=_}var v=_;_=f;try{return a()}finally{_=v}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(a,f){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var v=_;_=a;try{return f()}finally{_=v}},r.unstable_scheduleCallback=function(a,f,v){var e=r.unstable_now();switch(typeof v=="object"&&v!==null?(v=v.delay,v=typeof v=="number"&&0<v?e+v:e):v=e,a){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=v+n,a={id:w++,callback:f,priorityLevel:a,startTime:v,expirationTime:n,sortIndex:-1},v>e?(a.sortIndex=v,p(C,a),i(M)===null&&a===i(C)&&(D?(y(x),x=-1):D=!0,ue(re,v-e))):(a.sortIndex=n,p(M,a),g||k||(g=!0,F(c))),a},r.unstable_shouldYield=A,r.unstable_wrapCallback=function(a){var f=_;return function(){var v=_;_=f;try{return a.apply(this,arguments)}finally{_=v}}}},6052:function(H,r,p){H.exports=p(9152)},8859:function(H,r,p){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=p(5813);function J(k,g){return k===g&&(k!==0||1/k===1/g)||k!==k&&g!==g}var q=typeof Object.is=="function"?Object.is:J,ne=i.useState,X=i.useEffect,j=i.useLayoutEffect,M=i.useDebugValue;function C(k,g){var D=g(),Q=ne({inst:{value:D,getSnapshot:g}}),y=Q[0].inst,N=Q[1];return j(function(){y.value=D,y.getSnapshot=g,w(y)&&N({inst:y})},[k,D,g]),X(function(){return w(y)&&N({inst:y}),k(function(){w(y)&&N({inst:y})})},[k]),M(D),D}function w(k){var g=k.getSnapshot;k=k.value;try{var D=g();return!q(k,D)}catch(Q){return!0}}function I(k,g){return g()}var _=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?I:C;r.useSyncExternalStore=i.useSyncExternalStore!==void 0?i.useSyncExternalStore:_},3824:function(H,r,p){H.exports=p(8859)},8983:function(H,r,p){p.d(r,{rU:function(){return Q},AW:function(){return D},F0:function(){return g},rs:function(){return N},yj:function(){return k}});var i=p(683);function J(c=X){let E={};const S=x=>E[x]||(E[x]=c(x));return(x,B)=>{const{regexp:z,keys:A}=S(x||""),Z=z.exec(B);return Z?[!0,A.reduce((te,ee,F)=>(te[ee.name]=Z[F+1],te),{})]:[!1,null]}}const q=c=>c.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),ne=(c,E,S)=>{let x=c?"((?:[^\\/]+?)(?:\\/(?:[^\\/]+?))*)":"([^\\/]+?)";return E&&S&&(x="(?:\\/"+x+")"),x+(E?"?":"")},X=c=>{const E=/:([A-Za-z0-9_]+)([?+*]?)/g;let S=null,x=0,B=[],z="";for(;(S=E.exec(c))!==null;){const[A,Z,W]=S,te=W==="+"||W==="*",ee=W==="?"||W==="*",F=ee&&c[S.index-1]==="/"?1:0,ue=c.substring(x,S.index-F);B.push({name:Z}),x=E.lastIndex,z+=q(ue)+ne(te,ee,F)}return z+=q(c.substring(x)),{keys:B,regexp:new RegExp("^"+z+"(?:\\/)?$","i")}};var j=p(7285);const M={hook:i.ZP,matcher:J(),base:""},C=(0,j.kr)(M),w=()=>(0,j.qp)(C),I=c=>c.hook(c),_=()=>I(w()),k=c=>{const E=w(),[S]=I(E);return E.matcher(c,S)},g=({hook:c,matcher:E,base:S="",parent:x,children:B})=>{const z=(Z,W=x||M)=>(Z.hook=c||W.hook,Z.matcher=E||W.matcher,Z.ownBase=S,Z.parent=x,Z),[A]=(0,j.eJ)(()=>z({get base(){return(A.parent||M).base+A.ownBase}}));return(0,j.NU)(()=>{z(A)}),(0,j.az)(C.Provider,{value:A,children:B})},D=({path:c,match:E,component:S,children:x})=>{const B=k(c),[z,A]=E||B;return z?S?(0,j.az)(S,{params:A}):typeof x=="function"?x(A):x:null},Q=(0,j.Gp)((c,E)=>{const S=w(),[,x]=I(S),{to:B,href:z=B,children:A,onClick:Z}=c,W=(0,j.zX)(F=>{F.ctrlKey||F.metaKey||F.altKey||F.shiftKey||F.button!==0||(Z&&Z(F),F.defaultPrevented||(F.preventDefault(),x(B||z,c)))}),te={href:z[0]==="~"?z.slice(1):S.base+z,onClick:W,to:null,ref:E},ee=(0,j.l$)(A)?A:(0,j.az)("a",c);return(0,j.Tm)(ee,te)}),y=c=>Array.isArray(c)?[].concat(...c.map(E=>E&&E.type===j.HY?y(E.props.children):y(E))):[c],N=({children:c,location:E})=>{const S=w(),x=S.matcher,[B]=I(S);for(const z of y(c)){let A=0;if((0,j.l$)(z)&&(A=z.props.path?x(z.props.path,E||B):[!0,{}])[0])return(0,j.Tm)(z,{match:A})}return null},K=c=>{const{to:E,href:S=E}=c,[,x]=_(),B=useEvent(()=>x(E||S,c));return useIsomorphicLayoutEffect(()=>{B()},[]),null};var re=null},7285:function(H,r,p){p.d(r,{HY:function(){return i.Fragment},Tm:function(){return i.cloneElement},kr:function(){return i.createContext},az:function(){return i.createElement},Gp:function(){return i.forwardRef},l$:function(){return i.isValidElement},qp:function(){return i.useContext},zX:function(){return _},NU:function(){return I},eJ:function(){return i.useState},$N:function(){return q.useSyncExternalStore}});var i=p(5813),J=p.t(i,2),q=p(3824);const{useEffect:ne,useLayoutEffect:X,useRef:j,useInsertionEffect:M}=J,w=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?X:ne,I=M||w,_=k=>{const g=j([k,(...D)=>g[0](...D)]).current;return I(()=>{g[0]=k}),g[1]}},683:function(H,r,p){p.d(r,{Rx:function(){return k}});var i=p(7285);const J=(y="",N=location.pathname)=>N.toLowerCase().indexOf(y.toLowerCase())?"~"+N:N.slice(y.length)||"/",q=(y,N="")=>y[0]==="~"?y.slice(1):N+y,ne="popstate",X="pushState",j="replaceState",C=[ne,X,j,"hashchange"],w=y=>{for(const N of C)addEventListener(N,y);return()=>{for(const N of C)removeEventListener(N,y)}},I=y=>(0,i.$N)(w,y),_=()=>location.search,k=()=>I(_),g=()=>location.pathname,D=()=>I(g),Q=(y,{replace:N=!1}={})=>history[N?j:X](null,"",y);if(r.ZP=(y={})=>[J(y.base,D()),(0,i.zX)((N,K)=>Q(q(N,y.base),K))],typeof history!="undefined")for(const y of[X,j]){const N=history[y];history[y]=function(){const K=N.apply(this,arguments),re=new Event(y);return re.arguments=arguments,dispatchEvent(re),K}}},6679:function(H,r,p){p.d(r,{x7:function(){return De},ZP:function(){return Ne}});var i=p(5813);let J={data:""},q=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||J,ne=t=>{let o=q(t),u=o.data;return o.data="",u},X=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,j=/\/\*[^]*?\*\/|  +/g,M=/\n+/g,C=(t,o)=>{let u="",m="",d="";for(let s in t){let b=t[s];s[0]=="@"?s[1]=="i"?u=s+" "+b+";":m+=s[1]=="f"?C(b,s):s+"{"+C(b,s[1]=="k"?"":o)+"}":typeof b=="object"?m+=C(b,o?o.replace(/([^,])+/g,h=>s.replace(/(^:.*)|([^,])+/g,$=>/&/.test($)?$.replace(/&/g,h):h?h+" "+$:$)):s):b!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),d+=C.p?C.p(s,b):s+":"+b+";")}return u+(o&&d?o+"{"+d+"}":d)+m},w={},I=t=>{if(typeof t=="object"){let o="";for(let u in t)o+=u+I(t[u]);return o}return t},_=(t,o,u,m,d)=>{let s=I(t),b=w[s]||(w[s]=($=>{let L=0,G=11;for(;L<$.length;)G=101*G+$.charCodeAt(L++)>>>0;return"go"+G})(s));if(!w[b]){let $=s!==t?t:(L=>{let G,se,ie=[{}];for(;G=X.exec(L.replace(j,""));)G[4]?ie.shift():G[3]?(se=G[3].replace(M," ").trim(),ie.unshift(ie[0][se]=ie[0][se]||{})):ie[0][G[1]]=G[2].replace(M," ").trim();return ie[0]})(t);w[b]=C(d?{["@keyframes "+b]:$}:$,u?"":"."+b)}let h=u&&w.g?w.g:null;return u&&(w.g=w[b]),(($,L,G,se)=>{se?L.data=L.data.replace(se,$):L.data.indexOf($)===-1&&(L.data=G?$+L.data:L.data+$)})(w[b],o,m,h),b},k=(t,o,u)=>t.reduce((m,d,s)=>{let b=o[s];if(b&&b.call){let h=b(u),$=h&&h.props&&h.props.className||/^go/.test(h)&&h;b=$?"."+$:h&&typeof h=="object"?h.props?"":C(h,""):h===!1?"":h}return m+d+(b==null?"":b)},"");function g(t){let o=this||{},u=t.call?t(o.p):t;return _(u.unshift?u.raw?k(u,[].slice.call(arguments,1),o.p):u.reduce((m,d)=>Object.assign(m,d&&d.call?d(o.p):d),{}):u,q(o.target),o.g,o.o,o.k)}let D,Q,y,N=g.bind({g:1}),K=g.bind({k:1});function re(t,o,u,m){C.p=o,D=t,Q=u,y=m}function c(t,o){let u=this||{};return function(){let m=arguments;function d(s,b){let h=Object.assign({},s),$=h.className||d.className;u.p=Object.assign({theme:Q&&Q()},h),u.o=/ *go\d+/.test($),h.className=g.apply(u,m)+($?" "+$:""),o&&(h.ref=b);let L=t;return t[0]&&(L=h.as||t,delete h.as),y&&L[0]&&y(h),D(L,h)}return o?o(d):d}}var E=t=>typeof t=="function",S=(t,o)=>E(t)?t(o):t,x=(()=>{let t=0;return()=>(++t).toString()})(),B=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let o=matchMedia("(prefers-reduced-motion: reduce)");t=!o||o.matches}return t}})(),z=20,A=new Map,Z=1e3,W=t=>{if(A.has(t))return;let o=setTimeout(()=>{A.delete(t),a({type:4,toastId:t})},Z);A.set(t,o)},te=t=>{let o=A.get(t);o&&clearTimeout(o)},ee=(t,o)=>{switch(o.type){case 0:return ae(R({},t),{toasts:[o.toast,...t.toasts].slice(0,z)});case 1:return o.toast.id&&te(o.toast.id),ae(R({},t),{toasts:t.toasts.map(s=>s.id===o.toast.id?R(R({},s),o.toast):s)});case 2:let{toast:u}=o;return t.toasts.find(s=>s.id===u.id)?ee(t,{type:1,toast:u}):ee(t,{type:0,toast:u});case 3:let{toastId:m}=o;return m?W(m):t.toasts.forEach(s=>{W(s.id)}),ae(R({},t),{toasts:t.toasts.map(s=>s.id===m||m===void 0?ae(R({},s),{visible:!1}):s)});case 4:return o.toastId===void 0?ae(R({},t),{toasts:[]}):ae(R({},t),{toasts:t.toasts.filter(s=>s.id!==o.toastId)});case 5:return ae(R({},t),{pausedAt:o.time});case 6:let d=o.time-(t.pausedAt||0);return ae(R({},t),{pausedAt:void 0,toasts:t.toasts.map(s=>ae(R({},s),{pauseDuration:s.pauseDuration+d}))})}},F=[],ue={toasts:[],pausedAt:void 0},a=t=>{ue=ee(ue,t),F.forEach(o=>{o(ue)})},f={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},v=(t={})=>{let[o,u]=(0,i.useState)(ue);(0,i.useEffect)(()=>(F.push(u),()=>{let d=F.indexOf(u);d>-1&&F.splice(d,1)}),[o]);let m=o.toasts.map(d=>{var s,b;return ae(R(R(R({},t),t[d.type]),d),{duration:d.duration||((s=t[d.type])==null?void 0:s.duration)||(t==null?void 0:t.duration)||f[d.type],style:R(R(R({},t.style),(b=t[d.type])==null?void 0:b.style),d.style)})});return ae(R({},o),{toasts:m})},e=(t,o="blank",u)=>ae(R({createdAt:Date.now(),visible:!0,type:o,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},u),{id:(u==null?void 0:u.id)||x()}),n=t=>(o,u)=>{let m=e(o,t,u);return a({type:2,toast:m}),m.id},l=(t,o)=>n("blank")(t,o);l.error=n("error"),l.success=n("success"),l.loading=n("loading"),l.custom=n("custom"),l.dismiss=t=>{a({type:3,toastId:t})},l.remove=t=>a({type:4,toastId:t}),l.promise=(t,o,u)=>{let m=l.loading(o.loading,R(R({},u),u==null?void 0:u.loading));return t.then(d=>(l.success(S(o.success,d),R(R({id:m},u),u==null?void 0:u.success)),d)).catch(d=>{l.error(S(o.error,d),R(R({id:m},u),u==null?void 0:u.error))}),t};var P=(t,o)=>{a({type:1,toast:{id:t,height:o}})},O=()=>{a({type:5,time:Date.now()})},T=t=>{let{toasts:o,pausedAt:u}=v(t);(0,i.useEffect)(()=>{if(u)return;let s=Date.now(),b=o.map(h=>{if(h.duration===1/0)return;let $=(h.duration||0)+h.pauseDuration-(s-h.createdAt);if($<0){h.visible&&l.dismiss(h.id);return}return setTimeout(()=>l.dismiss(h.id),$)});return()=>{b.forEach(h=>h&&clearTimeout(h))}},[o,u]);let m=(0,i.useCallback)(()=>{u&&a({type:6,time:Date.now()})},[u]),d=(0,i.useCallback)((s,b)=>{let{reverseOrder:h=!1,gutter:$=8,defaultPosition:L}=b||{},G=o.filter(le=>(le.position||L)===(s.position||L)&&le.height),se=G.findIndex(le=>le.id===s.id),ie=G.filter((le,fe)=>fe<se&&le.visible).length;return G.filter(le=>le.visible).slice(...h?[ie+1]:[0,ie]).reduce((le,fe)=>le+(fe.height||0)+$,0)},[o]);return{toasts:o,handlers:{updateHeight:P,startPause:O,endPause:m,calculateOffset:d}}},U=K`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Y=K`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,V=K`
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

  animation: ${U} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
    animation: ${V} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ye=K`
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
`,he=K`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ve=K`
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
`,we=K`
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
`,Ee=({toast:t})=>{let{icon:o,type:u,iconTheme:m}=t;return o!==void 0?typeof o=="string"?i.createElement(ke,null,o):o:u==="blank"?null:i.createElement(_e,null,i.createElement(me,R({},m)),u!=="loading"&&i.createElement(be,null,u==="error"?i.createElement(oe,R({},m)):i.createElement(ge,R({},m))))},Se=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,xe=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Re="0%{opacity:0;} 100%{opacity:1;}",Pe="0%{opacity:1;} 100%{opacity:0;}",$e=c("div")`
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
`,Ie=(t,o)=>{let u=t.includes("top")?1:-1,[m,d]=B()?[Re,Pe]:[Se(u),xe(u)];return{animation:o?`${K(m)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${K(d)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Oe=i.memo(({toast:t,position:o,style:u,children:m})=>{let d=t.height?Ie(t.position||o||"top-center",t.visible):{opacity:0},s=i.createElement(Ee,{toast:t}),b=i.createElement(Ce,R({},t.ariaProps),S(t.message,t));return i.createElement($e,{className:t.className,style:R(R(R({},d),u),t.style)},typeof m=="function"?m({icon:s,message:b}):i.createElement(i.Fragment,null,s,b))});re(i.createElement);var je=({id:t,className:o,style:u,onHeightUpdate:m,children:d})=>{let s=i.useCallback(b=>{if(b){let h=()=>{let $=b.getBoundingClientRect().height;m(t,$)};h(),new MutationObserver(h).observe(b,{subtree:!0,childList:!0,characterData:!0})}},[t,m]);return i.createElement("div",{ref:s,className:o,style:u},d)},Te=(t,o)=>{let u=t.includes("top"),m=u?{top:0}:{bottom:0},d=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return R(R({left:0,right:0,display:"flex",position:"absolute",transition:B()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${o*(u?1:-1)}px)`},m),d)},Le=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ce=16,De=({reverseOrder:t,position:o="top-center",toastOptions:u,gutter:m,children:d,containerStyle:s,containerClassName:b})=>{let{toasts:h,handlers:$}=T(u);return i.createElement("div",{style:R({position:"fixed",zIndex:9999,top:ce,left:ce,right:ce,bottom:ce,pointerEvents:"none"},s),className:b,onMouseEnter:$.startPause,onMouseLeave:$.endPause},h.map(L=>{let G=L.position||o,se=$.calculateOffset(L,{reverseOrder:t,gutter:m,defaultPosition:o}),ie=Te(G,se);return i.createElement(je,{id:L.id,key:L.id,onHeightUpdate:$.updateHeight,className:L.visible?Le:"",style:ie},L.type==="custom"?S(L.message,L):d?d(L):i.createElement(Oe,{toast:L,position:G}))}))},Ne=l}}]);
