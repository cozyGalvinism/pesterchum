(self.webpackChunkpesterchum=self.webpackChunkpesterchum||[]).push([[892],{7069:(e,n,t)=>{"use strict";function a(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}t(5298),t(4649);var r={clone:t(6222)},s=/^[0-9.]{1,}$/;e.exports=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.command=n+="",this.params=r.clone(t.params),this.tags=r.clone(t.tags),this.prefix=t.prefix,this.nick=t.nick,this.ident=t.ident,this.hostname=t.hostname}var n,t;return n=e,(t=[{key:"getTag",value:function(e){return this.tags[e.toLowerCase()]}},{key:"getServerTime",value:function(){var e=this.getTag("time");if(e){var n=Date.parse(e)||void 0;return!n&&s.test(e)?new Date(1e3*e).getTime():n}}}])&&a(n.prototype,t),e}()},5892:(e,n,t)=>{"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,n){return(s=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function o(e,n){return!n||"object"!==a(n)&&"function"!=typeof n?i(e):n}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t(2004),t(8407),t(8288),t(1646),t(7715),t(5677),t(4363),t(288),t(5298),t(4334),t(4649),t(5101),t(7867),t(6394),t(3080),t(2322),t(4669),t(2129),t(9268),t(4655);var m={reduce:t(5412),find:t(5066),uniq:t(4849)},p=t(9229),u=t(6146),h=t(7069);e.exports=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&s(e,n)}(f,e);var n,a,p,l,g=(p=f,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=c(p);if(l){var t=c(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return o(this,e)});function f(e,n){var a;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,f),(a=g.call(this)).addAllEventName(),a.connection=e,a.network=n,a.handlers=[],a.request_extra_caps=[],a.resetCache(),t(5695)(i(a)),t(1059)(i(a)),t(3546)(i(a)),t(365)(i(a)),t(3851)(i(a)),t(2010)(i(a)),a}return n=f,(a=[{key:"dispatch",value:function(e){var n=new h(e.command.toUpperCase(),e),t=n.getTag("batch");if(t){var a="batch."+t;this.hasCache(a)&&this.cache(a).commands.push(n)}else this.executeCommand(n)}},{key:"executeCommand",value:function(e){var n=e.command;u[e.command.toUpperCase()]&&(n=u[e.command.toUpperCase()]),this.handlers[n]?this.handlers[n](e,this):this.emitUnknownCommand(e)}},{key:"requestExtraCaps",value:function(e){this.request_extra_caps=m.uniq(this.request_extra_caps.concat(e))}},{key:"addHandler",value:function(e,n){if("function"!=typeof n)return!1;this.handlers[e]=n}},{key:"emitUnknownCommand",value:function(e){this.emit("unknown command",e)}},{key:"addAllEventName",value:function(){var e=this.emit;this.emit=function(){var n=Array.prototype.slice.call(arguments,0);e.apply(this,["all"].concat(n)),e.apply(this,n)}}},{key:"parseModeList",value:function(e,n){var t,a,r,s=this.network.options.CHANMODES||[],o=this.network.options.PREFIX||[],i=(s[0]||"").concat(s[1]||""),c=[];if(!e)return c;o=m.reduce(o,(function(e,n){return e.push(n.mode),e}),[]),i=i.split("").concat(o);var p=function(e,n){var t=function(n){return n===e};return!!m.find(i,t)||!(!n||!m.find((s[2]||"").split(""),t))};for(a=0,t=0;t<e.length;t++)switch(e[t]){case"+":r=!0;break;case"-":r=!1;break;default:p(e[t],r)?(c.push({mode:(r?"+":"-")+e[t],param:n[a]}),a++):c.push({mode:(r?"+":"-")+e[t],param:null})}return c}},{key:"cache",value:function(e){var n,t,a=this._caches[e];return a||(a=Object.defineProperty({},"destroy",{enumerable:!1,configurable:!1,value:(n=this._caches,t=e,function(){delete n[t]})}),this._caches[e]=a),a}},{key:"hasCache",value:function(e){return this._caches&&Object.prototype.hasOwnProperty.call(this._caches,e)}},{key:"resetCache",value:function(){this._caches=Object.create(null)}}])&&r(n.prototype,a),f}(p)},1059:(e,n,t)=>{"use strict";t(288),t(573),t(2322),t(9268);var a={each:t(6270)},r=t(4002),s={RPL_CHANNELMODEIS:function(e,n){var t=e.params[1],a=e.params[2],r=e.params.slice(3),s=n.parseModeList(a,r);n.emit("channel info",{channel:t,modes:s,raw_modes:a,raw_params:r,tags:e.tags})},RPL_CREATIONTIME:function(e,n){var t=e.params[1];n.emit("channel info",{channel:t,created_at:parseInt(e.params[2],10),tags:e.tags})},RPL_CHANNEL_URL:function(e,n){var t=e.params[1];n.emit("channel info",{channel:t,url:e.params[e.params.length-1],tags:e.tags})},RPL_NAMEREPLY:function(e,n){var t=e.params[e.params.length-1].split(" "),s=n.cache("names."+e.params[2]);s.members||(s.members=[]),a.each(t,(function(t){if(t){var a,o=0,i=[];if(n.network.options.PREFIX)for(o=0;o<n.network.options.PREFIX.length;o++)t[0]===n.network.options.PREFIX[o].symbol&&(i.push(n.network.options.PREFIX[o].mode),t=t.substring(1));a=r.parseMask(t),s.members.push({nick:a.nick,ident:a.user,hostname:a.host,modes:i,tags:e.tags})}}))},RPL_ENDOFNAMES:function(e,n){var t=n.cache("names."+e.params[1]);n.emit("userlist",{channel:e.params[1],users:t.members||[]}),t.destroy()},RPL_INVITELIST:function(e,n){var t=n.cache("inviteList."+e.params[1]);t.invites||(t.invites=[]),t.invites.push({channel:e.params[1],invited:e.params[2],invited_by:e.params[3],invited_at:e.params[4],tags:e.tags})},RPL_ENDOFINVITELIST:function(e,n){var t=n.cache("inviteList."+e.params[1]);n.emit("inviteList",{channel:e.params[1],invites:t.invites||[]}),t.destroy()},RPL_BANLIST:function(e,n){var t=n.cache("banlist."+e.params[1]);t.bans||(t.bans=[]),t.bans.push({channel:e.params[1],banned:e.params[2],banned_by:e.params[3],banned_at:e.params[4],tags:e.tags})},RPL_ENDOFBANLIST:function(e,n){var t=n.cache("banlist."+e.params[1]);n.emit("banlist",{channel:e.params[1],bans:t.bans||[]}),t.destroy()},RPL_TOPIC:function(e,n){n.emit("topic",{channel:e.params[1],topic:e.params[e.params.length-1],tags:e.tags})},RPL_NOTOPIC:function(e,n){n.emit("topic",{channel:e.params[1],topic:"",tags:e.tags})},RPL_TOPICWHOTIME:function(e,n){var t=r.parseMask(e.params[2]);n.emit("topicsetby",{nick:t.nick,ident:t.user,hostname:t.host,channel:e.params[1],when:e.params[3],tags:e.tags})},JOIN:function(e,n){var t,a=1,r={};"string"==typeof e.params[0]&&""!==e.params[0]&&(t=e.params[0]),n.network.cap.isEnabled("extended-join")&&(r.account="*"!==e.params[1]&&e.params[1],a=2),r.nick=e.nick,r.ident=e.ident,r.hostname=e.hostname,r.gecos=e.params[a]||"",r.channel=t,r.time=e.getServerTime(),r.tags=e.tags,n.emit("join",r)},PART:function(e,n){var t=e.getServerTime();n.emit("part",{nick:e.nick,ident:e.ident,hostname:e.hostname,channel:e.params[0],message:e.params[e.params.length-1]||"",time:t,tags:e.tags})},KICK:function(e,n){var t=e.getServerTime();n.emit("kick",{kicked:e.params[1],nick:e.nick,ident:e.ident,hostname:e.hostname,channel:e.params[0],message:e.params[e.params.length-1]||"",time:t,tags:e.tags})},QUIT:function(e,n){var t=e.getServerTime();n.emit("quit",{nick:e.nick,ident:e.ident,hostname:e.hostname,message:e.params[e.params.length-1]||"",time:t,tags:e.tags})},TOPIC:function(e,n){if(e.params[0]){var t=e.getServerTime(),a=e.params[0],r=e.params[e.params.length-1]||"";n.emit("topic",{nick:e.nick,channel:a,topic:r,time:t,tags:e.tags})}},INVITE:function(e,n){var t=e.getServerTime();n.emit("invite",{nick:e.nick,ident:e.ident,hostname:e.hostname,invited:e.params[0],channel:e.params[1],time:t,tags:e.tags})},RPL_INVITING:function(e,n){n.emit("invited",{nick:e.params[0],channel:e.params[1],tags:e.tags})}};e.exports=function(e){a.each(s,(function(n,t){e.addHandler(t,n)}))}},2010:(e,n,t)=>{"use strict";t(5680),t(9751),t(5090);var a={ERROR:{event:"irc error",error:"irc",reason:-1},ERR_PASSWDMISMATCH:{event:"irc error",error:"password_mismatch"},ERR_LINKCHANNEL:{event:"channel_redirect",from:1,to:2},ERR_NOSUCHNICK:{event:"irc error",error:"no_such_nick",nick:1,reason:-1},ERR_CANNOTSENDTOCHAN:{event:"irc error",error:"cannot_send_to_channel",channel:1,reason:-1},ERR_TOOMANYCHANNELS:{event:"irc error",error:"too_many_channels",channel:1,reason:-1},ERR_USERNOTINCHANNEL:{event:"irc error",error:"user_not_in_channel",nick:0,channel:1,reason:-1},ERR_NOTONCHANNEL:{event:"irc error",error:"not_on_channel",channel:1,reason:-1},ERR_USERONCHANNEL:{event:"irc error",error:"user_on_channel",nick:1,channel:2},ERR_CHANNELISFULL:{event:"irc error",error:"channel_is_full",channel:1,reason:-1},ERR_INVITEONLYCHAN:{event:"irc error",error:"invite_only_channel",channel:1,reason:-1},ERR_BANNEDFROMCHAN:{event:"irc error",error:"banned_from_channel",channel:1,reason:-1},ERR_BADCHANNELKEY:{event:"irc error",error:"bad_channel_key",channel:1,reason:-1},ERR_CHANOPRIVSNEEDED:{event:"irc error",error:"chanop_privs_needed",channel:1,reason:-1},ERR_UNKNOWNCOMMAND:{event:"irc error",error:"unknown_command",command:1,reason:-1}},r=Object.keys(a);e.exports=function(e){r.forEach((function(n){var t=a[n];e.addHandler(n,(function(e,n){for(var a,r={},s=Object.keys(t),o=0;o<s.length;o++)"event"!==s[o]&&("string"==typeof(a=t[s[o]])?r[s[o]]=a:a>=0?r[s[o]]=e.params[a]:a<0&&(r[s[o]]=e.params[e.params.length+a]));if(r.channel){var i=n.network.extractTargetGroup(r.channel);i&&(r.channel=i.target,r.target_group=i.target_group)}n.emit(t.event,r)}))}))}},365:(e,n,t)=>{"use strict";t(288),t(2322),t(9268);var a={each:t(6270),find:t(5066)},r=t(1758),s={NOTICE:function(e,n){var t,a=e.getServerTime(),r=e.params[e.params.length-1],s=e.params[0];if(""===r.charAt(0)&&""===r.charAt(r.length-1))n.emit("ctcp response",{nick:e.nick,ident:e.ident,hostname:e.hostname,target:s,type:(r.substring(1,r.length-1).split(" ")||[null])[0],message:r.substring(1,r.length-1),time:a,tags:e.tags});else{var o=n.network.extractTargetGroup(s);o&&(s=o.target,t=o.target_group),n.emit("notice",{from_server:!e.nick,nick:e.nick,ident:e.ident,hostname:e.hostname,target:s,group:t,message:r,tags:e.tags,time:a,account:e.getTag("account")})}},PRIVMSG:function(e,n){var t,a=e.getServerTime(),s=e.params[e.params.length-1],o=e.params[0],i=n.network.extractTargetGroup(o);if(i&&(o=i.target,t=i.target_group),""===s.charAt(0)&&""===s.charAt(s.length-1)){var c=s.slice(1,-1).split(" ")[0].toUpperCase();"ACTION"===c?n.emit("action",{from_server:!e.nick,nick:e.nick,ident:e.ident,hostname:e.hostname,target:o,group:t,message:s.substring(8,s.length-1),tags:e.tags,time:a,account:e.getTag("account")}):"VERSION"===c&&n.connection.options.version?n.connection.write(r.format("NOTICE %s :VERSION %s",e.nick,n.connection.options.version)):n.emit("ctcp request",{from_server:!e.nick,nick:e.nick,ident:e.ident,hostname:e.hostname,target:o,group:t,type:c||null,message:s.substring(1,s.length-1),time:a,account:e.getTag("account"),tags:e.tags})}else n.emit("privmsg",{from_server:!e.nick,nick:e.nick,ident:e.ident,hostname:e.hostname,target:o,group:t,message:s,tags:e.tags,time:a,account:e.getTag("account")})},TAGMSG:function(e,n){var t=e.getServerTime(),a=e.params[0];n.emit("tagmsg",{from_server:!e.nick,nick:e.nick,ident:e.ident,hostname:e.hostname,target:a,tags:e.tags,time:t})},RPL_WALLOPS:function(e,n){n.emit("wallops",{from_server:!1,nick:e.nick,ident:e.ident,hostname:e.hostname,message:e.params[e.params.length-1],account:e.getTag("account"),tags:e.tags})}};e.exports=function(e){a.each(s,(function(n,t){e.addHandler(t,n)}))}},3851:(e,n,t)=>{"use strict";t(8833),t(5680),t(7228),t(7441),t(2070),t(288),t(6429),t(573),t(2322),t(9268),t(5090);var a={each:t(6270),clone:t(6222),map:t(630)},r={RPL_LISTSTART:function(e,n){s(n).channels=[],n.emit("channel list start")},RPL_LISTEND:function(e,n){var t=s(n);t.channels.length&&(n.emit("channel list",t.channels),t.channels=[]),t.destroy(),n.emit("channel list end")},RPL_LIST:function(e,n){var t=s(n);t.channels.push({channel:e.params[1],num_users:parseInt(e.params[2],10),topic:e.params[3]||"",tags:e.tags}),t.channels.length>=50&&(n.emit("channel list",t.channels),t.channels=[])},RPL_MOTD:function(e,n){n.cache("motd").motd+=e.params[e.params.length-1]+"\n"},RPL_MOTDSTART:function(e,n){n.cache("motd").motd=""},RPL_ENDOFMOTD:function(e,n){var t=n.cache("motd");n.emit("motd",{motd:t.motd,tags:e.tags}),t.destroy()},ERR_NOMOTD:function(e,n){a.clone(e.params).shift(),n.emit("motd",{error:e.params[e.params.length-1],tags:e.tags})},RPL_WHOREPLY:function(e,n){var t=n.cache("who");t.members||(t.members=[]);var r=e.params,s="G"===r[6][0].toUpperCase(),o=n.network.options.PREFIX.filter((function(e){return r[6].indexOf(e.symbol)>-1})),i=a.map(o,"mode"),c=0,m=r[7],p=m.indexOf(" ");p>-1&&(c=parseInt(m.substr(0,p),10),m=m.substr(p+1)),t.members.push({nick:r[5],ident:r[2],hostname:r[3],server:r[4],real_name:m,away:s,num_hops_away:c,channel:r[1],channel_modes:i,tags:e.tags})},RPL_WHOSPCRPL:function(e,n){var t=n.cache("who");t.members||(t.members=[]);var r=e.params,s="G"===r[6][0].toUpperCase(),o=n.network.options.PREFIX.filter((function(e){return r[6].indexOf(e.symbol)>-1})),i=a.map(o,"mode"),c=/^[0-9]+$/.test(r[9])?parseInt(r[9],10):0;t.members.push({nick:r[5],ident:r[2],hostname:r[3],server:r[4],op_level:c,real_name:r[10],account:"0"===r[8]?"":r[8],away:s,num_hops_away:parseInt(r[7],10),channel:r[1],channel_modes:i,tags:e.tags})},RPL_ENDOFWHO:function(e,n){var t=n.cache("who");n.emit("wholist",{target:e.params[1],users:t.members||[]}),t.destroy()},PING:function(e,n){n.connection.write("PONG "+e.params[e.params.length-1])},PONG:function(e,n){var t=e.getServerTime();t&&n.network.addServerTimeOffset(t),n.emit("pong",{message:e.params[1],time:t,tags:e.tags})},MODE:function(e,n){var t=e.getServerTime(),a=e.params[1],r=e.params.slice(2),s=n.parseModeList(a,r);n.emit("mode",{target:e.params[0],nick:e.nick||e.prefix||"",modes:s,time:t,raw_modes:a,raw_params:r,tags:e.tags})},RPL_LINKS:function(e,n){var t=n.cache("links");t.links=t.links||[],t.links.push({address:e.params[1],access_via:e.params[2],hops:parseInt(e.params[3].split(" ")[0]),description:e.params[3].split(" ").splice(1).join(" "),tags:e.tags})},RPL_ENDOFLINKS:function(e,n){var t=n.cache("links");n.emit("server links",{links:t.links}),t.destroy()},RPL_INFO:function(e,n){var t=n.cache("info");t.info||(t.info=""),t.info+=e.params[e.params.length-1]+"\n"},RPL_ENDOFINFO:function(e,n){var t=n.cache("info");n.emit("info",{info:t.info,tags:e.tags}),t.destroy()},RPL_HELPSTART:function(e,n){n.cache("help").help=e.params[e.params.length-1]+"\n"},RPL_HELPTXT:function(e,n){n.cache("help").help+=e.params[e.params.length-1]+"\n"},RPL_ENDOFHELP:function(e,n){var t=n.cache("help");n.emit("help",{help:t.help,tags:e.tags}),t.destroy()},BATCH:function(e,n){var t="+"===e.params[0].substr(0,1),a=e.params[0].substr(1),r="batch."+a;if(a){if(t){var s=n.cache(r);return s.commands=[],s.type=e.params[1],void(s.params=e.params.slice(2))}if(n.hasCache(r)){var o=n.cache(r),i={id:a,type:o.type,params:o.params,commands:o.commands};o.destroy(),n.emit("batch start",i),n.emit("batch start "+i.type,i),i.commands.forEach((function(e){return n.executeCommand(e)})),n.emit("batch end",i),n.emit("batch end "+i.type,i)}}}};function s(e){var n=e.cache("chanlist");return n.channels||(n.channels=[]),n}e.exports=function(e){a.each(r,(function(n,t){e.addHandler(t,n)}))}},5695:(e,n,t)=>{"use strict";t(1646),t(7228),t(7441),t(2070),t(288),t(2609),t(5298),t(4458),t(4334),t(6394),t(2322),t(4669),t(5017),t(3296),t(9268);var a=t(4002),r={intersection:t(9524),difference:t(6677),each:t(6270),uniq:t(4849)},s={RPL_WELCOME:function(e,n){var t=e.params[0];n.network.server=e.prefix,n.network.cap.negotiating=!1,n.network.cap.isEnabled("server-time")&&n.connection.write("PING "+Date.now()),n.emit("registered",{nick:t,tags:e.tags})},RPL_YOURHOST:function(e,n){var t=(e.params[1]||"").match(/running version (.*)$/);n.network.ircd=t?t[1]:""},RPL_ISUPPORT:function(e,n){var t,r,s,o,i=e.params;for(t=1;t<i.length;t++)if((r=a.splitOnce(i[t],"="))[0]=r[0].toUpperCase(),n.network.options[r[0]]=void 0===r[1]||r[1],"PREFIX"===r[0]){if((s=/\(([^)]*)\)(.*)/.exec(r[1]))&&3===s.length)for(n.network.options.PREFIX=[],o=0;o<s[2].length;o++)n.network.options.PREFIX.push({symbol:s[2].charAt(o),mode:s[1].charAt(o)})}else"CHANTYPES"===r[0]?n.network.options.CHANTYPES=n.network.options.CHANTYPES.split(""):"STATUSMSG"===r[0]?n.network.options.STATUSMSG=n.network.options.STATUSMSG.split(""):"CHANMODES"===r[0]?n.network.options.CHANMODES=r[1].split(","):"NETWORK"===r[0]?n.network.name=r[1]:"NAMESX"!==r[0]||n.network.cap.isEnabled("multi-prefix")||n.connection.write("PROTOCTL NAMESX");n.emit("server options",{options:n.network.options,cap:n.network.cap.enabled,tags:e.tags})},CAP:function(e,n){var t=[],a=Object.create(null),s=e.params[e.params.length-1].replace(/(?:^| )[-~=]/,"").split(" ").map((function(e){var n=e.indexOf("=");if(-1===n)return a[e]="",e;var t=e.substr(0,n),r=e.substr(n+1);return a[t]=r,t})),i=["cap-notify","batch","multi-prefix","message-tags","draft/message-tags-0.2","away-notify","invite-notify","account-notify","account-tag","server-time","userhost-in-names","extended-join","znc.in/server-time-iso","znc.in/server-time"];switch((o(n)||"EXTERNAL"===n.connection.options.sasl_mechanism)&&i.push("sasl"),n.connection.options.enable_chghost&&i.push("chghost"),n.connection.options.enable_setname&&i.push("setname"),n.connection.options.enable_echomessage&&i.push("echo-message"),i=r.uniq(i.concat(n.request_extra_caps)),e.params[1]){case"LS":(t=r.intersection(s,i)).length>0&&(n.network.cap.requested=n.network.cap.requested.concat(t)),"*"!==e.params[2]&&(n.network.cap.requested.length>0?(n.network.cap.negotiating=!0,n.connection.write("CAP REQ :"+n.network.cap.requested.join(" "))):(n.connection.write("CAP END"),n.network.cap.negotiating=!1));break;case"ACK":s.length>0&&(n.network.cap.enabled=r.uniq(n.network.cap.enabled.concat(s)),n.network.cap.requested=r.difference(n.network.cap.requested,s)),n.network.cap.negotiating&&(n.network.cap.isEnabled("sasl")?"string"==typeof n.connection.options.sasl_mechanism?n.connection.write("AUTHENTICATE "+n.connection.options.sasl_mechanism):n.connection.write("AUTHENTICATE PLAIN"):0===n.network.cap.requested.length&&(n.connection.write("CAP END"),n.network.cap.negotiating=!1));break;case"NAK":s.length>0&&(n.network.cap.requested=r.difference(n.network.cap.requested,s)),n.network.cap.negotiating&&0===n.network.cap.requested.length&&(n.connection.write("CAP END"),n.network.cap.negotiating=!1);break;case"LIST":break;case"NEW":t=[];for(var c=0;c<s.length;c++){var m=s[c];i.indexOf(m)>-1&&-1===t.indexOf(m)&&!n.network.cap.isEnabled(m)&&(n.network.cap.requested.push(m),t.push(m))}n.connection.write("CAP REQ :"+t.join(" "));break;case"DEL":n.network.cap.enabled=r.difference(n.network.cap.enabled,s)}n.emit("cap "+e.params[1].toLowerCase(),{command:e.params[1],capabilities:a})},AUTHENTICATE:function(e,n){if("+"===e.params[0])if("EXTERNAL"!==n.connection.options.sasl_mechanism){for(var t=o(n),a=t.account+"\0"+t.account+"\0"+t.password,r=Buffer.from(a,"utf8").toString("base64");r.length>=400;)n.connection.write("AUTHENTICATE "+r.slice(0,399)),r=r.slice(399);r.length>0?n.connection.write("AUTHENTICATE "+r):n.connection.write("AUTHENTICATE +")}else n.connection.write("AUTHENTICATE +");else n.network.cap.negotiating&&(n.connection.write("CAP END"),n.network.cap.negotiating=!1)},RPL_LOGGEDIN:function(e,n){!0===n.network.cap.negotiating&&(n.connection.write("CAP END"),n.network.cap.negotiating=!1);var t=a.parseMask(e.params[1]),r=e.getServerTime();n.emit("loggedin",{nick:e.params[0],ident:t.user,hostname:t.host,account:e.params[2],time:r,tags:e.tags}),n.emit("account",{nick:e.params[0],ident:t.user,hostname:t.host,account:e.params[2],time:r,tags:e.tags})},RPL_LOGGEDOUT:function(e,n){var t=a.parseMask(e.params[1]),r=e.getServerTime();n.emit("loggedout",{nick:e.params[0],ident:t.user,hostname:t.host,account:!1,time:r,tags:e.tags}),n.emit("account",{nick:e.params[0],ident:t.user,hostname:t.host,account:!1,time:r,tags:e.tags})},RPL_SASLLOGGEDIN:function(e,n){!0===n.network.cap.negotiating&&(n.connection.write("CAP END"),n.network.cap.negotiating=!1)},ERR_SASLNOTAUTHORISED:function(e,n){n.network.cap.negotiating&&(n.connection.write("CAP END"),n.network.cap.negotiating=!1)},ERR_SASLABORTED:function(e,n){n.network.cap.negotiating&&(n.connection.write("CAP END"),n.network.cap.negotiating=!1)},ERR_SASLALREADYAUTHED:function(e,n){}};function o(e){var n=e.connection.options;return n.account&&n.account.account?{account:n.account.account,password:n.account.password||""}:n.account?null:n.password?{account:n.nick,password:n.password}:null}e.exports=function(e){r.each(s,(function(n,t){e.addHandler(t,n)}))}}}]);
//# sourceMappingURL=892.js.map