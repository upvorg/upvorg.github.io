/*! For license information please see 669.0de713a1.chunk.js.LICENSE.txt */
(self.webpackChunk_web_index=self.webpackChunk_web_index||[]).push([[669],{6669:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>u});var n=t(9186),s=t(2899),a=t(4656),i=t(7125),o=t(5660),c=t.n(o),l=t(9962),d=t(3252),p=t(5173);function u(){const[e,r]=(0,l.useState)(!0),{from:t}=d.A.parse(window.location.search),[o,u]=(0,l.useState)({Name:"",Pwd:"",Emial:""});if((0,s.k)())return window.location.href=t||"/",null;const f=e=>{const{name:r,value:t}=e.target;u(Object.assign(Object.assign({},o),{[r]:t}))};return(0,n.jsxs)("div",{className:"login card",children:[(0,n.jsx)(p.m,{children:(0,n.jsx)("title",{children:"\u767b\u5f55\uff5c\u6ce8\u518c - UPV - free animes no ads"})}),(0,n.jsx)("div",{className:"tabs",children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{className:c()({"is-active":e}),onClick:()=>r(!0),children:(0,n.jsx)("a",{children:"\u767b\u5f55"})})})}),(0,n.jsx)("form",{onSubmit:r=>{r.preventDefault(),(e?a.pY.post("/login",{data:{Name:o.Name,Pwd:o.Pwd}}):a.pY.post("/register",{data:{Name:o.Name,Pwd:o.Pwd}})).then((e=>{e.err||(i.N.login(e.data.user),window.location.href=t||"/")}))},children:(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsxs)("div",{className:"l",children:[!e&&(0,n.jsxs)("div",{className:"field",children:[(0,n.jsx)("label",{className:"label",children:"\u90ae\u7bb1"}),(0,n.jsx)("p",{className:"control",children:(0,n.jsx)("input",{className:"input",type:"email",placeholder:"Email",name:"Emial",onChange:f,required:!0})})]}),!e&&(0,n.jsxs)("div",{className:"field is-grouped",children:[(0,n.jsx)("p",{className:"control is-expanded",children:(0,n.jsx)("input",{className:"input",type:"text",placeholder:"Code",name:"Code",onChange:f,required:!0})}),(0,n.jsx)("p",{className:"control is-exdivanded",children:(0,n.jsx)("button",{className:"button is-primary",type:"button",children:"\u83b7\u53d6\u9a8c\u8bc1\u7801"})})]}),(0,n.jsxs)("div",{className:"field",children:[(0,n.jsx)("label",{className:"label",children:"\u7528\u6237\u540d"}),(0,n.jsx)("p",{className:"control",children:(0,n.jsx)("input",{className:"input",type:"text",placeholder:"Username",name:"Name",onChange:f,required:!0})})]}),(0,n.jsx)("div",{className:"field",children:(0,n.jsxs)("div",{className:"control",children:[(0,n.jsx)("label",{className:"label",children:"\u5bc6\u7801"}),(0,n.jsx)("input",{className:"input",type:"password",placeholder:"Password",name:"Pwd",onChange:f,required:!0}),(0,n.jsxs)("p",{style:{textAlign:"right",marginTop:".5em",fontSize:"12px"},children:[(0,n.jsx)("span",{style:{float:"left",color:"gray"},children:"\u672a\u6ce8\u518c\u5c06\u81ea\u52a8\u6ce8\u518c"}),(0,n.jsx)("a",{href:"#",children:"forget password?"})]})]})}),(0,n.jsx)("div",{className:"field",children:(0,n.jsx)("p",{className:"control",children:(0,n.jsx)("button",{className:"button is-primary is-fullwidth",type:"submit",children:e?"\u767b\u5f55":"\u6ce8\u518c"})})})]}),(0,n.jsxs)("div",{className:"r",children:[(0,n.jsx)("p",{className:"field",children:"\u793e\u4ea4\u5e73\u53f0\u767b\u5f55"}),(0,n.jsx)("div",{className:"field",children:(0,n.jsxs)("button",{className:"button",type:"button",children:[(0,n.jsx)("span",{className:"icon qq",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,n.jsx)("path",{d:"M433.754 420.445c-11.526 1.393-44.86-52.741-44.86-52.741 0 31.345-16.136 72.247-51.051 101.786 16.842 5.192 54.843 19.167 45.803 34.421-7.316 12.343-125.51 7.881-159.632 4.037-34.122 3.844-152.316 8.306-159.632-4.037-9.045-15.25 28.918-29.214 45.783-34.415-34.92-29.539-51.059-70.445-51.059-101.792 0 0-33.334 54.134-44.859 52.741-5.37-.65-12.424-29.644 9.347-99.704 10.261-33.024 21.995-60.478 40.144-105.779C60.683 98.063 108.982.006 224 0c113.737.006 163.156 96.133 160.264 214.963 18.118 45.223 29.912 72.85 40.144 105.778 21.768 70.06 14.716 99.053 9.346 99.704z"})})}),(0,n.jsx)("span",{children:"QQ"})]})}),(0,n.jsx)("div",{className:"field",children:(0,n.jsxs)("button",{className:"button",type:"button",children:[(0,n.jsx)("span",{className:"icon github",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 480 512",children:(0,n.jsx)("path",{d:"M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"})})}),(0,n.jsx)("span",{children:"GitHub"})]})}),(0,n.jsx)("div",{className:"field",children:(0,n.jsxs)("button",{className:"button",type:"button",children:[(0,n.jsx)("span",{className:"icon google",children:(0,n.jsxs)("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2280",width:"200",height:"200",children:[(0,n.jsx)("path",{d:"M960.032 521.92c0-36.8-3.04-63.68-9.632-91.552H521.184v166.24h251.936c-5.088 41.312-32.512 103.552-93.44 145.344l-0.864 5.568 135.68 103.04 9.408 0.928c86.368-78.176 136.128-193.152 136.128-329.536z",fill:"#4285F4","p-id":"2281"}),(0,n.jsx)("path",{d:"M521.152 960c123.424 0 227.04-39.808 302.72-108.512l-144.224-109.536c-38.624 26.4-90.432 44.8-158.496 44.8A274.688 274.688 0 0 1 261.12 600.64l-5.344 0.448-141.12 107.008-1.856 5.024C187.968 859.456 342.4 960 521.152 960z",fill:"#34A853","p-id":"2282"}),(0,n.jsx)("path",{d:"M261.12 600.608a270.816 270.816 0 0 1-15.232-88.64c0-30.848 5.568-60.704 14.72-88.576l-0.256-5.92-142.88-108.768-4.672 2.176A441.12 441.12 0 0 0 64.032 512c0 72.192 17.792 140.384 48.768 201.088L261.12 600.64z",fill:"#FBBC05","p-id":"2283"}),(0,n.jsx)("path",{d:"M521.152 237.216c85.856 0 143.744 36.352 176.768 66.72l129.024-123.456C747.712 108.288 644.576 64 521.152 64 342.4 64 187.968 164.544 112.768 310.88l147.84 112.512c37.056-108 139.68-186.176 260.544-186.176z",fill:"#EB4335","p-id":"2284"})]})}),(0,n.jsx)("span",{children:"Google"})]})}),(0,n.jsx)("div",{className:"field",children:(0,n.jsxs)("button",{className:"button",type:"button",children:[(0,n.jsx)("span",{className:"icon",children:(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7592",width:"200",height:"200",children:(0,n.jsx)("path",{d:"M546.986667 1024H56.490667A56.533333 56.533333 0 0 1 0 967.466667V56.533333C0 25.301333 25.301333 0 56.533333 0h910.933334C998.698667 0 1024 25.301333 1024 56.533333v910.933334c0 31.232-25.301333 56.533333-56.533333 56.533333H706.56v-396.544h133.12l19.882667-154.538667H706.56V374.186667c0-44.714667 12.373333-75.221333 76.586667-75.221334h81.834666v-138.24c-14.165333-1.92-62.72-6.101333-119.253333-6.101333-118.016 0-198.784 72.021333-198.784 204.288v113.92H413.525333v154.581333h133.418667V1024z",fill:"#3B5998","p-id":"7593"})})}),(0,n.jsx)("span",{children:"Facebook"})]})}),(0,n.jsx)("div",{className:"field",children:(0,n.jsxs)("div",{className:"agreement",children:["\u767b\u5f55\u5373\u8868\u793a\u60a8\u540c\u610f",(0,n.jsx)("a",{href:"",children:"\u300a\u7528\u6237\u534f\u8bae\u300b"}),"\u548c",(0,n.jsx)("a",{href:"",children:"\u300a\u9690\u79c1\u653f\u7b56\u300b"})]})})]})]})})]})}},5660:(e,r)=>{var t;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e="",r=0;r<arguments.length;r++){var t=arguments[r];t&&(e=i(e,a(t)))}return e}function a(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var t in e)n.call(e,t)&&e[t]&&(r=i(r,t));return r}function i(e,r){return r?e?e+" "+r:e+r:e}e.exports?(s.default=s,e.exports=s):void 0===(t=function(){return s}.apply(r,[]))||(e.exports=t)}()},3252:(e,r,t)=>{"use strict";t.d(r,{A:()=>O});var n={};t.r(n),t.d(n,{exclude:()=>C,extract:()=>v,parse:()=>N,parseUrl:()=>k,pick:()=>S,stringify:()=>w,stringifyUrl:()=>F});const s="%[a-f0-9]{2}",a=new RegExp("("+s+")|([^%]+?)","gi"),i=new RegExp("("+s+")+","gi");function o(e,r){try{return[decodeURIComponent(e.join(""))]}catch{}if(1===e.length)return e;r=r||1;const t=e.slice(0,r),n=e.slice(r);return Array.prototype.concat.call([],o(t),o(n))}function c(e){try{return decodeURIComponent(e)}catch{let r=e.match(a)||[];for(let t=1;t<r.length;t++)r=(e=o(r,t).join("")).match(a)||[];return e}}function l(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){const r={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"};let t=i.exec(e);for(;t;){try{r[t[0]]=decodeURIComponent(t[0])}catch{const e=c(t[0]);e!==t[0]&&(r[t[0]]=e)}t=i.exec(e)}r["%C2"]="\ufffd";const n=Object.keys(r);for(const s of n)e=e.replace(new RegExp(s,"g"),r[s]);return e}(e)}}function d(e,r){const t={};if(Array.isArray(r))for(const n of r){const r=Object.getOwnPropertyDescriptor(e,n);r?.enumerable&&Object.defineProperty(t,n,r)}else for(const n of Reflect.ownKeys(e)){const s=Object.getOwnPropertyDescriptor(e,n);if(s.enumerable){r(n,e[n],e)&&Object.defineProperty(t,n,s)}}return t}function p(e,r){if("string"!==typeof e||"string"!==typeof r)throw new TypeError("Expected the arguments to be of type `string`");if(""===e||""===r)return[];const t=e.indexOf(r);return-1===t?[]:[e.slice(0,t),e.slice(t+r.length)]}const u=e=>null===e||void 0===e,f=e=>encodeURIComponent(e).replaceAll(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)),m=Symbol("encodeFragmentIdentifier");function h(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function y(e,r){return r.encode?r.strict?f(e):encodeURIComponent(e):e}function j(e,r){return r.decode?l(e):e}function x(e){return Array.isArray(e)?e.sort():"object"===typeof e?x(Object.keys(e)).sort(((e,r)=>Number(e)-Number(r))).map((r=>e[r])):e}function g(e){const r=e.indexOf("#");return-1!==r&&(e=e.slice(0,r)),e}function b(e,r,t){return"string"===t&&"string"===typeof e?e:"function"===typeof t&&"string"===typeof e?t(e):!r.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()?"number"!==t||Number.isNaN(Number(e))||"string"!==typeof e||""===e.trim()?r.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?Number(e):e:Number(e):"true"===e.toLowerCase()}function v(e){const r=(e=g(e)).indexOf("?");return-1===r?"":e.slice(r+1)}function N(e,r){h((r={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,types:Object.create(null),...r}).arrayFormatSeparator);const t=function(e){let r;switch(e.arrayFormat){case"index":return(e,t,n)=>{r=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),r?(void 0===n[e]&&(n[e]={}),n[e][r[1]]=t):n[e]=t};case"bracket":return(e,t,n)=>{r=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),r?void 0!==n[e]?n[e]=[...n[e],t]:n[e]=[t]:n[e]=t};case"colon-list-separator":return(e,t,n)=>{r=/(:list)$/.exec(e),e=e.replace(/:list$/,""),r?void 0!==n[e]?n[e]=[...n[e],t]:n[e]=[t]:n[e]=t};case"comma":case"separator":return(r,t,n)=>{const s="string"===typeof t&&t.includes(e.arrayFormatSeparator),a="string"===typeof t&&!s&&j(t,e).includes(e.arrayFormatSeparator);t=a?j(t,e):t;const i=s||a?t.split(e.arrayFormatSeparator).map((r=>j(r,e))):null===t?t:j(t,e);n[r]=i};case"bracket-separator":return(r,t,n)=>{const s=/(\[])$/.test(r);if(r=r.replace(/\[]$/,""),!s)return void(n[r]=t?j(t,e):t);const a=null===t?[]:t.split(e.arrayFormatSeparator).map((r=>j(r,e)));void 0!==n[r]?n[r]=[...n[r],...a]:n[r]=a};default:return(e,r,t)=>{void 0!==t[e]?t[e]=[...[t[e]].flat(),r]:t[e]=r}}}(r),n=Object.create(null);if("string"!==typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const s of e.split("&")){if(""===s)continue;const e=r.decode?s.replaceAll("+"," "):s;let[a,i]=p(e,"=");void 0===a&&(a=e),i=void 0===i?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?i:j(i,r),t(j(a,r),i,n)}for(const[s,a]of Object.entries(n))if("object"===typeof a&&null!==a&&"string"!==r.types[s])for(const[e,t]of Object.entries(a)){const n=r.types[s]?r.types[s].replace("[]",""):void 0;a[e]=b(t,r,n)}else"object"===typeof a&&null!==a&&"string"===r.types[s]?n[s]=Object.values(a).join(r.arrayFormatSeparator):n[s]=b(a,r,r.types[s]);return!1===r.sort?n:(!0===r.sort?Object.keys(n).sort():Object.keys(n).sort(r.sort)).reduce(((e,r)=>{const t=n[r];return e[r]=Boolean(t)&&"object"===typeof t&&!Array.isArray(t)?x(t):t,e}),Object.create(null))}function w(e,r){if(!e)return"";h((r={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...r}).arrayFormatSeparator);const t=t=>r.skipNull&&u(e[t])||r.skipEmptyString&&""===e[t],n=function(e){switch(e.arrayFormat){case"index":return r=>(t,n)=>{const s=t.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,[y(r,e),"[",s,"]"].join("")]:[...t,[y(r,e),"[",y(s,e),"]=",y(n,e)].join("")]};case"bracket":return r=>(t,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,[y(r,e),"[]"].join("")]:[...t,[y(r,e),"[]=",y(n,e)].join("")];case"colon-list-separator":return r=>(t,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,[y(r,e),":list="].join("")]:[...t,[y(r,e),":list=",y(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const r="bracket-separator"===e.arrayFormat?"[]=":"=";return t=>(n,s)=>void 0===s||e.skipNull&&null===s||e.skipEmptyString&&""===s?n:(s=null===s?"":s,0===n.length?[[y(t,e),r,y(s,e)].join("")]:[[n,y(s,e)].join(e.arrayFormatSeparator)])}default:return r=>(t,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,y(r,e)]:[...t,[y(r,e),"=",y(n,e)].join("")]}}(r),s={};for(const[i,o]of Object.entries(e))t(i)||(s[i]=o);const a=Object.keys(s);return!1!==r.sort&&a.sort(r.sort),a.map((t=>{const s=e[t];return void 0===s?"":null===s?y(t,r):Array.isArray(s)?0===s.length&&"bracket-separator"===r.arrayFormat?y(t,r)+"[]":s.reduce(n(t),[]).join("&"):y(t,r)+"="+y(s,r)})).filter((e=>e.length>0)).join("&")}function k(e,r){r={decode:!0,...r};let[t,n]=p(e,"#");return void 0===t&&(t=e),{url:t?.split("?")?.[0]??"",query:N(v(e),r),...r&&r.parseFragmentIdentifier&&n?{fragmentIdentifier:j(n,r)}:{}}}function F(e,r){r={encode:!0,strict:!0,[m]:!0,...r};const t=g(e.url).split("?")[0]||"";let n=w({...N(v(e.url),{sort:!1}),...e.query},r);n&&=`?${n}`;let s=function(e){let r="";const t=e.indexOf("#");return-1!==t&&(r=e.slice(t)),r}(e.url);if("string"===typeof e.fragmentIdentifier){const n=new URL(t);n.hash=e.fragmentIdentifier,s=r[m]?n.hash:`#${e.fragmentIdentifier}`}return`${t}${n}${s}`}function S(e,r,t){t={parseFragmentIdentifier:!0,[m]:!1,...t};const{url:n,query:s,fragmentIdentifier:a}=k(e,t);return F({url:n,query:d(s,r),fragmentIdentifier:a},t)}function C(e,r,t){return S(e,Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t),t)}const O=n}}]);