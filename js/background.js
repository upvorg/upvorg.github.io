chrome.app.runtime.onLaunched.addListener(function(i){var e,a;var n=((a=(e=navigator==null?void 0:navigator.userAgentData)==null?void 0:e.platform)==null?void 0:a.toLocaleLowerCase())==="windows";chrome.app.window.create("/index.html",{id:"upv",innerBounds:{width:1024,height:700},minWidth:1024,minHeight:700,frame:n?{color:"#6668ab"}:"chrome"})});