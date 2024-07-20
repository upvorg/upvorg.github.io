/*! For license information please see 113.d67ac7a1.js.LICENSE.txt */
"use strict";(self.webpackChunk_web_index=self.webpackChunk_web_index||[]).push([[113],{3622:(e,t,r)=>{var n=r(2358),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,a={},l=null,c=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,n)&&!u.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:c,props:a,_owner:s.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},1097:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function v(){}function g(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var w=g.prototype=new v;w.constructor=g,m(w,b.prototype),w.isPureReactComponent=!0;var x=Array.isArray,_=Object.prototype.hasOwnProperty,E={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var o,a={},i=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)_.call(t,o)&&!k.hasOwnProperty(o)&&(a[o]=t[o]);var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){for(var l=Array(u),c=0;c<u;c++)l[c]=arguments[c+2];a.children=l}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===a[o]&&(a[o]=u[o]);return{$$typeof:r,type:e,key:i,ref:s,props:a,_owner:E.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var $=/\/+/g;function O(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case n:u=!0}}if(u)return i=i(u=e),e=""===a?"."+O(u,0):a,x(i)?(o="",null!=e&&(o=e.replace($,"$&/")+"/"),P(i,t,o,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||u&&u.key===i.key?"":(""+i.key).replace($,"$&/")+"/")+e)),t.push(i)),1;if(u=0,a=""===a?".":a+":",x(e))for(var l=0;l<e.length;l++){var c=a+O(s=e[l],l);u+=P(s,t,o,c,i)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),l=0;!(s=e.next()).done;)u+=P(s=s.value,t,o,c=a+O(s,l++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function j(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},T={transition:null},N={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:T,ReactCurrentOwner:E};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:j,forEach:function(e,t,r){j(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return j(e,(function(){t++})),t},toArray:function(e){return j(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=o,t.Profiler=i,t.PureComponent=g,t.StrictMode=a,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.act=L,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=E.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)_.call(t,l)&&!k.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){u=Array(l);for(var c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}return{$$typeof:r,type:e.type,key:a,ref:i,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,r){return I.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,r){return I.current.useReducer(e,t,r)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return I.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return I.current.useTransition()},t.version="18.3.1"},2358:(e,t,r)=>{e.exports=r(1097)},7526:(e,t,r)=>{e.exports=r(3622)},781:(e,t)=>{function r(e,t){var r=e.length;e.push(t);e:for(;0<r;){var n=r-1>>>1,o=e[n];if(!(0<a(o,t)))break e;e[n]=t,e[r]=o,r=n}}function n(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,o=e.length,i=o>>>1;n<i;){var s=2*(n+1)-1,u=e[s],l=s+1,c=e[l];if(0>a(u,r))l<o&&0>a(c,u)?(e[n]=c,e[l]=r,n=l):(e[n]=u,e[s]=r,n=s);else{if(!(l<o&&0>a(c,r)))break e;e[n]=c,e[l]=r,n=l}}}return t}function a(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var s=Date,u=s.now();t.unstable_now=function(){return s.now()-u}}var l=[],c=[],f=1,p=null,d=3,y=!1,m=!1,h=!1,b="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,g="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=n(c);null!==t;){if(null===t.callback)o(c);else{if(!(t.startTime<=e))break;o(c),t.sortIndex=t.expirationTime,r(l,t)}t=n(c)}}function x(e){if(h=!1,w(e),!m)if(null!==n(l))m=!0,T(_);else{var t=n(c);null!==t&&N(x,t.startTime-e)}}function _(e,r){m=!1,h&&(h=!1,v(C),C=-1),y=!0;var a=d;try{for(w(r),p=n(l);null!==p&&(!(p.expirationTime>r)||e&&!P());){var i=p.callback;if("function"===typeof i){p.callback=null,d=p.priorityLevel;var s=i(p.expirationTime<=r);r=t.unstable_now(),"function"===typeof s?p.callback=s:p===n(l)&&o(l),w(r)}else o(l);p=n(l)}if(null!==p)var u=!0;else{var f=n(c);null!==f&&N(x,f.startTime-r),u=!1}return u}finally{p=null,d=a,y=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var E,k=!1,S=null,C=-1,$=5,O=-1;function P(){return!(t.unstable_now()-O<$)}function j(){if(null!==S){var e=t.unstable_now();O=e;var r=!0;try{r=S(!0,e)}finally{r?E():(k=!1,S=null)}}else k=!1}if("function"===typeof g)E=function(){g(j)};else if("undefined"!==typeof MessageChannel){var R=new MessageChannel,I=R.port2;R.port1.onmessage=j,E=function(){I.postMessage(null)}}else E=function(){b(j,0)};function T(e){S=e,k||(k=!0,E())}function N(e,r){C=b((function(){e(t.unstable_now())}),r)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||y||(m=!0,T(_))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(e){switch(d){case 1:case 2:case 3:var t=3;break;default:t=d}var r=d;d=t;try{return e()}finally{d=r}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=d;d=e;try{return t()}finally{d=r}},t.unstable_scheduleCallback=function(e,o,a){var i=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?i+a:i:a=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:f++,callback:o,priorityLevel:e,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>i?(e.sortIndex=a,r(c,e),null===n(l)&&e===n(c)&&(h?(v(C),C=-1):h=!0,N(x,a-i))):(e.sortIndex=s,r(l,e),m||y||(m=!0,T(_))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=d;return function(){var r=d;d=t;try{return e.apply(this,arguments)}finally{d=r}}}},1608:(e,t,r)=>{e.exports=r(781)},46:(e,t,r)=>{var n=r(2358);var o="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},a=n.useState,i=n.useEffect,s=n.useLayoutEffect,u=n.useDebugValue;function l(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!o(e,r)}catch(n){return!0}}var c="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=a({inst:{value:r,getSnapshot:t}}),o=n[0].inst,c=n[1];return s((function(){o.value=r,o.getSnapshot=t,l(o)&&c({inst:o})}),[e,r,t]),i((function(){return l(o)&&c({inst:o}),e((function(){l(o)&&c({inst:o})}))}),[e]),u(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},3159:(e,t,r)=>{e.exports=r(46)},8450:(e,t,r)=>{r.d(t,{N_:()=>L,qh:()=>N,Ix:()=>I,dO:()=>A,zy:()=>O,lq:()=>R,SQ:()=>P});var n=r(2358),o=r.t(n,2),a=r(3159);const i=o.useInsertionEffect,s=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement)?n.useLayoutEffect:n.useEffect,u=i||s,l=e=>{const t=n.useRef([e,(...e)=>t[0](...e)]).current;return u((()=>{t[0]=e})),t[1]},c="pushState",f="replaceState",p=["popstate",c,f,"hashchange"],d=e=>{for(const t of p)addEventListener(t,e);return()=>{for(const t of p)removeEventListener(t,e)}},y=(e,t)=>(0,a.useSyncExternalStore)(d,e,t),m=()=>location.search,h=()=>location.pathname,b=({ssrPath:e}={})=>y(h,e?()=>e:h),v=(e,{replace:t=!1,state:r=null}={})=>history[t?f:c](r,"",e),g=Symbol.for("wouter_v3");if("undefined"!==typeof history&&"undefined"===typeof window[g]){for(const e of[c,f]){const t=history[e];history[e]=function(){const r=t.apply(this,arguments),n=new Event(e);return n.arguments=arguments,dispatchEvent(n),r}}Object.defineProperty(window,g,{value:!0})}const w=(e="",t)=>t.toLowerCase().indexOf(e.toLowerCase())?"~"+t:t.slice(e.length)||"/",x=e=>{try{return decodeURI(e)}catch(t){return e}},_={hook:(e={})=>[b(e),v],searchHook:({ssrSearch:e=""}={})=>y(m,(()=>e)),parser:function(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var r,n,o,a,i=[],s="",u=e.split("/");for(u[0]||u.shift();o=u.shift();)"*"===(r=o[0])?(i.push(r),s+="?"===o[1]?"(?:/(.*))?":"/(.*)"):":"===r?(n=o.indexOf("?",1),a=o.indexOf(".",1),i.push(o.substring(1,~n?n:~a?a:o.length)),s+=~n&&!~a?"(?:/([^/]+?))?":"/([^/]+?)",~a&&(s+=(~n?"?":"")+"\\"+o.substring(a))):s+="/"+o;return{keys:i,pattern:new RegExp("^"+s+(t?"(?=$|/)":"/?$"),"i")}},base:"",ssrPath:void 0,ssrSearch:void 0,hrefs:e=>e},E=(0,n.createContext)(_),k=()=>(0,n.useContext)(E),S={},C=(0,n.createContext)(S),$=e=>{const[t,r]=e.hook(e);return[x(w(e.base,t)),l(((t,n)=>r(((e,t="")=>"~"===e[0]?e.slice(1):t+e)(t,e.base),n)))]},O=()=>$(k()),P=()=>{const e=k();return x("?"===(t=e.searchHook(e))[0]?t.slice(1):t);var t},j=(e,t,r,n)=>{const{pattern:o,keys:a}=t instanceof RegExp?{keys:!1,pattern:t}:e(t||"*",n),i=o.exec(r)||[],[s,...u]=i;return void 0!==s?[!0,(()=>{const e=!1!==a?Object.fromEntries(a.map(((e,t)=>[e,u[t]]))):i.groups;let t={...u};return e&&Object.assign(t,e),t})(),...n?[s]:[]]:[!1,null]},R=e=>j(k().parser,e,O()[0]),I=({children:e,...t})=>{const r=k(),o=t.hook?_:r;let a=o;const[i,s]=t.ssrPath?.split("?")??[];s&&(t.ssrSearch=s,t.ssrPath=i),t.hrefs=t.hrefs??t.hook?.hrefs;let u=(0,n.useRef)({}),l=u.current,c=l;for(let n in o){const e="base"===n?o[n]+(t[n]||""):t[n]||o[n];l===c&&e!==c[n]&&(u.current=c={...c}),c[n]=e,e!==o[n]&&(a=c)}return(0,n.createElement)(E.Provider,{value:a,children:e})},T=({children:e,component:t},r)=>t?(0,n.createElement)(t,{params:r}):"function"===typeof e?e(r):e,N=({path:e,nest:t,match:r,...o})=>{const a=k(),[i]=$(a),[s,u,l]=r??j(a.parser,e,i,t),c=(e=>{let t=(0,n.useRef)(S),r=t.current;for(const n in e)e[n]!==r[n]&&(r=e);return t.current=r})({...(0,n.useContext)(C),...u});if(!s)return null;const f=l?(0,n.createElement)(I,{base:l},T(o,c)):T(o,c);return(0,n.createElement)(C.Provider,{value:c,children:f})},L=(0,n.forwardRef)(((e,t)=>{const r=k(),[o,a]=$(r),{to:i,href:s=i,onClick:u,asChild:c,children:f,className:p,replace:d,state:y,...m}=e,h=l((t=>{t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button||(u?.(t),t.defaultPrevented||(t.preventDefault(),a(s,e)))})),b=r.hrefs("~"===s[0]?s.slice(1):r.base+s,r);return c&&(0,n.isValidElement)(f)?(0,n.cloneElement)(f,{onClick:h,href:b}):(0,n.createElement)("a",{...m,onClick:h,href:b,className:p?.call?p(o===s):p,children:f,ref:t})})),D=e=>Array.isArray(e)?e.flatMap((e=>D(e&&e.type===n.Fragment?e.props.children:e))):[e],A=({children:e,location:t})=>{const r=k(),[o]=$(r);for(const a of D(e)){let e=0;if((0,n.isValidElement)(a)&&(e=j(r.parser,a.props.path,t||o,a.props.nest))[0])return(0,n.cloneElement)(a,{match:e})}return null}},4194:(e,t,r)=>{r.d(t,{l$:()=>re,Ay:()=>ne});var n=r(2358);let o={data:""},a=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||o,i=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,s=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,l=(e,t)=>{let r="",n="",o="";for(let a in e){let i=e[a];"@"==a[0]?"i"==a[1]?r=a+" "+i+";":n+="f"==a[1]?l(i,a):a+"{"+l(i,"k"==a[1]?"":t)+"}":"object"==typeof i?n+=l(i,t?t.replace(/([^,])+/g,(e=>a.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):a):null!=i&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=l.p?l.p(a,i):a+":"+i+";")}return r+(t&&o?t+"{"+o+"}":o)+n},c={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},p=(e,t,r,n,o)=>{let a=f(e),p=c[a]||(c[a]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(a));if(!c[p]){let t=a!==e?e:(e=>{let t,r,n=[{}];for(;t=i.exec(e.replace(s,""));)t[4]?n.shift():t[3]?(r=t[3].replace(u," ").trim(),n.unshift(n[0][r]=n[0][r]||{})):n[0][t[1]]=t[2].replace(u," ").trim();return n[0]})(e);c[p]=l(o?{["@keyframes "+p]:t}:t,r?"":"."+p)}let d=r&&c.g?c.g:null;return r&&(c.g=c[p]),((e,t,r,n)=>{n?t.data=t.data.replace(n,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(c[p],t,n,d),p},d=(e,t,r)=>e.reduce(((e,n,o)=>{let a=t[o];if(a&&a.call){let e=a(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?"."+t:e&&"object"==typeof e?e.props?"":l(e,""):!1===e?"":e}return e+n+(null==a?"":a)}),"");function y(e){let t=this||{},r=e.call?e(t.p):e;return p(r.unshift?r.raw?d(r,[].slice.call(arguments,1),t.p):r.reduce(((e,r)=>Object.assign(e,r&&r.call?r(t.p):r)),{}):r,a(t.target),t.g,t.o,t.k)}y.bind({g:1});let m,h,b,v=y.bind({k:1});function g(e,t){let r=this||{};return function(){let n=arguments;function o(a,i){let s=Object.assign({},a),u=s.className||o.className;r.p=Object.assign({theme:h&&h()},s),r.o=/ *go\d+/.test(u),s.className=y.apply(r,n)+(u?" "+u:""),t&&(s.ref=i);let l=e;return e[0]&&(l=s.as||e,delete s.as),b&&l[0]&&b(s),m(l,s)}return t?t(o):o}}var w=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,x=(()=>{let e=0;return()=>(++e).toString()})(),_=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),E=new Map,k=e=>{if(E.has(e))return;let t=setTimeout((()=>{E.delete(e),O({type:4,toastId:e})}),1e3);E.set(e,t)},S=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=E.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:r}=t;return e.toasts.find((e=>e.id===r.id))?S(e,{type:1,toast:r}):S(e,{type:0,toast:r});case 3:let{toastId:n}=t;return n?k(n):e.toasts.forEach((e=>{k(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===n||void 0===n?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+o})))}}},C=[],$={toasts:[],pausedAt:void 0},O=e=>{$=S($,e),C.forEach((e=>{e($)}))},P={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},j=e=>(t,r)=>{let n=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||x()}))(t,e,r);return O({type:2,toast:n}),n.id},R=(e,t)=>j("blank")(e,t);R.error=j("error"),R.success=j("success"),R.loading=j("loading"),R.custom=j("custom"),R.dismiss=e=>{O({type:3,toastId:e})},R.remove=e=>O({type:4,toastId:e}),R.promise=(e,t,r)=>{let n=R.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then((e=>(R.success(w(t.success,e),{id:n,...r,...null==r?void 0:r.success}),e))).catch((e=>{R.error(w(t.error,e),{id:n,...r,...null==r?void 0:r.error})})),e};var I=(e,t)=>{O({type:1,toast:{id:e,height:t}})},T=()=>{O({type:5,time:Date.now()})},N=e=>{let{toasts:t,pausedAt:r}=((e={})=>{let[t,r]=(0,n.useState)($);(0,n.useEffect)((()=>(C.push(r),()=>{let e=C.indexOf(r);e>-1&&C.splice(e,1)})),[t]);let o=t.toasts.map((t=>{var r,n;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||P[t.type],style:{...e.style,...null==(n=e[t.type])?void 0:n.style,...t.style}}}));return{...t,toasts:o}})(e);(0,n.useEffect)((()=>{if(r)return;let e=Date.now(),n=t.map((t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(r<0))return setTimeout((()=>R.dismiss(t.id)),r);t.visible&&R.dismiss(t.id)}));return()=>{n.forEach((e=>e&&clearTimeout(e)))}}),[t,r]);let o=(0,n.useCallback)((()=>{r&&O({type:6,time:Date.now()})}),[r]),a=(0,n.useCallback)(((e,r)=>{let{reverseOrder:n=!1,gutter:o=8,defaultPosition:a}=r||{},i=t.filter((t=>(t.position||a)===(e.position||a)&&t.height)),s=i.findIndex((t=>t.id===e.id)),u=i.filter(((e,t)=>t<s&&e.visible)).length;return i.filter((e=>e.visible)).slice(...n?[u+1]:[0,u]).reduce(((e,t)=>e+(t.height||0)+o),0)}),[t]);return{toasts:t,handlers:{updateHeight:I,startPause:T,endPause:o,calculateOffset:a}}},L=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,D=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,A=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,F=g("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${A} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,M=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,z=g("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${M} 1s linear infinite;
`,U=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,V=v`
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
}`,q=g("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${U} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${V} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,H=g("div")`
  position: absolute;
`,B=g("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,K=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Y=g("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${K} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,W=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return void 0!==t?"string"==typeof t?n.createElement(Y,null,t):t:"blank"===r?null:n.createElement(B,null,n.createElement(z,{...o}),"loading"!==r&&n.createElement(H,null,"error"===r?n.createElement(F,{...o}):n.createElement(q,{...o})))},Q=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,Z=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,G=g("div")`
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
`,J=g("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=n.memo((({toast:e,position:t,style:r,children:o})=>{let a=e.height?((e,t)=>{let r=e.includes("top")?1:-1,[n,o]=_()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Q(r),Z(r)];return{animation:t?`${v(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},i=n.createElement(W,{toast:e}),s=n.createElement(J,{...e.ariaProps},w(e.message,e));return n.createElement(G,{className:e.className,style:{...a,...r,...e.style}},"function"==typeof o?o({icon:i,message:s}):n.createElement(n.Fragment,null,i,s))}));!function(e,t,r,n){l.p=t,m=e,h=r,b=n}(n.createElement);var ee=({id:e,className:t,style:r,onHeightUpdate:o,children:a})=>{let i=n.useCallback((t=>{if(t){let r=()=>{let r=t.getBoundingClientRect().height;o(e,r)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[e,o]);return n.createElement("div",{ref:i,className:t,style:r},a)},te=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,re=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:o,children:a,containerStyle:i,containerClassName:s})=>{let{toasts:u,handlers:l}=N(r);return n.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:s,onMouseEnter:l.startPause,onMouseLeave:l.endPause},u.map((r=>{let i=r.position||t,s=((e,t)=>{let r=e.includes("top"),n=r?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:_()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...n,...o}})(i,l.calculateOffset(r,{reverseOrder:e,gutter:o,defaultPosition:t}));return n.createElement(ee,{id:r.id,key:r.id,onHeightUpdate:l.updateHeight,className:r.visible?te:"",style:s},"custom"===r.type?w(r.message,r):a?a(r):n.createElement(X,{toast:r,position:i}))})))},ne=R}}]);