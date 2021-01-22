import Vue from 'vue'
import { Moods } from './moods'
import { rgbToHex } from '../../utils'

const IRCCommands = {
    nicknameinuse(user, server, cmd, nick, msg) {
        // Set nickname to something unique!
        var newNick = Vue.$irc.nick + Math.floor(Math.random() * (999-100+1)+100)
        // Vue.$irc.nickCollision(nick, newNick)
    },
    kick(opUser, channel, nick, reason) {
        var op = opUser.nick
        // Vue.$irc.userPresentUpdate(nick, channel, "kick:" + op + ":" + reason)
    },
    mode(opUser, channel, mode, ...handles) {
        if (handles.length <= 0) handles = [""]
        opNick = op.nick
        var modes = []
        if (op.raw == channel || channel == Vue.$irc.nick) {
            modes = [...Vue.$irc.modes]
            if (modes.length > 0 && modes[0] == "+") modes = modes.slice(1)
            if (mode.charAt(0) == "+") {
                for(var i = 1; i < mode.length; i++) {
                    var char = mode.charAt(i)
                    if (!modes.includes(char)) modes.push(char)
                }
            } else if (mode.charAt(0) == "-") {
                for(var i = 1; i < mode.length; i++) {
                    var char = mode.charAt(i)
                    if (modes.indexOf(char) !== -1) modes = modes.splice(modes.indexOf(char), 1)
                }
            }
            modes = modes.sort()
            Vue.$irc.modes = "+" + modes.join("")
        }
        modes = []
        var cur = "+"
        for(var i = 0; i < mode.length; i++) {
            var l = mode.charAt(i)
            if (l in ["+", "-"]) cur = l
            else {
                modes.push(cur + l)
            }
        }
        for(var i = 0; i < modes.length; i++) {
            var m = modes[i]
            if (handles.length > i) {
                // Vue.$irc.userPresentUpdate(handles[i], channel, m+":"+op.raw)
            } else {
                // Vue.$irc.userPresentUpdate("", channel, m+":"+op.raw)
            }
        }
    },
    notice(nick, chan, msg, ...args) {
        var handle = nick.nick
        if (handle.toLowerCase() == "chanserv" && chan == Vue.$irc.nick && msg.startsWith("[#")) {
            // Vue.$irc.memoReceived(msg.slice(1, msg.indexOf("]")), handle, msg)
        } else {
            // Vue.$irc.noticeReceived(handle, msg)
        }
    },
    ping(user, chan, ...args) {
        var sendMessage = "PONG :" + chan
        Vue.$irc.send(sendMessage)
    },
    join(user, chan, ...args) {
        // Vue.$irc.userPresentUpdate(user.nick, chan, "join")
        if (chan == "#pesterchum") {
            // Check if user is in friends
            // true:
            // Vue.$irc.moodUpdated(user.nick, Moods.chummy)
        }
    },
    part(user, chan, ...args) {
        // Vue.$irc.userPresentUpdate(user.nick, chan, "left")
        if (chan == "#pesterchum") {
            // Check if user is in friends
            // true:
            // Vue.$irc.moodUpdated(user.nick, Moods.offline)
        }
    },
    quit(user, reason) {
        var server = Vue.$irc.server
        // Vue.$irc.userPresentUpdate(user.nick, "", "quit")
        // Vue.$irc.moodUpdated(user.nick, Moods.offline)
    },
    privmsg(user, chan, msg) {
        var message = msg

        if (message.length == 0) return

        if (message.startsWith("\x01")) {
            // Silently ignore CTCP
            if (message.endsWith("VERSION")) {
                // Send CTCP reply
                // Vue.$irc.sendCTCP(user.nick, "VERSION", "Pesterchum 4.13")
            } else if (message.endsWith("NOQUIRKS") && chan.startsWith("#")) {
                // Disable quirks, because operator said so
                // message.slice(10, message.length-1)
                // Vue.$irc.quirkDisable(chan, message.slice(10, message.length-1), user.nick)
            }
            return
        }

        if (chan == "#pesterchum") {
            if (message.includes("GETMOOD") && message.includes(Vue.$irc.nick)) {
                // Someone is asking us for our mood
                // Don't be awkward...
                // Vue.$irc.sendMsg({message: "MOOD >" + Vue.$irc.mood, target: "#pesterchum"})
            } else if (message.startsWith("MOOD >")) {
                var mood = message.slice(6)
                mood = mood.trim()
                mood = Number(mood)
                // Vue.$irc.moodUpdated(user.nick, mood)
            }
        } else if (chan.startsWith("#")) {
            if (message.startsWith("PESTERCHUM:TIME>")) {
                // Vue.$irc.timeCommand(chan, user.nick, message.split(">")[1])
                return
            }
            // TODO: Send memo notification
        } else {
            if (message.includes("COLOR >")) {
                var colors = message.slice("COLOR >".length).split(",")
                colors = colors.map((i) => Number(i))
                // Vue.$irc.colorUpdated(user.nick, rgbToHex(...colors))
            } else {
                // Vue.$irc.messageReceived(user.nick, msg)
            }
        }
    },
    welcome(user, chan, ...args) {
        // Vue.$irc.join("#pesterchum")
        // Vue.$irc.sendMsg({message: "MOOD >" + Vue.$irc.mood, target: "#pesterchum"})
        // Vue.$irc.setMode(user.nick, "-T")
    },
    namreply(user, chan, ...args) {
        try {
            var channel = args[args.length-2] // why tho
            // Check if channel is not in names list
            // True:
            // Initialize list for channel name
            var names = args[args.length-1].split()
            // Vue.$irc.namesList[channel].push(...names)
        } catch (error) {
            console.error("An error ocurred while handling namreply: " + error)
        }
    },
    endofnames(user, chan, ...args) {
        if (args[args.length-2] == "#pesterchum") {
            // Vue.$irc.getFriendsMoods()
        } else {
            // Vue.$irc.memoAddNames(args[args.length-2])
        }
    },
    liststart(server, handle, ...info) {
        // Vue.$irc.channelField = info.indexOf("Channel")
        // Vue.$irc.channelList = {}
    },
    list(server, handle, ...info) {
        var channel = info[Vue.$irc.channelField]
        if (channel != "#pesterchum") {
            var ucount = Number(info[1])
            // Vue.$irc.channelList[channel] = ucount
            // Vue.$irc.receiveList(channel, ucount)
        }
    }
}

export default IRCCommands