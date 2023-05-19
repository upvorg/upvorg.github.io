(function(){"use strict";var g={},h={};function o(e){var u=h[e];if(u!==void 0)return u.exports;var t=h[e]={exports:{}};return g[e].call(t.exports,t,t.exports,o),t.exports}o.m=g,function(){var e=[];o.O=function(u,t,i,f){if(t){f=f||0;for(var r=e.length;r>0&&e[r-1][2]>f;r--)e[r]=e[r-1];e[r]=[t,i,f];return}for(var n=1/0,r=0;r<e.length;r++){for(var t=e[r][0],i=e[r][1],f=e[r][2],s=!0,c=0;c<t.length;c++)(f&!1||n>=f)&&Object.keys(o.O).every(function(b){return o.O[b](t[c])})?t.splice(c--,1):(s=!1,f<n&&(n=f));if(s){e.splice(r--,1);var a=i();a!==void 0&&(u=a)}}return u}}(),function(){o.n=function(e){var u=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(u,{a:u}),u}}(),function(){var e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},u;o.t=function(t,i){if(i&1&&(t=this(t)),i&8||typeof t=="object"&&t&&(i&4&&t.__esModule||i&16&&typeof t.then=="function"))return t;var f=Object.create(null);o.r(f);var r={};u=u||[null,e({}),e([]),e(e)];for(var n=i&2&&t;typeof n=="object"&&!~u.indexOf(n);n=e(n))Object.getOwnPropertyNames(n).forEach(function(s){r[s]=function(){return t[s]}});return r.default=function(){return t},o.d(f,r),f}}(),function(){o.d=function(e,u){for(var t in u)o.o(u,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:u[t]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce(function(u,t){return o.f[t](e,u),u},[]))}}(),function(){o.u=function(e){return"static/js/"+({18:"markdown-editor",193:"oplayer",556:"pnpm.devtools-detector",817:"hls"}[e]||e)+"."+{2:"b3fab1c1",18:"0cc94230",63:"25132566",81:"a022af24",85:"30bae19a",123:"f4561994",134:"9b0e3fe3",165:"681cb1bc",193:"39b18031",214:"a843cee2",264:"b795eafa",331:"604cefe3",374:"c9945be1",379:"2a36b32b",414:"2ff69688",418:"11c26123",424:"a55ac8c2",515:"768ae1fd",520:"988e0b8b",525:"b6e356d1",526:"25a2a961",534:"1159b285",553:"ce322bd9",555:"778982f2",556:"0643c647",640:"13cb9a15",648:"a1b54d8e",711:"6d0712a0",726:"d54ac474",754:"a4357c21",784:"077a3f16",807:"16b6633a",817:"2eb30bd1",840:"d52fdc01",881:"2e9a0ebc",894:"44a28f21",901:"1e1a6064",920:"a6379b8f",927:"6ed4d065",941:"e1631fa8",955:"0b4c71b3"}[e]+".chunk.js"}}(),function(){o.miniCssF=function(e){return"static/css/"+e+"."+{2:"0e40f91c",123:"17569a86",214:"cf24c8dc",379:"41cdabf7",414:"f1cd4c87",555:"76e7a568",640:"ac3b2f50",648:"b756741b",840:"ce2fa170",881:"a2ad0f24"}[e]+".chunk.css"}}(),function(){o.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(e){if(typeof window=="object")return window}}()}(),function(){o.o=function(e,u){return Object.prototype.hasOwnProperty.call(e,u)}}(),function(){var e={},u="@web/index:";o.l=function(t,i,f,r){if(e[t]){e[t].push(i);return}var n,s;if(f!==void 0)for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==u+f){n=d;break}}n||(s=!0,n=document.createElement("script"),n.charset="utf-8",n.timeout=120,o.nc&&n.setAttribute("nonce",o.nc),n.setAttribute("data-webpack",u+f),n.src=t),e[t]=[i];var l=function(v,b){n.onerror=n.onload=null,clearTimeout(p);var m=e[t];if(delete e[t],n.parentNode&&n.parentNode.removeChild(n),m&&m.forEach(function(y){return y(b)}),v)return v(b)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),s&&document.head.appendChild(n)}}(),function(){o.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){if(typeof document!="undefined"){var e=function(f,r,n,s,c){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var d=function(l){if(a.onerror=a.onload=null,l.type==="load")s();else{var p=l&&(l.type==="load"?"missing":l.type),v=l&&l.target&&l.target.href||r,b=new Error("Loading CSS chunk "+f+` failed.
(`+v+")");b.code="CSS_CHUNK_LOAD_FAILED",b.type=p,b.request=v,a.parentNode&&a.parentNode.removeChild(a),c(b)}};return a.onerror=a.onload=d,a.href=r,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},u=function(f,r){for(var n=document.getElementsByTagName("link"),s=0;s<n.length;s++){var c=n[s],a=c.getAttribute("data-href")||c.getAttribute("href");if(c.rel==="stylesheet"&&(a===f||a===r))return c}for(var d=document.getElementsByTagName("style"),s=0;s<d.length;s++){var c=d[s],a=c.getAttribute("data-href");if(a===f||a===r)return c}},t=function(f){return new Promise(function(r,n){var s=o.miniCssF(f),c=o.p+s;if(u(s,c))return r();e(f,c,null,r,n)})},i={666:0};o.f.miniCss=function(f,r){var n={2:1,123:1,214:1,379:1,414:1,555:1,640:1,648:1,840:1,881:1};i[f]?r.push(i[f]):i[f]!==0&&n[f]&&r.push(i[f]=t(f).then(function(){i[f]=0},function(s){throw delete i[f],s}))}}}(),function(){var e={666:0};o.f.j=function(i,f){var r=o.o(e,i)?e[i]:void 0;if(r!==0)if(r)f.push(r[2]);else if(i!=666){var n=new Promise(function(d,l){r=e[i]=[d,l]});f.push(r[2]=n);var s=o.p+o.u(i),c=new Error,a=function(d){if(o.o(e,i)&&(r=e[i],r!==0&&(e[i]=void 0),r)){var l=d&&(d.type==="load"?"missing":d.type),p=d&&d.target&&d.target.src;c.message="Loading chunk "+i+` failed.
(`+l+": "+p+")",c.name="ChunkLoadError",c.type=l,c.request=p,r[1](c)}};o.l(s,a,"chunk-"+i,i)}else e[i]=0},o.O.j=function(i){return e[i]===0};var u=function(i,f){var r=f[0],n=f[1],s=f[2],c,a,d=0;if(r.some(function(p){return e[p]!==0})){for(c in n)o.o(n,c)&&(o.m[c]=n[c]);if(s)var l=s(o)}for(i&&i(f);d<r.length;d++)a=r[d],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(l)},t=self.webpackChunk_web_index=self.webpackChunk_web_index||[];t.forEach(u.bind(null,0)),t.push=u.bind(null,t.push.bind(t))}()})();