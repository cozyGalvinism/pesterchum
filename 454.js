(self.webpackChunkpesterchum=self.webpackChunkpesterchum||[]).push([[454],{5771:(e,t,n)=>{"use strict";e.exports.Client=n(3769),e.exports.Client.setDefaultTransport(n(4196)),n(3165),n(4637),n(574),n(4002),n(4332)},3165:(e,t,n)=>{"use strict";n(7228),n(2322),n(3296);var r=n(574),o=n(4637),i=n(4002);e.exports=function(e){var t=e.replace(s,""),n=0,c=!1,u=function(){for(;" "===t[n]&&n<t.length;)n++;if(n===t.length)return c?null:"";var e=t.indexOf(" ",n);-1===e&&(e=t.length),c&&":"===t[n]&&" "===t[n-1]&&(n++,e=t.length);var r=t.substring(n,e);for(n=e;" "===t[n]&&n<t.length;)n++;return r},a=new o;if("@"===t[n]&&(a.tags=r.decode(u().substr(1))),":"===t[n]){a.prefix=u().substr(1);var f=i.parseMask(a.prefix);a.nick=f.nick,a.ident=f.user,a.hostname=f.host}a.command=u().toUpperCase(),c=!0;for(var l=u();null!==l;)a.params.push(l),l=u();return a};var s=/^[\r\n]+|[\r\n]+$/g},4637:(e,t,n)=>{"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n(5680),n(7228),n(7441),n(4517),n(4334),n(4649),n(5090);var i=n(574);e.exports=function(){function e(t){r(this,e),this.tags=Object.create(null),this.prefix="",this.nick="",this.ident="",this.hostname="",this.command=t||"";for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];this.params=o||[]}var t,n;return t=e,(n=[{key:"to1459",value:function(){var e=this,t=[],n=i.encode(this.tags);return n&&t.push("@"+n),this.prefix&&t.push(":"+this.prefix),t.push(this.command),this.params.length>0&&this.params.forEach((function(n,r){r===e.params.length-1&&(n.indexOf(" ")>-1||":"===n[0])?t.push(":"+n):t.push(n)})),t.join(" ")}},{key:"toJson",value:function(){return{tags:Object.assign({},this.tags),source:this.prefix,command:this.command,params:this.params}}}])&&o(t.prototype,n),e}()},4125:(e,t,n)=>{"use strict";n(2004),n(8407),n(8288),n(1646),n(3675),n(7228),n(1301),n(5677),n(288),n(5298),n(7469),n(4458),n(4327),n(4334),n(4649),n(5101),n(7867),n(6394),n(3080),n(4669),n(2129),n(4655),n(7588);var r=regeneratorRuntime.mark(C),o=regeneratorRuntime.mark(R);function i(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=s(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw i}}}}function s(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}function h(e){var t=v();return function(){var n,r=k(e);if(t){var o=k(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){var t="function"==typeof Map?new Map:void 0;return(m=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return d(e,arguments,k(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),g(r,e)})(e)}function d(e,t,n){return(d=v()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&g(o,n.prototype),o}).apply(null,arguments)}function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=n(4842),w=n(8096).encode,S=new x,O=function(e){p(n,e);var t=h(n);function n(e,r){var o;return a(this,n),o=t.call(this),Error.captureStackTrace&&Error.captureStackTrace(y(o),o.constructor),o.substring=e,o.opts=r,o}return l(n,[{key:"name",get:function(){return this.constructor.name}}]),n}(m(Error)),_=function(e){p(n,e);var t=h(n);function n(){return a(this,n),t.apply(this,arguments)}return l(n,[{key:"message",get:function(){return"".concat(E(this.substring)," byte word can't fit in a ").concat(this.opts.bytes," byte block: ").concat(this.substring)}}]),n}(O),T=function(e){p(n,e);var t=h(n);function n(){return a(this,n),t.apply(this,arguments)}return l(n,[{key:"message",get:function(){return"".concat(E(this.substring)," byte grapheme can't fit in a ").concat(this.opts.bytes," byte block: ").concat(this.substring)}}]),n}(O),j=function(e){p(n,e);var t=h(n);function n(){return a(this,n),t.apply(this,arguments)}return l(n,[{key:"message",get:function(){return"".concat(E(this.substring)," byte codepoint can't fit in a ").concat(this.opts.bytes," byte block: ").concat(this.substring)}}]),n}(O);function E(e){return w(e).byteLength}function C(e,t){var n,o,c,u,a,f,l,p,h,b,y,m,d,v;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n="",o="",c=i(R(e)),r.prev=3,c.s();case 5:if((u=c.n()).done){r.next=79;break}if(g=u.value,k=2,a=function(e){if(Array.isArray(e))return e}(g)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var s,c=e[Symbol.iterator]();!(r=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(g,k)||s(g,k)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),f=a[0],l=a[1],!(E(n)+E(o)+E(f)<=t.bytes)){r.next=11;break}return n+=o+f,o=l,r.abrupt("continue",77);case 11:if(!(E(f)<=t.bytes)){r.next=18;break}if(!n){r.next=15;break}return r.next=15,n;case 15:return o=l,n=f,r.abrupt("continue",77);case 18:if(t.allowBreakingWords){r.next=20;break}throw new _(f,t);case 20:p=l,h=i(S.iterateGraphemes(f)),r.prev=22,h.s();case 24:if((b=h.n()).done){r.next=68;break}if(y=b.value,!(E(n)+E(o)+E(y)<=t.bytes)){r.next=30;break}return n+=o+y,o="",r.abrupt("continue",66);case 30:if(!(E(y)<=t.bytes)){r.next=37;break}if(!n){r.next=34;break}return r.next=34,n;case 34:return o="",n=y,r.abrupt("continue",66);case 37:if(t.allowBreakingGraphemes){r.next=39;break}throw new T(y,t);case 39:m=i(y),r.prev=40,m.s();case 42:if((d=m.n()).done){r.next=58;break}if(v=d.value,!(E(n)+E(o)+E(v)<=t.bytes)){r.next=48;break}return n+=o+v,o="",r.abrupt("continue",56);case 48:if(!(E(v)<=t.bytes)){r.next=55;break}if(!n){r.next=52;break}return r.next=52,n;case 52:return o="",n=v,r.abrupt("continue",56);case 55:throw new j(v,t);case 56:r.next=42;break;case 58:r.next=63;break;case 60:r.prev=60,r.t0=r.catch(40),m.e(r.t0);case 63:return r.prev=63,m.f(),r.finish(63);case 66:r.next=24;break;case 68:r.next=73;break;case 70:r.prev=70,r.t1=r.catch(22),h.e(r.t1);case 73:return r.prev=73,h.f(),r.finish(73);case 76:o=p;case 77:r.next=5;break;case 79:r.next=84;break;case 81:r.prev=81,r.t2=r.catch(3),c.e(r.t2);case 84:return r.prev=84,c.f(),r.finish(84);case 87:if(o&&E(n)+E(o)<=t.bytes&&(n+=o),!n){r.next=91;break}return r.next=91,n;case 91:case"end":return r.stop()}var g,k}),r,null,[[3,81,84,87],[22,70,73,76],[40,60,63,66]])}function R(e){var t,n,r,s,c;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:t="",n="",r=i(S.iterateGraphemes(e)),o.prev=3,r.s();case 5:if((s=r.n()).done){o.next=19;break}if(c=s.value,!/^\s+$/.test(c)){o.next=10;break}return n+=c,o.abrupt("continue",17);case 10:if(!n){o.next=16;break}return o.next=13,[t,n];case 13:return t=c,n="",o.abrupt("continue",17);case 16:t+=c;case 17:o.next=5;break;case 19:o.next=24;break;case 21:o.prev=21,o.t0=o.catch(3),r.e(o.t0);case 24:return o.prev=24,r.f(),o.finish(24);case 27:if(!t){o.next=30;break}return o.next=30,[t,n];case 30:case"end":return o.stop()}}),o,null,[[3,21,24,27]])}e.exports={WordTooLargeForLineError:_,GraphemeTooLargeForLineError:T,CodepointTooLargeForLineError:j,lineBreak:C,wordBreak:R}},574:(e,t,n)=>{"use strict";n(5680),n(7441),n(2070),n(5298),n(4334),n(9751),n(6394),n(2322),n(4669),n(3296),n(9268),n(5090);var r=n(4002);e.exports.decodeValue=s,e.exports.encodeValue=a,e.exports.decode=function(e){var t=Object.create(null);return e.split(";").forEach((function(e){var n=r.splitOnce(e,"="),o=n[0].toLowerCase(),i=n[1]||"";o&&(i=s(i),t[o]=i)})),t},e.exports.encode=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:";",n=Object.keys(e).map((function(t){var n=e[t];return"boolean"==typeof n?t:t+"="+a(n.toString())}));return n.join(t)};var o={"\\\\":"\\","\\:":";","\\s":" ","\\n":"\n","\\r":"\r","\\":""},i=/\\\\|\\:|\\s|\\n|\\r|\\/gi;function s(e){return e.replace(i,(function(e){return o[e]||""}))}var c={"\\":"\\\\",";":"\\:"," ":"\\s","\n":"\\n","\r":"\\r"},u=/\\|;| |\n|\r/gi;function a(e){return e.replace(u,(function(e){return c[e]||""}))}},8164:(e,t,n)=>{"use strict";n(7715),n(7228),n(288),n(4486),n(2609),n(5298),n(4458);var r={find:n(5066)};e.exports=function(){this.name="Network",this.server="",this.ircd="",this.options={PREFIX:[{symbol:"~",mode:"q"},{symbol:"&",mode:"a"},{symbol:"@",mode:"o"},{symbol:"%",mode:"h"},{symbol:"+",mode:"v"}]},this.time_offsets=[],this.time_offset=0,this.timeToLocal=function(e){return e-this.getServerTimeOffset()},this.timeToServer=function(e){return e+this.getServerTimeOffset()},this.getServerTimeOffset=function(){return this.time_offsets.slice(0).sort((function(e,t){return e-t}))[Math.floor(this.time_offsets.length/2)]||0},this.addServerTimeOffset=function(e){var t=e-Date.now();this.time_offsets.push(t),this.time_offsets.length>7&&(this.time_offsets=this.time_offsets.slice(this.time_offsets.length-7));var n=this.getServerTimeOffset();(t-n>2e3||t-n<-2e3)&&(this.time_offsets=this.time_offsets.slice(-1)),this.time_offset=this.getServerTimeOffset()},this.supports=function(e){return this.options[e.toUpperCase()]},this.isChannelName=function(e){return"string"==typeof e&&""!==e&&(this.supports("CHANTYPES")||"&#").indexOf(e[0])>-1},this.extractTargetGroup=function(e){var t=this.supports("STATUSMSG");if(!t)return null;var n=r.find(t,(function(t){if(t===e[0])return e=e.substring(1),t}));return n?{target:e,target_group:n}:null},this.cap={negotiating:!1,requested:[],enabled:[],isEnabled:function(e){return this.enabled.indexOf(e)>-1}}}},4196:(e,t,n)=>{"use strict";e.exports=n(8466)},8466:(e,t,n)=>{"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n(2004),n(8407),n(8288),n(5680),n(5677),n(5298),n(4334),n(4649),n(5101),n(7867),n(6394),n(3080),n(2322),n(4669),n(2129),n(9268),n(5090),n(4655),n(151);var u=n(9229);e.exports=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(f,e);var t,n,r,u,a=(r=f,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=c(r);if(u){var n=c(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=a.call(this)).options=e||{},t.socket=null,t.connected=!1,t.last_socket_error=null,t.encoding="utf8",t.incoming_buffer="",t}return t=f,(n=[{key:"isConnected",value:function(){return this.connected}},{key:"writeLine",value:function(e,t){this.debugOut("writeLine() socket="+(this.socket?"yes":"no")+" connected="+this.connected),this.socket&&this.connected?this.socket.send(e,t):t&&setTimeout(t,0)}},{key:"debugOut",value:function(e){this.emit("debug",e)}},{key:"connect",value:function(){var e=this,t=this.options,n=null,r="";this.debugOut("Connection.connect()"),this.disposeSocket(),this.requested_disconnect=!1,r+=t.tls||t.ssl?"wss://":"ws://",r+=t.host,r+=t.port?":"+t.port:"",r+=t.path?t.path:"",(n=this.socket=new WebSocket(r)).onopen=function(){e.onSocketFullyConnected()},n.onclose=function(){e.onSocketClose()},n.onmessage=function(t){e.onSocketMessage(t.data)},n.onerror=function(t){e.debugOut("socketError() "+t.message),e.last_socket_error=t}}},{key:"onSocketFullyConnected",value:function(){this.debugOut("socketFullyConnected()"),this.last_socket_error=null,this.connected=!0,this.emit("open")}},{key:"onSocketClose",value:function(){this.debugOut("socketClose()"),this.connected=!1,this.emit("close",!!this.last_socket_error&&this.last_socket_error)}},{key:"onSocketMessage",value:function(e){this.debugOut("socketData() "+JSON.stringify(e));var t=this,n=null;this.incoming_buffer+=e+"\n",""!==(n=this.incoming_buffer.split("\n"))[n.length-1]?this.incoming_buffer=n.pop():(n.pop(),this.incoming_buffer=""),n.forEach((function(e){t.emit("line",e)}))}},{key:"disposeSocket",value:function(){this.debugOut("Connection.disposeSocket() connected="+this.connected),this.socket&&this.connected&&this.socket.close(),this.socket&&(this.socket.onopen=null,this.socket.onclose=null,this.socket.onmessage=null,this.socket.onerror=null,this.socket=null)}},{key:"close",value:function(){this.socket&&this.connected&&this.socket.close()}},{key:"setEncoding",value:function(e){}}])&&o(t.prototype,n),f}(u)},4953:(e,t,n)=>{"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n(5677),n(4649),n(6394),n(6922),n(2129),n(4655),e.exports=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=t||{},this.nick=t.nick||"",this.username=t.username||"",this.gecos=t.gecos||"",this.host=t.host||"",this.away=!!t.away,this.modes=new Set(t.modes||[])}var t,n;return t=e,(n=[{key:"toggleModes",value:function(e){var t,n=!0;for(t in e)switch(e[t]){case"+":n=!0;break;case"-":n=!1;break;default:this.modes[n?"add":"delete"](e[t])}}}])&&r(t.prototype,n),e}()},8096:(e,t,n)=>{n(9822),e.exports={encode:e=>(new TextEncoder).encode(e),decode:e=>(new TextDecoder).decode(e)}}}]);
//# sourceMappingURL=454.js.map