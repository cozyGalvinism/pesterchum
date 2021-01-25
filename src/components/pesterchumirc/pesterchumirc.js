import Vue from 'vue'
import IRCCommands from './commands'
import { isNumeric } from '../../utils'
import { numericEvents } from './ircevents'

const PesterchumIRC = {
    ircClient: null,
    install(Vue, options) {
        if(!Vue.irc) {
            this.connection = null
            this.server = null
            this.nick = null
            this.modes = []

            Vue.irc = this
            Vue.prototype.$irc = Vue.irc
        }
    },
    connect(options) {
        this.server = options.server
        this.nick = options.nick
        this.mood = 0

        console.log("Connecting to pesterchum server " + this.server)
        // TODO: Make this configurable
        this.connection = new WebSocket("wss://ircgw.galvinism.ink/webirc/websocket/")
        this.connection.onmessage = this.rawOnMessage
        this.connection.onopen = this.rawOnConnected
        this.connection.onclose = this.rawOnClose
        this.connection.onerror = this.rawOnError
    },
    send(data) {
        console.log("---> send: \"" + data + "\"")
        this.connection.send(data)
    },
    rawOnMessage(event) {
        console.log("---> recv: \"" + event.message + "\"")
        var parsed = this.parseRawIrcCommand(event.message)
        if (!parsed) console.error("Incomplete message received: " + event.message)
        var prefix = parsed.prefix
        if (prefix) {
            prefix = this.parseNick(prefix)
        }
        if (parsed.command.toLowerCase() in IRCCommands) {
            IRCCommands[parsed.command.toLowerCase()](prefix, ...parsed.params)
        } else {
            console.error("Unknown command: " + parsed.raw)
        }
    },
    rawOnConnected(event) {
        var nickCmd = "NICK " + this.nick
        var userCmd = "USER pcc31 " + this.server + " " + this.server + " pcc31"
        this.send(nickCmd)
        this.send(userCmd)

        // TODO: Send message to user list
    },
    rawOnClose(event) {

    },
    rawOnError(event) {
        
    },
    parseRawIrcCommand(data) {
        var message = {
            raw: data,
            prefix: null,
            command: null,
            params: []
        }
    
        var parts = data.trim().split()
        if (parts[0].startsWith(":")) {
            message.prefix = parts[0].slice(1)
            message.command = parts[1]
            message.params = parts.slice(2)
        } else {
            message.command = parts[0]
            message.params = parts.slice(1)
        }

        if (isNumeric(message.command)) {
            if (message.command in numericEvents) message.command = numericEvents[message.command]
        }
        message.command = message.command.toLowerCase()

        if(message.params[0].startsWith(":")) {
            message.params = message.params.slice(1).join(" ")
        } else {
            for (let i = 0; i < message.params.length; i++) {
                const element = message.params[i];
                if(element.startsWith(":")) {
                    message.params = message.params.slice(0, i).concat(message.params.slice(i).join(" ").slice(1))
                    break
                }
            }
        }
        
        return message
    },
    parseNick(name) {
        var nickObject = {
            raw: name,
            nick: '',
            mode: null,
            user: null,
            host: null
        }
        var nickSplit = name.split("!")
        if (nickSplit.length == 1) {
            nickObject.nick = name
            return nickObject
        }
        nickObject.nick = nickSplit[0]
        var rest = nickSplit[1]
        var modeSplit = rest.split("=")
        if (modeSplit.length == 1) {
            rest = modeSplit[0]
        } else {
            nickObject.mode = modeSplit[0]
            rest = modeSplit[1]
        }
        var hostSplit = rest.split("@")
        if (hostSplit.length == 1) {
            nickObject.user = hostSplit[0]
        } else {
            nickObject.user = hostSplit[0]
            nickObject.host = hostSplit[1]
        }

        return nickObject
    }
}
export default PesterchumIRC