(self.webpackChunk_web_index=self.webpackChunk_web_index||[]).push([[246],{1529:(X,O,m)=>{var T;typeof window!="undefined"?T=window:typeof m.g!="undefined"?T=m.g:typeof self!="undefined"?T=self:T={},X.exports=T},246:(X,O,m)=>{"use strict";m.r(O),m.d(O,{LineStream:()=>w,ParseStream:()=>M,Parser:()=>V});var T=function(){function f(){this.listeners={}}var s=f.prototype;return s.on=function(t,o){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(o)},s.off=function(t,o){if(!this.listeners[t])return!1;var a=this.listeners[t].indexOf(o);return this.listeners[t]=this.listeners[t].slice(0),this.listeners[t].splice(a,1),a>-1},s.trigger=function(t){var o=this.listeners[t];if(o)if(arguments.length===2)for(var a=o.length,r=0;r<a;++r)o[r].call(this,arguments[1]);else for(var u=Array.prototype.slice.call(arguments,1),p=o.length,A=0;A<p;++A)o[A].apply(this,u)},s.dispose=function(){this.listeners={}},s.pipe=function(t){this.on("data",function(o){t.push(o)})},f}(),S=m(9731),G=m(1529),C=m.n(G),v=function(s){return C().atob?C().atob(s):Buffer.from(s,"base64").toString("binary")};function $(f){for(var s=v(f),e=new Uint8Array(s.length),t=0;t<s.length;t++)e[t]=s.charCodeAt(t);return e}/*! @name m3u8-parser @version 7.1.0 @license Apache-2.0 */class w extends T{constructor(){super(),this.buffer=""}push(s){let e;for(this.buffer+=s,e=this.buffer.indexOf(`
`);e>-1;e=this.buffer.indexOf(`
`))this.trigger("data",this.buffer.substring(0,e)),this.buffer=this.buffer.substring(e+1)}}const F="	",N=function(f){const s=/([0-9.]*)?@?([0-9.]*)?/.exec(f||""),e={};return s[1]&&(e.length=parseInt(s[1],10)),s[2]&&(e.offset=parseInt(s[2],10)),e},Y=function(){const e="(?:"+"[^=]*"+")=(?:"+'"[^"]*"|[^,]*'+")";return new RegExp("(?:^|,)("+e+")")},d=function(f){const s={};if(!f)return s;const e=f.split(Y());let t=e.length,o;for(;t--;)e[t]!==""&&(o=/([^=]*)=(.*)/.exec(e[t]).slice(1),o[0]=o[0].replace(/^\s+|\s+$/g,""),o[1]=o[1].replace(/^\s+|\s+$/g,""),o[1]=o[1].replace(/^['"](.*)['"]$/g,"$1"),s[o[0]]=o[1]);return s};class M extends T{constructor(){super(),this.customParsers=[],this.tagMappers=[]}push(s){let e,t;if(s=s.trim(),s.length===0)return;if(s[0]!=="#"){this.trigger("data",{type:"uri",uri:s});return}this.tagMappers.reduce((a,r)=>{const u=r(s);return u===s?a:a.concat([u])},[s]).forEach(a=>{for(let r=0;r<this.customParsers.length;r++)if(this.customParsers[r].call(this,a))return;if(a.indexOf("#EXT")!==0){this.trigger("data",{type:"comment",text:a.slice(1)});return}if(a=a.replace("\r",""),e=/^#EXTM3U/.exec(a),e){this.trigger("data",{type:"tag",tagType:"m3u"});return}if(e=/^#EXTINF:([0-9\.]*)?,?(.*)?$/.exec(a),e){t={type:"tag",tagType:"inf"},e[1]&&(t.duration=parseFloat(e[1])),e[2]&&(t.title=e[2]),this.trigger("data",t);return}if(e=/^#EXT-X-TARGETDURATION:([0-9.]*)?/.exec(a),e){t={type:"tag",tagType:"targetduration"},e[1]&&(t.duration=parseInt(e[1],10)),this.trigger("data",t);return}if(e=/^#EXT-X-VERSION:([0-9.]*)?/.exec(a),e){t={type:"tag",tagType:"version"},e[1]&&(t.version=parseInt(e[1],10)),this.trigger("data",t);return}if(e=/^#EXT-X-MEDIA-SEQUENCE:(\-?[0-9.]*)?/.exec(a),e){t={type:"tag",tagType:"media-sequence"},e[1]&&(t.number=parseInt(e[1],10)),this.trigger("data",t);return}if(e=/^#EXT-X-DISCONTINUITY-SEQUENCE:(\-?[0-9.]*)?/.exec(a),e){t={type:"tag",tagType:"discontinuity-sequence"},e[1]&&(t.number=parseInt(e[1],10)),this.trigger("data",t);return}if(e=/^#EXT-X-PLAYLIST-TYPE:(.*)?$/.exec(a),e){t={type:"tag",tagType:"playlist-type"},e[1]&&(t.playlistType=e[1]),this.trigger("data",t);return}if(e=/^#EXT-X-BYTERANGE:(.*)?$/.exec(a),e){t=(0,S.A)(N(e[1]),{type:"tag",tagType:"byterange"}),this.trigger("data",t);return}if(e=/^#EXT-X-ALLOW-CACHE:(YES|NO)?/.exec(a),e){t={type:"tag",tagType:"allow-cache"},e[1]&&(t.allowed=!/NO/.test(e[1])),this.trigger("data",t);return}if(e=/^#EXT-X-MAP:(.*)$/.exec(a),e){if(t={type:"tag",tagType:"map"},e[1]){const r=d(e[1]);r.URI&&(t.uri=r.URI),r.BYTERANGE&&(t.byterange=N(r.BYTERANGE))}this.trigger("data",t);return}if(e=/^#EXT-X-STREAM-INF:(.*)$/.exec(a),e){if(t={type:"tag",tagType:"stream-inf"},e[1]){if(t.attributes=d(e[1]),t.attributes.RESOLUTION){const r=t.attributes.RESOLUTION.split("x"),u={};r[0]&&(u.width=parseInt(r[0],10)),r[1]&&(u.height=parseInt(r[1],10)),t.attributes.RESOLUTION=u}t.attributes.BANDWIDTH&&(t.attributes.BANDWIDTH=parseInt(t.attributes.BANDWIDTH,10)),t.attributes["FRAME-RATE"]&&(t.attributes["FRAME-RATE"]=parseFloat(t.attributes["FRAME-RATE"])),t.attributes["PROGRAM-ID"]&&(t.attributes["PROGRAM-ID"]=parseInt(t.attributes["PROGRAM-ID"],10))}this.trigger("data",t);return}if(e=/^#EXT-X-MEDIA:(.*)$/.exec(a),e){t={type:"tag",tagType:"media"},e[1]&&(t.attributes=d(e[1])),this.trigger("data",t);return}if(e=/^#EXT-X-ENDLIST/.exec(a),e){this.trigger("data",{type:"tag",tagType:"endlist"});return}if(e=/^#EXT-X-DISCONTINUITY/.exec(a),e){this.trigger("data",{type:"tag",tagType:"discontinuity"});return}if(e=/^#EXT-X-PROGRAM-DATE-TIME:(.*)$/.exec(a),e){t={type:"tag",tagType:"program-date-time"},e[1]&&(t.dateTimeString=e[1],t.dateTimeObject=new Date(e[1])),this.trigger("data",t);return}if(e=/^#EXT-X-KEY:(.*)$/.exec(a),e){t={type:"tag",tagType:"key"},e[1]&&(t.attributes=d(e[1]),t.attributes.IV&&(t.attributes.IV.substring(0,2).toLowerCase()==="0x"&&(t.attributes.IV=t.attributes.IV.substring(2)),t.attributes.IV=t.attributes.IV.match(/.{8}/g),t.attributes.IV[0]=parseInt(t.attributes.IV[0],16),t.attributes.IV[1]=parseInt(t.attributes.IV[1],16),t.attributes.IV[2]=parseInt(t.attributes.IV[2],16),t.attributes.IV[3]=parseInt(t.attributes.IV[3],16),t.attributes.IV=new Uint32Array(t.attributes.IV))),this.trigger("data",t);return}if(e=/^#EXT-X-START:(.*)$/.exec(a),e){t={type:"tag",tagType:"start"},e[1]&&(t.attributes=d(e[1]),t.attributes["TIME-OFFSET"]=parseFloat(t.attributes["TIME-OFFSET"]),t.attributes.PRECISE=/YES/.test(t.attributes.PRECISE)),this.trigger("data",t);return}if(e=/^#EXT-X-CUE-OUT-CONT:(.*)?$/.exec(a),e){t={type:"tag",tagType:"cue-out-cont"},e[1]?t.data=e[1]:t.data="",this.trigger("data",t);return}if(e=/^#EXT-X-CUE-OUT:(.*)?$/.exec(a),e){t={type:"tag",tagType:"cue-out"},e[1]?t.data=e[1]:t.data="",this.trigger("data",t);return}if(e=/^#EXT-X-CUE-IN:(.*)?$/.exec(a),e){t={type:"tag",tagType:"cue-in"},e[1]?t.data=e[1]:t.data="",this.trigger("data",t);return}if(e=/^#EXT-X-SKIP:(.*)$/.exec(a),e&&e[1]){t={type:"tag",tagType:"skip"},t.attributes=d(e[1]),t.attributes.hasOwnProperty("SKIPPED-SEGMENTS")&&(t.attributes["SKIPPED-SEGMENTS"]=parseInt(t.attributes["SKIPPED-SEGMENTS"],10)),t.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES")&&(t.attributes["RECENTLY-REMOVED-DATERANGES"]=t.attributes["RECENTLY-REMOVED-DATERANGES"].split(F)),this.trigger("data",t);return}if(e=/^#EXT-X-PART:(.*)$/.exec(a),e&&e[1]){t={type:"tag",tagType:"part"},t.attributes=d(e[1]),["DURATION"].forEach(function(r){t.attributes.hasOwnProperty(r)&&(t.attributes[r]=parseFloat(t.attributes[r]))}),["INDEPENDENT","GAP"].forEach(function(r){t.attributes.hasOwnProperty(r)&&(t.attributes[r]=/YES/.test(t.attributes[r]))}),t.attributes.hasOwnProperty("BYTERANGE")&&(t.attributes.byterange=N(t.attributes.BYTERANGE)),this.trigger("data",t);return}if(e=/^#EXT-X-SERVER-CONTROL:(.*)$/.exec(a),e&&e[1]){t={type:"tag",tagType:"server-control"},t.attributes=d(e[1]),["CAN-SKIP-UNTIL","PART-HOLD-BACK","HOLD-BACK"].forEach(function(r){t.attributes.hasOwnProperty(r)&&(t.attributes[r]=parseFloat(t.attributes[r]))}),["CAN-SKIP-DATERANGES","CAN-BLOCK-RELOAD"].forEach(function(r){t.attributes.hasOwnProperty(r)&&(t.attributes[r]=/YES/.test(t.attributes[r]))}),this.trigger("data",t);return}if(e=/^#EXT-X-PART-INF:(.*)$/.exec(a),e&&e[1]){t={type:"tag",tagType:"part-inf"},t.attributes=d(e[1]),["PART-TARGET"].forEach(function(r){t.attributes.hasOwnProperty(r)&&(t.attributes[r]=parseFloat(t.attributes[r]))}),this.trigger("data",t);return}if(e=/^#EXT-X-PRELOAD-HINT:(.*)$/.exec(a),e&&e[1]){t={type:"tag",tagType:"preload-hint"},t.attributes=d(e[1]),["BYTERANGE-START","BYTERANGE-LENGTH"].forEach(function(r){if(t.attributes.hasOwnProperty(r)){t.attributes[r]=parseInt(t.attributes[r],10);const u=r==="BYTERANGE-LENGTH"?"length":"offset";t.attributes.byterange=t.attributes.byterange||{},t.attributes.byterange[u]=t.attributes[r],delete t.attributes[r]}}),this.trigger("data",t);return}if(e=/^#EXT-X-RENDITION-REPORT:(.*)$/.exec(a),e&&e[1]){t={type:"tag",tagType:"rendition-report"},t.attributes=d(e[1]),["LAST-MSN","LAST-PART"].forEach(function(r){t.attributes.hasOwnProperty(r)&&(t.attributes[r]=parseInt(t.attributes[r],10))}),this.trigger("data",t);return}if(e=/^#EXT-X-DATERANGE:(.*)$/.exec(a),e&&e[1]){t={type:"tag",tagType:"daterange"},t.attributes=d(e[1]),["ID","CLASS"].forEach(function(u){t.attributes.hasOwnProperty(u)&&(t.attributes[u]=String(t.attributes[u]))}),["START-DATE","END-DATE"].forEach(function(u){t.attributes.hasOwnProperty(u)&&(t.attributes[u]=new Date(t.attributes[u]))}),["DURATION","PLANNED-DURATION"].forEach(function(u){t.attributes.hasOwnProperty(u)&&(t.attributes[u]=parseFloat(t.attributes[u]))}),["END-ON-NEXT"].forEach(function(u){t.attributes.hasOwnProperty(u)&&(t.attributes[u]=/YES/i.test(t.attributes[u]))}),["SCTE35-CMD"," SCTE35-OUT","SCTE35-IN"].forEach(function(u){t.attributes.hasOwnProperty(u)&&(t.attributes[u]=t.attributes[u].toString(16))});const r=/^X-([A-Z]+-)+[A-Z]+$/;for(const u in t.attributes){if(!r.test(u))continue;const p=/[0-9A-Fa-f]{6}/g.test(t.attributes[u]),A=/^\d+(\.\d+)?$/.test(t.attributes[u]);t.attributes[u]=p?t.attributes[u].toString(16):A?parseFloat(t.attributes[u]):String(t.attributes[u])}this.trigger("data",t);return}if(e=/^#EXT-X-INDEPENDENT-SEGMENTS/.exec(a),e){this.trigger("data",{type:"tag",tagType:"independent-segments"});return}if(e=/^#EXT-X-CONTENT-STEERING:(.*)$/.exec(a),e){t={type:"tag",tagType:"content-steering"},t.attributes=d(e[1]),this.trigger("data",t);return}this.trigger("data",{type:"tag",data:a.slice(4)})})}addParser({expression:s,customType:e,dataParser:t,segment:o}){typeof t!="function"&&(t=a=>a),this.customParsers.push(a=>{if(s.exec(a))return this.trigger("data",{type:"custom",data:t(a),customType:e,segment:o}),!0})}addTagMapper({expression:s,map:e}){const t=o=>s.test(o)?e(o):o;this.tagMappers.push(t)}}const H=f=>f.toLowerCase().replace(/-(\w)/g,s=>s[1].toUpperCase()),l=function(f){const s={};return Object.keys(f).forEach(function(e){s[H(e)]=f[e]}),s},P=function(f){const{serverControl:s,targetDuration:e,partTargetDuration:t}=f;if(!s)return;const o="#EXT-X-SERVER-CONTROL",a="holdBack",r="partHoldBack",u=e&&e*3,p=t&&t*2;e&&!s.hasOwnProperty(a)&&(s[a]=u,this.trigger("info",{message:`${o} defaulting HOLD-BACK to targetDuration * 3 (${u}).`})),u&&s[a]<u&&(this.trigger("warn",{message:`${o} clamping HOLD-BACK (${s[a]}) to targetDuration * 3 (${u})`}),s[a]=u),t&&!s.hasOwnProperty(r)&&(s[r]=t*3,this.trigger("info",{message:`${o} defaulting PART-HOLD-BACK to partTargetDuration * 3 (${s[r]}).`})),t&&s[r]<p&&(this.trigger("warn",{message:`${o} clamping PART-HOLD-BACK (${s[r]}) to partTargetDuration * 2 (${p}).`}),s[r]=p)};class V extends T{constructor(){super(),this.lineStream=new w,this.parseStream=new M,this.lineStream.pipe(this.parseStream),this.lastProgramDateTime=null;const s=this,e=[];let t={},o,a,r=!1;const u=function(){},p={AUDIO:{},VIDEO:{},"CLOSED-CAPTIONS":{},SUBTITLES:{}},A="urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed";let I=0;this.manifest={allowCache:!0,discontinuityStarts:[],dateRanges:[],segments:[]};let x=0,D=0;const R={};this.on("end",()=>{t.uri||!t.parts&&!t.preloadHints||(!t.map&&o&&(t.map=o),!t.key&&a&&(t.key=a),!t.timeline&&typeof I=="number"&&(t.timeline=I),this.manifest.preloadSegment=t)}),this.parseStream.on("data",function(i){let U,E;({tag(){({version(){i.version&&(this.manifest.version=i.version)},"allow-cache"(){this.manifest.allowCache=i.allowed,"allowed"in i||(this.trigger("info",{message:"defaulting allowCache to YES"}),this.manifest.allowCache=!0)},byterange(){const g={};"length"in i&&(t.byterange=g,g.length=i.length,"offset"in i||(i.offset=x)),"offset"in i&&(t.byterange=g,g.offset=i.offset),x=g.offset+g.length},endlist(){this.manifest.endList=!0},inf(){"mediaSequence"in this.manifest||(this.manifest.mediaSequence=0,this.trigger("info",{message:"defaulting media sequence to zero"})),"discontinuitySequence"in this.manifest||(this.manifest.discontinuitySequence=0,this.trigger("info",{message:"defaulting discontinuity sequence to zero"})),i.title&&(t.title=i.title),i.duration>0&&(t.duration=i.duration),i.duration===0&&(t.duration=.01,this.trigger("info",{message:"updating zero segment duration to a small value"})),this.manifest.segments=e},key(){if(!i.attributes){this.trigger("warn",{message:"ignoring key declaration without attribute list"});return}if(i.attributes.METHOD==="NONE"){a=null;return}if(!i.attributes.URI){this.trigger("warn",{message:"ignoring key declaration without URI"});return}if(i.attributes.KEYFORMAT==="com.apple.streamingkeydelivery"){this.manifest.contentProtection=this.manifest.contentProtection||{},this.manifest.contentProtection["com.apple.fps.1_0"]={attributes:i.attributes};return}if(i.attributes.KEYFORMAT==="com.microsoft.playready"){this.manifest.contentProtection=this.manifest.contentProtection||{},this.manifest.contentProtection["com.microsoft.playready"]={uri:i.attributes.URI};return}if(i.attributes.KEYFORMAT===A){if(["SAMPLE-AES","SAMPLE-AES-CTR","SAMPLE-AES-CENC"].indexOf(i.attributes.METHOD)===-1){this.trigger("warn",{message:"invalid key method provided for Widevine"});return}if(i.attributes.METHOD==="SAMPLE-AES-CENC"&&this.trigger("warn",{message:"SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead"}),i.attributes.URI.substring(0,23)!=="data:text/plain;base64,"){this.trigger("warn",{message:"invalid key URI provided for Widevine"});return}if(!(i.attributes.KEYID&&i.attributes.KEYID.substring(0,2)==="0x")){this.trigger("warn",{message:"invalid key ID provided for Widevine"});return}this.manifest.contentProtection=this.manifest.contentProtection||{},this.manifest.contentProtection["com.widevine.alpha"]={attributes:{schemeIdUri:i.attributes.KEYFORMAT,keyId:i.attributes.KEYID.substring(2)},pssh:$(i.attributes.URI.split(",")[1])};return}i.attributes.METHOD||this.trigger("warn",{message:"defaulting key method to AES-128"}),a={method:i.attributes.METHOD||"AES-128",uri:i.attributes.URI},typeof i.attributes.IV!="undefined"&&(a.iv=i.attributes.IV)},"media-sequence"(){if(!isFinite(i.number)){this.trigger("warn",{message:"ignoring invalid media sequence: "+i.number});return}this.manifest.mediaSequence=i.number},"discontinuity-sequence"(){if(!isFinite(i.number)){this.trigger("warn",{message:"ignoring invalid discontinuity sequence: "+i.number});return}this.manifest.discontinuitySequence=i.number,I=i.number},"playlist-type"(){if(!/VOD|EVENT/.test(i.playlistType)){this.trigger("warn",{message:"ignoring unknown playlist type: "+i.playlist});return}this.manifest.playlistType=i.playlistType},map(){o={},i.uri&&(o.uri=i.uri),i.byterange&&(o.byterange=i.byterange),a&&(o.key=a)},"stream-inf"(){if(this.manifest.playlists=e,this.manifest.mediaGroups=this.manifest.mediaGroups||p,!i.attributes){this.trigger("warn",{message:"ignoring empty stream-inf attributes"});return}t.attributes||(t.attributes={}),(0,S.A)(t.attributes,i.attributes)},media(){if(this.manifest.mediaGroups=this.manifest.mediaGroups||p,!(i.attributes&&i.attributes.TYPE&&i.attributes["GROUP-ID"]&&i.attributes.NAME)){this.trigger("warn",{message:"ignoring incomplete or missing media group"});return}const g=this.manifest.mediaGroups[i.attributes.TYPE];g[i.attributes["GROUP-ID"]]=g[i.attributes["GROUP-ID"]]||{},U=g[i.attributes["GROUP-ID"]],E={default:/yes/i.test(i.attributes.DEFAULT)},E.default?E.autoselect=!0:E.autoselect=/yes/i.test(i.attributes.AUTOSELECT),i.attributes.LANGUAGE&&(E.language=i.attributes.LANGUAGE),i.attributes.URI&&(E.uri=i.attributes.URI),i.attributes["INSTREAM-ID"]&&(E.instreamId=i.attributes["INSTREAM-ID"]),i.attributes.CHARACTERISTICS&&(E.characteristics=i.attributes.CHARACTERISTICS),i.attributes.FORCED&&(E.forced=/yes/i.test(i.attributes.FORCED)),U[i.attributes.NAME]=E},discontinuity(){I+=1,t.discontinuity=!0,this.manifest.discontinuityStarts.push(e.length)},"program-date-time"(){typeof this.manifest.dateTimeString=="undefined"&&(this.manifest.dateTimeString=i.dateTimeString,this.manifest.dateTimeObject=i.dateTimeObject),t.dateTimeString=i.dateTimeString,t.dateTimeObject=i.dateTimeObject;const{lastProgramDateTime:g}=this;this.lastProgramDateTime=new Date(i.dateTimeString).getTime(),g===null&&this.manifest.segments.reduceRight((n,h)=>(h.programDateTime=n-h.duration*1e3,h.programDateTime),this.lastProgramDateTime)},targetduration(){if(!isFinite(i.duration)||i.duration<0){this.trigger("warn",{message:"ignoring invalid target duration: "+i.duration});return}this.manifest.targetDuration=i.duration,P.call(this,this.manifest)},start(){if(!i.attributes||isNaN(i.attributes["TIME-OFFSET"])){this.trigger("warn",{message:"ignoring start declaration without appropriate attribute list"});return}this.manifest.start={timeOffset:i.attributes["TIME-OFFSET"],precise:i.attributes.PRECISE}},"cue-out"(){t.cueOut=i.data},"cue-out-cont"(){t.cueOutCont=i.data},"cue-in"(){t.cueIn=i.data},skip(){this.manifest.skip=l(i.attributes),this.warnOnMissingAttributes_("#EXT-X-SKIP",i.attributes,["SKIPPED-SEGMENTS"])},part(){r=!0;const g=this.manifest.segments.length,n=l(i.attributes);t.parts=t.parts||[],t.parts.push(n),n.byterange&&(n.byterange.hasOwnProperty("offset")||(n.byterange.offset=D),D=n.byterange.offset+n.byterange.length);const h=t.parts.length-1;this.warnOnMissingAttributes_(`#EXT-X-PART #${h} for segment #${g}`,i.attributes,["URI","DURATION"]),this.manifest.renditionReports&&this.manifest.renditionReports.forEach((b,c)=>{b.hasOwnProperty("lastPart")||this.trigger("warn",{message:`#EXT-X-RENDITION-REPORT #${c} lacks required attribute(s): LAST-PART`})})},"server-control"(){const g=this.manifest.serverControl=l(i.attributes);g.hasOwnProperty("canBlockReload")||(g.canBlockReload=!1,this.trigger("info",{message:"#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false"})),P.call(this,this.manifest),g.canSkipDateranges&&!g.hasOwnProperty("canSkipUntil")&&this.trigger("warn",{message:"#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set"})},"preload-hint"(){const g=this.manifest.segments.length,n=l(i.attributes),h=n.type&&n.type==="PART";t.preloadHints=t.preloadHints||[],t.preloadHints.push(n),n.byterange&&(n.byterange.hasOwnProperty("offset")||(n.byterange.offset=h?D:0,h&&(D=n.byterange.offset+n.byterange.length)));const b=t.preloadHints.length-1;if(this.warnOnMissingAttributes_(`#EXT-X-PRELOAD-HINT #${b} for segment #${g}`,i.attributes,["TYPE","URI"]),!!n.type)for(let c=0;c<t.preloadHints.length-1;c++){const y=t.preloadHints[c];y.type&&y.type===n.type&&this.trigger("warn",{message:`#EXT-X-PRELOAD-HINT #${b} for segment #${g} has the same TYPE ${n.type} as preload hint #${c}`})}},"rendition-report"(){const g=l(i.attributes);this.manifest.renditionReports=this.manifest.renditionReports||[],this.manifest.renditionReports.push(g);const n=this.manifest.renditionReports.length-1,h=["LAST-MSN","URI"];r&&h.push("LAST-PART"),this.warnOnMissingAttributes_(`#EXT-X-RENDITION-REPORT #${n}`,i.attributes,h)},"part-inf"(){this.manifest.partInf=l(i.attributes),this.warnOnMissingAttributes_("#EXT-X-PART-INF",i.attributes,["PART-TARGET"]),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),P.call(this,this.manifest)},daterange(){this.manifest.dateRanges.push(l(i.attributes));const g=this.manifest.dateRanges.length-1;this.warnOnMissingAttributes_(`#EXT-X-DATERANGE #${g}`,i.attributes,["ID","START-DATE"]);const n=this.manifest.dateRanges[g];n.endDate&&n.startDate&&new Date(n.endDate)<new Date(n.startDate)&&this.trigger("warn",{message:"EXT-X-DATERANGE END-DATE must be equal to or later than the value of the START-DATE"}),n.duration&&n.duration<0&&this.trigger("warn",{message:"EXT-X-DATERANGE DURATION must not be negative"}),n.plannedDuration&&n.plannedDuration<0&&this.trigger("warn",{message:"EXT-X-DATERANGE PLANNED-DURATION must not be negative"});const h=!!n.endOnNext;if(h&&!n.class&&this.trigger("warn",{message:"EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must have a CLASS attribute"}),h&&(n.duration||n.endDate)&&this.trigger("warn",{message:"EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must not contain DURATION or END-DATE attributes"}),n.duration&&n.endDate){const c=n.startDate.getTime()+n.duration*1e3;this.manifest.dateRanges[g].endDate=new Date(c)}if(!R[n.id])R[n.id]=n;else{for(const c in R[n.id])if(n[c]&&JSON.stringify(R[n.id][c])!==JSON.stringify(n[c])){this.trigger("warn",{message:"EXT-X-DATERANGE tags with the same ID in a playlist must have the same attributes values"});break}const b=this.manifest.dateRanges.findIndex(c=>c.id===n.id);this.manifest.dateRanges[b]=(0,S.A)(this.manifest.dateRanges[b],n),R[n.id]=(0,S.A)(R[n.id],n),this.manifest.dateRanges.pop()}},"independent-segments"(){this.manifest.independentSegments=!0},"content-steering"(){this.manifest.contentSteering=l(i.attributes),this.warnOnMissingAttributes_("#EXT-X-CONTENT-STEERING",i.attributes,["SERVER-URI"])}}[i.tagType]||u).call(s)},uri(){t.uri=i.uri,e.push(t),this.manifest.targetDuration&&!("duration"in t)&&(this.trigger("warn",{message:"defaulting segment duration to the target duration"}),t.duration=this.manifest.targetDuration),a&&(t.key=a),t.timeline=I,o&&(t.map=o),D=0,this.lastProgramDateTime!==null&&(t.programDateTime=this.lastProgramDateTime,this.lastProgramDateTime+=t.duration*1e3),t={}},comment(){},custom(){i.segment?(t.custom=t.custom||{},t.custom[i.customType]=i.data):(this.manifest.custom=this.manifest.custom||{},this.manifest.custom[i.customType]=i.data)}})[i.type].call(s)})}warnOnMissingAttributes_(s,e,t){const o=[];t.forEach(function(a){e.hasOwnProperty(a)||o.push(a)}),o.length&&this.trigger("warn",{message:`${s} lacks required attribute(s): ${o.join(", ")}`})}push(s){this.lineStream.push(s)}end(){this.lineStream.push(`
`),this.manifest.dateRanges.length&&this.lastProgramDateTime===null&&this.trigger("warn",{message:"A playlist with EXT-X-DATERANGE tag must contain atleast one EXT-X-PROGRAM-DATE-TIME tag"}),this.lastProgramDateTime=null,this.trigger("end")}addParser(s){this.parseStream.addParser(s)}addTagMapper(s){this.parseStream.addTagMapper(s)}}}}]);