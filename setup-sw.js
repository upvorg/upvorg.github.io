var n=(r,s,i)=>new Promise((c,t)=>{var d=e=>{try{o(i.next(e))}catch(a){t(a)}},v=e=>{try{o(i.throw(e))}catch(a){t(a)}},o=e=>e.done?c(e.value):Promise.resolve(e.value).then(d,v);o((i=i.apply(r,s)).next())});"serviceWorker"in navigator&&(window.addEventListener("load",()=>n(this,null,function*(){navigator.serviceWorker.register("/sw.js",{scope:"/"}).then(r=>{navigator.serviceWorker.addEventListener("controllerchange",()=>{window.location.reload()})},r=>{console.log("Service worker registration failed:",r)})})),window.addEventListener("focus",()=>n(this,null,function*(){yield navigator.serviceWorker.ready})));
